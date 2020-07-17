goog.provide('thi.ng.geom.core.intersect');
thi.ng.geom.core.intersect.sq = (function thi$ng$geom$core$intersect$sq(x){
return (x * x);
});
thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_ = (function thi$ng$geom$core$intersect$intersect_circle_circle_QMARK_(var_args){
var G__27696 = arguments.length;
switch (G__27696) {
case 2:
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__27698,p__27699){
var map__27700 = p__27698;
var map__27700__$1 = (((((!((map__27700 == null))))?(((((map__27700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27700):map__27700);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27700__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27700__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__27701 = p__27699;
var map__27701__$1 = (((((!((map__27701 == null))))?(((((map__27701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27701):map__27701);
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27701__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27701__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4(p,r1,q,r2);
}));

(thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,r1,q,r2){
var delta = thi.ng.geom.core._(q,p);
var d = thi.ng.geom.core.mag(delta);
if((((d <= (r1 + r2))) && ((d >= (function (){var G__27705 = (r1 - r2);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__27705) : thi.ng.math.core.abs.call(null,G__27705));
})())))){
var a = ((((r1 * r1) - (r2 * r2)) + (d * d)) / (2.0 * d));
var invd = (1.0 / d);
var p__$1 = thi.ng.geom.core.madd(delta,(a * invd),p);
var h = Math.sqrt(((r1 * r1) - (a * a)));
var perp = thi.ng.geom.core._STAR_(thi.ng.geom.core.normal(delta),(h * invd));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._PLUS_(p__$1,perp),thi.ng.geom.core._(p__$1,perp)], null);
} else {
return null;
}
}));

(thi.ng.geom.core.intersect.intersect_circle_circle_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_ = (function thi$ng$geom$core$intersect$intersect_rect_rect_QMARK_(var_args){
var G__27712 = arguments.length;
switch (G__27712) {
case 2:
return thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__27714,p__27715){
var map__27716 = p__27714;
var map__27716__$1 = (((((!((map__27716 == null))))?(((((map__27716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27716):map__27716);
var vec__27717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27716__$1,new cljs.core.Keyword(null,"p","p",151049309));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27717,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27717,(1),null);
var vec__27720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27716__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27720,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27720,(1),null);
var map__27723 = p__27715;
var map__27723__$1 = (((((!((map__27723 == null))))?(((((map__27723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27723):map__27723);
var vec__27724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27723__$1,new cljs.core.Keyword(null,"p","p",151049309));
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27724,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27724,(1),null);
var vec__27727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27723__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var qw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27727,(0),null);
var qh = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27727,(1),null);
return (!((((px > (qx + qw))) || ((qx > (px + w))) || ((py > (qy + qh))) || ((qy > (py + h))))));
}));

(thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__27736,p__27737,p__27738,p__27739){
var vec__27742 = p__27736;
var px1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27742,(0),null);
var py1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27742,(1),null);
var vec__27745 = p__27737;
var qx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27745,(0),null);
var qy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27745,(1),null);
var vec__27748 = p__27738;
var px2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748,(0),null);
var py2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748,(1),null);
var vec__27751 = p__27739;
var qx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(0),null);
var qy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27751,(1),null);
return (!((((px1 > qx2)) || ((px2 > qx1)) || ((py1 > qy2)) || ((py2 > qy1)))));
}));

(thi.ng.geom.core.intersect.intersect_rect_rect_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_ = (function thi$ng$geom$core$intersect$intersect_rect_circle_QMARK_(var_args){
var G__27756 = arguments.length;
switch (G__27756) {
case 2:
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__27757,p__27758){
var map__27759 = p__27757;
var map__27759__$1 = (((((!((map__27759 == null))))?(((((map__27759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27759):map__27759);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27759__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27759__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__27760 = p__27758;
var map__27760__$1 = (((((!((map__27760 == null))))?(((((map__27760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27760):map__27760);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27760__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27760__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4(p,thi.ng.geom.core._PLUS_(p,sz),s,r);
}));

(thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__27768,p__27769,p__27770,r){
var vec__27771 = p__27768;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27771,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27771,(1),null);
var vec__27774 = p__27769;
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27774,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27774,(1),null);
var vec__27777 = p__27770;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27777,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27777,(1),null);
var ds = (((cx < px))?thi.ng.geom.core.intersect.sq((cx - px)):(((cx > qx))?thi.ng.geom.core.intersect.sq((cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.core.intersect.sq((cy - py)):(((cy > qy))?thi.ng.geom.core.intersect.sq((cy - qy)):0.0)));
return (ds__$1 <= (r * r));
}));

(thi.ng.geom.core.intersect.intersect_rect_circle_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_ = (function thi$ng$geom$core$intersect$intersect_aabb_aabb_QMARK_(var_args){
var G__27784 = arguments.length;
switch (G__27784) {
case 2:
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__27791,p__27792){
var map__27793 = p__27791;
var map__27793__$1 = (((((!((map__27793 == null))))?(((((map__27793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27793):map__27793);
var pa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27793__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27793__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__27794 = p__27792;
var map__27794__$1 = (((((!((map__27794 == null))))?(((((map__27794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27794):map__27794);
var pb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27794__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27794__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4(pa,pb,thi.ng.geom.core._PLUS_(pa,sa),thi.ng.geom.core._PLUS_(pb,sb));
}));

(thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (pa,pb,qa,qb){
if(((((pa.cljs$core$IFn$_invoke$arity$1 ? pa.cljs$core$IFn$_invoke$arity$1((0)) : pa.call(null,(0))) <= (qb.cljs$core$IFn$_invoke$arity$1 ? qb.cljs$core$IFn$_invoke$arity$1((0)) : qb.call(null,(0))))) && (((pb.cljs$core$IFn$_invoke$arity$1 ? pb.cljs$core$IFn$_invoke$arity$1((0)) : pb.call(null,(0))) <= (qa.cljs$core$IFn$_invoke$arity$1 ? qa.cljs$core$IFn$_invoke$arity$1((0)) : qa.call(null,(0))))))){
if(((((pa.cljs$core$IFn$_invoke$arity$1 ? pa.cljs$core$IFn$_invoke$arity$1((1)) : pa.call(null,(1))) <= (qb.cljs$core$IFn$_invoke$arity$1 ? qb.cljs$core$IFn$_invoke$arity$1((1)) : qb.call(null,(1))))) && (((pb.cljs$core$IFn$_invoke$arity$1 ? pb.cljs$core$IFn$_invoke$arity$1((1)) : pb.call(null,(1))) <= (qa.cljs$core$IFn$_invoke$arity$1 ? qa.cljs$core$IFn$_invoke$arity$1((1)) : qa.call(null,(1))))))){
return ((((pa.cljs$core$IFn$_invoke$arity$1 ? pa.cljs$core$IFn$_invoke$arity$1((2)) : pa.call(null,(2))) <= (qb.cljs$core$IFn$_invoke$arity$1 ? qb.cljs$core$IFn$_invoke$arity$1((2)) : qb.call(null,(2))))) && (((pb.cljs$core$IFn$_invoke$arity$1 ? pb.cljs$core$IFn$_invoke$arity$1((2)) : pb.call(null,(2))) <= (qa.cljs$core$IFn$_invoke$arity$1 ? qa.cljs$core$IFn$_invoke$arity$1((2)) : qa.call(null,(2))))));
} else {
return null;
}
} else {
return null;
}
}));

(thi.ng.geom.core.intersect.intersect_aabb_aabb_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_aabb_sphere_QMARK_(var_args){
var G__27798 = arguments.length;
switch (G__27798) {
case 2:
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__27799,p__27800){
var map__27801 = p__27799;
var map__27801__$1 = (((((!((map__27801 == null))))?(((((map__27801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27801):map__27801);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27801__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sz = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27801__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var map__27802 = p__27800;
var map__27802__$1 = (((((!((map__27802 == null))))?(((((map__27802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27802):map__27802);
var s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27802__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27802__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4(p,thi.ng.geom.core._PLUS_(p,sz),s,r);
}));

(thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p__27808,p__27809,p__27810,r){
var vec__27811 = p__27808;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27811,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27811,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27811,(2),null);
var vec__27814 = p__27809;
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27814,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27814,(1),null);
var qz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27814,(2),null);
var vec__27817 = p__27810;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27817,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27817,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27817,(2),null);
var ds = (((cx < px))?thi.ng.geom.core.intersect.sq((cx - px)):(((cx > qx))?thi.ng.geom.core.intersect.sq((cx - qx)):0.0));
var ds__$1 = (ds + (((cy < py))?thi.ng.geom.core.intersect.sq((cy - py)):(((cy > qy))?thi.ng.geom.core.intersect.sq((cy - qy)):0.0)));
var ds__$2 = (ds__$1 + (((cz < pz))?thi.ng.geom.core.intersect.sq((cz - pz)):(((cz > qz))?thi.ng.geom.core.intersect.sq((cz - qz)):0.0)));
return (ds__$2 <= (r * r));
}));

(thi.ng.geom.core.intersect.intersect_aabb_sphere_QMARK_.cljs$lang$maxFixedArity = 4);

/**
 * Takes 2 vectors defining an AABB (min-p & size) and a seq of plane
 *   parameters (each element [normal w]). The plane normals must be
 *   pointing *inwards*. Returns :inside, :intersect or :outside
 */
thi.ng.geom.core.intersect.intersect_aabb_frustum_QMARK_ = (function thi$ng$geom$core$intersect$intersect_aabb_frustum_QMARK_(p__27826,size,planes){
var vec__27827 = p__27826;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27827,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27827,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27827,(2),null);
var p = vec__27827;
var vec__27830 = thi.ng.geom.core._PLUS_(p,size);
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,(1),null);
var qz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,(2),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,p__27834){
var vec__27835 = p__27834;
var vec__27838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27835,(0),null);
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27838,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27838,(1),null);
var nz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27838,(2),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27835,(1),null);
var vx = (((nx > (0)))?px:qx);
var vy = (((ny > (0)))?py:qy);
var vz = (((nz > (0)))?pz:qz);
if((((((nx * vx) + (ny * vy)) + (nz * vz)) + w) > (0))){
return cljs.core.reduced(new cljs.core.Keyword(null,"outside","outside",-13164995));
} else {
var vx__$1 = (((nx > (0)))?qx:px);
var vy__$1 = (((ny > (0)))?qy:py);
var vz__$1 = (((nz > (0)))?qz:pz);
if((((((nx * vx__$1) + (ny * vy__$1)) + (nz * vz__$1)) + w) > (0))){
return new cljs.core.Keyword(null,"intersect","intersect",-2039792392);
} else {
return res;
}
}
}),new cljs.core.Keyword(null,"inside","inside",1972503011),planes);
});
thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_sphere_sphere_QMARK_(var_args){
var G__27847 = arguments.length;
switch (G__27847) {
case 2:
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__27851,p__27852){
var map__27853 = p__27851;
var map__27853__$1 = (((((!((map__27853 == null))))?(((((map__27853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27853):map__27853);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27853__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27853__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__27854 = p__27852;
var map__27854__$1 = (((((!((map__27854 == null))))?(((((map__27854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27854):map__27854);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27854__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27854__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4(p1,r1,p2,r2);
}));

(thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p1,r1,p2,r2){
return (thi.ng.geom.core.dist_squared(p1,p2) <= ((r1 + r2) * (r1 + r2)));
}));

(thi.ng.geom.core.intersect.intersect_sphere_sphere_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_sphere_QMARK_(var_args){
var G__27859 = arguments.length;
switch (G__27859) {
case 2:
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__27863,p__27864){
var map__27865 = p__27863;
var map__27865__$1 = (((((!((map__27865 == null))))?(((((map__27865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27865):map__27865);
var rp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27865__$1,new cljs.core.Keyword(null,"p","p",151049309));
var dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27865__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var map__27866 = p__27864;
var map__27866__$1 = (((((!((map__27866 == null))))?(((((map__27866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27866):map__27866);
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27866__$1,new cljs.core.Keyword(null,"p","p",151049309));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27866__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4(rp,dir,p,r);
}));

(thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (rp,dir,p,r){
var q = thi.ng.geom.core._(p,rp);
var ds = thi.ng.geom.core.mag_squared(q);
var v = (- thi.ng.geom.core.dot(q,dir));
var d = ((r * r) - (ds - (v * v)));
if((d >= 0.0)){
var d__$1 = Math.sqrt(d);
var a = (v + d__$1);
var b = (v - d__$1);
if((!((((a < (0))) && ((b < (0))))))){
if((((a > (0))) && ((b > (0))))){
if((a > b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
if((b > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
} else {
return null;
}
}));

(thi.ng.geom.core.intersect.intersect_ray_sphere_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.core.intersect.intersect_ray_triangle3_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_triangle3_QMARK_(p,d,a,b,c){
var u = thi.ng.geom.core._(b,a);
var v = thi.ng.geom.core._(c,a);
var n = thi.ng.geom.core.cross(u,v);
if(cljs.core.truth_(thi.ng.geom.core.vector.V3.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2(null,n))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"degenerate","degenerate",186148125)], null);
} else {
var w0 = thi.ng.geom.core._(p,a);
var a_SINGLEQUOTE_ = (- thi.ng.geom.core.dot(n,w0));
var b_SINGLEQUOTE_ = thi.ng.geom.core.dot(n,d);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,b_SINGLEQUOTE_))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,a_SINGLEQUOTE_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"same-plane","same-plane",-2008485673)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
}
} else {
var r = (a_SINGLEQUOTE_ / b_SINGLEQUOTE_);
if((r < 0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761)], null);
} else {
var i = thi.ng.geom.core.madd(d,r,p);
var vec__27875 = thi.ng.geom.core.utils.triangle_barycentric_coords.cljs$core$IFn$_invoke$arity$6(a,b,c,i,u,v);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27875,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27875,(1),null);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27875,(2),null);
if(cljs.core.truth_((((u__$1 >= 0.0))?(((w >= 0.0))?thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,v__$1):false):false))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"no-intersect","no-intersect",1400023761),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
}
}
});
thi.ng.geom.core.intersect.triaabb_axis_test = (function thi$ng$geom$core$intersect$triaabb_axis_test(pa1,pb1,pa2,pb2,a,b,fa,fb,sa,sb){
var q = ((a * pa1) + (b * pb1));
var r = ((a * pa2) + (b * pb2));
var vec__27886 = (((q < r))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,r], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,q], null));
var min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27886,(0),null);
var max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27886,(1),null);
var rad = ((fa * sa) + (fb * sb));
if((min <= rad)){
return (max >= (- rad));
} else {
return null;
}
});
thi.ng.geom.core.intersect.triaabb_edge_test_e0 = (function thi$ng$geom$core$intersect$triaabb_edge_test_e0(p__27889,p__27890,p__27891,p__27892,p__27893){
var vec__27895 = p__27889;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27895,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27895,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27895,(2),null);
var a = vec__27895;
var vec__27898 = p__27890;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27898,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27898,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27898,(2),null);
var b = vec__27898;
var vec__27901 = p__27891;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27901,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27901,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27901,(2),null);
var vec__27904 = p__27892;
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27904,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27904,(1),null);
var ez = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27904,(2),null);
var e = vec__27904;
var vec__27907 = p__27893;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27907,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27907,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27907,(2),null);
var vec__27912 = thi.ng.geom.core.abs(e);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(1),null);
var fz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27912,(2),null);
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test(ay,az,cy,cz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test(ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.core.intersect.triaabb_axis_test(bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.intersect.triaabb_edge_test_e1 = (function thi$ng$geom$core$intersect$triaabb_edge_test_e1(p__27925,p__27926,p__27927,p__27928,p__27929){
var vec__27930 = p__27925;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27930,(2),null);
var vec__27933 = p__27926;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27933,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27933,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27933,(2),null);
var b = vec__27933;
var vec__27936 = p__27927;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27936,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27936,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27936,(2),null);
var c = vec__27936;
var vec__27939 = p__27928;
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27939,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27939,(1),null);
var ez = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27939,(2),null);
var e = vec__27939;
var vec__27942 = p__27929;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27942,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27942,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27942,(2),null);
var vec__27948 = thi.ng.geom.core.abs(e);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27948,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27948,(1),null);
var fz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27948,(2),null);
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test(ay,az,cy,cz,ez,ey,fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test(ax,az,cx,cz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.core.intersect.triaabb_axis_test(ax,ay,bx,by,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.intersect.triaabb_edge_test_e2 = (function thi$ng$geom$core$intersect$triaabb_edge_test_e2(p__27961,p__27962,p__27963,p__27964,p__27965){
var vec__27966 = p__27961;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27966,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27966,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27966,(2),null);
var a = vec__27966;
var vec__27969 = p__27962;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27969,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27969,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27969,(2),null);
var vec__27972 = p__27963;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27972,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27972,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27972,(2),null);
var c = vec__27972;
var vec__27975 = p__27964;
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27975,(0),null);
var ey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27975,(1),null);
var ez = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27975,(2),null);
var e = vec__27975;
var vec__27978 = p__27965;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27978,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27978,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27978,(2),null);
var vec__27982 = thi.ng.geom.core.abs(e);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27982,(0),null);
var fy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27982,(1),null);
var fz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27982,(2),null);
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test(ay,az,by,bz,ez,(- ey),fz,fy,sy,sz))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_axis_test(ax,az,bx,bz,(- ez),ex,fz,fx,sx,sz))){
return thi.ng.geom.core.intersect.triaabb_axis_test(bx,by,cx,cy,ey,(- ex),fy,fx,sx,sy);
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.intersect.triaabb_edge_minmax = (function thi$ng$geom$core$intersect$triaabb_edge_minmax(a,b,c,s){
if(((function (){var x__4217__auto__ = (function (){var x__4217__auto__ = a;
var y__4218__auto__ = b;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var y__4218__auto__ = c;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})() < s)){
return ((function (){var x__4214__auto__ = (function (){var x__4214__auto__ = a;
var y__4215__auto__ = b;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = c;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})() >= (- s));
} else {
return null;
}
});
thi.ng.geom.core.intersect.intersect_triangle3_aabb_QMARK_ = (function thi$ng$geom$core$intersect$intersect_triangle3_aabb_QMARK_(a,b,c,p,s){
var vec__27990 = thi.ng.geom.core._STAR_(s,0.5);
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27990,(2),null);
var s__$1 = vec__27990;
var p__$1 = thi.ng.geom.core._PLUS_(p,s__$1);
var vec__27993 = thi.ng.geom.core._(a,p__$1);
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27993,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27993,(1),null);
var az = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27993,(2),null);
var a__$1 = vec__27993;
var vec__27996 = thi.ng.geom.core._(b,p__$1);
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27996,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27996,(1),null);
var bz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27996,(2),null);
var b__$1 = vec__27996;
var vec__27999 = thi.ng.geom.core._(c,p__$1);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27999,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27999,(1),null);
var cz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27999,(2),null);
var c__$1 = vec__27999;
var e0 = thi.ng.geom.core._(b__$1,a__$1);
var e1 = thi.ng.geom.core._(c__$1,b__$1);
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_test_e0(a__$1,b__$1,c__$1,e0,s__$1))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_test_e1(a__$1,b__$1,c__$1,e1,s__$1))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_test_e2(a__$1,b__$1,c__$1,thi.ng.geom.core._(a__$1,c__$1),s__$1))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_minmax(ax,bx,cx,sx))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_minmax(ay,by,cy,sy))){
if(cljs.core.truth_(thi.ng.geom.core.intersect.triaabb_edge_minmax(az,bz,cz,sz))){
var G__28003 = a__$1;
var G__28004 = thi.ng.geom.core.cross(e0,e1);
var G__28005 = s__$1;
return (thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3(G__28003,G__28004,G__28005) : thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.call(null,G__28003,G__28004,G__28005));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_ = (function thi$ng$geom$core$intersect$intersect_line2_line2_QMARK_(p__28011,p__28012,p__28013,p__28014){
var vec__28015 = p__28011;
var px1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28015,(0),null);
var py1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28015,(1),null);
var p = vec__28015;
var vec__28018 = p__28012;
var qx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28018,(0),null);
var qy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28018,(1),null);
var q = vec__28018;
var vec__28021 = p__28013;
var px2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28021,(0),null);
var py2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28021,(1),null);
var lp = vec__28021;
var vec__28024 = p__28014;
var qx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28024,(0),null);
var qy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28024,(1),null);
var lq = vec__28024;
var dx1 = (qx1 - px1);
var dy1 = (qy1 - py1);
var dx2 = (qx2 - px2);
var dy2 = (qy2 - py2);
var dx12 = (px1 - px2);
var dy12 = (py1 - py2);
var denom = ((dy2 * dx1) - (dx2 * dy1));
var na = ((dx2 * dy12) - (dy2 * dx12));
var nb = ((dx1 * dy12) - (dy1 * dx12));
if((denom === (0))){
if((((na === (0))) && ((nb === (0))))){
var ip = thi.ng.geom.core.utils.closest_point_on_segment(lp,p,q);
var iq = thi.ng.geom.core.utils.closest_point_on_segment(lq,p,q);
if(cljs.core.truth_((function (){var or__4126__auto__ = thi.ng.math.core.delta_EQ_(ip,lp);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return thi.ng.math.core.delta_EQ_(iq,lq);
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident","coincident",-473799301),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"coincident-no-intersect","coincident-no-intersect",1935247952),new cljs.core.Keyword(null,"p","p",151049309),ip,new cljs.core.Keyword(null,"q","q",689001697),iq], null);
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parallel","parallel",-1863607128)], null);
}
} else {
var ua = (na / denom);
var ub = (nb / denom);
var i = thi.ng.geom.core.mix(p,q,ua);
if((((ua >= 0.0)) && ((ua <= 1.0)) && ((ub >= 0.0)) && ((ub <= 1.0)))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i,new cljs.core.Keyword(null,"ua","ua",834554218),ua,new cljs.core.Keyword(null,"ub","ub",-1843904981),ub], null);
}
}
});
thi.ng.geom.core.intersect.intersect_line2_edges_QMARK_ = (function thi$ng$geom$core$intersect$intersect_line2_edges_QMARK_(rp,rq,edges){
return cljs.core.first(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__28036){
var vec__28037 = p__28036;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28037,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28037,(1),null);
return thi.ng.geom.core.intersect.intersect_line2_line2_QMARK_(rp,rq,p,q);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__28029_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p1__28029_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
var G__28043 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__28029_SHARP_);
var fexpr__28042 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"intersect","intersect",-2039792392),null,new cljs.core.Keyword(null,"coincident","coincident",-473799301),null], null), null);
return (fexpr__28042.cljs$core$IFn$_invoke$arity$1 ? fexpr__28042.cljs$core$IFn$_invoke$arity$1(G__28043) : fexpr__28042.call(null,G__28043));
} else {
return and__4115__auto__;
}
}))),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (closest,isec){
var p = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(isec);
var d = thi.ng.geom.core.dist_squared(rp,p);
if((d < (closest.cljs$core$IFn$_invoke$arity$1 ? closest.cljs$core$IFn$_invoke$arity$1((1)) : closest.call(null,(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,d], null);
} else {
return closest;
}
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,thi.ng.math.core.INF_PLUS_], null),edges));
});
thi.ng.geom.core.intersect.intersect_ray2_edges_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray2_edges_QMARK_(rp,rd,edges){
return thi.ng.geom.core.intersect.intersect_line2_edges_QMARK_(rp,thi.ng.geom.core.madd(rd,1.0E29,rp),edges);
});
thi.ng.geom.core.intersect.intersect_plane_plane_QMARK_ = (function thi$ng$geom$core$intersect$intersect_plane_plane_QMARK_(an,aw,bn,bw){
if(cljs.core.truth_((function (){var or__4126__auto__ = thi.ng.math.core.delta_EQ_(aw,bw,thi.ng.math.core._STAR_eps_STAR_);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return thi.ng.math.core.delta_EQ_(an,bn,thi.ng.math.core._STAR_eps_STAR_);
}
})())){
return null;
} else {
var od = thi.ng.geom.core.dot(an,bn);
var det = ((1) / ((od * od) + (-1)));
var u = (((bw * od) + aw) * det);
var v = (((aw * od) + bw) * det);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p","p",151049309),thi.ng.geom.core.madd(an,u,thi.ng.geom.core._STAR_(bn,v)),new cljs.core.Keyword(null,"dir","dir",1734754661),thi.ng.geom.core.utils.ortho_normal.cljs$core$IFn$_invoke$arity$2(an,bn)], null);
}
});
thi.ng.geom.core.intersect.intersect_ray_plane_QMARK_ = (function thi$ng$geom$core$intersect$intersect_ray_plane_QMARK_(rp,dir,n,w){
var dp = thi.ng.geom.core.dot(n,dir);
var dn = (thi.ng.geom.core.dot(n,rp) + w);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,dp,thi.ng.math.core._STAR_eps_STAR_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((dn === (0)))?new cljs.core.Keyword(null,"on-plane","on-plane",-1177899984):new cljs.core.Keyword(null,"parallel","parallel",-1863607128))], null);
} else {
var du = (- (dn / dp));
var i = thi.ng.geom.core.madd(dir,du,rp);
if(cljs.core.truth_(thi.ng.math.core.in_range_QMARK_.cljs$core$IFn$_invoke$arity$3(0.0,1.0,du))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect","intersect",-2039792392),new cljs.core.Keyword(null,"p","p",151049309),i], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"intersect-outside","intersect-outside",-337610558),new cljs.core.Keyword(null,"p","p",151049309),i], null);
}
}
});
/**
 * Takes a point & normal defining a plane and 2 vectors defining an
 *   AABB (min-p & size). Returns true if plane intersects box.
 */
thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_ = (function thi$ng$geom$core$intersect$intersect_plane_aabb_QMARK_(var_args){
var G__28050 = arguments.length;
switch (G__28050) {
case 4:
return thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (p,n,q,s){
var s2 = thi.ng.geom.core._STAR_(s,0.5);
return thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3(thi.ng.geom.core._(p,thi.ng.geom.core._PLUS_(q,s2)),n,s2);
}));

(thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (p__28054,p__28055,p__28056){
var vec__28057 = p__28054;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28057,(2),null);
var vec__28060 = p__28055;
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28060,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28060,(1),null);
var nz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28060,(2),null);
var n = vec__28060;
var vec__28063 = p__28056;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28063,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28063,(1),null);
var sz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28063,(2),null);
var vec__28066 = (((nx > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sx) - px),(sx - px)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx - px),((- sx) - px)], null));
var vx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28066,(0),null);
var vx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28066,(1),null);
var vec__28069 = (((ny > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sy) - py),(sy - py)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sy - py),((- sy) - py)], null));
var vy1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28069,(0),null);
var vy2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28069,(1),null);
var vec__28072 = (((nz > (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((- sz) - pz),(sz - pz)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sz - pz),((- sz) - pz)], null));
var vz1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28072,(0),null);
var vz2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28072,(1),null);
if(((((nx * vx1) + (ny * vy1)) + (nz * vz1)) <= 0.0)){
return ((((nx * vx2) + (ny * vy2)) + (nz * vz2)) >= 0.0);
} else {
return null;
}
}));

