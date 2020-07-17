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
var len__4736__auto___44118 = arguments.length;
var i__4737__auto___44119 = (0);
while(true){
if((i__4737__auto___44119 < len__4736__auto___44118)){
args__4742__auto__.push((arguments[i__4737__auto___44119]));

var G__44120 = (i__4737__auto___44119 + (1));
i__4737__auto___44119 = G__44120;
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
(cells.cell.log.cljs$lang$applyTo = (function (seq43510){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43510));
}));


/**
 * Protocol for getting and putting cell values.
 *   This allows an interactive environment to control how cell values are persisted,
 *   and to facilitate reactivity.
 * @interface
 */
cells.cell.ICellStore = function(){};

var cells$cell$ICellStore$put_value_BANG_$dyn_44124 = (function (this$,value){
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
return cells$cell$ICellStore$put_value_BANG_$dyn_44124(this$,value);
}
});

var cells$cell$ICellStore$get_value$dyn_44132 = (function (this$){
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
return cells$cell$ICellStore$get_value$dyn_44132(this$);
}
});

var cells$cell$ICellStore$invalidate_BANG_$dyn_44139 = (function (this$){
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
return cells$cell$ICellStore$invalidate_BANG_$dyn_44139(this$);
}
});


/**
 * Cell views are attached as metadata & allow multiple (different) views on identical cells.
 * @interface
 */
cells.cell.ICellView = function(){};

var cells$cell$ICellView$view$dyn_44151 = (function (this$){
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
return cells$cell$ICellView$view$dyn_44151(this$);
}
});

var cells$cell$ICellView$with_view$dyn_44169 = (function (this$,view_fn){
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
return cells$cell$ICellView$with_view$dyn_44169(this$,view_fn);
}
});


/**
 * Protocol for
 * @interface
 */
cells.cell.IRenderHiccup = function(){};

var cells$cell$IRenderHiccup$render_hiccup$dyn_44179 = (function (this$){
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
return cells$cell$IRenderHiccup$render_hiccup$dyn_44179(this$);
}
});


/**
 * @interface
 */
cells.cell.ISet_BANG_ = function(){};

var cells$cell$ISet_BANG_$_set_BANG_$dyn_44188 = (function (this$,newval){
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
return cells$cell$ISet_BANG_$_set_BANG_$dyn_44188(this$,newval);
}
});

/**
 * Accepts a cell or its name, and returns its name.
 */
cells.cell.cell_name = (function cells$cell$cell_name(cell){
var G__43585 = cell;
if((!((cell instanceof cljs.core.Keyword)))){
return cljs.core.name(G__43585);
} else {
return G__43585;
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

var cells$cell$IReactiveCompute$_set_function_BANG_$dyn_44255 = (function (this$,f){
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
return cells$cell$IReactiveCompute$_set_function_BANG_$dyn_44255(this$,f);
}
});

var cells$cell$IReactiveCompute$_compute$dyn_44259 = (function (this$){
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
return cells$cell$IReactiveCompute$_compute$dyn_44259(this$);
}
});

var cells$cell$IReactiveCompute$_compute_dependents_BANG_$dyn_44260 = (function (this$){
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
return cells$cell$IReactiveCompute$_compute_dependents_BANG_$dyn_44260(this$);
}
});

var cells$cell$IReactiveCompute$_compute_BANG_$dyn_44264 = (function (this$){
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
return cells$cell$IReactiveCompute$_compute_BANG_$dyn_44264(this$);
}
});

