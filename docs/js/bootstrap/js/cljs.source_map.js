goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__30029){
var vec__30030 = p__30029;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30030,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__30041 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30041,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30041,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30041,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30041,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30041,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__30045 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30045,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30045,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30045,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30045,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30045,(4),null);
var vec__30048 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30048,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30048,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30048,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30048,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30048,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__30053 = segmap;
var map__30053__$1 = (((((!((map__30053 == null))))?(((((map__30053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30053):map__30053);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30053__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30053__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30053__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30053__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__30059 = arguments.length;
switch (G__30059) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__30073 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__31404 = cljs.core.next(segs__$1);
var G__31405 = nrelseg;
var G__31406 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__31404;
relseg__$1 = G__31405;
result__$1 = G__31406;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30073,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30073,(1),null);
var G__31407 = (gline + (1));
var G__31408 = cljs.core.next(lines__$1);
var G__31409 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__31410 = result__$1;
gline = G__31407;
lines__$1 = G__31408;
relseg = G__31409;
result = G__31410;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__30080 = segmap;
var map__30080__$1 = (((((!((map__30080 == null))))?(((((map__30080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30080):map__30080);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30080__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30080__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30080__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30080__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30080__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__30077_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__30077_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__30099 = arguments.length;
switch (G__30099) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__30118 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__31440 = cljs.core.next(segs__$1);
var G__31441 = nrelseg;
var G__31442 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__31440;
relseg__$1 = G__31441;
result__$1 = G__31442;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30118,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30118,(1),null);
var G__31445 = (gline + (1));
var G__31446 = cljs.core.next(lines__$1);
var G__31447 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__31448 = result__$1;
gline = G__31445;
lines__$1 = G__31446;
relseg = G__31447;
result = G__31448;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__30130){
var vec__30131 = p__30130;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30131,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30131,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30131,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30131,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30131,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__30134){
var vec__30139 = p__30134;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30139,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30139,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30139,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30139,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30139,(4),null);
var seg = vec__30139;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__30143){
var vec__30144 = p__30143;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30144,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30144,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30144,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30144,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30144,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__30160 = cljs.core.seq(infos);
var chunk__30161 = null;
var count__30162 = (0);
var i__30163 = (0);
while(true){
if((i__30163 < count__30162)){
var info = chunk__30161.cljs$core$IIndexed$_nth$arity$2(null,i__30163);
var segv_31457 = info__GT_segv(info,source_idx,line,col);
var gline_31458 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_31459 = cljs.core.count(cljs.core.deref(lines));
if((gline_31458 > (lc_31459 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__30160,chunk__30161,count__30162,i__30163,segv_31457,gline_31458,lc_31459,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_31458 - (lc_31459 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_31457], null));
});})(seq__30160,chunk__30161,count__30162,i__30163,segv_31457,gline_31458,lc_31459,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__30160,chunk__30161,count__30162,i__30163,segv_31457,gline_31458,lc_31459,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31458], null),cljs.core.conj,segv_31457);
});})(seq__30160,chunk__30161,count__30162,i__30163,segv_31457,gline_31458,lc_31459,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__31463 = seq__30160;
var G__31464 = chunk__30161;
var G__31465 = count__30162;
var G__31466 = (i__30163 + (1));
seq__30160 = G__31463;
chunk__30161 = G__31464;
count__30162 = G__31465;
i__30163 = G__31466;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30160);
if(temp__5735__auto__){
var seq__30160__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30160__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30160__$1);
var G__31467 = cljs.core.chunk_rest(seq__30160__$1);
var G__31468 = c__4556__auto__;
var G__31469 = cljs.core.count(c__4556__auto__);
var G__31470 = (0);
seq__30160 = G__31467;
chunk__30161 = G__31468;
count__30162 = G__31469;
i__30163 = G__31470;
continue;
} else {
var info = cljs.core.first(seq__30160__$1);
var segv_31471 = info__GT_segv(info,source_idx,line,col);
var gline_31472 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_31473 = cljs.core.count(cljs.core.deref(lines));
if((gline_31472 > (lc_31473 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__30160,chunk__30161,count__30162,i__30163,segv_31471,gline_31472,lc_31473,info,seq__30160__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_31472 - (lc_31473 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_31471], null));
});})(seq__30160,chunk__30161,count__30162,i__30163,segv_31471,gline_31472,lc_31473,info,seq__30160__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__30160,chunk__30161,count__30162,i__30163,segv_31471,gline_31472,lc_31473,info,seq__30160__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31472], null),cljs.core.conj,segv_31471);
});})(seq__30160,chunk__30161,count__30162,i__30163,segv_31471,gline_31472,lc_31473,info,seq__30160__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__31474 = cljs.core.next(seq__30160__$1);
var G__31475 = null;
var G__31476 = (0);
var G__31477 = (0);
seq__30160 = G__31474;
chunk__30161 = G__31475;
count__30162 = G__31476;
i__30163 = G__31477;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__30186_31478 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__30187_31479 = null;
var count__30188_31480 = (0);
var i__30189_31481 = (0);
while(true){
if((i__30189_31481 < count__30188_31480)){
var vec__30445_31482 = chunk__30187_31479.cljs$core$IIndexed$_nth$arity$2(null,i__30189_31481);
var source_idx_31483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30445_31482,(0),null);
var vec__30448_31484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30445_31482,(1),null);
var __31485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30448_31484,(0),null);
var lines_31486__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30448_31484,(1),null);
var seq__30453_31489 = cljs.core.seq(lines_31486__$1);
var chunk__30454_31490 = null;
var count__30455_31491 = (0);
var i__30456_31492 = (0);
while(true){
if((i__30456_31492 < count__30455_31491)){
var vec__30531_31493 = chunk__30454_31490.cljs$core$IIndexed$_nth$arity$2(null,i__30456_31492);
var line_31494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30531_31493,(0),null);
var cols_31495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30531_31493,(1),null);
var seq__30534_31496 = cljs.core.seq(cols_31495);
var chunk__30535_31497 = null;
var count__30536_31498 = (0);
var i__30537_31499 = (0);
while(true){
if((i__30537_31499 < count__30536_31498)){
var vec__30549_31500 = chunk__30535_31497.cljs$core$IIndexed$_nth$arity$2(null,i__30537_31499);
var col_31501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30549_31500,(0),null);
var infos_31502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30549_31500,(1),null);
encode_cols(infos_31502,source_idx_31483,line_31494,col_31501);


