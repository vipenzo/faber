goog.provide('thi.ng.geom.svg.core');
thi.ng.geom.svg.core.stroke_round = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round"], null);
thi.ng.geom.svg.core.xml_preamble = "<?xml version=\"1.0\"?>\n";
thi.ng.geom.svg.core._STAR_ff_STAR_ = thi.ng.strf.core.float$((2));
thi.ng.geom.svg.core._STAR_fmt_vec_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_vec_STAR_(p){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.first(p))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1))))].join('');
});
thi.ng.geom.svg.core._STAR_fmt_percent_STAR_ = (function thi$ng$geom$svg$core$_STAR_fmt_percent_STAR_(x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((x * (100)) | (0))),"%"].join('');
});
thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_ = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["matrix(",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,",",thi.ng.geom.svg.core._STAR_ff_STAR_,")"], null);
thi.ng.geom.svg.core.point_seq_format2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format3 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format4 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);
thi.ng.geom.svg.core.point_seq_format = (function thi$ng$geom$svg$core$point_seq_format(n){
var G__48381 = (n | (0));
switch (G__48381) {
case (1):
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.svg.core._STAR_fmt_vec_STAR_], null);

break;
case (2):
return thi.ng.geom.svg.core.point_seq_format2;

break;
case (3):
return thi.ng.geom.svg.core.point_seq_format3;

break;
case (4):
return thi.ng.geom.svg.core.point_seq_format4;

break;
default:
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,thi.ng.geom.svg.core._STAR_fmt_vec_STAR_));

}
});
thi.ng.geom.svg.core.path_segment_formats = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"L","L",-1038307519),new cljs.core.Keyword(null,"M","M",-1755742206),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"Z","Z",459124588),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"a","a",-2123407586)],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["L",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["l",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["z"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["c",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," ",thi.ng.geom.svg.core._STAR_ff_STAR_," ",cljs.core.str," ",cljs.core.str," ",thi.ng.geom.svg.core._STAR_fmt_vec_STAR_," "], null)]);

/**
 * @interface
 */
thi.ng.geom.svg.core.PSVGConvert = function(){};

var thi$ng$geom$svg$core$PSVGConvert$as_svg$dyn_48829 = (function (_,opts){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.svg.core.as_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4429__auto__.call(null,_,opts));
} else {
var m__4426__auto__ = (thi.ng.geom.svg.core.as_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4426__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("PSVGConvert.as-svg",_);
}
}
});
thi.ng.geom.svg.core.as_svg = (function thi$ng$geom$svg$core$as_svg(_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$svg$core$PSVGConvert$as_svg$arity$2 == null)))))){
return _.thi$ng$geom$svg$core$PSVGConvert$as_svg$arity$2(_,opts);
} else {
return thi$ng$geom$svg$core$PSVGConvert$as_svg$dyn_48829(_,opts);
}
});

thi.ng.geom.svg.core.color_attrib = (function thi$ng$geom$svg$core$color_attrib(attribs,id){
var temp__5733__auto__ = (attribs.cljs$core$IFn$_invoke$arity$1 ? attribs.cljs$core$IFn$_invoke$arity$1(id) : attribs.call(null,id));
if(cljs.core.truth_(temp__5733__auto__)){
var att = temp__5733__auto__;
if(typeof att === 'string'){
return attribs;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attribs,id,cljs.core.deref(thi.ng.color.core.as_css(att)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.matrix_attrib = (function thi$ng$geom$svg$core$matrix_attrib(attribs,id){
var temp__5733__auto__ = (attribs.cljs$core$IFn$_invoke$arity$1 ? attribs.cljs$core$IFn$_invoke$arity$1(id) : attribs.call(null,id));
if(cljs.core.truth_(temp__5733__auto__)){
var mat = temp__5733__auto__;
if(typeof mat === 'string'){
return attribs;
} else {
var vec__48407 = mat;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48407,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48407,(1),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48407,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48407,(3),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48407,(4),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48407,(5),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attribs,id,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,thi.ng.geom.svg.core._STAR_fmt_matrix_STAR_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c,d,e,f], null)));
}
} else {
return attribs;
}
});
thi.ng.geom.svg.core.filter_attribs = (function thi$ng$geom$svg$core$filter_attribs(attribs){
var acc = cljs.core.transient$(attribs);
var ks = cljs.core.keys(attribs);
while(true){
if(cljs.core.truth_(ks)){
var G__48872 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("__",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.name(cljs.core.first(ks)),(0),(2))))?cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(ks)):acc);
var G__48873 = cljs.core.next(ks);
acc = G__48872;
ks = G__48873;
continue;
} else {
return cljs.core.persistent_BANG_(acc);
}
break;
}
});
thi.ng.geom.svg.core.svg_attribs = (function thi$ng$geom$svg$core$svg_attribs(attribs,base){
if(cljs.core.seq(attribs)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.matrix_attrib(thi.ng.geom.svg.core.color_attrib(thi.ng.geom.svg.core.color_attrib(thi.ng.geom.svg.core.filter_attribs(attribs),new cljs.core.Keyword(null,"stroke","stroke",1741823555)),new cljs.core.Keyword(null,"fill","fill",883462889)),new cljs.core.Keyword(null,"transform","transform",1381301764)),base);
} else {
return base;
}
});
thi.ng.geom.svg.core.svg = (function thi$ng$geom$svg$core$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48876 = arguments.length;
var i__4737__auto___48877 = (0);
while(true){
if((i__4737__auto___48877 < len__4736__auto___48876)){
args__4742__auto__.push((arguments[i__4737__auto___48877]));

var G__48878 = (i__4737__auto___48877 + (1));
i__4737__auto___48877 = G__48878;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 3, ["xmlns","http://www.w3.org/2000/svg","xmlns:xlink","http://www.w3.org/1999/xlink","version","1.1"], null)),body], null);
}));

