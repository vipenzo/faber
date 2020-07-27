goog.provide('applied_science.js_interop$macros');
applied_science.js_interop$macros.reflect_property = new cljs.core.Symbol("js","goog.reflect.objectProperty","js/goog.reflect.objectProperty",-1769769352,null);
applied_science.js_interop$macros.lookup_sentinel = new cljs.core.Symbol("applied-science.js-interop.impl","lookup-sentinel","applied-science.js-interop.impl/lookup-sentinel",-2020182184,null);
applied_science.js_interop$macros.wrap_key_STAR_ = new cljs.core.Symbol("applied-science.js-interop.impl","wrap-key","applied-science.js-interop.impl/wrap-key",-1752937003,null);
applied_science.js_interop$macros.empty_obj = cljs.core.list(new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null));
applied_science.js_interop$macros._STAR_let = new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null);
applied_science.js_interop$macros.dot_sym_QMARK_ = (function applied_science$js_interop$macros$dot_sym_QMARK_(k){
return (((k instanceof cljs.core.Symbol)) && (clojure.string.starts_with_QMARK_(cljs.core.name(k),".")));
});
applied_science.js_interop$macros.dot_name = (function applied_science$js_interop$macros$dot_name(sym){
return clojure.string.replace(cljs.core.name(sym),/^\.\-?/,"");
});
applied_science.js_interop$macros.dot_get = (function applied_science$js_interop$macros$dot_get(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-",applied_science.js_interop$macros.dot_name(sym)].join(''));
});
applied_science.js_interop$macros.dot_call = (function applied_science$js_interop$macros$dot_call(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".",applied_science.js_interop$macros.dot_name(sym)].join(''));
});
applied_science.js_interop$macros.as_string = (function applied_science$js_interop$macros$as_string(x){
return cljs.core.with_meta(x,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"string","string",-349010059,null)], null));
});
/**
 * Convert key to string at compile time when possible.
 */
applied_science.js_interop$macros.wrap_key = (function applied_science$js_interop$macros$wrap_key(env,obj,k){
if(((typeof k === 'string') || (typeof k === 'number'))){
return k;
} else {
if((k instanceof cljs.core.Keyword)){
return cljs.core.name(k);
} else {
if((((k instanceof cljs.core.Symbol)) || (cljs.core.seq_QMARK_(k)))){
if(applied_science.js_interop$macros.dot_sym_QMARK_(k)){
return applied_science.js_interop$macros.as_string(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros.reflect_property,null,(1),null)),(new cljs.core.List(null,cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(applied_science.js_interop$macros.dot_name(k)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,obj,null,(1),null))], 0)))));
} else {
var tags = applied_science.js_interop.inference.infer_tags(env,k);
if(applied_science.js_interop.inference.within_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null),tags)){
return k;
} else {
if(applied_science.js_interop.inference.within_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"keyword","keyword",-1843046022,null),"null"], null), null),tags)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","name","cljs.core/name",-260873443,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)))));
} else {
return applied_science.js_interop$macros.as_string(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.wrap_key_STAR_,null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))));

}
}
}
} else {
return applied_science.js_interop$macros.as_string(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.wrap_key_STAR_,null,(1),null)),(new cljs.core.List(null,k,null,(1),null))))));

}
}
}
});
/**
 * Fallback to wrapping keys at runtime
 */
