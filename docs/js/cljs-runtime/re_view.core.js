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
var G__52349 = props;
if(cljs.core.truth_(((cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"on-change","on-change",-732046149)))?(function (){var fexpr__52354 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["input",null,"textarea",null], null), null);
return (fexpr__52354.cljs$core$IFn$_invoke$arity$1 ? fexpr__52354.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__52354.call(null,tag));
})():false))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__52349,new cljs.core.Keyword(null,"on-change","on-change",-732046149),re_view.render_loop.apply_sync_BANG_);
} else {
return G__52349;
}
});
/**
 * Wrap a render function to force-update the component when re-db patterns accessed during evaluation are invalidated.
 */
re_view.core.reactive_render = (function re_view$core$reactive_render(f){
return (function (){
var this$ = this;
var re$view = goog.object.get(this$,"re$view");
var map__52355 = (function (){var _STAR_pattern_log_STAR__orig_val__52356 = re_db.patterns._STAR_pattern_log_STAR_;
var _STAR_pattern_log_STAR__temp_val__52357 = cljs.core.PersistentArrayMap.EMPTY;
(re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR__temp_val__52357);

try{var map__52358 = (function (){var _STAR_db_log_STAR__orig_val__52359 = re_db.core._STAR_db_log_STAR_;
var _STAR_prevent_notify_STAR__orig_val__52360 = re_db.core._STAR_prevent_notify_STAR_;
var _STAR_db_log_STAR__temp_val__52361 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var _STAR_prevent_notify_STAR__temp_val__52362 = true;
(re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR__temp_val__52361);

(re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR__temp_val__52362);

try{var value__26573__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value__26573__auto__,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391),cljs.core.deref(re_db.core._STAR_db_log_STAR_)], null);
}finally {(re_db.core._STAR_prevent_notify_STAR_ = _STAR_prevent_notify_STAR__orig_val__52360);

(re_db.core._STAR_db_log_STAR_ = _STAR_db_log_STAR__orig_val__52359);
}})();
var map__52358__$1 = (((((!((map__52358 == null))))?(((((map__52358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52358):map__52358);
var tx_report__27519__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52358__$1,new cljs.core.Keyword(null,"tx-report","tx-report",1910895391));
var value__27518__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52358__$1,new cljs.core.Keyword(null,"value","value",305978217));
var patterns__27520__auto__ = re_db.patterns._STAR_pattern_log_STAR_;
re_db.core.notify_listeners(tx_report__27519__auto__);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),patterns__27520__auto__,new cljs.core.Keyword(null,"value","value",305978217),value__27518__auto__], null);
}finally {(re_db.patterns._STAR_pattern_log_STAR_ = _STAR_pattern_log_STAR__orig_val__52356);
}})();
var map__52355__$1 = (((((!((map__52355 == null))))?(((((map__52355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52355):map__52355);
var patterns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52355__$1,new cljs.core.Keyword(null,"patterns","patterns",1164082024));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52355__$1,new cljs.core.Keyword(null,"value","value",305978217));
var prev_patterns = new cljs.core.Keyword("view","re-db.patterns","view/re-db.patterns",-379797888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re$view));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_patterns,patterns)){
} else {
var temp__5735__auto___52707 = goog.object.get(this$,"reactiveUnsubscribe");
if(cljs.core.truth_(temp__5735__auto___52707)){
var un_sub_52710 = temp__5735__auto___52707;
(un_sub_52710.cljs$core$IFn$_invoke$arity$0 ? un_sub_52710.cljs$core$IFn$_invoke$arity$0() : un_sub_52710.call(null));
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
var len__4736__auto___52713 = arguments.length;
var i__4737__auto___52714 = (0);
while(true){
if((i__4737__auto___52714 < len__4736__auto___52713)){
args__4742__auto__.push((arguments[i__4737__auto___52714]));

var G__52718 = (i__4737__auto___52714 + (1));
i__4737__auto___52714 = G__52718;
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
var G__52719__delegate = function (args){
var seq__52374 = cljs.core.seq(fns);
var chunk__52375 = null;
var count__52376 = (0);
var i__52377 = (0);
while(true){
if((i__52377 < count__52376)){
var f = chunk__52375.cljs$core$IIndexed$_nth$arity$2(null,i__52377);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__52721 = seq__52374;
var G__52722 = chunk__52375;
var G__52723 = count__52376;
var G__52724 = (i__52377 + (1));
seq__52374 = G__52721;
chunk__52375 = G__52722;
count__52376 = G__52723;
i__52377 = G__52724;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52374);
if(temp__5735__auto__){
var seq__52374__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52374__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52374__$1);
var G__52725 = cljs.core.chunk_rest(seq__52374__$1);
var G__52726 = c__4556__auto__;
var G__52727 = cljs.core.count(c__4556__auto__);
var G__52728 = (0);
seq__52374 = G__52725;
chunk__52375 = G__52726;
count__52376 = G__52727;
i__52377 = G__52728;
continue;
} else {
var f = cljs.core.first(seq__52374__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);


var G__52730 = cljs.core.next(seq__52374__$1);
var G__52731 = null;
var G__52732 = (0);
var G__52733 = (0);
seq__52374 = G__52730;
chunk__52375 = G__52731;
count__52376 = G__52732;
i__52377 = G__52733;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__52719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52737__i = 0, G__52737__a = new Array(arguments.length -  0);
while (G__52737__i < G__52737__a.length) {G__52737__a[G__52737__i] = arguments[G__52737__i + 0]; ++G__52737__i;}
  args = new cljs.core.IndexedSeq(G__52737__a,0,null);
} 
return G__52719__delegate.call(this,args);};
G__52719.cljs$lang$maxFixedArity = 0;
G__52719.cljs$lang$applyTo = (function (arglist__52739){
var args = cljs.core.seq(arglist__52739);
return G__52719__delegate(args);
});
G__52719.cljs$core$IFn$_invoke$arity$variadic = G__52719__delegate;
return G__52719;
})()
;
}));

(re_view.core.compseq.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.core.compseq.cljs$lang$applyTo = (function (seq52372){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52372));
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
var G__52415 = m;
if(cljs.core.vector_QMARK_(fns)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52415,method_k,((cljs.core.keyword_identical_QMARK_(method_k,new cljs.core.Keyword("view","should-update","view/should-update",-1289068156)))?cljs.core.last(fns):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_view.core.compseq,fns)));
} else {
return G__52415;
}
}),methods$__$1,methods$__$1);
});
re_view.core.finish_lifecycle = (function re_view$core$finish_lifecycle(this$){

var re$view = (this$["re$view"]);
var map__52436 = cljs.core.deref(re$view);
var map__52436__$1 = (((((!((map__52436 == null))))?(((((map__52436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52436):map__52436);
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52436__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52436__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52436__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
return cljs.core.vreset_BANG_(re$view,(function (){var G__52445 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(re$view),new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),children], 0));
if(cljs.core.truth_(state)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52445,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886),cljs.core.deref(state));
} else {
return G__52445;
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
var G__52450 = method_k;
var G__52450__$1 = (((G__52450 instanceof cljs.core.Keyword))?G__52450.fqn:null);
switch (G__52450__$1) {
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
var _STAR_trigger_state_render_STAR__orig_val__52454 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__52455 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__52455);

try{var this$ = this;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(this$,props) : f.call(null,this$,props));
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__52454);
}});

break;
case "view/will-mount":
case "view/will-unmount":
case "view/will-receive-state":
case "view/will-update":
return (function (){
var _STAR_trigger_state_render_STAR__orig_val__52456 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__52457 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__52457);

try{var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,new cljs.core.Keyword("view","children","view/children",-946116505).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(goog.object.get(this$,"re$view"))));
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__52456);
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
var G__52746__delegate = function (args){
var this$ = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,this$,args);
};
var G__52746 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52747__i = 0, G__52747__a = new Array(arguments.length -  0);
while (G__52747__i < G__52747__a.length) {G__52747__a[G__52747__i] = arguments[G__52747__i + 0]; ++G__52747__i;}
  args = new cljs.core.IndexedSeq(G__52747__a,0,null);
} 
return G__52746__delegate.call(this,args);};
G__52746.cljs$lang$maxFixedArity = 0;
G__52746.cljs$lang$applyTo = (function (arglist__52748){
var args = cljs.core.seq(arglist__52748);
return G__52746__delegate(args);
});
G__52746.cljs$core$IFn$_invoke$arity$variadic = G__52746__delegate;
return G__52746;
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

