goog.provide('faber.model');
faber.model.pi = Math.PI;
faber.model.tau = ((2) * faber.model.pi);
faber.model.rad__GT_deg = (function faber$model$rad__GT_deg(radians){
return ((radians * (180)) / faber.model.pi);
});
faber.model.deg__GT_rad = (function faber$model$deg__GT_rad(degrees){
return ((degrees / (180)) * faber.model.pi);
});
faber.model.with_fn = (function faber$model$with_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27322 = arguments.length;
var i__4737__auto___27323 = (0);
while(true){
if((i__4737__auto___27323 < len__4736__auto___27322)){
args__4742__auto__.push((arguments[i__4737__auto___27323]));

var G__27324 = (i__4737__auto___27323 + (1));
i__4737__auto___27323 = G__27324;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.with_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.with_fn.cljs$core$IFn$_invoke$arity$variadic = (function (x,block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"with-fn","with-fn",627777509),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.with_fn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.with_fn.cljs$lang$applyTo = (function (seq26923){
var G__26926 = cljs.core.first(seq26923);
var seq26923__$1 = cljs.core.next(seq26923);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26926,seq26923__$1);
}));

faber.model.with_fa = (function faber$model$with_fa(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27331 = arguments.length;
var i__4737__auto___27332 = (0);
while(true){
if((i__4737__auto___27332 < len__4736__auto___27331)){
args__4742__auto__.push((arguments[i__4737__auto___27332]));

var G__27333 = (i__4737__auto___27332 + (1));
i__4737__auto___27332 = G__27333;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.with_fa.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.with_fa.cljs$core$IFn$_invoke$arity$variadic = (function (x,block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"with-fa","with-fa",-1456357876),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.with_fa.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.with_fa.cljs$lang$applyTo = (function (seq26982){
var G__26983 = cljs.core.first(seq26982);
var seq26982__$1 = cljs.core.next(seq26982);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26983,seq26982__$1);
}));

faber.model.with_fs = (function faber$model$with_fs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27335 = arguments.length;
var i__4737__auto___27336 = (0);
while(true){
if((i__4737__auto___27336 < len__4736__auto___27335)){
args__4742__auto__.push((arguments[i__4737__auto___27336]));

var G__27337 = (i__4737__auto___27336 + (1));
i__4737__auto___27336 = G__27337;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.with_fs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.with_fs.cljs$core$IFn$_invoke$arity$variadic = (function (x,block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"with-fs","with-fs",-531734560),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.with_fs.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.with_fs.cljs$lang$applyTo = (function (seq26998){
var G__26999 = cljs.core.first(seq26998);
var seq26998__$1 = cljs.core.next(seq26998);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26999,seq26998__$1);
}));

faber.model.modifier = (function faber$model$modifier(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27340 = arguments.length;
var i__4737__auto___27341 = (0);
while(true){
if((i__4737__auto___27341 < len__4736__auto___27340)){
args__4742__auto__.push((arguments[i__4737__auto___27341]));

var G__27342 = (i__4737__auto___27341 + (1));
i__4737__auto___27341 = G__27342;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.modifier.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.modifier.cljs$core$IFn$_invoke$arity$variadic = (function (modifier,block){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([modifier]),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#","#",-275793773),new cljs.core.Keyword(null,"%","%",1704198600),new cljs.core.Keyword(null,"*","*",-1294732318),new cljs.core.Keyword(null,"!","!",-311249637)], null)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"modifier","modifier",1634442788),null,(1),null)),(new cljs.core.List(null,cljs.core.name(modifier),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
} else {
return null;
}
}));

(faber.model.modifier.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.modifier.cljs$lang$applyTo = (function (seq27027){
var G__27028 = cljs.core.first(seq27027);
var seq27027__$1 = cljs.core.next(seq27027);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27028,seq27027__$1);
}));

faber.model.__SHARP_ = (function faber$model$__SHARP_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27348 = arguments.length;
var i__4737__auto___27349 = (0);
while(true){
if((i__4737__auto___27349 < len__4736__auto___27348)){
args__4742__auto__.push((arguments[i__4737__auto___27349]));

var G__27350 = (i__4737__auto___27349 + (1));
i__4737__auto___27349 = G__27350;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.__SHARP_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.__SHARP_.cljs$core$IFn$_invoke$arity$variadic = (function (block){
return faber.model.modifier.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"#","#",-275793773),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0));
}));

(faber.model.__SHARP_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.__SHARP_.cljs$lang$applyTo = (function (seq27029){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27029));
}));

faber.model.__PERCENT_ = (function faber$model$__PERCENT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27351 = arguments.length;
var i__4737__auto___27354 = (0);
while(true){
if((i__4737__auto___27354 < len__4736__auto___27351)){
args__4742__auto__.push((arguments[i__4737__auto___27354]));

var G__27355 = (i__4737__auto___27354 + (1));
i__4737__auto___27354 = G__27355;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.__PERCENT_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.__PERCENT_.cljs$core$IFn$_invoke$arity$variadic = (function (block){
return faber.model.modifier.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"%","%",1704198600),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0));
}));

(faber.model.__PERCENT_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.__PERCENT_.cljs$lang$applyTo = (function (seq27030){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27030));
}));

faber.model.__STAR_ = (function faber$model$__STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27356 = arguments.length;
var i__4737__auto___27357 = (0);
while(true){
if((i__4737__auto___27357 < len__4736__auto___27356)){
args__4742__auto__.push((arguments[i__4737__auto___27357]));

var G__27358 = (i__4737__auto___27357 + (1));
i__4737__auto___27357 = G__27358;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.__STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.__STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (block){
return faber.model.modifier.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"*","*",-1294732318),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0));
}));

