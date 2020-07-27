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
var len__4736__auto___54337 = arguments.length;
var i__4737__auto___54338 = (0);
while(true){
if((i__4737__auto___54338 < len__4736__auto___54337)){
args__4742__auto__.push((arguments[i__4737__auto___54338]));

var G__54339 = (i__4737__auto___54338 + (1));
i__4737__auto___54338 = G__54339;
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
(faber.model.with_fn.cljs$lang$applyTo = (function (seq53586){
var G__53587 = cljs.core.first(seq53586);
var seq53586__$1 = cljs.core.next(seq53586);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53587,seq53586__$1);
}));

faber.model.with_fa = (function faber$model$with_fa(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54341 = arguments.length;
var i__4737__auto___54342 = (0);
while(true){
if((i__4737__auto___54342 < len__4736__auto___54341)){
args__4742__auto__.push((arguments[i__4737__auto___54342]));

var G__54343 = (i__4737__auto___54342 + (1));
i__4737__auto___54342 = G__54343;
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
(faber.model.with_fa.cljs$lang$applyTo = (function (seq53658){
var G__53659 = cljs.core.first(seq53658);
var seq53658__$1 = cljs.core.next(seq53658);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53659,seq53658__$1);
}));

faber.model.with_fs = (function faber$model$with_fs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54344 = arguments.length;
var i__4737__auto___54345 = (0);
while(true){
if((i__4737__auto___54345 < len__4736__auto___54344)){
args__4742__auto__.push((arguments[i__4737__auto___54345]));

var G__54346 = (i__4737__auto___54345 + (1));
i__4737__auto___54345 = G__54346;
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
(faber.model.with_fs.cljs$lang$applyTo = (function (seq53674){
var G__53675 = cljs.core.first(seq53674);
var seq53674__$1 = cljs.core.next(seq53674);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53675,seq53674__$1);
}));

faber.model.modifier = (function faber$model$modifier(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54358 = arguments.length;
var i__4737__auto___54361 = (0);
while(true){
if((i__4737__auto___54361 < len__4736__auto___54358)){
args__4742__auto__.push((arguments[i__4737__auto___54361]));

var G__54362 = (i__4737__auto___54361 + (1));
i__4737__auto___54361 = G__54362;
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
(faber.model.modifier.cljs$lang$applyTo = (function (seq53707){
var G__53708 = cljs.core.first(seq53707);
var seq53707__$1 = cljs.core.next(seq53707);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53708,seq53707__$1);
}));

faber.model.__SHARP_ = (function faber$model$__SHARP_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54363 = arguments.length;
var i__4737__auto___54364 = (0);
while(true){
if((i__4737__auto___54364 < len__4736__auto___54363)){
args__4742__auto__.push((arguments[i__4737__auto___54364]));

var G__54365 = (i__4737__auto___54364 + (1));
i__4737__auto___54364 = G__54365;
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
(faber.model.__SHARP_.cljs$lang$applyTo = (function (seq53711){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53711));
}));

faber.model.__PERCENT_ = (function faber$model$__PERCENT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54366 = arguments.length;
var i__4737__auto___54367 = (0);
while(true){
if((i__4737__auto___54367 < len__4736__auto___54366)){
args__4742__auto__.push((arguments[i__4737__auto___54367]));

var G__54368 = (i__4737__auto___54367 + (1));
i__4737__auto___54367 = G__54368;
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
(faber.model.__PERCENT_.cljs$lang$applyTo = (function (seq53714){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53714));
}));

faber.model.__STAR_ = (function faber$model$__STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54369 = arguments.length;
var i__4737__auto___54370 = (0);
while(true){
if((i__4737__auto___54370 < len__4736__auto___54369)){
args__4742__auto__.push((arguments[i__4737__auto___54370]));

var G__54371 = (i__4737__auto___54370 + (1));
i__4737__auto___54370 = G__54371;
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
(faber.model.__STAR_.cljs$lang$applyTo = (function (seq53740){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53740));
}));

faber.model.__BANG_ = (function faber$model$__BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54375 = arguments.length;
var i__4737__auto___54376 = (0);
while(true){
if((i__4737__auto___54376 < len__4736__auto___54375)){
args__4742__auto__.push((arguments[i__4737__auto___54376]));

var G__54378 = (i__4737__auto___54376 + (1));
i__4737__auto___54376 = G__54378;
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
(faber.model.__BANG_.cljs$lang$applyTo = (function (seq53763){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53763));
}));

faber.model.define_module = (function faber$model$define_module(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54382 = arguments.length;
var i__4737__auto___54383 = (0);
while(true){
if((i__4737__auto___54383 < len__4736__auto___54382)){
args__4742__auto__.push((arguments[i__4737__auto___54383]));

var G__54387 = (i__4737__auto___54383 + (1));
i__4737__auto___54383 = G__54387;
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
(faber.model.define_module.cljs$lang$applyTo = (function (seq53773){
var G__53774 = cljs.core.first(seq53773);
var seq53773__$1 = cljs.core.next(seq53773);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53774,seq53773__$1);
}));

faber.model.square = (function faber$model$square(x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"square","square",812434677),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),null,(1),null)))));
});
faber.model.polygon = (function faber$model$polygon(var_args){
var G__53798 = arguments.length;
switch (G__53798) {
case 1:
return faber.model.polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54400 = arguments.length;
var i__4737__auto___54401 = (0);
while(true){
if((i__4737__auto___54401 < len__4736__auto___54400)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54401]));

var G__54402 = (i__4737__auto___54401 + (1));
i__4737__auto___54401 = G__54402;
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

(faber.model.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points,paths,p__53818){
var map__53819 = p__53818;
var map__53819__$1 = (((((!((map__53819 == null))))?(((((map__53819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53819):map__53819);
var convexity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53819__$1,new cljs.core.Keyword(null,"convexity","convexity",-1510694660));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"points","points",-1486596883),null,(1),null)),(new cljs.core.List(null,points,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"paths","paths",-1807389588),null,(1),null)),(new cljs.core.List(null,paths,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,convexity,null,(1),null))], 0))))),null,(1),null)))));
}));

