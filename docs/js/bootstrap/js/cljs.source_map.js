goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__30250){
var vec__30251 = p__30250;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30251,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30251,(1),null);
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
var vec__30254 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30254,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30254,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30254,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30254,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30254,(4),null);
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
var vec__30262 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30262,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30262,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30262,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30262,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30262,(4),null);
var vec__30266 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30266,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30266,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30266,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30266,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30266,(4),null);
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
var map__30270 = segmap;
var map__30270__$1 = (((((!((map__30270 == null))))?(((((map__30270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30270):map__30270);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30270__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30270__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30270__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30270__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30270__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__30275 = arguments.length;
switch (G__30275) {
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
var vec__30283 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__31488 = cljs.core.next(segs__$1);
var G__31489 = nrelseg;
var G__31490 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__31488;
relseg__$1 = G__31489;
result__$1 = G__31490;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30283,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30283,(1),null);
var G__31491 = (gline + (1));
var G__31492 = cljs.core.next(lines__$1);
var G__31493 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__31494 = result__$1;
gline = G__31491;
lines__$1 = G__31492;
relseg = G__31493;
result = G__31494;
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
var map__30291 = segmap;
var map__30291__$1 = (((((!((map__30291 == null))))?(((((map__30291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30291):map__30291);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30291__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30291__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30291__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30291__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30291__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__30286_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__30286_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__30300 = arguments.length;
switch (G__30300) {
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
var vec__30317 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__31502 = cljs.core.next(segs__$1);
var G__31503 = nrelseg;
var G__31504 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__31502;
relseg__$1 = G__31503;
result__$1 = G__31504;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30317,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30317,(1),null);
var G__31505 = (gline + (1));
var G__31506 = cljs.core.next(lines__$1);
var G__31507 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__31508 = result__$1;
gline = G__31505;
lines__$1 = G__31506;
relseg = G__31507;
result = G__31508;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__30326){
var vec__30327 = p__30326;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30327,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30327,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30327,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30327,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30327,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__30330){
var vec__30331 = p__30330;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30331,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30331,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30331,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30331,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30331,(4),null);
var seg = vec__30331;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__30334){
var vec__30335 = p__30334;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30335,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30335,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30335,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30335,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30335,(4),null);
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
var seq__30343 = cljs.core.seq(infos);
var chunk__30344 = null;
var count__30345 = (0);
var i__30346 = (0);
while(true){
if((i__30346 < count__30345)){
var info = chunk__30344.cljs$core$IIndexed$_nth$arity$2(null,i__30346);
var segv_31514 = info__GT_segv(info,source_idx,line,col);
var gline_31515 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_31516 = cljs.core.count(cljs.core.deref(lines));
if((gline_31515 > (lc_31516 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__30343,chunk__30344,count__30345,i__30346,segv_31514,gline_31515,lc_31516,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_31515 - (lc_31516 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_31514], null));
});})(seq__30343,chunk__30344,count__30345,i__30346,segv_31514,gline_31515,lc_31516,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__30343,chunk__30344,count__30345,i__30346,segv_31514,gline_31515,lc_31516,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31515], null),cljs.core.conj,segv_31514);
});})(seq__30343,chunk__30344,count__30345,i__30346,segv_31514,gline_31515,lc_31516,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__31526 = seq__30343;
var G__31527 = chunk__30344;
var G__31528 = count__30345;
var G__31529 = (i__30346 + (1));
seq__30343 = G__31526;
chunk__30344 = G__31527;
count__30345 = G__31528;
i__30346 = G__31529;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__30343);
if(temp__5735__auto__){
var seq__30343__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30343__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__30343__$1);
var G__31532 = cljs.core.chunk_rest(seq__30343__$1);
var G__31533 = c__4556__auto__;
var G__31534 = cljs.core.count(c__4556__auto__);
var G__31535 = (0);
seq__30343 = G__31532;
chunk__30344 = G__31533;
count__30345 = G__31534;
i__30346 = G__31535;
continue;
} else {
var info = cljs.core.first(seq__30343__$1);
var segv_31538 = info__GT_segv(info,source_idx,line,col);
var gline_31539 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_31540 = cljs.core.count(cljs.core.deref(lines));
if((gline_31539 > (lc_31540 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__30343,chunk__30344,count__30345,i__30346,segv_31538,gline_31539,lc_31540,info,seq__30343__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_31539 - (lc_31540 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_31538], null));
});})(seq__30343,chunk__30344,count__30345,i__30346,segv_31538,gline_31539,lc_31540,info,seq__30343__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__30343,chunk__30344,count__30345,i__30346,segv_31538,gline_31539,lc_31540,info,seq__30343__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31539], null),cljs.core.conj,segv_31538);
});})(seq__30343,chunk__30344,count__30345,i__30346,segv_31538,gline_31539,lc_31540,info,seq__30343__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__31541 = cljs.core.next(seq__30343__$1);
var G__31542 = null;
var G__31543 = (0);
var G__31544 = (0);
seq__30343 = G__31541;
chunk__30344 = G__31542;
count__30345 = G__31543;
i__30346 = G__31544;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__30364_31545 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__30365_31546 = null;
var count__30366_31547 = (0);
var i__30367_31548 = (0);
while(true){
if((i__30367_31548 < count__30366_31547)){
var vec__30575_31549 = chunk__30365_31546.cljs$core$IIndexed$_nth$arity$2(null,i__30367_31548);
var source_idx_31550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30575_31549,(0),null);
var vec__30578_31551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30575_31549,(1),null);
var __31552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30578_31551,(0),null);
var lines_31553__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30578_31551,(1),null);
var seq__30582_31554 = cljs.core.seq(lines_31553__$1);
var chunk__30583_31555 = null;
var count__30584_31556 = (0);
var i__30585_31557 = (0);
while(true){
if((i__30585_31557 < count__30584_31556)){
var vec__30643_31558 = chunk__30583_31555.cljs$core$IIndexed$_nth$arity$2(null,i__30585_31557);
var line_31559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30643_31558,(0),null);
var cols_31560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30643_31558,(1),null);
var seq__30648_31561 = cljs.core.seq(cols_31560);
var chunk__30649_31562 = null;
var count__30650_31563 = (0);
var i__30651_31564 = (0);
while(true){
if((i__30651_31564 < count__30650_31563)){
var vec__30670_31567 = chunk__30649_31562.cljs$core$IIndexed$_nth$arity$2(null,i__30651_31564);
var col_31568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30670_31567,(0),null);
var infos_31569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30670_31567,(1),null);
encode_cols(infos_31569,source_idx_31550,line_31559,col_31568);


