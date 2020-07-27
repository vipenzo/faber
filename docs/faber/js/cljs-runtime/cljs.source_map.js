goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__48436){
var vec__48437 = p__48436;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48437,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48437,(1),null);
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
var vec__48449 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48449,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48449,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48449,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48449,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48449,(4),null);
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
var vec__48454 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48454,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48454,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48454,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48454,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48454,(4),null);
var vec__48457 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48457,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48457,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48457,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48457,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48457,(4),null);
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
var map__48469 = segmap;
var map__48469__$1 = (((((!((map__48469 == null))))?(((((map__48469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48469):map__48469);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48469__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48469__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48469__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48469__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48469__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__48506 = arguments.length;
switch (G__48506) {
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
var vec__48517 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__50139 = cljs.core.next(segs__$1);
var G__50140 = nrelseg;
var G__50141 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__50139;
relseg__$1 = G__50140;
result__$1 = G__50141;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48517,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48517,(1),null);
var G__50148 = (gline + (1));
var G__50149 = cljs.core.next(lines__$1);
var G__50150 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__50151 = result__$1;
gline = G__50148;
lines__$1 = G__50149;
relseg = G__50150;
result = G__50151;
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
var map__48525 = segmap;
var map__48525__$1 = (((((!((map__48525 == null))))?(((((map__48525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48525):map__48525);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48525__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48525__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48525__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48525__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48525__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__48523_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48523_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__48595 = arguments.length;
switch (G__48595) {
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
var vec__48615 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__50161 = cljs.core.next(segs__$1);
var G__50162 = nrelseg;
var G__50163 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__50161;
relseg__$1 = G__50162;
result__$1 = G__50163;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48615,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48615,(1),null);
var G__50164 = (gline + (1));
var G__50165 = cljs.core.next(lines__$1);
var G__50166 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__50167 = result__$1;
gline = G__50164;
lines__$1 = G__50165;
relseg = G__50166;
result = G__50167;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__48632){
var vec__48635 = p__48632;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48635,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48635,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48635,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48635,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48635,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__48643){
var vec__48645 = p__48643;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48645,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48645,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48645,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48645,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48645,(4),null);
var seg = vec__48645;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__48661){
var vec__48665 = p__48661;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48665,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48665,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48665,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48665,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48665,(4),null);
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
var seq__48735 = cljs.core.seq(infos);
var chunk__48736 = null;
var count__48737 = (0);
var i__48738 = (0);
while(true){
if((i__48738 < count__48737)){
var info = chunk__48736.cljs$core$IIndexed$_nth$arity$2(null,i__48738);
var segv_50171 = info__GT_segv(info,source_idx,line,col);
var gline_50172 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_50173 = cljs.core.count(cljs.core.deref(lines));
if((gline_50172 > (lc_50173 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__48735,chunk__48736,count__48737,i__48738,segv_50171,gline_50172,lc_50173,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_50172 - (lc_50173 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_50171], null));
});})(seq__48735,chunk__48736,count__48737,i__48738,segv_50171,gline_50172,lc_50173,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__48735,chunk__48736,count__48737,i__48738,segv_50171,gline_50172,lc_50173,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50172], null),cljs.core.conj,segv_50171);
});})(seq__48735,chunk__48736,count__48737,i__48738,segv_50171,gline_50172,lc_50173,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__50183 = seq__48735;
var G__50184 = chunk__48736;
var G__50185 = count__48737;
var G__50186 = (i__48738 + (1));
seq__48735 = G__50183;
chunk__48736 = G__50184;
count__48737 = G__50185;
i__48738 = G__50186;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48735);
if(temp__5735__auto__){
var seq__48735__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48735__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48735__$1);
var G__50187 = cljs.core.chunk_rest(seq__48735__$1);
var G__50188 = c__4556__auto__;
var G__50189 = cljs.core.count(c__4556__auto__);
var G__50190 = (0);
seq__48735 = G__50187;
chunk__48736 = G__50188;
count__48737 = G__50189;
i__48738 = G__50190;
continue;
} else {
var info = cljs.core.first(seq__48735__$1);
var segv_50192 = info__GT_segv(info,source_idx,line,col);
var gline_50193 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_50194 = cljs.core.count(cljs.core.deref(lines));
if((gline_50193 > (lc_50194 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__48735,chunk__48736,count__48737,i__48738,segv_50192,gline_50193,lc_50194,info,seq__48735__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_50193 - (lc_50194 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_50192], null));
});})(seq__48735,chunk__48736,count__48737,i__48738,segv_50192,gline_50193,lc_50194,info,seq__48735__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__48735,chunk__48736,count__48737,i__48738,segv_50192,gline_50193,lc_50194,info,seq__48735__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50193], null),cljs.core.conj,segv_50192);
});})(seq__48735,chunk__48736,count__48737,i__48738,segv_50192,gline_50193,lc_50194,info,seq__48735__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__50199 = cljs.core.next(seq__48735__$1);
var G__50200 = null;
var G__50201 = (0);
var G__50202 = (0);
seq__48735 = G__50199;
chunk__48736 = G__50200;
count__48737 = G__50201;
i__48738 = G__50202;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__48764_50203 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__48765_50204 = null;
var count__48766_50205 = (0);
var i__48767_50206 = (0);
while(true){
if((i__48767_50206 < count__48766_50205)){
var vec__49053_50207 = chunk__48765_50204.cljs$core$IIndexed$_nth$arity$2(null,i__48767_50206);
var source_idx_50208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49053_50207,(0),null);
var vec__49056_50209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49053_50207,(1),null);
var __50210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49056_50209,(0),null);
var lines_50211__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49056_50209,(1),null);
var seq__49059_50212 = cljs.core.seq(lines_50211__$1);
var chunk__49060_50213 = null;
var count__49061_50214 = (0);
var i__49062_50215 = (0);
while(true){
if((i__49062_50215 < count__49061_50214)){
var vec__49122_50216 = chunk__49060_50213.cljs$core$IIndexed$_nth$arity$2(null,i__49062_50215);
var line_50217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49122_50216,(0),null);
var cols_50218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49122_50216,(1),null);
var seq__49125_50219 = cljs.core.seq(cols_50218);
var chunk__49126_50220 = null;
var count__49127_50221 = (0);
var i__49128_50222 = (0);
while(true){
if((i__49128_50222 < count__49127_50221)){
var vec__49143_50223 = chunk__49126_50220.cljs$core$IIndexed$_nth$arity$2(null,i__49128_50222);
var col_50224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49143_50223,(0),null);
var infos_50225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49143_50223,(1),null);
encode_cols(infos_50225,source_idx_50208,line_50217,col_50224);


