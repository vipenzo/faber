goog.provide('thi.ng.geom.core.utils');
thi.ng.geom.core.utils.closest_point_coeff = (function thi$ng$geom$core$utils$closest_point_coeff(p,a,b){
var d = thi.ng.geom.core._(b,a);
return (thi.ng.geom.core.dot(thi.ng.geom.core._(p,a),d) / thi.ng.geom.core.mag_squared(d));
});
thi.ng.geom.core.utils.closest_point_on_line = (function thi$ng$geom$core$utils$closest_point_on_line(p,a,b){
return thi.ng.geom.core.mix(a,b,thi.ng.geom.core.utils.closest_point_coeff(p,a,b));
});
thi.ng.geom.core.utils.closest_point_on_segment = (function thi$ng$geom$core$utils$closest_point_on_segment(p,a,b){
var t = thi.ng.geom.core.utils.closest_point_coeff(p,a,b);
if((t <= 0.0)){
return a;
} else {
if((t >= 1.0)){
return b;
} else {
return thi.ng.geom.core.mix(a,b,t);
}
}
});
thi.ng.geom.core.utils.closest_point_on_segments = (function thi$ng$geom$core$utils$closest_point_on_segments(p,segments){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__47537_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.closest_point_on_segment,p,p1__47537_SHARP_);
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,q){
var d_SINGLEQUOTE_ = thi.ng.geom.core.dist_squared(p,q);
if((d_SINGLEQUOTE_ < (a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1((1)) : a.call(null,(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,d_SINGLEQUOTE_], null);
} else {
return a;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),segments);
});
thi.ng.geom.core.utils.closest_line_between = (function thi$ng$geom$core$utils$closest_line_between(a1,b1,a2,b2){
var p43 = thi.ng.geom.core._(b2,a2);
if(cljs.core.not(thi.ng.geom.core.vector.V3.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3(null,p43,thi.ng.math.core._STAR_eps_STAR_))){
var p21 = thi.ng.geom.core._(b1,a1);
if(cljs.core.not(thi.ng.geom.core.vector.V3.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3(null,p21,thi.ng.math.core._STAR_eps_STAR_))){
var p13 = thi.ng.geom.core._(a1,a2);
var d1343 = thi.ng.geom.core.dot(p13,p43);
var d4321 = thi.ng.geom.core.dot(p43,p21);
var d1321 = thi.ng.geom.core.dot(p13,p21);
var d4343 = thi.ng.geom.core.dot(p43,p43);
var d2121 = thi.ng.geom.core.dot(p21,p21);
var d = ((d2121 * d4343) - (d4321 * d4321));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,d,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
} else {
var n = ((d1343 * d4321) - (d1321 * d4343));
var ua = (n / d);
var ub = (((d4321 * ua) + d1343) / d4343);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"a","a",-2123407586),thi.ng.geom.core.madd(p21,ua,a1),new cljs.core.Keyword(null,"b","b",1482224470),thi.ng.geom.core.madd(p43,ub,a2),new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.utils.dist_STAR_ = (function thi$ng$geom$core$utils$dist_STAR_(rf){
return (function (c,points){
return Math.sqrt(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__47538_SHARP_){
return thi.ng.geom.core.dist_squared(c,p1__47538_SHARP_);
})),rf,(0),points));
});
});
thi.ng.geom.core.utils.min_dist = thi.ng.geom.core.utils.dist_STAR_(cljs.core.min);
thi.ng.geom.core.utils.max_dist = thi.ng.geom.core.utils.dist_STAR_(cljs.core.max);
thi.ng.geom.core.utils.arc_length_index = (function thi$ng$geom$core$utils$arc_length_index(points){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__47539_SHARP_){
return thi.ng.geom.core.dist((p1__47539_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47539_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__47539_SHARP_.call(null,(0))),(p1__47539_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47539_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__47539_SHARP_.call(null,(1))));
})),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (a,d){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,(cljs.core.peek(a) + d));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),points));
});
thi.ng.geom.core.utils.arc_length = (function thi$ng$geom$core$utils$arc_length(points){
return thi.ng.dstruct.core.reduce_pairs.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,thi.ng.geom.core.dist,points);
});
thi.ng.geom.core.utils.centroid = (function thi$ng$geom$core$utils$centroid(p__47549){
var vec__47550 = p__47549;
var seq__47551 = cljs.core.seq(vec__47550);
var first__47552 = cljs.core.first(seq__47551);
var seq__47551__$1 = cljs.core.next(seq__47551);
var x = first__47552;
var xs = seq__47551__$1;
var coll = vec__47550;
var G__47553 = cljs.core.count(coll);
switch (G__47553) {
case (0):
return null;

break;
case (1):
return x;

break;
case (2):
return thi.ng.geom.core.mix(x,cljs.core.first(xs));

break;
default:
var s = (1.0 / cljs.core.count(coll));
var f = (function (x__$1,_){
return (x__$1 * s);
});
return thi.ng.geom.core.reduce_vector(x,cljs.core._PLUS_,f,xs);

}
});
thi.ng.geom.core.utils.center = (function thi$ng$geom$core$utils$center(var_args){
var G__47556 = arguments.length;
switch (G__47556) {
case 2:
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$2 = (function (c_SINGLEQUOTE_,coll){
return thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.centroid(coll),c_SINGLEQUOTE_,coll);
}));

(thi.ng.geom.core.utils.center.cljs$core$IFn$_invoke$arity$3 = (function (c,c_SINGLEQUOTE_,coll){
var d = thi.ng.geom.core._(c_SINGLEQUOTE_,c);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__47554_SHARP_){
return thi.ng.geom.core._PLUS_(p1__47554_SHARP_,d);
}),coll);
}));

