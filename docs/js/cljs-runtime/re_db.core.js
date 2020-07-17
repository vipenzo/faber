goog.provide('re_db.core');
cljs.core.enable_console_print_BANG_();
re_db.core._STAR_notify_STAR_ = true;
re_db.core._STAR_db_log_STAR_ = null;
re_db.core.conj_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);
re_db.core.into_set = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY);
/**
 * Create a new db, with optional schema, which should be a mapping of attribute keys to
 *   the following options:
 * 
 *  :db/index       [true, :db.index/unique]
 *  :db/cardinality [:db.cardinality/many]
 */
re_db.core.create = (function re_db$core$create(var_args){
var G__41357 = arguments.length;
switch (G__41357) {
case 0:
return re_db.core.create.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_db.core.create.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_db.core.create.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_db.core.create.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}));

(re_db.core.create.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eav","eav",-1118737308),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ave","ave",1316899405),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema], null));
}));

(re_db.core.create.cljs$lang$maxFixedArity = 1);

/**
 * Merge additional schema options into a db. Indexes are not created for existing data.
 */
re_db.core.merge_schema_BANG_ = (function re_db$core$merge_schema_BANG_(db,schema){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.update,new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([schema], 0));
});
re_db.core.get_schema = (function re_db$core$get_schema(db_snap,a){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"schema","schema",-1582001791)),a);
});
/**
 * Returns true if attribute is indexed.
 */
re_db.core.index_QMARK_ = (function re_db$core$index_QMARK_(var_args){
var G__41371 = arguments.length;
switch (G__41371) {
case 1:
return re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return cljs.core.contains_QMARK_(schema,new cljs.core.Keyword("db","index","db/index",-1531680669));
}));

(re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (db_snap,a){
return re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$1(re_db.core.get_schema(db_snap,a));
}));

(re_db.core.index_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Returns true for attributes with cardinality `many`, which store a set of values for each attribute.
 */
re_db.core.many_QMARK_ = (function re_db$core$many_QMARK_(var_args){
var G__41378 = arguments.length;
switch (G__41378) {
case 1:
return re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)));
}));

(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (db_snap,a){
return re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(re_db.core.get_schema(db_snap,a));
}));

(re_db.core.many_QMARK_.cljs$lang$maxFixedArity = 2);

/**
 * Returns true for attributes where :db/index is :db.index/unique.
 */
re_db.core.unique_QMARK_ = (function re_db$core$unique_QMARK_(var_args){
var G__41381 = arguments.length;
switch (G__41381) {
case 1:
return re_db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("db.index","unique","db.index/unique",-332402872),cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","index","db/index",-1531680669)));
}));

(re_db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (db_snap,a){
return re_db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$1(re_db.core.get_schema(db_snap,a));
}));

(re_db.core.unique_QMARK_.cljs$lang$maxFixedArity = 2);

re_db.core.ref_QMARK_ = (function re_db$core$ref_QMARK_(schema){
return cljs.core.keyword_identical_QMARK_(new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","type","db/type",1174271242)));
});
/**
 * Returns id, resolving lookup refs (vectors of the form `[attribute value]`) to ids.
 *   Lookup refs are only supported for indexed attributes.
 *   The 3-arity version is for known lookup refs, and does not check for uniqueness.
 */
re_db.core.resolve_id = (function re_db$core$resolve_id(var_args){
var G__41393 = arguments.length;
switch (G__41393) {
case 3:
return re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$3 = (function (db_snap,attr,val){
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_av","_av",354871436),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,val], null));

return cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"ave","ave",1316899405)),attr),val));
}));

(re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2 = (function (db_snap,id){
if(cljs.core.vector_QMARK_(id)){
var vec__41396 = id;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41396,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41396,(1),null);
if((!(re_db.core.unique_QMARK_.cljs$core$IFn$_invoke$arity$2(db_snap,attr)))){
throw (new Error(["Not a unique attribute: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),", with value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('')));
} else {
return re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$3(db_snap,attr,val);
}
} else {
return id;
}
}));

(re_db.core.resolve_id.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if entity with given id exists in db.
 */
re_db.core.contains_QMARK_ = (function re_db$core$contains_QMARK_(db_snap,id){
var id__$1 = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if((id__$1 == null)){
} else {
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e__","e__",302856739),id__$1);
}

return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1) === true;
});

