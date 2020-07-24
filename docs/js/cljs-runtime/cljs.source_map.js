goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__48517){
var vec__48523 = p__48517;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48523,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48523,(1),null);
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
var vec__48536 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48536,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48536,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48536,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48536,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48536,(4),null);
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
var vec__48552 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48552,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48552,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48552,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48552,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48552,(4),null);
var vec__48555 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48555,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48555,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48555,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48555,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48555,(4),null);
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
var map__48570 = segmap;
var map__48570__$1 = (((((!((map__48570 == null))))?(((((map__48570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48570):map__48570);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48570__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48570__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48570__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48570__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48570__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__48592 = arguments.length;
switch (G__48592) {
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
var vec__48648 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__50163 = cljs.core.next(segs__$1);
var G__50164 = nrelseg;
var G__50165 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__50163;
relseg__$1 = G__50164;
result__$1 = G__50165;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48648,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48648,(1),null);
var G__50168 = (gline + (1));
var G__50169 = cljs.core.next(lines__$1);
var G__50170 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__50171 = result__$1;
gline = G__50168;
lines__$1 = G__50169;
relseg = G__50170;
result = G__50171;
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
var map__48663 = segmap;
var map__48663__$1 = (((((!((map__48663 == null))))?(((((map__48663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48663):map__48663);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48663__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48663__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48663__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48663__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48663__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__48659_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__48659_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__48681 = arguments.length;
switch (G__48681) {
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
var vec__48701 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__50181 = cljs.core.next(segs__$1);
var G__50182 = nrelseg;
var G__50183 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__50181;
relseg__$1 = G__50182;
result__$1 = G__50183;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48701,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48701,(1),null);
var G__50187 = (gline + (1));
var G__50188 = cljs.core.next(lines__$1);
var G__50189 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__50190 = result__$1;
gline = G__50187;
lines__$1 = G__50188;
relseg = G__50189;
result = G__50190;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__48713){
var vec__48714 = p__48713;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48714,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48714,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48714,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48714,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48714,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__48742){
var vec__48745 = p__48742;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48745,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48745,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48745,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48745,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48745,(4),null);
var seg = vec__48745;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__48751){
var vec__48752 = p__48751;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48752,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48752,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48752,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48752,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48752,(4),null);
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
var seq__48769 = cljs.core.seq(infos);
var chunk__48770 = null;
var count__48771 = (0);
var i__48772 = (0);
while(true){
if((i__48772 < count__48771)){
var info = chunk__48770.cljs$core$IIndexed$_nth$arity$2(null,i__48772);
var segv_50192 = info__GT_segv(info,source_idx,line,col);
var gline_50193 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_50194 = cljs.core.count(cljs.core.deref(lines));
if((gline_50193 > (lc_50194 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__48769,chunk__48770,count__48771,i__48772,segv_50192,gline_50193,lc_50194,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_50193 - (lc_50194 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_50192], null));
});})(seq__48769,chunk__48770,count__48771,i__48772,segv_50192,gline_50193,lc_50194,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__48769,chunk__48770,count__48771,i__48772,segv_50192,gline_50193,lc_50194,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50193], null),cljs.core.conj,segv_50192);
});})(seq__48769,chunk__48770,count__48771,i__48772,segv_50192,gline_50193,lc_50194,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__50195 = seq__48769;
var G__50196 = chunk__48770;
var G__50197 = count__48771;
var G__50198 = (i__48772 + (1));
seq__48769 = G__50195;
chunk__48770 = G__50196;
count__48771 = G__50197;
i__48772 = G__50198;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48769);
if(temp__5735__auto__){
var seq__48769__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48769__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48769__$1);
var G__50199 = cljs.core.chunk_rest(seq__48769__$1);
var G__50200 = c__4556__auto__;
var G__50201 = cljs.core.count(c__4556__auto__);
var G__50202 = (0);
seq__48769 = G__50199;
chunk__48770 = G__50200;
count__48771 = G__50201;
i__48772 = G__50202;
continue;
} else {
var info = cljs.core.first(seq__48769__$1);
var segv_50203 = info__GT_segv(info,source_idx,line,col);
var gline_50204 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_50205 = cljs.core.count(cljs.core.deref(lines));
if((gline_50204 > (lc_50205 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__48769,chunk__48770,count__48771,i__48772,segv_50203,gline_50204,lc_50205,info,seq__48769__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_50204 - (lc_50205 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_50203], null));
});})(seq__48769,chunk__48770,count__48771,i__48772,segv_50203,gline_50204,lc_50205,info,seq__48769__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__48769,chunk__48770,count__48771,i__48772,segv_50203,gline_50204,lc_50205,info,seq__48769__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50204], null),cljs.core.conj,segv_50203);
});})(seq__48769,chunk__48770,count__48771,i__48772,segv_50203,gline_50204,lc_50205,info,seq__48769__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__50214 = cljs.core.next(seq__48769__$1);
var G__50215 = null;
var G__50216 = (0);
var G__50217 = (0);
seq__48769 = G__50214;
chunk__48770 = G__50215;
count__48771 = G__50216;
i__48772 = G__50217;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__48806_50218 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__48807_50219 = null;
var count__48808_50220 = (0);
var i__48809_50221 = (0);
while(true){
if((i__48809_50221 < count__48808_50220)){
var vec__49074_50222 = chunk__48807_50219.cljs$core$IIndexed$_nth$arity$2(null,i__48809_50221);
var source_idx_50223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49074_50222,(0),null);
var vec__49077_50224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49074_50222,(1),null);
var __50225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49077_50224,(0),null);
var lines_50226__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49077_50224,(1),null);
var seq__49080_50227 = cljs.core.seq(lines_50226__$1);
var chunk__49081_50228 = null;
var count__49082_50229 = (0);
var i__49083_50230 = (0);
while(true){
if((i__49083_50230 < count__49082_50229)){
var vec__49139_50231 = chunk__49081_50228.cljs$core$IIndexed$_nth$arity$2(null,i__49083_50230);
var line_50232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49139_50231,(0),null);
var cols_50233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49139_50231,(1),null);
var seq__49142_50234 = cljs.core.seq(cols_50233);
var chunk__49143_50235 = null;
var count__49144_50236 = (0);
var i__49145_50237 = (0);
while(true){
if((i__49145_50237 < count__49144_50236)){
var vec__49157_50238 = chunk__49143_50235.cljs$core$IIndexed$_nth$arity$2(null,i__49145_50237);
var col_50239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49157_50238,(0),null);
var infos_50240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49157_50238,(1),null);
encode_cols(infos_50240,source_idx_50223,line_50232,col_50239);


