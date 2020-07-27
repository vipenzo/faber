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
var G__52540 = props;
if(cljs.core.truth_(((cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149)))?(function (){var fexpr__52542 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["input",null,"textarea",null], null), null);
return (fexpr__52542.cljs$core$IFn$_invoke$arity$1 ? fexpr__52542.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__52542.call(null,tag));
})():false))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__52540,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_view.render_loop.apply_sync_BANG_);
} else {
return G__52540;
}
});
/**
 * Wrap a render function to force-update the component when re-db patterns accessed during evaluation are invalidated.
 */
re_view.core.reactive_render = (function re_view$core$reactive_render(f){
return (function (){
var this$ = this;
var re$view = goog.object.get(this$,"re$view");
var map__52550 = (function (){var _STAR_pattern_log_STAR__orig_val__52555 = re_db.patterns._STAR_pattern_log_STAR_;
var _STAR_pattern_log_STAR__temp_val__52556 = cljs.core.PersistentArrayMap.EMPTY;
(re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR__temp_val__52556);

try{var map__52557 = (function (){var _STAR_db_log_STAR__orig_val__52558 = re_db.core._STAR_db_log_STAR_;
var _STAR_prevent_notify_STAR__orig_val__52559 = re_db.core._STAR_prevent_notify_STAR_;
var _STAR_db_log_STAR__temp_val__52560 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var _STAR_prevent_notify_STAR__temp_val__52561 = true;
(re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR__temp_val__52560);

(re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR__temp_val__52561);

try{var value__26572__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value__26572__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),cljs.core.deref(re_db.core._STAR_db_log_STAR_)], null);
}finally {(re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR__orig_val__52559);

(re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR__orig_val__52558);
}})();
var map__52557__$1 = (((((!((map__52557 == null))))?(((((map__52557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52557):map__52557);
var value__27482__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52557__$1,new cljs.core.Keyword(null,"value","value",305978217));
var tx_report__27483__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52557__$1,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391));
var patterns__27484__auto__ = re_db.patterns._STAR_pattern_log_STAR_;
re_db.core.notify_listeners(tx_report__27483__auto__);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),patterns__27484__auto__,new cljs.core.Keyword(null,"value","value",305978217),value__27482__auto__], null);
}finally {(re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR__orig_val__52555);
}})();
var map__52550__$1 = (((((!((map__52550 == null))))?(((((map__52550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52550):map__52550);
var patterns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52550__$1,new cljs.core.Keyword(null,"patterns","patterns",1164082024));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52550__$1,new cljs.core.Keyword(null,"value","value",305978217));
var prev_patterns = new cljs.core.Keyword("view","re-db.patterns","view/re-db.patterns",-379797888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_patterns,patterns)){
} else {
var temp__5735__auto___53402 = goog.object.get(this$,"reactiveUnsubscribe");
if(cljs.core.truth_(temp__5735__auto___53402)){
var un_sub_53403 = temp__5735__auto___53402;
(un_sub_53403.cljs$core$IFn$_invoke$arity$0 ? un_sub_53403.cljs$core$IFn$_invoke$arity$0() : un_sub_53403.call(null));
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
var len__4736__auto___53420 = arguments.length;
var i__4737__auto___53421 = (0);
while(true){
if((i__4737__auto___53421 < len__4736__auto___53420)){
args__4742__auto__.push((arguments[i__4737__auto___53421]));

var G__53422 = (i__4737__auto___53421 + (1));
i__4737__auto___53421 = G__53422;
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
var G__53423__delegate = function (args){
var seq__52601 = cljs.core.seq(fns);
var chunk__52602 = null;
var count__52603 = (0);
var i__52604 = (0);
while(true){
if((i__52604 < count__52603)){
var f = chunk__52602.cljs$core$IIndexed$_nth$arity$2(null,i__52604);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__53425 = seq__52601;
var G__53426 = chunk__52602;
var G__53427 = count__52603;
var G__53428 = (i__52604 + (1));
seq__52601 = G__53425;
chunk__52602 = G__53426;
count__52603 = G__53427;
i__52604 = G__53428;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52601);
if(temp__5735__auto__){
var seq__52601__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52601__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52601__$1);
var G__53434 = cljs.core.chunk_rest(seq__52601__$1);
var G__53435 = c__4556__auto__;
var G__53436 = cljs.core.count(c__4556__auto__);
var G__53437 = (0);
seq__52601 = G__53434;
chunk__52602 = G__53435;
count__52603 = G__53436;
i__52604 = G__53437;
continue;
} else {
var f = cljs.core.first(seq__52601__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__53442 = cljs.core.next(seq__52601__$1);
var G__53443 = null;
var G__53444 = (0);
var G__53445 = (0);
seq__52601 = G__53442;
chunk__52602 = G__53443;
count__52603 = G__53444;
i__52604 = G__53445;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__53423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53448__i = 0, G__53448__a = new Array(arguments.length -  0);
while (G__53448__i < G__53448__a.length) {G__53448__a[G__53448__i] = arguments[G__53448__i + 0]; ++G__53448__i;}
  args = new cljs.core.IndexedSeq(G__53448__a,0,null);
} 
return G__53423__delegate.call(this,args);};
G__53423.cljs$lang$maxFixedArity = 0;
G__53423.cljs$lang$applyTo = (function (arglist__53450){
var args = cljs.core.seq(arglist__53450);
return G__53423__delegate(args);
});
G__53423.cljs$core$IFn$_invoke$arity$variadic = G__53423__delegate;
return G__53423;
})()
;
}));

(re_view.core.compseq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.core.compseq.cljs$lang$applyTo = (function (seq52577){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52577));
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
var G__52721 = m;
if(cljs.core.vector_QMARK_(fns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52721,method_k,((cljs.core.keyword_identical_QMARK_(method_k,new cljs.core.Keyword("view","should-update","view/should-update",-1289068156)))?cljs.core.last(fns):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_view.core.compseq,fns)));
} else {
return G__52721;
}
}),methods$__$1,methods$__$1);
});
re_view.core.finish_lifecycle = (function re_view$core$finish_lifecycle(this$){

var re$view = (this$["re$view"]);
var map__52722 = cljs.core.deref(re$view);
var map__52722__$1 = (((((!((map__52722 == null))))?(((((map__52722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52722):map__52722);
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52722__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52722__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52722__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
return cljs.core.vreset_BANG_(re$view,(function (){var G__52731 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(re$view),new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),children], 0));
if(cljs.core.truth_(state)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52731,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886),cljs.core.deref(state));
} else {
return G__52731;
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
var G__52735 = method_k;
var G__52735__$1 = (((G__52735 instanceof cljs.core.Keyword))?G__52735.fqn:null);
switch (G__52735__$1) {
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
var _STAR_trigger_state_render_STAR__orig_val__52736 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__52737 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__52737);

try{var this$ = this;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,props) : f.call(null,this$,props));
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__52736);
}});

break;
case "view/will-mount":
case "view/will-unmount":
case "view/will-receive-state":
case "view/will-update":
return (function (){
var _STAR_trigger_state_render_STAR__orig_val__52739 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__52740 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__52740);

try{var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(goog.object.get(this$,"re$view"))));
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__52739);
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
var G__53465__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,args);
};
var G__53465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53466__i = 0, G__53466__a = new Array(arguments.length -  0);
while (G__53466__i < G__53466__a.length) {G__53466__a[G__53466__i] = arguments[G__53466__i + 0]; ++G__53466__i;}
  args = new cljs.core.IndexedSeq(G__53466__a,0,null);
} 
return G__53465__delegate.call(this,args);};
G__53465.cljs$lang$maxFixedArity = 0;
G__53465.cljs$lang$applyTo = (function (arglist__53467){
var args = cljs.core.seq(arglist__53467);
return G__53465__delegate(args);
});
G__53465.cljs$core$IFn$_invoke$arity$variadic = G__53465__delegate;
return G__53465;
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