var G__31503 = seq__30534_31496;
var G__31504 = chunk__30535_31497;
var G__31505 = count__30536_31498;
var G__31506 = (i__30537_31499 + (1));
seq__30534_31496 = G__31503;
chunk__30535_31497 = G__31504;
count__30536_31498 = G__31505;
i__30537_31499 = G__31506;
continue;
} else {
var temp__5735__auto___31507 = cljs.core.seq(seq__30534_31496);
if(temp__5735__auto___31507){
var seq__30534_31508__$1 = temp__5735__auto___31507;
if(cljs.core.chunked_seq_QMARK_(seq__30534_31508__$1)){
var c__4556__auto___31509 = cljs.core.chunk_first(seq__30534_31508__$1);
var G__31510 = cljs.core.chunk_rest(seq__30534_31508__$1);
var G__31511 = c__4556__auto___31509;
var G__31512 = cljs.core.count(c__4556__auto___31509);
var G__31513 = (0);
seq__30534_31496 = G__31510;
chunk__30535_31497 = G__31511;
count__30536_31498 = G__31512;
i__30537_31499 = G__31513;
continue;
} else {
var vec__30557_31514 = cljs.core.first(seq__30534_31508__$1);
var col_31515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30557_31514,(0),null);
var infos_31516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30557_31514,(1),null);
encode_cols(infos_31516,source_idx_31483,line_31494,col_31515);


var G__31520 = cljs.core.next(seq__30534_31508__$1);
var G__31521 = null;
var G__31522 = (0);
var G__31523 = (0);
seq__30534_31496 = G__31520;
chunk__30535_31497 = G__31521;
count__30536_31498 = G__31522;
i__30537_31499 = G__31523;
continue;
}
} else {
}
}
break;
}


var G__31524 = seq__30453_31489;
var G__31525 = chunk__30454_31490;
var G__31526 = count__30455_31491;
var G__31527 = (i__30456_31492 + (1));
seq__30453_31489 = G__31524;
chunk__30454_31490 = G__31525;
count__30455_31491 = G__31526;
i__30456_31492 = G__31527;
continue;
} else {
var temp__5735__auto___31528 = cljs.core.seq(seq__30453_31489);
if(temp__5735__auto___31528){
var seq__30453_31530__$1 = temp__5735__auto___31528;
if(cljs.core.chunked_seq_QMARK_(seq__30453_31530__$1)){
var c__4556__auto___31533 = cljs.core.chunk_first(seq__30453_31530__$1);
var G__31534 = cljs.core.chunk_rest(seq__30453_31530__$1);
var G__31535 = c__4556__auto___31533;
var G__31536 = cljs.core.count(c__4556__auto___31533);
var G__31537 = (0);
seq__30453_31489 = G__31534;
chunk__30454_31490 = G__31535;
count__30455_31491 = G__31536;
i__30456_31492 = G__31537;
continue;
} else {
var vec__30572_31541 = cljs.core.first(seq__30453_31530__$1);
var line_31542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30572_31541,(0),null);
var cols_31543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30572_31541,(1),null);
var seq__30575_31544 = cljs.core.seq(cols_31543);
var chunk__30576_31545 = null;
var count__30577_31546 = (0);
var i__30578_31547 = (0);
while(true){
if((i__30578_31547 < count__30577_31546)){
var vec__30593_31549 = chunk__30576_31545.cljs$core$IIndexed$_nth$arity$2(null,i__30578_31547);
var col_31550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30593_31549,(0),null);
var infos_31551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30593_31549,(1),null);
encode_cols(infos_31551,source_idx_31483,line_31542,col_31550);


var G__31552 = seq__30575_31544;
var G__31553 = chunk__30576_31545;
var G__31554 = count__30577_31546;
var G__31555 = (i__30578_31547 + (1));
seq__30575_31544 = G__31552;
chunk__30576_31545 = G__31553;
count__30577_31546 = G__31554;
i__30578_31547 = G__31555;
continue;
} else {
var temp__5735__auto___31556__$1 = cljs.core.seq(seq__30575_31544);
if(temp__5735__auto___31556__$1){
var seq__30575_31557__$1 = temp__5735__auto___31556__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30575_31557__$1)){
var c__4556__auto___31558 = cljs.core.chunk_first(seq__30575_31557__$1);
var G__31559 = cljs.core.chunk_rest(seq__30575_31557__$1);
var G__31560 = c__4556__auto___31558;
var G__31561 = cljs.core.count(c__4556__auto___31558);
var G__31562 = (0);
seq__30575_31544 = G__31559;
chunk__30576_31545 = G__31560;
count__30577_31546 = G__31561;
i__30578_31547 = G__31562;
continue;
} else {
var vec__30601_31563 = cljs.core.first(seq__30575_31557__$1);
var col_31564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30601_31563,(0),null);
var infos_31565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30601_31563,(1),null);
encode_cols(infos_31565,source_idx_31483,line_31542,col_31564);


var G__31586 = cljs.core.next(seq__30575_31557__$1);
var G__31587 = null;
var G__31588 = (0);
var G__31589 = (0);
seq__30575_31544 = G__31586;
chunk__30576_31545 = G__31587;
count__30577_31546 = G__31588;
i__30578_31547 = G__31589;
continue;
}
} else {
}
}
break;
}


