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
}catch (e49187){if((e49187 instanceof Error)){
var e = e49187;
var temp__5733__auto__ = (this$["catch"]);
if(cljs.core.truth_(temp__5733__auto__)){
var catch_fn = temp__5733__auto__;
return (catch_fn.cljs$core$IFn$_invoke$arity$1 ? catch_fn.cljs$core$IFn$_invoke$arity$1(e) : catch_fn.call(null,e));
} else {
console.debug("No :catch method in component: ",this$);

return console.error(e);
}
} else {
throw e49187;

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
var components_49231 = cljs.core.deref(re_view.render_loop.to_render);
cljs.core.vreset_BANG_(re_view.render_loop.to_render,cljs.core.PersistentHashSet.EMPTY);

var seq__49190_49232 = cljs.core.seq(components_49231);
var chunk__49191_49233 = null;
var count__49192_49234 = (0);
var i__49193_49235 = (0);
while(true){
if((i__49193_49235 < count__49192_49234)){
var c_49236 = chunk__49191_49233.cljs$core$IIndexed$_nth$arity$2(null,i__49193_49235);
re_view.render_loop.force_update_caught(c_49236);


var G__49238 = seq__49190_49232;
var G__49239 = chunk__49191_49233;
var G__49240 = count__49192_49234;
var G__49241 = (i__49193_49235 + (1));
seq__49190_49232 = G__49238;
chunk__49191_49233 = G__49239;
count__49192_49234 = G__49240;
i__49193_49235 = G__49241;
continue;
} else {
var temp__5735__auto___49242 = cljs.core.seq(seq__49190_49232);
if(temp__5735__auto___49242){
var seq__49190_49243__$1 = temp__5735__auto___49242;
if(cljs.core.chunked_seq_QMARK_(seq__49190_49243__$1)){
var c__4556__auto___49244 = cljs.core.chunk_first(seq__49190_49243__$1);
var G__49245 = cljs.core.chunk_rest(seq__49190_49243__$1);
var G__49246 = c__4556__auto___49244;
var G__49247 = cljs.core.count(c__4556__auto___49244);
var G__49248 = (0);
seq__49190_49232 = G__49245;
chunk__49191_49233 = G__49246;
count__49192_49234 = G__49247;
i__49193_49235 = G__49248;
continue;
} else {
var c_49249 = cljs.core.first(seq__49190_49243__$1);
re_view.render_loop.force_update_caught(c_49249);


var G__49250 = cljs.core.next(seq__49190_49243__$1);
var G__49251 = null;
var G__49252 = (0);
var G__49253 = (0);
seq__49190_49232 = G__49250;
chunk__49191_49233 = G__49251;
count__49192_49234 = G__49252;
i__49193_49235 = G__49253;
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

var seq__49200 = cljs.core.seq(fns);
var chunk__49201 = null;
var count__49202 = (0);
var i__49203 = (0);
while(true){
if((i__49203 < count__49202)){
var f = chunk__49201.cljs$core$IIndexed$_nth$arity$2(null,i__49203);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__49255 = seq__49200;
var G__49256 = chunk__49201;
var G__49257 = count__49202;
var G__49258 = (i__49203 + (1));
seq__49200 = G__49255;
chunk__49201 = G__49256;
count__49202 = G__49257;
i__49203 = G__49258;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49200);
if(temp__5735__auto__){
var seq__49200__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49200__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49200__$1);
var G__49260 = cljs.core.chunk_rest(seq__49200__$1);
var G__49261 = c__4556__auto__;
var G__49262 = cljs.core.count(c__4556__auto__);
var G__49263 = (0);
seq__49200 = G__49260;
chunk__49201 = G__49261;
count__49202 = G__49262;
i__49203 = G__49263;
continue;
} else {
var f = cljs.core.first(seq__49200__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__49264 = cljs.core.next(seq__49200__$1);
var G__49265 = null;
var G__49266 = (0);
var G__49267 = (0);
seq__49200 = G__49264;
chunk__49201 = G__49265;
count__49202 = G__49266;
i__49203 = G__49267;
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
var G__49268__delegate = function (args){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
re_view.render_loop.flush_BANG_();

return result;
};
var G__49268 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49269__i = 0, G__49269__a = new Array(arguments.length -  0);
while (G__49269__i < G__49269__a.length) {G__49269__a[G__49269__i] = arguments[G__49269__i + 0]; ++G__49269__i;}
  args = new cljs.core.IndexedSeq(G__49269__a,0,null);
} 
return G__49268__delegate.call(this,args);};
G__49268.cljs$lang$maxFixedArity = 0;
G__49268.cljs$lang$applyTo = (function (arglist__49270){
var args = cljs.core.seq(arglist__49270);
return G__49268__delegate(args);
});
G__49268.cljs$core$IFn$_invoke$arity$variadic = G__49268__delegate;
return G__49268;
})()
;
});

//# sourceMappingURL=re_view.render_loop.js.map