/**
 * Returns entity for resolved id.
 */
re_db.core.entity = (function re_db$core$entity(db_snap,id){
var temp__5735__auto__ = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if(cljs.core.truth_(temp__5735__auto__)){
var id__$1 = temp__5735__auto__;
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e__","e__",302856739),id__$1);

var G__41406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1);
if((G__41406 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41406,new cljs.core.Keyword("db","id","db/id",-1388397098),id__$1);
}
} else {
return null;
}
});
/**
 * Get attribute in entity with given id.
 */
re_db.core.get = (function re_db$core$get(var_args){
var G__41413 = arguments.length;
switch (G__41413) {
case 3:
return re_db.core.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return re_db.core.get.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_db.core.get.cljs$core$IFn$_invoke$arity$3 = (function (db_snap,id,attr){
var temp__5735__auto__ = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if(cljs.core.truth_(temp__5735__auto__)){
var id__$1 = temp__5735__auto__;
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,attr], null));

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1),attr);
} else {
return null;
}
}));

(re_db.core.get.cljs$core$IFn$_invoke$arity$4 = (function (db_snap,id,attr,not_found){
var temp__5735__auto__ = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if(cljs.core.truth_(temp__5735__auto__)){
var id__$1 = temp__5735__auto__;
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,attr], null));

return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1),attr,not_found);
} else {
return null;
}
}));

(re_db.core.get.cljs$lang$maxFixedArity = 4);

/**
 * Get-in the entity with given id.
 */
re_db.core.get_in = (function re_db$core$get_in(var_args){
var G__41427 = arguments.length;
switch (G__41427) {
case 3:
return re_db.core.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return re_db.core.get_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_db.core.get_in.cljs$core$IFn$_invoke$arity$3 = (function (db_snap,id,ks){
var temp__5735__auto__ = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if(cljs.core.truth_(temp__5735__auto__)){
var id__$1 = temp__5735__auto__;
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,cljs.core.first(ks)], null));

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1),ks);
} else {
return null;
}
}));

(re_db.core.get_in.cljs$core$IFn$_invoke$arity$4 = (function (db_snap,id,ks,not_found){
var temp__5735__auto__ = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if(cljs.core.truth_(temp__5735__auto__)){
var id__$1 = temp__5735__auto__;
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,cljs.core.first(ks)], null));

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1),ks,not_found);
} else {
return null;
}
}));

(re_db.core.get_in.cljs$lang$maxFixedArity = 4);

/**
 * Select keys from entity of id
 */
re_db.core.select_keys = (function re_db$core$select_keys(db_snap,id,ks){
var temp__5735__auto__ = re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_snap,id);
if(cljs.core.truth_(temp__5735__auto__)){
var id__$1 = temp__5735__auto__;
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ea_","ea_",-139041839),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__41432_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id__$1,p1__41432_SHARP_], null);
}),ks),true);

return cljs.core.select_keys(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id__$1),new cljs.core.Keyword("db","id","db/id",-1388397098),id__$1),ks);
} else {
return null;
}
});
/**
 * Add refs to entity
 */
