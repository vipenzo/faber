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
var G__27724 = props;
if(cljs.core.truth_(((cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149)))?(function (){var fexpr__27726 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["input",null,"textarea",null], null), null);
return (fexpr__27726.cljs$core$IFn$_invoke$arity$1 ? fexpr__27726.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__27726.call(null,tag));
})():false))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__27724,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_view.render_loop.apply_sync_BANG_);
} else {
return G__27724;
}
});
/**
 * Wrap a render function to force-update the component when re-db patterns accessed during evaluation are invalidated.
 */
re_view.core.reactive_render = (function re_view$core$reactive_render(f){
return (function (){
var this$ = this;
var re$view = goog.object.get(this$,"re$view");
var map__27731 = (function (){var _STAR_pattern_log_STAR__orig_val__27733 = re_db.patterns._STAR_pattern_log_STAR_;
var _STAR_pattern_log_STAR__temp_val__27734 = cljs.core.PersistentArrayMap.EMPTY;
(re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR__temp_val__27734);

try{var map__27735 = (function (){var _STAR_db_log_STAR__orig_val__27736 = re_db.core._STAR_db_log_STAR_;
var _STAR_prevent_notify_STAR__orig_val__27737 = re_db.core._STAR_prevent_notify_STAR_;
var _STAR_db_log_STAR__temp_val__27738 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var _STAR_prevent_notify_STAR__temp_val__27739 = true;
(re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR__temp_val__27738);

(re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR__temp_val__27739);

try{var value__26573__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value__26573__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),cljs.core.deref(re_db.core._STAR_db_log_STAR_)], null);
}finally {(re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR__orig_val__27737);

(re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR__orig_val__27736);
}})();
var map__27735__$1 = (((((!((map__27735 == null))))?(((((map__27735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27735):map__27735);
var tx_report__27519__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27735__$1,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391));
var value__27518__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27735__$1,new cljs.core.Keyword(null,"value","value",305978217));
var patterns__27520__auto__ = re_db.patterns._STAR_pattern_log_STAR_;
re_db.core.notify_listeners(tx_report__27519__auto__);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),patterns__27520__auto__,new cljs.core.Keyword(null,"value","value",305978217),value__27518__auto__], null);
}finally {(re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR__orig_val__27733);
}})();
var map__27731__$1 = (((((!((map__27731 == null))))?(((((map__27731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27731):map__27731);
var patterns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27731__$1,new cljs.core.Keyword(null,"patterns","patterns",1164082024));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27731__$1,new cljs.core.Keyword(null,"value","value",305978217));
var prev_patterns = new cljs.core.Keyword("view","re-db.patterns","view/re-db.patterns",-379797888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_patterns,patterns)){
} else {
var temp__5735__auto___28046 = goog.object.get(this$,"reactiveUnsubscribe");
if(cljs.core.truth_(temp__5735__auto___28046)){
var un_sub_28047 = temp__5735__auto___28046;
(un_sub_28047.cljs$core$IFn$_invoke$arity$0 ? un_sub_28047.cljs$core$IFn$_invoke$arity$0() : un_sub_28047.call(null));
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
var len__4736__auto___28051 = arguments.length;
var i__4737__auto___28052 = (0);
while(true){
if((i__4737__auto___28052 < len__4736__auto___28051)){
args__4742__auto__.push((arguments[i__4737__auto___28052]));

var G__28054 = (i__4737__auto___28052 + (1));
i__4737__auto___28052 = G__28054;
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
var G__28060__delegate = function (args){
var seq__27767 = cljs.core.seq(fns);
var chunk__27768 = null;
var count__27769 = (0);
var i__27770 = (0);
while(true){
if((i__27770 < count__27769)){
var f = chunk__27768.cljs$core$IIndexed$_nth$arity$2(null,i__27770);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__28065 = seq__27767;
var G__28066 = chunk__27768;
var G__28067 = count__27769;
var G__28068 = (i__27770 + (1));
seq__27767 = G__28065;
chunk__27768 = G__28066;
count__27769 = G__28067;
i__27770 = G__28068;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27767);
if(temp__5735__auto__){
var seq__27767__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27767__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27767__$1);
var G__28073 = cljs.core.chunk_rest(seq__27767__$1);
var G__28074 = c__4556__auto__;
var G__28075 = cljs.core.count(c__4556__auto__);
var G__28076 = (0);
seq__27767 = G__28073;
chunk__27768 = G__28074;
count__27769 = G__28075;
i__27770 = G__28076;
continue;
} else {
var f = cljs.core.first(seq__27767__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__28080 = cljs.core.next(seq__27767__$1);
var G__28081 = null;
var G__28082 = (0);
var G__28083 = (0);
seq__27767 = G__28080;
chunk__27768 = G__28081;
count__27769 = G__28082;
i__27770 = G__28083;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__28060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28086__i = 0, G__28086__a = new Array(arguments.length -  0);
while (G__28086__i < G__28086__a.length) {G__28086__a[G__28086__i] = arguments[G__28086__i + 0]; ++G__28086__i;}
  args = new cljs.core.IndexedSeq(G__28086__a,0,null);
} 
return G__28060__delegate.call(this,args);};
G__28060.cljs$lang$maxFixedArity = 0;
G__28060.cljs$lang$applyTo = (function (arglist__28090){
var args = cljs.core.seq(arglist__28090);
return G__28060__delegate(args);
});
G__28060.cljs$core$IFn$_invoke$arity$variadic = G__28060__delegate;
return G__28060;
})()
;
}));

(re_view.core.compseq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.core.compseq.cljs$lang$applyTo = (function (seq27761){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27761));
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
var G__27797 = m;
if(cljs.core.vector_QMARK_(fns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27797,method_k,((cljs.core.keyword_identical_QMARK_(method_k,new cljs.core.Keyword("view","should-update","view/should-update",-1289068156)))?cljs.core.last(fns):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_view.core.compseq,fns)));
} else {
return G__27797;
}
}),methods$__$1,methods$__$1);
});
re_view.core.finish_lifecycle = (function re_view$core$finish_lifecycle(this$){

var re$view = (this$["re$view"]);
var map__27803 = cljs.core.deref(re$view);
var map__27803__$1 = (((((!((map__27803 == null))))?(((((map__27803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27803):map__27803);
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27803__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27803__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27803__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
return cljs.core.vreset_BANG_(re$view,(function (){var G__27813 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(re$view),new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),children], 0));
if(cljs.core.truth_(state)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27813,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886),cljs.core.deref(state));
} else {
return G__27813;
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
var G__27820 = method_k;
var G__27820__$1 = (((G__27820 instanceof cljs.core.Keyword))?G__27820.fqn:null);
switch (G__27820__$1) {
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
var _STAR_trigger_state_render_STAR__orig_val__27821 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__27822 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__27822);

try{var this$ = this;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,props) : f.call(null,this$,props));
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__27821);
}});

break;
case "view/will-mount":
case "view/will-unmount":
case "view/will-receive-state":
case "view/will-update":
return (function (){
var _STAR_trigger_state_render_STAR__orig_val__27830 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__27831 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__27831);

try{var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(goog.object.get(this$,"re$view"))));
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__27830);
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
var G__28119__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,args);
};
var G__28119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28120__i = 0, G__28120__a = new Array(arguments.length -  0);
while (G__28120__i < G__28120__a.length) {G__28120__a[G__28120__i] = arguments[G__28120__i + 0]; ++G__28120__i;}
  args = new cljs.core.IndexedSeq(G__28120__a,0,null);
} 
return G__28119__delegate.call(this,args);};
G__28119.cljs$lang$maxFixedArity = 0;
G__28119.cljs$lang$applyTo = (function (arglist__28121){
var args = cljs.core.seq(arglist__28121);
return G__28119__delegate(args);
});
G__28119.cljs$core$IFn$_invoke$arity$variadic = G__28119__delegate;
return G__28119;
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