var G__31590 = cljs.core.next(seq__30453_31530__$1);
var G__31591 = null;
var G__31592 = (0);
var G__31593 = (0);
seq__30453_31489 = G__31590;
chunk__30454_31490 = G__31591;
count__30455_31491 = G__31592;
i__30456_31492 = G__31593;
continue;
}
} else {
}
}
break;
}


var G__31594 = seq__30186_31478;
var G__31595 = chunk__30187_31479;
var G__31596 = count__30188_31480;
var G__31597 = (i__30189_31481 + (1));
seq__30186_31478 = G__31594;
chunk__30187_31479 = G__31595;
count__30188_31480 = G__31596;
i__30189_31481 = G__31597;
continue;
} else {
var temp__5735__auto___31598 = cljs.core.seq(seq__30186_31478);
if(temp__5735__auto___31598){
var seq__30186_31599__$1 = temp__5735__auto___31598;
if(cljs.core.chunked_seq_QMARK_(seq__30186_31599__$1)){
var c__4556__auto___31600 = cljs.core.chunk_first(seq__30186_31599__$1);
var G__31601 = cljs.core.chunk_rest(seq__30186_31599__$1);
var G__31602 = c__4556__auto___31600;
var G__31603 = cljs.core.count(c__4556__auto___31600);
var G__31604 = (0);
seq__30186_31478 = G__31601;
chunk__30187_31479 = G__31602;
count__30188_31480 = G__31603;
i__30189_31481 = G__31604;
continue;
} else {
var vec__30604_31605 = cljs.core.first(seq__30186_31599__$1);
var source_idx_31606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30604_31605,(0),null);
var vec__30607_31607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30604_31605,(1),null);
var __31608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607_31607,(0),null);
var lines_31609__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30607_31607,(1),null);
var seq__30611_31610 = cljs.core.seq(lines_31609__$1);
var chunk__30612_31611 = null;
var count__30613_31612 = (0);
var i__30614_31613 = (0);
while(true){
if((i__30614_31613 < count__30613_31612)){
var vec__30693_31614 = chunk__30612_31611.cljs$core$IIndexed$_nth$arity$2(null,i__30614_31613);
var line_31615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30693_31614,(0),null);
var cols_31616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30693_31614,(1),null);
var seq__30696_31617 = cljs.core.seq(cols_31616);
var chunk__30697_31618 = null;
var count__30698_31619 = (0);
var i__30699_31620 = (0);
while(true){
if((i__30699_31620 < count__30698_31619)){
var vec__30714_31621 = chunk__30697_31618.cljs$core$IIndexed$_nth$arity$2(null,i__30699_31620);
var col_31622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30714_31621,(0),null);
var infos_31623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30714_31621,(1),null);
encode_cols(infos_31623,source_idx_31606,line_31615,col_31622);


var G__31624 = seq__30696_31617;
var G__31625 = chunk__30697_31618;
var G__31626 = count__30698_31619;
var G__31627 = (i__30699_31620 + (1));
seq__30696_31617 = G__31624;
chunk__30697_31618 = G__31625;
count__30698_31619 = G__31626;
i__30699_31620 = G__31627;
continue;
} else {
var temp__5735__auto___31628__$1 = cljs.core.seq(seq__30696_31617);
if(temp__5735__auto___31628__$1){
var seq__30696_31630__$1 = temp__5735__auto___31628__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30696_31630__$1)){
var c__4556__auto___31631 = cljs.core.chunk_first(seq__30696_31630__$1);
var G__31635 = cljs.core.chunk_rest(seq__30696_31630__$1);
var G__31636 = c__4556__auto___31631;
var G__31637 = cljs.core.count(c__4556__auto___31631);
var G__31638 = (0);
seq__30696_31617 = G__31635;
chunk__30697_31618 = G__31636;
count__30698_31619 = G__31637;
i__30699_31620 = G__31638;
continue;
} else {
var vec__30720_31639 = cljs.core.first(seq__30696_31630__$1);
var col_31640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30720_31639,(0),null);
var infos_31641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30720_31639,(1),null);
encode_cols(infos_31641,source_idx_31606,line_31615,col_31640);


var G__31642 = cljs.core.next(seq__30696_31630__$1);
var G__31643 = null;
var G__31644 = (0);
var G__31645 = (0);
seq__30696_31617 = G__31642;
chunk__30697_31618 = G__31643;
count__30698_31619 = G__31644;
i__30699_31620 = G__31645;
continue;
}
} else {
}
}
break;
}


var G__31646 = seq__30611_31610;
var G__31647 = chunk__30612_31611;
var G__31648 = count__30613_31612;
var G__31649 = (i__30614_31613 + (1));
seq__30611_31610 = G__31646;
chunk__30612_31611 = G__31647;
count__30613_31612 = G__31648;
i__30614_31613 = G__31649;
continue;
} else {
var temp__5735__auto___31651__$1 = cljs.core.seq(seq__30611_31610);
if(temp__5735__auto___31651__$1){
var seq__30611_31652__$1 = temp__5735__auto___31651__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30611_31652__$1)){
var c__4556__auto___31653 = cljs.core.chunk_first(seq__30611_31652__$1);
var G__31654 = cljs.core.chunk_rest(seq__30611_31652__$1);
var G__31655 = c__4556__auto___31653;
var G__31656 = cljs.core.count(c__4556__auto___31653);
var G__31657 = (0);
seq__30611_31610 = G__31654;
chunk__30612_31611 = G__31655;
count__30613_31612 = G__31656;
i__30614_31613 = G__31657;
continue;
} else {
var vec__30724_31659 = cljs.core.first(seq__30611_31652__$1);
var line_31660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30724_31659,(0),null);
var cols_31661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30724_31659,(1),null);
var seq__30728_31664 = cljs.core.seq(cols_31661);
var chunk__30729_31665 = null;
var count__30730_31666 = (0);
var i__30731_31667 = (0);
while(true){
if((i__30731_31667 < count__30730_31666)){
var vec__30740_31668 = chunk__30729_31665.cljs$core$IIndexed$_nth$arity$2(null,i__30731_31667);
var col_31669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30740_31668,(0),null);
var infos_31670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30740_31668,(1),null);
encode_cols(infos_31670,source_idx_31606,line_31660,col_31669);


