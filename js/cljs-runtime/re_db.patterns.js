goog.provide('re_db.patterns');
/**
 * Dynamic var used in conjunction with re-db.patterns/capture-patterns macro to
 *   identify patterns read by a block of code.
 */
re_db.patterns._STAR_pattern_log_STAR_ = null;
/**
 * Map for building sets of patterns.
 */
re_db.patterns.empty_pattern_map = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e__","e__",302856739),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"_a_","_a_",1238688032),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"_av","_av",354871436),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ea_","ea_",-139041839),cljs.core.PersistentHashSet.EMPTY], null);
re_db.patterns.supported_pattern_keys = cljs.core.set(cljs.core.keys(re_db.patterns.empty_pattern_map));
re_db.patterns.conj_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
re_db.patterns.into_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY);
/**
 * Record pattern to *pattern-log*.
 */
re_db.patterns.log_read = (function re_db$patterns$log_read(var_args){
var G__51005 = arguments.length;
switch (G__51005) {
case 2:
return re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2 = (function (kind,pattern){
if((re_db.patterns._STAR_pattern_log_STAR_ == null)){
return null;
} else {
return (re_db.patterns._STAR_pattern_log_STAR_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_db.patterns._STAR_pattern_log_STAR_,kind,re_db.patterns.conj_set,pattern));
}
}));

(re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$3 = (function (kind,pattern,multiple_QMARK_){
if((re_db.patterns._STAR_pattern_log_STAR_ == null)){
return null;
} else {
return (re_db.patterns._STAR_pattern_log_STAR_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_db.patterns._STAR_pattern_log_STAR_,kind,(cljs.core.truth_(multiple_QMARK_)?re_db.patterns.into_set:re_db.patterns.conj_set),pattern));
}
}));

(re_db.patterns.log_read.cljs$lang$maxFixedArity = 3);

/**
 * Associates value with pattern in value-map.
 */
re_db.patterns.add_value = (function re_db$patterns$add_value(value_map,pattern_key,pattern,value){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(value_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern_key,pattern], null),re_db.patterns.conj_set,value);
});
/**
 * Removes value associated with pattern in value-map.
 */
re_db.patterns.remove_value = (function re_db$patterns$remove_value(value_map,pattern_key,pattern,value){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(value_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern_key,pattern], null),cljs.core.disj,value);
});

/**
 * Copied from re-db.core.
 */
re_db.patterns.resolve_id = (function re_db$patterns$resolve_id(db_snap,attr,val){
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_av","_av",354871436),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,val], null));

return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ave","ave",1316899405),attr,val], null)));
});
/**
 * Adds lookup ref listener, which uses an intermediate listener to update when
 *   the target of a lookup ref changes.
 */
re_db.patterns.listen_lookup_ref = (function re_db$patterns$listen_lookup_ref(p__51020,kind,pattern,listeners,db,f){
var vec__51021 = p__51020;
var lookup_attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51021,(0),null);
var lookup_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51021,(1),null);
var lookup_ref = vec__51021;
var lookup_target = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(re_db.patterns.resolve_id(cljs.core.deref(db),lookup_attr,lookup_val));
var lookup_cb = (function (p__51028){
var map__51029 = p__51028;
var map__51029__$1 = (((((!((map__51029 == null))))?(((((map__51029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51029):map__51029);
var tx_report = map__51029__$1;
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51029__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var next_lookup_target = re_db.patterns.resolve_id(db_after,lookup_attr,lookup_val);
if(cljs.core.truth_(cljs.core.deref(lookup_target))){
var G__51035_51109 = db;
var G__51036_51110 = cljs.core.PersistentArrayMap.createAsIfByAssoc([kind,(function (){var G__51038 = kind;
var G__51038__$1 = (((G__51038 instanceof cljs.core.Keyword))?G__51038.fqn:null);
switch (G__51038__$1) {
case "e__":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(lookup_target)], null);

break;
case "ea_":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lookup_target,cljs.core.second(pattern)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51038__$1)].join('')));

}
})()]);
var G__51037_51111 = f;
(re_db.patterns.unlisten.cljs$core$IFn$_invoke$arity$3 ? re_db.patterns.unlisten.cljs$core$IFn$_invoke$arity$3(G__51035_51109,G__51036_51110,G__51037_51111) : re_db.patterns.unlisten.call(null,G__51035_51109,G__51036_51110,G__51037_51111));
} else {
}

if((next_lookup_target == null)){
} else {
var G__51039_51113 = db;
var G__51040_51114 = cljs.core.PersistentArrayMap.createAsIfByAssoc([kind,(function (){var G__51044 = kind;
var G__51044__$1 = (((G__51044 instanceof cljs.core.Keyword))?G__51044.fqn:null);
switch (G__51044__$1) {
case "e__":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_lookup_target], null);

break;
case "ea_":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_lookup_target,cljs.core.second(pattern)], null)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51044__$1)].join('')));

}
})()]);
var G__51041_51115 = f;
(re_db.patterns.listen.cljs$core$IFn$_invoke$arity$3 ? re_db.patterns.listen.cljs$core$IFn$_invoke$arity$3(G__51039_51113,G__51040_51114,G__51041_51115) : re_db.patterns.listen.call(null,G__51039_51113,G__51040_51114,G__51041_51115));
}

