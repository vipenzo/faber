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
var len__4736__auto___29012 = arguments.length;
var i__4737__auto___29013 = (0);
while(true){
if((i__4737__auto___29013 < len__4736__auto___29012)){
args__4742__auto__.push((arguments[i__4737__auto___29013]));

var G__29014 = (i__4737__auto___29013 + (1));
i__4737__auto___29013 = G__29014;
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
(faber.model.with_fn.cljs$lang$applyTo = (function (seq28762){
var G__28763 = cljs.core.first(seq28762);
var seq28762__$1 = cljs.core.next(seq28762);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28763,seq28762__$1);
}));

faber.model.with_fa = (function faber$model$with_fa(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29017 = arguments.length;
var i__4737__auto___29018 = (0);
while(true){
if((i__4737__auto___29018 < len__4736__auto___29017)){
args__4742__auto__.push((arguments[i__4737__auto___29018]));

var G__29020 = (i__4737__auto___29018 + (1));
i__4737__auto___29018 = G__29020;
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
(faber.model.with_fa.cljs$lang$applyTo = (function (seq28770){
var G__28771 = cljs.core.first(seq28770);
var seq28770__$1 = cljs.core.next(seq28770);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28771,seq28770__$1);
}));

faber.model.with_fs = (function faber$model$with_fs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29023 = arguments.length;
var i__4737__auto___29024 = (0);
while(true){
if((i__4737__auto___29024 < len__4736__auto___29023)){
args__4742__auto__.push((arguments[i__4737__auto___29024]));

var G__29026 = (i__4737__auto___29024 + (1));
i__4737__auto___29024 = G__29026;
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
(faber.model.with_fs.cljs$lang$applyTo = (function (seq28776){
var G__28777 = cljs.core.first(seq28776);
var seq28776__$1 = cljs.core.next(seq28776);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28777,seq28776__$1);
}));

faber.model.modifier = (function faber$model$modifier(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29033 = arguments.length;
var i__4737__auto___29034 = (0);
while(true){
if((i__4737__auto___29034 < len__4736__auto___29033)){
args__4742__auto__.push((arguments[i__4737__auto___29034]));

var G__29036 = (i__4737__auto___29034 + (1));
i__4737__auto___29034 = G__29036;
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
(faber.model.modifier.cljs$lang$applyTo = (function (seq28785){
var G__28786 = cljs.core.first(seq28785);
var seq28785__$1 = cljs.core.next(seq28785);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28786,seq28785__$1);
}));

faber.model.__SHARP_ = (function faber$model$__SHARP_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29038 = arguments.length;
var i__4737__auto___29039 = (0);
while(true){
if((i__4737__auto___29039 < len__4736__auto___29038)){
args__4742__auto__.push((arguments[i__4737__auto___29039]));

var G__29040 = (i__4737__auto___29039 + (1));
i__4737__auto___29039 = G__29040;
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
(faber.model.__SHARP_.cljs$lang$applyTo = (function (seq28793){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28793));
}));

faber.model.__PERCENT_ = (function faber$model$__PERCENT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29045 = arguments.length;
var i__4737__auto___29046 = (0);
while(true){
if((i__4737__auto___29046 < len__4736__auto___29045)){
args__4742__auto__.push((arguments[i__4737__auto___29046]));

var G__29047 = (i__4737__auto___29046 + (1));
i__4737__auto___29046 = G__29047;
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
(faber.model.__PERCENT_.cljs$lang$applyTo = (function (seq28798){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28798));
}));

faber.model.__STAR_ = (function faber$model$__STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29049 = arguments.length;
var i__4737__auto___29050 = (0);
while(true){
if((i__4737__auto___29050 < len__4736__auto___29049)){
args__4742__auto__.push((arguments[i__4737__auto___29050]));

var G__29051 = (i__4737__auto___29050 + (1));
i__4737__auto___29050 = G__29051;
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
(faber.model.__STAR_.cljs$lang$applyTo = (function (seq28801){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28801));
}));

faber.model.__BANG_ = (function faber$model$__BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29052 = arguments.length;
var i__4737__auto___29053 = (0);
while(true){
if((i__4737__auto___29053 < len__4736__auto___29052)){
args__4742__auto__.push((arguments[i__4737__auto___29053]));

var G__29071 = (i__4737__auto___29053 + (1));
i__4737__auto___29053 = G__29071;
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
(faber.model.__BANG_.cljs$lang$applyTo = (function (seq28806){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28806));
}));

faber.model.define_module = (function faber$model$define_module(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29076 = arguments.length;
var i__4737__auto___29077 = (0);
while(true){
if((i__4737__auto___29077 < len__4736__auto___29076)){
args__4742__auto__.push((arguments[i__4737__auto___29077]));

var G__29080 = (i__4737__auto___29077 + (1));
i__4737__auto___29077 = G__29080;
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
(faber.model.define_module.cljs$lang$applyTo = (function (seq28812){
var G__28813 = cljs.core.first(seq28812);
var seq28812__$1 = cljs.core.next(seq28812);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28813,seq28812__$1);
}));

faber.model.square = (function faber$model$square(x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"square","square",812434677),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),null,(1),null)))));
});
faber.model.polygon = (function faber$model$polygon(var_args){
var G__28826 = arguments.length;
switch (G__28826) {
case 1:
return faber.model.polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___29088 = arguments.length;
var i__4737__auto___29089 = (0);
while(true){
if((i__4737__auto___29089 < len__4736__auto___29088)){
args_arr__4757__auto__.push((arguments[i__4737__auto___29089]));

var G__29090 = (i__4737__auto___29089 + (1));
i__4737__auto___29089 = G__29090;
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

(faber.model.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (points,paths,p__28837){
var map__28838 = p__28837;
var map__28838__$1 = (((((!((map__28838 == null))))?(((((map__28838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28838):map__28838);
var convexity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28838__$1,new cljs.core.Keyword(null,"convexity","convexity",-1510694660));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"points","points",-1486596883),null,(1),null)),(new cljs.core.List(null,points,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"paths","paths",-1807389588),null,(1),null)),(new cljs.core.List(null,paths,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,convexity,null,(1),null))], 0))))),null,(1),null)))));
}));

/** @this {Function} */
(faber.model.polygon.cljs$lang$applyTo = (function (seq28823){
var G__28824 = cljs.core.first(seq28823);
var seq28823__$1 = cljs.core.next(seq28823);
var G__28825 = cljs.core.first(seq28823__$1);
var seq28823__$2 = cljs.core.next(seq28823__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28824,G__28825,seq28823__$2);
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
var vec__28843 = rs;
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28843,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28843,(1),null);
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
var len__4736__auto___29097 = arguments.length;
var i__4737__auto___29099 = (0);
while(true){
if((i__4737__auto___29099 < len__4736__auto___29097)){
args__4742__auto__.push((arguments[i__4737__auto___29099]));

var G__29101 = (i__4737__auto___29099 + (1));
i__4737__auto___29099 = G__29101;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.resize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.resize.cljs$core$IFn$_invoke$arity$variadic = (function (p__28855,block){
var vec__28856 = p__28855;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28856,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28856,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28856,(2),null);
var is_auto = (((cljs.core.first(block) instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),cljs.core.first(block))));
var auto = ((is_auto)?cljs.core.second(block):null);
var block__$1 = ((is_auto)?cljs.core.rest(cljs.core.rest(block)):block);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"resize","resize",297367086),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"x","x",2099068185),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"y","y",-1757859776),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"z","z",-789527183),null,(1),null)),(new cljs.core.List(null,z,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"auto","auto",-566279492),null,(1),null)),(new cljs.core.List(null,auto,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block__$1], 0))));
}));

