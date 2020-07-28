(ns faber.user
  (:require re-view.hiccup.core
            [re-view.core :include-macros true]
            [faber.model :as m
             :refer [cube sphere translate scale union intersection difference with-fn with-fa with-fs
                     rotate rotatev rotatec hull offset cylinder polyhedron
                     compose hole]]
            [faber.threejs-scene :refer [model]]


            [cljs.js])
  #_(:require-macros #_[cells.cell :refer [defcell cell]]
                   [faber.model :refer [with-fn]]))