var G__50241 = seq__49142_50234;
var G__50242 = chunk__49143_50235;
var G__50243 = count__49144_50236;
var G__50244 = (i__49145_50237 + (1));
seq__49142_50234 = G__50241;
chunk__49143_50235 = G__50242;
count__49144_50236 = G__50243;
i__49145_50237 = G__50244;
continue;
} else {
var temp__5735__auto___50245 = cljs.core.seq(seq__49142_50234);
if(temp__5735__auto___50245){
var seq__49142_50247__$1 = temp__5735__auto___50245;
if(cljs.core.chunked_seq_QMARK_(seq__49142_50247__$1)){
var c__4556__auto___50248 = cljs.core.chunk_first(seq__49142_50247__$1);
var G__50252 = cljs.core.chunk_rest(seq__49142_50247__$1);
var G__50253 = c__4556__auto___50248;
var G__50254 = cljs.core.count(c__4556__auto___50248);
var G__50255 = (0);
seq__49142_50234 = G__50252;
chunk__49143_50235 = G__50253;
count__49144_50236 = G__50254;
i__49145_50237 = G__50255;
continue;
} else {
var vec__49160_50256 = cljs.core.first(seq__49142_50247__$1);
var col_50257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49160_50256,(0),null);
var infos_50258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49160_50256,(1),null);
encode_cols(infos_50258,source_idx_50223,line_50232,col_50257);


var G__50259 = cljs.core.next(seq__49142_50247__$1);
var G__50260 = null;
var G__50261 = (0);
var G__50262 = (0);
seq__49142_50234 = G__50259;
chunk__49143_50235 = G__50260;
count__49144_50236 = G__50261;
i__49145_50237 = G__50262;
continue;
}
} else {
}
}
break;
}


var G__50263 = seq__49080_50227;
var G__50264 = chunk__49081_50228;
var G__50265 = count__49082_50229;
var G__50266 = (i__49083_50230 + (1));
seq__49080_50227 = G__50263;
chunk__49081_50228 = G__50264;
count__49082_50229 = G__50265;
i__49083_50230 = G__50266;
continue;
} else {
var temp__5735__auto___50267 = cljs.core.seq(seq__49080_50227);
if(temp__5735__auto___50267){
var seq__49080_50268__$1 = temp__5735__auto___50267;
if(cljs.core.chunked_seq_QMARK_(seq__49080_50268__$1)){
var c__4556__auto___50272 = cljs.core.chunk_first(seq__49080_50268__$1);
var G__50273 = cljs.core.chunk_rest(seq__49080_50268__$1);
var G__50274 = c__4556__auto___50272;
var G__50275 = cljs.core.count(c__4556__auto___50272);
var G__50276 = (0);
seq__49080_50227 = G__50273;
chunk__49081_50228 = G__50274;
count__49082_50229 = G__50275;
i__49083_50230 = G__50276;
continue;
} else {
var vec__49163_50280 = cljs.core.first(seq__49080_50268__$1);
var line_50281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49163_50280,(0),null);
var cols_50282 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49163_50280,(1),null);
var seq__49166_50287 = cljs.core.seq(cols_50282);
var chunk__49167_50288 = null;
var count__49168_50289 = (0);
var i__49169_50290 = (0);
while(true){
if((i__49169_50290 < count__49168_50289)){
var vec__49181_50291 = chunk__49167_50288.cljs$core$IIndexed$_nth$arity$2(null,i__49169_50290);
var col_50292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49181_50291,(0),null);
var infos_50293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49181_50291,(1),null);
encode_cols(infos_50293,source_idx_50223,line_50281,col_50292);


var G__50294 = seq__49166_50287;
var G__50295 = chunk__49167_50288;
var G__50296 = count__49168_50289;
var G__50297 = (i__49169_50290 + (1));
seq__49166_50287 = G__50294;
chunk__49167_50288 = G__50295;
count__49168_50289 = G__50296;
i__49169_50290 = G__50297;
continue;
} else {
var temp__5735__auto___50298__$1 = cljs.core.seq(seq__49166_50287);
if(temp__5735__auto___50298__$1){
var seq__49166_50299__$1 = temp__5735__auto___50298__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49166_50299__$1)){
var c__4556__auto___50301 = cljs.core.chunk_first(seq__49166_50299__$1);
var G__50302 = cljs.core.chunk_rest(seq__49166_50299__$1);
var G__50303 = c__4556__auto___50301;
var G__50304 = cljs.core.count(c__4556__auto___50301);
var G__50305 = (0);
seq__49166_50287 = G__50302;
chunk__49167_50288 = G__50303;
count__49168_50289 = G__50304;
i__49169_50290 = G__50305;
continue;
} else {
var vec__49184_50309 = cljs.core.first(seq__49166_50299__$1);
var col_50310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49184_50309,(0),null);
var infos_50311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49184_50309,(1),null);
encode_cols(infos_50311,source_idx_50223,line_50281,col_50310);