var G__31675 = seq__30728_31664;
var G__31676 = chunk__30729_31665;
var G__31677 = count__30730_31666;
var G__31678 = (i__30731_31667 + (1));
seq__30728_31664 = G__31675;
chunk__30729_31665 = G__31676;
count__30730_31666 = G__31677;
i__30731_31667 = G__31678;
continue;
} else {
var temp__5735__auto___31679__$2 = cljs.core.seq(seq__30728_31664);
if(temp__5735__auto___31679__$2){
var seq__30728_31680__$1 = temp__5735__auto___31679__$2;
if(cljs.core.chunked_seq_QMARK_(seq__30728_31680__$1)){
var c__4556__auto___31681 = cljs.core.chunk_first(seq__30728_31680__$1);
var G__31682 = cljs.core.chunk_rest(seq__30728_31680__$1);
var G__31683 = c__4556__auto___31681;
var G__31684 = cljs.core.count(c__4556__auto___31681);
var G__31685 = (0);
seq__30728_31664 = G__31682;
chunk__30729_31665 = G__31683;
count__30730_31666 = G__31684;
i__30731_31667 = G__31685;
continue;
} else {
var vec__30743_31686 = cljs.core.first(seq__30728_31680__$1);
var col_31687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30743_31686,(0),null);
var infos_31688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30743_31686,(1),null);
encode_cols(infos_31688,source_idx_31606,line_31660,col_31687);


var G__31693 = cljs.core.next(seq__30728_31680__$1);
var G__31694 = null;
var G__31695 = (0);
var G__31696 = (0);
seq__30728_31664 = G__31693;
chunk__30729_31665 = G__31694;
count__30730_31666 = G__31695;
i__30731_31667 = G__31696;
continue;
}
} else {
}
}
break;
}


var G__31699 = cljs.core.next(seq__30611_31652__$1);
var G__31700 = null;
var G__31701 = (0);
var G__31702 = (0);
seq__30611_31610 = G__31699;
chunk__30612_31611 = G__31700;
count__30613_31612 = G__31701;
i__30614_31613 = G__31702;
continue;
}
} else {
}
}
break;
}


