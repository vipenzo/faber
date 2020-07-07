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

(def ThreeBSP (csg three))

(defn is3dmodel? [value] (:3dmodel value))

(defonce context (atom {}))
(defonce faber-scene (atom {}))

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
  (let [{:keys [:cube :sphere]} @faber-scene
        ;{:keys [:stats]} @context
        ]
    ;(println "@faber-scene" @faber-scene)
    ;(aset cube "rotation" "y" (+ 0.01 (.-y (.-rotation cube))))
    ;(aset cube "rotation" "x" (+ 0.02 (.-x (.-rotation cube))))
    ;
    (comment aset sphere "position" "y"
             (let [np (+ 0.01 (.-y (.-position sphere)))]
               (if (< 2.5 np)
                 -2.5
                 np)))
    (.requestAnimationFrame js/window animate)
    (render)
    ;(.update stats)
    ))


(def default-material (three/MeshPhongMaterial. (clj->js {:ambient 0x050505, :color 0x0033ff, :specular 0x555555, :shininess 30})))

(defn apply-params [mesh {:keys [size position rotation scale] :or {size [1 1 1] position [0 0 0] rotation [0 0 0] scale [1 1 1]}}]
  mesh)

(declare obj->mesh)

(defn make-cube [{:keys [size] :or {size [1 1 1]}}]
  (let [[w h d] size]
    (three/Mesh. (three/BoxGeometry. w h d) default-material)))

(defn make-sphere [{:keys [radius wsegs hsegs] :or {radius 1 wsegs 8 hsegs 6}}]
  (three/Mesh. (three/SphereGeometry. radius wsegs hsegs) default-material))



(defn make-difference [obj_a obj_b]
  (let [mesh_a (obj->mesh obj_a)
        mesh_b (obj->mesh obj_b)
        csg_a (ThreeBSP. mesh_a)
        csg_b (ThreeBSP. mesh_b)
        csg_diff (.subtract csg_a csg_b)
        diff (.toMesh csg_diff default-material)]
    (.computeVertexNormals (. diff -geometry))
    diff))

(defn obj->mesh [[primitive & params]]
  (let [mesh (case primitive
               :cube (apply make-cube params)
               :sphere (apply make-sphere params)
               :difference (apply make-difference params)
               )]
    (apply-params mesh params)
    mesh)
  )


(defn create-scene [model]
  (let [{:keys [:scene]} @context
        user-scene model
        ]
    (when user-scene
      ;(println "user-scene" user-scene)
      (.add scene (obj->mesh user-scene))
      (reset! faber-scene user-scene))
    )
  ;(re-frame/dispatch [:app.events/scene-changed])
  (animate))



(defview canvas3d
         {:key             (fn [_ model] model)
          :view/did-mount  (fn [this _]
                             (let [canvas (v/dom-node this)]
                               (init-context canvas)
                               (create-scene (:3dmodel this))
                               ))
          :view/did-update (fn [this]
                             (println "did update:" (:view/props this))
                             (create-scene (:3dmodel (:view/props this)))
                             )}
         [_]
         [:canvas#canvas3d.w-100.h-100]                     ;{:style {:display "none"}}
         )