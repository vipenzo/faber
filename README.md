
=======
# faber
A web based 3d model editor and visualizer. 
You can write clojure code and see the generated 3d model and export an STL file to 3d print it.

Uses codemirror (https://codemirror.net/) for the clojure editor and Three.js for the 3d visualization.

Inspired by OpenSCAD (https://www.openscad.org/), but uses clojure as a programming language.
Built with clojure and also offers clojure to the user via a self-hosted clojurescript environment.

The clojure syntax used for modeling is mostly taken from the scad-clj project (https://github.com/farrellm/scad-clj).
The model.cljs file is copied from there, with some minor modifications due to the difficulties to use macros in the self-hosted clojurescrit environment, and some extension.

To use it clone this repository and follow the instructions:  
* cd faber
* yarn install;
* yarn run shadow-cljs  watch bootstrap browser;

After it has finished, you should be able to view at http://localhost:8702