var G__50312 = cljs.core.next(seq__49166_50299__$1);
var G__50313 = null;
var G__50314 = (0);
var G__50315 = (0);
seq__49166_50287 = G__50312;
chunk__49167_50288 = G__50313;
count__49168_50289 = G__50314;
i__49169_50290 = G__50315;
continue;
}
} else {
}
}
break;
}


var G__50316 = cljs.core.next(seq__49080_50268__$1);
var G__50317 = null;
var G__50318 = (0);
var G__50319 = (0);
seq__49080_50227 = G__50316;
chunk__49081_50228 = G__50317;
count__49082_50229 = G__50318;
i__49083_50230 = G__50319;
continue;
}
} else {
}
}
break;
}


var G__50320 = seq__48806_50218;
var G__50321 = chunk__48807_50219;
var G__50322 = count__48808_50220;
var G__50323 = (i__48809_50221 + (1));
seq__48806_50218 = G__50320;
chunk__48807_50219 = G__50321;
count__48808_50220 = G__50322;
i__48809_50221 = G__50323;
continue;
} else {
var temp__5735__auto___50324 = cljs.core.seq(seq__48806_50218);
if(temp__5735__auto___50324){
var seq__48806_50325__$1 = temp__5735__auto___50324;
if(cljs.core.chunked_seq_QMARK_(seq__48806_50325__$1)){
var c__4556__auto___50327 = cljs.core.chunk_first(seq__48806_50325__$1);
var G__50328 = cljs.core.chunk_rest(seq__48806_50325__$1);
var G__50329 = c__4556__auto___50327;
var G__50330 = cljs.core.count(c__4556__auto___50327);
var G__50331 = (0);
seq__48806_50218 = G__50328;
chunk__48807_50219 = G__50329;
count__48808_50220 = G__50330;
i__48809_50221 = G__50331;
continue;
} else {
var vec__49187_50335 = cljs.core.first(seq__48806_50325__$1);
var source_idx_50336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49187_50335,(0),null);
var vec__49190_50337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49187_50335,(1),null);
var __50338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49190_50337,(0),null);
var lines_50339__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49190_50337,(1),null);
var seq__49193_50340 = cljs.core.seq(lines_50339__$1);
var chunk__49194_50341 = null;
var count__49195_50342 = (0);
var i__49196_50343 = (0);
while(true){
if((i__49196_50343 < count__49195_50342)){
var vec__49268_50344 = chunk__49194_50341.cljs$core$IIndexed$_nth$arity$2(null,i__49196_50343);
var line_50345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49268_50344,(0),null);
var cols_50346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49268_50344,(1),null);
var seq__49271_50347 = cljs.core.seq(cols_50346);
var chunk__49272_50348 = null;
var count__49273_50349 = (0);
var i__49274_50350 = (0);
while(true){
if((i__49274_50350 < count__49273_50349)){
var vec__49281_50355 = chunk__49272_50348.cljs$core$IIndexed$_nth$arity$2(null,i__49274_50350);
var col_50356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49281_50355,(0),null);
var infos_50357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49281_50355,(1),null);
encode_cols(infos_50357,source_idx_50336,line_50345,col_50356);


var G__50361 = seq__49271_50347;
var G__50362 = chunk__49272_50348;
var G__50363 = count__49273_50349;
var G__50364 = (i__49274_50350 + (1));
seq__49271_50347 = G__50361;
chunk__49272_50348 = G__50362;
count__49273_50349 = G__50363;
i__49274_50350 = G__50364;
continue;
} else {
var temp__5735__auto___50366__$1 = cljs.core.seq(seq__49271_50347);
if(temp__5735__auto___50366__$1){
var seq__49271_50370__$1 = temp__5735__auto___50366__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49271_50370__$1)){
var c__4556__auto___50371 = cljs.core.chunk_first(seq__49271_50370__$1);
var G__50372 = cljs.core.chunk_rest(seq__49271_50370__$1);
var G__50373 = c__4556__auto___50371;
var G__50374 = cljs.core.count(c__4556__auto___50371);
var G__50375 = (0);
seq__49271_50347 = G__50372;
chunk__49272_50348 = G__50373;
count__49273_50349 = G__50374;
i__49274_50350 = G__50375;
continue;
} else {
var vec__49284_50376 = cljs.core.first(seq__49271_50370__$1);
var col_50377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49284_50376,(0),null);
var infos_50378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49284_50376,(1),null);
encode_cols(infos_50378,source_idx_50336,line_50345,col_50377);


var G__50379 = cljs.core.next(seq__49271_50370__$1);
var G__50380 = null;
var G__50381 = (0);
var G__50382 = (0);
seq__49271_50347 = G__50379;
chunk__49272_50348 = G__50380;
count__49273_50349 = G__50381;
i__49274_50350 = G__50382;
continue;
}
} else {
}
}
break;
}


var G__50386 = seq__49193_50340;
var G__50387 = chunk__49194_50341;
var G__50388 = count__49195_50342;
var G__50389 = (i__49196_50343 + (1));
seq__49193_50340 = G__50386;
chunk__49194_50341 = G__50387;
count__49195_50342 = G__50388;
i__49196_50343 = G__50389;
continue;
} else {
var temp__5735__auto___50390__$1 = cljs.core.seq(seq__49193_50340);
if(temp__5735__auto___50390__$1){
var seq__49193_50391__$1 = temp__5735__auto___50390__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49193_50391__$1)){
var c__4556__auto___50392 = cljs.core.chunk_first(seq__49193_50391__$1);
var G__50396 = cljs.core.chunk_rest(seq__49193_50391__$1);
var G__50397 = c__4556__auto___50392;
var G__50398 = cljs.core.count(c__4556__auto___50392);
var G__50399 = (0);
seq__49193_50340 = G__50396;
chunk__49194_50341 = G__50397;
count__49195_50342 = G__50398;
i__49196_50343 = G__50399;
continue;
} else {
var vec__49287_50400 = cljs.core.first(seq__49193_50391__$1);
var line_50401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49287_50400,(0),null);
var cols_50402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49287_50400,(1),null);
var seq__49290_50406 = cljs.core.seq(cols_50402);
var chunk__49291_50407 = null;
var count__49292_50408 = (0);
var i__49293_50409 = (0);
while(true){
if((i__49293_50409 < count__49292_50408)){
var vec__49318_50410 = chunk__49291_50407.cljs$core$IIndexed$_nth$arity$2(null,i__49293_50409);
var col_50411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49318_50410,(0),null);
var infos_50412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49318_50410,(1),null);
encode_cols(infos_50412,source_idx_50336,line_50401,col_50411);


