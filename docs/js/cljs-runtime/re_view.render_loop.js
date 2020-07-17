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
}catch (e41777){if((e41777 instanceof Error)){
var e = e41777;
var temp__5733__auto__ = (this$["catch"]);
if(cljs.core.truth_(temp__5733__auto__)){
var catch_fn = temp__5733__auto__;
return (catch_fn.cljs$core$IFn$_invoke$arity$1 ? catch_fn.cljs$core$IFn$_invoke$arity$1(e) : catch_fn.call(null,e));
} else {
console.debug("No :catch method in component: ",this$);

return console.error(e);
}
} else {
throw e41777;

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
var components_41830 = cljs.core.deref(re_view.render_loop.to_render);
cljs.core.vreset_BANG_(re_view.render_loop.to_render,cljs.core.PersistentHashSet.EMPTY);

var seq__41780_41831 = cljs.core.seq(components_41830);
var chunk__41781_41832 = null;
var count__41782_41833 = (0);
var i__41783_41834 = (0);
while(true){
if((i__41783_41834 < count__41782_41833)){
var c_41836 = chunk__41781_41832.cljs$core$IIndexed$_nth$arity$2(null,i__41783_41834);
re_view.render_loop.force_update_caught(c_41836);


var G__41837 = seq__41780_41831;
var G__41838 = chunk__41781_41832;
var G__41839 = count__41782_41833;
var G__41840 = (i__41783_41834 + (1));
seq__41780_41831 = G__41837;
chunk__41781_41832 = G__41838;
count__41782_41833 = G__41839;
i__41783_41834 = G__41840;
continue;
} else {
var temp__5735__auto___41841 = cljs.core.seq(seq__41780_41831);
if(temp__5735__auto___41841){
var seq__41780_41842__$1 = temp__5735__auto___41841;
if(cljs.core.chunked_seq_QMARK_(seq__41780_41842__$1)){
var c__4556__auto___41844 = cljs.core.chunk_first(seq__41780_41842__$1);
var G__41845 = cljs.core.chunk_rest(seq__41780_41842__$1);
var G__41846 = c__4556__auto___41844;
var G__41847 = cljs.core.count(c__4556__auto___41844);
var G__41848 = (0);
seq__41780_41831 = G__41845;
chunk__41781_41832 = G__41846;
count__41782_41833 = G__41847;
i__41783_41834 = G__41848;
continue;
} else {
var c_41852 = cljs.core.first(seq__41780_41842__$1);
re_view.render_loop.force_update_caught(c_41852);


var G__41853 = cljs.core.next(seq__41780_41842__$1);
var G__41854 = null;
var G__41855 = (0);
var G__41856 = (0);
seq__41780_41831 = G__41853;
chunk__41781_41832 = G__41854;
count__41782_41833 = G__41855;
i__41783_41834 = G__41856;
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

var seq__41784 = cljs.core.seq(fns);
var chunk__41785 = null;
var count__41786 = (0);
var i__41787 = (0);
while(true){
if((i__41787 < count__41786)){
var f = chunk__41785.cljs$core$IIndexed$_nth$arity$2(null,i__41787);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__41859 = seq__41784;
var G__41860 = chunk__41785;
var G__41861 = count__41786;
var G__41862 = (i__41787 + (1));
seq__41784 = G__41859;
chunk__41785 = G__41860;
count__41786 = G__41861;
i__41787 = G__41862;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41784);
if(temp__5735__auto__){
var seq__41784__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41784__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__41784__$1);
var G__41870 = cljs.core.chunk_rest(seq__41784__$1);
var G__41871 = c__4556__auto__;
var G__41872 = cljs.core.count(c__4556__auto__);
var G__41873 = (0);
seq__41784 = G__41870;
chunk__41785 = G__41871;
count__41786 = G__41872;
i__41787 = G__41873;
continue;
} else {
var f = cljs.core.first(seq__41784__$1);
(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));


var G__41874 = cljs.core.next(seq__41784__$1);
var G__41875 = null;
var G__41876 = (0);
var G__41877 = (0);
seq__41784 = G__41874;
chunk__41785 = G__41875;
count__41786 = G__41876;
i__41787 = G__41877;
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
var G__41878__delegate = function (args){
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
re_view.render_loop.flush_BANG_();

return result;
};
var G__41878 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41879__i = 0, G__41879__a = new Array(arguments.length -  0);
while (G__41879__i < G__41879__a.length) {G__41879__a[G__41879__i] = arguments[G__41879__i + 0]; ++G__41879__i;}
  args = new cljs.core.IndexedSeq(G__41879__a,0,null);
} 
return G__41878__delegate.call(this,args);};
G__41878.cljs$lang$maxFixedArity = 0;
G__41878.cljs$lang$applyTo = (function (arglist__41883){
var args = cljs.core.seq(arglist__41883);
return G__41878__delegate(args);
});
G__41878.cljs$core$IFn$_invoke$arity$variadic = G__41878__delegate;
return G__41878;
})()
;
});

//# sourceMappingURL=re_view.render_loop.js.map