var temp__5735__auto___52756 = goog.object.get(component,"componentWillReceiveState");
if(cljs.core.truth_(temp__5735__auto___52756)){
var will_receive_52757 = temp__5735__auto___52756;
will_receive_52757.call(component);
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
if(cljs.core.truth_((function (){var G__52464 = cljs.core.namespace(k);
var fexpr__52463 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__52463.cljs$core$IFn$_invoke$arity$1 ? fexpr__52463.cljs$core$IFn$_invoke$arity$1(G__52464) : fexpr__52463.call(null,G__52464));
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
if(cljs.core.truth_((function (){var G__52466 = cljs.core.namespace(k);
var fexpr__52465 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"view",null], null), null);
return (fexpr__52465.cljs$core$IFn$_invoke$arity$1 ? fexpr__52465.cljs$core$IFn$_invoke$arity$1(G__52466) : fexpr__52465.call(null,G__52466));
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
var G__52468 = obj;
goog.object.set(G__52468,cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.core.kmap,method_k),re_view.core.wrap_methods(method_k,method));

return G__52468;
}),({}),re_view.core.collect(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-receive-props","view/will-receive-props",-56046583),(function (this$,props){
var map__52472 = this$;
var map__52472__$1 = (((((!((map__52472 == null))))?(((((map__52472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52472):map__52472);
var this$__$1 = map__52472__$1;
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52472__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52472__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var next_props = (props["props"]);
return cljs.core._vreset_BANG_(goog.object.get(this$__$1,"re$view"),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core._deref(goog.object.get(this$__$1,"re$view")),new cljs.core.Keyword("view","props","view/props",449562012),next_props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148),prev_props,new cljs.core.Keyword("view","children","view/children",-946116505),(props["children"]),new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375),prev_children], 0)));
}),new cljs.core.Keyword("view","should-update","view/should-update",-1289068156),(function (p__52478){
var map__52479 = p__52478;
var map__52479__$1 = (((((!((map__52479 == null))))?(((((map__52479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52479):map__52479);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52479__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var prev_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52479__$1,new cljs.core.Keyword("view","prev-props","view/prev-props",-557681148));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52479__$1,new cljs.core.Keyword("view","children","view/children",-946116505));
var prev_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52479__$1,new cljs.core.Keyword("view","prev-children","view/prev-children",-516560375));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52479__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
var prev_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52479__$1,new cljs.core.Keyword("view","prev-state","view/prev-state",-279757886));
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
})], null),methods$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("view","will-unmount","view/will-unmount",-828409603),(function (p__52481){
var map__52482 = p__52481;
var map__52482__$1 = (((((!((map__52482 == null))))?(((((map__52482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52482):map__52482);
var this$ = map__52482__$1;
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52482__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
goog.object.set(this$,"unmounted",true);

var temp__5735__auto___52775 = (this$["reactiveUnsubscribe"]);
if(cljs.core.truth_(temp__5735__auto___52775)){
var un_sub_52776 = temp__5735__auto___52775;
(un_sub_52776.cljs$core$IFn$_invoke$arity$0 ? un_sub_52776.cljs$core$IFn$_invoke$arity$0() : un_sub_52776.call(null));
} else {
}

var G__52486 = state;
if((G__52486 == null)){
return null;
} else {
return cljs.core.remove_watch(G__52486,this$);
}
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),re_view.core.finish_lifecycle], null)], null)));
});
/**
 * Swap a component's state atom without forcing an update (render)
 */
re_view.core.swap_silently_BANG_ = (function re_view$core$swap_silently_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___52787 = arguments.length;
var i__4737__auto___52788 = (0);
while(true){
if((i__4737__auto___52788 < len__4736__auto___52787)){
args__4742__auto__.push((arguments[i__4737__auto___52788]));

var G__52789 = (i__4737__auto___52788 + (1));
i__4737__auto___52788 = G__52789;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(re_view.core.swap_silently_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_trigger_state_render_STAR__orig_val__52490 = re_view.core._STAR_trigger_state_render_STAR_;
var _STAR_trigger_state_render_STAR__temp_val__52491 = false;
(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__temp_val__52491);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_,args);
}finally {(re_view.core._STAR_trigger_state_render_STAR_ = _STAR_trigger_state_render_STAR__orig_val__52490);
}}));

