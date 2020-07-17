goog.provide('cells.cell');
cells.cell._STAR_cell_stack_STAR_ = cljs.core.List.EMPTY;
cells.cell._STAR_computing_dependents_STAR_ = false;
cells.cell._STAR_debug_STAR_ = false;
if((typeof cells !== 'undefined') && (typeof cells.cell !== 'undefined') && (typeof cells.cell._cells !== 'undefined')){
} else {
cells.cell._cells = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
cells.cell.log = (function cells$cell$log(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48534 = arguments.length;
var i__4737__auto___48535 = (0);
while(true){
if((i__4737__auto___48535 < len__4736__auto___48534)){
args__4742__auto__.push((arguments[i__4737__auto___48535]));

var G__48536 = (i__4737__auto___48535 + (1));
i__4737__auto___48535 = G__48536;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cells.cell.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.truth_(cells.cell._STAR_debug_STAR_)){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0));
} else {
return null;
}
}));

(cells.cell.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cells.cell.log.cljs$lang$applyTo = (function (seq48017){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48017));
}));


/**
 * Protocol for getting and putting cell values.
 *   This allows an interactive environment to control how cell values are persisted,
 *   and to facilitate reactivity.
 * @interface
 */
cells.cell.ICellStore = function(){};

var cells$cell$ICellStore$put_value_BANG_$dyn_48549 = (function (this$,value){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell.put_value_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4429__auto__.call(null,this$,value));
} else {
var m__4426__auto__ = (cells.cell.put_value_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__4426__auto__.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("ICellStore.put-value!",this$);
}
}
});
cells.cell.put_value_BANG_ = (function cells$cell$put_value_BANG_(this$,value){
if((((!((this$ == null)))) && ((!((this$.cells$cell$ICellStore$put_value_BANG_$arity$2 == null)))))){
return this$.cells$cell$ICellStore$put_value_BANG_$arity$2(this$,value);
} else {
return cells$cell$ICellStore$put_value_BANG_$dyn_48549(this$,value);
}
});

var cells$cell$ICellStore$get_value$dyn_48552 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell.get_value[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cells.cell.get_value["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICellStore.get-value",this$);
}
}
});
cells.cell.get_value = (function cells$cell$get_value(this$){
if((((!((this$ == null)))) && ((!((this$.cells$cell$ICellStore$get_value$arity$1 == null)))))){
return this$.cells$cell$ICellStore$get_value$arity$1(this$);
} else {
return cells$cell$ICellStore$get_value$dyn_48552(this$);
}
});

var cells$cell$ICellStore$invalidate_BANG_$dyn_48557 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell.invalidate_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cells.cell.invalidate_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICellStore.invalidate!",this$);
}
}
});
cells.cell.invalidate_BANG_ = (function cells$cell$invalidate_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.cells$cell$ICellStore$invalidate_BANG_$arity$1 == null)))))){
return this$.cells$cell$ICellStore$invalidate_BANG_$arity$1(this$);
} else {
return cells$cell$ICellStore$invalidate_BANG_$dyn_48557(this$);
}
});


/**
 * Cell views are attached as metadata & allow multiple (different) views on identical cells.
 * @interface
 */
cells.cell.ICellView = function(){};

var cells$cell$ICellView$view$dyn_48565 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell.view[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cells.cell.view["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ICellView.view",this$);
}
}
});
cells.cell.view = (function cells$cell$view(this$){
if((((!((this$ == null)))) && ((!((this$.cells$cell$ICellView$view$arity$1 == null)))))){
return this$.cells$cell$ICellView$view$arity$1(this$);
} else {
return cells$cell$ICellView$view$dyn_48565(this$);
}
});

var cells$cell$ICellView$with_view$dyn_48571 = (function (this$,view_fn){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell.with_view[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,view_fn) : m__4429__auto__.call(null,this$,view_fn));
} else {
var m__4426__auto__ = (cells.cell.with_view["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,view_fn) : m__4426__auto__.call(null,this$,view_fn));
} else {
throw cljs.core.missing_protocol("ICellView.with-view",this$);
}
}
});
/**
 * Wraps a cell with a view
 */
cells.cell.with_view = (function cells$cell$with_view(this$,view_fn){
if((((!((this$ == null)))) && ((!((this$.cells$cell$ICellView$with_view$arity$2 == null)))))){
return this$.cells$cell$ICellView$with_view$arity$2(this$,view_fn);
} else {
return cells$cell$ICellView$with_view$dyn_48571(this$,view_fn);
}
});


/**
 * Protocol for
 * @interface
 */
cells.cell.IRenderHiccup = function(){};

var cells$cell$IRenderHiccup$render_hiccup$dyn_48576 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell.render_hiccup[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cells.cell.render_hiccup["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderHiccup.render-hiccup",this$);
}
}
});
cells.cell.render_hiccup = (function cells$cell$render_hiccup(this$){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IRenderHiccup$render_hiccup$arity$1 == null)))))){
return this$.cells$cell$IRenderHiccup$render_hiccup$arity$1(this$);
} else {
return cells$cell$IRenderHiccup$render_hiccup$dyn_48576(this$);
}
});


/**
 * @interface
 */
cells.cell.ISet_BANG_ = function(){};

var cells$cell$ISet_BANG_$_set_BANG_$dyn_48577 = (function (this$,newval){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell._set_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,newval) : m__4429__auto__.call(null,this$,newval));
} else {
var m__4426__auto__ = (cells.cell._set_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,newval) : m__4426__auto__.call(null,this$,newval));
} else {
throw cljs.core.missing_protocol("ISet!.-set!",this$);
}
}
});
/**
 * Set cell value without notifying dependent cells.
 */