(thi.ng.geom.core.intersect.intersect_plane_aabb_QMARK_.cljs$lang$maxFixedArity = 4);

thi.ng.geom.core.intersect.intersect_plane_sphere_QMARK_ = (function thi$ng$geom$core$intersect$intersect_plane_sphere_QMARK_(n,w,p,r){
return ((function (){var G__28079 = (thi.ng.geom.core.dot(n,p) + w);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__28079) : thi.ng.math.core.abs.call(null,G__28079));
})() <= r);
});
/**
 * Computes sum((a-b)*c), where a, b, c are 3D vectors.
 */
thi.ng.geom.core.intersect.subdot = (function thi$ng$geom$core$intersect$subdot(a,b,c){
var d = thi.ng.geom.core.subm(a,b,c);
return (((d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1((0)) : d.call(null,(0))) + (d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1((1)) : d.call(null,(1)))) + (d.cljs$core$IFn$_invoke$arity$1 ? d.cljs$core$IFn$_invoke$arity$1((2)) : d.call(null,(2))));
});
/**
 * Takes a transformation fn and the 4 delta vectors between tetra1/tetra2.
 *  Returns 2-elem vec of [bitmask affine-coords].
 */
thi.ng.geom.core.intersect.face_a = (function thi$ng$geom$core$intersect$face_a(f,deltas){
var aff = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,deltas);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((((((aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1((0)) : aff.call(null,(0))) > (0)))?(1):(0)) | ((((aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1((1)) : aff.call(null,(1))) > (0)))?(2):(0))) | ((((aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1((2)) : aff.call(null,(2))) > (0)))?(4):(0))) | ((((aff.cljs$core$IFn$_invoke$arity$1 ? aff.cljs$core$IFn$_invoke$arity$1((3)) : aff.call(null,(3))) > (0)))?(8):(0))),aff], null);
});
/**
 * Takes the 4 delta vectors between tetra2/tetra1 and a normal.
 *  Returns true if all dot products are positive.
 */
