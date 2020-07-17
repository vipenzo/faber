goog.provide('re_view.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
re_view.core.schedule_BANG_ = re_view.render_loop.schedule_BANG_;
re_view.core.force_update = re_view.render_loop.force_update;
re_view.core.force_update_BANG_ = re_view.render_loop.force_update_BANG_;
re_view.core.flush_BANG_ = re_view.render_loop.flush_BANG_;
re_view.core._STAR_trigger_state_render_STAR_ = true;
/**
 * @define {boolean}
 */
re_view.core.INSTRUMENT_BANG_ = goog.define("re_view.core.INSTRUMENT_BANG_",false);
/**
 * Return DOM node for component
 */
re_view.core.dom_node = (function re_view$core$dom_node(component){
return module$node_modules$react_dom$index.findDOMNode(component);
});
/**
 * Returns true if component is still mounted to the DOM.
 *   This is necessary to avoid updating unmounted components.
 */
re_view.core.mounted_QMARK_ = (function re_view$core$mounted_QMARK_(component){
return (!(goog.object.get(component,"unmounted") === true));
});
/**
 * Wraps :on-change handlers of text inputs to apply changes synchronously.
 */
re_view.core.wrap_props = (function re_view$core$wrap_props(props,tag){
var G__42542 = props;
if(cljs.core.truth_(((cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149)))?(function (){var fexpr__42548 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["input",null,"textarea",null], null), null);
return (fexpr__42548.cljs$core$IFn$_invoke$arity$1 ? fexpr__42548.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__42548.call(null,tag));
})():false))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__42542,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_view.render_loop.apply_sync_BANG_);
} else {
return G__42542;
}
});
/**
 * Wrap a render function to force-update the component when re-db patterns accessed during evaluation are invalidated.
 */
re_view.core.reactive_render = (function re_view$core$reactive_render(f){
return (function (){
var this$ = this;
var re$view = goog.object.get(this$,"re$view");
var map__42553 = (function (){var _STAR_pattern_log_STAR__orig_val__42554 = re_db.patterns._STAR_pattern_log_STAR_;
var _STAR_pattern_log_STAR__temp_val__42555 = cljs.core.PersistentArrayMap.EMPTY;
(re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR__temp_val__42555);

try{var map__42556 = (function (){var _STAR_db_log_STAR__orig_val__42557 = re_db.core._STAR_db_log_STAR_;
var _STAR_prevent_notify_STAR__orig_val__42558 = re_db.core._STAR_prevent_notify_STAR_;
var _STAR_db_log_STAR__temp_val__42559 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var _STAR_prevent_notify_STAR__temp_val__42560 = true;
(re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR__temp_val__42559);

(re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR__temp_val__42560);

try{var value__41338__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value__41338__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),cljs.core.deref(re_db.core._STAR_db_log_STAR_)], null);
}finally {(re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR__orig_val__42558);

(re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR__orig_val__42557);
}})();
var map__42556__$1 = (((((!((map__42556 == null))))?(((((map__42556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42556):map__42556);
var tx_report__42271__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42556__$1,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391));
var value__42270__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42556__$1,new cljs.core.Keyword(null,"value","value",305978217));
var patterns__42272__auto__ = re_db.patterns._STAR_pattern_log_STAR_;
re_db.core.notify_listeners(tx_report__42271__auto__);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),patterns__42272__auto__,new cljs.core.Keyword(null,"value","value",305978217),value__42270__auto__], null);
}finally {(re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR__orig_val__42554);
}})();
var map__42553__$1 = (((((!((map__42553 == null))))?(((((map__42553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42553):map__42553);
var patterns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42553__$1,new cljs.core.Keyword(null,"patterns","patterns",1164082024));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42553__$1,new cljs.core.Keyword(null,"value","value",305978217));
var prev_patterns = new cljs.core.Keyword("view","re-db.patterns","view/re-db.patterns",-379797888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_patterns,patterns)){
} else {
var temp__5735__auto___42760 = goog.object.get(this$,"reactiveUnsubscribe");
if(cljs.core.truth_(temp__5735__auto___42760)){
var un_sub_42761 = temp__5735__auto___42760;
(un_sub_42761.cljs$core$IFn$_invoke$arity$0 ? un_sub_42761.cljs$core$IFn$_invoke$arity$0() : un_sub_42761.call(null));
} else {
}

goog.object.set(this$,"reactiveUnsubscribe",((cljs.core.empty_QMARK_(patterns))?null:re_db.d.listen(patterns,(function (){
return (re_view.core.force_update.cljs$core$IFn$_invoke$arity$1 ? re_view.core.force_update.cljs$core$IFn$_invoke$arity$1(this$) : re_view.core.force_update.call(null,this$));
}))));

cljs.core._vreset_BANG_(re$view,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(re$view),new cljs.core.Keyword("view","re-db.patterns","view/re-db.patterns",-379797888),patterns));
}

return value;
});
});
/**
 * Mapping of methods-map keys to React lifecycle keys.
 */
