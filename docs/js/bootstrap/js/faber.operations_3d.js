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
var _STAR_fn_STAR__orig_val__27038 = faber.operations_3d._STAR_fn_STAR_;
var _STAR_fn_STAR__temp_val__27039 = x;
(faber.operations_3d._STAR_fn_STAR_ = _STAR_fn_STAR__temp_val__27039);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(faber.operations_3d._STAR_fn_STAR_ = _STAR_fn_STAR__orig_val__27038);
}});
faber.operations_3d.with_fa = (function faber$operations_3d$with_fa(x,f){
var _STAR_fa_STAR__orig_val__27040 = faber.operations_3d._STAR_fa_STAR_;
var _STAR_fa_STAR__temp_val__27041 = x;
(faber.operations_3d._STAR_fa_STAR_ = _STAR_fa_STAR__temp_val__27041);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(faber.operations_3d._STAR_fa_STAR_ = _STAR_fa_STAR__orig_val__27040);
}});
faber.operations_3d.with_fs = (function faber$operations_3d$with_fs(x,f){
var _STAR_fs_STAR__orig_val__27042 = faber.operations_3d._STAR_fs_STAR_;
var _STAR_fs_STAR__temp_val__27043 = x;
(faber.operations_3d._STAR_fs_STAR_ = _STAR_fs_STAR__temp_val__27043);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(faber.operations_3d._STAR_fs_STAR_ = _STAR_fs_STAR__orig_val__27042);
}});
faber.operations_3d.cube = (function faber$operations_3d$cube(x,y,z){
var vec__27044 = (((((y == null)) || ((z == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,z], null));
var y__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27044,(0),null);
var z__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27044,(1),null);
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
var i__4737__auto___27223 = (0);
while(true){
if((i__4737__auto___27223 < len__4736__auto___27221)){
args__4742__auto__.push((arguments[i__4737__auto___27223]));

var G__27226 = (i__4737__auto___27223 + (1));
i__4737__auto___27223 = G__27226;
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
(faber.operations_3d.hull.cljs$lang$applyTo = (function (seq27049){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27049));
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
var G__27076 = arguments.length;
switch (G__27076) {
case 3:
return faber.operations_3d.csg_op.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___27234 = arguments.length;
var i__4737__auto___27235 = (0);
while(true){
if((i__4737__auto___27235 < len__4736__auto___27234)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27235]));

var G__27236 = (i__4737__auto___27235 + (1));
i__4737__auto___27235 = G__27236;
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
(faber.operations_3d.csg_op.cljs$lang$applyTo = (function (seq27074){
var G__27075 = cljs.core.first(seq27074);
var seq27074__$1 = cljs.core.next(seq27074);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27075,seq27074__$1);
}));

(faber.operations_3d.csg_op.cljs$lang$maxFixedArity = 3);

faber.operations_3d.difference = (function faber$operations_3d$difference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27241 = arguments.length;
var i__4737__auto___27242 = (0);
while(true){
if((i__4737__auto___27242 < len__4736__auto___27241)){
args__4742__auto__.push((arguments[i__4737__auto___27242]));

var G__27243 = (i__4737__auto___27242 + (1));
i__4737__auto___27242 = G__27243;
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
(faber.operations_3d.difference.cljs$lang$applyTo = (function (seq27085){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27085));
}));

faber.operations_3d.intersection = (function faber$operations_3d$intersection(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27244 = arguments.length;
var i__4737__auto___27245 = (0);
while(true){
if((i__4737__auto___27245 < len__4736__auto___27244)){
args__4742__auto__.push((arguments[i__4737__auto___27245]));

var G__27246 = (i__4737__auto___27245 + (1));
i__4737__auto___27245 = G__27246;
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
(faber.operations_3d.intersection.cljs$lang$applyTo = (function (seq27092){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27092));
}));

faber.operations_3d.union = (function faber$operations_3d$union(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27248 = arguments.length;
var i__4737__auto___27249 = (0);
while(true){
if((i__4737__auto___27249 < len__4736__auto___27248)){
args__4742__auto__.push((arguments[i__4737__auto___27249]));

var G__27250 = (i__4737__auto___27249 + (1));
i__4737__auto___27249 = G__27250;
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
(faber.operations_3d.union.cljs$lang$applyTo = (function (seq27100){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27100));
}));

faber.operations_3d.v_from_js = (function faber$operations_3d$v_from_js(v3){
var map__27106 = applied_science.js_interop.lookup(v3);
var map__27106__$1 = (((((!((map__27106 == null))))?(((((map__27106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27106):map__27106);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27106__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27106__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27106__$1,new cljs.core.Keyword(null,"z","z",-789527183));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
faber.operations_3d.dumpv = (function faber$operations_3d$dumpv(v){
var vec__27113 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27111_SHARP_){
var obj27116 = v;
var k27117 = applied_science.js_interop.impl.wrap_key(p1__27111_SHARP_);
if((function (){var obj27118 = obj27116;
return (((!((obj27118 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27117,obj27118)));
})()){
return (obj27116[k27117]);
} else {
return undefined;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183)], null));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27113,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27113,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27113,(2),null);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["x=",x," y=",y," z=",z], 0));
});
faber.operations_3d.to_mygeo = (function faber$operations_3d$to_mygeo(g){
var verts = (function (){var obj27124 = g;
var k27125 = "vertices";
if((function (){var obj27126 = obj27124;
return (((!((obj27126 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27125,obj27126)));
})()){
return (obj27124[k27125]);
} else {
return undefined;
}
})();
var faces = (function (){var obj27127 = g;
var k27128 = "faces";
if((function (){var obj27129 = obj27127;
return (((!((obj27129 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27128,obj27129)));
})()){
return (obj27127[k27128]);
} else {
return undefined;
}
})();
var normals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (face){
var vindexes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27119_SHARP_){
var obj27130 = face;
var k27131 = applied_science.js_interop.impl.wrap_key(p1__27119_SHARP_);
if((function (){var obj27132 = obj27130;
return (((!((obj27132 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27131,obj27132)));
})()){
return (obj27130[k27131]);
} else {
return undefined;
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null));
var face_normals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.v_from_js,(function (){var obj27133 = face;
var k27134 = "vertexNormals";
if((function (){var obj27135 = obj27133;
return (((!((obj27135 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27134,obj27135)));
})()){
return (obj27133[k27134]);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__27141_SHARP_,p2__27142_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,p1__27141_SHARP_,p2__27142_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),vs);
});
faber.operations_3d.vector_scalar_mult = (function faber$operations_3d$vector_scalar_mult(v,n){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27147_SHARP_){
return (p1__27147_SHARP_ * n);
}),v);
});
faber.operations_3d.vector_normalize = (function faber$operations_3d$vector_normalize(v){
var m = Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27149_SHARP_){
return (p1__27149_SHARP_ * p1__27149_SHARP_);
}),v)));
if((m === (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27151_SHARP_){
return (p1__27151_SHARP_ / m);
}),v);
}
});
faber.operations_3d.offset_mygeo = (function faber$operations_3d$offset_mygeo(mg,r){
var vertex_normals = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,faber.operations_3d.vector_normalize(faber.operations_3d.vectors_sum(v)));
}),cljs.core.PersistentArrayMap.EMPTY,faber.operations_3d.collect_vertex_normals(mg));
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["vertex-normals=",vertex_normals], 0));
var updatevert = (function (v,i){
return cljs.core.vec(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__27154_SHARP_,p2__27155_SHARP_){
return (p1__27154_SHARP_ + p2__27155_SHARP_);
}),v,faber.operations_3d.vector_scalar_mult((vertex_normals.cljs$core$IFn$_invoke$arity$1 ? vertex_normals.cljs$core$IFn$_invoke$arity$1(i) : vertex_normals.call(null,i)),r)));
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(mg,new cljs.core.Keyword(null,"vertices","vertices",2008905731),(function (p1__27156_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(updatevert,p1__27156_SHARP_,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
}));
});
faber.operations_3d.inflate = (function faber$operations_3d$inflate(r,mesh){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["offset r=",r], 0));

var g_27263 = (function (){var obj27164 = mesh;
var k27165 = "geometry";
if((function (){var obj27166 = obj27164;
return (((!((obj27166 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27165,obj27166)));
})()){
return (obj27164[k27165]);
} else {
return undefined;
}
})();
var mg_27264 = faber.operations_3d.to_mygeo((function (){var obj27167 = mesh;
var k27168 = "geometry";
if((function (){var obj27169 = obj27167;
return (((!((obj27169 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27168,obj27169)));
})()){
return (obj27167[k27168]);
} else {
return undefined;
}
})());
var newverts_27265 = cljs.core.clj__GT_js(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27170){
var vec__27171 = p__27170;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27171,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27171,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27171,(2),null);
return (new module$node_modules$three$build$three.Vector3(x,y,z));
}),new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(faber.operations_3d.offset_mygeo(mg_27264,r)))));
(g_27263.vertices = newverts_27265);

(g_27263.verticesNeedUpdate = true);

return mesh;
});
faber.operations_3d.mesh_size_from_bounding_box = (function faber$operations_3d$mesh_size_from_bounding_box(mesh){
var g = (function (){var obj27174 = mesh;
var k27175 = "geometry";
if((function (){var obj27176 = obj27174;
return (((!((obj27176 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27175,obj27176)));
})()){
return (obj27174[k27175]);
} else {
return undefined;
}
})();
var obj__26806__auto___27272 = g;
var f__26807__auto___27273 = (obj__26806__auto___27272["computeBoundingBox"]);
f__26807__auto___27273.call(obj__26806__auto___27272);

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

var vertices = cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__27194){
var vec__27195 = p__27194;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27195,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27195,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27195,(2),null);
return (new module$node_modules$three$build$three.Vector3(x,y,z));
}),points));
var triangles = (cljs.core.truth_(cljs.core.some((function (p1__27193_SHARP_){
return (cljs.core.count(p1__27193_SHARP_) > (3));
}),faces))?faber.operations_3d.get_trianles(points,faces):cljs.core.clj__GT_js(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__27198){
var vec__27199 = p__27198;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27199,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27199,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27199,(2),null);
return (new module$node_modules$three$build$three.Face3(a,b,c));
}),faces)));
var g = (new module$node_modules$three$build$three.Geometry());
var obj27202_27287 = g;
var obj27203_27288 = (((!((obj27202_27287 == null))))?obj27202_27287:({}));
(obj27203_27288["vertices"] = vertices);


var obj27206_27289 = g;
var obj27207_27290 = (((!((obj27206_27289 == null))))?obj27206_27289:({}));
(obj27207_27290["faces"] = triangles);


var obj__26806__auto___27291 = g;
var f__26807__auto___27292 = (obj__26806__auto___27291["computeFaceNormals"]);
f__26807__auto___27292.call(obj__26806__auto___27291);

return (new module$node_modules$three$build$three.Mesh(g,faber.operations_3d.default_material));
});

//# sourceMappingURL=faber.operations_3d.js.map
