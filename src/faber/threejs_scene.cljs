(ns faber.threejs-scene
  (:require [faber.operations-3d :as o3]
            [faber.canvas3d :as canvas]))


(defmulti makemesh
          (fn [[form & args]]
            (println "multi makemesh form=" form " args=" args)
            (cond (:hole form) :hole
                  (vector? form) :compose
                  (keyword? form) form
                  :default :list))
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
  (if (> (count args) 1)
    (apply o3/union (map makemesh args))
    (makemesh (first args))))

(defmethod makemesh :compose [[form & args]]
  (println ":compose args=" args)
  (let [[solids holes] ((juxt #(% false) #(% true))
                        (group-by #(= :hole (first %)) args))
        ufn (fn [l] (if (empty? l) nil (makemesh (apply list l))))
        _ (println ":compose-2 solids=" solids " holes=" holes)
        holes (ufn  holes)
        solids (ufn solids)]
    (println ":compose solids=" solids " holes=" holes)
    (cond
      (nil? holes) solids
      (nil? solids) solids
      :default (o3/difference solids holes))))


(defmethod makemesh :union [[form & args]]
  (makemesh args))

(defmethod makemesh :hull [[form & args]]
  (apply o3/hull (map makemesh args)))

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

(defmethod makemesh :cylinder [[form h r r2]]
  (println "makemesh :cylinder form=" form " h=" h " r=" r " r2=" r2)
  (o3/cylinder h r r2)
  ;(three/Mesh. (three/BoxGeometry. x y z) canvas/default-material)
  ; TODO handle center
  )

(defmethod makemesh :polyhedron [[form points faces]]
  (o3/polyhedron points faces)
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

(defmethod makemesh :offset [[form options & block]]
  (o3/offset options  (apply makemesh block)))

(defmethod makemesh :hole [[form & block]]
  (apply makemesh block))


(def pippo 34)

(defn model [& args]
  (println "model. args=" args)
  (let [mesh (apply makemesh args)]
    {:3dmodel mesh}))

