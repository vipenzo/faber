goog.provide('re_view.render_loop');
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop._STAR_immediate_state_update_STAR_ !== 'undefined')){
} else {
re_view.render_loop._STAR_immediate_state_update_STAR_ = false;
}
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop.count_fps_QMARK_ !== 'undefined')){
} else {
re_view.render_loop.count_fps_QMARK_ = false;
}
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop.last_fps_time !== 'undefined')){
} else {
re_view.render_loop.last_fps_time = (1);
}
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop.frame_rate !== 'undefined')){
} else {
re_view.render_loop.frame_rate = (0);
}
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop.frame_count !== 'undefined')){
} else {
re_view.render_loop.frame_count = (0);
}
re_view.render_loop.count_fps_BANG_ = (function re_view$render_loop$count_fps_BANG_(enable_QMARK_){
return (re_view.render_loop.count_fps_QMARK_ = enable_QMARK_);
});
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop._raf_polyfill !== 'undefined')){
} else {
re_view.render_loop._raf_polyfill = (cljs.core.truth_(typeof window !== 'undefined')?((cljs.core.not(window.requestAnimationFrame))?(window.requestAnimationFrame = (function (){var or__4126__auto__ = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = window.oRequestAnimationFrame;
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
var or__4126__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__4126__auto____$3)){
return or__4126__auto____$3;
} else {
return (function (cb){
return setTimeout(cb,((1000) / (60)));
});
}
}
}
}
})()):null):null);
}
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop.to_render !== 'undefined')){
} else {
re_view.render_loop.to_render = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof re_view !== 'undefined') && (typeof re_view.render_loop !== 'undefined') && (typeof re_view.render_loop.to_run !== 'undefined')){
} else {
re_view.render_loop.to_run = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
}
re_view.render_loop.schedule_BANG_ = (function re_view$render_loop$schedule_BANG_(f){
re_view.render_loop.to_run.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(re_view.render_loop.to_run.cljs$core$IDeref$_deref$arity$1(null),f));

return (re_view.render_loop.request_render.cljs$core$IFn$_invoke$arity$0 ? re_view.render_loop.request_render.cljs$core$IFn$_invoke$arity$0() : re_view.render_loop.request_render.call(null));
});
re_view.render_loop.force_update_caught = (function re_view$render_loop$force_update_caught(this$){
if((this$["unmounted"]) === true){
return null;
} else {
try{return this$.forceUpdate();
}catch (e26454){if((e26454 instanceof Error)){
var e = e26454;
var temp__5733__auto__ = (this$["catch"]);
if(cljs.core.truth_(temp__5733__auto__)){
var catch_fn = temp__5733__auto__;
return (catch_fn.cljs$core$IFn$_invoke$arity$1 ? catch_fn.cljs$core$IFn$_invoke$arity$1(e) : catch_fn.call(null,e));
} else {
console.debug("No :catch method in component: ",this$);

return console.error(e);
}
} else {
throw e26454;

}
}}
});
re_view.render_loop.force_update_BANG_ = (function re_view$render_loop$force_update_BANG_(this$){
re_view.render_loop.to_render.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(re_view.render_loop.to_render.cljs$core$IDeref$_deref$arity$1(null),this$));

return re_view.render_loop.force_update_caught(this$);
});
re_view.render_loop.force_update = (function re_view$render_loop$force_update(this$){
if(re_view.render_loop._STAR_immediate_state_update_STAR_ === true){
return re_view.render_loop.force_update_BANG_(this$);
} else {
re_view.render_loop.to_render.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(re_view.render_loop.to_render.cljs$core$IDeref$_deref$arity$1(null),this$));

return (re_view.render_loop.request_render.cljs$core$IFn$_invoke$arity$0 ? re_view.render_loop.request_render.cljs$core$IFn$_invoke$arity$0() : re_view.render_loop.request_render.call(null));
}
});
re_view.render_loop.flush_BANG_ = (function re_view$render_loop$flush_BANG_(){
if(cljs.core.empty_QMARK_(cljs.core.deref(re_view.render_loop.to_render))){
} else {
var components_26474 = cljs.core.deref(re_view.render_loop.to_render);
cljs.core.vreset_BANG_(re_view.render_loop.to_render,cljs.core.PersistentHashSet.EMPTY);

var seq__26458_26475 = cljs.core.seq(components_26474);
var chunk__26459_26476 = null;
var count__26460_26477 = (0);
var i__26461_26478 = (0);
while(true){
if((i__26461_26478 < count__26460_26477)){
var c_26483 = chunk__26459_26476.cljs$core$IIndexed$_nth$arity$2(null,i__26461_26478);
re_view.render_loop.force_update_caught(c_26483);


var G__26484 = seq__26458_26475;
var G__26485 = chunk__26459_26476;
var G__26486 = count__26460_26477;
var G__26487 = (i__26461_26478 + (1));
seq__26458_26475 = G__26484;
chunk__26459_26476 = G__26485;
count__26460_26477 = G__26486;
i__26461_26478 = G__26487;
continue;
} else {
var temp__5735__auto___26488 = cljs.core.seq(seq__26458_26475);
if(temp__5735__auto___26488){
var seq__26458_26489__$1 = temp__5735__auto___26488;
if(cljs.core.chunked_seq_QMARK_(seq__26458_26489__$1)){
var c__4556__auto___26490 = cljs.core.chunk_first(seq__26458_26489__$1);
var G__26491 = cljs.core.chunk_rest(seq__26458_26489__$1);
var G__26492 = c__4556__auto___26490;
var G__26493 = cljs.core.count(c__4556__auto___26490);
var G__26494 = (0);
seq__26458_26475 = G__26491;
chunk__26459_26476 = G__26492;
count__26460_26477 = G__26493;
i__26461_26478 = G__26494;
continue;
} else {
var c_26495 = cljs.core.first(seq__26458_26489__$1);
re_view.render_loop.force_update_caught(c_26495);


var G__26496 = cljs.core.next(seq__26458_26489__$1);
var G__26497 = null;
var G__26498 = (0);
var G__26499 = (0);
seq__26458_26475 = G__26496;
chunk__26459_26476 = G__26497;
count__26460_26477 = G__26498;
i__26461_26478 = G__26499;
continue;
}
} else {
}
}
break;
}
}

if(cljs.core.empty_QMARK_(cljs.core.deref(re_view.render_loop.to_run))){
return null;
} else {
var fns = cljs.core.deref(re_view.render_loop.to_run);
cljs.core.vreset_BANG_(re_view.render_loop.to_run,cljs.core.PersistentVector.EMPTY);

var seq__26462 = cljs.core.seq(fns);
var chunk__26463 = null;
var count__26464 = (0);
var i__26465 = (0);
while(true){
if((i__26465 < count__26464)){
var f = chunk__26463.cljs$core$IIndexed$_nth$arity$2(null,i__26465);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__26500 = seq__26462;
var G__26501 = chunk__26463;
var G__26502 = count__26464;
var G__26503 = (i__26465 + (1));
seq__26462 = G__26500;
chunk__26463 = G__26501;
count__26464 = G__26502;
i__26465 = G__26503;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26462);
if(temp__5735__auto__){
var seq__26462__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26462__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__26462__$1);
var G__26504 = cljs.core.chunk_rest(seq__26462__$1);
var G__26505 = c__4556__auto__;
var G__26506 = cljs.core.count(c__4556__auto__);
var G__26507 = (0);
seq__26462 = G__26504;
chunk__26463 = G__26505;
count__26464 = G__26506;
i__26465 = G__26507;
continue;
} else {
var f = cljs.core.first(seq__26462__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__26508 = cljs.core.next(seq__26462__$1);
var G__26509 = null;
var G__26510 = (0);
var G__26511 = (0);
seq__26462 = G__26508;
chunk__26463 = G__26509;
count__26464 = G__26510;
i__26465 = G__26511;
continue;
}
} else {
return null;
}
}
break;
}
}
});
re_view.render_loop.render_loop = (function re_view$render_loop$render_loop(frame_ms){
(re_view.render_loop.frame_count = (re_view.render_loop.frame_count + (1)));

if(((re_view.render_loop.count_fps_QMARK_ === true) && (((0) === cljs.core.mod(re_view.render_loop.frame_count,(29)))))){
(re_view.render_loop.frame_rate = ((1000) * ((30) / (frame_ms - re_view.render_loop.last_fps_time))));

(re_view.render_loop.last_fps_time = frame_ms);
} else {
}

return re_view.render_loop.flush_BANG_();
});
re_view.render_loop.request_render = (function re_view$render_loop$request_render(){
return requestAnimationFrame(re_view.render_loop.render_loop);
});
/**
 * Wraps function `f` to flush the render loop before returning.
 */
re_view.render_loop.apply_sync_BANG_ = (function re_view$render_loop$apply_sync_BANG_(f){
return (function() { 
var G__26512__delegate = function (args){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
re_view.render_loop.flush_BANG_();

return result;
};
var G__26512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26513__i = 0, G__26513__a = new Array(arguments.length -  0);
while (G__26513__i < G__26513__a.length) {G__26513__a[G__26513__i] = arguments[G__26513__i + 0]; ++G__26513__i;}
  args = new cljs.core.IndexedSeq(G__26513__a,0,null);
} 
return G__26512__delegate.call(this,args);};
G__26512.cljs$lang$maxFixedArity = 0;
G__26512.cljs$lang$applyTo = (function (arglist__26514){
var args = cljs.core.seq(arglist__26514);
return G__26512__delegate(args);
});
G__26512.cljs$core$IFn$_invoke$arity$variadic = G__26512__delegate;
return G__26512;
})()
;
});

//# sourceMappingURL=re_view.render_loop.js.map
