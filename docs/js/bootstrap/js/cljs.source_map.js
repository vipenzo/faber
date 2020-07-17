goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__50831){
var vec__50832 = p__50831;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50832,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50832,(1),null);
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
var vec__50840 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50840,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50840,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50840,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50840,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50840,(4),null);
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
var vec__50844 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50844,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50844,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50844,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50844,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50844,(4),null);
var vec__50847 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50847,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50847,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50847,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50847,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50847,(4),null);
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
var map__50853 = segmap;
var map__50853__$1 = (((((!((map__50853 == null))))?(((((map__50853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50853):map__50853);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50853__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50853__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50853__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50853__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50853__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__50863 = arguments.length;
switch (G__50863) {
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
var vec__50868 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__52024 = cljs.core.next(segs__$1);
var G__52025 = nrelseg;
var G__52026 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__52024;
relseg__$1 = G__52025;
result__$1 = G__52026;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50868,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50868,(1),null);
var G__52028 = (gline + (1));
var G__52029 = cljs.core.next(lines__$1);
var G__52030 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__52031 = result__$1;
gline = G__52028;
lines__$1 = G__52029;
relseg = G__52030;
result = G__52031;
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
var map__50877 = segmap;
var map__50877__$1 = (((((!((map__50877 == null))))?(((((map__50877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50877):map__50877);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50877__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50877__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50877__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50877__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50877__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__50876_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__50876_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__50890 = arguments.length;
switch (G__50890) {
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
var vec__50904 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__52047 = cljs.core.next(segs__$1);
var G__52048 = nrelseg;
var G__52049 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__52047;
relseg__$1 = G__52048;
result__$1 = G__52049;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50904,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50904,(1),null);
var G__52053 = (gline + (1));
var G__52054 = cljs.core.next(lines__$1);
var G__52055 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__52056 = result__$1;
gline = G__52053;
lines__$1 = G__52054;
relseg = G__52055;
result = G__52056;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__50917){
var vec__50918 = p__50917;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50918,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50918,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50918,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50918,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50918,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__50924){
var vec__50925 = p__50924;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50925,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50925,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50925,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50925,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50925,(4),null);
var seg = vec__50925;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__50928){
var vec__50929 = p__50928;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50929,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50929,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50929,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50929,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50929,(4),null);
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
var seq__50947 = cljs.core.seq(infos);
var chunk__50948 = null;
var count__50949 = (0);
var i__50950 = (0);
while(true){
if((i__50950 < count__50949)){
var info = chunk__50948.cljs$core$IIndexed$_nth$arity$2(null,i__50950);
var segv_52065 = info__GT_segv(info,source_idx,line,col);
var gline_52066 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_52067 = cljs.core.count(cljs.core.deref(lines));
if((gline_52066 > (lc_52067 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__50947,chunk__50948,count__50949,i__50950,segv_52065,gline_52066,lc_52067,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_52066 - (lc_52067 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_52065], null));
});})(seq__50947,chunk__50948,count__50949,i__50950,segv_52065,gline_52066,lc_52067,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__50947,chunk__50948,count__50949,i__50950,segv_52065,gline_52066,lc_52067,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52066], null),cljs.core.conj,segv_52065);
});})(seq__50947,chunk__50948,count__50949,i__50950,segv_52065,gline_52066,lc_52067,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__52068 = seq__50947;
var G__52069 = chunk__50948;
var G__52070 = count__50949;
var G__52071 = (i__50950 + (1));
seq__50947 = G__52068;
chunk__50948 = G__52069;
count__50949 = G__52070;
i__50950 = G__52071;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50947);
if(temp__5735__auto__){
var seq__50947__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50947__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50947__$1);
var G__52072 = cljs.core.chunk_rest(seq__50947__$1);
var G__52073 = c__4556__auto__;
var G__52074 = cljs.core.count(c__4556__auto__);
var G__52075 = (0);
seq__50947 = G__52072;
chunk__50948 = G__52073;
count__50949 = G__52074;
i__50950 = G__52075;
continue;
} else {
var info = cljs.core.first(seq__50947__$1);
var segv_52076 = info__GT_segv(info,source_idx,line,col);
var gline_52077 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_52078 = cljs.core.count(cljs.core.deref(lines));
if((gline_52077 > (lc_52078 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__50947,chunk__50948,count__50949,i__50950,segv_52076,gline_52077,lc_52078,info,seq__50947__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_52077 - (lc_52078 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_52076], null));
});})(seq__50947,chunk__50948,count__50949,i__50950,segv_52076,gline_52077,lc_52078,info,seq__50947__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__50947,chunk__50948,count__50949,i__50950,segv_52076,gline_52077,lc_52078,info,seq__50947__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52077], null),cljs.core.conj,segv_52076);
});})(seq__50947,chunk__50948,count__50949,i__50950,segv_52076,gline_52077,lc_52078,info,seq__50947__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__52083 = cljs.core.next(seq__50947__$1);
var G__52084 = null;
var G__52085 = (0);
var G__52086 = (0);
seq__50947 = G__52083;
chunk__50948 = G__52084;
count__50949 = G__52085;
i__50950 = G__52086;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__50977_52088 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__50978_52089 = null;
var count__50979_52090 = (0);
var i__50980_52091 = (0);
while(true){
if((i__50980_52091 < count__50979_52090)){
var vec__51227_52095 = chunk__50978_52089.cljs$core$IIndexed$_nth$arity$2(null,i__50980_52091);
var source_idx_52096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51227_52095,(0),null);
var vec__51230_52097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51227_52095,(1),null);
var __52098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51230_52097,(0),null);
var lines_52099__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51230_52097,(1),null);
var seq__51234_52100 = cljs.core.seq(lines_52099__$1);
var chunk__51235_52101 = null;
var count__51236_52102 = (0);
var i__51237_52103 = (0);
while(true){
if((i__51237_52103 < count__51236_52102)){
var vec__51290_52104 = chunk__51235_52101.cljs$core$IIndexed$_nth$arity$2(null,i__51237_52103);
var line_52105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51290_52104,(0),null);
var cols_52106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51290_52104,(1),null);
var seq__51293_52108 = cljs.core.seq(cols_52106);
var chunk__51294_52109 = null;
var count__51295_52110 = (0);
var i__51296_52111 = (0);
while(true){
if((i__51296_52111 < count__51295_52110)){
var vec__51304_52114 = chunk__51294_52109.cljs$core$IIndexed$_nth$arity$2(null,i__51296_52111);
var col_52115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51304_52114,(0),null);
var infos_52116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51304_52114,(1),null);
encode_cols(infos_52116,source_idx_52096,line_52105,col_52115);


