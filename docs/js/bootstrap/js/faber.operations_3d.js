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
var _STAR_fn_STAR__orig_val__27035 = faber.operations_3d._STAR_fn_STAR_;
var _STAR_fn_STAR__temp_val__27036 = x;
(faber.operations_3d._STAR_fn_STAR_ = _STAR_fn_STAR__temp_val__27036);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(faber.operations_3d._STAR_fn_STAR_ = _STAR_fn_STAR__orig_val__27035);
}});
faber.operations_3d.with_fa = (function faber$operations_3d$with_fa(x,f){
var _STAR_fa_STAR__orig_val__27037 = faber.operations_3d._STAR_fa_STAR_;
var _STAR_fa_STAR__temp_val__27038 = x;
(faber.operations_3d._STAR_fa_STAR_ = _STAR_fa_STAR__temp_val__27038);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(faber.operations_3d._STAR_fa_STAR_ = _STAR_fa_STAR__orig_val__27037);
}});
faber.operations_3d.with_fs = (function faber$operations_3d$with_fs(x,f){
var _STAR_fs_STAR__orig_val__27039 = faber.operations_3d._STAR_fs_STAR_;
var _STAR_fs_STAR__temp_val__27040 = x;
(faber.operations_3d._STAR_fs_STAR_ = _STAR_fs_STAR__temp_val__27040);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(faber.operations_3d._STAR_fs_STAR_ = _STAR_fs_STAR__orig_val__27039);
}});
faber.operations_3d.cube = (function faber$operations_3d$cube(x,y,z){
var vec__27041 = (((((y == null)) || ((z == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,z], null));
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27041,(0),null);
var z__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27041,(1),null);
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
return (8);

}
}
}
});
faber.operations_3d.hull = (function faber$operations_3d$hull(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27221 = arguments.length;
var i__4737__auto___27222 = (0);
while(true){
if((i__4737__auto___27222 < len__4736__auto___27221)){
args__4742__auto__.push((arguments[i__4737__auto___27222]));

var G__27223 = (i__4737__auto___27222 + (1));
i__4737__auto___27222 = G__27223;
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
(faber.operations_3d.hull.cljs$lang$applyTo = (function (seq27045){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27045));
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
var y__4215__auto__ = top_r;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());
return (new module$node_modules$three$build$three.Mesh((new module$node_modules$three$build$three.CylinderGeometry(top_r,bottom_r,h,segs)),faber.operations_3d.default_material));
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
var G__27060 = arguments.length;
switch (G__27060) {
case 3:
return faber.operations_3d.csg_op.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___27237 = arguments.length;
var i__4737__auto___27238 = (0);
while(true){
if((i__4737__auto___27238 < len__4736__auto___27237)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27238]));

var G__27239 = (i__4737__auto___27238 + (1));
i__4737__auto___27238 = G__27239;
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
var csg_a = (new faber.operations_3d.ThreeBSP(mesh_a));
var csg_b = (new faber.operations_3d.ThreeBSP(mesh_b));
var csg_res = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(csg_a,csg_b) : f.call(null,csg_a,csg_b));
var res = csg_res.toMesh(faber.operations_3d.default_material);
res.geometry.computeVertexNormals();

return res;
}));

