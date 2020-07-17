goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56439){
var map__56440 = p__56439;
var map__56440__$1 = (((((!((map__56440 == null))))?(((((map__56440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56440):map__56440);
var m = map__56440__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56440__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56440__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__56447_56579 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56448_56580 = null;
var count__56449_56581 = (0);
var i__56450_56582 = (0);
while(true){
if((i__56450_56582 < count__56449_56581)){
var f_56583 = chunk__56448_56580.cljs$core$IIndexed$_nth$arity$2(null,i__56450_56582);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56583], 0));


var G__56584 = seq__56447_56579;
var G__56585 = chunk__56448_56580;
var G__56586 = count__56449_56581;
var G__56587 = (i__56450_56582 + (1));
seq__56447_56579 = G__56584;
chunk__56448_56580 = G__56585;
count__56449_56581 = G__56586;
i__56450_56582 = G__56587;
continue;
} else {
var temp__5735__auto___56588 = cljs.core.seq(seq__56447_56579);
if(temp__5735__auto___56588){
var seq__56447_56589__$1 = temp__5735__auto___56588;
if(cljs.core.chunked_seq_QMARK_(seq__56447_56589__$1)){
var c__4556__auto___56590 = cljs.core.chunk_first(seq__56447_56589__$1);
var G__56591 = cljs.core.chunk_rest(seq__56447_56589__$1);
var G__56592 = c__4556__auto___56590;
var G__56593 = cljs.core.count(c__4556__auto___56590);
var G__56594 = (0);
seq__56447_56579 = G__56591;
chunk__56448_56580 = G__56592;
count__56449_56581 = G__56593;
i__56450_56582 = G__56594;
continue;
} else {
var f_56595 = cljs.core.first(seq__56447_56589__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56595], 0));


var G__56596 = cljs.core.next(seq__56447_56589__$1);
var G__56597 = null;
var G__56598 = (0);
var G__56599 = (0);
seq__56447_56579 = G__56596;
chunk__56448_56580 = G__56597;
count__56449_56581 = G__56598;
i__56450_56582 = G__56599;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56600 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_56600], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_56600)))?cljs.core.second(arglists_56600):arglists_56600)], 0));
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
var seq__56451_56605 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56452_56606 = null;
var count__56453_56607 = (0);
var i__56454_56608 = (0);
while(true){
if((i__56454_56608 < count__56453_56607)){
var vec__56465_56609 = chunk__56452_56606.cljs$core$IIndexed$_nth$arity$2(null,i__56454_56608);
var name_56610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56465_56609,(0),null);
var map__56468_56611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56465_56609,(1),null);
var map__56468_56612__$1 = (((((!((map__56468_56611 == null))))?(((((map__56468_56611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56468_56611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56468_56611):map__56468_56611);
var doc_56613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56468_56612__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56468_56612__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56610], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56614], 0));

if(cljs.core.truth_(doc_56613)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56613], 0));
} else {
}


var G__56615 = seq__56451_56605;
var G__56616 = chunk__56452_56606;
var G__56617 = count__56453_56607;
var G__56618 = (i__56454_56608 + (1));
seq__56451_56605 = G__56615;
chunk__56452_56606 = G__56616;
count__56453_56607 = G__56617;
i__56454_56608 = G__56618;
continue;
} else {
var temp__5735__auto___56619 = cljs.core.seq(seq__56451_56605);
if(temp__5735__auto___56619){
var seq__56451_56620__$1 = temp__5735__auto___56619;
if(cljs.core.chunked_seq_QMARK_(seq__56451_56620__$1)){
var c__4556__auto___56621 = cljs.core.chunk_first(seq__56451_56620__$1);
var G__56622 = cljs.core.chunk_rest(seq__56451_56620__$1);
var G__56623 = c__4556__auto___56621;
var G__56624 = cljs.core.count(c__4556__auto___56621);
var G__56625 = (0);
seq__56451_56605 = G__56622;
chunk__56452_56606 = G__56623;
count__56453_56607 = G__56624;
i__56454_56608 = G__56625;
continue;
} else {
var vec__56470_56626 = cljs.core.first(seq__56451_56620__$1);
var name_56627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56470_56626,(0),null);
var map__56473_56628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56470_56626,(1),null);
var map__56473_56629__$1 = (((((!((map__56473_56628 == null))))?(((((map__56473_56628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56473_56628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56473_56628):map__56473_56628);
var doc_56630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56473_56629__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56473_56629__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56627], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56631], 0));

if(cljs.core.truth_(doc_56630)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56630], 0));
} else {
}


var G__56632 = cljs.core.next(seq__56451_56620__$1);
var G__56633 = null;
var G__56634 = (0);
var G__56635 = (0);
seq__56451_56605 = G__56632;
chunk__56452_56606 = G__56633;
count__56453_56607 = G__56634;
i__56454_56608 = G__56635;
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

var seq__56475 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56476 = null;
var count__56477 = (0);
var i__56478 = (0);
while(true){
if((i__56478 < count__56477)){
var role = chunk__56476.cljs$core$IIndexed$_nth$arity$2(null,i__56478);
var temp__5735__auto___56637__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___56637__$1)){
var spec_56641 = temp__5735__auto___56637__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56641)], 0));
} else {
}