applied_science.js_interop$macros.wrap_keys = (function applied_science$js_interop$macros$wrap_keys(ks){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mapv","cljs.core/mapv",433728488,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key_STAR_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ks,null,(1),null))], 0))));
});
var ret__4785__auto___36159 = applied_science.js_interop$macros.in_QMARK_ = (function applied_science$js_interop$macros$in_QMARK_(_AMPERSAND_form,_AMPERSAND_env,k,obj){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","in?*","applied-science.js-interop.impl/in?*",-1012411264,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,obj,null,(1),null))], 0))));
});
(applied_science.js_interop$macros.in_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36160 = (function (){
applied_science.js_interop$macros.unchecked_get = (function applied_science$js_interop$macros$unchecked_get(var_args){
var G__35691 = arguments.length;
switch (G__35691) {
case 4:
return applied_science.js_interop$macros.unchecked_get.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return applied_science.js_interop$macros.unchecked_get.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(applied_science.js_interop$macros.unchecked_get.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k){
if(applied_science.js_interop$macros.dot_sym_QMARK_(k)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.dot_get(k),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,null,k),null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.unchecked_get.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,not_found){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
var k_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,k_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","unchecked-get","applied-science.js-interop/unchecked-get",-1144758314,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(applied_science.js_interop$macros.unchecked_get.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(applied_science.js_interop$macros.unchecked_get.cljs$lang$macro = true);

var ret__4785__auto___36166 = (function (){
applied_science.js_interop$macros._BANG_get = (function applied_science$js_interop$macros$_BANG_get(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36167 = arguments.length;
var i__4737__auto___36168 = (0);
while(true){
if((i__4737__auto___36168 < len__4736__auto___36167)){
args__4742__auto__.push((arguments[i__4737__auto___36168]));

var G__36170 = (i__4737__auto___36168 + (1));
i__4737__auto___36168 = G__36170;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop$macros._BANG_get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros._BANG_get.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","unchecked-get","applied-science.js-interop/unchecked-get",-1144758314,null),null,(1),null)),args)));
}));

(applied_science.js_interop$macros._BANG_get.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop$macros._BANG_get.cljs$lang$applyTo = (function (seq35692){
var G__35693 = cljs.core.first(seq35692);
var seq35692__$1 = cljs.core.next(seq35692);
var G__35694 = cljs.core.first(seq35692__$1);
var seq35692__$2 = cljs.core.next(seq35692__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35693,G__35694,seq35692__$2);
}));

return null;
})()
;
(applied_science.js_interop$macros._BANG_get.cljs$lang$macro = true);

var ret__4785__auto___36194 = (function (){
applied_science.js_interop$macros.unchecked_set = (function applied_science$js_interop$macros$unchecked_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36195 = arguments.length;
var i__4737__auto___36196 = (0);
while(true){
if((i__4737__auto___36196 < len__4736__auto___36195)){
args__4742__auto__.push((arguments[i__4737__auto___36196]));

var G__36200 = (i__4737__auto___36196 + (1));
i__4737__auto___36196 = G__36200;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop$macros.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,keyvals){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function applied_science$js_interop$macros$iter__35714(s__35715){
return (new cljs.core.LazySeq(null,(function (){
var s__35715__$1 = s__35715;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35715__$1);
if(temp__5735__auto__){
var s__35715__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35715__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35715__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35717 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35716 = (0);
while(true){
if((i__35716 < size__4528__auto__)){
var vec__35729 = cljs.core._nth(c__4527__auto__,i__35716);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35729,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35729,(1),null);
cljs.core.chunk_append(b__35717,((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.dot_get(k),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-set","cljs.core/unchecked-set",763360576,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,null,k),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))))));

var G__36212 = (i__35716 + (1));
i__35716 = G__36212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35717),applied_science$js_interop$macros$iter__35714(cljs.core.chunk_rest(s__35715__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35717),null);
}
} else {
var vec__35732 = cljs.core.first(s__35715__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35732,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35732,(1),null);
return cljs.core.cons(((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.dot_get(k),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-set","cljs.core/unchecked-set",763360576,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,null,k),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))))),applied_science$js_interop$macros$iter__35714(cljs.core.rest(s__35715__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
})(),(new cljs.core.List(null,o,null,(1),null))], 0))));
}));

(applied_science.js_interop$macros.unchecked_set.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop$macros.unchecked_set.cljs$lang$applyTo = (function (seq35695){
var G__35696 = cljs.core.first(seq35695);
var seq35695__$1 = cljs.core.next(seq35695);
var G__35697 = cljs.core.first(seq35695__$1);
var seq35695__$2 = cljs.core.next(seq35695__$1);
var G__35698 = cljs.core.first(seq35695__$2);
var seq35695__$3 = cljs.core.next(seq35695__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35696,G__35697,G__35698,seq35695__$3);
}));

return null;
})()
;
(applied_science.js_interop$macros.unchecked_set.cljs$lang$macro = true);

var ret__4785__auto___36216 = (function (){
applied_science.js_interop$macros._BANG_set = (function applied_science$js_interop$macros$_BANG_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36217 = arguments.length;
var i__4737__auto___36218 = (0);
while(true){
if((i__4737__auto___36218 < len__4736__auto___36217)){
args__4742__auto__.push((arguments[i__4737__auto___36218]));

var G__36219 = (i__4737__auto___36218 + (1));
i__4737__auto___36218 = G__36219;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop$macros._BANG_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros._BANG_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,keyvals){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","unchecked-set","applied-science.js-interop/unchecked-set",612468376,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keyvals], 0))));
}));

(applied_science.js_interop$macros._BANG_set.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop$macros._BANG_set.cljs$lang$applyTo = (function (seq35745){
var G__35746 = cljs.core.first(seq35745);
var seq35745__$1 = cljs.core.next(seq35745);
var G__35747 = cljs.core.first(seq35745__$1);
var seq35745__$2 = cljs.core.next(seq35745__$1);
var G__35748 = cljs.core.first(seq35745__$2);
var seq35745__$3 = cljs.core.next(seq35745__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35746,G__35747,G__35748,seq35745__$3);
}));

return null;
})()
;
(applied_science.js_interop$macros._BANG_set.cljs$lang$macro = true);

var ret__4785__auto___36222 = applied_science.js_interop$macros.contains_QMARK_ = (function applied_science$js_interop$macros$contains_QMARK_(_AMPERSAND_form,_AMPERSAND_env,obj,k){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(applied_science.js_interop$macros.contains_QMARK_.cljs$lang$macro = true);

applied_science.js_interop$macros.get_STAR_ = (function applied_science$js_interop$macros$get_STAR_(var_args){
var G__35771 = arguments.length;
switch (G__35771) {
case 3:
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (env,obj,k){
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$4(env,obj,k,new cljs.core.Symbol("js","undefined","js/undefined",-329966622,null));
}));

(applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (env,obj,k,not_found){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
var k_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(env,o,k),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","contains?","applied-science.js-interop/contains?",-1276734795,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k_sym,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(applied_science.js_interop$macros.get_STAR_.cljs$lang$maxFixedArity = 4);

var ret__4785__auto___36242 = (function (){
applied_science.js_interop$macros.get = (function applied_science$js_interop$macros$get(var_args){
var G__35776 = arguments.length;
switch (G__35776) {
case 4:
return applied_science.js_interop$macros.get.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return applied_science.js_interop$macros.get.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(applied_science.js_interop$macros.get.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k){
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,obj,k);
}));

(applied_science.js_interop$macros.get.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,not_found){
return applied_science.js_interop$macros.get_STAR_.cljs$core$IFn$_invoke$arity$4(_AMPERSAND_env,obj,k,not_found);
}));

(applied_science.js_interop$macros.get.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(applied_science.js_interop$macros.get.cljs$lang$macro = true);

var ret__4785__auto___36244 = (function (){
applied_science.js_interop$macros.get_in = (function applied_science$js_interop$macros$get_in(var_args){
var G__35791 = arguments.length;
switch (G__35791) {
case 4:
return applied_science.js_interop$macros.get_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return applied_science.js_interop$macros.get_in.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(applied_science.js_interop$macros.get_in.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop$macros.get_STAR_,_AMPERSAND_env),obj,ks);
}));

(applied_science.js_interop$macros.get_in.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,obj,ks,not_found){
if(cljs.core.vector_QMARK_(ks)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"out__35787__auto__","out__35787__auto__",-1968157352,null),null,(1),null)),(new cljs.core.List(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"out__35784__auto__","out__35784__auto__",-1692993099,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__35784__auto__","out__35784__auto__",-1692993099,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","get","applied-science.js-interop/get",-462418119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__35784__auto__","out__35784__auto__",-1692993099,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),obj,ks),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"out__35787__auto__","out__35787__auto__",-1968157352,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,not_found,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__35787__auto__","out__35787__auto__",-1968157352,null),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","get-in*","applied-science.js-interop.impl/get-in*",400975371,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.get_in.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(applied_science.js_interop$macros.get_in.cljs$lang$macro = true);

var ret__4785__auto___36250 = applied_science.js_interop$macros._BANG_get_in = (function applied_science$js_interop$macros$_BANG_get_in(_AMPERSAND_form,_AMPERSAND_env,obj,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0))));
}),obj,ks);
});
(applied_science.js_interop$macros._BANG_get_in.cljs$lang$macro = true);

var ret__4785__auto___36257 = applied_science.js_interop$macros.select_keys = (function applied_science$js_interop$macros$select_keys(_AMPERSAND_form,_AMPERSAND_env,obj,ks){
if(cljs.core.vector_QMARK_(ks)){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
var out = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("out");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,out,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function applied_science$js_interop$macros$select_keys_$_iter__35816(s__35817){
return (new cljs.core.LazySeq(null,(function (){
var s__35817__$1 = s__35817;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35817__$1);
if(temp__5735__auto__){
var s__35817__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35817__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35817__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35819 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35818 = (0);
while(true){
if((i__35818 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__35818);
cljs.core.chunk_append(b__35819,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"k__35815__auto__","k__35815__auto__",-1712690767,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35815__auto__","k__35815__auto__",-1712690767,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35815__auto__","k__35815__auto__",-1712690767,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35815__auto__","k__35815__auto__",-1712690767,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))));

var G__36273 = (i__35818 + (1));
i__35818 = G__36273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35819),applied_science$js_interop$macros$select_keys_$_iter__35816(cljs.core.chunk_rest(s__35817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35819),null);
}
} else {
var k = cljs.core.first(s__35817__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"k__35815__auto__","k__35815__auto__",-1712690767,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35815__auto__","k__35815__auto__",-1712690767,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35815__auto__","k__35815__auto__",-1712690767,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35815__auto__","k__35815__auto__",-1712690767,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),applied_science$js_interop$macros$select_keys_$_iter__35816(cljs.core.rest(s__35817__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(ks);
})(),(new cljs.core.List(null,out,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","select-keys*","applied-science.js-interop.impl/select-keys*",-241542668,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null))], 0))));
}
});
(applied_science.js_interop$macros.select_keys.cljs$lang$macro = true);

var ret__4785__auto___36275 = /**
 * Like `or` but switches on `some?` instead of truthiness.
 */
applied_science.js_interop$macros.some_or = (function applied_science$js_interop$macros$some_or(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,y,null,(1),null))], 0))));
});
(applied_science.js_interop$macros.some_or.cljs$lang$macro = true);

/**
 * Returns `k` of `o`. If nil, sets and returns a new empty child object.
 */
applied_science.js_interop$macros.get_PLUS__BANG_ = (function applied_science$js_interop$macros$get_PLUS__BANG_(o,k){
var child = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("child");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,child,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,child,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__35828__auto__","new-child__35828__auto__",1838247886,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__35828__auto__","new-child__35828__auto__",1838247886,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__35828__auto__","new-child__35828__auto__",1838247886,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
applied_science.js_interop$macros.get_in_PLUS__BANG_ = (function applied_science$js_interop$macros$get_in_PLUS__BANG_(o,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop$macros.get_PLUS__BANG_,o,ks);
});
var ret__4785__auto___36308 = (function (){
applied_science.js_interop$macros.assoc_BANG_ = (function applied_science$js_interop$macros$assoc_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36309 = arguments.length;
var i__4737__auto___36310 = (0);
while(true){
if((i__4737__auto___36310 < len__4736__auto___36309)){
args__4742__auto__.push((arguments[i__4737__auto___36310]));

var G__36311 = (i__4737__auto___36310 + (1));
i__4737__auto___36310 = G__36311;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop$macros.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,keyvals){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function applied_science$js_interop$macros$iter__35840(s__35841){
return (new cljs.core.LazySeq(null,(function (){
var s__35841__$1 = s__35841;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35841__$1);
if(temp__5735__auto__){
var s__35841__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35841__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35841__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35843 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35842 = (0);
while(true){
if((i__35842 < size__4528__auto__)){
var vec__35844 = cljs.core._nth(c__4527__auto__,i__35842);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35844,(1),null);
cljs.core.chunk_append(b__35843,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))));

var G__36315 = (i__35842 + (1));
i__35842 = G__36315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35843),applied_science$js_interop$macros$iter__35840(cljs.core.chunk_rest(s__35841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35843),null);
}
} else {
var vec__35847 = cljs.core.first(s__35841__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35847,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35847,(1),null);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),applied_science$js_interop$macros$iter__35840(cljs.core.rest(s__35841__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
})()], 0)))),null,(1),null))], 0))));
}));

(applied_science.js_interop$macros.assoc_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop$macros.assoc_BANG_.cljs$lang$applyTo = (function (seq35829){
var G__35830 = cljs.core.first(seq35829);
var seq35829__$1 = cljs.core.next(seq35829);
var G__35831 = cljs.core.first(seq35829__$1);
var seq35829__$2 = cljs.core.next(seq35829__$1);
var G__35832 = cljs.core.first(seq35829__$2);
var seq35829__$3 = cljs.core.next(seq35829__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35830,G__35831,G__35832,seq35829__$3);
}));

return null;
})()
;
(applied_science.js_interop$macros.assoc_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36320 = applied_science.js_interop$macros.assoc_in_BANG_ = (function applied_science$js_interop$macros$assoc_in_BANG_(_AMPERSAND_form,_AMPERSAND_env,obj,ks,v){
if(cljs.core.vector_QMARK_(ks)){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.get_in_PLUS__BANG_(o,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","assoc-in*","applied-science.js-interop.impl/assoc-in*",45744373,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))));
}
});
(applied_science.js_interop$macros.assoc_in_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36354 = applied_science.js_interop$macros._BANG_assoc_in_BANG_ = (function applied_science$js_interop$macros$_BANG_assoc_in_BANG_(_AMPERSAND_form,_AMPERSAND_env,obj,ks,v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__35864__auto__","obj__35864__auto__",91681374,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__35864__auto__","obj__35864__auto__",91681374,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__35864__auto__","obj__35864__auto__",91681374,null),null,(1),null))], 0))));
});
(applied_science.js_interop$macros._BANG_assoc_in_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36382 = (function (){
applied_science.js_interop$macros._BANG_update = (function applied_science$js_interop$macros$_BANG_update(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36383 = arguments.length;
var i__4737__auto___36384 = (0);
while(true){
if((i__4737__auto___36384 < len__4736__auto___36383)){
args__4742__auto__.push((arguments[i__4737__auto___36384]));

var G__36385 = (i__4737__auto___36384 + (1));
i__4737__auto___36384 = G__36385;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((5) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((5)),(0),null)):null);
return applied_science.js_interop$macros._BANG_update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros._BANG_update.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"o__35869__auto__","o__35869__auto__",1193721810,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__35869__auto__","o__35869__auto__",1193721810,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__35869__auto__","o__35869__auto__",1193721810,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(applied_science.js_interop$macros._BANG_update.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(applied_science.js_interop$macros._BANG_update.cljs$lang$applyTo = (function (seq35870){
var G__35871 = cljs.core.first(seq35870);
var seq35870__$1 = cljs.core.next(seq35870);
var G__35872 = cljs.core.first(seq35870__$1);
var seq35870__$2 = cljs.core.next(seq35870__$1);
var G__35873 = cljs.core.first(seq35870__$2);
var seq35870__$3 = cljs.core.next(seq35870__$2);
var G__35874 = cljs.core.first(seq35870__$3);
var seq35870__$4 = cljs.core.next(seq35870__$3);
var G__35875 = cljs.core.first(seq35870__$4);
var seq35870__$5 = cljs.core.next(seq35870__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35871,G__35872,G__35873,G__35874,G__35875,seq35870__$5);
}));

return null;
})()
;
(applied_science.js_interop$macros._BANG_update.cljs$lang$macro = true);

var ret__4785__auto___36394 = (function (){
applied_science.js_interop$macros.update_BANG_ = (function applied_science$js_interop$macros$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36395 = arguments.length;
var i__4737__auto___36396 = (0);
while(true){
if((i__4737__auto___36396 < len__4736__auto___36395)){
args__4742__auto__.push((arguments[i__4737__auto___36396]));

var G__36397 = (i__4737__auto___36396 + (1));
i__4737__auto___36396 = G__36397;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((5) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((5)),(0),null)):null);
return applied_science.js_interop$macros.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"o__35895__auto__","o__35895__auto__",852207400,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!update","applied-science.js-interop/!update",-868872919,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__35895__auto__","o__35895__auto__",852207400,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),args], 0)))),null,(1),null))], 0))));
}));

