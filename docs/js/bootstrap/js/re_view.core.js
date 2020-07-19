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
var G__27644 = props;
if(cljs.core.truth_(((cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149)))?(function (){var fexpr__27649 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["input",null,"textarea",null], null), null);
return (fexpr__27649.cljs$core$IFn$_invoke$arity$1 ? fexpr__27649.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__27649.call(null,tag));
})():false))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__27644,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_view.render_loop.apply_sync_BANG_);
} else {
return G__27644;
}
});
/**
 * Wrap a render function to force-update the component when re-db patterns accessed during evaluation are invalidated.
 */
re_view.core.reactive_render = (function re_view$core$reactive_render(f){
return (function (){
var this$ = this;
var re$view = goog.object.get(this$,"re$view");
var map__27650 = (function (){var _STAR_pattern_log_STAR__orig_val__27651 = re_db.patterns._STAR_pattern_log_STAR_;
var _STAR_pattern_log_STAR__temp_val__27652 = cljs.core.PersistentArrayMap.EMPTY;
(re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR__temp_val__27652);

try{var map__27654 = (function (){var _STAR_db_log_STAR__orig_val__27656 = re_db.core._STAR_db_log_STAR_;
var _STAR_prevent_notify_STAR__orig_val__27657 = re_db.core._STAR_prevent_notify_STAR_;
var _STAR_db_log_STAR__temp_val__27658 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var _STAR_prevent_notify_STAR__temp_val__27659 = true;
(re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR__temp_val__27658);

(re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR__temp_val__27659);

try{var value__26572__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value__26572__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),cljs.core.deref(re_db.core._STAR_db_log_STAR_)], null);
}finally {(re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR__orig_val__27657);

(re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR__orig_val__27656);
}})();
var map__27654__$1 = (((((!((map__27654 == null))))?(((((map__27654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27654):map__27654);
var value__27482__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27654__$1,new cljs.core.Keyword(null,"value","value",305978217));
var tx_report__27483__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27654__$1,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391));
var patterns__27484__auto__ = re_db.patterns._STAR_pattern_log_STAR_;
re_db.core.notify_listeners(tx_report__27483__auto__);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),patterns__27484__auto__,new cljs.core.Keyword(null,"value","value",305978217),value__27482__auto__], null);
}finally {(re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR__orig_val__27651);
}})();
var map__27650__$1 = (((((!((map__27650 == null))))?(((((map__27650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27650):map__27650);
var patterns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27650__$1,new cljs.core.Keyword(null,"patterns","patterns",1164082024));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27650__$1,new cljs.core.Keyword(null,"value","value",305978217));
var prev_patterns = new cljs.core.Keyword("view","re-db.patterns","view/re-db.patterns",-379797888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_patterns,patterns)){
} else {
var temp__5735__auto___27911 = goog.object.get(this$,"reactiveUnsubscribe");
if(cljs.core.truth_(temp__5735__auto___27911)){
var un_sub_27912 = temp__5735__auto___27911;
(un_sub_27912.cljs$core$IFn$_invoke$arity$0 ? un_sub_27912.cljs$core$IFn$_invoke$arity$0() : un_sub_27912.call(null));
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
var len__4736__auto___27914 = arguments.length;
var i__4737__auto___27915 = (0);
while(true){
if((i__4737__auto___27915 < len__4736__auto___27914)){
args__4742__auto__.push((arguments[i__4737__auto___27915]));

var G__27918 = (i__4737__auto___27915 + (1));
i__4737__auto___27915 = G__27918;
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
var G__27920__delegate = function (args){
var seq__27673 = cljs.core.seq(fns);
var chunk__27674 = null;
var count__27675 = (0);
var i__27676 = (0);
while(true){
if((i__27676 < count__27675)){
var f = chunk__27674.cljs$core$IIndexed$_nth$arity$2(null,i__27676);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__27921 = seq__27673;
var G__27922 = chunk__27674;
var G__27923 = count__27675;
var G__27924 = (i__27676 + (1));
seq__27673 = G__27921;
chunk__27674 = G__27922;
count__27675 = G__27923;
i__27676 = G__27924;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__27673);
if(temp__5735__auto__){
var seq__27673__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27673__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__27673__$1);
var G__27925 = cljs.core.chunk_rest(seq__27673__$1);
var G__27926 = c__4556__auto__;
var G__27927 = cljs.core.count(c__4556__auto__);
var G__27928 = (0);
seq__27673 = G__27925;
chunk__27674 = G__27926;
count__27675 = G__27927;
i__27676 = G__27928;
continue;
} else {
var f = cljs.core.first(seq__27673__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__27931 = cljs.core.next(seq__27673__$1);
var G__27932 = null;
var G__27933 = (0);
var G__27934 = (0);
seq__27673 = G__27931;
chunk__27674 = G__27932;
count__27675 = G__27933;
i__27676 = G__27934;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__27920 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27936__i = 0, G__27936__a = new Array(arguments.length -  0);
while (G__27936__i < G__27936__a.length) {G__27936__a[G__27936__i] = arguments[G__27936__i + 0]; ++G__27936__i;}
  args = new cljs.core.IndexedSeq(G__27936__a,0,null);
} 
return G__27920__delegate.call(this,args);};
G__27920.cljs$lang$maxFixedArity = 0;
G__27920.cljs$lang$applyTo = (function (arglist__27938){
var args = cljs.core.seq(arglist__27938);
return G__27920__delegate(args);
});
G__27920.cljs$core$IFn$_invoke$arity$variadic = G__27920__delegate;
return G__27920;
})()
;
}));

(re_view.core.compseq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.core.compseq.cljs$lang$applyTo = (function (seq27670){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27670));
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
var G__27687 = m;
if(cljs.core.vector_QMARK_(fns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27687,method_k,((cljs.core.keyword_identical_QMARK_(method_k,new cljs.core.Keyword("view","should-update","view/should-update",-1289068156)))?cljs.core.last(fns):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_view.core.compseq,fns)));
} else {
return G__27687;
}
}),methods$__$1,methods$__$1);
});
re_view.core.finish_lifecycle = (function re_view$core$finish_lifecycle(this$){

var re$view = (this$["re$view"]);
var map__27691 = cljs.core.deref(re$view);
var map__27691__$1 = (((((!((map__27691 == null))))?(((((map__27691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27691.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27691):map__27691);
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27691__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27691__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27691__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
return cljs.core.vreset_BANG_(re$view,(function (){var G__27695 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(re$view),new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),children], 0));
if(cljs.core.truth_(state)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27695,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886),cljs.core.deref(state));
} else {
return G__27695;
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
var G__27706 = method_k;
var G__27706__$1 = (((G__27706 instanceof cljs.core.Keyword))?G__27706.fqn:null);
switch (G__27706__$1) {
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
var _STAR_trigger_state_render_STAR__orig_val__27707 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__27708 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__27708);

try{var this$ = this;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,props) : f.call(null,this$,props));
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__27707);
}});

break;
case "view/will-mount":
case "view/will-unmount":
case "view/will-receive-state":
case "view/will-update":
return (function (){
var _STAR_trigger_state_render_STAR__orig_val__27709 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__27710 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__27710);

try{var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(goog.object.get(this$,"re$view"))));
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__27709);
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
var G__27984__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,args);
};
var G__27984 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27989__i = 0, G__27989__a = new Array(arguments.length -  0);
while (G__27989__i < G__27989__a.length) {G__27989__a[G__27989__i] = arguments[G__27989__i + 0]; ++G__27989__i;}
  args = new cljs.core.IndexedSeq(G__27989__a,0,null);
} 
return G__27984__delegate.call(this,args);};
G__27984.cljs$lang$maxFixedArity = 0;
G__27984.cljs$lang$applyTo = (function (arglist__27991){
var args = cljs.core.seq(arglist__27991);
return G__27984__delegate(args);
});
G__27984.cljs$core$IFn$_invoke$arity$variadic = G__27984__delegate;
return G__27984;
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