var G__50233 = seq__49125_50219;
var G__50234 = chunk__49126_50220;
var G__50235 = count__49127_50221;
var G__50236 = (i__49128_50222 + (1));
seq__49125_50219 = G__50233;
chunk__49126_50220 = G__50234;
count__49127_50221 = G__50235;
i__49128_50222 = G__50236;
continue;
} else {
var temp__5735__auto___50237 = cljs.core.seq(seq__49125_50219);
if(temp__5735__auto___50237){
var seq__49125_50238__$1 = temp__5735__auto___50237;
if(cljs.core.chunked_seq_QMARK_(seq__49125_50238__$1)){
var c__4556__auto___50239 = cljs.core.chunk_first(seq__49125_50238__$1);
var G__50240 = cljs.core.chunk_rest(seq__49125_50238__$1);
var G__50241 = c__4556__auto___50239;
var G__50242 = cljs.core.count(c__4556__auto___50239);
var G__50243 = (0);
seq__49125_50219 = G__50240;
chunk__49126_50220 = G__50241;
count__49127_50221 = G__50242;
i__49128_50222 = G__50243;
continue;
} else {
var vec__49146_50244 = cljs.core.first(seq__49125_50238__$1);
var col_50245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49146_50244,(0),null);
var infos_50246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49146_50244,(1),null);
encode_cols(infos_50246,source_idx_50208,line_50217,col_50245);


var G__50247 = cljs.core.next(seq__49125_50238__$1);
var G__50248 = null;
var G__50249 = (0);
var G__50250 = (0);
seq__49125_50219 = G__50247;
chunk__49126_50220 = G__50248;
count__49127_50221 = G__50249;
i__49128_50222 = G__50250;
continue;
}
} else {
}
}
break;
}


var G__50251 = seq__49059_50212;
var G__50252 = chunk__49060_50213;
var G__50253 = count__49061_50214;
var G__50254 = (i__49062_50215 + (1));
seq__49059_50212 = G__50251;
chunk__49060_50213 = G__50252;
count__49061_50214 = G__50253;
i__49062_50215 = G__50254;
continue;
} else {
var temp__5735__auto___50255 = cljs.core.seq(seq__49059_50212);
if(temp__5735__auto___50255){
var seq__49059_50256__$1 = temp__5735__auto___50255;
if(cljs.core.chunked_seq_QMARK_(seq__49059_50256__$1)){
var c__4556__auto___50257 = cljs.core.chunk_first(seq__49059_50256__$1);
var G__50258 = cljs.core.chunk_rest(seq__49059_50256__$1);
var G__50259 = c__4556__auto___50257;
var G__50260 = cljs.core.count(c__4556__auto___50257);
var G__50261 = (0);
seq__49059_50212 = G__50258;
chunk__49060_50213 = G__50259;
count__49061_50214 = G__50260;
i__49062_50215 = G__50261;
continue;
} else {
var vec__49151_50262 = cljs.core.first(seq__49059_50256__$1);
var line_50263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151_50262,(0),null);
var cols_50264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49151_50262,(1),null);
var seq__49154_50265 = cljs.core.seq(cols_50264);
var chunk__49155_50266 = null;
var count__49156_50267 = (0);
var i__49157_50268 = (0);
while(true){
if((i__49157_50268 < count__49156_50267)){
var vec__49164_50269 = chunk__49155_50266.cljs$core$IIndexed$_nth$arity$2(null,i__49157_50268);
var col_50270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49164_50269,(0),null);
var infos_50271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49164_50269,(1),null);
encode_cols(infos_50271,source_idx_50208,line_50263,col_50270);


var G__50276 = seq__49154_50265;
var G__50277 = chunk__49155_50266;
var G__50278 = count__49156_50267;
var G__50279 = (i__49157_50268 + (1));
seq__49154_50265 = G__50276;
chunk__49155_50266 = G__50277;
count__49156_50267 = G__50278;
i__49157_50268 = G__50279;
continue;
} else {
var temp__5735__auto___50280__$1 = cljs.core.seq(seq__49154_50265);
if(temp__5735__auto___50280__$1){
var seq__49154_50281__$1 = temp__5735__auto___50280__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49154_50281__$1)){
var c__4556__auto___50282 = cljs.core.chunk_first(seq__49154_50281__$1);
var G__50283 = cljs.core.chunk_rest(seq__49154_50281__$1);
var G__50284 = c__4556__auto___50282;
var G__50285 = cljs.core.count(c__4556__auto___50282);
var G__50286 = (0);
seq__49154_50265 = G__50283;
chunk__49155_50266 = G__50284;
count__49156_50267 = G__50285;
i__49157_50268 = G__50286;
continue;
} else {
var vec__49167_50287 = cljs.core.first(seq__49154_50281__$1);
var col_50288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49167_50287,(0),null);
var infos_50289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49167_50287,(1),null);
encode_cols(infos_50289,source_idx_50208,line_50263,col_50288);