(faber.model.__STAR_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.__STAR_.cljs$lang$applyTo = (function (seq27033){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27033));
}));

faber.model.__BANG_ = (function faber$model$__BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27360 = arguments.length;
var i__4737__auto___27361 = (0);
while(true){
if((i__4737__auto___27361 < len__4736__auto___27360)){
args__4742__auto__.push((arguments[i__4737__auto___27361]));

var G__27362 = (i__4737__auto___27361 + (1));
i__4737__auto___27361 = G__27362;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.__BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.__BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (block){
return faber.model.modifier.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"!","!",-311249637),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0));
}));

(faber.model.__BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.__BANG_.cljs$lang$applyTo = (function (seq27038){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27038));
}));

faber.model.define_module = (function faber$model$define_module(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27363 = arguments.length;
var i__4737__auto___27364 = (0);
while(true){
if((i__4737__auto___27364 < len__4736__auto___27363)){
args__4742__auto__.push((arguments[i__4737__auto___27364]));

var G__27367 = (i__4737__auto___27364 + (1));
i__4737__auto___27364 = G__27367;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.define_module.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.define_module.cljs$core$IFn$_invoke$arity$variadic = (function (module,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"define-module","define-module",-223686),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"module","module",1424618191),null,(1),null)),(new cljs.core.List(null,cljs.core.name(module),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,body,null,(1),null))], 0))));
}));

(faber.model.define_module.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.define_module.cljs$lang$applyTo = (function (seq27042){
var G__27043 = cljs.core.first(seq27042);
var seq27042__$1 = cljs.core.next(seq27042);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27043,seq27042__$1);
}));

faber.model.square = (function faber$model$square(x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"square","square",812434677),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),null,(1),null)))));
});
faber.model.polygon = (function faber$model$polygon(var_args){
var G__27049 = arguments.length;
switch (G__27049) {
case 1:
return faber.model.polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___27370 = arguments.length;
var i__4737__auto___27371 = (0);
while(true){
if((i__4737__auto___27371 < len__4736__auto___27370)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27371]));

var G__27372 = (i__4737__auto___27371 + (1));
i__4737__auto___27371 = G__27372;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return faber.model.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(faber.model.polygon.cljs$core$IFn$_invoke$arity$1 = (function (points){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"points","points",-1486596883),null,(1),null)),(new cljs.core.List(null,points,null,(1),null)))))),null,(1),null)))));
}));

