goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__54727){
var map__54728 = p__54727;
var map__54728__$1 = (((((!((map__54728 == null))))?(((((map__54728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54728):map__54728);
var m = map__54728__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54728__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54728__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54730_54901 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54731_54902 = null;
var count__54732_54903 = (0);
var i__54733_54904 = (0);
while(true){
if((i__54733_54904 < count__54732_54903)){
var f_54905 = chunk__54731_54902.cljs$core$IIndexed$_nth$arity$2(null,i__54733_54904);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54905], 0));


var G__54906 = seq__54730_54901;
var G__54907 = chunk__54731_54902;
var G__54908 = count__54732_54903;
var G__54909 = (i__54733_54904 + (1));
seq__54730_54901 = G__54906;
chunk__54731_54902 = G__54907;
count__54732_54903 = G__54908;
i__54733_54904 = G__54909;
continue;
} else {
var temp__5735__auto___54910 = cljs.core.seq(seq__54730_54901);
if(temp__5735__auto___54910){
var seq__54730_54911__$1 = temp__5735__auto___54910;
if(cljs.core.chunked_seq_QMARK_(seq__54730_54911__$1)){
var c__4556__auto___54912 = cljs.core.chunk_first(seq__54730_54911__$1);
var G__54913 = cljs.core.chunk_rest(seq__54730_54911__$1);
var G__54914 = c__4556__auto___54912;
var G__54915 = cljs.core.count(c__4556__auto___54912);
var G__54916 = (0);
seq__54730_54901 = G__54913;
chunk__54731_54902 = G__54914;
count__54732_54903 = G__54915;
i__54733_54904 = G__54916;
continue;
} else {
var f_54917 = cljs.core.first(seq__54730_54911__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_54917], 0));


var G__54918 = cljs.core.next(seq__54730_54911__$1);
var G__54919 = null;
var G__54920 = (0);
var G__54921 = (0);
seq__54730_54901 = G__54918;
chunk__54731_54902 = G__54919;
count__54732_54903 = G__54920;
i__54733_54904 = G__54921;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_54922 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_54922], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_54922)))?cljs.core.second(arglists_54922):arglists_54922)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__54734_54928 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__54735_54929 = null;
var count__54736_54930 = (0);
var i__54737_54931 = (0);
while(true){
if((i__54737_54931 < count__54736_54930)){
var vec__54752_54932 = chunk__54735_54929.cljs$core$IIndexed$_nth$arity$2(null,i__54737_54931);
var name_54933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54752_54932,(0),null);
var map__54755_54934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54752_54932,(1),null);
var map__54755_54935__$1 = (((((!((map__54755_54934 == null))))?(((((map__54755_54934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54755_54934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54755_54934):map__54755_54934);
var doc_54936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54755_54935__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54755_54935__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54933], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54937], 0));

if(cljs.core.truth_(doc_54936)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54936], 0));
} else {
}


var G__54941 = seq__54734_54928;
var G__54942 = chunk__54735_54929;
var G__54943 = count__54736_54930;
var G__54944 = (i__54737_54931 + (1));
seq__54734_54928 = G__54941;
chunk__54735_54929 = G__54942;
count__54736_54930 = G__54943;
i__54737_54931 = G__54944;
continue;
} else {
var temp__5735__auto___54945 = cljs.core.seq(seq__54734_54928);
if(temp__5735__auto___54945){
var seq__54734_54946__$1 = temp__5735__auto___54945;
if(cljs.core.chunked_seq_QMARK_(seq__54734_54946__$1)){
var c__4556__auto___54947 = cljs.core.chunk_first(seq__54734_54946__$1);
var G__54948 = cljs.core.chunk_rest(seq__54734_54946__$1);
var G__54949 = c__4556__auto___54947;
var G__54950 = cljs.core.count(c__4556__auto___54947);
var G__54951 = (0);
seq__54734_54928 = G__54948;
chunk__54735_54929 = G__54949;
count__54736_54930 = G__54950;
i__54737_54931 = G__54951;
continue;
} else {
var vec__54758_54952 = cljs.core.first(seq__54734_54946__$1);
var name_54953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54758_54952,(0),null);
var map__54761_54954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54758_54952,(1),null);
var map__54761_54955__$1 = (((((!((map__54761_54954 == null))))?(((((map__54761_54954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54761_54954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54761_54954):map__54761_54954);
var doc_54956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54761_54955__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_54957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54761_54955__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_54953], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_54957], 0));

if(cljs.core.truth_(doc_54956)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_54956], 0));
} else {
}


var G__54961 = cljs.core.next(seq__54734_54946__$1);
var G__54962 = null;
var G__54963 = (0);
var G__54964 = (0);
seq__54734_54928 = G__54961;
chunk__54735_54929 = G__54962;
count__54736_54930 = G__54963;
i__54737_54931 = G__54964;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__54769 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__54770 = null;
var count__54771 = (0);
var i__54772 = (0);
while(true){
if((i__54772 < count__54771)){
var role = chunk__54770.cljs$core$IIndexed$_nth$arity$2(null,i__54772);
var temp__5735__auto___54965__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54965__$1)){
var spec_54966 = temp__5735__auto___54965__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54966)], 0));
} else {
}


var G__54967 = seq__54769;
var G__54968 = chunk__54770;
var G__54969 = count__54771;
var G__54970 = (i__54772 + (1));
seq__54769 = G__54967;
chunk__54770 = G__54968;
count__54771 = G__54969;
i__54772 = G__54970;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__54769);
if(temp__5735__auto____$1){
var seq__54769__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__54769__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54769__$1);
var G__54971 = cljs.core.chunk_rest(seq__54769__$1);
var G__54972 = c__4556__auto__;
var G__54973 = cljs.core.count(c__4556__auto__);
var G__54974 = (0);
seq__54769 = G__54971;
chunk__54770 = G__54972;
count__54771 = G__54973;
i__54772 = G__54974;
continue;
} else {
var role = cljs.core.first(seq__54769__$1);
var temp__5735__auto___54975__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___54975__$2)){
var spec_54976 = temp__5735__auto___54975__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_54976)], 0));
} else {
}