var G__52117 = seq__51293_52108;
var G__52118 = chunk__51294_52109;
var G__52119 = count__51295_52110;
var G__52120 = (i__51296_52111 + (1));
seq__51293_52108 = G__52117;
chunk__51294_52109 = G__52118;
count__51295_52110 = G__52119;
i__51296_52111 = G__52120;
continue;
} else {
var temp__5735__auto___52122 = cljs.core.seq(seq__51293_52108);
if(temp__5735__auto___52122){
var seq__51293_52123__$1 = temp__5735__auto___52122;
if(cljs.core.chunked_seq_QMARK_(seq__51293_52123__$1)){
var c__4556__auto___52124 = cljs.core.chunk_first(seq__51293_52123__$1);
var G__52126 = cljs.core.chunk_rest(seq__51293_52123__$1);
var G__52127 = c__4556__auto___52124;
var G__52128 = cljs.core.count(c__4556__auto___52124);
var G__52129 = (0);
seq__51293_52108 = G__52126;
chunk__51294_52109 = G__52127;
count__51295_52110 = G__52128;
i__51296_52111 = G__52129;
continue;
} else {
var vec__51309_52130 = cljs.core.first(seq__51293_52123__$1);
var col_52131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51309_52130,(0),null);
var infos_52132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51309_52130,(1),null);
encode_cols(infos_52132,source_idx_52096,line_52105,col_52131);


var G__52133 = cljs.core.next(seq__51293_52123__$1);
var G__52134 = null;
var G__52135 = (0);
var G__52136 = (0);
seq__51293_52108 = G__52133;
chunk__51294_52109 = G__52134;
count__51295_52110 = G__52135;
i__51296_52111 = G__52136;
continue;
}
} else {
}
}
break;
}


var G__52137 = seq__51234_52100;
var G__52138 = chunk__51235_52101;
var G__52139 = count__51236_52102;
var G__52140 = (i__51237_52103 + (1));
seq__51234_52100 = G__52137;
chunk__51235_52101 = G__52138;
count__51236_52102 = G__52139;
i__51237_52103 = G__52140;
continue;
} else {
var temp__5735__auto___52141 = cljs.core.seq(seq__51234_52100);
if(temp__5735__auto___52141){
var seq__51234_52142__$1 = temp__5735__auto___52141;
if(cljs.core.chunked_seq_QMARK_(seq__51234_52142__$1)){
var c__4556__auto___52143 = cljs.core.chunk_first(seq__51234_52142__$1);
var G__52144 = cljs.core.chunk_rest(seq__51234_52142__$1);
var G__52145 = c__4556__auto___52143;
var G__52146 = cljs.core.count(c__4556__auto___52143);
var G__52147 = (0);
seq__51234_52100 = G__52144;
chunk__51235_52101 = G__52145;
count__51236_52102 = G__52146;
i__51237_52103 = G__52147;
continue;
} else {
var vec__51312_52148 = cljs.core.first(seq__51234_52142__$1);
var line_52149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51312_52148,(0),null);
var cols_52150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51312_52148,(1),null);
var seq__51315_52151 = cljs.core.seq(cols_52150);
var chunk__51316_52152 = null;
var count__51317_52153 = (0);
var i__51318_52154 = (0);
while(true){
if((i__51318_52154 < count__51317_52153)){
var vec__51329_52155 = chunk__51316_52152.cljs$core$IIndexed$_nth$arity$2(null,i__51318_52154);
var col_52156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51329_52155,(0),null);
var infos_52157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51329_52155,(1),null);
encode_cols(infos_52157,source_idx_52096,line_52149,col_52156);


var G__52161 = seq__51315_52151;
var G__52162 = chunk__51316_52152;
var G__52163 = count__51317_52153;
var G__52164 = (i__51318_52154 + (1));
seq__51315_52151 = G__52161;
chunk__51316_52152 = G__52162;
count__51317_52153 = G__52163;
i__51318_52154 = G__52164;
continue;
} else {
var temp__5735__auto___52165__$1 = cljs.core.seq(seq__51315_52151);
if(temp__5735__auto___52165__$1){
var seq__51315_52166__$1 = temp__5735__auto___52165__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51315_52166__$1)){
var c__4556__auto___52167 = cljs.core.chunk_first(seq__51315_52166__$1);
var G__52168 = cljs.core.chunk_rest(seq__51315_52166__$1);
var G__52169 = c__4556__auto___52167;
var G__52170 = cljs.core.count(c__4556__auto___52167);
var G__52171 = (0);
seq__51315_52151 = G__52168;
chunk__51316_52152 = G__52169;
count__51317_52153 = G__52170;
i__51318_52154 = G__52171;
continue;
} else {
var vec__51332_52172 = cljs.core.first(seq__51315_52166__$1);
var col_52173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51332_52172,(0),null);
var infos_52174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51332_52172,(1),null);
encode_cols(infos_52174,source_idx_52096,line_52149,col_52173);