var temp__5735__auto___27994 = goog.object.get(component,"componentWillReceiveState");
if(cljs.core.truth_(temp__5735__auto___27994)){
var will_receive_27995 = temp__5735__auto___27994;
will_receive_27995.call(component);
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
if(cljs.core.truth_((function (){var G__27716 = cljs.core.namespace(k);
var fexpr__27715 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__27715.cljs$core$IFn$_invoke$arity$1 ? fexpr__27715.cljs$core$IFn$_invoke$arity$1(G__27716) : fexpr__27715.call(null,G__27716));
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
if(cljs.core.truth_((function (){var G__27719 = cljs.core.namespace(k);
var fexpr__27718 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__27718.cljs$core$IFn$_invoke$arity$1 ? fexpr__27718.cljs$core$IFn$_invoke$arity$1(G__27719) : fexpr__27718.call(null,G__27719));
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
var G__27723 = obj;
goog.object.set(G__27723,cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.core.kmap,method_k),re_view.core.wrap_methods(method_k,method));

return G__27723;
}),({}),re_view.core.collect(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-receive-props","view/will-receive-props",-56046583),(function (this$,props){
var map__27729 = this$;
var map__27729__$1 = (((((!((map__27729 == null))))?(((((map__27729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27729):map__27729);
var this$__$1 = map__27729__$1;
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27729__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27729__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var next_props = (props["props"]);
return cljs.core._vreset_BANG_(goog.object.get(this$__$1,"re$view"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(goog.object.get(this$__$1,"re$view")),new cljs.core.Keyword("view","props","view/props",449562012),next_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,new cljs.core.Keyword("view","children","view/children",-946116505),(props["children"]),new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),prev_children], 0)));
}),new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),(function (p__27732){
var map__27733 = p__27732;
var map__27733__$1 = (((((!((map__27733 == null))))?(((((map__27733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27733):map__27733);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27733__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27733__$1,new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27733__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27733__$1,new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27733__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var prev_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27733__$1,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886));
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
})], null),methods$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (p__27739){
var map__27740 = p__27739;
var map__27740__$1 = (((((!((map__27740 == null))))?(((((map__27740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27740):map__27740);
var this$ = map__27740__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27740__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
goog.object.set(this$,"unmounted",true);

var temp__5735__auto___28064 = (this$["reactiveUnsubscribe"]);
if(cljs.core.truth_(temp__5735__auto___28064)){
var un_sub_28065 = temp__5735__auto___28064;
(un_sub_28065.cljs$core$IFn$_invoke$arity$0 ? un_sub_28065.cljs$core$IFn$_invoke$arity$0() : un_sub_28065.call(null));
} else {
}

var G__27747 = state;
if((G__27747 == null)){
return null;
} else {
return cljs.core.remove_watch(G__27747,this$);
}
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),re_view.core.finish_lifecycle], null)], null)));
});
/**
 * Swap a component's state atom without forcing an update (render)
 */
re_view.core.swap_silently_BANG_ = (function re_view$core$swap_silently_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28067 = arguments.length;
var i__4737__auto___28068 = (0);
while(true){
if((i__4737__auto___28068 < len__4736__auto___28067)){
args__4742__auto__.push((arguments[i__4737__auto___28068]));

var G__28069 = (i__4737__auto___28068 + (1));
i__4737__auto___28068 = G__28069;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_trigger_state_render_STAR__orig_val__27753 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__27754 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__27754);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__27753);
}}));

(re_view.core.swap_silently_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.core.swap_silently_BANG_.cljs$lang$applyTo = (function (seq27748){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27748));
}));