(faber.model.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points,paths,p__27050){
var map__27051 = p__27050;
var map__27051__$1 = (((((!((map__27051 == null))))?(((((map__27051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27051):map__27051);
var convexity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27051__$1,new cljs.core.Keyword(null,"convexity","convexity",-1510694660));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"points","points",-1486596883),null,(1),null)),(new cljs.core.List(null,points,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"paths","paths",-1807389588),null,(1),null)),(new cljs.core.List(null,paths,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,convexity,null,(1),null))], 0))))),null,(1),null)))));
}));

/** @this {Function} */
(faber.model.polygon.cljs$lang$applyTo = (function (seq27046){
var G__27047 = cljs.core.first(seq27046);
var seq27046__$1 = cljs.core.next(seq27046);
var G__27048 = cljs.core.first(seq27046__$1);
var seq27046__$2 = cljs.core.next(seq27046__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27047,G__27048,seq27046__$2);
}));

(faber.model.polygon.cljs$lang$maxFixedArity = (2));

faber.model.sphere = (function faber$model$sphere(r){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"sphere","sphere",384337120),null,(1),null)),(new cljs.core.List(null,r,null,(1),null)))));
});
faber.model.cube = (function faber$model$cube(x,y,z){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"cube","cube",-1501611368),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"z","z",-789527183),z], null),null,(1),null)))));
});
faber.model.cylinder = (function faber$model$cylinder(rs,h){
if(((cljs.core.vector_QMARK_(rs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(rs))))){
var vec__27057 = rs;
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27057,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27057,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),null,(1),null)),(new cljs.core.List(null,h,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,r1,null,(1),null)),(new cljs.core.List(null,r2,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),null,(1),null)),(new cljs.core.List(null,h,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,rs,null,(1),null))], 0))));
}
});
faber.model.polyhedron = (function faber$model$polyhedron(points,faces){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"polyhedron","polyhedron",998587527),null,(1),null)),(new cljs.core.List(null,points,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,faces,null,(1),null))], 0))));
});
faber.model.resize = (function faber$model$resize(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27375 = arguments.length;
var i__4737__auto___27376 = (0);
while(true){
if((i__4737__auto___27376 < len__4736__auto___27375)){
args__4742__auto__.push((arguments[i__4737__auto___27376]));

var G__27379 = (i__4737__auto___27376 + (1));
i__4737__auto___27376 = G__27379;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.resize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.resize.cljs$core$IFn$_invoke$arity$variadic = (function (p__27064,block){
var vec__27065 = p__27064;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27065,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27065,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27065,(2),null);
var is_auto = (((cljs.core.first(block) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),cljs.core.first(block))));
var auto = ((is_auto)?cljs.core.second(block):null);
var block__$1 = ((is_auto)?cljs.core.rest(cljs.core.rest(block)):block);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"resize","resize",297367086),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"x","x",2099068185),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"y","y",-1757859776),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"z","z",-789527183),null,(1),null)),(new cljs.core.List(null,z,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"auto","auto",-566279492),null,(1),null)),(new cljs.core.List(null,auto,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1], 0))));
}));

(faber.model.resize.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.resize.cljs$lang$applyTo = (function (seq27061){
var G__27062 = cljs.core.first(seq27061);
var seq27061__$1 = cljs.core.next(seq27061);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27062,seq27061__$1);
}));

