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
var len__4736__auto___27408 = arguments.length;
var i__4737__auto___27409 = (0);
while(true){
if((i__4737__auto___27409 < len__4736__auto___27408)){
args__4742__auto__.push((arguments[i__4737__auto___27409]));

var G__27410 = (i__4737__auto___27409 + (1));
i__4737__auto___27409 = G__27410;
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
(faber.model.with_fn.cljs$lang$applyTo = (function (seq27140){
var G__27141 = cljs.core.first(seq27140);
var seq27140__$1 = cljs.core.next(seq27140);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27141,seq27140__$1);
}));

faber.model.with_fa = (function faber$model$with_fa(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27414 = arguments.length;
var i__4737__auto___27415 = (0);
while(true){
if((i__4737__auto___27415 < len__4736__auto___27414)){
args__4742__auto__.push((arguments[i__4737__auto___27415]));

var G__27416 = (i__4737__auto___27415 + (1));
i__4737__auto___27415 = G__27416;
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
(faber.model.with_fa.cljs$lang$applyTo = (function (seq27151){
var G__27152 = cljs.core.first(seq27151);
var seq27151__$1 = cljs.core.next(seq27151);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27152,seq27151__$1);
}));

faber.model.with_fs = (function faber$model$with_fs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27420 = arguments.length;
var i__4737__auto___27421 = (0);
while(true){
if((i__4737__auto___27421 < len__4736__auto___27420)){
args__4742__auto__.push((arguments[i__4737__auto___27421]));

var G__27422 = (i__4737__auto___27421 + (1));
i__4737__auto___27421 = G__27422;
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
(faber.model.with_fs.cljs$lang$applyTo = (function (seq27163){
var G__27164 = cljs.core.first(seq27163);
var seq27163__$1 = cljs.core.next(seq27163);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27164,seq27163__$1);
}));

faber.model.modifier = (function faber$model$modifier(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27425 = arguments.length;
var i__4737__auto___27427 = (0);
while(true){
if((i__4737__auto___27427 < len__4736__auto___27425)){
args__4742__auto__.push((arguments[i__4737__auto___27427]));

var G__27428 = (i__4737__auto___27427 + (1));
i__4737__auto___27427 = G__27428;
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
(faber.model.modifier.cljs$lang$applyTo = (function (seq27175){
var G__27176 = cljs.core.first(seq27175);
var seq27175__$1 = cljs.core.next(seq27175);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27176,seq27175__$1);
}));

faber.model.__SHARP_ = (function faber$model$__SHARP_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27429 = arguments.length;
var i__4737__auto___27430 = (0);
while(true){
if((i__4737__auto___27430 < len__4736__auto___27429)){
args__4742__auto__.push((arguments[i__4737__auto___27430]));

var G__27431 = (i__4737__auto___27430 + (1));
i__4737__auto___27430 = G__27431;
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
(faber.model.__SHARP_.cljs$lang$applyTo = (function (seq27182){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27182));
}));

faber.model.__PERCENT_ = (function faber$model$__PERCENT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27434 = arguments.length;
var i__4737__auto___27435 = (0);
while(true){
if((i__4737__auto___27435 < len__4736__auto___27434)){
args__4742__auto__.push((arguments[i__4737__auto___27435]));

var G__27437 = (i__4737__auto___27435 + (1));
i__4737__auto___27435 = G__27437;
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
(faber.model.__PERCENT_.cljs$lang$applyTo = (function (seq27189){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27189));
}));

faber.model.__STAR_ = (function faber$model$__STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27438 = arguments.length;
var i__4737__auto___27439 = (0);
while(true){
if((i__4737__auto___27439 < len__4736__auto___27438)){
args__4742__auto__.push((arguments[i__4737__auto___27439]));

var G__27442 = (i__4737__auto___27439 + (1));
i__4737__auto___27439 = G__27442;
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
(faber.model.__STAR_.cljs$lang$applyTo = (function (seq27191){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27191));
}));

faber.model.__BANG_ = (function faber$model$__BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27444 = arguments.length;
var i__4737__auto___27445 = (0);
while(true){
if((i__4737__auto___27445 < len__4736__auto___27444)){
args__4742__auto__.push((arguments[i__4737__auto___27445]));

var G__27446 = (i__4737__auto___27445 + (1));
i__4737__auto___27445 = G__27446;
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
(faber.model.__BANG_.cljs$lang$applyTo = (function (seq27193){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27193));
}));

faber.model.define_module = (function faber$model$define_module(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27450 = arguments.length;
var i__4737__auto___27451 = (0);
while(true){
if((i__4737__auto___27451 < len__4736__auto___27450)){
args__4742__auto__.push((arguments[i__4737__auto___27451]));

var G__27452 = (i__4737__auto___27451 + (1));
i__4737__auto___27451 = G__27452;
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
(faber.model.define_module.cljs$lang$applyTo = (function (seq27195){
var G__27196 = cljs.core.first(seq27195);
var seq27195__$1 = cljs.core.next(seq27195);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27196,seq27195__$1);
}));

faber.model.square = (function faber$model$square(x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"square","square",812434677),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),null,(1),null)))));
});
faber.model.polygon = (function faber$model$polygon(var_args){
var G__27208 = arguments.length;
switch (G__27208) {
case 1:
return faber.model.polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___27460 = arguments.length;
var i__4737__auto___27461 = (0);
while(true){
if((i__4737__auto___27461 < len__4736__auto___27460)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27461]));

var G__27462 = (i__4737__auto___27461 + (1));
i__4737__auto___27461 = G__27462;
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

(faber.model.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points,paths,p__27210){
var map__27211 = p__27210;
var map__27211__$1 = (((((!((map__27211 == null))))?(((((map__27211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27211):map__27211);
var convexity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27211__$1,new cljs.core.Keyword(null,"convexity","convexity",-1510694660));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"points","points",-1486596883),null,(1),null)),(new cljs.core.List(null,points,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"paths","paths",-1807389588),null,(1),null)),(new cljs.core.List(null,paths,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,convexity,null,(1),null))], 0))))),null,(1),null)))));
}));