var G__52175 = cljs.core.next(seq__51315_52166__$1);
var G__52176 = null;
var G__52177 = (0);
var G__52178 = (0);
seq__51315_52151 = G__52175;
chunk__51316_52152 = G__52176;
count__51317_52153 = G__52177;
i__51318_52154 = G__52178;
continue;
}
} else {
}
}
break;
}


var G__52179 = cljs.core.next(seq__51234_52142__$1);
var G__52180 = null;
var G__52181 = (0);
var G__52182 = (0);
seq__51234_52100 = G__52179;
chunk__51235_52101 = G__52180;
count__51236_52102 = G__52181;
i__51237_52103 = G__52182;
continue;
}
} else {
}
}
break;
}


var G__52183 = seq__50977_52088;
var G__52184 = chunk__50978_52089;
var G__52185 = count__50979_52090;
var G__52186 = (i__50980_52091 + (1));
seq__50977_52088 = G__52183;
chunk__50978_52089 = G__52184;
count__50979_52090 = G__52185;
i__50980_52091 = G__52186;
continue;
} else {
var temp__5735__auto___52187 = cljs.core.seq(seq__50977_52088);
if(temp__5735__auto___52187){
var seq__50977_52188__$1 = temp__5735__auto___52187;
if(cljs.core.chunked_seq_QMARK_(seq__50977_52188__$1)){
var c__4556__auto___52189 = cljs.core.chunk_first(seq__50977_52188__$1);
var G__52190 = cljs.core.chunk_rest(seq__50977_52188__$1);
var G__52191 = c__4556__auto___52189;
var G__52192 = cljs.core.count(c__4556__auto___52189);
var G__52193 = (0);
seq__50977_52088 = G__52190;
chunk__50978_52089 = G__52191;
count__50979_52090 = G__52192;
i__50980_52091 = G__52193;
continue;
} else {
var vec__51337_52194 = cljs.core.first(seq__50977_52188__$1);
var source_idx_52195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51337_52194,(0),null);
var vec__51340_52196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51337_52194,(1),null);
var __52197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51340_52196,(0),null);
var lines_52198__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51340_52196,(1),null);
var seq__51343_52199 = cljs.core.seq(lines_52198__$1);
var chunk__51344_52200 = null;
var count__51345_52201 = (0);
var i__51346_52202 = (0);
while(true){
if((i__51346_52202 < count__51345_52201)){
var vec__51395_52203 = chunk__51344_52200.cljs$core$IIndexed$_nth$arity$2(null,i__51346_52202);
var line_52204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51395_52203,(0),null);
var cols_52205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51395_52203,(1),null);
var seq__51398_52207 = cljs.core.seq(cols_52205);
var chunk__51399_52208 = null;
var count__51400_52209 = (0);
var i__51401_52210 = (0);
while(true){
if((i__51401_52210 < count__51400_52209)){
var vec__51408_52211 = chunk__51399_52208.cljs$core$IIndexed$_nth$arity$2(null,i__51401_52210);
var col_52212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51408_52211,(0),null);
var infos_52213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51408_52211,(1),null);
encode_cols(infos_52213,source_idx_52195,line_52204,col_52212);


var G__52214 = seq__51398_52207;
var G__52215 = chunk__51399_52208;
var G__52216 = count__51400_52209;
var G__52217 = (i__51401_52210 + (1));
seq__51398_52207 = G__52214;
chunk__51399_52208 = G__52215;
count__51400_52209 = G__52216;
i__51401_52210 = G__52217;
continue;
} else {
var temp__5735__auto___52218__$1 = cljs.core.seq(seq__51398_52207);
if(temp__5735__auto___52218__$1){
var seq__51398_52219__$1 = temp__5735__auto___52218__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51398_52219__$1)){
var c__4556__auto___52220 = cljs.core.chunk_first(seq__51398_52219__$1);
var G__52221 = cljs.core.chunk_rest(seq__51398_52219__$1);
var G__52222 = c__4556__auto___52220;
var G__52223 = cljs.core.count(c__4556__auto___52220);
var G__52224 = (0);
seq__51398_52207 = G__52221;
chunk__51399_52208 = G__52222;
count__51400_52209 = G__52223;
i__51401_52210 = G__52224;
continue;
} else {
var vec__51411_52225 = cljs.core.first(seq__51398_52219__$1);
var col_52226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51411_52225,(0),null);
var infos_52227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51411_52225,(1),null);
encode_cols(infos_52227,source_idx_52195,line_52204,col_52226);


var G__52228 = cljs.core.next(seq__51398_52219__$1);
var G__52229 = null;
var G__52230 = (0);
var G__52231 = (0);
seq__51398_52207 = G__52228;
chunk__51399_52208 = G__52229;
count__51400_52209 = G__52230;
i__51401_52210 = G__52231;
continue;
}
} else {
}
}
break;
}


var G__52232 = seq__51343_52199;
var G__52233 = chunk__51344_52200;
var G__52234 = count__51345_52201;
var G__52235 = (i__51346_52202 + (1));
seq__51343_52199 = G__52232;
chunk__51344_52200 = G__52233;
count__51345_52201 = G__52234;
i__51346_52202 = G__52235;
continue;
} else {
var temp__5735__auto___52236__$1 = cljs.core.seq(seq__51343_52199);
if(temp__5735__auto___52236__$1){
var seq__51343_52237__$1 = temp__5735__auto___52236__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51343_52237__$1)){
var c__4556__auto___52238 = cljs.core.chunk_first(seq__51343_52237__$1);
var G__52239 = cljs.core.chunk_rest(seq__51343_52237__$1);
var G__52240 = c__4556__auto___52238;
var G__52241 = cljs.core.count(c__4556__auto___52238);
var G__52242 = (0);
seq__51343_52199 = G__52239;
chunk__51344_52200 = G__52240;
count__51345_52201 = G__52241;
i__51346_52202 = G__52242;
continue;
} else {
var vec__51414_52243 = cljs.core.first(seq__51343_52237__$1);
var line_52244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51414_52243,(0),null);
var cols_52245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51414_52243,(1),null);
var seq__51417_52246 = cljs.core.seq(cols_52245);
var chunk__51418_52247 = null;
var count__51419_52248 = (0);
var i__51420_52249 = (0);
while(true){
if((i__51420_52249 < count__51419_52248)){
var vec__51433_52250 = chunk__51418_52247.cljs$core$IIndexed$_nth$arity$2(null,i__51420_52249);
var col_52251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51433_52250,(0),null);
var infos_52252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51433_52250,(1),null);
encode_cols(infos_52252,source_idx_52195,line_52244,col_52251);