re_view.core.kmap = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("view","will-receive-state","view/will-receive-state",22798499),new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),new cljs.core.Keyword("view","initial-state","view/initial-state",-2068231227),new cljs.core.Keyword("view","will-receive-props","view/will-receive-props",-56046583),new cljs.core.Keyword("view","render","view/render",-1412767573),new cljs.core.Keyword("view","will-update","view/will-update",323358447),new cljs.core.Keyword("view","did-catch","view/did-catch",2134788208),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),new cljs.core.Keyword("view","state","view/state",-1991815820),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),new cljs.core.Keyword("view","will-mount","view/will-mount",-435076322)],["componentWillReceiveState","shouldComponentUpdate","$initialState","componentWillReceiveProps","render","componentWillUpdate","componentDidCatch","componentDidUpdate","$state","constructor","componentDidMount","componentWillUnmount","componentWillMount"]);
/**
 * Compose fns to execute sequentially over the same arguments
 */
re_view.core.compseq = (function re_view$core$compseq(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42762 = arguments.length;
var i__4737__auto___42763 = (0);
while(true){
if((i__4737__auto___42763 < len__4736__auto___42762)){
args__4742__auto__.push((arguments[i__4737__auto___42763]));

var G__42764 = (i__4737__auto___42763 + (1));
i__4737__auto___42763 = G__42764;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_view.core.compseq.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_view.core.compseq.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return (function() { 
var G__42765__delegate = function (args){
var seq__42572 = cljs.core.seq(fns);
var chunk__42573 = null;
var count__42574 = (0);
var i__42575 = (0);
while(true){
if((i__42575 < count__42574)){
var f = chunk__42573.cljs$core$IIndexed$_nth$arity$2(null,i__42575);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__42766 = seq__42572;
var G__42767 = chunk__42573;
var G__42768 = count__42574;
var G__42769 = (i__42575 + (1));
seq__42572 = G__42766;
chunk__42573 = G__42767;
count__42574 = G__42768;
i__42575 = G__42769;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42572);
if(temp__5735__auto__){
var seq__42572__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42572__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42572__$1);
var G__42771 = cljs.core.chunk_rest(seq__42572__$1);
var G__42772 = c__4556__auto__;
var G__42773 = cljs.core.count(c__4556__auto__);
var G__42774 = (0);
seq__42572 = G__42771;
chunk__42573 = G__42772;
count__42574 = G__42773;
i__42575 = G__42774;
continue;
} else {
var f = cljs.core.first(seq__42572__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__42776 = cljs.core.next(seq__42572__$1);
var G__42777 = null;
var G__42778 = (0);
var G__42779 = (0);
seq__42572 = G__42776;
chunk__42573 = G__42777;
count__42574 = G__42778;
i__42575 = G__42779;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__42765 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42780__i = 0, G__42780__a = new Array(arguments.length -  0);
while (G__42780__i < G__42780__a.length) {G__42780__a[G__42780__i] = arguments[G__42780__i + 0]; ++G__42780__i;}
  args = new cljs.core.IndexedSeq(G__42780__a,0,null);
} 
return G__42765__delegate.call(this,args);};
G__42765.cljs$lang$maxFixedArity = 0;
G__42765.cljs$lang$applyTo = (function (arglist__42782){
var args = cljs.core.seq(arglist__42782);
return G__42765__delegate(args);
});
G__42765.cljs$core$IFn$_invoke$arity$variadic = G__42765__delegate;
return G__42765;
})()
;
}));

(re_view.core.compseq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.core.compseq.cljs$lang$applyTo = (function (seq42571){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42571));
}));

/**
 * Merge a list of method maps. Multiple lifecycle methods execute sequentially. Only the last-defined :should-update function is applied.
 */
