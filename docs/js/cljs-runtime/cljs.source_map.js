goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__38762){
var vec__38764 = p__38762;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38764,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38764,(1),null);
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
var vec__38779 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38779,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38779,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38779,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38779,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38779,(4),null);
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
var vec__38789 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38789,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38789,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38789,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38789,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38789,(4),null);
var vec__38792 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38792,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38792,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38792,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38792,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38792,(4),null);
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
var map__38807 = segmap;
var map__38807__$1 = (((((!((map__38807 == null))))?(((((map__38807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38807):map__38807);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38807__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38807__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38807__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38807__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38807__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__38829 = arguments.length;
switch (G__38829) {
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
var vec__38854 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__40247 = cljs.core.next(segs__$1);
var G__40248 = nrelseg;
var G__40249 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__40247;
relseg__$1 = G__40248;
result__$1 = G__40249;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38854,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38854,(1),null);
var G__40250 = (gline + (1));
var G__40251 = cljs.core.next(lines__$1);
var G__40252 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__40253 = result__$1;
gline = G__40250;
lines__$1 = G__40251;
relseg = G__40252;
result = G__40253;
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
var map__38866 = segmap;
var map__38866__$1 = (((((!((map__38866 == null))))?(((((map__38866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38866):map__38866);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38866__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38866__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38866__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38866__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38866__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__38864_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__38864_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__38881 = arguments.length;
switch (G__38881) {
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
var vec__38918 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__40256 = cljs.core.next(segs__$1);
var G__40257 = nrelseg;
var G__40258 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__40256;
relseg__$1 = G__40257;
result__$1 = G__40258;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38918,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38918,(1),null);
var G__40262 = (gline + (1));
var G__40263 = cljs.core.next(lines__$1);
var G__40264 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__40265 = result__$1;
gline = G__40262;
lines__$1 = G__40263;
relseg = G__40264;
result = G__40265;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__38928){
var vec__38930 = p__38928;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38930,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38930,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38930,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38930,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38930,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__38936){
var vec__38937 = p__38936;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38937,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38937,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38937,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38937,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38937,(4),null);
var seg = vec__38937;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__38944){
var vec__38945 = p__38944;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38945,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38945,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38945,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38945,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38945,(4),null);
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
var seq__38971 = cljs.core.seq(infos);
var chunk__38972 = null;
var count__38973 = (0);
var i__38974 = (0);
while(true){
if((i__38974 < count__38973)){
var info = chunk__38972.cljs$core$IIndexed$_nth$arity$2(null,i__38974);
var segv_40286 = info__GT_segv(info,source_idx,line,col);
var gline_40287 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_40288 = cljs.core.count(cljs.core.deref(lines));
if((gline_40287 > (lc_40288 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__38971,chunk__38972,count__38973,i__38974,segv_40286,gline_40287,lc_40288,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_40287 - (lc_40288 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_40286], null));
});})(seq__38971,chunk__38972,count__38973,i__38974,segv_40286,gline_40287,lc_40288,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__38971,chunk__38972,count__38973,i__38974,segv_40286,gline_40287,lc_40288,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40287], null),cljs.core.conj,segv_40286);
});})(seq__38971,chunk__38972,count__38973,i__38974,segv_40286,gline_40287,lc_40288,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__40289 = seq__38971;
var G__40290 = chunk__38972;
var G__40291 = count__38973;
var G__40292 = (i__38974 + (1));
seq__38971 = G__40289;
chunk__38972 = G__40290;
count__38973 = G__40291;
i__38974 = G__40292;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38971);
if(temp__5735__auto__){
var seq__38971__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38971__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38971__$1);
var G__40293 = cljs.core.chunk_rest(seq__38971__$1);
var G__40294 = c__4556__auto__;
var G__40296 = cljs.core.count(c__4556__auto__);
var G__40297 = (0);
seq__38971 = G__40293;
chunk__38972 = G__40294;
count__38973 = G__40296;
i__38974 = G__40297;
continue;
} else {
var info = cljs.core.first(seq__38971__$1);
var segv_40300 = info__GT_segv(info,source_idx,line,col);
var gline_40301 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_40302 = cljs.core.count(cljs.core.deref(lines));
if((gline_40301 > (lc_40302 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__38971,chunk__38972,count__38973,i__38974,segv_40300,gline_40301,lc_40302,info,seq__38971__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_40301 - (lc_40302 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_40300], null));
});})(seq__38971,chunk__38972,count__38973,i__38974,segv_40300,gline_40301,lc_40302,info,seq__38971__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__38971,chunk__38972,count__38973,i__38974,segv_40300,gline_40301,lc_40302,info,seq__38971__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40301], null),cljs.core.conj,segv_40300);
});})(seq__38971,chunk__38972,count__38973,i__38974,segv_40300,gline_40301,lc_40302,info,seq__38971__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__40304 = cljs.core.next(seq__38971__$1);
var G__40305 = null;
var G__40306 = (0);
var G__40307 = (0);
seq__38971 = G__40304;
chunk__38972 = G__40305;
count__38973 = G__40306;
i__38974 = G__40307;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__38987_40308 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__38988_40309 = null;
var count__38989_40311 = (0);
var i__38990_40312 = (0);
while(true){
if((i__38990_40312 < count__38989_40311)){
var vec__39277_40315 = chunk__38988_40309.cljs$core$IIndexed$_nth$arity$2(null,i__38990_40312);
var source_idx_40316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39277_40315,(0),null);
var vec__39280_40317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39277_40315,(1),null);
var __40318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39280_40317,(0),null);
var lines_40319__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39280_40317,(1),null);
var seq__39287_40321 = cljs.core.seq(lines_40319__$1);
var chunk__39288_40322 = null;
var count__39289_40323 = (0);
var i__39290_40324 = (0);
while(true){
if((i__39290_40324 < count__39289_40323)){
var vec__39346_40327 = chunk__39288_40322.cljs$core$IIndexed$_nth$arity$2(null,i__39290_40324);
var line_40328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39346_40327,(0),null);
var cols_40329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39346_40327,(1),null);
var seq__39349_40330 = cljs.core.seq(cols_40329);
var chunk__39350_40331 = null;
var count__39351_40332 = (0);
var i__39352_40333 = (0);
while(true){
if((i__39352_40333 < count__39351_40332)){
var vec__39359_40336 = chunk__39350_40331.cljs$core$IIndexed$_nth$arity$2(null,i__39352_40333);
var col_40337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39359_40336,(0),null);
var infos_40338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39359_40336,(1),null);
encode_cols(infos_40338,source_idx_40316,line_40328,col_40337);