thi.ng.geom.core.intersect.face_b1_QMARK_ = (function thi$ng$geom$core$intersect$face_b1_QMARK_(deltas,n){
return cljs.core.every_QMARK_((function (p1__28085_SHARP_){
return (thi.ng.geom.core.dot(p1__28085_SHARP_,n) > (0));
}),deltas);
});
/**
 * Like face-b1?, but optimized for last face of tetrahedron.
 */
thi.ng.geom.core.intersect.face_b2_QMARK_ = (function thi$ng$geom$core$intersect$face_b2_QMARK_(verts,refv,n){
return cljs.core.every_QMARK_((function (p1__28087_SHARP_){
return (thi.ng.geom.core.intersect.subdot(p1__28087_SHARP_,refv,n) > (0));
}),verts);
});
/**
 * Takes 2 bitmasks and edge flags, returns true if there's a
 *  separating plane between the faces shared by that edge.
 */
thi.ng.geom.core.intersect.edge_a = (function thi$ng$geom$core$intersect$edge_a(ma,mb,ea,eb){
var xa = (ma & (ma ^ mb));
var xb = (mb & (xa ^ mb));
var edge = (function (a,b,i,j){
var cp = (((ea.cljs$core$IFn$_invoke$arity$1 ? ea.cljs$core$IFn$_invoke$arity$1(i) : ea.call(null,i)) * (eb.cljs$core$IFn$_invoke$arity$1 ? eb.cljs$core$IFn$_invoke$arity$1(j) : eb.call(null,j))) - ((ea.cljs$core$IFn$_invoke$arity$1 ? ea.cljs$core$IFn$_invoke$arity$1(j) : ea.call(null,j)) * (eb.cljs$core$IFn$_invoke$arity$1 ? eb.cljs$core$IFn$_invoke$arity$1(i) : eb.call(null,i))));
return (((((cp > (0))) && (((xa | a) > (0))) && (((xb | b) > (0))))) || ((((cp < (0))) && (((xa | b) > (0))) && (((xb | a) > (0))))));
});
return (!(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((15),(ma | mb))) || (edge((1),(2),(1),(0))) || (edge((1),(4),(2),(0))) || (edge((1),(8),(3),(0))) || (edge((2),(4),(2),(1))) || (edge((2),(8),(3),(1))) || (edge((4),(8),(3),(2))))));
});
/**
 * Lazy edge evaluation. Takes a vector of edges, vector of edge
 *  points and an edge id. Looks up edge for given id and if not yet
 *  present constructs it. Returns 2-elem vector of [edges edge].
 */
