goog.provide('faber.operations_3d');
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
var module$node_modules$three_js_csg$index=shadow.js.require("module$node_modules$three_js_csg$index", {});
var module$node_modules$earcut$src$earcut=shadow.js.require("module$node_modules$earcut$src$earcut", {});
var module$node_modules$three$examples$jsm$geometries$ConvexGeometry=shadow.js.require("module$node_modules$three$examples$jsm$geometries$ConvexGeometry", {});
faber.operations_3d.ComplexGeometry = module$node_modules$three$examples$jsm$geometries$ConvexGeometry.ConvexGeometry;
faber.operations_3d.ThreeBSP = module$node_modules$three_js_csg$index(module$node_modules$three$build$three);
faber.operations_3d.default_material = (new module$node_modules$three$build$three.MeshPhongMaterial(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ambient","ambient",-983195016),(328965),new cljs.core.Keyword(null,"color","color",1011675173),(13311),new cljs.core.Keyword(null,"specular","specular",1475677228),(5592405),new cljs.core.Keyword(null,"shininess","shininess",-509323286),(30)], null))));
faber.operations_3d.pi = Math.PI;
faber.operations_3d.tau = ((2) * faber.operations_3d.pi);
faber.operations_3d._STAR_fa_STAR_ = false;
faber.operations_3d._STAR_fn_STAR_ = false;
faber.operations_3d._STAR_fs_STAR_ = false;
faber.operations_3d.with_fn = (function faber$operations_3d$with_fn(x,f){
var _STAR_fn_STAR__orig_val__38309 = faber.operations_3d._STAR_fn_STAR_;
var _STAR_fn_STAR__temp_val__38310 = x;
(faber.operations_3d._STAR_fn_STAR_ = _STAR_fn_STAR__temp_val__38310);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(faber.operations_3d._STAR_fn_STAR_ = _STAR_fn_STAR__orig_val__38309);
}});
faber.operations_3d.with_fa = (function faber$operations_3d$with_fa(x,f){
var _STAR_fa_STAR__orig_val__38311 = faber.operations_3d._STAR_fa_STAR_;
var _STAR_fa_STAR__temp_val__38312 = x;
(faber.operations_3d._STAR_fa_STAR_ = _STAR_fa_STAR__temp_val__38312);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(faber.operations_3d._STAR_fa_STAR_ = _STAR_fa_STAR__orig_val__38311);
}});
faber.operations_3d.with_fs = (function faber$operations_3d$with_fs(x,f){
var _STAR_fs_STAR__orig_val__38314 = faber.operations_3d._STAR_fs_STAR_;
var _STAR_fs_STAR__temp_val__38315 = x;
(faber.operations_3d._STAR_fs_STAR_ = _STAR_fs_STAR__temp_val__38315);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(faber.operations_3d._STAR_fs_STAR_ = _STAR_fs_STAR__orig_val__38314);
}});
faber.operations_3d.cube = (function faber$operations_3d$cube(x,y,z){
var vec__38318 = (((((y == null)) || ((z == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,z], null));
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38318,(0),null);
var z__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38318,(1),null);
return (new module$node_modules$three$build$three.Mesh((new module$node_modules$three$build$three.BoxGeometry(x,y__$1,z__$1)),faber.operations_3d.default_material));
});
faber.operations_3d.calc_number_of_segments = (function faber$operations_3d$calc_number_of_segments(radius){
if(cljs.core.truth_(faber.operations_3d._STAR_fn_STAR_)){
var x__4214__auto__ = faber.operations_3d._STAR_fn_STAR_;
var y__4215__auto__ = (3);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
} else {
if(cljs.core.truth_(faber.operations_3d._STAR_fa_STAR_)){
var x__4214__auto__ = ((360) / faber.operations_3d._STAR_fa_STAR_);
var y__4215__auto__ = (3);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
} else {
if(cljs.core.truth_(faber.operations_3d._STAR_fs_STAR_)){
var x__4214__auto__ = Math.ceil((faber.operations_3d.tau / Math.asin((faber.operations_3d._STAR_fs_STAR_ / radius))));
var y__4215__auto__ = (3);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
} else {
return (20);

}
}
}
});
faber.operations_3d.hull = (function faber$operations_3d$hull(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38562 = arguments.length;
var i__4737__auto___38566 = (0);
while(true){
if((i__4737__auto___38566 < len__4736__auto___38562)){
args__4742__auto__.push((arguments[i__4737__auto___38566]));

var G__38567 = (i__4737__auto___38566 + (1));
i__4737__auto___38566 = G__38567;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.operations_3d.hull.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.operations_3d.hull.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hull args=",args], 0));

var hull2 = (function (mesh_a,mesh_b){
var tmp = (new module$node_modules$three$build$three.Geometry());
tmp.mergeMesh(mesh_a);

tmp.mergeMesh(mesh_b);

tmp.mergeVertices();

return (new module$node_modules$three$build$three.Mesh((new faber.operations_3d.ComplexGeometry(tmp.vertices)),faber.operations_3d.default_material));
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))){
return cljs.core.first(args);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(hull2,args);

}
}));

