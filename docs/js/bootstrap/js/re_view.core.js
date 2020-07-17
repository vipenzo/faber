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
var G__49465 = props;
if(cljs.core.truth_(((cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149)))?(function (){var fexpr__49467 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["input",null,"textarea",null], null), null);
return (fexpr__49467.cljs$core$IFn$_invoke$arity$1 ? fexpr__49467.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__49467.call(null,tag));
})():false))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__49465,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_view.render_loop.apply_sync_BANG_);
} else {
return G__49465;
}
});
/**
 * Wrap a render function to force-update the component when re-db patterns accessed during evaluation are invalidated.
 */
re_view.core.reactive_render = (function re_view$core$reactive_render(f){
return (function (){
var this$ = this;
var re$view = goog.object.get(this$,"re$view");
var map__49468 = (function (){var _STAR_pattern_log_STAR__orig_val__49469 = re_db.patterns._STAR_pattern_log_STAR_;
var _STAR_pattern_log_STAR__temp_val__49470 = cljs.core.PersistentArrayMap.EMPTY;
(re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR__temp_val__49470);

try{var map__49471 = (function (){var _STAR_db_log_STAR__orig_val__49472 = re_db.core._STAR_db_log_STAR_;
var _STAR_prevent_notify_STAR__orig_val__49473 = re_db.core._STAR_prevent_notify_STAR_;
var _STAR_db_log_STAR__temp_val__49474 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var _STAR_prevent_notify_STAR__temp_val__49475 = true;
(re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR__temp_val__49474);

(re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR__temp_val__49475);

try{var value__41338__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value__41338__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),cljs.core.deref(re_db.core._STAR_db_log_STAR_)], null);
}finally {(re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR__orig_val__49473);

(re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR__orig_val__49472);
}})();
var map__49471__$1 = (((((!((map__49471 == null))))?(((((map__49471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49471):map__49471);
var tx_report__42271__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49471__$1,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391));
var value__42270__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49471__$1,new cljs.core.Keyword(null,"value","value",305978217));
var patterns__42272__auto__ = re_db.patterns._STAR_pattern_log_STAR_;
re_db.core.notify_listeners(tx_report__42271__auto__);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),patterns__42272__auto__,new cljs.core.Keyword(null,"value","value",305978217),value__42270__auto__], null);
}finally {(re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR__orig_val__49469);
}})();
var map__49468__$1 = (((((!((map__49468 == null))))?(((((map__49468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49468):map__49468);
var patterns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49468__$1,new cljs.core.Keyword(null,"patterns","patterns",1164082024));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49468__$1,new cljs.core.Keyword(null,"value","value",305978217));
var prev_patterns = new cljs.core.Keyword("view","re-db.patterns","view/re-db.patterns",-379797888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_patterns,patterns)){
} else {
var temp__5735__auto___49654 = goog.object.get(this$,"reactiveUnsubscribe");
if(cljs.core.truth_(temp__5735__auto___49654)){
var un_sub_49656 = temp__5735__auto___49654;
(un_sub_49656.cljs$core$IFn$_invoke$arity$0 ? un_sub_49656.cljs$core$IFn$_invoke$arity$0() : un_sub_49656.call(null));
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
var len__4736__auto___49657 = arguments.length;
var i__4737__auto___49658 = (0);
while(true){
if((i__4737__auto___49658 < len__4736__auto___49657)){
args__4742__auto__.push((arguments[i__4737__auto___49658]));

var G__49659 = (i__4737__auto___49658 + (1));
i__4737__auto___49658 = G__49659;
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
var G__49661__delegate = function (args){
var seq__49485 = cljs.core.seq(fns);
var chunk__49486 = null;
var count__49487 = (0);
var i__49488 = (0);
while(true){
if((i__49488 < count__49487)){
var f = chunk__49486.cljs$core$IIndexed$_nth$arity$2(null,i__49488);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__49662 = seq__49485;
var G__49663 = chunk__49486;
var G__49664 = count__49487;
var G__49665 = (i__49488 + (1));
seq__49485 = G__49662;
chunk__49486 = G__49663;
count__49487 = G__49664;
i__49488 = G__49665;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49485);
if(temp__5735__auto__){
var seq__49485__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49485__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49485__$1);
var G__49667 = cljs.core.chunk_rest(seq__49485__$1);
var G__49668 = c__4556__auto__;
var G__49669 = cljs.core.count(c__4556__auto__);
var G__49670 = (0);
seq__49485 = G__49667;
chunk__49486 = G__49668;
count__49487 = G__49669;
i__49488 = G__49670;
continue;
} else {
var f = cljs.core.first(seq__49485__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__49671 = cljs.core.next(seq__49485__$1);
var G__49672 = null;
var G__49673 = (0);
var G__49674 = (0);
seq__49485 = G__49671;
chunk__49486 = G__49672;
count__49487 = G__49673;
i__49488 = G__49674;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__49661 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49675__i = 0, G__49675__a = new Array(arguments.length -  0);
while (G__49675__i < G__49675__a.length) {G__49675__a[G__49675__i] = arguments[G__49675__i + 0]; ++G__49675__i;}
  args = new cljs.core.IndexedSeq(G__49675__a,0,null);
} 
return G__49661__delegate.call(this,args);};
G__49661.cljs$lang$maxFixedArity = 0;
G__49661.cljs$lang$applyTo = (function (arglist__49676){
var args = cljs.core.seq(arglist__49676);
return G__49661__delegate(args);
});
G__49661.cljs$core$IFn$_invoke$arity$variadic = G__49661__delegate;
return G__49661;
})()
;
}));

(re_view.core.compseq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.core.compseq.cljs$lang$applyTo = (function (seq49478){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49478));
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
var G__49515 = m;
if(cljs.core.vector_QMARK_(fns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49515,method_k,((cljs.core.keyword_identical_QMARK_(method_k,new cljs.core.Keyword("view","should-update","view/should-update",-1289068156)))?cljs.core.last(fns):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_view.core.compseq,fns)));
} else {
return G__49515;
}
}),methods$__$1,methods$__$1);
});
re_view.core.finish_lifecycle = (function re_view$core$finish_lifecycle(this$){

var re$view = (this$["re$view"]);
var map__49516 = cljs.core.deref(re$view);
var map__49516__$1 = (((((!((map__49516 == null))))?(((((map__49516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49516):map__49516);
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49516__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49516__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49516__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
return cljs.core.vreset_BANG_(re$view,(function (){var G__49524 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(re$view),new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),children], 0));
if(cljs.core.truth_(state)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49524,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886),cljs.core.deref(state));
} else {
return G__49524;
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
var G__49537 = method_k;
var G__49537__$1 = (((G__49537 instanceof cljs.core.Keyword))?G__49537.fqn:null);
switch (G__49537__$1) {
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
var _STAR_trigger_state_render_STAR__orig_val__49542 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__49543 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__49543);

try{var this$ = this;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,props) : f.call(null,this$,props));
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__49542);
}});

break;
case "view/will-mount":
case "view/will-unmount":
case "view/will-receive-state":
case "view/will-update":
return (function (){
var _STAR_trigger_state_render_STAR__orig_val__49544 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__49545 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__49545);

try{var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(goog.object.get(this$,"re$view"))));
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__49544);
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
var G__49678__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,args);
};
var G__49678 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49679__i = 0, G__49679__a = new Array(arguments.length -  0);
while (G__49679__i < G__49679__a.length) {G__49679__a[G__49679__i] = arguments[G__49679__i + 0]; ++G__49679__i;}
  args = new cljs.core.IndexedSeq(G__49679__a,0,null);
} 
return G__49678__delegate.call(this,args);};
G__49678.cljs$lang$maxFixedArity = 0;
G__49678.cljs$lang$applyTo = (function (arglist__49680){
var args = cljs.core.seq(arglist__49680);
return G__49678__delegate(args);
});
G__49678.cljs$core$IFn$_invoke$arity$variadic = G__49678__delegate;
return G__49678;
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