(thi.ng.geom.core.utils.center.cljs$lang$maxFixedArity = 3);

thi.ng.geom.core.utils.scale_size = (function thi$ng$geom$core$utils$scale_size(var_args){
var G__47561 = arguments.length;
switch (G__47561) {
case 2:
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$2 = (function (s,coll){
return thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.centroid(coll),s,coll);
}));

(thi.ng.geom.core.utils.scale_size.cljs$core$IFn$_invoke$arity$3 = (function (c,s,coll){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__47557_SHARP_){
return thi.ng.geom.core.madd(thi.ng.geom.core._(p1__47557_SHARP_,c),s,c);
}),coll);
}));

(thi.ng.geom.core.utils.scale_size.cljs$lang$maxFixedArity = 3);

thi.ng.geom.core.utils.bounds_STAR_ = (function thi$ng$geom$core$utils$bounds_STAR_(zero,p__47572){
var vec__47573 = p__47572;
var seq__47574 = cljs.core.seq(vec__47573);
var first__47575 = cljs.core.first(seq__47574);
var seq__47574__$1 = cljs.core.next(seq__47574);
var x = first__47575;
var xs = seq__47574__$1;
var coll = vec__47573;
var c = cljs.core.count(coll);
if((c > (1))){
var p = thi.ng.geom.core.reduce_vector(x,cljs.core.min,xs);
var q = thi.ng.geom.core.reduce_vector(x,cljs.core.max,xs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,thi.ng.geom.core._(q,p)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,zero], null);
} else {
return null;

}
}
});
thi.ng.geom.core.utils.bounding_rect = (function thi$ng$geom$core$utils$bounding_rect(points){
return thi.ng.geom.core.utils.bounds_STAR_(thi.ng.geom.core.vector.V2,points);
});
thi.ng.geom.core.utils.bounding_box = (function thi$ng$geom$core$utils$bounding_box(points){
return thi.ng.geom.core.utils.bounds_STAR_(thi.ng.geom.core.vector.V3,points);
});
thi.ng.geom.core.utils.radial_bounds = (function thi$ng$geom$core$utils$radial_bounds(ctor,c,r_or_points){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(c) : ctor.call(null,c)),((cljs.core.coll_QMARK_(r_or_points))?thi.ng.geom.core.utils.max_dist(c,r_or_points):r_or_points)], null);
});
thi.ng.geom.core.utils.axis_bounds = (function thi$ng$geom$core$utils$axis_bounds(axis,coll){
var xs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__47588_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__47588_SHARP_,axis);
}),coll);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,xs)], null);
});
thi.ng.geom.core.utils.axis_range = (function thi$ng$geom$core$utils$axis_range(axis,coll){
return (- cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,thi.ng.geom.core.utils.axis_bounds(axis,coll)));
});
thi.ng.geom.core.utils.delta_contains = (function thi$ng$geom$core$utils$delta_contains(points,p,eps){
return cljs.core.some((function (p1__47602_SHARP_){
return thi.ng.math.core.delta_EQ_(p,p1__47602_SHARP_,eps);
}),points);
});
thi.ng.geom.core.utils.from_barycentric = (function thi$ng$geom$core$utils$from_barycentric(points,weights){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core._STAR_,points,weights));
});
thi.ng.geom.core.utils.point_at_STAR_ = (function thi$ng$geom$core$utils$point_at_STAR_(points,idx,total,t,i){
var ct = (t * total);
var i__$1 = ((function (){var i__$1 = i;
while(true){
if((ct >= (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i__$1) : idx.call(null,i__$1)))){
var G__47882 = (i__$1 + (1));
i__$1 = G__47882;
continue;
} else {
return i__$1;
}
break;
}
})() | (0));
var i1 = (i__$1 - (1));
var pi = (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i1) : idx.call(null,i1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core.mix(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i1),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(points,i__$1),((ct - pi) / ((idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(i__$1) : idx.call(null,i__$1)) - pi))),i__$1], null);
});
thi.ng.geom.core.utils.point_at = (function thi$ng$geom$core$utils$point_at(var_args){
var G__47617 = arguments.length;
switch (G__47617) {
case 2:
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$2 = (function (t,points){
return thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3(t,points,null);
}));

(thi.ng.geom.core.utils.point_at.cljs$core$IFn$_invoke$arity$3 = (function (t,points,idx){
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,t))){
var n = cljs.core.count(points);
var t__$1 = t;
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return cljs.core.first(points);
} else {
if((1.0 === t__$1)){
return cljs.core.last(points);
} else {
var idx__$1 = (function (){var or__4126__auto__ = idx;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return thi.ng.geom.core.utils.arc_length_index(points);
}
})();
return cljs.core.first(thi.ng.geom.core.utils.point_at_STAR_(points,idx__$1,cljs.core.peek(idx__$1),t__$1,(1)));

}
}
}
} else {
return null;
}
}));

