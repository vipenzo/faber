goog.provide('thi.ng.geom.basicmesh');
thi.ng.geom.basicmesh.add_face = (function thi$ng$geom$basicmesh$add_face(mesh,f){
return (new thi.ng.geom.types.BasicMesh(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vertices","vertices",2008905731).cljs$core$IFn$_invoke$arity$1(mesh),f),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(mesh),f),new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(mesh),new cljs.core.Keyword(null,"attribs","attribs",-137878093).cljs$core$IFn$_invoke$arity$1(mesh),null,null,null));
});
/**
 * Builds a new 3d mesh data structure and (optionally) populates it with
 *   the given items (a seq of existing meshes and/or faces). Faces are defined
 *   as vectors of their vertices.
 */
thi.ng.geom.basicmesh.basic_mesh = (function thi$ng$geom$basicmesh$basic_mesh(){
return (new thi.ng.geom.types.BasicMesh(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
});
(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.types.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face,m);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PClear$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.basicmesh.basic_mesh();
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PCenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.center(___$1,thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0());
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return thi.ng.geom.core.transform(___$1,thi.ng.geom.core.matrix.M44.thi$ng$geom$core$PTranslate$translate$arity$2(null,thi.ng.geom.core._(o,thi.ng.geom.core.centroid(___$1))));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.centroid(cljs.core.seq(___$1.vertices));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFlip$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.map_mesh((function (f){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.rseq(f))], null);
}),___$1);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PEdgeAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PEdgeAccess$edges$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__28444_SHARP_){
return thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__28444_SHARP_,cljs.core.first(p1__28444_SHARP_)));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.set)),___$1.faces);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$face_normals$arity$2 = (function (_,force_QMARK_){
var ___$1 = this;
if(cljs.core.seq(___$1.fnormals)){
return ___$1.fnormals;
} else {
if(cljs.core.truth_(force_QMARK_)){
return new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563).cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.compute_face_normals(___$1));
} else {
return null;
}
}
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$face_normal$arity$2 = (function (_,f){
var ___$1 = this;
var fexpr__28451 = ___$1.fnormals;
return (fexpr__28451.cljs$core$IFn$_invoke$arity$1 ? fexpr__28451.cljs$core$IFn$_invoke$arity$1(f) : fexpr__28451.call(null,f));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$vertex_normals$arity$2 = (function (_,force_QMARK_){
var ___$1 = this;
if(cljs.core.truth_(force_QMARK_)){
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$vertex_normal$arity$2 = (function (_,v){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$compute_face_normals$arity$1 = (function (_){
var ___$1 = this;
var fnorms = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var faces = ___$1.faces;
while(true){
if(cljs.core.truth_(faces)){
var f = cljs.core.first(faces);
var G__28454 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(fnorms,f,thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1(f));
var G__28455 = cljs.core.next(faces);
fnorms = G__28454;
faces = G__28455;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(___$1,new cljs.core.Keyword(null,"fnormals","fnormals",-1783998563),cljs.core.persistent_BANG_(fnorms));
}
break;
}
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PNormalAccess$compute_vertex_normals$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.total_volume(___$1.faces);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$faces$arity$1 = (function (_){
var ___$1 = this;
return ___$1.faces;
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$add_face$arity$2 = (function (_,f){
var ___$1 = this;
return thi.ng.geom.basicmesh.add_face(___$1,f);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$vertex_faces$arity$2 = (function (_,v){
var ___$1 = this;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28445_SHARP_){
return (thi.ng.dstruct.core.index_of(p1__28445_SHARP_,v) >= (0));
}),___$1.faces);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PFaceAccess$remove_face$arity$2 = (function (_,f){
var ___$1 = this;
return thi.ng.xerror.core.unsupported_BANG_.cljs$core$IFn$_invoke$arity$0();
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.types.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face,(function (p1__28449_SHARP_){
return thi.ng.geom.core._PLUS_(p1__28449_SHARP_,t);
}));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.centroid(___$1),___$1.vertices);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.types.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face,(function (p1__28446_SHARP_){
return thi.ng.geom.core._STAR_(p1__28446_SHARP_,s);
}));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,sx,sy,sz){
var ___$1 = this;
return thi.ng.geom.types.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face,(function (p1__28447_SHARP_){
return thi.ng.geom.core._STAR_(p1__28447_SHARP_,sx,sy,sz);
}));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
var c = thi.ng.geom.core.centroid(___$1);
return thi.ng.geom.types.utils.transform_mesh(___$1,thi.ng.geom.basicmesh.add_face,(function (p1__28448_SHARP_){
return thi.ng.geom.core.madd(thi.ng.geom.core._(p1__28448_SHARP_,c),s,c);
}));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTessellate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.tessellate(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PTessellate$tessellate$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.types.utils.map_mesh((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return thi.ng.geom.core.utils.tessellate_with_first;
}
})(),___$1);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PGeomContainer$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PGeomContainer$into$arity$2 = (function (_,faces){
var ___$1 = this;
return thi.ng.geom.types.utils.into_mesh(___$1,thi.ng.geom.basicmesh.add_face,faces);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.types.utils.bounding_box(cljs.core.seq(___$1.vertices));
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((0),___$1.vertices);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((1),___$1.vertices);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.axis_range((2),___$1.vertices);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PVertexAccess$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PVertexAccess$vertices$arity$1 = (function (_){
var ___$1 = this;
return ___$1.vertices;
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,opts){
var ___$1 = this;
return thi.ng.geom.core.into(new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(opts),___$1.faces);
}));

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.BasicMesh.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.utils.total_area_3d(___$1.faces);
}));

//# sourceMappingURL=thi.ng.geom.basicmesh.js.map
