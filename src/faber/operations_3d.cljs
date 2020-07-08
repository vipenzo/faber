(ns faber.operations-3d
  (:require ["three" :as three]
            ["three-js-csg" :as csg]))


(def ThreeBSP (csg three))

(def default-material (three/MeshPhongMaterial. (clj->js {:ambient 0x050505, :color 0x0033ff, :specular 0x555555, :shininess 30})))

(defn cube [x y z]
  (three/Mesh. (three/BoxGeometry. x y z) default-material))

(defn cubo [x y z]
  (let [g (three/BoxGeometry. x y z)]

    (three/Mesh. (.translate g 2 3 4) default-material)))

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

(defn union
  ([mesh_a mesh_b]
   (let [csg_a (ThreeBSP. mesh_a)
         csg_b (ThreeBSP. mesh_b)
         csg_union (.union csg_a csg_b)
         union (.toMesh csg_union default-material)]
     (.computeVertexNormals (. union -geometry))
     union))
  ([& meshes]
   (println "union meshes=" meshes)
   (reduce union meshes)))