re_view.core.collect = (function re_view$core$collect(methods$){
var methods$__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,(function (a,b){
if(cljs.core.vector_QMARK_(a)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,b);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}
}),methods$);
return cljs.core.reduce_kv((function (m,method_k,fns){
var G__42587 = m;
if(cljs.core.vector_QMARK_(fns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42587,method_k,((cljs.core.keyword_identical_QMARK_(method_k,new cljs.core.Keyword("view","should-update","view/should-update",-1289068156)))?cljs.core.last(fns):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_view.core.compseq,fns)));
} else {
return G__42587;
}
}),methods$__$1,methods$__$1);
});
re_view.core.finish_lifecycle = (function re_view$core$finish_lifecycle(this$){

var re$view = (this$["re$view"]);
var map__42593 = cljs.core.deref(re$view);
var map__42593__$1 = (((((!((map__42593 == null))))?(((((map__42593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42593):map__42593);
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42593__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42593__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42593__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
return cljs.core.vreset_BANG_(re$view,(function (){var G__42596 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(re$view),new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),children], 0));
if(cljs.core.truth_(state)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42596,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886),cljs.core.deref(state));
} else {
return G__42596;
}
})());
});
/**
 * Wrap a component's methods, binding arguments and specifying lifecycle update behaviour.
 */
re_view.core.wrap_methods = (function re_view$core$wrap_methods(method_k,f){
if((!(cljs.core.fn_QMARK_(f)))){
return f;
} else {
var G__42597 = method_k;
var G__42597__$1 = (((G__42597 instanceof cljs.core.Keyword))?G__42597.fqn:null);
switch (G__42597__$1) {
case "view/initial-state":
case "view/state":
case "key":
case "constructor":
return f;

break;
case "view/render":
return re_view.core.reactive_render(f);

break;
case "view/will-receive-props":
return (function (props){
var _STAR_trigger_state_render_STAR__orig_val__42598 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__42599 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__42599);

try{var this$ = this;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,props) : f.call(null,this$,props));
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__42598);
}});

break;
case "view/will-mount":
case "view/will-unmount":
case "view/will-receive-state":
case "view/will-update":
return (function (){
var _STAR_trigger_state_render_STAR__orig_val__42603 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__42604 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__42604);

try{var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(goog.object.get(this$,"re$view"))));
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__42603);
}});

break;
case "view/did-mount":
case "view/did-update":
return (function (){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(goog.object.get(this$,"re$view"))));
});

break;
default:
return (function() { 
var G__42792__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,args);
};
var G__42792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42794__i = 0, G__42794__a = new Array(arguments.length -  0);
while (G__42794__i < G__42794__a.length) {G__42794__a[G__42794__i] = arguments[G__42794__i + 0]; ++G__42794__i;}
  args = new cljs.core.IndexedSeq(G__42794__a,0,null);
} 
return G__42792__delegate.call(this,args);};
G__42792.cljs$lang$maxFixedArity = 0;
G__42792.cljs$lang$applyTo = (function (arglist__42795){
var args = cljs.core.seq(arglist__42795);
return G__42792__delegate(args);
});
G__42792.cljs$core$IFn$_invoke$arity$variadic = G__42792__delegate;
return G__42792;
})()
;

}
}
});
/**
 * Bind a component to update whenever `state` changes.
 *   `state` can be any type which implements IWatchable and IDeref.
 */
re_view.core.init_state_BANG_ = (function re_view$core$init_state_BANG_(component,state){
cljs.core._vreset_BANG_(goog.object.get(component,"re$view"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(goog.object.get(component,"re$view")),new cljs.core.Keyword("view","state","view/state",-1991815820),state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886),cljs.core.deref(state)], 0)));

cljs.core.add_watch(state,component,(function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
cljs.core._vreset_BANG_(goog.object.get(component,"re$view"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(goog.object.get(component,"re$view")),new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886),old_state));

var temp__5735__auto___42803 = goog.object.get(component,"componentWillReceiveState");
if(cljs.core.truth_(temp__5735__auto___42803)){
var will_receive_42807 = temp__5735__auto___42803;
will_receive_42807.call(component);
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = re_view.core._STAR_trigger_state_render_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var temp__5733__auto__ = goog.object.get(component,"shouldComponentUpdate");
if(cljs.core.truth_(temp__5733__auto__)){
var should_update = temp__5733__auto__;
return should_update.call(component);
} else {
return true;
}
} else {
return and__4115__auto__;
}
})())){
return (re_view.core.force_update.cljs$core$IFn$_invoke$arity$1 ? re_view.core.force_update.cljs$core$IFn$_invoke$arity$1(component) : re_view.core.force_update.call(null,component));
} else {
return null;
}
} else {
return null;
}
}));

return state;
});
/**
 * Lazily create and bind a state atom for `component`
 */