var G__31570 = seq__30648_31561;
var G__31571 = chunk__30649_31562;
var G__31572 = count__30650_31563;
var G__31573 = (i__30651_31564 + (1));
seq__30648_31561 = G__31570;
chunk__30649_31562 = G__31571;
count__30650_31563 = G__31572;
i__30651_31564 = G__31573;
continue;
} else {
var temp__5735__auto___31576 = cljs.core.seq(seq__30648_31561);
if(temp__5735__auto___31576){
var seq__30648_31577__$1 = temp__5735__auto___31576;
if(cljs.core.chunked_seq_QMARK_(seq__30648_31577__$1)){
var c__4556__auto___31578 = cljs.core.chunk_first(seq__30648_31577__$1);
var G__31579 = cljs.core.chunk_rest(seq__30648_31577__$1);
var G__31580 = c__4556__auto___31578;
var G__31581 = cljs.core.count(c__4556__auto___31578);
var G__31582 = (0);
seq__30648_31561 = G__31579;
chunk__30649_31562 = G__31580;
count__30650_31563 = G__31581;
i__30651_31564 = G__31582;
continue;
} else {
var vec__30675_31583 = cljs.core.first(seq__30648_31577__$1);
var col_31584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30675_31583,(0),null);
var infos_31585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30675_31583,(1),null);
encode_cols(infos_31585,source_idx_31550,line_31559,col_31584);


var G__31586 = cljs.core.next(seq__30648_31577__$1);
var G__31587 = null;
var G__31588 = (0);
var G__31589 = (0);
seq__30648_31561 = G__31586;
chunk__30649_31562 = G__31587;
count__30650_31563 = G__31588;
i__30651_31564 = G__31589;
continue;
}
} else {
}
}
break;
}


var G__31590 = seq__30582_31554;
var G__31591 = chunk__30583_31555;
var G__31592 = count__30584_31556;
var G__31593 = (i__30585_31557 + (1));
seq__30582_31554 = G__31590;
chunk__30583_31555 = G__31591;
count__30584_31556 = G__31592;
i__30585_31557 = G__31593;
continue;
} else {
var temp__5735__auto___31594 = cljs.core.seq(seq__30582_31554);
if(temp__5735__auto___31594){
var seq__30582_31595__$1 = temp__5735__auto___31594;
if(cljs.core.chunked_seq_QMARK_(seq__30582_31595__$1)){
var c__4556__auto___31596 = cljs.core.chunk_first(seq__30582_31595__$1);
var G__31597 = cljs.core.chunk_rest(seq__30582_31595__$1);
var G__31598 = c__4556__auto___31596;
var G__31599 = cljs.core.count(c__4556__auto___31596);
var G__31600 = (0);
seq__30582_31554 = G__31597;
chunk__30583_31555 = G__31598;
count__30584_31556 = G__31599;
i__30585_31557 = G__31600;
continue;
} else {
var vec__30680_31601 = cljs.core.first(seq__30582_31595__$1);
var line_31602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30680_31601,(0),null);
var cols_31603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30680_31601,(1),null);
var seq__30683_31604 = cljs.core.seq(cols_31603);
var chunk__30684_31605 = null;
var count__30685_31606 = (0);
var i__30686_31607 = (0);
while(true){
if((i__30686_31607 < count__30685_31606)){
var vec__30694_31611 = chunk__30684_31605.cljs$core$IIndexed$_nth$arity$2(null,i__30686_31607);
var col_31612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30694_31611,(0),null);
var infos_31613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30694_31611,(1),null);
encode_cols(infos_31613,source_idx_31550,line_31602,col_31612);


var G__31614 = seq__30683_31604;
var G__31615 = chunk__30684_31605;
var G__31616 = count__30685_31606;
var G__31617 = (i__30686_31607 + (1));
seq__30683_31604 = G__31614;
chunk__30684_31605 = G__31615;
count__30685_31606 = G__31616;
i__30686_31607 = G__31617;
continue;
} else {
var temp__5735__auto___31618__$1 = cljs.core.seq(seq__30683_31604);
if(temp__5735__auto___31618__$1){
var seq__30683_31619__$1 = temp__5735__auto___31618__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30683_31619__$1)){
var c__4556__auto___31621 = cljs.core.chunk_first(seq__30683_31619__$1);
var G__31622 = cljs.core.chunk_rest(seq__30683_31619__$1);
var G__31623 = c__4556__auto___31621;
var G__31624 = cljs.core.count(c__4556__auto___31621);
var G__31625 = (0);
seq__30683_31604 = G__31622;
chunk__30684_31605 = G__31623;
count__30685_31606 = G__31624;
i__30686_31607 = G__31625;
continue;
} else {
var vec__30699_31626 = cljs.core.first(seq__30683_31619__$1);
var col_31627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30699_31626,(0),null);
var infos_31628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30699_31626,(1),null);
encode_cols(infos_31628,source_idx_31550,line_31602,col_31627);


