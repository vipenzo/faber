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
}catch (e51832){if((e51832 instanceof Error)){
var e = e51832;
var temp__5733__auto__ = (this$["catch"]);
if(cljs.core.truth_(temp__5733__auto__)){
var catch_fn = temp__5733__auto__;
return (catch_fn.cljs$core$IFn$_invoke$arity$1 ? catch_fn.cljs$core$IFn$_invoke$arity$1(e) : catch_fn.call(null,e));
} else {
console.debug("No :catch method in component: ",this$);

return console.error(e);
}
} else {
throw e51832;

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
var components_51870 = cljs.core.deref(re_view.render_loop.to_render);
cljs.core.vreset_BANG_(re_view.render_loop.to_render,cljs.core.PersistentHashSet.EMPTY);

var seq__51837_51872 = cljs.core.seq(components_51870);
var chunk__51838_51873 = null;
var count__51839_51874 = (0);
var i__51840_51875 = (0);
while(true){
if((i__51840_51875 < count__51839_51874)){
var c_51880 = chunk__51838_51873.cljs$core$IIndexed$_nth$arity$2(null,i__51840_51875);
re_view.render_loop.force_update_caught(c_51880);


var G__51881 = seq__51837_51872;
var G__51882 = chunk__51838_51873;
var G__51883 = count__51839_51874;
var G__51884 = (i__51840_51875 + (1));
seq__51837_51872 = G__51881;
chunk__51838_51873 = G__51882;
count__51839_51874 = G__51883;
i__51840_51875 = G__51884;
continue;
} else {
var temp__5735__auto___51885 = cljs.core.seq(seq__51837_51872);
if(temp__5735__auto___51885){
var seq__51837_51886__$1 = temp__5735__auto___51885;
if(cljs.core.chunked_seq_QMARK_(seq__51837_51886__$1)){
var c__4556__auto___51889 = cljs.core.chunk_first(seq__51837_51886__$1);
var G__51894 = cljs.core.chunk_rest(seq__51837_51886__$1);
var G__51895 = c__4556__auto___51889;
var G__51896 = cljs.core.count(c__4556__auto___51889);
var G__51897 = (0);
seq__51837_51872 = G__51894;
chunk__51838_51873 = G__51895;
count__51839_51874 = G__51896;
i__51840_51875 = G__51897;
continue;
} else {
var c_51898 = cljs.core.first(seq__51837_51886__$1);
re_view.render_loop.force_update_caught(c_51898);


var G__51902 = cljs.core.next(seq__51837_51886__$1);
var G__51903 = null;
var G__51904 = (0);
var G__51905 = (0);
seq__51837_51872 = G__51902;
chunk__51838_51873 = G__51903;
count__51839_51874 = G__51904;
i__51840_51875 = G__51905;
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

var seq__51845 = cljs.core.seq(fns);
var chunk__51846 = null;
var count__51847 = (0);
var i__51848 = (0);
while(true){
if((i__51848 < count__51847)){
var f = chunk__51846.cljs$core$IIndexed$_nth$arity$2(null,i__51848);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__51906 = seq__51845;
var G__51907 = chunk__51846;
var G__51908 = count__51847;
var G__51909 = (i__51848 + (1));
seq__51845 = G__51906;
chunk__51846 = G__51907;
count__51847 = G__51908;
i__51848 = G__51909;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51845);
if(temp__5735__auto__){
var seq__51845__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51845__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51845__$1);
var G__51913 = cljs.core.chunk_rest(seq__51845__$1);
var G__51914 = c__4556__auto__;
var G__51915 = cljs.core.count(c__4556__auto__);
var G__51916 = (0);
seq__51845 = G__51913;
chunk__51846 = G__51914;
count__51847 = G__51915;
i__51848 = G__51916;
continue;
} else {
var f = cljs.core.first(seq__51845__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__51917 = cljs.core.next(seq__51845__$1);
var G__51918 = null;
var G__51919 = (0);
var G__51920 = (0);
seq__51845 = G__51917;
chunk__51846 = G__51918;
count__51847 = G__51919;
i__51848 = G__51920;
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
var G__51924__delegate = function (args){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
re_view.render_loop.flush_BANG_();

return result;
};
var G__51924 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51926__i = 0, G__51926__a = new Array(arguments.length -  0);
while (G__51926__i < G__51926__a.length) {G__51926__a[G__51926__i] = arguments[G__51926__i + 0]; ++G__51926__i;}
  args = new cljs.core.IndexedSeq(G__51926__a,0,null);
} 
return G__51924__delegate.call(this,args);};
G__51924.cljs$lang$maxFixedArity = 0;
G__51924.cljs$lang$applyTo = (function (arglist__51930){
var args = cljs.core.seq(arglist__51930);
return G__51924__delegate(args);
});
G__51924.cljs$core$IFn$_invoke$arity$variadic = G__51924__delegate;
return G__51924;
})()
;
});

//# sourceMappingURL=re_view.render_loop.js.map