var temp__5735__auto___53470 = goog.object.get(component,"componentWillReceiveState");
if(cljs.core.truth_(temp__5735__auto___53470)){
var will_receive_53471 = temp__5735__auto___53470;
will_receive_53471.call(component);
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
if(cljs.core.truth_((function (){var G__52762 = cljs.core.namespace(k);
var fexpr__52761 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__52761.cljs$core$IFn$_invoke$arity$1 ? fexpr__52761.cljs$core$IFn$_invoke$arity$1(G__52762) : fexpr__52761.call(null,G__52762));
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
if(cljs.core.truth_((function (){var G__52766 = cljs.core.namespace(k);
var fexpr__52765 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__52765.cljs$core$IFn$_invoke$arity$1 ? fexpr__52765.cljs$core$IFn$_invoke$arity$1(G__52766) : fexpr__52765.call(null,G__52766));
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
var G__52774 = obj;
goog.object.set(G__52774,cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.core.kmap,method_k),re_view.core.wrap_methods(method_k,method));

return G__52774;
}),({}),re_view.core.collect(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-receive-props","view/will-receive-props",-56046583),(function (this$,props){
var map__52777 = this$;
var map__52777__$1 = (((((!((map__52777 == null))))?(((((map__52777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52777):map__52777);
var this$__$1 = map__52777__$1;
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52777__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52777__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var next_props = (props["props"]);
return cljs.core._vreset_BANG_(goog.object.get(this$__$1,"re$view"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(goog.object.get(this$__$1,"re$view")),new cljs.core.Keyword("view","props","view/props",449562012),next_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,new cljs.core.Keyword("view","children","view/children",-946116505),(props["children"]),new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),prev_children], 0)));
}),new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),(function (p__52786){
var map__52787 = p__52786;
var map__52787__$1 = (((((!((map__52787 == null))))?(((((map__52787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52787):map__52787);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52787__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52787__$1,new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52787__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52787__$1,new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52787__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var prev_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52787__$1,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886));
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
})], null),methods$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (p__52792){
var map__52793 = p__52792;
var map__52793__$1 = (((((!((map__52793 == null))))?(((((map__52793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52793):map__52793);
var this$ = map__52793__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52793__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
goog.object.set(this$,"unmounted",true);

var temp__5735__auto___53565 = (this$["reactiveUnsubscribe"]);
if(cljs.core.truth_(temp__5735__auto___53565)){
var un_sub_53566 = temp__5735__auto___53565;
(un_sub_53566.cljs$core$IFn$_invoke$arity$0 ? un_sub_53566.cljs$core$IFn$_invoke$arity$0() : un_sub_53566.call(null));
} else {
}

var G__52796 = state;
if((G__52796 == null)){
return null;
} else {
return cljs.core.remove_watch(G__52796,this$);
}
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),re_view.core.finish_lifecycle], null)], null)));
});
/**
 * Swap a component's state atom without forcing an update (render)
 */
re_view.core.swap_silently_BANG_ = (function re_view$core$swap_silently_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___53567 = arguments.length;
var i__4737__auto___53569 = (0);
while(true){
if((i__4737__auto___53569 < len__4736__auto___53567)){
args__4742__auto__.push((arguments[i__4737__auto___53569]));

var G__53570 = (i__4737__auto___53569 + (1));
i__4737__auto___53569 = G__53570;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_trigger_state_render_STAR__orig_val__52806 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__52807 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__52807);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__52806);
}}));

(re_view.core.swap_silently_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.core.swap_silently_BANG_.cljs$lang$applyTo = (function (seq52805){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52805));
}));