re_view.core.ensure_state_BANG_ = (function re_view$core$ensure_state_BANG_(component){
if(cljs.core.contains_QMARK_(cljs.core.deref((component["re$view"])),new cljs.core.Keyword("view","state","view/state",-1991815820))){
return null;
} else {
return re_view.core.init_state_BANG_(component,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
(module$node_modules$react$index.Component.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL);

(module$node_modules$react$index.Component.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
if(cljs.core.truth_((function (){var G__42617 = cljs.core.namespace(k);
var fexpr__42616 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__42616.cljs$core$IFn$_invoke$arity$1 ? fexpr__42616.cljs$core$IFn$_invoke$arity$1(G__42617) : fexpr__42616.call(null,G__42617));
})())){
if(cljs.core.keyword_identical_QMARK_(k,new cljs.core.Keyword("view","state","view/state",-1991815820))){
re_view.core.ensure_state_BANG_(this$__$1);
} else {
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(goog.object.get(this$__$1,"re$view")),k);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(goog.object.get(this$__$1,"re$view")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","props","view/props",449562012),k], null));
}
}));

(module$node_modules$react$index.Component.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
if(cljs.core.truth_((function (){var G__42623 = cljs.core.namespace(k);
var fexpr__42622 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__42622.cljs$core$IFn$_invoke$arity$1 ? fexpr__42622.cljs$core$IFn$_invoke$arity$1(G__42623) : fexpr__42622.call(null,G__42623));
})())){
if(cljs.core.keyword_identical_QMARK_(k,new cljs.core.Keyword("view","state","view/state",-1991815820))){
re_view.core.ensure_state_BANG_(this$__$1);
} else {
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(goog.object.get(this$__$1,"re$view")),k);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(goog.object.get(this$__$1,"re$view")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("view","props","view/props",449562012),k], null),not_found);
}
}));
/**
 * Augment lifecycle methods with default behaviour.
 */
re_view.core.lifecycle_methods = (function re_view$core$lifecycle_methods(methods$){
return cljs.core.reduce_kv((function (obj,method_k,method){
var G__42624 = obj;
goog.object.set(G__42624,cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.core.kmap,method_k),re_view.core.wrap_methods(method_k,method));

return G__42624;
}),({}),re_view.core.collect(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-receive-props","view/will-receive-props",-56046583),(function (this$,props){
var map__42625 = this$;
var map__42625__$1 = (((((!((map__42625 == null))))?(((((map__42625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42625):map__42625);
var this$__$1 = map__42625__$1;
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42625__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42625__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var next_props = (props["props"]);
return cljs.core._vreset_BANG_(goog.object.get(this$__$1,"re$view"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(goog.object.get(this$__$1,"re$view")),new cljs.core.Keyword("view","props","view/props",449562012),next_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,new cljs.core.Keyword("view","children","view/children",-946116505),(props["children"]),new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),prev_children], 0)));
}),new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),(function (p__42634){
var map__42635 = p__42634;
var map__42635__$1 = (((((!((map__42635 == null))))?(((((map__42635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42635):map__42635);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42635__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42635__$1,new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42635__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42635__$1,new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42635__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var prev_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42635__$1,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886));
var or__4126__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(props,prev_props);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(children,prev_children);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((state == null)){
return null;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),prev_state);
}
}
}
})], null),methods$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (p__42648){
var map__42650 = p__42648;
var map__42650__$1 = (((((!((map__42650 == null))))?(((((map__42650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42650):map__42650);
var this$ = map__42650__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42650__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
goog.object.set(this$,"unmounted",true);

var temp__5735__auto___42837 = (this$["reactiveUnsubscribe"]);
if(cljs.core.truth_(temp__5735__auto___42837)){
var un_sub_42842 = temp__5735__auto___42837;
(un_sub_42842.cljs$core$IFn$_invoke$arity$0 ? un_sub_42842.cljs$core$IFn$_invoke$arity$0() : un_sub_42842.call(null));
} else {
}

var G__42652 = state;
if((G__42652 == null)){
return null;
} else {
return cljs.core.remove_watch(G__42652,this$);
}
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),re_view.core.finish_lifecycle], null)], null)));
});
/**
 * Swap a component's state atom without forcing an update (render)
 */
re_view.core.swap_silently_BANG_ = (function re_view$core$swap_silently_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42845 = arguments.length;
var i__4737__auto___42846 = (0);
while(true){
if((i__4737__auto___42846 < len__4736__auto___42845)){
args__4742__auto__.push((arguments[i__4737__auto___42846]));

var G__42847 = (i__4737__auto___42846 + (1));
i__4737__auto___42846 = G__42847;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_trigger_state_render_STAR__orig_val__42654 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__42655 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__42655);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__42654);
}}));