(faber.operations_3d.hull.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.operations_3d.hull.cljs$lang$applyTo = (function (seq38323){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38323));
}));

faber.operations_3d.sphere = (function faber$operations_3d$sphere(radius){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Sphere radius=",radius], 0));

var segs = faber.operations_3d.calc_number_of_segments(radius);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["segs=",segs], 0));

return (new module$node_modules$three$build$three.Mesh((new module$node_modules$three$build$three.SphereGeometry(radius,segs,segs)),faber.operations_3d.default_material));
});
faber.operations_3d.cylinder = (function faber$operations_3d$cylinder(h,bottom_r,top_r){
var top = (cljs.core.truth_(top_r)?top_r:bottom_r);
var segs = faber.operations_3d.calc_number_of_segments((function (){var x__4214__auto__ = bottom_r;
var y__4215__auto__ = top;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());
return (new module$node_modules$three$build$three.Mesh((new module$node_modules$three$build$three.CylinderGeometry(top,bottom_r,h,segs)),faber.operations_3d.default_material));
});
faber.operations_3d.translate = (function faber$operations_3d$translate(mesh,x,y,z){
(mesh.position.x = x);

(mesh.position.y = y);

(mesh.position.z = z);

return mesh;
});
faber.operations_3d.scale = (function faber$operations_3d$scale(mesh,x,y,z){
(mesh.scale.x = x);

(mesh.scale.y = y);

(mesh.scale.z = z);

return mesh;
});
faber.operations_3d.rotatec = (function faber$operations_3d$rotatec(mesh,x,y,z){
(mesh.rotation.x = x);

(mesh.rotation.y = y);

(mesh.rotation.z = z);

return mesh;
});
faber.operations_3d.rotatev = (function faber$operations_3d$rotatev(mesh,a,x,y,z){
(mesh.rotation.x = (a * x));

(mesh.rotation.y = (a * y));

(mesh.rotation.z = (a * z));

return mesh;
});
faber.operations_3d.csg_op = (function faber$operations_3d$csg_op(var_args){
var G__38348 = arguments.length;
switch (G__38348) {
case 3:
return faber.operations_3d.csg_op.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___38602 = arguments.length;
var i__4737__auto___38606 = (0);
while(true){
if((i__4737__auto___38606 < len__4736__auto___38602)){
args_arr__4757__auto__.push((arguments[i__4737__auto___38606]));

var G__38607 = (i__4737__auto___38606 + (1));
i__4737__auto___38606 = G__38607;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice(3),(0),null));
return faber.operations_3d.csg_op.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(faber.operations_3d.csg_op.cljs$core$IFn$_invoke$arity$3 = (function (f,mesh_a,mesh_b){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["csg-op mesh_a=",mesh_a," mesh_b=",mesh_b], 0));

var csg_a = (new faber.operations_3d.ThreeBSP(mesh_a));
var csg_b = (new faber.operations_3d.ThreeBSP(mesh_b));
var csg_res = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(csg_a,csg_b) : f.call(null,csg_a,csg_b));
var res = csg_res.toMesh(faber.operations_3d.default_material);
res.geometry.computeVertexNormals();

return res;
}));

(faber.operations_3d.csg_op.cljs$core$IFn$_invoke$arity$variadic = (function (op,meshes){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["csg-op meshes=",meshes," (and (seq? meshes) (> (count meshes) 1))=",((cljs.core.seq_QMARK_(meshes)) && ((cljs.core.count(meshes) > (1))))], 0));

if(((cljs.core.seq_QMARK_(meshes)) && ((cljs.core.count(meshes) > (1))))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (a,b){
return faber.operations_3d.csg_op.cljs$core$IFn$_invoke$arity$3(op,a,b);
}),meshes);
} else {
if(cljs.core.seq_QMARK_(meshes)){
return cljs.core.first(meshes);
} else {
return meshes;

}
}
}));