/**
 * Bind element methods and populate initial props for `component`.
 */
re_view.core.init_component = (function re_view$core$init_component(component,$props){
if(cljs.core.truth_($props)){
var props_53575 = goog.object.get($props,"props");
var children_53576 = goog.object.get($props,"children");
goog.object.set(component,"re$view",cljs.core.volatile_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(goog.object.get($props,"class"),new cljs.core.Keyword("view","props","view/props",449562012),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props_53575,new cljs.core.Keyword("view","state","view/state",-1991815820)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","children","view/children",-946116505),children_53576], 0))));

var temp__5735__auto___53577 = goog.object.get($props,"instance");
if(cljs.core.truth_(temp__5735__auto___53577)){
var instance_keys_53578 = temp__5735__auto___53577;
var seq__52905_53579 = cljs.core.seq(goog.object.getKeys(instance_keys_53578));
var chunk__52906_53580 = null;
var count__52907_53581 = (0);
var i__52908_53582 = (0);
while(true){
if((i__52908_53582 < count__52907_53581)){
var k_53583 = chunk__52906_53580.cljs$core$IIndexed$_nth$arity$2(null,i__52908_53582);
var f_53584 = goog.object.get(instance_keys_53578,k_53583);
goog.object.set(component,k_53583,((cljs.core.fn_QMARK_(f_53584))?((function (seq__52905_53579,chunk__52906_53580,count__52907_53581,i__52908_53582,f_53584,k_53583,instance_keys_53578,temp__5735__auto___53577,props_53575,children_53576){
return (function() { 
var G__53585__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_53584,component,args);
};
var G__53585 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53588__i = 0, G__53588__a = new Array(arguments.length -  0);
while (G__53588__i < G__53588__a.length) {G__53588__a[G__53588__i] = arguments[G__53588__i + 0]; ++G__53588__i;}
  args = new cljs.core.IndexedSeq(G__53588__a,0,null);
} 
return G__53585__delegate.call(this,args);};
G__53585.cljs$lang$maxFixedArity = 0;
G__53585.cljs$lang$applyTo = (function (arglist__53589){
var args = cljs.core.seq(arglist__53589);
return G__53585__delegate(args);
});
G__53585.cljs$core$IFn$_invoke$arity$variadic = G__53585__delegate;
return G__53585;
})()
;})(seq__52905_53579,chunk__52906_53580,count__52907_53581,i__52908_53582,f_53584,k_53583,instance_keys_53578,temp__5735__auto___53577,props_53575,children_53576))
:f_53584));


var G__53590 = seq__52905_53579;
var G__53591 = chunk__52906_53580;
var G__53592 = count__52907_53581;
var G__53593 = (i__52908_53582 + (1));
seq__52905_53579 = G__53590;
chunk__52906_53580 = G__53591;
count__52907_53581 = G__53592;
i__52908_53582 = G__53593;
continue;
} else {
var temp__5735__auto___53594__$1 = cljs.core.seq(seq__52905_53579);
if(temp__5735__auto___53594__$1){
var seq__52905_53595__$1 = temp__5735__auto___53594__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52905_53595__$1)){
var c__4556__auto___53596 = cljs.core.chunk_first(seq__52905_53595__$1);
var G__53597 = cljs.core.chunk_rest(seq__52905_53595__$1);
var G__53598 = c__4556__auto___53596;
var G__53599 = cljs.core.count(c__4556__auto___53596);
var G__53600 = (0);
seq__52905_53579 = G__53597;
chunk__52906_53580 = G__53598;
count__52907_53581 = G__53599;
i__52908_53582 = G__53600;
continue;
} else {
var k_53602 = cljs.core.first(seq__52905_53595__$1);
var f_53603 = goog.object.get(instance_keys_53578,k_53602);
goog.object.set(component,k_53602,((cljs.core.fn_QMARK_(f_53603))?((function (seq__52905_53579,chunk__52906_53580,count__52907_53581,i__52908_53582,f_53603,k_53602,seq__52905_53595__$1,temp__5735__auto___53594__$1,instance_keys_53578,temp__5735__auto___53577,props_53575,children_53576){
return (function() { 
var G__53676__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_53603,component,args);
};
var G__53676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53677__i = 0, G__53677__a = new Array(arguments.length -  0);
while (G__53677__i < G__53677__a.length) {G__53677__a[G__53677__i] = arguments[G__53677__i + 0]; ++G__53677__i;}
  args = new cljs.core.IndexedSeq(G__53677__a,0,null);
} 
return G__53676__delegate.call(this,args);};
G__53676.cljs$lang$maxFixedArity = 0;
G__53676.cljs$lang$applyTo = (function (arglist__53678){
var args = cljs.core.seq(arglist__53678);
return G__53676__delegate(args);
});
G__53676.cljs$core$IFn$_invoke$arity$variadic = G__53676__delegate;
return G__53676;
})()
;})(seq__52905_53579,chunk__52906_53580,count__52907_53581,i__52908_53582,f_53603,k_53602,seq__52905_53595__$1,temp__5735__auto___53594__$1,instance_keys_53578,temp__5735__auto___53577,props_53575,children_53576))
:f_53603));