var temp__5735__auto___49681 = goog.object.get(component,"componentWillReceiveState");
if(cljs.core.truth_(temp__5735__auto___49681)){
var will_receive_49682 = temp__5735__auto___49681;
will_receive_49682.call(component);
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
if(cljs.core.truth_((function (){var G__49554 = cljs.core.namespace(k);
var fexpr__49553 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__49553.cljs$core$IFn$_invoke$arity$1 ? fexpr__49553.cljs$core$IFn$_invoke$arity$1(G__49554) : fexpr__49553.call(null,G__49554));
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
if(cljs.core.truth_((function (){var G__49560 = cljs.core.namespace(k);
var fexpr__49559 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__49559.cljs$core$IFn$_invoke$arity$1 ? fexpr__49559.cljs$core$IFn$_invoke$arity$1(G__49560) : fexpr__49559.call(null,G__49560));
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
var G__49562 = obj;
goog.object.set(G__49562,cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.core.kmap,method_k),re_view.core.wrap_methods(method_k,method));

return G__49562;
}),({}),re_view.core.collect(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-receive-props","view/will-receive-props",-56046583),(function (this$,props){
var map__49563 = this$;
var map__49563__$1 = (((((!((map__49563 == null))))?(((((map__49563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49563):map__49563);
var this$__$1 = map__49563__$1;
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49563__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49563__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var next_props = (props["props"]);
return cljs.core._vreset_BANG_(goog.object.get(this$__$1,"re$view"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(goog.object.get(this$__$1,"re$view")),new cljs.core.Keyword("view","props","view/props",449562012),next_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,new cljs.core.Keyword("view","children","view/children",-946116505),(props["children"]),new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),prev_children], 0)));
}),new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),(function (p__49566){
var map__49567 = p__49566;
var map__49567__$1 = (((((!((map__49567 == null))))?(((((map__49567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49567):map__49567);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49567__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49567__$1,new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49567__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49567__$1,new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49567__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var prev_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49567__$1,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886));
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
})], null),methods$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (p__49569){
var map__49570 = p__49569;
var map__49570__$1 = (((((!((map__49570 == null))))?(((((map__49570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49570):map__49570);
var this$ = map__49570__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49570__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
goog.object.set(this$,"unmounted",true);

var temp__5735__auto___49684 = (this$["reactiveUnsubscribe"]);
if(cljs.core.truth_(temp__5735__auto___49684)){
var un_sub_49685 = temp__5735__auto___49684;
(un_sub_49685.cljs$core$IFn$_invoke$arity$0 ? un_sub_49685.cljs$core$IFn$_invoke$arity$0() : un_sub_49685.call(null));
} else {
}

var G__49572 = state;
if((G__49572 == null)){
return null;
} else {
return cljs.core.remove_watch(G__49572,this$);
}
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),re_view.core.finish_lifecycle], null)], null)));
});
/**
 * Swap a component's state atom without forcing an update (render)
 */
re_view.core.swap_silently_BANG_ = (function re_view$core$swap_silently_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___49686 = arguments.length;
var i__4737__auto___49687 = (0);
while(true){
if((i__4737__auto___49687 < len__4736__auto___49686)){
args__4742__auto__.push((arguments[i__4737__auto___49687]));

var G__49688 = (i__4737__auto___49687 + (1));
i__4737__auto___49687 = G__49688;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_trigger_state_render_STAR__orig_val__49574 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__49575 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__49575);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__49574);
}}));

(re_view.core.swap_silently_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.core.swap_silently_BANG_.cljs$lang$applyTo = (function (seq49573){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49573));
}));

