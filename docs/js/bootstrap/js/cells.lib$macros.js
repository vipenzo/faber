goog.provide('cells.lib$macros');
var ret__4785__auto___53008 = (function (){
/**
 * Returns cell with body wrapped in timeout of n milliseconds.
 */
cells.lib$macros.wait = (function cells$lib$macros$wait(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53009 = arguments.length;
var i__4737__auto___53010 = (0);
while(true){
if((i__4737__auto___53010 < len__4736__auto___53009)){
args__4742__auto__.push((arguments[i__4737__auto___53010]));

var G__53011 = (i__4737__auto___53010 + (1));
i__4737__auto___53010 = G__53011;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cells.lib$macros.wait.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cells.lib$macros.wait.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,n,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cells.lib","timeout","cells.lib/timeout",-1464887735,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cells.lib$macros.wait.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cells.lib$macros.wait.cljs$lang$applyTo = (function (seq53001){
var G__53002 = cljs.core.first(seq53001);
var seq53001__$1 = cljs.core.next(seq53001);
var G__53003 = cljs.core.first(seq53001__$1);
var seq53001__$2 = cljs.core.next(seq53001__$1);
var G__53004 = cljs.core.first(seq53001__$2);
var seq53001__$3 = cljs.core.next(seq53001__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53002,G__53003,G__53004,seq53001__$3);
}));

return null;
})()
;
(cells.lib$macros.wait.cljs$lang$macro = true);


//# sourceMappingURL=cells.lib$macros.js.map