var G__31703 = cljs.core.next(seq__30186_31599__$1);
var G__31704 = null;
var G__31705 = (0);
var G__31706 = (0);
seq__30186_31478 = G__31703;
chunk__30187_31479 = G__31704;
count__30188_31480 = G__31705;
i__30189_31481 = G__31706;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__30750 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__30148_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30148_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__30149_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__30149_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30150_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__30150_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__30751 = G__30750;
goog.object.set(G__30751,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__30751;
} else {
return G__30750;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__30753 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30753,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30753,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__30756 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30756,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30756,(1),null);
var G__31711 = cljs.core.next(col_map_seq);
var G__31712 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__30756,col,infos,vec__30753,line,col_map){
return (function (v,p__30762){
var map__30763 = p__30762;
var map__30763__$1 = (((((!((map__30763 == null))))?(((((map__30763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30763):map__30763);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30763__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30763__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__30756,col,infos,vec__30753,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__31711;
new_cols = G__31712;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__31728 = cljs.core.next(line_map_seq);
var G__31729 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__31728;
new_lines = G__31729;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__30765_31730 = cljs.core.seq(reverse_map);
var chunk__30766_31731 = null;
var count__30767_31732 = (0);
var i__30768_31733 = (0);
while(true){
if((i__30768_31733 < count__30767_31732)){
var vec__31126_31734 = chunk__30766_31731.cljs$core$IIndexed$_nth$arity$2(null,i__30768_31733);
var line_31735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31126_31734,(0),null);
var columns_31736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31126_31734,(1),null);
var seq__31129_31737 = cljs.core.seq(columns_31736);
var chunk__31130_31738 = null;
var count__31131_31739 = (0);
var i__31132_31740 = (0);
while(true){
if((i__31132_31740 < count__31131_31739)){
var vec__31179_31741 = chunk__31130_31738.cljs$core$IIndexed$_nth$arity$2(null,i__31132_31740);
var column_31742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31179_31741,(0),null);
var column_info_31743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31179_31741,(1),null);
var seq__31183_31744 = cljs.core.seq(column_info_31743);
var chunk__31184_31745 = null;
var count__31185_31746 = (0);
var i__31186_31747 = (0);
while(true){
if((i__31186_31747 < count__31185_31746)){
var map__31193_31748 = chunk__31184_31745.cljs$core$IIndexed$_nth$arity$2(null,i__31186_31747);
var map__31193_31749__$1 = (((((!((map__31193_31748 == null))))?(((((map__31193_31748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31193_31748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31193_31748):map__31193_31748);
var gline_31750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31193_31749__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31193_31749__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31193_31749__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31750], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31183_31744,chunk__31184_31745,count__31185_31746,i__31186_31747,seq__31129_31737,chunk__31130_31738,count__31131_31739,i__31132_31740,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31193_31748,map__31193_31749__$1,gline_31750,gcol_31751,name_31752,vec__31179_31741,column_31742,column_info_31743,vec__31126_31734,line_31735,columns_31736,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31751], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31735,new cljs.core.Keyword(null,"col","col",-1959363084),column_31742,new cljs.core.Keyword(null,"name","name",1843675177),name_31752], null));
});})(seq__31183_31744,chunk__31184_31745,count__31185_31746,i__31186_31747,seq__31129_31737,chunk__31130_31738,count__31131_31739,i__31132_31740,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31193_31748,map__31193_31749__$1,gline_31750,gcol_31751,name_31752,vec__31179_31741,column_31742,column_info_31743,vec__31126_31734,line_31735,columns_31736,inverted))
,cljs.core.sorted_map()));


var G__31758 = seq__31183_31744;
var G__31759 = chunk__31184_31745;
var G__31760 = count__31185_31746;
var G__31761 = (i__31186_31747 + (1));
seq__31183_31744 = G__31758;
chunk__31184_31745 = G__31759;
count__31185_31746 = G__31760;
i__31186_31747 = G__31761;
continue;
} else {
var temp__5735__auto___31762 = cljs.core.seq(seq__31183_31744);
if(temp__5735__auto___31762){
var seq__31183_31763__$1 = temp__5735__auto___31762;
if(cljs.core.chunked_seq_QMARK_(seq__31183_31763__$1)){
var c__4556__auto___31764 = cljs.core.chunk_first(seq__31183_31763__$1);
var G__31765 = cljs.core.chunk_rest(seq__31183_31763__$1);
var G__31766 = c__4556__auto___31764;
var G__31767 = cljs.core.count(c__4556__auto___31764);
var G__31768 = (0);
seq__31183_31744 = G__31765;
chunk__31184_31745 = G__31766;
count__31185_31746 = G__31767;
i__31186_31747 = G__31768;
continue;
} else {
var map__31201_31772 = cljs.core.first(seq__31183_31763__$1);
var map__31201_31773__$1 = (((((!((map__31201_31772 == null))))?(((((map__31201_31772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31201_31772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31201_31772):map__31201_31772);
var gline_31774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31201_31773__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31201_31773__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31201_31773__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31774], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31183_31744,chunk__31184_31745,count__31185_31746,i__31186_31747,seq__31129_31737,chunk__31130_31738,count__31131_31739,i__31132_31740,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31201_31772,map__31201_31773__$1,gline_31774,gcol_31775,name_31776,seq__31183_31763__$1,temp__5735__auto___31762,vec__31179_31741,column_31742,column_info_31743,vec__31126_31734,line_31735,columns_31736,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31775], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31735,new cljs.core.Keyword(null,"col","col",-1959363084),column_31742,new cljs.core.Keyword(null,"name","name",1843675177),name_31776], null));
});})(seq__31183_31744,chunk__31184_31745,count__31185_31746,i__31186_31747,seq__31129_31737,chunk__31130_31738,count__31131_31739,i__31132_31740,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31201_31772,map__31201_31773__$1,gline_31774,gcol_31775,name_31776,seq__31183_31763__$1,temp__5735__auto___31762,vec__31179_31741,column_31742,column_info_31743,vec__31126_31734,line_31735,columns_31736,inverted))
,cljs.core.sorted_map()));


var G__31778 = cljs.core.next(seq__31183_31763__$1);
var G__31779 = null;
var G__31780 = (0);
var G__31781 = (0);
seq__31183_31744 = G__31778;
chunk__31184_31745 = G__31779;
count__31185_31746 = G__31780;
i__31186_31747 = G__31781;
continue;
}
} else {
}
}
break;
}


var G__31785 = seq__31129_31737;
var G__31786 = chunk__31130_31738;
var G__31787 = count__31131_31739;
var G__31788 = (i__31132_31740 + (1));
seq__31129_31737 = G__31785;
chunk__31130_31738 = G__31786;
count__31131_31739 = G__31787;
i__31132_31740 = G__31788;
continue;
} else {
var temp__5735__auto___31789 = cljs.core.seq(seq__31129_31737);
if(temp__5735__auto___31789){
var seq__31129_31790__$1 = temp__5735__auto___31789;
if(cljs.core.chunked_seq_QMARK_(seq__31129_31790__$1)){
var c__4556__auto___31791 = cljs.core.chunk_first(seq__31129_31790__$1);
var G__31792 = cljs.core.chunk_rest(seq__31129_31790__$1);
var G__31793 = c__4556__auto___31791;
var G__31794 = cljs.core.count(c__4556__auto___31791);
var G__31795 = (0);
seq__31129_31737 = G__31792;
chunk__31130_31738 = G__31793;
count__31131_31739 = G__31794;
i__31132_31740 = G__31795;
continue;
} else {
var vec__31206_31796 = cljs.core.first(seq__31129_31790__$1);
var column_31797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31206_31796,(0),null);
var column_info_31798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31206_31796,(1),null);
var seq__31209_31799 = cljs.core.seq(column_info_31798);
var chunk__31210_31800 = null;
var count__31211_31801 = (0);
var i__31212_31802 = (0);
while(true){
if((i__31212_31802 < count__31211_31801)){
var map__31221_31803 = chunk__31210_31800.cljs$core$IIndexed$_nth$arity$2(null,i__31212_31802);
var map__31221_31804__$1 = (((((!((map__31221_31803 == null))))?(((((map__31221_31803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31221_31803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31221_31803):map__31221_31803);
var gline_31805 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31221_31804__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31806 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31221_31804__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31221_31804__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31805], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31209_31799,chunk__31210_31800,count__31211_31801,i__31212_31802,seq__31129_31737,chunk__31130_31738,count__31131_31739,i__31132_31740,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31221_31803,map__31221_31804__$1,gline_31805,gcol_31806,name_31807,vec__31206_31796,column_31797,column_info_31798,seq__31129_31790__$1,temp__5735__auto___31789,vec__31126_31734,line_31735,columns_31736,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31806], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31735,new cljs.core.Keyword(null,"col","col",-1959363084),column_31797,new cljs.core.Keyword(null,"name","name",1843675177),name_31807], null));
});})(seq__31209_31799,chunk__31210_31800,count__31211_31801,i__31212_31802,seq__31129_31737,chunk__31130_31738,count__31131_31739,i__31132_31740,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31221_31803,map__31221_31804__$1,gline_31805,gcol_31806,name_31807,vec__31206_31796,column_31797,column_info_31798,seq__31129_31790__$1,temp__5735__auto___31789,vec__31126_31734,line_31735,columns_31736,inverted))
,cljs.core.sorted_map()));


