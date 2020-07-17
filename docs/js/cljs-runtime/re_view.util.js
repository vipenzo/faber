goog.provide('re_view.util');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Return camelCased string, eg. hello-there to helloThere. Does not modify existing case.
 */
re_view.util.camelCase = cljs.core.memoize((function (s){
return clojure.string.replace(cljs.core.name(s),/-(.)/,(function (p__42058){
var vec__42060 = p__42058;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42060,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42060,(1),null);
return clojure.string.upper_case(match);
}));
}));
re_view.util.update_attrs = (function re_view$util$update_attrs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42100 = arguments.length;
var i__4737__auto___42101 = (0);
while(true){
if((i__4737__auto___42101 < len__4736__auto___42100)){
args__4742__auto__.push((arguments[i__4737__auto___42101]));

var G__42102 = (i__4737__auto___42101 + (1));
i__4737__auto___42101 = G__42102;
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
(re_view.util.update_attrs.cljs$lang$applyTo = (function (seq42064){
var G__42065 = cljs.core.first(seq42064);
var seq42064__$1 = cljs.core.next(seq42064);
var G__42066 = cljs.core.first(seq42064__$1);
var seq42064__$2 = cljs.core.next(seq42064__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42065,G__42066,seq42064__$2);
}));

re_view.util.ensure_keys = (function re_view$util$ensure_keys(forms){
var seen = cljs.core.PersistentHashSet.EMPTY;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__42072_SHARP_,p2__42071_SHARP_){
return re_view.util.update_attrs.cljs$core$IFn$_invoke$arity$variadic(p2__42071_SHARP_,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),(function (k){
if((((k == null)) || (cljs.core.contains_QMARK_(seen,k)))){
return p1__42072_SHARP_;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen,cljs.core.conj,k);

return k;
}
})], 0));
}),forms);
});
re_view.util.map_with_keys = (function re_view$util$map_with_keys(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42112 = arguments.length;
var i__4737__auto___42113 = (0);
while(true){
if((i__4737__auto___42113 < len__4736__auto___42112)){
args__4742__auto__.push((arguments[i__4737__auto___42113]));

var G__42114 = (i__4737__auto___42113 + (1));
i__4737__auto___42113 = G__42114;
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
(re_view.util.map_with_keys.cljs$lang$applyTo = (function (seq42081){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42081));
}));

/**
 * Evaluate fns sequentially, stopping if any return true.
 */
re_view.util.any_pred = (function re_view$util$any_pred(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42115 = arguments.length;
var i__4737__auto___42116 = (0);
while(true){
if((i__4737__auto___42116 < len__4736__auto___42115)){
args__4742__auto__.push((arguments[i__4737__auto___42116]));

var G__42117 = (i__4737__auto___42116 + (1));
i__4737__auto___42116 = G__42117;
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
var or__4126__auto__ = (function (){var fexpr__42085 = cljs.core.first(fns__$1);
return (fexpr__42085.cljs$core$IFn$_invoke$arity$1 ? fexpr__42085.cljs$core$IFn$_invoke$arity$1(this$) : fexpr__42085.call(null,this$));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__42120 = cljs.core.rest(fns__$1);
fns__$1 = G__42120;
continue;
}
}
break;
}
});
}));

(re_view.util.any_pred.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.util.any_pred.cljs$lang$applyTo = (function (seq42083){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42083));
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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42090_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__42090_SHARP_)));
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
var match_QMARK_ = (function (){var G__42095 = cljs.core.first(args__$1);
var fexpr__42094 = cljs.core.first(preds__$1);
return (fexpr__42094.cljs$core$IFn$_invoke$arity$1 ? fexpr__42094.cljs$core$IFn$_invoke$arity$1(G__42095) : fexpr__42094.call(null,G__42095));
})();
var G__42122 = cljs.core.rest(preds__$1);
var G__42123 = (function (){var G__42096 = args__$1;
if(cljs.core.truth_(match_QMARK_)){
return cljs.core.rest(G__42096);
} else {
return G__42096;
}
})();
var G__42124 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(cljs.core.truth_(match_QMARK_)?cljs.core.first(args__$1):null));
preds__$1 = G__42122;
args__$1 = G__42123;
out = G__42124;
continue;
}
break;
}
});

//# sourceMappingURL=re_view.util.js.map