cells.cell._set_BANG_ = (function cells$cell$_set_BANG_(this$,newval){
if((((!((this$ == null)))) && ((!((this$.cells$cell$ISet_BANG_$_set_BANG_$arity$2 == null)))))){
return this$.cells$cell$ISet_BANG_$_set_BANG_$arity$2(this$,newval);
} else {
return cells$cell$ISet_BANG_$_set_BANG_$dyn_48577(this$,newval);
}
});

/**
 * Accepts a cell or its name, and returns its name.
 */
cells.cell.cell_name = (function cells$cell$cell_name(cell){
var G__48088 = cell;
if((!((cell instanceof cljs.core.Keyword)))){
return cljs.core.name(G__48088);
} else {
return G__48088;
}
});
if((typeof cells !== 'undefined') && (typeof cells.cell !== 'undefined') && (typeof cells.cell.dep_graph !== 'undefined')){
} else {
cells.cell.dep_graph = cljs.core.volatile_BANG_(com.stuartsierra.dependency.graph());
}
cells.cell.dependencies = (function cells$cell$dependencies(cell){
return com.stuartsierra.dependency.immediate_dependencies(cljs.core.deref(cells.cell.dep_graph),cells.cell.cell_name(cell));
});
cells.cell.dependents = (function cells$cell$dependents(cell){
return com.stuartsierra.dependency.immediate_dependents(cljs.core.deref(cells.cell.dep_graph),cells.cell.cell_name(cell));
});
cells.cell.remove_node = (function cells$cell$remove_node(cell){
return cells.cell.dep_graph.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,com.stuartsierra.dependency.remove_node(cells.cell.dep_graph.cljs$core$IDeref$_deref$arity$1(null),cells.cell.cell_name(cell)));
});
cells.cell.remove_edge = (function cells$cell$remove_edge(cell,other_cell){
return cells.cell.dep_graph.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,com.stuartsierra.dependency.remove_edge(cells.cell.dep_graph.cljs$core$IDeref$_deref$arity$1(null),cells.cell.cell_name(cell),cells.cell.cell_name(other_cell)));
});
cells.cell.remove_all = (function cells$cell$remove_all(cell){
return cells.cell.dep_graph.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,com.stuartsierra.dependency.remove_all(cells.cell.dep_graph.cljs$core$IDeref$_deref$arity$1(null),cells.cell.cell_name(cell)));
});
cells.cell.depend = (function cells$cell$depend(cell,other_cell){
return cells.cell.dep_graph.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,com.stuartsierra.dependency.depend(cells.cell.dep_graph.cljs$core$IDeref$_deref$arity$1(null),cells.cell.cell_name(cell),cells.cell.cell_name(other_cell)));
});
cells.cell.transitive_dependents = (function cells$cell$transitive_dependents(cell){
return com.stuartsierra.dependency.transitive_dependents(cljs.core.deref(cells.cell.dep_graph),cells.cell.cell_name(cell));
});
cells.cell.topo_sort = (function cells$cell$topo_sort(cells__$1){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(com.stuartsierra.dependency.topo_comparator(cljs.core.deref(cells.cell.dep_graph)),cells__$1);
});
cells.cell.transitive_dependents_sorted = (function cells$cell$transitive_dependents_sorted(cell){
return cells.cell.topo_sort(cells.cell.transitive_dependents(cell));
});
cells.cell._STAR_eval_context_STAR_ = cells.eval_context.new_context();

/**
 * @interface
 */
cells.cell.IReactiveCompute = function(){};

var cells$cell$IReactiveCompute$_set_function_BANG_$dyn_48611 = (function (this$,f){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell._set_function_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4429__auto__.call(null,this$,f));
} else {
var m__4426__auto__ = (cells.cell._set_function_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4426__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IReactiveCompute.-set-function!",this$);
}
}
});
cells.cell._set_function_BANG_ = (function cells$cell$_set_function_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IReactiveCompute$_set_function_BANG_$arity$2 == null)))))){
return this$.cells$cell$IReactiveCompute$_set_function_BANG_$arity$2(this$,f);
} else {
return cells$cell$IReactiveCompute$_set_function_BANG_$dyn_48611(this$,f);
}
});

var cells$cell$IReactiveCompute$_compute$dyn_48617 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell._compute[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cells.cell._compute["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReactiveCompute.-compute",this$);
}
}
});
/**
 * evaluate cell
 */
cells.cell._compute = (function cells$cell$_compute(this$){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IReactiveCompute$_compute$arity$1 == null)))))){
return this$.cells$cell$IReactiveCompute$_compute$arity$1(this$);
} else {
return cells$cell$IReactiveCompute$_compute$dyn_48617(this$);
}
});

var cells$cell$IReactiveCompute$_compute_dependents_BANG_$dyn_48709 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell._compute_dependents_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cells.cell._compute_dependents_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReactiveCompute.-compute-dependents!",this$);
}
}
});
cells.cell._compute_dependents_BANG_ = (function cells$cell$_compute_dependents_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IReactiveCompute$_compute_dependents_BANG_$arity$1 == null)))))){
return this$.cells$cell$IReactiveCompute$_compute_dependents_BANG_$arity$1(this$);
} else {
return cells$cell$IReactiveCompute$_compute_dependents_BANG_$dyn_48709(this$);
}
});

var cells$cell$IReactiveCompute$_compute_BANG_$dyn_48715 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell._compute_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cells.cell._compute_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReactiveCompute.-compute!",this$);
}
}
});
/**
 * evaluate cell and set value
 */
cells.cell._compute_BANG_ = (function cells$cell$_compute_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IReactiveCompute$_compute_BANG_$arity$1 == null)))))){
return this$.cells$cell$IReactiveCompute$_compute_BANG_$arity$1(this$);
} else {
return cells$cell$IReactiveCompute$_compute_BANG_$dyn_48715(this$);
}
});