/** @this {Function} */
(faber.model.polygon.cljs$lang$applyTo = (function (seq27205){
var G__27206 = cljs.core.first(seq27205);
var seq27205__$1 = cljs.core.next(seq27205);
var G__27207 = cljs.core.first(seq27205__$1);
var seq27205__$2 = cljs.core.next(seq27205__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27206,G__27207,seq27205__$2);
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
var vec__27217 = rs;
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27217,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27217,(1),null);
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
var len__4736__auto___27475 = arguments.length;
var i__4737__auto___27476 = (0);
while(true){
if((i__4737__auto___27476 < len__4736__auto___27475)){
args__4742__auto__.push((arguments[i__4737__auto___27476]));

var G__27477 = (i__4737__auto___27476 + (1));
i__4737__auto___27476 = G__27477;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.resize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.resize.cljs$core$IFn$_invoke$arity$variadic = (function (p__27233,block){
var vec__27235 = p__27233;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27235,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27235,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27235,(2),null);
var is_auto = (((cljs.core.first(block) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),cljs.core.first(block))));
var auto = ((is_auto)?cljs.core.second(block):null);
var block__$1 = ((is_auto)?cljs.core.rest(cljs.core.rest(block)):block);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"resize","resize",297367086),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"x","x",2099068185),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"y","y",-1757859776),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"z","z",-789527183),null,(1),null)),(new cljs.core.List(null,z,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"auto","auto",-566279492),null,(1),null)),(new cljs.core.List(null,auto,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1], 0))));
}));

(faber.model.resize.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.resize.cljs$lang$applyTo = (function (seq27225){
var G__27226 = cljs.core.first(seq27225);
var seq27225__$1 = cljs.core.next(seq27225);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27226,seq27225__$1);
}));

faber.model.translate = (function faber$model$translate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27481 = arguments.length;
var i__4737__auto___27482 = (0);
while(true){
if((i__4737__auto___27482 < len__4736__auto___27481)){
args__4742__auto__.push((arguments[i__4737__auto___27482]));

var G__27483 = (i__4737__auto___27482 + (1));
i__4737__auto___27482 = G__27483;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.translate.cljs$core$IFn$_invoke$arity$variadic = (function (p__27254,block){
var vec__27255 = p__27254;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27255,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27255,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27255,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"translate","translate",1336199447),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.translate.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.translate.cljs$lang$applyTo = (function (seq27249){
var G__27250 = cljs.core.first(seq27249);
var seq27249__$1 = cljs.core.next(seq27249);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27250,seq27249__$1);
}));

faber.model.rotatev = (function faber$model$rotatev(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27487 = arguments.length;
var i__4737__auto___27488 = (0);
while(true){
if((i__4737__auto___27488 < len__4736__auto___27487)){
args__4742__auto__.push((arguments[i__4737__auto___27488]));

var G__27489 = (i__4737__auto___27488 + (1));
i__4737__auto___27488 = G__27489;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return faber.model.rotatev.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(faber.model.rotatev.cljs$core$IFn$_invoke$arity$variadic = (function (a,p__27270,block){
var vec__27271 = p__27270;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27271,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27271,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27271,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"rotatev","rotatev",1387211932),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),block], 0))));
}));