(re_view.core.swap_silently_BANG_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_view.core.swap_silently_BANG_.cljs$lang$applyTo = (function (seq52487){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52487));
}));

/**
 * Bind element methods and populate initial props for `component`.
 */
re_view.core.init_component = (function re_view$core$init_component(component,$props){
if(cljs.core.truth_($props)){
var props_52808 = goog.object.get($props,"props");
var children_52809 = goog.object.get($props,"children");
goog.object.set(component,"re$view",cljs.core.volatile_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(goog.object.get($props,"class"),new cljs.core.Keyword("view","props","view/props",449562012),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props_52808,new cljs.core.Keyword("view","state","view/state",-1991815820)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("view","children","view/children",-946116505),children_52809], 0))));

var temp__5735__auto___52825 = goog.object.get($props,"instance");
if(cljs.core.truth_(temp__5735__auto___52825)){
var instance_keys_52826 = temp__5735__auto___52825;
var seq__52493_52827 = cljs.core.seq(goog.object.getKeys(instance_keys_52826));
var chunk__52494_52828 = null;
var count__52495_52829 = (0);
var i__52496_52830 = (0);
while(true){
if((i__52496_52830 < count__52495_52829)){
var k_52835 = chunk__52494_52828.cljs$core$IIndexed$_nth$arity$2(null,i__52496_52830);
var f_52839 = goog.object.get(instance_keys_52826,k_52835);
goog.object.set(component,k_52835,((cljs.core.fn_QMARK_(f_52839))?((function (seq__52493_52827,chunk__52494_52828,count__52495_52829,i__52496_52830,f_52839,k_52835,instance_keys_52826,temp__5735__auto___52825,props_52808,children_52809){
return (function() { 
var G__52840__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_52839,component,args);
};
var G__52840 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52846__i = 0, G__52846__a = new Array(arguments.length -  0);
while (G__52846__i < G__52846__a.length) {G__52846__a[G__52846__i] = arguments[G__52846__i + 0]; ++G__52846__i;}
  args = new cljs.core.IndexedSeq(G__52846__a,0,null);
} 
return G__52840__delegate.call(this,args);};
G__52840.cljs$lang$maxFixedArity = 0;
G__52840.cljs$lang$applyTo = (function (arglist__52847){
var args = cljs.core.seq(arglist__52847);
return G__52840__delegate(args);
});
G__52840.cljs$core$IFn$_invoke$arity$variadic = G__52840__delegate;
return G__52840;
})()
;})(seq__52493_52827,chunk__52494_52828,count__52495_52829,i__52496_52830,f_52839,k_52835,instance_keys_52826,temp__5735__auto___52825,props_52808,children_52809))
:f_52839));