cljs.core.reset_BANG_(lookup_target,next_lookup_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(tx_report) : f.call(null,tx_report));
});
return cljs.core.assoc_in(re_db.patterns.add_value((function (){var G__51046 = listeners;
if((!((cljs.core.deref(lookup_target) == null)))){
return re_db.patterns.add_value(G__51046,new cljs.core.Keyword(null,"e__","e__",302856739),cljs.core.deref(lookup_target),f);
} else {
return G__51046;
}
})(),new cljs.core.Keyword(null,"_av","_av",354871436),lookup_ref,lookup_cb),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lookup-refs","lookup-refs",1056339757),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern,f], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lookup-cb","lookup-cb",-434882622),lookup_cb,new cljs.core.Keyword(null,"lookup-target","lookup-target",1820524601),lookup_target], null));
});
/**
 * Removes lookup ref listener.
 */
re_db.patterns.unlisten_lookup_ref = (function re_db$patterns$unlisten_lookup_ref(lookup_ref,kind,pattern,listeners,db,f){
var map__51051 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(listeners,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lookup-refs","lookup-refs",1056339757),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern,f], null)], null));
var map__51051__$1 = (((((!((map__51051 == null))))?(((((map__51051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51051):map__51051);
var lookup_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51051__$1,new cljs.core.Keyword(null,"lookup-cb","lookup-cb",-434882622));
var lookup_target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51051__$1,new cljs.core.Keyword(null,"lookup-target","lookup-target",1820524601));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(re_db.patterns.remove_value((function (){var G__51053 = listeners;
if(cljs.core.truth_(cljs.core.deref(lookup_target))){
return re_db.patterns.remove_value(G__51053,kind,pattern,f);
} else {
return G__51053;
}
})(),new cljs.core.Keyword(null,"_av","_av",354871436),lookup_ref,lookup_cb),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lookup-refs","lookup-refs",1056339757),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern,f], null)], null));
});
/**
 * Returns true if pattern has lookup ref in id position.
 */
re_db.patterns.lookup_ref_QMARK_ = (function re_db$patterns$lookup_ref_QMARK_(kind,pattern){
var or__4126__auto__ = ((cljs.core.keyword_identical_QMARK_(kind,new cljs.core.Keyword(null,"e__","e__",302856739)))?((cljs.core.vector_QMARK_(pattern))?pattern:false):false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.keyword_identical_QMARK_(kind,new cljs.core.Keyword(null,"ea_","ea_",-139041839))){
if(cljs.core.vector_QMARK_(cljs.core.first(pattern))){
return cljs.core.first(pattern);
} else {
return false;
}
} else {
return false;
}
}
});
/**
 * Adds pattern listener.
 */
re_db.patterns.listen = (function re_db$patterns$listen(db,patterns,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.reduce_kv((function (listeners,kind,patterns__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (listeners__$1,pattern){
var temp__5733__auto__ = re_db.patterns.lookup_ref_QMARK_(kind,pattern);
if(cljs.core.truth_(temp__5733__auto__)){
var lookup_ref = temp__5733__auto__;
return re_db.patterns.listen_lookup_ref(lookup_ref,kind,pattern,listeners__$1,db,value);
} else {
return re_db.patterns.add_value(listeners__$1,kind,pattern,value);
}
}),listeners,patterns__$1);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"listeners","listeners",394544445)),patterns));
});
/**
 * Removes pattern listener.
 */
re_db.patterns.unlisten = (function re_db$patterns$unlisten(db,patterns,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(db,cljs.core.assoc,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.reduce_kv((function (listeners,kind,patterns__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (listeners__$1,pattern){
var temp__5733__auto__ = re_db.patterns.lookup_ref_QMARK_(kind,pattern);
if(cljs.core.truth_(temp__5733__auto__)){
var lookup_ref = temp__5733__auto__;
return re_db.patterns.unlisten_lookup_ref(lookup_ref,kind,pattern,listeners__$1,db,value);
} else {
return re_db.patterns.remove_value(listeners__$1,kind,pattern,value);
}
}),listeners,patterns__$1);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.Keyword(null,"listeners","listeners",394544445)),patterns));
});
/**
 * Returns list of keys for which map contains a non-empty value.
 */
re_db.patterns.non_empty_keys = (function re_db$patterns$non_empty_keys(m){
return cljs.core.reduce_kv((function (ks,k,v){
var G__51062 = ks;
if((!(cljs.core.empty_QMARK_(v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51062,k);
} else {
return G__51062;
}
}),cljs.core.PersistentHashSet.EMPTY,m);
});
/**
 * Returns a map of patterns matched by a list of datoms.
 *   Limits patterns to those listed in pattern-keys.
 *   many? should return true for attributes which have schema value :db.cardinality/many?.
 */
re_db.patterns.datom_patterns = (function re_db$patterns$datom_patterns(var_args){
var G__51074 = arguments.length;
switch (G__51074) {
case 2:
return re_db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$2 = (function (datoms,many_QMARK_){
return re_db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$3(datoms,many_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"e__","e__",302856739),new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.Keyword(null,"_av","_av",354871436),new cljs.core.Keyword(null,"_a_","_a_",1238688032)], null));
}));

(re_db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$3 = (function (datoms,many_QMARK_,pattern_keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (pattern_map,p__51075){
var vec__51076 = p__51075;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51076,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51076,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51076,(2),null);
var pv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51076,(3),null);
var G__51079 = pattern_map;
var G__51079__$1 = ((cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"e__","e__",302856739)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51079,new cljs.core.Keyword(null,"e__","e__",302856739),cljs.core.conj,e):G__51079);
var G__51079__$2 = ((cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"ea_","ea_",-139041839)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51079__$1,new cljs.core.Keyword(null,"ea_","ea_",-139041839),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)):G__51079__$1);
var G__51079__$3 = ((cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"_av","_av",354871436)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51079__$2,new cljs.core.Keyword(null,"_av","_av",354871436),cljs.core.into,(cljs.core.truth_((many_QMARK_.cljs$core$IFn$_invoke$arity$1 ? many_QMARK_.cljs$core$IFn$_invoke$arity$1(a) : many_QMARK_.call(null,a)))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (patterns,v__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(patterns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v__$1], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,pv)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,pv], null)], null))):G__51079__$2);
if(cljs.core.contains_QMARK_(pattern_keys,new cljs.core.Keyword(null,"_a_","_a_",1238688032))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__51079__$3,new cljs.core.Keyword(null,"_a_","_a_",1238688032),cljs.core.conj,a);
} else {
return G__51079__$3;
}
}),cljs.core.select_keys(re_db.patterns.empty_pattern_map,pattern_keys),datoms);
}));

