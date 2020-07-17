goog.provide('cells.eval_context');

/**
 * Cells are designed to be used within interactive interfaces where users re-evaluate
 * code frequently. Implement the IDispose protocol on an editor context to control the
 *  'disposal' of side-effects like intervals when code is (re)-evaluated.
 * @interface
 */
cells.eval_context.IDispose = function(){};

var cells$eval_context$IDispose$on_dispose$dyn_47940 = (function (context,f){
var x__4428__auto__ = (((context == null))?null:context);
var m__4429__auto__ = (cells.eval_context.on_dispose[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(context,f) : m__4429__auto__.call(null,context,f));
} else {
var m__4426__auto__ = (cells.eval_context.on_dispose["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(context,f) : m__4426__auto__.call(null,context,f));
} else {
throw cljs.core.missing_protocol("IDispose.on-dispose",context);
}
}
});
/**
 * Register a callback to be fired when context is disposed.
 */
cells.eval_context.on_dispose = (function cells$eval_context$on_dispose(context,f){
if((((!((context == null)))) && ((!((context.cells$eval_context$IDispose$on_dispose$arity$2 == null)))))){
return context.cells$eval_context$IDispose$on_dispose$arity$2(context,f);
} else {
return cells$eval_context$IDispose$on_dispose$dyn_47940(context,f);
}
});

var cells$eval_context$IDispose$_dispose_BANG_$dyn_47942 = (function (context){
var x__4428__auto__ = (((context == null))?null:context);
var m__4429__auto__ = (cells.eval_context._dispose_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(context) : m__4429__auto__.call(null,context));
} else {
var m__4426__auto__ = (cells.eval_context._dispose_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(context) : m__4426__auto__.call(null,context));
} else {
throw cljs.core.missing_protocol("IDispose.-dispose!",context);
}
}
});
cells.eval_context._dispose_BANG_ = (function cells$eval_context$_dispose_BANG_(context){
if((((!((context == null)))) && ((!((context.cells$eval_context$IDispose$_dispose_BANG_$arity$1 == null)))))){
return context.cells$eval_context$IDispose$_dispose_BANG_$arity$1(context);
} else {
return cells$eval_context$IDispose$_dispose_BANG_$dyn_47942(context);
}
});

cells.eval_context.dispose_BANG_ = (function cells$eval_context$dispose_BANG_(value){
if((((!((value == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === value.cells$eval_context$IDispose$))))?true:(((!value.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cells.eval_context.IDispose,value):false)):cljs.core.native_satisfies_QMARK_(cells.eval_context.IDispose,value))){
return cells.eval_context._dispose_BANG_(value);
} else {
return null;
}
});

/**
 * @interface
 */
cells.eval_context.IHandleError = function(){};

var cells$eval_context$IHandleError$handle_error$dyn_47945 = (function (this$,e){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.eval_context.handle_error[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,e) : m__4429__auto__.call(null,this$,e));
} else {
var m__4426__auto__ = (cells.eval_context.handle_error["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,e) : m__4426__auto__.call(null,this$,e));
} else {
throw cljs.core.missing_protocol("IHandleError.handle-error",this$);
}
}
});
cells.eval_context.handle_error = (function cells$eval_context$handle_error(this$,e){
if((((!((this$ == null)))) && ((!((this$.cells$eval_context$IHandleError$handle_error$arity$2 == null)))))){
return this$.cells$eval_context$IHandleError$handle_error$arity$2(this$,e);
} else {
return cells$eval_context$IHandleError$handle_error$dyn_47945(this$,e);
}
});

cells.eval_context.new_context = (function cells$eval_context$new_context(){
var _context_state = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.PersistentHashSet.EMPTY], null));
if((typeof cells !== 'undefined') && (typeof cells.eval_context !== 'undefined') && (typeof cells.eval_context.t_cells$eval_context47916 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cells.eval_context.IDispose}
 * @implements {cells.eval_context.IHandleError}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cells.eval_context.t_cells$eval_context47916 = (function (_context_state,meta47917){
this._context_state = _context_state;
this.meta47917 = meta47917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cells.eval_context.t_cells$eval_context47916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47918,meta47917__$1){
var self__ = this;
var _47918__$1 = this;
return (new cells.eval_context.t_cells$eval_context47916(self__._context_state,meta47917__$1));
}));

(cells.eval_context.t_cells$eval_context47916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47918){
var self__ = this;
var _47918__$1 = this;
return self__.meta47917;
}));

