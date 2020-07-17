goog.provide('re_db.d');
if((typeof re_db !== 'undefined') && (typeof re_db.d !== 'undefined') && (typeof re_db.d._STAR_db_STAR_ !== 'undefined')){
} else {
re_db.d._STAR_db_STAR_ = re_db.core.create.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Partially apply a (an atom) to f, but deref the atom at time of application.
 */
re_db.d.partial_deref = (function re_db$d$partial_deref(f,a){
return (function() { 
var G__41750__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.deref(a),args);
};
var G__41750 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41751__i = 0, G__41751__a = new Array(arguments.length -  0);
while (G__41751__i < G__41751__a.length) {G__41751__a[G__41751__i] = arguments[G__41751__i + 0]; ++G__41751__i;}
  args = new cljs.core.IndexedSeq(G__41751__a,0,null);
} 
return G__41750__delegate.call(this,args);};
G__41750.cljs$lang$maxFixedArity = 0;
G__41750.cljs$lang$applyTo = (function (arglist__41752){
var args = cljs.core.seq(arglist__41752);
return G__41750__delegate(args);
});
G__41750.cljs$core$IFn$_invoke$arity$variadic = G__41750__delegate;
return G__41750;
})()
;
});
re_db.d.entity = re_db.d.partial_deref(re_db.core.entity,re_db.d._STAR_db_STAR_);
re_db.d.get = re_db.d.partial_deref(re_db.core.get,re_db.d._STAR_db_STAR_);
re_db.d.get_in = re_db.d.partial_deref(re_db.core.get_in,re_db.d._STAR_db_STAR_);
re_db.d.select_keys = re_db.d.partial_deref(re_db.core.select_keys,re_db.d._STAR_db_STAR_);
re_db.d.entity_ids = re_db.d.partial_deref(re_db.core.entity_ids,re_db.d._STAR_db_STAR_);
re_db.d.entities = re_db.d.partial_deref(re_db.core.entities,re_db.d._STAR_db_STAR_);
re_db.d.contains_QMARK_ = re_db.d.partial_deref(re_db.core.contains_QMARK_,re_db.d._STAR_db_STAR_);
re_db.d.touch = re_db.d.partial_deref(re_db.core.touch,re_db.d._STAR_db_STAR_);
re_db.d.transact_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_db.core.transact_BANG_,re_db.d._STAR_db_STAR_);
re_db.d.listen = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_db.core.listen,re_db.d._STAR_db_STAR_);
re_db.d.unlisten = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_db.core.unlisten,re_db.d._STAR_db_STAR_);
re_db.d.merge_schema_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_db.core.merge_schema_BANG_,re_db.d._STAR_db_STAR_);
re_db.d.unique_id = re_db.core.unique_id;

//# sourceMappingURL=re_db.d.js.map