var cells$cell$IReactiveCompute$_compute_with_dependents_BANG_$dyn_48719 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell._compute_with_dependents_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cells.cell._compute_with_dependents_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IReactiveCompute.-compute-with-dependents!",this$);
}
}
});
/**
 * evaluate cell and flow updates to dependent cells
 */
cells.cell._compute_with_dependents_BANG_ = (function cells$cell$_compute_with_dependents_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IReactiveCompute$_compute_with_dependents_BANG_$arity$1 == null)))))){
return this$.cells$cell$IReactiveCompute$_compute_with_dependents_BANG_$arity$1(this$);
} else {
return cells$cell$IReactiveCompute$_compute_with_dependents_BANG_$dyn_48719(this$);
}
});

cells.cell._STAR_allow_deref_while_loading_QMARK__STAR_ = true;

/**
 * Experimental: protocol to store 'status' information on a cell.
 *   Differs from metadata, in that mutations to the status of a cell
 *   propagate to all copies.
 * @interface
 */
cells.cell.IStatus = function(){};

var cells$cell$IStatus$status_BANG_$dyn_48727 = (function() {
var G__48728 = null;
var G__48728__1 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell.status_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cells.cell.status_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStatus.status!",this$);
}
}
});
var G__48728__2 = (function (this$,status){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell.status_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,status) : m__4429__auto__.call(null,this$,status));
} else {
var m__4426__auto__ = (cells.cell.status_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,status) : m__4426__auto__.call(null,this$,status));
} else {
throw cljs.core.missing_protocol("IStatus.status!",this$);
}
}
});
var G__48728__3 = (function (this$,status,message){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell.status_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,status,message) : m__4429__auto__.call(null,this$,status,message));
} else {
var m__4426__auto__ = (cells.cell.status_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,status,message) : m__4426__auto__.call(null,this$,status,message));
} else {
throw cljs.core.missing_protocol("IStatus.status!",this$);
}
}
});
G__48728 = function(this$,status,message){
switch(arguments.length){
case 1:
return G__48728__1.call(this,this$);
case 2:
return G__48728__2.call(this,this$,status);
case 3:
return G__48728__3.call(this,this$,status,message);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48728.cljs$core$IFn$_invoke$arity$1 = G__48728__1;
G__48728.cljs$core$IFn$_invoke$arity$2 = G__48728__2;
G__48728.cljs$core$IFn$_invoke$arity$3 = G__48728__3;
return G__48728;
})()
;
/**
 * Set loading status
 */
cells.cell.status_BANG_ = (function cells$cell$status_BANG_(var_args){
var G__48176 = arguments.length;
switch (G__48176) {
case 1:
return cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IStatus$status_BANG_$arity$1 == null)))))){
return this$.cells$cell$IStatus$status_BANG_$arity$1(this$);
} else {
return cells$cell$IStatus$status_BANG_$dyn_48727(this$);
}
}));

(cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,status){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IStatus$status_BANG_$arity$2 == null)))))){
return this$.cells$cell$IStatus$status_BANG_$arity$2(this$,status);
} else {
return cells$cell$IStatus$status_BANG_$dyn_48727(this$,status);
}
}));

(cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,status,message){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IStatus$status_BANG_$arity$3 == null)))))){
return this$.cells$cell$IStatus$status_BANG_$arity$3(this$,status,message);
} else {
return cells$cell$IStatus$status_BANG_$dyn_48727(this$,status,message);
}
}));

(cells.cell.status_BANG_.cljs$lang$maxFixedArity = 3);


var cells$cell$IStatus$status$dyn_48747 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell.status[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cells.cell.status["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStatus.status",this$);
}
}
});
cells.cell.status = (function cells$cell$status(this$){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IStatus$status$arity$1 == null)))))){
return this$.cells$cell$IStatus$status$arity$1(this$);
} else {
return cells$cell$IStatus$status$dyn_48747(this$);
}
});

var cells$cell$IStatus$message$dyn_48752 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell.message[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cells.cell.message["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStatus.message",this$);
}
}
});
/**
 * Read message associated with async state
 */
cells.cell.message = (function cells$cell$message(this$){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IStatus$message$arity$1 == null)))))){
return this$.cells$cell$IStatus$message$arity$1(this$);
} else {
return cells$cell$IStatus$message$dyn_48752(this$);
}
});

var cells$cell$IStatus$error_QMARK_$dyn_48760 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell.error_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cells.cell.error_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStatus.error?",this$);
}
}
});
cells.cell.error_QMARK_ = (function cells$cell$error_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IStatus$error_QMARK_$arity$1 == null)))))){
return this$.cells$cell$IStatus$error_QMARK_$arity$1(this$);
} else {
return cells$cell$IStatus$error_QMARK_$dyn_48760(this$);
}
});

var cells$cell$IStatus$loading_QMARK_$dyn_48763 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (cells.cell.loading_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (cells.cell.loading_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IStatus.loading?",this$);
}
}
});
cells.cell.loading_QMARK_ = (function cells$cell$loading_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IStatus$loading_QMARK_$arity$1 == null)))))){
return this$.cells$cell$IStatus$loading_QMARK_$arity$1(this$);
} else {
return cells$cell$IStatus$loading_QMARK_$dyn_48763(this$);
}
});

/**
 * Experimental: cells that implement IStatus can 'show' themselves differently depending on status.
 */