(thi.ng.geom.svg.core.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.geom.svg.core.svg.cljs$lang$applyTo = (function (seq48430){
var G__48431 = cljs.core.first(seq48430);
var seq48430__$1 = cljs.core.next(seq48430);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48431,seq48430__$1);
}));

thi.ng.geom.svg.core.defs = (function thi$ng$geom$svg$core$defs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48881 = arguments.length;
var i__4737__auto___48882 = (0);
while(true){
if((i__4737__auto___48882 < len__4736__auto___48881)){
args__4742__auto__.push((arguments[i__4737__auto___48882]));

var G__48883 = (i__4737__auto___48882 + (1));
i__4737__auto___48882 = G__48883;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(thi.ng.geom.svg.core.defs.cljs$core$IFn$_invoke$arity$variadic = (function (defs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),defs], null);
}));

(thi.ng.geom.svg.core.defs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(thi.ng.geom.svg.core.defs.cljs$lang$applyTo = (function (seq48432){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48432));
}));

thi.ng.geom.svg.core.gradient_stop = (function thi$ng$geom$svg$core$gradient_stop(p__48452){
var vec__48453 = p__48452;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48453,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48453,(1),null);
var col__$1 = ((typeof col === 'string')?col:cljs.core.deref(thi.ng.color.core.as_css(col)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stop","stop",-2140911342),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"offset","offset",296498311),thi.ng.geom.svg.core._STAR_fmt_percent_STAR_.call(null,pos),new cljs.core.Keyword(null,"stop-color","stop-color",316173955),col__$1], null)], null);
});
thi.ng.geom.svg.core.linear_gradient = (function thi$ng$geom$svg$core$linear_gradient(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48884 = arguments.length;
var i__4737__auto___48885 = (0);
while(true){
if((i__4737__auto___48885 < len__4736__auto___48884)){
args__4742__auto__.push((arguments[i__4737__auto___48885]));

var G__48886 = (i__4737__auto___48885 + (1));
i__4737__auto___48885 = G__48886;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.linear_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.gradient_stop,stops)], null);
}));

(thi.ng.geom.svg.core.linear_gradient.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.geom.svg.core.linear_gradient.cljs$lang$applyTo = (function (seq48456){
var G__48457 = cljs.core.first(seq48456);
var seq48456__$1 = cljs.core.next(seq48456);
var G__48458 = cljs.core.first(seq48456__$1);
var seq48456__$2 = cljs.core.next(seq48456__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48457,G__48458,seq48456__$2);
}));

thi.ng.geom.svg.core.radial_gradient = (function thi$ng$geom$svg$core$radial_gradient(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48887 = arguments.length;
var i__4737__auto___48888 = (0);
while(true){
if((i__4737__auto___48888 < len__4736__auto___48887)){
args__4742__auto__.push((arguments[i__4737__auto___48888]));

var G__48889 = (i__4737__auto___48888 + (1));
i__4737__auto___48888 = G__48889;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.radial_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (id,attribs,stops){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attribs,new cljs.core.Keyword(null,"id","id",-1388402092),id),cljs.core.map.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.gradient_stop,stops)], null);
}));

