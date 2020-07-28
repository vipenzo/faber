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
var len__4736__auto___29009 = arguments.length;
var i__4737__auto___29010 = (0);
while(true){
if((i__4737__auto___29010 < len__4736__auto___29009)){
args__4742__auto__.push((arguments[i__4737__auto___29010]));

var G__29011 = (i__4737__auto___29010 + (1));
i__4737__auto___29010 = G__29011;
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
(faber.model.with_fn.cljs$lang$applyTo = (function (seq28764){
var G__28765 = cljs.core.first(seq28764);
var seq28764__$1 = cljs.core.next(seq28764);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28765,seq28764__$1);
}));

faber.model.with_fa = (function faber$model$with_fa(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29015 = arguments.length;
var i__4737__auto___29016 = (0);
while(true){
if((i__4737__auto___29016 < len__4736__auto___29015)){
args__4742__auto__.push((arguments[i__4737__auto___29016]));

var G__29019 = (i__4737__auto___29016 + (1));
i__4737__auto___29016 = G__29019;
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
(faber.model.with_fa.cljs$lang$applyTo = (function (seq28772){
var G__28773 = cljs.core.first(seq28772);
var seq28772__$1 = cljs.core.next(seq28772);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28773,seq28772__$1);
}));

faber.model.with_fs = (function faber$model$with_fs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29021 = arguments.length;
var i__4737__auto___29022 = (0);
while(true){
if((i__4737__auto___29022 < len__4736__auto___29021)){
args__4742__auto__.push((arguments[i__4737__auto___29022]));

var G__29025 = (i__4737__auto___29022 + (1));
i__4737__auto___29022 = G__29025;
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
(faber.model.with_fs.cljs$lang$applyTo = (function (seq28779){
var G__28780 = cljs.core.first(seq28779);
var seq28779__$1 = cljs.core.next(seq28779);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28780,seq28779__$1);
}));

faber.model.modifier = (function faber$model$modifier(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29031 = arguments.length;
var i__4737__auto___29032 = (0);
while(true){
if((i__4737__auto___29032 < len__4736__auto___29031)){
args__4742__auto__.push((arguments[i__4737__auto___29032]));

var G__29035 = (i__4737__auto___29032 + (1));
i__4737__auto___29032 = G__29035;
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
(faber.model.modifier.cljs$lang$applyTo = (function (seq28787){
var G__28788 = cljs.core.first(seq28787);
var seq28787__$1 = cljs.core.next(seq28787);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28788,seq28787__$1);
}));

faber.model.__SHARP_ = (function faber$model$__SHARP_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29054 = arguments.length;
var i__4737__auto___29055 = (0);
while(true){
if((i__4737__auto___29055 < len__4736__auto___29054)){
args__4742__auto__.push((arguments[i__4737__auto___29055]));

var G__29056 = (i__4737__auto___29055 + (1));
i__4737__auto___29055 = G__29056;
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
(faber.model.__SHARP_.cljs$lang$applyTo = (function (seq28797){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28797));
}));

faber.model.__PERCENT_ = (function faber$model$__PERCENT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29061 = arguments.length;
var i__4737__auto___29062 = (0);
while(true){
if((i__4737__auto___29062 < len__4736__auto___29061)){
args__4742__auto__.push((arguments[i__4737__auto___29062]));

var G__29063 = (i__4737__auto___29062 + (1));
i__4737__auto___29062 = G__29063;
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
(faber.model.__PERCENT_.cljs$lang$applyTo = (function (seq28799){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28799));
}));

faber.model.__STAR_ = (function faber$model$__STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29065 = arguments.length;
var i__4737__auto___29066 = (0);
while(true){
if((i__4737__auto___29066 < len__4736__auto___29065)){
args__4742__auto__.push((arguments[i__4737__auto___29066]));

var G__29067 = (i__4737__auto___29066 + (1));
i__4737__auto___29066 = G__29067;
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
(faber.model.__STAR_.cljs$lang$applyTo = (function (seq28803){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28803));
}));

faber.model.__BANG_ = (function faber$model$__BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29068 = arguments.length;
var i__4737__auto___29069 = (0);
while(true){
if((i__4737__auto___29069 < len__4736__auto___29068)){
args__4742__auto__.push((arguments[i__4737__auto___29069]));

var G__29070 = (i__4737__auto___29069 + (1));
i__4737__auto___29069 = G__29070;
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
(faber.model.__BANG_.cljs$lang$applyTo = (function (seq28810){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28810));
}));

faber.model.define_module = (function faber$model$define_module(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29072 = arguments.length;
var i__4737__auto___29073 = (0);
while(true){
if((i__4737__auto___29073 < len__4736__auto___29072)){
args__4742__auto__.push((arguments[i__4737__auto___29073]));

var G__29074 = (i__4737__auto___29073 + (1));
i__4737__auto___29073 = G__29074;
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
(faber.model.define_module.cljs$lang$applyTo = (function (seq28817){
var G__28818 = cljs.core.first(seq28817);
var seq28817__$1 = cljs.core.next(seq28817);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28818,seq28817__$1);
}));

faber.model.square = (function faber$model$square(x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"square","square",812434677),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),null,(1),null)))));
});
faber.model.polygon = (function faber$model$polygon(var_args){
var G__28832 = arguments.length;
switch (G__28832) {
case 1:
return faber.model.polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___29084 = arguments.length;
var i__4737__auto___29085 = (0);
while(true){
if((i__4737__auto___29085 < len__4736__auto___29084)){
args_arr__4757__auto__.push((arguments[i__4737__auto___29085]));

var G__29086 = (i__4737__auto___29085 + (1));
i__4737__auto___29085 = G__29086;
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

(faber.model.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points,paths,p__28840){
var map__28841 = p__28840;
var map__28841__$1 = (((((!((map__28841 == null))))?(((((map__28841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28841):map__28841);
var convexity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28841__$1,new cljs.core.Keyword(null,"convexity","convexity",-1510694660));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"points","points",-1486596883),null,(1),null)),(new cljs.core.List(null,points,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"paths","paths",-1807389588),null,(1),null)),(new cljs.core.List(null,paths,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,convexity,null,(1),null))], 0))))),null,(1),null)))));
}));

/** @this {Function} */
(faber.model.polygon.cljs$lang$applyTo = (function (seq28828){
var G__28829 = cljs.core.first(seq28828);
var seq28828__$1 = cljs.core.next(seq28828);
var G__28830 = cljs.core.first(seq28828__$1);
var seq28828__$2 = cljs.core.next(seq28828__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28829,G__28830,seq28828__$2);
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
var vec__28846 = rs;
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28846,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28846,(1),null);
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
var len__4736__auto___29098 = arguments.length;
var i__4737__auto___29100 = (0);
while(true){
if((i__4737__auto___29100 < len__4736__auto___29098)){
args__4742__auto__.push((arguments[i__4737__auto___29100]));

var G__29102 = (i__4737__auto___29100 + (1));
i__4737__auto___29100 = G__29102;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.resize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.resize.cljs$core$IFn$_invoke$arity$variadic = (function (p__28862,block){
var vec__28864 = p__28862;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28864,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28864,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28864,(2),null);
var is_auto = (((cljs.core.first(block) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),cljs.core.first(block))));
var auto = ((is_auto)?cljs.core.second(block):null);
var block__$1 = ((is_auto)?cljs.core.rest(cljs.core.rest(block)):block);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"resize","resize",297367086),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"x","x",2099068185),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"y","y",-1757859776),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"z","z",-789527183),null,(1),null)),(new cljs.core.List(null,z,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"auto","auto",-566279492),null,(1),null)),(new cljs.core.List(null,auto,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1], 0))));
}));