(applied_science.js_interop$macros.update_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(applied_science.js_interop$macros.update_BANG_.cljs$lang$applyTo = (function (seq35896){
var G__35897 = cljs.core.first(seq35896);
var seq35896__$1 = cljs.core.next(seq35896);
var G__35898 = cljs.core.first(seq35896__$1);
var seq35896__$2 = cljs.core.next(seq35896__$1);
var G__35899 = cljs.core.first(seq35896__$2);
var seq35896__$3 = cljs.core.next(seq35896__$2);
var G__35900 = cljs.core.first(seq35896__$3);
var seq35896__$4 = cljs.core.next(seq35896__$3);
var G__35901 = cljs.core.first(seq35896__$4);
var seq35896__$5 = cljs.core.next(seq35896__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35897,G__35898,G__35899,G__35900,G__35901,seq35896__$5);
}));

return null;
})()
;
(applied_science.js_interop$macros.update_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36412 = (function (){
applied_science.js_interop$macros.update_in_BANG_ = (function applied_science$js_interop$macros$update_in_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36413 = arguments.length;
var i__4737__auto___36414 = (0);
while(true){
if((i__4737__auto___36414 < len__4736__auto___36413)){
args__4742__auto__.push((arguments[i__4737__auto___36414]));

var G__36415 = (i__4737__auto___36414 + (1));
i__4737__auto___36414 = G__36415;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((5) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((5)),(0),null)):null);
return applied_science.js_interop$macros.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,ks,f,args){
if(cljs.core.vector_QMARK_(ks)){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"inner-obj__35906__auto__","inner-obj__35906__auto__",1980220252,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.get_in_PLUS__BANG_(o,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks)),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","update!","applied-science.js-interop/update!",1834803760,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"inner-obj__35906__auto__","inner-obj__35906__auto__",1980220252,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),args], 0)))),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","update-in*","applied-science.js-interop.impl/update-in*",-1172951159,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(args),null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.update_in_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(applied_science.js_interop$macros.update_in_BANG_.cljs$lang$applyTo = (function (seq35907){
var G__35908 = cljs.core.first(seq35907);
var seq35907__$1 = cljs.core.next(seq35907);
var G__35909 = cljs.core.first(seq35907__$1);
var seq35907__$2 = cljs.core.next(seq35907__$1);
var G__35910 = cljs.core.first(seq35907__$2);
var seq35907__$3 = cljs.core.next(seq35907__$2);
var G__35911 = cljs.core.first(seq35907__$3);
var seq35907__$4 = cljs.core.next(seq35907__$3);
var G__35912 = cljs.core.first(seq35907__$4);
var seq35907__$5 = cljs.core.next(seq35907__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35908,G__35909,G__35910,G__35911,G__35912,seq35907__$5);
}));

return null;
})()
;
(applied_science.js_interop$macros.update_in_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36427 = applied_science.js_interop$macros.push_BANG_ = (function applied_science$js_interop$macros$push_BANG_(_AMPERSAND_form,_AMPERSAND_env,array,v){
var sym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("array"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Array","js/Array",-423508366,null)], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,array,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))], 0))));
});
(applied_science.js_interop$macros.push_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36430 = applied_science.js_interop$macros.unshift_BANG_ = (function applied_science$js_interop$macros$unshift_BANG_(_AMPERSAND_form,_AMPERSAND_env,array,v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doto","cljs.core/doto",-1284816239,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".unshift",".unshift",549569771,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))], 0))));
});
(applied_science.js_interop$macros.unshift_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36434 = (function (){
applied_science.js_interop$macros.call = (function applied_science$js_interop$macros$call(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36435 = arguments.length;
var i__4737__auto___36436 = (0);
while(true){
if((i__4737__auto___36436 < len__4736__auto___36435)){
args__4742__auto__.push((arguments[i__4737__auto___36436]));

var G__36437 = (i__4737__auto___36436 + (1));
i__4737__auto___36436 = G__36437;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return applied_science.js_interop$macros.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros.call.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,args){
if(applied_science.js_interop$macros.dot_sym_QMARK_(k)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros.dot_call(k),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__35918__auto__","obj__35918__auto__",-1747616231,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__35919__auto__","f__35919__auto__",-1196120194,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,253,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,253,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__35918__auto__","obj__35918__auto__",-1747616231,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__35919__auto__","f__35919__auto__",-1196120194,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__35918__auto__","obj__35918__auto__",-1747616231,null),null,(1),null)),args], 0)))),null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.call.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(applied_science.js_interop$macros.call.cljs$lang$applyTo = (function (seq35924){
var G__35925 = cljs.core.first(seq35924);
var seq35924__$1 = cljs.core.next(seq35924);
var G__35926 = cljs.core.first(seq35924__$1);
var seq35924__$2 = cljs.core.next(seq35924__$1);
var G__35927 = cljs.core.first(seq35924__$2);
var seq35924__$3 = cljs.core.next(seq35924__$2);
var G__35928 = cljs.core.first(seq35924__$3);
var seq35924__$4 = cljs.core.next(seq35924__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35925,G__35926,G__35927,G__35928,seq35924__$4);
}));

return null;
})()
;
(applied_science.js_interop$macros.call.cljs$lang$macro = true);

var ret__4785__auto___36441 = (function (){
applied_science.js_interop$macros.call_in = (function applied_science$js_interop$macros$call_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36442 = arguments.length;
var i__4737__auto___36443 = (0);
while(true){
if((i__4737__auto___36443 < len__4736__auto___36442)){
args__4742__auto__.push((arguments[i__4737__auto___36443]));

var G__36444 = (i__4737__auto___36443 + (1));
i__4737__auto___36443 = G__36444;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return applied_science.js_interop$macros.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,ks,args){
if(cljs.core.vector_QMARK_(ks)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"parent__35943__auto__","parent__35943__auto__",1775029771,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.pop(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__35944__auto__","f__35944__auto__",-957552355,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,259,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,259,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__35943__auto__","parent__35943__auto__",1775029771,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.peek(ks),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__35944__auto__","f__35944__auto__",-957552355,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__35943__auto__","parent__35943__auto__",1775029771,null),null,(1),null)),args], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","apply-in*","applied-science.js-interop.impl/apply-in*",962865774,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),args))),null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.call_in.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(applied_science.js_interop$macros.call_in.cljs$lang$applyTo = (function (seq35950){
var G__35951 = cljs.core.first(seq35950);
var seq35950__$1 = cljs.core.next(seq35950);
var G__35952 = cljs.core.first(seq35950__$1);
var seq35950__$2 = cljs.core.next(seq35950__$1);
var G__35953 = cljs.core.first(seq35950__$2);
var seq35950__$3 = cljs.core.next(seq35950__$2);
var G__35954 = cljs.core.first(seq35950__$3);
var seq35950__$4 = cljs.core.next(seq35950__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35951,G__35952,G__35953,G__35954,seq35950__$4);
}));

return null;
})()
;
(applied_science.js_interop$macros.call_in.cljs$lang$macro = true);

var ret__4785__auto___36447 = applied_science.js_interop$macros.apply = (function applied_science$js_interop$macros$apply(_AMPERSAND_form,_AMPERSAND_env,obj,k,arg_array){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__35968__auto__","obj__35968__auto__",-1641882341,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__35969__auto__","f__35969__auto__",-877126132,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,265,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,22,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,265,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__35968__auto__","obj__35968__auto__",-1641882341,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__35969__auto__","f__35969__auto__",-877126132,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__35968__auto__","obj__35968__auto__",-1641882341,null),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(applied_science.js_interop$macros.apply.cljs$lang$macro = true);

var ret__4785__auto___36452 = applied_science.js_interop$macros.apply_in = (function applied_science$js_interop$macros$apply_in(_AMPERSAND_form,_AMPERSAND_env,obj,ks,arg_array){
if(cljs.core.vector_QMARK_(ks)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"parent__35974__auto__","parent__35974__auto__",-757191167,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.pop(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__35975__auto__","f__35975__auto__",-1939296799,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,271,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,271,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__35974__auto__","parent__35974__auto__",-757191167,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.peek(ks),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__35975__auto__","f__35975__auto__",-1939296799,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__35974__auto__","parent__35974__auto__",-757191167,null),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","apply-in*","applied-science.js-interop.impl/apply-in*",962865774,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0))));
}
});
(applied_science.js_interop$macros.apply_in.cljs$lang$macro = true);

applied_science.js_interop$macros.literal_obj = (function applied_science$js_interop$macros$literal_obj(keyvals){
var keyvals_str = ["({",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36006){
var vec__36007 = p__36006;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36007,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36007,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(applied_science.js_interop$macros.dot_name(k)):["\"",cljs.core.name(k),"\""].join(''))),":~{}"].join('');
}),keyvals)),"})"].join('');
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),keyvals_str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,keyvals)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__4785__auto___36459 = (function (){
applied_science.js_interop$macros.obj = (function applied_science$js_interop$macros$obj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36460 = arguments.length;
var i__4737__auto___36461 = (0);
while(true){
if((i__4737__auto___36461 < len__4736__auto___36460)){
args__4742__auto__.push((arguments[i__4737__auto___36461]));

var G__36462 = (i__4737__auto___36461 + (1));
i__4737__auto___36461 = G__36462;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop$macros.obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros.obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,keyvals){
var kvs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals);
if(cljs.core.every_QMARK_((function (p1__36025_SHARP_){
return (((p1__36025_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__36025_SHARP_ === 'string') || (applied_science.js_interop$macros.dot_sym_QMARK_(p1__36025_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,kvs))){
return applied_science.js_interop$macros.literal_obj(kvs);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function applied_science$js_interop$macros$iter__36043(s__36044){
return (new cljs.core.LazySeq(null,(function (){
var s__36044__$1 = s__36044;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36044__$1);
if(temp__5735__auto__){
var s__36044__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36044__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36044__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36046 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36045 = (0);
while(true){
if((i__36045 < size__4528__auto__)){
var vec__36054 = cljs.core._nth(c__4527__auto__,i__36045);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36054,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36054,(1),null);
cljs.core.chunk_append(b__36046,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))));

var G__36470 = (i__36045 + (1));
i__36045 = G__36470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36046),applied_science$js_interop$macros$iter__36043(cljs.core.chunk_rest(s__36044__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36046),null);
}
} else {
var vec__36057 = cljs.core.first(s__36044__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36057,(1),null);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),applied_science$js_interop$macros$iter__36043(cljs.core.rest(s__36044__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(kvs);
})()], 0))));
}
}));

(applied_science.js_interop$macros.obj.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop$macros.obj.cljs$lang$applyTo = (function (seq36026){
var G__36027 = cljs.core.first(seq36026);
var seq36026__$1 = cljs.core.next(seq36026);
var G__36028 = cljs.core.first(seq36026__$1);
var seq36026__$2 = cljs.core.next(seq36026__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36027,G__36028,seq36026__$2);
}));

return null;
})()
;
(applied_science.js_interop$macros.obj.cljs$lang$macro = true);