cells.cell.status_view = (function cells$cell$status_view(this$){
return cells.cell.render_hiccup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".cell-status",".cell-status",-923817673),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48201 = cells.cell.status(this$);
var G__48201__$1 = (((G__48201 instanceof cljs.core.Keyword))?G__48201.fqn:null);
switch (G__48201__$1) {
case "loading":
return new cljs.core.Keyword(null,".circle-loading",".circle-loading",1989425347);

break;
case "error":
return new cljs.core.Keyword(null,".circle-error",".circle-error",1037940815);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48201__$1)].join('')));

}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null)], null));
});
cells.cell.default_view = (function cells$cell$default_view(self){
if(cljs.core.truth_(cells.cell.status(self))){
return cells.cell.status_view(self);
} else {
return cljs.core.deref(self);
}
});
/**
 * Dynamic var to track dependencies of a cell while its function is evaluated.
 */
cells.cell._STAR_read_log_STAR_ = null;

/**
* @constructor
 * @implements {cells.cell.IStatus}
 * @implements {cljs.core.IWatchable}
 * @implements {cells.eval_context.IDispose}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.INamed}
 * @implements {cells.cell.ICellView}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cells.cell.IReactiveCompute}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cells.cell.ICellStore}
 * @implements {cells.cell.ISet_BANG_}
*/
cells.cell.Cell = (function (id,f,state,eval_context,__meta){
this.id = id;
this.f = f;
this.state = state;
this.eval_context = eval_context;
this.__meta = __meta;
this.cljs$lang$protocol_mask$partition0$ = 2156298240;
this.cljs$lang$protocol_mask$partition1$ = 110594;
});
(cells.cell.Cell.prototype.cells$cell$IStatus$ = cljs.core.PROTOCOL_SENTINEL);

(cells.cell.Cell.prototype.cells$cell$IStatus$status_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.cells$cell$IStatus$status_BANG_$arity$3(null,null,null);
}));

(cells.cell.Cell.prototype.cells$cell$IStatus$status_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return this$__$1.cells$cell$IStatus$status_BANG_$arity$3(null,value,null);
}));

(cells.cell.Cell.prototype.cells$cell$IStatus$status_BANG_$arity$3 = (function (this$,value,message){
var self__ = this;
var this$__$1 = this;
(self__.state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.state,new cljs.core.Keyword("cell.status","status","cell.status/status",577963505),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cell.status","message","cell.status/message",-2043079232),message], 0)));

this$__$1.cells$cell$ICellStore$invalidate_BANG_$arity$1(null);

return this$__$1.cells$cell$IReactiveCompute$_compute_dependents_BANG_$arity$1(null);
}));

(cells.cell.Cell.prototype.cells$cell$IStatus$status$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.deref(this$__$1);

return new cljs.core.Keyword("cell.status","status","cell.status/status",577963505).cljs$core$IFn$_invoke$arity$1(self__.state);
}));

(cells.cell.Cell.prototype.cells$cell$IStatus$message$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.deref(this$__$1);

return new cljs.core.Keyword("cell.status","message","cell.status/message",-2043079232).cljs$core$IFn$_invoke$arity$1(self__.state);
}));

(cells.cell.Cell.prototype.cells$cell$IStatus$loading_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"loading","loading",-737050189),this$__$1.cells$cell$IStatus$status$arity$1(null));
}));

(cells.cell.Cell.prototype.cells$cell$IStatus$error_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),this$__$1.cells$cell$IStatus$status$arity$1(null));
}));

(cells.cell.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["cell#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id)].join('')], 0));
}));

(cells.cell.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.__meta;
}));

(cells.cell.Cell.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__48234 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(self__.id),cells.util.unique_id());
var G__48235 = self__.f;
var G__48236 = self__.state;
return (cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$3 ? cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$3(G__48234,G__48235,G__48236) : cells.cell.cell_STAR_.call(null,G__48234,G__48235,G__48236));
}));

(cells.cell.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cells.cell","-reset!","cells.cell/-reset!",-102834125),this$__$1,newval], 0));

var oldval_48787 = cljs.core.deref(this$__$1);
this$__$1.cells$cell$ISet_BANG_$_set_BANG_$arity$2(null,newval);

this$__$1.cljs$core$IWatchable$_notify_watches$arity$3(null,oldval_48787,newval);

this$__$1.cells$cell$IReactiveCompute$_compute_dependents_BANG_$arity$1(null);

return newval;
}));

(cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48254 = cljs.core.deref(this$__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__48254) : f__$1.call(null,G__48254));
})());
}));

(cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f__$1,a){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48256 = cljs.core.deref(this$__$1);
var G__48257 = a;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__48256,G__48257) : f__$1.call(null,G__48256,G__48257));
})());
}));

(cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f__$1,a,b){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__48258 = cljs.core.deref(this$__$1);
var G__48259 = a;
var G__48260 = b;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__48258,G__48259,G__48260) : f__$1.call(null,G__48258,G__48259,G__48260));
})());
}));

(cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f__$1,a,b,xs){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,cljs.core.deref(this$__$1),a,b,xs));
}));

(cells.cell.Cell.prototype.cljs$core$INamed$_name$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(cells.cell.Cell.prototype.cells$cell$ICellView$ = cljs.core.PROTOCOL_SENTINEL);

(cells.cell.Cell.prototype.cells$cell$ICellView$view$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var fexpr__48280 = (function (){var or__4126__auto__ = new cljs.core.Keyword("cells.cell","view","cells.cell/view",770075107).cljs$core$IFn$_invoke$arity$1(self__.__meta);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cells.cell.default_view;
}
})();
return (fexpr__48280.cljs$core$IFn$_invoke$arity$1 ? fexpr__48280.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__48280.call(null,this$__$1));
}));

(cells.cell.Cell.prototype.cells$cell$ICellView$with_view$arity$2 = (function (this$,view_fn){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(this$__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(this$__$1),new cljs.core.Keyword("cells.cell","view","cells.cell/view",770075107),view_fn));
}));

