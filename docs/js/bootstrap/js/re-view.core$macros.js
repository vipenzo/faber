goog.provide('re_view.core$macros');
/**
 * Convert a Clojure map to javascript object using `set!`, to play well with Closure Compiler.
 *   Keys are converted to camelCase. Shallow.
 */
re_view.core$macros.js_obj_with_set_BANG_ = (function re_view$core$macros$js_obj_with_set_BANG_(m){
var temp__5735__auto__ = cljs.core.seq(m);
if(temp__5735__auto__){
var m__$1 = temp__5735__auto__;
var sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var exprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27207){
var vec__27208 = p__27207;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27208,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27208,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_view.util.camelCase(cljs.core.name(k)))].join('')),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null))], 0))));
}),m__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"js-obj","js-obj",342383250,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([exprs,(new cljs.core.List(null,sym,null,(1),null))], 0))));
} else {
return null;
}
});
/**
 * Groups methods by role in a React component.
 */
re_view.core$macros.group_methods = (function re_view$core$macros$group_methods(methods$){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc_in(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__27211 = k;
var G__27211__$1 = (((G__27211 instanceof cljs.core.Keyword))?G__27211.fqn:null);
switch (G__27211__$1) {
case "key":
case "display-name":
case "docstring":
return new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002);

break;
default:
var G__27214 = cljs.core.namespace(k);
switch (G__27214) {
case "spec":
return new cljs.core.Keyword(null,"class-keys","class-keys",106917605);

break;
case "view":
return new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896);

break;
default:
return new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647);

}

}
})(),k], null),v);
}),cljs.core.PersistentArrayMap.EMPTY,methods$),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),re_view.core$macros.js_obj_with_set_BANG_);
});
re_view.core$macros.parse_view_args = (function re_view$core$macros$parse_view_args(args){
var args__$1 = re_view.util.parse_opt_args(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.string_QMARK_,cljs.core.map_QMARK_], null),args);
var G__27216 = args__$1;
if((cljs.core.first(args__$1) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27216,(0),cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
} else {
return G__27216;
}
});
/**
 * Generate a meaningful name to identify React components while debugging
 */
re_view.core$macros.display_name = (function re_view$core$macros$display_name(ns,given_name){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(cljs.core.ns_name(ns)),/\./))),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(given_name)].join('');
});
/**
 * Wrap body in anonymous function form.
 */
re_view.core$macros.wrap_body = (function re_view$core$macros$wrap_body(name,p__27219){
var vec__27221 = p__27219;
var seq__27222 = cljs.core.seq(vec__27221);
var first__27223 = cljs.core.first(seq__27222);
var seq__27222__$1 = cljs.core.next(seq__27222);
var args = first__27223;
var body = seq__27222__$1;
if(cljs.core.vector_QMARK_(args)){
} else {
throw (new Error("Assert failed: (vector? args)"));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,args,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(body),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("re-view.hiccup.core","element","re-view.hiccup.core/element",1962189646,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last(body),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("re-view.core","wrap-props","re-view.core/wrap-props",-353464731,null),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
var ret__4785__auto___27288 = (function (){
/**
 * Define a view function.
 * 
 * Expects optional docstring and methods map, followed by
 *  the argslist and body for the render function, which should
 *  return a Hiccup vector or React element.
 */
re_view.core$macros.defview = (function re_view$core$macros$defview(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27289 = arguments.length;
var i__4737__auto___27290 = (0);
while(true){
if((i__4737__auto___27290 < len__4736__auto___27289)){
args__4742__auto__.push((arguments[i__4737__auto___27290]));

var G__27291 = (i__4737__auto___27290 + (1));
i__4737__auto___27290 = G__27291;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_view.core$macros.defview.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_view.core$macros.defview.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var vec__27228 = re_view.core$macros.parse_view_args(args);
var view_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27228,(0),null);
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27228,(1),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27228,(2),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27228,(3),null);
var _ = (((view_name instanceof cljs.core.Symbol))?null:(function(){throw (new Error("Assert failed: (symbol? view-name)"))})());
var methods$__$1 = re_view.core$macros.group_methods(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([methods$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"docstring","docstring",879233117),docstring,new cljs.core.Keyword(null,"display-name","display-name",694513143),re_view.core$macros.display_name(cljs.core._STAR_ns_STAR_,view_name),new cljs.core.Keyword("view","render","view/render",-1412767573),re_view.core$macros.wrap_body(view_name,body)], null)], 0)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"the-class__27224__auto__","the-class__27224__auto__",-196161495,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-view.core","class*","re-view.core/class*",-1122325355,null),null,(1),null)),(new cljs.core.List(null,methods$__$1,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(view_name),"Class"].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"the-class__27224__auto__","the-class__27224__auto__",-196161495,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,view_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__27231 = docstring;
if((G__27231 == null)){
return null;
} else {
return (new cljs.core.List(null,G__27231,null,(1),null));
}
})(),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-view.core","factory","re-view.core/factory",-1445032693,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"the-class__27224__auto__","the-class__27224__auto__",-196161495,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(re_view.core$macros.defview.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_view.core$macros.defview.cljs$lang$applyTo = (function (seq27225){
var G__27226 = cljs.core.first(seq27225);
var seq27225__$1 = cljs.core.next(seq27225);
var G__27227 = cljs.core.first(seq27225__$1);
var seq27225__$2 = cljs.core.next(seq27225__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27226,G__27227,seq27225__$2);
}));

return null;
})()
;
(re_view.core$macros.defview.cljs$lang$macro = true);