/**
 * Bind element methods and populate initial props for `component`.
 */
re_view.core.init_component = (function re_view$core$init_component(component,$props){
if(cljs.core.truth_($props)){
var props_49689 = goog.object.get($props,"props");
var children_49690 = goog.object.get($props,"children");
goog.object.set(component,"re$view",cljs.core.volatile_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(goog.object.get($props,"class"),new cljs.core.Keyword("view","props","view/props",449562012),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props_49689,new cljs.core.Keyword("view","state","view/state",-1991815820)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","children","view/children",-946116505),children_49690], 0))));

var temp__5735__auto___49691 = goog.object.get($props,"instance");
if(cljs.core.truth_(temp__5735__auto___49691)){
var instance_keys_49692 = temp__5735__auto___49691;
var seq__49577_49693 = cljs.core.seq(goog.object.getKeys(instance_keys_49692));
var chunk__49578_49694 = null;
var count__49579_49695 = (0);
var i__49580_49696 = (0);
while(true){
if((i__49580_49696 < count__49579_49695)){
var k_49697 = chunk__49578_49694.cljs$core$IIndexed$_nth$arity$2(null,i__49580_49696);
var f_49698 = goog.object.get(instance_keys_49692,k_49697);
goog.object.set(component,k_49697,((cljs.core.fn_QMARK_(f_49698))?((function (seq__49577_49693,chunk__49578_49694,count__49579_49695,i__49580_49696,f_49698,k_49697,instance_keys_49692,temp__5735__auto___49691,props_49689,children_49690){
return (function() { 
var G__49699__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_49698,component,args);
};
var G__49699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49700__i = 0, G__49700__a = new Array(arguments.length -  0);
while (G__49700__i < G__49700__a.length) {G__49700__a[G__49700__i] = arguments[G__49700__i + 0]; ++G__49700__i;}
  args = new cljs.core.IndexedSeq(G__49700__a,0,null);
} 
return G__49699__delegate.call(this,args);};
G__49699.cljs$lang$maxFixedArity = 0;
G__49699.cljs$lang$applyTo = (function (arglist__49701){
var args = cljs.core.seq(arglist__49701);
return G__49699__delegate(args);
});
G__49699.cljs$core$IFn$_invoke$arity$variadic = G__49699__delegate;
return G__49699;
})()
;})(seq__49577_49693,chunk__49578_49694,count__49579_49695,i__49580_49696,f_49698,k_49697,instance_keys_49692,temp__5735__auto___49691,props_49689,children_49690))
:f_49698));


var G__49702 = seq__49577_49693;
var G__49703 = chunk__49578_49694;
var G__49704 = count__49579_49695;
var G__49705 = (i__49580_49696 + (1));
seq__49577_49693 = G__49702;
chunk__49578_49694 = G__49703;
count__49579_49695 = G__49704;
i__49580_49696 = G__49705;
continue;
} else {
var temp__5735__auto___49706__$1 = cljs.core.seq(seq__49577_49693);
if(temp__5735__auto___49706__$1){
var seq__49577_49707__$1 = temp__5735__auto___49706__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49577_49707__$1)){
var c__4556__auto___49708 = cljs.core.chunk_first(seq__49577_49707__$1);
var G__49709 = cljs.core.chunk_rest(seq__49577_49707__$1);
var G__49710 = c__4556__auto___49708;
var G__49711 = cljs.core.count(c__4556__auto___49708);
var G__49712 = (0);
seq__49577_49693 = G__49709;
chunk__49578_49694 = G__49710;
count__49579_49695 = G__49711;
i__49580_49696 = G__49712;
continue;
} else {
var k_49713 = cljs.core.first(seq__49577_49707__$1);
var f_49714 = goog.object.get(instance_keys_49692,k_49713);
goog.object.set(component,k_49713,((cljs.core.fn_QMARK_(f_49714))?((function (seq__49577_49693,chunk__49578_49694,count__49579_49695,i__49580_49696,f_49714,k_49713,seq__49577_49707__$1,temp__5735__auto___49706__$1,instance_keys_49692,temp__5735__auto___49691,props_49689,children_49690){
return (function() { 
var G__49715__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_49714,component,args);
};
var G__49715 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49716__i = 0, G__49716__a = new Array(arguments.length -  0);
while (G__49716__i < G__49716__a.length) {G__49716__a[G__49716__i] = arguments[G__49716__i + 0]; ++G__49716__i;}
  args = new cljs.core.IndexedSeq(G__49716__a,0,null);
} 
return G__49715__delegate.call(this,args);};
G__49715.cljs$lang$maxFixedArity = 0;
G__49715.cljs$lang$applyTo = (function (arglist__49717){
var args = cljs.core.seq(arglist__49717);
return G__49715__delegate(args);
});
G__49715.cljs$core$IFn$_invoke$arity$variadic = G__49715__delegate;
return G__49715;
})()
;})(seq__49577_49693,chunk__49578_49694,count__49579_49695,i__49580_49696,f_49714,k_49713,seq__49577_49707__$1,temp__5735__auto___49706__$1,instance_keys_49692,temp__5735__auto___49691,props_49689,children_49690))
:f_49714));