var G__53683 = cljs.core.next(seq__52905_53595__$1);
var G__53684 = null;
var G__53685 = (0);
var G__53686 = (0);
seq__52905_53579 = G__53683;
chunk__52906_53580 = G__53684;
count__52907_53581 = G__53685;
i__52908_53582 = G__53686;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5735__auto___53689 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props_53575,new cljs.core.Keyword("view","state","view/state",-1991815820));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto___53689 = goog.object.get(component,"$initialState");
if(cljs.core.truth_(temp__5735__auto___53689)){
var initial_state = temp__5735__auto___53689;
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var G__52921 = initial_state;
if(cljs.core.fn_QMARK_(initial_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__52921,component,children_53576);
} else {
return G__52921;
}
})());
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5735__auto___53689 = goog.object.get(component,"$state");
if(cljs.core.truth_(temp__5735__auto___53689)){
var watchable_state = temp__5735__auto___53689;
var G__52931 = watchable_state;
if(cljs.core.fn_QMARK_(watchable_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__52931,component,children_53576);
} else {
return G__52931;
}
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(temp__5735__auto___53689)){
var state_53703 = temp__5735__auto___53689;
re_view.core.init_state_BANG_(component,state_53703);
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
var map__52964 = goog.object.get(constructor$,"re$view$base");
var map__52964__$1 = (((((!((map__52964 == null))))?(((((map__52964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52964):map__52964);
var re$view$base = map__52964__$1;
var class_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52964__$1,new cljs.core.Keyword(null,"class-keys","class-keys",106917605));
var instance_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52964__$1,new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647));
var map__52965 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(class_keys,new cljs.core.Keyword("spec","props","spec/props",450064562),re_view.view_spec.normalize_props_map),new cljs.core.Keyword("spec","children","spec/children",-946200067),re_view.view_spec.resolve_spec_vector);
var map__52965__$1 = (((((!((map__52965 == null))))?(((((map__52965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52965):map__52965);
var class_keys__$1 = map__52965__$1;
var map__52968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52965__$1,new cljs.core.Keyword("spec","props","spec/props",450064562));
var map__52968__$1 = (((((!((map__52968 == null))))?(((((map__52968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52968):map__52968);
var prop_spec = map__52968__$1;
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52968__$1,new cljs.core.Keyword("props","defaults","props/defaults",999110366));
var children_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52965__$1,new cljs.core.Keyword("spec","children","spec/children",-946200067));
var class_react_key = goog.object.get(constructor$,"key");
var display_name = goog.object.get(constructor$,"displayName");
var G__53086 = (function() { 
var G__53710__delegate = function (props,children){
var vec__53087 = ((((cljs.core.map_QMARK_(props)) || ((props == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(props,children)], null));
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53087,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53087,(1),null);
var props__$2 = (function (){var G__53091 = props__$1;
if(cljs.core.truth_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,G__53091], 0));
} else {
return G__53091;
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
var G__53710 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__53712__i = 0, G__53712__a = new Array(arguments.length -  1);
while (G__53712__i < G__53712__a.length) {G__53712__a[G__53712__i] = arguments[G__53712__i + 1]; ++G__53712__i;}
  children = new cljs.core.IndexedSeq(G__53712__a,0,null);
} 
return G__53710__delegate.call(this,props,children);};
G__53710.cljs$lang$maxFixedArity = 1;
G__53710.cljs$lang$applyTo = (function (arglist__53713){
var props = cljs.core.first(arglist__53713);
var children = cljs.core.rest(arglist__53713);
return G__53710__delegate(props,children);
});
G__53710.cljs$core$IFn$_invoke$arity$variadic = G__53710__delegate;
return G__53710;
})()
;
goog.object.set(G__53086,"re$view$base",re$view$base);

return G__53086;
});
re_view.core.class_STAR_ = (function re_view$core$class_STAR_(p__53105){
var map__53106 = p__53105;
var map__53106__$1 = (((((!((map__53106 == null))))?(((((map__53106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53106):map__53106);
var re_view_base = map__53106__$1;
var lifecycle_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53106__$1,new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896));
var react_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53106__$1,new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002));
var prototype = (new module$node_modules$react$index.Component());
var _ = goog.object.extend(prototype,re_view.core.lifecycle_methods(lifecycle_keys));
var constructor$ = (function re_view$core$class_STAR__$_ReView($props){
var this$ = this;
return re_view.core.init_component(this$,$props);
});
var ___$1 = goog.object.set(constructor$,"prototype",prototype);
var seq__53125_53715 = cljs.core.seq(cljs.core.seq(react_keys));
var chunk__53126_53716 = null;
var count__53127_53717 = (0);
var i__53128_53718 = (0);
while(true){
if((i__53128_53718 < count__53127_53717)){
var vec__53140_53719 = chunk__53126_53716.cljs$core$IIndexed$_nth$arity$2(null,i__53128_53718);
var k_53720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53140_53719,(0),null);
var v_53721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53140_53719,(1),null);
goog.object.set(constructor$,re_view.util.camelCase(k_53720),v_53721);


var G__53722 = seq__53125_53715;
var G__53723 = chunk__53126_53716;
var G__53724 = count__53127_53717;
var G__53725 = (i__53128_53718 + (1));
seq__53125_53715 = G__53722;
chunk__53126_53716 = G__53723;
count__53127_53717 = G__53724;
i__53128_53718 = G__53725;
continue;
} else {
var temp__5735__auto___53726 = cljs.core.seq(seq__53125_53715);
if(temp__5735__auto___53726){
var seq__53125_53727__$1 = temp__5735__auto___53726;
if(cljs.core.chunked_seq_QMARK_(seq__53125_53727__$1)){
var c__4556__auto___53728 = cljs.core.chunk_first(seq__53125_53727__$1);
var G__53729 = cljs.core.chunk_rest(seq__53125_53727__$1);
var G__53730 = c__4556__auto___53728;
var G__53731 = cljs.core.count(c__4556__auto___53728);
var G__53732 = (0);
seq__53125_53715 = G__53729;
chunk__53126_53716 = G__53730;
count__53127_53717 = G__53731;
i__53128_53718 = G__53732;
continue;
} else {
var vec__53159_53733 = cljs.core.first(seq__53125_53727__$1);
var k_53734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53159_53733,(0),null);
var v_53735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53159_53733,(1),null);
goog.object.set(constructor$,re_view.util.camelCase(k_53734),v_53735);


var G__53741 = cljs.core.next(seq__53125_53727__$1);
var G__53742 = null;
var G__53743 = (0);
var G__53744 = (0);
seq__53125_53715 = G__53741;
chunk__53126_53716 = G__53742;
count__53127_53717 = G__53743;
i__53128_53718 = G__53744;
continue;
}
} else {
}
}
break;
}

var G__53171 = constructor$;
goog.object.set(G__53171,"re$view$base",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_view_base,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),prototype));

return G__53171;
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
return module$node_modules$react_dom$index.render(component,(function (){var G__53211 = element;
if(typeof element === 'string'){
return document.getElementById(G__53211);
} else {
return G__53211;
}
})());
});
/**
 * Partially apply props and optional class-keys to base view. Props specified at runtime will overwrite those given here.
 *   `re$view$base` property is retained on preserved.
 */
re_view.core.partial = (function re_view$core$partial(var_args){
var G__53221 = arguments.length;
switch (G__53221) {
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
var G__53222 = (function() { 
var G__53762__delegate = function (args){
var vec__53227 = (function (){var G__53230 = args;
if((!(cljs.core.map_QMARK_(cljs.core.first(args))))){
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,G__53230);
} else {
return G__53230;
}
})();
var seq__53228 = cljs.core.seq(vec__53227);
var first__53229 = cljs.core.first(seq__53228);
var seq__53228__$1 = cljs.core.next(seq__53228);
var user_props = first__53229;
var children = seq__53228__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(base,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,user_props], 0)),children);
};
var G__53762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53768__i = 0, G__53768__a = new Array(arguments.length -  0);
while (G__53768__i < G__53768__a.length) {G__53768__a[G__53768__i] = arguments[G__53768__i + 0]; ++G__53768__i;}
  args = new cljs.core.IndexedSeq(G__53768__a,0,null);
} 
return G__53762__delegate.call(this,args);};
G__53762.cljs$lang$maxFixedArity = 0;
G__53762.cljs$lang$applyTo = (function (arglist__53769){
var args = cljs.core.seq(arglist__53769);
return G__53762__delegate(args);
});
G__53762.cljs$core$IFn$_invoke$arity$variadic = G__53762__delegate;
return G__53762;
})()
;
goog.object.set(G__53222,"re$view$base",goog.object.get(base,"re$view$base"));

return G__53222;
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