var G__56643 = seq__56475;
var G__56644 = chunk__56476;
var G__56645 = count__56477;
var G__56646 = (i__56478 + (1));
seq__56475 = G__56643;
chunk__56476 = G__56644;
count__56477 = G__56645;
i__56478 = G__56646;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__56475);
if(temp__5735__auto____$1){
var seq__56475__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56475__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__56475__$1);
var G__56647 = cljs.core.chunk_rest(seq__56475__$1);
var G__56648 = c__4556__auto__;
var G__56649 = cljs.core.count(c__4556__auto__);
var G__56650 = (0);
seq__56475 = G__56647;
chunk__56476 = G__56648;
count__56477 = G__56649;
i__56478 = G__56650;
continue;
} else {
var role = cljs.core.first(seq__56475__$1);
var temp__5735__auto___56651__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___56651__$2)){
var spec_56652 = temp__5735__auto___56651__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56652)], 0));
} else {
}


var G__56653 = cljs.core.next(seq__56475__$1);
var G__56654 = null;
var G__56655 = (0);
var G__56656 = (0);
seq__56475 = G__56653;
chunk__56476 = G__56654;
count__56477 = G__56655;
i__56478 = G__56656;
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
var G__56657 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__56658 = cljs.core.ex_cause(t);
via = G__56657;
t = G__56658;
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
var map__56487 = datafied_throwable;
var map__56487__$1 = (((((!((map__56487 == null))))?(((((map__56487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56487):map__56487);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56487__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56487__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56487__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56488 = cljs.core.last(via);
var map__56488__$1 = (((((!((map__56488 == null))))?(((((map__56488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56488):map__56488);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56488__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56488__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56488__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56489 = data;
var map__56489__$1 = (((((!((map__56489 == null))))?(((((map__56489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56489):map__56489);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56489__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56489__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56489__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56490 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56490__$1 = (((((!((map__56490 == null))))?(((((map__56490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56490):map__56490);
var top_data = map__56490__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56490__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56502 = phase;
var G__56502__$1 = (((G__56502 instanceof cljs.core.Keyword))?G__56502.fqn:null);
switch (G__56502__$1) {
case "read-source":
var map__56503 = data;
var map__56503__$1 = (((((!((map__56503 == null))))?(((((map__56503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56503):map__56503);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56503__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56503__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56505 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56505__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56505,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56505);
var G__56505__$2 = (cljs.core.truth_((function (){var fexpr__56506 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56506.cljs$core$IFn$_invoke$arity$1 ? fexpr__56506.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56506.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56505__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56505__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56505__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56505__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56507 = top_data;
var G__56507__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56507,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56507);
var G__56507__$2 = (cljs.core.truth_((function (){var fexpr__56508 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56508.cljs$core$IFn$_invoke$arity$1 ? fexpr__56508.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56508.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56507__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56507__$1);
var G__56507__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56507__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56507__$2);
var G__56507__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56507__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56507__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56507__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56507__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56509 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56509,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56509,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56509,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56509,(3),null);
var G__56512 = top_data;
var G__56512__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56512,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56512);
var G__56512__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56512__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56512__$1);
var G__56512__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56512__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56512__$2);
var G__56512__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56512__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56512__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56512__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56512__$4;
}

break;
case "execution":
var vec__56513 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56513,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56513,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56513,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56513,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56486_SHARP_){
var or__4126__auto__ = (p1__56486_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__56517 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56517.cljs$core$IFn$_invoke$arity$1 ? fexpr__56517.cljs$core$IFn$_invoke$arity$1(p1__56486_SHARP_) : fexpr__56517.call(null,p1__56486_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__56518 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56518__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56518,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56518);
var G__56518__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56518__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56518__$1);
var G__56518__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56518__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56518__$2);
var G__56518__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56518__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56518__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56518__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56518__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56502__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56527){
var map__56528 = p__56527;
var map__56528__$1 = (((((!((map__56528 == null))))?(((((map__56528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56528):map__56528);
var triage_data = map__56528__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56528__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56528__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56528__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56528__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56528__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56528__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56528__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56528__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__56530 = phase;
var G__56530__$1 = (((G__56530 instanceof cljs.core.Keyword))?G__56530.fqn:null);
switch (G__56530__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56531 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56532 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56533 = loc;
var G__56534 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56535_56675 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56536_56676 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56537_56677 = true;
var _STAR_print_fn_STAR__temp_val__56538_56678 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56537_56677);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56538_56678);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56525_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56525_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56536_56676);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56535_56675);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56531,G__56532,G__56533,G__56534) : format.call(null,G__56531,G__56532,G__56533,G__56534));

break;
case "macroexpansion":
var G__56544 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56545 = cause_type;
var G__56546 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56547 = loc;
var G__56548 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56544,G__56545,G__56546,G__56547,G__56548) : format.call(null,G__56544,G__56545,G__56546,G__56547,G__56548));

break;
case "compile-syntax-check":
var G__56549 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56550 = cause_type;
var G__56551 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56552 = loc;
var G__56553 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56549,G__56550,G__56551,G__56552,G__56553) : format.call(null,G__56549,G__56550,G__56551,G__56552,G__56553));

break;
case "compilation":
var G__56554 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__56555 = cause_type;
var G__56556 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56557 = loc;
var G__56558 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56554,G__56555,G__56556,G__56557,G__56558) : format.call(null,G__56554,G__56555,G__56556,G__56557,G__56558));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__56559 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__56560 = symbol;
var G__56561 = loc;
var G__56562 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56563_56683 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56564_56684 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56565_56685 = true;
var _STAR_print_fn_STAR__temp_val__56566_56686 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56565_56685);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56566_56686);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56526_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56526_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56564_56684);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56563_56683);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56559,G__56560,G__56561,G__56562) : format.call(null,G__56559,G__56560,G__56561,G__56562));
} else {
var G__56567 = "Execution error%s at %s(%s).\n%s\n";
var G__56568 = cause_type;
var G__56569 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56570 = loc;
var G__56571 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56567,G__56568,G__56569,G__56570,G__56571) : format.call(null,G__56567,G__56568,G__56569,G__56570,G__56571));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56530__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