var G__50290 = cljs.core.next(seq__49154_50281__$1);
var G__50291 = null;
var G__50292 = (0);
var G__50293 = (0);
seq__49154_50265 = G__50290;
chunk__49155_50266 = G__50291;
count__49156_50267 = G__50292;
i__49157_50268 = G__50293;
continue;
}
} else {
}
}
break;
}


var G__50294 = cljs.core.next(seq__49059_50256__$1);
var G__50295 = null;
var G__50296 = (0);
var G__50297 = (0);
seq__49059_50212 = G__50294;
chunk__49060_50213 = G__50295;
count__49061_50214 = G__50296;
i__49062_50215 = G__50297;
continue;
}
} else {
}
}
break;
}


var G__50302 = seq__48764_50203;
var G__50303 = chunk__48765_50204;
var G__50304 = count__48766_50205;
var G__50305 = (i__48767_50206 + (1));
seq__48764_50203 = G__50302;
chunk__48765_50204 = G__50303;
count__48766_50205 = G__50304;
i__48767_50206 = G__50305;
continue;
} else {
var temp__5735__auto___50306 = cljs.core.seq(seq__48764_50203);
if(temp__5735__auto___50306){
var seq__48764_50307__$1 = temp__5735__auto___50306;
if(cljs.core.chunked_seq_QMARK_(seq__48764_50307__$1)){
var c__4556__auto___50308 = cljs.core.chunk_first(seq__48764_50307__$1);
var G__50309 = cljs.core.chunk_rest(seq__48764_50307__$1);
var G__50310 = c__4556__auto___50308;
var G__50311 = cljs.core.count(c__4556__auto___50308);
var G__50312 = (0);
seq__48764_50203 = G__50309;
chunk__48765_50204 = G__50310;
count__48766_50205 = G__50311;
i__48767_50206 = G__50312;
continue;
} else {
var vec__49170_50313 = cljs.core.first(seq__48764_50307__$1);
var source_idx_50314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49170_50313,(0),null);
var vec__49173_50315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49170_50313,(1),null);
var __50316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49173_50315,(0),null);
var lines_50317__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49173_50315,(1),null);
var seq__49176_50318 = cljs.core.seq(lines_50317__$1);
var chunk__49177_50319 = null;
var count__49178_50320 = (0);
var i__49179_50321 = (0);
while(true){
if((i__49179_50321 < count__49178_50320)){
var vec__49221_50322 = chunk__49177_50319.cljs$core$IIndexed$_nth$arity$2(null,i__49179_50321);
var line_50323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49221_50322,(0),null);
var cols_50324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49221_50322,(1),null);
var seq__49224_50325 = cljs.core.seq(cols_50324);
var chunk__49225_50326 = null;
var count__49226_50327 = (0);
var i__49227_50328 = (0);
while(true){
if((i__49227_50328 < count__49226_50327)){
var vec__49237_50329 = chunk__49225_50326.cljs$core$IIndexed$_nth$arity$2(null,i__49227_50328);
var col_50330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49237_50329,(0),null);
var infos_50331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49237_50329,(1),null);
encode_cols(infos_50331,source_idx_50314,line_50323,col_50330);


var G__50332 = seq__49224_50325;
var G__50333 = chunk__49225_50326;
var G__50334 = count__49226_50327;
var G__50335 = (i__49227_50328 + (1));
seq__49224_50325 = G__50332;
chunk__49225_50326 = G__50333;
count__49226_50327 = G__50334;
i__49227_50328 = G__50335;
continue;
} else {
var temp__5735__auto___50336__$1 = cljs.core.seq(seq__49224_50325);
if(temp__5735__auto___50336__$1){
var seq__49224_50337__$1 = temp__5735__auto___50336__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49224_50337__$1)){
var c__4556__auto___50338 = cljs.core.chunk_first(seq__49224_50337__$1);
var G__50339 = cljs.core.chunk_rest(seq__49224_50337__$1);
var G__50340 = c__4556__auto___50338;
var G__50341 = cljs.core.count(c__4556__auto___50338);
var G__50342 = (0);
seq__49224_50325 = G__50339;
chunk__49225_50326 = G__50340;
count__49226_50327 = G__50341;
i__49227_50328 = G__50342;
continue;
} else {
var vec__49240_50343 = cljs.core.first(seq__49224_50337__$1);
var col_50344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49240_50343,(0),null);
var infos_50345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49240_50343,(1),null);
encode_cols(infos_50345,source_idx_50314,line_50323,col_50344);


var G__50346 = cljs.core.next(seq__49224_50337__$1);
var G__50347 = null;
var G__50348 = (0);
var G__50349 = (0);
seq__49224_50325 = G__50346;
chunk__49225_50326 = G__50347;
count__49226_50327 = G__50348;
i__49227_50328 = G__50349;
continue;
}
} else {
}
}
break;
}


var G__50350 = seq__49176_50318;
var G__50351 = chunk__49177_50319;
var G__50352 = count__49178_50320;
var G__50353 = (i__49179_50321 + (1));
seq__49176_50318 = G__50350;
chunk__49177_50319 = G__50351;
count__49178_50320 = G__50352;
i__49179_50321 = G__50353;
continue;
} else {
var temp__5735__auto___50354__$1 = cljs.core.seq(seq__49176_50318);
if(temp__5735__auto___50354__$1){
var seq__49176_50355__$1 = temp__5735__auto___50354__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49176_50355__$1)){
var c__4556__auto___50356 = cljs.core.chunk_first(seq__49176_50355__$1);
var G__50357 = cljs.core.chunk_rest(seq__49176_50355__$1);
var G__50358 = c__4556__auto___50356;
var G__50359 = cljs.core.count(c__4556__auto___50356);
var G__50360 = (0);
seq__49176_50318 = G__50357;
chunk__49177_50319 = G__50358;
count__49178_50320 = G__50359;
i__49179_50321 = G__50360;
continue;
} else {
var vec__49245_50361 = cljs.core.first(seq__49176_50355__$1);
var line_50362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49245_50361,(0),null);
var cols_50363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49245_50361,(1),null);
var seq__49250_50366 = cljs.core.seq(cols_50363);
var chunk__49251_50367 = null;
var count__49252_50368 = (0);
var i__49253_50369 = (0);
while(true){
if((i__49253_50369 < count__49252_50368)){
var vec__49275_50370 = chunk__49251_50367.cljs$core$IIndexed$_nth$arity$2(null,i__49253_50369);
var col_50371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49275_50370,(0),null);
var infos_50372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49275_50370,(1),null);
encode_cols(infos_50372,source_idx_50314,line_50362,col_50371);


