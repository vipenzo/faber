(ns faber.modelmacros
  (:require [clojure.walk :refer [postwalk]]
    ;[scad-clj.text :refer [text-parts]]
            ))

(defn with-f* [f x block]
  `(binding [~f ~x]
     (postwalk identity (list ~@block))))

(defmacro with-fa [x & block]
  (with-f* 'faber.modelmacros/*fa* x block))

(defmacro with-fn [x & block]
  (with-f* 'faber.modelmacros/*fn* x block))

(defmacro with-fs [x & block]
  (with-f* 'faber.modelmacros/*fs* x block))

(defmacro with-center [x & block]
  (with-f* 'faber.modelmacros/*center* x block))

