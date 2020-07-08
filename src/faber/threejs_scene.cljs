(ns faber.threejs-scene
  (:require [faber.operations-3d :as o3]
            [faber.canvas3d :as canvas]))




(defmulti makemesh
          (fn [form & args]
            (println "multi makemesh form=" form " args=" args)
            (cond
              (and (list? form) (nil? args)) (first form)
              (list? form) :vector
              (vector? form) :vector
              (keyword? form) form
              )
            ))

(defmethod makemesh :default [form & args]
  (println "unknown:" form args)
  )


(defmethod makemesh :vector [& args]
  (println "makemesh :vector. args=" args)
  (apply o3/union (map makemesh args)))



(defmethod makemesh :cube [[form {:keys [x y z center]}]]
  (println "makemesh :cube form=" form " y=" y)
  (o3/cube x y z)
  ;(three/Mesh. (three/BoxGeometry. x y z) canvas/default-material)
  ; TODO handle center
  )

(def pippo 34)

(defn model [& args]
  (println "model. args=" args)
  (let [mesh (apply makemesh args)]
    {:3dmodel mesh}))