var cells$cell$IReactiveCompute$_compute_with_dependents_BANG_$dyn_44273 = (function (this$){
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
return cells$cell$IReactiveCompute$_compute_with_dependents_BANG_$dyn_44273(this$);
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

var cells$cell$IStatus$status_BANG_$dyn_44298 = (function() {
var G__44299 = null;
var G__44299__1 = (function (this$){
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
var G__44299__2 = (function (this$,status){
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
var G__44299__3 = (function (this$,status,message){
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
G__44299 = function(this$,status,message){
switch(arguments.length){
case 1:
return G__44299__1.call(this,this$);
case 2:
return G__44299__2.call(this,this$,status);
case 3:
return G__44299__3.call(this,this$,status,message);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44299.cljs$core$IFn$_invoke$arity$1 = G__44299__1;
G__44299.cljs$core$IFn$_invoke$arity$2 = G__44299__2;
G__44299.cljs$core$IFn$_invoke$arity$3 = G__44299__3;
return G__44299;
})()
;
/**
 * Set loading status
 */
cells.cell.status_BANG_ = (function cells$cell$status_BANG_(var_args){
var G__43626 = arguments.length;
switch (G__43626) {
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
return cells$cell$IStatus$status_BANG_$dyn_44298(this$);
}
}));

(cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,status){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IStatus$status_BANG_$arity$2 == null)))))){
return this$.cells$cell$IStatus$status_BANG_$arity$2(this$,status);
} else {
return cells$cell$IStatus$status_BANG_$dyn_44298(this$,status);
}
}));

(cells.cell.status_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,status,message){
if((((!((this$ == null)))) && ((!((this$.cells$cell$IStatus$status_BANG_$arity$3 == null)))))){
return this$.cells$cell$IStatus$status_BANG_$arity$3(this$,status,message);
} else {
return cells$cell$IStatus$status_BANG_$dyn_44298(this$,status,message);
}
}));

(cells.cell.status_BANG_.cljs$lang$maxFixedArity = 3);


var cells$cell$IStatus$status$dyn_44333 = (function (this$){
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
return cells$cell$IStatus$status$dyn_44333(this$);
}
});

var cells$cell$IStatus$message$dyn_44338 = (function (this$){
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
return cells$cell$IStatus$message$dyn_44338(this$);
}
});

var cells$cell$IStatus$error_QMARK_$dyn_44393 = (function (this$){
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
return cells$cell$IStatus$error_QMARK_$dyn_44393(this$);
}
});

var cells$cell$IStatus$loading_QMARK_$dyn_44398 = (function (this$){
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
return cells$cell$IStatus$loading_QMARK_$dyn_44398(this$);
}
});

/**
 * Experimental: cells that implement IStatus can 'show' themselves differently depending on status.
 */
cells.cell.status_view = (function cells$cell$status_view(this$){
return cells.cell.render_hiccup(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".cell-status",".cell-status",-923817673),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43683 = cells.cell.status(this$);
var G__43683__$1 = (((G__43683 instanceof cljs.core.Keyword))?G__43683.fqn:null);
switch (G__43683__$1) {
case "loading":
return new cljs.core.Keyword(null,".circle-loading",".circle-loading",1989425347);

break;
case "error":
return new cljs.core.Keyword(null,".circle-error",".circle-error",1037940815);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43683__$1)].join('')));

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
var G__43752 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(self__.id),cells.util.unique_id());
var G__43754 = self__.f;
var G__43755 = self__.state;
return (cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$3 ? cells.cell.cell_STAR_.cljs$core$IFn$_invoke$arity$3(G__43752,G__43754,G__43755) : cells.cell.cell_STAR_.call(null,G__43752,G__43754,G__43755));
}));

(cells.cell.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cells.cell","-reset!","cells.cell/-reset!",-102834125),this$__$1,newval], 0));

var oldval_44444 = cljs.core.deref(this$__$1);
this$__$1.cells$cell$ISet_BANG_$_set_BANG_$arity$2(null,newval);

this$__$1.cljs$core$IWatchable$_notify_watches$arity$3(null,oldval_44444,newval);

this$__$1.cells$cell$IReactiveCompute$_compute_dependents_BANG_$arity$1(null);

return newval;
}));

(cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__43772 = cljs.core.deref(this$__$1);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__43772) : f__$1.call(null,G__43772));
})());
}));

(cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f__$1,a){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__43780 = cljs.core.deref(this$__$1);
var G__43781 = a;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__43780,G__43781) : f__$1.call(null,G__43780,G__43781));
})());
}));

