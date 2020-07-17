goog.provide('thi.ng.geom.plane');
thi.ng.geom.plane.plane = (function thi$ng$geom$plane$plane(n,w){
return (new thi.ng.geom.types.Plane(thi.ng.geom.core.normalize(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(n)),w,null,null,null));
});
thi.ng.geom.plane.plane_with_point = (function thi$ng$geom$plane$plane_with_point(p,n){
var n__$1 = thi.ng.geom.core.normalize(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(n));
return (new thi.ng.geom.types.Plane(n__$1,(- thi.ng.geom.core.dot(n__$1,p)),null,null,null));
});
thi.ng.geom.plane.plane_from_points = (function thi$ng$geom$plane$plane_from_points(var_args){
var G__28458 = arguments.length;
switch (G__28458) {
case 1:
return thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1 = (function (p__28459){
var vec__28460 = p__28459;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28460,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28460,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28460,(2),null);
return thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$3(a,b,c);
}));

(thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var n = thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3(a,b,c);
return (new thi.ng.geom.types.Plane(n,(- thi.ng.geom.core.dot(n,a)),null,null,null));
}));

(thi.ng.geom.plane.plane_from_points.cljs$lang$maxFixedArity = 3);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(thi.ng.geom.core.transform_vector(m,thi.ng.geom.core.centroid(___$1)),thi.ng.geom.core.transform_vector(m,___$1.n));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$center$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Plane(___$1.n,(0),null,null,null));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$center$arity$2 = (function (_,o){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(o,___$1.n);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PCenter$centroid$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core._STAR_(___$1.n,(- ___$1.w));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PFlip$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Plane(thi.ng.geom.core._(___$1.n),(- ___$1.w),null,null,null));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PClassify$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PClassify$classify_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.math.core.signum.cljs$core$IFn$_invoke$arity$2((thi.ng.geom.core.dot(___$1.n,p) + ___$1.w),thi.ng.math.core._STAR_eps_STAR_);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PVolume$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PVolume$volume$arity$1 = (function (_){
var ___$1 = this;
return 0.0;
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$2 = (function (_,l){
var ___$1 = this;
var vec__28464 = ((cljs.core.map_QMARK_(l))?new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(l):l);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28464,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28464,(1),null);
return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_(p,thi.ng.geom.core._(q,p),___$1.n,___$1.w);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_line$arity$3 = (function (_,p,q){
var ___$1 = this;
return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_(p,thi.ng.geom.core._(q,p),___$1.n,___$1.w);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 = (function (_,ray){
var ___$1 = this;
var vec__28467 = ((cljs.core.map_QMARK_(ray))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(ray),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(ray)], null):ray);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28467,(0),null);
var dir = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28467,(1),null);
return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_(p,dir,___$1.n,___$1.w);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_ray$arity$3 = (function (_,p,dir){
var ___$1 = this;
return thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_(p,dir,___$1.n,___$1.w);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 = (function (_,s){
var ___$1 = this;
if((s instanceof thi.ng.geom.types.Plane)){
return thi.ng.geom.core.intersect.intersect_plane_plane_QMARK_(___$1.n,___$1.w,s.n,s.w);
} else {
if((s instanceof thi.ng.geom.types.Sphere)){
return thi.ng.geom.core.intersect.intersect_plane_sphere_QMARK_(___$1.n,___$1.w,s.p,s.r);
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(s);

}
}
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PDistance$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,p){
var ___$1 = this;
return (thi.ng.geom.core.dot(___$1.n,p) + ___$1.w);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,p){
var ___$1 = this;
var d = thi.ng.geom.core.dist(___$1,p);
return (d * d);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,t){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(thi.ng.geom.core._PLUS_(thi.ng.geom.core.centroid(___$1),t),___$1.n);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var ___$1 = this;
return (new thi.ng.geom.types.Sphere(thi.ng.geom.core.centroid(___$1),thi.ng.math.core.INF_PLUS_,null,null,null));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,s){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(thi.ng.geom.core._STAR_(thi.ng.geom.core.centroid(___$1),s),___$1.n);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,a,b){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(thi.ng.geom.core._STAR_(thi.ng.geom.core.centroid(___$1),a,b),___$1.n);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,a,b,c){
var ___$1 = this;
return thi.ng.geom.plane.plane_with_point(thi.ng.geom.core._STAR_(thi.ng.geom.core.centroid(___$1),a,b,c),___$1.n);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PScale$scale_size$arity$2 = (function (_,s){
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$bounds$arity$1 = (function (_){
var ___$1 = this;
var s = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.width(___$1),thi.ng.geom.core.height(___$1),thi.ng.geom.core.depth(___$1));
return (new thi.ng.geom.types.AABB(s.thi$ng$geom$core$PMathOps$madd$arity$3(null,-0.5,thi.ng.geom.core.centroid(___$1)),s,null,null,null));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$width$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(thi.ng.geom.core.abs(___$1.n),thi.ng.geom.core.vector.V3X,thi.ng.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.math.core.INF_PLUS_;
}
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$height$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(thi.ng.geom.core.abs(___$1.n),thi.ng.geom.core.vector.V3Y,thi.ng.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.math.core.INF_PLUS_;
}
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PBounds$depth$arity$1 = (function (_){
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(thi.ng.geom.core.abs(___$1.n),thi.ng.geom.core.vector.V3Z,thi.ng.math.core._STAR_eps_STAR_))){
return 0.0;
} else {
return thi.ng.math.core.INF_PLUS_;
}
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PMeshConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.geom.core.as_mesh(___$1,cljs.core.PersistentArrayMap.EMPTY);
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 = (function (_,p__28472){
var map__28473 = p__28472;
var map__28473__$1 = (((((!((map__28473 == null))))?(((((map__28473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28473):map__28473);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28473__$1,new cljs.core.Keyword(null,"p","p",151049309));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28473__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28473__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28473__$1,new cljs.core.Keyword(null,"size","size",1098693007),1.0);
var mesh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28473__$1,new cljs.core.Keyword(null,"mesh","mesh",456320595));
var ___$1 = this;
var w = ((function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return size;
}
})() * 0.5);
var h = ((function (){var or__4126__auto__ = height;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return size;
}
})() * 0.5);
var flip_QMARK_ = thi.ng.math.core.delta_EQ_(-1.0,thi.ng.geom.core.dot(___$1.n,thi.ng.geom.core.vector.V3Z));
var p__$1 = thi.ng.geom.core.closest_point(___$1,(function (){var or__4126__auto__ = p;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0();
}
})());
var q = (cljs.core.truth_(flip_QMARK_)?thi.ng.geom.core.quaternion.quat.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(1)):thi.ng.geom.core.quaternion.alignment_quat(thi.ng.geom.core.vector.V3Z,___$1.n));
var face = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__28463_SHARP_){
return thi.ng.geom.core._PLUS_(p__$1,q.thi$ng$geom$core$PVectorTransform$transform_vector$arity$2(null,p1__28463_SHARP_));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((- w),(- h),(0)),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((- w),h,(0)),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(w,h,(0)),thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(w,(- h),(0))], null));
return thi.ng.geom.core.into((function (){var or__4126__auto__ = mesh;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return thi.ng.geom.basicmesh.basic_mesh();
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(flip_QMARK_)?face:cljs.core.rseq(face))], null));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PProximity$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PProximity$closest_point$arity$2 = (function (_,p){
var ___$1 = this;
return thi.ng.geom.core._(p,thi.ng.geom.core.normalize(___$1.n,(___$1.w + thi.ng.geom.core.dot(___$1.n,p))));
}));

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PArea$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.types.Plane.prototype.thi$ng$geom$core$PArea$area$arity$1 = (function (_){
var ___$1 = this;
return thi.ng.math.core.INF_PLUS_;
}));

//# sourceMappingURL=thi.ng.geom.plane.js.map