var G__31630 = cljs.core.next(seq__30683_31619__$1);
var G__31631 = null;
var G__31632 = (0);
var G__31633 = (0);
seq__30683_31604 = G__31630;
chunk__30684_31605 = G__31631;
count__30685_31606 = G__31632;
i__30686_31607 = G__31633;
continue;
}
} else {
}
}
break;
}


var G__31634 = cljs.core.next(seq__30582_31595__$1);
var G__31635 = null;
var G__31636 = (0);
var G__31637 = (0);
seq__30582_31554 = G__31634;
chunk__30583_31555 = G__31635;
count__30584_31556 = G__31636;
i__30585_31557 = G__31637;
continue;
}
} else {
}
}
break;
}


var G__31638 = seq__30364_31545;
var G__31639 = chunk__30365_31546;
var G__31640 = count__30366_31547;
var G__31641 = (i__30367_31548 + (1));
seq__30364_31545 = G__31638;
chunk__30365_31546 = G__31639;
count__30366_31547 = G__31640;
i__30367_31548 = G__31641;
continue;
} else {
var temp__5735__auto___31643 = cljs.core.seq(seq__30364_31545);
if(temp__5735__auto___31643){
var seq__30364_31644__$1 = temp__5735__auto___31643;
if(cljs.core.chunked_seq_QMARK_(seq__30364_31644__$1)){
var c__4556__auto___31648 = cljs.core.chunk_first(seq__30364_31644__$1);
var G__31649 = cljs.core.chunk_rest(seq__30364_31644__$1);
var G__31650 = c__4556__auto___31648;
var G__31651 = cljs.core.count(c__4556__auto___31648);
var G__31652 = (0);
seq__30364_31545 = G__31649;
chunk__30365_31546 = G__31650;
count__30366_31547 = G__31651;
i__30367_31548 = G__31652;
continue;
} else {
var vec__30702_31653 = cljs.core.first(seq__30364_31644__$1);
var source_idx_31654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30702_31653,(0),null);
var vec__30705_31655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30702_31653,(1),null);
var __31656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30705_31655,(0),null);
var lines_31657__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30705_31655,(1),null);
var seq__30708_31658 = cljs.core.seq(lines_31657__$1);
var chunk__30709_31659 = null;
var count__30710_31660 = (0);
var i__30711_31661 = (0);
while(true){
if((i__30711_31661 < count__30710_31660)){
var vec__30774_31662 = chunk__30709_31659.cljs$core$IIndexed$_nth$arity$2(null,i__30711_31661);
var line_31663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30774_31662,(0),null);
var cols_31664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30774_31662,(1),null);
var seq__30778_31667 = cljs.core.seq(cols_31664);
var chunk__30779_31668 = null;
var count__30780_31669 = (0);
var i__30781_31670 = (0);
while(true){
if((i__30781_31670 < count__30780_31669)){
var vec__30790_31673 = chunk__30779_31668.cljs$core$IIndexed$_nth$arity$2(null,i__30781_31670);
var col_31674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30790_31673,(0),null);
var infos_31675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30790_31673,(1),null);
encode_cols(infos_31675,source_idx_31654,line_31663,col_31674);


var G__31678 = seq__30778_31667;
var G__31679 = chunk__30779_31668;
var G__31680 = count__30780_31669;
var G__31681 = (i__30781_31670 + (1));
seq__30778_31667 = G__31678;
chunk__30779_31668 = G__31679;
count__30780_31669 = G__31680;
i__30781_31670 = G__31681;
continue;
} else {
var temp__5735__auto___31683__$1 = cljs.core.seq(seq__30778_31667);
if(temp__5735__auto___31683__$1){
var seq__30778_31686__$1 = temp__5735__auto___31683__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30778_31686__$1)){
var c__4556__auto___31688 = cljs.core.chunk_first(seq__30778_31686__$1);
var G__31689 = cljs.core.chunk_rest(seq__30778_31686__$1);
var G__31690 = c__4556__auto___31688;
var G__31691 = cljs.core.count(c__4556__auto___31688);
var G__31692 = (0);
seq__30778_31667 = G__31689;
chunk__30779_31668 = G__31690;
count__30780_31669 = G__31691;
i__30781_31670 = G__31692;
continue;
} else {
var vec__30793_31695 = cljs.core.first(seq__30778_31686__$1);
var col_31696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30793_31695,(0),null);
var infos_31697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30793_31695,(1),null);
encode_cols(infos_31697,source_idx_31654,line_31663,col_31696);


var G__31698 = cljs.core.next(seq__30778_31686__$1);
var G__31699 = null;
var G__31700 = (0);
var G__31701 = (0);
seq__30778_31667 = G__31698;
chunk__30779_31668 = G__31699;
count__30780_31669 = G__31700;
i__30781_31670 = G__31701;
continue;
}
} else {
}
}
break;
}


var G__31703 = seq__30708_31658;
var G__31704 = chunk__30709_31659;
var G__31705 = count__30710_31660;
var G__31706 = (i__30711_31661 + (1));
seq__30708_31658 = G__31703;
chunk__30709_31659 = G__31704;
count__30710_31660 = G__31705;
i__30711_31661 = G__31706;
continue;
} else {
var temp__5735__auto___31709__$1 = cljs.core.seq(seq__30708_31658);
if(temp__5735__auto___31709__$1){
var seq__30708_31710__$1 = temp__5735__auto___31709__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30708_31710__$1)){
var c__4556__auto___31711 = cljs.core.chunk_first(seq__30708_31710__$1);
var G__31712 = cljs.core.chunk_rest(seq__30708_31710__$1);
var G__31713 = c__4556__auto___31711;
var G__31714 = cljs.core.count(c__4556__auto___31711);
var G__31715 = (0);
seq__30708_31658 = G__31712;
chunk__30709_31659 = G__31713;
count__30710_31660 = G__31714;
i__30711_31661 = G__31715;
continue;
} else {
var vec__30796_31716 = cljs.core.first(seq__30708_31710__$1);
var line_31717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30796_31716,(0),null);
var cols_31718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30796_31716,(1),null);
var seq__30802_31719 = cljs.core.seq(cols_31718);
var chunk__30803_31720 = null;
var count__30804_31721 = (0);
var i__30805_31722 = (0);
while(true){
if((i__30805_31722 < count__30804_31721)){
var vec__30817_31724 = chunk__30803_31720.cljs$core$IIndexed$_nth$arity$2(null,i__30805_31722);
var col_31725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30817_31724,(0),null);
var infos_31726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30817_31724,(1),null);
encode_cols(infos_31726,source_idx_31654,line_31717,col_31725);