var G__52253 = seq__51417_52246;
var G__52254 = chunk__51418_52247;
var G__52255 = count__51419_52248;
var G__52256 = (i__51420_52249 + (1));
seq__51417_52246 = G__52253;
chunk__51418_52247 = G__52254;
count__51419_52248 = G__52255;
i__51420_52249 = G__52256;
continue;
} else {
var temp__5735__auto___52257__$2 = cljs.core.seq(seq__51417_52246);
if(temp__5735__auto___52257__$2){
var seq__51417_52258__$1 = temp__5735__auto___52257__$2;
if(cljs.core.chunked_seq_QMARK_(seq__51417_52258__$1)){
var c__4556__auto___52259 = cljs.core.chunk_first(seq__51417_52258__$1);
var G__52260 = cljs.core.chunk_rest(seq__51417_52258__$1);
var G__52261 = c__4556__auto___52259;
var G__52262 = cljs.core.count(c__4556__auto___52259);
var G__52263 = (0);
seq__51417_52246 = G__52260;
chunk__51418_52247 = G__52261;
count__51419_52248 = G__52262;
i__51420_52249 = G__52263;
continue;
} else {
var vec__51442_52264 = cljs.core.first(seq__51417_52258__$1);
var col_52265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51442_52264,(0),null);
var infos_52266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51442_52264,(1),null);
encode_cols(infos_52266,source_idx_52195,line_52244,col_52265);


var G__52267 = cljs.core.next(seq__51417_52258__$1);
var G__52268 = null;
var G__52269 = (0);
var G__52270 = (0);
seq__51417_52246 = G__52267;
chunk__51418_52247 = G__52268;
count__51419_52248 = G__52269;
i__51420_52249 = G__52270;
continue;
}
} else {
}
}
break;
}


var G__52271 = cljs.core.next(seq__51343_52237__$1);
var G__52272 = null;
var G__52273 = (0);
var G__52274 = (0);
seq__51343_52199 = G__52271;
chunk__51344_52200 = G__52272;
count__51345_52201 = G__52273;
i__51346_52202 = G__52274;
continue;
}
} else {
}
}
break;
}