/**
 * Bind element methods and populate initial props for `component`.
 */
re_view.core.init_component = (function re_view$core$init_component(component,$props){
if(cljs.core.truth_($props)){
var props_28074 = goog.object.get($props,"props");
var children_28075 = goog.object.get($props,"children");
goog.object.set(component,"re$view",cljs.core.volatile_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(goog.object.get($props,"class"),new cljs.core.Keyword("view","props","view/props",449562012),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props_28074,new cljs.core.Keyword("view","state","view/state",-1991815820)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","children","view/children",-946116505),children_28075], 0))));

var temp__5735__auto___28077 = goog.object.get($props,"instance");
if(cljs.core.truth_(temp__5735__auto___28077)){
var instance_keys_28078 = temp__5735__auto___28077;
var seq__27755_28079 = cljs.core.seq(goog.object.getKeys(instance_keys_28078));
var chunk__27756_28080 = null;
var count__27757_28081 = (0);
var i__27758_28082 = (0);
while(true){
if((i__27758_28082 < count__27757_28081)){
var k_28085 = chunk__27756_28080.cljs$core$IIndexed$_nth$arity$2(null,i__27758_28082);
var f_28086 = goog.object.get(instance_keys_28078,k_28085);
goog.object.set(component,k_28085,((cljs.core.fn_QMARK_(f_28086))?((function (seq__27755_28079,chunk__27756_28080,count__27757_28081,i__27758_28082,f_28086,k_28085,instance_keys_28078,temp__5735__auto___28077,props_28074,children_28075){
return (function() { 
var G__28088__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_28086,component,args);
};
var G__28088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28089__i = 0, G__28089__a = new Array(arguments.length -  0);
while (G__28089__i < G__28089__a.length) {G__28089__a[G__28089__i] = arguments[G__28089__i + 0]; ++G__28089__i;}
  args = new cljs.core.IndexedSeq(G__28089__a,0,null);
} 
return G__28088__delegate.call(this,args);};
G__28088.cljs$lang$maxFixedArity = 0;
G__28088.cljs$lang$applyTo = (function (arglist__28091){
var args = cljs.core.seq(arglist__28091);
return G__28088__delegate(args);
});
G__28088.cljs$core$IFn$_invoke$arity$variadic = G__28088__delegate;
return G__28088;
})()
;})(seq__27755_28079,chunk__27756_28080,count__27757_28081,i__27758_28082,f_28086,k_28085,instance_keys_28078,temp__5735__auto___28077,props_28074,children_28075))
:f_28086));


var G__28094 = seq__27755_28079;
var G__28095 = chunk__27756_28080;
var G__28096 = count__27757_28081;
var G__28097 = (i__27758_28082 + (1));
seq__27755_28079 = G__28094;
chunk__27756_28080 = G__28095;
count__27757_28081 = G__28096;
i__27758_28082 = G__28097;
continue;
} else {
var temp__5735__auto___28098__$1 = cljs.core.seq(seq__27755_28079);
if(temp__5735__auto___28098__$1){
var seq__27755_28099__$1 = temp__5735__auto___28098__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27755_28099__$1)){
var c__4556__auto___28100 = cljs.core.chunk_first(seq__27755_28099__$1);
var G__28101 = cljs.core.chunk_rest(seq__27755_28099__$1);
var G__28102 = c__4556__auto___28100;
var G__28103 = cljs.core.count(c__4556__auto___28100);
var G__28104 = (0);
seq__27755_28079 = G__28101;
chunk__27756_28080 = G__28102;
count__27757_28081 = G__28103;
i__27758_28082 = G__28104;
continue;
} else {
var k_28105 = cljs.core.first(seq__27755_28099__$1);
var f_28109 = goog.object.get(instance_keys_28078,k_28105);
goog.object.set(component,k_28105,((cljs.core.fn_QMARK_(f_28109))?((function (seq__27755_28079,chunk__27756_28080,count__27757_28081,i__27758_28082,f_28109,k_28105,seq__27755_28099__$1,temp__5735__auto___28098__$1,instance_keys_28078,temp__5735__auto___28077,props_28074,children_28075){
return (function() { 
var G__28112__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_28109,component,args);
};
var G__28112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28116__i = 0, G__28116__a = new Array(arguments.length -  0);
while (G__28116__i < G__28116__a.length) {G__28116__a[G__28116__i] = arguments[G__28116__i + 0]; ++G__28116__i;}
  args = new cljs.core.IndexedSeq(G__28116__a,0,null);
} 
return G__28112__delegate.call(this,args);};
G__28112.cljs$lang$maxFixedArity = 0;
G__28112.cljs$lang$applyTo = (function (arglist__28117){
var args = cljs.core.seq(arglist__28117);
return G__28112__delegate(args);
});
G__28112.cljs$core$IFn$_invoke$arity$variadic = G__28112__delegate;
return G__28112;
})()
;})(seq__27755_28079,chunk__27756_28080,count__27757_28081,i__27758_28082,f_28109,k_28105,seq__27755_28099__$1,temp__5735__auto___28098__$1,instance_keys_28078,temp__5735__auto___28077,props_28074,children_28075))
:f_28109));