var G__31730 = seq__30802_31719;
var G__31731 = chunk__30803_31720;
var G__31732 = count__30804_31721;
var G__31733 = (i__30805_31722 + (1));
seq__30802_31719 = G__31730;
chunk__30803_31720 = G__31731;
count__30804_31721 = G__31732;
i__30805_31722 = G__31733;
continue;
} else {
var temp__5735__auto___31734__$2 = cljs.core.seq(seq__30802_31719);
if(temp__5735__auto___31734__$2){
var seq__30802_31735__$1 = temp__5735__auto___31734__$2;
if(cljs.core.chunked_seq_QMARK_(seq__30802_31735__$1)){
var c__4556__auto___31736 = cljs.core.chunk_first(seq__30802_31735__$1);
var G__31739 = cljs.core.chunk_rest(seq__30802_31735__$1);
var G__31740 = c__4556__auto___31736;
var G__31741 = cljs.core.count(c__4556__auto___31736);
var G__31742 = (0);
seq__30802_31719 = G__31739;
chunk__30803_31720 = G__31740;
count__30804_31721 = G__31741;
i__30805_31722 = G__31742;
continue;
} else {
var vec__30822_31743 = cljs.core.first(seq__30802_31735__$1);
var col_31744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30822_31743,(0),null);
var infos_31745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30822_31743,(1),null);
encode_cols(infos_31745,source_idx_31654,line_31717,col_31744);


var G__31747 = cljs.core.next(seq__30802_31735__$1);
var G__31748 = null;
var G__31749 = (0);
var G__31750 = (0);
seq__30802_31719 = G__31747;
chunk__30803_31720 = G__31748;
count__30804_31721 = G__31749;
i__30805_31722 = G__31750;
continue;
}
} else {
}
}
break;
}


var G__31752 = cljs.core.next(seq__30708_31710__$1);
var G__31753 = null;
var G__31754 = (0);
var G__31755 = (0);
seq__30708_31658 = G__31752;
chunk__30709_31659 = G__31753;
count__30710_31660 = G__31754;
i__30711_31661 = G__31755;
continue;
}
} else {
}
}
break;
}