var G__40339 = seq__39349_40330;
var G__40340 = chunk__39350_40331;
var G__40341 = count__39351_40332;
var G__40342 = (i__39352_40333 + (1));
seq__39349_40330 = G__40339;
chunk__39350_40331 = G__40340;
count__39351_40332 = G__40341;
i__39352_40333 = G__40342;
continue;
} else {
var temp__5735__auto___40343 = cljs.core.seq(seq__39349_40330);
if(temp__5735__auto___40343){
var seq__39349_40344__$1 = temp__5735__auto___40343;
if(cljs.core.chunked_seq_QMARK_(seq__39349_40344__$1)){
var c__4556__auto___40345 = cljs.core.chunk_first(seq__39349_40344__$1);
var G__40346 = cljs.core.chunk_rest(seq__39349_40344__$1);
var G__40347 = c__4556__auto___40345;
var G__40348 = cljs.core.count(c__4556__auto___40345);
var G__40349 = (0);
seq__39349_40330 = G__40346;
chunk__39350_40331 = G__40347;
count__39351_40332 = G__40348;
i__39352_40333 = G__40349;
continue;
} else {
var vec__39364_40350 = cljs.core.first(seq__39349_40344__$1);
var col_40351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39364_40350,(0),null);
var infos_40352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39364_40350,(1),null);
encode_cols(infos_40352,source_idx_40316,line_40328,col_40351);


var G__40356 = cljs.core.next(seq__39349_40344__$1);
var G__40357 = null;
var G__40358 = (0);
var G__40359 = (0);
seq__39349_40330 = G__40356;
chunk__39350_40331 = G__40357;
count__39351_40332 = G__40358;
i__39352_40333 = G__40359;
continue;
}
} else {
}
}
break;
}


var G__40360 = seq__39287_40321;
var G__40361 = chunk__39288_40322;
var G__40362 = count__39289_40323;
var G__40363 = (i__39290_40324 + (1));
seq__39287_40321 = G__40360;
chunk__39288_40322 = G__40361;
count__39289_40323 = G__40362;
i__39290_40324 = G__40363;
continue;
} else {
var temp__5735__auto___40364 = cljs.core.seq(seq__39287_40321);
if(temp__5735__auto___40364){
var seq__39287_40365__$1 = temp__5735__auto___40364;
if(cljs.core.chunked_seq_QMARK_(seq__39287_40365__$1)){
var c__4556__auto___40366 = cljs.core.chunk_first(seq__39287_40365__$1);
var G__40367 = cljs.core.chunk_rest(seq__39287_40365__$1);
var G__40368 = c__4556__auto___40366;
var G__40369 = cljs.core.count(c__4556__auto___40366);
var G__40370 = (0);
seq__39287_40321 = G__40367;
chunk__39288_40322 = G__40368;
count__39289_40323 = G__40369;
i__39290_40324 = G__40370;
continue;
} else {
var vec__39368_40371 = cljs.core.first(seq__39287_40365__$1);
var line_40372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39368_40371,(0),null);
var cols_40373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39368_40371,(1),null);
var seq__39374_40374 = cljs.core.seq(cols_40373);
var chunk__39375_40375 = null;
var count__39376_40376 = (0);
var i__39377_40377 = (0);
while(true){
if((i__39377_40377 < count__39376_40376)){
var vec__39384_40378 = chunk__39375_40375.cljs$core$IIndexed$_nth$arity$2(null,i__39377_40377);
var col_40379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39384_40378,(0),null);
var infos_40380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39384_40378,(1),null);
encode_cols(infos_40380,source_idx_40316,line_40372,col_40379);


var G__40381 = seq__39374_40374;
var G__40382 = chunk__39375_40375;
var G__40383 = count__39376_40376;
var G__40384 = (i__39377_40377 + (1));
seq__39374_40374 = G__40381;
chunk__39375_40375 = G__40382;
count__39376_40376 = G__40383;
i__39377_40377 = G__40384;
continue;
} else {
var temp__5735__auto___40386__$1 = cljs.core.seq(seq__39374_40374);
if(temp__5735__auto___40386__$1){
var seq__39374_40390__$1 = temp__5735__auto___40386__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39374_40390__$1)){
var c__4556__auto___40391 = cljs.core.chunk_first(seq__39374_40390__$1);
var G__40392 = cljs.core.chunk_rest(seq__39374_40390__$1);
var G__40393 = c__4556__auto___40391;
var G__40394 = cljs.core.count(c__4556__auto___40391);
var G__40395 = (0);
seq__39374_40374 = G__40392;
chunk__39375_40375 = G__40393;
count__39376_40376 = G__40394;
i__39377_40377 = G__40395;
continue;
} else {
var vec__39387_40396 = cljs.core.first(seq__39374_40390__$1);
var col_40397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39387_40396,(0),null);
var infos_40398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39387_40396,(1),null);
encode_cols(infos_40398,source_idx_40316,line_40372,col_40397);