(thi.ng.geom.core.utils.point_at.cljs$lang$maxFixedArity = 3);

thi.ng.geom.core.utils.sample_uniform_STAR_ = (function thi$ng$geom$core$utils$sample_uniform_STAR_(udist,include_last_QMARK_,points){
var idx = thi.ng.geom.core.utils.arc_length_index(points);
var total = cljs.core.peek(idx);
var delta = (udist / total);
var samples = (function (){var t = 0.0;
var i = (1);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if((t < 1.0)){
var vec__47636 = thi.ng.geom.core.utils.point_at_STAR_(points,idx,total,t,i);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47636,(0),null);
var i__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47636,(1),null);
var G__47892 = (t + delta);
var G__47893 = (i__$1 | (0));
var G__47894 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
t = G__47892;
i = G__47893;
acc = G__47894;
continue;
} else {
return acc;
}
break;
}
})();
if(cljs.core.truth_(include_last_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(samples,cljs.core.last(points));
} else {
return samples;
}
});
thi.ng.geom.core.utils.sample_uniform = (function thi$ng$geom$core$utils$sample_uniform(udist,include_last_QMARK_,points){
var n = cljs.core.count(points);
if(((0) === n)){
return null;
} else {
if(((1) === n)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null);
} else {
return thi.ng.geom.core.utils.sample_uniform_STAR_(udist,include_last_QMARK_,points);

}
}
});
thi.ng.geom.core.utils.sample_segment_with_res = (function thi$ng$geom$core$utils$sample_segment_with_res(a,b,res,include_b_QMARK_){
var ls = (function (){var iter__4529__auto__ = (function thi$ng$geom$core$utils$sample_segment_with_res_$_iter__47649(s__47650){
return (new cljs.core.LazySeq(null,(function (){
var s__47650__$1 = s__47650;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47650__$1);
if(temp__5735__auto__){
var s__47650__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47650__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47650__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47652 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47651 = (0);
while(true){
if((i__47651 < size__4528__auto__)){
var t = cljs.core._nth(c__4527__auto__,i__47651);
cljs.core.chunk_append(b__47652,thi.ng.geom.core.mix(a,b,t));

var G__47913 = (i__47651 + (1));
i__47651 = G__47913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47652),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__47649(cljs.core.chunk_rest(s__47650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47652),null);
}
} else {
var t = cljs.core.first(s__47650__$2);
return cljs.core.cons(thi.ng.geom.core.mix(a,b,t),thi$ng$geom$core$utils$sample_segment_with_res_$_iter__47649(cljs.core.rest(s__47650__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(thi.ng.math.core.norm_range(res));
})();
if(cljs.core.truth_(include_b_QMARK_)){
return ls;
} else {
return cljs.core.butlast(ls);
}
});
/**
 * Takes a seq of 4 points in ccw order and 2D vector of normalized UV
 *   coordinates. Applies bilinear interpolation to compute point within
 *   the rect: U is coord along AB/DC edge, V along BC/AD
 */
thi.ng.geom.core.utils.map_bilinear = (function thi$ng$geom$core$utils$map_bilinear(p__47665,p__47666){
var vec__47667 = p__47665;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47667,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47667,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47667,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47667,(3),null);
var vec__47670 = p__47666;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47670,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47670,(1),null);
return thi.ng.geom.core.mix(a,b,d,c,u,v);
});
/**
 * Takes a seq of 8 points defining a cuboid and vector of normalized
 *   UVW coordinates. Applies trilinear interpolation to compute point
 *   within the cuboid: U is coord along AD/BC edge, V along AE/BF, W
 *   along AB/DC (see above diagram)
 */
thi.ng.geom.core.utils.map_trilinear = (function thi$ng$geom$core$utils$map_trilinear(p__47686,p__47687){
var vec__47688 = p__47686;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47688,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47688,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47688,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47688,(3),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47688,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47688,(5),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47688,(6),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47688,(7),null);
var vec__47691 = p__47687;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47691,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47691,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47691,(2),null);
return thi.ng.geom.core.mix(thi.ng.geom.core.mix(a,d,e,h,u,v),thi.ng.geom.core.mix(b,c,f,g,u,v),w);
});
thi.ng.geom.core.utils.tessellate_with_point = (function thi$ng$geom$core$utils$tessellate_with_point(var_args){
var G__47696 = arguments.length;
switch (G__47696) {
case 1:
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1 = (function (points){
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.utils.centroid(points),points);
}));

(thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$2 = (function (c,points){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__47694_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c,(p1__47694_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47694_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__47694_SHARP_.call(null,(0))),(p1__47694_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47694_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__47694_SHARP_.call(null,(1)))],null));
}),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(points,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(points)], null))));
}));