/** @this {Function} */
(faber.operations_3d.csg_op.cljs$lang$applyTo = (function (seq38343){
var G__38344 = cljs.core.first(seq38343);
var seq38343__$1 = cljs.core.next(seq38343);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38344,seq38343__$1);
}));

(faber.operations_3d.csg_op.cljs$lang$maxFixedArity = 3);

faber.operations_3d.difference = (function faber$operations_3d$difference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38636 = arguments.length;
var i__4737__auto___38637 = (0);
while(true){
if((i__4737__auto___38637 < len__4736__auto___38636)){
args__4742__auto__.push((arguments[i__4737__auto___38637]));

var G__38638 = (i__4737__auto___38637 + (1));
i__4737__auto___38637 = G__38638;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.operations_3d.difference.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.operations_3d.difference.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(faber.operations_3d.csg_op,(function (a,b){
return a.subtract(b);
}),args);
}));

(faber.operations_3d.difference.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.operations_3d.difference.cljs$lang$applyTo = (function (seq38358){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38358));
}));

faber.operations_3d.intersection = (function faber$operations_3d$intersection(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38645 = arguments.length;
var i__4737__auto___38647 = (0);
while(true){
if((i__4737__auto___38647 < len__4736__auto___38645)){
args__4742__auto__.push((arguments[i__4737__auto___38647]));

var G__38648 = (i__4737__auto___38647 + (1));
i__4737__auto___38647 = G__38648;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.operations_3d.intersection.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.operations_3d.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(faber.operations_3d.csg_op,(function (a,b){
return a.intersect(b);
}),args);
}));

(faber.operations_3d.intersection.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.operations_3d.intersection.cljs$lang$applyTo = (function (seq38360){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38360));
}));

faber.operations_3d.union = (function faber$operations_3d$union(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38653 = arguments.length;
var i__4737__auto___38654 = (0);
while(true){
if((i__4737__auto___38654 < len__4736__auto___38653)){
args__4742__auto__.push((arguments[i__4737__auto___38654]));

var G__38659 = (i__4737__auto___38654 + (1));
i__4737__auto___38654 = G__38659;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.operations_3d.union.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.operations_3d.union.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(faber.operations_3d.csg_op,(function (a,b){
return a.union(b);
}),args);
}));

(faber.operations_3d.union.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.operations_3d.union.cljs$lang$applyTo = (function (seq38368){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38368));
}));

