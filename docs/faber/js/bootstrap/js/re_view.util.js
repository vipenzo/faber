goog.provide('re_view.util');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Return camelCased string, eg. hello-there to helloThere. Does not modify existing case.
 */
re_view.util.camelCase = cljs.core.memoize((function (s){
return clojure.string.replace(cljs.core.name(s),/-(.)/,(function (p__26747){
var vec__26748 = p__26747;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26748,(0),null);
var match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26748,(1),null);
return clojure.string.upper_case(match);
}));
}));
re_view.util.update_attrs = (function re_view$util$update_attrs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26783 = arguments.length;
var i__4737__auto___26784 = (0);
while(true){
if((i__4737__auto___26784 < len__4736__auto___26783)){
args__4742__auto__.push((arguments[i__4737__auto___26784]));

var G__26785 = (i__4737__auto___26784 + (1));
i__4737__auto___26784 = G__26785;
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
(re_view.util.update_attrs.cljs$lang$applyTo = (function (seq26751){
var G__26752 = cljs.core.first(seq26751);
var seq26751__$1 = cljs.core.next(seq26751);
var G__26753 = cljs.core.first(seq26751__$1);
var seq26751__$2 = cljs.core.next(seq26751__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26752,G__26753,seq26751__$2);
}));

re_view.util.ensure_keys = (function re_view$util$ensure_keys(forms){
var seen = cljs.core.PersistentHashSet.EMPTY;
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__26757_SHARP_,p2__26756_SHARP_){
return re_view.util.update_attrs.cljs$core$IFn$_invoke$arity$variadic(p2__26756_SHARP_,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),(function (k){
if((((k == null)) || (cljs.core.contains_QMARK_(seen,k)))){
return p1__26757_SHARP_;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen,cljs.core.conj,k);

return k;
}
})], 0));
}),forms);
});
re_view.util.map_with_keys = (function re_view$util$map_with_keys(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26798 = arguments.length;
var i__4737__auto___26800 = (0);
while(true){
if((i__4737__auto___26800 < len__4736__auto___26798)){
args__4742__auto__.push((arguments[i__4737__auto___26800]));

var G__26801 = (i__4737__auto___26800 + (1));
i__4737__auto___26800 = G__26801;
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
(re_view.util.map_with_keys.cljs$lang$applyTo = (function (seq26759){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26759));
}));

/**
 * Evaluate fns sequentially, stopping if any return true.
 */
re_view.util.any_pred = (function re_view$util$any_pred(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26802 = arguments.length;
var i__4737__auto___26803 = (0);
while(true){
if((i__4737__auto___26803 < len__4736__auto___26802)){
args__4742__auto__.push((arguments[i__4737__auto___26803]));

var G__26804 = (i__4737__auto___26803 + (1));
i__4737__auto___26803 = G__26804;
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
var or__4126__auto__ = (function (){var fexpr__26765 = cljs.core.first(fns__$1);
return (fexpr__26765.cljs$core$IFn$_invoke$arity$1 ? fexpr__26765.cljs$core$IFn$_invoke$arity$1(this$) : fexpr__26765.call(null,this$));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__26810 = cljs.core.rest(fns__$1);
fns__$1 = G__26810;
continue;
}
}
break;
}
});
}));

(re_view.util.any_pred.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.util.any_pred.cljs$lang$applyTo = (function (seq26762){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26762));
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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26766_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__26766_SHARP_)));
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
var match_QMARK_ = (function (){var G__26779 = cljs.core.first(args__$1);
var fexpr__26778 = cljs.core.first(preds__$1);
return (fexpr__26778.cljs$core$IFn$_invoke$arity$1 ? fexpr__26778.cljs$core$IFn$_invoke$arity$1(G__26779) : fexpr__26778.call(null,G__26779));
})();
var G__26813 = cljs.core.rest(preds__$1);
var G__26814 = (function (){var G__26780 = args__$1;
if(cljs.core.truth_(match_QMARK_)){
return cljs.core.rest(G__26780);
} else {
return G__26780;
}
})();
var G__26815 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(cljs.core.truth_(match_QMARK_)?cljs.core.first(args__$1):null));
preds__$1 = G__26813;
args__$1 = G__26814;
out = G__26815;
continue;
}
break;
}
});

//# sourceMappingURL=re_view.util.js.map