var G__31756 = cljs.core.next(seq__30364_31644__$1);
var G__31757 = null;
var G__31758 = (0);
var G__31759 = (0);
seq__30364_31545 = G__31756;
chunk__30365_31546 = G__31757;
count__30366_31547 = G__31758;
i__30367_31548 = G__31759;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__30829 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__30339_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30339_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__30340_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__30340_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30341_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__30341_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__30831 = G__30829;
goog.object.set(G__30831,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__30831;
} else {
return G__30829;
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
var vec__30834 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30834,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30834,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__30839 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30839,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30839,(1),null);
var G__31763 = cljs.core.next(col_map_seq);
var G__31764 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__30839,col,infos,vec__30834,line,col_map){
return (function (v,p__30843){
var map__30844 = p__30843;
var map__30844__$1 = (((((!((map__30844 == null))))?(((((map__30844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30844):map__30844);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30844__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30844__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__30839,col,infos,vec__30834,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__31763;
new_cols = G__31764;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__31769 = cljs.core.next(line_map_seq);
var G__31770 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__31769;
new_lines = G__31770;
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
var seq__30848_31771 = cljs.core.seq(reverse_map);
var chunk__30849_31772 = null;
var count__30850_31773 = (0);
var i__30851_31774 = (0);
while(true){
if((i__30851_31774 < count__30850_31773)){
var vec__31216_31777 = chunk__30849_31772.cljs$core$IIndexed$_nth$arity$2(null,i__30851_31774);
var line_31778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31216_31777,(0),null);
var columns_31779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31216_31777,(1),null);
var seq__31219_31782 = cljs.core.seq(columns_31779);
var chunk__31220_31783 = null;
var count__31221_31784 = (0);
var i__31222_31785 = (0);
while(true){
if((i__31222_31785 < count__31221_31784)){
var vec__31283_31786 = chunk__31220_31783.cljs$core$IIndexed$_nth$arity$2(null,i__31222_31785);
var column_31787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31283_31786,(0),null);
var column_info_31788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31283_31786,(1),null);
var seq__31286_31792 = cljs.core.seq(column_info_31788);
var chunk__31287_31793 = null;
var count__31288_31794 = (0);
var i__31289_31796 = (0);
while(true){
if((i__31289_31796 < count__31288_31794)){
var map__31295_31797 = chunk__31287_31793.cljs$core$IIndexed$_nth$arity$2(null,i__31289_31796);
var map__31295_31798__$1 = (((((!((map__31295_31797 == null))))?(((((map__31295_31797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31295_31797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31295_31797):map__31295_31797);
var gline_31799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31295_31798__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31295_31798__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31295_31798__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31799], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31286_31792,chunk__31287_31793,count__31288_31794,i__31289_31796,seq__31219_31782,chunk__31220_31783,count__31221_31784,i__31222_31785,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31295_31797,map__31295_31798__$1,gline_31799,gcol_31800,name_31801,vec__31283_31786,column_31787,column_info_31788,vec__31216_31777,line_31778,columns_31779,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31800], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31778,new cljs.core.Keyword(null,"col","col",-1959363084),column_31787,new cljs.core.Keyword(null,"name","name",1843675177),name_31801], null));
});})(seq__31286_31792,chunk__31287_31793,count__31288_31794,i__31289_31796,seq__31219_31782,chunk__31220_31783,count__31221_31784,i__31222_31785,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31295_31797,map__31295_31798__$1,gline_31799,gcol_31800,name_31801,vec__31283_31786,column_31787,column_info_31788,vec__31216_31777,line_31778,columns_31779,inverted))
,cljs.core.sorted_map()));


var G__31808 = seq__31286_31792;
var G__31809 = chunk__31287_31793;
var G__31810 = count__31288_31794;
var G__31811 = (i__31289_31796 + (1));
seq__31286_31792 = G__31808;
chunk__31287_31793 = G__31809;
count__31288_31794 = G__31810;
i__31289_31796 = G__31811;
continue;
} else {
var temp__5735__auto___31812 = cljs.core.seq(seq__31286_31792);
if(temp__5735__auto___31812){
var seq__31286_31813__$1 = temp__5735__auto___31812;
if(cljs.core.chunked_seq_QMARK_(seq__31286_31813__$1)){
var c__4556__auto___31814 = cljs.core.chunk_first(seq__31286_31813__$1);
var G__31815 = cljs.core.chunk_rest(seq__31286_31813__$1);
var G__31816 = c__4556__auto___31814;
var G__31817 = cljs.core.count(c__4556__auto___31814);
var G__31818 = (0);
seq__31286_31792 = G__31815;
chunk__31287_31793 = G__31816;
count__31288_31794 = G__31817;
i__31289_31796 = G__31818;
continue;
} else {
var map__31298_31822 = cljs.core.first(seq__31286_31813__$1);
var map__31298_31823__$1 = (((((!((map__31298_31822 == null))))?(((((map__31298_31822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31298_31822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31298_31822):map__31298_31822);
var gline_31824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31298_31823__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31298_31823__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31298_31823__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31824], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31286_31792,chunk__31287_31793,count__31288_31794,i__31289_31796,seq__31219_31782,chunk__31220_31783,count__31221_31784,i__31222_31785,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31298_31822,map__31298_31823__$1,gline_31824,gcol_31825,name_31826,seq__31286_31813__$1,temp__5735__auto___31812,vec__31283_31786,column_31787,column_info_31788,vec__31216_31777,line_31778,columns_31779,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31825], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31778,new cljs.core.Keyword(null,"col","col",-1959363084),column_31787,new cljs.core.Keyword(null,"name","name",1843675177),name_31826], null));
});})(seq__31286_31792,chunk__31287_31793,count__31288_31794,i__31289_31796,seq__31219_31782,chunk__31220_31783,count__31221_31784,i__31222_31785,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31298_31822,map__31298_31823__$1,gline_31824,gcol_31825,name_31826,seq__31286_31813__$1,temp__5735__auto___31812,vec__31283_31786,column_31787,column_info_31788,vec__31216_31777,line_31778,columns_31779,inverted))
,cljs.core.sorted_map()));


var G__31828 = cljs.core.next(seq__31286_31813__$1);
var G__31829 = null;
var G__31830 = (0);
var G__31831 = (0);
seq__31286_31792 = G__31828;
chunk__31287_31793 = G__31829;
count__31288_31794 = G__31830;
i__31289_31796 = G__31831;
continue;
}
} else {
}
}
break;
}


var G__31832 = seq__31219_31782;
var G__31833 = chunk__31220_31783;
var G__31834 = count__31221_31784;
var G__31835 = (i__31222_31785 + (1));
seq__31219_31782 = G__31832;
chunk__31220_31783 = G__31833;
count__31221_31784 = G__31834;
i__31222_31785 = G__31835;
continue;
} else {
var temp__5735__auto___31839 = cljs.core.seq(seq__31219_31782);
if(temp__5735__auto___31839){
var seq__31219_31840__$1 = temp__5735__auto___31839;
if(cljs.core.chunked_seq_QMARK_(seq__31219_31840__$1)){
var c__4556__auto___31842 = cljs.core.chunk_first(seq__31219_31840__$1);
var G__31843 = cljs.core.chunk_rest(seq__31219_31840__$1);
var G__31844 = c__4556__auto___31842;
var G__31845 = cljs.core.count(c__4556__auto___31842);
var G__31846 = (0);
seq__31219_31782 = G__31843;
chunk__31220_31783 = G__31844;
count__31221_31784 = G__31845;
i__31222_31785 = G__31846;
continue;
} else {
var vec__31303_31847 = cljs.core.first(seq__31219_31840__$1);
var column_31848 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31303_31847,(0),null);
var column_info_31849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31303_31847,(1),null);
var seq__31307_31850 = cljs.core.seq(column_info_31849);
var chunk__31308_31851 = null;
var count__31309_31852 = (0);
var i__31310_31853 = (0);
while(true){
if((i__31310_31853 < count__31309_31852)){
var map__31316_31854 = chunk__31308_31851.cljs$core$IIndexed$_nth$arity$2(null,i__31310_31853);
var map__31316_31855__$1 = (((((!((map__31316_31854 == null))))?(((((map__31316_31854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31316_31854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31316_31854):map__31316_31854);
var gline_31856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31316_31855__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31316_31855__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31316_31855__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31856], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31307_31850,chunk__31308_31851,count__31309_31852,i__31310_31853,seq__31219_31782,chunk__31220_31783,count__31221_31784,i__31222_31785,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31316_31854,map__31316_31855__$1,gline_31856,gcol_31857,name_31858,vec__31303_31847,column_31848,column_info_31849,seq__31219_31840__$1,temp__5735__auto___31839,vec__31216_31777,line_31778,columns_31779,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31857], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31778,new cljs.core.Keyword(null,"col","col",-1959363084),column_31848,new cljs.core.Keyword(null,"name","name",1843675177),name_31858], null));
});})(seq__31307_31850,chunk__31308_31851,count__31309_31852,i__31310_31853,seq__31219_31782,chunk__31220_31783,count__31221_31784,i__31222_31785,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31316_31854,map__31316_31855__$1,gline_31856,gcol_31857,name_31858,vec__31303_31847,column_31848,column_info_31849,seq__31219_31840__$1,temp__5735__auto___31839,vec__31216_31777,line_31778,columns_31779,inverted))
,cljs.core.sorted_map()));


