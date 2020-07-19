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
var G__26743__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.deref(a),args);
};
var G__26743 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26745__i = 0, G__26745__a = new Array(arguments.length -  0);
while (G__26745__i < G__26745__a.length) {G__26745__a[G__26745__i] = arguments[G__26745__i + 0]; ++G__26745__i;}
  args = new cljs.core.IndexedSeq(G__26745__a,0,null);
} 
return G__26743__delegate.call(this,args);};
G__26743.cljs$lang$maxFixedArity = 0;
G__26743.cljs$lang$applyTo = (function (arglist__26746){
var args = cljs.core.seq(arglist__26746);
return G__26743__delegate(args);
});
G__26743.cljs$core$IFn$_invoke$arity$variadic = G__26743__delegate;
return G__26743;
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