(cells.cell.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f__$1,a,b){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__43792 = cljs.core.deref(this$__$1);
var G__43793 = a;
var G__43794 = b;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__43792,G__43793,G__43794) : f__$1.call(null,G__43792,G__43793,G__43794));
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
var fexpr__43806 = (function (){var or__4126__auto__ = new cljs.core.Keyword("cells.cell","view","cells.cell/view",770075107).cljs$core$IFn$_invoke$arity$1(self__.__meta);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cells.cell.default_view;
}
})();
return (fexpr__43806.cljs$core$IFn$_invoke$arity$1 ? fexpr__43806.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__43806.call(null,this$__$1));
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
var _STAR_computing_dependents_STAR__orig_val__43807 = cells.cell._STAR_computing_dependents_STAR_;
var _STAR_computing_dependents_STAR__temp_val__43808 = true;
(cells.cell._STAR_computing_dependents_STAR_ = _STAR_computing_dependents_STAR__temp_val__43808);

try{var deps = cells.cell.transitive_dependents_sorted(this$__$1);
cells.cell.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"-compute-dependents!","-compute-dependents!",283544650),this$__$1,deps], 0));

var seq__43810 = cljs.core.seq(deps);
var chunk__43811 = null;
var count__43812 = (0);
var i__43813 = (0);
while(true){
if((i__43813 < count__43812)){
var cell_id = chunk__43811.cljs$core$IIndexed$_nth$arity$2(null,i__43813);
var G__43821_44448 = (function (){var fexpr__43822 = cljs.core.deref(cells.cell._cells);
return (fexpr__43822.cljs$core$IFn$_invoke$arity$1 ? fexpr__43822.cljs$core$IFn$_invoke$arity$1(cell_id) : fexpr__43822.call(null,cell_id));
})();
if((G__43821_44448 == null)){
} else {
cells.cell._compute_with_dependents_BANG_(G__43821_44448);
}


var G__44449 = seq__43810;
var G__44450 = chunk__43811;
var G__44451 = count__43812;
var G__44452 = (i__43813 + (1));
seq__43810 = G__44449;
chunk__43811 = G__44450;
count__43812 = G__44451;
i__43813 = G__44452;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43810);
if(temp__5735__auto__){
var seq__43810__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43810__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43810__$1);
var G__44478 = cljs.core.chunk_rest(seq__43810__$1);
var G__44479 = c__4556__auto__;
var G__44480 = cljs.core.count(c__4556__auto__);
var G__44481 = (0);
seq__43810 = G__44478;
chunk__43811 = G__44479;
count__43812 = G__44480;
i__43813 = G__44481;
continue;
} else {
var cell_id = cljs.core.first(seq__43810__$1);
var G__43825_44482 = (function (){var fexpr__43827 = cljs.core.deref(cells.cell._cells);
return (fexpr__43827.cljs$core$IFn$_invoke$arity$1 ? fexpr__43827.cljs$core$IFn$_invoke$arity$1(cell_id) : fexpr__43827.call(null,cell_id));
})();
if((G__43825_44482 == null)){
} else {
cells.cell._compute_with_dependents_BANG_(G__43825_44482);
}


var G__44484 = cljs.core.next(seq__43810__$1);
var G__44485 = null;
var G__44486 = (0);
var G__44487 = (0);
seq__43810 = G__44484;
chunk__43811 = G__44485;
count__43812 = G__44486;
i__43813 = G__44487;
continue;
}
} else {
return null;
}
}
break;
}
}finally {(cells.cell._STAR_computing_dependents_STAR_ = _STAR_computing_dependents_STAR__orig_val__43807);
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
var _STAR_cell_stack_STAR__orig_val__43835 = cells.cell._STAR_cell_stack_STAR_;
var _STAR_eval_context_STAR__orig_val__43836 = cells.cell._STAR_eval_context_STAR_;
var _STAR_cell_stack_STAR__temp_val__43837 = cljs.core.cons(this$__$1,cells.cell._STAR_cell_stack_STAR_);
var _STAR_eval_context_STAR__temp_val__43838 = self__.eval_context;
(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__temp_val__43837);

(cells.cell._STAR_eval_context_STAR_ = _STAR_eval_context_STAR__temp_val__43838);

try{try{return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(this$__$1) : self__.f.call(null,this$__$1));
}catch (e43839){if((e43839 instanceof Error)){
var e = e43839;
cells.eval_context.dispose_BANG_(this$__$1);

throw e;
} else {
throw e43839;

}
}}finally {(cells.cell._STAR_eval_context_STAR_ = _STAR_eval_context_STAR__orig_val__43836);

(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__orig_val__43835);
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

var _STAR_read_log_STAR__orig_val__43847_44493 = cells.cell._STAR_read_log_STAR_;
var _STAR_read_log_STAR__temp_val__43848_44494 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(cells.cell._STAR_read_log_STAR_ = _STAR_read_log_STAR__temp_val__43848_44494);

try{var value_44495 = this$__$1.cells$cell$IReactiveCompute$_compute$arity$1(null);
var next_dependencies_44496 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cells.cell._STAR_read_log_STAR_),cljs.core.name(this$__$1));
var prev_dependencies_44497 = cells.cell.dependencies(this$__$1);
var seq__43854_44498 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(next_dependencies_44496,prev_dependencies_44497));
var chunk__43855_44499 = null;
var count__43856_44500 = (0);
var i__43857_44501 = (0);
while(true){
if((i__43857_44501 < count__43856_44500)){
var added_44502 = chunk__43855_44499.cljs$core$IIndexed$_nth$arity$2(null,i__43857_44501);
cells.cell.depend(this$__$1,added_44502);


var G__44503 = seq__43854_44498;
var G__44504 = chunk__43855_44499;
var G__44505 = count__43856_44500;
var G__44506 = (i__43857_44501 + (1));
seq__43854_44498 = G__44503;
chunk__43855_44499 = G__44504;
count__43856_44500 = G__44505;
i__43857_44501 = G__44506;
continue;
} else {
var temp__5735__auto___44507 = cljs.core.seq(seq__43854_44498);
if(temp__5735__auto___44507){
var seq__43854_44508__$1 = temp__5735__auto___44507;
if(cljs.core.chunked_seq_QMARK_(seq__43854_44508__$1)){
var c__4556__auto___44509 = cljs.core.chunk_first(seq__43854_44508__$1);
var G__44510 = cljs.core.chunk_rest(seq__43854_44508__$1);
var G__44511 = c__4556__auto___44509;
var G__44512 = cljs.core.count(c__4556__auto___44509);
var G__44513 = (0);
seq__43854_44498 = G__44510;
chunk__43855_44499 = G__44511;
count__43856_44500 = G__44512;
i__43857_44501 = G__44513;
continue;
} else {
var added_44514 = cljs.core.first(seq__43854_44508__$1);
cells.cell.depend(this$__$1,added_44514);


var G__44515 = cljs.core.next(seq__43854_44508__$1);
var G__44516 = null;
var G__44517 = (0);
var G__44518 = (0);
seq__43854_44498 = G__44515;
chunk__43855_44499 = G__44516;
count__43856_44500 = G__44517;
i__43857_44501 = G__44518;
continue;
}
} else {
}
}
break;
}