re_db.core.touch = (function re_db$core$touch(db_snap,p__41440){
var map__41441 = p__41440;
var map__41441__$1 = (((((!((map__41441 == null))))?(((((map__41441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41441):map__41441);
var entity = map__41441__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41441__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
return cljs.core.reduce_kv((function (m,attr,ids){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(attr),["_",cljs.core.name(attr)].join('')),ids);
}),entity,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"vae","vae",1087935261)),id));
});
re_db.core.assert_uniqueness = (function re_db$core$assert_uniqueness(db_snap,id,attr,val){
if(cljs.core.empty_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"ave","ave",1316899405)),attr),val))){
return null;
} else {
throw (new Error(["Unique index on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr),"; attempted to write duplicate value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)," on id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"."].join('')));
}
});
re_db.core.add_index = (function re_db$core$add_index(db_snap,id,a,v,schema){
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,new cljs.core.Keyword("db","index","db/index",-1531680669));
if(cljs.core.keyword_identical_QMARK_(index,new cljs.core.Keyword("db.index","unique","db.index/unique",-332402872))){
re_db.core.assert_uniqueness(db_snap,id,a,v);
} else {
}

var G__41465 = db_snap;
var G__41465__$1 = (((!((index == null))))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__41465,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ave","ave",1316899405),a,v], null),re_db.core.conj_set,id):G__41465);
if(re_db.core.ref_QMARK_(schema)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__41465__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vae","vae",1087935261),v,a], null),re_db.core.conj_set,id);
} else {
return G__41465__$1;
}
});
re_db.core.add_index_many = (function re_db$core$add_index_many(db_snap,id,attr,added,schema){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,v){
return re_db.core.add_index(state,id,attr,v,schema);
}),db_snap,added);
});
re_db.core.remove_index = (function re_db$core$remove_index(db_snap,id,attr,removed,schema){
var G__41469 = db_snap;
var G__41469__$1 = ((re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$1(schema))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__41469,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ave","ave",1316899405),attr,removed], null),cljs.core.disj,id):G__41469);
if(re_db.core.ref_QMARK_(schema)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__41469__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vae","vae",1087935261),removed,attr], null),cljs.core.disj,id);
} else {
return G__41469__$1;
}
});
re_db.core.remove_index_many = (function re_db$core$remove_index_many(db_snap,id,attr,removals,schema){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (db_snap__$1,v){
return re_db.core.remove_index(db_snap__$1,id,attr,v,schema);
}),db_snap,removals);
});
re_db.core.update_index = (function re_db$core$update_index(db_snap,id,attr,added,removed,schema){
if(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(schema)){
var G__41473 = db_snap;
var G__41473__$1 = (cljs.core.truth_(added)?re_db.core.add_index_many(G__41473,id,attr,added,schema):G__41473);
if(cljs.core.truth_(removed)){
return re_db.core.remove_index_many(G__41473__$1,id,attr,removed,schema);
} else {
return G__41473__$1;
}
} else {
var G__41474 = db_snap;
var G__41474__$1 = (cljs.core.truth_(added)?re_db.core.add_index(G__41474,id,attr,added,schema):G__41474);
if(cljs.core.truth_(removed)){
return re_db.core.remove_index(G__41474__$1,id,attr,added,schema);
} else {
return G__41474__$1;
}
}
});
re_db.core.clear_empty_ent = (function re_db$core$clear_empty_ent(db_snap,id){
var G__41479 = db_snap;
if(cljs.core.truth_((function (){var G__41481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id);
var fexpr__41480 = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),id], null),cljs.core.PersistentArrayMap.EMPTY]);
return (fexpr__41480.cljs$core$IFn$_invoke$arity$1 ? fexpr__41480.cljs$core$IFn$_invoke$arity$1(G__41481) : fexpr__41480.call(null,G__41481));
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41479,new cljs.core.Keyword(null,"eav","eav",-1118737308),cljs.core.dissoc,id);
} else {
return G__41479;
}
});
re_db.core.retract_attr_many = (function re_db$core$retract_attr_many(p__41484,id,attr,value,schema){
var vec__41485 = p__41484;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41485,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41485,(1),null);
var state = vec__41485;
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr);
var removals = (((value == null))?prev_val:clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(value,prev_val));
var kill_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(removals,prev_val);
if(cljs.core.empty_QMARK_(removals)){
return state;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_db.core.clear_empty_ent(re_db.core.update_index(((kill_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db_snap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id], null),cljs.core.dissoc,attr):cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db_snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id,attr], null),clojure.set.difference,removals)),id,attr,null,removals,schema),id),(function (){var G__41492 = datoms;
if(re_db.core._STAR_notify_STAR_ === true){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__41492,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,null,removals], null));
} else {
return G__41492;
}
})()], null);
}
});
re_db.core.retract_attr = (function re_db$core$retract_attr(var_args){
var G__41498 = arguments.length;
switch (G__41498) {
case 3:
return re_db.core.retract_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return re_db.core.retract_attr.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_db.core.retract_attr.cljs$core$IFn$_invoke$arity$3 = (function (state,id,attr){
return re_db.core.retract_attr.cljs$core$IFn$_invoke$arity$4(state,id,attr,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((0)) : state.call(null,(0))),new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr));
}));

