goog.provide('cells.eval_context');

/**
 * Cells are designed to be used within interactive interfaces where users re-evaluate
 * code frequently. Implement the IDispose protocol on an editor context to control the
 *  'disposal' of side-effects like intervals when code is (re)-evaluated.
 * @interface
 */
cells.eval_context.IDispose = function(){};

var cells$eval_context$IDispose$on_dispose$dyn_43332 = (function (context,f){
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
return cells$eval_context$IDispose$on_dispose$dyn_43332(context,f);
}
});

var cells$eval_context$IDispose$_dispose_BANG_$dyn_43337 = (function (context){
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
return cells$eval_context$IDispose$_dispose_BANG_$dyn_43337(context);
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

var cells$eval_context$IHandleError$handle_error$dyn_43342 = (function (this$,e){
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
return cells$eval_context$IHandleError$handle_error$dyn_43342(this$,e);
}
});

cells.eval_context.new_context = (function cells$eval_context$new_context(){
var _context_state = cljs.core.volatile_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.PersistentHashSet.EMPTY], null));
if((typeof cells !== 'undefined') && (typeof cells.eval_context !== 'undefined') && (typeof cells.eval_context.t_cells$eval_context43301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cells.eval_context.IDispose}
 * @implements {cells.eval_context.IHandleError}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cells.eval_context.t_cells$eval_context43301 = (function (_context_state,meta43302){
this._context_state = _context_state;
this.meta43302 = meta43302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cells.eval_context.t_cells$eval_context43301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43303,meta43302__$1){
var self__ = this;
var _43303__$1 = this;
return (new cells.eval_context.t_cells$eval_context43301(self__._context_state,meta43302__$1));
}));

(cells.eval_context.t_cells$eval_context43301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43303){
var self__ = this;
var _43303__$1 = this;
return self__.meta43302;
}));

(cells.eval_context.t_cells$eval_context43301.prototype.cells$eval_context$IDispose$ = cljs.core.PROTOCOL_SENTINEL);

(cells.eval_context.t_cells$eval_context43301.prototype.cells$eval_context$IDispose$on_dispose$arity$2 = (function (context,f){
var self__ = this;
var context__$1 = this;
return cljs.core._vreset_BANG_(self__._context_state,cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core._deref(self__._context_state),new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.conj,f));
}));

(cells.eval_context.t_cells$eval_context43301.prototype.cells$eval_context$IDispose$_dispose_BANG_$arity$1 = (function (context){
var self__ = this;
var context__$1 = this;
var seq__43309_43348 = cljs.core.seq(new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__._context_state)));
var chunk__43310_43349 = null;
var count__43311_43350 = (0);
var i__43312_43351 = (0);
while(true){
if((i__43312_43351 < count__43311_43350)){
var f_43354 = chunk__43310_43349.cljs$core$IIndexed$_nth$arity$2(null,i__43312_43351);
(f_43354.cljs$core$IFn$_invoke$arity$0 ? f_43354.cljs$core$IFn$_invoke$arity$0() : f_43354.call(null));


var G__43356 = seq__43309_43348;
var G__43357 = chunk__43310_43349;
var G__43358 = count__43311_43350;
var G__43359 = (i__43312_43351 + (1));
seq__43309_43348 = G__43356;
chunk__43310_43349 = G__43357;
count__43311_43350 = G__43358;
i__43312_43351 = G__43359;
continue;
} else {
var temp__5735__auto___43360 = cljs.core.seq(seq__43309_43348);
if(temp__5735__auto___43360){
var seq__43309_43361__$1 = temp__5735__auto___43360;
if(cljs.core.chunked_seq_QMARK_(seq__43309_43361__$1)){
var c__4556__auto___43362 = cljs.core.chunk_first(seq__43309_43361__$1);
var G__43363 = cljs.core.chunk_rest(seq__43309_43361__$1);
var G__43364 = c__4556__auto___43362;
var G__43365 = cljs.core.count(c__4556__auto___43362);
var G__43366 = (0);
seq__43309_43348 = G__43363;
chunk__43310_43349 = G__43364;
count__43311_43350 = G__43365;
i__43312_43351 = G__43366;
continue;
} else {
var f_43367 = cljs.core.first(seq__43309_43361__$1);
(f_43367.cljs$core$IFn$_invoke$arity$0 ? f_43367.cljs$core$IFn$_invoke$arity$0() : f_43367.call(null));


var G__43368 = cljs.core.next(seq__43309_43361__$1);
var G__43369 = null;
var G__43370 = (0);
var G__43371 = (0);
seq__43309_43348 = G__43368;
chunk__43310_43349 = G__43369;
count__43311_43350 = G__43370;
i__43312_43351 = G__43371;
continue;
}
} else {
}
}
break;
}

return cljs.core._vreset_BANG_(self__._context_state,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__._context_state),new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.empty));
}));

(cells.eval_context.t_cells$eval_context43301.prototype.cells$eval_context$IHandleError$ = cljs.core.PROTOCOL_SENTINEL);

(cells.eval_context.t_cells$eval_context43301.prototype.cells$eval_context$IHandleError$handle_error$arity$2 = (function (this$,e){
var self__ = this;
var this$__$1 = this;
throw e;
}));

(cells.eval_context.t_cells$eval_context43301.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-context-state","-context-state",-508732155,null),new cljs.core.Symbol(null,"meta43302","meta43302",-532493847,null)], null);
}));

(cells.eval_context.t_cells$eval_context43301.cljs$lang$type = true);

(cells.eval_context.t_cells$eval_context43301.cljs$lang$ctorStr = "cells.eval-context/t_cells$eval_context43301");

(cells.eval_context.t_cells$eval_context43301.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cells.eval-context/t_cells$eval_context43301");
}));

/**
 * Positional factory function for cells.eval-context/t_cells$eval_context43301.
 */
cells.eval_context.__GT_t_cells$eval_context43301 = (function cells$eval_context$new_context_$___GT_t_cells$eval_context43301(_context_state__$1,meta43302){
return (new cells.eval_context.t_cells$eval_context43301(_context_state__$1,meta43302));
});

}

return (new cells.eval_context.t_cells$eval_context43301(_context_state,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=cells.eval_context.js.map