faber.operations_3d.v_from_js = (function faber$operations_3d$v_from_js(v3){
var map__38377 = applied_science.js_interop.lookup(v3);
var map__38377__$1 = (((((!((map__38377 == null))))?(((((map__38377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38377):map__38377);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38377__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38377__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38377__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
faber.operations_3d.dumpv = (function faber$operations_3d$dumpv(v){
var vec__38386 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38385_SHARP_){
var obj38389 = v;
var k38390 = applied_science.js_interop.impl.wrap_key(p1__38385_SHARP_);
if((function (){var obj38393 = obj38389;
return (((!((obj38393 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k38390,obj38393)));
})()){
return (obj38389[k38390]);
} else {
return undefined;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38386,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38386,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38386,(2),null);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["x=",x," y=",y," z=",z], 0));
});
faber.operations_3d.to_mygeo = (function faber$operations_3d$to_mygeo(g){
var verts = (function (){var obj38401 = g;
var k38402 = "vertices";
if((function (){var obj38403 = obj38401;
return (((!((obj38403 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k38402,obj38403)));
})()){
return (obj38401[k38402]);
} else {
return undefined;
}
})();
var faces = (function (){var obj38404 = g;
var k38405 = "faces";
if((function (){var obj38406 = obj38404;
return (((!((obj38406 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k38405,obj38406)));
})()){
return (obj38404[k38405]);
} else {
return undefined;
}
})();
var normals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (face){
var vindexes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38400_SHARP_){
var obj38409 = face;
var k38410 = applied_science.js_interop.impl.wrap_key(p1__38400_SHARP_);
if((function (){var obj38411 = obj38409;
return (((!((obj38411 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k38410,obj38411)));
})()){
return (obj38409[k38410]);
} else {
return undefined;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null));
var face_normals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.v_from_js,(function (){var obj38417 = face;
var k38418 = "vertexNormals";
if((function (){var obj38419 = obj38417;
return (((!((obj38419 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k38418,obj38419)));
})()){
return (obj38417[k38418]);
} else {
return undefined;
}
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,vindexes,face_normals);
}),faces);
var vertices = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.v_from_js,verts);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertices","vertices",2008905731),vertices,new cljs.core.Keyword(null,"faces-and-normals","faces-and-normals",654388545),normals], null);
});
faber.operations_3d.collect_vertex_normals = (function faber$operations_3d$collect_vertex_normals(mygeo){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,v));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by(cljs.core.first,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"faces-and-normals","faces-and-normals",654388545).cljs$core$IFn$_invoke$arity$1(mygeo)], 0))));
});
faber.operations_3d.vectors_sum = (function faber$operations_3d$vectors_sum(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__38425_SHARP_,p2__38426_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,p1__38425_SHARP_,p2__38426_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),vs);
});
faber.operations_3d.vector_scalar_mult = (function faber$operations_3d$vector_scalar_mult(v,n){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38427_SHARP_){
return (p1__38427_SHARP_ * n);
}),v);
});
faber.operations_3d.vector_normalize = (function faber$operations_3d$vector_normalize(v){
var m = Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38428_SHARP_){
return (p1__38428_SHARP_ * p1__38428_SHARP_);
}),v)));
if((m === (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38429_SHARP_){
return (p1__38429_SHARP_ / m);
}),v);
}
});
faber.operations_3d.offset_mygeo = (function faber$operations_3d$offset_mygeo(mg,r){
var vertex_normals = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,faber.operations_3d.vector_normalize(faber.operations_3d.vectors_sum(v)));
}),cljs.core.PersistentArrayMap.EMPTY,faber.operations_3d.collect_vertex_normals(mg));
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["vertex-normals=",vertex_normals], 0));
var updatevert = (function (v,i){
return cljs.core.vec(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__38437_SHARP_,p2__38438_SHARP_){
return (p1__38437_SHARP_ + p2__38438_SHARP_);
}),v,faber.operations_3d.vector_scalar_mult((vertex_normals.cljs$core$IFn$_invoke$arity$1 ? vertex_normals.cljs$core$IFn$_invoke$arity$1(i) : vertex_normals.call(null,i)),r)));
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(mg,new cljs.core.Keyword(null,"vertices","vertices",2008905731),(function (p1__38439_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(updatevert,p1__38439_SHARP_,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
}));
});
faber.operations_3d.inflate = (function faber$operations_3d$inflate(r,mesh){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["offset r=",r], 0));

var g_38734 = (function (){var obj38457 = mesh;
var k38458 = "geometry";
if((function (){var obj38459 = obj38457;
return (((!((obj38459 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k38458,obj38459)));
})()){
return (obj38457[k38458]);
} else {
return undefined;
}
})();
var mg_38735 = faber.operations_3d.to_mygeo((function (){var obj38463 = mesh;
var k38464 = "geometry";
if((function (){var obj38465 = obj38463;
return (((!((obj38465 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k38464,obj38465)));
})()){
return (obj38463[k38464]);
} else {
return undefined;
}
})());
var newverts_38736 = cljs.core.clj__GT_js(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38470){
var vec__38471 = p__38470;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38471,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38471,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38471,(2),null);
return (new module$node_modules$three$build$three.Vector3(x,y,z));
}),new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(faber.operations_3d.offset_mygeo(mg_38735,r)))));
(g_38734.vertices = newverts_38736);

(g_38734.verticesNeedUpdate = true);