(re_db.core.retract_attr.cljs$core$IFn$_invoke$arity$4 = (function (p__41503,id,attr,value){
var vec__41504 = p__41503;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41504,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41504,(1),null);
var state = vec__41504;
var schema = re_db.core.get_schema(db_snap,attr);
if(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(schema)){
return re_db.core.retract_attr_many(state,id,attr,value,schema);
} else {
var prev_val = (((!((value == null))))?value:cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr));
if((!((prev_val == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_db.core.clear_empty_ent(re_db.core.update_index(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db_snap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id], null),cljs.core.dissoc,attr),id,attr,null,prev_val,re_db.core.get_schema(db_snap,attr)),id),(function (){var G__41512 = datoms;
if(re_db.core._STAR_notify_STAR_ === true){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__41512,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,null,prev_val], null));
} else {
return G__41512;
}
})()], null);
} else {
return state;
}
}
}));

(re_db.core.retract_attr.cljs$lang$maxFixedArity = 4);

re_db.core.retract_entity = (function re_db$core$retract_entity(state,id){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,p__41516){
var vec__41517 = p__41516;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41517,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41517,(1),null);
return re_db.core.retract_attr.cljs$core$IFn$_invoke$arity$4(state__$1,id,a,v);
}),state,re_db.core.entity((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((0)) : state.call(null,(0))),id));
});
re_db.core.add = (function re_db$core$add(p__41523,id,attr,val){
var vec__41524 = p__41523;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41524,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41524,(1),null);
var state = vec__41524;
if((!(cljs.core.keyword_identical_QMARK_(attr,new cljs.core.Keyword("db","id","db/id",-1388397098))))){
} else {
throw (new Error("Assert failed: (not (keyword-identical? attr :db/id))"));
}

var schema = re_db.core.get_schema(db_snap,attr);
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr);
if(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(schema)){
var additions = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(val,prev_val);
if(cljs.core.empty_QMARK_(additions)){
return state;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_db.core.update_index(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(db_snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id,attr], null),re_db.core.into_set,additions),id,attr,additions,null,schema),(function (){var G__41527 = datoms;
if(re_db.core._STAR_notify_STAR_ === true){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__41527,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,additions,null], null));
} else {
return G__41527;
}
})()], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_val,val)){
return state;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_db.core.update_index(cljs.core.assoc_in(db_snap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id,attr], null),val),id,attr,val,prev_val,schema),(function (){var G__41528 = datoms;
if(re_db.core._STAR_notify_STAR_ === true){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__41528,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,val,prev_val], null));
} else {
return G__41528;
}
})()], null);
}
}
});
re_db.core.add_map_indexes = (function re_db$core$add_map_indexes(db_snap,id,m,prev_m){
return cljs.core.reduce_kv((function (db_snap__$1,attr,val){
var schema = re_db.core.get_schema(db_snap__$1,attr);
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_m,attr);
if(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(schema)){
return re_db.core.update_index(db_snap__$1,id,attr,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(val,prev_val),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_val,val),schema);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,prev_val)){
return re_db.core.update_index(db_snap__$1,id,attr,val,prev_val,schema);
} else {
return db_snap__$1;

}
}
}),db_snap,m);
});
re_db.core.add_map_datoms = (function re_db$core$add_map_datoms(datoms,id,m,prev_m,db_snap){
return cljs.core.reduce_kv((function (datoms__$1,attr,val){
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(prev_m,attr);
var G__41534 = datoms__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,prev_val)){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__41534,((re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$2(db_snap,attr))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(val,prev_val),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_val,val)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,attr,val,prev_val], null)));
} else {
return G__41534;
}
}),datoms,m);
});
re_db.core.remove_nils = (function re_db$core$remove_nils(m){
return cljs.core.reduce_kv((function (m__$1,k,v){
var G__41537 = m__$1;
if((v == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41537,k);
} else {
return G__41537;
}
}),m,m);
});
re_db.core.add_map = (function re_db$core$add_map(p__41538,m){
var vec__41539 = p__41538;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41539,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41539,(1),null);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("db","id","db/id",-1388397098));
var m__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("db","id","db/id",-1388397098));
var prev_m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_db.core.clear_empty_ent(re_db.core.add_map_indexes(cljs.core.assoc_in(db_snap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eav","eav",-1118737308),id], null),re_db.core.remove_nils(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_m,m__$1], 0)))),id,m__$1,prev_m),id),(function (){var G__41542 = datoms;
if(re_db.core._STAR_notify_STAR_ === true){
return re_db.core.add_map_datoms(G__41542,id,m__$1,prev_m,db_snap);
} else {
return G__41542;
}
})()], null);
});
re_db.core.update_attr = (function re_db$core$update_attr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41651 = arguments.length;
var i__4737__auto___41652 = (0);
while(true){
if((i__4737__auto___41652 < len__4736__auto___41651)){
args__4742__auto__.push((arguments[i__4737__auto___41652]));

var G__41653 = (i__4737__auto___41652 + (1));
i__4737__auto___41652 = G__41653;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return re_db.core.update_attr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(re_db.core.update_attr.cljs$core$IFn$_invoke$arity$variadic = (function (p__41557,id,attr,f,args){
var vec__41558 = p__41557;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41558,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41558,(1),null);
var state = vec__41558;
var prev_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)),id),attr);
var new_val = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,prev_val,args);
if(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$2(db_snap,attr)){
var additions = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_val,prev_val);
var removals = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_val,new_val);
var G__41561 = state;
var G__41561__$1 = (((!(cljs.core.empty_QMARK_(additions))))?re_db.core.add(G__41561,id,attr,additions):G__41561);
if((!(cljs.core.empty_QMARK_(removals)))){
return re_db.core.add(G__41561__$1,id,attr,removals);
} else {
return G__41561__$1;
}
} else {
return re_db.core.add(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_snap,datoms], null),id,attr,new_val);
}
}));

