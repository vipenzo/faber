goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__57445){
var map__57446 = p__57445;
var map__57446__$1 = (((((!((map__57446 == null))))?(((((map__57446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57446):map__57446);
var m = map__57446__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57446__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57446__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__57448_57549 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57449_57550 = null;
var count__57450_57551 = (0);
var i__57451_57552 = (0);
while(true){
if((i__57451_57552 < count__57450_57551)){
var f_57553 = chunk__57449_57550.cljs$core$IIndexed$_nth$arity$2(null,i__57451_57552);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57553], 0));


var G__57554 = seq__57448_57549;
var G__57555 = chunk__57449_57550;
var G__57556 = count__57450_57551;
var G__57557 = (i__57451_57552 + (1));
seq__57448_57549 = G__57554;
chunk__57449_57550 = G__57555;
count__57450_57551 = G__57556;
i__57451_57552 = G__57557;
continue;
} else {
var temp__5735__auto___57558 = cljs.core.seq(seq__57448_57549);
if(temp__5735__auto___57558){
var seq__57448_57559__$1 = temp__5735__auto___57558;
if(cljs.core.chunked_seq_QMARK_(seq__57448_57559__$1)){
var c__4556__auto___57560 = cljs.core.chunk_first(seq__57448_57559__$1);
var G__57561 = cljs.core.chunk_rest(seq__57448_57559__$1);
var G__57562 = c__4556__auto___57560;
var G__57563 = cljs.core.count(c__4556__auto___57560);
var G__57564 = (0);
seq__57448_57549 = G__57561;
chunk__57449_57550 = G__57562;
count__57450_57551 = G__57563;
i__57451_57552 = G__57564;
continue;
} else {
var f_57565 = cljs.core.first(seq__57448_57559__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_57565], 0));


var G__57566 = cljs.core.next(seq__57448_57559__$1);
var G__57567 = null;
var G__57568 = (0);
var G__57569 = (0);
seq__57448_57549 = G__57566;
chunk__57449_57550 = G__57567;
count__57450_57551 = G__57568;
i__57451_57552 = G__57569;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_57570 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_57570], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_57570)))?cljs.core.second(arglists_57570):arglists_57570)], 0));
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
var seq__57452_57571 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__57453_57572 = null;
var count__57454_57573 = (0);
var i__57455_57574 = (0);
while(true){
if((i__57455_57574 < count__57454_57573)){
var vec__57466_57575 = chunk__57453_57572.cljs$core$IIndexed$_nth$arity$2(null,i__57455_57574);
var name_57576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57466_57575,(0),null);
var map__57469_57577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57466_57575,(1),null);
var map__57469_57578__$1 = (((((!((map__57469_57577 == null))))?(((((map__57469_57577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57469_57577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57469_57577):map__57469_57577);
var doc_57579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57469_57578__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57469_57578__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57576], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57580], 0));

if(cljs.core.truth_(doc_57579)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57579], 0));
} else {
}


var G__57581 = seq__57452_57571;
var G__57582 = chunk__57453_57572;
var G__57583 = count__57454_57573;
var G__57584 = (i__57455_57574 + (1));
seq__57452_57571 = G__57581;
chunk__57453_57572 = G__57582;
count__57454_57573 = G__57583;
i__57455_57574 = G__57584;
continue;
} else {
var temp__5735__auto___57585 = cljs.core.seq(seq__57452_57571);
if(temp__5735__auto___57585){
var seq__57452_57586__$1 = temp__5735__auto___57585;
if(cljs.core.chunked_seq_QMARK_(seq__57452_57586__$1)){
var c__4556__auto___57587 = cljs.core.chunk_first(seq__57452_57586__$1);
var G__57588 = cljs.core.chunk_rest(seq__57452_57586__$1);
var G__57589 = c__4556__auto___57587;
var G__57590 = cljs.core.count(c__4556__auto___57587);
var G__57591 = (0);
seq__57452_57571 = G__57588;
chunk__57453_57572 = G__57589;
count__57454_57573 = G__57590;
i__57455_57574 = G__57591;
continue;
} else {
var vec__57471_57592 = cljs.core.first(seq__57452_57586__$1);
var name_57593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57471_57592,(0),null);
var map__57474_57594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57471_57592,(1),null);
var map__57474_57595__$1 = (((((!((map__57474_57594 == null))))?(((((map__57474_57594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57474_57594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57474_57594):map__57474_57594);
var doc_57596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57474_57595__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_57597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57474_57595__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_57593], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_57597], 0));

if(cljs.core.truth_(doc_57596)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_57596], 0));
} else {
}