var G__50373 = seq__49250_50366;
var G__50374 = chunk__49251_50367;
var G__50375 = count__49252_50368;
var G__50376 = (i__49253_50369 + (1));
seq__49250_50366 = G__50373;
chunk__49251_50367 = G__50374;
count__49252_50368 = G__50375;
i__49253_50369 = G__50376;
continue;
} else {
var temp__5735__auto___50377__$2 = cljs.core.seq(seq__49250_50366);
if(temp__5735__auto___50377__$2){
var seq__49250_50378__$1 = temp__5735__auto___50377__$2;
if(cljs.core.chunked_seq_QMARK_(seq__49250_50378__$1)){
var c__4556__auto___50379 = cljs.core.chunk_first(seq__49250_50378__$1);
var G__50380 = cljs.core.chunk_rest(seq__49250_50378__$1);
var G__50381 = c__4556__auto___50379;
var G__50382 = cljs.core.count(c__4556__auto___50379);
var G__50383 = (0);
seq__49250_50366 = G__50380;
chunk__49251_50367 = G__50381;
count__49252_50368 = G__50382;
i__49253_50369 = G__50383;
continue;
} else {
var vec__49278_50384 = cljs.core.first(seq__49250_50378__$1);
var col_50385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49278_50384,(0),null);
var infos_50386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49278_50384,(1),null);
encode_cols(infos_50386,source_idx_50314,line_50362,col_50385);


var G__50387 = cljs.core.next(seq__49250_50378__$1);
var G__50388 = null;
var G__50389 = (0);
var G__50390 = (0);
seq__49250_50366 = G__50387;
chunk__49251_50367 = G__50388;
count__49252_50368 = G__50389;
i__49253_50369 = G__50390;
continue;
}
} else {
}
}
break;
}


var G__50391 = cljs.core.next(seq__49176_50355__$1);
var G__50392 = null;
var G__50393 = (0);
var G__50394 = (0);
seq__49176_50318 = G__50391;
chunk__49177_50319 = G__50392;
count__49178_50320 = G__50393;
i__49179_50321 = G__50394;
continue;
}
} else {
}
}
break;
}