(cells.cell.Cell.prototype.cells$cell$IReactiveCompute$ = cljs.core.PROTOCOL_SENTINEL);

(cells.cell.Cell.prototype.cells$cell$IReactiveCompute$_compute_dependents_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cells.cell._STAR_computing_dependents_STAR_)){
return null;
} else {
var _STAR_computing_dependents_STAR__orig_val__48284 = cells.cell._STAR_computing_dependents_STAR_;
var _STAR_computing_dependents_STAR__temp_val__48285 = true;
(cells.cell._STAR_computing_dependents_STAR_ = _STAR_computing_dependents_STAR__temp_val__48285);

try{var deps = cells.cell.transitive_dependents_sorted(this$__$1);
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-compute-dependents!","-compute-dependents!",283544650),this$__$1,deps], 0));

var seq__48286 = cljs.core.seq(deps);
var chunk__48287 = null;
var count__48288 = (0);
var i__48289 = (0);
while(true){
if((i__48289 < count__48288)){
var cell_id = chunk__48287.cljs$core$IIndexed$_nth$arity$2(null,i__48289);
var G__48312_48797 = (function (){var fexpr__48313 = cljs.core.deref(cells.cell._cells);
return (fexpr__48313.cljs$core$IFn$_invoke$arity$1 ? fexpr__48313.cljs$core$IFn$_invoke$arity$1(cell_id) : fexpr__48313.call(null,cell_id));
})();
if((G__48312_48797 == null)){
} else {
cells.cell._compute_with_dependents_BANG_(G__48312_48797);
}


var G__48798 = seq__48286;
var G__48799 = chunk__48287;
var G__48800 = count__48288;
var G__48801 = (i__48289 + (1));
seq__48286 = G__48798;
chunk__48287 = G__48799;
count__48288 = G__48800;
i__48289 = G__48801;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48286);
if(temp__5735__auto__){
var seq__48286__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48286__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48286__$1);
var G__48802 = cljs.core.chunk_rest(seq__48286__$1);
var G__48803 = c__4556__auto__;
var G__48804 = cljs.core.count(c__4556__auto__);
var G__48805 = (0);
seq__48286 = G__48802;
chunk__48287 = G__48803;
count__48288 = G__48804;
i__48289 = G__48805;
continue;
} else {
var cell_id = cljs.core.first(seq__48286__$1);
var G__48318_48806 = (function (){var fexpr__48326 = cljs.core.deref(cells.cell._cells);
return (fexpr__48326.cljs$core$IFn$_invoke$arity$1 ? fexpr__48326.cljs$core$IFn$_invoke$arity$1(cell_id) : fexpr__48326.call(null,cell_id));
})();
if((G__48318_48806 == null)){
} else {
cells.cell._compute_with_dependents_BANG_(G__48318_48806);
}


var G__48808 = cljs.core.next(seq__48286__$1);
var G__48809 = null;
var G__48810 = (0);
var G__48811 = (0);
seq__48286 = G__48808;
chunk__48287 = G__48809;
count__48288 = G__48810;
i__48289 = G__48811;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(cells.cell._STAR_computing_dependents_STAR_ = _STAR_computing_dependents_STAR__orig_val__48284);
}}
}));

(cells.cell.Cell.prototype.cells$cell$IReactiveCompute$_set_function_BANG_$arity$2 = (function (this$,newf){
var self__ = this;
var this$__$1 = this;
return (self__.f = newf);
}));

(cells.cell.Cell.prototype.cells$cell$IReactiveCompute$_compute$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var _STAR_cell_stack_STAR__orig_val__48328 = cells.cell._STAR_cell_stack_STAR_;
var _STAR_eval_context_STAR__orig_val__48329 = cells.cell._STAR_eval_context_STAR_;
var _STAR_cell_stack_STAR__temp_val__48330 = cljs.core.cons(this$__$1,cells.cell._STAR_cell_stack_STAR_);
var _STAR_eval_context_STAR__temp_val__48331 = self__.eval_context;
(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__temp_val__48330);

(cells.cell._STAR_eval_context_STAR_ = _STAR_eval_context_STAR__temp_val__48331);

try{try{return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(this$__$1) : self__.f.call(null,this$__$1));
}catch (e48352){if((e48352 instanceof Error)){
var e = e48352;
cells.eval_context.dispose_BANG_(this$__$1);

throw e;
} else {
throw e48352;

}
}}finally {(cells.cell._STAR_eval_context_STAR_ = _STAR_eval_context_STAR__orig_val__48329);

(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__orig_val__48328);
}}));

(cells.cell.Cell.prototype.cells$cell$IReactiveCompute$_compute_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,this$__$1.cells$cell$IReactiveCompute$_compute$arity$1(null));
}));