var temp__5735__auto___28124 = goog.object.get(component,"componentWillReceiveState");
if(cljs.core.truth_(temp__5735__auto___28124)){
var will_receive_28125 = temp__5735__auto___28124;
will_receive_28125.call(component);
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
if(cljs.core.truth_((function (){var G__27845 = cljs.core.namespace(k);
var fexpr__27844 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__27844.cljs$core$IFn$_invoke$arity$1 ? fexpr__27844.cljs$core$IFn$_invoke$arity$1(G__27845) : fexpr__27844.call(null,G__27845));
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
if(cljs.core.truth_((function (){var G__27847 = cljs.core.namespace(k);
var fexpr__27846 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__27846.cljs$core$IFn$_invoke$arity$1 ? fexpr__27846.cljs$core$IFn$_invoke$arity$1(G__27847) : fexpr__27846.call(null,G__27847));
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
var G__27852 = obj;
goog.object.set(G__27852,cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.core.kmap,method_k),re_view.core.wrap_methods(method_k,method));

return G__27852;
}),({}),re_view.core.collect(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-receive-props","view/will-receive-props",-56046583),(function (this$,props){
var map__27853 = this$;
var map__27853__$1 = (((((!((map__27853 == null))))?(((((map__27853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27853):map__27853);
var this$__$1 = map__27853__$1;
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27853__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27853__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var next_props = (props["props"]);
return cljs.core._vreset_BANG_(goog.object.get(this$__$1,"re$view"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(goog.object.get(this$__$1,"re$view")),new cljs.core.Keyword("view","props","view/props",449562012),next_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,new cljs.core.Keyword("view","children","view/children",-946116505),(props["children"]),new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),prev_children], 0)));
}),new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),(function (p__27855){
var map__27856 = p__27855;
var map__27856__$1 = (((((!((map__27856 == null))))?(((((map__27856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27856):map__27856);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var prev_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27856__$1,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886));
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
})], null),methods$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (p__27863){
var map__27864 = p__27863;
var map__27864__$1 = (((((!((map__27864 == null))))?(((((map__27864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27864):map__27864);
var this$ = map__27864__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27864__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
goog.object.set(this$,"unmounted",true);

var temp__5735__auto___28155 = (this$["reactiveUnsubscribe"]);
if(cljs.core.truth_(temp__5735__auto___28155)){
var un_sub_28156 = temp__5735__auto___28155;
(un_sub_28156.cljs$core$IFn$_invoke$arity$0 ? un_sub_28156.cljs$core$IFn$_invoke$arity$0() : un_sub_28156.call(null));
} else {
}

var G__27869 = state;
if((G__27869 == null)){
return null;
} else {
return cljs.core.remove_watch(G__27869,this$);
}
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),re_view.core.finish_lifecycle], null)], null)));
});
/**
 * Swap a component's state atom without forcing an update (render)
 */
re_view.core.swap_silently_BANG_ = (function re_view$core$swap_silently_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28160 = arguments.length;
var i__4737__auto___28161 = (0);
while(true){
if((i__4737__auto___28161 < len__4736__auto___28160)){
args__4742__auto__.push((arguments[i__4737__auto___28161]));

var G__28162 = (i__4737__auto___28161 + (1));
i__4737__auto___28161 = G__28162;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_trigger_state_render_STAR__orig_val__27874 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__27875 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__27875);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__27874);
}}));

(re_view.core.swap_silently_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.core.swap_silently_BANG_.cljs$lang$applyTo = (function (seq27870){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27870));
}));