thi.ng.geom.core.intersect.get_edge = (function thi$ng$geom$core$intersect$get_edge(edges,epoints,id){
var e = (edges.cljs$core$IFn$_invoke$arity$1 ? edges.cljs$core$IFn$_invoke$arity$1(id) : edges.call(null,id));
if(cljs.core.truth_(e)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,e], null);
} else {
var ep = (epoints.cljs$core$IFn$_invoke$arity$1 ? epoints.cljs$core$IFn$_invoke$arity$1(id) : epoints.call(null,id));
var e__$1 = thi.ng.geom.core._((ep.cljs$core$IFn$_invoke$arity$1 ? ep.cljs$core$IFn$_invoke$arity$1((0)) : ep.call(null,(0))),(ep.cljs$core$IFn$_invoke$arity$1 ? ep.cljs$core$IFn$_invoke$arity$1((1)) : ep.call(null,(1))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(edges,id,e__$1),e__$1], null);
}
});
/**
 * Takes the 4 delta vectors between the two tetras, edge definitions
 *  of the 1st tetra, vertices of the 2nd, a reference point of the 1st
 *  and a seq of specs, each encoding a specific check (either calls to
 *  face-a* or edge-a). Returns vector of bitmasks or nil if fail early.
 */
thi.ng.geom.core.intersect.check_faces_a = (function thi$ng$geom$core$intersect$check_faces_a(deltas,epoints,verts,p,specs){
var masks = cljs.core.PersistentVector.EMPTY;
var affine = cljs.core.PersistentVector.EMPTY;
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__28110 = cljs.core.first(s);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28110,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28110,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28110,(2),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),f)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f*","f*",-689873734),f)))){
var vec__28113 = thi.ng.geom.core.intersect.get_edge(edges,epoints,a);
var edges__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28113,(0),null);
var ea = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28113,(1),null);
var vec__28116 = thi.ng.geom.core.intersect.get_edge(edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28116,(0),null);
var eb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28116,(1),null);
var n = thi.ng.geom.core.cross(ea,eb);
var vec__28119 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.core.intersect.face_a(((function (masks,affine,edges,s,vec__28113,edges__$1,ea,vec__28116,edges__$2,eb,n,vec__28110,f,a,b){
return (function (p1__28092_SHARP_){
return thi.ng.geom.core.dot(p1__28092_SHARP_,n);
});})(masks,affine,edges,s,vec__28113,edges__$1,ea,vec__28116,edges__$2,eb,n,vec__28110,f,a,b))
,deltas):thi.ng.geom.core.intersect.face_a(((function (masks,affine,edges,s,vec__28113,edges__$1,ea,vec__28116,edges__$2,eb,n,vec__28110,f,a,b){
return (function (p1__28093_SHARP_){
return thi.ng.geom.core.intersect.subdot(p1__28093_SHARP_,p,n);
});})(masks,affine,edges,s,vec__28113,edges__$1,ea,vec__28116,edges__$2,eb,n,vec__28110,f,a,b))
,verts));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28119,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28119,(1),null);
if((m < (15))){
var G__28236 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(masks,m);
var G__28237 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(affine,a__$1);
var G__28238 = edges__$2;
var G__28239 = cljs.core.next(s);
masks = G__28236;
affine = G__28237;
edges = G__28238;
s = G__28239;
continue;
} else {
return null;
}
} else {
if((!(thi.ng.geom.core.intersect.edge_a((masks.cljs$core$IFn$_invoke$arity$1 ? masks.cljs$core$IFn$_invoke$arity$1(a) : masks.call(null,a)),(masks.cljs$core$IFn$_invoke$arity$1 ? masks.cljs$core$IFn$_invoke$arity$1(b) : masks.call(null,b)),(affine.cljs$core$IFn$_invoke$arity$1 ? affine.cljs$core$IFn$_invoke$arity$1(a) : affine.call(null,a)),(affine.cljs$core$IFn$_invoke$arity$1 ? affine.cljs$core$IFn$_invoke$arity$1(b) : affine.call(null,b)))))){
var G__28240 = masks;
var G__28241 = affine;
var G__28242 = edges;
var G__28243 = cljs.core.next(s);
masks = G__28240;
affine = G__28241;
edges = G__28242;
s = G__28243;
continue;
} else {
return null;
}
}
} else {
return masks;
}
break;
}
});
/**
 * Much like check-faces-a, but for 2nd tetra and specs encoding calls to face-b1/2?.
 *  Returns true if tetras do intersect.
 */