(faber.model.resize.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.resize.cljs$lang$applyTo = (function (seq28851){
var G__28852 = cljs.core.first(seq28851);
var seq28851__$1 = cljs.core.next(seq28851);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28852,seq28851__$1);
}));

faber.model.translate = (function faber$model$translate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29111 = arguments.length;
var i__4737__auto___29112 = (0);
while(true){
if((i__4737__auto___29112 < len__4736__auto___29111)){
args__4742__auto__.push((arguments[i__4737__auto___29112]));

var G__29114 = (i__4737__auto___29112 + (1));
i__4737__auto___29112 = G__29114;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.translate.cljs$core$IFn$_invoke$arity$variadic = (function (p__28871,block){
var vec__28872 = p__28871;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28872,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28872,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28872,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"translate","translate",1336199447),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.translate.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.translate.cljs$lang$applyTo = (function (seq28867){
var G__28868 = cljs.core.first(seq28867);
var seq28867__$1 = cljs.core.next(seq28867);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28868,seq28867__$1);
}));

faber.model.rotatev = (function faber$model$rotatev(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29115 = arguments.length;
var i__4737__auto___29116 = (0);
while(true){
if((i__4737__auto___29116 < len__4736__auto___29115)){
args__4742__auto__.push((arguments[i__4737__auto___29116]));

var G__29119 = (i__4737__auto___29116 + (1));
i__4737__auto___29116 = G__29119;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return faber.model.rotatev.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(faber.model.rotatev.cljs$core$IFn$_invoke$arity$variadic = (function (a,p__28890,block){
var vec__28892 = p__28890;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28892,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"rotatev","rotatev",1387211932),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),block], 0))));
}));

