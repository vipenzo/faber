(ns faber.core
  (:require
    ;; evaluate
    [cljs.js :as cljs]
    ["codemirror" :refer [fromTextArea] :as codemirror]
    ["codemirror/mode/clojure/clojure"]
    ["codemirror/addon/edit/closebrackets"]
    ["codemirror/addon/edit/matchbrackets"]
    ["parinfer-codemirror" :as parinfer]
    [shadow.cljs.bootstrap.browser :as boot]

    ;; view
    [re-view.core :as v :refer [defview]]
    [re-view.hiccup.core :refer [element]]

    [faber.canvas3d :refer [canvas3d is3dmodel?]]
    ;; things to eval and display
    ;[lark.value-viewer.core :as views]
    [re-db.d :as d]
    [re-db.patterns :as patterns]
    ;[cells.cell :as cell]
    ;[shapes.core :as shapes]
    ;[thi.ng.geom.svg.core :as svg]
    ;[thi.ng.geom.mesh.csg :as csg]

    [faber.model :as m]
    [faber.threejs-scene :refer [model]]

    [clojure.string :as string]))


;; Source text to eval

(def source-examples ["(circle 40)"
                      "(for [n (range 10)] n)"
                      "(defcell x 10)"
                      "(defcell counter (interval 1000 inc))"
                      "(defcell bigger-counter (* @counter 10))"
                      "(require '[cljs.js :as cljs])\n\n(fn? cljs/eval-str)"])

;; Set up eval environment

(defonce c-state (cljs/empty-state))

(defn eval-str [source cb]
  (cljs/eval-str
    c-state
    source
    "[test]"
    {:eval cljs/js-eval
     :load (partial boot/load c-state)
     :ns   (symbol "faber.user")}
    cb))

(defn format-value [value]
  (str value))

(defn visible-pane? [visible]
  {:style {:display (if visible "block" "none")}})

(defview error-pane
         [{{:keys [visible value]} :view/props}]

         (println "render error-pane visible=" visible " value=" value)
         [:div (visible-pane? visible)
          (if (instance? js/Error (:error value))
            (element [:.pa3.bg-washed-red
                      [:.b (ex-message (:error value))]
                      [:div (str (ex-data (:error value)))]
                      (pr-str (ex-cause (:error value)))
                      ])
            [:p (str "Error: " value)])])

(defview result-pane
         [{{:keys [visible value]} :view/props}]
         (println "render result-pane visible=" visible " value=" value)
         (element [:.pa3.bg-washed-green (visible-pane? visible)
                   [:b "Result:"]
                   [:.pa3 (format-value value)]]))

(defview canvas3d-pane
         [{{:keys [visible value]} :view/props}]
         (println "render 3d-pane visible=" visible " value=" value)
         [:div (visible-pane? visible)
          (println "(:3Dmodel value)=" (:3dmodel value))
          (canvas3d value)]
         )
;; Views
(defview model-editor
         {:key                (fn [_ source] source)
          :view/initial-state (fn [_ source]
                                {:model-source source})
          :view/did-mount     (fn [this source]
                                (let [textarea (.getElementById js/document "codearea")
                                      codearea (fromTextArea textarea #js {:lineNumbers       true
                                                                           :viewportMargin    js/Infinity
                                                                           :matchBrackets     true
                                                                           :closebrackets     true
                                                                           :autofocus         true
                                                                           :autoCloseBrackets true
                                                                           :mode              "clojure"
                                                                           })]
                                  (.init parinfer codearea)
                                  (d/transact! [[:db/add :editor :codearea codearea]])
                                  ;(d/transact! [[:db/add :editor :result-set-fn (partial swap! (:view/state this) assoc :result)]])
                                  (eval-str source (partial swap! (:view/state this) assoc :result))))}
         [{:keys [:view/state]}]
         (let [{:keys [model-source result]} @state]
           [:textarea#codearea.f6.bg-near-white.monospace
            (:model-source @state)]
           ))


(defview right-pane
         {:view/initial-state (fn [_]
                                {:current :3d
                                 :value   "press Run"})
          :view/did-mount     (fn [this]
                                (d/transact! [[:db/add :faber :right-pane this]])
                                )}
         [{:keys [:view/state]}]
         (let [current (:current @state)
               value (:value @state)
               make-pane-value (fn [kind]
                                 {:visible (= current kind) :value value})]
           (println "render right-pane" "current=" current "value=" value)
           [:div
            (canvas3d-pane (make-pane-value :3d))
            (result-pane (make-pane-value :result))
            (error-pane (make-pane-value :error))]
           )
         )

(defn parse-result [res]
  (let [[kind value] (cond
                       (:error res) [:error res]
                       (:3dmodel (:value res)) [:3d (:value res)]
                       true [:result (:value res)])
        right-pane (d/get :faber :right-pane)]
    (println "value=" value " kind=" kind)

    (swap! (:view/state right-pane)
           (fn [m]
             (-> m
                 (assoc :value value)
                 (assoc :current kind))))
    ;(v/flush!)
    ))


(defn compile []
  (let [codearea (d/get :editor :codearea)
        code (.getValue codearea)]
    (.log js/console "Value:" code)
    (eval-str code (fn [res]
                     (parse-result res)
                     ;(create-scene (get-in res [:value :3dmodel]) )
                     ))
    ))

(defview toolbar []
         [:div.mb5
          [:a.f6.link.dim.ba.bw1.ph3.pv2.mb2.dib.purple {:on-click (fn [] (compile))} "Run"]
          ])

#_(def example "(model (map #(m/translate [% 0 0] (m/cube 0.1 1 1)) (range 5)))")
#_(def example "(model
               (m/rotate 10 [1 0 0] (cube 1 2 3)))")
#_(def example "
  (model
    (with-fn 50
      (union
        (sphere 1)
        (cube 0.5 1 3))))")
(def example "
  (model
    (with-fn 50
      (hull
        (sphere 0.5)
        (translate [0 1 0] (cube 0.5 1 3)))))")

(defview main-page
         "Root view for the page"
         []
         (if-not (d/get ::eval-state :ready?)
           "Loading..."
           [:div.h-100
            [:h1.f1 "Faber"]
            (toolbar)
            [:div.monospace.f6.h-75
             [:div.bg-near-white.h-100.flex
              [:div.h-100.w-50
               (model-editor example)]
              [:.w-50
               (right-pane)
               #_(let [current (d/get :right-pane :current)]
                   (d/get :right-pane current))
               ]]

             [:div.h-25
              [:h2 "Save STL"]]
             ]]))

(defonce _
         (boot/init c-state
                    {:path         "/js/bootstrap"
                     :load-on-init '#{faber.user}}
                    (fn []
                      (d/transact! [[:db/add ::eval-state :ready? true]]))))

(defn render []
  #_(d/transact! [{:db/id   :right-pane
                   :current :result}])
  ;(.log js/console "codemirror:" fromTextArea)
  (v/render-to-dom (main-page) "faber"))


