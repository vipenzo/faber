(ns faber.threejs-scene
  (:require [faber.operations-3d :as o3]
            [faber.canvas3d :as canvas]))




(defmulti makemesh
          (fn [[form & args]]
            (println "multi makemesh form=" form " args=" args)
            (if (keyword? form) form :list))
            #_(cond
              (and (list? form) (nil? args) (keyword? (first form))) (first form)
              (list? form) :vector
              (vector? form) :vector
              (keyword? form) form
              )
            )

(defmethod makemesh :default [form & args]
  (println "unknown:" form args)
  )

(defmethod makemesh :list [[& args]]
  (println ":list args=" args)
  ;(println ":list (map makemesh args)=" (map makemesh args))
  (apply o3/union (map makemesh args)))


(defmethod makemesh :cube [[form {:keys [x y z center]}]]
  (println "makemesh :cube form=" form " y=" y)
  (o3/cube x y z)
  ;(three/Mesh. (three/BoxGeometry. x y z) canvas/default-material)
  ; TODO handle center
  )

(defmethod makemesh :sphere [[form {:keys [x y z center]}]]
  (println "makemesh :cube form=" form " y=" y)
  (o3/cubo x y z)
  ;(three/Mesh. (three/BoxGeometry. x y z) canvas/default-material)
  ; TODO handle center
  )



(defmethod makemesh :translate [[form [x y z] & block]]
  (let [mesh (apply makemesh block)]
    (println ":translate mesh=" mesh)
    (o3/translate mesh x y z)))

(defmethod makemesh :scale [[form [x y z] & block]]
  (let [mesh (apply makemesh block)]
    (println ":scale mesh=" mesh)
    (o3/scale mesh x y z)))


(def pippo 34)

(defn model [& args]
  (println "model. args=" args)
  (let [mesh (apply makemesh args)]
    {:3dmodel mesh}))