(re_view.core.swap_silently_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.core.swap_silently_BANG_.cljs$lang$applyTo = (function (seq42653){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42653));
}));

/**
 * Bind element methods and populate initial props for `component`.
 */
re_view.core.init_component = (function re_view$core$init_component(component,$props){
if(cljs.core.truth_($props)){
var props_42848 = goog.object.get($props,"props");
var children_42849 = goog.object.get($props,"children");
goog.object.set(component,"re$view",cljs.core.volatile_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(goog.object.get($props,"class"),new cljs.core.Keyword("view","props","view/props",449562012),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props_42848,new cljs.core.Keyword("view","state","view/state",-1991815820)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","children","view/children",-946116505),children_42849], 0))));

var temp__5735__auto___42854 = goog.object.get($props,"instance");
if(cljs.core.truth_(temp__5735__auto___42854)){
var instance_keys_42855 = temp__5735__auto___42854;
var seq__42658_42857 = cljs.core.seq(goog.object.getKeys(instance_keys_42855));
var chunk__42659_42858 = null;
var count__42660_42859 = (0);
var i__42661_42860 = (0);
while(true){
if((i__42661_42860 < count__42660_42859)){
var k_42862 = chunk__42659_42858.cljs$core$IIndexed$_nth$arity$2(null,i__42661_42860);
var f_42863 = goog.object.get(instance_keys_42855,k_42862);
goog.object.set(component,k_42862,((cljs.core.fn_QMARK_(f_42863))?((function (seq__42658_42857,chunk__42659_42858,count__42660_42859,i__42661_42860,f_42863,k_42862,instance_keys_42855,temp__5735__auto___42854,props_42848,children_42849){
return (function() { 
var G__42864__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_42863,component,args);
};
var G__42864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42866__i = 0, G__42866__a = new Array(arguments.length -  0);
while (G__42866__i < G__42866__a.length) {G__42866__a[G__42866__i] = arguments[G__42866__i + 0]; ++G__42866__i;}
  args = new cljs.core.IndexedSeq(G__42866__a,0,null);
} 
return G__42864__delegate.call(this,args);};
G__42864.cljs$lang$maxFixedArity = 0;
G__42864.cljs$lang$applyTo = (function (arglist__42871){
var args = cljs.core.seq(arglist__42871);
return G__42864__delegate(args);
});
G__42864.cljs$core$IFn$_invoke$arity$variadic = G__42864__delegate;
return G__42864;
})()
;})(seq__42658_42857,chunk__42659_42858,count__42660_42859,i__42661_42860,f_42863,k_42862,instance_keys_42855,temp__5735__auto___42854,props_42848,children_42849))
:f_42863));


var G__42872 = seq__42658_42857;
var G__42873 = chunk__42659_42858;
var G__42874 = count__42660_42859;
var G__42875 = (i__42661_42860 + (1));
seq__42658_42857 = G__42872;
chunk__42659_42858 = G__42873;
count__42660_42859 = G__42874;
i__42661_42860 = G__42875;
continue;
} else {
var temp__5735__auto___42876__$1 = cljs.core.seq(seq__42658_42857);
if(temp__5735__auto___42876__$1){
var seq__42658_42877__$1 = temp__5735__auto___42876__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42658_42877__$1)){
var c__4556__auto___42878 = cljs.core.chunk_first(seq__42658_42877__$1);
var G__42879 = cljs.core.chunk_rest(seq__42658_42877__$1);
var G__42880 = c__4556__auto___42878;
var G__42881 = cljs.core.count(c__4556__auto___42878);
var G__42882 = (0);
seq__42658_42857 = G__42879;
chunk__42659_42858 = G__42880;
count__42660_42859 = G__42881;
i__42661_42860 = G__42882;
continue;
} else {
var k_42883 = cljs.core.first(seq__42658_42877__$1);
var f_42884 = goog.object.get(instance_keys_42855,k_42883);
goog.object.set(component,k_42883,((cljs.core.fn_QMARK_(f_42884))?((function (seq__42658_42857,chunk__42659_42858,count__42660_42859,i__42661_42860,f_42884,k_42883,seq__42658_42877__$1,temp__5735__auto___42876__$1,instance_keys_42855,temp__5735__auto___42854,props_42848,children_42849){
return (function() { 
var G__42888__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_42884,component,args);
};
var G__42888 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42889__i = 0, G__42889__a = new Array(arguments.length -  0);
while (G__42889__i < G__42889__a.length) {G__42889__a[G__42889__i] = arguments[G__42889__i + 0]; ++G__42889__i;}
  args = new cljs.core.IndexedSeq(G__42889__a,0,null);
} 
return G__42888__delegate.call(this,args);};
G__42888.cljs$lang$maxFixedArity = 0;
G__42888.cljs$lang$applyTo = (function (arglist__42890){
var args = cljs.core.seq(arglist__42890);
return G__42888__delegate(args);
});
G__42888.cljs$core$IFn$_invoke$arity$variadic = G__42888__delegate;
return G__42888;
})()
;})(seq__42658_42857,chunk__42659_42858,count__42660_42859,i__42661_42860,f_42884,k_42883,seq__42658_42877__$1,temp__5735__auto___42876__$1,instance_keys_42855,temp__5735__auto___42854,props_42848,children_42849))
:f_42884));