(re_db.core.update_attr.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(re_db.core.update_attr.cljs$lang$applyTo = (function (seq41552){
var G__41553 = cljs.core.first(seq41552);
var seq41552__$1 = cljs.core.next(seq41552);
var G__41554 = cljs.core.first(seq41552__$1);
var seq41552__$2 = cljs.core.next(seq41552__$1);
var G__41555 = cljs.core.first(seq41552__$2);
var seq41552__$3 = cljs.core.next(seq41552__$2);
var G__41556 = cljs.core.first(seq41552__$3);
var seq41552__$4 = cljs.core.next(seq41552__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41553,G__41554,G__41555,G__41556,seq41552__$4);
}));

re_db.core.assoc_in_attr = (function re_db$core$assoc_in_attr(p__41565,id,attr,path,new_val){
var vec__41566 = p__41565;
var db_snap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41566,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41566,(1),null);
return re_db.core.update_attr.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_snap,datoms], null),id,attr,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_val], 0));
});
/**
 * Returns set of attribute keys with db.cardinality/schema
 */
re_db.core.many_attrs = (function re_db$core$many_attrs(schema){
return cljs.core.reduce_kv((function (s,attr,k_schema){
var G__41569 = s;
if(re_db.core.many_QMARK_.cljs$core$IFn$_invoke$arity$1(k_schema)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41569,attr);
} else {
return G__41569;
}
}),cljs.core.PersistentHashSet.EMPTY,schema);
});
/**
 * Remove listener from patterns (if provided) or :tx-log.
 */
re_db.core.unlisten = (function re_db$core$unlisten(var_args){
var G__41571 = arguments.length;
switch (G__41571) {
case 2:
return re_db.core.unlisten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_db.core.unlisten.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_db.core.unlisten.cljs$core$IFn$_invoke$arity$2 = (function (db,f){
var G__41572 = db;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41572,cljs.core.update,new cljs.core.Keyword(null,"tx-listeners","tx-listeners",-2132318001),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0));

return G__41572;
}));

(re_db.core.unlisten.cljs$core$IFn$_invoke$arity$3 = (function (db,patterns,f){
return re_db.patterns.unlisten(db,patterns,f);
}));

(re_db.core.unlisten.cljs$lang$maxFixedArity = 3);