var G__52275 = cljs.core.next(seq__50977_52188__$1);
var G__52276 = null;
var G__52277 = (0);
var G__52278 = (0);
seq__50977_52088 = G__52275;
chunk__50978_52089 = G__52276;
count__50979_52090 = G__52277;
i__50980_52091 = G__52278;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__51445 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__50942_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50942_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__50943_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__50943_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50944_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__50944_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__51446 = G__51445;
goog.object.set(G__51446,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__51446;
} else {
return G__51445;
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
var vec__51447 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51447,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51447,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__51450 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51450,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51450,(1),null);
var G__52282 = cljs.core.next(col_map_seq);
var G__52283 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__51450,col,infos,vec__51447,line,col_map){
return (function (v,p__51453){
var map__51454 = p__51453;
var map__51454__$1 = (((((!((map__51454 == null))))?(((((map__51454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51454):map__51454);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51454__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51454__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__51450,col,infos,vec__51447,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__52282;
new_cols = G__52283;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__52284 = cljs.core.next(line_map_seq);
var G__52285 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__52284;
new_lines = G__52285;
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
var seq__51456_52288 = cljs.core.seq(reverse_map);
var chunk__51457_52289 = null;
var count__51458_52290 = (0);
var i__51459_52291 = (0);
while(true){
if((i__51459_52291 < count__51458_52290)){
var vec__51750_52294 = chunk__51457_52289.cljs$core$IIndexed$_nth$arity$2(null,i__51459_52291);
var line_52295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51750_52294,(0),null);
var columns_52296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51750_52294,(1),null);
var seq__51753_52300 = cljs.core.seq(columns_52296);
var chunk__51754_52301 = null;
var count__51755_52302 = (0);
var i__51756_52303 = (0);
while(true){
if((i__51756_52303 < count__51755_52302)){
var vec__51793_52304 = chunk__51754_52301.cljs$core$IIndexed$_nth$arity$2(null,i__51756_52303);
var column_52305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51793_52304,(0),null);
var column_info_52306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51793_52304,(1),null);
var seq__51796_52307 = cljs.core.seq(column_info_52306);
var chunk__51797_52308 = null;
var count__51798_52309 = (0);
var i__51799_52310 = (0);
while(true){
if((i__51799_52310 < count__51798_52309)){
var map__51809_52311 = chunk__51797_52308.cljs$core$IIndexed$_nth$arity$2(null,i__51799_52310);
var map__51809_52312__$1 = (((((!((map__51809_52311 == null))))?(((((map__51809_52311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51809_52311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51809_52311):map__51809_52311);
var gline_52313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51809_52312__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_52314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51809_52312__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_52315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51809_52312__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52313], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__51796_52307,chunk__51797_52308,count__51798_52309,i__51799_52310,seq__51753_52300,chunk__51754_52301,count__51755_52302,i__51756_52303,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51809_52311,map__51809_52312__$1,gline_52313,gcol_52314,name_52315,vec__51793_52304,column_52305,column_info_52306,vec__51750_52294,line_52295,columns_52296,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52314], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_52295,new cljs.core.Keyword(null,"col","col",-1959363084),column_52305,new cljs.core.Keyword(null,"name","name",1843675177),name_52315], null));
});})(seq__51796_52307,chunk__51797_52308,count__51798_52309,i__51799_52310,seq__51753_52300,chunk__51754_52301,count__51755_52302,i__51756_52303,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51809_52311,map__51809_52312__$1,gline_52313,gcol_52314,name_52315,vec__51793_52304,column_52305,column_info_52306,vec__51750_52294,line_52295,columns_52296,inverted))
,cljs.core.sorted_map()));


var G__52316 = seq__51796_52307;
var G__52317 = chunk__51797_52308;
var G__52318 = count__51798_52309;
var G__52319 = (i__51799_52310 + (1));
seq__51796_52307 = G__52316;
chunk__51797_52308 = G__52317;
count__51798_52309 = G__52318;
i__51799_52310 = G__52319;
continue;
} else {
var temp__5735__auto___52320 = cljs.core.seq(seq__51796_52307);
if(temp__5735__auto___52320){
var seq__51796_52321__$1 = temp__5735__auto___52320;
if(cljs.core.chunked_seq_QMARK_(seq__51796_52321__$1)){
var c__4556__auto___52323 = cljs.core.chunk_first(seq__51796_52321__$1);
var G__52324 = cljs.core.chunk_rest(seq__51796_52321__$1);
var G__52325 = c__4556__auto___52323;
var G__52326 = cljs.core.count(c__4556__auto___52323);
var G__52327 = (0);
seq__51796_52307 = G__52324;
chunk__51797_52308 = G__52325;
count__51798_52309 = G__52326;
i__51799_52310 = G__52327;
continue;
} else {
var map__51815_52328 = cljs.core.first(seq__51796_52321__$1);
var map__51815_52329__$1 = (((((!((map__51815_52328 == null))))?(((((map__51815_52328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51815_52328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51815_52328):map__51815_52328);
var gline_52330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51815_52329__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_52331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51815_52329__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_52332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51815_52329__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52330], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__51796_52307,chunk__51797_52308,count__51798_52309,i__51799_52310,seq__51753_52300,chunk__51754_52301,count__51755_52302,i__51756_52303,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51815_52328,map__51815_52329__$1,gline_52330,gcol_52331,name_52332,seq__51796_52321__$1,temp__5735__auto___52320,vec__51793_52304,column_52305,column_info_52306,vec__51750_52294,line_52295,columns_52296,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52331], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_52295,new cljs.core.Keyword(null,"col","col",-1959363084),column_52305,new cljs.core.Keyword(null,"name","name",1843675177),name_52332], null));
});})(seq__51796_52307,chunk__51797_52308,count__51798_52309,i__51799_52310,seq__51753_52300,chunk__51754_52301,count__51755_52302,i__51756_52303,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51815_52328,map__51815_52329__$1,gline_52330,gcol_52331,name_52332,seq__51796_52321__$1,temp__5735__auto___52320,vec__51793_52304,column_52305,column_info_52306,vec__51750_52294,line_52295,columns_52296,inverted))
,cljs.core.sorted_map()));


var G__52337 = cljs.core.next(seq__51796_52321__$1);
var G__52338 = null;
var G__52339 = (0);
var G__52340 = (0);
seq__51796_52307 = G__52337;
chunk__51797_52308 = G__52338;
count__51798_52309 = G__52339;
i__51799_52310 = G__52340;
continue;
}
} else {
}
}
break;
}


var G__52341 = seq__51753_52300;
var G__52342 = chunk__51754_52301;
var G__52343 = count__51755_52302;
var G__52344 = (i__51756_52303 + (1));
seq__51753_52300 = G__52341;
chunk__51754_52301 = G__52342;
count__51755_52302 = G__52343;
i__51756_52303 = G__52344;
continue;
} else {
var temp__5735__auto___52345 = cljs.core.seq(seq__51753_52300);
if(temp__5735__auto___52345){
var seq__51753_52346__$1 = temp__5735__auto___52345;
if(cljs.core.chunked_seq_QMARK_(seq__51753_52346__$1)){
var c__4556__auto___52347 = cljs.core.chunk_first(seq__51753_52346__$1);
var G__52348 = cljs.core.chunk_rest(seq__51753_52346__$1);
var G__52349 = c__4556__auto___52347;
var G__52350 = cljs.core.count(c__4556__auto___52347);
var G__52351 = (0);
seq__51753_52300 = G__52348;
chunk__51754_52301 = G__52349;
count__51755_52302 = G__52350;
i__51756_52303 = G__52351;
continue;
} else {
var vec__51818_52352 = cljs.core.first(seq__51753_52346__$1);
var column_52353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51818_52352,(0),null);
var column_info_52354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51818_52352,(1),null);
var seq__51821_52355 = cljs.core.seq(column_info_52354);
var chunk__51822_52356 = null;
var count__51823_52357 = (0);
var i__51824_52358 = (0);
while(true){
if((i__51824_52358 < count__51823_52357)){
var map__51838_52359 = chunk__51822_52356.cljs$core$IIndexed$_nth$arity$2(null,i__51824_52358);
var map__51838_52360__$1 = (((((!((map__51838_52359 == null))))?(((((map__51838_52359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51838_52359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51838_52359):map__51838_52359);
var gline_52361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51838_52360__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_52362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51838_52360__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_52363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51838_52360__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52361], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__51821_52355,chunk__51822_52356,count__51823_52357,i__51824_52358,seq__51753_52300,chunk__51754_52301,count__51755_52302,i__51756_52303,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51838_52359,map__51838_52360__$1,gline_52361,gcol_52362,name_52363,vec__51818_52352,column_52353,column_info_52354,seq__51753_52346__$1,temp__5735__auto___52345,vec__51750_52294,line_52295,columns_52296,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52362], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_52295,new cljs.core.Keyword(null,"col","col",-1959363084),column_52353,new cljs.core.Keyword(null,"name","name",1843675177),name_52363], null));
});})(seq__51821_52355,chunk__51822_52356,count__51823_52357,i__51824_52358,seq__51753_52300,chunk__51754_52301,count__51755_52302,i__51756_52303,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51838_52359,map__51838_52360__$1,gline_52361,gcol_52362,name_52363,vec__51818_52352,column_52353,column_info_52354,seq__51753_52346__$1,temp__5735__auto___52345,vec__51750_52294,line_52295,columns_52296,inverted))
,cljs.core.sorted_map()));


