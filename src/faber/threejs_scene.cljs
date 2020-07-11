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

(defmethod makemesh :union [[form & args]]
  (makemesh args))

(defmethod makemesh :difference [[form & args]]
  (apply o3/difference (map makemesh args)))

(defmethod makemesh :intersection [[form & args]]
  (apply o3/intersection (map makemesh args)))


(defmethod makemesh :cube [[form {:keys [x y z center]}]]
  (println "makemesh :cube form=" form " y=" y)
  (o3/cube x y z)
  ;(three/Mesh. (three/BoxGeometry. x y z) canvas/default-material)
  ; TODO handle center
  )


(defmethod makemesh :sphere [[form r]]
  (o3/sphere r)

  ; TODO handle center
  )



(defmethod makemesh :translate [[form [x y z] & block]]
  (let [mesh (apply makemesh block)]
    (println ":translate mesh=" mesh)
    (o3/translate mesh x y z)))

(defmethod makemesh :rotatev [[form a v & block]]
  (let [mesh (apply makemesh block)
        [x y z] (mapv faber.model/deg->rad v)]
    (o3/rotatev mesh 10 x y z)))

(defmethod makemesh :rotatec [[form v & block]]
  (let [mesh (apply makemesh block)
        [x y z] (mapv faber.model/deg->rad v)]
    (o3/rotatec mesh x y z)))

(defmethod makemesh :with-fn [[form x & block]]
  (o3/with-fn x (fn [] (apply makemesh block))))

(defmethod makemesh :with-fa [[form x & block]]
  (o3/with-fa x (fn [] (apply makemesh block))))

(defmethod makemesh :with-fs [[form x & block]]
  (o3/with-fs x (fn [] (apply makemesh block))))

(defmethod makemesh :scale [[form [x y z] & block]]
  (let [mesh (apply makemesh block)]
    (println ":scale mesh=" mesh)
    (o3/scale mesh x y z)))


(def pippo 34)

(defn model [& args]
  (println "model. args=" args)
  (let [mesh (apply makemesh args)]
    {:3dmodel mesh}))