return mesh;
});
faber.operations_3d.mesh_size_from_bounding_box = (function faber$operations_3d$mesh_size_from_bounding_box(mesh){
var g = (function (){var obj38480 = mesh;
var k38481 = "geometry";
if((function (){var obj38483 = obj38480;
return (((!((obj38483 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k38481,obj38483)));
})()){
return (obj38480[k38481]);
} else {
return undefined;
}
})();
var obj__26806__auto___38750 = g;
var f__26807__auto___38751 = (obj__26806__auto___38750["computeBoundingBox"]);
f__26807__auto___38751.call(obj__26806__auto___38750);

var map__38486 = applied_science.js_interop.lookup((function (){var obj__26806__auto__ = (function (){var obj38487 = g;
var k38488 = "boundingBox";
if((function (){var obj38489 = obj38487;
return (((!((obj38489 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k38488,obj38489)));
})()){
return (obj38487[k38488]);
} else {
return undefined;
}
})();
var f__26807__auto__ = (obj__26806__auto__["getSize"]);
return f__26807__auto__.call(obj__26806__auto__,(new module$node_modules$three$build$three.Vector3()));
})());
var map__38486__$1 = (((((!((map__38486 == null))))?(((((map__38486.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38486.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38486):map__38486);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38486__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38486__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38486__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
faber.operations_3d.offset = (function faber$operations_3d$offset(p__38496,mesh){
var map__38497 = p__38496;
var map__38497__$1 = (((((!((map__38497 == null))))?(((((map__38497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38497):map__38497);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38497__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var meshsize = faber.operations_3d.mesh_size_from_bounding_box(mesh);
var factor = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38495_SHARP_){
return ((p1__38495_SHARP_ + r) / p1__38495_SHARP_);
}),meshsize);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(faber.operations_3d.scale,mesh,factor);
});
faber.operations_3d.rotate_to_XY = (function faber$operations_3d$rotate_to_XY(p__38500){
var vec__38501 = p__38500;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38501,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38501,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38501,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
faber.operations_3d.get_trianles = (function faber$operations_3d$get_trianles(points,faces){
var vertices = cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.clj__GT_js,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([points], 0))));
var triangles = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,face){
if((cljs.core.count(face) > (3))){
var vs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (vi){
return cljs.core.clj__GT_js(faber.operations_3d.rotate_to_XY(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,vi)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([face], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["face=",face," vs=",vs], 0));

var ts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),module$node_modules$earcut$src$earcut.default(cljs.core.clj__GT_js(vs))));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["earcut triangles=",ts], 0));

cljs.core.concat.cljs$core$IFn$_invoke$arity$1(acc);

return ts;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,face);
}
}),cljs.core.PersistentVector.EMPTY,faces);
return triangles;
});
faber.operations_3d.polyhedron = (function faber$operations_3d$polyhedron(points,faces){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["polyhedron. points=",points," faces=",faces], 0));

var vertices = cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__38521){
var vec__38522 = p__38521;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38522,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38522,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38522,(2),null);
return (new module$node_modules$three$build$three.Vector3(x,y,z));
}),points));
var triangles = (cljs.core.truth_(cljs.core.some((function (p1__38516_SHARP_){
return (cljs.core.count(p1__38516_SHARP_) > (3));
}),faces))?faber.operations_3d.get_trianles(points,faces):cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__38525){
var vec__38526 = p__38525;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38526,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38526,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38526,(2),null);
return (new module$node_modules$three$build$three.Face3(a,b,c));
}),faces)));
var g = (new module$node_modules$three$build$three.Geometry());
var obj38529_38789 = g;
var obj38530_38790 = (((!((obj38529_38789 == null))))?obj38529_38789:({}));
(obj38530_38790["vertices"] = vertices);


var obj38533_38791 = g;
var obj38534_38792 = (((!((obj38533_38791 == null))))?obj38533_38791:({}));
(obj38534_38792["faces"] = triangles);


var obj__26806__auto___38793 = g;
var f__26807__auto___38794 = (obj__26806__auto___38793["computeFaceNormals"]);
f__26807__auto___38794.call(obj__26806__auto___38793);

return (new module$node_modules$three$build$three.Mesh(g,faber.operations_3d.default_material));
});

//# sourceMappingURL=faber.operations_3d.js.map