var G__40399 = cljs.core.next(seq__39374_40390__$1);
var G__40400 = null;
var G__40401 = (0);
var G__40402 = (0);
seq__39374_40374 = G__40399;
chunk__39375_40375 = G__40400;
count__39376_40376 = G__40401;
i__39377_40377 = G__40402;
continue;
}
} else {
}
}
break;
}


var G__40403 = cljs.core.next(seq__39287_40365__$1);
var G__40404 = null;
var G__40405 = (0);
var G__40406 = (0);
seq__39287_40321 = G__40403;
chunk__39288_40322 = G__40404;
count__39289_40323 = G__40405;
i__39290_40324 = G__40406;
continue;
}
} else {
}
}
break;
}


var G__40407 = seq__38987_40308;
var G__40408 = chunk__38988_40309;
var G__40409 = count__38989_40311;
var G__40410 = (i__38990_40312 + (1));
seq__38987_40308 = G__40407;
chunk__38988_40309 = G__40408;
count__38989_40311 = G__40409;
i__38990_40312 = G__40410;
continue;
} else {
var temp__5735__auto___40411 = cljs.core.seq(seq__38987_40308);
if(temp__5735__auto___40411){
var seq__38987_40412__$1 = temp__5735__auto___40411;
if(cljs.core.chunked_seq_QMARK_(seq__38987_40412__$1)){
var c__4556__auto___40413 = cljs.core.chunk_first(seq__38987_40412__$1);
var G__40414 = cljs.core.chunk_rest(seq__38987_40412__$1);
var G__40415 = c__4556__auto___40413;
var G__40416 = cljs.core.count(c__4556__auto___40413);
var G__40417 = (0);
seq__38987_40308 = G__40414;
chunk__38988_40309 = G__40415;
count__38989_40311 = G__40416;
i__38990_40312 = G__40417;
continue;
} else {
var vec__39390_40418 = cljs.core.first(seq__38987_40412__$1);
var source_idx_40419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39390_40418,(0),null);
var vec__39393_40420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39390_40418,(1),null);
var __40421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39393_40420,(0),null);
var lines_40422__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39393_40420,(1),null);
var seq__39396_40423 = cljs.core.seq(lines_40422__$1);
var chunk__39397_40424 = null;
var count__39398_40425 = (0);
var i__39399_40426 = (0);
while(true){
if((i__39399_40426 < count__39398_40425)){
var vec__39475_40431 = chunk__39397_40424.cljs$core$IIndexed$_nth$arity$2(null,i__39399_40426);
var line_40432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39475_40431,(0),null);
var cols_40433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39475_40431,(1),null);
var seq__39484_40434 = cljs.core.seq(cols_40433);
var chunk__39485_40435 = null;
var count__39486_40436 = (0);
var i__39487_40437 = (0);
while(true){
if((i__39487_40437 < count__39486_40436)){
var vec__39514_40438 = chunk__39485_40435.cljs$core$IIndexed$_nth$arity$2(null,i__39487_40437);
var col_40439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39514_40438,(0),null);
var infos_40440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39514_40438,(1),null);
encode_cols(infos_40440,source_idx_40419,line_40432,col_40439);


var G__40441 = seq__39484_40434;
var G__40442 = chunk__39485_40435;
var G__40443 = count__39486_40436;
var G__40444 = (i__39487_40437 + (1));
seq__39484_40434 = G__40441;
chunk__39485_40435 = G__40442;
count__39486_40436 = G__40443;
i__39487_40437 = G__40444;
continue;
} else {
var temp__5735__auto___40445__$1 = cljs.core.seq(seq__39484_40434);
if(temp__5735__auto___40445__$1){
var seq__39484_40446__$1 = temp__5735__auto___40445__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39484_40446__$1)){
var c__4556__auto___40447 = cljs.core.chunk_first(seq__39484_40446__$1);
var G__40448 = cljs.core.chunk_rest(seq__39484_40446__$1);
var G__40449 = c__4556__auto___40447;
var G__40450 = cljs.core.count(c__4556__auto___40447);
var G__40451 = (0);
seq__39484_40434 = G__40448;
chunk__39485_40435 = G__40449;
count__39486_40436 = G__40450;
i__39487_40437 = G__40451;
continue;
} else {
var vec__39517_40452 = cljs.core.first(seq__39484_40446__$1);
var col_40453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39517_40452,(0),null);
var infos_40454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39517_40452,(1),null);
encode_cols(infos_40454,source_idx_40419,line_40432,col_40453);


var G__40455 = cljs.core.next(seq__39484_40446__$1);
var G__40456 = null;
var G__40457 = (0);
var G__40458 = (0);
seq__39484_40434 = G__40455;
chunk__39485_40435 = G__40456;
count__39486_40436 = G__40457;
i__39487_40437 = G__40458;
continue;
}
} else {
}
}
break;
}


var G__40459 = seq__39396_40423;
var G__40460 = chunk__39397_40424;
var G__40461 = count__39398_40425;
var G__40462 = (i__39399_40426 + (1));
seq__39396_40423 = G__40459;
chunk__39397_40424 = G__40460;
count__39398_40425 = G__40461;
i__39399_40426 = G__40462;
continue;
} else {
var temp__5735__auto___40463__$1 = cljs.core.seq(seq__39396_40423);
if(temp__5735__auto___40463__$1){
var seq__39396_40464__$1 = temp__5735__auto___40463__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39396_40464__$1)){
var c__4556__auto___40465 = cljs.core.chunk_first(seq__39396_40464__$1);
var G__40466 = cljs.core.chunk_rest(seq__39396_40464__$1);
var G__40467 = c__4556__auto___40465;
var G__40468 = cljs.core.count(c__4556__auto___40465);
var G__40469 = (0);
seq__39396_40423 = G__40466;
chunk__39397_40424 = G__40467;
count__39398_40425 = G__40468;
i__39399_40426 = G__40469;
continue;
} else {
var vec__39532_40470 = cljs.core.first(seq__39396_40464__$1);
var line_40471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39532_40470,(0),null);
var cols_40472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39532_40470,(1),null);
var seq__39535_40473 = cljs.core.seq(cols_40472);
var chunk__39536_40474 = null;
var count__39537_40475 = (0);
var i__39538_40476 = (0);
while(true){
if((i__39538_40476 < count__39537_40475)){
var vec__39547_40477 = chunk__39536_40474.cljs$core$IIndexed$_nth$arity$2(null,i__39538_40476);
var col_40478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39547_40477,(0),null);
var infos_40479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39547_40477,(1),null);
encode_cols(infos_40479,source_idx_40419,line_40471,col_40478);