var G__31820 = seq__31209_31799;
var G__31821 = chunk__31210_31800;
var G__31822 = count__31211_31801;
var G__31823 = (i__31212_31802 + (1));
seq__31209_31799 = G__31820;
chunk__31210_31800 = G__31821;
count__31211_31801 = G__31822;
i__31212_31802 = G__31823;
continue;
} else {
var temp__5735__auto___31826__$1 = cljs.core.seq(seq__31209_31799);
if(temp__5735__auto___31826__$1){
var seq__31209_31827__$1 = temp__5735__auto___31826__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31209_31827__$1)){
var c__4556__auto___31828 = cljs.core.chunk_first(seq__31209_31827__$1);
var G__31829 = cljs.core.chunk_rest(seq__31209_31827__$1);
var G__31830 = c__4556__auto___31828;
var G__31831 = cljs.core.count(c__4556__auto___31828);
var G__31832 = (0);
seq__31209_31799 = G__31829;
chunk__31210_31800 = G__31830;
count__31211_31801 = G__31831;
i__31212_31802 = G__31832;
continue;
} else {
var map__31224_31833 = cljs.core.first(seq__31209_31827__$1);
var map__31224_31834__$1 = (((((!((map__31224_31833 == null))))?(((((map__31224_31833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31224_31833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31224_31833):map__31224_31833);
var gline_31835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31224_31834__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31224_31834__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31224_31834__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31835], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31209_31799,chunk__31210_31800,count__31211_31801,i__31212_31802,seq__31129_31737,chunk__31130_31738,count__31131_31739,i__31132_31740,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31224_31833,map__31224_31834__$1,gline_31835,gcol_31836,name_31837,seq__31209_31827__$1,temp__5735__auto___31826__$1,vec__31206_31796,column_31797,column_info_31798,seq__31129_31790__$1,temp__5735__auto___31789,vec__31126_31734,line_31735,columns_31736,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31836], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31735,new cljs.core.Keyword(null,"col","col",-1959363084),column_31797,new cljs.core.Keyword(null,"name","name",1843675177),name_31837], null));
});})(seq__31209_31799,chunk__31210_31800,count__31211_31801,i__31212_31802,seq__31129_31737,chunk__31130_31738,count__31131_31739,i__31132_31740,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31224_31833,map__31224_31834__$1,gline_31835,gcol_31836,name_31837,seq__31209_31827__$1,temp__5735__auto___31826__$1,vec__31206_31796,column_31797,column_info_31798,seq__31129_31790__$1,temp__5735__auto___31789,vec__31126_31734,line_31735,columns_31736,inverted))
,cljs.core.sorted_map()));


var G__31838 = cljs.core.next(seq__31209_31827__$1);
var G__31839 = null;
var G__31840 = (0);
var G__31841 = (0);
seq__31209_31799 = G__31838;
chunk__31210_31800 = G__31839;
count__31211_31801 = G__31840;
i__31212_31802 = G__31841;
continue;
}
} else {
}
}
break;
}


var G__31842 = cljs.core.next(seq__31129_31790__$1);
var G__31843 = null;
var G__31844 = (0);
var G__31845 = (0);
seq__31129_31737 = G__31842;
chunk__31130_31738 = G__31843;
count__31131_31739 = G__31844;
i__31132_31740 = G__31845;
continue;
}
} else {
}
}
break;
}


var G__31846 = seq__30765_31730;
var G__31847 = chunk__30766_31731;
var G__31848 = count__30767_31732;
var G__31849 = (i__30768_31733 + (1));
seq__30765_31730 = G__31846;
chunk__30766_31731 = G__31847;
count__30767_31732 = G__31848;
i__30768_31733 = G__31849;
continue;
} else {
var temp__5735__auto___31850 = cljs.core.seq(seq__30765_31730);
if(temp__5735__auto___31850){
var seq__30765_31851__$1 = temp__5735__auto___31850;
if(cljs.core.chunked_seq_QMARK_(seq__30765_31851__$1)){
var c__4556__auto___31852 = cljs.core.chunk_first(seq__30765_31851__$1);
var G__31853 = cljs.core.chunk_rest(seq__30765_31851__$1);
var G__31854 = c__4556__auto___31852;
var G__31855 = cljs.core.count(c__4556__auto___31852);
var G__31856 = (0);
seq__30765_31730 = G__31853;
chunk__30766_31731 = G__31854;
count__30767_31732 = G__31855;
i__30768_31733 = G__31856;
continue;
} else {
var vec__31231_31857 = cljs.core.first(seq__30765_31851__$1);
var line_31858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31231_31857,(0),null);
var columns_31859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31231_31857,(1),null);
var seq__31234_31860 = cljs.core.seq(columns_31859);
var chunk__31235_31861 = null;
var count__31236_31862 = (0);
var i__31237_31863 = (0);
while(true){
if((i__31237_31863 < count__31236_31862)){
var vec__31281_31866 = chunk__31235_31861.cljs$core$IIndexed$_nth$arity$2(null,i__31237_31863);
var column_31867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31281_31866,(0),null);
var column_info_31868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31281_31866,(1),null);
var seq__31284_31871 = cljs.core.seq(column_info_31868);
var chunk__31285_31872 = null;
var count__31286_31873 = (0);
var i__31287_31874 = (0);
while(true){
if((i__31287_31874 < count__31286_31873)){
var map__31292_31875 = chunk__31285_31872.cljs$core$IIndexed$_nth$arity$2(null,i__31287_31874);
var map__31292_31876__$1 = (((((!((map__31292_31875 == null))))?(((((map__31292_31875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31292_31875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31292_31875):map__31292_31875);
var gline_31877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31292_31876__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31292_31876__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31292_31876__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31877], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31284_31871,chunk__31285_31872,count__31286_31873,i__31287_31874,seq__31234_31860,chunk__31235_31861,count__31236_31862,i__31237_31863,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31292_31875,map__31292_31876__$1,gline_31877,gcol_31878,name_31879,vec__31281_31866,column_31867,column_info_31868,vec__31231_31857,line_31858,columns_31859,seq__30765_31851__$1,temp__5735__auto___31850,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31878], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31858,new cljs.core.Keyword(null,"col","col",-1959363084),column_31867,new cljs.core.Keyword(null,"name","name",1843675177),name_31879], null));
});})(seq__31284_31871,chunk__31285_31872,count__31286_31873,i__31287_31874,seq__31234_31860,chunk__31235_31861,count__31236_31862,i__31237_31863,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31292_31875,map__31292_31876__$1,gline_31877,gcol_31878,name_31879,vec__31281_31866,column_31867,column_info_31868,vec__31231_31857,line_31858,columns_31859,seq__30765_31851__$1,temp__5735__auto___31850,inverted))
,cljs.core.sorted_map()));