(thi.ng.geom.svg.core.radial_gradient.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.geom.svg.core.radial_gradient.cljs$lang$applyTo = (function (seq48462){
var G__48463 = cljs.core.first(seq48462);
var seq48462__$1 = cljs.core.next(seq48462);
var G__48464 = cljs.core.first(seq48462__$1);
var seq48462__$2 = cljs.core.next(seq48462__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48463,G__48464,seq48462__$2);
}));

thi.ng.geom.svg.core.group = (function thi$ng$geom$svg$core$group(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48890 = arguments.length;
var i__4737__auto___48891 = (0);
while(true){
if((i__4737__auto___48891 < len__4736__auto___48890)){
args__4742__auto__.push((arguments[i__4737__auto___48891]));

var G__48892 = (i__4737__auto___48891 + (1));
i__4737__auto___48891 = G__48892;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.group.cljs$core$IFn$_invoke$arity$variadic = (function (attribs,body){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),thi.ng.geom.svg.core.svg_attribs(attribs,null)], null),body);
}));

(thi.ng.geom.svg.core.group.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.geom.svg.core.group.cljs$lang$applyTo = (function (seq48467){
var G__48468 = cljs.core.first(seq48467);
var seq48467__$1 = cljs.core.next(seq48467);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48468,seq48467__$1);
}));

thi.ng.geom.svg.core.path = (function thi$ng$geom$svg$core$path(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48894 = arguments.length;
var i__4737__auto___48895 = (0);
while(true){
if((i__4737__auto___48895 < len__4736__auto___48894)){
args__4742__auto__.push((arguments[i__4737__auto___48895]));

var G__48896 = (i__4737__auto___48895 + (1));
i__4737__auto___48895 = G__48896;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic = (function (segments,p__48496){
var vec__48497 = p__48496;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48497,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.svg.core.path_segment_formats,cljs.core.first),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([segments], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([segments], 0)))], null))], null);
}));

(thi.ng.geom.svg.core.path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.geom.svg.core.path.cljs$lang$applyTo = (function (seq48490){
var G__48491 = cljs.core.first(seq48490);
var seq48490__$1 = cljs.core.next(seq48490);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48491,seq48490__$1);
}));

thi.ng.geom.svg.core.text = (function thi$ng$geom$svg$core$text(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48900 = arguments.length;
var i__4737__auto___48901 = (0);
while(true){
if((i__4737__auto___48901 < len__4736__auto___48900)){
args__4742__auto__.push((arguments[i__4737__auto___48901]));

var G__48902 = (i__4737__auto___48901 + (1));
i__4737__auto___48901 = G__48902;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic = (function (p__48507,txt,p__48508){
var vec__48509 = p__48507;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48509,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48509,(1),null);
var vec__48512 = p__48508;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48512,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y)], null)),txt], null);
}));

(thi.ng.geom.svg.core.text.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.geom.svg.core.text.cljs$lang$applyTo = (function (seq48503){
var G__48504 = cljs.core.first(seq48503);
var seq48503__$1 = cljs.core.next(seq48503);
var G__48505 = cljs.core.first(seq48503__$1);
var seq48503__$2 = cljs.core.next(seq48503__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48504,G__48505,seq48503__$2);
}));

thi.ng.geom.svg.core.circle = (function thi$ng$geom$svg$core$circle(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48906 = arguments.length;
var i__4737__auto___48907 = (0);
while(true){
if((i__4737__auto___48907 < len__4736__auto___48906)){
args__4742__auto__.push((arguments[i__4737__auto___48907]));

var G__48908 = (i__4737__auto___48907 + (1));
i__4737__auto___48907 = G__48908;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.circle.cljs$core$IFn$_invoke$arity$variadic = (function (p__48539,radius,p__48540){
var vec__48541 = p__48539;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48541,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48541,(1),null);
var vec__48544 = p__48540;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48544,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),radius], null))], null);
}));

(thi.ng.geom.svg.core.circle.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.geom.svg.core.circle.cljs$lang$applyTo = (function (seq48531){
var G__48532 = cljs.core.first(seq48531);
var seq48531__$1 = cljs.core.next(seq48531);
var G__48533 = cljs.core.first(seq48531__$1);
var seq48531__$2 = cljs.core.next(seq48531__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48532,G__48533,seq48531__$2);
}));