var seq__43887_44519 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(prev_dependencies_44497,next_dependencies_44496));
var chunk__43888_44520 = null;
var count__43889_44521 = (0);
var i__43890_44522 = (0);
while(true){
if((i__43890_44522 < count__43889_44521)){
var removed_44524 = chunk__43888_44520.cljs$core$IIndexed$_nth$arity$2(null,i__43890_44522);
cells.cell.remove_edge(this$__$1,removed_44524);


var G__44525 = seq__43887_44519;
var G__44526 = chunk__43888_44520;
var G__44527 = count__43889_44521;
var G__44528 = (i__43890_44522 + (1));
seq__43887_44519 = G__44525;
chunk__43888_44520 = G__44526;
count__43889_44521 = G__44527;
i__43890_44522 = G__44528;
continue;
} else {
var temp__5735__auto___44530 = cljs.core.seq(seq__43887_44519);
if(temp__5735__auto___44530){
var seq__43887_44531__$1 = temp__5735__auto___44530;
if(cljs.core.chunked_seq_QMARK_(seq__43887_44531__$1)){
var c__4556__auto___44532 = cljs.core.chunk_first(seq__43887_44531__$1);
var G__44533 = cljs.core.chunk_rest(seq__43887_44531__$1);
var G__44534 = c__4556__auto___44532;
var G__44535 = cljs.core.count(c__4556__auto___44532);
var G__44536 = (0);
seq__43887_44519 = G__44533;
chunk__43888_44520 = G__44534;
count__43889_44521 = G__44535;
i__43890_44522 = G__44536;
continue;
} else {
var removed_44537 = cljs.core.first(seq__43887_44531__$1);
cells.cell.remove_edge(this$__$1,removed_44537);


var G__44538 = cljs.core.next(seq__43887_44531__$1);
var G__44539 = null;
var G__44540 = (0);
var G__44541 = (0);
seq__43887_44519 = G__44538;
chunk__43888_44520 = G__44539;
count__43889_44521 = G__44540;
i__43890_44522 = G__44541;
continue;
}
} else {
}
}
break;
}

