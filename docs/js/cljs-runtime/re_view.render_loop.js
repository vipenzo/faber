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
}catch (e51826){if((e51826 instanceof Error)){
var e = e51826;
var temp__5733__auto__ = (this$["catch"]);
if(cljs.core.truth_(temp__5733__auto__)){
var catch_fn = temp__5733__auto__;
return (catch_fn.cljs$core$IFn$_invoke$arity$1 ? catch_fn.cljs$core$IFn$_invoke$arity$1(e) : catch_fn.call(null,e));
} else {
console.debug("No :catch method in component: ",this$);

return console.error(e);
}
} else {
throw e51826;

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
var components_51903 = cljs.core.deref(re_view.render_loop.to_render);
cljs.core.vreset_BANG_(re_view.render_loop.to_render,cljs.core.PersistentHashSet.EMPTY);

var seq__51828_51904 = cljs.core.seq(components_51903);
var chunk__51829_51905 = null;
var count__51830_51906 = (0);
var i__51831_51907 = (0);
while(true){
if((i__51831_51907 < count__51830_51906)){
var c_51911 = chunk__51829_51905.cljs$core$IIndexed$_nth$arity$2(null,i__51831_51907);
re_view.render_loop.force_update_caught(c_51911);


var G__51912 = seq__51828_51904;
var G__51913 = chunk__51829_51905;
var G__51914 = count__51830_51906;
var G__51915 = (i__51831_51907 + (1));
seq__51828_51904 = G__51912;
chunk__51829_51905 = G__51913;
count__51830_51906 = G__51914;
i__51831_51907 = G__51915;
continue;
} else {
var temp__5735__auto___51916 = cljs.core.seq(seq__51828_51904);
if(temp__5735__auto___51916){
var seq__51828_51917__$1 = temp__5735__auto___51916;
if(cljs.core.chunked_seq_QMARK_(seq__51828_51917__$1)){
var c__4556__auto___51918 = cljs.core.chunk_first(seq__51828_51917__$1);
var G__51919 = cljs.core.chunk_rest(seq__51828_51917__$1);
var G__51920 = c__4556__auto___51918;
var G__51921 = cljs.core.count(c__4556__auto___51918);
var G__51922 = (0);
seq__51828_51904 = G__51919;
chunk__51829_51905 = G__51920;
count__51830_51906 = G__51921;
i__51831_51907 = G__51922;
continue;
} else {
var c_51923 = cljs.core.first(seq__51828_51917__$1);
re_view.render_loop.force_update_caught(c_51923);


var G__51924 = cljs.core.next(seq__51828_51917__$1);
var G__51925 = null;
var G__51926 = (0);
var G__51927 = (0);
seq__51828_51904 = G__51924;
chunk__51829_51905 = G__51925;
count__51830_51906 = G__51926;
i__51831_51907 = G__51927;
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

var seq__51849 = cljs.core.seq(fns);
var chunk__51850 = null;
var count__51851 = (0);
var i__51852 = (0);
while(true){
if((i__51852 < count__51851)){
var f = chunk__51850.cljs$core$IIndexed$_nth$arity$2(null,i__51852);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__51928 = seq__51849;
var G__51929 = chunk__51850;
var G__51930 = count__51851;
var G__51931 = (i__51852 + (1));
seq__51849 = G__51928;
chunk__51850 = G__51929;
count__51851 = G__51930;
i__51852 = G__51931;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51849);
if(temp__5735__auto__){
var seq__51849__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51849__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51849__$1);
var G__51932 = cljs.core.chunk_rest(seq__51849__$1);
var G__51933 = c__4556__auto__;
var G__51934 = cljs.core.count(c__4556__auto__);
var G__51935 = (0);
seq__51849 = G__51932;
chunk__51850 = G__51933;
count__51851 = G__51934;
i__51852 = G__51935;
continue;
} else {
var f = cljs.core.first(seq__51849__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__51939 = cljs.core.next(seq__51849__$1);
var G__51940 = null;
var G__51941 = (0);
var G__51942 = (0);
seq__51849 = G__51939;
chunk__51850 = G__51940;
count__51851 = G__51941;
i__51852 = G__51942;
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
var G__51950__delegate = function (args){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
re_view.render_loop.flush_BANG_();

return result;
};
var G__51950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51951__i = 0, G__51951__a = new Array(arguments.length -  0);
while (G__51951__i < G__51951__a.length) {G__51951__a[G__51951__i] = arguments[G__51951__i + 0]; ++G__51951__i;}
  args = new cljs.core.IndexedSeq(G__51951__a,0,null);
} 
return G__51950__delegate.call(this,args);};
G__51950.cljs$lang$maxFixedArity = 0;
G__51950.cljs$lang$applyTo = (function (arglist__51952){
var args = cljs.core.seq(arglist__51952);
return G__51950__delegate(args);
});
G__51950.cljs$core$IFn$_invoke$arity$variadic = G__51950__delegate;
return G__51950;
})()
;
});

//# sourceMappingURL=re_view.render_loop.js.map