thi.ng.geom.svg.core.arc_segment = (function thi$ng$geom$svg$core$arc_segment(center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_){
var radius__$1 = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(radius);
var p = thi.ng.geom.core._PLUS_(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(center),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.x(radius__$1),theta1).thi$ng$geom$core$PPolar$as_cartesian$arity$1(null));
var q = thi.ng.geom.core._PLUS_(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(center),thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.vector.y(radius__$1),theta2).thi$ng$geom$core$PPolar$as_cartesian$arity$1(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"M","M",-1755742206),p], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",-1688942394),radius__$1,(0),(cljs.core.truth_(great_QMARK_)?(1):(0)),(cljs.core.truth_(ccw_QMARK_)?(1):(0)),q], null)], null);
});
thi.ng.geom.svg.core.arc = (function thi$ng$geom$svg$core$arc(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48910 = arguments.length;
var i__4737__auto___48911 = (0);
while(true){
if((i__4737__auto___48911 < len__4736__auto___48910)){
args__4742__auto__.push((arguments[i__4737__auto___48911]));

var G__48912 = (i__4737__auto___48911 + (1));
i__4737__auto___48911 = G__48912;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((6) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((6)),(0),null)):null);
return thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.arc.cljs$core$IFn$_invoke$arity$variadic = (function (center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_,p__48572){
var vec__48573 = p__48572;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48573,(0),null);
return thi.ng.geom.svg.core.path.cljs$core$IFn$_invoke$arity$variadic(thi.ng.geom.svg.core.arc_segment(center,radius,theta1,theta2,great_QMARK_,ccw_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribs], 0));
}));

(thi.ng.geom.svg.core.arc.cljs$lang$maxFixedArity = (6));

/** @this {Function} */
(thi.ng.geom.svg.core.arc.cljs$lang$applyTo = (function (seq48558){
var G__48559 = cljs.core.first(seq48558);
var seq48558__$1 = cljs.core.next(seq48558);
var G__48560 = cljs.core.first(seq48558__$1);
var seq48558__$2 = cljs.core.next(seq48558__$1);
var G__48561 = cljs.core.first(seq48558__$2);
var seq48558__$3 = cljs.core.next(seq48558__$2);
var G__48562 = cljs.core.first(seq48558__$3);
var seq48558__$4 = cljs.core.next(seq48558__$3);
var G__48563 = cljs.core.first(seq48558__$4);
var seq48558__$5 = cljs.core.next(seq48558__$4);
var G__48564 = cljs.core.first(seq48558__$5);
var seq48558__$6 = cljs.core.next(seq48558__$5);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48559,G__48560,G__48561,G__48562,G__48563,G__48564,seq48558__$6);
}));

thi.ng.geom.svg.core.rect = (function thi$ng$geom$svg$core$rect(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48913 = arguments.length;
var i__4737__auto___48914 = (0);
while(true){
if((i__4737__auto___48914 < len__4736__auto___48913)){
args__4742__auto__.push((arguments[i__4737__auto___48914]));

var G__48915 = (i__4737__auto___48914 + (1));
i__4737__auto___48914 = G__48915;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.rect.cljs$core$IFn$_invoke$arity$variadic = (function (p__48587,w,h,p__48588){
var vec__48589 = p__48587;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48589,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48589,(1),null);
var vec__48592 = p__48588;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48592,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,x),new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,y),new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h], null))], null);
}));

(thi.ng.geom.svg.core.rect.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(thi.ng.geom.svg.core.rect.cljs$lang$applyTo = (function (seq48580){
var G__48581 = cljs.core.first(seq48580);
var seq48580__$1 = cljs.core.next(seq48580);
var G__48582 = cljs.core.first(seq48580__$1);
var seq48580__$2 = cljs.core.next(seq48580__$1);
var G__48583 = cljs.core.first(seq48580__$2);
var seq48580__$3 = cljs.core.next(seq48580__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48581,G__48582,G__48583,seq48580__$3);
}));

thi.ng.geom.svg.core.line = (function thi$ng$geom$svg$core$line(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48916 = arguments.length;
var i__4737__auto___48917 = (0);
while(true){
if((i__4737__auto___48917 < len__4736__auto___48916)){
args__4742__auto__.push((arguments[i__4737__auto___48917]));

var G__48918 = (i__4737__auto___48917 + (1));
i__4737__auto___48917 = G__48918;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic = (function (p__48618,p__48619,p__48620){
var vec__48623 = p__48618;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48623,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48623,(1),null);
var vec__48626 = p__48619;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48626,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48626,(1),null);
var vec__48629 = p__48620;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48629,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,ax),new cljs.core.Keyword(null,"y1","y1",589123466),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,ay),new cljs.core.Keyword(null,"x2","x2",-1362513475),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,bx),new cljs.core.Keyword(null,"y2","y2",-718691301),thi.ng.geom.svg.core._STAR_ff_STAR_.call(null,by)], null))], null);
}));