/**
 * Bind element methods and populate initial props for `component`.
 */
re_view.core.init_component = (function re_view$core$init_component(component,$props){
if(cljs.core.truth_($props)){
var props_28167 = goog.object.get($props,"props");
var children_28168 = goog.object.get($props,"children");
goog.object.set(component,"re$view",cljs.core.volatile_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(goog.object.get($props,"class"),new cljs.core.Keyword("view","props","view/props",449562012),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props_28167,new cljs.core.Keyword("view","state","view/state",-1991815820)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","children","view/children",-946116505),children_28168], 0))));

var temp__5735__auto___28169 = goog.object.get($props,"instance");
if(cljs.core.truth_(temp__5735__auto___28169)){
var instance_keys_28170 = temp__5735__auto___28169;
var seq__27879_28171 = cljs.core.seq(goog.object.getKeys(instance_keys_28170));
var chunk__27880_28172 = null;
var count__27881_28173 = (0);
var i__27882_28174 = (0);
while(true){
if((i__27882_28174 < count__27881_28173)){
var k_28175 = chunk__27880_28172.cljs$core$IIndexed$_nth$arity$2(null,i__27882_28174);
var f_28176 = goog.object.get(instance_keys_28170,k_28175);
goog.object.set(component,k_28175,((cljs.core.fn_QMARK_(f_28176))?((function (seq__27879_28171,chunk__27880_28172,count__27881_28173,i__27882_28174,f_28176,k_28175,instance_keys_28170,temp__5735__auto___28169,props_28167,children_28168){
return (function() { 
var G__28180__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_28176,component,args);
};
var G__28180 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28181__i = 0, G__28181__a = new Array(arguments.length -  0);
while (G__28181__i < G__28181__a.length) {G__28181__a[G__28181__i] = arguments[G__28181__i + 0]; ++G__28181__i;}
  args = new cljs.core.IndexedSeq(G__28181__a,0,null);
} 
return G__28180__delegate.call(this,args);};
G__28180.cljs$lang$maxFixedArity = 0;
G__28180.cljs$lang$applyTo = (function (arglist__28186){
var args = cljs.core.seq(arglist__28186);
return G__28180__delegate(args);
});
G__28180.cljs$core$IFn$_invoke$arity$variadic = G__28180__delegate;
return G__28180;
})()
;})(seq__27879_28171,chunk__27880_28172,count__27881_28173,i__27882_28174,f_28176,k_28175,instance_keys_28170,temp__5735__auto___28169,props_28167,children_28168))
:f_28176));


var G__28187 = seq__27879_28171;
var G__28188 = chunk__27880_28172;
var G__28189 = count__27881_28173;
var G__28190 = (i__27882_28174 + (1));
seq__27879_28171 = G__28187;
chunk__27880_28172 = G__28188;
count__27881_28173 = G__28189;
i__27882_28174 = G__28190;
continue;
} else {
var temp__5735__auto___28191__$1 = cljs.core.seq(seq__27879_28171);
if(temp__5735__auto___28191__$1){
var seq__27879_28192__$1 = temp__5735__auto___28191__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27879_28192__$1)){
var c__4556__auto___28193 = cljs.core.chunk_first(seq__27879_28192__$1);
var G__28194 = cljs.core.chunk_rest(seq__27879_28192__$1);
var G__28195 = c__4556__auto___28193;
var G__28196 = cljs.core.count(c__4556__auto___28193);
var G__28197 = (0);
seq__27879_28171 = G__28194;
chunk__27880_28172 = G__28195;
count__27881_28173 = G__28196;
i__27882_28174 = G__28197;
continue;
} else {
var k_28198 = cljs.core.first(seq__27879_28192__$1);
var f_28199 = goog.object.get(instance_keys_28170,k_28198);
goog.object.set(component,k_28198,((cljs.core.fn_QMARK_(f_28199))?((function (seq__27879_28171,chunk__27880_28172,count__27881_28173,i__27882_28174,f_28199,k_28198,seq__27879_28192__$1,temp__5735__auto___28191__$1,instance_keys_28170,temp__5735__auto___28169,props_28167,children_28168){
return (function() { 
var G__28201__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_28199,component,args);
};
var G__28201 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28204__i = 0, G__28204__a = new Array(arguments.length -  0);
while (G__28204__i < G__28204__a.length) {G__28204__a[G__28204__i] = arguments[G__28204__i + 0]; ++G__28204__i;}
  args = new cljs.core.IndexedSeq(G__28204__a,0,null);
} 
return G__28201__delegate.call(this,args);};
G__28201.cljs$lang$maxFixedArity = 0;
G__28201.cljs$lang$applyTo = (function (arglist__28205){
var args = cljs.core.seq(arglist__28205);
return G__28201__delegate(args);
});
G__28201.cljs$core$IFn$_invoke$arity$variadic = G__28201__delegate;
return G__28201;
})()
;})(seq__27879_28171,chunk__27880_28172,count__27881_28173,i__27882_28174,f_28199,k_28198,seq__27879_28192__$1,temp__5735__auto___28191__$1,instance_keys_28170,temp__5735__auto___28169,props_28167,children_28168))
:f_28199));