var G__57598 = cljs.core.next(seq__57452_57586__$1);
var G__57599 = null;
var G__57600 = (0);
var G__57601 = (0);
seq__57452_57571 = G__57598;
chunk__57453_57572 = G__57599;
count__57454_57573 = G__57600;
i__57455_57574 = G__57601;
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

var seq__57476 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__57477 = null;
var count__57478 = (0);
var i__57479 = (0);
while(true){
if((i__57479 < count__57478)){
var role = chunk__57477.cljs$core$IIndexed$_nth$arity$2(null,i__57479);
var temp__5735__auto___57602__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57602__$1)){
var spec_57603 = temp__5735__auto___57602__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57603)], 0));
} else {
}


var G__57604 = seq__57476;
var G__57605 = chunk__57477;
var G__57606 = count__57478;
var G__57607 = (i__57479 + (1));
seq__57476 = G__57604;
chunk__57477 = G__57605;
count__57478 = G__57606;
i__57479 = G__57607;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__57476);
if(temp__5735__auto____$1){
var seq__57476__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__57476__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__57476__$1);
var G__57608 = cljs.core.chunk_rest(seq__57476__$1);
var G__57609 = c__4556__auto__;
var G__57610 = cljs.core.count(c__4556__auto__);
var G__57611 = (0);
seq__57476 = G__57608;
chunk__57477 = G__57609;
count__57478 = G__57610;
i__57479 = G__57611;
continue;
} else {
var role = cljs.core.first(seq__57476__$1);
var temp__5735__auto___57612__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___57612__$2)){
var spec_57613 = temp__5735__auto___57612__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_57613)], 0));
} else {
}


