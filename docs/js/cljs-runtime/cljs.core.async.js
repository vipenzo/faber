goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42355 = arguments.length;
switch (G__42355) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42359 = (function (f,blockable,meta42360){
this.f = f;
this.blockable = blockable;
this.meta42360 = meta42360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42361,meta42360__$1){
var self__ = this;
var _42361__$1 = this;
return (new cljs.core.async.t_cljs$core$async42359(self__.f,self__.blockable,meta42360__$1));
}));

(cljs.core.async.t_cljs$core$async42359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42361){
var self__ = this;
var _42361__$1 = this;
return self__.meta42360;
}));

(cljs.core.async.t_cljs$core$async42359.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42359.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42359.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42359.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42360","meta42360",2052518135,null)], null);
}));

(cljs.core.async.t_cljs$core$async42359.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42359");

(cljs.core.async.t_cljs$core$async42359.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42359");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42359.
 */
cljs.core.async.__GT_t_cljs$core$async42359 = (function cljs$core$async$__GT_t_cljs$core$async42359(f__$1,blockable__$1,meta42360){
return (new cljs.core.async.t_cljs$core$async42359(f__$1,blockable__$1,meta42360));
});

}

return (new cljs.core.async.t_cljs$core$async42359(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42378 = arguments.length;
switch (G__42378) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42383 = arguments.length;
switch (G__42383) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42398 = arguments.length;
switch (G__42398) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_44862 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44862) : fn1.call(null,val_44862));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44862) : fn1.call(null,val_44862));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42418 = arguments.length;
switch (G__42418) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___44865 = n;
var x_44866 = (0);
while(true){
if((x_44866 < n__4613__auto___44865)){
(a[x_44866] = x_44866);

var G__44867 = (x_44866 + (1));
x_44866 = G__44867;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42436 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42436 = (function (flag,meta42437){
this.flag = flag;
this.meta42437 = meta42437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42438,meta42437__$1){
var self__ = this;
var _42438__$1 = this;
return (new cljs.core.async.t_cljs$core$async42436(self__.flag,meta42437__$1));
}));

(cljs.core.async.t_cljs$core$async42436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42438){
var self__ = this;
var _42438__$1 = this;
return self__.meta42437;
}));

(cljs.core.async.t_cljs$core$async42436.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42436.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42436.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42436.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42437","meta42437",-811886532,null)], null);
}));

(cljs.core.async.t_cljs$core$async42436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42436");

(cljs.core.async.t_cljs$core$async42436.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42436.
 */
cljs.core.async.__GT_t_cljs$core$async42436 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42436(flag__$1,meta42437){
return (new cljs.core.async.t_cljs$core$async42436(flag__$1,meta42437));
});

}

return (new cljs.core.async.t_cljs$core$async42436(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42441 = (function (flag,cb,meta42442){
this.flag = flag;
this.cb = cb;
this.meta42442 = meta42442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42443,meta42442__$1){
var self__ = this;
var _42443__$1 = this;
return (new cljs.core.async.t_cljs$core$async42441(self__.flag,self__.cb,meta42442__$1));
}));

(cljs.core.async.t_cljs$core$async42441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42443){
var self__ = this;
var _42443__$1 = this;
return self__.meta42442;
}));

(cljs.core.async.t_cljs$core$async42441.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42441.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42441.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42441.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42442","meta42442",107686375,null)], null);
}));

(cljs.core.async.t_cljs$core$async42441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42441");

(cljs.core.async.t_cljs$core$async42441.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42441.
 */
cljs.core.async.__GT_t_cljs$core$async42441 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42441(flag__$1,cb__$1,meta42442){
return (new cljs.core.async.t_cljs$core$async42441(flag__$1,cb__$1,meta42442));
});

}

