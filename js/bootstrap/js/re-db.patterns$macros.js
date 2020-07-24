goog.provide('re_db.patterns$macros');
var ret__4785__auto___35476 = (function (){
/**
 * Evaluates body, returning map with evaluation result and read patterns.
 */
re_db.patterns$macros.capture_patterns = (function re_db$patterns$macros$capture_patterns(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35477 = arguments.length;
var i__4737__auto___35478 = (0);
while(true){
if((i__4737__auto___35478 < len__4736__auto___35477)){
args__4742__auto__.push((arguments[i__4737__auto___35478]));

var G__35479 = (i__4737__auto___35478 + (1));
i__4737__auto___35478 = G__35479;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_db.patterns$macros.capture_patterns.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_db.patterns$macros.capture_patterns.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-db.patterns","*pattern-log*","re-db.patterns/*pattern-log*",1198888530,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"value__35465__auto__","value__35465__auto__",716463131,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"tx-report__35466__auto__","tx-report__35466__auto__",-260192453,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-db.core","db-log","re-db.core/db-log",-2129235416,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"patterns__35467__auto__","patterns__35467__auto__",1669766597,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("re-db.patterns","*pattern-log*","re-db.patterns/*pattern-log*",1198888530,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-db.core","notify-listeners","re-db.core/notify-listeners",1121877296,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"tx-report__35466__auto__","tx-report__35466__auto__",-260192453,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__35465__auto__","value__35465__auto__",716463131,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"patterns__35467__auto__","patterns__35467__auto__",1669766597,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(re_db.patterns$macros.capture_patterns.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_db.patterns$macros.capture_patterns.cljs$lang$applyTo = (function (seq35468){
var G__35469 = cljs.core.first(seq35468);
var seq35468__$1 = cljs.core.next(seq35468);
var G__35470 = cljs.core.first(seq35468__$1);
var seq35468__$2 = cljs.core.next(seq35468__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35469,G__35470,seq35468__$2);
}));

return null;
})()
;
(re_db.patterns$macros.capture_patterns.cljs$lang$macro = true);


//# sourceMappingURL=re-db.patterns$macros.js.map