(faber.operations_3d.csg_op.cljs$core$IFn$_invoke$arity$variadic = (function (op,meshes){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["csg-op meshes=",meshes," (and (seq? meshes) (> 1 (count meshes)))=",((cljs.core.seq_QMARK_(meshes)) && (((1) > cljs.core.count(meshes))))], 0));

if(((cljs.core.seq_QMARK_(meshes)) && (((1) > cljs.core.count(meshes))))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (a,b){
return faber.operations_3d.csg_op.cljs$core$IFn$_invoke$arity$3(faber.operations_3d.f,a,b);
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
(faber.operations_3d.csg_op.cljs$lang$applyTo = (function (seq27057){
var G__27058 = cljs.core.first(seq27057);
var seq27057__$1 = cljs.core.next(seq27057);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27058,seq27057__$1);
}));

(faber.operations_3d.csg_op.cljs$lang$maxFixedArity = 3);

faber.operations_3d.difference = (function faber$operations_3d$difference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27246 = arguments.length;
var i__4737__auto___27247 = (0);
while(true){
if((i__4737__auto___27247 < len__4736__auto___27246)){
args__4742__auto__.push((arguments[i__4737__auto___27247]));

var G__27249 = (i__4737__auto___27247 + (1));
i__4737__auto___27247 = G__27249;
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
(faber.operations_3d.difference.cljs$lang$applyTo = (function (seq27070){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27070));
}));

faber.operations_3d.intersection = (function faber$operations_3d$intersection(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27255 = arguments.length;
var i__4737__auto___27256 = (0);
while(true){
if((i__4737__auto___27256 < len__4736__auto___27255)){
args__4742__auto__.push((arguments[i__4737__auto___27256]));

var G__27257 = (i__4737__auto___27256 + (1));
i__4737__auto___27256 = G__27257;
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
(faber.operations_3d.intersection.cljs$lang$applyTo = (function (seq27075){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27075));
}));

faber.operations_3d.union = (function faber$operations_3d$union(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27263 = arguments.length;
var i__4737__auto___27266 = (0);
while(true){
if((i__4737__auto___27266 < len__4736__auto___27263)){
args__4742__auto__.push((arguments[i__4737__auto___27266]));

var G__27267 = (i__4737__auto___27266 + (1));
i__4737__auto___27266 = G__27267;
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
(faber.operations_3d.union.cljs$lang$applyTo = (function (seq27079){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27079));
}));

faber.operations_3d.v_from_js = (function faber$operations_3d$v_from_js(v3){
var map__27085 = applied_science.js_interop.lookup(v3);
var map__27085__$1 = (((((!((map__27085 == null))))?(((((map__27085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27085):map__27085);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27085__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27085__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27085__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
faber.operations_3d.dumpv = (function faber$operations_3d$dumpv(v){
var vec__27091 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27087_SHARP_){
var obj27094 = v;
var k27095 = applied_science.js_interop.impl.wrap_key(p1__27087_SHARP_);
if((function (){var obj27096 = obj27094;
return (((!((obj27096 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27095,obj27096)));
})()){
return (obj27094[k27095]);
} else {
return undefined;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27091,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27091,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27091,(2),null);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["x=",x," y=",y," z=",z], 0));
});
faber.operations_3d.to_mygeo = (function faber$operations_3d$to_mygeo(g){
var verts = (function (){var obj27104 = g;
var k27105 = "vertices";
if((function (){var obj27106 = obj27104;
return (((!((obj27106 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27105,obj27106)));
})()){
return (obj27104[k27105]);
} else {
return undefined;
}
})();
var faces = (function (){var obj27111 = g;
var k27112 = "faces";
if((function (){var obj27113 = obj27111;
return (((!((obj27113 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27112,obj27113)));
})()){
return (obj27111[k27112]);
} else {
return undefined;
}
})();
var normals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (face){
var vindexes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27103_SHARP_){
var obj27116 = face;
var k27117 = applied_science.js_interop.impl.wrap_key(p1__27103_SHARP_);
if((function (){var obj27119 = obj27116;
return (((!((obj27119 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27117,obj27119)));
})()){
return (obj27116[k27117]);
} else {
return undefined;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null));
var face_normals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.v_from_js,(function (){var obj27120 = face;
var k27121 = "vertexNormals";
if((function (){var obj27122 = obj27120;
return (((!((obj27122 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27121,obj27122)));
})()){
return (obj27120[k27121]);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__27130_SHARP_,p2__27131_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,p1__27130_SHARP_,p2__27131_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),vs);
});
faber.operations_3d.vector_scalar_mult = (function faber$operations_3d$vector_scalar_mult(v,n){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27134_SHARP_){
return (p1__27134_SHARP_ * n);
}),v);
});
faber.operations_3d.vector_normalize = (function faber$operations_3d$vector_normalize(v){
var m = Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27135_SHARP_){
return (p1__27135_SHARP_ * p1__27135_SHARP_);
}),v)));
if((m === (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27136_SHARP_){
return (p1__27136_SHARP_ / m);
}),v);
}
});
faber.operations_3d.offset_mygeo = (function faber$operations_3d$offset_mygeo(mg,r){
var vertex_normals = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,faber.operations_3d.vector_normalize(faber.operations_3d.vectors_sum(v)));
}),cljs.core.PersistentArrayMap.EMPTY,faber.operations_3d.collect_vertex_normals(mg));
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["vertex-normals=",vertex_normals], 0));
var updatevert = (function (v,i){
return cljs.core.vec(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__27141_SHARP_,p2__27142_SHARP_){
return (p1__27141_SHARP_ + p2__27142_SHARP_);
}),v,faber.operations_3d.vector_scalar_mult((vertex_normals.cljs$core$IFn$_invoke$arity$1 ? vertex_normals.cljs$core$IFn$_invoke$arity$1(i) : vertex_normals.call(null,i)),r)));
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(mg,new cljs.core.Keyword(null,"vertices","vertices",2008905731),(function (p1__27143_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(updatevert,p1__27143_SHARP_,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
}));
});
faber.operations_3d.inflate = (function faber$operations_3d$inflate(r,mesh){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["offset r=",r], 0));

var g_27279 = (function (){var obj27148 = mesh;
var k27149 = "geometry";
if((function (){var obj27151 = obj27148;
return (((!((obj27151 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27149,obj27151)));
})()){
return (obj27148[k27149]);
} else {
return undefined;
}
})();
var mg_27280 = faber.operations_3d.to_mygeo((function (){var obj27155 = mesh;
var k27156 = "geometry";
if((function (){var obj27157 = obj27155;
return (((!((obj27157 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27156,obj27157)));
})()){
return (obj27155[k27156]);
} else {
return undefined;
}
})());
var newverts_27281 = cljs.core.clj__GT_js(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27162){
var vec__27163 = p__27162;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27163,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27163,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27163,(2),null);
return (new module$node_modules$three$build$three.Vector3(x,y,z));
}),new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(faber.operations_3d.offset_mygeo(mg_27280,r)))));
(g_27279.vertices = newverts_27281);

(g_27279.verticesNeedUpdate = true);

return mesh;
});
faber.operations_3d.mesh_size_from_bounding_box = (function faber$operations_3d$mesh_size_from_bounding_box(mesh){
var g = (function (){var obj27168 = mesh;
var k27169 = "geometry";
if((function (){var obj27170 = obj27168;
return (((!((obj27170 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27169,obj27170)));
})()){
return (obj27168[k27169]);
} else {
return undefined;
}
})();
var obj__26806__auto___27284 = g;
var f__26807__auto___27285 = (obj__26806__auto___27284["computeBoundingBox"]);
f__26807__auto___27285.call(obj__26806__auto___27284);

var map__27177 = applied_science.js_interop.lookup((function (){var obj__26806__auto__ = (function (){var obj27178 = g;
var k27179 = "boundingBox";
if((function (){var obj27180 = obj27178;
return (((!((obj27180 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27179,obj27180)));
})()){
return (obj27178[k27179]);
} else {
return undefined;
}
})();
var f__26807__auto__ = (obj__26806__auto__["getSize"]);
return f__26807__auto__.call(obj__26806__auto__,(new module$node_modules$three$build$three.Vector3()));
})());
var map__27177__$1 = (((((!((map__27177 == null))))?(((((map__27177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27177):map__27177);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27177__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27177__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27177__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
faber.operations_3d.offset = (function faber$operations_3d$offset(p__27183,mesh){
var map__27184 = p__27183;
var map__27184__$1 = (((((!((map__27184 == null))))?(((((map__27184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27184):map__27184);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27184__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var meshsize = faber.operations_3d.mesh_size_from_bounding_box(mesh);
var factor = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27182_SHARP_){
return ((p1__27182_SHARP_ + r) / p1__27182_SHARP_);
}),meshsize);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(faber.operations_3d.scale,mesh,factor);
});
faber.operations_3d.rotate_to_XY = (function faber$operations_3d$rotate_to_XY(p__27186){
var vec__27187 = p__27186;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27187,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27187,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27187,(2),null);
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

var vertices = cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__27191){
var vec__27192 = p__27191;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27192,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27192,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27192,(2),null);
return (new module$node_modules$three$build$three.Vector3(x,y,z));
}),points));
var triangles = (cljs.core.truth_(cljs.core.some((function (p1__27190_SHARP_){
return (cljs.core.count(p1__27190_SHARP_) > (3));
}),faces))?faber.operations_3d.get_trianles(points,faces):cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__27195){
var vec__27196 = p__27195;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27196,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27196,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27196,(2),null);
return (new module$node_modules$three$build$three.Face3(a,b,c));
}),faces)));
var g = (new module$node_modules$three$build$three.Geometry());
var obj27199_27295 = g;
var obj27200_27297 = (((!((obj27199_27295 == null))))?obj27199_27295:({}));
(obj27200_27297["vertices"] = vertices);


var obj27203_27300 = g;
var obj27204_27301 = (((!((obj27203_27300 == null))))?obj27203_27300:({}));
(obj27204_27301["faces"] = triangles);


var obj__26806__auto___27302 = g;
var f__26807__auto___27303 = (obj__26806__auto___27302["computeFaceNormals"]);
f__26807__auto___27303.call(obj__26806__auto___27302);

return (new module$node_modules$three$build$three.Mesh(g,faber.operations_3d.default_material));
});

//# sourceMappingURL=faber.operations_3d.js.map