(faber.model.resize.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.resize.cljs$lang$applyTo = (function (seq28853){
var G__28854 = cljs.core.first(seq28853);
var seq28853__$1 = cljs.core.next(seq28853);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28854,seq28853__$1);
}));

faber.model.translate = (function faber$model$translate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29103 = arguments.length;
var i__4737__auto___29104 = (0);
while(true){
if((i__4737__auto___29104 < len__4736__auto___29103)){
args__4742__auto__.push((arguments[i__4737__auto___29104]));

var G__29105 = (i__4737__auto___29104 + (1));
i__4737__auto___29104 = G__29105;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.translate.cljs$core$IFn$_invoke$arity$variadic = (function (p__28879,block){
var vec__28880 = p__28879;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28880,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28880,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28880,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"translate","translate",1336199447),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.translate.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.translate.cljs$lang$applyTo = (function (seq28869){
var G__28870 = cljs.core.first(seq28869);
var seq28869__$1 = cljs.core.next(seq28869);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28870,seq28869__$1);
}));

faber.model.rotatev = (function faber$model$rotatev(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29109 = arguments.length;
var i__4737__auto___29110 = (0);
while(true){
if((i__4737__auto___29110 < len__4736__auto___29109)){
args__4742__auto__.push((arguments[i__4737__auto___29110]));

var G__29113 = (i__4737__auto___29110 + (1));
i__4737__auto___29110 = G__29113;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return faber.model.rotatev.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(faber.model.rotatev.cljs$core$IFn$_invoke$arity$variadic = (function (a,p__28897,block){
var vec__28898 = p__28897;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28898,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28898,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28898,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"rotatev","rotatev",1387211932),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),block], 0))));
}));