(re_db.patterns.datom_patterns.cljs$lang$maxFixedArity = 3);

/**
 * Returns values associated with patterns.
 * 
 *   value-map is of form {<pattern-key> {<pattern> #{...set of values...}}}.
 *   pattern-map is of form {<pattern-key> #{...set of patterns...}}
 */
re_db.patterns.pattern_values = (function re_db$patterns$pattern_values(pattern_map,value_map){
return cljs.core.reduce_kv((function (values,pattern_key,patterns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (values__$1,pattern){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(values__$1,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pattern_key,pattern], null)));
}),values,patterns);
}),cljs.core.PersistentHashSet.EMPTY,pattern_map);
});
/**
 * Returns the set of values in value-map associated with patterns matched by datoms.
 */
re_db.patterns.datom_values = (function re_db$patterns$datom_values(value_map,datoms,many_QMARK_){
var active_keys = re_db.patterns.non_empty_keys(value_map);
return re_db.patterns.pattern_values(re_db.patterns.datom_patterns.cljs$core$IFn$_invoke$arity$3(datoms,many_QMARK_,active_keys),value_map);
});
/**
 * Invalidate a pattern, ie. invoke callbacks that match pattern
 */
re_db.patterns.invalidate_BANG_ = (function re_db$patterns$invalidate_BANG_(db,pattern_key,pattern){
var seq__51083 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listeners","listeners",394544445),pattern_key,pattern], null)));
var chunk__51084 = null;
var count__51085 = (0);
var i__51086 = (0);
while(true){
if((i__51086 < count__51085)){
var f = chunk__51084.cljs$core$IIndexed$_nth$arity$2(null,i__51086);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__51120 = seq__51083;
var G__51121 = chunk__51084;
var G__51122 = count__51085;
var G__51123 = (i__51086 + (1));
seq__51083 = G__51120;
chunk__51084 = G__51121;
count__51085 = G__51122;
i__51086 = G__51123;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51083);
if(temp__5735__auto__){
var seq__51083__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51083__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51083__$1);
var G__51125 = cljs.core.chunk_rest(seq__51083__$1);
var G__51126 = c__4556__auto__;
var G__51127 = cljs.core.count(c__4556__auto__);
var G__51128 = (0);
seq__51083 = G__51125;
chunk__51084 = G__51126;
count__51085 = G__51127;
i__51086 = G__51128;
continue;
} else {
var f = cljs.core.first(seq__51083__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__51129 = cljs.core.next(seq__51083__$1);
var G__51130 = null;
var G__51131 = (0);
var G__51132 = (0);
seq__51083 = G__51129;
chunk__51084 = G__51130;
count__51085 = G__51131;
i__51086 = G__51132;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
 * @interface
 */
re_db.patterns.IPatternListen = function(){};

var re_db$patterns$IPatternListen$reaction$dyn_51134 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_db.patterns.reaction[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (re_db.patterns.reaction["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IPatternListen.reaction",this$);
}
}
});
/**
 * the action to take when a listened pattern matches
 */
re_db.patterns.reaction = (function re_db$patterns$reaction(this$){
if((((!((this$ == null)))) && ((!((this$.re_db$patterns$IPatternListen$reaction$arity$1 == null)))))){
return this$.re_db$patterns$IPatternListen$reaction$arity$1(this$);
} else {
return re_db$patterns$IPatternListen$reaction$dyn_51134(this$);
}
});

var re_db$patterns$IPatternListen$patterns$dyn_51138 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_db.patterns.patterns[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (re_db.patterns.patterns["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IPatternListen.patterns",this$);
}
}
});
/**
 * Return the patterns currently listened to
 */
re_db.patterns.patterns = (function re_db$patterns$patterns(this$){
if((((!((this$ == null)))) && ((!((this$.re_db$patterns$IPatternListen$patterns$arity$1 == null)))))){
return this$.re_db$patterns$IPatternListen$patterns$arity$1(this$);
} else {
return re_db$patterns$IPatternListen$patterns$dyn_51138(this$);
}
});


//# sourceMappingURL=re_db.patterns.js.map