(thi.ng.geom.svg.core.line.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.geom.svg.core.line.cljs$lang$applyTo = (function (seq48614){
var G__48615 = cljs.core.first(seq48614);
var seq48614__$1 = cljs.core.next(seq48614);
var G__48616 = cljs.core.first(seq48614__$1);
var seq48614__$2 = cljs.core.next(seq48614__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48615,G__48616,seq48614__$2);
}));

thi.ng.geom.svg.core.line_decorated = (function thi$ng$geom$svg$core$line_decorated(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48919 = arguments.length;
var i__4737__auto___48920 = (0);
while(true){
if((i__4737__auto___48920 < len__4736__auto___48919)){
args__4742__auto__.push((arguments[i__4737__auto___48920]));

var G__48921 = (i__4737__auto___48920 + (1));
i__4737__auto___48920 = G__48921;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.line_decorated.cljs$core$IFn$_invoke$arity$variadic = (function (p,q,start,end,p__48660){
var vec__48661 = p__48660;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48661,(0),null);
return (new cljs.core.List(null,thi.ng.geom.svg.core.line.cljs$core$IFn$_invoke$arity$variadic(p,q,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribs], 0)),(new cljs.core.List(null,(cljs.core.truth_(start)?(start.cljs$core$IFn$_invoke$arity$4 ? start.cljs$core$IFn$_invoke$arity$4(q,p,(0),attribs) : start.call(null,q,p,(0),attribs)):null),(new cljs.core.List(null,(cljs.core.truth_(end)?(end.cljs$core$IFn$_invoke$arity$4 ? end.cljs$core$IFn$_invoke$arity$4(p,q,(0),attribs) : end.call(null,p,q,(0),attribs)):null),null,(1),null)),(2),null)),(3),null));
}));

(thi.ng.geom.svg.core.line_decorated.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(thi.ng.geom.svg.core.line_decorated.cljs$lang$applyTo = (function (seq48650){
var G__48651 = cljs.core.first(seq48650);
var seq48650__$1 = cljs.core.next(seq48650);
var G__48652 = cljs.core.first(seq48650__$1);
var seq48650__$2 = cljs.core.next(seq48650__$1);
var G__48653 = cljs.core.first(seq48650__$2);
var seq48650__$3 = cljs.core.next(seq48650__$2);
var G__48654 = cljs.core.first(seq48650__$3);
var seq48650__$4 = cljs.core.next(seq48650__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48651,G__48652,G__48653,G__48654,seq48650__$4);
}));

thi.ng.geom.svg.core.line_strip = (function thi$ng$geom$svg$core$line_strip(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48922 = arguments.length;
var i__4737__auto___48923 = (0);
while(true){
if((i__4737__auto___48923 < len__4736__auto___48922)){
args__4742__auto__.push((arguments[i__4737__auto___48923]));

var G__48924 = (i__4737__auto___48923 + (1));
i__4737__auto___48923 = G__48924;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic = (function (points,p__48672){
var vec__48673 = p__48672;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48673,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format(cljs.core.count(points)),points)], null))], null);
}));

(thi.ng.geom.svg.core.line_strip.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.geom.svg.core.line_strip.cljs$lang$applyTo = (function (seq48669){
var G__48670 = cljs.core.first(seq48669);
var seq48669__$1 = cljs.core.next(seq48669);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48670,seq48669__$1);
}));