var G__50395 = cljs.core.next(seq__48764_50307__$1);
var G__50396 = null;
var G__50397 = (0);
var G__50398 = (0);
seq__48764_50203 = G__50395;
chunk__48765_50204 = G__50396;
count__48766_50205 = G__50397;
i__48767_50206 = G__50398;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__49281 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__48679_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48679_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__48680_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__48680_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48681_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__48681_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__49283 = G__49281;
goog.object.set(G__49283,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__49283;
} else {
return G__49281;
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
var vec__49299 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49299,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49299,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__49303 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49303,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49303,(1),null);
var G__50399 = cljs.core.next(col_map_seq);
var G__50400 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__49303,col,infos,vec__49299,line,col_map){
return (function (v,p__49324){
var map__49325 = p__49324;
var map__49325__$1 = (((((!((map__49325 == null))))?(((((map__49325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49325):map__49325);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49325__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49325__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__49303,col,infos,vec__49299,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__50399;
new_cols = G__50400;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__50408 = cljs.core.next(line_map_seq);
var G__50409 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__50408;
new_lines = G__50409;
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
var seq__49333_50410 = cljs.core.seq(reverse_map);
var chunk__49334_50411 = null;
var count__49335_50412 = (0);
var i__49336_50413 = (0);
while(true){
if((i__49336_50413 < count__49335_50412)){
var vec__49691_50414 = chunk__49334_50411.cljs$core$IIndexed$_nth$arity$2(null,i__49336_50413);
var line_50415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49691_50414,(0),null);
var columns_50416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49691_50414,(1),null);
var seq__49694_50417 = cljs.core.seq(columns_50416);
var chunk__49695_50418 = null;
var count__49696_50419 = (0);
var i__49697_50420 = (0);
while(true){
if((i__49697_50420 < count__49696_50419)){
var vec__49770_50421 = chunk__49695_50418.cljs$core$IIndexed$_nth$arity$2(null,i__49697_50420);
var column_50422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49770_50421,(0),null);
var column_info_50423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49770_50421,(1),null);
var seq__49773_50428 = cljs.core.seq(column_info_50423);
var chunk__49774_50429 = null;
var count__49775_50430 = (0);
var i__49776_50431 = (0);
while(true){
if((i__49776_50431 < count__49775_50430)){
var map__49799_50432 = chunk__49774_50429.cljs$core$IIndexed$_nth$arity$2(null,i__49776_50431);
var map__49799_50433__$1 = (((((!((map__49799_50432 == null))))?(((((map__49799_50432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49799_50432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49799_50432):map__49799_50432);
var gline_50434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49799_50433__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49799_50433__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49799_50433__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50434], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__49773_50428,chunk__49774_50429,count__49775_50430,i__49776_50431,seq__49694_50417,chunk__49695_50418,count__49696_50419,i__49697_50420,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__49799_50432,map__49799_50433__$1,gline_50434,gcol_50435,name_50436,vec__49770_50421,column_50422,column_info_50423,vec__49691_50414,line_50415,columns_50416,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50435], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50415,new cljs.core.Keyword(null,"col","col",-1959363084),column_50422,new cljs.core.Keyword(null,"name","name",1843675177),name_50436], null));
});})(seq__49773_50428,chunk__49774_50429,count__49775_50430,i__49776_50431,seq__49694_50417,chunk__49695_50418,count__49696_50419,i__49697_50420,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__49799_50432,map__49799_50433__$1,gline_50434,gcol_50435,name_50436,vec__49770_50421,column_50422,column_info_50423,vec__49691_50414,line_50415,columns_50416,inverted))
,cljs.core.sorted_map()));


var G__50441 = seq__49773_50428;
var G__50442 = chunk__49774_50429;
var G__50443 = count__49775_50430;
var G__50444 = (i__49776_50431 + (1));
seq__49773_50428 = G__50441;
chunk__49774_50429 = G__50442;
count__49775_50430 = G__50443;
i__49776_50431 = G__50444;
continue;
} else {
var temp__5735__auto___50445 = cljs.core.seq(seq__49773_50428);
if(temp__5735__auto___50445){
var seq__49773_50446__$1 = temp__5735__auto___50445;
if(cljs.core.chunked_seq_QMARK_(seq__49773_50446__$1)){
var c__4556__auto___50447 = cljs.core.chunk_first(seq__49773_50446__$1);
var G__50448 = cljs.core.chunk_rest(seq__49773_50446__$1);
var G__50449 = c__4556__auto___50447;
var G__50450 = cljs.core.count(c__4556__auto___50447);
var G__50451 = (0);
seq__49773_50428 = G__50448;
chunk__49774_50429 = G__50449;
count__49775_50430 = G__50450;
i__49776_50431 = G__50451;
continue;
} else {
var map__49805_50456 = cljs.core.first(seq__49773_50446__$1);
var map__49805_50457__$1 = (((((!((map__49805_50456 == null))))?(((((map__49805_50456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49805_50456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49805_50456):map__49805_50456);
var gline_50458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49805_50457__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49805_50457__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50460 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49805_50457__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50458], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__49773_50428,chunk__49774_50429,count__49775_50430,i__49776_50431,seq__49694_50417,chunk__49695_50418,count__49696_50419,i__49697_50420,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__49805_50456,map__49805_50457__$1,gline_50458,gcol_50459,name_50460,seq__49773_50446__$1,temp__5735__auto___50445,vec__49770_50421,column_50422,column_info_50423,vec__49691_50414,line_50415,columns_50416,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50459], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50415,new cljs.core.Keyword(null,"col","col",-1959363084),column_50422,new cljs.core.Keyword(null,"name","name",1843675177),name_50460], null));
});})(seq__49773_50428,chunk__49774_50429,count__49775_50430,i__49776_50431,seq__49694_50417,chunk__49695_50418,count__49696_50419,i__49697_50420,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__49805_50456,map__49805_50457__$1,gline_50458,gcol_50459,name_50460,seq__49773_50446__$1,temp__5735__auto___50445,vec__49770_50421,column_50422,column_info_50423,vec__49691_50414,line_50415,columns_50416,inverted))
,cljs.core.sorted_map()));


var G__50463 = cljs.core.next(seq__49773_50446__$1);
var G__50464 = null;
var G__50465 = (0);
var G__50466 = (0);
seq__49773_50428 = G__50463;
chunk__49774_50429 = G__50464;
count__49775_50430 = G__50465;
i__49776_50431 = G__50466;
continue;
}
} else {
}
}
break;
}


var G__50467 = seq__49694_50417;
var G__50468 = chunk__49695_50418;
var G__50469 = count__49696_50419;
var G__50470 = (i__49697_50420 + (1));
seq__49694_50417 = G__50467;
chunk__49695_50418 = G__50468;
count__49696_50419 = G__50469;
i__49697_50420 = G__50470;
continue;
} else {
var temp__5735__auto___50471 = cljs.core.seq(seq__49694_50417);
if(temp__5735__auto___50471){
var seq__49694_50472__$1 = temp__5735__auto___50471;
if(cljs.core.chunked_seq_QMARK_(seq__49694_50472__$1)){
var c__4556__auto___50473 = cljs.core.chunk_first(seq__49694_50472__$1);
var G__50474 = cljs.core.chunk_rest(seq__49694_50472__$1);
var G__50475 = c__4556__auto___50473;
var G__50476 = cljs.core.count(c__4556__auto___50473);
var G__50477 = (0);
seq__49694_50417 = G__50474;
chunk__49695_50418 = G__50475;
count__49696_50419 = G__50476;
i__49697_50420 = G__50477;
continue;
} else {
var vec__49845_50478 = cljs.core.first(seq__49694_50472__$1);
var column_50479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49845_50478,(0),null);
var column_info_50480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49845_50478,(1),null);
var seq__49848_50481 = cljs.core.seq(column_info_50480);
var chunk__49849_50482 = null;
var count__49850_50483 = (0);
var i__49851_50484 = (0);
while(true){
if((i__49851_50484 < count__49850_50483)){
var map__49860_50485 = chunk__49849_50482.cljs$core$IIndexed$_nth$arity$2(null,i__49851_50484);
var map__49860_50486__$1 = (((((!((map__49860_50485 == null))))?(((((map__49860_50485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49860_50485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49860_50485):map__49860_50485);
var gline_50487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49860_50486__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49860_50486__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49860_50486__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50487], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__49848_50481,chunk__49849_50482,count__49850_50483,i__49851_50484,seq__49694_50417,chunk__49695_50418,count__49696_50419,i__49697_50420,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__49860_50485,map__49860_50486__$1,gline_50487,gcol_50488,name_50489,vec__49845_50478,column_50479,column_info_50480,seq__49694_50472__$1,temp__5735__auto___50471,vec__49691_50414,line_50415,columns_50416,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50488], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50415,new cljs.core.Keyword(null,"col","col",-1959363084),column_50479,new cljs.core.Keyword(null,"name","name",1843675177),name_50489], null));
});})(seq__49848_50481,chunk__49849_50482,count__49850_50483,i__49851_50484,seq__49694_50417,chunk__49695_50418,count__49696_50419,i__49697_50420,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__49860_50485,map__49860_50486__$1,gline_50487,gcol_50488,name_50489,vec__49845_50478,column_50479,column_info_50480,seq__49694_50472__$1,temp__5735__auto___50471,vec__49691_50414,line_50415,columns_50416,inverted))
,cljs.core.sorted_map()));