var G__52849 = seq__52493_52827;
var G__52850 = chunk__52494_52828;
var G__52851 = count__52495_52829;
var G__52852 = (i__52496_52830 + (1));
seq__52493_52827 = G__52849;
chunk__52494_52828 = G__52850;
count__52495_52829 = G__52851;
i__52496_52830 = G__52852;
continue;
} else {
var temp__5735__auto___52854__$1 = cljs.core.seq(seq__52493_52827);
if(temp__5735__auto___52854__$1){
var seq__52493_52855__$1 = temp__5735__auto___52854__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52493_52855__$1)){
var c__4556__auto___52856 = cljs.core.chunk_first(seq__52493_52855__$1);
var G__52857 = cljs.core.chunk_rest(seq__52493_52855__$1);
var G__52858 = c__4556__auto___52856;
var G__52859 = cljs.core.count(c__4556__auto___52856);
var G__52860 = (0);
seq__52493_52827 = G__52857;
chunk__52494_52828 = G__52858;
count__52495_52829 = G__52859;
i__52496_52830 = G__52860;
continue;
} else {
var k_52861 = cljs.core.first(seq__52493_52855__$1);
var f_52862 = goog.object.get(instance_keys_52826,k_52861);
goog.object.set(component,k_52861,((cljs.core.fn_QMARK_(f_52862))?((function (seq__52493_52827,chunk__52494_52828,count__52495_52829,i__52496_52830,f_52862,k_52861,seq__52493_52855__$1,temp__5735__auto___52854__$1,instance_keys_52826,temp__5735__auto___52825,props_52808,children_52809){
return (function() { 
var G__52863__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_52862,component,args);
};
var G__52863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52866__i = 0, G__52866__a = new Array(arguments.length -  0);
while (G__52866__i < G__52866__a.length) {G__52866__a[G__52866__i] = arguments[G__52866__i + 0]; ++G__52866__i;}
  args = new cljs.core.IndexedSeq(G__52866__a,0,null);
} 
return G__52863__delegate.call(this,args);};
G__52863.cljs$lang$maxFixedArity = 0;
G__52863.cljs$lang$applyTo = (function (arglist__52867){
var args = cljs.core.seq(arglist__52867);
return G__52863__delegate(args);
});
G__52863.cljs$core$IFn$_invoke$arity$variadic = G__52863__delegate;
return G__52863;
})()
;})(seq__52493_52827,chunk__52494_52828,count__52495_52829,i__52496_52830,f_52862,k_52861,seq__52493_52855__$1,temp__5735__auto___52854__$1,instance_keys_52826,temp__5735__auto___52825,props_52808,children_52809))
:f_52862));