(cells.cell.Cell.prototype.cells$cell$IReactiveCompute$_compute_with_dependents_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.first(cells.cell._STAR_cell_stack_STAR_))){
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cells.cell","-compute-with-dependents!","cells.cell/-compute-with-dependents!",297438736),this$__$1,"Return - in current cell"], 0));
} else {
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cells.cell","-compute-with-dependents!","cells.cell/-compute-with-dependents!",297438736),this$__$1], 0));

cells.eval_context.dispose_BANG_(this$__$1);

var _STAR_read_log_STAR__orig_val__48353_48818 = cells.cell._STAR_read_log_STAR_;
var _STAR_read_log_STAR__temp_val__48354_48819 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(cells.cell._STAR_read_log_STAR_ = _STAR_read_log_STAR__temp_val__48354_48819);

try{var value_48821 = this$__$1.cells$cell$IReactiveCompute$_compute$arity$1(null);
var next_dependencies_48822 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cells.cell._STAR_read_log_STAR_),cljs.core.name(this$__$1));
var prev_dependencies_48823 = cells.cell.dependencies(this$__$1);
var seq__48355_48825 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(next_dependencies_48822,prev_dependencies_48823));
var chunk__48356_48826 = null;
var count__48357_48827 = (0);
var i__48358_48828 = (0);
while(true){
if((i__48358_48828 < count__48357_48827)){
var added_48830 = chunk__48356_48826.cljs$core$IIndexed$_nth$arity$2(null,i__48358_48828);
cells.cell.depend(this$__$1,added_48830);


var G__48831 = seq__48355_48825;
var G__48832 = chunk__48356_48826;
var G__48833 = count__48357_48827;
var G__48834 = (i__48358_48828 + (1));
seq__48355_48825 = G__48831;
chunk__48356_48826 = G__48832;
count__48357_48827 = G__48833;
i__48358_48828 = G__48834;
continue;
} else {
var temp__5735__auto___48835 = cljs.core.seq(seq__48355_48825);
if(temp__5735__auto___48835){
var seq__48355_48836__$1 = temp__5735__auto___48835;
if(cljs.core.chunked_seq_QMARK_(seq__48355_48836__$1)){
var c__4556__auto___48837 = cljs.core.chunk_first(seq__48355_48836__$1);
var G__48838 = cljs.core.chunk_rest(seq__48355_48836__$1);
var G__48839 = c__4556__auto___48837;
var G__48840 = cljs.core.count(c__4556__auto___48837);
var G__48841 = (0);
seq__48355_48825 = G__48838;
chunk__48356_48826 = G__48839;
count__48357_48827 = G__48840;
i__48358_48828 = G__48841;
continue;
} else {
var added_48843 = cljs.core.first(seq__48355_48836__$1);
cells.cell.depend(this$__$1,added_48843);


var G__48844 = cljs.core.next(seq__48355_48836__$1);
var G__48845 = null;
var G__48846 = (0);
var G__48847 = (0);
seq__48355_48825 = G__48844;
chunk__48356_48826 = G__48845;
count__48357_48827 = G__48846;
i__48358_48828 = G__48847;
continue;
}
} else {
}
}
break;
}

var seq__48377_48848 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_dependencies_48823,next_dependencies_48822));
var chunk__48378_48849 = null;
var count__48379_48850 = (0);
var i__48380_48851 = (0);
while(true){
if((i__48380_48851 < count__48379_48850)){
var removed_48852 = chunk__48378_48849.cljs$core$IIndexed$_nth$arity$2(null,i__48380_48851);
cells.cell.remove_edge(this$__$1,removed_48852);


var G__48853 = seq__48377_48848;
var G__48854 = chunk__48378_48849;
var G__48855 = count__48379_48850;
var G__48856 = (i__48380_48851 + (1));
seq__48377_48848 = G__48853;
chunk__48378_48849 = G__48854;
count__48379_48850 = G__48855;
i__48380_48851 = G__48856;
continue;
} else {
var temp__5735__auto___48857 = cljs.core.seq(seq__48377_48848);
if(temp__5735__auto___48857){
var seq__48377_48858__$1 = temp__5735__auto___48857;
if(cljs.core.chunked_seq_QMARK_(seq__48377_48858__$1)){
var c__4556__auto___48859 = cljs.core.chunk_first(seq__48377_48858__$1);
var G__48860 = cljs.core.chunk_rest(seq__48377_48858__$1);
var G__48861 = c__4556__auto___48859;
var G__48862 = cljs.core.count(c__4556__auto___48859);
var G__48863 = (0);
seq__48377_48848 = G__48860;
chunk__48378_48849 = G__48861;
count__48379_48850 = G__48862;
i__48380_48851 = G__48863;
continue;
} else {
var removed_48865 = cljs.core.first(seq__48377_48858__$1);
cells.cell.remove_edge(this$__$1,removed_48865);


var G__48868 = cljs.core.next(seq__48377_48858__$1);
var G__48869 = null;
var G__48870 = (0);
var G__48871 = (0);
seq__48377_48848 = G__48868;
chunk__48378_48849 = G__48869;
count__48379_48850 = G__48870;
i__48380_48851 = G__48871;
continue;
}
} else {
}
}
break;
}

this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,value_48821);
}finally {(cells.cell._STAR_read_log_STAR_ = _STAR_read_log_STAR__orig_val__48353_48818);
}}

return this$__$1;
}));

(cells.cell.Cell.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (function cells$cell$cell_seq(this$__$2){
return cljs.core.cons(cljs.core.deref(this$__$2),(new cljs.core.LazySeq(null,(function (){
return cells$cell$cell_seq(cells.cell._compute_with_dependents_BANG_(this$__$2));
}),null,null)));
})(cljs.core.clone(this$__$1));
}));

(cells.cell.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
var seq__48401 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"watches","watches",-273097535).cljs$core$IFn$_invoke$arity$1(self__.state)));
var chunk__48402 = null;
var count__48403 = (0);
var i__48404 = (0);
while(true){
if((i__48404 < count__48403)){
var f__$1 = chunk__48402.cljs$core$IIndexed$_nth$arity$2(null,i__48404);
(f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : f__$1.call(null,this$__$1,oldval,newval));


var G__48928 = seq__48401;
var G__48929 = chunk__48402;
var G__48930 = count__48403;
var G__48931 = (i__48404 + (1));
seq__48401 = G__48928;
chunk__48402 = G__48929;
count__48403 = G__48930;
i__48404 = G__48931;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48401);
if(temp__5735__auto__){
var seq__48401__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48401__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48401__$1);
var G__48932 = cljs.core.chunk_rest(seq__48401__$1);
var G__48933 = c__4556__auto__;
var G__48934 = cljs.core.count(c__4556__auto__);
var G__48935 = (0);
seq__48401 = G__48932;
chunk__48402 = G__48933;
count__48403 = G__48934;
i__48404 = G__48935;
continue;
} else {
var f__$1 = cljs.core.first(seq__48401__$1);
(f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : f__$1.call(null,this$__$1,oldval,newval));


var G__48937 = cljs.core.next(seq__48401__$1);
var G__48938 = null;
var G__48939 = (0);
var G__48940 = (0);
seq__48401 = G__48937;
chunk__48402 = G__48938;
count__48403 = G__48939;
i__48404 = G__48940;
continue;
}
} else {
return null;
}
}
break;
}
}));

