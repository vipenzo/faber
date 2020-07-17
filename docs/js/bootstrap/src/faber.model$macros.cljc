(ns faber.model
  (:require [clojure.walk :refer [postwalk]]
    ;[scad-clj.text :refer [text-parts]]
            ))

(defn with-f* [f x block]
  `(binding [~f ~x]
     (postwalk identity (list ~@block))))

(defmacro with-fa [x & block]
  (with-f* 'faber.model/*fa* x block))

(defmacro with-fn [x & block]
  (with-f* 'faber.model/*fn* x block))

(defmacro with-fs [x & block]
  (with-f* 'faber.model/*fs* x block))

(defmacro with-center [x & block]
  (with-f* 'faber.model/*center* x block))