thi.ng.geom.core.intersect.check_faces_b = (function thi$ng$geom$core$intersect$check_faces_b(deltas,epoints,verts,p,specs){
var edges = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null], null);
var s = specs;
while(true){
if(cljs.core.truth_(s)){
var vec__28132 = cljs.core.first(s);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28132,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28132,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28132,(2),null);
var vec__28135 = thi.ng.geom.core.intersect.get_edge(edges,epoints,a);
var edges__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28135,(0),null);
var ea = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28135,(1),null);
var vec__28138 = thi.ng.geom.core.intersect.get_edge(edges__$1,epoints,b);
var edges__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28138,(0),null);
var eb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28138,(1),null);
if((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),f))?thi.ng.geom.core.intersect.face_b1_QMARK_(deltas,thi.ng.geom.core.cross(ea,eb)):thi.ng.geom.core.intersect.face_b2_QMARK_(verts,p,thi.ng.geom.core.cross(ea,eb)))))){
var G__28244 = edges__$2;
var G__28245 = cljs.core.next(s);
edges = G__28244;
s = G__28245;
continue;
} else {
return null;
}
} else {
return true;
}
break;
}
});
/**
 * Takes 2 seqs of 4 3D points, each defining a tetrahedron. Returns
 *  true if they intersect. Orientation of points is irrelevant (unlike
 *  in the original algorithm this implementation is based on).
 */