var G__31882 = seq__31284_31871;
var G__31883 = chunk__31285_31872;
var G__31884 = count__31286_31873;
var G__31885 = (i__31287_31874 + (1));
seq__31284_31871 = G__31882;
chunk__31285_31872 = G__31883;
count__31286_31873 = G__31884;
i__31287_31874 = G__31885;
continue;
} else {
var temp__5735__auto___31886__$1 = cljs.core.seq(seq__31284_31871);
if(temp__5735__auto___31886__$1){
var seq__31284_31887__$1 = temp__5735__auto___31886__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31284_31887__$1)){
var c__4556__auto___31888 = cljs.core.chunk_first(seq__31284_31887__$1);
var G__31889 = cljs.core.chunk_rest(seq__31284_31887__$1);
var G__31890 = c__4556__auto___31888;
var G__31891 = cljs.core.count(c__4556__auto___31888);
var G__31892 = (0);
seq__31284_31871 = G__31889;
chunk__31285_31872 = G__31890;
count__31286_31873 = G__31891;
i__31287_31874 = G__31892;
continue;
} else {
var map__31309_31896 = cljs.core.first(seq__31284_31887__$1);
var map__31309_31897__$1 = (((((!((map__31309_31896 == null))))?(((((map__31309_31896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31309_31896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31309_31896):map__31309_31896);
var gline_31898 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31309_31897__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31309_31897__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31309_31897__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31898], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31284_31871,chunk__31285_31872,count__31286_31873,i__31287_31874,seq__31234_31860,chunk__31235_31861,count__31236_31862,i__31237_31863,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31309_31896,map__31309_31897__$1,gline_31898,gcol_31899,name_31900,seq__31284_31887__$1,temp__5735__auto___31886__$1,vec__31281_31866,column_31867,column_info_31868,vec__31231_31857,line_31858,columns_31859,seq__30765_31851__$1,temp__5735__auto___31850,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31899], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31858,new cljs.core.Keyword(null,"col","col",-1959363084),column_31867,new cljs.core.Keyword(null,"name","name",1843675177),name_31900], null));
});})(seq__31284_31871,chunk__31285_31872,count__31286_31873,i__31287_31874,seq__31234_31860,chunk__31235_31861,count__31236_31862,i__31237_31863,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31309_31896,map__31309_31897__$1,gline_31898,gcol_31899,name_31900,seq__31284_31887__$1,temp__5735__auto___31886__$1,vec__31281_31866,column_31867,column_info_31868,vec__31231_31857,line_31858,columns_31859,seq__30765_31851__$1,temp__5735__auto___31850,inverted))
,cljs.core.sorted_map()));


var G__31901 = cljs.core.next(seq__31284_31887__$1);
var G__31902 = null;
var G__31903 = (0);
var G__31904 = (0);
seq__31284_31871 = G__31901;
chunk__31285_31872 = G__31902;
count__31286_31873 = G__31903;
i__31287_31874 = G__31904;
continue;
}
} else {
}
}
break;
}