var G__31862 = seq__31307_31850;
var G__31863 = chunk__31308_31851;
var G__31864 = count__31309_31852;
var G__31865 = (i__31310_31853 + (1));
seq__31307_31850 = G__31862;
chunk__31308_31851 = G__31863;
count__31309_31852 = G__31864;
i__31310_31853 = G__31865;
continue;
} else {
var temp__5735__auto___31868__$1 = cljs.core.seq(seq__31307_31850);
if(temp__5735__auto___31868__$1){
var seq__31307_31869__$1 = temp__5735__auto___31868__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31307_31869__$1)){
var c__4556__auto___31870 = cljs.core.chunk_first(seq__31307_31869__$1);
var G__31871 = cljs.core.chunk_rest(seq__31307_31869__$1);
var G__31872 = c__4556__auto___31870;
var G__31873 = cljs.core.count(c__4556__auto___31870);
var G__31874 = (0);
seq__31307_31850 = G__31871;
chunk__31308_31851 = G__31872;
count__31309_31852 = G__31873;
i__31310_31853 = G__31874;
continue;
} else {
var map__31320_31875 = cljs.core.first(seq__31307_31869__$1);
var map__31320_31876__$1 = (((((!((map__31320_31875 == null))))?(((((map__31320_31875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31320_31875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31320_31875):map__31320_31875);
var gline_31877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31320_31876__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31320_31876__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31320_31876__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31877], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31307_31850,chunk__31308_31851,count__31309_31852,i__31310_31853,seq__31219_31782,chunk__31220_31783,count__31221_31784,i__31222_31785,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31320_31875,map__31320_31876__$1,gline_31877,gcol_31878,name_31879,seq__31307_31869__$1,temp__5735__auto___31868__$1,vec__31303_31847,column_31848,column_info_31849,seq__31219_31840__$1,temp__5735__auto___31839,vec__31216_31777,line_31778,columns_31779,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31878], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31778,new cljs.core.Keyword(null,"col","col",-1959363084),column_31848,new cljs.core.Keyword(null,"name","name",1843675177),name_31879], null));
});})(seq__31307_31850,chunk__31308_31851,count__31309_31852,i__31310_31853,seq__31219_31782,chunk__31220_31783,count__31221_31784,i__31222_31785,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31320_31875,map__31320_31876__$1,gline_31877,gcol_31878,name_31879,seq__31307_31869__$1,temp__5735__auto___31868__$1,vec__31303_31847,column_31848,column_info_31849,seq__31219_31840__$1,temp__5735__auto___31839,vec__31216_31777,line_31778,columns_31779,inverted))
,cljs.core.sorted_map()));


var G__31883 = cljs.core.next(seq__31307_31869__$1);
var G__31884 = null;
var G__31885 = (0);
var G__31886 = (0);
seq__31307_31850 = G__31883;
chunk__31308_31851 = G__31884;
count__31309_31852 = G__31885;
i__31310_31853 = G__31886;
continue;
}
} else {
}
}
break;
}


var G__31887 = cljs.core.next(seq__31219_31840__$1);
var G__31888 = null;
var G__31889 = (0);
var G__31890 = (0);
seq__31219_31782 = G__31887;
chunk__31220_31783 = G__31888;
count__31221_31784 = G__31889;
i__31222_31785 = G__31890;
continue;
}
} else {
}
}
break;
}


var G__31891 = seq__30848_31771;
var G__31892 = chunk__30849_31772;
var G__31893 = count__30850_31773;
var G__31894 = (i__30851_31774 + (1));
seq__30848_31771 = G__31891;
chunk__30849_31772 = G__31892;
count__30850_31773 = G__31893;
i__30851_31774 = G__31894;
continue;
} else {
var temp__5735__auto___31896 = cljs.core.seq(seq__30848_31771);
if(temp__5735__auto___31896){
var seq__30848_31898__$1 = temp__5735__auto___31896;
if(cljs.core.chunked_seq_QMARK_(seq__30848_31898__$1)){
var c__4556__auto___31902 = cljs.core.chunk_first(seq__30848_31898__$1);
var G__31907 = cljs.core.chunk_rest(seq__30848_31898__$1);
var G__31908 = c__4556__auto___31902;
var G__31909 = cljs.core.count(c__4556__auto___31902);
var G__31910 = (0);
seq__30848_31771 = G__31907;
chunk__30849_31772 = G__31908;
count__30850_31773 = G__31909;
i__30851_31774 = G__31910;
continue;
} else {
var vec__31328_31911 = cljs.core.first(seq__30848_31898__$1);
var line_31912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31328_31911,(0),null);
var columns_31913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31328_31911,(1),null);
var seq__31331_31914 = cljs.core.seq(columns_31913);
var chunk__31332_31915 = null;
var count__31333_31916 = (0);
var i__31334_31917 = (0);
while(true){
if((i__31334_31917 < count__31333_31916)){
var vec__31388_31919 = chunk__31332_31915.cljs$core$IIndexed$_nth$arity$2(null,i__31334_31917);
var column_31920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31388_31919,(0),null);
var column_info_31921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31388_31919,(1),null);
var seq__31392_31927 = cljs.core.seq(column_info_31921);
var chunk__31393_31928 = null;
var count__31394_31929 = (0);
var i__31395_31930 = (0);
while(true){
if((i__31395_31930 < count__31394_31929)){
var map__31412_31931 = chunk__31393_31928.cljs$core$IIndexed$_nth$arity$2(null,i__31395_31930);
var map__31412_31932__$1 = (((((!((map__31412_31931 == null))))?(((((map__31412_31931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31412_31931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31412_31931):map__31412_31931);
var gline_31933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31412_31932__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31412_31932__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31935 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31412_31932__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31933], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31392_31927,chunk__31393_31928,count__31394_31929,i__31395_31930,seq__31331_31914,chunk__31332_31915,count__31333_31916,i__31334_31917,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31412_31931,map__31412_31932__$1,gline_31933,gcol_31934,name_31935,vec__31388_31919,column_31920,column_info_31921,vec__31328_31911,line_31912,columns_31913,seq__30848_31898__$1,temp__5735__auto___31896,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31934], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31912,new cljs.core.Keyword(null,"col","col",-1959363084),column_31920,new cljs.core.Keyword(null,"name","name",1843675177),name_31935], null));
});})(seq__31392_31927,chunk__31393_31928,count__31394_31929,i__31395_31930,seq__31331_31914,chunk__31332_31915,count__31333_31916,i__31334_31917,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31412_31931,map__31412_31932__$1,gline_31933,gcol_31934,name_31935,vec__31388_31919,column_31920,column_info_31921,vec__31328_31911,line_31912,columns_31913,seq__30848_31898__$1,temp__5735__auto___31896,inverted))
,cljs.core.sorted_map()));