var G__42891 = cljs.core.next(seq__42658_42877__$1);
var G__42892 = null;
var G__42893 = (0);
var G__42894 = (0);
seq__42658_42857 = G__42891;
chunk__42659_42858 = G__42892;
count__42660_42859 = G__42893;
i__42661_42860 = G__42894;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5735__auto___42895 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props_42848,new cljs.core.Keyword("view","state","view/state",-1991815820));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto___42895 = goog.object.get(component,"$initialState");
if(cljs.core.truth_(temp__5735__auto___42895)){
var initial_state = temp__5735__auto___42895;
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var G__42669 = initial_state;
if(cljs.core.fn_QMARK_(initial_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__42669,component,children_42849);
} else {
return G__42669;
}
})());
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5735__auto___42895 = goog.object.get(component,"$state");
if(cljs.core.truth_(temp__5735__auto___42895)){
var watchable_state = temp__5735__auto___42895;
var G__42670 = watchable_state;
if(cljs.core.fn_QMARK_(watchable_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__42670,component,children_42849);
} else {
return G__42670;
}
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(temp__5735__auto___42895)){
var state_42896 = temp__5735__auto___42895;
re_view.core.init_state_BANG_(component,state_42896);
} else {
}
} else {
goog.object.set(component,"re$view",cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY));
}

return component;
});
/**
 * Return a function which returns a React element when called with props and children.
 */