var G__50496 = seq__49848_50481;
var G__50497 = chunk__49849_50482;
var G__50498 = count__49850_50483;
var G__50499 = (i__49851_50484 + (1));
seq__49848_50481 = G__50496;
chunk__49849_50482 = G__50497;
count__49850_50483 = G__50498;
i__49851_50484 = G__50499;
continue;
} else {
var temp__5735__auto___50500__$1 = cljs.core.seq(seq__49848_50481);
if(temp__5735__auto___50500__$1){
var seq__49848_50501__$1 = temp__5735__auto___50500__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49848_50501__$1)){
var c__4556__auto___50502 = cljs.core.chunk_first(seq__49848_50501__$1);
var G__50503 = cljs.core.chunk_rest(seq__49848_50501__$1);
var G__50504 = c__4556__auto___50502;
var G__50505 = cljs.core.count(c__4556__auto___50502);
var G__50506 = (0);
seq__49848_50481 = G__50503;
chunk__49849_50482 = G__50504;
count__49850_50483 = G__50505;
i__49851_50484 = G__50506;
continue;
} else {
var map__49862_50511 = cljs.core.first(seq__49848_50501__$1);
var map__49862_50512__$1 = (((((!((map__49862_50511 == null))))?(((((map__49862_50511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49862_50511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49862_50511):map__49862_50511);
var gline_50513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49862_50512__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49862_50512__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49862_50512__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50513], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__49848_50481,chunk__49849_50482,count__49850_50483,i__49851_50484,seq__49694_50417,chunk__49695_50418,count__49696_50419,i__49697_50420,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__49862_50511,map__49862_50512__$1,gline_50513,gcol_50514,name_50515,seq__49848_50501__$1,temp__5735__auto___50500__$1,vec__49845_50478,column_50479,column_info_50480,seq__49694_50472__$1,temp__5735__auto___50471,vec__49691_50414,line_50415,columns_50416,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50514], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50415,new cljs.core.Keyword(null,"col","col",-1959363084),column_50479,new cljs.core.Keyword(null,"name","name",1843675177),name_50515], null));
});})(seq__49848_50481,chunk__49849_50482,count__49850_50483,i__49851_50484,seq__49694_50417,chunk__49695_50418,count__49696_50419,i__49697_50420,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__49862_50511,map__49862_50512__$1,gline_50513,gcol_50514,name_50515,seq__49848_50501__$1,temp__5735__auto___50500__$1,vec__49845_50478,column_50479,column_info_50480,seq__49694_50472__$1,temp__5735__auto___50471,vec__49691_50414,line_50415,columns_50416,inverted))
,cljs.core.sorted_map()));


var G__50523 = cljs.core.next(seq__49848_50501__$1);
var G__50524 = null;
var G__50525 = (0);
var G__50526 = (0);
seq__49848_50481 = G__50523;
chunk__49849_50482 = G__50524;
count__49850_50483 = G__50525;
i__49851_50484 = G__50526;
continue;
}
} else {
}
}
break;
}


var G__50527 = cljs.core.next(seq__49694_50472__$1);
var G__50528 = null;
var G__50529 = (0);
var G__50530 = (0);
seq__49694_50417 = G__50527;
chunk__49695_50418 = G__50528;
count__49696_50419 = G__50529;
i__49697_50420 = G__50530;
continue;
}
} else {
}
}
break;
}


var G__50531 = seq__49333_50410;
var G__50532 = chunk__49334_50411;
var G__50533 = count__49335_50412;
var G__50534 = (i__49336_50413 + (1));
seq__49333_50410 = G__50531;
chunk__49334_50411 = G__50532;
count__49335_50412 = G__50533;
i__49336_50413 = G__50534;
continue;
} else {
var temp__5735__auto___50535 = cljs.core.seq(seq__49333_50410);
if(temp__5735__auto___50535){
var seq__49333_50539__$1 = temp__5735__auto___50535;
if(cljs.core.chunked_seq_QMARK_(seq__49333_50539__$1)){
var c__4556__auto___50540 = cljs.core.chunk_first(seq__49333_50539__$1);
var G__50541 = cljs.core.chunk_rest(seq__49333_50539__$1);
var G__50542 = c__4556__auto___50540;
var G__50543 = cljs.core.count(c__4556__auto___50540);
var G__50544 = (0);
seq__49333_50410 = G__50541;
chunk__49334_50411 = G__50542;
count__49335_50412 = G__50543;
i__49336_50413 = G__50544;
continue;
} else {
var vec__49877_50545 = cljs.core.first(seq__49333_50539__$1);
var line_50546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49877_50545,(0),null);
var columns_50547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49877_50545,(1),null);
var seq__49886_50548 = cljs.core.seq(columns_50547);
var chunk__49887_50549 = null;
var count__49888_50550 = (0);
var i__49889_50551 = (0);
while(true){
if((i__49889_50551 < count__49888_50550)){
var vec__49996_50555 = chunk__49887_50549.cljs$core$IIndexed$_nth$arity$2(null,i__49889_50551);
var column_50556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49996_50555,(0),null);
var column_info_50557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49996_50555,(1),null);
var seq__50002_50558 = cljs.core.seq(column_info_50557);
var chunk__50003_50559 = null;
var count__50004_50560 = (0);
var i__50005_50561 = (0);
while(true){
if((i__50005_50561 < count__50004_50560)){
var map__50033_50562 = chunk__50003_50559.cljs$core$IIndexed$_nth$arity$2(null,i__50005_50561);
var map__50033_50563__$1 = (((((!((map__50033_50562 == null))))?(((((map__50033_50562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50033_50562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50033_50562):map__50033_50562);
var gline_50564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50033_50563__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50033_50563__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50033_50563__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50564], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50002_50558,chunk__50003_50559,count__50004_50560,i__50005_50561,seq__49886_50548,chunk__49887_50549,count__49888_50550,i__49889_50551,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__50033_50562,map__50033_50563__$1,gline_50564,gcol_50565,name_50566,vec__49996_50555,column_50556,column_info_50557,vec__49877_50545,line_50546,columns_50547,seq__49333_50539__$1,temp__5735__auto___50535,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50565], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50546,new cljs.core.Keyword(null,"col","col",-1959363084),column_50556,new cljs.core.Keyword(null,"name","name",1843675177),name_50566], null));
});})(seq__50002_50558,chunk__50003_50559,count__50004_50560,i__50005_50561,seq__49886_50548,chunk__49887_50549,count__49888_50550,i__49889_50551,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__50033_50562,map__50033_50563__$1,gline_50564,gcol_50565,name_50566,vec__49996_50555,column_50556,column_info_50557,vec__49877_50545,line_50546,columns_50547,seq__49333_50539__$1,temp__5735__auto___50535,inverted))
,cljs.core.sorted_map()));