var G__49718 = cljs.core.next(seq__49577_49707__$1);
var G__49719 = null;
var G__49720 = (0);
var G__49721 = (0);
seq__49577_49693 = G__49718;
chunk__49578_49694 = G__49719;
count__49579_49695 = G__49720;
i__49580_49696 = G__49721;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5735__auto___49722 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props_49689,new cljs.core.Keyword("view","state","view/state",-1991815820));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto___49722 = goog.object.get(component,"$initialState");
if(cljs.core.truth_(temp__5735__auto___49722)){
var initial_state = temp__5735__auto___49722;
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var G__49588 = initial_state;
if(cljs.core.fn_QMARK_(initial_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__49588,component,children_49690);
} else {
return G__49588;
}
})());
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5735__auto___49722 = goog.object.get(component,"$state");
if(cljs.core.truth_(temp__5735__auto___49722)){
var watchable_state = temp__5735__auto___49722;
var G__49589 = watchable_state;
if(cljs.core.fn_QMARK_(watchable_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__49589,component,children_49690);
} else {
return G__49589;
}
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(temp__5735__auto___49722)){
var state_49723 = temp__5735__auto___49722;
re_view.core.init_state_BANG_(component,state_49723);
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
var map__49591 = goog.object.get(constructor$,"re$view$base");
var map__49591__$1 = (((((!((map__49591 == null))))?(((((map__49591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49591):map__49591);
var re$view$base = map__49591__$1;
var class_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49591__$1,new cljs.core.Keyword(null,"class-keys","class-keys",106917605));
var instance_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49591__$1,new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647));
var map__49592 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(class_keys,new cljs.core.Keyword("spec","props","spec/props",450064562),re_view.view_spec.normalize_props_map),new cljs.core.Keyword("spec","children","spec/children",-946200067),re_view.view_spec.resolve_spec_vector);
var map__49592__$1 = (((((!((map__49592 == null))))?(((((map__49592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49592):map__49592);
var class_keys__$1 = map__49592__$1;
var map__49593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49592__$1,new cljs.core.Keyword("spec","props","spec/props",450064562));
var map__49593__$1 = (((((!((map__49593 == null))))?(((((map__49593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49593):map__49593);
var prop_spec = map__49593__$1;
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49593__$1,new cljs.core.Keyword("props","defaults","props/defaults",999110366));
var children_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49592__$1,new cljs.core.Keyword("spec","children","spec/children",-946200067));
var class_react_key = goog.object.get(constructor$,"key");
var display_name = goog.object.get(constructor$,"displayName");
var G__49598 = (function() { 
var G__49725__delegate = function (props,children){
var vec__49599 = ((((cljs.core.map_QMARK_(props)) || ((props == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(props,children)], null));
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49599,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49599,(1),null);
var props__$2 = (function (){var G__49602 = props__$1;
if(cljs.core.truth_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,G__49602], 0));
} else {
return G__49602;
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
var G__49725 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__49727__i = 0, G__49727__a = new Array(arguments.length -  1);
while (G__49727__i < G__49727__a.length) {G__49727__a[G__49727__i] = arguments[G__49727__i + 1]; ++G__49727__i;}
  children = new cljs.core.IndexedSeq(G__49727__a,0,null);
} 
return G__49725__delegate.call(this,props,children);};
G__49725.cljs$lang$maxFixedArity = 1;
G__49725.cljs$lang$applyTo = (function (arglist__49728){
var props = cljs.core.first(arglist__49728);
var children = cljs.core.rest(arglist__49728);
return G__49725__delegate(props,children);
});
G__49725.cljs$core$IFn$_invoke$arity$variadic = G__49725__delegate;
return G__49725;
})()
;
goog.object.set(G__49598,"re$view$base",re$view$base);

return G__49598;
});
re_view.core.class_STAR_ = (function re_view$core$class_STAR_(p__49604){
var map__49605 = p__49604;
var map__49605__$1 = (((((!((map__49605 == null))))?(((((map__49605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49605):map__49605);
var re_view_base = map__49605__$1;
var lifecycle_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49605__$1,new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896));
var react_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49605__$1,new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002));
var prototype = (new module$node_modules$react$index.Component());
var _ = goog.object.extend(prototype,re_view.core.lifecycle_methods(lifecycle_keys));
var constructor$ = (function re_view$core$class_STAR__$_ReView($props){
var this$ = this;
return re_view.core.init_component(this$,$props);
});
var ___$1 = goog.object.set(constructor$,"prototype",prototype);
var seq__49607_49729 = cljs.core.seq(cljs.core.seq(react_keys));
var chunk__49608_49730 = null;
var count__49609_49731 = (0);
var i__49610_49732 = (0);
while(true){
if((i__49610_49732 < count__49609_49731)){
var vec__49619_49733 = chunk__49608_49730.cljs$core$IIndexed$_nth$arity$2(null,i__49610_49732);
var k_49734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49619_49733,(0),null);
var v_49735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49619_49733,(1),null);
goog.object.set(constructor$,re_view.util.camelCase(k_49734),v_49735);


var G__49736 = seq__49607_49729;
var G__49737 = chunk__49608_49730;
var G__49738 = count__49609_49731;
var G__49739 = (i__49610_49732 + (1));
seq__49607_49729 = G__49736;
chunk__49608_49730 = G__49737;
count__49609_49731 = G__49738;
i__49610_49732 = G__49739;
continue;
} else {
var temp__5735__auto___49740 = cljs.core.seq(seq__49607_49729);
if(temp__5735__auto___49740){
var seq__49607_49741__$1 = temp__5735__auto___49740;
if(cljs.core.chunked_seq_QMARK_(seq__49607_49741__$1)){
var c__4556__auto___49742 = cljs.core.chunk_first(seq__49607_49741__$1);
var G__49743 = cljs.core.chunk_rest(seq__49607_49741__$1);
var G__49744 = c__4556__auto___49742;
var G__49745 = cljs.core.count(c__4556__auto___49742);
var G__49746 = (0);
seq__49607_49729 = G__49743;
chunk__49608_49730 = G__49744;
count__49609_49731 = G__49745;
i__49610_49732 = G__49746;
continue;
} else {
var vec__49622_49747 = cljs.core.first(seq__49607_49741__$1);
var k_49748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49622_49747,(0),null);
var v_49749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49622_49747,(1),null);
goog.object.set(constructor$,re_view.util.camelCase(k_49748),v_49749);


var G__49751 = cljs.core.next(seq__49607_49741__$1);
var G__49752 = null;
var G__49753 = (0);
var G__49754 = (0);
seq__49607_49729 = G__49751;
chunk__49608_49730 = G__49752;
count__49609_49731 = G__49753;
i__49610_49732 = G__49754;
continue;
}
} else {
}
}
break;
}

var G__49625 = constructor$;
goog.object.set(G__49625,"re$view$base",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_view_base,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),prototype));

return G__49625;
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
return module$node_modules$react_dom$index.render(component,(function (){var G__49626 = element;
if(typeof element === 'string'){
return document.getElementById(G__49626);
} else {
return G__49626;
}
})());
});
/**
 * Partially apply props and optional class-keys to base view. Props specified at runtime will overwrite those given here.
 *   `re$view$base` property is retained on preserved.
 */
re_view.core.partial = (function re_view$core$partial(var_args){
var G__49632 = arguments.length;
switch (G__49632) {
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
var G__49634 = (function() { 
var G__49756__delegate = function (args){
var vec__49638 = (function (){var G__49641 = args;
if((!(cljs.core.map_QMARK_(cljs.core.first(args))))){
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,G__49641);
} else {
return G__49641;
}
})();
var seq__49639 = cljs.core.seq(vec__49638);
var first__49640 = cljs.core.first(seq__49639);
var seq__49639__$1 = cljs.core.next(seq__49639);
var user_props = first__49640;
var children = seq__49639__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(base,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,user_props], 0)),children);
};
var G__49756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49758__i = 0, G__49758__a = new Array(arguments.length -  0);
while (G__49758__i < G__49758__a.length) {G__49758__a[G__49758__i] = arguments[G__49758__i + 0]; ++G__49758__i;}
  args = new cljs.core.IndexedSeq(G__49758__a,0,null);
} 
return G__49756__delegate.call(this,args);};
G__49756.cljs$lang$maxFixedArity = 0;
G__49756.cljs$lang$applyTo = (function (arglist__49759){
var args = cljs.core.seq(arglist__49759);
return G__49756__delegate(args);
});
G__49756.cljs$core$IFn$_invoke$arity$variadic = G__49756__delegate;
return G__49756;
})()
;
goog.object.set(G__49634,"re$view$base",goog.object.get(base,"re$view$base"));

return G__49634;
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