var G__50413 = seq__49290_50406;
var G__50414 = chunk__49291_50407;
var G__50415 = count__49292_50408;
var G__50416 = (i__49293_50409 + (1));
seq__49290_50406 = G__50413;
chunk__49291_50407 = G__50414;
count__49292_50408 = G__50415;
i__49293_50409 = G__50416;
continue;
} else {
var temp__5735__auto___50420__$2 = cljs.core.seq(seq__49290_50406);
if(temp__5735__auto___50420__$2){
var seq__49290_50421__$1 = temp__5735__auto___50420__$2;
if(cljs.core.chunked_seq_QMARK_(seq__49290_50421__$1)){
var c__4556__auto___50422 = cljs.core.chunk_first(seq__49290_50421__$1);
var G__50423 = cljs.core.chunk_rest(seq__49290_50421__$1);
var G__50424 = c__4556__auto___50422;
var G__50425 = cljs.core.count(c__4556__auto___50422);
var G__50426 = (0);
seq__49290_50406 = G__50423;
chunk__49291_50407 = G__50424;
count__49292_50408 = G__50425;
i__49293_50409 = G__50426;
continue;
} else {
var vec__49327_50427 = cljs.core.first(seq__49290_50421__$1);
var col_50428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49327_50427,(0),null);
var infos_50429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49327_50427,(1),null);
encode_cols(infos_50429,source_idx_50336,line_50401,col_50428);


var G__50430 = cljs.core.next(seq__49290_50421__$1);
var G__50431 = null;
var G__50432 = (0);
var G__50433 = (0);
seq__49290_50406 = G__50430;
chunk__49291_50407 = G__50431;
count__49292_50408 = G__50432;
i__49293_50409 = G__50433;
continue;
}
} else {
}
}
break;
}


var G__50434 = cljs.core.next(seq__49193_50391__$1);
var G__50435 = null;
var G__50436 = (0);
var G__50437 = (0);
seq__49193_50340 = G__50434;
chunk__49194_50341 = G__50435;
count__49195_50342 = G__50436;
i__49196_50343 = G__50437;
continue;
}
} else {
}
}
break;
}