thi.ng.geom.core.intersect.intersect_tetrahedra_QMARK_ = (function thi$ng$geom$core$intersect$intersect_tetrahedra_QMARK_(p__28149,p__28150){
var vec__28152 = p__28149;
var pa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28152,(0),null);
var pb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28152,(1),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28152,(2),null);
var pd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28152,(3),null);
var p = vec__28152;
var vec__28155 = p__28150;
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28155,(0),null);
var qb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28155,(1),null);
var qc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28155,(2),null);
var qd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28155,(3),null);
var q = vec__28155;
var masks = thi.ng.geom.core.intersect.check_faces_a(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28146_SHARP_){
return thi.ng.geom.core._(p1__28146_SHARP_,pa);
}),q),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pb,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pc,pb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pd,pb], null)], null),q,pb,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(0),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(1),(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e","e",1381269198),(2),(3)], null)], null));
if(cljs.core.truth_(masks)){
var or__4126__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((15),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.bit_or,masks));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return thi.ng.geom.core.intersect.check_faces_b(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28147_SHARP_){
return thi.ng.geom.core._(p1__28147_SHARP_,qa);
}),p),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qb,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qc,qb], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qd,qb], null)], null),p,qb,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(0),(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(2),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),(1),(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f*","f*",-689873734),(4),(3)], null)], null));
}
} else {
return null;
}
});

//# sourceMappingURL=thi.ng.geom.core.intersect.js.map