var G__50572 = seq__50002_50558;
var G__50573 = chunk__50003_50559;
var G__50574 = count__50004_50560;
var G__50575 = (i__50005_50561 + (1));
seq__50002_50558 = G__50572;
chunk__50003_50559 = G__50573;
count__50004_50560 = G__50574;
i__50005_50561 = G__50575;
continue;
} else {
var temp__5735__auto___50576__$1 = cljs.core.seq(seq__50002_50558);
if(temp__5735__auto___50576__$1){
var seq__50002_50577__$1 = temp__5735__auto___50576__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50002_50577__$1)){
var c__4556__auto___50578 = cljs.core.chunk_first(seq__50002_50577__$1);
var G__50579 = cljs.core.chunk_rest(seq__50002_50577__$1);
var G__50580 = c__4556__auto___50578;
var G__50581 = cljs.core.count(c__4556__auto___50578);
var G__50582 = (0);
seq__50002_50558 = G__50579;
chunk__50003_50559 = G__50580;
count__50004_50560 = G__50581;
i__50005_50561 = G__50582;
continue;
} else {
var map__50039_50583 = cljs.core.first(seq__50002_50577__$1);
var map__50039_50584__$1 = (((((!((map__50039_50583 == null))))?(((((map__50039_50583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50039_50583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50039_50583):map__50039_50583);
var gline_50585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50039_50584__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50039_50584__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50039_50584__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50585], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50002_50558,chunk__50003_50559,count__50004_50560,i__50005_50561,seq__49886_50548,chunk__49887_50549,count__49888_50550,i__49889_50551,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__50039_50583,map__50039_50584__$1,gline_50585,gcol_50586,name_50587,seq__50002_50577__$1,temp__5735__auto___50576__$1,vec__49996_50555,column_50556,column_info_50557,vec__49877_50545,line_50546,columns_50547,seq__49333_50539__$1,temp__5735__auto___50535,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50586], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50546,new cljs.core.Keyword(null,"col","col",-1959363084),column_50556,new cljs.core.Keyword(null,"name","name",1843675177),name_50587], null));
});})(seq__50002_50558,chunk__50003_50559,count__50004_50560,i__50005_50561,seq__49886_50548,chunk__49887_50549,count__49888_50550,i__49889_50551,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__50039_50583,map__50039_50584__$1,gline_50585,gcol_50586,name_50587,seq__50002_50577__$1,temp__5735__auto___50576__$1,vec__49996_50555,column_50556,column_info_50557,vec__49877_50545,line_50546,columns_50547,seq__49333_50539__$1,temp__5735__auto___50535,inverted))
,cljs.core.sorted_map()));


var G__50601 = cljs.core.next(seq__50002_50577__$1);
var G__50602 = null;
var G__50603 = (0);
var G__50604 = (0);
seq__50002_50558 = G__50601;
chunk__50003_50559 = G__50602;
count__50004_50560 = G__50603;
i__50005_50561 = G__50604;
continue;
}
} else {
}
}
break;
}