var G__31905 = seq__31234_31860;
var G__31906 = chunk__31235_31861;
var G__31907 = count__31236_31862;
var G__31908 = (i__31237_31863 + (1));
seq__31234_31860 = G__31905;
chunk__31235_31861 = G__31906;
count__31236_31862 = G__31907;
i__31237_31863 = G__31908;
continue;
} else {
var temp__5735__auto___31909__$1 = cljs.core.seq(seq__31234_31860);
if(temp__5735__auto___31909__$1){
var seq__31234_31910__$1 = temp__5735__auto___31909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31234_31910__$1)){
var c__4556__auto___31911 = cljs.core.chunk_first(seq__31234_31910__$1);
var G__31912 = cljs.core.chunk_rest(seq__31234_31910__$1);
var G__31913 = c__4556__auto___31911;
var G__31914 = cljs.core.count(c__4556__auto___31911);
var G__31915 = (0);
seq__31234_31860 = G__31912;
chunk__31235_31861 = G__31913;
count__31236_31862 = G__31914;
i__31237_31863 = G__31915;
continue;
} else {
var vec__31318_31916 = cljs.core.first(seq__31234_31910__$1);
var column_31917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31318_31916,(0),null);
var column_info_31918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31318_31916,(1),null);
var seq__31321_31919 = cljs.core.seq(column_info_31918);
var chunk__31322_31920 = null;
var count__31323_31921 = (0);
var i__31324_31922 = (0);
while(true){
if((i__31324_31922 < count__31323_31921)){
var map__31329_31924 = chunk__31322_31920.cljs$core$IIndexed$_nth$arity$2(null,i__31324_31922);
var map__31329_31925__$1 = (((((!((map__31329_31924 == null))))?(((((map__31329_31924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31329_31924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31329_31924):map__31329_31924);
var gline_31926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31329_31925__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31329_31925__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31329_31925__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31926], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31321_31919,chunk__31322_31920,count__31323_31921,i__31324_31922,seq__31234_31860,chunk__31235_31861,count__31236_31862,i__31237_31863,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31329_31924,map__31329_31925__$1,gline_31926,gcol_31927,name_31928,vec__31318_31916,column_31917,column_info_31918,seq__31234_31910__$1,temp__5735__auto___31909__$1,vec__31231_31857,line_31858,columns_31859,seq__30765_31851__$1,temp__5735__auto___31850,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31927], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31858,new cljs.core.Keyword(null,"col","col",-1959363084),column_31917,new cljs.core.Keyword(null,"name","name",1843675177),name_31928], null));
});})(seq__31321_31919,chunk__31322_31920,count__31323_31921,i__31324_31922,seq__31234_31860,chunk__31235_31861,count__31236_31862,i__31237_31863,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31329_31924,map__31329_31925__$1,gline_31926,gcol_31927,name_31928,vec__31318_31916,column_31917,column_info_31918,seq__31234_31910__$1,temp__5735__auto___31909__$1,vec__31231_31857,line_31858,columns_31859,seq__30765_31851__$1,temp__5735__auto___31850,inverted))
,cljs.core.sorted_map()));


var G__31940 = seq__31321_31919;
var G__31941 = chunk__31322_31920;
var G__31942 = count__31323_31921;
var G__31943 = (i__31324_31922 + (1));
seq__31321_31919 = G__31940;
chunk__31322_31920 = G__31941;
count__31323_31921 = G__31942;
i__31324_31922 = G__31943;
continue;
} else {
var temp__5735__auto___31944__$2 = cljs.core.seq(seq__31321_31919);
if(temp__5735__auto___31944__$2){
var seq__31321_31945__$1 = temp__5735__auto___31944__$2;
if(cljs.core.chunked_seq_QMARK_(seq__31321_31945__$1)){
var c__4556__auto___31946 = cljs.core.chunk_first(seq__31321_31945__$1);
var G__31948 = cljs.core.chunk_rest(seq__31321_31945__$1);
var G__31949 = c__4556__auto___31946;
var G__31950 = cljs.core.count(c__4556__auto___31946);
var G__31951 = (0);
seq__31321_31919 = G__31948;
chunk__31322_31920 = G__31949;
count__31323_31921 = G__31950;
i__31324_31922 = G__31951;
continue;
} else {
var map__31334_31952 = cljs.core.first(seq__31321_31945__$1);
var map__31334_31953__$1 = (((((!((map__31334_31952 == null))))?(((((map__31334_31952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31334_31952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31334_31952):map__31334_31952);
var gline_31954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31334_31953__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31334_31953__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31334_31953__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31954], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31321_31919,chunk__31322_31920,count__31323_31921,i__31324_31922,seq__31234_31860,chunk__31235_31861,count__31236_31862,i__31237_31863,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31334_31952,map__31334_31953__$1,gline_31954,gcol_31955,name_31956,seq__31321_31945__$1,temp__5735__auto___31944__$2,vec__31318_31916,column_31917,column_info_31918,seq__31234_31910__$1,temp__5735__auto___31909__$1,vec__31231_31857,line_31858,columns_31859,seq__30765_31851__$1,temp__5735__auto___31850,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31955], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31858,new cljs.core.Keyword(null,"col","col",-1959363084),column_31917,new cljs.core.Keyword(null,"name","name",1843675177),name_31956], null));
});})(seq__31321_31919,chunk__31322_31920,count__31323_31921,i__31324_31922,seq__31234_31860,chunk__31235_31861,count__31236_31862,i__31237_31863,seq__30765_31730,chunk__30766_31731,count__30767_31732,i__30768_31733,map__31334_31952,map__31334_31953__$1,gline_31954,gcol_31955,name_31956,seq__31321_31945__$1,temp__5735__auto___31944__$2,vec__31318_31916,column_31917,column_info_31918,seq__31234_31910__$1,temp__5735__auto___31909__$1,vec__31231_31857,line_31858,columns_31859,seq__30765_31851__$1,temp__5735__auto___31850,inverted))
,cljs.core.sorted_map()));


var G__31958 = cljs.core.next(seq__31321_31945__$1);
var G__31959 = null;
var G__31960 = (0);
var G__31961 = (0);
seq__31321_31919 = G__31958;
chunk__31322_31920 = G__31959;
count__31323_31921 = G__31960;
i__31324_31922 = G__31961;
continue;
}
} else {
}
}
break;
}


var G__31962 = cljs.core.next(seq__31234_31910__$1);
var G__31963 = null;
var G__31964 = (0);
var G__31965 = (0);
seq__31234_31860 = G__31962;
chunk__31235_31861 = G__31963;
count__31236_31862 = G__31964;
i__31237_31863 = G__31965;
continue;
}
} else {
}
}
break;
}


var G__31966 = cljs.core.next(seq__30765_31851__$1);
var G__31967 = null;
var G__31968 = (0);
var G__31969 = (0);
seq__30765_31730 = G__31966;
chunk__30766_31731 = G__31967;
count__30767_31732 = G__31968;
i__30768_31733 = G__31969;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

//# sourceMappingURL=cljs.source_map.js.map