(cells.cell.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return (self__.state = cljs.core.update.cljs$core$IFn$_invoke$arity$5(self__.state,new cljs.core.Keyword(null,"watches","watches",-273097535),cljs.core.assoc,key,f__$1));
}));

(cells.cell.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.state = cljs.core.update.cljs$core$IFn$_invoke$arity$5(self__.state,new cljs.core.Keyword(null,"watches","watches",-273097535),cljs.core.dissoc,key,self__.f));
}));

(cells.cell.Cell.prototype.cells$cell$ISet_BANG_$ = cljs.core.PROTOCOL_SENTINEL);

(cells.cell.Cell.prototype.cells$cell$ISet_BANG_$_set_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cells.cell","-set-cell!","cells.cell/-set-cell!",-1896447085),this$__$1], 0));

this$__$1.cells$cell$ICellStore$put_value_BANG_$arity$2(null,newval);

return this$__$1;
}));

(cells.cell.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,new_meta){
var self__ = this;
var this$__$1 = this;
return (new cells.cell.Cell(self__.id,self__.f,self__.state,self__.eval_context,new_meta)).cells$cell$ISet_BANG_$_set_BANG_$arity$2(null,cljs.core.deref(this$__$1));
}));

(cells.cell.Cell.prototype.cells$eval_context$IDispose$ = cljs.core.PROTOCOL_SENTINEL);

(cells.cell.Cell.prototype.cells$eval_context$IDispose$on_dispose$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
return (self__.state = cljs.core.update.cljs$core$IFn$_invoke$arity$4(self__.state,new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.conj,f__$1));
}));

(cells.cell.Cell.prototype.cells$eval_context$IDispose$_dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__48426_48946 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.state,new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251)));
var chunk__48427_48947 = null;
var count__48428_48948 = (0);
var i__48429_48949 = (0);
while(true){
if((i__48429_48949 < count__48428_48948)){
var f_48951__$1 = chunk__48427_48947.cljs$core$IIndexed$_nth$arity$2(null,i__48429_48949);
(f_48951__$1.cljs$core$IFn$_invoke$arity$0 ? f_48951__$1.cljs$core$IFn$_invoke$arity$0() : f_48951__$1.call(null));


var G__48952 = seq__48426_48946;
var G__48953 = chunk__48427_48947;
var G__48954 = count__48428_48948;
var G__48955 = (i__48429_48949 + (1));
seq__48426_48946 = G__48952;
chunk__48427_48947 = G__48953;
count__48428_48948 = G__48954;
i__48429_48949 = G__48955;
continue;
} else {
var temp__5735__auto___48956 = cljs.core.seq(seq__48426_48946);
if(temp__5735__auto___48956){
var seq__48426_48957__$1 = temp__5735__auto___48956;
if(cljs.core.chunked_seq_QMARK_(seq__48426_48957__$1)){
var c__4556__auto___48959 = cljs.core.chunk_first(seq__48426_48957__$1);
var G__48960 = cljs.core.chunk_rest(seq__48426_48957__$1);
var G__48961 = c__4556__auto___48959;
var G__48962 = cljs.core.count(c__4556__auto___48959);
var G__48963 = (0);
seq__48426_48946 = G__48960;
chunk__48427_48947 = G__48961;
count__48428_48948 = G__48962;
i__48429_48949 = G__48963;
continue;
} else {
var f_48964__$1 = cljs.core.first(seq__48426_48957__$1);
(f_48964__$1.cljs$core$IFn$_invoke$arity$0 ? f_48964__$1.cljs$core$IFn$_invoke$arity$0() : f_48964__$1.call(null));


var G__48965 = cljs.core.next(seq__48426_48957__$1);
var G__48966 = null;
var G__48967 = (0);
var G__48968 = (0);
seq__48426_48946 = G__48965;
chunk__48427_48947 = G__48966;
count__48428_48948 = G__48967;
i__48429_48949 = G__48968;
continue;
}
} else {
}
}
break;
}

(self__.state = cljs.core.update.cljs$core$IFn$_invoke$arity$3(self__.state,new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.empty));

return this$__$1;
}));

(cells.cell.Cell.prototype.cells$cell$ICellStore$ = cljs.core.PROTOCOL_SENTINEL);

(cells.cell.Cell.prototype.cells$cell$ICellStore$get_value$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.state);
}));

(cells.cell.Cell.prototype.cells$cell$ICellStore$put_value_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return (self__.state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.state,new cljs.core.Keyword(null,"value","value",305978217),value));
}));

(cells.cell.Cell.prototype.cells$cell$ICellStore$invalidate_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(cells.cell.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cells.cell._STAR_read_log_STAR_)){
cljs.core._vreset_BANG_(cells.cell._STAR_read_log_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cells.cell._STAR_read_log_STAR_),cljs.core.name(this$__$1)));
} else {
}