var G__57614 = cljs.core.next(seq__57476__$1);
var G__57615 = null;
var G__57616 = (0);
var G__57617 = (0);
seq__57476 = G__57614;
chunk__57477 = G__57615;
count__57478 = G__57616;
i__57479 = G__57617;
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
var G__57618 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__57619 = cljs.core.ex_cause(t);
via = G__57618;
t = G__57619;
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
var map__57482 = datafied_throwable;
var map__57482__$1 = (((((!((map__57482 == null))))?(((((map__57482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57482):map__57482);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57482__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__57483 = cljs.core.last(via);
var map__57483__$1 = (((((!((map__57483 == null))))?(((((map__57483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57483):map__57483);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57483__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57483__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57483__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__57484 = data;
var map__57484__$1 = (((((!((map__57484 == null))))?(((((map__57484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57484):map__57484);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57484__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57484__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57484__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__57485 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__57485__$1 = (((((!((map__57485 == null))))?(((((map__57485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57485):map__57485);
var top_data = map__57485__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57485__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__57490 = phase;
var G__57490__$1 = (((G__57490 instanceof cljs.core.Keyword))?G__57490.fqn:null);
switch (G__57490__$1) {
case "read-source":
var map__57491 = data;
var map__57491__$1 = (((((!((map__57491 == null))))?(((((map__57491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57491):map__57491);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57491__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57491__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__57493 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__57493__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57493,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__57493);
var G__57493__$2 = (cljs.core.truth_((function (){var fexpr__57494 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57494.cljs$core$IFn$_invoke$arity$1 ? fexpr__57494.cljs$core$IFn$_invoke$arity$1(source) : fexpr__57494.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57493__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__57493__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57493__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__57493__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__57495 = top_data;
var G__57495__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57495,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__57495);
var G__57495__$2 = (cljs.core.truth_((function (){var fexpr__57496 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57496.cljs$core$IFn$_invoke$arity$1 ? fexpr__57496.cljs$core$IFn$_invoke$arity$1(source) : fexpr__57496.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__57495__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__57495__$1);
var G__57495__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57495__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__57495__$2);
var G__57495__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57495__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__57495__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57495__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__57495__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__57497 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57497,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57497,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57497,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57497,(3),null);
var G__57500 = top_data;
var G__57500__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57500,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__57500);
var G__57500__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57500__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__57500__$1);
var G__57500__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57500__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__57500__$2);
var G__57500__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57500__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__57500__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57500__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__57500__$4;
}

break;
case "execution":
var vec__57501 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57501,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57501,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57501,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57501,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__57481_SHARP_){
var or__4126__auto__ = (p1__57481_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__57505 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__57505.cljs$core$IFn$_invoke$arity$1 ? fexpr__57505.cljs$core$IFn$_invoke$arity$1(p1__57481_SHARP_) : fexpr__57505.call(null,p1__57481_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__57506 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__57506__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57506,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__57506);
var G__57506__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57506__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__57506__$1);
var G__57506__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57506__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__57506__$2);
var G__57506__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57506__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__57506__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__57506__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__57506__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57490__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__57509){
var map__57510 = p__57509;
var map__57510__$1 = (((((!((map__57510 == null))))?(((((map__57510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57510):map__57510);
var triage_data = map__57510__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57510__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57510__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57510__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57510__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57510__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57510__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57510__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57510__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__57512 = phase;
var G__57512__$1 = (((G__57512 instanceof cljs.core.Keyword))?G__57512.fqn:null);
switch (G__57512__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__57513 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__57514 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57515 = loc;
var G__57516 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57517_57622 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57518_57623 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57519_57624 = true;
var _STAR_print_fn_STAR__temp_val__57520_57625 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57519_57624);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57520_57625);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57507_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__57507_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57518_57623);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57517_57622);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57513,G__57514,G__57515,G__57516) : format.call(null,G__57513,G__57514,G__57515,G__57516));

break;
case "macroexpansion":
var G__57521 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__57522 = cause_type;
var G__57523 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57524 = loc;
var G__57525 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57521,G__57522,G__57523,G__57524,G__57525) : format.call(null,G__57521,G__57522,G__57523,G__57524,G__57525));

break;
case "compile-syntax-check":
var G__57526 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__57527 = cause_type;
var G__57528 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57529 = loc;
var G__57530 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57526,G__57527,G__57528,G__57529,G__57530) : format.call(null,G__57526,G__57527,G__57528,G__57529,G__57530));

break;
case "compilation":
var G__57531 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__57532 = cause_type;
var G__57533 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57534 = loc;
var G__57535 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57531,G__57532,G__57533,G__57534,G__57535) : format.call(null,G__57531,G__57532,G__57533,G__57534,G__57535));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__57536 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__57537 = symbol;
var G__57538 = loc;
var G__57539 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__57540_57626 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__57541_57627 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__57542_57628 = true;
var _STAR_print_fn_STAR__temp_val__57543_57629 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__57542_57628);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__57543_57629);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57508_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__57508_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__57541_57627);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__57540_57626);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__57536,G__57537,G__57538,G__57539) : format.call(null,G__57536,G__57537,G__57538,G__57539));
} else {
var G__57544 = "Execution error%s at %s(%s).\n%s\n";
var G__57545 = cause_type;
var G__57546 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__57547 = loc;
var G__57548 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__57544,G__57545,G__57546,G__57547,G__57548) : format.call(null,G__57544,G__57545,G__57546,G__57547,G__57548));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57512__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