/** @this {Function} */
(faber.model.polygon.cljs$lang$applyTo = (function (seq53791){
var G__53792 = cljs.core.first(seq53791);
var seq53791__$1 = cljs.core.next(seq53791);
var G__53793 = cljs.core.first(seq53791__$1);
var seq53791__$2 = cljs.core.next(seq53791__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53792,G__53793,seq53791__$2);
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
var vec__53866 = rs;
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53866,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53866,(1),null);
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
var len__4736__auto___54428 = arguments.length;
var i__4737__auto___54429 = (0);
while(true){
if((i__4737__auto___54429 < len__4736__auto___54428)){
args__4742__auto__.push((arguments[i__4737__auto___54429]));

var G__54430 = (i__4737__auto___54429 + (1));
i__4737__auto___54429 = G__54430;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.resize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.resize.cljs$core$IFn$_invoke$arity$variadic = (function (p__53906,block){
var vec__53907 = p__53906;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53907,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53907,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53907,(2),null);
var is_auto = (((cljs.core.first(block) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),cljs.core.first(block))));
var auto = ((is_auto)?cljs.core.second(block):null);
var block__$1 = ((is_auto)?cljs.core.rest(cljs.core.rest(block)):block);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"resize","resize",297367086),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"x","x",2099068185),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"y","y",-1757859776),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"z","z",-789527183),null,(1),null)),(new cljs.core.List(null,z,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"auto","auto",-566279492),null,(1),null)),(new cljs.core.List(null,auto,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1], 0))));
}));

(faber.model.resize.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.resize.cljs$lang$applyTo = (function (seq53896){
var G__53897 = cljs.core.first(seq53896);
var seq53896__$1 = cljs.core.next(seq53896);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53897,seq53896__$1);
}));

faber.model.translate = (function faber$model$translate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54432 = arguments.length;
var i__4737__auto___54445 = (0);
while(true){
if((i__4737__auto___54445 < len__4736__auto___54432)){
args__4742__auto__.push((arguments[i__4737__auto___54445]));

var G__54447 = (i__4737__auto___54445 + (1));
i__4737__auto___54445 = G__54447;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.translate.cljs$core$IFn$_invoke$arity$variadic = (function (p__53914,block){
var vec__53915 = p__53914;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53915,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53915,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53915,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"translate","translate",1336199447),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.translate.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.translate.cljs$lang$applyTo = (function (seq53912){
var G__53913 = cljs.core.first(seq53912);
var seq53912__$1 = cljs.core.next(seq53912);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53913,seq53912__$1);
}));

faber.model.rotatev = (function faber$model$rotatev(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54449 = arguments.length;
var i__4737__auto___54450 = (0);
while(true){
if((i__4737__auto___54450 < len__4736__auto___54449)){
args__4742__auto__.push((arguments[i__4737__auto___54450]));

var G__54453 = (i__4737__auto___54450 + (1));
i__4737__auto___54450 = G__54453;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return faber.model.rotatev.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(faber.model.rotatev.cljs$core$IFn$_invoke$arity$variadic = (function (a,p__53924,block){
var vec__53925 = p__53924;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53925,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53925,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53925,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"rotatev","rotatev",1387211932),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),block], 0))));
}));