var G__50605 = seq__49886_50548;
var G__50606 = chunk__49887_50549;
var G__50607 = count__49888_50550;
var G__50608 = (i__49889_50551 + (1));
seq__49886_50548 = G__50605;
chunk__49887_50549 = G__50606;
count__49888_50550 = G__50607;
i__49889_50551 = G__50608;
continue;
} else {
var temp__5735__auto___50609__$1 = cljs.core.seq(seq__49886_50548);
if(temp__5735__auto___50609__$1){
var seq__49886_50610__$1 = temp__5735__auto___50609__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49886_50610__$1)){
var c__4556__auto___50611 = cljs.core.chunk_first(seq__49886_50610__$1);
var G__50612 = cljs.core.chunk_rest(seq__49886_50610__$1);
var G__50613 = c__4556__auto___50611;
var G__50614 = cljs.core.count(c__4556__auto___50611);
var G__50615 = (0);
seq__49886_50548 = G__50612;
chunk__49887_50549 = G__50613;
count__49888_50550 = G__50614;
i__49889_50551 = G__50615;
continue;
} else {
var vec__50045_50616 = cljs.core.first(seq__49886_50610__$1);
var column_50617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50045_50616,(0),null);
var column_info_50618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50045_50616,(1),null);
var seq__50059_50619 = cljs.core.seq(column_info_50618);
var chunk__50060_50620 = null;
var count__50061_50621 = (0);
var i__50062_50622 = (0);
while(true){
if((i__50062_50622 < count__50061_50621)){
var map__50084_50623 = chunk__50060_50620.cljs$core$IIndexed$_nth$arity$2(null,i__50062_50622);
var map__50084_50624__$1 = (((((!((map__50084_50623 == null))))?(((((map__50084_50623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50084_50623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50084_50623):map__50084_50623);
var gline_50625 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50084_50624__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50084_50624__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50084_50624__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50625], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50059_50619,chunk__50060_50620,count__50061_50621,i__50062_50622,seq__49886_50548,chunk__49887_50549,count__49888_50550,i__49889_50551,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__50084_50623,map__50084_50624__$1,gline_50625,gcol_50626,name_50627,vec__50045_50616,column_50617,column_info_50618,seq__49886_50610__$1,temp__5735__auto___50609__$1,vec__49877_50545,line_50546,columns_50547,seq__49333_50539__$1,temp__5735__auto___50535,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50626], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50546,new cljs.core.Keyword(null,"col","col",-1959363084),column_50617,new cljs.core.Keyword(null,"name","name",1843675177),name_50627], null));
});})(seq__50059_50619,chunk__50060_50620,count__50061_50621,i__50062_50622,seq__49886_50548,chunk__49887_50549,count__49888_50550,i__49889_50551,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__50084_50623,map__50084_50624__$1,gline_50625,gcol_50626,name_50627,vec__50045_50616,column_50617,column_info_50618,seq__49886_50610__$1,temp__5735__auto___50609__$1,vec__49877_50545,line_50546,columns_50547,seq__49333_50539__$1,temp__5735__auto___50535,inverted))
,cljs.core.sorted_map()));


var G__50633 = seq__50059_50619;
var G__50634 = chunk__50060_50620;
var G__50635 = count__50061_50621;
var G__50636 = (i__50062_50622 + (1));
seq__50059_50619 = G__50633;
chunk__50060_50620 = G__50634;
count__50061_50621 = G__50635;
i__50062_50622 = G__50636;
continue;
} else {
var temp__5735__auto___50637__$2 = cljs.core.seq(seq__50059_50619);
if(temp__5735__auto___50637__$2){
var seq__50059_50639__$1 = temp__5735__auto___50637__$2;
if(cljs.core.chunked_seq_QMARK_(seq__50059_50639__$1)){
var c__4556__auto___50640 = cljs.core.chunk_first(seq__50059_50639__$1);
var G__50641 = cljs.core.chunk_rest(seq__50059_50639__$1);
var G__50642 = c__4556__auto___50640;
var G__50643 = cljs.core.count(c__4556__auto___50640);
var G__50644 = (0);
seq__50059_50619 = G__50641;
chunk__50060_50620 = G__50642;
count__50061_50621 = G__50643;
i__50062_50622 = G__50644;
continue;
} else {
var map__50092_50645 = cljs.core.first(seq__50059_50639__$1);
var map__50092_50646__$1 = (((((!((map__50092_50645 == null))))?(((((map__50092_50645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50092_50645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50092_50645):map__50092_50645);
var gline_50647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50092_50646__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50092_50646__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50092_50646__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50647], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50059_50619,chunk__50060_50620,count__50061_50621,i__50062_50622,seq__49886_50548,chunk__49887_50549,count__49888_50550,i__49889_50551,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__50092_50645,map__50092_50646__$1,gline_50647,gcol_50648,name_50649,seq__50059_50639__$1,temp__5735__auto___50637__$2,vec__50045_50616,column_50617,column_info_50618,seq__49886_50610__$1,temp__5735__auto___50609__$1,vec__49877_50545,line_50546,columns_50547,seq__49333_50539__$1,temp__5735__auto___50535,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50648], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50546,new cljs.core.Keyword(null,"col","col",-1959363084),column_50617,new cljs.core.Keyword(null,"name","name",1843675177),name_50649], null));
});})(seq__50059_50619,chunk__50060_50620,count__50061_50621,i__50062_50622,seq__49886_50548,chunk__49887_50549,count__49888_50550,i__49889_50551,seq__49333_50410,chunk__49334_50411,count__49335_50412,i__49336_50413,map__50092_50645,map__50092_50646__$1,gline_50647,gcol_50648,name_50649,seq__50059_50639__$1,temp__5735__auto___50637__$2,vec__50045_50616,column_50617,column_info_50618,seq__49886_50610__$1,temp__5735__auto___50609__$1,vec__49877_50545,line_50546,columns_50547,seq__49333_50539__$1,temp__5735__auto___50535,inverted))
,cljs.core.sorted_map()));


var G__50656 = cljs.core.next(seq__50059_50639__$1);
var G__50657 = null;
var G__50658 = (0);
var G__50659 = (0);
seq__50059_50619 = G__50656;
chunk__50060_50620 = G__50657;
count__50061_50621 = G__50658;
i__50062_50622 = G__50659;
continue;
}
} else {
}
}
break;
}


var G__50660 = cljs.core.next(seq__49886_50610__$1);
var G__50661 = null;
var G__50662 = (0);
var G__50663 = (0);
seq__49886_50548 = G__50660;
chunk__49887_50549 = G__50661;
count__49888_50550 = G__50662;
i__49889_50551 = G__50663;
continue;
}
} else {
}
}
break;
}


var G__50664 = cljs.core.next(seq__49333_50539__$1);
var G__50665 = null;
var G__50666 = (0);
var G__50667 = (0);
seq__49333_50410 = G__50664;
chunk__49334_50411 = G__50665;
count__49335_50412 = G__50666;
i__49336_50413 = G__50667;
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