return (new cljs.core.async.t_cljs$core$async42441(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42463_SHARP_){
var G__42466 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42463_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42466) : fret.call(null,G__42466));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42464_SHARP_){
var G__42470 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42464_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42470) : fret.call(null,G__42470));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44884 = (i + (1));
i = G__44884;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44889 = arguments.length;
var i__4737__auto___44891 = (0);
while(true){
if((i__4737__auto___44891 < len__4736__auto___44889)){
args__4742__auto__.push((arguments[i__4737__auto___44891]));

var G__44893 = (i__4737__auto___44891 + (1));
i__4737__auto___44891 = G__44893;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42481){
var map__42482 = p__42481;
var map__42482__$1 = (((((!((map__42482 == null))))?(((((map__42482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42482):map__42482);
var opts = map__42482__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42477){
var G__42478 = cljs.core.first(seq42477);
var seq42477__$1 = cljs.core.next(seq42477);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42478,seq42477__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42509 = arguments.length;
switch (G__42509) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__42268__auto___44911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_42551){
var state_val_42556 = (state_42551[(1)]);
if((state_val_42556 === (7))){
var inst_42546 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
var statearr_42558_44912 = state_42551__$1;
(statearr_42558_44912[(2)] = inst_42546);

(statearr_42558_44912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (1))){
var state_42551__$1 = state_42551;
var statearr_42560_44914 = state_42551__$1;
(statearr_42560_44914[(2)] = null);

(statearr_42560_44914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (4))){
var inst_42517 = (state_42551[(7)]);
var inst_42517__$1 = (state_42551[(2)]);
var inst_42520 = (inst_42517__$1 == null);
var state_42551__$1 = (function (){var statearr_42561 = state_42551;
(statearr_42561[(7)] = inst_42517__$1);

return statearr_42561;
})();
if(cljs.core.truth_(inst_42520)){
var statearr_42562_44916 = state_42551__$1;
(statearr_42562_44916[(1)] = (5));

} else {
var statearr_42563_44917 = state_42551__$1;
(statearr_42563_44917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (13))){
var state_42551__$1 = state_42551;
var statearr_42566_44918 = state_42551__$1;
(statearr_42566_44918[(2)] = null);

(statearr_42566_44918[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (6))){
var inst_42517 = (state_42551[(7)]);
var state_42551__$1 = state_42551;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42551__$1,(11),to,inst_42517);
} else {
if((state_val_42556 === (3))){
var inst_42549 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42551__$1,inst_42549);
} else {
if((state_val_42556 === (12))){
var state_42551__$1 = state_42551;
var statearr_42568_44920 = state_42551__$1;
(statearr_42568_44920[(2)] = null);

(statearr_42568_44920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (2))){
var state_42551__$1 = state_42551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42551__$1,(4),from);
} else {
if((state_val_42556 === (11))){
var inst_42530 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
if(cljs.core.truth_(inst_42530)){
var statearr_42572_44922 = state_42551__$1;
(statearr_42572_44922[(1)] = (12));

} else {
var statearr_42573_44923 = state_42551__$1;
(statearr_42573_44923[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (9))){
var state_42551__$1 = state_42551;
var statearr_42574_44924 = state_42551__$1;
(statearr_42574_44924[(2)] = null);

(statearr_42574_44924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (5))){
var state_42551__$1 = state_42551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42577_44926 = state_42551__$1;
(statearr_42577_44926[(1)] = (8));

} else {
var statearr_42579_44927 = state_42551__$1;
(statearr_42579_44927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (14))){
var inst_42544 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
var statearr_42580_44928 = state_42551__$1;
(statearr_42580_44928[(2)] = inst_42544);

(statearr_42580_44928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (10))){
var inst_42527 = (state_42551[(2)]);
var state_42551__$1 = state_42551;
var statearr_42581_44929 = state_42551__$1;
(statearr_42581_44929[(2)] = inst_42527);

(statearr_42581_44929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42556 === (8))){
var inst_42524 = cljs.core.async.close_BANG_(to);
var state_42551__$1 = state_42551;
var statearr_42582_44931 = state_42551__$1;
(statearr_42582_44931[(2)] = inst_42524);

(statearr_42582_44931[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42149__auto__ = null;
var cljs$core$async$state_machine__42149__auto____0 = (function (){
var statearr_42583 = [null,null,null,null,null,null,null,null];
(statearr_42583[(0)] = cljs$core$async$state_machine__42149__auto__);

(statearr_42583[(1)] = (1));

return statearr_42583;
});
var cljs$core$async$state_machine__42149__auto____1 = (function (state_42551){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_42551);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e42593){var ex__42152__auto__ = e42593;
var statearr_42594_44933 = state_42551;
(statearr_42594_44933[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_42551[(4)]))){
var statearr_42595_44934 = state_42551;
(statearr_42595_44934[(1)] = cljs.core.first((state_42551[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44935 = state_42551;
state_42551 = G__44935;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$state_machine__42149__auto__ = function(state_42551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42149__auto____1.call(this,state_42551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42149__auto____0;
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42149__auto____1;
return cljs$core$async$state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_42600 = f__42269__auto__();
(statearr_42600[(6)] = c__42268__auto___44911);

return statearr_42600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__42607){
var vec__42608 = p__42607;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42608,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42608,(1),null);
var job = vec__42608;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42268__auto___44939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_42615){
var state_val_42616 = (state_42615[(1)]);
if((state_val_42616 === (1))){
var state_42615__$1 = state_42615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42615__$1,(2),res,v);
} else {
if((state_val_42616 === (2))){
var inst_42612 = (state_42615[(2)]);
var inst_42613 = cljs.core.async.close_BANG_(res);
var state_42615__$1 = (function (){var statearr_42622 = state_42615;
(statearr_42622[(7)] = inst_42612);

return statearr_42622;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42615__$1,inst_42613);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0 = (function (){
var statearr_42631 = [null,null,null,null,null,null,null,null];
(statearr_42631[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__);

(statearr_42631[(1)] = (1));

return statearr_42631;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1 = (function (state_42615){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_42615);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e42632){var ex__42152__auto__ = e42632;
var statearr_42633_44947 = state_42615;
(statearr_42633_44947[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_42615[(4)]))){
var statearr_42634_44948 = state_42615;
(statearr_42634_44948[(1)] = cljs.core.first((state_42615[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44951 = state_42615;
state_42615 = G__44951;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__ = function(state_42615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1.call(this,state_42615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_42635 = f__42269__auto__();
(statearr_42635[(6)] = c__42268__auto___44939);

return statearr_42635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42639){
var vec__42641 = p__42639;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42641,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42641,(1),null);
var job = vec__42641;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___44955 = n;
var __44957 = (0);
while(true){
if((__44957 < n__4613__auto___44955)){
var G__42644_44959 = type;
var G__42644_44960__$1 = (((G__42644_44959 instanceof cljs.core.Keyword))?G__42644_44959.fqn:null);
switch (G__42644_44960__$1) {
case "compute":
var c__42268__auto___44963 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44957,c__42268__auto___44963,G__42644_44959,G__42644_44960__$1,n__4613__auto___44955,jobs,results,process,async){
return (function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = ((function (__44957,c__42268__auto___44963,G__42644_44959,G__42644_44960__$1,n__4613__auto___44955,jobs,results,process,async){
return (function (state_42657){
var state_val_42658 = (state_42657[(1)]);
if((state_val_42658 === (1))){
var state_42657__$1 = state_42657;
var statearr_42663_44964 = state_42657__$1;
(statearr_42663_44964[(2)] = null);

(statearr_42663_44964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42658 === (2))){
var state_42657__$1 = state_42657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42657__$1,(4),jobs);
} else {
if((state_val_42658 === (3))){
var inst_42655 = (state_42657[(2)]);
var state_42657__$1 = state_42657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42657__$1,inst_42655);
} else {
if((state_val_42658 === (4))){
var inst_42647 = (state_42657[(2)]);
var inst_42648 = process(inst_42647);
var state_42657__$1 = state_42657;
if(cljs.core.truth_(inst_42648)){
var statearr_42665_44966 = state_42657__$1;
(statearr_42665_44966[(1)] = (5));

} else {
var statearr_42666_44967 = state_42657__$1;
(statearr_42666_44967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42658 === (5))){
var state_42657__$1 = state_42657;
var statearr_42667_44968 = state_42657__$1;
(statearr_42667_44968[(2)] = null);

(statearr_42667_44968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42658 === (6))){
var state_42657__$1 = state_42657;
var statearr_42668_44969 = state_42657__$1;
(statearr_42668_44969[(2)] = null);

(statearr_42668_44969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42658 === (7))){
var inst_42653 = (state_42657[(2)]);
var state_42657__$1 = state_42657;
var statearr_42669_44970 = state_42657__$1;
(statearr_42669_44970[(2)] = inst_42653);

(statearr_42669_44970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44957,c__42268__auto___44963,G__42644_44959,G__42644_44960__$1,n__4613__auto___44955,jobs,results,process,async))
;
return ((function (__44957,switch__42148__auto__,c__42268__auto___44963,G__42644_44959,G__42644_44960__$1,n__4613__auto___44955,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0 = (function (){
var statearr_42674 = [null,null,null,null,null,null,null];
(statearr_42674[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__);

(statearr_42674[(1)] = (1));

return statearr_42674;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1 = (function (state_42657){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_42657);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e42677){var ex__42152__auto__ = e42677;
var statearr_42678_44974 = state_42657;
(statearr_42678_44974[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_42657[(4)]))){
var statearr_42679_44975 = state_42657;
(statearr_42679_44975[(1)] = cljs.core.first((state_42657[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44976 = state_42657;
state_42657 = G__44976;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__ = function(state_42657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1.call(this,state_42657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__;
})()
;})(__44957,switch__42148__auto__,c__42268__auto___44963,G__42644_44959,G__42644_44960__$1,n__4613__auto___44955,jobs,results,process,async))
})();
var state__42270__auto__ = (function (){var statearr_42680 = f__42269__auto__();
(statearr_42680[(6)] = c__42268__auto___44963);

return statearr_42680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
});})(__44957,c__42268__auto___44963,G__42644_44959,G__42644_44960__$1,n__4613__auto___44955,jobs,results,process,async))
);


break;
case "async":
var c__42268__auto___44977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44957,c__42268__auto___44977,G__42644_44959,G__42644_44960__$1,n__4613__auto___44955,jobs,results,process,async){
return (function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = ((function (__44957,c__42268__auto___44977,G__42644_44959,G__42644_44960__$1,n__4613__auto___44955,jobs,results,process,async){
return (function (state_42693){
var state_val_42694 = (state_42693[(1)]);
if((state_val_42694 === (1))){
var state_42693__$1 = state_42693;
var statearr_42696_44980 = state_42693__$1;
(statearr_42696_44980[(2)] = null);

(statearr_42696_44980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (2))){
var state_42693__$1 = state_42693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42693__$1,(4),jobs);
} else {
if((state_val_42694 === (3))){
var inst_42691 = (state_42693[(2)]);
var state_42693__$1 = state_42693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42693__$1,inst_42691);
} else {
if((state_val_42694 === (4))){
var inst_42683 = (state_42693[(2)]);
var inst_42684 = async(inst_42683);
var state_42693__$1 = state_42693;
if(cljs.core.truth_(inst_42684)){
var statearr_42699_44987 = state_42693__$1;
(statearr_42699_44987[(1)] = (5));

} else {
var statearr_42704_44988 = state_42693__$1;
(statearr_42704_44988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (5))){
var state_42693__$1 = state_42693;
var statearr_42705_44989 = state_42693__$1;
(statearr_42705_44989[(2)] = null);

(statearr_42705_44989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (6))){
var state_42693__$1 = state_42693;
var statearr_42706_44990 = state_42693__$1;
(statearr_42706_44990[(2)] = null);

(statearr_42706_44990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42694 === (7))){
var inst_42689 = (state_42693[(2)]);
var state_42693__$1 = state_42693;
var statearr_42712_44994 = state_42693__$1;
(statearr_42712_44994[(2)] = inst_42689);

(statearr_42712_44994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44957,c__42268__auto___44977,G__42644_44959,G__42644_44960__$1,n__4613__auto___44955,jobs,results,process,async))
;
return ((function (__44957,switch__42148__auto__,c__42268__auto___44977,G__42644_44959,G__42644_44960__$1,n__4613__auto___44955,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0 = (function (){
var statearr_42715 = [null,null,null,null,null,null,null];
(statearr_42715[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__);

(statearr_42715[(1)] = (1));

return statearr_42715;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1 = (function (state_42693){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_42693);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e42716){var ex__42152__auto__ = e42716;
var statearr_42717_44999 = state_42693;
(statearr_42717_44999[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_42693[(4)]))){
var statearr_42718_45000 = state_42693;
(statearr_42718_45000[(1)] = cljs.core.first((state_42693[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45001 = state_42693;
state_42693 = G__45001;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__ = function(state_42693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1.call(this,state_42693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__;
})()
;})(__44957,switch__42148__auto__,c__42268__auto___44977,G__42644_44959,G__42644_44960__$1,n__4613__auto___44955,jobs,results,process,async))
})();
var state__42270__auto__ = (function (){var statearr_42723 = f__42269__auto__();
(statearr_42723[(6)] = c__42268__auto___44977);

return statearr_42723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
});})(__44957,c__42268__auto___44977,G__42644_44959,G__42644_44960__$1,n__4613__auto___44955,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42644_44960__$1)].join('')));

}

var G__45002 = (__44957 + (1));
__44957 = G__45002;
continue;
} else {
}
break;
}

var c__42268__auto___45003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_42749){
var state_val_42750 = (state_42749[(1)]);
if((state_val_42750 === (7))){
var inst_42745 = (state_42749[(2)]);
var state_42749__$1 = state_42749;
var statearr_42760_45004 = state_42749__$1;
(statearr_42760_45004[(2)] = inst_42745);

(statearr_42760_45004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42750 === (1))){
var state_42749__$1 = state_42749;
var statearr_42762_45006 = state_42749__$1;
(statearr_42762_45006[(2)] = null);

(statearr_42762_45006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42750 === (4))){
var inst_42726 = (state_42749[(7)]);
var inst_42726__$1 = (state_42749[(2)]);
var inst_42727 = (inst_42726__$1 == null);
var state_42749__$1 = (function (){var statearr_42764 = state_42749;
(statearr_42764[(7)] = inst_42726__$1);

return statearr_42764;
})();
if(cljs.core.truth_(inst_42727)){
var statearr_42765_45011 = state_42749__$1;
(statearr_42765_45011[(1)] = (5));

} else {
var statearr_42766_45013 = state_42749__$1;
(statearr_42766_45013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42750 === (6))){
var inst_42735 = (state_42749[(8)]);
var inst_42726 = (state_42749[(7)]);
var inst_42735__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42736 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42737 = [inst_42726,inst_42735__$1];
var inst_42738 = (new cljs.core.PersistentVector(null,2,(5),inst_42736,inst_42737,null));
var state_42749__$1 = (function (){var statearr_42769 = state_42749;
(statearr_42769[(8)] = inst_42735__$1);

return statearr_42769;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42749__$1,(8),jobs,inst_42738);
} else {
if((state_val_42750 === (3))){
var inst_42747 = (state_42749[(2)]);
var state_42749__$1 = state_42749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42749__$1,inst_42747);
} else {
if((state_val_42750 === (2))){
var state_42749__$1 = state_42749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42749__$1,(4),from);
} else {
if((state_val_42750 === (9))){
var inst_42742 = (state_42749[(2)]);
var state_42749__$1 = (function (){var statearr_42772 = state_42749;
(statearr_42772[(9)] = inst_42742);

return statearr_42772;
})();
var statearr_42773_45015 = state_42749__$1;
(statearr_42773_45015[(2)] = null);

(statearr_42773_45015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42750 === (5))){
var inst_42729 = cljs.core.async.close_BANG_(jobs);
var state_42749__$1 = state_42749;
var statearr_42774_45016 = state_42749__$1;
(statearr_42774_45016[(2)] = inst_42729);

(statearr_42774_45016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42750 === (8))){
var inst_42735 = (state_42749[(8)]);
var inst_42740 = (state_42749[(2)]);
var state_42749__$1 = (function (){var statearr_42775 = state_42749;
(statearr_42775[(10)] = inst_42740);

return statearr_42775;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42749__$1,(9),results,inst_42735);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0 = (function (){
var statearr_42778 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__);

(statearr_42778[(1)] = (1));

return statearr_42778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1 = (function (state_42749){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_42749);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e42779){var ex__42152__auto__ = e42779;
var statearr_42780_45021 = state_42749;
(statearr_42780_45021[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_42749[(4)]))){
var statearr_42783_45022 = state_42749;
(statearr_42783_45022[(1)] = cljs.core.first((state_42749[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45027 = state_42749;
state_42749 = G__45027;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__ = function(state_42749){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1.call(this,state_42749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_42789 = f__42269__auto__();
(statearr_42789[(6)] = c__42268__auto___45003);

return statearr_42789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


var c__42268__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_42836){
var state_val_42837 = (state_42836[(1)]);
if((state_val_42837 === (7))){
var inst_42831 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42843_45029 = state_42836__$1;
(statearr_42843_45029[(2)] = inst_42831);

(statearr_42843_45029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (20))){
var state_42836__$1 = state_42836;
var statearr_42844_45033 = state_42836__$1;
(statearr_42844_45033[(2)] = null);

(statearr_42844_45033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (1))){
var state_42836__$1 = state_42836;
var statearr_42846_45034 = state_42836__$1;
(statearr_42846_45034[(2)] = null);

(statearr_42846_45034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (4))){
var inst_42793 = (state_42836[(7)]);
var inst_42793__$1 = (state_42836[(2)]);
var inst_42794 = (inst_42793__$1 == null);
var state_42836__$1 = (function (){var statearr_42847 = state_42836;
(statearr_42847[(7)] = inst_42793__$1);

return statearr_42847;
})();
if(cljs.core.truth_(inst_42794)){
var statearr_42848_45038 = state_42836__$1;
(statearr_42848_45038[(1)] = (5));

} else {
var statearr_42849_45039 = state_42836__$1;
(statearr_42849_45039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (15))){
var inst_42811 = (state_42836[(8)]);
var state_42836__$1 = state_42836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42836__$1,(18),to,inst_42811);
} else {
if((state_val_42837 === (21))){
var inst_42826 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42851_45043 = state_42836__$1;
(statearr_42851_45043[(2)] = inst_42826);

(statearr_42851_45043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (13))){
var inst_42828 = (state_42836[(2)]);
var state_42836__$1 = (function (){var statearr_42852 = state_42836;
(statearr_42852[(9)] = inst_42828);

return statearr_42852;
})();
var statearr_42853_45045 = state_42836__$1;
(statearr_42853_45045[(2)] = null);

(statearr_42853_45045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (6))){
var inst_42793 = (state_42836[(7)]);
var state_42836__$1 = state_42836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42836__$1,(11),inst_42793);
} else {
if((state_val_42837 === (17))){
var inst_42821 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
if(cljs.core.truth_(inst_42821)){
var statearr_42857_45047 = state_42836__$1;
(statearr_42857_45047[(1)] = (19));

} else {
var statearr_42858_45052 = state_42836__$1;
(statearr_42858_45052[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (3))){
var inst_42833 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42836__$1,inst_42833);
} else {
if((state_val_42837 === (12))){
var inst_42805 = (state_42836[(10)]);
var state_42836__$1 = state_42836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42836__$1,(14),inst_42805);
} else {
if((state_val_42837 === (2))){
var state_42836__$1 = state_42836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42836__$1,(4),results);
} else {
if((state_val_42837 === (19))){
var state_42836__$1 = state_42836;
var statearr_42859_45056 = state_42836__$1;
(statearr_42859_45056[(2)] = null);

(statearr_42859_45056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (11))){
var inst_42805 = (state_42836[(2)]);
var state_42836__$1 = (function (){var statearr_42860 = state_42836;
(statearr_42860[(10)] = inst_42805);

return statearr_42860;
})();
var statearr_42861_45057 = state_42836__$1;
(statearr_42861_45057[(2)] = null);

(statearr_42861_45057[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (9))){
var state_42836__$1 = state_42836;
var statearr_42862_45061 = state_42836__$1;
(statearr_42862_45061[(2)] = null);

(statearr_42862_45061[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (5))){
var state_42836__$1 = state_42836;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42863_45062 = state_42836__$1;
(statearr_42863_45062[(1)] = (8));

} else {
var statearr_42864_45063 = state_42836__$1;
(statearr_42864_45063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (14))){
var inst_42811 = (state_42836[(8)]);
var inst_42811__$1 = (state_42836[(2)]);
var inst_42814 = (inst_42811__$1 == null);
var inst_42815 = cljs.core.not(inst_42814);
var state_42836__$1 = (function (){var statearr_42865 = state_42836;
(statearr_42865[(8)] = inst_42811__$1);

return statearr_42865;
})();
if(inst_42815){
var statearr_42866_45068 = state_42836__$1;
(statearr_42866_45068[(1)] = (15));

} else {
var statearr_42867_45069 = state_42836__$1;
(statearr_42867_45069[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (16))){
var state_42836__$1 = state_42836;
var statearr_42868_45070 = state_42836__$1;
(statearr_42868_45070[(2)] = false);

(statearr_42868_45070[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (10))){
var inst_42801 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42870_45071 = state_42836__$1;
(statearr_42870_45071[(2)] = inst_42801);

(statearr_42870_45071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (18))){
var inst_42818 = (state_42836[(2)]);
var state_42836__$1 = state_42836;
var statearr_42871_45075 = state_42836__$1;
(statearr_42871_45075[(2)] = inst_42818);

(statearr_42871_45075[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42837 === (8))){
var inst_42798 = cljs.core.async.close_BANG_(to);
var state_42836__$1 = state_42836;
var statearr_42873_45076 = state_42836__$1;
(statearr_42873_45076[(2)] = inst_42798);

(statearr_42873_45076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0 = (function (){
var statearr_42875 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__);

(statearr_42875[(1)] = (1));

return statearr_42875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1 = (function (state_42836){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_42836);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e42876){var ex__42152__auto__ = e42876;
var statearr_42877_45078 = state_42836;
(statearr_42877_45078[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_42836[(4)]))){
var statearr_42878_45080 = state_42836;
(statearr_42878_45080[(1)] = cljs.core.first((state_42836[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45081 = state_42836;
state_42836 = G__45081;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__ = function(state_42836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1.call(this,state_42836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_42880 = f__42269__auto__();
(statearr_42880[(6)] = c__42268__auto__);

return statearr_42880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));

return c__42268__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42883 = arguments.length;
switch (G__42883) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42890 = arguments.length;
switch (G__42890) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42905 = arguments.length;
switch (G__42905) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__42268__auto___45087 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_42941){
var state_val_42942 = (state_42941[(1)]);
if((state_val_42942 === (7))){
var inst_42937 = (state_42941[(2)]);
var state_42941__$1 = state_42941;
var statearr_42946_45088 = state_42941__$1;
(statearr_42946_45088[(2)] = inst_42937);

(statearr_42946_45088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42942 === (1))){
var state_42941__$1 = state_42941;
var statearr_42947_45090 = state_42941__$1;
(statearr_42947_45090[(2)] = null);

(statearr_42947_45090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42942 === (4))){
var inst_42915 = (state_42941[(7)]);
var inst_42915__$1 = (state_42941[(2)]);
var inst_42916 = (inst_42915__$1 == null);
var state_42941__$1 = (function (){var statearr_42952 = state_42941;
(statearr_42952[(7)] = inst_42915__$1);

return statearr_42952;
})();
if(cljs.core.truth_(inst_42916)){
var statearr_42953_45091 = state_42941__$1;
(statearr_42953_45091[(1)] = (5));

} else {
var statearr_42954_45093 = state_42941__$1;
(statearr_42954_45093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42942 === (13))){
var state_42941__$1 = state_42941;
var statearr_42955_45094 = state_42941__$1;
(statearr_42955_45094[(2)] = null);

(statearr_42955_45094[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42942 === (6))){
var inst_42915 = (state_42941[(7)]);
var inst_42924 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42915) : p.call(null,inst_42915));
var state_42941__$1 = state_42941;
if(cljs.core.truth_(inst_42924)){
var statearr_42956_45095 = state_42941__$1;
(statearr_42956_45095[(1)] = (9));

} else {
var statearr_42957_45096 = state_42941__$1;
(statearr_42957_45096[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42942 === (3))){
var inst_42939 = (state_42941[(2)]);
var state_42941__$1 = state_42941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42941__$1,inst_42939);
} else {
if((state_val_42942 === (12))){
var state_42941__$1 = state_42941;
var statearr_42958_45097 = state_42941__$1;
(statearr_42958_45097[(2)] = null);

(statearr_42958_45097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42942 === (2))){
var state_42941__$1 = state_42941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42941__$1,(4),ch);
} else {
if((state_val_42942 === (11))){
var inst_42915 = (state_42941[(7)]);
var inst_42928 = (state_42941[(2)]);
var state_42941__$1 = state_42941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42941__$1,(8),inst_42928,inst_42915);
} else {
if((state_val_42942 === (9))){
var state_42941__$1 = state_42941;
var statearr_42959_45107 = state_42941__$1;
(statearr_42959_45107[(2)] = tc);

(statearr_42959_45107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42942 === (5))){
var inst_42918 = cljs.core.async.close_BANG_(tc);
var inst_42919 = cljs.core.async.close_BANG_(fc);
var state_42941__$1 = (function (){var statearr_42960 = state_42941;
(statearr_42960[(8)] = inst_42918);

return statearr_42960;
})();
var statearr_42961_45113 = state_42941__$1;
(statearr_42961_45113[(2)] = inst_42919);

(statearr_42961_45113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42942 === (14))){
var inst_42935 = (state_42941[(2)]);
var state_42941__$1 = state_42941;
var statearr_42962_45115 = state_42941__$1;
(statearr_42962_45115[(2)] = inst_42935);

(statearr_42962_45115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42942 === (10))){
var state_42941__$1 = state_42941;
var statearr_42963_45116 = state_42941__$1;
(statearr_42963_45116[(2)] = fc);

(statearr_42963_45116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42942 === (8))){
var inst_42930 = (state_42941[(2)]);
var state_42941__$1 = state_42941;
if(cljs.core.truth_(inst_42930)){
var statearr_42964_45121 = state_42941__$1;
(statearr_42964_45121[(1)] = (12));

} else {
var statearr_42965_45125 = state_42941__$1;
(statearr_42965_45125[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42149__auto__ = null;
var cljs$core$async$state_machine__42149__auto____0 = (function (){
var statearr_42966 = [null,null,null,null,null,null,null,null,null];
(statearr_42966[(0)] = cljs$core$async$state_machine__42149__auto__);

(statearr_42966[(1)] = (1));

return statearr_42966;
});
var cljs$core$async$state_machine__42149__auto____1 = (function (state_42941){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_42941);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e42968){var ex__42152__auto__ = e42968;
var statearr_42969_45129 = state_42941;
(statearr_42969_45129[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_42941[(4)]))){
var statearr_42970_45130 = state_42941;
(statearr_42970_45130[(1)] = cljs.core.first((state_42941[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45133 = state_42941;
state_42941 = G__45133;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$state_machine__42149__auto__ = function(state_42941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42149__auto____1.call(this,state_42941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42149__auto____0;
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42149__auto____1;
return cljs$core$async$state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_42971 = f__42269__auto__();
(statearr_42971[(6)] = c__42268__auto___45087);

return statearr_42971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__42268__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_42998){
var state_val_42999 = (state_42998[(1)]);
if((state_val_42999 === (7))){
var inst_42994 = (state_42998[(2)]);
var state_42998__$1 = state_42998;
var statearr_43001_45137 = state_42998__$1;
(statearr_43001_45137[(2)] = inst_42994);

(statearr_43001_45137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42999 === (1))){
var inst_42972 = init;
var inst_42973 = inst_42972;
var state_42998__$1 = (function (){var statearr_43002 = state_42998;
(statearr_43002[(7)] = inst_42973);

return statearr_43002;
})();
var statearr_43003_45138 = state_42998__$1;
(statearr_43003_45138[(2)] = null);

(statearr_43003_45138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42999 === (4))){
var inst_42981 = (state_42998[(8)]);
var inst_42981__$1 = (state_42998[(2)]);
var inst_42982 = (inst_42981__$1 == null);
var state_42998__$1 = (function (){var statearr_43004 = state_42998;
(statearr_43004[(8)] = inst_42981__$1);

return statearr_43004;
})();
if(cljs.core.truth_(inst_42982)){
var statearr_43005_45149 = state_42998__$1;
(statearr_43005_45149[(1)] = (5));

} else {
var statearr_43006_45150 = state_42998__$1;
(statearr_43006_45150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42999 === (6))){
var inst_42985 = (state_42998[(9)]);
var inst_42973 = (state_42998[(7)]);
var inst_42981 = (state_42998[(8)]);
var inst_42985__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42973,inst_42981) : f.call(null,inst_42973,inst_42981));
var inst_42986 = cljs.core.reduced_QMARK_(inst_42985__$1);
var state_42998__$1 = (function (){var statearr_43007 = state_42998;
(statearr_43007[(9)] = inst_42985__$1);

return statearr_43007;
})();
if(inst_42986){
var statearr_43008_45157 = state_42998__$1;
(statearr_43008_45157[(1)] = (8));

} else {
var statearr_43009_45158 = state_42998__$1;
(statearr_43009_45158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42999 === (3))){
var inst_42996 = (state_42998[(2)]);
var state_42998__$1 = state_42998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42998__$1,inst_42996);
} else {
if((state_val_42999 === (2))){
var state_42998__$1 = state_42998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42998__$1,(4),ch);
} else {
if((state_val_42999 === (9))){
var inst_42985 = (state_42998[(9)]);
var inst_42973 = inst_42985;
var state_42998__$1 = (function (){var statearr_43010 = state_42998;
(statearr_43010[(7)] = inst_42973);

return statearr_43010;
})();
var statearr_43011_45164 = state_42998__$1;
(statearr_43011_45164[(2)] = null);

(statearr_43011_45164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42999 === (5))){
var inst_42973 = (state_42998[(7)]);
var state_42998__$1 = state_42998;
var statearr_43012_45169 = state_42998__$1;
(statearr_43012_45169[(2)] = inst_42973);

(statearr_43012_45169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42999 === (10))){
var inst_42992 = (state_42998[(2)]);
var state_42998__$1 = state_42998;
var statearr_43013_45176 = state_42998__$1;
(statearr_43013_45176[(2)] = inst_42992);

(statearr_43013_45176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42999 === (8))){
var inst_42985 = (state_42998[(9)]);
var inst_42988 = cljs.core.deref(inst_42985);
var state_42998__$1 = state_42998;
var statearr_43016_45179 = state_42998__$1;
(statearr_43016_45179[(2)] = inst_42988);

(statearr_43016_45179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__42149__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42149__auto____0 = (function (){
var statearr_43017 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43017[(0)] = cljs$core$async$reduce_$_state_machine__42149__auto__);

(statearr_43017[(1)] = (1));

return statearr_43017;
});
var cljs$core$async$reduce_$_state_machine__42149__auto____1 = (function (state_42998){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_42998);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e43018){var ex__42152__auto__ = e43018;
var statearr_43019_45189 = state_42998;
(statearr_43019_45189[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_42998[(4)]))){
var statearr_43020_45190 = state_42998;
(statearr_43020_45190[(1)] = cljs.core.first((state_42998[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45191 = state_42998;
state_42998 = G__45191;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42149__auto__ = function(state_42998){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42149__auto____1.call(this,state_42998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42149__auto____0;
cljs$core$async$reduce_$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42149__auto____1;
return cljs$core$async$reduce_$_state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_43021 = f__42269__auto__();
(statearr_43021[(6)] = c__42268__auto__);

return statearr_43021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));

return c__42268__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42268__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_43027){
var state_val_43028 = (state_43027[(1)]);
if((state_val_43028 === (1))){
var inst_43022 = cljs.core.async.reduce(f__$1,init,ch);
var state_43027__$1 = state_43027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43027__$1,(2),inst_43022);
} else {
if((state_val_43028 === (2))){
var inst_43024 = (state_43027[(2)]);
var inst_43025 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43024) : f__$1.call(null,inst_43024));
var state_43027__$1 = state_43027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43027__$1,inst_43025);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42149__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42149__auto____0 = (function (){
var statearr_43029 = [null,null,null,null,null,null,null];
(statearr_43029[(0)] = cljs$core$async$transduce_$_state_machine__42149__auto__);

(statearr_43029[(1)] = (1));

return statearr_43029;
});
var cljs$core$async$transduce_$_state_machine__42149__auto____1 = (function (state_43027){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_43027);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e43030){var ex__42152__auto__ = e43030;
var statearr_43031_45196 = state_43027;
(statearr_43031_45196[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_43027[(4)]))){
var statearr_43032_45197 = state_43027;
(statearr_43032_45197[(1)] = cljs.core.first((state_43027[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45204 = state_43027;
state_43027 = G__45204;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42149__auto__ = function(state_43027){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42149__auto____1.call(this,state_43027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42149__auto____0;
cljs$core$async$transduce_$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42149__auto____1;
return cljs$core$async$transduce_$_state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_43035 = f__42269__auto__();
(statearr_43035[(6)] = c__42268__auto__);

return statearr_43035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));

return c__42268__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__43043 = arguments.length;
switch (G__43043) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__42268__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_43077){
var state_val_43078 = (state_43077[(1)]);
if((state_val_43078 === (7))){
var inst_43059 = (state_43077[(2)]);
var state_43077__$1 = state_43077;
var statearr_43080_45207 = state_43077__$1;
(statearr_43080_45207[(2)] = inst_43059);

(statearr_43080_45207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43078 === (1))){
var inst_43051 = cljs.core.seq(coll);
var inst_43052 = inst_43051;
var state_43077__$1 = (function (){var statearr_43084 = state_43077;
(statearr_43084[(7)] = inst_43052);

return statearr_43084;
})();
var statearr_43085_45210 = state_43077__$1;
(statearr_43085_45210[(2)] = null);

(statearr_43085_45210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43078 === (4))){
var inst_43052 = (state_43077[(7)]);
var inst_43057 = cljs.core.first(inst_43052);
var state_43077__$1 = state_43077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43077__$1,(7),ch,inst_43057);
} else {
if((state_val_43078 === (13))){
var inst_43071 = (state_43077[(2)]);
var state_43077__$1 = state_43077;
var statearr_43088_45221 = state_43077__$1;
(statearr_43088_45221[(2)] = inst_43071);

(statearr_43088_45221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43078 === (6))){
var inst_43062 = (state_43077[(2)]);
var state_43077__$1 = state_43077;
if(cljs.core.truth_(inst_43062)){
var statearr_43090_45224 = state_43077__$1;
(statearr_43090_45224[(1)] = (8));

} else {
var statearr_43091_45226 = state_43077__$1;
(statearr_43091_45226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43078 === (3))){
var inst_43075 = (state_43077[(2)]);
var state_43077__$1 = state_43077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43077__$1,inst_43075);
} else {
if((state_val_43078 === (12))){
var state_43077__$1 = state_43077;
var statearr_43092_45228 = state_43077__$1;
(statearr_43092_45228[(2)] = null);

(statearr_43092_45228[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43078 === (2))){
var inst_43052 = (state_43077[(7)]);
var state_43077__$1 = state_43077;
if(cljs.core.truth_(inst_43052)){
var statearr_43094_45231 = state_43077__$1;
(statearr_43094_45231[(1)] = (4));

} else {
var statearr_43095_45232 = state_43077__$1;
(statearr_43095_45232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43078 === (11))){
var inst_43068 = cljs.core.async.close_BANG_(ch);
var state_43077__$1 = state_43077;
var statearr_43096_45237 = state_43077__$1;
(statearr_43096_45237[(2)] = inst_43068);

(statearr_43096_45237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43078 === (9))){
var state_43077__$1 = state_43077;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43098_45242 = state_43077__$1;
(statearr_43098_45242[(1)] = (11));

} else {
var statearr_43100_45243 = state_43077__$1;
(statearr_43100_45243[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43078 === (5))){
var inst_43052 = (state_43077[(7)]);
var state_43077__$1 = state_43077;
var statearr_43107_45245 = state_43077__$1;
(statearr_43107_45245[(2)] = inst_43052);

(statearr_43107_45245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43078 === (10))){
var inst_43073 = (state_43077[(2)]);
var state_43077__$1 = state_43077;
var statearr_43108_45250 = state_43077__$1;
(statearr_43108_45250[(2)] = inst_43073);

(statearr_43108_45250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43078 === (8))){
var inst_43052 = (state_43077[(7)]);
var inst_43064 = cljs.core.next(inst_43052);
var inst_43052__$1 = inst_43064;
var state_43077__$1 = (function (){var statearr_43112 = state_43077;
(statearr_43112[(7)] = inst_43052__$1);

return statearr_43112;
})();
var statearr_43113_45251 = state_43077__$1;
(statearr_43113_45251[(2)] = null);

(statearr_43113_45251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42149__auto__ = null;
var cljs$core$async$state_machine__42149__auto____0 = (function (){
var statearr_43118 = [null,null,null,null,null,null,null,null];
(statearr_43118[(0)] = cljs$core$async$state_machine__42149__auto__);

(statearr_43118[(1)] = (1));

return statearr_43118;
});
var cljs$core$async$state_machine__42149__auto____1 = (function (state_43077){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_43077);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e43120){var ex__42152__auto__ = e43120;
var statearr_43121_45261 = state_43077;
(statearr_43121_45261[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_43077[(4)]))){
var statearr_43122_45262 = state_43077;
(statearr_43122_45262[(1)] = cljs.core.first((state_43077[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45264 = state_43077;
state_43077 = G__45264;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$state_machine__42149__auto__ = function(state_43077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42149__auto____1.call(this,state_43077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42149__auto____0;
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42149__auto____1;
return cljs$core$async$state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_43124 = f__42269__auto__();
(statearr_43124[(6)] = c__42268__auto__);

return statearr_43124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));

return c__42268__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__43135 = arguments.length;
switch (G__43135) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_45276 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_45276(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45285 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_45285(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45291 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_45291(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45293 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_45293(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43161 = (function (ch,cs,meta43162){
this.ch = ch;
this.cs = cs;
this.meta43162 = meta43162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43163,meta43162__$1){
var self__ = this;
var _43163__$1 = this;
return (new cljs.core.async.t_cljs$core$async43161(self__.ch,self__.cs,meta43162__$1));
}));

(cljs.core.async.t_cljs$core$async43161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43163){
var self__ = this;
var _43163__$1 = this;
return self__.meta43162;
}));

(cljs.core.async.t_cljs$core$async43161.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43161.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43161.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43161.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43161.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43161.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43162","meta43162",1004233653,null)], null);
}));

(cljs.core.async.t_cljs$core$async43161.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43161");

(cljs.core.async.t_cljs$core$async43161.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43161");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43161.
 */
cljs.core.async.__GT_t_cljs$core$async43161 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43161(ch__$1,cs__$1,meta43162){
return (new cljs.core.async.t_cljs$core$async43161(ch__$1,cs__$1,meta43162));
});

}

return (new cljs.core.async.t_cljs$core$async43161(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__42268__auto___45324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_43337){
var state_val_43338 = (state_43337[(1)]);
if((state_val_43338 === (7))){
var inst_43329 = (state_43337[(2)]);
var state_43337__$1 = state_43337;
var statearr_43341_45328 = state_43337__$1;
(statearr_43341_45328[(2)] = inst_43329);

(statearr_43341_45328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (20))){
var inst_43212 = (state_43337[(7)]);
var inst_43226 = cljs.core.first(inst_43212);
var inst_43227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43226,(0),null);
var inst_43232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43226,(1),null);
var state_43337__$1 = (function (){var statearr_43342 = state_43337;
(statearr_43342[(8)] = inst_43227);

return statearr_43342;
})();
if(cljs.core.truth_(inst_43232)){
var statearr_43343_45333 = state_43337__$1;
(statearr_43343_45333[(1)] = (22));

} else {
var statearr_43344_45334 = state_43337__$1;
(statearr_43344_45334[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (27))){
var inst_43275 = (state_43337[(9)]);
var inst_43180 = (state_43337[(10)]);
var inst_43273 = (state_43337[(11)]);
var inst_43280 = (state_43337[(12)]);
var inst_43280__$1 = cljs.core._nth(inst_43273,inst_43275);
var inst_43282 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43280__$1,inst_43180,done);
var state_43337__$1 = (function (){var statearr_43350 = state_43337;
(statearr_43350[(12)] = inst_43280__$1);

return statearr_43350;
})();
if(cljs.core.truth_(inst_43282)){
var statearr_43351_45341 = state_43337__$1;
(statearr_43351_45341[(1)] = (30));

} else {
var statearr_43352_45344 = state_43337__$1;
(statearr_43352_45344[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (1))){
var state_43337__$1 = state_43337;
var statearr_43353_45346 = state_43337__$1;
(statearr_43353_45346[(2)] = null);

(statearr_43353_45346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (24))){
var inst_43212 = (state_43337[(7)]);
var inst_43243 = (state_43337[(2)]);
var inst_43244 = cljs.core.next(inst_43212);
var inst_43189 = inst_43244;
var inst_43190 = null;
var inst_43191 = (0);
var inst_43192 = (0);
var state_43337__$1 = (function (){var statearr_43361 = state_43337;
(statearr_43361[(13)] = inst_43189);

(statearr_43361[(14)] = inst_43243);

(statearr_43361[(15)] = inst_43192);

(statearr_43361[(16)] = inst_43190);

(statearr_43361[(17)] = inst_43191);

return statearr_43361;
})();
var statearr_43365_45355 = state_43337__$1;
(statearr_43365_45355[(2)] = null);

(statearr_43365_45355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (39))){
var state_43337__$1 = state_43337;
var statearr_43369_45357 = state_43337__$1;
(statearr_43369_45357[(2)] = null);

(statearr_43369_45357[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (4))){
var inst_43180 = (state_43337[(10)]);
var inst_43180__$1 = (state_43337[(2)]);
var inst_43181 = (inst_43180__$1 == null);
var state_43337__$1 = (function (){var statearr_43370 = state_43337;
(statearr_43370[(10)] = inst_43180__$1);

return statearr_43370;
})();
if(cljs.core.truth_(inst_43181)){
var statearr_43371_45360 = state_43337__$1;
(statearr_43371_45360[(1)] = (5));

} else {
var statearr_43372_45362 = state_43337__$1;
(statearr_43372_45362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (15))){
var inst_43189 = (state_43337[(13)]);
var inst_43192 = (state_43337[(15)]);
var inst_43190 = (state_43337[(16)]);
var inst_43191 = (state_43337[(17)]);
var inst_43207 = (state_43337[(2)]);
var inst_43208 = (inst_43192 + (1));
var tmp43366 = inst_43189;
var tmp43367 = inst_43190;
var tmp43368 = inst_43191;
var inst_43189__$1 = tmp43366;
var inst_43190__$1 = tmp43367;
var inst_43191__$1 = tmp43368;
var inst_43192__$1 = inst_43208;
var state_43337__$1 = (function (){var statearr_43376 = state_43337;
(statearr_43376[(13)] = inst_43189__$1);

(statearr_43376[(18)] = inst_43207);

(statearr_43376[(15)] = inst_43192__$1);

(statearr_43376[(16)] = inst_43190__$1);

(statearr_43376[(17)] = inst_43191__$1);

return statearr_43376;
})();
var statearr_43381_45370 = state_43337__$1;
(statearr_43381_45370[(2)] = null);

(statearr_43381_45370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (21))){
var inst_43247 = (state_43337[(2)]);
var state_43337__$1 = state_43337;
var statearr_43385_45374 = state_43337__$1;
(statearr_43385_45374[(2)] = inst_43247);

(statearr_43385_45374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (31))){
var inst_43280 = (state_43337[(12)]);
var inst_43286 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43280);
var state_43337__$1 = state_43337;
var statearr_43389_45377 = state_43337__$1;
(statearr_43389_45377[(2)] = inst_43286);

(statearr_43389_45377[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (32))){
var inst_43274 = (state_43337[(19)]);
var inst_43272 = (state_43337[(20)]);
var inst_43275 = (state_43337[(9)]);
var inst_43273 = (state_43337[(11)]);
var inst_43288 = (state_43337[(2)]);
var inst_43290 = (inst_43275 + (1));
var tmp43382 = inst_43274;
var tmp43383 = inst_43272;
var tmp43384 = inst_43273;
var inst_43272__$1 = tmp43383;
var inst_43273__$1 = tmp43384;
var inst_43274__$1 = tmp43382;
var inst_43275__$1 = inst_43290;
var state_43337__$1 = (function (){var statearr_43390 = state_43337;
(statearr_43390[(19)] = inst_43274__$1);

(statearr_43390[(21)] = inst_43288);

(statearr_43390[(20)] = inst_43272__$1);

(statearr_43390[(9)] = inst_43275__$1);

(statearr_43390[(11)] = inst_43273__$1);

return statearr_43390;
})();
var statearr_43391_45383 = state_43337__$1;
(statearr_43391_45383[(2)] = null);

(statearr_43391_45383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (40))){
var inst_43302 = (state_43337[(22)]);
var inst_43306 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43302);
var state_43337__$1 = state_43337;
var statearr_43392_45384 = state_43337__$1;
(statearr_43392_45384[(2)] = inst_43306);

(statearr_43392_45384[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (33))){
var inst_43293 = (state_43337[(23)]);
var inst_43295 = cljs.core.chunked_seq_QMARK_(inst_43293);
var state_43337__$1 = state_43337;
if(inst_43295){
var statearr_43393_45391 = state_43337__$1;
(statearr_43393_45391[(1)] = (36));

} else {
var statearr_43394_45392 = state_43337__$1;
(statearr_43394_45392[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (13))){
var inst_43201 = (state_43337[(24)]);
var inst_43204 = cljs.core.async.close_BANG_(inst_43201);
var state_43337__$1 = state_43337;
var statearr_43395_45395 = state_43337__$1;
(statearr_43395_45395[(2)] = inst_43204);

(statearr_43395_45395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (22))){
var inst_43227 = (state_43337[(8)]);
var inst_43237 = cljs.core.async.close_BANG_(inst_43227);
var state_43337__$1 = state_43337;
var statearr_43397_45400 = state_43337__$1;
(statearr_43397_45400[(2)] = inst_43237);

(statearr_43397_45400[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (36))){
var inst_43293 = (state_43337[(23)]);
var inst_43297 = cljs.core.chunk_first(inst_43293);
var inst_43298 = cljs.core.chunk_rest(inst_43293);
var inst_43299 = cljs.core.count(inst_43297);
var inst_43272 = inst_43298;
var inst_43273 = inst_43297;
var inst_43274 = inst_43299;
var inst_43275 = (0);
var state_43337__$1 = (function (){var statearr_43399 = state_43337;
(statearr_43399[(19)] = inst_43274);

(statearr_43399[(20)] = inst_43272);

(statearr_43399[(9)] = inst_43275);

(statearr_43399[(11)] = inst_43273);

return statearr_43399;
})();
var statearr_43400_45401 = state_43337__$1;
(statearr_43400_45401[(2)] = null);

(statearr_43400_45401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (41))){
var inst_43293 = (state_43337[(23)]);
var inst_43308 = (state_43337[(2)]);
var inst_43309 = cljs.core.next(inst_43293);
var inst_43272 = inst_43309;
var inst_43273 = null;
var inst_43274 = (0);
var inst_43275 = (0);
var state_43337__$1 = (function (){var statearr_43402 = state_43337;
(statearr_43402[(19)] = inst_43274);

(statearr_43402[(20)] = inst_43272);

(statearr_43402[(9)] = inst_43275);

(statearr_43402[(25)] = inst_43308);

(statearr_43402[(11)] = inst_43273);

return statearr_43402;
})();
var statearr_43405_45407 = state_43337__$1;
(statearr_43405_45407[(2)] = null);

(statearr_43405_45407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (43))){
var state_43337__$1 = state_43337;
var statearr_43406_45414 = state_43337__$1;
(statearr_43406_45414[(2)] = null);

(statearr_43406_45414[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (29))){
var inst_43317 = (state_43337[(2)]);
var state_43337__$1 = state_43337;
var statearr_43407_45418 = state_43337__$1;
(statearr_43407_45418[(2)] = inst_43317);

(statearr_43407_45418[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (44))){
var inst_43326 = (state_43337[(2)]);
var state_43337__$1 = (function (){var statearr_43408 = state_43337;
(statearr_43408[(26)] = inst_43326);

return statearr_43408;
})();
var statearr_43409_45422 = state_43337__$1;
(statearr_43409_45422[(2)] = null);

(statearr_43409_45422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (6))){
var inst_43262 = (state_43337[(27)]);
var inst_43261 = cljs.core.deref(cs);
var inst_43262__$1 = cljs.core.keys(inst_43261);
var inst_43263 = cljs.core.count(inst_43262__$1);
var inst_43264 = cljs.core.reset_BANG_(dctr,inst_43263);
var inst_43271 = cljs.core.seq(inst_43262__$1);
var inst_43272 = inst_43271;
var inst_43273 = null;
var inst_43274 = (0);
var inst_43275 = (0);
var state_43337__$1 = (function (){var statearr_43410 = state_43337;
(statearr_43410[(19)] = inst_43274);

(statearr_43410[(20)] = inst_43272);

(statearr_43410[(9)] = inst_43275);

(statearr_43410[(11)] = inst_43273);

(statearr_43410[(27)] = inst_43262__$1);

(statearr_43410[(28)] = inst_43264);

return statearr_43410;
})();
var statearr_43413_45432 = state_43337__$1;
(statearr_43413_45432[(2)] = null);

(statearr_43413_45432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (28))){
var inst_43293 = (state_43337[(23)]);
var inst_43272 = (state_43337[(20)]);
var inst_43293__$1 = cljs.core.seq(inst_43272);
var state_43337__$1 = (function (){var statearr_43414 = state_43337;
(statearr_43414[(23)] = inst_43293__$1);

return statearr_43414;
})();
if(inst_43293__$1){
var statearr_43415_45439 = state_43337__$1;
(statearr_43415_45439[(1)] = (33));

} else {
var statearr_43416_45440 = state_43337__$1;
(statearr_43416_45440[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (25))){
var inst_43274 = (state_43337[(19)]);
var inst_43275 = (state_43337[(9)]);
var inst_43277 = (inst_43275 < inst_43274);
var inst_43278 = inst_43277;
var state_43337__$1 = state_43337;
if(cljs.core.truth_(inst_43278)){
var statearr_43417_45450 = state_43337__$1;
(statearr_43417_45450[(1)] = (27));

} else {
var statearr_43418_45455 = state_43337__$1;
(statearr_43418_45455[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (34))){
var state_43337__$1 = state_43337;
var statearr_43419_45460 = state_43337__$1;
(statearr_43419_45460[(2)] = null);

(statearr_43419_45460[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (17))){
var state_43337__$1 = state_43337;
var statearr_43420_45463 = state_43337__$1;
(statearr_43420_45463[(2)] = null);

(statearr_43420_45463[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (3))){
var inst_43331 = (state_43337[(2)]);
var state_43337__$1 = state_43337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43337__$1,inst_43331);
} else {
if((state_val_43338 === (12))){
var inst_43255 = (state_43337[(2)]);
var state_43337__$1 = state_43337;
var statearr_43421_45468 = state_43337__$1;
(statearr_43421_45468[(2)] = inst_43255);

(statearr_43421_45468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (2))){
var state_43337__$1 = state_43337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43337__$1,(4),ch);
} else {
if((state_val_43338 === (23))){
var state_43337__$1 = state_43337;
var statearr_43422_45469 = state_43337__$1;
(statearr_43422_45469[(2)] = null);

(statearr_43422_45469[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (35))){
var inst_43315 = (state_43337[(2)]);
var state_43337__$1 = state_43337;
var statearr_43423_45472 = state_43337__$1;
(statearr_43423_45472[(2)] = inst_43315);

(statearr_43423_45472[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (19))){
var inst_43212 = (state_43337[(7)]);
var inst_43218 = cljs.core.chunk_first(inst_43212);
var inst_43219 = cljs.core.chunk_rest(inst_43212);
var inst_43220 = cljs.core.count(inst_43218);
var inst_43189 = inst_43219;
var inst_43190 = inst_43218;
var inst_43191 = inst_43220;
var inst_43192 = (0);
var state_43337__$1 = (function (){var statearr_43425 = state_43337;
(statearr_43425[(13)] = inst_43189);

(statearr_43425[(15)] = inst_43192);

(statearr_43425[(16)] = inst_43190);

(statearr_43425[(17)] = inst_43191);

return statearr_43425;
})();
var statearr_43426_45480 = state_43337__$1;
(statearr_43426_45480[(2)] = null);

(statearr_43426_45480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (11))){
var inst_43189 = (state_43337[(13)]);
var inst_43212 = (state_43337[(7)]);
var inst_43212__$1 = cljs.core.seq(inst_43189);
var state_43337__$1 = (function (){var statearr_43429 = state_43337;
(statearr_43429[(7)] = inst_43212__$1);

return statearr_43429;
})();
if(inst_43212__$1){
var statearr_43430_45483 = state_43337__$1;
(statearr_43430_45483[(1)] = (16));

} else {
var statearr_43431_45485 = state_43337__$1;
(statearr_43431_45485[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (9))){
var inst_43257 = (state_43337[(2)]);
var state_43337__$1 = state_43337;
var statearr_43433_45488 = state_43337__$1;
(statearr_43433_45488[(2)] = inst_43257);

(statearr_43433_45488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (5))){
var inst_43187 = cljs.core.deref(cs);
var inst_43188 = cljs.core.seq(inst_43187);
var inst_43189 = inst_43188;
var inst_43190 = null;
var inst_43191 = (0);
var inst_43192 = (0);
var state_43337__$1 = (function (){var statearr_43434 = state_43337;
(statearr_43434[(13)] = inst_43189);

(statearr_43434[(15)] = inst_43192);

(statearr_43434[(16)] = inst_43190);

(statearr_43434[(17)] = inst_43191);

return statearr_43434;
})();
var statearr_43436_45500 = state_43337__$1;
(statearr_43436_45500[(2)] = null);

(statearr_43436_45500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (14))){
var state_43337__$1 = state_43337;
var statearr_43439_45501 = state_43337__$1;
(statearr_43439_45501[(2)] = null);

(statearr_43439_45501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (45))){
var inst_43323 = (state_43337[(2)]);
var state_43337__$1 = state_43337;
var statearr_43440_45504 = state_43337__$1;
(statearr_43440_45504[(2)] = inst_43323);

(statearr_43440_45504[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (26))){
var inst_43262 = (state_43337[(27)]);
var inst_43319 = (state_43337[(2)]);
var inst_43320 = cljs.core.seq(inst_43262);
var state_43337__$1 = (function (){var statearr_43441 = state_43337;
(statearr_43441[(29)] = inst_43319);

return statearr_43441;
})();
if(inst_43320){
var statearr_43442_45509 = state_43337__$1;
(statearr_43442_45509[(1)] = (42));

} else {
var statearr_43443_45510 = state_43337__$1;
(statearr_43443_45510[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (16))){
var inst_43212 = (state_43337[(7)]);
var inst_43216 = cljs.core.chunked_seq_QMARK_(inst_43212);
var state_43337__$1 = state_43337;
if(inst_43216){
var statearr_43445_45514 = state_43337__$1;
(statearr_43445_45514[(1)] = (19));

} else {
var statearr_43446_45515 = state_43337__$1;
(statearr_43446_45515[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (38))){
var inst_43312 = (state_43337[(2)]);
var state_43337__$1 = state_43337;
var statearr_43447_45516 = state_43337__$1;
(statearr_43447_45516[(2)] = inst_43312);

(statearr_43447_45516[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (30))){
var state_43337__$1 = state_43337;
var statearr_43448_45521 = state_43337__$1;
(statearr_43448_45521[(2)] = null);

(statearr_43448_45521[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (10))){
var inst_43192 = (state_43337[(15)]);
var inst_43190 = (state_43337[(16)]);
var inst_43200 = cljs.core._nth(inst_43190,inst_43192);
var inst_43201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43200,(0),null);
var inst_43202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43200,(1),null);
var state_43337__$1 = (function (){var statearr_43450 = state_43337;
(statearr_43450[(24)] = inst_43201);

return statearr_43450;
})();
if(cljs.core.truth_(inst_43202)){
var statearr_43451_45532 = state_43337__$1;
(statearr_43451_45532[(1)] = (13));

} else {
var statearr_43452_45533 = state_43337__$1;
(statearr_43452_45533[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (18))){
var inst_43253 = (state_43337[(2)]);
var state_43337__$1 = state_43337;
var statearr_43453_45536 = state_43337__$1;
(statearr_43453_45536[(2)] = inst_43253);

(statearr_43453_45536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (42))){
var state_43337__$1 = state_43337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43337__$1,(45),dchan);
} else {
if((state_val_43338 === (37))){
var inst_43293 = (state_43337[(23)]);
var inst_43302 = (state_43337[(22)]);
var inst_43180 = (state_43337[(10)]);
var inst_43302__$1 = cljs.core.first(inst_43293);
var inst_43303 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43302__$1,inst_43180,done);
var state_43337__$1 = (function (){var statearr_43455 = state_43337;
(statearr_43455[(22)] = inst_43302__$1);

return statearr_43455;
})();
if(cljs.core.truth_(inst_43303)){
var statearr_43457_45539 = state_43337__$1;
(statearr_43457_45539[(1)] = (39));

} else {
var statearr_43458_45540 = state_43337__$1;
(statearr_43458_45540[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43338 === (8))){
var inst_43192 = (state_43337[(15)]);
var inst_43191 = (state_43337[(17)]);
var inst_43194 = (inst_43192 < inst_43191);
var inst_43195 = inst_43194;
var state_43337__$1 = state_43337;
if(cljs.core.truth_(inst_43195)){
var statearr_43459_45545 = state_43337__$1;
(statearr_43459_45545[(1)] = (10));

} else {
var statearr_43460_45546 = state_43337__$1;
(statearr_43460_45546[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__42149__auto__ = null;
var cljs$core$async$mult_$_state_machine__42149__auto____0 = (function (){
var statearr_43463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43463[(0)] = cljs$core$async$mult_$_state_machine__42149__auto__);

(statearr_43463[(1)] = (1));

return statearr_43463;
});
var cljs$core$async$mult_$_state_machine__42149__auto____1 = (function (state_43337){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_43337);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e43464){var ex__42152__auto__ = e43464;
var statearr_43465_45558 = state_43337;
(statearr_43465_45558[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_43337[(4)]))){
var statearr_43467_45559 = state_43337;
(statearr_43467_45559[(1)] = cljs.core.first((state_43337[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45560 = state_43337;
state_43337 = G__45560;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42149__auto__ = function(state_43337){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42149__auto____1.call(this,state_43337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42149__auto____0;
cljs$core$async$mult_$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42149__auto____1;
return cljs$core$async$mult_$_state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_43477 = f__42269__auto__();
(statearr_43477[(6)] = c__42268__auto___45324);

return statearr_43477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__43485 = arguments.length;
switch (G__43485) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_45566 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_45566(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_45570 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_45570(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_45574 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_45574(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_45577 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_45577(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_45586 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_45586(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45590 = arguments.length;
var i__4737__auto___45591 = (0);
while(true){
if((i__4737__auto___45591 < len__4736__auto___45590)){
args__4742__auto__.push((arguments[i__4737__auto___45591]));

var G__45592 = (i__4737__auto___45591 + (1));
i__4737__auto___45591 = G__45592;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43548){
var map__43549 = p__43548;
var map__43549__$1 = (((((!((map__43549 == null))))?(((((map__43549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43549):map__43549);
var opts = map__43549__$1;
var statearr_43551_45599 = state;
(statearr_43551_45599[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43552_45600 = state;
(statearr_43552_45600[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_43553_45601 = state;
(statearr_43553_45601[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43543){
var G__43544 = cljs.core.first(seq43543);
var seq43543__$1 = cljs.core.next(seq43543);
var G__43545 = cljs.core.first(seq43543__$1);
var seq43543__$2 = cljs.core.next(seq43543__$1);
var G__43546 = cljs.core.first(seq43543__$2);
var seq43543__$3 = cljs.core.next(seq43543__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43544,G__43545,G__43546,seq43543__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43566 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43566 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43567){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43567 = meta43567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43568,meta43567__$1){
var self__ = this;
var _43568__$1 = this;
return (new cljs.core.async.t_cljs$core$async43566(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43567__$1));
}));

(cljs.core.async.t_cljs$core$async43566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43568){
var self__ = this;
var _43568__$1 = this;
return self__.meta43567;
}));

(cljs.core.async.t_cljs$core$async43566.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43566.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43566.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43566.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43566.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43566.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43566.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43566.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43566.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43567","meta43567",-528548415,null)], null);
}));

(cljs.core.async.t_cljs$core$async43566.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43566");

(cljs.core.async.t_cljs$core$async43566.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43566");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43566.
 */
cljs.core.async.__GT_t_cljs$core$async43566 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43566(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43567){
return (new cljs.core.async.t_cljs$core$async43566(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43567));
});

}

return (new cljs.core.async.t_cljs$core$async43566(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42268__auto___45634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_43680){
var state_val_43681 = (state_43680[(1)]);
if((state_val_43681 === (7))){
var inst_43593 = (state_43680[(2)]);
var state_43680__$1 = state_43680;
var statearr_43683_45638 = state_43680__$1;
(statearr_43683_45638[(2)] = inst_43593);

(statearr_43683_45638[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (20))){
var inst_43605 = (state_43680[(7)]);
var state_43680__$1 = state_43680;
var statearr_43684_45639 = state_43680__$1;
(statearr_43684_45639[(2)] = inst_43605);

(statearr_43684_45639[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (27))){
var state_43680__$1 = state_43680;
var statearr_43685_45640 = state_43680__$1;
(statearr_43685_45640[(2)] = null);

(statearr_43685_45640[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (1))){
var inst_43580 = (state_43680[(8)]);
var inst_43580__$1 = calc_state();
var inst_43582 = (inst_43580__$1 == null);
var inst_43583 = cljs.core.not(inst_43582);
var state_43680__$1 = (function (){var statearr_43686 = state_43680;
(statearr_43686[(8)] = inst_43580__$1);

return statearr_43686;
})();
if(inst_43583){
var statearr_43687_45641 = state_43680__$1;
(statearr_43687_45641[(1)] = (2));

} else {
var statearr_43689_45642 = state_43680__$1;
(statearr_43689_45642[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (24))){
var inst_43629 = (state_43680[(9)]);
var inst_43638 = (state_43680[(10)]);
var inst_43652 = (state_43680[(11)]);
var inst_43652__$1 = (inst_43629.cljs$core$IFn$_invoke$arity$1 ? inst_43629.cljs$core$IFn$_invoke$arity$1(inst_43638) : inst_43629.call(null,inst_43638));
var state_43680__$1 = (function (){var statearr_43694 = state_43680;
(statearr_43694[(11)] = inst_43652__$1);

return statearr_43694;
})();
if(cljs.core.truth_(inst_43652__$1)){
var statearr_43695_45643 = state_43680__$1;
(statearr_43695_45643[(1)] = (29));

} else {
var statearr_43696_45644 = state_43680__$1;
(statearr_43696_45644[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (4))){
var inst_43596 = (state_43680[(2)]);
var state_43680__$1 = state_43680;
if(cljs.core.truth_(inst_43596)){
var statearr_43701_45645 = state_43680__$1;
(statearr_43701_45645[(1)] = (8));

} else {
var statearr_43703_45646 = state_43680__$1;
(statearr_43703_45646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (15))){
var inst_43623 = (state_43680[(2)]);
var state_43680__$1 = state_43680;
if(cljs.core.truth_(inst_43623)){
var statearr_43705_45647 = state_43680__$1;
(statearr_43705_45647[(1)] = (19));

} else {
var statearr_43706_45648 = state_43680__$1;
(statearr_43706_45648[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (21))){
var inst_43628 = (state_43680[(12)]);
var inst_43628__$1 = (state_43680[(2)]);
var inst_43629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43628__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43628__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43628__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43680__$1 = (function (){var statearr_43712 = state_43680;
(statearr_43712[(13)] = inst_43630);

(statearr_43712[(9)] = inst_43629);

(statearr_43712[(12)] = inst_43628__$1);

return statearr_43712;
})();
return cljs.core.async.ioc_alts_BANG_(state_43680__$1,(22),inst_43631);
} else {
if((state_val_43681 === (31))){
var inst_43660 = (state_43680[(2)]);
var state_43680__$1 = state_43680;
if(cljs.core.truth_(inst_43660)){
var statearr_43714_45650 = state_43680__$1;
(statearr_43714_45650[(1)] = (32));

} else {
var statearr_43715_45651 = state_43680__$1;
(statearr_43715_45651[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (32))){
var inst_43637 = (state_43680[(14)]);
var state_43680__$1 = state_43680;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43680__$1,(35),out,inst_43637);
} else {
if((state_val_43681 === (33))){
var inst_43628 = (state_43680[(12)]);
var inst_43605 = inst_43628;
var state_43680__$1 = (function (){var statearr_43716 = state_43680;
(statearr_43716[(7)] = inst_43605);

return statearr_43716;
})();
var statearr_43717_45652 = state_43680__$1;
(statearr_43717_45652[(2)] = null);

(statearr_43717_45652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (13))){
var inst_43605 = (state_43680[(7)]);
var inst_43612 = inst_43605.cljs$lang$protocol_mask$partition0$;
var inst_43613 = (inst_43612 & (64));
var inst_43614 = inst_43605.cljs$core$ISeq$;
var inst_43615 = (cljs.core.PROTOCOL_SENTINEL === inst_43614);
var inst_43616 = ((inst_43613) || (inst_43615));
var state_43680__$1 = state_43680;
if(cljs.core.truth_(inst_43616)){
var statearr_43718_45653 = state_43680__$1;
(statearr_43718_45653[(1)] = (16));

} else {
var statearr_43719_45654 = state_43680__$1;
(statearr_43719_45654[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (22))){
var inst_43637 = (state_43680[(14)]);
var inst_43638 = (state_43680[(10)]);
var inst_43636 = (state_43680[(2)]);
var inst_43637__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43636,(0),null);
var inst_43638__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43636,(1),null);
var inst_43639 = (inst_43637__$1 == null);
var inst_43640 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43638__$1,change);
var inst_43641 = ((inst_43639) || (inst_43640));
var state_43680__$1 = (function (){var statearr_43722 = state_43680;
(statearr_43722[(14)] = inst_43637__$1);

(statearr_43722[(10)] = inst_43638__$1);

return statearr_43722;
})();
if(cljs.core.truth_(inst_43641)){
var statearr_43723_45660 = state_43680__$1;
(statearr_43723_45660[(1)] = (23));

} else {
var statearr_43724_45661 = state_43680__$1;
(statearr_43724_45661[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (36))){
var inst_43628 = (state_43680[(12)]);
var inst_43605 = inst_43628;
var state_43680__$1 = (function (){var statearr_43726 = state_43680;
(statearr_43726[(7)] = inst_43605);

return statearr_43726;
})();
var statearr_43727_45662 = state_43680__$1;
(statearr_43727_45662[(2)] = null);

(statearr_43727_45662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (29))){
var inst_43652 = (state_43680[(11)]);
var state_43680__$1 = state_43680;
var statearr_43728_45663 = state_43680__$1;
(statearr_43728_45663[(2)] = inst_43652);

(statearr_43728_45663[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (6))){
var state_43680__$1 = state_43680;
var statearr_43729_45664 = state_43680__$1;
(statearr_43729_45664[(2)] = false);

(statearr_43729_45664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (28))){
var inst_43648 = (state_43680[(2)]);
var inst_43649 = calc_state();
var inst_43605 = inst_43649;
var state_43680__$1 = (function (){var statearr_43730 = state_43680;
(statearr_43730[(15)] = inst_43648);

(statearr_43730[(7)] = inst_43605);

return statearr_43730;
})();
var statearr_43732_45666 = state_43680__$1;
(statearr_43732_45666[(2)] = null);

(statearr_43732_45666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (25))){
var inst_43674 = (state_43680[(2)]);
var state_43680__$1 = state_43680;
var statearr_43734_45667 = state_43680__$1;
(statearr_43734_45667[(2)] = inst_43674);

(statearr_43734_45667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (34))){
var inst_43672 = (state_43680[(2)]);
var state_43680__$1 = state_43680;
var statearr_43735_45668 = state_43680__$1;
(statearr_43735_45668[(2)] = inst_43672);

(statearr_43735_45668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (17))){
var state_43680__$1 = state_43680;
var statearr_43736_45673 = state_43680__$1;
(statearr_43736_45673[(2)] = false);

(statearr_43736_45673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (3))){
var state_43680__$1 = state_43680;
var statearr_43737_45674 = state_43680__$1;
(statearr_43737_45674[(2)] = false);

(statearr_43737_45674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (12))){
var inst_43676 = (state_43680[(2)]);
var state_43680__$1 = state_43680;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43680__$1,inst_43676);
} else {
if((state_val_43681 === (2))){
var inst_43580 = (state_43680[(8)]);
var inst_43585 = inst_43580.cljs$lang$protocol_mask$partition0$;
var inst_43586 = (inst_43585 & (64));
var inst_43587 = inst_43580.cljs$core$ISeq$;
var inst_43588 = (cljs.core.PROTOCOL_SENTINEL === inst_43587);
var inst_43589 = ((inst_43586) || (inst_43588));
var state_43680__$1 = state_43680;
if(cljs.core.truth_(inst_43589)){
var statearr_43738_45675 = state_43680__$1;
(statearr_43738_45675[(1)] = (5));

} else {
var statearr_43739_45676 = state_43680__$1;
(statearr_43739_45676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (23))){
var inst_43637 = (state_43680[(14)]);
var inst_43643 = (inst_43637 == null);
var state_43680__$1 = state_43680;
if(cljs.core.truth_(inst_43643)){
var statearr_43740_45677 = state_43680__$1;
(statearr_43740_45677[(1)] = (26));

} else {
var statearr_43741_45678 = state_43680__$1;
(statearr_43741_45678[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (35))){
var inst_43663 = (state_43680[(2)]);
var state_43680__$1 = state_43680;
if(cljs.core.truth_(inst_43663)){
var statearr_43743_45679 = state_43680__$1;
(statearr_43743_45679[(1)] = (36));

} else {
var statearr_43747_45680 = state_43680__$1;
(statearr_43747_45680[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (19))){
var inst_43605 = (state_43680[(7)]);
var inst_43625 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43605);
var state_43680__$1 = state_43680;
var statearr_43748_45681 = state_43680__$1;
(statearr_43748_45681[(2)] = inst_43625);

(statearr_43748_45681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (11))){
var inst_43605 = (state_43680[(7)]);
var inst_43609 = (inst_43605 == null);
var inst_43610 = cljs.core.not(inst_43609);
var state_43680__$1 = state_43680;
if(inst_43610){
var statearr_43749_45682 = state_43680__$1;
(statearr_43749_45682[(1)] = (13));

} else {
var statearr_43750_45683 = state_43680__$1;
(statearr_43750_45683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (9))){
var inst_43580 = (state_43680[(8)]);
var state_43680__$1 = state_43680;
var statearr_43751_45684 = state_43680__$1;
(statearr_43751_45684[(2)] = inst_43580);

(statearr_43751_45684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (5))){
var state_43680__$1 = state_43680;
var statearr_43755_45685 = state_43680__$1;
(statearr_43755_45685[(2)] = true);

(statearr_43755_45685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (14))){
var state_43680__$1 = state_43680;
var statearr_43758_45686 = state_43680__$1;
(statearr_43758_45686[(2)] = false);

(statearr_43758_45686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (26))){
var inst_43638 = (state_43680[(10)]);
var inst_43645 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43638);
var state_43680__$1 = state_43680;
var statearr_43759_45687 = state_43680__$1;
(statearr_43759_45687[(2)] = inst_43645);

(statearr_43759_45687[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (16))){
var state_43680__$1 = state_43680;
var statearr_43760_45688 = state_43680__$1;
(statearr_43760_45688[(2)] = true);

(statearr_43760_45688[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (38))){
var inst_43668 = (state_43680[(2)]);
var state_43680__$1 = state_43680;
var statearr_43761_45689 = state_43680__$1;
(statearr_43761_45689[(2)] = inst_43668);

(statearr_43761_45689[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (30))){
var inst_43630 = (state_43680[(13)]);
var inst_43629 = (state_43680[(9)]);
var inst_43638 = (state_43680[(10)]);
var inst_43655 = cljs.core.empty_QMARK_(inst_43629);
var inst_43656 = (inst_43630.cljs$core$IFn$_invoke$arity$1 ? inst_43630.cljs$core$IFn$_invoke$arity$1(inst_43638) : inst_43630.call(null,inst_43638));
var inst_43657 = cljs.core.not(inst_43656);
var inst_43658 = ((inst_43655) && (inst_43657));
var state_43680__$1 = state_43680;
var statearr_43763_45690 = state_43680__$1;
(statearr_43763_45690[(2)] = inst_43658);

(statearr_43763_45690[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (10))){
var inst_43580 = (state_43680[(8)]);
var inst_43601 = (state_43680[(2)]);
var inst_43602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43601,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43601,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43601,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43605 = inst_43580;
var state_43680__$1 = (function (){var statearr_43764 = state_43680;
(statearr_43764[(16)] = inst_43604);

(statearr_43764[(17)] = inst_43602);

(statearr_43764[(18)] = inst_43603);

(statearr_43764[(7)] = inst_43605);

return statearr_43764;
})();
var statearr_43765_45694 = state_43680__$1;
(statearr_43765_45694[(2)] = null);

(statearr_43765_45694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (18))){
var inst_43620 = (state_43680[(2)]);
var state_43680__$1 = state_43680;
var statearr_43767_45695 = state_43680__$1;
(statearr_43767_45695[(2)] = inst_43620);

(statearr_43767_45695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (37))){
var state_43680__$1 = state_43680;
var statearr_43769_45696 = state_43680__$1;
(statearr_43769_45696[(2)] = null);

(statearr_43769_45696[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43681 === (8))){
var inst_43580 = (state_43680[(8)]);
var inst_43598 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43580);
var state_43680__$1 = state_43680;
var statearr_43771_45697 = state_43680__$1;
(statearr_43771_45697[(2)] = inst_43598);

(statearr_43771_45697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__42149__auto__ = null;
var cljs$core$async$mix_$_state_machine__42149__auto____0 = (function (){
var statearr_43774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43774[(0)] = cljs$core$async$mix_$_state_machine__42149__auto__);

(statearr_43774[(1)] = (1));

return statearr_43774;
});
var cljs$core$async$mix_$_state_machine__42149__auto____1 = (function (state_43680){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_43680);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e43777){var ex__42152__auto__ = e43777;
var statearr_43779_45698 = state_43680;
(statearr_43779_45698[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_43680[(4)]))){
var statearr_43781_45699 = state_43680;
(statearr_43781_45699[(1)] = cljs.core.first((state_43680[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45700 = state_43680;
state_43680 = G__45700;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42149__auto__ = function(state_43680){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42149__auto____1.call(this,state_43680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42149__auto____0;
cljs$core$async$mix_$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42149__auto____1;
return cljs$core$async$mix_$_state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_43784 = f__42269__auto__();
(statearr_43784[(6)] = c__42268__auto___45634);

return statearr_43784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_45702 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_45702(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45705 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_45705(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45707 = (function() {
var G__45708 = null;
var G__45708__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__45708__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__45708 = function(p,v){
switch(arguments.length){
case 1:
return G__45708__1.call(this,p);
case 2:
return G__45708__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45708.cljs$core$IFn$_invoke$arity$1 = G__45708__1;
G__45708.cljs$core$IFn$_invoke$arity$2 = G__45708__2;
return G__45708;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43831 = arguments.length;
switch (G__43831) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45707(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45707(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43835 = arguments.length;
switch (G__43835) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43833_SHARP_){
if(cljs.core.truth_((p1__43833_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43833_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43833_SHARP_.call(null,topic)))){
return p1__43833_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43833_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43843 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43843 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43844){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43844 = meta43844;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43845,meta43844__$1){
var self__ = this;
var _43845__$1 = this;
return (new cljs.core.async.t_cljs$core$async43843(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43844__$1));
}));

(cljs.core.async.t_cljs$core$async43843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43845){
var self__ = this;
var _43845__$1 = this;
return self__.meta43844;
}));

(cljs.core.async.t_cljs$core$async43843.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43843.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43843.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43843.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43843.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async43843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43843.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43843.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43844","meta43844",2136812339,null)], null);
}));

(cljs.core.async.t_cljs$core$async43843.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43843.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43843");

(cljs.core.async.t_cljs$core$async43843.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43843");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43843.
 */
cljs.core.async.__GT_t_cljs$core$async43843 = (function cljs$core$async$__GT_t_cljs$core$async43843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43844){
return (new cljs.core.async.t_cljs$core$async43843(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43844));
});

}

return (new cljs.core.async.t_cljs$core$async43843(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42268__auto___45725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_43952){
var state_val_43953 = (state_43952[(1)]);
if((state_val_43953 === (7))){
var inst_43946 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
var statearr_43956_45726 = state_43952__$1;
(statearr_43956_45726[(2)] = inst_43946);

(statearr_43956_45726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (20))){
var state_43952__$1 = state_43952;
var statearr_43965_45727 = state_43952__$1;
(statearr_43965_45727[(2)] = null);

(statearr_43965_45727[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (1))){
var state_43952__$1 = state_43952;
var statearr_43967_45728 = state_43952__$1;
(statearr_43967_45728[(2)] = null);

(statearr_43967_45728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (24))){
var inst_43927 = (state_43952[(7)]);
var inst_43938 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43927);
var state_43952__$1 = state_43952;
var statearr_43969_45730 = state_43952__$1;
(statearr_43969_45730[(2)] = inst_43938);

(statearr_43969_45730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (4))){
var inst_43867 = (state_43952[(8)]);
var inst_43867__$1 = (state_43952[(2)]);
var inst_43872 = (inst_43867__$1 == null);
var state_43952__$1 = (function (){var statearr_43970 = state_43952;
(statearr_43970[(8)] = inst_43867__$1);

return statearr_43970;
})();
if(cljs.core.truth_(inst_43872)){
var statearr_43971_45732 = state_43952__$1;
(statearr_43971_45732[(1)] = (5));

} else {
var statearr_43972_45733 = state_43952__$1;
(statearr_43972_45733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (15))){
var inst_43921 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
var statearr_43973_45734 = state_43952__$1;
(statearr_43973_45734[(2)] = inst_43921);

(statearr_43973_45734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (21))){
var inst_43943 = (state_43952[(2)]);
var state_43952__$1 = (function (){var statearr_43974 = state_43952;
(statearr_43974[(9)] = inst_43943);

return statearr_43974;
})();
var statearr_43975_45735 = state_43952__$1;
(statearr_43975_45735[(2)] = null);

(statearr_43975_45735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (13))){
var inst_43897 = (state_43952[(10)]);
var inst_43901 = cljs.core.chunked_seq_QMARK_(inst_43897);
var state_43952__$1 = state_43952;
if(inst_43901){
var statearr_43976_45737 = state_43952__$1;
(statearr_43976_45737[(1)] = (16));

} else {
var statearr_43977_45738 = state_43952__$1;
(statearr_43977_45738[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (22))){
var inst_43935 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
if(cljs.core.truth_(inst_43935)){
var statearr_43978_45739 = state_43952__$1;
(statearr_43978_45739[(1)] = (23));

} else {
var statearr_43979_45740 = state_43952__$1;
(statearr_43979_45740[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (6))){
var inst_43929 = (state_43952[(11)]);
var inst_43867 = (state_43952[(8)]);
var inst_43927 = (state_43952[(7)]);
var inst_43927__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43867) : topic_fn.call(null,inst_43867));
var inst_43928 = cljs.core.deref(mults);
var inst_43929__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43928,inst_43927__$1);
var state_43952__$1 = (function (){var statearr_43980 = state_43952;
(statearr_43980[(11)] = inst_43929__$1);

(statearr_43980[(7)] = inst_43927__$1);

return statearr_43980;
})();
if(cljs.core.truth_(inst_43929__$1)){
var statearr_43981_45742 = state_43952__$1;
(statearr_43981_45742[(1)] = (19));

} else {
var statearr_43982_45744 = state_43952__$1;
(statearr_43982_45744[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (25))){
var inst_43940 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
var statearr_43987_45745 = state_43952__$1;
(statearr_43987_45745[(2)] = inst_43940);

(statearr_43987_45745[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (17))){
var inst_43897 = (state_43952[(10)]);
var inst_43908 = cljs.core.first(inst_43897);
var inst_43913 = cljs.core.async.muxch_STAR_(inst_43908);
var inst_43914 = cljs.core.async.close_BANG_(inst_43913);
var inst_43915 = cljs.core.next(inst_43897);
var inst_43881 = inst_43915;
var inst_43882 = null;
var inst_43883 = (0);
var inst_43884 = (0);
var state_43952__$1 = (function (){var statearr_43991 = state_43952;
(statearr_43991[(12)] = inst_43914);

(statearr_43991[(13)] = inst_43881);

(statearr_43991[(14)] = inst_43883);

(statearr_43991[(15)] = inst_43884);

(statearr_43991[(16)] = inst_43882);

return statearr_43991;
})();
var statearr_43993_45746 = state_43952__$1;
(statearr_43993_45746[(2)] = null);

(statearr_43993_45746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (3))){
var inst_43948 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43952__$1,inst_43948);
} else {
if((state_val_43953 === (12))){
var inst_43923 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
var statearr_43994_45747 = state_43952__$1;
(statearr_43994_45747[(2)] = inst_43923);

(statearr_43994_45747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (2))){
var state_43952__$1 = state_43952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43952__$1,(4),ch);
} else {
if((state_val_43953 === (23))){
var state_43952__$1 = state_43952;
var statearr_43995_45748 = state_43952__$1;
(statearr_43995_45748[(2)] = null);

(statearr_43995_45748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (19))){
var inst_43929 = (state_43952[(11)]);
var inst_43867 = (state_43952[(8)]);
var inst_43931 = cljs.core.async.muxch_STAR_(inst_43929);
var state_43952__$1 = state_43952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43952__$1,(22),inst_43931,inst_43867);
} else {
if((state_val_43953 === (11))){
var inst_43881 = (state_43952[(13)]);
var inst_43897 = (state_43952[(10)]);
var inst_43897__$1 = cljs.core.seq(inst_43881);
var state_43952__$1 = (function (){var statearr_43996 = state_43952;
(statearr_43996[(10)] = inst_43897__$1);

return statearr_43996;
})();
if(inst_43897__$1){
var statearr_43997_45755 = state_43952__$1;
(statearr_43997_45755[(1)] = (13));

} else {
var statearr_43998_45756 = state_43952__$1;
(statearr_43998_45756[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (9))){
var inst_43925 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
var statearr_43999_45757 = state_43952__$1;
(statearr_43999_45757[(2)] = inst_43925);

(statearr_43999_45757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (5))){
var inst_43878 = cljs.core.deref(mults);
var inst_43879 = cljs.core.vals(inst_43878);
var inst_43880 = cljs.core.seq(inst_43879);
var inst_43881 = inst_43880;
var inst_43882 = null;
var inst_43883 = (0);
var inst_43884 = (0);
var state_43952__$1 = (function (){var statearr_44001 = state_43952;
(statearr_44001[(13)] = inst_43881);

(statearr_44001[(14)] = inst_43883);

(statearr_44001[(15)] = inst_43884);

(statearr_44001[(16)] = inst_43882);

return statearr_44001;
})();
var statearr_44005_45766 = state_43952__$1;
(statearr_44005_45766[(2)] = null);

(statearr_44005_45766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (14))){
var state_43952__$1 = state_43952;
var statearr_44014_45767 = state_43952__$1;
(statearr_44014_45767[(2)] = null);

(statearr_44014_45767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (16))){
var inst_43897 = (state_43952[(10)]);
var inst_43903 = cljs.core.chunk_first(inst_43897);
var inst_43904 = cljs.core.chunk_rest(inst_43897);
var inst_43905 = cljs.core.count(inst_43903);
var inst_43881 = inst_43904;
var inst_43882 = inst_43903;
var inst_43883 = inst_43905;
var inst_43884 = (0);
var state_43952__$1 = (function (){var statearr_44015 = state_43952;
(statearr_44015[(13)] = inst_43881);

(statearr_44015[(14)] = inst_43883);

(statearr_44015[(15)] = inst_43884);

(statearr_44015[(16)] = inst_43882);

return statearr_44015;
})();
var statearr_44017_45769 = state_43952__$1;
(statearr_44017_45769[(2)] = null);

(statearr_44017_45769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (10))){
var inst_43881 = (state_43952[(13)]);
var inst_43883 = (state_43952[(14)]);
var inst_43884 = (state_43952[(15)]);
var inst_43882 = (state_43952[(16)]);
var inst_43891 = cljs.core._nth(inst_43882,inst_43884);
var inst_43892 = cljs.core.async.muxch_STAR_(inst_43891);
var inst_43893 = cljs.core.async.close_BANG_(inst_43892);
var inst_43894 = (inst_43884 + (1));
var tmp44011 = inst_43881;
var tmp44012 = inst_43883;
var tmp44013 = inst_43882;
var inst_43881__$1 = tmp44011;
var inst_43882__$1 = tmp44013;
var inst_43883__$1 = tmp44012;
var inst_43884__$1 = inst_43894;
var state_43952__$1 = (function (){var statearr_44019 = state_43952;
(statearr_44019[(13)] = inst_43881__$1);

(statearr_44019[(17)] = inst_43893);

(statearr_44019[(14)] = inst_43883__$1);

(statearr_44019[(15)] = inst_43884__$1);

(statearr_44019[(16)] = inst_43882__$1);

return statearr_44019;
})();
var statearr_44020_45777 = state_43952__$1;
(statearr_44020_45777[(2)] = null);

(statearr_44020_45777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (18))){
var inst_43918 = (state_43952[(2)]);
var state_43952__$1 = state_43952;
var statearr_44022_45778 = state_43952__$1;
(statearr_44022_45778[(2)] = inst_43918);

(statearr_44022_45778[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43953 === (8))){
var inst_43883 = (state_43952[(14)]);
var inst_43884 = (state_43952[(15)]);
var inst_43887 = (inst_43884 < inst_43883);
var inst_43888 = inst_43887;
var state_43952__$1 = state_43952;
if(cljs.core.truth_(inst_43888)){
var statearr_44025_45779 = state_43952__$1;
(statearr_44025_45779[(1)] = (10));

} else {
var statearr_44026_45780 = state_43952__$1;
(statearr_44026_45780[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42149__auto__ = null;
var cljs$core$async$state_machine__42149__auto____0 = (function (){
var statearr_44031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44031[(0)] = cljs$core$async$state_machine__42149__auto__);

(statearr_44031[(1)] = (1));

return statearr_44031;
});
var cljs$core$async$state_machine__42149__auto____1 = (function (state_43952){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_43952);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e44033){var ex__42152__auto__ = e44033;
var statearr_44034_45787 = state_43952;
(statearr_44034_45787[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_43952[(4)]))){
var statearr_44035_45788 = state_43952;
(statearr_44035_45788[(1)] = cljs.core.first((state_43952[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45789 = state_43952;
state_43952 = G__45789;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$state_machine__42149__auto__ = function(state_43952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42149__auto____1.call(this,state_43952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42149__auto____0;
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42149__auto____1;
return cljs$core$async$state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_44043 = f__42269__auto__();
(statearr_44043[(6)] = c__42268__auto___45725);

return statearr_44043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__44054 = arguments.length;
switch (G__44054) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__44057 = arguments.length;
switch (G__44057) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__44059 = arguments.length;
switch (G__44059) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__42268__auto___45855 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_44110){
var state_val_44111 = (state_44110[(1)]);
if((state_val_44111 === (7))){
var state_44110__$1 = state_44110;
var statearr_44115_45856 = state_44110__$1;
(statearr_44115_45856[(2)] = null);

(statearr_44115_45856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44111 === (1))){
var state_44110__$1 = state_44110;
var statearr_44116_45857 = state_44110__$1;
(statearr_44116_45857[(2)] = null);

(statearr_44116_45857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44111 === (4))){
var inst_44066 = (state_44110[(7)]);
var inst_44067 = (state_44110[(8)]);
var inst_44069 = (inst_44067 < inst_44066);
var state_44110__$1 = state_44110;
if(cljs.core.truth_(inst_44069)){
var statearr_44117_45859 = state_44110__$1;
(statearr_44117_45859[(1)] = (6));

} else {
var statearr_44118_45860 = state_44110__$1;
(statearr_44118_45860[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44111 === (15))){
var inst_44094 = (state_44110[(9)]);
var inst_44100 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44094);
var state_44110__$1 = state_44110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44110__$1,(17),out,inst_44100);
} else {
if((state_val_44111 === (13))){
var inst_44094 = (state_44110[(9)]);
var inst_44094__$1 = (state_44110[(2)]);
var inst_44096 = cljs.core.some(cljs.core.nil_QMARK_,inst_44094__$1);
var state_44110__$1 = (function (){var statearr_44120 = state_44110;
(statearr_44120[(9)] = inst_44094__$1);

return statearr_44120;
})();
if(cljs.core.truth_(inst_44096)){
var statearr_44122_45862 = state_44110__$1;
(statearr_44122_45862[(1)] = (14));

} else {
var statearr_44123_45863 = state_44110__$1;
(statearr_44123_45863[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44111 === (6))){
var state_44110__$1 = state_44110;
var statearr_44124_45872 = state_44110__$1;
(statearr_44124_45872[(2)] = null);

(statearr_44124_45872[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44111 === (17))){
var inst_44102 = (state_44110[(2)]);
var state_44110__$1 = (function (){var statearr_44126 = state_44110;
(statearr_44126[(10)] = inst_44102);

return statearr_44126;
})();
var statearr_44127_45874 = state_44110__$1;
(statearr_44127_45874[(2)] = null);

(statearr_44127_45874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44111 === (3))){
var inst_44107 = (state_44110[(2)]);
var state_44110__$1 = state_44110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44110__$1,inst_44107);
} else {
if((state_val_44111 === (12))){
var _ = (function (){var statearr_44128 = state_44110;
(statearr_44128[(4)] = cljs.core.rest((state_44110[(4)])));

return statearr_44128;
})();
var state_44110__$1 = state_44110;
var ex44125 = (state_44110__$1[(2)]);
var statearr_44129_45875 = state_44110__$1;
(statearr_44129_45875[(5)] = ex44125);


if((ex44125 instanceof Object)){
var statearr_44133_45876 = state_44110__$1;
(statearr_44133_45876[(1)] = (11));

(statearr_44133_45876[(5)] = null);

} else {
throw ex44125;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44111 === (2))){
var inst_44065 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44066 = cnt;
var inst_44067 = (0);
var state_44110__$1 = (function (){var statearr_44134 = state_44110;
(statearr_44134[(11)] = inst_44065);

(statearr_44134[(7)] = inst_44066);

(statearr_44134[(8)] = inst_44067);

return statearr_44134;
})();
var statearr_44135_45877 = state_44110__$1;
(statearr_44135_45877[(2)] = null);

(statearr_44135_45877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44111 === (11))){
var inst_44073 = (state_44110[(2)]);
var inst_44074 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44110__$1 = (function (){var statearr_44137 = state_44110;
(statearr_44137[(12)] = inst_44073);

return statearr_44137;
})();
var statearr_44138_45878 = state_44110__$1;
(statearr_44138_45878[(2)] = inst_44074);

(statearr_44138_45878[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44111 === (9))){
var inst_44067 = (state_44110[(8)]);
var _ = (function (){var statearr_44139 = state_44110;
(statearr_44139[(4)] = cljs.core.cons((12),(state_44110[(4)])));

return statearr_44139;
})();
var inst_44080 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44067) : chs__$1.call(null,inst_44067));
var inst_44081 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44067) : done.call(null,inst_44067));
var inst_44082 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44080,inst_44081);
var ___$1 = (function (){var statearr_44140 = state_44110;
(statearr_44140[(4)] = cljs.core.rest((state_44110[(4)])));

return statearr_44140;
})();
var state_44110__$1 = state_44110;
var statearr_44141_45885 = state_44110__$1;
(statearr_44141_45885[(2)] = inst_44082);

(statearr_44141_45885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44111 === (5))){
var inst_44092 = (state_44110[(2)]);
var state_44110__$1 = (function (){var statearr_44148 = state_44110;
(statearr_44148[(13)] = inst_44092);

return statearr_44148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44110__$1,(13),dchan);
} else {
if((state_val_44111 === (14))){
var inst_44098 = cljs.core.async.close_BANG_(out);
var state_44110__$1 = state_44110;
var statearr_44151_45888 = state_44110__$1;
(statearr_44151_45888[(2)] = inst_44098);

(statearr_44151_45888[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44111 === (16))){
var inst_44105 = (state_44110[(2)]);
var state_44110__$1 = state_44110;
var statearr_44153_45890 = state_44110__$1;
(statearr_44153_45890[(2)] = inst_44105);

(statearr_44153_45890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44111 === (10))){
var inst_44067 = (state_44110[(8)]);
var inst_44085 = (state_44110[(2)]);
var inst_44086 = (inst_44067 + (1));
var inst_44067__$1 = inst_44086;
var state_44110__$1 = (function (){var statearr_44154 = state_44110;
(statearr_44154[(14)] = inst_44085);

(statearr_44154[(8)] = inst_44067__$1);

return statearr_44154;
})();
var statearr_44156_45895 = state_44110__$1;
(statearr_44156_45895[(2)] = null);

(statearr_44156_45895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44111 === (8))){
var inst_44090 = (state_44110[(2)]);
var state_44110__$1 = state_44110;
var statearr_44158_45896 = state_44110__$1;
(statearr_44158_45896[(2)] = inst_44090);

(statearr_44158_45896[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42149__auto__ = null;
var cljs$core$async$state_machine__42149__auto____0 = (function (){
var statearr_44159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44159[(0)] = cljs$core$async$state_machine__42149__auto__);

(statearr_44159[(1)] = (1));

return statearr_44159;
});
var cljs$core$async$state_machine__42149__auto____1 = (function (state_44110){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_44110);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e44162){var ex__42152__auto__ = e44162;
var statearr_44163_45899 = state_44110;
(statearr_44163_45899[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_44110[(4)]))){
var statearr_44164_45900 = state_44110;
(statearr_44164_45900[(1)] = cljs.core.first((state_44110[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45907 = state_44110;
state_44110 = G__45907;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$state_machine__42149__auto__ = function(state_44110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42149__auto____1.call(this,state_44110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42149__auto____0;
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42149__auto____1;
return cljs$core$async$state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_44165 = f__42269__auto__();
(statearr_44165[(6)] = c__42268__auto___45855);

return statearr_44165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__44168 = arguments.length;
switch (G__44168) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42268__auto___45909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_44206){
var state_val_44207 = (state_44206[(1)]);
if((state_val_44207 === (7))){
var inst_44183 = (state_44206[(7)]);
var inst_44184 = (state_44206[(8)]);
var inst_44183__$1 = (state_44206[(2)]);
var inst_44184__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44183__$1,(0),null);
var inst_44185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44183__$1,(1),null);
var inst_44186 = (inst_44184__$1 == null);
var state_44206__$1 = (function (){var statearr_44209 = state_44206;
(statearr_44209[(7)] = inst_44183__$1);

(statearr_44209[(9)] = inst_44185);

(statearr_44209[(8)] = inst_44184__$1);

return statearr_44209;
})();
if(cljs.core.truth_(inst_44186)){
var statearr_44210_45912 = state_44206__$1;
(statearr_44210_45912[(1)] = (8));

} else {
var statearr_44211_45914 = state_44206__$1;
(statearr_44211_45914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44207 === (1))){
var inst_44173 = cljs.core.vec(chs);
var inst_44174 = inst_44173;
var state_44206__$1 = (function (){var statearr_44212 = state_44206;
(statearr_44212[(10)] = inst_44174);

return statearr_44212;
})();
var statearr_44213_45915 = state_44206__$1;
(statearr_44213_45915[(2)] = null);

(statearr_44213_45915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44207 === (4))){
var inst_44174 = (state_44206[(10)]);
var state_44206__$1 = state_44206;
return cljs.core.async.ioc_alts_BANG_(state_44206__$1,(7),inst_44174);
} else {
if((state_val_44207 === (6))){
var inst_44202 = (state_44206[(2)]);
var state_44206__$1 = state_44206;
var statearr_44214_45916 = state_44206__$1;
(statearr_44214_45916[(2)] = inst_44202);

(statearr_44214_45916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44207 === (3))){
var inst_44204 = (state_44206[(2)]);
var state_44206__$1 = state_44206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44206__$1,inst_44204);
} else {
if((state_val_44207 === (2))){
var inst_44174 = (state_44206[(10)]);
var inst_44176 = cljs.core.count(inst_44174);
var inst_44177 = (inst_44176 > (0));
var state_44206__$1 = state_44206;
if(cljs.core.truth_(inst_44177)){
var statearr_44216_45918 = state_44206__$1;
(statearr_44216_45918[(1)] = (4));

} else {
var statearr_44221_45919 = state_44206__$1;
(statearr_44221_45919[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44207 === (11))){
var inst_44174 = (state_44206[(10)]);
var inst_44195 = (state_44206[(2)]);
var tmp44215 = inst_44174;
var inst_44174__$1 = tmp44215;
var state_44206__$1 = (function (){var statearr_44226 = state_44206;
(statearr_44226[(10)] = inst_44174__$1);

(statearr_44226[(11)] = inst_44195);

return statearr_44226;
})();
var statearr_44227_45920 = state_44206__$1;
(statearr_44227_45920[(2)] = null);

(statearr_44227_45920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44207 === (9))){
var inst_44184 = (state_44206[(8)]);
var state_44206__$1 = state_44206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44206__$1,(11),out,inst_44184);
} else {
if((state_val_44207 === (5))){
var inst_44200 = cljs.core.async.close_BANG_(out);
var state_44206__$1 = state_44206;
var statearr_44232_45925 = state_44206__$1;
(statearr_44232_45925[(2)] = inst_44200);

(statearr_44232_45925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44207 === (10))){
var inst_44198 = (state_44206[(2)]);
var state_44206__$1 = state_44206;
var statearr_44233_45926 = state_44206__$1;
(statearr_44233_45926[(2)] = inst_44198);

(statearr_44233_45926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44207 === (8))){
var inst_44183 = (state_44206[(7)]);
var inst_44185 = (state_44206[(9)]);
var inst_44184 = (state_44206[(8)]);
var inst_44174 = (state_44206[(10)]);
var inst_44190 = (function (){var cs = inst_44174;
var vec__44179 = inst_44183;
var v = inst_44184;
var c = inst_44185;
return (function (p1__44166_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44166_SHARP_);
});
})();
var inst_44191 = cljs.core.filterv(inst_44190,inst_44174);
var inst_44174__$1 = inst_44191;
var state_44206__$1 = (function (){var statearr_44234 = state_44206;
(statearr_44234[(10)] = inst_44174__$1);

return statearr_44234;
})();
var statearr_44235_45929 = state_44206__$1;
(statearr_44235_45929[(2)] = null);

(statearr_44235_45929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42149__auto__ = null;
var cljs$core$async$state_machine__42149__auto____0 = (function (){
var statearr_44236 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44236[(0)] = cljs$core$async$state_machine__42149__auto__);

(statearr_44236[(1)] = (1));

return statearr_44236;
});
var cljs$core$async$state_machine__42149__auto____1 = (function (state_44206){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_44206);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e44237){var ex__42152__auto__ = e44237;
var statearr_44238_45931 = state_44206;
(statearr_44238_45931[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_44206[(4)]))){
var statearr_44239_45932 = state_44206;
(statearr_44239_45932[(1)] = cljs.core.first((state_44206[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45934 = state_44206;
state_44206 = G__45934;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$state_machine__42149__auto__ = function(state_44206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42149__auto____1.call(this,state_44206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42149__auto____0;
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42149__auto____1;
return cljs$core$async$state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_44240 = f__42269__auto__();
(statearr_44240[(6)] = c__42268__auto___45909);

return statearr_44240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__44242 = arguments.length;
switch (G__44242) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42268__auto___45938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_44270){
var state_val_44271 = (state_44270[(1)]);
if((state_val_44271 === (7))){
var inst_44252 = (state_44270[(7)]);
var inst_44252__$1 = (state_44270[(2)]);
var inst_44253 = (inst_44252__$1 == null);
var inst_44254 = cljs.core.not(inst_44253);
var state_44270__$1 = (function (){var statearr_44272 = state_44270;
(statearr_44272[(7)] = inst_44252__$1);

return statearr_44272;
})();
if(inst_44254){
var statearr_44273_45939 = state_44270__$1;
(statearr_44273_45939[(1)] = (8));

} else {
var statearr_44276_45940 = state_44270__$1;
(statearr_44276_45940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (1))){
var inst_44246 = (0);
var state_44270__$1 = (function (){var statearr_44277 = state_44270;
(statearr_44277[(8)] = inst_44246);

return statearr_44277;
})();
var statearr_44278_45941 = state_44270__$1;
(statearr_44278_45941[(2)] = null);

(statearr_44278_45941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (4))){
var state_44270__$1 = state_44270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44270__$1,(7),ch);
} else {
if((state_val_44271 === (6))){
var inst_44265 = (state_44270[(2)]);
var state_44270__$1 = state_44270;
var statearr_44281_45948 = state_44270__$1;
(statearr_44281_45948[(2)] = inst_44265);

(statearr_44281_45948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (3))){
var inst_44267 = (state_44270[(2)]);
var inst_44268 = cljs.core.async.close_BANG_(out);
var state_44270__$1 = (function (){var statearr_44283 = state_44270;
(statearr_44283[(9)] = inst_44267);

return statearr_44283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44270__$1,inst_44268);
} else {
if((state_val_44271 === (2))){
var inst_44246 = (state_44270[(8)]);
var inst_44249 = (inst_44246 < n);
var state_44270__$1 = state_44270;
if(cljs.core.truth_(inst_44249)){
var statearr_44285_45950 = state_44270__$1;
(statearr_44285_45950[(1)] = (4));

} else {
var statearr_44286_45951 = state_44270__$1;
(statearr_44286_45951[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (11))){
var inst_44246 = (state_44270[(8)]);
var inst_44257 = (state_44270[(2)]);
var inst_44258 = (inst_44246 + (1));
var inst_44246__$1 = inst_44258;
var state_44270__$1 = (function (){var statearr_44287 = state_44270;
(statearr_44287[(10)] = inst_44257);

(statearr_44287[(8)] = inst_44246__$1);

return statearr_44287;
})();
var statearr_44288_45953 = state_44270__$1;
(statearr_44288_45953[(2)] = null);

(statearr_44288_45953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (9))){
var state_44270__$1 = state_44270;
var statearr_44289_45955 = state_44270__$1;
(statearr_44289_45955[(2)] = null);

(statearr_44289_45955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (5))){
var state_44270__$1 = state_44270;
var statearr_44292_45958 = state_44270__$1;
(statearr_44292_45958[(2)] = null);

(statearr_44292_45958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (10))){
var inst_44262 = (state_44270[(2)]);
var state_44270__$1 = state_44270;
var statearr_44293_45960 = state_44270__$1;
(statearr_44293_45960[(2)] = inst_44262);

(statearr_44293_45960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44271 === (8))){
var inst_44252 = (state_44270[(7)]);
var state_44270__$1 = state_44270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44270__$1,(11),out,inst_44252);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42149__auto__ = null;
var cljs$core$async$state_machine__42149__auto____0 = (function (){
var statearr_44294 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44294[(0)] = cljs$core$async$state_machine__42149__auto__);

(statearr_44294[(1)] = (1));

return statearr_44294;
});
var cljs$core$async$state_machine__42149__auto____1 = (function (state_44270){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_44270);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e44295){var ex__42152__auto__ = e44295;
var statearr_44296_45962 = state_44270;
(statearr_44296_45962[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_44270[(4)]))){
var statearr_44297_45963 = state_44270;
(statearr_44297_45963[(1)] = cljs.core.first((state_44270[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45964 = state_44270;
state_44270 = G__45964;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$state_machine__42149__auto__ = function(state_44270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42149__auto____1.call(this,state_44270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42149__auto____0;
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42149__auto____1;
return cljs$core$async$state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_44298 = f__42269__auto__();
(statearr_44298[(6)] = c__42268__auto___45938);

return statearr_44298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44300 = (function (f,ch,meta44301){
this.f = f;
this.ch = ch;
this.meta44301 = meta44301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44302,meta44301__$1){
var self__ = this;
var _44302__$1 = this;
return (new cljs.core.async.t_cljs$core$async44300(self__.f,self__.ch,meta44301__$1));
}));

(cljs.core.async.t_cljs$core$async44300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44302){
var self__ = this;
var _44302__$1 = this;
return self__.meta44301;
}));

(cljs.core.async.t_cljs$core$async44300.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44300.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44300.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44300.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44300.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44304 = (function (f,ch,meta44301,_,fn1,meta44305){
this.f = f;
this.ch = ch;
this.meta44301 = meta44301;
this._ = _;
this.fn1 = fn1;
this.meta44305 = meta44305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44306,meta44305__$1){
var self__ = this;
var _44306__$1 = this;
return (new cljs.core.async.t_cljs$core$async44304(self__.f,self__.ch,self__.meta44301,self__._,self__.fn1,meta44305__$1));
}));

(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44306){
var self__ = this;
var _44306__$1 = this;
return self__.meta44305;
}));

(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44299_SHARP_){
var G__44311 = (((p1__44299_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44299_SHARP_) : self__.f.call(null,p1__44299_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44311) : f1.call(null,G__44311));
});
}));

(cljs.core.async.t_cljs$core$async44304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44301","meta44301",-1129795592,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44300","cljs.core.async/t_cljs$core$async44300",299300342,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44305","meta44305",-2118574805,null)], null);
}));

(cljs.core.async.t_cljs$core$async44304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44304");

(cljs.core.async.t_cljs$core$async44304.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44304.
 */
cljs.core.async.__GT_t_cljs$core$async44304 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44304(f__$1,ch__$1,meta44301__$1,___$2,fn1__$1,meta44305){
return (new cljs.core.async.t_cljs$core$async44304(f__$1,ch__$1,meta44301__$1,___$2,fn1__$1,meta44305));
});

}

return (new cljs.core.async.t_cljs$core$async44304(self__.f,self__.ch,self__.meta44301,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44318 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44318) : self__.f.call(null,G__44318));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44300.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44300.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44301","meta44301",-1129795592,null)], null);
}));

(cljs.core.async.t_cljs$core$async44300.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44300");

(cljs.core.async.t_cljs$core$async44300.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44300");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44300.
 */
cljs.core.async.__GT_t_cljs$core$async44300 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44300(f__$1,ch__$1,meta44301){
return (new cljs.core.async.t_cljs$core$async44300(f__$1,ch__$1,meta44301));
});

}

return (new cljs.core.async.t_cljs$core$async44300(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44319 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44319 = (function (f,ch,meta44320){
this.f = f;
this.ch = ch;
this.meta44320 = meta44320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44321,meta44320__$1){
var self__ = this;
var _44321__$1 = this;
return (new cljs.core.async.t_cljs$core$async44319(self__.f,self__.ch,meta44320__$1));
}));

(cljs.core.async.t_cljs$core$async44319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44321){
var self__ = this;
var _44321__$1 = this;
return self__.meta44320;
}));

(cljs.core.async.t_cljs$core$async44319.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44319.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44319.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44320","meta44320",719899373,null)], null);
}));

(cljs.core.async.t_cljs$core$async44319.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44319");

(cljs.core.async.t_cljs$core$async44319.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44319");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44319.
 */
cljs.core.async.__GT_t_cljs$core$async44319 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44319(f__$1,ch__$1,meta44320){
return (new cljs.core.async.t_cljs$core$async44319(f__$1,ch__$1,meta44320));
});

}

return (new cljs.core.async.t_cljs$core$async44319(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44330 = (function (p,ch,meta44331){
this.p = p;
this.ch = ch;
this.meta44331 = meta44331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44332,meta44331__$1){
var self__ = this;
var _44332__$1 = this;
return (new cljs.core.async.t_cljs$core$async44330(self__.p,self__.ch,meta44331__$1));
}));

(cljs.core.async.t_cljs$core$async44330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44332){
var self__ = this;
var _44332__$1 = this;
return self__.meta44331;
}));

(cljs.core.async.t_cljs$core$async44330.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44330.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44330.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44331","meta44331",-986838858,null)], null);
}));

(cljs.core.async.t_cljs$core$async44330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44330");

(cljs.core.async.t_cljs$core$async44330.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44330.
 */
cljs.core.async.__GT_t_cljs$core$async44330 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44330(p__$1,ch__$1,meta44331){
return (new cljs.core.async.t_cljs$core$async44330(p__$1,ch__$1,meta44331));
});

}

return (new cljs.core.async.t_cljs$core$async44330(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__44353 = arguments.length;
switch (G__44353) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42268__auto___45984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_44374){
var state_val_44375 = (state_44374[(1)]);
if((state_val_44375 === (7))){
var inst_44370 = (state_44374[(2)]);
var state_44374__$1 = state_44374;
var statearr_44378_45986 = state_44374__$1;
(statearr_44378_45986[(2)] = inst_44370);

(statearr_44378_45986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44375 === (1))){
var state_44374__$1 = state_44374;
var statearr_44379_45987 = state_44374__$1;
(statearr_44379_45987[(2)] = null);

(statearr_44379_45987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44375 === (4))){
var inst_44356 = (state_44374[(7)]);
var inst_44356__$1 = (state_44374[(2)]);
var inst_44357 = (inst_44356__$1 == null);
var state_44374__$1 = (function (){var statearr_44381 = state_44374;
(statearr_44381[(7)] = inst_44356__$1);

return statearr_44381;
})();
if(cljs.core.truth_(inst_44357)){
var statearr_44382_45988 = state_44374__$1;
(statearr_44382_45988[(1)] = (5));

} else {
var statearr_44383_45989 = state_44374__$1;
(statearr_44383_45989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44375 === (6))){
var inst_44356 = (state_44374[(7)]);
var inst_44361 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44356) : p.call(null,inst_44356));
var state_44374__$1 = state_44374;
if(cljs.core.truth_(inst_44361)){
var statearr_44384_46001 = state_44374__$1;
(statearr_44384_46001[(1)] = (8));

} else {
var statearr_44385_46002 = state_44374__$1;
(statearr_44385_46002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44375 === (3))){
var inst_44372 = (state_44374[(2)]);
var state_44374__$1 = state_44374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44374__$1,inst_44372);
} else {
if((state_val_44375 === (2))){
var state_44374__$1 = state_44374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44374__$1,(4),ch);
} else {
if((state_val_44375 === (11))){
var inst_44364 = (state_44374[(2)]);
var state_44374__$1 = state_44374;
var statearr_44386_46008 = state_44374__$1;
(statearr_44386_46008[(2)] = inst_44364);

(statearr_44386_46008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44375 === (9))){
var state_44374__$1 = state_44374;
var statearr_44387_46009 = state_44374__$1;
(statearr_44387_46009[(2)] = null);

(statearr_44387_46009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44375 === (5))){
var inst_44359 = cljs.core.async.close_BANG_(out);
var state_44374__$1 = state_44374;
var statearr_44388_46010 = state_44374__$1;
(statearr_44388_46010[(2)] = inst_44359);

(statearr_44388_46010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44375 === (10))){
var inst_44367 = (state_44374[(2)]);
var state_44374__$1 = (function (){var statearr_44391 = state_44374;
(statearr_44391[(8)] = inst_44367);

return statearr_44391;
})();
var statearr_44392_46011 = state_44374__$1;
(statearr_44392_46011[(2)] = null);

(statearr_44392_46011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44375 === (8))){
var inst_44356 = (state_44374[(7)]);
var state_44374__$1 = state_44374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44374__$1,(11),out,inst_44356);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42149__auto__ = null;
var cljs$core$async$state_machine__42149__auto____0 = (function (){
var statearr_44394 = [null,null,null,null,null,null,null,null,null];
(statearr_44394[(0)] = cljs$core$async$state_machine__42149__auto__);

(statearr_44394[(1)] = (1));

return statearr_44394;
});
var cljs$core$async$state_machine__42149__auto____1 = (function (state_44374){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_44374);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e44395){var ex__42152__auto__ = e44395;
var statearr_44396_46047 = state_44374;
(statearr_44396_46047[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_44374[(4)]))){
var statearr_44397_46048 = state_44374;
(statearr_44397_46048[(1)] = cljs.core.first((state_44374[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46049 = state_44374;
state_44374 = G__46049;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$state_machine__42149__auto__ = function(state_44374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42149__auto____1.call(this,state_44374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42149__auto____0;
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42149__auto____1;
return cljs$core$async$state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_44399 = f__42269__auto__();
(statearr_44399[(6)] = c__42268__auto___45984);

return statearr_44399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44401 = arguments.length;
switch (G__44401) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__42268__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_44463){
var state_val_44464 = (state_44463[(1)]);
if((state_val_44464 === (7))){
var inst_44459 = (state_44463[(2)]);
var state_44463__$1 = state_44463;
var statearr_44465_46061 = state_44463__$1;
(statearr_44465_46061[(2)] = inst_44459);

(statearr_44465_46061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (20))){
var inst_44429 = (state_44463[(7)]);
var inst_44440 = (state_44463[(2)]);
var inst_44441 = cljs.core.next(inst_44429);
var inst_44415 = inst_44441;
var inst_44416 = null;
var inst_44417 = (0);
var inst_44418 = (0);
var state_44463__$1 = (function (){var statearr_44467 = state_44463;
(statearr_44467[(8)] = inst_44416);

(statearr_44467[(9)] = inst_44417);

(statearr_44467[(10)] = inst_44418);

(statearr_44467[(11)] = inst_44440);

(statearr_44467[(12)] = inst_44415);

return statearr_44467;
})();
var statearr_44473_46073 = state_44463__$1;
(statearr_44473_46073[(2)] = null);

(statearr_44473_46073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (1))){
var state_44463__$1 = state_44463;
var statearr_44474_46079 = state_44463__$1;
(statearr_44474_46079[(2)] = null);

(statearr_44474_46079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (4))){
var inst_44404 = (state_44463[(13)]);
var inst_44404__$1 = (state_44463[(2)]);
var inst_44405 = (inst_44404__$1 == null);
var state_44463__$1 = (function (){var statearr_44475 = state_44463;
(statearr_44475[(13)] = inst_44404__$1);

return statearr_44475;
})();
if(cljs.core.truth_(inst_44405)){
var statearr_44476_46095 = state_44463__$1;
(statearr_44476_46095[(1)] = (5));

} else {
var statearr_44477_46097 = state_44463__$1;
(statearr_44477_46097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (15))){
var state_44463__$1 = state_44463;
var statearr_44481_46103 = state_44463__$1;
(statearr_44481_46103[(2)] = null);

(statearr_44481_46103[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (21))){
var state_44463__$1 = state_44463;
var statearr_44486_46106 = state_44463__$1;
(statearr_44486_46106[(2)] = null);

(statearr_44486_46106[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (13))){
var inst_44416 = (state_44463[(8)]);
var inst_44417 = (state_44463[(9)]);
var inst_44418 = (state_44463[(10)]);
var inst_44415 = (state_44463[(12)]);
var inst_44425 = (state_44463[(2)]);
var inst_44426 = (inst_44418 + (1));
var tmp44478 = inst_44416;
var tmp44479 = inst_44417;
var tmp44480 = inst_44415;
var inst_44415__$1 = tmp44480;
var inst_44416__$1 = tmp44478;
var inst_44417__$1 = tmp44479;
var inst_44418__$1 = inst_44426;
var state_44463__$1 = (function (){var statearr_44511 = state_44463;
(statearr_44511[(8)] = inst_44416__$1);

(statearr_44511[(9)] = inst_44417__$1);

(statearr_44511[(10)] = inst_44418__$1);

(statearr_44511[(14)] = inst_44425);

(statearr_44511[(12)] = inst_44415__$1);

return statearr_44511;
})();
var statearr_44512_46129 = state_44463__$1;
(statearr_44512_46129[(2)] = null);

(statearr_44512_46129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (22))){
var state_44463__$1 = state_44463;
var statearr_44513_46131 = state_44463__$1;
(statearr_44513_46131[(2)] = null);

(statearr_44513_46131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (6))){
var inst_44404 = (state_44463[(13)]);
var inst_44413 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44404) : f.call(null,inst_44404));
var inst_44414 = cljs.core.seq(inst_44413);
var inst_44415 = inst_44414;
var inst_44416 = null;
var inst_44417 = (0);
var inst_44418 = (0);
var state_44463__$1 = (function (){var statearr_44514 = state_44463;
(statearr_44514[(8)] = inst_44416);

(statearr_44514[(9)] = inst_44417);

(statearr_44514[(10)] = inst_44418);

(statearr_44514[(12)] = inst_44415);

return statearr_44514;
})();
var statearr_44515_46144 = state_44463__$1;
(statearr_44515_46144[(2)] = null);

(statearr_44515_46144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (17))){
var inst_44429 = (state_44463[(7)]);
var inst_44433 = cljs.core.chunk_first(inst_44429);
var inst_44434 = cljs.core.chunk_rest(inst_44429);
var inst_44435 = cljs.core.count(inst_44433);
var inst_44415 = inst_44434;
var inst_44416 = inst_44433;
var inst_44417 = inst_44435;
var inst_44418 = (0);
var state_44463__$1 = (function (){var statearr_44516 = state_44463;
(statearr_44516[(8)] = inst_44416);

(statearr_44516[(9)] = inst_44417);

(statearr_44516[(10)] = inst_44418);

(statearr_44516[(12)] = inst_44415);

return statearr_44516;
})();
var statearr_44517_46146 = state_44463__$1;
(statearr_44517_46146[(2)] = null);

(statearr_44517_46146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (3))){
var inst_44461 = (state_44463[(2)]);
var state_44463__$1 = state_44463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44463__$1,inst_44461);
} else {
if((state_val_44464 === (12))){
var inst_44449 = (state_44463[(2)]);
var state_44463__$1 = state_44463;
var statearr_44523_46147 = state_44463__$1;
(statearr_44523_46147[(2)] = inst_44449);

(statearr_44523_46147[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (2))){
var state_44463__$1 = state_44463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44463__$1,(4),in$);
} else {
if((state_val_44464 === (23))){
var inst_44457 = (state_44463[(2)]);
var state_44463__$1 = state_44463;
var statearr_44524_46151 = state_44463__$1;
(statearr_44524_46151[(2)] = inst_44457);

(statearr_44524_46151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (19))){
var inst_44444 = (state_44463[(2)]);
var state_44463__$1 = state_44463;
var statearr_44525_46156 = state_44463__$1;
(statearr_44525_46156[(2)] = inst_44444);

(statearr_44525_46156[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (11))){
var inst_44429 = (state_44463[(7)]);
var inst_44415 = (state_44463[(12)]);
var inst_44429__$1 = cljs.core.seq(inst_44415);
var state_44463__$1 = (function (){var statearr_44527 = state_44463;
(statearr_44527[(7)] = inst_44429__$1);

return statearr_44527;
})();
if(inst_44429__$1){
var statearr_44528_46166 = state_44463__$1;
(statearr_44528_46166[(1)] = (14));

} else {
var statearr_44529_46167 = state_44463__$1;
(statearr_44529_46167[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (9))){
var inst_44451 = (state_44463[(2)]);
var inst_44452 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44463__$1 = (function (){var statearr_44530 = state_44463;
(statearr_44530[(15)] = inst_44451);

return statearr_44530;
})();
if(cljs.core.truth_(inst_44452)){
var statearr_44531_46171 = state_44463__$1;
(statearr_44531_46171[(1)] = (21));

} else {
var statearr_44532_46172 = state_44463__$1;
(statearr_44532_46172[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (5))){
var inst_44407 = cljs.core.async.close_BANG_(out);
var state_44463__$1 = state_44463;
var statearr_44533_46175 = state_44463__$1;
(statearr_44533_46175[(2)] = inst_44407);

(statearr_44533_46175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (14))){
var inst_44429 = (state_44463[(7)]);
var inst_44431 = cljs.core.chunked_seq_QMARK_(inst_44429);
var state_44463__$1 = state_44463;
if(inst_44431){
var statearr_44534_46176 = state_44463__$1;
(statearr_44534_46176[(1)] = (17));

} else {
var statearr_44535_46177 = state_44463__$1;
(statearr_44535_46177[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (16))){
var inst_44447 = (state_44463[(2)]);
var state_44463__$1 = state_44463;
var statearr_44536_46178 = state_44463__$1;
(statearr_44536_46178[(2)] = inst_44447);

(statearr_44536_46178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (10))){
var inst_44416 = (state_44463[(8)]);
var inst_44418 = (state_44463[(10)]);
var inst_44423 = cljs.core._nth(inst_44416,inst_44418);
var state_44463__$1 = state_44463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44463__$1,(13),out,inst_44423);
} else {
if((state_val_44464 === (18))){
var inst_44429 = (state_44463[(7)]);
var inst_44438 = cljs.core.first(inst_44429);
var state_44463__$1 = state_44463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44463__$1,(20),out,inst_44438);
} else {
if((state_val_44464 === (8))){
var inst_44417 = (state_44463[(9)]);
var inst_44418 = (state_44463[(10)]);
var inst_44420 = (inst_44418 < inst_44417);
var inst_44421 = inst_44420;
var state_44463__$1 = state_44463;
if(cljs.core.truth_(inst_44421)){
var statearr_44537_46189 = state_44463__$1;
(statearr_44537_46189[(1)] = (10));

} else {
var statearr_44538_46190 = state_44463__$1;
(statearr_44538_46190[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__42149__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42149__auto____0 = (function (){
var statearr_44539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44539[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42149__auto__);

(statearr_44539[(1)] = (1));

return statearr_44539;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42149__auto____1 = (function (state_44463){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_44463);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e44544){var ex__42152__auto__ = e44544;
var statearr_44545_46204 = state_44463;
(statearr_44545_46204[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_44463[(4)]))){
var statearr_44546_46209 = state_44463;
(statearr_44546_46209[(1)] = cljs.core.first((state_44463[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46210 = state_44463;
state_44463 = G__46210;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42149__auto__ = function(state_44463){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42149__auto____1.call(this,state_44463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42149__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42149__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_44555 = f__42269__auto__();
(statearr_44555[(6)] = c__42268__auto__);

return statearr_44555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));

return c__42268__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44557 = arguments.length;
switch (G__44557) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__44561 = arguments.length;
switch (G__44561) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__44566 = arguments.length;
switch (G__44566) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42268__auto___46240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_44594){
var state_val_44595 = (state_44594[(1)]);
if((state_val_44595 === (7))){
var inst_44587 = (state_44594[(2)]);
var state_44594__$1 = state_44594;
var statearr_44597_46241 = state_44594__$1;
(statearr_44597_46241[(2)] = inst_44587);

(statearr_44597_46241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44595 === (1))){
var inst_44567 = null;
var state_44594__$1 = (function (){var statearr_44598 = state_44594;
(statearr_44598[(7)] = inst_44567);

return statearr_44598;
})();
var statearr_44602_46242 = state_44594__$1;
(statearr_44602_46242[(2)] = null);

(statearr_44602_46242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44595 === (4))){
var inst_44572 = (state_44594[(8)]);
var inst_44572__$1 = (state_44594[(2)]);
var inst_44573 = (inst_44572__$1 == null);
var inst_44574 = cljs.core.not(inst_44573);
var state_44594__$1 = (function (){var statearr_44603 = state_44594;
(statearr_44603[(8)] = inst_44572__$1);

return statearr_44603;
})();
if(inst_44574){
var statearr_44604_46243 = state_44594__$1;
(statearr_44604_46243[(1)] = (5));

} else {
var statearr_44605_46244 = state_44594__$1;
(statearr_44605_46244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44595 === (6))){
var state_44594__$1 = state_44594;
var statearr_44610_46249 = state_44594__$1;
(statearr_44610_46249[(2)] = null);

(statearr_44610_46249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44595 === (3))){
var inst_44591 = (state_44594[(2)]);
var inst_44592 = cljs.core.async.close_BANG_(out);
var state_44594__$1 = (function (){var statearr_44615 = state_44594;
(statearr_44615[(9)] = inst_44591);

return statearr_44615;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44594__$1,inst_44592);
} else {
if((state_val_44595 === (2))){
var state_44594__$1 = state_44594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44594__$1,(4),ch);
} else {
if((state_val_44595 === (11))){
var inst_44572 = (state_44594[(8)]);
var inst_44581 = (state_44594[(2)]);
var inst_44567 = inst_44572;
var state_44594__$1 = (function (){var statearr_44618 = state_44594;
(statearr_44618[(7)] = inst_44567);

(statearr_44618[(10)] = inst_44581);

return statearr_44618;
})();
var statearr_44619_46262 = state_44594__$1;
(statearr_44619_46262[(2)] = null);

(statearr_44619_46262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44595 === (9))){
var inst_44572 = (state_44594[(8)]);
var state_44594__$1 = state_44594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44594__$1,(11),out,inst_44572);
} else {
if((state_val_44595 === (5))){
var inst_44567 = (state_44594[(7)]);
var inst_44572 = (state_44594[(8)]);
var inst_44576 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44572,inst_44567);
var state_44594__$1 = state_44594;
if(inst_44576){
var statearr_44621_46264 = state_44594__$1;
(statearr_44621_46264[(1)] = (8));

} else {
var statearr_44624_46265 = state_44594__$1;
(statearr_44624_46265[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44595 === (10))){
var inst_44584 = (state_44594[(2)]);
var state_44594__$1 = state_44594;
var statearr_44629_46266 = state_44594__$1;
(statearr_44629_46266[(2)] = inst_44584);

(statearr_44629_46266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44595 === (8))){
var inst_44567 = (state_44594[(7)]);
var tmp44620 = inst_44567;
var inst_44567__$1 = tmp44620;
var state_44594__$1 = (function (){var statearr_44630 = state_44594;
(statearr_44630[(7)] = inst_44567__$1);

return statearr_44630;
})();
var statearr_44631_46267 = state_44594__$1;
(statearr_44631_46267[(2)] = null);

(statearr_44631_46267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42149__auto__ = null;
var cljs$core$async$state_machine__42149__auto____0 = (function (){
var statearr_44634 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44634[(0)] = cljs$core$async$state_machine__42149__auto__);

(statearr_44634[(1)] = (1));

return statearr_44634;
});
var cljs$core$async$state_machine__42149__auto____1 = (function (state_44594){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_44594);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e44635){var ex__42152__auto__ = e44635;
var statearr_44636_46268 = state_44594;
(statearr_44636_46268[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_44594[(4)]))){
var statearr_44637_46269 = state_44594;
(statearr_44637_46269[(1)] = cljs.core.first((state_44594[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46270 = state_44594;
state_44594 = G__46270;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$state_machine__42149__auto__ = function(state_44594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42149__auto____1.call(this,state_44594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42149__auto____0;
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42149__auto____1;
return cljs$core$async$state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_44638 = f__42269__auto__();
(statearr_44638[(6)] = c__42268__auto___46240);

return statearr_44638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44640 = arguments.length;
switch (G__44640) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42268__auto___46276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_44678){
var state_val_44679 = (state_44678[(1)]);
if((state_val_44679 === (7))){
var inst_44674 = (state_44678[(2)]);
var state_44678__$1 = state_44678;
var statearr_44680_46277 = state_44678__$1;
(statearr_44680_46277[(2)] = inst_44674);

(statearr_44680_46277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (1))){
var inst_44641 = (new Array(n));
var inst_44642 = inst_44641;
var inst_44643 = (0);
var state_44678__$1 = (function (){var statearr_44681 = state_44678;
(statearr_44681[(7)] = inst_44642);

(statearr_44681[(8)] = inst_44643);

return statearr_44681;
})();
var statearr_44682_46278 = state_44678__$1;
(statearr_44682_46278[(2)] = null);

(statearr_44682_46278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (4))){
var inst_44646 = (state_44678[(9)]);
var inst_44646__$1 = (state_44678[(2)]);
var inst_44647 = (inst_44646__$1 == null);
var inst_44648 = cljs.core.not(inst_44647);
var state_44678__$1 = (function (){var statearr_44683 = state_44678;
(statearr_44683[(9)] = inst_44646__$1);

return statearr_44683;
})();
if(inst_44648){
var statearr_44684_46282 = state_44678__$1;
(statearr_44684_46282[(1)] = (5));

} else {
var statearr_44685_46283 = state_44678__$1;
(statearr_44685_46283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (15))){
var inst_44668 = (state_44678[(2)]);
var state_44678__$1 = state_44678;
var statearr_44686_46284 = state_44678__$1;
(statearr_44686_46284[(2)] = inst_44668);

(statearr_44686_46284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (13))){
var state_44678__$1 = state_44678;
var statearr_44687_46285 = state_44678__$1;
(statearr_44687_46285[(2)] = null);

(statearr_44687_46285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (6))){
var inst_44643 = (state_44678[(8)]);
var inst_44664 = (inst_44643 > (0));
var state_44678__$1 = state_44678;
if(cljs.core.truth_(inst_44664)){
var statearr_44688_46286 = state_44678__$1;
(statearr_44688_46286[(1)] = (12));

} else {
var statearr_44689_46287 = state_44678__$1;
(statearr_44689_46287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (3))){
var inst_44676 = (state_44678[(2)]);
var state_44678__$1 = state_44678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44678__$1,inst_44676);
} else {
if((state_val_44679 === (12))){
var inst_44642 = (state_44678[(7)]);
var inst_44666 = cljs.core.vec(inst_44642);
var state_44678__$1 = state_44678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44678__$1,(15),out,inst_44666);
} else {
if((state_val_44679 === (2))){
var state_44678__$1 = state_44678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44678__$1,(4),ch);
} else {
if((state_val_44679 === (11))){
var inst_44658 = (state_44678[(2)]);
var inst_44659 = (new Array(n));
var inst_44642 = inst_44659;
var inst_44643 = (0);
var state_44678__$1 = (function (){var statearr_44690 = state_44678;
(statearr_44690[(7)] = inst_44642);

(statearr_44690[(10)] = inst_44658);

(statearr_44690[(8)] = inst_44643);

return statearr_44690;
})();
var statearr_44691_46288 = state_44678__$1;
(statearr_44691_46288[(2)] = null);

(statearr_44691_46288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (9))){
var inst_44642 = (state_44678[(7)]);
var inst_44656 = cljs.core.vec(inst_44642);
var state_44678__$1 = state_44678;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44678__$1,(11),out,inst_44656);
} else {
if((state_val_44679 === (5))){
var inst_44651 = (state_44678[(11)]);
var inst_44642 = (state_44678[(7)]);
var inst_44646 = (state_44678[(9)]);
var inst_44643 = (state_44678[(8)]);
var inst_44650 = (inst_44642[inst_44643] = inst_44646);
var inst_44651__$1 = (inst_44643 + (1));
var inst_44652 = (inst_44651__$1 < n);
var state_44678__$1 = (function (){var statearr_44692 = state_44678;
(statearr_44692[(11)] = inst_44651__$1);

(statearr_44692[(12)] = inst_44650);

return statearr_44692;
})();
if(cljs.core.truth_(inst_44652)){
var statearr_44693_46293 = state_44678__$1;
(statearr_44693_46293[(1)] = (8));

} else {
var statearr_44694_46294 = state_44678__$1;
(statearr_44694_46294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (14))){
var inst_44671 = (state_44678[(2)]);
var inst_44672 = cljs.core.async.close_BANG_(out);
var state_44678__$1 = (function (){var statearr_44696 = state_44678;
(statearr_44696[(13)] = inst_44671);

return statearr_44696;
})();
var statearr_44699_46295 = state_44678__$1;
(statearr_44699_46295[(2)] = inst_44672);

(statearr_44699_46295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (10))){
var inst_44662 = (state_44678[(2)]);
var state_44678__$1 = state_44678;
var statearr_44701_46296 = state_44678__$1;
(statearr_44701_46296[(2)] = inst_44662);

(statearr_44701_46296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44679 === (8))){
var inst_44651 = (state_44678[(11)]);
var inst_44642 = (state_44678[(7)]);
var tmp44695 = inst_44642;
var inst_44642__$1 = tmp44695;
var inst_44643 = inst_44651;
var state_44678__$1 = (function (){var statearr_44702 = state_44678;
(statearr_44702[(7)] = inst_44642__$1);

(statearr_44702[(8)] = inst_44643);

return statearr_44702;
})();
var statearr_44703_46297 = state_44678__$1;
(statearr_44703_46297[(2)] = null);

(statearr_44703_46297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42149__auto__ = null;
var cljs$core$async$state_machine__42149__auto____0 = (function (){
var statearr_44707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44707[(0)] = cljs$core$async$state_machine__42149__auto__);

(statearr_44707[(1)] = (1));

return statearr_44707;
});
var cljs$core$async$state_machine__42149__auto____1 = (function (state_44678){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_44678);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e44708){var ex__42152__auto__ = e44708;
var statearr_44709_46301 = state_44678;
(statearr_44709_46301[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_44678[(4)]))){
var statearr_44711_46302 = state_44678;
(statearr_44711_46302[(1)] = cljs.core.first((state_44678[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46303 = state_44678;
state_44678 = G__46303;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$state_machine__42149__auto__ = function(state_44678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42149__auto____1.call(this,state_44678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42149__auto____0;
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42149__auto____1;
return cljs$core$async$state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_44714 = f__42269__auto__();
(statearr_44714[(6)] = c__42268__auto___46276);

return statearr_44714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44729 = arguments.length;
switch (G__44729) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__42268__auto___46305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_44776){
var state_val_44777 = (state_44776[(1)]);
if((state_val_44777 === (7))){
var inst_44772 = (state_44776[(2)]);
var state_44776__$1 = state_44776;
var statearr_44778_46306 = state_44776__$1;
(statearr_44778_46306[(2)] = inst_44772);

(statearr_44778_46306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44777 === (1))){
var inst_44733 = [];
var inst_44734 = inst_44733;
var inst_44735 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44776__$1 = (function (){var statearr_44779 = state_44776;
(statearr_44779[(7)] = inst_44735);

(statearr_44779[(8)] = inst_44734);

return statearr_44779;
})();
var statearr_44780_46307 = state_44776__$1;
(statearr_44780_46307[(2)] = null);

(statearr_44780_46307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44777 === (4))){
var inst_44739 = (state_44776[(9)]);
var inst_44739__$1 = (state_44776[(2)]);
var inst_44740 = (inst_44739__$1 == null);
var inst_44741 = cljs.core.not(inst_44740);
var state_44776__$1 = (function (){var statearr_44781 = state_44776;
(statearr_44781[(9)] = inst_44739__$1);

return statearr_44781;
})();
if(inst_44741){
var statearr_44782_46308 = state_44776__$1;
(statearr_44782_46308[(1)] = (5));

} else {
var statearr_44783_46309 = state_44776__$1;
(statearr_44783_46309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44777 === (15))){
var inst_44766 = (state_44776[(2)]);
var state_44776__$1 = state_44776;
var statearr_44784_46314 = state_44776__$1;
(statearr_44784_46314[(2)] = inst_44766);

(statearr_44784_46314[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44777 === (13))){
var state_44776__$1 = state_44776;
var statearr_44785_46315 = state_44776__$1;
(statearr_44785_46315[(2)] = null);

(statearr_44785_46315[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44777 === (6))){
var inst_44734 = (state_44776[(8)]);
var inst_44761 = inst_44734.length;
var inst_44762 = (inst_44761 > (0));
var state_44776__$1 = state_44776;
if(cljs.core.truth_(inst_44762)){
var statearr_44786_46316 = state_44776__$1;
(statearr_44786_46316[(1)] = (12));

} else {
var statearr_44787_46317 = state_44776__$1;
(statearr_44787_46317[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44777 === (3))){
var inst_44774 = (state_44776[(2)]);
var state_44776__$1 = state_44776;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44776__$1,inst_44774);
} else {
if((state_val_44777 === (12))){
var inst_44734 = (state_44776[(8)]);
var inst_44764 = cljs.core.vec(inst_44734);
var state_44776__$1 = state_44776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44776__$1,(15),out,inst_44764);
} else {
if((state_val_44777 === (2))){
var state_44776__$1 = state_44776;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44776__$1,(4),ch);
} else {
if((state_val_44777 === (11))){
var inst_44743 = (state_44776[(10)]);
var inst_44739 = (state_44776[(9)]);
var inst_44754 = (state_44776[(2)]);
var inst_44755 = [];
var inst_44756 = inst_44755.push(inst_44739);
var inst_44734 = inst_44755;
var inst_44735 = inst_44743;
var state_44776__$1 = (function (){var statearr_44789 = state_44776;
(statearr_44789[(11)] = inst_44756);

(statearr_44789[(12)] = inst_44754);

(statearr_44789[(7)] = inst_44735);

(statearr_44789[(8)] = inst_44734);

return statearr_44789;
})();
var statearr_44790_46321 = state_44776__$1;
(statearr_44790_46321[(2)] = null);

(statearr_44790_46321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44777 === (9))){
var inst_44734 = (state_44776[(8)]);
var inst_44752 = cljs.core.vec(inst_44734);
var state_44776__$1 = state_44776;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44776__$1,(11),out,inst_44752);
} else {
if((state_val_44777 === (5))){
var inst_44743 = (state_44776[(10)]);
var inst_44735 = (state_44776[(7)]);
var inst_44739 = (state_44776[(9)]);
var inst_44743__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44739) : f.call(null,inst_44739));
var inst_44745 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44743__$1,inst_44735);
var inst_44746 = cljs.core.keyword_identical_QMARK_(inst_44735,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44747 = ((inst_44745) || (inst_44746));
var state_44776__$1 = (function (){var statearr_44792 = state_44776;
(statearr_44792[(10)] = inst_44743__$1);

return statearr_44792;
})();
if(cljs.core.truth_(inst_44747)){
var statearr_44793_46331 = state_44776__$1;
(statearr_44793_46331[(1)] = (8));

} else {
var statearr_44794_46332 = state_44776__$1;
(statearr_44794_46332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44777 === (14))){
var inst_44769 = (state_44776[(2)]);
var inst_44770 = cljs.core.async.close_BANG_(out);
var state_44776__$1 = (function (){var statearr_44796 = state_44776;
(statearr_44796[(13)] = inst_44769);

return statearr_44796;
})();
var statearr_44797_46333 = state_44776__$1;
(statearr_44797_46333[(2)] = inst_44770);

(statearr_44797_46333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44777 === (10))){
var inst_44759 = (state_44776[(2)]);
var state_44776__$1 = state_44776;
var statearr_44798_46334 = state_44776__$1;
(statearr_44798_46334[(2)] = inst_44759);

(statearr_44798_46334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44777 === (8))){
var inst_44743 = (state_44776[(10)]);
var inst_44739 = (state_44776[(9)]);
var inst_44734 = (state_44776[(8)]);
var inst_44749 = inst_44734.push(inst_44739);
var tmp44795 = inst_44734;
var inst_44734__$1 = tmp44795;
var inst_44735 = inst_44743;
var state_44776__$1 = (function (){var statearr_44799 = state_44776;
(statearr_44799[(14)] = inst_44749);

(statearr_44799[(7)] = inst_44735);

(statearr_44799[(8)] = inst_44734__$1);

return statearr_44799;
})();
var statearr_44800_46342 = state_44776__$1;
(statearr_44800_46342[(2)] = null);

(statearr_44800_46342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__42149__auto__ = null;
var cljs$core$async$state_machine__42149__auto____0 = (function (){
var statearr_44801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44801[(0)] = cljs$core$async$state_machine__42149__auto__);

(statearr_44801[(1)] = (1));

return statearr_44801;
});
var cljs$core$async$state_machine__42149__auto____1 = (function (state_44776){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_44776);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e44802){var ex__42152__auto__ = e44802;
var statearr_44803_46360 = state_44776;
(statearr_44803_46360[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_44776[(4)]))){
var statearr_44804_46361 = state_44776;
(statearr_44804_46361[(1)] = cljs.core.first((state_44776[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46362 = state_44776;
state_44776 = G__46362;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
cljs$core$async$state_machine__42149__auto__ = function(state_44776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42149__auto____1.call(this,state_44776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42149__auto____0;
cljs$core$async$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42149__auto____1;
return cljs$core$async$state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_44805 = f__42269__auto__();
(statearr_44805[(6)] = c__42268__auto___46305);

return statearr_44805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