(faber.model.rotatev.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(faber.model.rotatev.cljs$lang$applyTo = (function (seq53920){
var G__53921 = cljs.core.first(seq53920);
var seq53920__$1 = cljs.core.next(seq53920);
var G__53922 = cljs.core.first(seq53920__$1);
var seq53920__$2 = cljs.core.next(seq53920__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53921,G__53922,seq53920__$2);
}));

faber.model.rotatec = (function faber$model$rotatec(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54457 = arguments.length;
var i__4737__auto___54459 = (0);
while(true){
if((i__4737__auto___54459 < len__4736__auto___54457)){
args__4742__auto__.push((arguments[i__4737__auto___54459]));

var G__54460 = (i__4737__auto___54459 + (1));
i__4737__auto___54459 = G__54460;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.rotatec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.rotatec.cljs$core$IFn$_invoke$arity$variadic = (function (p__53930,block){
var vec__53931 = p__53930;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53931,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53931,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53931,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"rotatec","rotatec",2126840625),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.rotatec.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.rotatec.cljs$lang$applyTo = (function (seq53928){
var G__53929 = cljs.core.first(seq53928);
var seq53928__$1 = cljs.core.next(seq53928);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53929,seq53928__$1);
}));

faber.model.rotate = (function faber$model$rotate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54464 = arguments.length;
var i__4737__auto___54466 = (0);
while(true){
if((i__4737__auto___54466 < len__4736__auto___54464)){
args__4742__auto__.push((arguments[i__4737__auto___54466]));

var G__54467 = (i__4737__auto___54466 + (1));
i__4737__auto___54466 = G__54467;
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
(faber.model.rotate.cljs$lang$applyTo = (function (seq53945){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53945));
}));

faber.model.scale = (function faber$model$scale(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54477 = arguments.length;
var i__4737__auto___54479 = (0);
while(true){
if((i__4737__auto___54479 < len__4736__auto___54477)){
args__4742__auto__.push((arguments[i__4737__auto___54479]));

var G__54481 = (i__4737__auto___54479 + (1));
i__4737__auto___54479 = G__54481;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.scale.cljs$core$IFn$_invoke$arity$variadic = (function (p__53999,block){
var vec__54000 = p__53999;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54000,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54000,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54000,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"scale","scale",-230427353),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.scale.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.scale.cljs$lang$applyTo = (function (seq53973){
var G__53974 = cljs.core.first(seq53973);
var seq53973__$1 = cljs.core.next(seq53973);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53974,seq53973__$1);
}));

faber.model.mirror = (function faber$model$mirror(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54495 = arguments.length;
var i__4737__auto___54496 = (0);
while(true){
if((i__4737__auto___54496 < len__4736__auto___54495)){
args__4742__auto__.push((arguments[i__4737__auto___54496]));

var G__54498 = (i__4737__auto___54496 + (1));
i__4737__auto___54496 = G__54498;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.mirror.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.mirror.cljs$core$IFn$_invoke$arity$variadic = (function (p__54028,block){
var vec__54029 = p__54028;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54029,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54029,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54029,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"mirror","mirror",1914600218),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.mirror.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.mirror.cljs$lang$applyTo = (function (seq54026){
var G__54027 = cljs.core.first(seq54026);
var seq54026__$1 = cljs.core.next(seq54026);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54027,seq54026__$1);
}));

faber.model.color = (function faber$model$color(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54499 = arguments.length;
var i__4737__auto___54500 = (0);
while(true){
if((i__4737__auto___54500 < len__4736__auto___54499)){
args__4742__auto__.push((arguments[i__4737__auto___54500]));

var G__54501 = (i__4737__auto___54500 + (1));
i__4737__auto___54500 = G__54501;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.color.cljs$core$IFn$_invoke$arity$variadic = (function (p__54051,block){
var vec__54053 = p__54051;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54053,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54053,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54053,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54053,(3),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"color","color",1011675173),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,r,null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,a,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.color.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.color.cljs$lang$applyTo = (function (seq54033){
var G__54034 = cljs.core.first(seq54033);
var seq54033__$1 = cljs.core.next(seq54033);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54034,seq54033__$1);
}));

faber.model.hull = (function faber$model$hull(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54503 = arguments.length;
var i__4737__auto___54504 = (0);
while(true){
if((i__4737__auto___54504 < len__4736__auto___54503)){
args__4742__auto__.push((arguments[i__4737__auto___54504]));

var G__54505 = (i__4737__auto___54504 + (1));
i__4737__auto___54504 = G__54505;
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
(faber.model.hull.cljs$lang$applyTo = (function (seq54072){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54072));
}));

/**
 * A narrow implementation of OpenSCAD’ offset() for radius only.
 */
faber.model.offset_num = (function faber$model$offset_num(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54506 = arguments.length;
var i__4737__auto___54507 = (0);
while(true){
if((i__4737__auto___54507 < len__4736__auto___54506)){
args__4742__auto__.push((arguments[i__4737__auto___54507]));

var G__54508 = (i__4737__auto___54507 + (1));
i__4737__auto___54507 = G__54508;
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
(faber.model.offset_num.cljs$lang$applyTo = (function (seq54119){
var G__54120 = cljs.core.first(seq54119);
var seq54119__$1 = cljs.core.next(seq54119);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54120,seq54119__$1);
}));

/**
 * A broad implementation of OpenSCAD’s offset(), supporting more parameters.
 */
faber.model.offset_map = (function faber$model$offset_map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54513 = arguments.length;
var i__4737__auto___54514 = (0);
while(true){
if((i__4737__auto___54514 < len__4736__auto___54513)){
args__4742__auto__.push((arguments[i__4737__auto___54514]));

var G__54515 = (i__4737__auto___54514 + (1));
i__4737__auto___54514 = G__54515;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.offset_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.offset_map.cljs$core$IFn$_invoke$arity$variadic = (function (p__54189,block){
var map__54193 = p__54189;
var map__54193__$1 = (((((!((map__54193 == null))))?(((((map__54193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54193):map__54193);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54193__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54193__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
var chamfer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54193__$1,new cljs.core.Keyword(null,"chamfer","chamfer",869501917));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"offset","offset",296498311),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"r","r",-471384190),null,(1),null)),(new cljs.core.List(null,r,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"delta","delta",108939957),null,(1),null)),(new cljs.core.List(null,delta,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"chamfer","chamfer",869501917),null,(1),null)),(new cljs.core.List(null,chamfer,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.offset_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.offset_map.cljs$lang$applyTo = (function (seq54166){
var G__54167 = cljs.core.first(seq54166);
var seq54166__$1 = cljs.core.next(seq54166);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54167,seq54166__$1);
}));

/**
 * Implement OpenSCAD’s offset() for two different call signatures.
 */
faber.model.offset = (function faber$model$offset(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54520 = arguments.length;
var i__4737__auto___54521 = (0);
while(true){
if((i__4737__auto___54521 < len__4736__auto___54520)){
args__4742__auto__.push((arguments[i__4737__auto___54521]));

var G__54522 = (i__4737__auto___54521 + (1));
i__4737__auto___54521 = G__54522;
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
(faber.model.offset.cljs$lang$applyTo = (function (seq54216){
var G__54217 = cljs.core.first(seq54216);
var seq54216__$1 = cljs.core.next(seq54216);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54217,seq54216__$1);
}));

faber.model.minkowski = (function faber$model$minkowski(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54531 = arguments.length;
var i__4737__auto___54536 = (0);
while(true){
if((i__4737__auto___54536 < len__4736__auto___54531)){
args__4742__auto__.push((arguments[i__4737__auto___54536]));

var G__54537 = (i__4737__auto___54536 + (1));
i__4737__auto___54536 = G__54537;
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
(faber.model.minkowski.cljs$lang$applyTo = (function (seq54221){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54221));
}));

faber.model.multmatrix = (function faber$model$multmatrix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54552 = arguments.length;
var i__4737__auto___54553 = (0);
while(true){
if((i__4737__auto___54553 < len__4736__auto___54552)){
args__4742__auto__.push((arguments[i__4737__auto___54553]));

var G__54560 = (i__4737__auto___54553 + (1));
i__4737__auto___54553 = G__54560;
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
(faber.model.multmatrix.cljs$lang$applyTo = (function (seq54230){
var G__54231 = cljs.core.first(seq54230);
var seq54230__$1 = cljs.core.next(seq54230);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54231,seq54230__$1);
}));

faber.model.union = (function faber$model$union(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54570 = arguments.length;
var i__4737__auto___54571 = (0);
while(true){
if((i__4737__auto___54571 < len__4736__auto___54570)){
args__4742__auto__.push((arguments[i__4737__auto___54571]));

var G__54573 = (i__4737__auto___54571 + (1));
i__4737__auto___54571 = G__54573;
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
(faber.model.union.cljs$lang$applyTo = (function (seq54253){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54253));
}));

faber.model.intersection = (function faber$model$intersection(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54580 = arguments.length;
var i__4737__auto___54581 = (0);
while(true){
if((i__4737__auto___54581 < len__4736__auto___54580)){
args__4742__auto__.push((arguments[i__4737__auto___54581]));

var G__54584 = (i__4737__auto___54581 + (1));
i__4737__auto___54581 = G__54584;
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
(faber.model.intersection.cljs$lang$applyTo = (function (seq54268){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54268));
}));

faber.model.difference = (function faber$model$difference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54589 = arguments.length;
var i__4737__auto___54590 = (0);
while(true){
if((i__4737__auto___54590 < len__4736__auto___54589)){
args__4742__auto__.push((arguments[i__4737__auto___54590]));

var G__54591 = (i__4737__auto___54590 + (1));
i__4737__auto___54590 = G__54591;
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
(faber.model.difference.cljs$lang$applyTo = (function (seq54277){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54277));
}));

faber.model.projection = (function faber$model$projection(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54592 = arguments.length;
var i__4737__auto___54594 = (0);
while(true){
if((i__4737__auto___54594 < len__4736__auto___54592)){
args__4742__auto__.push((arguments[i__4737__auto___54594]));

var G__54596 = (i__4737__auto___54594 + (1));
i__4737__auto___54594 = G__54596;
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
(faber.model.projection.cljs$lang$applyTo = (function (seq54282){
var G__54283 = cljs.core.first(seq54282);
var seq54282__$1 = cljs.core.next(seq54282);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54283,seq54282__$1);
}));

faber.model.project = (function faber$model$project(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54600 = arguments.length;
var i__4737__auto___54601 = (0);
while(true){
if((i__4737__auto___54601 < len__4736__auto___54600)){
args__4742__auto__.push((arguments[i__4737__auto___54601]));

var G__54602 = (i__4737__auto___54601 + (1));
i__4737__auto___54601 = G__54602;
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
(faber.model.project.cljs$lang$applyTo = (function (seq54300){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54300));
}));

faber.model.cut = (function faber$model$cut(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54606 = arguments.length;
var i__4737__auto___54607 = (0);
while(true){
if((i__4737__auto___54607 < len__4736__auto___54606)){
args__4742__auto__.push((arguments[i__4737__auto___54607]));

var G__54608 = (i__4737__auto___54607 + (1));
i__4737__auto___54607 = G__54608;
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
(faber.model.cut.cljs$lang$applyTo = (function (seq54303){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54303));
}));

faber.model.render = (function faber$model$render(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54610 = arguments.length;
var i__4737__auto___54611 = (0);
while(true){
if((i__4737__auto___54611 < len__4736__auto___54610)){
args__4742__auto__.push((arguments[i__4737__auto___54611]));

var G__54614 = (i__4737__auto___54611 + (1));
i__4737__auto___54611 = G__54614;
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
var vec__54310 = block;
var seq__54311 = cljs.core.seq(vec__54310);
var first__54312 = cljs.core.first(seq__54311);
var seq__54311__$1 = cljs.core.next(seq__54311);
var c = first__54312;
var bl = seq__54311__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"render","render",-1408033454),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bl], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"render","render",-1408033454),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}
}));

(faber.model.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.render.cljs$lang$applyTo = (function (seq54308){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54308));
}));

/**
 * Like difference, but subtraction is from the last node, not the first.
 */
faber.model.excise = (function faber$model$excise(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54621 = arguments.length;
var i__4737__auto___54622 = (0);
while(true){
if((i__4737__auto___54622 < len__4736__auto___54621)){
args__4742__auto__.push((arguments[i__4737__auto___54622]));

var G__54623 = (i__4737__auto___54622 + (1));
i__4737__auto___54622 = G__54623;
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
(faber.model.excise.cljs$lang$applyTo = (function (seq54313){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54313));
}));


//# sourceMappingURL=faber.model.js.map