var G__52368 = seq__51821_52355;
var G__52369 = chunk__51822_52356;
var G__52370 = count__51823_52357;
var G__52371 = (i__51824_52358 + (1));
seq__51821_52355 = G__52368;
chunk__51822_52356 = G__52369;
count__51823_52357 = G__52370;
i__51824_52358 = G__52371;
continue;
} else {
var temp__5735__auto___52372__$1 = cljs.core.seq(seq__51821_52355);
if(temp__5735__auto___52372__$1){
var seq__51821_52373__$1 = temp__5735__auto___52372__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51821_52373__$1)){
var c__4556__auto___52374 = cljs.core.chunk_first(seq__51821_52373__$1);
var G__52375 = cljs.core.chunk_rest(seq__51821_52373__$1);
var G__52376 = c__4556__auto___52374;
var G__52377 = cljs.core.count(c__4556__auto___52374);
var G__52378 = (0);
seq__51821_52355 = G__52375;
chunk__51822_52356 = G__52376;
count__51823_52357 = G__52377;
i__51824_52358 = G__52378;
continue;
} else {
var map__51851_52379 = cljs.core.first(seq__51821_52373__$1);
var map__51851_52380__$1 = (((((!((map__51851_52379 == null))))?(((((map__51851_52379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51851_52379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51851_52379):map__51851_52379);
var gline_52381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51851_52380__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_52382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51851_52380__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_52383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51851_52380__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52381], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__51821_52355,chunk__51822_52356,count__51823_52357,i__51824_52358,seq__51753_52300,chunk__51754_52301,count__51755_52302,i__51756_52303,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51851_52379,map__51851_52380__$1,gline_52381,gcol_52382,name_52383,seq__51821_52373__$1,temp__5735__auto___52372__$1,vec__51818_52352,column_52353,column_info_52354,seq__51753_52346__$1,temp__5735__auto___52345,vec__51750_52294,line_52295,columns_52296,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52382], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_52295,new cljs.core.Keyword(null,"col","col",-1959363084),column_52353,new cljs.core.Keyword(null,"name","name",1843675177),name_52383], null));
});})(seq__51821_52355,chunk__51822_52356,count__51823_52357,i__51824_52358,seq__51753_52300,chunk__51754_52301,count__51755_52302,i__51756_52303,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51851_52379,map__51851_52380__$1,gline_52381,gcol_52382,name_52383,seq__51821_52373__$1,temp__5735__auto___52372__$1,vec__51818_52352,column_52353,column_info_52354,seq__51753_52346__$1,temp__5735__auto___52345,vec__51750_52294,line_52295,columns_52296,inverted))
,cljs.core.sorted_map()));


var G__52392 = cljs.core.next(seq__51821_52373__$1);
var G__52393 = null;
var G__52394 = (0);
var G__52395 = (0);
seq__51821_52355 = G__52392;
chunk__51822_52356 = G__52393;
count__51823_52357 = G__52394;
i__51824_52358 = G__52395;
continue;
}
} else {
}
}
break;
}


var G__52396 = cljs.core.next(seq__51753_52346__$1);
var G__52397 = null;
var G__52398 = (0);
var G__52399 = (0);
seq__51753_52300 = G__52396;
chunk__51754_52301 = G__52397;
count__51755_52302 = G__52398;
i__51756_52303 = G__52399;
continue;
}
} else {
}
}
break;
}


var G__52400 = seq__51456_52288;
var G__52401 = chunk__51457_52289;
var G__52402 = count__51458_52290;
var G__52403 = (i__51459_52291 + (1));
seq__51456_52288 = G__52400;
chunk__51457_52289 = G__52401;
count__51458_52290 = G__52402;
i__51459_52291 = G__52403;
continue;
} else {
var temp__5735__auto___52404 = cljs.core.seq(seq__51456_52288);
if(temp__5735__auto___52404){
var seq__51456_52405__$1 = temp__5735__auto___52404;
if(cljs.core.chunked_seq_QMARK_(seq__51456_52405__$1)){
var c__4556__auto___52406 = cljs.core.chunk_first(seq__51456_52405__$1);
var G__52407 = cljs.core.chunk_rest(seq__51456_52405__$1);
var G__52408 = c__4556__auto___52406;
var G__52409 = cljs.core.count(c__4556__auto___52406);
var G__52410 = (0);
seq__51456_52288 = G__52407;
chunk__51457_52289 = G__52408;
count__51458_52290 = G__52409;
i__51459_52291 = G__52410;
continue;
} else {
var vec__51858_52411 = cljs.core.first(seq__51456_52405__$1);
var line_52412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51858_52411,(0),null);
var columns_52413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51858_52411,(1),null);
var seq__51862_52414 = cljs.core.seq(columns_52413);
var chunk__51863_52415 = null;
var count__51864_52416 = (0);
var i__51865_52417 = (0);
while(true){
if((i__51865_52417 < count__51864_52416)){
var vec__51924_52418 = chunk__51863_52415.cljs$core$IIndexed$_nth$arity$2(null,i__51865_52417);
var column_52419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51924_52418,(0),null);
var column_info_52420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51924_52418,(1),null);
var seq__51929_52423 = cljs.core.seq(column_info_52420);
var chunk__51930_52424 = null;
var count__51931_52425 = (0);
var i__51932_52426 = (0);
while(true){
if((i__51932_52426 < count__51931_52425)){
var map__51945_52427 = chunk__51930_52424.cljs$core$IIndexed$_nth$arity$2(null,i__51932_52426);
var map__51945_52428__$1 = (((((!((map__51945_52427 == null))))?(((((map__51945_52427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51945_52427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51945_52427):map__51945_52427);
var gline_52429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51945_52428__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_52430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51945_52428__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_52431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51945_52428__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52429], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__51929_52423,chunk__51930_52424,count__51931_52425,i__51932_52426,seq__51862_52414,chunk__51863_52415,count__51864_52416,i__51865_52417,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51945_52427,map__51945_52428__$1,gline_52429,gcol_52430,name_52431,vec__51924_52418,column_52419,column_info_52420,vec__51858_52411,line_52412,columns_52413,seq__51456_52405__$1,temp__5735__auto___52404,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52430], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_52412,new cljs.core.Keyword(null,"col","col",-1959363084),column_52419,new cljs.core.Keyword(null,"name","name",1843675177),name_52431], null));
});})(seq__51929_52423,chunk__51930_52424,count__51931_52425,i__51932_52426,seq__51862_52414,chunk__51863_52415,count__51864_52416,i__51865_52417,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51945_52427,map__51945_52428__$1,gline_52429,gcol_52430,name_52431,vec__51924_52418,column_52419,column_info_52420,vec__51858_52411,line_52412,columns_52413,seq__51456_52405__$1,temp__5735__auto___52404,inverted))
,cljs.core.sorted_map()));