var G__28118 = cljs.core.next(seq__27755_28099__$1);
var G__28119 = null;
var G__28120 = (0);
var G__28121 = (0);
seq__27755_28079 = G__28118;
chunk__27756_28080 = G__28119;
count__27757_28081 = G__28120;
i__27758_28082 = G__28121;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5735__auto___28124 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props_28074,new cljs.core.Keyword("view","state","view/state",-1991815820));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto___28124 = goog.object.get(component,"$initialState");
if(cljs.core.truth_(temp__5735__auto___28124)){
var initial_state = temp__5735__auto___28124;
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var G__27777 = initial_state;
if(cljs.core.fn_QMARK_(initial_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__27777,component,children_28075);
} else {
return G__27777;
}
})());
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5735__auto___28124 = goog.object.get(component,"$state");
if(cljs.core.truth_(temp__5735__auto___28124)){
var watchable_state = temp__5735__auto___28124;
var G__27781 = watchable_state;
if(cljs.core.fn_QMARK_(watchable_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__27781,component,children_28075);
} else {
return G__27781;
}
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(temp__5735__auto___28124)){
var state_28135 = temp__5735__auto___28124;
re_view.core.init_state_BANG_(component,state_28135);
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
var map__27785 = goog.object.get(constructor$,"re$view$base");
var map__27785__$1 = (((((!((map__27785 == null))))?(((((map__27785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27785):map__27785);
var re$view$base = map__27785__$1;
var class_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27785__$1,new cljs.core.Keyword(null,"class-keys","class-keys",106917605));
var instance_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27785__$1,new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647));
var map__27786 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(class_keys,new cljs.core.Keyword("spec","props","spec/props",450064562),re_view.view_spec.normalize_props_map),new cljs.core.Keyword("spec","children","spec/children",-946200067),re_view.view_spec.resolve_spec_vector);
var map__27786__$1 = (((((!((map__27786 == null))))?(((((map__27786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27786):map__27786);
var class_keys__$1 = map__27786__$1;
var map__27787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27786__$1,new cljs.core.Keyword("spec","props","spec/props",450064562));
var map__27787__$1 = (((((!((map__27787 == null))))?(((((map__27787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27787):map__27787);
var prop_spec = map__27787__$1;
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27787__$1,new cljs.core.Keyword("props","defaults","props/defaults",999110366));
var children_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27786__$1,new cljs.core.Keyword("spec","children","spec/children",-946200067));
var class_react_key = goog.object.get(constructor$,"key");
var display_name = goog.object.get(constructor$,"displayName");
var G__27792 = (function() { 
var G__28145__delegate = function (props,children){
var vec__27793 = ((((cljs.core.map_QMARK_(props)) || ((props == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(props,children)], null));
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27793,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27793,(1),null);
var props__$2 = (function (){var G__27796 = props__$1;
if(cljs.core.truth_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,G__27796], 0));
} else {
return G__27796;
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
var G__28145 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__28155__i = 0, G__28155__a = new Array(arguments.length -  1);
while (G__28155__i < G__28155__a.length) {G__28155__a[G__28155__i] = arguments[G__28155__i + 1]; ++G__28155__i;}
  children = new cljs.core.IndexedSeq(G__28155__a,0,null);
} 
return G__28145__delegate.call(this,props,children);};
G__28145.cljs$lang$maxFixedArity = 1;
G__28145.cljs$lang$applyTo = (function (arglist__28156){
var props = cljs.core.first(arglist__28156);
var children = cljs.core.rest(arglist__28156);
return G__28145__delegate(props,children);
});
G__28145.cljs$core$IFn$_invoke$arity$variadic = G__28145__delegate;
return G__28145;
})()
;
goog.object.set(G__27792,"re$view$base",re$view$base);

return G__27792;
});
re_view.core.class_STAR_ = (function re_view$core$class_STAR_(p__27807){
var map__27808 = p__27807;
var map__27808__$1 = (((((!((map__27808 == null))))?(((((map__27808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27808):map__27808);
var re_view_base = map__27808__$1;
var lifecycle_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27808__$1,new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896));
var react_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27808__$1,new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002));
var prototype = (new module$node_modules$react$index.Component());
var _ = goog.object.extend(prototype,re_view.core.lifecycle_methods(lifecycle_keys));
var constructor$ = (function re_view$core$class_STAR__$_ReView($props){
var this$ = this;
return re_view.core.init_component(this$,$props);
});
var ___$1 = goog.object.set(constructor$,"prototype",prototype);
var seq__27817_28167 = cljs.core.seq(cljs.core.seq(react_keys));
var chunk__27819_28168 = null;
var count__27820_28169 = (0);
var i__27821_28170 = (0);
while(true){
if((i__27821_28170 < count__27820_28169)){
var vec__27838_28172 = chunk__27819_28168.cljs$core$IIndexed$_nth$arity$2(null,i__27821_28170);
var k_28173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27838_28172,(0),null);
var v_28174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27838_28172,(1),null);
goog.object.set(constructor$,re_view.util.camelCase(k_28173),v_28174);


var G__28175 = seq__27817_28167;
var G__28176 = chunk__27819_28168;
var G__28177 = count__27820_28169;
var G__28178 = (i__27821_28170 + (1));
seq__27817_28167 = G__28175;
chunk__27819_28168 = G__28176;
count__27820_28169 = G__28177;
i__27821_28170 = G__28178;
continue;
} else {
var temp__5735__auto___28180 = cljs.core.seq(seq__27817_28167);
if(temp__5735__auto___28180){
var seq__27817_28184__$1 = temp__5735__auto___28180;
if(cljs.core.chunked_seq_QMARK_(seq__27817_28184__$1)){
var c__4556__auto___28185 = cljs.core.chunk_first(seq__27817_28184__$1);
var G__28186 = cljs.core.chunk_rest(seq__27817_28184__$1);
var G__28187 = c__4556__auto___28185;
var G__28188 = cljs.core.count(c__4556__auto___28185);
var G__28189 = (0);
seq__27817_28167 = G__28186;
chunk__27819_28168 = G__28187;
count__27820_28169 = G__28188;
i__27821_28170 = G__28189;
continue;
} else {
var vec__27841_28190 = cljs.core.first(seq__27817_28184__$1);
var k_28191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27841_28190,(0),null);
var v_28192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27841_28190,(1),null);
goog.object.set(constructor$,re_view.util.camelCase(k_28191),v_28192);


var G__28194 = cljs.core.next(seq__27817_28184__$1);
var G__28195 = null;
var G__28196 = (0);
var G__28197 = (0);
seq__27817_28167 = G__28194;
chunk__27819_28168 = G__28195;
count__27820_28169 = G__28196;
i__27821_28170 = G__28197;
continue;
}
} else {
}
}
break;
}

var G__27847 = constructor$;
goog.object.set(G__27847,"re$view$base",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_view_base,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),prototype));

return G__27847;
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
return module$node_modules$react_dom$index.render(component,(function (){var G__27858 = element;
if(typeof element === 'string'){
return document.getElementById(G__27858);
} else {
return G__27858;
}
})());
});
/**
 * Partially apply props and optional class-keys to base view. Props specified at runtime will overwrite those given here.
 *   `re$view$base` property is retained on preserved.
 */
re_view.core.partial = (function re_view$core$partial(var_args){
var G__27863 = arguments.length;
switch (G__27863) {
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
var G__27884 = (function() { 
var G__28213__delegate = function (args){
var vec__27885 = (function (){var G__27888 = args;
if((!(cljs.core.map_QMARK_(cljs.core.first(args))))){
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,G__27888);
} else {
return G__27888;
}
})();
var seq__27886 = cljs.core.seq(vec__27885);
var first__27887 = cljs.core.first(seq__27886);
var seq__27886__$1 = cljs.core.next(seq__27886);
var user_props = first__27887;
var children = seq__27886__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(base,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,user_props], 0)),children);
};
var G__28213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28214__i = 0, G__28214__a = new Array(arguments.length -  0);
while (G__28214__i < G__28214__a.length) {G__28214__a[G__28214__i] = arguments[G__28214__i + 0]; ++G__28214__i;}
  args = new cljs.core.IndexedSeq(G__28214__a,0,null);
} 
return G__28213__delegate.call(this,args);};
G__28213.cljs$lang$maxFixedArity = 0;
G__28213.cljs$lang$applyTo = (function (arglist__28215){
var args = cljs.core.seq(arglist__28215);
return G__28213__delegate(args);
});
G__28213.cljs$core$IFn$_invoke$arity$variadic = G__28213__delegate;
return G__28213;
})()
;
goog.object.set(G__27884,"re$view$base",goog.object.get(base,"re$view$base"));

return G__27884;
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