(faber.model.rotatev.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(faber.model.rotatev.cljs$lang$applyTo = (function (seq28886){
var G__28887 = cljs.core.first(seq28886);
var seq28886__$1 = cljs.core.next(seq28886);
var G__28888 = cljs.core.first(seq28886__$1);
var seq28886__$2 = cljs.core.next(seq28886__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28887,G__28888,seq28886__$2);
}));

faber.model.rotatec = (function faber$model$rotatec(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29117 = arguments.length;
var i__4737__auto___29118 = (0);
while(true){
if((i__4737__auto___29118 < len__4736__auto___29117)){
args__4742__auto__.push((arguments[i__4737__auto___29118]));

var G__29120 = (i__4737__auto___29118 + (1));
i__4737__auto___29118 = G__29120;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.rotatec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.rotatec.cljs$core$IFn$_invoke$arity$variadic = (function (p__28913,block){
var vec__28914 = p__28913;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28914,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28914,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28914,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"rotatec","rotatec",2126840625),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.rotatec.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.rotatec.cljs$lang$applyTo = (function (seq28903){
var G__28904 = cljs.core.first(seq28903);
var seq28903__$1 = cljs.core.next(seq28903);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28904,seq28903__$1);
}));

faber.model.rotate = (function faber$model$rotate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29121 = arguments.length;
var i__4737__auto___29122 = (0);
while(true){
if((i__4737__auto___29122 < len__4736__auto___29121)){
args__4742__auto__.push((arguments[i__4737__auto___29122]));

var G__29125 = (i__4737__auto___29122 + (1));
i__4737__auto___29122 = G__29125;
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
(faber.model.rotate.cljs$lang$applyTo = (function (seq28918){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28918));
}));

faber.model.scale = (function faber$model$scale(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29127 = arguments.length;
var i__4737__auto___29128 = (0);
while(true){
if((i__4737__auto___29128 < len__4736__auto___29127)){
args__4742__auto__.push((arguments[i__4737__auto___29128]));

var G__29131 = (i__4737__auto___29128 + (1));
i__4737__auto___29128 = G__29131;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.scale.cljs$core$IFn$_invoke$arity$variadic = (function (p__28927,block){
var vec__28928 = p__28927;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28928,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28928,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28928,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"scale","scale",-230427353),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.scale.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.scale.cljs$lang$applyTo = (function (seq28921){
var G__28922 = cljs.core.first(seq28921);
var seq28921__$1 = cljs.core.next(seq28921);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28922,seq28921__$1);
}));

faber.model.mirror = (function faber$model$mirror(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29137 = arguments.length;
var i__4737__auto___29138 = (0);
while(true){
if((i__4737__auto___29138 < len__4736__auto___29137)){
args__4742__auto__.push((arguments[i__4737__auto___29138]));

var G__29139 = (i__4737__auto___29138 + (1));
i__4737__auto___29138 = G__29139;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.mirror.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.mirror.cljs$core$IFn$_invoke$arity$variadic = (function (p__28939,block){
var vec__28940 = p__28939;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28940,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28940,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28940,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"mirror","mirror",1914600218),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.mirror.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.mirror.cljs$lang$applyTo = (function (seq28933){
var G__28934 = cljs.core.first(seq28933);
var seq28933__$1 = cljs.core.next(seq28933);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28934,seq28933__$1);
}));

faber.model.color = (function faber$model$color(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29144 = arguments.length;
var i__4737__auto___29145 = (0);
while(true){
if((i__4737__auto___29145 < len__4736__auto___29144)){
args__4742__auto__.push((arguments[i__4737__auto___29145]));

var G__29146 = (i__4737__auto___29145 + (1));
i__4737__auto___29145 = G__29146;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.color.cljs$core$IFn$_invoke$arity$variadic = (function (p__28951,block){
var vec__28952 = p__28951;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28952,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28952,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28952,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28952,(3),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"color","color",1011675173),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,r,null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,a,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.color.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.color.cljs$lang$applyTo = (function (seq28945){
var G__28946 = cljs.core.first(seq28945);
var seq28945__$1 = cljs.core.next(seq28945);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28946,seq28945__$1);
}));

faber.model.hull = (function faber$model$hull(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29151 = arguments.length;
var i__4737__auto___29152 = (0);
while(true){
if((i__4737__auto___29152 < len__4736__auto___29151)){
args__4742__auto__.push((arguments[i__4737__auto___29152]));

var G__29153 = (i__4737__auto___29152 + (1));
i__4737__auto___29152 = G__29153;
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
(faber.model.hull.cljs$lang$applyTo = (function (seq28956){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28956));
}));

/**
 * A narrow implementation of OpenSCAD’ offset() for radius only.
 */
faber.model.offset_num = (function faber$model$offset_num(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29157 = arguments.length;
var i__4737__auto___29158 = (0);
while(true){
if((i__4737__auto___29158 < len__4736__auto___29157)){
args__4742__auto__.push((arguments[i__4737__auto___29158]));

var G__29160 = (i__4737__auto___29158 + (1));
i__4737__auto___29158 = G__29160;
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
(faber.model.offset_num.cljs$lang$applyTo = (function (seq28959){
var G__28960 = cljs.core.first(seq28959);
var seq28959__$1 = cljs.core.next(seq28959);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28960,seq28959__$1);
}));

/**
 * A broad implementation of OpenSCAD’s offset(), supporting more parameters.
 */
faber.model.offset_map = (function faber$model$offset_map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29164 = arguments.length;
var i__4737__auto___29165 = (0);
while(true){
if((i__4737__auto___29165 < len__4736__auto___29164)){
args__4742__auto__.push((arguments[i__4737__auto___29165]));

var G__29166 = (i__4737__auto___29165 + (1));
i__4737__auto___29165 = G__29166;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.offset_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.offset_map.cljs$core$IFn$_invoke$arity$variadic = (function (p__28968,block){
var map__28969 = p__28968;
var map__28969__$1 = (((((!((map__28969 == null))))?(((((map__28969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28969):map__28969);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28969__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28969__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
var chamfer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28969__$1,new cljs.core.Keyword(null,"chamfer","chamfer",869501917));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"offset","offset",296498311),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"r","r",-471384190),null,(1),null)),(new cljs.core.List(null,r,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"delta","delta",108939957),null,(1),null)),(new cljs.core.List(null,delta,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"chamfer","chamfer",869501917),null,(1),null)),(new cljs.core.List(null,chamfer,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.offset_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.offset_map.cljs$lang$applyTo = (function (seq28963){
var G__28964 = cljs.core.first(seq28963);
var seq28963__$1 = cljs.core.next(seq28963);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28964,seq28963__$1);
}));

/**
 * Implement OpenSCAD’s offset() for two different call signatures.
 */
faber.model.offset = (function faber$model$offset(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29171 = arguments.length;
var i__4737__auto___29172 = (0);
while(true){
if((i__4737__auto___29172 < len__4736__auto___29171)){
args__4742__auto__.push((arguments[i__4737__auto___29172]));

var G__29173 = (i__4737__auto___29172 + (1));
i__4737__auto___29172 = G__29173;
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
(faber.model.offset.cljs$lang$applyTo = (function (seq28973){
var G__28974 = cljs.core.first(seq28973);
var seq28973__$1 = cljs.core.next(seq28973);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28974,seq28973__$1);
}));

faber.model.minkowski = (function faber$model$minkowski(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29174 = arguments.length;
var i__4737__auto___29175 = (0);
while(true){
if((i__4737__auto___29175 < len__4736__auto___29174)){
args__4742__auto__.push((arguments[i__4737__auto___29175]));

var G__29178 = (i__4737__auto___29175 + (1));
i__4737__auto___29175 = G__29178;
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
(faber.model.minkowski.cljs$lang$applyTo = (function (seq28976){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28976));
}));

faber.model.multmatrix = (function faber$model$multmatrix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29181 = arguments.length;
var i__4737__auto___29182 = (0);
while(true){
if((i__4737__auto___29182 < len__4736__auto___29181)){
args__4742__auto__.push((arguments[i__4737__auto___29182]));

var G__29183 = (i__4737__auto___29182 + (1));
i__4737__auto___29182 = G__29183;
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
(faber.model.multmatrix.cljs$lang$applyTo = (function (seq28977){
var G__28979 = cljs.core.first(seq28977);
var seq28977__$1 = cljs.core.next(seq28977);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28979,seq28977__$1);
}));

faber.model.union = (function faber$model$union(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29187 = arguments.length;
var i__4737__auto___29188 = (0);
while(true){
if((i__4737__auto___29188 < len__4736__auto___29187)){
args__4742__auto__.push((arguments[i__4737__auto___29188]));

var G__29192 = (i__4737__auto___29188 + (1));
i__4737__auto___29188 = G__29192;
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
(faber.model.union.cljs$lang$applyTo = (function (seq28981){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28981));
}));

faber.model.intersection = (function faber$model$intersection(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29197 = arguments.length;
var i__4737__auto___29198 = (0);
while(true){
if((i__4737__auto___29198 < len__4736__auto___29197)){
args__4742__auto__.push((arguments[i__4737__auto___29198]));

var G__29199 = (i__4737__auto___29198 + (1));
i__4737__auto___29198 = G__29199;
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
(faber.model.intersection.cljs$lang$applyTo = (function (seq28984){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28984));
}));

faber.model.difference = (function faber$model$difference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29204 = arguments.length;
var i__4737__auto___29205 = (0);
while(true){
if((i__4737__auto___29205 < len__4736__auto___29204)){
args__4742__auto__.push((arguments[i__4737__auto___29205]));

var G__29206 = (i__4737__auto___29205 + (1));
i__4737__auto___29205 = G__29206;
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
(faber.model.difference.cljs$lang$applyTo = (function (seq28985){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28985));
}));

faber.model.compose = (function faber$model$compose(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29210 = arguments.length;
var i__4737__auto___29211 = (0);
while(true){
if((i__4737__auto___29211 < len__4736__auto___29210)){
args__4742__auto__.push((arguments[i__4737__auto___29211]));

var G__29212 = (i__4737__auto___29211 + (1));
i__4737__auto___29211 = G__29212;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.compose.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.compose.cljs$core$IFn$_invoke$arity$variadic = (function (block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"compose","compose",-495790624),null,(1),null)),block)));
}));

(faber.model.compose.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.compose.cljs$lang$applyTo = (function (seq28988){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28988));
}));

faber.model.hole = (function faber$model$hole(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29216 = arguments.length;
var i__4737__auto___29217 = (0);
while(true){
if((i__4737__auto___29217 < len__4736__auto___29216)){
args__4742__auto__.push((arguments[i__4737__auto___29217]));

var G__29218 = (i__4737__auto___29217 + (1));
i__4737__auto___29217 = G__29218;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.model.hole.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.model.hole.cljs$core$IFn$_invoke$arity$variadic = (function (block){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"hole","hole",-743450790),null,(1),null)),block)));
}));

(faber.model.hole.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.hole.cljs$lang$applyTo = (function (seq28989){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28989));
}));

faber.model.projection = (function faber$model$projection(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29222 = arguments.length;
var i__4737__auto___29223 = (0);
while(true){
if((i__4737__auto___29223 < len__4736__auto___29222)){
args__4742__auto__.push((arguments[i__4737__auto___29223]));

var G__29224 = (i__4737__auto___29223 + (1));
i__4737__auto___29223 = G__29224;
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
(faber.model.projection.cljs$lang$applyTo = (function (seq28991){
var G__28994 = cljs.core.first(seq28991);
var seq28991__$1 = cljs.core.next(seq28991);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28994,seq28991__$1);
}));

faber.model.project = (function faber$model$project(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29225 = arguments.length;
var i__4737__auto___29227 = (0);
while(true){
if((i__4737__auto___29227 < len__4736__auto___29225)){
args__4742__auto__.push((arguments[i__4737__auto___29227]));

var G__29229 = (i__4737__auto___29227 + (1));
i__4737__auto___29227 = G__29229;
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
(faber.model.project.cljs$lang$applyTo = (function (seq28995){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28995));
}));

faber.model.cut = (function faber$model$cut(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29231 = arguments.length;
var i__4737__auto___29232 = (0);
while(true){
if((i__4737__auto___29232 < len__4736__auto___29231)){
args__4742__auto__.push((arguments[i__4737__auto___29232]));

var G__29235 = (i__4737__auto___29232 + (1));
i__4737__auto___29232 = G__29235;
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
(faber.model.cut.cljs$lang$applyTo = (function (seq28997){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28997));
}));

faber.model.render = (function faber$model$render(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29240 = arguments.length;
var i__4737__auto___29241 = (0);
while(true){
if((i__4737__auto___29241 < len__4736__auto___29240)){
args__4742__auto__.push((arguments[i__4737__auto___29241]));

var G__29242 = (i__4737__auto___29241 + (1));
i__4737__auto___29241 = G__29242;
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
var vec__29002 = block;
var seq__29004 = cljs.core.seq(vec__29002);
var first__29006 = cljs.core.first(seq__29004);
var seq__29004__$1 = cljs.core.next(seq__29004);
var c = first__29006;
var bl = seq__29004__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"render","render",-1408033454),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bl], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"render","render",-1408033454),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}
}));

(faber.model.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.render.cljs$lang$applyTo = (function (seq29000){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29000));
}));

/**
 * Like difference, but subtraction is from the last node, not the first.
 */
faber.model.excise = (function faber$model$excise(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29246 = arguments.length;
var i__4737__auto___29247 = (0);
while(true){
if((i__4737__auto___29247 < len__4736__auto___29246)){
args__4742__auto__.push((arguments[i__4737__auto___29247]));

var G__29248 = (i__4737__auto___29247 + (1));
i__4737__auto___29247 = G__29248;
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
(faber.model.excise.cljs$lang$applyTo = (function (seq29007){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29007));
}));


//# sourceMappingURL=faber.model.js.map