/**
 * Recursively converts literal Clojure maps/vectors into JavaScript object/array expressions
 * 
 *   Options map accepts a :keyfn for custom key conversions.
 */
applied_science.js_interop$macros.lit_STAR_ = (function applied_science$js_interop$macros$lit_STAR_(var_args){
var G__36070 = arguments.length;
switch (G__36070) {
case 1:
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2(null,x);
}));

(applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p__36075,x){
var map__36079 = p__36075;
var map__36079__$1 = (((((!((map__36079 == null))))?(((((map__36079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36079):map__36079);
var opts = map__36079__$1;
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36079__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.identity);
if(cljs.core.map_QMARK_(x)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("applied-science.js-interop","obj","applied-science.js-interop/obj",-1164656258,null),cljs.core.reduce_kv((function (p1__36065_SHARP_,p2__36066_SHARP_,p3__36067_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(p1__36065_SHARP_,(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(p2__36066_SHARP_) : keyfn.call(null,p2__36066_SHARP_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2(opts,p3__36067_SHARP_)], 0));
}),cljs.core.PersistentVector.EMPTY,x));
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop$macros.lit_STAR_,x));
} else {
return x;

}
}
}));

(applied_science.js_interop$macros.lit_STAR_.cljs$lang$maxFixedArity = 2);

