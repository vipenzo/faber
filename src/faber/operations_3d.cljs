(ns faber.operations-3d
  (:require ["three" :as three]
            ["three-js-csg" :as csg]))


(def ThreeBSP (csg three))

(def default-material (three/MeshPhongMaterial. (clj->js {:ambient 0x050505, :color 0x0033ff, :specular 0x555555, :shininess 30})))

(def pi Math/PI)
(def tau (* 2 pi))

(def ^:dynamic *fa* false)
(def ^:dynamic *fn* false)
(def ^:dynamic *fs* false)

(defn with-fn [x f]
  (binding [*fn* x] (f)))

(defn with-fa [x f]
  (binding [*fa* x] (f)))

(defn with-fs [x f]
  (binding [*fs* x] (f)))

(defn cube [x y z]
  (three/Mesh. (three/BoxGeometry. x y z) default-material))

(defn calc-number-of-segments [radius]
  (cond
    *fn* (max *fn* 3)
    *fa* (max (/ 360 *fa*) 3)
    *fs* (max (Math/ceil (/ tau (Math/asin (/ *fs* radius)))) 3)
    :default  8
    )
  )

(defn sphere [radius]
  (println "Sphere radius=" radius)
  (let [segs (calc-number-of-segments radius)]
    (println "segs=" segs)
    (three/Mesh. (three/SphereGeometry. radius segs segs) default-material)))

(defn translate [mesh x y z]
  (set! (.-x (.-position mesh)) x)
  (set! (.-y (.-position mesh)) y)
  (set! (.-z (.-position mesh)) z)
  mesh)

(defn scale [mesh x y z]
  (set! (.-x (.-scale mesh)) x)
  (set! (.-y (.-scale mesh)) y)
  (set! (.-z (.-scale mesh)) z)
  mesh)

(defn rotatec [mesh x y z]
  (set! (.-x (.-rotation mesh)) x)
  (set! (.-y (.-rotation mesh)) y)
  (set! (.-z (.-rotation mesh)) z)
  mesh)

(defn rotatev [mesh a x y z]
  (set! (.-x (.-rotation mesh)) (* a x))
  (set! (.-y (.-rotation mesh)) (* a y))
  (set! (.-z (.-rotation mesh)) (* a z))
  mesh)

(defn csg-op
  ([f mesh_a mesh_b]
   (let [csg_a (ThreeBSP. mesh_a)
         csg_b (ThreeBSP. mesh_b)
         csg_res (f csg_a csg_b)
         res (.toMesh csg_res default-material)]
     (.computeVertexNormals (. res -geometry))
     res))
  ([op & meshes]
   (println "csg-op meshes=" meshes " (and (seq? meshes) (> 1 (count meshes)))=" (and (seq? meshes) (> 1 (count meshes))))
   (cond
     (and (seq? meshes) (> 1 (count meshes))) (reduce (fn [a b] (csg-op f a b)) meshes)
     (seq? meshes) (first meshes)
     :default meshes)))

(defn difference [& args]
  (apply csg-op (fn [a b] (.subtract a b))  args))

(defn intersection [& args]
  (apply csg-op (fn [a b] (.intersect a b))  args))

(defn union [& args]
  (apply csg-op (fn [a b] (.union a b))  args)
  )