var G__52435 = seq__51929_52423;
var G__52436 = chunk__51930_52424;
var G__52437 = count__51931_52425;
var G__52438 = (i__51932_52426 + (1));
seq__51929_52423 = G__52435;
chunk__51930_52424 = G__52436;
count__51931_52425 = G__52437;
i__51932_52426 = G__52438;
continue;
} else {
var temp__5735__auto___52439__$1 = cljs.core.seq(seq__51929_52423);
if(temp__5735__auto___52439__$1){
var seq__51929_52440__$1 = temp__5735__auto___52439__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51929_52440__$1)){
var c__4556__auto___52441 = cljs.core.chunk_first(seq__51929_52440__$1);
var G__52442 = cljs.core.chunk_rest(seq__51929_52440__$1);
var G__52443 = c__4556__auto___52441;
var G__52444 = cljs.core.count(c__4556__auto___52441);
var G__52445 = (0);
seq__51929_52423 = G__52442;
chunk__51930_52424 = G__52443;
count__51931_52425 = G__52444;
i__51932_52426 = G__52445;
continue;
} else {
var map__51951_52446 = cljs.core.first(seq__51929_52440__$1);
var map__51951_52447__$1 = (((((!((map__51951_52446 == null))))?(((((map__51951_52446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51951_52446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51951_52446):map__51951_52446);
var gline_52448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51951_52447__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_52449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51951_52447__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_52450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51951_52447__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52448], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__51929_52423,chunk__51930_52424,count__51931_52425,i__51932_52426,seq__51862_52414,chunk__51863_52415,count__51864_52416,i__51865_52417,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51951_52446,map__51951_52447__$1,gline_52448,gcol_52449,name_52450,seq__51929_52440__$1,temp__5735__auto___52439__$1,vec__51924_52418,column_52419,column_info_52420,vec__51858_52411,line_52412,columns_52413,seq__51456_52405__$1,temp__5735__auto___52404,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52449], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_52412,new cljs.core.Keyword(null,"col","col",-1959363084),column_52419,new cljs.core.Keyword(null,"name","name",1843675177),name_52450], null));
});})(seq__51929_52423,chunk__51930_52424,count__51931_52425,i__51932_52426,seq__51862_52414,chunk__51863_52415,count__51864_52416,i__51865_52417,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51951_52446,map__51951_52447__$1,gline_52448,gcol_52449,name_52450,seq__51929_52440__$1,temp__5735__auto___52439__$1,vec__51924_52418,column_52419,column_info_52420,vec__51858_52411,line_52412,columns_52413,seq__51456_52405__$1,temp__5735__auto___52404,inverted))
,cljs.core.sorted_map()));


var G__52451 = cljs.core.next(seq__51929_52440__$1);
var G__52452 = null;
var G__52453 = (0);
var G__52454 = (0);
seq__51929_52423 = G__52451;
chunk__51930_52424 = G__52452;
count__51931_52425 = G__52453;
i__51932_52426 = G__52454;
continue;
}
} else {
}
}
break;
}