(cells.eval_context.t_cells$eval_context47916.prototype.cells$eval_context$IDispose$ = cljs.core.PROTOCOL_SENTINEL);

(cells.eval_context.t_cells$eval_context47916.prototype.cells$eval_context$IDispose$on_dispose$arity$2 = (function (context,f){
var self__ = this;
var context__$1 = this;
return cljs.core._vreset_BANG_(self__._context_state,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core._deref(self__._context_state),new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.conj,f));
}));

(cells.eval_context.t_cells$eval_context47916.prototype.cells$eval_context$IDispose$_dispose_BANG_$arity$1 = (function (context){
var self__ = this;
var context__$1 = this;
var seq__47935_47959 = cljs.core.seq(new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__._context_state)));
var chunk__47936_47960 = null;
var count__47937_47961 = (0);
var i__47938_47962 = (0);
while(true){
if((i__47938_47962 < count__47937_47961)){
var f_47976 = chunk__47936_47960.cljs$core$IIndexed$_nth$arity$2(null,i__47938_47962);
(f_47976.cljs$core$IFn$_invoke$arity$0 ? f_47976.cljs$core$IFn$_invoke$arity$0() : f_47976.call(null));


var G__47977 = seq__47935_47959;
var G__47978 = chunk__47936_47960;
var G__47979 = count__47937_47961;
var G__47980 = (i__47938_47962 + (1));
seq__47935_47959 = G__47977;
chunk__47936_47960 = G__47978;
count__47937_47961 = G__47979;
i__47938_47962 = G__47980;
continue;
} else {
var temp__5735__auto___47981 = cljs.core.seq(seq__47935_47959);
if(temp__5735__auto___47981){
var seq__47935_47982__$1 = temp__5735__auto___47981;
if(cljs.core.chunked_seq_QMARK_(seq__47935_47982__$1)){
var c__4556__auto___47983 = cljs.core.chunk_first(seq__47935_47982__$1);
var G__47984 = cljs.core.chunk_rest(seq__47935_47982__$1);
var G__47985 = c__4556__auto___47983;
var G__47986 = cljs.core.count(c__4556__auto___47983);
var G__47987 = (0);
seq__47935_47959 = G__47984;
chunk__47936_47960 = G__47985;
count__47937_47961 = G__47986;
i__47938_47962 = G__47987;
continue;
} else {
var f_47988 = cljs.core.first(seq__47935_47982__$1);
(f_47988.cljs$core$IFn$_invoke$arity$0 ? f_47988.cljs$core$IFn$_invoke$arity$0() : f_47988.call(null));


var G__47989 = cljs.core.next(seq__47935_47982__$1);
var G__47990 = null;
var G__47991 = (0);
var G__47992 = (0);
seq__47935_47959 = G__47989;
chunk__47936_47960 = G__47990;
count__47937_47961 = G__47991;
i__47938_47962 = G__47992;
continue;
}
} else {
}
}
break;
}

return cljs.core._vreset_BANG_(self__._context_state,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__._context_state),new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.empty));
}));

(cells.eval_context.t_cells$eval_context47916.prototype.cells$eval_context$IHandleError$ = cljs.core.PROTOCOL_SENTINEL);

(cells.eval_context.t_cells$eval_context47916.prototype.cells$eval_context$IHandleError$handle_error$arity$2 = (function (this$,e){
var self__ = this;
var this$__$1 = this;
throw e;
}));

(cells.eval_context.t_cells$eval_context47916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-context-state","-context-state",-508732155,null),new cljs.core.Symbol(null,"meta47917","meta47917",-1526790139,null)], null);
}));

(cells.eval_context.t_cells$eval_context47916.cljs$lang$type = true);

(cells.eval_context.t_cells$eval_context47916.cljs$lang$ctorStr = "cells.eval-context/t_cells$eval_context47916");

(cells.eval_context.t_cells$eval_context47916.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cells.eval-context/t_cells$eval_context47916");
}));

/**
 * Positional factory function for cells.eval-context/t_cells$eval_context47916.
 */
cells.eval_context.__GT_t_cells$eval_context47916 = (function cells$eval_context$new_context_$___GT_t_cells$eval_context47916(_context_state__$1,meta47917){
return (new cells.eval_context.t_cells$eval_context47916(_context_state__$1,meta47917));
});

}

return (new cells.eval_context.t_cells$eval_context47916(_context_state,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=cells.eval_context.js.map