var ret__4785__auto___27302 = (function (){
/**
 * Returns anonymous view, given the same args as `defview`.
 */
re_view.core$macros.view = (function re_view$core$macros$view(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27303 = arguments.length;
var i__4737__auto___27306 = (0);
while(true){
if((i__4737__auto___27306 < len__4736__auto___27303)){
args__4742__auto__.push((arguments[i__4737__auto___27306]));

var G__27307 = (i__4737__auto___27306 + (1));
i__4737__auto___27306 = G__27307;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_view.core$macros.view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_view.core$macros.view.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var vec__27239 = re_view.core$macros.parse_view_args(args);
var view_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27239,(0),null);
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27239,(1),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27239,(2),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27239,(3),null);
var methods$__$1 = re_view.core$macros.group_methods(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([methods$,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"docstring","docstring",879233117),docstring,new cljs.core.Keyword(null,"display-name","display-name",694513143),re_view.core$macros.display_name(cljs.core._STAR_ns_STAR_,view_name),new cljs.core.Keyword("view","render","view/render",-1412767573),re_view.core$macros.wrap_body(view_name,body)], null)], 0)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("re-view.core","view*","re-view.core/view*",-1696367698,null),null,(1),null)),(new cljs.core.List(null,methods$__$1,null,(1),null)))));
}));

(re_view.core$macros.view.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_view.core$macros.view.cljs$lang$applyTo = (function (seq27235){
var G__27236 = cljs.core.first(seq27235);
var seq27235__$1 = cljs.core.next(seq27235);
var G__27237 = cljs.core.first(seq27235__$1);
var seq27235__$2 = cljs.core.next(seq27235__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27236,G__27237,seq27235__$2);
}));

return null;
})()
;
(re_view.core$macros.view.cljs$lang$macro = true);

var ret__4785__auto___27308 = (function (){
/**
 * Defines a stateless view function
 */
re_view.core$macros.defn = (function re_view$core$macros$defn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27309 = arguments.length;
var i__4737__auto___27310 = (0);
while(true){
if((i__4737__auto___27310 < len__4736__auto___27309)){
args__4742__auto__.push((arguments[i__4737__auto___27310]));

var G__27311 = (i__4737__auto___27310 + (1));
i__4737__auto___27310 = G__27311;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return re_view.core$macros.defn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(re_view.core$macros.defn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
var vec__27256 = re_view.core$macros.parse_view_args(args);
var view_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27256,(0),null);
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27256,(1),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27256,(2),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27256,(3),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,view_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(docstring)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [docstring], null):cljs.core.PersistentVector.EMPTY),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__27249__auto__","args__27249__auto__",-60630066,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,re_view.core$macros.wrap_body(view_name,body),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__27249__auto__","args__27249__auto__",-60630066,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__27249__auto__","args__27249__auto__",-60630066,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__27249__auto__","args__27249__auto__",-60630066,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(re_view.core$macros.defn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_view.core$macros.defn.cljs$lang$applyTo = (function (seq27250){
var G__27251 = cljs.core.first(seq27250);
var seq27250__$1 = cljs.core.next(seq27250);
var G__27252 = cljs.core.first(seq27250__$1);
var seq27250__$2 = cljs.core.next(seq27250__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27251,G__27252,seq27250__$2);
}));

return null;
})()
;
(re_view.core$macros.defn.cljs$lang$macro = true);

var ret__4785__auto___27312 = (function (){
re_view.core$macros.extend_view = (function re_view$core$macros$extend_view(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27313 = arguments.length;
var i__4737__auto___27314 = (0);
while(true){
if((i__4737__auto___27314 < len__4736__auto___27313)){
args__4742__auto__.push((arguments[i__4737__auto___27314]));

var G__27315 = (i__4737__auto___27314 + (1));
i__4737__auto___27314 = G__27315;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return re_view.core$macros.extend_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(re_view.core$macros.extend_view.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,view,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"prototype__27268__auto__","prototype__27268__auto__",1592640482,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null),null,(1),null)),(new cljs.core.List(null,view,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"re$view$base",null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prototype__27268__auto__","prototype__27268__auto__",1592640482,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))),null,(1),null))], 0))));
}));

(re_view.core$macros.extend_view.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(re_view.core$macros.extend_view.cljs$lang$applyTo = (function (seq27271){
var G__27272 = cljs.core.first(seq27271);
var seq27271__$1 = cljs.core.next(seq27271);
var G__27273 = cljs.core.first(seq27271__$1);
var seq27271__$2 = cljs.core.next(seq27271__$1);
var G__27274 = cljs.core.first(seq27271__$2);
var seq27271__$3 = cljs.core.next(seq27271__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27272,G__27273,G__27274,seq27271__$3);
}));

return null;
})()
;
(re_view.core$macros.extend_view.cljs$lang$macro = true);


//# sourceMappingURL=re-view.core$macros.js.map
