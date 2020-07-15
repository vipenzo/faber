(ns faber.canvas3d
  (:require ["three" :as three]
            ["three-orbitcontrols" :as orbit :refer [OrbitControls]]
            ["three-js-csg" :as csg]
            ["threejs-export-stl" :as exportSTL]
            ["file-saver"  :refer [saveAs]]
            [re-view.core :as v :refer [defview]]
            [re-view.hiccup.core :refer [element]]
            [re-db.d :as d]))

(.log js/console "three=" three)


(defn is3dmodel? [value] (:3dmodel value))

(defonce context (atom {}))
(defonce faber-scene (atom {}))

(defn new-scene []
  (let [
        scene (three/Scene.)
        light (three/DirectionalLight. 0xffffff)
        ambient-light (three/AmbientLight. 0x90F020)
        ]

    (set! (.. light -position -x) 200)
    (set! (.. light -position -y) 50)
    (set! (.. light -position -z) 100)
    (.normalize (. light -position))
    (.add scene light)
    (.add scene ambient-light)

    (swap! context #(-> %
                        (assoc :scene scene)
                        (assoc :light light)
                        (assoc :ambient-light ambient-light)
                        ))))


(defn init-context [canvas]
  (let [width (.-offsetWidth canvas)
        height (.-offsetHeight canvas)
        scene (three/Scene.)
        camera (three/PerspectiveCamera. 75 (/ width height) 0.1 1000)
        ;stats (st)
        renderer (three/WebGLRenderer. (clj->js {:canvas canvas}))
        ;_ (.appendChild (.getElementById js/document "stats") (. stats -dom))
        light (three/DirectionalLight. 0xffffff)
        ambient-light (three/AmbientLight. 0x90F020)
        controls (orbit. camera (. renderer -domElement))
        ]

    (.setSize renderer width height)
    (set! (.. camera -position  -z) 5)

    (set! (.. light -position -x) 200)
    (set! (.. light -position -y) 50)
    (set! (.. light -position -z) 100)
    (.normalize (. light -position))
    (.add scene light)
    (.add scene ambient-light)

    ;(.addEventListener controls "change" (fn [] (.log js/console "Controls Change")))
    (reset! context {
                     ;:stats stats
                     :canvas canvas
                     :width width
                     :height height
                     :scene scene
                     :camera camera
                     :renderer renderer
                     :light light
                     :ambient-light ambient-light
                     :controls controls
                     })
    ))

(defn render []
  (let [{:keys [:scene :renderer :camera]} @context]
    ;(.begin stats)
    (.render renderer scene camera)
    ;(.end stats)
    ))

(defn animate []
  ;(println "@faber-scene" @faber-scene)
  ;(aset cube "rotation" "y" (+ 0.01 (.-y (.-rotation cube))))
  ;(aset cube "rotation" "x" (+ 0.02 (.-x (.-rotation cube))))
  ;
  (.requestAnimationFrame js/window animate)
  (render)
  ;(.update stats)
  )

(comment
  (def default-material (three/MeshPhongMaterial. (clj->js {:ambient 0x050505, :color 0x0033ff, :specular 0x555555, :shininess 30})))

  (defn apply-params [mesh {:keys [size position rotation scale]
                            :or   {size     [1 1 1]
                                   position [0 0 0]
                                   rotation [0 0 0]
                                   scale    [1 1 1]}}]
    mesh))



#_(defn make-cube [{:keys [size] :or {size [1 1 1]}}]
  (let [[w h d] size]
    (three/Mesh. (three/BoxGeometry. w h d) default-material)))

#_(defn make-sphere [{:keys [radius wsegs hsegs] :or {radius 1 wsegs 8 hsegs 6}}]
  (three/Mesh. (three/SphereGeometry. radius wsegs hsegs) default-material))



#_(defn make-difference [obj_a obj_b]
  (let [mesh_a (obj->mesh obj_a)
        mesh_b (obj->mesh obj_b)
        csg_a (ThreeBSP. mesh_a)
        csg_b (ThreeBSP. mesh_b)
        csg_diff (.subtract csg_a csg_b)
        diff (.toMesh csg_diff default-material)]
    (.computeVertexNormals (. diff -geometry))
    diff))

#_(defn clear-scene []
  (swap! context assoc :scene (three/Scene.)))

#_(defn add-mesh [mesh]
  (let [{:keys [:scene]} @context]
    (when mesh
      (.add scene mesh))))

(defn make-stl-blob []
  (println "Make stl blob")
  (if-let [mesh (:mesh @context)]
    (let [_ (println "make-stl mesh=" mesh)
          stl (.fromMesh exportSTL mesh)
          blob (js/Blob. (js/Array. stl) {:type "text/plain"})]
      (let [toolbar (d/get :faber :stlbutton)]
        (println "update toolbar")
        (swap! (:view/state toolbar) assoc :stl-blob blob))


      ;(set! (.-href lnk) (.createObjectURL js/URL blob))
      ;(set! (.-download lnk) @filename)

      )))


(defn create-scene [mesh]
  (println "create-scene mesh=" mesh)
  (new-scene)
  (let [{:keys [:scene]} @context]
    (when mesh
      (println "create scene" mesh)
      ;(.add scene (three/Mesh. (three/BoxGeometry. 1 1 1) default-material))
      (swap! context assoc :mesh mesh)
      (make-stl-blob)
      (.add scene mesh)
      ))
  (animate))



(defview canvas3d
         {
          :view/did-mount  (fn [this _]
                             (let [canvas (v/dom-node this)]
                               (println "canvas3d did-mount. " (:view/state this))
                               (init-context canvas)
                               ;(create-scene (:3dmodel (:view/props this)))
                               ))
          :view/did-update (fn [this]
                             (println "did update:" (:view/props this))
                             (create-scene (:3dmodel (:view/props this)))
                             )}
         []
         [:canvas#canvas3d.w-100.h-100]                     ;{:style {:display "none"}}
         )