faber.model.translate = (function faber$model$translate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27381 = arguments.length;
var i__4737__auto___27382 = (0);
while(true){
if((i__4737__auto___27382 < len__4736__auto___27381)){
args__4742__auto__.push((arguments[i__4737__auto___27382]));

var G__27383 = (i__4737__auto___27382 + (1));
i__4737__auto___27382 = G__27383;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.translate.cljs$core$IFn$_invoke$arity$variadic = (function (p__27073,block){
var vec__27074 = p__27073;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27074,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27074,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27074,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"translate","translate",1336199447),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.translate.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.translate.cljs$lang$applyTo = (function (seq27069){
var G__27070 = cljs.core.first(seq27069);
var seq27069__$1 = cljs.core.next(seq27069);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27070,seq27069__$1);
}));

faber.model.rotatev = (function faber$model$rotatev(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27384 = arguments.length;
var i__4737__auto___27386 = (0);
while(true){
if((i__4737__auto___27386 < len__4736__auto___27384)){
args__4742__auto__.push((arguments[i__4737__auto___27386]));

var G__27387 = (i__4737__auto___27386 + (1));
i__4737__auto___27386 = G__27387;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return faber.model.rotatev.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(faber.model.rotatev.cljs$core$IFn$_invoke$arity$variadic = (function (a,p__27088,block){
var vec__27089 = p__27088;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27089,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27089,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27089,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"rotatev","rotatev",1387211932),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),block], 0))));
}));

(faber.model.rotatev.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(faber.model.rotatev.cljs$lang$applyTo = (function (seq27084){
var G__27085 = cljs.core.first(seq27084);
var seq27084__$1 = cljs.core.next(seq27084);
var G__27086 = cljs.core.first(seq27084__$1);
var seq27084__$2 = cljs.core.next(seq27084__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27085,G__27086,seq27084__$2);
}));

faber.model.rotatec = (function faber$model$rotatec(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27388 = arguments.length;
var i__4737__auto___27389 = (0);
while(true){
if((i__4737__auto___27389 < len__4736__auto___27388)){
args__4742__auto__.push((arguments[i__4737__auto___27389]));

var G__27390 = (i__4737__auto___27389 + (1));
i__4737__auto___27389 = G__27390;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.rotatec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.rotatec.cljs$core$IFn$_invoke$arity$variadic = (function (p__27106,block){
var vec__27107 = p__27106;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27107,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27107,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27107,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"rotatec","rotatec",2126840625),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.rotatec.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.rotatec.cljs$lang$applyTo = (function (seq27100){
var G__27101 = cljs.core.first(seq27100);
var seq27100__$1 = cljs.core.next(seq27100);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27101,seq27100__$1);
}));

faber.model.rotate = (function faber$model$rotate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27395 = arguments.length;
var i__4737__auto___27396 = (0);
while(true){
if((i__4737__auto___27396 < len__4736__auto___27395)){
args__4742__auto__.push((arguments[i__4737__auto___27396]));

var G__27397 = (i__4737__auto___27396 + (1));
i__4737__auto___27396 = G__27397;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.rotate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.rotate.cljs$core$IFn$_invoke$arity$variadic = (function (block){
if(typeof cljs.core.first(block) === 'number'){
return faber.model.rotatev.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(block),cljs.core.second(block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(cljs.core.rest(block))], 0));
} else {
return faber.model.rotatec.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(block)], 0));
}
}));

(faber.model.rotate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.rotate.cljs$lang$applyTo = (function (seq27110){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27110));
}));