var G__50439 = cljs.core.next(seq__48806_50325__$1);
var G__50440 = null;
var G__50441 = (0);
var G__50442 = (0);
seq__48806_50218 = G__50439;
chunk__48807_50219 = G__50440;
count__48808_50220 = G__50441;
i__48809_50221 = G__50442;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__49330 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__48759_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48759_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__48760_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__48760_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48761_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__48761_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__49356 = G__49330;
goog.object.set(G__49356,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__49356;
} else {
return G__49330;
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
var vec__49360 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49360,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49360,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__49367 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49367,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49367,(1),null);
var G__50455 = cljs.core.next(col_map_seq);
var G__50456 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__49367,col,infos,vec__49360,line,col_map){
return (function (v,p__49372){
var map__49373 = p__49372;
var map__49373__$1 = (((((!((map__49373 == null))))?(((((map__49373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49373):map__49373);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49373__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49373__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__49367,col,infos,vec__49360,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__50455;
new_cols = G__50456;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__50460 = cljs.core.next(line_map_seq);
var G__50461 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__50460;
new_lines = G__50461;
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
var seq__49382_50462 = cljs.core.seq(reverse_map);
var chunk__49383_50463 = null;
var count__49384_50464 = (0);
var i__49385_50465 = (0);
while(true){
if((i__49385_50465 < count__49384_50464)){
var vec__49729_50466 = chunk__49383_50463.cljs$core$IIndexed$_nth$arity$2(null,i__49385_50465);
var line_50467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49729_50466,(0),null);
var columns_50468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49729_50466,(1),null);
var seq__49732_50472 = cljs.core.seq(columns_50468);
var chunk__49733_50473 = null;
var count__49734_50474 = (0);
var i__49735_50475 = (0);
while(true){
if((i__49735_50475 < count__49734_50474)){
var vec__49818_50476 = chunk__49733_50473.cljs$core$IIndexed$_nth$arity$2(null,i__49735_50475);
var column_50477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49818_50476,(0),null);
var column_info_50478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49818_50476,(1),null);
var seq__49821_50482 = cljs.core.seq(column_info_50478);
var chunk__49822_50483 = null;
var count__49823_50484 = (0);
var i__49824_50485 = (0);
while(true){
if((i__49824_50485 < count__49823_50484)){
var map__49867_50489 = chunk__49822_50483.cljs$core$IIndexed$_nth$arity$2(null,i__49824_50485);
var map__49867_50490__$1 = (((((!((map__49867_50489 == null))))?(((((map__49867_50489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49867_50489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49867_50489):map__49867_50489);
var gline_50491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867_50490__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50492 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867_50490__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50493 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49867_50490__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50491], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__49821_50482,chunk__49822_50483,count__49823_50484,i__49824_50485,seq__49732_50472,chunk__49733_50473,count__49734_50474,i__49735_50475,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__49867_50489,map__49867_50490__$1,gline_50491,gcol_50492,name_50493,vec__49818_50476,column_50477,column_info_50478,vec__49729_50466,line_50467,columns_50468,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50492], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50467,new cljs.core.Keyword(null,"col","col",-1959363084),column_50477,new cljs.core.Keyword(null,"name","name",1843675177),name_50493], null));
});})(seq__49821_50482,chunk__49822_50483,count__49823_50484,i__49824_50485,seq__49732_50472,chunk__49733_50473,count__49734_50474,i__49735_50475,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__49867_50489,map__49867_50490__$1,gline_50491,gcol_50492,name_50493,vec__49818_50476,column_50477,column_info_50478,vec__49729_50466,line_50467,columns_50468,inverted))
,cljs.core.sorted_map()));


var G__50497 = seq__49821_50482;
var G__50498 = chunk__49822_50483;
var G__50499 = count__49823_50484;
var G__50500 = (i__49824_50485 + (1));
seq__49821_50482 = G__50497;
chunk__49822_50483 = G__50498;
count__49823_50484 = G__50499;
i__49824_50485 = G__50500;
continue;
} else {
var temp__5735__auto___50501 = cljs.core.seq(seq__49821_50482);
if(temp__5735__auto___50501){
var seq__49821_50502__$1 = temp__5735__auto___50501;
if(cljs.core.chunked_seq_QMARK_(seq__49821_50502__$1)){
var c__4556__auto___50503 = cljs.core.chunk_first(seq__49821_50502__$1);
var G__50504 = cljs.core.chunk_rest(seq__49821_50502__$1);
var G__50505 = c__4556__auto___50503;
var G__50506 = cljs.core.count(c__4556__auto___50503);
var G__50507 = (0);
seq__49821_50482 = G__50504;
chunk__49822_50483 = G__50505;
count__49823_50484 = G__50506;
i__49824_50485 = G__50507;
continue;
} else {
var map__49881_50508 = cljs.core.first(seq__49821_50502__$1);
var map__49881_50509__$1 = (((((!((map__49881_50508 == null))))?(((((map__49881_50508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49881_50508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49881_50508):map__49881_50508);
var gline_50510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49881_50509__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49881_50509__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49881_50509__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50510], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__49821_50482,chunk__49822_50483,count__49823_50484,i__49824_50485,seq__49732_50472,chunk__49733_50473,count__49734_50474,i__49735_50475,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__49881_50508,map__49881_50509__$1,gline_50510,gcol_50511,name_50512,seq__49821_50502__$1,temp__5735__auto___50501,vec__49818_50476,column_50477,column_info_50478,vec__49729_50466,line_50467,columns_50468,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50511], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50467,new cljs.core.Keyword(null,"col","col",-1959363084),column_50477,new cljs.core.Keyword(null,"name","name",1843675177),name_50512], null));
});})(seq__49821_50482,chunk__49822_50483,count__49823_50484,i__49824_50485,seq__49732_50472,chunk__49733_50473,count__49734_50474,i__49735_50475,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__49881_50508,map__49881_50509__$1,gline_50510,gcol_50511,name_50512,seq__49821_50502__$1,temp__5735__auto___50501,vec__49818_50476,column_50477,column_info_50478,vec__49729_50466,line_50467,columns_50468,inverted))
,cljs.core.sorted_map()));


var G__50519 = cljs.core.next(seq__49821_50502__$1);
var G__50520 = null;
var G__50521 = (0);
var G__50522 = (0);
seq__49821_50482 = G__50519;
chunk__49822_50483 = G__50520;
count__49823_50484 = G__50521;
i__49824_50485 = G__50522;
continue;
}
} else {
}
}
break;
}


var G__50523 = seq__49732_50472;
var G__50524 = chunk__49733_50473;
var G__50525 = count__49734_50474;
var G__50526 = (i__49735_50475 + (1));
seq__49732_50472 = G__50523;
chunk__49733_50473 = G__50524;
count__49734_50474 = G__50525;
i__49735_50475 = G__50526;
continue;
} else {
var temp__5735__auto___50527 = cljs.core.seq(seq__49732_50472);
if(temp__5735__auto___50527){
var seq__49732_50528__$1 = temp__5735__auto___50527;
if(cljs.core.chunked_seq_QMARK_(seq__49732_50528__$1)){
var c__4556__auto___50529 = cljs.core.chunk_first(seq__49732_50528__$1);
var G__50530 = cljs.core.chunk_rest(seq__49732_50528__$1);
var G__50531 = c__4556__auto___50529;
var G__50532 = cljs.core.count(c__4556__auto___50529);
var G__50533 = (0);
seq__49732_50472 = G__50530;
chunk__49733_50473 = G__50531;
count__49734_50474 = G__50532;
i__49735_50475 = G__50533;
continue;
} else {
var vec__49895_50534 = cljs.core.first(seq__49732_50528__$1);
var column_50535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49895_50534,(0),null);
var column_info_50536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49895_50534,(1),null);
var seq__49900_50537 = cljs.core.seq(column_info_50536);
var chunk__49901_50538 = null;
var count__49902_50539 = (0);
var i__49903_50540 = (0);
while(true){
if((i__49903_50540 < count__49902_50539)){
var map__49923_50541 = chunk__49901_50538.cljs$core$IIndexed$_nth$arity$2(null,i__49903_50540);
var map__49923_50542__$1 = (((((!((map__49923_50541 == null))))?(((((map__49923_50541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49923_50541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49923_50541):map__49923_50541);
var gline_50543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49923_50542__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49923_50542__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50545 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49923_50542__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50543], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__49900_50537,chunk__49901_50538,count__49902_50539,i__49903_50540,seq__49732_50472,chunk__49733_50473,count__49734_50474,i__49735_50475,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__49923_50541,map__49923_50542__$1,gline_50543,gcol_50544,name_50545,vec__49895_50534,column_50535,column_info_50536,seq__49732_50528__$1,temp__5735__auto___50527,vec__49729_50466,line_50467,columns_50468,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50544], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50467,new cljs.core.Keyword(null,"col","col",-1959363084),column_50535,new cljs.core.Keyword(null,"name","name",1843675177),name_50545], null));
});})(seq__49900_50537,chunk__49901_50538,count__49902_50539,i__49903_50540,seq__49732_50472,chunk__49733_50473,count__49734_50474,i__49735_50475,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__49923_50541,map__49923_50542__$1,gline_50543,gcol_50544,name_50545,vec__49895_50534,column_50535,column_info_50536,seq__49732_50528__$1,temp__5735__auto___50527,vec__49729_50466,line_50467,columns_50468,inverted))
,cljs.core.sorted_map()));


