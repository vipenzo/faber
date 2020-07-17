goog.provide('thi.ng.geom.types.utils');
thi.ng.geom.types.utils.bounding_rect = (function thi$ng$geom$types$utils$bounding_rect(points){
var vec__28418 = thi.ng.geom.core.utils.bounding_rect(points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28418,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28418,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.Rect2(p,size,null,null,null));
} else {
return null;
}
});
thi.ng.geom.types.utils.bounding_box = (function thi$ng$geom$types$utils$bounding_box(points){
var vec__28421 = thi.ng.geom.core.utils.bounding_box(points);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28421,(1),null);
if(cljs.core.truth_(p)){
return (new thi.ng.geom.types.AABB(p,size,null,null,null));
} else {
return null;
}
});
thi.ng.geom.types.utils.bounding_circle = (function thi$ng$geom$types$utils$bounding_circle(var_args){
var G__28425 = arguments.length;
switch (G__28425) {
case 1:
return thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.utils.centroid(points),points);
}));

(thi.ng.geom.types.utils.bounding_circle.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__28426 = thi.ng.geom.core.utils.radial_bounds(thi.ng.geom.core.vector.vec2,c,r_or_points);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28426,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28426,(1),null);
return (new thi.ng.geom.types.Circle2(c__$1,r,null,null,null));
}));

(thi.ng.geom.types.utils.bounding_circle.cljs$lang$maxFixedArity = 2);

thi.ng.geom.types.utils.bounding_sphere = (function thi$ng$geom$types$utils$bounding_sphere(var_args){
var G__28431 = arguments.length;
switch (G__28431) {
case 1:
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.utils.centroid(points),points);
}));

(thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2 = (function (c,r_or_points){
var vec__28432 = thi.ng.geom.core.utils.radial_bounds(thi.ng.geom.core.vector.vec3,c,r_or_points);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28432,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28432,(1),null);
return (new thi.ng.geom.types.Sphere(c__$1,r,null,null,null));
}));

(thi.ng.geom.types.utils.bounding_sphere.cljs$lang$maxFixedArity = 2);

/**
 * Takes a seq of shape entities, calls g/bounds on each and returns
 *   union bounds. Does not support collections of mixed 2d/3d entities.
 */
thi.ng.geom.types.utils.coll_bounds = (function thi$ng$geom$types$utils$coll_bounds(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.union,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.bounds,coll));
});
/**
 * Takes an AABB or rect and seq of shapes, proportionally scales and
 *   repositions all items to fit into given bounds. Returns lazyseq of
 *   transformed entities. Does not support collections of mixed 2D/3D
 *   entities. Use rects as target bounds for 2D colls.
 */
thi.ng.geom.types.utils.fit_all_into_bounds = (function thi$ng$geom$types$utils$fit_all_into_bounds(bounds,coll){
var b = thi.ng.geom.types.utils.coll_bounds(coll);
var s = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,thi.ng.geom.core.div(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(b)));
var b_SINGLEQUOTE_ = thi.ng.geom.core.center(thi.ng.geom.core.scale(b,s),thi.ng.geom.core.centroid(bounds));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28435_SHARP_){
return thi.ng.geom.core.scale_size(thi.ng.geom.core.center(p1__28435_SHARP_,thi.ng.geom.core.unmap_point(b_SINGLEQUOTE_,thi.ng.geom.core.map_point(b,thi.ng.geom.core.centroid(p1__28435_SHARP_)))),s);
}),coll);
});
thi.ng.geom.types.utils.into_mesh = (function thi$ng$geom$types$utils$into_mesh(mesh,add_face,mesh_or_faces){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_face,mesh,(((((!((mesh_or_faces == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === mesh_or_faces.thi$ng$geom$core$PFaceAccess$))))?true:(((!mesh_or_faces.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.PFaceAccess,mesh_or_faces):false)):cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.PFaceAccess,mesh_or_faces)))?thi.ng.geom.core.faces(mesh_or_faces):mesh_or_faces));
});
/**
 * Applies f to all faces of given mesh and adds resulting faces to
 *   new mesh. Thus f should return a seq of faces. Returns new mesh.
 */
thi.ng.geom.types.utils.map_mesh = (function thi$ng$geom$types$utils$map_mesh(f,mesh){
return thi.ng.geom.core.into(thi.ng.geom.core.clear_STAR_(mesh),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([thi.ng.geom.core.faces(mesh)], 0)));
});
thi.ng.geom.types.utils.transform_mesh = (function thi$ng$geom$types$utils$transform_mesh(mesh,add_face,tx){
var tx__$1 = (((((!((tx == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === tx.thi$ng$geom$core$PVectorTransform$))))?true:(((!tx.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.PVectorTransform,tx):false)):cljs.core.native_satisfies_QMARK_(thi.ng.geom.core.PVectorTransform,tx)))?(function (v){
return thi.ng.geom.core.transform_vector(tx,v);
}):tx);
var verts_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,v,(tx__$1.cljs$core$IFn$_invoke$arity$1 ? tx__$1.cljs$core$IFn$_invoke$arity$1(v) : tx__$1.call(null,v)));
}),cljs.core.transient$(cljs.core.PersistentHashMap.EMPTY),thi.ng.geom.core.vertices(mesh)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mesh__$1,f){
var G__28439 = mesh__$1;
var G__28440 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(verts_SINGLEQUOTE_,f);
return (add_face.cljs$core$IFn$_invoke$arity$2 ? add_face.cljs$core$IFn$_invoke$arity$2(G__28439,G__28440) : add_face.call(null,G__28439,G__28440));
}),thi.ng.geom.core.clear_STAR_(mesh),thi.ng.geom.core.faces(mesh));
});

//# sourceMappingURL=thi.ng.geom.types.utils.js.map