faber.model.scale = (function faber$model$scale(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27398 = arguments.length;
var i__4737__auto___27399 = (0);
while(true){
if((i__4737__auto___27399 < len__4736__auto___27398)){
args__4742__auto__.push((arguments[i__4737__auto___27399]));

var G__27400 = (i__4737__auto___27399 + (1));
i__4737__auto___27399 = G__27400;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.scale.cljs$core$IFn$_invoke$arity$variadic = (function (p__27121,block){
var vec__27122 = p__27121;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27122,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27122,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27122,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"scale","scale",-230427353),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.scale.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.scale.cljs$lang$applyTo = (function (seq27116){
var G__27117 = cljs.core.first(seq27116);
var seq27116__$1 = cljs.core.next(seq27116);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27117,seq27116__$1);
}));

faber.model.mirror = (function faber$model$mirror(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27402 = arguments.length;
var i__4737__auto___27403 = (0);
while(true){
if((i__4737__auto___27403 < len__4736__auto___27402)){
args__4742__auto__.push((arguments[i__4737__auto___27403]));

var G__27404 = (i__4737__auto___27403 + (1));
i__4737__auto___27403 = G__27404;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.mirror.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.mirror.cljs$core$IFn$_invoke$arity$variadic = (function (p__27133,block){
var vec__27134 = p__27133;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27134,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27134,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27134,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"mirror","mirror",1914600218),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.mirror.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.mirror.cljs$lang$applyTo = (function (seq27128){
var G__27129 = cljs.core.first(seq27128);
var seq27128__$1 = cljs.core.next(seq27128);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27129,seq27128__$1);
}));

faber.model.color = (function faber$model$color(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27405 = arguments.length;
var i__4737__auto___27406 = (0);
while(true){
if((i__4737__auto___27406 < len__4736__auto___27405)){
args__4742__auto__.push((arguments[i__4737__auto___27406]));

var G__27407 = (i__4737__auto___27406 + (1));
i__4737__auto___27406 = G__27407;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.color.cljs$core$IFn$_invoke$arity$variadic = (function (p__27153,block){
var vec__27154 = p__27153;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27154,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27154,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27154,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27154,(3),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"color","color",1011675173),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,r,null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,a,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.color.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.color.cljs$lang$applyTo = (function (seq27146){
var G__27147 = cljs.core.first(seq27146);
var seq27146__$1 = cljs.core.next(seq27146);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27147,seq27146__$1);
}));

faber.model.hull = (function faber$model$hull(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27411 = arguments.length;
var i__4737__auto___27412 = (0);
while(true){
if((i__4737__auto___27412 < len__4736__auto___27411)){
args__4742__auto__.push((arguments[i__4737__auto___27412]));

var G__27413 = (i__4737__auto___27412 + (1));
i__4737__auto___27412 = G__27413;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.hull.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.hull.cljs$core$IFn$_invoke$arity$variadic = (function (block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"hull","hull",-957096876),null,(1),null)),block)));
}));

(faber.model.hull.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.hull.cljs$lang$applyTo = (function (seq27162){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27162));
}));

/**
 * A narrow implementation of OpenSCAD’ offset() for radius only.
 */
faber.model.offset_num = (function faber$model$offset_num(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27417 = arguments.length;
var i__4737__auto___27418 = (0);
while(true){
if((i__4737__auto___27418 < len__4736__auto___27417)){
args__4742__auto__.push((arguments[i__4737__auto___27418]));

var G__27419 = (i__4737__auto___27418 + (1));
i__4737__auto___27418 = G__27419;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.offset_num.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.offset_num.cljs$core$IFn$_invoke$arity$variadic = (function (r,block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"offset","offset",296498311),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"r","r",-471384190),null,(1),null)),(new cljs.core.List(null,r,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.offset_num.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.offset_num.cljs$lang$applyTo = (function (seq27171){
var G__27172 = cljs.core.first(seq27171);
var seq27171__$1 = cljs.core.next(seq27171);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27172,seq27171__$1);
}));

/**
 * A broad implementation of OpenSCAD’s offset(), supporting more parameters.
 */
faber.model.offset_map = (function faber$model$offset_map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27423 = arguments.length;
var i__4737__auto___27424 = (0);
while(true){
if((i__4737__auto___27424 < len__4736__auto___27423)){
args__4742__auto__.push((arguments[i__4737__auto___27424]));

var G__27426 = (i__4737__auto___27424 + (1));
i__4737__auto___27424 = G__27426;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.offset_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.offset_map.cljs$core$IFn$_invoke$arity$variadic = (function (p__27186,block){
var map__27187 = p__27186;
var map__27187__$1 = (((((!((map__27187 == null))))?(((((map__27187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27187):map__27187);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27187__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27187__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
var chamfer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27187__$1,new cljs.core.Keyword(null,"chamfer","chamfer",869501917));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"offset","offset",296498311),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"r","r",-471384190),null,(1),null)),(new cljs.core.List(null,r,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"delta","delta",108939957),null,(1),null)),(new cljs.core.List(null,delta,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"chamfer","chamfer",869501917),null,(1),null)),(new cljs.core.List(null,chamfer,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.offset_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.offset_map.cljs$lang$applyTo = (function (seq27183){
var G__27184 = cljs.core.first(seq27183);
var seq27183__$1 = cljs.core.next(seq27183);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27184,seq27183__$1);
}));

/**
 * Implement OpenSCAD’s offset() for two different call signatures.
 */
faber.model.offset = (function faber$model$offset(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27432 = arguments.length;
var i__4737__auto___27433 = (0);
while(true){
if((i__4737__auto___27433 < len__4736__auto___27432)){
args__4742__auto__.push((arguments[i__4737__auto___27433]));

var G__27436 = (i__4737__auto___27433 + (1));
i__4737__auto___27433 = G__27436;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.offset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.offset.cljs$core$IFn$_invoke$arity$variadic = (function (options,block){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(((cljs.core.map_QMARK_(options))?faber.model.offset_map:faber.model.offset_num),options),block);
}));

(faber.model.offset.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.offset.cljs$lang$applyTo = (function (seq27190){
var G__27192 = cljs.core.first(seq27190);
var seq27190__$1 = cljs.core.next(seq27190);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27192,seq27190__$1);
}));

faber.model.minkowski = (function faber$model$minkowski(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27440 = arguments.length;
var i__4737__auto___27441 = (0);
while(true){
if((i__4737__auto___27441 < len__4736__auto___27440)){
args__4742__auto__.push((arguments[i__4737__auto___27441]));

var G__27443 = (i__4737__auto___27441 + (1));
i__4737__auto___27441 = G__27443;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.minkowski.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.minkowski.cljs$core$IFn$_invoke$arity$variadic = (function (block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"minkowski","minkowski",2017304335),null,(1),null)),block)));
}));

(faber.model.minkowski.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.minkowski.cljs$lang$applyTo = (function (seq27194){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27194));
}));

faber.model.multmatrix = (function faber$model$multmatrix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27447 = arguments.length;
var i__4737__auto___27448 = (0);
while(true){
if((i__4737__auto___27448 < len__4736__auto___27447)){
args__4742__auto__.push((arguments[i__4737__auto___27448]));

var G__27449 = (i__4737__auto___27448 + (1));
i__4737__auto___27448 = G__27449;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.multmatrix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.multmatrix.cljs$core$IFn$_invoke$arity$variadic = (function (m,block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"multmatrix","multmatrix",-73563050),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.multmatrix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.multmatrix.cljs$lang$applyTo = (function (seq27197){
var G__27198 = cljs.core.first(seq27197);
var seq27197__$1 = cljs.core.next(seq27197);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27198,seq27197__$1);
}));

faber.model.union = (function faber$model$union(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27453 = arguments.length;
var i__4737__auto___27454 = (0);
while(true){
if((i__4737__auto___27454 < len__4736__auto___27453)){
args__4742__auto__.push((arguments[i__4737__auto___27454]));

var G__27455 = (i__4737__auto___27454 + (1));
i__4737__auto___27454 = G__27455;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.union.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.union.cljs$core$IFn$_invoke$arity$variadic = (function (block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"union","union",2142937499),null,(1),null)),block)));
}));

(faber.model.union.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.union.cljs$lang$applyTo = (function (seq27204){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27204));
}));

faber.model.intersection = (function faber$model$intersection(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27456 = arguments.length;
var i__4737__auto___27457 = (0);
while(true){
if((i__4737__auto___27457 < len__4736__auto___27456)){
args__4742__auto__.push((arguments[i__4737__auto___27457]));

var G__27458 = (i__4737__auto___27457 + (1));
i__4737__auto___27457 = G__27458;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.intersection.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),null,(1),null)),block)));
}));

