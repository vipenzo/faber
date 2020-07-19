goog.provide('re_view.util');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Return camelCased string, eg. hello-there to helloThere. Does not modify existing case.
 */
re_view.util.camelCase = cljs.core.memoize((function (s){
return clojure.string.replace(cljs.core.name(s),/-(.)/,(function (p__52270){
var vec__52271 = p__52270;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52271,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52271,(1),null);
return clojure.string.upper_case(match);
}));
}));
re_view.util.update_attrs = (function re_view$util$update_attrs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52315 = arguments.length;
var i__4737__auto___52316 = (0);
while(true){
if((i__4737__auto___52316 < len__4736__auto___52315)){
args__4742__auto__.push((arguments[i__4737__auto___52316]));

var G__52317 = (i__4737__auto___52316 + (1));
i__4737__auto___52316 = G__52317;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_view.util.update_attrs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_view.util.update_attrs.cljs$core$IFn$_invoke$arity$variadic = (function (el,f,args){
if((!(cljs.core.vector_QMARK_(el)))){
return el;
} else {
var attrs_QMARK_ = cljs.core.map_QMARK_(cljs.core.second(el));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(el.cljs$core$IFn$_invoke$arity$1 ? el.cljs$core$IFn$_invoke$arity$1((0)) : el.call(null,(0))),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,((attrs_QMARK_)?(el.cljs$core$IFn$_invoke$arity$1 ? el.cljs$core$IFn$_invoke$arity$1((1)) : el.call(null,(1))):cljs.core.PersistentArrayMap.EMPTY),args)], null),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(el,((attrs_QMARK_)?(2):(1))));
}
}));

(re_view.util.update_attrs.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_view.util.update_attrs.cljs$lang$applyTo = (function (seq52274){
var G__52275 = cljs.core.first(seq52274);
var seq52274__$1 = cljs.core.next(seq52274);
var G__52276 = cljs.core.first(seq52274__$1);
var seq52274__$2 = cljs.core.next(seq52274__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52275,G__52276,seq52274__$2);
}));

re_view.util.ensure_keys = (function re_view$util$ensure_keys(forms){
var seen = cljs.core.PersistentHashSet.EMPTY;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__52279_SHARP_,p2__52278_SHARP_){
return re_view.util.update_attrs.cljs$core$IFn$_invoke$arity$variadic(p2__52278_SHARP_,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),(function (k){
if((((k == null)) || (cljs.core.contains_QMARK_(seen,k)))){
return p1__52279_SHARP_;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen,cljs.core.conj,k);

return k;
}
})], 0));
}),forms);
});
re_view.util.map_with_keys = (function re_view$util$map_with_keys(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52369 = arguments.length;
var i__4737__auto___52370 = (0);
while(true){
if((i__4737__auto___52370 < len__4736__auto___52369)){
args__4742__auto__.push((arguments[i__4737__auto___52370]));

var G__52371 = (i__4737__auto___52370 + (1));
i__4737__auto___52370 = G__52371;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_view.util.map_with_keys.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_view.util.map_with_keys.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return re_view.util.ensure_keys(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.map,args));
}));

(re_view.util.map_with_keys.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.util.map_with_keys.cljs$lang$applyTo = (function (seq52287){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52287));
}));

/**
 * Evaluate fns sequentially, stopping if any return true.
 */
re_view.util.any_pred = (function re_view$util$any_pred(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52381 = arguments.length;
var i__4737__auto___52382 = (0);
while(true){
if((i__4737__auto___52382 < len__4736__auto___52381)){
args__4742__auto__.push((arguments[i__4737__auto___52382]));

var G__52383 = (i__4737__auto___52382 + (1));
i__4737__auto___52382 = G__52383;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_view.util.any_pred.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_view.util.any_pred.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function (this$){
var fns__$1 = fns;
while(true){
if(cljs.core.empty_QMARK_(fns__$1)){
return false;
} else {
var or__4126__auto__ = (function (){var fexpr__52299 = cljs.core.first(fns__$1);
return (fexpr__52299.cljs$core$IFn$_invoke$arity$1 ? fexpr__52299.cljs$core$IFn$_invoke$arity$1(this$) : fexpr__52299.call(null,this$));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__52387 = cljs.core.rest(fns__$1);
fns__$1 = G__52387;
continue;
}
}
break;
}
});
}));

(re_view.util.any_pred.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.util.any_pred.cljs$lang$applyTo = (function (seq52291){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52291));
}));

re_view.util.is_react_element_QMARK_ = (function re_view$util$is_react_element_QMARK_(x){
var and__4115__auto__ = x;
if(cljs.core.truth_(and__4115__auto__)){
return module$node_modules$react$index.isValidElement(x);
} else {
return and__4115__auto__;
}
});
/**
 * Flatten collection, only unwrap sequences
 */
re_view.util.flatten_seqs = (function re_view$util$flatten_seqs(children){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__52303_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__52303_SHARP_)));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.seq_QMARK_,cljs.core.seq,children)));
});
re_view.util.parse_opt_args = (function re_view$util$parse_opt_args(preds,args){
var preds__$1 = preds;
var args__$1 = args;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(preds__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,args__$1);
} else {
var match_QMARK_ = (function (){var G__52310 = cljs.core.first(args__$1);
var fexpr__52309 = cljs.core.first(preds__$1);
return (fexpr__52309.cljs$core$IFn$_invoke$arity$1 ? fexpr__52309.cljs$core$IFn$_invoke$arity$1(G__52310) : fexpr__52309.call(null,G__52310));
})();
var G__52391 = cljs.core.rest(preds__$1);
var G__52392 = (function (){var G__52311 = args__$1;
if(cljs.core.truth_(match_QMARK_)){
return cljs.core.rest(G__52311);
} else {
return G__52311;
}
})();
var G__52393 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(cljs.core.truth_(match_QMARK_)?cljs.core.first(args__$1):null));
preds__$1 = G__52391;
args__$1 = G__52392;
out = G__52393;
continue;
}
break;
}
});

//# sourceMappingURL=re_view.util.js.map