var G__40480 = seq__39535_40473;
var G__40481 = chunk__39536_40474;
var G__40482 = count__39537_40475;
var G__40483 = (i__39538_40476 + (1));
seq__39535_40473 = G__40480;
chunk__39536_40474 = G__40481;
count__39537_40475 = G__40482;
i__39538_40476 = G__40483;
continue;
} else {
var temp__5735__auto___40484__$2 = cljs.core.seq(seq__39535_40473);
if(temp__5735__auto___40484__$2){
var seq__39535_40485__$1 = temp__5735__auto___40484__$2;
if(cljs.core.chunked_seq_QMARK_(seq__39535_40485__$1)){
var c__4556__auto___40488 = cljs.core.chunk_first(seq__39535_40485__$1);
var G__40489 = cljs.core.chunk_rest(seq__39535_40485__$1);
var G__40490 = c__4556__auto___40488;
var G__40491 = cljs.core.count(c__4556__auto___40488);
var G__40492 = (0);
seq__39535_40473 = G__40489;
chunk__39536_40474 = G__40490;
count__39537_40475 = G__40491;
i__39538_40476 = G__40492;
continue;
} else {
var vec__39550_40493 = cljs.core.first(seq__39535_40485__$1);
var col_40494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39550_40493,(0),null);
var infos_40495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39550_40493,(1),null);
encode_cols(infos_40495,source_idx_40419,line_40471,col_40494);


var G__40498 = cljs.core.next(seq__39535_40485__$1);
var G__40499 = null;
var G__40500 = (0);
var G__40501 = (0);
seq__39535_40473 = G__40498;
chunk__39536_40474 = G__40499;
count__39537_40475 = G__40500;
i__39538_40476 = G__40501;
continue;
}
} else {
}
}
break;
}


var G__40502 = cljs.core.next(seq__39396_40464__$1);
var G__40503 = null;
var G__40504 = (0);
var G__40505 = (0);
seq__39396_40423 = G__40502;
chunk__39397_40424 = G__40503;
count__39398_40425 = G__40504;
i__39399_40426 = G__40505;
continue;
}
} else {
}
}
break;
}


