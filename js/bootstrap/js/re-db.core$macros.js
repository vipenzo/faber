goog.provide('re_db.core$macros');
var ret__4785__auto___35351 = (function (){
/**
 * Evaluates body without tracking read patterns.
 */
re_db.core$macros.peek = (function re_db$core$macros$peek(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35352 = arguments.length;
var i__4737__auto___35353 = (0);
while(true){
if((i__4737__auto___35353 < len__4736__auto___35352)){
args__4742__auto__.push((arguments[i__4737__auto___35353]));

var G__35354 = (i__4737__auto___35353 + (1));
i__4737__auto___35353 = G__35354;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_db.core$macros.peek.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_db.core$macros.peek.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-db.core","*access-log*","re-db.core/*access-log*",-1497823226,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0))));
}));

(re_db.core$macros.peek.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_db.core$macros.peek.cljs$lang$applyTo = (function (seq35314){
var G__35315 = cljs.core.first(seq35314);
var seq35314__$1 = cljs.core.next(seq35314);
var G__35316 = cljs.core.first(seq35314__$1);
var seq35314__$2 = cljs.core.next(seq35314__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35315,G__35316,seq35314__$2);
}));

return null;
})()
;
(re_db.core$macros.peek.cljs$lang$macro = true);

var ret__4785__auto___35355 = (function (){
/**
 * Compiled version of get-in, small performance boost over the `get-in` function.
 */
re_db.core$macros.get_in_STAR_ = (function re_db$core$macros$get_in_STAR_(var_args){
var G__35327 = arguments.length;
switch (G__35327) {
case 4:
return re_db.core$macros.get_in_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return re_db.core$macros.get_in_STAR_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(re_db.core$macros.get_in_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,m,ks){
if((!(cljs.core.vector_QMARK_(ks)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ks,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function re_db$core$macros$iter__35330(s__35331){
return (new cljs.core.LazySeq(null,(function (){
var s__35331__$1 = s__35331;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35331__$1);
if(temp__5735__auto__){
var s__35331__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35331__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35331__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35333 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35332 = (0);
while(true){
if((i__35332 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__35332);
cljs.core.chunk_append(b__35333,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)));

var G__35358 = (i__35332 + (1));
i__35332 = G__35358;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35333),re_db$core$macros$iter__35330(cljs.core.chunk_rest(s__35331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35333),null);
}
} else {
var k = cljs.core.first(s__35331__$2);
return cljs.core.cons((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),re_db$core$macros$iter__35330(cljs.core.rest(s__35331__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(ks);
})()], 0))));
}
}));

(re_db.core$macros.get_in_STAR_.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,m,ks,not_found){
if((!(cljs.core.vector_QMARK_(ks)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ks,null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function re_db$core$macros$iter__35335(s__35336){
return (new cljs.core.LazySeq(null,(function (){
var s__35336__$1 = s__35336;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35336__$1);
if(temp__5735__auto__){
var s__35336__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35336__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35336__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35338 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35337 = (0);
while(true){
if((i__35337 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__35337);
cljs.core.chunk_append(b__35338,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)));

var G__35359 = (i__35337 + (1));
i__35337 = G__35359;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35338),re_db$core$macros$iter__35335(cljs.core.chunk_rest(s__35336__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35338),null);
}
} else {
var k = cljs.core.first(s__35336__$2);
return cljs.core.cons((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),re_db$core$macros$iter__35335(cljs.core.rest(s__35336__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks));
})(),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,not_found,null,(1),null))], 0)))),null,(1),null))], 0))));
}
}));

(re_db.core$macros.get_in_STAR_.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(re_db.core$macros.get_in_STAR_.cljs$lang$macro = true);

var ret__4785__auto___35363 = (function (){
re_db.core$macros.db_log = (function re_db$core$macros$db_log(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35364 = arguments.length;
var i__4737__auto___35365 = (0);
while(true){
if((i__4737__auto___35365 < len__4736__auto___35364)){
args__4742__auto__.push((arguments[i__4737__auto___35365]));

var G__35366 = (i__4737__auto___35365 + (1));
i__4737__auto___35365 = G__35366;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_db.core$macros.db_log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_db.core$macros.db_log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("re-db.core","*db-log*","re-db.core/*db-log*",1947995161,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("re-db.core","*prevent-notify*","re-db.core/*prevent-notify*",1331529761,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"value__35339__auto__","value__35339__auto__",-1674060195,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("re-db.core","*db-log*","re-db.core/*db-log*",1947995161,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__35339__auto__","value__35339__auto__",-1674060195,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(re_db.core$macros.db_log.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_db.core$macros.db_log.cljs$lang$applyTo = (function (seq35340){
var G__35341 = cljs.core.first(seq35340);
var seq35340__$1 = cljs.core.next(seq35340);
var G__35342 = cljs.core.first(seq35340__$1);
var seq35340__$2 = cljs.core.next(seq35340__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35341,G__35342,seq35340__$2);
}));

return null;
})()
;
(re_db.core$macros.db_log.cljs$lang$macro = true);


//# sourceMappingURL=re-db.core$macros.js.map