(thi.ng.geom.core.utils.tessellate_with_point.cljs$lang$maxFixedArity = 2);

thi.ng.geom.core.utils.tessellate_with_first = (function thi$ng$geom$core$utils$tessellate_with_first(points){
if((cljs.core.count(points) > (3))){
var vec__47697 = points;
var seq__47698 = cljs.core.seq(vec__47697);
var first__47699 = cljs.core.first(seq__47698);
var seq__47698__$1 = cljs.core.next(seq__47698);
var v0 = first__47699;
var more = seq__47698__$1;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__47700){
var vec__47701 = p__47700;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47701,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47701,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,a,b], null);
}),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),more));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
}
});
thi.ng.geom.core.utils.tessellate_tri_with_midpoints = (function thi$ng$geom$core$utils$tessellate_tri_with_midpoints(p__47704){
var vec__47705 = p__47704;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47705,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47705,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47705,(2),null);
var ab = thi.ng.geom.core.mix(a,b);
var bc = thi.ng.geom.core.mix(b,c);
var ca = thi.ng.geom.core.mix(c,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ab,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,b,bc], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bc,c,ca], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ab,bc,ca], null)], null);
});
thi.ng.geom.core.utils.tessellate_3 = (function thi$ng$geom$core$utils$tessellate_3(points){
var pred__47708 = cljs.core._EQ_;
var expr__47709 = cljs.core.count(points);
if(cljs.core.truth_((pred__47708.cljs$core$IFn$_invoke$arity$2 ? pred__47708.cljs$core$IFn$_invoke$arity$2((3),expr__47709) : pred__47708.call(null,(3),expr__47709)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
if(cljs.core.truth_((pred__47708.cljs$core$IFn$_invoke$arity$2 ? pred__47708.cljs$core$IFn$_invoke$arity$2((4),expr__47709) : pred__47708.call(null,(4),expr__47709)))){
var vec__47724 = points;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47724,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47724,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47724,(2),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47724,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,c,d], null)], null);
} else {
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(points);
}
}
});
thi.ng.geom.core.utils.tessellate_max4 = (function thi$ng$geom$core$utils$tessellate_max4(points){
if((cljs.core.count(points) <= (4))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [points], null);
} else {
return thi.ng.geom.core.utils.tessellate_with_point.cljs$core$IFn$_invoke$arity$1(points);
}
});
thi.ng.geom.core.utils.ortho_normal = (function thi$ng$geom$core$utils$ortho_normal(var_args){
var G__47728 = arguments.length;
switch (G__47728) {
case 1:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$1 = (function (p__47731){
var vec__47732 = p__47731;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47732,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47732,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47732,(2),null);
return thi.ng.geom.core.normalize(thi.ng.geom.core.cross(thi.ng.geom.core._(b,a),thi.ng.geom.core._(c,a)));
}));

(thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return thi.ng.geom.core.normalize(thi.ng.geom.core.cross(a,b));
}));

(thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
return thi.ng.geom.core.normalize(thi.ng.geom.core.cross(thi.ng.geom.core._(b,a),thi.ng.geom.core._(c,a)));
}));

(thi.ng.geom.core.utils.ortho_normal.cljs$lang$maxFixedArity = 3);

thi.ng.geom.core.utils.norm_sign2 = (function thi$ng$geom$core$utils$norm_sign2(p__47743,p__47744,p__47745){
var vec__47746 = p__47743;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47746,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47746,(1),null);
var vec__47749 = p__47744;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47749,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47749,(1),null);
var vec__47752 = p__47745;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47752,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47752,(1),null);
return (((bx - ax) * (cy - ay)) - ((cx - ax) * (by - ay)));
});
thi.ng.geom.core.utils.norm_sign3 = (function thi$ng$geom$core$utils$norm_sign3(a,b,c){
return thi.ng.geom.core.mag(thi.ng.geom.core.cross(thi.ng.geom.core._(b,a),thi.ng.geom.core._(c,a)));
});
thi.ng.geom.core.utils.tri_area2 = (function thi$ng$geom$core$utils$tri_area2(a,b,c){
return (0.5 * thi.ng.geom.core.utils.norm_sign2(a,b,c));
});
thi.ng.geom.core.utils.tri_area3 = (function thi$ng$geom$core$utils$tri_area3(a,b,c){
return (0.5 * thi.ng.geom.core.utils.norm_sign3(a,b,c));
});
thi.ng.geom.core.utils.clockwise2_QMARK_ = (function thi$ng$geom$core$utils$clockwise2_QMARK_(a,b,c){
return (thi.ng.geom.core.utils.norm_sign2(a,b,c) < (0));
});
thi.ng.geom.core.utils.clockwise3_QMARK_ = (function thi$ng$geom$core$utils$clockwise3_QMARK_(a,b,c,n){
return (thi.ng.geom.core.dot(thi.ng.geom.core.cross(thi.ng.geom.core._(b,a),thi.ng.geom.core._(c,a)),n) > (0));
});
thi.ng.geom.core.utils.triangle_barycentric_coords = (function thi$ng$geom$core$utils$triangle_barycentric_coords(var_args){
var G__47780 = arguments.length;
switch (G__47780) {
case 2:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$2 = (function (p__47794,p){
var vec__47795 = p__47794;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47795,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47795,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47795,(2),null);
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,thi.ng.geom.core._(b,a),thi.ng.geom.core._(c,a));
}));

(thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,p){
return thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,thi.ng.geom.core._(b,a),thi.ng.geom.core._(c,a));
}));

(thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,p,u,v){
var w = thi.ng.geom.core._(p,a);
var uu = thi.ng.geom.core.mag_squared(u);
var vv = thi.ng.geom.core.mag_squared(v);
var uv = thi.ng.geom.core.dot(u,v);
var wu = thi.ng.geom.core.dot(w,u);
var wv = thi.ng.geom.core.dot(w,v);
var denom = (1.0 / ((uv * uv) - (uu * vv)));
var s = (denom * ((uv * wv) - (vv * wu)));
var t = (denom * ((uv * wu) - (uu * wv)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1.0 - (s + t)),s,t], null);
}));

(thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$lang$maxFixedArity = 6);

thi.ng.geom.core.utils.point_in_triangle2_QMARK_ = (function thi$ng$geom$core$utils$point_in_triangle2_QMARK_(p,a,b,c){
if(thi.ng.geom.core.utils.clockwise2_QMARK_(a,b,c)){
return (((thi.ng.geom.core.utils.norm_sign2(a,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2(b,a,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2(c,b,p) >= 0.0)));
} else {
return (((thi.ng.geom.core.utils.norm_sign2(b,c,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2(a,b,p) >= 0.0)) && ((thi.ng.geom.core.utils.norm_sign2(c,a,p) >= 0.0)));
}
});
thi.ng.geom.core.utils.point_in_triangle3_QMARK_ = (function thi$ng$geom$core$utils$point_in_triangle3_QMARK_(p,a,b,c){
var u = thi.ng.geom.core._(b,a);
var v = thi.ng.geom.core._(c,a);
var n = thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2(u,v);
var cl = (thi.ng.geom.core.dot(n,p) - thi.ng.geom.core.dot(n,a));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,cl))){
var vec__47809 = thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,p,u,v);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47809,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47809,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47809,(2),null);
if((u__$1 >= 0.0)){
if((w >= 0.0)){
return thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,v__$1);
} else {
return false;
}
} else {
return false;
}
} else {
return null;
}
});
thi.ng.geom.core.utils.tessellating_transducer = (function thi$ng$geom$core$utils$tessellating_transducer(f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.core.utils.tessellate_with_first),cljs.core.map.cljs$core$IFn$_invoke$arity$1(f));
});
thi.ng.geom.core.utils.area_xf = thi.ng.geom.core.utils.tessellating_transducer((function (p1__47814_SHARP_){
var G__47815 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.utils.tri_area3,p1__47814_SHARP_);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__47815) : thi.ng.math.core.abs.call(null,G__47815));
}));
thi.ng.geom.core.utils.volume_xf = thi.ng.geom.core.utils.tessellating_transducer((function (p1__47824_SHARP_){
return thi.ng.geom.core.dot((p1__47824_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47824_SHARP_.cljs$core$IFn$_invoke$arity$1((0)) : p1__47824_SHARP_.call(null,(0))),thi.ng.geom.core.cross((p1__47824_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47824_SHARP_.cljs$core$IFn$_invoke$arity$1((1)) : p1__47824_SHARP_.call(null,(1))),(p1__47824_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47824_SHARP_.cljs$core$IFn$_invoke$arity$1((2)) : p1__47824_SHARP_.call(null,(2)))));
}));
thi.ng.geom.core.utils.total_area_3d = (function thi$ng$geom$core$utils$total_area_3d(faces){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.area_xf,cljs.core._PLUS_,faces);
});
thi.ng.geom.core.utils.total_volume = (function thi$ng$geom$core$utils$total_volume(faces){
return (cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core.utils.volume_xf,cljs.core._PLUS_,faces) / 6.0);
});

//# sourceMappingURL=thi.ng.geom.core.utils.js.map
