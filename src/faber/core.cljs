(ns faber.core
  (:require
    ;; evaluate
    [cljs.js :as cljs]
    ["codemirror" :refer [fromTextArea] :as codemirror]
    [shadow.cljs.bootstrap.browser :as boot]

    ;; view
    [re-view.core :as v :refer [defview]]
    [re-view.hiccup.core :refer [element]]


    ;; things to eval and display
    [lark.value-viewer.core :as views]
    [re-db.d :as d]
    [re-db.patterns :as patterns]
    [cells.cell :as cell]
    [shapes.core :as shapes]
    [thi.ng.geom.svg.core :as svg]

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

;; Views
(defview model-editor
         {:key                (fn [_ source] source)
          :view/initial-state (fn [_ source]
                                {:model-source source})
          :view/did-mount     (fn [this source]
                                (let [textarea (.getElementById js/document "codearea")]
                                  (.log js/console "textarea:" textarea)
                                  (fromTextArea textarea #js {
                                                                                                :lineNumbers true,
                                                                                                :mode        "clojure"
                                                                                                })
                                  (eval-str source (partial swap! (:view/state this) assoc :result))))}
         [{:keys [:view/state]}]
         (let [{:keys [model-source result]} @state]
           [:div.bg-near-white.h-100.flex
            [:textarea#codearea.h-100.w-50.f6.bg-near-white.monospace
               {:value     (:model-source @state)
                :style     {:height (str (+ 1.75 (* 1.3125 (count (re-seq #"\n|\r\n" model-source)))) "rem")}
                :on-change #(let [source (.. % -target -value)]
                              (println "source:" source)
                              (swap! state assoc :model-source source)
                              (let [res (eval-str source (partial swap! state assoc :result))]
                                (println "res:" res)
                                res))}]
            (let [{:keys [error value]} result]
              [:.w-50
               (if error (element [:.pa3.bg-washed-red
                                   [:.b (ex-message error)]
                                   [:div (str (ex-data error))]
                                   (pr-str (ex-cause error))
                                   ])
                         [:.pa3 (views/format-value value)])])]))


(defview main-page
  "Root view for the page"
  []
  (if-not (d/get ::eval-state :ready?)
    "Loading..."
    [:div.h-100
     [:h1 "Faber"]
     [:div.monospace.f6.h-75
      (model-editor "(+ 4 5)")
      [:div.h-25
       [:h2 "Save STL"]]
      ]]))

(defonce _
         (boot/init c-state
                    {:path         "/js/bootstrap"
                     :load-on-init '#{faber.user }}
                    (fn []
                      (d/transact! [[:db/add ::eval-state :ready? true]]))))

(defn render []
  (.log js/console "codemirror:" fromTextArea)
  (v/render-to-dom (main-page) "faber"))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Protocol extensions to enable rendering of cells and shapes

(extend-type cells.cell/Cell
  cells.cell/ICellStore
  (put-value! [this value]
    (d/transact! [[:db/add :cells (name this) value]]))
  (get-value [this]
    (d/get :cells (name this)))
  (invalidate! [this]
    (patterns/invalidate! d/*db* :ea_ [:cells (name this)]))
  lark.value-viewer.core/IView
  (view [this] (cells.cell/view this)))

(extend-protocol lark.value-viewer.core/IView
  Var
  (view [this] (@this)))

(extend-type shapes/Shape
  re-view.hiccup.core/IEmitHiccup
  (to-hiccup [this] (shapes/to-hiccup this)))

(extend-protocol cells.cell/IRenderHiccup
  object
  (render-hiccup [this] (re-view.hiccup.core/element this)))