re_view.core.factory = (function re_view$core$factory(constructor$){
var map__42682 = goog.object.get(constructor$,"re$view$base");
var map__42682__$1 = (((((!((map__42682 == null))))?(((((map__42682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42682):map__42682);
var re$view$base = map__42682__$1;
var class_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42682__$1,new cljs.core.Keyword(null,"class-keys","class-keys",106917605));
var instance_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42682__$1,new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647));
var map__42683 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(class_keys,new cljs.core.Keyword("spec","props","spec/props",450064562),re_view.view_spec.normalize_props_map),new cljs.core.Keyword("spec","children","spec/children",-946200067),re_view.view_spec.resolve_spec_vector);
var map__42683__$1 = (((((!((map__42683 == null))))?(((((map__42683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42683):map__42683);
var class_keys__$1 = map__42683__$1;
var map__42684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42683__$1,new cljs.core.Keyword("spec","props","spec/props",450064562));
var map__42684__$1 = (((((!((map__42684 == null))))?(((((map__42684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42684):map__42684);
var prop_spec = map__42684__$1;
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42684__$1,new cljs.core.Keyword("props","defaults","props/defaults",999110366));
var children_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42683__$1,new cljs.core.Keyword("spec","children","spec/children",-946200067));
var class_react_key = goog.object.get(constructor$,"key");
var display_name = goog.object.get(constructor$,"displayName");
var G__42695 = (function() { 
var G__42915__delegate = function (props,children){
var vec__42700 = ((((cljs.core.map_QMARK_(props)) || ((props == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(props,children)], null));
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42700,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42700,(1),null);
var props__$2 = (function (){var G__42703 = props__$1;
if(cljs.core.truth_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,G__42703], 0));
} else {
return G__42703;
}
})();
var key = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props__$2,new cljs.core.Keyword(null,"key","key",-1516042587));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (cljs.core.truth_(class_react_key)?((typeof class_react_key === 'string')?class_react_key:(((class_react_key instanceof cljs.core.Keyword))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(props__$2,class_react_key):((cljs.core.fn_QMARK_(class_react_key))?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(class_react_key,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$2,new cljs.core.Keyword("view","children","view/children",-946116505),children__$1),children__$1):(function(){throw Error("Invalid key supplied to component")})()
))):null);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return display_name;
}
}
})();
if(re_view.core.INSTRUMENT_BANG_ === true){
re_view.view_spec.validate_props(display_name,prop_spec,props__$2);

re_view.view_spec.validate_children(display_name,children_spec,children__$1);
} else {
}

return module$node_modules$react$index.createElement(constructor$,({"key": key, "ref": cljs.core.get.cljs$core$IFn$_invoke$arity$2(props__$2,new cljs.core.Keyword(null,"ref","ref",1289896967)), "props": cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props__$2,new cljs.core.Keyword(null,"ref","ref",1289896967)), "children": children__$1, "instance": instance_keys, "class": class_keys__$1}));
};
var G__42915 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__42924__i = 0, G__42924__a = new Array(arguments.length -  1);
while (G__42924__i < G__42924__a.length) {G__42924__a[G__42924__i] = arguments[G__42924__i + 1]; ++G__42924__i;}
  children = new cljs.core.IndexedSeq(G__42924__a,0,null);
} 
return G__42915__delegate.call(this,props,children);};
G__42915.cljs$lang$maxFixedArity = 1;
G__42915.cljs$lang$applyTo = (function (arglist__42928){
var props = cljs.core.first(arglist__42928);
var children = cljs.core.rest(arglist__42928);
return G__42915__delegate(props,children);
});
G__42915.cljs$core$IFn$_invoke$arity$variadic = G__42915__delegate;
return G__42915;
})()
;
goog.object.set(G__42695,"re$view$base",re$view$base);

return G__42695;
});
re_view.core.class_STAR_ = (function re_view$core$class_STAR_(p__42710){
var map__42712 = p__42710;
var map__42712__$1 = (((((!((map__42712 == null))))?(((((map__42712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42712):map__42712);
var re_view_base = map__42712__$1;
var lifecycle_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42712__$1,new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896));
var react_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42712__$1,new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002));
var prototype = (new module$node_modules$react$index.Component());
var _ = goog.object.extend(prototype,re_view.core.lifecycle_methods(lifecycle_keys));
var constructor$ = (function re_view$core$class_STAR__$_ReView($props){
var this$ = this;
return re_view.core.init_component(this$,$props);
});
var ___$1 = goog.object.set(constructor$,"prototype",prototype);
var seq__42715_42936 = cljs.core.seq(cljs.core.seq(react_keys));
var chunk__42716_42937 = null;
var count__42717_42938 = (0);
var i__42718_42939 = (0);
while(true){
if((i__42718_42939 < count__42717_42938)){
var vec__42729_42942 = chunk__42716_42937.cljs$core$IIndexed$_nth$arity$2(null,i__42718_42939);
var k_42943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42729_42942,(0),null);
var v_42944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42729_42942,(1),null);
goog.object.set(constructor$,re_view.util.camelCase(k_42943),v_42944);


var G__42948 = seq__42715_42936;
var G__42949 = chunk__42716_42937;
var G__42950 = count__42717_42938;
var G__42951 = (i__42718_42939 + (1));
seq__42715_42936 = G__42948;
chunk__42716_42937 = G__42949;
count__42717_42938 = G__42950;
i__42718_42939 = G__42951;
continue;
} else {
var temp__5735__auto___42955 = cljs.core.seq(seq__42715_42936);
if(temp__5735__auto___42955){
var seq__42715_42956__$1 = temp__5735__auto___42955;
if(cljs.core.chunked_seq_QMARK_(seq__42715_42956__$1)){
var c__4556__auto___42957 = cljs.core.chunk_first(seq__42715_42956__$1);
var G__42958 = cljs.core.chunk_rest(seq__42715_42956__$1);
var G__42959 = c__4556__auto___42957;
var G__42960 = cljs.core.count(c__4556__auto___42957);
var G__42961 = (0);
seq__42715_42936 = G__42958;
chunk__42716_42937 = G__42959;
count__42717_42938 = G__42960;
i__42718_42939 = G__42961;
continue;
} else {
var vec__42732_42962 = cljs.core.first(seq__42715_42956__$1);
var k_42963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42732_42962,(0),null);
var v_42964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42732_42962,(1),null);
goog.object.set(constructor$,re_view.util.camelCase(k_42963),v_42964);


var G__42967 = cljs.core.next(seq__42715_42956__$1);
var G__42968 = null;
var G__42969 = (0);
var G__42970 = (0);
seq__42715_42936 = G__42967;
chunk__42716_42937 = G__42968;
count__42717_42938 = G__42969;
i__42718_42939 = G__42970;
continue;
}
} else {
}
}
break;
}