var G__48435 = this$__$1;
if(cljs.core.truth_((function (){var or__4126__auto__ = cells.cell._STAR_allow_deref_while_loading_QMARK__STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cell.status","status","cell.status/status",577963505).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"loading","loading",-737050189));
}
})())){
return G__48435.cells$cell$ICellStore$get_value$arity$1(null);
} else {
return G__48435;
}
}));

(cells.cell.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),cljs.core.with_meta(new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"eval-context","eval-context",-2118180155,null),new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)], null);
}));

(cells.cell.Cell.cljs$lang$type = true);

(cells.cell.Cell.cljs$lang$ctorStr = "cells.cell/Cell");

(cells.cell.Cell.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cells.cell/Cell");
}));

/**
 * Positional factory function for cells.cell/Cell.
 */
cells.cell.__GT_Cell = (function cells$cell$__GT_Cell(id,f,state,eval_context,__meta){
return (new cells.cell.Cell(id,f,state,eval_context,__meta));
});

cells.cell.purge_cell_BANG_ = (function cells$cell$purge_cell_BANG_(cell){
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cells.cell","purge-cell!","cells.cell/purge-cell!",331370582),cell], 0));

cells.eval_context._dispose_BANG_(cell);

cells.cell._set_BANG_(cell,null);

cells.cell._cells.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cells.cell._cells.cljs$core$IDeref$_deref$arity$1(null),cljs.core.name(cell)));

cells.cell.remove_node(cell);

return cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"purged-cell-dependents","purged-cell-dependents",45516134),cells.cell.dependents(cell)], 0));
});
cells.cell.empty_cell_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-value","initial-value",470619381),null,new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251),cljs.core.PersistentVector.EMPTY], null);
/**
 * Should not be called directly, use `cell` macro or function instead.
 * 
 *   Returns a new cell, or an existing cell if `id` has been seen before.
 *   `f` should be a function that, given the cell's previous value, returns its next value.
 *   `state` is not for public use.
 */
cells.cell.cell_STAR_ = (function cells$cell$cell_STAR_(var_args){
var G__48460 = arguments.length;
switch (G__48460) {
case 1:
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("cells.temp",["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cells.util.unique_id())].join('')),f);
}));

(cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$3(id,f,cljs.core.PersistentArrayMap.EMPTY);
}));

(cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (id,f,state){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cells.cell._cells),id);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var cell = cells.cell.__GT_Cell(id,f,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cells.cell.empty_cell_state,state], 0)),cells.cell._STAR_eval_context_STAR_,cljs.core.PersistentArrayMap.EMPTY);
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cells.cell","cell*","cells.cell/cell*",1591171642),id], 0));

cells.eval_context.on_dispose(cells.cell._STAR_eval_context_STAR_,(function (){
return cells.cell.purge_cell_BANG_(cell);
}));

cells.cell._cells.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cells.cell._cells.cljs$core$IDeref$_deref$arity$1(null),id,cell));

cell.cells$cell$ISet_BANG_$_set_BANG_$arity$2(null,new cljs.core.Keyword(null,"initial-value","initial-value",470619381).cljs$core$IFn$_invoke$arity$1(state));

return cell.cells$cell$IReactiveCompute$_compute_with_dependents_BANG_$arity$1(null);
}
}));

(cells.cell.cell_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Returns a cell, given initial `value` and a `key` which should be unique per cell container.
 */
cells.cell.cell = (function cells$cell$cell(key,value){
var cell_container_id = (function (){var G__48469 = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
if((G__48469 == null)){
return null;
} else {
return cljs.core.name(G__48469);
}
})();
var ns = (cljs.core.truth_(cell_container_id)?cljs.core.namespace(cell_container_id):"cells.temp");
var prefix = (cljs.core.truth_(cell_container_id)?cljs.core.name(cell_container_id):"base");
return cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,["_",prefix,".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')),cljs.core.constantly(value));
});
/**
 * Purges and removes all cells in the provided namespace.
 */
cells.cell.reset_namespace = (function cells$cell$reset_namespace(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var the_cells = cljs.core.filterv((function (p__48470){
var vec__48487 = p__48470;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48487,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48487,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id),ns__$1);
}),cljs.core.deref(cells.cell._cells));
var seq__48492 = cljs.core.seq(cells.cell.topo_sort(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,the_cells)));
var chunk__48493 = null;
var count__48494 = (0);
var i__48495 = (0);
while(true){
if((i__48495 < count__48494)){
var cell = chunk__48493.cljs$core$IIndexed$_nth$arity$2(null,i__48495);
cells.cell.purge_cell_BANG_(cell);

cells.cell.remove_all(cell);


var G__48999 = seq__48492;
var G__49000 = chunk__48493;
var G__49001 = count__48494;
var G__49002 = (i__48495 + (1));
seq__48492 = G__48999;
chunk__48493 = G__49000;
count__48494 = G__49001;
i__48495 = G__49002;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48492);
if(temp__5735__auto__){
var seq__48492__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48492__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48492__$1);
var G__49004 = cljs.core.chunk_rest(seq__48492__$1);
var G__49005 = c__4556__auto__;
var G__49006 = cljs.core.count(c__4556__auto__);
var G__49007 = (0);
seq__48492 = G__49004;
chunk__48493 = G__49005;
count__48494 = G__49006;
i__48495 = G__49007;
continue;
} else {
var cell = cljs.core.first(seq__48492__$1);
cells.cell.purge_cell_BANG_(cell);

cells.cell.remove_all(cell);


var G__49009 = cljs.core.next(seq__48492__$1);
var G__49010 = null;
var G__49011 = (0);
var G__49012 = (0);
seq__48492 = G__49009;
chunk__48493 = G__49010;
count__48494 = G__49011;
i__48495 = G__49012;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=cells.cell.js.map
