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
var ret__4785__auto___36253 = applied_science.js_interop$macros.in_QMARK_ = (function applied_science$js_interop$macros$in_QMARK_(_AMPERSAND_form,_AMPERSAND_env,k,obj){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","in?*","applied-science.js-interop.impl/in?*",-1012411264,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,obj,null,(1),null))], 0))));
});
(applied_science.js_interop$macros.in_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___36254 = (function (){
applied_science.js_interop$macros.unchecked_get = (function applied_science$js_interop$macros$unchecked_get(var_args){
var G__35736 = arguments.length;
switch (G__35736) {
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

var ret__4785__auto___36268 = (function (){
applied_science.js_interop$macros._BANG_get = (function applied_science$js_interop$macros$_BANG_get(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36269 = arguments.length;
var i__4737__auto___36270 = (0);
while(true){
if((i__4737__auto___36270 < len__4736__auto___36269)){
args__4742__auto__.push((arguments[i__4737__auto___36270]));

var G__36271 = (i__4737__auto___36270 + (1));
i__4737__auto___36270 = G__36271;
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
(applied_science.js_interop$macros._BANG_get.cljs$lang$applyTo = (function (seq35747){
var G__35748 = cljs.core.first(seq35747);
var seq35747__$1 = cljs.core.next(seq35747);
var G__35749 = cljs.core.first(seq35747__$1);
var seq35747__$2 = cljs.core.next(seq35747__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35748,G__35749,seq35747__$2);
}));

return null;
})()
;
(applied_science.js_interop$macros._BANG_get.cljs$lang$macro = true);

var ret__4785__auto___36276 = (function (){
applied_science.js_interop$macros.unchecked_set = (function applied_science$js_interop$macros$unchecked_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36277 = arguments.length;
var i__4737__auto___36278 = (0);
while(true){
if((i__4737__auto___36278 < len__4736__auto___36277)){
args__4742__auto__.push((arguments[i__4737__auto___36278]));

var G__36279 = (i__4737__auto___36278 + (1));
i__4737__auto___36278 = G__36279;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function applied_science$js_interop$macros$iter__35758(s__35759){
return (new cljs.core.LazySeq(null,(function (){
var s__35759__$1 = s__35759;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35759__$1);
if(temp__5735__auto__){
var s__35759__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35759__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35759__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35761 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35760 = (0);
while(true){
if((i__35760 < size__4528__auto__)){
var vec__35762 = cljs.core._nth(c__4527__auto__,i__35760);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35762,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35762,(1),null);
cljs.core.chunk_append(b__35761,((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.dot_get(k),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-set","cljs.core/unchecked-set",763360576,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,null,k),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))))));

var G__36290 = (i__35760 + (1));
i__35760 = G__36290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35761),applied_science$js_interop$macros$iter__35758(cljs.core.chunk_rest(s__35759__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35761),null);
}
} else {
var vec__35769 = cljs.core.first(s__35759__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35769,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35769,(1),null);
return cljs.core.cons(((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,applied_science.js_interop$macros.dot_get(k),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-set","cljs.core/unchecked-set",763360576,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,null,k),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))))),applied_science$js_interop$macros$iter__35758(cljs.core.rest(s__35759__$2)));
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
(applied_science.js_interop$macros.unchecked_set.cljs$lang$applyTo = (function (seq35750){
var G__35751 = cljs.core.first(seq35750);
var seq35750__$1 = cljs.core.next(seq35750);
var G__35752 = cljs.core.first(seq35750__$1);
var seq35750__$2 = cljs.core.next(seq35750__$1);
var G__35753 = cljs.core.first(seq35750__$2);
var seq35750__$3 = cljs.core.next(seq35750__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35751,G__35752,G__35753,seq35750__$3);
}));

return null;
})()
;
(applied_science.js_interop$macros.unchecked_set.cljs$lang$macro = true);

var ret__4785__auto___36291 = (function (){
applied_science.js_interop$macros._BANG_set = (function applied_science$js_interop$macros$_BANG_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36293 = arguments.length;
var i__4737__auto___36294 = (0);
while(true){
if((i__4737__auto___36294 < len__4736__auto___36293)){
args__4742__auto__.push((arguments[i__4737__auto___36294]));

var G__36297 = (i__4737__auto___36294 + (1));
i__4737__auto___36294 = G__36297;
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
(applied_science.js_interop$macros._BANG_set.cljs$lang$applyTo = (function (seq35772){
var G__35773 = cljs.core.first(seq35772);
var seq35772__$1 = cljs.core.next(seq35772);
var G__35774 = cljs.core.first(seq35772__$1);
var seq35772__$2 = cljs.core.next(seq35772__$1);
var G__35775 = cljs.core.first(seq35772__$2);
var seq35772__$3 = cljs.core.next(seq35772__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35773,G__35774,G__35775,seq35772__$3);
}));

return null;
})()
;
(applied_science.js_interop$macros._BANG_set.cljs$lang$macro = true);

var ret__4785__auto___36300 = applied_science.js_interop$macros.contains_QMARK_ = (function applied_science$js_interop$macros$contains_QMARK_(_AMPERSAND_form,_AMPERSAND_env,obj,k){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(applied_science.js_interop$macros.contains_QMARK_.cljs$lang$macro = true);

applied_science.js_interop$macros.get_STAR_ = (function applied_science$js_interop$macros$get_STAR_(var_args){
var G__35781 = arguments.length;
switch (G__35781) {
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

var ret__4785__auto___36324 = (function (){
applied_science.js_interop$macros.get = (function applied_science$js_interop$macros$get(var_args){
var G__35787 = arguments.length;
switch (G__35787) {
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

var ret__4785__auto___36335 = (function (){
applied_science.js_interop$macros.get_in = (function applied_science$js_interop$macros$get_in(var_args){
var G__35802 = arguments.length;
switch (G__35802) {
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"out__35797__auto__","out__35797__auto__",-1781499605,null),null,(1),null)),(new cljs.core.List(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"out__35796__auto__","out__35796__auto__",-1364607092,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__35796__auto__","out__35796__auto__",-1364607092,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","get","applied-science.js-interop/get",-462418119,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__35796__auto__","out__35796__auto__",-1364607092,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),obj,ks),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.lookup_sentinel,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"out__35797__auto__","out__35797__auto__",-1781499605,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,not_found,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out__35797__auto__","out__35797__auto__",-1781499605,null),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","get-in*","applied-science.js-interop.impl/get-in*",400975371,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,not_found,null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.get_in.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(applied_science.js_interop$macros.get_in.cljs$lang$macro = true);

var ret__4785__auto___36353 = applied_science.js_interop$macros._BANG_get_in = (function applied_science$js_interop$macros$_BANG_get_in(_AMPERSAND_form,_AMPERSAND_env,obj,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0))));
}),obj,ks);
});
(applied_science.js_interop$macros._BANG_get_in.cljs$lang$macro = true);

var ret__4785__auto___36354 = applied_science.js_interop$macros.select_keys = (function applied_science$js_interop$macros$select_keys(_AMPERSAND_form,_AMPERSAND_env,obj,ks){
if(cljs.core.vector_QMARK_(ks)){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
var out = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("out");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,out,null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function applied_science$js_interop$macros$select_keys_$_iter__35836(s__35837){
return (new cljs.core.LazySeq(null,(function (){
var s__35837__$1 = s__35837;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35837__$1);
if(temp__5735__auto__){
var s__35837__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35837__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35837__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35839 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35838 = (0);
while(true){
if((i__35838 < size__4528__auto__)){
var k = cljs.core._nth(c__4527__auto__,i__35838);
cljs.core.chunk_append(b__35839,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"k__35824__auto__","k__35824__auto__",2061824434,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35824__auto__","k__35824__auto__",2061824434,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35824__auto__","k__35824__auto__",2061824434,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35824__auto__","k__35824__auto__",2061824434,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))));

var G__36375 = (i__35838 + (1));
i__35838 = G__36375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35839),applied_science$js_interop$macros$select_keys_$_iter__35836(cljs.core.chunk_rest(s__35837__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35839),null);
}
} else {
var k = cljs.core.first(s__35837__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"k__35824__auto__","k__35824__auto__",2061824434,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.wrap_key(_AMPERSAND_env,o,k),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","in?","applied-science.js-interop/in?",399021412,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35824__auto__","k__35824__auto__",2061824434,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,out,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35824__auto__","k__35824__auto__",2061824434,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__35824__auto__","k__35824__auto__",2061824434,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),applied_science$js_interop$macros$select_keys_$_iter__35836(cljs.core.rest(s__35837__$2)));
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

var ret__4785__auto___36386 = /**
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,child,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,child,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__35870__auto__","new-child__35870__auto__",-1431635050,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__35870__auto__","new-child__35870__auto__",-1431635050,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-child__35870__auto__","new-child__35870__auto__",-1431635050,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
applied_science.js_interop$macros.get_in_PLUS__BANG_ = (function applied_science$js_interop$macros$get_in_PLUS__BANG_(o,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop$macros.get_PLUS__BANG_,o,ks);
});
var ret__4785__auto___36410 = (function (){
applied_science.js_interop$macros.assoc_BANG_ = (function applied_science$js_interop$macros$assoc_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36411 = arguments.length;
var i__4737__auto___36412 = (0);
while(true){
if((i__4737__auto___36412 < len__4736__auto___36411)){
args__4742__auto__.push((arguments[i__4737__auto___36412]));

var G__36413 = (i__4737__auto___36412 + (1));
i__4737__auto___36412 = G__36413;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function applied_science$js_interop$macros$iter__35899(s__35900){
return (new cljs.core.LazySeq(null,(function (){
var s__35900__$1 = s__35900;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35900__$1);
if(temp__5735__auto__){
var s__35900__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35900__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__35900__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__35902 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__35901 = (0);
while(true){
if((i__35901 < size__4528__auto__)){
var vec__35907 = cljs.core._nth(c__4527__auto__,i__35901);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35907,(1),null);
cljs.core.chunk_append(b__35902,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))));

var G__36438 = (i__35901 + (1));
i__35901 = G__36438;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35902),applied_science$js_interop$macros$iter__35899(cljs.core.chunk_rest(s__35900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35902),null);
}
} else {
var vec__35914 = cljs.core.first(s__35900__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35914,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35914,(1),null);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),applied_science$js_interop$macros$iter__35899(cljs.core.rest(s__35900__$2)));
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
(applied_science.js_interop$macros.assoc_BANG_.cljs$lang$applyTo = (function (seq35886){
var G__35888 = cljs.core.first(seq35886);
var seq35886__$1 = cljs.core.next(seq35886);
var G__35889 = cljs.core.first(seq35886__$1);
var seq35886__$2 = cljs.core.next(seq35886__$1);
var G__35890 = cljs.core.first(seq35886__$2);
var seq35886__$3 = cljs.core.next(seq35886__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35888,G__35889,G__35890,seq35886__$3);
}));

return null;
})()
;
(applied_science.js_interop$macros.assoc_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36444 = applied_science.js_interop$macros.assoc_in_BANG_ = (function applied_science$js_interop$macros$assoc_in_BANG_(_AMPERSAND_form,_AMPERSAND_env,obj,ks,v){
if(cljs.core.vector_QMARK_(ks)){
var o = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.get_in_PLUS__BANG_(o,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","assoc-in*","applied-science.js-interop.impl/assoc-in*",45744373,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))));
}
});
(applied_science.js_interop$macros.assoc_in_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36447 = applied_science.js_interop$macros._BANG_assoc_in_BANG_ = (function applied_science$js_interop$macros$_BANG_assoc_in_BANG_(_AMPERSAND_form,_AMPERSAND_env,obj,ks,v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__35930__auto__","obj__35930__auto__",56791576,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__35930__auto__","obj__35930__auto__",56791576,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__35930__auto__","obj__35930__auto__",56791576,null),null,(1),null))], 0))));
});
(applied_science.js_interop$macros._BANG_assoc_in_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36464 = (function (){
applied_science.js_interop$macros._BANG_update = (function applied_science$js_interop$macros$_BANG_update(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36465 = arguments.length;
var i__4737__auto___36466 = (0);
while(true){
if((i__4737__auto___36466 < len__4736__auto___36465)){
args__4742__auto__.push((arguments[i__4737__auto___36466]));

var G__36467 = (i__4737__auto___36466 + (1));
i__4737__auto___36466 = G__36467;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((5) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((5)),(0),null)):null);
return applied_science.js_interop$macros._BANG_update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros._BANG_update.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"o__35937__auto__","o__35937__auto__",1418451451,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__35937__auto__","o__35937__auto__",1418451451,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__35937__auto__","o__35937__auto__",1418451451,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(applied_science.js_interop$macros._BANG_update.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(applied_science.js_interop$macros._BANG_update.cljs$lang$applyTo = (function (seq35938){
var G__35939 = cljs.core.first(seq35938);
var seq35938__$1 = cljs.core.next(seq35938);
var G__35940 = cljs.core.first(seq35938__$1);
var seq35938__$2 = cljs.core.next(seq35938__$1);
var G__35941 = cljs.core.first(seq35938__$2);
var seq35938__$3 = cljs.core.next(seq35938__$2);
var G__35942 = cljs.core.first(seq35938__$3);
var seq35938__$4 = cljs.core.next(seq35938__$3);
var G__35943 = cljs.core.first(seq35938__$4);
var seq35938__$5 = cljs.core.next(seq35938__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35939,G__35940,G__35941,G__35942,G__35943,seq35938__$5);
}));

return null;
})()
;
(applied_science.js_interop$macros._BANG_update.cljs$lang$macro = true);

var ret__4785__auto___36468 = (function (){
applied_science.js_interop$macros.update_BANG_ = (function applied_science$js_interop$macros$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36469 = arguments.length;
var i__4737__auto___36470 = (0);
while(true){
if((i__4737__auto___36470 < len__4736__auto___36469)){
args__4742__auto__.push((arguments[i__4737__auto___36470]));

var G__36471 = (i__4737__auto___36470 + (1));
i__4737__auto___36470 = G__36471;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((5) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((5)),(0),null)):null);
return applied_science.js_interop$macros.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4743__auto__);
});

(applied_science.js_interop$macros.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,obj,k,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"o__35950__auto__","o__35950__auto__",-755824869,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!update","applied-science.js-interop/!update",-868872919,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"o__35950__auto__","o__35950__auto__",-755824869,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),args], 0)))),null,(1),null))], 0))));
}));

(applied_science.js_interop$macros.update_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(applied_science.js_interop$macros.update_BANG_.cljs$lang$applyTo = (function (seq35951){
var G__35952 = cljs.core.first(seq35951);
var seq35951__$1 = cljs.core.next(seq35951);
var G__35953 = cljs.core.first(seq35951__$1);
var seq35951__$2 = cljs.core.next(seq35951__$1);
var G__35954 = cljs.core.first(seq35951__$2);
var seq35951__$3 = cljs.core.next(seq35951__$2);
var G__35955 = cljs.core.first(seq35951__$3);
var seq35951__$4 = cljs.core.next(seq35951__$3);
var G__35956 = cljs.core.first(seq35951__$4);
var seq35951__$5 = cljs.core.next(seq35951__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35952,G__35953,G__35954,G__35955,G__35956,seq35951__$5);
}));

return null;
})()
;
(applied_science.js_interop$macros.update_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36472 = (function (){
applied_science.js_interop$macros.update_in_BANG_ = (function applied_science$js_interop$macros$update_in_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36473 = arguments.length;
var i__4737__auto___36474 = (0);
while(true){
if((i__4737__auto___36474 < len__4736__auto___36473)){
args__4742__auto__.push((arguments[i__4737__auto___36474]));

var G__36475 = (i__4737__auto___36474 + (1));
i__4737__auto___36474 = G__36475;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,o,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","some-or","applied-science.js-interop/some-or",-391248189,null),null,(1),null)),(new cljs.core.List(null,o,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"inner-obj__36021__auto__","inner-obj__36021__auto__",800311376,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.get_in_PLUS__BANG_(o,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(ks)),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","update!","applied-science.js-interop/update!",1834803760,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"inner-obj__36021__auto__","inner-obj__36021__auto__",800311376,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.last(ks),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),args], 0)))),null,(1),null)),(new cljs.core.List(null,o,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","update-in*","applied-science.js-interop.impl/update-in*",-1172951159,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(args),null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.update_in_BANG_.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(applied_science.js_interop$macros.update_in_BANG_.cljs$lang$applyTo = (function (seq36023){
var G__36024 = cljs.core.first(seq36023);
var seq36023__$1 = cljs.core.next(seq36023);
var G__36025 = cljs.core.first(seq36023__$1);
var seq36023__$2 = cljs.core.next(seq36023__$1);
var G__36026 = cljs.core.first(seq36023__$2);
var seq36023__$3 = cljs.core.next(seq36023__$2);
var G__36027 = cljs.core.first(seq36023__$3);
var seq36023__$4 = cljs.core.next(seq36023__$3);
var G__36028 = cljs.core.first(seq36023__$4);
var seq36023__$5 = cljs.core.next(seq36023__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36024,G__36025,G__36026,G__36027,G__36028,seq36023__$5);
}));

return null;
})()
;
(applied_science.js_interop$macros.update_in_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36478 = applied_science.js_interop$macros.push_BANG_ = (function applied_science$js_interop$macros$push_BANG_(_AMPERSAND_form,_AMPERSAND_env,array,v){
var sym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("array"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","Array","js/Array",-423508366,null)], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,array,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))], 0))));
});
(applied_science.js_interop$macros.push_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36487 = applied_science.js_interop$macros.unshift_BANG_ = (function applied_science$js_interop$macros$unshift_BANG_(_AMPERSAND_form,_AMPERSAND_env,array,v){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doto","cljs.core/doto",-1284816239,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".unshift",".unshift",549569771,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))], 0))));
});
(applied_science.js_interop$macros.unshift_BANG_.cljs$lang$macro = true);

var ret__4785__auto___36492 = (function (){
applied_science.js_interop$macros.call = (function applied_science$js_interop$macros$call(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36493 = arguments.length;
var i__4737__auto___36494 = (0);
while(true){
if((i__4737__auto___36494 < len__4736__auto___36493)){
args__4742__auto__.push((arguments[i__4737__auto___36494]));

var G__36495 = (i__4737__auto___36494 + (1));
i__4737__auto___36494 = G__36495;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__36048__auto__","obj__36048__auto__",1705127516,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__36049__auto__","f__36049__auto__",1428665468,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,253,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,253,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__36048__auto__","obj__36048__auto__",1705127516,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__36049__auto__","f__36049__auto__",1428665468,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__36048__auto__","obj__36048__auto__",1705127516,null),null,(1),null)),args], 0)))),null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.call.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(applied_science.js_interop$macros.call.cljs$lang$applyTo = (function (seq36050){
var G__36051 = cljs.core.first(seq36050);
var seq36050__$1 = cljs.core.next(seq36050);
var G__36052 = cljs.core.first(seq36050__$1);
var seq36050__$2 = cljs.core.next(seq36050__$1);
var G__36053 = cljs.core.first(seq36050__$2);
var seq36050__$3 = cljs.core.next(seq36050__$2);
var G__36054 = cljs.core.first(seq36050__$3);
var seq36050__$4 = cljs.core.next(seq36050__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36051,G__36052,G__36053,G__36054,seq36050__$4);
}));

return null;
})()
;
(applied_science.js_interop$macros.call.cljs$lang$macro = true);

var ret__4785__auto___36502 = (function (){
applied_science.js_interop$macros.call_in = (function applied_science$js_interop$macros$call_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36503 = arguments.length;
var i__4737__auto___36504 = (0);
while(true){
if((i__4737__auto___36504 < len__4736__auto___36503)){
args__4742__auto__.push((arguments[i__4737__auto___36504]));

var G__36507 = (i__4737__auto___36504 + (1));
i__4737__auto___36504 = G__36507;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"parent__36084__auto__","parent__36084__auto__",1033585617,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.pop(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__36085__auto__","f__36085__auto__",-1419820006,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,259,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,259,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__36084__auto__","parent__36084__auto__",1033585617,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.peek(ks),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__36085__auto__","f__36085__auto__",-1419820006,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__36084__auto__","parent__36084__auto__",1033585617,null),null,(1),null)),args], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","apply-in*","applied-science.js-interop.impl/apply-in*",962865774,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),args))),null,(1),null))], 0))));
}
}));

(applied_science.js_interop$macros.call_in.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(applied_science.js_interop$macros.call_in.cljs$lang$applyTo = (function (seq36090){
var G__36091 = cljs.core.first(seq36090);
var seq36090__$1 = cljs.core.next(seq36090);
var G__36092 = cljs.core.first(seq36090__$1);
var seq36090__$2 = cljs.core.next(seq36090__$1);
var G__36093 = cljs.core.first(seq36090__$2);
var seq36090__$3 = cljs.core.next(seq36090__$2);
var G__36094 = cljs.core.first(seq36090__$3);
var seq36090__$4 = cljs.core.next(seq36090__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36091,G__36092,G__36093,G__36094,seq36090__$4);
}));

return null;
})()
;
(applied_science.js_interop$macros.call_in.cljs$lang$macro = true);

var ret__4785__auto___36512 = applied_science.js_interop$macros.apply = (function applied_science$js_interop$macros$apply(_AMPERSAND_form,_AMPERSAND_env,obj,k,arg_array){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"obj__36105__auto__","obj__36105__auto__",-700491769,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__36106__auto__","f__36106__auto__",-1311519466,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,265,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,22,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,265,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__36105__auto__","obj__36105__auto__",-700491769,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__36106__auto__","f__36106__auto__",-1311519466,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"obj__36105__auto__","obj__36105__auto__",-700491769,null),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(applied_science.js_interop$macros.apply.cljs$lang$macro = true);

var ret__4785__auto___36513 = applied_science.js_interop$macros.apply_in = (function applied_science$js_interop$macros$apply_in(_AMPERSAND_form,_AMPERSAND_env,obj,ks,arg_array){
if(cljs.core.vector_QMARK_(ks)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,applied_science.js_interop$macros._STAR_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"parent__36115__auto__","parent__36115__auto__",-478136738,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get-in","applied-science.js-interop/!get-in",272015301,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.pop(ks),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol(null,"f__36116__auto__","f__36116__auto__",-2109325069,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"applied_science/js_interop$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,271,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,24,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,271,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,26,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","function","applied-science.js-interop/function",-1056574773,null),null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!get","applied-science.js-interop/!get",-799951685,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__36115__auto__","parent__36115__auto__",-478136738,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.peek(ks),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__36116__auto__","f__36116__auto__",-2109325069,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"parent__36115__auto__","parent__36115__auto__",-478136738,null),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop.impl","apply-in*","applied-science.js-interop.impl/apply-in*",962865774,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,applied_science.js_interop$macros.wrap_keys(ks),null,(1),null)),(new cljs.core.List(null,arg_array,null,(1),null))], 0))));
}
});
(applied_science.js_interop$macros.apply_in.cljs$lang$macro = true);

applied_science.js_interop$macros.literal_obj = (function applied_science$js_interop$macros$literal_obj(keyvals){
var keyvals_str = ["({",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36128){
var vec__36129 = p__36128;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36129,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36129,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(((applied_science.js_interop$macros.dot_sym_QMARK_(k))?cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(applied_science.js_interop$macros.dot_name(k)):["\"",cljs.core.name(k),"\""].join(''))),":~{}"].join('');
}),keyvals)),"})"].join('');
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),keyvals_str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,keyvals)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__4785__auto___36525 = (function (){
applied_science.js_interop$macros.obj = (function applied_science$js_interop$macros$obj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36526 = arguments.length;
var i__4737__auto___36527 = (0);
while(true){
if((i__4737__auto___36527 < len__4736__auto___36526)){
args__4742__auto__.push((arguments[i__4737__auto___36527]));

var G__36529 = (i__4737__auto___36527 + (1));
i__4737__auto___36527 = G__36529;
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
if(cljs.core.every_QMARK_((function (p1__36132_SHARP_){
return (((p1__36132_SHARP_ instanceof cljs.core.Keyword)) || (typeof p1__36132_SHARP_ === 'string') || (applied_science.js_interop$macros.dot_sym_QMARK_(p1__36132_SHARP_)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,kvs))){
return applied_science.js_interop$macros.literal_obj(kvs);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,applied_science.js_interop$macros.empty_obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__4529__auto__ = (function applied_science$js_interop$macros$iter__36141(s__36142){
return (new cljs.core.LazySeq(null,(function (){
var s__36142__$1 = s__36142;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36142__$1);
if(temp__5735__auto__){
var s__36142__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36142__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__36142__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__36144 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__36143 = (0);
while(true){
if((i__36143 < size__4528__auto__)){
var vec__36145 = cljs.core._nth(c__4527__auto__,i__36143);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36145,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36145,(1),null);
cljs.core.chunk_append(b__36144,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))));

var G__36535 = (i__36143 + (1));
i__36143 = G__36535;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36144),applied_science$js_interop$macros$iter__36141(cljs.core.chunk_rest(s__36142__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36144),null);
}
} else {
var vec__36148 = cljs.core.first(s__36142__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36148,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36148,(1),null);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("applied-science.js-interop","!set","applied-science.js-interop/!set",-1893983002,null),null,(1),null)),(new cljs.core.List(null,k,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0)))),applied_science$js_interop$macros$iter__36141(cljs.core.rest(s__36142__$2)));
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
(applied_science.js_interop$macros.obj.cljs$lang$applyTo = (function (seq36133){
var G__36134 = cljs.core.first(seq36133);
var seq36133__$1 = cljs.core.next(seq36133);
var G__36135 = cljs.core.first(seq36133__$1);
var seq36133__$2 = cljs.core.next(seq36133__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36134,G__36135,seq36133__$2);
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
var G__36170 = arguments.length;
switch (G__36170) {
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

(applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p__36173,x){
var map__36174 = p__36173;
var map__36174__$1 = (((((!((map__36174 == null))))?(((((map__36174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36174):map__36174);
var opts = map__36174__$1;
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36174__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332),cljs.core.identity);
if(cljs.core.map_QMARK_(x)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("applied-science.js-interop","obj","applied-science.js-interop/obj",-1164656258,null),cljs.core.reduce_kv((function (p1__36166_SHARP_,p2__36167_SHARP_,p3__36168_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(p1__36166_SHARP_,(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(p2__36167_SHARP_) : keyfn.call(null,p2__36167_SHARP_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$2(opts,p3__36168_SHARP_)], 0));
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

var ret__4785__auto___36540 = /**
 * Recursively converts literal Clojure maps/vectors into JavaScript object/array expressions
 * (using j/obj and cljs.core/array)
 */
applied_science.js_interop$macros.lit = (function applied_science$js_interop$macros$lit(_AMPERSAND_form,_AMPERSAND_env,form){
return applied_science.js_interop$macros.lit_STAR_.cljs$core$IFn$_invoke$arity$1(form);
});
(applied_science.js_interop$macros.lit.cljs$lang$macro = true);

var ret__4785__auto___36541 = (function (){
/**
 * `let` with destructuring that supports js property and array access.
 * Use ^:js metadata on the binding form to invoke. Eg/
 * 
 * (let [^:js {:keys [a]} obj] …)
 */
applied_science.js_interop$macros.let$ = (function applied_science$js_interop$macros$let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36542 = arguments.length;
var i__4737__auto___36543 = (0);
while(true){
if((i__4737__auto___36543 < len__4736__auto___36542)){
args__4742__auto__.push((arguments[i__4737__auto___36543]));

var G__36544 = (i__4737__auto___36543 + (1));
i__4737__auto___36543 = G__36544;
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
(applied_science.js_interop$macros.let$.cljs$lang$applyTo = (function (seq36184){
var G__36185 = cljs.core.first(seq36184);
var seq36184__$1 = cljs.core.next(seq36184);
var G__36186 = cljs.core.first(seq36184__$1);
var seq36184__$2 = cljs.core.next(seq36184__$1);
var G__36187 = cljs.core.first(seq36184__$2);
var seq36184__$3 = cljs.core.next(seq36184__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36185,G__36186,G__36187,seq36184__$3);
}));

return null;
})()
;
(applied_science.js_interop$macros.let$.cljs$lang$macro = true);

var ret__4785__auto___36545 = (function (){
/**
 * `fn` with argument destructuring that supports js property and array access.
 * Use ^:js metadata on binding forms to invoke. Eg/
 * 
 * (fn [^:js {:keys [a]}] …)
 */
applied_science.js_interop$macros.fn = (function applied_science$js_interop$macros$fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36546 = arguments.length;
var i__4737__auto___36547 = (0);
while(true){
if((i__4737__auto___36547 < len__4736__auto___36546)){
args__4742__auto__.push((arguments[i__4737__auto___36547]));

var G__36551 = (i__4737__auto___36547 + (1));
i__4737__auto___36547 = G__36551;
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
(applied_science.js_interop$macros.fn.cljs$lang$applyTo = (function (seq36201){
var G__36202 = cljs.core.first(seq36201);
var seq36201__$1 = cljs.core.next(seq36201);
var G__36203 = cljs.core.first(seq36201__$1);
var seq36201__$2 = cljs.core.next(seq36201__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36202,G__36203,seq36201__$2);
}));

return null;
})()
;
(applied_science.js_interop$macros.fn.cljs$lang$macro = true);

var ret__4785__auto___36556 = (function (){
/**
 * `defn` with argument destructuring that supports js property and array access.
 * Use ^:js metadata on binding forms to invoke.
 */
applied_science.js_interop$macros.defn = (function applied_science$js_interop$macros$defn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36557 = arguments.length;
var i__4737__auto___36558 = (0);
while(true){
if((i__4737__auto___36558 < len__4736__auto___36557)){
args__4742__auto__.push((arguments[i__4737__auto___36558]));

var G__36559 = (i__4737__auto___36558 + (1));
i__4737__auto___36558 = G__36559;
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
(applied_science.js_interop$macros.defn.cljs$lang$applyTo = (function (seq36236){
var G__36237 = cljs.core.first(seq36236);
var seq36236__$1 = cljs.core.next(seq36236);
var G__36238 = cljs.core.first(seq36236__$1);
var seq36236__$2 = cljs.core.next(seq36236__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36237,G__36238,seq36236__$2);
}));

return null;
})()
;
(applied_science.js_interop$macros.defn.cljs$lang$macro = true);


//# sourceMappingURL=applied-science.js-interop$macros.js.map