(faber.model.rotatev.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(faber.model.rotatev.cljs$lang$applyTo = (function (seq28883){
var G__28884 = cljs.core.first(seq28883);
var seq28883__$1 = cljs.core.next(seq28883);
var G__28885 = cljs.core.first(seq28883__$1);
var seq28883__$2 = cljs.core.next(seq28883__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28884,G__28885,seq28883__$2);
}));

faber.model.rotatec = (function faber$model$rotatec(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29123 = arguments.length;
var i__4737__auto___29124 = (0);
while(true){
if((i__4737__auto___29124 < len__4736__auto___29123)){
args__4742__auto__.push((arguments[i__4737__auto___29124]));

var G__29126 = (i__4737__auto___29124 + (1));
i__4737__auto___29124 = G__29126;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.rotatec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.rotatec.cljs$core$IFn$_invoke$arity$variadic = (function (p__28905,block){
var vec__28906 = p__28905;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28906,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28906,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28906,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"rotatec","rotatec",2126840625),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.rotatec.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.rotatec.cljs$lang$applyTo = (function (seq28901){
var G__28902 = cljs.core.first(seq28901);
var seq28901__$1 = cljs.core.next(seq28901);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28902,seq28901__$1);
}));

faber.model.rotate = (function faber$model$rotate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29129 = arguments.length;
var i__4737__auto___29130 = (0);
while(true){
if((i__4737__auto___29130 < len__4736__auto___29129)){
args__4742__auto__.push((arguments[i__4737__auto___29130]));

var G__29132 = (i__4737__auto___29130 + (1));
i__4737__auto___29130 = G__29132;
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
(faber.model.rotate.cljs$lang$applyTo = (function (seq28917){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28917));
}));

faber.model.scale = (function faber$model$scale(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29134 = arguments.length;
var i__4737__auto___29135 = (0);
while(true){
if((i__4737__auto___29135 < len__4736__auto___29134)){
args__4742__auto__.push((arguments[i__4737__auto___29135]));

var G__29136 = (i__4737__auto___29135 + (1));
i__4737__auto___29135 = G__29136;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.scale.cljs$core$IFn$_invoke$arity$variadic = (function (p__28923,block){
var vec__28924 = p__28923;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28924,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28924,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28924,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"scale","scale",-230427353),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.scale.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.scale.cljs$lang$applyTo = (function (seq28919){
var G__28920 = cljs.core.first(seq28919);
var seq28919__$1 = cljs.core.next(seq28919);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28920,seq28919__$1);
}));

faber.model.mirror = (function faber$model$mirror(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29141 = arguments.length;
var i__4737__auto___29142 = (0);
while(true){
if((i__4737__auto___29142 < len__4736__auto___29141)){
args__4742__auto__.push((arguments[i__4737__auto___29142]));

var G__29143 = (i__4737__auto___29142 + (1));
i__4737__auto___29142 = G__29143;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.mirror.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.mirror.cljs$core$IFn$_invoke$arity$variadic = (function (p__28935,block){
var vec__28936 = p__28935;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28936,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28936,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28936,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"mirror","mirror",1914600218),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,z,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.mirror.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.mirror.cljs$lang$applyTo = (function (seq28931){
var G__28932 = cljs.core.first(seq28931);
var seq28931__$1 = cljs.core.next(seq28931);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28932,seq28931__$1);
}));

faber.model.color = (function faber$model$color(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29147 = arguments.length;
var i__4737__auto___29149 = (0);
while(true){
if((i__4737__auto___29149 < len__4736__auto___29147)){
args__4742__auto__.push((arguments[i__4737__auto___29149]));

var G__29150 = (i__4737__auto___29149 + (1));
i__4737__auto___29149 = G__29150;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.color.cljs$core$IFn$_invoke$arity$variadic = (function (p__28947,block){
var vec__28948 = p__28947;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28948,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28948,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28948,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28948,(3),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"color","color",1011675173),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,r,null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,a,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.color.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.color.cljs$lang$applyTo = (function (seq28943){
var G__28944 = cljs.core.first(seq28943);
var seq28943__$1 = cljs.core.next(seq28943);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28944,seq28943__$1);
}));

faber.model.hull = (function faber$model$hull(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29155 = arguments.length;
var i__4737__auto___29156 = (0);
while(true){
if((i__4737__auto___29156 < len__4736__auto___29155)){
args__4742__auto__.push((arguments[i__4737__auto___29156]));

var G__29159 = (i__4737__auto___29156 + (1));
i__4737__auto___29156 = G__29159;
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
(faber.model.hull.cljs$lang$applyTo = (function (seq28955){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28955));
}));

/**
 * A narrow implementation of OpenSCAD’ offset() for radius only.
 */
faber.model.offset_num = (function faber$model$offset_num(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29161 = arguments.length;
var i__4737__auto___29162 = (0);
while(true){
if((i__4737__auto___29162 < len__4736__auto___29161)){
args__4742__auto__.push((arguments[i__4737__auto___29162]));

var G__29163 = (i__4737__auto___29162 + (1));
i__4737__auto___29162 = G__29163;
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
(faber.model.offset_num.cljs$lang$applyTo = (function (seq28957){
var G__28958 = cljs.core.first(seq28957);
var seq28957__$1 = cljs.core.next(seq28957);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28958,seq28957__$1);
}));

/**
 * A broad implementation of OpenSCAD’s offset(), supporting more parameters.
 */
faber.model.offset_map = (function faber$model$offset_map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29168 = arguments.length;
var i__4737__auto___29169 = (0);
while(true){
if((i__4737__auto___29169 < len__4736__auto___29168)){
args__4742__auto__.push((arguments[i__4737__auto___29169]));

var G__29170 = (i__4737__auto___29169 + (1));
i__4737__auto___29169 = G__29170;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return faber.model.offset_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(faber.model.offset_map.cljs$core$IFn$_invoke$arity$variadic = (function (p__28965,block){
var map__28966 = p__28965;
var map__28966__$1 = (((((!((map__28966 == null))))?(((((map__28966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28966):map__28966);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28966__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28966__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
var chamfer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28966__$1,new cljs.core.Keyword(null,"chamfer","chamfer",869501917));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"offset","offset",296498311),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"r","r",-471384190),null,(1),null)),(new cljs.core.List(null,r,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"delta","delta",108939957),null,(1),null)),(new cljs.core.List(null,delta,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"chamfer","chamfer",869501917),null,(1),null)),(new cljs.core.List(null,chamfer,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}));

(faber.model.offset_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(faber.model.offset_map.cljs$lang$applyTo = (function (seq28961){
var G__28962 = cljs.core.first(seq28961);
var seq28961__$1 = cljs.core.next(seq28961);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28962,seq28961__$1);
}));

/**
 * Implement OpenSCAD’s offset() for two different call signatures.
 */
faber.model.offset = (function faber$model$offset(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29176 = arguments.length;
var i__4737__auto___29177 = (0);
while(true){
if((i__4737__auto___29177 < len__4736__auto___29176)){
args__4742__auto__.push((arguments[i__4737__auto___29177]));

var G__29179 = (i__4737__auto___29177 + (1));
i__4737__auto___29177 = G__29179;
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
(faber.model.offset.cljs$lang$applyTo = (function (seq28971){
var G__28972 = cljs.core.first(seq28971);
var seq28971__$1 = cljs.core.next(seq28971);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28972,seq28971__$1);
}));

faber.model.minkowski = (function faber$model$minkowski(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29184 = arguments.length;
var i__4737__auto___29185 = (0);
while(true){
if((i__4737__auto___29185 < len__4736__auto___29184)){
args__4742__auto__.push((arguments[i__4737__auto___29185]));

var G__29186 = (i__4737__auto___29185 + (1));
i__4737__auto___29185 = G__29186;
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
(faber.model.minkowski.cljs$lang$applyTo = (function (seq28975){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28975));
}));

faber.model.multmatrix = (function faber$model$multmatrix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29189 = arguments.length;
var i__4737__auto___29190 = (0);
while(true){
if((i__4737__auto___29190 < len__4736__auto___29189)){
args__4742__auto__.push((arguments[i__4737__auto___29190]));

var G__29191 = (i__4737__auto___29190 + (1));
i__4737__auto___29190 = G__29191;
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
(faber.model.multmatrix.cljs$lang$applyTo = (function (seq28978){
var G__28980 = cljs.core.first(seq28978);
var seq28978__$1 = cljs.core.next(seq28978);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28980,seq28978__$1);
}));

faber.model.union = (function faber$model$union(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29194 = arguments.length;
var i__4737__auto___29195 = (0);
while(true){
if((i__4737__auto___29195 < len__4736__auto___29194)){
args__4742__auto__.push((arguments[i__4737__auto___29195]));

var G__29196 = (i__4737__auto___29195 + (1));
i__4737__auto___29195 = G__29196;
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
(faber.model.union.cljs$lang$applyTo = (function (seq28982){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28982));
}));

faber.model.intersection = (function faber$model$intersection(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29201 = arguments.length;
var i__4737__auto___29202 = (0);
while(true){
if((i__4737__auto___29202 < len__4736__auto___29201)){
args__4742__auto__.push((arguments[i__4737__auto___29202]));

var G__29203 = (i__4737__auto___29202 + (1));
i__4737__auto___29202 = G__29203;
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
(faber.model.intersection.cljs$lang$applyTo = (function (seq28983){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28983));
}));

faber.model.difference = (function faber$model$difference(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29207 = arguments.length;
var i__4737__auto___29208 = (0);
while(true){
if((i__4737__auto___29208 < len__4736__auto___29207)){
args__4742__auto__.push((arguments[i__4737__auto___29208]));

var G__29209 = (i__4737__auto___29208 + (1));
i__4737__auto___29208 = G__29209;
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
(faber.model.difference.cljs$lang$applyTo = (function (seq28986){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28986));
}));

faber.model.compose = (function faber$model$compose(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29213 = arguments.length;
var i__4737__auto___29214 = (0);
while(true){
if((i__4737__auto___29214 < len__4736__auto___29213)){
args__4742__auto__.push((arguments[i__4737__auto___29214]));

var G__29215 = (i__4737__auto___29214 + (1));
i__4737__auto___29214 = G__29215;
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
(faber.model.compose.cljs$lang$applyTo = (function (seq28987){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28987));
}));

faber.model.hole = (function faber$model$hole(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29219 = arguments.length;
var i__4737__auto___29220 = (0);
while(true){
if((i__4737__auto___29220 < len__4736__auto___29219)){
args__4742__auto__.push((arguments[i__4737__auto___29220]));

var G__29221 = (i__4737__auto___29220 + (1));
i__4737__auto___29220 = G__29221;
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
(faber.model.hole.cljs$lang$applyTo = (function (seq28990){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28990));
}));

faber.model.projection = (function faber$model$projection(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29226 = arguments.length;
var i__4737__auto___29228 = (0);
while(true){
if((i__4737__auto___29228 < len__4736__auto___29226)){
args__4742__auto__.push((arguments[i__4737__auto___29228]));

var G__29230 = (i__4737__auto___29228 + (1));
i__4737__auto___29228 = G__29230;
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
(faber.model.projection.cljs$lang$applyTo = (function (seq28992){
var G__28993 = cljs.core.first(seq28992);
var seq28992__$1 = cljs.core.next(seq28992);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28993,seq28992__$1);
}));

faber.model.project = (function faber$model$project(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29233 = arguments.length;
var i__4737__auto___29234 = (0);
while(true){
if((i__4737__auto___29234 < len__4736__auto___29233)){
args__4742__auto__.push((arguments[i__4737__auto___29234]));

var G__29236 = (i__4737__auto___29234 + (1));
i__4737__auto___29234 = G__29236;
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
(faber.model.project.cljs$lang$applyTo = (function (seq28996){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28996));
}));

faber.model.cut = (function faber$model$cut(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29237 = arguments.length;
var i__4737__auto___29238 = (0);
while(true){
if((i__4737__auto___29238 < len__4736__auto___29237)){
args__4742__auto__.push((arguments[i__4737__auto___29238]));

var G__29239 = (i__4737__auto___29238 + (1));
i__4737__auto___29238 = G__29239;
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
(faber.model.cut.cljs$lang$applyTo = (function (seq28998){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28998));
}));

faber.model.render = (function faber$model$render(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29243 = arguments.length;
var i__4737__auto___29244 = (0);
while(true){
if((i__4737__auto___29244 < len__4736__auto___29243)){
args__4742__auto__.push((arguments[i__4737__auto___29244]));

var G__29245 = (i__4737__auto___29244 + (1));
i__4737__auto___29244 = G__29245;
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
var vec__29001 = block;
var seq__29003 = cljs.core.seq(vec__29001);
var first__29005 = cljs.core.first(seq__29003);
var seq__29003__$1 = cljs.core.next(seq__29003);
var c = first__29005;
var bl = seq__29003__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"render","render",-1408033454),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bl], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"render","render",-1408033454),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"convexity","convexity",-1510694660),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([block], 0))));
}
}));

(faber.model.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.model.render.cljs$lang$applyTo = (function (seq28999){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28999));
}));

/**
 * Like difference, but subtraction is from the last node, not the first.
 */
faber.model.excise = (function faber$model$excise(var_args){
var args__4742__auto__ = [];
var len__4736__auto___29249 = arguments.length;
var i__4737__auto___29250 = (0);
while(true){
if((i__4737__auto___29250 < len__4736__auto___29249)){
args__4742__auto__.push((arguments[i__4737__auto___29250]));

var G__29251 = (i__4737__auto___29250 + (1));
i__4737__auto___29250 = G__29251;
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
(faber.model.excise.cljs$lang$applyTo = (function (seq29008){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29008));
}));


//# sourceMappingURL=faber.model.js.map