var G__50547 = seq__49900_50537;
var G__50548 = chunk__49901_50538;
var G__50549 = count__49902_50539;
var G__50550 = (i__49903_50540 + (1));
seq__49900_50537 = G__50547;
chunk__49901_50538 = G__50548;
count__49902_50539 = G__50549;
i__49903_50540 = G__50550;
continue;
} else {
var temp__5735__auto___50552__$1 = cljs.core.seq(seq__49900_50537);
if(temp__5735__auto___50552__$1){
var seq__49900_50554__$1 = temp__5735__auto___50552__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49900_50554__$1)){
var c__4556__auto___50555 = cljs.core.chunk_first(seq__49900_50554__$1);
var G__50556 = cljs.core.chunk_rest(seq__49900_50554__$1);
var G__50557 = c__4556__auto___50555;
var G__50558 = cljs.core.count(c__4556__auto___50555);
var G__50559 = (0);
seq__49900_50537 = G__50556;
chunk__49901_50538 = G__50557;
count__49902_50539 = G__50558;
i__49903_50540 = G__50559;
continue;
} else {
var map__49935_50560 = cljs.core.first(seq__49900_50554__$1);
var map__49935_50561__$1 = (((((!((map__49935_50560 == null))))?(((((map__49935_50560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49935_50560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49935_50560):map__49935_50560);
var gline_50562 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49935_50561__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49935_50561__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49935_50561__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50562], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__49900_50537,chunk__49901_50538,count__49902_50539,i__49903_50540,seq__49732_50472,chunk__49733_50473,count__49734_50474,i__49735_50475,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__49935_50560,map__49935_50561__$1,gline_50562,gcol_50563,name_50564,seq__49900_50554__$1,temp__5735__auto___50552__$1,vec__49895_50534,column_50535,column_info_50536,seq__49732_50528__$1,temp__5735__auto___50527,vec__49729_50466,line_50467,columns_50468,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50563], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50467,new cljs.core.Keyword(null,"col","col",-1959363084),column_50535,new cljs.core.Keyword(null,"name","name",1843675177),name_50564], null));
});})(seq__49900_50537,chunk__49901_50538,count__49902_50539,i__49903_50540,seq__49732_50472,chunk__49733_50473,count__49734_50474,i__49735_50475,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__49935_50560,map__49935_50561__$1,gline_50562,gcol_50563,name_50564,seq__49900_50554__$1,temp__5735__auto___50552__$1,vec__49895_50534,column_50535,column_info_50536,seq__49732_50528__$1,temp__5735__auto___50527,vec__49729_50466,line_50467,columns_50468,inverted))
,cljs.core.sorted_map()));


var G__50566 = cljs.core.next(seq__49900_50554__$1);
var G__50567 = null;
var G__50568 = (0);
var G__50569 = (0);
seq__49900_50537 = G__50566;
chunk__49901_50538 = G__50567;
count__49902_50539 = G__50568;
i__49903_50540 = G__50569;
continue;
}
} else {
}
}
break;
}


var G__50570 = cljs.core.next(seq__49732_50528__$1);
var G__50571 = null;
var G__50572 = (0);
var G__50573 = (0);
seq__49732_50472 = G__50570;
chunk__49733_50473 = G__50571;
count__49734_50474 = G__50572;
i__49735_50475 = G__50573;
continue;
}
} else {
}
}
break;
}


var G__50574 = seq__49382_50462;
var G__50575 = chunk__49383_50463;
var G__50576 = count__49384_50464;
var G__50577 = (i__49385_50465 + (1));
seq__49382_50462 = G__50574;
chunk__49383_50463 = G__50575;
count__49384_50464 = G__50576;
i__49385_50465 = G__50577;
continue;
} else {
var temp__5735__auto___50582 = cljs.core.seq(seq__49382_50462);
if(temp__5735__auto___50582){
var seq__49382_50583__$1 = temp__5735__auto___50582;
if(cljs.core.chunked_seq_QMARK_(seq__49382_50583__$1)){
var c__4556__auto___50584 = cljs.core.chunk_first(seq__49382_50583__$1);
var G__50585 = cljs.core.chunk_rest(seq__49382_50583__$1);
var G__50586 = c__4556__auto___50584;
var G__50587 = cljs.core.count(c__4556__auto___50584);
var G__50588 = (0);
seq__49382_50462 = G__50585;
chunk__49383_50463 = G__50586;
count__49384_50464 = G__50587;
i__49385_50465 = G__50588;
continue;
} else {
var vec__49942_50589 = cljs.core.first(seq__49382_50583__$1);
var line_50590 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49942_50589,(0),null);
var columns_50591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49942_50589,(1),null);
var seq__49945_50592 = cljs.core.seq(columns_50591);
var chunk__49946_50593 = null;
var count__49947_50594 = (0);
var i__49948_50595 = (0);
while(true){
if((i__49948_50595 < count__49947_50594)){
var vec__50047_50596 = chunk__49946_50593.cljs$core$IIndexed$_nth$arity$2(null,i__49948_50595);
var column_50597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50047_50596,(0),null);
var column_info_50598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50047_50596,(1),null);
var seq__50051_50599 = cljs.core.seq(column_info_50598);
var chunk__50052_50600 = null;
var count__50053_50601 = (0);
var i__50054_50602 = (0);
while(true){
if((i__50054_50602 < count__50053_50601)){
var map__50077_50603 = chunk__50052_50600.cljs$core$IIndexed$_nth$arity$2(null,i__50054_50602);
var map__50077_50604__$1 = (((((!((map__50077_50603 == null))))?(((((map__50077_50603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50077_50603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50077_50603):map__50077_50603);
var gline_50605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50077_50604__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50077_50604__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50077_50604__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50605], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50051_50599,chunk__50052_50600,count__50053_50601,i__50054_50602,seq__49945_50592,chunk__49946_50593,count__49947_50594,i__49948_50595,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__50077_50603,map__50077_50604__$1,gline_50605,gcol_50606,name_50607,vec__50047_50596,column_50597,column_info_50598,vec__49942_50589,line_50590,columns_50591,seq__49382_50583__$1,temp__5735__auto___50582,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50606], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50590,new cljs.core.Keyword(null,"col","col",-1959363084),column_50597,new cljs.core.Keyword(null,"name","name",1843675177),name_50607], null));
});})(seq__50051_50599,chunk__50052_50600,count__50053_50601,i__50054_50602,seq__49945_50592,chunk__49946_50593,count__49947_50594,i__49948_50595,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__50077_50603,map__50077_50604__$1,gline_50605,gcol_50606,name_50607,vec__50047_50596,column_50597,column_info_50598,vec__49942_50589,line_50590,columns_50591,seq__49382_50583__$1,temp__5735__auto___50582,inverted))
,cljs.core.sorted_map()));