var ret__4785__auto___36472 = /**
 * Recursively converts literal Clojure maps/vectors into JavaScript object/array expressions
 * (using j/obj and cljs.core/array)
 */
applied_science.js_interop$macros.lit = (function applied_science$js_interop$macros$lit(_AMPERSAND_form,_AMPERSAND_env,form){
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$1(form);
});
(applied_science.js_interop$macros.lit.cljs$lang$macro = true);

var ret__4785__auto___36473 = (function (){
/**
 * `let` with destructuring that supports js property and array access.
 * Use ^:js metadata on the binding form to invoke. Eg/
 * 
 * (let [^:js {:keys [a]} obj] …)
 */
applied_science.js_interop$macros.let$ = (function applied_science$js_interop$macros$let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36474 = arguments.length;
var i__4737__auto___36475 = (0);
while(true){
if((i__4737__auto___36475 < len__4736__auto___36474)){
args__4742__auto__.push((arguments[i__4737__auto___36475]));

var G__36476 = (i__4737__auto___36475 + (1));
i__4737__auto___36475 = G__36476;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.empty_QMARK_(bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body)));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.core","let","clojure.core/let",-407137853,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(applied_science.js_interop.destructure.destructure(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),bindings))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","let","applied-science.js-interop/let",-142128647,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),bindings)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.let$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop$macros.let$.cljs$lang$applyTo = (function (seq36098){
var G__36099 = cljs.core.first(seq36098);
var seq36098__$1 = cljs.core.next(seq36098);
var G__36100 = cljs.core.first(seq36098__$1);
var seq36098__$2 = cljs.core.next(seq36098__$1);
var G__36101 = cljs.core.first(seq36098__$2);
var seq36098__$3 = cljs.core.next(seq36098__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36099,G__36100,G__36101,seq36098__$3);
}));