var G__31952 = seq__31392_31927;
var G__31953 = chunk__31393_31928;
var G__31954 = count__31394_31929;
var G__31955 = (i__31395_31930 + (1));
seq__31392_31927 = G__31952;
chunk__31393_31928 = G__31953;
count__31394_31929 = G__31954;
i__31395_31930 = G__31955;
continue;
} else {
var temp__5735__auto___31956__$1 = cljs.core.seq(seq__31392_31927);
if(temp__5735__auto___31956__$1){
var seq__31392_31957__$1 = temp__5735__auto___31956__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31392_31957__$1)){
var c__4556__auto___31958 = cljs.core.chunk_first(seq__31392_31957__$1);
var G__31959 = cljs.core.chunk_rest(seq__31392_31957__$1);
var G__31960 = c__4556__auto___31958;
var G__31961 = cljs.core.count(c__4556__auto___31958);
var G__31962 = (0);
seq__31392_31927 = G__31959;
chunk__31393_31928 = G__31960;
count__31394_31929 = G__31961;
i__31395_31930 = G__31962;
continue;
} else {
var map__31417_31963 = cljs.core.first(seq__31392_31957__$1);
var map__31417_31964__$1 = (((((!((map__31417_31963 == null))))?(((((map__31417_31963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31417_31963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31417_31963):map__31417_31963);
var gline_31965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31417_31964__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31417_31964__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31417_31964__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31965], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31392_31927,chunk__31393_31928,count__31394_31929,i__31395_31930,seq__31331_31914,chunk__31332_31915,count__31333_31916,i__31334_31917,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31417_31963,map__31417_31964__$1,gline_31965,gcol_31966,name_31967,seq__31392_31957__$1,temp__5735__auto___31956__$1,vec__31388_31919,column_31920,column_info_31921,vec__31328_31911,line_31912,columns_31913,seq__30848_31898__$1,temp__5735__auto___31896,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31966], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31912,new cljs.core.Keyword(null,"col","col",-1959363084),column_31920,new cljs.core.Keyword(null,"name","name",1843675177),name_31967], null));
});})(seq__31392_31927,chunk__31393_31928,count__31394_31929,i__31395_31930,seq__31331_31914,chunk__31332_31915,count__31333_31916,i__31334_31917,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31417_31963,map__31417_31964__$1,gline_31965,gcol_31966,name_31967,seq__31392_31957__$1,temp__5735__auto___31956__$1,vec__31388_31919,column_31920,column_info_31921,vec__31328_31911,line_31912,columns_31913,seq__30848_31898__$1,temp__5735__auto___31896,inverted))
,cljs.core.sorted_map()));


var G__31970 = cljs.core.next(seq__31392_31957__$1);
var G__31971 = null;
var G__31972 = (0);
var G__31973 = (0);
seq__31392_31927 = G__31970;
chunk__31393_31928 = G__31971;
count__31394_31929 = G__31972;
i__31395_31930 = G__31973;
continue;
}
} else {
}
}
break;
}