var G__50608 = seq__50051_50599;
var G__50609 = chunk__50052_50600;
var G__50610 = count__50053_50601;
var G__50611 = (i__50054_50602 + (1));
seq__50051_50599 = G__50608;
chunk__50052_50600 = G__50609;
count__50053_50601 = G__50610;
i__50054_50602 = G__50611;
continue;
} else {
var temp__5735__auto___50612__$1 = cljs.core.seq(seq__50051_50599);
if(temp__5735__auto___50612__$1){
var seq__50051_50613__$1 = temp__5735__auto___50612__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50051_50613__$1)){
var c__4556__auto___50614 = cljs.core.chunk_first(seq__50051_50613__$1);
var G__50615 = cljs.core.chunk_rest(seq__50051_50613__$1);
var G__50616 = c__4556__auto___50614;
var G__50617 = cljs.core.count(c__4556__auto___50614);
var G__50618 = (0);
seq__50051_50599 = G__50615;
chunk__50052_50600 = G__50616;
count__50053_50601 = G__50617;
i__50054_50602 = G__50618;
continue;
} else {
var map__50085_50619 = cljs.core.first(seq__50051_50613__$1);
var map__50085_50620__$1 = (((((!((map__50085_50619 == null))))?(((((map__50085_50619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50085_50619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50085_50619):map__50085_50619);
var gline_50621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50085_50620__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50085_50620__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50085_50620__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50621], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50051_50599,chunk__50052_50600,count__50053_50601,i__50054_50602,seq__49945_50592,chunk__49946_50593,count__49947_50594,i__49948_50595,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__50085_50619,map__50085_50620__$1,gline_50621,gcol_50622,name_50623,seq__50051_50613__$1,temp__5735__auto___50612__$1,vec__50047_50596,column_50597,column_info_50598,vec__49942_50589,line_50590,columns_50591,seq__49382_50583__$1,temp__5735__auto___50582,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50622], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50590,new cljs.core.Keyword(null,"col","col",-1959363084),column_50597,new cljs.core.Keyword(null,"name","name",1843675177),name_50623], null));
});})(seq__50051_50599,chunk__50052_50600,count__50053_50601,i__50054_50602,seq__49945_50592,chunk__49946_50593,count__49947_50594,i__49948_50595,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__50085_50619,map__50085_50620__$1,gline_50621,gcol_50622,name_50623,seq__50051_50613__$1,temp__5735__auto___50612__$1,vec__50047_50596,column_50597,column_info_50598,vec__49942_50589,line_50590,columns_50591,seq__49382_50583__$1,temp__5735__auto___50582,inverted))
,cljs.core.sorted_map()));


var G__50628 = cljs.core.next(seq__50051_50613__$1);
var G__50629 = null;
var G__50630 = (0);
var G__50631 = (0);
seq__50051_50599 = G__50628;
chunk__50052_50600 = G__50629;
count__50053_50601 = G__50630;
i__50054_50602 = G__50631;
continue;
}
} else {
}
}
break;
}