thi.ng.geom.svg.core.line_strip_decorated = (function thi$ng$geom$svg$core$line_strip_decorated(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48925 = arguments.length;
var i__4737__auto___48926 = (0);
while(true){
if((i__4737__auto___48926 < len__4736__auto___48925)){
args__4742__auto__.push((arguments[i__4737__auto___48926]));

var G__48927 = (i__4737__auto___48926 + (1));
i__4737__auto___48926 = G__48927;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.line_strip_decorated.cljs$core$IFn$_invoke$arity$variadic = (function (points,start,seg,end,p__48688){
var vec__48689 = p__48688;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48689,(0),null);
var n = (cljs.core.count(points) - (1));
return (new cljs.core.List(null,thi.ng.geom.svg.core.line_strip.cljs$core$IFn$_invoke$arity$variadic(points,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribs], 0)),(new cljs.core.List(null,(cljs.core.truth_(start)?(function (){var G__48693 = (points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1((1)) : points.call(null,(1)));
var G__48694 = (points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1((0)) : points.call(null,(0)));
var G__48695 = (0);
var G__48696 = attribs;
return (start.cljs$core$IFn$_invoke$arity$4 ? start.cljs$core$IFn$_invoke$arity$4(G__48693,G__48694,G__48695,G__48696) : start.call(null,G__48693,G__48694,G__48695,G__48696));
})():null),(new cljs.core.List(null,(cljs.core.truth_(seg)?cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__48697){
var vec__48698 = p__48697;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48698,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48698,(1),null);
return (seg.cljs$core$IFn$_invoke$arity$4 ? seg.cljs$core$IFn$_invoke$arity$4(p,q,i,attribs) : seg.call(null,p,q,i,attribs));
}),thi.ng.dstruct.core.successive_nth.cljs$core$IFn$_invoke$arity$2((2),points)):null),(new cljs.core.List(null,(cljs.core.truth_(end)?(function (){var G__48702 = (function (){var G__48707 = (n - (1));
return (points.cljs$core$IFn$_invoke$arity$1 ? points.cljs$core$IFn$_invoke$arity$1(G__48707) : points.call(null,G__48707));
})();
var G__48703 = cljs.core.peek(points);
var G__48704 = n;
var G__48705 = attribs;
return (end.cljs$core$IFn$_invoke$arity$4 ? end.cljs$core$IFn$_invoke$arity$4(G__48702,G__48703,G__48704,G__48705) : end.call(null,G__48702,G__48703,G__48704,G__48705));
})():null),null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(thi.ng.geom.svg.core.line_strip_decorated.cljs$lang$applyTo = (function (seq48679){
var G__48680 = cljs.core.first(seq48679);
var seq48679__$1 = cljs.core.next(seq48679);
var G__48681 = cljs.core.first(seq48679__$1);
var seq48679__$2 = cljs.core.next(seq48679__$1);
var G__48682 = cljs.core.first(seq48679__$2);
var seq48679__$3 = cljs.core.next(seq48679__$2);
var G__48683 = cljs.core.first(seq48679__$3);
var seq48679__$4 = cljs.core.next(seq48679__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48680,G__48681,G__48682,G__48683,seq48679__$4);
}));

thi.ng.geom.svg.core.polygon = (function thi$ng$geom$svg$core$polygon(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48941 = arguments.length;
var i__4737__auto___48942 = (0);
while(true){
if((i__4737__auto___48942 < len__4736__auto___48941)){
args__4742__auto__.push((arguments[i__4737__auto___48942]));

var G__48943 = (i__4737__auto___48942 + (1));
i__4737__auto___48942 = G__48943;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points,p__48718){
var vec__48720 = p__48718;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48720,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,thi.ng.geom.svg.core.point_seq_format(cljs.core.count(points)),points)], null))], null);
}));

(thi.ng.geom.svg.core.polygon.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.geom.svg.core.polygon.cljs$lang$applyTo = (function (seq48712){
var G__48713 = cljs.core.first(seq48712);
var seq48712__$1 = cljs.core.next(seq48712);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48713,seq48712__$1);
}));

thi.ng.geom.svg.core.instance = (function thi$ng$geom$svg$core$instance(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48944 = arguments.length;
var i__4737__auto___48945 = (0);
while(true){
if((i__4737__auto___48945 < len__4736__auto___48944)){
args__4742__auto__.push((arguments[i__4737__auto___48945]));

var G__48950 = (i__4737__auto___48945 + (1));
i__4737__auto___48945 = G__48950;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.instance.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__48734){
var vec__48735 = p__48734;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48735,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use","use",-1846382424),thi.ng.geom.svg.core.svg_attribs(attribs,new cljs.core.PersistentArrayMap(null, 1, ["xlink:href",["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null))], null);
}));

(thi.ng.geom.svg.core.instance.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.geom.svg.core.instance.cljs$lang$applyTo = (function (seq48730){
var G__48731 = cljs.core.first(seq48730);
var seq48730__$1 = cljs.core.next(seq48730);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48731,seq48730__$1);
}));