var G__31974 = seq__31331_31914;
var G__31975 = chunk__31332_31915;
var G__31976 = count__31333_31916;
var G__31977 = (i__31334_31917 + (1));
seq__31331_31914 = G__31974;
chunk__31332_31915 = G__31975;
count__31333_31916 = G__31976;
i__31334_31917 = G__31977;
continue;
} else {
var temp__5735__auto___31978__$1 = cljs.core.seq(seq__31331_31914);
if(temp__5735__auto___31978__$1){
var seq__31331_31979__$1 = temp__5735__auto___31978__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31331_31979__$1)){
var c__4556__auto___31980 = cljs.core.chunk_first(seq__31331_31979__$1);
var G__31981 = cljs.core.chunk_rest(seq__31331_31979__$1);
var G__31982 = c__4556__auto___31980;
var G__31983 = cljs.core.count(c__4556__auto___31980);
var G__31984 = (0);
seq__31331_31914 = G__31981;
chunk__31332_31915 = G__31982;
count__31333_31916 = G__31983;
i__31334_31917 = G__31984;
continue;
} else {
var vec__31426_31985 = cljs.core.first(seq__31331_31979__$1);
var column_31986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31426_31985,(0),null);
var column_info_31987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31426_31985,(1),null);
var seq__31431_31988 = cljs.core.seq(column_info_31987);
var chunk__31432_31989 = null;
var count__31433_31990 = (0);
var i__31434_31991 = (0);
while(true){
if((i__31434_31991 < count__31433_31990)){
var map__31447_31992 = chunk__31432_31989.cljs$core$IIndexed$_nth$arity$2(null,i__31434_31991);
var map__31447_31993__$1 = (((((!((map__31447_31992 == null))))?(((((map__31447_31992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31447_31992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31447_31992):map__31447_31992);
var gline_31994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31447_31993__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_31995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31447_31993__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_31996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31447_31993__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_31994], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31431_31988,chunk__31432_31989,count__31433_31990,i__31434_31991,seq__31331_31914,chunk__31332_31915,count__31333_31916,i__31334_31917,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31447_31992,map__31447_31993__$1,gline_31994,gcol_31995,name_31996,vec__31426_31985,column_31986,column_info_31987,seq__31331_31979__$1,temp__5735__auto___31978__$1,vec__31328_31911,line_31912,columns_31913,seq__30848_31898__$1,temp__5735__auto___31896,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_31995], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31912,new cljs.core.Keyword(null,"col","col",-1959363084),column_31986,new cljs.core.Keyword(null,"name","name",1843675177),name_31996], null));
});})(seq__31431_31988,chunk__31432_31989,count__31433_31990,i__31434_31991,seq__31331_31914,chunk__31332_31915,count__31333_31916,i__31334_31917,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31447_31992,map__31447_31993__$1,gline_31994,gcol_31995,name_31996,vec__31426_31985,column_31986,column_info_31987,seq__31331_31979__$1,temp__5735__auto___31978__$1,vec__31328_31911,line_31912,columns_31913,seq__30848_31898__$1,temp__5735__auto___31896,inverted))
,cljs.core.sorted_map()));


var G__32002 = seq__31431_31988;
var G__32003 = chunk__31432_31989;
var G__32004 = count__31433_31990;
var G__32005 = (i__31434_31991 + (1));
seq__31431_31988 = G__32002;
chunk__31432_31989 = G__32003;
count__31433_31990 = G__32004;
i__31434_31991 = G__32005;
continue;
} else {
var temp__5735__auto___32007__$2 = cljs.core.seq(seq__31431_31988);
if(temp__5735__auto___32007__$2){
var seq__31431_32009__$1 = temp__5735__auto___32007__$2;
if(cljs.core.chunked_seq_QMARK_(seq__31431_32009__$1)){
var c__4556__auto___32010 = cljs.core.chunk_first(seq__31431_32009__$1);
var G__32011 = cljs.core.chunk_rest(seq__31431_32009__$1);
var G__32012 = c__4556__auto___32010;
var G__32013 = cljs.core.count(c__4556__auto___32010);
var G__32014 = (0);
seq__31431_31988 = G__32011;
chunk__31432_31989 = G__32012;
count__31433_31990 = G__32013;
i__31434_31991 = G__32014;
continue;
} else {
var map__31455_32018 = cljs.core.first(seq__31431_32009__$1);
var map__31455_32019__$1 = (((((!((map__31455_32018 == null))))?(((((map__31455_32018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31455_32018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31455_32018):map__31455_32018);
var gline_32020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31455_32019__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_32021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31455_32019__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_32022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31455_32019__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_32020], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__31431_31988,chunk__31432_31989,count__31433_31990,i__31434_31991,seq__31331_31914,chunk__31332_31915,count__31333_31916,i__31334_31917,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31455_32018,map__31455_32019__$1,gline_32020,gcol_32021,name_32022,seq__31431_32009__$1,temp__5735__auto___32007__$2,vec__31426_31985,column_31986,column_info_31987,seq__31331_31979__$1,temp__5735__auto___31978__$1,vec__31328_31911,line_31912,columns_31913,seq__30848_31898__$1,temp__5735__auto___31896,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_32021], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_31912,new cljs.core.Keyword(null,"col","col",-1959363084),column_31986,new cljs.core.Keyword(null,"name","name",1843675177),name_32022], null));
});})(seq__31431_31988,chunk__31432_31989,count__31433_31990,i__31434_31991,seq__31331_31914,chunk__31332_31915,count__31333_31916,i__31334_31917,seq__30848_31771,chunk__30849_31772,count__30850_31773,i__30851_31774,map__31455_32018,map__31455_32019__$1,gline_32020,gcol_32021,name_32022,seq__31431_32009__$1,temp__5735__auto___32007__$2,vec__31426_31985,column_31986,column_info_31987,seq__31331_31979__$1,temp__5735__auto___31978__$1,vec__31328_31911,line_31912,columns_31913,seq__30848_31898__$1,temp__5735__auto___31896,inverted))
,cljs.core.sorted_map()));


var G__32029 = cljs.core.next(seq__31431_32009__$1);
var G__32030 = null;
var G__32031 = (0);
var G__32032 = (0);
seq__31431_31988 = G__32029;
chunk__31432_31989 = G__32030;
count__31433_31990 = G__32031;
i__31434_31991 = G__32032;
continue;
}
} else {
}
}
break;
}


var G__32033 = cljs.core.next(seq__31331_31979__$1);
var G__32034 = null;
var G__32035 = (0);
var G__32036 = (0);
seq__31331_31914 = G__32033;
chunk__31332_31915 = G__32034;
count__31333_31916 = G__32035;
i__31334_31917 = G__32036;
continue;
}
} else {
}
}
break;
}


var G__32037 = cljs.core.next(seq__30848_31898__$1);
var G__32038 = null;
var G__32039 = (0);
var G__32040 = (0);
seq__30848_31771 = G__32037;
chunk__30849_31772 = G__32038;
count__30850_31773 = G__32039;
i__30851_31774 = G__32040;
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