var G__50632 = seq__49945_50592;
var G__50633 = chunk__49946_50593;
var G__50634 = count__49947_50594;
var G__50635 = (i__49948_50595 + (1));
seq__49945_50592 = G__50632;
chunk__49946_50593 = G__50633;
count__49947_50594 = G__50634;
i__49948_50595 = G__50635;
continue;
} else {
var temp__5735__auto___50636__$1 = cljs.core.seq(seq__49945_50592);
if(temp__5735__auto___50636__$1){
var seq__49945_50641__$1 = temp__5735__auto___50636__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49945_50641__$1)){
var c__4556__auto___50642 = cljs.core.chunk_first(seq__49945_50641__$1);
var G__50643 = cljs.core.chunk_rest(seq__49945_50641__$1);
var G__50644 = c__4556__auto___50642;
var G__50645 = cljs.core.count(c__4556__auto___50642);
var G__50646 = (0);
seq__49945_50592 = G__50643;
chunk__49946_50593 = G__50644;
count__49947_50594 = G__50645;
i__49948_50595 = G__50646;
continue;
} else {
var vec__50096_50647 = cljs.core.first(seq__49945_50641__$1);
var column_50648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50096_50647,(0),null);
var column_info_50649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50096_50647,(1),null);
var seq__50099_50650 = cljs.core.seq(column_info_50649);
var chunk__50100_50651 = null;
var count__50101_50652 = (0);
var i__50102_50653 = (0);
while(true){
if((i__50102_50653 < count__50101_50652)){
var map__50120_50654 = chunk__50100_50651.cljs$core$IIndexed$_nth$arity$2(null,i__50102_50653);
var map__50120_50655__$1 = (((((!((map__50120_50654 == null))))?(((((map__50120_50654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50120_50654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50120_50654):map__50120_50654);
var gline_50656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50120_50655__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50120_50655__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50120_50655__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50656], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50099_50650,chunk__50100_50651,count__50101_50652,i__50102_50653,seq__49945_50592,chunk__49946_50593,count__49947_50594,i__49948_50595,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__50120_50654,map__50120_50655__$1,gline_50656,gcol_50657,name_50658,vec__50096_50647,column_50648,column_info_50649,seq__49945_50641__$1,temp__5735__auto___50636__$1,vec__49942_50589,line_50590,columns_50591,seq__49382_50583__$1,temp__5735__auto___50582,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50657], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50590,new cljs.core.Keyword(null,"col","col",-1959363084),column_50648,new cljs.core.Keyword(null,"name","name",1843675177),name_50658], null));
});})(seq__50099_50650,chunk__50100_50651,count__50101_50652,i__50102_50653,seq__49945_50592,chunk__49946_50593,count__49947_50594,i__49948_50595,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__50120_50654,map__50120_50655__$1,gline_50656,gcol_50657,name_50658,vec__50096_50647,column_50648,column_info_50649,seq__49945_50641__$1,temp__5735__auto___50636__$1,vec__49942_50589,line_50590,columns_50591,seq__49382_50583__$1,temp__5735__auto___50582,inverted))
,cljs.core.sorted_map()));


var G__50664 = seq__50099_50650;
var G__50665 = chunk__50100_50651;
var G__50666 = count__50101_50652;
var G__50667 = (i__50102_50653 + (1));
seq__50099_50650 = G__50664;
chunk__50100_50651 = G__50665;
count__50101_50652 = G__50666;
i__50102_50653 = G__50667;
continue;
} else {
var temp__5735__auto___50668__$2 = cljs.core.seq(seq__50099_50650);
if(temp__5735__auto___50668__$2){
var seq__50099_50669__$1 = temp__5735__auto___50668__$2;
if(cljs.core.chunked_seq_QMARK_(seq__50099_50669__$1)){
var c__4556__auto___50670 = cljs.core.chunk_first(seq__50099_50669__$1);
var G__50671 = cljs.core.chunk_rest(seq__50099_50669__$1);
var G__50672 = c__4556__auto___50670;
var G__50673 = cljs.core.count(c__4556__auto___50670);
var G__50674 = (0);
seq__50099_50650 = G__50671;
chunk__50100_50651 = G__50672;
count__50101_50652 = G__50673;
i__50102_50653 = G__50674;
continue;
} else {
var map__50133_50675 = cljs.core.first(seq__50099_50669__$1);
var map__50133_50676__$1 = (((((!((map__50133_50675 == null))))?(((((map__50133_50675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50133_50675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50133_50675):map__50133_50675);
var gline_50677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50133_50676__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_50678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50133_50676__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_50679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50133_50676__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_50677], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__50099_50650,chunk__50100_50651,count__50101_50652,i__50102_50653,seq__49945_50592,chunk__49946_50593,count__49947_50594,i__49948_50595,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__50133_50675,map__50133_50676__$1,gline_50677,gcol_50678,name_50679,seq__50099_50669__$1,temp__5735__auto___50668__$2,vec__50096_50647,column_50648,column_info_50649,seq__49945_50641__$1,temp__5735__auto___50636__$1,vec__49942_50589,line_50590,columns_50591,seq__49382_50583__$1,temp__5735__auto___50582,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_50678], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_50590,new cljs.core.Keyword(null,"col","col",-1959363084),column_50648,new cljs.core.Keyword(null,"name","name",1843675177),name_50679], null));
});})(seq__50099_50650,chunk__50100_50651,count__50101_50652,i__50102_50653,seq__49945_50592,chunk__49946_50593,count__49947_50594,i__49948_50595,seq__49382_50462,chunk__49383_50463,count__49384_50464,i__49385_50465,map__50133_50675,map__50133_50676__$1,gline_50677,gcol_50678,name_50679,seq__50099_50669__$1,temp__5735__auto___50668__$2,vec__50096_50647,column_50648,column_info_50649,seq__49945_50641__$1,temp__5735__auto___50636__$1,vec__49942_50589,line_50590,columns_50591,seq__49382_50583__$1,temp__5735__auto___50582,inverted))
,cljs.core.sorted_map()));


var G__50680 = cljs.core.next(seq__50099_50669__$1);
var G__50681 = null;
var G__50682 = (0);
var G__50683 = (0);
seq__50099_50650 = G__50680;
chunk__50100_50651 = G__50681;
count__50101_50652 = G__50682;
i__50102_50653 = G__50683;
continue;
}
} else {
}
}
break;
}


var G__50684 = cljs.core.next(seq__49945_50641__$1);
var G__50685 = null;
var G__50686 = (0);
var G__50687 = (0);
seq__49945_50592 = G__50684;
chunk__49946_50593 = G__50685;
count__49947_50594 = G__50686;
i__49948_50595 = G__50687;
continue;
}
} else {
}
}
break;
}


var G__50688 = cljs.core.next(seq__49382_50583__$1);
var G__50689 = null;
var G__50690 = (0);
var G__50691 = (0);
seq__49382_50462 = G__50688;
chunk__49383_50463 = G__50689;
count__49384_50464 = G__50690;
i__49385_50465 = G__50691;
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