var G__54977 = cljs.core.next(seq__54769__$1);
var G__54978 = null;
var G__54979 = (0);
var G__54980 = (0);
seq__54769 = G__54977;
chunk__54770 = G__54978;
count__54771 = G__54979;
i__54772 = G__54980;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__54981 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__54982 = cljs.core.ex_cause(t);
via = G__54981;
t = G__54982;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__54808 = datafied_throwable;
var map__54808__$1 = (((((!((map__54808 == null))))?(((((map__54808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54808):map__54808);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54808__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54808__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54808__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__54809 = cljs.core.last(via);
var map__54809__$1 = (((((!((map__54809 == null))))?(((((map__54809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54809):map__54809);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54809__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54809__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54809__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__54810 = data;
var map__54810__$1 = (((((!((map__54810 == null))))?(((((map__54810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54810):map__54810);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54810__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54810__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54810__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__54811 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__54811__$1 = (((((!((map__54811 == null))))?(((((map__54811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54811):map__54811);
var top_data = map__54811__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54811__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__54821 = phase;
var G__54821__$1 = (((G__54821 instanceof cljs.core.Keyword))?G__54821.fqn:null);
switch (G__54821__$1) {
case "read-source":
var map__54822 = data;
var map__54822__$1 = (((((!((map__54822 == null))))?(((((map__54822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54822):map__54822);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54822__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54822__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__54824 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__54824__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54824,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54824);
var G__54824__$2 = (cljs.core.truth_((function (){var fexpr__54825 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54825.cljs$core$IFn$_invoke$arity$1 ? fexpr__54825.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54825.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54824__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54824__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54824__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54824__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__54826 = top_data;
var G__54826__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54826,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__54826);
var G__54826__$2 = (cljs.core.truth_((function (){var fexpr__54827 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54827.cljs$core$IFn$_invoke$arity$1 ? fexpr__54827.cljs$core$IFn$_invoke$arity$1(source) : fexpr__54827.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54826__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__54826__$1);
var G__54826__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54826__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54826__$2);
var G__54826__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54826__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54826__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54826__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54826__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__54828 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54828,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54828,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54828,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54828,(3),null);
var G__54831 = top_data;
var G__54831__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54831,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__54831);
var G__54831__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54831__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__54831__$1);
var G__54831__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54831__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__54831__$2);
var G__54831__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54831__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__54831__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54831__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__54831__$4;
}

break;
case "execution":
var vec__54835 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54835,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54835,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54835,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54835,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54807_SHARP_){
var or__4126__auto__ = (p1__54807_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__54839 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__54839.cljs$core$IFn$_invoke$arity$1 ? fexpr__54839.cljs$core$IFn$_invoke$arity$1(p1__54807_SHARP_) : fexpr__54839.call(null,p1__54807_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__54840 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__54840__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54840,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__54840);
var G__54840__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54840__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__54840__$1);
var G__54840__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54840__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__54840__$2);
var G__54840__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54840__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__54840__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54840__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__54840__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54821__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__54843){
var map__54844 = p__54843;
var map__54844__$1 = (((((!((map__54844 == null))))?(((((map__54844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54844):map__54844);
var triage_data = map__54844__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54844__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54844__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54844__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54844__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54844__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54844__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54844__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54844__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__54846 = phase;
var G__54846__$1 = (((G__54846 instanceof cljs.core.Keyword))?G__54846.fqn:null);
switch (G__54846__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__54848 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__54849 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54850 = loc;
var G__54851 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54855_54992 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54856_54993 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54857_54994 = true;
var _STAR_print_fn_STAR__temp_val__54858_54995 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54857_54994);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54858_54995);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54841_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54841_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54856_54993);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54855_54992);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54848,G__54849,G__54850,G__54851) : format.call(null,G__54848,G__54849,G__54850,G__54851));

break;
case "macroexpansion":
var G__54860 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__54861 = cause_type;
var G__54862 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54863 = loc;
var G__54864 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54860,G__54861,G__54862,G__54863,G__54864) : format.call(null,G__54860,G__54861,G__54862,G__54863,G__54864));

break;
case "compile-syntax-check":
var G__54865 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__54866 = cause_type;
var G__54867 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54868 = loc;
var G__54869 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54865,G__54866,G__54867,G__54868,G__54869) : format.call(null,G__54865,G__54866,G__54867,G__54868,G__54869));

break;
case "compilation":
var G__54870 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__54871 = cause_type;
var G__54872 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54873 = loc;
var G__54874 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54870,G__54871,G__54872,G__54873,G__54874) : format.call(null,G__54870,G__54871,G__54872,G__54873,G__54874));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__54875 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__54876 = symbol;
var G__54877 = loc;
var G__54878 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__54882_54997 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__54883_54998 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__54884_54999 = true;
var _STAR_print_fn_STAR__temp_val__54885_55000 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__54884_54999);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54885_55000);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54842_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__54842_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54883_54998);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__54882_54997);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__54875,G__54876,G__54877,G__54878) : format.call(null,G__54875,G__54876,G__54877,G__54878));
} else {
var G__54888 = "Execution error%s at %s(%s).\n%s\n";
var G__54889 = cause_type;
var G__54890 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__54891 = loc;
var G__54892 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__54888,G__54889,G__54890,G__54891,G__54892) : format.call(null,G__54888,G__54889,G__54890,G__54891,G__54892));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54846__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