thi.ng.geom.svg.core.arrow_head = (function thi$ng$geom$svg$core$arrow_head(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48972 = arguments.length;
var i__4737__auto___48976 = (0);
while(true){
if((i__4737__auto___48976 < len__4736__auto___48972)){
args__4742__auto__.push((arguments[i__4737__auto___48976]));

var G__48977 = (i__4737__auto___48976 + (1));
i__4737__auto___48976 = G__48977;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(thi.ng.geom.svg.core.arrow_head.cljs$core$IFn$_invoke$arity$variadic = (function (len,theta,solid_QMARK_,p__48748){
var vec__48749 = p__48748;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48749,(0),null);
return (function() { 
var G__48979__delegate = function (p,q,idx,p__48753){
var vec__48754 = p__48753;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48754,(0),null);
var q__$1 = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(q);
var d = thi.ng.geom.core.normalize(thi.ng.geom.core._(q__$1,p),len);
return (new cljs.core.List(null,(function (){var G__48758 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.core._(q__$1,thi.ng.geom.core.rotate(d,(- theta))),q__$1,thi.ng.geom.core._(q__$1,thi.ng.geom.core.rotate(d,theta))], null);
var G__48759 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attribs,opts], 0));
var fexpr__48757 = (cljs.core.truth_(solid_QMARK_)?thi.ng.geom.svg.core.polygon:thi.ng.geom.svg.core.line_strip);
return (fexpr__48757.cljs$core$IFn$_invoke$arity$2 ? fexpr__48757.cljs$core$IFn$_invoke$arity$2(G__48758,G__48759) : fexpr__48757.call(null,G__48758,G__48759));
})(),null,(1),null));
};
var G__48979 = function (p,q,idx,var_args){
var p__48753 = null;
if (arguments.length > 3) {
var G__48981__i = 0, G__48981__a = new Array(arguments.length -  3);
while (G__48981__i < G__48981__a.length) {G__48981__a[G__48981__i] = arguments[G__48981__i + 3]; ++G__48981__i;}
  p__48753 = new cljs.core.IndexedSeq(G__48981__a,0,null);
} 
return G__48979__delegate.call(this,p,q,idx,p__48753);};
G__48979.cljs$lang$maxFixedArity = 3;
G__48979.cljs$lang$applyTo = (function (arglist__48982){
var p = cljs.core.first(arglist__48982);
arglist__48982 = cljs.core.next(arglist__48982);
var q = cljs.core.first(arglist__48982);
arglist__48982 = cljs.core.next(arglist__48982);
var idx = cljs.core.first(arglist__48982);
var p__48753 = cljs.core.rest(arglist__48982);
return G__48979__delegate(p,q,idx,p__48753);
});
G__48979.cljs$core$IFn$_invoke$arity$variadic = G__48979__delegate;
return G__48979;
})()
;
}));