var G__40506 = cljs.core.next(seq__38987_40412__$1);
var G__40507 = null;
var G__40508 = (0);
var G__40509 = (0);
seq__38987_40308 = G__40506;
chunk__38988_40309 = G__40507;
count__38989_40311 = G__40508;
i__38990_40312 = G__40509;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__39553 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__38954_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38954_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__38955_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__38955_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38956_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__38956_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__39562 = G__39553;
goog.object.set(G__39562,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__39562;
} else {
return G__39553;
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
var vec__39566 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39566,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39566,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__39569 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39569,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39569,(1),null);
var G__40514 = cljs.core.next(col_map_seq);
var G__40515 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__39569,col,infos,vec__39566,line,col_map){
return (function (v,p__39572){
var map__39573 = p__39572;
var map__39573__$1 = (((((!((map__39573 == null))))?(((((map__39573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39573):map__39573);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39573__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39573__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__39569,col,infos,vec__39566,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__40514;
new_cols = G__40515;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__40520 = cljs.core.next(line_map_seq);
var G__40521 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__40520;
new_lines = G__40521;
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
var seq__39579_40523 = cljs.core.seq(reverse_map);
var chunk__39580_40524 = null;
var count__39581_40525 = (0);
var i__39582_40526 = (0);
while(true){
if((i__39582_40526 < count__39581_40525)){
var vec__39911_40529 = chunk__39580_40524.cljs$core$IIndexed$_nth$arity$2(null,i__39582_40526);
var line_40530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39911_40529,(0),null);
var columns_40531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39911_40529,(1),null);
var seq__39914_40532 = cljs.core.seq(columns_40531);
var chunk__39915_40533 = null;
var count__39916_40534 = (0);
var i__39917_40535 = (0);
while(true){
if((i__39917_40535 < count__39916_40534)){
var vec__39998_40536 = chunk__39915_40533.cljs$core$IIndexed$_nth$arity$2(null,i__39917_40535);
var column_40537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39998_40536,(0),null);
var column_info_40538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39998_40536,(1),null);
var seq__40001_40540 = cljs.core.seq(column_info_40538);
var chunk__40002_40541 = null;
var count__40003_40542 = (0);
var i__40004_40543 = (0);
while(true){
if((i__40004_40543 < count__40003_40542)){
var map__40011_40545 = chunk__40002_40541.cljs$core$IIndexed$_nth$arity$2(null,i__40004_40543);
var map__40011_40547__$1 = (((((!((map__40011_40545 == null))))?(((((map__40011_40545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40011_40545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40011_40545):map__40011_40545);
var gline_40548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40011_40547__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40011_40547__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40550 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40011_40547__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40548], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__40001_40540,chunk__40002_40541,count__40003_40542,i__40004_40543,seq__39914_40532,chunk__39915_40533,count__39916_40534,i__39917_40535,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40011_40545,map__40011_40547__$1,gline_40548,gcol_40549,name_40550,vec__39998_40536,column_40537,column_info_40538,vec__39911_40529,line_40530,columns_40531,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40549], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40530,new cljs.core.Keyword(null,"col","col",-1959363084),column_40537,new cljs.core.Keyword(null,"name","name",1843675177),name_40550], null));
});})(seq__40001_40540,chunk__40002_40541,count__40003_40542,i__40004_40543,seq__39914_40532,chunk__39915_40533,count__39916_40534,i__39917_40535,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40011_40545,map__40011_40547__$1,gline_40548,gcol_40549,name_40550,vec__39998_40536,column_40537,column_info_40538,vec__39911_40529,line_40530,columns_40531,inverted))
,cljs.core.sorted_map()));


var G__40556 = seq__40001_40540;
var G__40557 = chunk__40002_40541;
var G__40558 = count__40003_40542;
var G__40559 = (i__40004_40543 + (1));
seq__40001_40540 = G__40556;
chunk__40002_40541 = G__40557;
count__40003_40542 = G__40558;
i__40004_40543 = G__40559;
continue;
} else {
var temp__5735__auto___40561 = cljs.core.seq(seq__40001_40540);
if(temp__5735__auto___40561){
var seq__40001_40563__$1 = temp__5735__auto___40561;
if(cljs.core.chunked_seq_QMARK_(seq__40001_40563__$1)){
var c__4556__auto___40564 = cljs.core.chunk_first(seq__40001_40563__$1);
var G__40565 = cljs.core.chunk_rest(seq__40001_40563__$1);
var G__40566 = c__4556__auto___40564;
var G__40567 = cljs.core.count(c__4556__auto___40564);
var G__40568 = (0);
seq__40001_40540 = G__40565;
chunk__40002_40541 = G__40566;
count__40003_40542 = G__40567;
i__40004_40543 = G__40568;
continue;
} else {
var map__40018_40569 = cljs.core.first(seq__40001_40563__$1);
var map__40018_40570__$1 = (((((!((map__40018_40569 == null))))?(((((map__40018_40569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40018_40569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40018_40569):map__40018_40569);
var gline_40571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40018_40570__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40018_40570__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40018_40570__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40571], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__40001_40540,chunk__40002_40541,count__40003_40542,i__40004_40543,seq__39914_40532,chunk__39915_40533,count__39916_40534,i__39917_40535,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40018_40569,map__40018_40570__$1,gline_40571,gcol_40572,name_40573,seq__40001_40563__$1,temp__5735__auto___40561,vec__39998_40536,column_40537,column_info_40538,vec__39911_40529,line_40530,columns_40531,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40572], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40530,new cljs.core.Keyword(null,"col","col",-1959363084),column_40537,new cljs.core.Keyword(null,"name","name",1843675177),name_40573], null));
});})(seq__40001_40540,chunk__40002_40541,count__40003_40542,i__40004_40543,seq__39914_40532,chunk__39915_40533,count__39916_40534,i__39917_40535,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40018_40569,map__40018_40570__$1,gline_40571,gcol_40572,name_40573,seq__40001_40563__$1,temp__5735__auto___40561,vec__39998_40536,column_40537,column_info_40538,vec__39911_40529,line_40530,columns_40531,inverted))
,cljs.core.sorted_map()));


var G__40582 = cljs.core.next(seq__40001_40563__$1);
var G__40583 = null;
var G__40584 = (0);
var G__40585 = (0);
seq__40001_40540 = G__40582;
chunk__40002_40541 = G__40583;
count__40003_40542 = G__40584;
i__40004_40543 = G__40585;
continue;
}
} else {
}
}
break;
}


var G__40586 = seq__39914_40532;
var G__40587 = chunk__39915_40533;
var G__40588 = count__39916_40534;
var G__40589 = (i__39917_40535 + (1));
seq__39914_40532 = G__40586;
chunk__39915_40533 = G__40587;
count__39916_40534 = G__40588;
i__39917_40535 = G__40589;
continue;
} else {
var temp__5735__auto___40590 = cljs.core.seq(seq__39914_40532);
if(temp__5735__auto___40590){
var seq__39914_40591__$1 = temp__5735__auto___40590;
if(cljs.core.chunked_seq_QMARK_(seq__39914_40591__$1)){
var c__4556__auto___40592 = cljs.core.chunk_first(seq__39914_40591__$1);
var G__40593 = cljs.core.chunk_rest(seq__39914_40591__$1);
var G__40594 = c__4556__auto___40592;
var G__40595 = cljs.core.count(c__4556__auto___40592);
var G__40596 = (0);
seq__39914_40532 = G__40593;
chunk__39915_40533 = G__40594;
count__39916_40534 = G__40595;
i__39917_40535 = G__40596;
continue;
} else {
var vec__40025_40597 = cljs.core.first(seq__39914_40591__$1);
var column_40598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40025_40597,(0),null);
var column_info_40599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40025_40597,(1),null);
var seq__40028_40600 = cljs.core.seq(column_info_40599);
var chunk__40029_40601 = null;
var count__40030_40602 = (0);
var i__40031_40603 = (0);
while(true){
if((i__40031_40603 < count__40030_40602)){
var map__40044_40604 = chunk__40029_40601.cljs$core$IIndexed$_nth$arity$2(null,i__40031_40603);
var map__40044_40605__$1 = (((((!((map__40044_40604 == null))))?(((((map__40044_40604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40044_40604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40044_40604):map__40044_40604);
var gline_40606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40044_40605__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40044_40605__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40044_40605__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40606], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__40028_40600,chunk__40029_40601,count__40030_40602,i__40031_40603,seq__39914_40532,chunk__39915_40533,count__39916_40534,i__39917_40535,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40044_40604,map__40044_40605__$1,gline_40606,gcol_40607,name_40608,vec__40025_40597,column_40598,column_info_40599,seq__39914_40591__$1,temp__5735__auto___40590,vec__39911_40529,line_40530,columns_40531,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40607], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40530,new cljs.core.Keyword(null,"col","col",-1959363084),column_40598,new cljs.core.Keyword(null,"name","name",1843675177),name_40608], null));
});})(seq__40028_40600,chunk__40029_40601,count__40030_40602,i__40031_40603,seq__39914_40532,chunk__39915_40533,count__39916_40534,i__39917_40535,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40044_40604,map__40044_40605__$1,gline_40606,gcol_40607,name_40608,vec__40025_40597,column_40598,column_info_40599,seq__39914_40591__$1,temp__5735__auto___40590,vec__39911_40529,line_40530,columns_40531,inverted))
,cljs.core.sorted_map()));