(faber.model.intersection.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.intersection.cljs$lang$applyTo = (function (seq27213){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27213));
}));

faber.model.difference = (function faber$model$difference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27463 = arguments.length;
var i__4737__auto___27464 = (0);
while(true){
if((i__4737__auto___27464 < len__4736__auto___27463)){
args__4742__auto__.push((arguments[i__4737__auto___27464]));

var G__27465 = (i__4737__auto___27464 + (1));
i__4737__auto___27464 = G__27465;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.difference.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.difference.cljs$core$IFn$_invoke$arity$variadic = (function (block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"difference","difference",1916101396),null,(1),null)),block)));
}));

(faber.model.difference.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.difference.cljs$lang$applyTo = (function (seq27215){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27215));
}));

faber.model.projection = (function faber$model$projection(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27466 = arguments.length;
var i__4737__auto___27467 = (0);
while(true){
if((i__4737__auto___27467 < len__4736__auto___27466)){
args__4742__auto__.push((arguments[i__4737__auto___27467]));

var G__27468 = (i__4737__auto___27467 + (1));
i__4737__auto___27467 = G__27468;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.projection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.projection.cljs$core$IFn$_invoke$arity$variadic = (function (cut,block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"projection","projection",-412523042),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"cut","cut",-1042666209),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("faber.model","cut","faber.model/cut",-1133043243,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.projection.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.projection.cljs$lang$applyTo = (function (seq27220){
var G__27221 = cljs.core.first(seq27220);
var seq27220__$1 = cljs.core.next(seq27220);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27221,seq27220__$1);
}));

faber.model.project = (function faber$model$project(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27469 = arguments.length;
var i__4737__auto___27470 = (0);
while(true){
if((i__4737__auto___27470 < len__4736__auto___27469)){
args__4742__auto__.push((arguments[i__4737__auto___27470]));

var G__27471 = (i__4737__auto___27470 + (1));
i__4737__auto___27470 = G__27471;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.project.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.project.cljs$core$IFn$_invoke$arity$variadic = (function (block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"projection","projection",-412523042),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"cut","cut",-1042666209),null,(1),null)),(new cljs.core.List(null,false,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.project.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.project.cljs$lang$applyTo = (function (seq27234){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27234));
}));

faber.model.cut = (function faber$model$cut(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27472 = arguments.length;
var i__4737__auto___27473 = (0);
while(true){
if((i__4737__auto___27473 < len__4736__auto___27472)){
args__4742__auto__.push((arguments[i__4737__auto___27473]));

var G__27474 = (i__4737__auto___27473 + (1));
i__4737__auto___27473 = G__27474;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.cut.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.cut.cljs$core$IFn$_invoke$arity$variadic = (function (block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"projection","projection",-412523042),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"cut","cut",-1042666209),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.cut.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.cut.cljs$lang$applyTo = (function (seq27245){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27245));
}));

faber.model.render = (function faber$model$render(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27478 = arguments.length;
var i__4737__auto___27479 = (0);
while(true){
if((i__4737__auto___27479 < len__4736__auto___27478)){
args__4742__auto__.push((arguments[i__4737__auto___27479]));

var G__27480 = (i__4737__auto___27479 + (1));
i__4737__auto___27479 = G__27480;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.render.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.render.cljs$core$IFn$_invoke$arity$variadic = (function (block){
if(((cljs.core.seq(block)) && (typeof cljs.core.first(block) === 'number'))){
var vec__27267 = block;
var seq__27268 = cljs.core.seq(vec__27267);
var first__27269 = cljs.core.first(seq__27268);
var seq__27268__$1 = cljs.core.next(seq__27268);
var c = first__27269;
var bl = seq__27268__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"render","render",-1408033454),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bl], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"render","render",-1408033454),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}
}));

(faber.model.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.render.cljs$lang$applyTo = (function (seq27258){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27258));
}));

/**
 * Like difference, but subtraction is from the last node, not the first.
 */
faber.model.excise = (function faber$model$excise(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27484 = arguments.length;
var i__4737__auto___27485 = (0);
while(true){
if((i__4737__auto___27485 < len__4736__auto___27484)){
args__4742__auto__.push((arguments[i__4737__auto___27485]));

var G__27486 = (i__4737__auto___27485 + (1));
i__4737__auto___27485 = G__27486;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.excise.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.excise.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
return faber.model.difference.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.last(nodes),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(nodes)], 0));
}));

(faber.model.excise.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.excise.cljs$lang$applyTo = (function (seq27277){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27277));
}));


//# sourceMappingURL=faber.model.js.map