return null;
})()
;
(applied_science.js_interop$macros.let$.cljs$lang$macro = true);

var ret__4785__auto___36478 = (function (){
/**
 * `fn` with argument destructuring that supports js property and array access.
 * Use ^:js metadata on binding forms to invoke. Eg/
 * 
 * (fn [^:js {:keys [a]}] …)
 */
applied_science.js_interop$macros.fn = (function applied_science$js_interop$macros$fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36481 = arguments.length;
var i__4737__auto___36482 = (0);
while(true){
if((i__4737__auto___36482 < len__4736__auto___36481)){
args__4742__auto__.push((arguments[i__4737__auto___36482]));

var G__36484 = (i__4737__auto___36482 + (1));
i__4737__auto___36482 = G__36484;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","fn","clojure.core/fn",-980152636,null),applied_science.js_interop.destructure.destructure_fn_args(args));
}));

(applied_science.js_interop$macros.fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop$macros.fn.cljs$lang$applyTo = (function (seq36112){
var G__36113 = cljs.core.first(seq36112);
var seq36112__$1 = cljs.core.next(seq36112);
var G__36114 = cljs.core.first(seq36112__$1);
var seq36112__$2 = cljs.core.next(seq36112__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36113,G__36114,seq36112__$2);
}));

return null;
})()
;
(applied_science.js_interop$macros.fn.cljs$lang$macro = true);