var G__52455 = seq__51862_52414;
var G__52456 = chunk__51863_52415;
var G__52457 = count__51864_52416;
var G__52458 = (i__51865_52417 + (1));
seq__51862_52414 = G__52455;
chunk__51863_52415 = G__52456;
count__51864_52416 = G__52457;
i__51865_52417 = G__52458;
continue;
} else {
var temp__5735__auto___52459__$1 = cljs.core.seq(seq__51862_52414);
if(temp__5735__auto___52459__$1){
var seq__51862_52460__$1 = temp__5735__auto___52459__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51862_52460__$1)){
var c__4556__auto___52461 = cljs.core.chunk_first(seq__51862_52460__$1);
var G__52462 = cljs.core.chunk_rest(seq__51862_52460__$1);
var G__52463 = c__4556__auto___52461;
var G__52464 = cljs.core.count(c__4556__auto___52461);
var G__52465 = (0);
seq__51862_52414 = G__52462;
chunk__51863_52415 = G__52463;
count__51864_52416 = G__52464;
i__51865_52417 = G__52465;
continue;
} else {
var vec__51957_52466 = cljs.core.first(seq__51862_52460__$1);
var column_52467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51957_52466,(0),null);
var column_info_52468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51957_52466,(1),null);
var seq__51960_52470 = cljs.core.seq(column_info_52468);
var chunk__51961_52471 = null;
var count__51962_52472 = (0);
var i__51963_52473 = (0);
while(true){
if((i__51963_52473 < count__51962_52472)){
var map__51985_52474 = chunk__51961_52471.cljs$core$IIndexed$_nth$arity$2(null,i__51963_52473);
var map__51985_52475__$1 = (((((!((map__51985_52474 == null))))?(((((map__51985_52474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51985_52474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51985_52474):map__51985_52474);
var gline_52476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51985_52475__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_52477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51985_52475__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_52478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51985_52475__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52476], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__51960_52470,chunk__51961_52471,count__51962_52472,i__51963_52473,seq__51862_52414,chunk__51863_52415,count__51864_52416,i__51865_52417,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51985_52474,map__51985_52475__$1,gline_52476,gcol_52477,name_52478,vec__51957_52466,column_52467,column_info_52468,seq__51862_52460__$1,temp__5735__auto___52459__$1,vec__51858_52411,line_52412,columns_52413,seq__51456_52405__$1,temp__5735__auto___52404,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52477], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_52412,new cljs.core.Keyword(null,"col","col",-1959363084),column_52467,new cljs.core.Keyword(null,"name","name",1843675177),name_52478], null));
});})(seq__51960_52470,chunk__51961_52471,count__51962_52472,i__51963_52473,seq__51862_52414,chunk__51863_52415,count__51864_52416,i__51865_52417,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51985_52474,map__51985_52475__$1,gline_52476,gcol_52477,name_52478,vec__51957_52466,column_52467,column_info_52468,seq__51862_52460__$1,temp__5735__auto___52459__$1,vec__51858_52411,line_52412,columns_52413,seq__51456_52405__$1,temp__5735__auto___52404,inverted))
,cljs.core.sorted_map()));


var G__52480 = seq__51960_52470;
var G__52481 = chunk__51961_52471;
var G__52482 = count__51962_52472;
var G__52483 = (i__51963_52473 + (1));
seq__51960_52470 = G__52480;
chunk__51961_52471 = G__52481;
count__51962_52472 = G__52482;
i__51963_52473 = G__52483;
continue;
} else {
var temp__5735__auto___52484__$2 = cljs.core.seq(seq__51960_52470);
if(temp__5735__auto___52484__$2){
var seq__51960_52485__$1 = temp__5735__auto___52484__$2;
if(cljs.core.chunked_seq_QMARK_(seq__51960_52485__$1)){
var c__4556__auto___52486 = cljs.core.chunk_first(seq__51960_52485__$1);
var G__52487 = cljs.core.chunk_rest(seq__51960_52485__$1);
var G__52488 = c__4556__auto___52486;
var G__52489 = cljs.core.count(c__4556__auto___52486);
var G__52490 = (0);
seq__51960_52470 = G__52487;
chunk__51961_52471 = G__52488;
count__51962_52472 = G__52489;
i__51963_52473 = G__52490;
continue;
} else {
var map__51992_52491 = cljs.core.first(seq__51960_52485__$1);
var map__51992_52492__$1 = (((((!((map__51992_52491 == null))))?(((((map__51992_52491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51992_52491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51992_52491):map__51992_52491);
var gline_52493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51992_52492__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_52494 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51992_52492__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_52495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51992_52492__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52493], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__51960_52470,chunk__51961_52471,count__51962_52472,i__51963_52473,seq__51862_52414,chunk__51863_52415,count__51864_52416,i__51865_52417,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51992_52491,map__51992_52492__$1,gline_52493,gcol_52494,name_52495,seq__51960_52485__$1,temp__5735__auto___52484__$2,vec__51957_52466,column_52467,column_info_52468,seq__51862_52460__$1,temp__5735__auto___52459__$1,vec__51858_52411,line_52412,columns_52413,seq__51456_52405__$1,temp__5735__auto___52404,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52494], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_52412,new cljs.core.Keyword(null,"col","col",-1959363084),column_52467,new cljs.core.Keyword(null,"name","name",1843675177),name_52495], null));
});})(seq__51960_52470,chunk__51961_52471,count__51962_52472,i__51963_52473,seq__51862_52414,chunk__51863_52415,count__51864_52416,i__51865_52417,seq__51456_52288,chunk__51457_52289,count__51458_52290,i__51459_52291,map__51992_52491,map__51992_52492__$1,gline_52493,gcol_52494,name_52495,seq__51960_52485__$1,temp__5735__auto___52484__$2,vec__51957_52466,column_52467,column_info_52468,seq__51862_52460__$1,temp__5735__auto___52459__$1,vec__51858_52411,line_52412,columns_52413,seq__51456_52405__$1,temp__5735__auto___52404,inverted))
,cljs.core.sorted_map()));


var G__52503 = cljs.core.next(seq__51960_52485__$1);
var G__52504 = null;
var G__52505 = (0);
var G__52506 = (0);
seq__51960_52470 = G__52503;
chunk__51961_52471 = G__52504;
count__51962_52472 = G__52505;
i__51963_52473 = G__52506;
continue;
}
} else {
}
}
break;
}


var G__52507 = cljs.core.next(seq__51862_52460__$1);
var G__52508 = null;
var G__52509 = (0);
var G__52510 = (0);
seq__51862_52414 = G__52507;
chunk__51863_52415 = G__52508;
count__51864_52416 = G__52509;
i__51865_52417 = G__52510;
continue;
}
} else {
}
}
break;
}


var G__52511 = cljs.core.next(seq__51456_52405__$1);
var G__52512 = null;
var G__52513 = (0);
var G__52514 = (0);
seq__51456_52288 = G__52511;
chunk__51457_52289 = G__52512;
count__51458_52290 = G__52513;
i__51459_52291 = G__52514;
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
