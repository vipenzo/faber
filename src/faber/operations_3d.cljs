(ns faber.operations-3d
  (:require [applied-science.js-interop :as j]
            ["three" :as three]
            ["three-js-csg" :as csg]
            ["three/examples/jsm/geometries/ConvexGeometry" :as convex]))

(def ComplexGeometry (.-ConvexGeometry convex))

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
  (let [[y z] (if (or (nil? y) (nil? z))
                [x x]
                [y z])]
    (three/Mesh. (three/BoxGeometry. x y z) default-material)))

(defn calc-number-of-segments [radius]
  (cond
    *fn* (max *fn* 3)
    *fa* (max (/ 360 *fa*) 3)
    *fs* (max (Math/ceil (/ tau (Math/asin (/ *fs* radius)))) 3)
    :default  8
    )
  )

(defn hull [& args]
  (println "hull args=" args)
  (let [hull2 (fn [mesh_a mesh_b]
                (let [tmp (three/Geometry.)]
                  (.mergeMesh tmp mesh_a)
                  (.mergeMesh tmp mesh_b)
                  (.mergeVertices tmp)
                  (three/Mesh. (ComplexGeometry. (.-vertices tmp)) default-material)))]
    (cond
      (= 1 (count args)) (first args)
      :default (reduce hull2 args))))

(defn sphere [radius]
  (println "Sphere radius=" radius)
  (let [segs (calc-number-of-segments radius)]
    (println "segs=" segs)
    (three/Mesh. (three/SphereGeometry. radius segs segs) default-material)))

(defn cylinder [h bottom-r top-r]
  (let [top (if top-r
              top-r
              bottom-r)
        segs (calc-number-of-segments (max bottom-r top-r))]
    (three/Mesh. (three/CylinderGeometry. top-r bottom-r h segs) default-material)))

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

(defn v-from-js [v3]
  (let [{:keys [x y z]} (j/lookup v3)]
    [x y z]))


(defn dumpv [v]
  (let [[x y z] (map #(j/get v %) [:x :y :z])]
    (println "x=" x " y=" y " z=" z)))


(defn to-mygeo [g]
  (let [verts (j/get g :vertices)
        faces (j/get g :faces)
        normals (map (fn [face]
                          (let [vindexes (map #(j/get face %) [:a :b :c])
                                face-normals (map v-from-js (j/get face :vertexNormals))]
                            (map vector vindexes face-normals)
                            )) faces)
        vertices (mapv v-from-js verts)]


    {:vertices vertices
     :faces-and-normals normals}))

(defn collect-vertex-normals [mygeo]
  (->> (group-by first (mapcat identity (:faces-and-normals mygeo)))
       (reduce-kv (fn [m k v]
                   (assoc m k (map second v))) {})))

(defn vectors-sum [vs]
  (reduce #(mapv + %1 %2) [0 0 0] vs))

(defn vector-scalar-mult [v n]
  (mapv #(* % n) v))

(defn vector-normalize [v]
  (let [m (Math/sqrt (reduce + (map #(* % %) v)))]
    (if (zero? m)
      [0 0 0]
      (mapv #(/ % m) v))))

(defn offset-mygeo [mg r]
  (let [vertex-normals (->> (collect-vertex-normals mg)
                            (reduce-kv (fn [m k v] (assoc m k (-> (vectors-sum v)
                                                                 (vector-normalize)))) {}))
        _         (println "vertex-normals=" vertex-normals)
        updatevert (fn [v i]
                     (vec (mapv #(+ %1 %2) v (vector-scalar-mult (vertex-normals i) r))))]
    (update mg :vertices #(mapv updatevert %1 (range)))))


(comment
  (def mg (to-mygeo (j/get (cube 1 1 1) :geometry)))
  (get-in mg [:vertices 0 0])
  (update-in mg [:vertices 0 0] #(+ % 0.2))
  (mapcat identity (:faces-and-normals mg))
  (def vn (collect-vertex-normals mg))
  (def vsum (reduce-kv (fn [m k v] (assoc m k (vectors-sum v))) {} vn))
  (def vnorm (reduce-kv (fn [m k v] (assoc m k (-> (vectors-sum v)
                                                   (vector-normalize)))) {} vn))
  (def vertex-normals (->> (collect-vertex-normals mg)
                                          (reduce-kv (fn [m k v] (assoc m k (-> (vectors-sum v)
                                                                                (vector-normalize)))) {})))
  (def r 2)
  (def updatevert (fn [i v]
                    (map #(+ %1 %2) v (vector-scalar-mult (vertex-normals i) r))))
  (vector-scalar-mult (vertex-normals 0) 2)
  (updatevert 0 (first vs))
  (def vs (:vertices mg))
  (def mg2 (offset-mygeo mg 1))
  (def vs2 (:vertices mg2))
  (let [g (j/get (cube 1 2 3) :geometry)
        mg (to-mygeo (j/get (cube 1 2 3) :geometry))
        ;mg (offset-mygeo mg r)
        newverts (clj->js (vec (map (fn [[x y z]] (three/Vector3. x y z)) (:vertices mg))))
        ]

    (println newverts)

    )
  )


(defn inflate [r mesh]
  (println "offset r=" r)
  (let [g (j/get mesh :geometry)
        mg (to-mygeo (j/get mesh :geometry))
        ;mg (offset-mygeo mg r)
        newverts (clj->js (vec (map (fn [[x y z]] (three/Vector3. x y z)) (:vertices (offset-mygeo mg r)))))
        ]

    (set! (.-vertices g) newverts)
    (set! (.-verticesNeedUpdate g) true)
    )
    mesh)

(defn mesh-size-from-bounding-box [mesh]
  (let [g (j/get mesh :geometry)]
    (j/call g :computeBoundingBox)
    (let [{:keys [x y z]} (j/lookup (-> (j/get g :boundingBox)
                        (j/call :getSize (three/Vector3.))))]
      [x y z])))

(defn offset [{:keys [r]} mesh]
  (let [meshsize (mesh-size-from-bounding-box mesh)
        factor  (mapv #(/ (+ % r) %) meshsize)]
    (apply scale mesh factor)))