var G__40609 = seq__40028_40600;
var G__40610 = chunk__40029_40601;
var G__40611 = count__40030_40602;
var G__40612 = (i__40031_40603 + (1));
seq__40028_40600 = G__40609;
chunk__40029_40601 = G__40610;
count__40030_40602 = G__40611;
i__40031_40603 = G__40612;
continue;
} else {
var temp__5735__auto___40613__$1 = cljs.core.seq(seq__40028_40600);
if(temp__5735__auto___40613__$1){
var seq__40028_40614__$1 = temp__5735__auto___40613__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40028_40614__$1)){
var c__4556__auto___40615 = cljs.core.chunk_first(seq__40028_40614__$1);
var G__40616 = cljs.core.chunk_rest(seq__40028_40614__$1);
var G__40617 = c__4556__auto___40615;
var G__40618 = cljs.core.count(c__4556__auto___40615);
var G__40619 = (0);
seq__40028_40600 = G__40616;
chunk__40029_40601 = G__40617;
count__40030_40602 = G__40618;
i__40031_40603 = G__40619;
continue;
} else {
var map__40049_40620 = cljs.core.first(seq__40028_40614__$1);
var map__40049_40621__$1 = (((((!((map__40049_40620 == null))))?(((((map__40049_40620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40049_40620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40049_40620):map__40049_40620);
var gline_40622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40049_40621__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40049_40621__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40049_40621__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40622], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__40028_40600,chunk__40029_40601,count__40030_40602,i__40031_40603,seq__39914_40532,chunk__39915_40533,count__39916_40534,i__39917_40535,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40049_40620,map__40049_40621__$1,gline_40622,gcol_40623,name_40624,seq__40028_40614__$1,temp__5735__auto___40613__$1,vec__40025_40597,column_40598,column_info_40599,seq__39914_40591__$1,temp__5735__auto___40590,vec__39911_40529,line_40530,columns_40531,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40623], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40530,new cljs.core.Keyword(null,"col","col",-1959363084),column_40598,new cljs.core.Keyword(null,"name","name",1843675177),name_40624], null));
});})(seq__40028_40600,chunk__40029_40601,count__40030_40602,i__40031_40603,seq__39914_40532,chunk__39915_40533,count__39916_40534,i__39917_40535,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40049_40620,map__40049_40621__$1,gline_40622,gcol_40623,name_40624,seq__40028_40614__$1,temp__5735__auto___40613__$1,vec__40025_40597,column_40598,column_info_40599,seq__39914_40591__$1,temp__5735__auto___40590,vec__39911_40529,line_40530,columns_40531,inverted))
,cljs.core.sorted_map()));


var G__40625 = cljs.core.next(seq__40028_40614__$1);
var G__40626 = null;
var G__40627 = (0);
var G__40628 = (0);
seq__40028_40600 = G__40625;
chunk__40029_40601 = G__40626;
count__40030_40602 = G__40627;
i__40031_40603 = G__40628;
continue;
}
} else {
}
}
break;
}


var G__40629 = cljs.core.next(seq__39914_40591__$1);
var G__40630 = null;
var G__40631 = (0);
var G__40632 = (0);
seq__39914_40532 = G__40629;
chunk__39915_40533 = G__40630;
count__39916_40534 = G__40631;
i__39917_40535 = G__40632;
continue;
}
} else {
}
}
break;
}


var G__40633 = seq__39579_40523;
var G__40634 = chunk__39580_40524;
var G__40635 = count__39581_40525;
var G__40636 = (i__39582_40526 + (1));
seq__39579_40523 = G__40633;
chunk__39580_40524 = G__40634;
count__39581_40525 = G__40635;
i__39582_40526 = G__40636;
continue;
} else {
var temp__5735__auto___40639 = cljs.core.seq(seq__39579_40523);
if(temp__5735__auto___40639){
var seq__39579_40640__$1 = temp__5735__auto___40639;
if(cljs.core.chunked_seq_QMARK_(seq__39579_40640__$1)){
var c__4556__auto___40641 = cljs.core.chunk_first(seq__39579_40640__$1);
var G__40642 = cljs.core.chunk_rest(seq__39579_40640__$1);
var G__40643 = c__4556__auto___40641;
var G__40644 = cljs.core.count(c__4556__auto___40641);
var G__40645 = (0);
seq__39579_40523 = G__40642;
chunk__39580_40524 = G__40643;
count__39581_40525 = G__40644;
i__39582_40526 = G__40645;
continue;
} else {
var vec__40057_40646 = cljs.core.first(seq__39579_40640__$1);
var line_40647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40057_40646,(0),null);
var columns_40648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40057_40646,(1),null);
var seq__40062_40649 = cljs.core.seq(columns_40648);
var chunk__40063_40650 = null;
var count__40064_40651 = (0);
var i__40065_40652 = (0);
while(true){
if((i__40065_40652 < count__40064_40651)){
var vec__40141_40653 = chunk__40063_40650.cljs$core$IIndexed$_nth$arity$2(null,i__40065_40652);
var column_40654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40141_40653,(0),null);
var column_info_40655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40141_40653,(1),null);
var seq__40144_40656 = cljs.core.seq(column_info_40655);
var chunk__40145_40657 = null;
var count__40146_40658 = (0);
var i__40147_40659 = (0);
while(true){
if((i__40147_40659 < count__40146_40658)){
var map__40155_40660 = chunk__40145_40657.cljs$core$IIndexed$_nth$arity$2(null,i__40147_40659);
var map__40155_40661__$1 = (((((!((map__40155_40660 == null))))?(((((map__40155_40660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40155_40660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40155_40660):map__40155_40660);
var gline_40662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155_40661__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155_40661__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40155_40661__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40662], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__40144_40656,chunk__40145_40657,count__40146_40658,i__40147_40659,seq__40062_40649,chunk__40063_40650,count__40064_40651,i__40065_40652,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40155_40660,map__40155_40661__$1,gline_40662,gcol_40663,name_40664,vec__40141_40653,column_40654,column_info_40655,vec__40057_40646,line_40647,columns_40648,seq__39579_40640__$1,temp__5735__auto___40639,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40663], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40647,new cljs.core.Keyword(null,"col","col",-1959363084),column_40654,new cljs.core.Keyword(null,"name","name",1843675177),name_40664], null));
});})(seq__40144_40656,chunk__40145_40657,count__40146_40658,i__40147_40659,seq__40062_40649,chunk__40063_40650,count__40064_40651,i__40065_40652,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40155_40660,map__40155_40661__$1,gline_40662,gcol_40663,name_40664,vec__40141_40653,column_40654,column_info_40655,vec__40057_40646,line_40647,columns_40648,seq__39579_40640__$1,temp__5735__auto___40639,inverted))
,cljs.core.sorted_map()));