(faber.model.rotatev.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(faber.model.rotatev.cljs$lang$applyTo = (function (seq27261){
var G__27262 = cljs.core.first(seq27261);
var seq27261__$1 = cljs.core.next(seq27261);
var G__27263 = cljs.core.first(seq27261__$1);
var seq27261__$2 = cljs.core.next(seq27261__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27262,G__27263,seq27261__$2);
}));

faber.model.rotatec = (function faber$model$rotatec(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27490 = arguments.length;
var i__4737__auto___27491 = (0);
while(true){
if((i__4737__auto___27491 < len__4736__auto___27490)){
args__4742__auto__.push((arguments[i__4737__auto___27491]));

var G__27492 = (i__4737__auto___27491 + (1));
i__4737__auto___27491 = G__27492;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.rotatec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.rotatec.cljs$core$IFn$_invoke$arity$variadic = (function (p__27281,block){
var vec__27283 = p__27281;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27283,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27283,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27283,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"rotatec","rotatec",2126840625),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.rotatec.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.rotatec.cljs$lang$applyTo = (function (seq27278){
var G__27279 = cljs.core.first(seq27278);
var seq27278__$1 = cljs.core.next(seq27278);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27279,seq27278__$1);
}));

faber.model.rotate = (function faber$model$rotate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27493 = arguments.length;
var i__4737__auto___27494 = (0);
while(true){
if((i__4737__auto___27494 < len__4736__auto___27493)){
args__4742__auto__.push((arguments[i__4737__auto___27494]));

var G__27495 = (i__4737__auto___27494 + (1));
i__4737__auto___27494 = G__27495;
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
(faber.model.rotate.cljs$lang$applyTo = (function (seq27290){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27290));
}));

faber.model.scale = (function faber$model$scale(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27496 = arguments.length;
var i__4737__auto___27497 = (0);
while(true){
if((i__4737__auto___27497 < len__4736__auto___27496)){
args__4742__auto__.push((arguments[i__4737__auto___27497]));

var G__27498 = (i__4737__auto___27497 + (1));
i__4737__auto___27497 = G__27498;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.scale.cljs$core$IFn$_invoke$arity$variadic = (function (p__27307,block){
var vec__27308 = p__27307;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27308,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27308,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27308,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"scale","scale",-230427353),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.scale.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.scale.cljs$lang$applyTo = (function (seq27298){
var G__27299 = cljs.core.first(seq27298);
var seq27298__$1 = cljs.core.next(seq27298);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27299,seq27298__$1);
}));

faber.model.mirror = (function faber$model$mirror(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27499 = arguments.length;
var i__4737__auto___27500 = (0);
while(true){
if((i__4737__auto___27500 < len__4736__auto___27499)){
args__4742__auto__.push((arguments[i__4737__auto___27500]));

var G__27501 = (i__4737__auto___27500 + (1));
i__4737__auto___27500 = G__27501;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.mirror.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.mirror.cljs$core$IFn$_invoke$arity$variadic = (function (p__27318,block){
var vec__27319 = p__27318;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27319,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27319,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27319,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"mirror","mirror",1914600218),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.mirror.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.mirror.cljs$lang$applyTo = (function (seq27314){
var G__27315 = cljs.core.first(seq27314);
var seq27314__$1 = cljs.core.next(seq27314);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27315,seq27314__$1);
}));

faber.model.color = (function faber$model$color(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27502 = arguments.length;
var i__4737__auto___27503 = (0);
while(true){
if((i__4737__auto___27503 < len__4736__auto___27502)){
args__4742__auto__.push((arguments[i__4737__auto___27503]));

var G__27504 = (i__4737__auto___27503 + (1));
i__4737__auto___27503 = G__27504;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.color.cljs$core$IFn$_invoke$arity$variadic = (function (p__27327,block){
var vec__27328 = p__27327;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27328,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27328,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27328,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27328,(3),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"color","color",1011675173),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,r,null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,a,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.color.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.color.cljs$lang$applyTo = (function (seq27325){
var G__27326 = cljs.core.first(seq27325);
var seq27325__$1 = cljs.core.next(seq27325);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27326,seq27325__$1);
}));

faber.model.hull = (function faber$model$hull(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27505 = arguments.length;
var i__4737__auto___27506 = (0);
while(true){
if((i__4737__auto___27506 < len__4736__auto___27505)){
args__4742__auto__.push((arguments[i__4737__auto___27506]));

var G__27507 = (i__4737__auto___27506 + (1));
i__4737__auto___27506 = G__27507;
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
(faber.model.hull.cljs$lang$applyTo = (function (seq27334){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27334));
}));

/**
 * A narrow implementation of OpenSCAD’ offset() for radius only.
 */
faber.model.offset_num = (function faber$model$offset_num(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27508 = arguments.length;
var i__4737__auto___27509 = (0);
while(true){
if((i__4737__auto___27509 < len__4736__auto___27508)){
args__4742__auto__.push((arguments[i__4737__auto___27509]));

var G__27510 = (i__4737__auto___27509 + (1));
i__4737__auto___27509 = G__27510;
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
(faber.model.offset_num.cljs$lang$applyTo = (function (seq27338){
var G__27339 = cljs.core.first(seq27338);
var seq27338__$1 = cljs.core.next(seq27338);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27339,seq27338__$1);
}));

/**
 * A broad implementation of OpenSCAD’s offset(), supporting more parameters.
 */
faber.model.offset_map = (function faber$model$offset_map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27511 = arguments.length;
var i__4737__auto___27512 = (0);
while(true){
if((i__4737__auto___27512 < len__4736__auto___27511)){
args__4742__auto__.push((arguments[i__4737__auto___27512]));

var G__27513 = (i__4737__auto___27512 + (1));
i__4737__auto___27512 = G__27513;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.offset_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.offset_map.cljs$core$IFn$_invoke$arity$variadic = (function (p__27345,block){
var map__27346 = p__27345;
var map__27346__$1 = (((((!((map__27346 == null))))?(((((map__27346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27346):map__27346);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27346__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27346__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
var chamfer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27346__$1,new cljs.core.Keyword(null,"chamfer","chamfer",869501917));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"offset","offset",296498311),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"r","r",-471384190),null,(1),null)),(new cljs.core.List(null,r,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"delta","delta",108939957),null,(1),null)),(new cljs.core.List(null,delta,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"chamfer","chamfer",869501917),null,(1),null)),(new cljs.core.List(null,chamfer,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.offset_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.offset_map.cljs$lang$applyTo = (function (seq27343){
var G__27344 = cljs.core.first(seq27343);
var seq27343__$1 = cljs.core.next(seq27343);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27344,seq27343__$1);
}));

/**
 * Implement OpenSCAD’s offset() for two different call signatures.
 */
faber.model.offset = (function faber$model$offset(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27514 = arguments.length;
var i__4737__auto___27515 = (0);
while(true){
if((i__4737__auto___27515 < len__4736__auto___27514)){
args__4742__auto__.push((arguments[i__4737__auto___27515]));

var G__27516 = (i__4737__auto___27515 + (1));
i__4737__auto___27515 = G__27516;
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
(faber.model.offset.cljs$lang$applyTo = (function (seq27352){
var G__27353 = cljs.core.first(seq27352);
var seq27352__$1 = cljs.core.next(seq27352);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27353,seq27352__$1);
}));

faber.model.minkowski = (function faber$model$minkowski(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27517 = arguments.length;
var i__4737__auto___27518 = (0);
while(true){
if((i__4737__auto___27518 < len__4736__auto___27517)){
args__4742__auto__.push((arguments[i__4737__auto___27518]));

var G__27519 = (i__4737__auto___27518 + (1));
i__4737__auto___27518 = G__27519;
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
(faber.model.minkowski.cljs$lang$applyTo = (function (seq27359){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27359));
}));

faber.model.multmatrix = (function faber$model$multmatrix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27520 = arguments.length;
var i__4737__auto___27521 = (0);
while(true){
if((i__4737__auto___27521 < len__4736__auto___27520)){
args__4742__auto__.push((arguments[i__4737__auto___27521]));

var G__27522 = (i__4737__auto___27521 + (1));
i__4737__auto___27521 = G__27522;
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
(faber.model.multmatrix.cljs$lang$applyTo = (function (seq27365){
var G__27366 = cljs.core.first(seq27365);
var seq27365__$1 = cljs.core.next(seq27365);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27366,seq27365__$1);
}));

faber.model.union = (function faber$model$union(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27523 = arguments.length;
var i__4737__auto___27524 = (0);
while(true){
if((i__4737__auto___27524 < len__4736__auto___27523)){
args__4742__auto__.push((arguments[i__4737__auto___27524]));

var G__27525 = (i__4737__auto___27524 + (1));
i__4737__auto___27524 = G__27525;
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
(faber.model.union.cljs$lang$applyTo = (function (seq27368){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27368));
}));

faber.model.intersection = (function faber$model$intersection(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27526 = arguments.length;
var i__4737__auto___27527 = (0);
while(true){
if((i__4737__auto___27527 < len__4736__auto___27526)){
args__4742__auto__.push((arguments[i__4737__auto___27527]));

var G__27528 = (i__4737__auto___27527 + (1));
i__4737__auto___27527 = G__27528;
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
(faber.model.intersection.cljs$lang$applyTo = (function (seq27373){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27373));
}));

faber.model.difference = (function faber$model$difference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27529 = arguments.length;
var i__4737__auto___27530 = (0);
while(true){
if((i__4737__auto___27530 < len__4736__auto___27529)){
args__4742__auto__.push((arguments[i__4737__auto___27530]));

var G__27531 = (i__4737__auto___27530 + (1));
i__4737__auto___27530 = G__27531;
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
(faber.model.difference.cljs$lang$applyTo = (function (seq27374){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27374));
}));

faber.model.projection = (function faber$model$projection(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27532 = arguments.length;
var i__4737__auto___27533 = (0);
while(true){
if((i__4737__auto___27533 < len__4736__auto___27532)){
args__4742__auto__.push((arguments[i__4737__auto___27533]));

var G__27534 = (i__4737__auto___27533 + (1));
i__4737__auto___27533 = G__27534;
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
(faber.model.projection.cljs$lang$applyTo = (function (seq27377){
var G__27378 = cljs.core.first(seq27377);
var seq27377__$1 = cljs.core.next(seq27377);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27378,seq27377__$1);
}));

faber.model.project = (function faber$model$project(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27535 = arguments.length;
var i__4737__auto___27536 = (0);
while(true){
if((i__4737__auto___27536 < len__4736__auto___27535)){
args__4742__auto__.push((arguments[i__4737__auto___27536]));

var G__27537 = (i__4737__auto___27536 + (1));
i__4737__auto___27536 = G__27537;
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
(faber.model.project.cljs$lang$applyTo = (function (seq27380){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27380));
}));

faber.model.cut = (function faber$model$cut(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27538 = arguments.length;
var i__4737__auto___27539 = (0);
while(true){
if((i__4737__auto___27539 < len__4736__auto___27538)){
args__4742__auto__.push((arguments[i__4737__auto___27539]));

var G__27540 = (i__4737__auto___27539 + (1));
i__4737__auto___27539 = G__27540;
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
(faber.model.cut.cljs$lang$applyTo = (function (seq27385){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27385));
}));

faber.model.render = (function faber$model$render(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27541 = arguments.length;
var i__4737__auto___27542 = (0);
while(true){
if((i__4737__auto___27542 < len__4736__auto___27541)){
args__4742__auto__.push((arguments[i__4737__auto___27542]));

var G__27543 = (i__4737__auto___27542 + (1));
i__4737__auto___27542 = G__27543;
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
var vec__27392 = block;
var seq__27393 = cljs.core.seq(vec__27392);
var first__27394 = cljs.core.first(seq__27393);
var seq__27393__$1 = cljs.core.next(seq__27393);
var c = first__27394;
var bl = seq__27393__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"render","render",-1408033454),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bl], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"render","render",-1408033454),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}
}));

(faber.model.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.render.cljs$lang$applyTo = (function (seq27391){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27391));
}));

/**
 * Like difference, but subtraction is from the last node, not the first.
 */
faber.model.excise = (function faber$model$excise(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27544 = arguments.length;
var i__4737__auto___27545 = (0);
while(true){
if((i__4737__auto___27545 < len__4736__auto___27544)){
args__4742__auto__.push((arguments[i__4737__auto___27545]));

var G__27546 = (i__4737__auto___27545 + (1));
i__4737__auto___27545 = G__27546;
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
(faber.model.excise.cljs$lang$applyTo = (function (seq27401){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27401));
}));


//# sourceMappingURL=faber.model.js.map
