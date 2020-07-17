goog.provide('re_db.core$macros');
var ret__4785__auto___53048 = (function (){
/**
 * Evaluates body without tracking read patterns.
 */
re_db.core$macros.peek = (function re_db$core$macros$peek(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53049 = arguments.length;
var i__4737__auto___53050 = (0);
while(true){
if((i__4737__auto___53050 < len__4736__auto___53049)){
args__4742__auto__.push((arguments[i__4737__auto___53050]));

var G__53051 = (i__4737__auto___53050 + (1));
i__4737__auto___53050 = G__53051;
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
(re_db.core$macros.peek.cljs$lang$applyTo = (function (seq53024){
var G__53025 = cljs.core.first(seq53024);
var seq53024__$1 = cljs.core.next(seq53024);
var G__53026 = cljs.core.first(seq53024__$1);
var seq53024__$2 = cljs.core.next(seq53024__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53025,G__53026,seq53024__$2);
}));

return null;
})()
;
(re_db.core$macros.peek.cljs$lang$macro = true);

var ret__4785__auto___53056 = (function (){
/**
 * Compiled version of get-in, small performance boost over the `get-in` function.
 */
re_db.core$macros.get_in_STAR_ = (function re_db$core$macros$get_in_STAR_(var_args){
var G__53029 = arguments.length;
switch (G__53029) {
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function re_db$core$macros$iter__53030(s__53031){
return (new cljs.core.LazySeq(null,(function (){
var s__53031__$1 = s__53031;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53031__$1);
if(temp__5735__auto__){
var s__53031__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53031__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53031__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53033 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53032 = (0);
while(true){
if((i__53032 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__53032);
cljs.core.chunk_append(b__53033,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)));

var G__53058 = (i__53032 + (1));
i__53032 = G__53058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53033),re_db$core$macros$iter__53030(cljs.core.chunk_rest(s__53031__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53033),null);
}
} else {
var k = cljs.core.first(s__53031__$2);
return cljs.core.cons((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),re_db$core$macros$iter__53030(cljs.core.rest(s__53031__$2)));
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function re_db$core$macros$iter__53034(s__53035){
return (new cljs.core.LazySeq(null,(function (){
var s__53035__$1 = s__53035;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53035__$1);
if(temp__5735__auto__){
var s__53035__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53035__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__53035__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__53037 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__53036 = (0);
while(true){
if((i__53036 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__53036);
cljs.core.chunk_append(b__53037,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)));

var G__53060 = (i__53036 + (1));
i__53036 = G__53060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53037),re_db$core$macros$iter__53034(cljs.core.chunk_rest(s__53035__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53037),null);
}
} else {
var k = cljs.core.first(s__53035__$2);
return cljs.core.cons((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","get","clojure.core/get",-198953213,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),re_db$core$macros$iter__53034(cljs.core.rest(s__53035__$2)));
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

var ret__4785__auto___53062 = (function (){
re_db.core$macros.db_log = (function re_db$core$macros$db_log(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53063 = arguments.length;
var i__4737__auto___53064 = (0);
while(true){
if((i__4737__auto___53064 < len__4736__auto___53063)){
args__4742__auto__.push((arguments[i__4737__auto___53064]));

var G__53066 = (i__4737__auto___53064 + (1));
i__4737__auto___53064 = G__53066;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_db.core$macros.db_log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_db.core$macros.db_log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("re-db.core","*db-log*","re-db.core/*db-log*",1947995161,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("re-db.core","*prevent-notify*","re-db.core/*prevent-notify*",1331529761,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"value__53039__auto__","value__53039__auto__",1526443736,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("re-db.core","*db-log*","re-db.core/*db-log*",1947995161,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"value","value",305978217),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__53039__auto__","value__53039__auto__",1526443736,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(re_db.core$macros.db_log.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_db.core$macros.db_log.cljs$lang$applyTo = (function (seq53042){
var G__53043 = cljs.core.first(seq53042);
var seq53042__$1 = cljs.core.next(seq53042);
var G__53044 = cljs.core.first(seq53042__$1);
var seq53042__$2 = cljs.core.next(seq53042__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53043,G__53044,seq53042__$2);
}));

return null;
})()
;
(re_db.core$macros.db_log.cljs$lang$macro = true);


//# sourceMappingURL=re-db.core$macros.js.map