var G__40667 = seq__40144_40656;
var G__40668 = chunk__40145_40657;
var G__40669 = count__40146_40658;
var G__40670 = (i__40147_40659 + (1));
seq__40144_40656 = G__40667;
chunk__40145_40657 = G__40668;
count__40146_40658 = G__40669;
i__40147_40659 = G__40670;
continue;
} else {
var temp__5735__auto___40671__$1 = cljs.core.seq(seq__40144_40656);
if(temp__5735__auto___40671__$1){
var seq__40144_40672__$1 = temp__5735__auto___40671__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40144_40672__$1)){
var c__4556__auto___40673 = cljs.core.chunk_first(seq__40144_40672__$1);
var G__40674 = cljs.core.chunk_rest(seq__40144_40672__$1);
var G__40675 = c__4556__auto___40673;
var G__40676 = cljs.core.count(c__4556__auto___40673);
var G__40677 = (0);
seq__40144_40656 = G__40674;
chunk__40145_40657 = G__40675;
count__40146_40658 = G__40676;
i__40147_40659 = G__40677;
continue;
} else {
var map__40157_40678 = cljs.core.first(seq__40144_40672__$1);
var map__40157_40679__$1 = (((((!((map__40157_40678 == null))))?(((((map__40157_40678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40157_40678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40157_40678):map__40157_40678);
var gline_40681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157_40679__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157_40679__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40157_40679__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40681], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__40144_40656,chunk__40145_40657,count__40146_40658,i__40147_40659,seq__40062_40649,chunk__40063_40650,count__40064_40651,i__40065_40652,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40157_40678,map__40157_40679__$1,gline_40681,gcol_40682,name_40683,seq__40144_40672__$1,temp__5735__auto___40671__$1,vec__40141_40653,column_40654,column_info_40655,vec__40057_40646,line_40647,columns_40648,seq__39579_40640__$1,temp__5735__auto___40639,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40682], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40647,new cljs.core.Keyword(null,"col","col",-1959363084),column_40654,new cljs.core.Keyword(null,"name","name",1843675177),name_40683], null));
});})(seq__40144_40656,chunk__40145_40657,count__40146_40658,i__40147_40659,seq__40062_40649,chunk__40063_40650,count__40064_40651,i__40065_40652,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40157_40678,map__40157_40679__$1,gline_40681,gcol_40682,name_40683,seq__40144_40672__$1,temp__5735__auto___40671__$1,vec__40141_40653,column_40654,column_info_40655,vec__40057_40646,line_40647,columns_40648,seq__39579_40640__$1,temp__5735__auto___40639,inverted))
,cljs.core.sorted_map()));


var G__40684 = cljs.core.next(seq__40144_40672__$1);
var G__40685 = null;
var G__40686 = (0);
var G__40687 = (0);
seq__40144_40656 = G__40684;
chunk__40145_40657 = G__40685;
count__40146_40658 = G__40686;
i__40147_40659 = G__40687;
continue;
}
} else {
}
}
break;
}