var ret__4785__auto___36489 = (function (){
/**
 * `defn` with argument destructuring that supports js property and array access.
 * Use ^:js metadata on binding forms to invoke.
 */
applied_science.js_interop$macros.defn = (function applied_science$js_interop$macros$defn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36490 = arguments.length;
var i__4737__auto___36491 = (0);
while(true){
if((i__4737__auto___36491 < len__4736__auto___36490)){
args__4742__auto__.push((arguments[i__4737__auto___36491]));

var G__36492 = (i__4737__auto___36491 + (1));
i__4737__auto___36491 = G__36492;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop$macros.defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros.defn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.cons(new cljs.core.Symbol("clojure.core","defn","clojure.core/defn",-1504648747,null),applied_science.js_interop.destructure.destructure_fn_args(args));
}));

(applied_science.js_interop$macros.defn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop$macros.defn.cljs$lang$applyTo = (function (seq36118){
var G__36119 = cljs.core.first(seq36118);
var seq36118__$1 = cljs.core.next(seq36118);
var G__36120 = cljs.core.first(seq36118__$1);
var seq36118__$2 = cljs.core.next(seq36118__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36119,G__36120,seq36118__$2);
}));

return null;
})()
;
(applied_science.js_interop$macros.defn.cljs$lang$macro = true);


//# sourceMappingURL=applied-science.js-interop$macros.js.map