var G__42735 = constructor$;
goog.object.set(G__42735,"re$view$base",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_view_base,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),prototype));

return G__42735;
});
goog.exportSymbol('re_view.core.class_STAR_', re_view.core.class_STAR_);
/**
 * Returns a React component factory for supplied lifecycle methods.
 * Expects a single map of functions, or any number of key-function pairs,
 * 
 * (component {:render (fn [this] [:div ...])})
 * 
 * -or-
 * 
 * (component
 * 
 *   :get-initial-state
 *   (fn [this] {:apple-state :ripe})
 * 
 *   :render
 *   (fn [this] [:div ...]))
 * 
 * See other functions in this namespace for how to work with props and state.
 * Result of :render function is automatically passed through hiccup/element,
 * unless it is already a valid React element.
 * 
 */
re_view.core.view_STAR_ = (function re_view$core$view_STAR_(re_view_base){
return re_view.core.factory(re_view.core.class_STAR_(re_view_base));
});
goog.exportSymbol('re_view.core.view_STAR_', re_view.core.view_STAR_);
re_view.core.prototype = (function re_view$core$prototype(class$){
return new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(goog.object.get(class$,"re$view$base"));
});
/**
 * Render view to element, which should be a DOM element or id of element on page.
 */
re_view.core.render_to_dom = (function re_view$core$render_to_dom(component,element){
return module$node_modules$react_dom$index.render(component,(function (){var G__42741 = element;
if(typeof element === 'string'){
return document.getElementById(G__42741);
} else {
return G__42741;
}
})());
});
/**
 * Partially apply props and optional class-keys to base view. Props specified at runtime will overwrite those given here.
 *   `re$view$base` property is retained on preserved.
 */
re_view.core.partial = (function re_view$core$partial(var_args){
var G__42743 = arguments.length;
switch (G__42743) {
case 2:
return re_view.core.partial.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_view.core.partial.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_view.core.partial.cljs$core$IFn$_invoke$arity$2 = (function (base,props){
var G__42744 = (function() { 
var G__42978__delegate = function (args){
var vec__42745 = (function (){var G__42748 = args;
if((!(cljs.core.map_QMARK_(cljs.core.first(args))))){
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,G__42748);
} else {
return G__42748;
}
})();
var seq__42746 = cljs.core.seq(vec__42745);
var first__42747 = cljs.core.first(seq__42746);
var seq__42746__$1 = cljs.core.next(seq__42746);
var user_props = first__42747;
var children = seq__42746__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(base,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,user_props], 0)),children);
};
var G__42978 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42979__i = 0, G__42979__a = new Array(arguments.length -  0);
while (G__42979__i < G__42979__a.length) {G__42979__a[G__42979__i] = arguments[G__42979__i + 0]; ++G__42979__i;}
  args = new cljs.core.IndexedSeq(G__42979__a,0,null);
} 
return G__42978__delegate.call(this,args);};
G__42978.cljs$lang$maxFixedArity = 0;
G__42978.cljs$lang$applyTo = (function (arglist__42980){
var args = cljs.core.seq(arglist__42980);
return G__42978__delegate(args);
});
G__42978.cljs$core$IFn$_invoke$arity$variadic = G__42978__delegate;
return G__42978;
})()
;
goog.object.set(G__42744,"re$view$base",goog.object.get(base,"re$view$base"));

return G__42744;
}));

(re_view.core.partial.cljs$core$IFn$_invoke$arity$3 = (function (base,base_overrides,props){
return re_view.core.partial.cljs$core$IFn$_invoke$arity$2(re_view.core.view_STAR_(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([goog.object.get(base,"re$view$base"),base_overrides], 0))),props);
}));

(re_view.core.partial.cljs$lang$maxFixedArity = 3);

/**
 * Remove prop keys handled by component, useful for passing down unhandled props to a child component.
 *   By default, removes all keys listed in the component's :spec/props map. Set `:consume false` for props
 *   that should be passed through.
 */
re_view.core.pass_props = (function re_view$core$pass_props(this$){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("view","props","view/props",449562012)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("spec","props","spec/props",450064562),new cljs.core.Keyword("props","consumed","props/consumed",174753542)], null)));
});
re_view.core.is_react_element_QMARK_ = re_view.util.is_react_element_QMARK_;

//# sourceMappingURL=re_view.core.js.map