var G__40688 = seq__40062_40649;
var G__40689 = chunk__40063_40650;
var G__40690 = count__40064_40651;
var G__40691 = (i__40065_40652 + (1));
seq__40062_40649 = G__40688;
chunk__40063_40650 = G__40689;
count__40064_40651 = G__40690;
i__40065_40652 = G__40691;
continue;
} else {
var temp__5735__auto___40692__$1 = cljs.core.seq(seq__40062_40649);
if(temp__5735__auto___40692__$1){
var seq__40062_40693__$1 = temp__5735__auto___40692__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40062_40693__$1)){
var c__4556__auto___40694 = cljs.core.chunk_first(seq__40062_40693__$1);
var G__40695 = cljs.core.chunk_rest(seq__40062_40693__$1);
var G__40696 = c__4556__auto___40694;
var G__40697 = cljs.core.count(c__4556__auto___40694);
var G__40698 = (0);
seq__40062_40649 = G__40695;
chunk__40063_40650 = G__40696;
count__40064_40651 = G__40697;
i__40065_40652 = G__40698;
continue;
} else {
var vec__40164_40699 = cljs.core.first(seq__40062_40693__$1);
var column_40700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164_40699,(0),null);
var column_info_40701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164_40699,(1),null);
var seq__40167_40702 = cljs.core.seq(column_info_40701);
var chunk__40168_40704 = null;
var count__40169_40705 = (0);
var i__40170_40706 = (0);
while(true){
if((i__40170_40706 < count__40169_40705)){
var map__40194_40707 = chunk__40168_40704.cljs$core$IIndexed$_nth$arity$2(null,i__40170_40706);
var map__40194_40708__$1 = (((((!((map__40194_40707 == null))))?(((((map__40194_40707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40194_40707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40194_40707):map__40194_40707);
var gline_40709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40194_40708__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40194_40708__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40194_40708__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40709], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__40167_40702,chunk__40168_40704,count__40169_40705,i__40170_40706,seq__40062_40649,chunk__40063_40650,count__40064_40651,i__40065_40652,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40194_40707,map__40194_40708__$1,gline_40709,gcol_40710,name_40711,vec__40164_40699,column_40700,column_info_40701,seq__40062_40693__$1,temp__5735__auto___40692__$1,vec__40057_40646,line_40647,columns_40648,seq__39579_40640__$1,temp__5735__auto___40639,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40710], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40647,new cljs.core.Keyword(null,"col","col",-1959363084),column_40700,new cljs.core.Keyword(null,"name","name",1843675177),name_40711], null));
});})(seq__40167_40702,chunk__40168_40704,count__40169_40705,i__40170_40706,seq__40062_40649,chunk__40063_40650,count__40064_40651,i__40065_40652,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40194_40707,map__40194_40708__$1,gline_40709,gcol_40710,name_40711,vec__40164_40699,column_40700,column_info_40701,seq__40062_40693__$1,temp__5735__auto___40692__$1,vec__40057_40646,line_40647,columns_40648,seq__39579_40640__$1,temp__5735__auto___40639,inverted))
,cljs.core.sorted_map()));


var G__40713 = seq__40167_40702;
var G__40714 = chunk__40168_40704;
var G__40715 = count__40169_40705;
var G__40716 = (i__40170_40706 + (1));
seq__40167_40702 = G__40713;
chunk__40168_40704 = G__40714;
count__40169_40705 = G__40715;
i__40170_40706 = G__40716;
continue;
} else {
var temp__5735__auto___40717__$2 = cljs.core.seq(seq__40167_40702);
if(temp__5735__auto___40717__$2){
var seq__40167_40718__$1 = temp__5735__auto___40717__$2;
if(cljs.core.chunked_seq_QMARK_(seq__40167_40718__$1)){
var c__4556__auto___40719 = cljs.core.chunk_first(seq__40167_40718__$1);
var G__40720 = cljs.core.chunk_rest(seq__40167_40718__$1);
var G__40721 = c__4556__auto___40719;
var G__40722 = cljs.core.count(c__4556__auto___40719);
var G__40723 = (0);
seq__40167_40702 = G__40720;
chunk__40168_40704 = G__40721;
count__40169_40705 = G__40722;
i__40170_40706 = G__40723;
continue;
} else {
var map__40202_40724 = cljs.core.first(seq__40167_40718__$1);
var map__40202_40725__$1 = (((((!((map__40202_40724 == null))))?(((((map__40202_40724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40202_40724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40202_40724):map__40202_40724);
var gline_40726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40202_40725__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_40727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40202_40725__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_40728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40202_40725__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_40726], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__40167_40702,chunk__40168_40704,count__40169_40705,i__40170_40706,seq__40062_40649,chunk__40063_40650,count__40064_40651,i__40065_40652,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40202_40724,map__40202_40725__$1,gline_40726,gcol_40727,name_40728,seq__40167_40718__$1,temp__5735__auto___40717__$2,vec__40164_40699,column_40700,column_info_40701,seq__40062_40693__$1,temp__5735__auto___40692__$1,vec__40057_40646,line_40647,columns_40648,seq__39579_40640__$1,temp__5735__auto___40639,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_40727], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_40647,new cljs.core.Keyword(null,"col","col",-1959363084),column_40700,new cljs.core.Keyword(null,"name","name",1843675177),name_40728], null));
});})(seq__40167_40702,chunk__40168_40704,count__40169_40705,i__40170_40706,seq__40062_40649,chunk__40063_40650,count__40064_40651,i__40065_40652,seq__39579_40523,chunk__39580_40524,count__39581_40525,i__39582_40526,map__40202_40724,map__40202_40725__$1,gline_40726,gcol_40727,name_40728,seq__40167_40718__$1,temp__5735__auto___40717__$2,vec__40164_40699,column_40700,column_info_40701,seq__40062_40693__$1,temp__5735__auto___40692__$1,vec__40057_40646,line_40647,columns_40648,seq__39579_40640__$1,temp__5735__auto___40639,inverted))
,cljs.core.sorted_map()));


var G__40729 = cljs.core.next(seq__40167_40718__$1);
var G__40730 = null;
var G__40731 = (0);
var G__40732 = (0);
seq__40167_40702 = G__40729;
chunk__40168_40704 = G__40730;
count__40169_40705 = G__40731;
i__40170_40706 = G__40732;
continue;
}
} else {
}
}
break;
}


var G__40735 = cljs.core.next(seq__40062_40693__$1);
var G__40736 = null;
var G__40737 = (0);
var G__40738 = (0);
seq__40062_40649 = G__40735;
chunk__40063_40650 = G__40736;
count__40064_40651 = G__40737;
i__40065_40652 = G__40738;
continue;
}
} else {
}
}
break;
}


var G__40739 = cljs.core.next(seq__39579_40640__$1);
var G__40740 = null;
var G__40741 = (0);
var G__40742 = (0);
seq__39579_40523 = G__40739;
chunk__39580_40524 = G__40740;
count__39581_40525 = G__40741;
i__39582_40526 = G__40742;
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