/**
 * Adds listener for transactions which contain datom(s) matching the provided pattern. If patterns not provided, matches all transactions.
 * 
 * Patterns should be a map containing any of the following keys, each containing a collection of patterns:
 * 
 *  :e__      entity                              [id _ _]
 *  :ea_      entity-attribute                    [id attr _]
 *  :_av      attribute-value                     [_ attr val]
 *  :_a_      attribute                           [_ attr _]
 */
re_db.core.listen = (function re_db$core$listen(var_args){
var G__41574 = arguments.length;
switch (G__41574) {
case 2:
return re_db.core.listen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_db.core.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_db.core.listen.cljs$core$IFn$_invoke$arity$2 = (function (db,f){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(db,cljs.core.update,new cljs.core.Keyword(null,"tx-listeners","tx-listeners",-2132318001),re_db.core.conj_set,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0));

return (function (){
return re_db.core.unlisten.cljs$core$IFn$_invoke$arity$2(db,f);
});
}));

(re_db.core.listen.cljs$core$IFn$_invoke$arity$3 = (function (db,patterns,f){
re_db.patterns.listen(db,patterns,f);

return (function (){
return re_db.core.unlisten.cljs$core$IFn$_invoke$arity$3(db,patterns,f);
});
}));

(re_db.core.listen.cljs$lang$maxFixedArity = 3);

/**
 * Notify listeners for supported patterns matched by datoms in transaction.
 * 
 *   Listeners are called with the complete :tx-report. A listener is called at most once per transaction.
 */
re_db.core.notify_listeners = (function re_db$core$notify_listeners(p__41581){
var map__41582 = p__41581;
var map__41582__$1 = (((((!((map__41582 == null))))?(((((map__41582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41582):map__41582);
var tx_report = map__41582__$1;
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41582__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41582__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
var temp__5735__auto___41659 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_after,new cljs.core.Keyword(null,"listeners","listeners",394544445));
if(cljs.core.truth_(temp__5735__auto___41659)){
var pattern_value_map_41661 = temp__5735__auto___41659;
var seq__41584_41662 = cljs.core.seq(re_db.patterns.datom_values(pattern_value_map_41661,datoms,re_db.core.many_attrs(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(db_after))));
var chunk__41585_41663 = null;
var count__41586_41664 = (0);
var i__41587_41665 = (0);
while(true){
if((i__41587_41665 < count__41586_41664)){
var listener_41666 = chunk__41585_41663.cljs$core$IIndexed$_nth$arity$2(null,i__41587_41665);
(listener_41666.cljs$core$IFn$_invoke$arity$1 ? listener_41666.cljs$core$IFn$_invoke$arity$1(tx_report) : listener_41666.call(null,tx_report));


var G__41667 = seq__41584_41662;
var G__41668 = chunk__41585_41663;
var G__41669 = count__41586_41664;
var G__41670 = (i__41587_41665 + (1));
seq__41584_41662 = G__41667;
chunk__41585_41663 = G__41668;
count__41586_41664 = G__41669;
i__41587_41665 = G__41670;
continue;
} else {
var temp__5735__auto___41671__$1 = cljs.core.seq(seq__41584_41662);
if(temp__5735__auto___41671__$1){
var seq__41584_41672__$1 = temp__5735__auto___41671__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41584_41672__$1)){
var c__4556__auto___41673 = cljs.core.chunk_first(seq__41584_41672__$1);
var G__41674 = cljs.core.chunk_rest(seq__41584_41672__$1);
var G__41675 = c__4556__auto___41673;
var G__41676 = cljs.core.count(c__4556__auto___41673);
var G__41677 = (0);
seq__41584_41662 = G__41674;
chunk__41585_41663 = G__41675;
count__41586_41664 = G__41676;
i__41587_41665 = G__41677;
continue;
} else {
var listener_41678 = cljs.core.first(seq__41584_41672__$1);
(listener_41678.cljs$core$IFn$_invoke$arity$1 ? listener_41678.cljs$core$IFn$_invoke$arity$1(tx_report) : listener_41678.call(null,tx_report));


var G__41681 = cljs.core.next(seq__41584_41672__$1);
var G__41682 = null;
var G__41683 = (0);
var G__41684 = (0);
seq__41584_41662 = G__41681;
chunk__41585_41663 = G__41682;
count__41586_41664 = G__41683;
i__41587_41665 = G__41684;
continue;
}
} else {
}
}
break;
}
} else {
}

var seq__41594 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_after,new cljs.core.Keyword(null,"tx-listeners","tx-listeners",-2132318001)));
var chunk__41595 = null;
var count__41596 = (0);
var i__41597 = (0);
while(true){
if((i__41597 < count__41596)){
var listener = chunk__41595.cljs$core$IIndexed$_nth$arity$2(null,i__41597);
(listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(tx_report) : listener.call(null,tx_report));


var G__41685 = seq__41594;
var G__41686 = chunk__41595;
var G__41687 = count__41596;
var G__41688 = (i__41597 + (1));
seq__41594 = G__41685;
chunk__41595 = G__41686;
count__41596 = G__41687;
i__41597 = G__41688;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41594);
if(temp__5735__auto__){
var seq__41594__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41594__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41594__$1);
var G__41689 = cljs.core.chunk_rest(seq__41594__$1);
var G__41690 = c__4556__auto__;
var G__41691 = cljs.core.count(c__4556__auto__);
var G__41692 = (0);
seq__41594 = G__41689;
chunk__41595 = G__41690;
count__41596 = G__41691;
i__41597 = G__41692;
continue;
} else {
var listener = cljs.core.first(seq__41594__$1);
(listener.cljs$core$IFn$_invoke$arity$1 ? listener.cljs$core$IFn$_invoke$arity$1(tx_report) : listener.call(null,tx_report));


var G__41693 = cljs.core.next(seq__41594__$1);
var G__41694 = null;
var G__41695 = (0);
var G__41696 = (0);
seq__41594 = G__41693;
chunk__41595 = G__41694;
count__41596 = G__41695;
i__41597 = G__41696;
continue;
}
} else {
return null;
}
}
break;
}
});
re_db.core.commit_tx = (function re_db$core$commit_tx(state,tx){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var G__41598 = (tx.cljs$core$IFn$_invoke$arity$1 ? tx.cljs$core$IFn$_invoke$arity$1((0)) : tx.call(null,(0)));
var G__41598__$1 = (((G__41598 instanceof cljs.core.Keyword))?G__41598.fqn:null);
switch (G__41598__$1) {
case "db/add":
return re_db.core.add;

break;
case "db/add-map":
return re_db.core.add_map;

break;
case "db/update-attr":
return re_db.core.update_attr;

break;
case "db/assoc-in-attr":
return re_db.core.assoc_in_attr;

break;
case "db/retract-entity":
return re_db.core.retract_entity;

break;
case "db/retract-attr":
return re_db.core.retract_attr;

break;
default:
return (function (){
throw Error(["No re-db op: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((tx.cljs$core$IFn$_invoke$arity$1 ? tx.cljs$core$IFn$_invoke$arity$1((0)) : tx.call(null,(0))))].join(''));
});

}
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx,(0),state));
});
re_db.core.transaction = (function re_db$core$transaction(db_before,new_txs){
var resolve_id = (function (p1__41600_SHARP_){
return re_db.core.resolve_id.cljs$core$IFn$_invoke$arity$2(db_before,p1__41600_SHARP_);
});
var vec__41601 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,tx){
if(cljs.core.vector_QMARK_(tx)){
return re_db.core.commit_tx(state,cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx,(1),resolve_id));
} else {
return re_db.core.commit_tx(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add-map","db/add-map",679156732),cljs.core.update.cljs$core$IFn$_invoke$arity$3(tx,new cljs.core.Keyword("db","id","db/id",-1388397098),resolve_id)], null));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [db_before,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),new_txs);
var db_after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41601,(0),null);
var datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41601,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db_after,new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.persistent_BANG_(datoms)], null);
});
re_db.core._STAR_prevent_notify_STAR_ = false;
re_db.core.transact_BANG_ = (function re_db$core$transact_BANG_(var_args){
var G__41605 = arguments.length;
switch (G__41605) {
case 2:
return re_db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (db,txs){
return re_db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(db,txs,cljs.core.PersistentArrayMap.EMPTY);
}));

(re_db.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (db,txs,p__41606){
var map__41607 = p__41606;
var map__41607__$1 = (((((!((map__41607 == null))))?(((((map__41607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41607):map__41607);
var notify = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41607__$1,new cljs.core.Keyword(null,"notify","notify",-1256867814),true);
var log_datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41607__$1,new cljs.core.Keyword(null,"log-datoms","log-datoms",-1857368166));
var _STAR_notify_STAR__orig_val__41609 = re_db.core._STAR_notify_STAR_;
var _STAR_notify_STAR__temp_val__41610 = (function (){var or__4126__auto__ = notify;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return log_datoms;
}
})();
(re_db.core._STAR_notify_STAR_ = _STAR_notify_STAR__temp_val__41610);

try{var temp__5735__auto__ = (((txs == null))?null:((((cljs.core.map_QMARK_(txs)) && (cljs.core.contains_QMARK_(txs,new cljs.core.Keyword(null,"datoms","datoms",-290874434)))))?txs:((((cljs.core.vector_QMARK_(txs)) || (cljs.core.list_QMARK_(txs)) || (cljs.core.seq_QMARK_(txs))))?re_db.core.transaction(cljs.core.deref(db),txs):(function(){throw Error("Transact! was not passed a valid transaction")})()
)));
if(cljs.core.truth_(temp__5735__auto__)){
var map__41611 = temp__5735__auto__;
var map__41611__$1 = (((((!((map__41611 == null))))?(((((map__41611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41611):map__41611);
var tx = map__41611__$1;
var db_after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41611__$1,new cljs.core.Keyword(null,"db-after","db-after",-571884666));
var datoms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41611__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
cljs.core.reset_BANG_(db,db_after);

if((re_db.core._STAR_db_log_STAR_ == null)){
} else {
cljs.core.reset_BANG_(re_db.core._STAR_db_log_STAR_,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(re_db.core._STAR_db_log_STAR_),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db_after),new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.into,datoms));
}

if(cljs.core.truth_((function (){var and__4115__auto__ = notify;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(re_db.core._STAR_prevent_notify_STAR_);
} else {
return and__4115__auto__;
}
})())){
re_db.core.notify_listeners(tx);
} else {
}

return db;
} else {
return null;
}
}finally {(re_db.core._STAR_notify_STAR_ = _STAR_notify_STAR__orig_val__41609);
}}));

(re_db.core.transact_BANG_.cljs$lang$maxFixedArity = 3);

re_db.core.entity_ids = (function re_db$core$entity_ids(db_snap,qs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.intersection,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (q){
return cljs.core.set(((cljs.core.fn_QMARK_(q))?cljs.core.reduce_kv((function (s,id,entity){
if(cljs.core.truth_((q.cljs$core$IFn$_invoke$arity$1 ? q.cljs$core$IFn$_invoke$arity$1(entity) : q.call(null,entity)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,id);
} else {
return s;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308))):(((q instanceof cljs.core.Keyword))?(function (){
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_a_","_a_",1238688032),q);

return cljs.core.reduce_kv((function (s,id,entity){
if(cljs.core.contains_QMARK_(entity,q)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,id);
} else {
return s;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"eav","eav",-1118737308)));
})()
:(function (){var vec__41616 = q;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41616,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41616,(1),null);
re_db.patterns.log_read.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"_av","_av",354871436),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,val], null));

if(re_db.core.index_QMARK_.cljs$core$IFn$_invoke$arity$2(db_snap,attr)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(db_snap,new cljs.core.Keyword(null,"ave","ave",1316899405)),attr),val);
} else {
var G__41622 = db_snap;
var G__41623 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__41613_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__41613_SHARP_,attr));
})], null);
return (re_db.core.entity_ids.cljs$core$IFn$_invoke$arity$2 ? re_db.core.entity_ids.cljs$core$IFn$_invoke$arity$2(G__41622,G__41623) : re_db.core.entity_ids.call(null,G__41622,G__41623));
}
})()
)));
}),qs));
});
re_db.core.entities = (function re_db$core$entities(db_snap,qs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41624_SHARP_){
return re_db.core.entity(db_snap,p1__41624_SHARP_);
}),re_db.core.entity_ids(db_snap,qs));
});
/**
 * Returns a unique id (string).
 */
re_db.core.unique_id = (function re_db$core$unique_id(){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_uuid_utils.core.make_random_uuid());
});

//# sourceMappingURL=re_db.core.js.map