var G__52868 = cljs.core.next(seq__52493_52855__$1);
var G__52869 = null;
var G__52870 = (0);
var G__52871 = (0);
seq__52493_52827 = G__52868;
chunk__52494_52828 = G__52869;
count__52495_52829 = G__52870;
i__52496_52830 = G__52871;
continue;
}
} else {
}
}
break;
}
} else {
}

var temp__5735__auto___52874 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props_52808,new cljs.core.Keyword("view","state","view/state",-1991815820));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto___52874 = goog.object.get(component,"$initialState");
if(cljs.core.truth_(temp__5735__auto___52874)){
var initial_state = temp__5735__auto___52874;
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var G__52533 = initial_state;
if(cljs.core.fn_QMARK_(initial_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__52533,component,children_52809);
} else {
return G__52533;
}
})());
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5735__auto___52874 = goog.object.get(component,"$state");
if(cljs.core.truth_(temp__5735__auto___52874)){
var watchable_state = temp__5735__auto___52874;
var G__52536 = watchable_state;
if(cljs.core.fn_QMARK_(watchable_state)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(G__52536,component,children_52809);
} else {
return G__52536;
}
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(temp__5735__auto___52874)){
var state_52876 = temp__5735__auto___52874;
re_view.core.init_state_BANG_(component,state_52876);
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
var map__52538 = goog.object.get(constructor$,"re$view$base");
var map__52538__$1 = (((((!((map__52538 == null))))?(((((map__52538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52538):map__52538);
var re$view$base = map__52538__$1;
var class_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52538__$1,new cljs.core.Keyword(null,"class-keys","class-keys",106917605));
var instance_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52538__$1,new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647));
var map__52539 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(class_keys,new cljs.core.Keyword("spec","props","spec/props",450064562),re_view.view_spec.normalize_props_map),new cljs.core.Keyword("spec","children","spec/children",-946200067),re_view.view_spec.resolve_spec_vector);
var map__52539__$1 = (((((!((map__52539 == null))))?(((((map__52539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52539):map__52539);
var class_keys__$1 = map__52539__$1;
var map__52540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52539__$1,new cljs.core.Keyword("spec","props","spec/props",450064562));
var map__52540__$1 = (((((!((map__52540 == null))))?(((((map__52540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52540):map__52540);
var prop_spec = map__52540__$1;
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52540__$1,new cljs.core.Keyword("props","defaults","props/defaults",999110366));
var children_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52539__$1,new cljs.core.Keyword("spec","children","spec/children",-946200067));
var class_react_key = goog.object.get(constructor$,"key");
var display_name = goog.object.get(constructor$,"displayName");
var G__52553 = (function() { 
var G__52884__delegate = function (props,children){
var vec__52554 = ((((cljs.core.map_QMARK_(props)) || ((props == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [props,children], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons(props,children)], null));
var props__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52554,(0),null);
var children__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52554,(1),null);
var props__$2 = (function (){var G__52558 = props__$1;
if(cljs.core.truth_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,G__52558], 0));
} else {
return G__52558;
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
var G__52884 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__52892__i = 0, G__52892__a = new Array(arguments.length -  1);
while (G__52892__i < G__52892__a.length) {G__52892__a[G__52892__i] = arguments[G__52892__i + 1]; ++G__52892__i;}
  children = new cljs.core.IndexedSeq(G__52892__a,0,null);
} 
return G__52884__delegate.call(this,props,children);};
G__52884.cljs$lang$maxFixedArity = 1;
G__52884.cljs$lang$applyTo = (function (arglist__52893){
var props = cljs.core.first(arglist__52893);
var children = cljs.core.rest(arglist__52893);
return G__52884__delegate(props,children);
});
G__52884.cljs$core$IFn$_invoke$arity$variadic = G__52884__delegate;
return G__52884;
})()
;
goog.object.set(G__52553,"re$view$base",re$view$base);

return G__52553;
});
re_view.core.class_STAR_ = (function re_view$core$class_STAR_(p__52591){
var map__52592 = p__52591;
var map__52592__$1 = (((((!((map__52592 == null))))?(((((map__52592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52592):map__52592);
var re_view_base = map__52592__$1;
var lifecycle_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52592__$1,new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896));
var react_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52592__$1,new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002));
var prototype = (new module$node_modules$react$index.Component());
var _ = goog.object.extend(prototype,re_view.core.lifecycle_methods(lifecycle_keys));
var constructor$ = (function re_view$core$class_STAR__$_ReView($props){
var this$ = this;
return re_view.core.init_component(this$,$props);
});
var ___$1 = goog.object.set(constructor$,"prototype",prototype);
var seq__52599_52907 = cljs.core.seq(cljs.core.seq(react_keys));
var chunk__52600_52908 = null;
var count__52601_52909 = (0);
var i__52602_52910 = (0);
while(true){
if((i__52602_52910 < count__52601_52909)){
var vec__52616_52917 = chunk__52600_52908.cljs$core$IIndexed$_nth$arity$2(null,i__52602_52910);
var k_52918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52616_52917,(0),null);
var v_52919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52616_52917,(1),null);
goog.object.set(constructor$,re_view.util.camelCase(k_52918),v_52919);


var G__52923 = seq__52599_52907;
var G__52924 = chunk__52600_52908;
var G__52925 = count__52601_52909;
var G__52926 = (i__52602_52910 + (1));
seq__52599_52907 = G__52923;
chunk__52600_52908 = G__52924;
count__52601_52909 = G__52925;
i__52602_52910 = G__52926;
continue;
} else {
var temp__5735__auto___52931 = cljs.core.seq(seq__52599_52907);
if(temp__5735__auto___52931){
var seq__52599_52932__$1 = temp__5735__auto___52931;
if(cljs.core.chunked_seq_QMARK_(seq__52599_52932__$1)){
var c__4556__auto___52933 = cljs.core.chunk_first(seq__52599_52932__$1);
var G__52934 = cljs.core.chunk_rest(seq__52599_52932__$1);
var G__52935 = c__4556__auto___52933;
var G__52936 = cljs.core.count(c__4556__auto___52933);
var G__52937 = (0);
seq__52599_52907 = G__52934;
chunk__52600_52908 = G__52935;
count__52601_52909 = G__52936;
i__52602_52910 = G__52937;
continue;
} else {
var vec__52634_52938 = cljs.core.first(seq__52599_52932__$1);
var k_52939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52634_52938,(0),null);
var v_52940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52634_52938,(1),null);
goog.object.set(constructor$,re_view.util.camelCase(k_52939),v_52940);


var G__52941 = cljs.core.next(seq__52599_52932__$1);
var G__52942 = null;
var G__52943 = (0);
var G__52944 = (0);
seq__52599_52907 = G__52941;
chunk__52600_52908 = G__52942;
count__52601_52909 = G__52943;
i__52602_52910 = G__52944;
continue;
}
} else {
}
}
break;
}

var G__52640 = constructor$;
goog.object.set(G__52640,"re$view$base",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_view_base,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),prototype));

return G__52640;
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
return module$node_modules$react_dom$index.render(component,(function (){var G__52654 = element;
if(typeof element === 'string'){
return document.getElementById(G__52654);
} else {
return G__52654;
}
})());
});
/**
 * Partially apply props and optional class-keys to base view. Props specified at runtime will overwrite those given here.
 *   `re$view$base` property is retained on preserved.
 */
re_view.core.partial = (function re_view$core$partial(var_args){
var G__52664 = arguments.length;
switch (G__52664) {
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
var G__52669 = (function() { 
var G__52966__delegate = function (args){
var vec__52670 = (function (){var G__52673 = args;
if((!(cljs.core.map_QMARK_(cljs.core.first(args))))){
return cljs.core.cons(cljs.core.PersistentArrayMap.EMPTY,G__52673);
} else {
return G__52673;
}
})();
var seq__52671 = cljs.core.seq(vec__52670);
var first__52672 = cljs.core.first(seq__52671);
var seq__52671__$1 = cljs.core.next(seq__52671);
var user_props = first__52672;
var children = seq__52671__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(base,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,user_props], 0)),children);
};
var G__52966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52986__i = 0, G__52986__a = new Array(arguments.length -  0);
while (G__52986__i < G__52986__a.length) {G__52986__a[G__52986__i] = arguments[G__52986__i + 0]; ++G__52986__i;}
  args = new cljs.core.IndexedSeq(G__52986__a,0,null);
} 
return G__52966__delegate.call(this,args);};
G__52966.cljs$lang$maxFixedArity = 0;
G__52966.cljs$lang$applyTo = (function (arglist__52987){
var args = cljs.core.seq(arglist__52987);
return G__52966__delegate(args);
});
G__52966.cljs$core$IFn$_invoke$arity$variadic = G__52966__delegate;
return G__52966;
})()
;
goog.object.set(G__52669,"re$view$base",goog.object.get(base,"re$view$base"));

return G__52669;
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