(thi.ng.geom.svg.core.arrow_head.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(thi.ng.geom.svg.core.arrow_head.cljs$lang$applyTo = (function (seq48742){
var G__48743 = cljs.core.first(seq48742);
var seq48742__$1 = cljs.core.next(seq48742);
var G__48744 = cljs.core.first(seq48742__$1);
var seq48742__$2 = cljs.core.next(seq48742__$1);
var G__48745 = cljs.core.first(seq48742__$2);
var seq48742__$3 = cljs.core.next(seq48742__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48743,G__48744,G__48745,seq48742__$3);
}));

thi.ng.geom.svg.core.line_label = (function thi$ng$geom$svg$core$line_label(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48983 = arguments.length;
var i__4737__auto___48984 = (0);
while(true){
if((i__4737__auto___48984 < len__4736__auto___48983)){
args__4742__auto__.push((arguments[i__4737__auto___48984]));

var G__48985 = (i__4737__auto___48984 + (1));
i__4737__auto___48984 = G__48985;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(thi.ng.geom.svg.core.line_label.cljs$core$IFn$_invoke$arity$variadic = (function (p__48772){
var vec__48773 = p__48772;
var map__48776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48773,(0),null);
var map__48776__$1 = (((((!((map__48776 == null))))?(((((map__48776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48776):map__48776);
var opts = map__48776__$1;
var __rotate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48776__$1,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580));
var __offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48776__$1,new cljs.core.Keyword(null,"__offset","__offset",-9560190));
var opts__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"__rotate?","__rotate?",-212603580),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"__offset","__offset",-9560190)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696)], null),(function (p1__48765_SHARP_){
var or__4126__auto__ = p1__48765_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "middle";
}
}));
return (function() { 
var G__48988__delegate = function (p,q,idx,p__48779){
var vec__48781 = p__48779;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48781,(0),null);
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"__label","__label",758805562),idx], null));
if(cljs.core.truth_(temp__5733__auto__)){
var label = temp__5733__auto__;
var p__$1 = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(p);
var m = thi.ng.geom.core._PLUS_(thi.ng.geom.core.mix(p__$1,q),__offset);
var opts__$2 = (cljs.core.truth_(__rotate_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"transform","transform",1381301764),["rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.degrees(thi.ng.geom.core.heading(thi.ng.geom.core.normal(thi.ng.geom.core._(p__$1,q)))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((0)) : m.call(null,(0))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1((1)) : m.call(null,(1)))),")"].join('')):opts__$1);
return (new cljs.core.List(null,thi.ng.geom.svg.core.text.cljs$core$IFn$_invoke$arity$variadic(m,label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attribs,new cljs.core.Keyword(null,"__label","__label",758805562)),opts__$2], 0))], 0)),null,(1),null));
} else {
return null;
}
};
var G__48988 = function (p,q,idx,var_args){
var p__48779 = null;
if (arguments.length > 3) {
var G__48994__i = 0, G__48994__a = new Array(arguments.length -  3);
while (G__48994__i < G__48994__a.length) {G__48994__a[G__48994__i] = arguments[G__48994__i + 3]; ++G__48994__i;}
  p__48779 = new cljs.core.IndexedSeq(G__48994__a,0,null);
} 
return G__48988__delegate.call(this,p,q,idx,p__48779);};
G__48988.cljs$lang$maxFixedArity = 3;
G__48988.cljs$lang$applyTo = (function (arglist__48995){
var p = cljs.core.first(arglist__48995);
arglist__48995 = cljs.core.next(arglist__48995);
var q = cljs.core.first(arglist__48995);
arglist__48995 = cljs.core.next(arglist__48995);
var idx = cljs.core.first(arglist__48995);
var p__48779 = cljs.core.rest(arglist__48995);
return G__48988__delegate(p,q,idx,p__48779);
});
G__48988.cljs$core$IFn$_invoke$arity$variadic = G__48988__delegate;
return G__48988;
})()
;
}));

(thi.ng.geom.svg.core.line_label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(thi.ng.geom.svg.core.line_label.cljs$lang$applyTo = (function (seq48766){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48766));
}));

thi.ng.geom.svg.core.comp_decorators = (function thi$ng$geom$svg$core$comp_decorators(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48996 = arguments.length;
var i__4737__auto___48997 = (0);
while(true){
if((i__4737__auto___48997 < len__4736__auto___48996)){
args__4742__auto__.push((arguments[i__4737__auto___48997]));

var G__48998 = (i__4737__auto___48997 + (1));
i__4737__auto___48997 = G__48998;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(thi.ng.geom.svg.core.comp_decorators.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function() { 
var G__49003__delegate = function (p,q,idx,p__48792){
var vec__48793 = p__48792;
var attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48793,(0),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,f){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(p,q,idx,attribs) : f.call(null,p,q,idx,attribs)));
}),cljs.core.List.EMPTY,fns);
};
var G__49003 = function (p,q,idx,var_args){
var p__48792 = null;
if (arguments.length > 3) {
var G__49008__i = 0, G__49008__a = new Array(arguments.length -  3);
while (G__49008__i < G__49008__a.length) {G__49008__a[G__49008__i] = arguments[G__49008__i + 3]; ++G__49008__i;}
  p__48792 = new cljs.core.IndexedSeq(G__49008__a,0,null);
} 
return G__49003__delegate.call(this,p,q,idx,p__48792);};
G__49003.cljs$lang$maxFixedArity = 3;
G__49003.cljs$lang$applyTo = (function (arglist__49013){
var p = cljs.core.first(arglist__49013);
arglist__49013 = cljs.core.next(arglist__49013);
var q = cljs.core.first(arglist__49013);
arglist__49013 = cljs.core.next(arglist__49013);
var idx = cljs.core.first(arglist__49013);
var p__48792 = cljs.core.rest(arglist__49013);
return G__49003__delegate(p,q,idx,p__48792);
});
G__49003.cljs$core$IFn$_invoke$arity$variadic = G__49003__delegate;
return G__49003;
})()
;
}));

(thi.ng.geom.svg.core.comp_decorators.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(thi.ng.geom.svg.core.comp_decorators.cljs$lang$applyTo = (function (seq48789){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48789));
}));


//# sourceMappingURL=thi.ng.geom.svg.core.js.map