var G__28206 = cljs.core.next(seq__27879_28192__$1);
var G__28207 = null;
var G__28208 = (0);
var G__28209 = (0);
seq__27879_28171 = G__28206;
chunk__27880_28172 = G__28207;
count__27881_28173 = G__28208;
i__27882_28174 = G__28209;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5735__auto___28210 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props_28167,new cljs.core.Keyword("view","state","view/state",-1991815820));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto___28210 = goog.object.get(component,"$initialState");
if(cljs.core.truth_(temp__5735__auto___28210)){
var initial_state = temp__5735__auto___28210;
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var G__27903 = initial_state;
if(cljs.core.fn_QMARK_(initial_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__27903,component,children_28168);
} else {
return G__27903;
}
})());
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5735__auto___28210 = goog.object.get(component,"$state");
if(cljs.core.truth_(temp__5735__auto___28210)){
var watchable_state = temp__5735__auto___28210;
var G__27906 = watchable_state;
if(cljs.core.fn_QMARK_(watchable_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__27906,component,children_28168);
} else {
return G__27906;
}
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(temp__5735__auto___28210)){
var state_28217 = temp__5735__auto___28210;
re_view.core.init_state_BANG_(component,state_28217);
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
var map__27923 = goog.object.get(constructor$,"re$view$base");
var map__27923__$1 = (((((!((map__27923 == null))))?(((((map__27923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27923):map__27923);
var re$view$base = map__27923__$1;
var class_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27923__$1,new cljs.core.Keyword(null,"class-keys","class-keys",106917605));
var instance_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27923__$1,new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647));
var map__27924 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(class_keys,new cljs.core.Keyword("spec","props","spec/props",450064562),re_view.view_spec.normalize_props_map),new cljs.core.Keyword("spec","children","spec/children",-946200067),re_view.view_spec.resolve_spec_vector);
var map__27924__$1 = (((((!((map__27924 == null))))?(((((map__27924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27924):map__27924);
var class_keys__$1 = map__27924__$1;
var map__27925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27924__$1,new cljs.core.Keyword("spec","props","spec/props",450064562));
var map__27925__$1 = (((((!((map__27925 == null))))?(((((map__27925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27925):map__27925);
var prop_spec = map__27925__$1;
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27925__$1,new cljs.core.Keyword("props","defaults","props/defaults",999110366));
var children_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27924__$1,new cljs.core.Keyword("spec","children","spec/children",-946200067));
var class_react_key = goog.object.get(constructor$,"key");
var display_name = goog.object.get(constructor$,"displayName");
var G__27936 = (function() { 
var G__28225__delegate = function (props,children){
var vec__27938 = ((((cljs.core.map_QMARK_(props)) || ((props == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(props,children)], null));
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27938,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27938,(1),null);
var props__$2 = (function (){var G__27951 = props__$1;
if(cljs.core.truth_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,G__27951], 0));
} else {
return G__27951;
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
var G__28225 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__28231__i = 0, G__28231__a = new Array(arguments.length -  1);
while (G__28231__i < G__28231__a.length) {G__28231__a[G__28231__i] = arguments[G__28231__i + 1]; ++G__28231__i;}
  children = new cljs.core.IndexedSeq(G__28231__a,0,null);
} 
return G__28225__delegate.call(this,props,children);};
G__28225.cljs$lang$maxFixedArity = 1;
G__28225.cljs$lang$applyTo = (function (arglist__28232){
var props = cljs.core.first(arglist__28232);
var children = cljs.core.rest(arglist__28232);
return G__28225__delegate(props,children);
});
G__28225.cljs$core$IFn$_invoke$arity$variadic = G__28225__delegate;
return G__28225;
})()
;
goog.object.set(G__27936,"re$view$base",re$view$base);

return G__27936;
});
re_view.core.class_STAR_ = (function re_view$core$class_STAR_(p__27964){
var map__27965 = p__27964;
var map__27965__$1 = (((((!((map__27965 == null))))?(((((map__27965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27965):map__27965);
var re_view_base = map__27965__$1;
var lifecycle_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27965__$1,new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896));
var react_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27965__$1,new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002));
var prototype = (new module$node_modules$react$index.Component());
var _ = goog.object.extend(prototype,re_view.core.lifecycle_methods(lifecycle_keys));
var constructor$ = (function re_view$core$class_STAR__$_ReView($props){
var this$ = this;
return re_view.core.init_component(this$,$props);
});
var ___$1 = goog.object.set(constructor$,"prototype",prototype);
var seq__27968_28237 = cljs.core.seq(cljs.core.seq(react_keys));
var chunk__27969_28238 = null;
var count__27970_28239 = (0);
var i__27971_28240 = (0);
while(true){
if((i__27971_28240 < count__27970_28239)){
var vec__27984_28241 = chunk__27969_28238.cljs$core$IIndexed$_nth$arity$2(null,i__27971_28240);
var k_28242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27984_28241,(0),null);
var v_28243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27984_28241,(1),null);
goog.object.set(constructor$,re_view.util.camelCase(k_28242),v_28243);


var G__28244 = seq__27968_28237;
var G__28245 = chunk__27969_28238;
var G__28246 = count__27970_28239;
var G__28247 = (i__27971_28240 + (1));
seq__27968_28237 = G__28244;
chunk__27969_28238 = G__28245;
count__27970_28239 = G__28246;
i__27971_28240 = G__28247;
continue;
} else {
var temp__5735__auto___28248 = cljs.core.seq(seq__27968_28237);
if(temp__5735__auto___28248){
var seq__27968_28249__$1 = temp__5735__auto___28248;
if(cljs.core.chunked_seq_QMARK_(seq__27968_28249__$1)){
var c__4556__auto___28250 = cljs.core.chunk_first(seq__27968_28249__$1);
var G__28251 = cljs.core.chunk_rest(seq__27968_28249__$1);
var G__28252 = c__4556__auto___28250;
var G__28253 = cljs.core.count(c__4556__auto___28250);
var G__28254 = (0);
seq__27968_28237 = G__28251;
chunk__27969_28238 = G__28252;
count__27970_28239 = G__28253;
i__27971_28240 = G__28254;
continue;
} else {
var vec__27993_28255 = cljs.core.first(seq__27968_28249__$1);
var k_28256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27993_28255,(0),null);
var v_28257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27993_28255,(1),null);
goog.object.set(constructor$,re_view.util.camelCase(k_28256),v_28257);


var G__28262 = cljs.core.next(seq__27968_28249__$1);
var G__28263 = null;
var G__28264 = (0);
var G__28265 = (0);
seq__27968_28237 = G__28262;
chunk__27969_28238 = G__28263;
count__27970_28239 = G__28264;
i__27971_28240 = G__28265;
continue;
}
} else {
}
}
break;
}

var G__27996 = constructor$;
goog.object.set(G__27996,"re$view$base",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_view_base,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),prototype));

return G__27996;
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
return module$node_modules$react_dom$index.render(component,(function (){var G__28001 = element;
if(typeof element === 'string'){
return document.getElementById(G__28001);
} else {
return G__28001;
}
})());
});
/**
 * Partially apply props and optional class-keys to base view. Props specified at runtime will overwrite those given here.
 *   `re$view$base` property is retained on preserved.
 */
re_view.core.partial = (function re_view$core$partial(var_args){
var G__28004 = arguments.length;
switch (G__28004) {
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
var G__28005 = (function() { 
var G__28267__delegate = function (args){
var vec__28008 = (function (){var G__28011 = args;
if((!(cljs.core.map_QMARK_(cljs.core.first(args))))){
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,G__28011);
} else {
return G__28011;
}
})();
var seq__28009 = cljs.core.seq(vec__28008);
var first__28010 = cljs.core.first(seq__28009);
var seq__28009__$1 = cljs.core.next(seq__28009);
var user_props = first__28010;
var children = seq__28009__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(base,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,user_props], 0)),children);
};
var G__28267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28269__i = 0, G__28269__a = new Array(arguments.length -  0);
while (G__28269__i < G__28269__a.length) {G__28269__a[G__28269__i] = arguments[G__28269__i + 0]; ++G__28269__i;}
  args = new cljs.core.IndexedSeq(G__28269__a,0,null);
} 
return G__28267__delegate.call(this,args);};
G__28267.cljs$lang$maxFixedArity = 0;
G__28267.cljs$lang$applyTo = (function (arglist__28271){
var args = cljs.core.seq(arglist__28271);
return G__28267__delegate(args);
});
G__28267.cljs$core$IFn$_invoke$arity$variadic = G__28267__delegate;
return G__28267;
})()
;
goog.object.set(G__28005,"re$view$base",goog.object.get(base,"re$view$base"));

return G__28005;
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