this$__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,value_44495);
}finally {(cells.cell._STAR_read_log_STAR_ = _STAR_read_log_STAR__orig_val__43847_44493);
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
var seq__43910 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"watches","watches",-273097535).cljs$core$IFn$_invoke$arity$1(self__.state)));
var chunk__43911 = null;
var count__43912 = (0);
var i__43913 = (0);
while(true){
if((i__43913 < count__43912)){
var f__$1 = chunk__43911.cljs$core$IIndexed$_nth$arity$2(null,i__43913);
(f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : f__$1.call(null,this$__$1,oldval,newval));


var G__44543 = seq__43910;
var G__44544 = chunk__43911;
var G__44545 = count__43912;
var G__44546 = (i__43913 + (1));
seq__43910 = G__44543;
chunk__43911 = G__44544;
count__43912 = G__44545;
i__43913 = G__44546;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43910);
if(temp__5735__auto__){
var seq__43910__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43910__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43910__$1);
var G__44548 = cljs.core.chunk_rest(seq__43910__$1);
var G__44549 = c__4556__auto__;
var G__44550 = cljs.core.count(c__4556__auto__);
var G__44551 = (0);
seq__43910 = G__44548;
chunk__43911 = G__44549;
count__43912 = G__44550;
i__43913 = G__44551;
continue;
} else {
var f__$1 = cljs.core.first(seq__43910__$1);
(f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(this$__$1,oldval,newval) : f__$1.call(null,this$__$1,oldval,newval));


var G__44554 = cljs.core.next(seq__43910__$1);
var G__44555 = null;
var G__44556 = (0);
var G__44557 = (0);
seq__43910 = G__44554;
chunk__43911 = G__44555;
count__43912 = G__44556;
i__43913 = G__44557;
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
var seq__43964_44562 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.state,new cljs.core.Keyword(null,"dispose-fns","dispose-fns",-242933251)));
var chunk__43965_44563 = null;
var count__43966_44564 = (0);
var i__43967_44565 = (0);
while(true){
if((i__43967_44565 < count__43966_44564)){
var f_44566__$1 = chunk__43965_44563.cljs$core$IIndexed$_nth$arity$2(null,i__43967_44565);
(f_44566__$1.cljs$core$IFn$_invoke$arity$0 ? f_44566__$1.cljs$core$IFn$_invoke$arity$0() : f_44566__$1.call(null));


var G__44569 = seq__43964_44562;
var G__44570 = chunk__43965_44563;
var G__44571 = count__43966_44564;
var G__44572 = (i__43967_44565 + (1));
seq__43964_44562 = G__44569;
chunk__43965_44563 = G__44570;
count__43966_44564 = G__44571;
i__43967_44565 = G__44572;
continue;
} else {
var temp__5735__auto___44574 = cljs.core.seq(seq__43964_44562);
if(temp__5735__auto___44574){
var seq__43964_44575__$1 = temp__5735__auto___44574;
if(cljs.core.chunked_seq_QMARK_(seq__43964_44575__$1)){
var c__4556__auto___44576 = cljs.core.chunk_first(seq__43964_44575__$1);
var G__44577 = cljs.core.chunk_rest(seq__43964_44575__$1);
var G__44578 = c__4556__auto___44576;
var G__44579 = cljs.core.count(c__4556__auto___44576);
var G__44580 = (0);
seq__43964_44562 = G__44577;
chunk__43965_44563 = G__44578;
count__43966_44564 = G__44579;
i__43967_44565 = G__44580;
continue;
} else {
var f_44581__$1 = cljs.core.first(seq__43964_44575__$1);
(f_44581__$1.cljs$core$IFn$_invoke$arity$0 ? f_44581__$1.cljs$core$IFn$_invoke$arity$0() : f_44581__$1.call(null));


var G__44583 = cljs.core.next(seq__43964_44575__$1);
var G__44584 = null;
var G__44585 = (0);
var G__44586 = (0);
seq__43964_44562 = G__44583;
chunk__43965_44563 = G__44584;
count__43966_44564 = G__44585;
i__43967_44565 = G__44586;
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

var G__43994 = this$__$1;
if(cljs.core.truth_((function (){var or__4126__auto__ = cells.cell._STAR_allow_deref_while_loading_QMARK__STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cell.status","status","cell.status/status",577963505).cljs$core$IFn$_invoke$arity$1(self__.state),new cljs.core.Keyword(null,"loading","loading",-737050189));
}
})())){
return G__43994.cells$cell$ICellStore$get_value$arity$1(null);
} else {
return G__43994;
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
var G__44035 = arguments.length;
switch (G__44035) {
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
var cell_container_id = (function (){var G__44046 = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
if((G__44046 == null)){
return null;
} else {
return cljs.core.name(G__44046);
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
var the_cells = cljs.core.filterv((function (p__44072){
var vec__44075 = p__44072;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44075,(0),null);
var cell = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44075,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id),ns__$1);
}),cljs.core.deref(cells.cell._cells));
var seq__44082 = cljs.core.seq(cells.cell.topo_sort(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,the_cells)));
var chunk__44083 = null;
var count__44084 = (0);
var i__44085 = (0);
while(true){
if((i__44085 < count__44084)){
var cell = chunk__44083.cljs$core$IIndexed$_nth$arity$2(null,i__44085);
cells.cell.purge_cell_BANG_(cell);

cells.cell.remove_all(cell);


var G__44631 = seq__44082;
var G__44632 = chunk__44083;
var G__44633 = count__44084;
var G__44634 = (i__44085 + (1));
seq__44082 = G__44631;
chunk__44083 = G__44632;
count__44084 = G__44633;
i__44085 = G__44634;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44082);
if(temp__5735__auto__){
var seq__44082__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44082__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44082__$1);
var G__44640 = cljs.core.chunk_rest(seq__44082__$1);
var G__44641 = c__4556__auto__;
var G__44642 = cljs.core.count(c__4556__auto__);
var G__44643 = (0);
seq__44082 = G__44640;
chunk__44083 = G__44641;
count__44084 = G__44642;
i__44085 = G__44643;
continue;
} else {
var cell = cljs.core.first(seq__44082__$1);
cells.cell.purge_cell_BANG_(cell);

cells.cell.remove_all(cell);


var G__44647 = cljs.core.next(seq__44082__$1);
var G__44648 = null;
var G__44649 = (0);
var G__44650 = (0);
seq__44082 = G__44647;
chunk__44083 = G__44648;
count__44084 = G__44649;
i__44085 = G__44650;
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
