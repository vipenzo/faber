(ns faber.user
  (:require re-view.hiccup.core
            #_[cells.cell :refer [cell]]
            #_[cells.lib :as cell
             :refer [interval timeout fetch geo-location with-view]
             :refer-macros [wait]]
            #_[shapes.core :as shapes :refer [listen
                                            circle square rectangle triangle path text image
                                            position opacity rotate scale
                                            colorize stroke no-stroke fill no-fill
                                            color-names rgb hsl rescale
                                            layer beside above
                                                        ; for functional geometry demo
                                            ;; are these internal only? -jar
                                            assure-shape-seq shape-bounds bounds shape->vector]]
            [re-view.core :include-macros true]
            [faber.model :as m
             :refer [cube sphere translate scale union intersection difference with-fn with-fa with-fs
                     rotate rotatev rotatec hull offset cylinder]]
            [faber.threejs-scene :refer [model]]


            [cljs.js])
  #_(:require-macros #_[cells.cell :refer [defcell cell]]
                   [faber.model :refer [with-fn]]))

(def peppe (with-fn 5 (sphere 3)))
