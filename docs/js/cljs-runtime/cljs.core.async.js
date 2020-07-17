goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31831 = arguments.length;
switch (G__31831) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31836 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31836 = (function (f,blockable,meta31837){
this.f = f;
this.blockable = blockable;
this.meta31837 = meta31837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31838,meta31837__$1){
var self__ = this;
var _31838__$1 = this;
return (new cljs.core.async.t_cljs$core$async31836(self__.f,self__.blockable,meta31837__$1));
}));

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31838){
var self__ = this;
var _31838__$1 = this;
return self__.meta31837;
}));

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31836.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31836.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31837","meta31837",404994191,null)], null);
}));

(cljs.core.async.t_cljs$core$async31836.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31836");

(cljs.core.async.t_cljs$core$async31836.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31836");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31836.
 */
cljs.core.async.__GT_t_cljs$core$async31836 = (function cljs$core$async$__GT_t_cljs$core$async31836(f__$1,blockable__$1,meta31837){
return (new cljs.core.async.t_cljs$core$async31836(f__$1,blockable__$1,meta31837));
});

}

return (new cljs.core.async.t_cljs$core$async31836(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31869 = arguments.length;
switch (G__31869) {
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
var G__31876 = arguments.length;
switch (G__31876) {
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
var G__31892 = arguments.length;
switch (G__31892) {
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
var val_34534 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34534) : fn1.call(null,val_34534));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34534) : fn1.call(null,val_34534));
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
var G__31909 = arguments.length;
switch (G__31909) {
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
var n__4613__auto___34545 = n;
var x_34546 = (0);
while(true){
if((x_34546 < n__4613__auto___34545)){
(a[x_34546] = x_34546);

var G__34547 = (x_34546 + (1));
x_34546 = G__34547;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31936 = (function (flag,meta31937){
this.flag = flag;
this.meta31937 = meta31937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31938,meta31937__$1){
var self__ = this;
var _31938__$1 = this;
return (new cljs.core.async.t_cljs$core$async31936(self__.flag,meta31937__$1));
}));

(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31938){
var self__ = this;
var _31938__$1 = this;
return self__.meta31937;
}));

(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31936.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31937","meta31937",391974294,null)], null);
}));

(cljs.core.async.t_cljs$core$async31936.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31936");

(cljs.core.async.t_cljs$core$async31936.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31936");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31936.
 */
cljs.core.async.__GT_t_cljs$core$async31936 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31936(flag__$1,meta31937){
return (new cljs.core.async.t_cljs$core$async31936(flag__$1,meta31937));
});

}

return (new cljs.core.async.t_cljs$core$async31936(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31952 = (function (flag,cb,meta31953){
this.flag = flag;
this.cb = cb;
this.meta31953 = meta31953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31954,meta31953__$1){
var self__ = this;
var _31954__$1 = this;
return (new cljs.core.async.t_cljs$core$async31952(self__.flag,self__.cb,meta31953__$1));
}));

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31954){
var self__ = this;
var _31954__$1 = this;
return self__.meta31953;
}));

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31953","meta31953",1151916088,null)], null);
}));

(cljs.core.async.t_cljs$core$async31952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31952");

(cljs.core.async.t_cljs$core$async31952.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async31952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31952.
 */
cljs.core.async.__GT_t_cljs$core$async31952 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31952(flag__$1,cb__$1,meta31953){
return (new cljs.core.async.t_cljs$core$async31952(flag__$1,cb__$1,meta31953));
});

}

return (new cljs.core.async.t_cljs$core$async31952(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31968_SHARP_){
var G__31972 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31968_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31972) : fret.call(null,G__31972));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31969_SHARP_){
var G__31975 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31969_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31975) : fret.call(null,G__31975));
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
var G__34571 = (i + (1));
i = G__34571;
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
var len__4736__auto___34576 = arguments.length;
var i__4737__auto___34577 = (0);
while(true){
if((i__4737__auto___34577 < len__4736__auto___34576)){
args__4742__auto__.push((arguments[i__4737__auto___34577]));

var G__34578 = (i__4737__auto___34577 + (1));
i__4737__auto___34577 = G__34578;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31992){
var map__31993 = p__31992;
var map__31993__$1 = (((((!((map__31993 == null))))?(((((map__31993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31993):map__31993);
var opts = map__31993__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31981){
var G__31986 = cljs.core.first(seq31981);
var seq31981__$1 = cljs.core.next(seq31981);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31986,seq31981__$1);
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
var G__32008 = arguments.length;
switch (G__32008) {
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
var c__31712__auto___34591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_32062){
var state_val_32064 = (state_32062[(1)]);
if((state_val_32064 === (7))){
var inst_32054 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32076_34592 = state_32062__$1;
(statearr_32076_34592[(2)] = inst_32054);

(statearr_32076_34592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (1))){
var state_32062__$1 = state_32062;
var statearr_32078_34598 = state_32062__$1;
(statearr_32078_34598[(2)] = null);

(statearr_32078_34598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (4))){
var inst_32029 = (state_32062[(7)]);
var inst_32029__$1 = (state_32062[(2)]);
var inst_32034 = (inst_32029__$1 == null);
var state_32062__$1 = (function (){var statearr_32081 = state_32062;
(statearr_32081[(7)] = inst_32029__$1);

return statearr_32081;
})();
if(cljs.core.truth_(inst_32034)){
var statearr_32082_34625 = state_32062__$1;
(statearr_32082_34625[(1)] = (5));

} else {
var statearr_32083_34626 = state_32062__$1;
(statearr_32083_34626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (13))){
var state_32062__$1 = state_32062;
var statearr_32085_34628 = state_32062__$1;
(statearr_32085_34628[(2)] = null);

(statearr_32085_34628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (6))){
var inst_32029 = (state_32062[(7)]);
var state_32062__$1 = state_32062;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32062__$1,(11),to,inst_32029);
} else {
if((state_val_32064 === (3))){
var inst_32057 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32062__$1,inst_32057);
} else {
if((state_val_32064 === (12))){
var state_32062__$1 = state_32062;
var statearr_32090_34630 = state_32062__$1;
(statearr_32090_34630[(2)] = null);

(statearr_32090_34630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (2))){
var state_32062__$1 = state_32062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32062__$1,(4),from);
} else {
if((state_val_32064 === (11))){
var inst_32046 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
if(cljs.core.truth_(inst_32046)){
var statearr_32094_34632 = state_32062__$1;
(statearr_32094_34632[(1)] = (12));

} else {
var statearr_32101_34633 = state_32062__$1;
(statearr_32101_34633[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (9))){
var state_32062__$1 = state_32062;
var statearr_32102_34634 = state_32062__$1;
(statearr_32102_34634[(2)] = null);

(statearr_32102_34634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (5))){
var state_32062__$1 = state_32062;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32104_34635 = state_32062__$1;
(statearr_32104_34635[(1)] = (8));

} else {
var statearr_32105_34636 = state_32062__$1;
(statearr_32105_34636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (14))){
var inst_32052 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32110_34637 = state_32062__$1;
(statearr_32110_34637[(2)] = inst_32052);

(statearr_32110_34637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (10))){
var inst_32041 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32112_34638 = state_32062__$1;
(statearr_32112_34638[(2)] = inst_32041);

(statearr_32112_34638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (8))){
var inst_32038 = cljs.core.async.close_BANG_(to);
var state_32062__$1 = state_32062;
var statearr_32113_34639 = state_32062__$1;
(statearr_32113_34639[(2)] = inst_32038);

(statearr_32113_34639[(1)] = (10));


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
var cljs$core$async$state_machine__31564__auto__ = null;
var cljs$core$async$state_machine__31564__auto____0 = (function (){
var statearr_32114 = [null,null,null,null,null,null,null,null];
(statearr_32114[(0)] = cljs$core$async$state_machine__31564__auto__);

(statearr_32114[(1)] = (1));

return statearr_32114;
});
var cljs$core$async$state_machine__31564__auto____1 = (function (state_32062){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_32062);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e32115){var ex__31567__auto__ = e32115;
var statearr_32116_34645 = state_32062;
(statearr_32116_34645[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_32062[(4)]))){
var statearr_32117_34647 = state_32062;
(statearr_32117_34647[(1)] = cljs.core.first((state_32062[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34649 = state_32062;
state_32062 = G__34649;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$state_machine__31564__auto__ = function(state_32062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31564__auto____1.call(this,state_32062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31564__auto____0;
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31564__auto____1;
return cljs$core$async$state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_32120 = f__31714__auto__();
(statearr_32120[(6)] = c__31712__auto___34591);

return statearr_32120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
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
var process = (function (p__32127){
var vec__32128 = p__32127;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32128,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32128,(1),null);
var job = vec__32128;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31712__auto___34650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_32137){
var state_val_32138 = (state_32137[(1)]);
if((state_val_32138 === (1))){
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32137__$1,(2),res,v);
} else {
if((state_val_32138 === (2))){
var inst_32133 = (state_32137[(2)]);
var inst_32135 = cljs.core.async.close_BANG_(res);
var state_32137__$1 = (function (){var statearr_32145 = state_32137;
(statearr_32145[(7)] = inst_32133);

return statearr_32145;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32137__$1,inst_32135);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0 = (function (){
var statearr_32146 = [null,null,null,null,null,null,null,null];
(statearr_32146[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__);

(statearr_32146[(1)] = (1));

return statearr_32146;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1 = (function (state_32137){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_32137);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e32147){var ex__31567__auto__ = e32147;
var statearr_32148_34651 = state_32137;
(statearr_32148_34651[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_32137[(4)]))){
var statearr_32149_34652 = state_32137;
(statearr_32149_34652[(1)] = cljs.core.first((state_32137[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34653 = state_32137;
state_32137 = G__34653;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__ = function(state_32137){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1.call(this,state_32137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_32150 = f__31714__auto__();
(statearr_32150[(6)] = c__31712__auto___34650);

return statearr_32150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32152){
var vec__32163 = p__32152;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32163,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32163,(1),null);
var job = vec__32163;
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
var n__4613__auto___34654 = n;
var __34655 = (0);
while(true){
if((__34655 < n__4613__auto___34654)){
var G__32166_34656 = type;
var G__32166_34657__$1 = (((G__32166_34656 instanceof cljs.core.Keyword))?G__32166_34656.fqn:null);
switch (G__32166_34657__$1) {
case "compute":
var c__31712__auto___34659 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34655,c__31712__auto___34659,G__32166_34656,G__32166_34657__$1,n__4613__auto___34654,jobs,results,process,async){
return (function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = ((function (__34655,c__31712__auto___34659,G__32166_34656,G__32166_34657__$1,n__4613__auto___34654,jobs,results,process,async){
return (function (state_32183){
var state_val_32184 = (state_32183[(1)]);
if((state_val_32184 === (1))){
var state_32183__$1 = state_32183;
var statearr_32186_34662 = state_32183__$1;
(statearr_32186_34662[(2)] = null);

(statearr_32186_34662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (2))){
var state_32183__$1 = state_32183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32183__$1,(4),jobs);
} else {
if((state_val_32184 === (3))){
var inst_32181 = (state_32183[(2)]);
var state_32183__$1 = state_32183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32183__$1,inst_32181);
} else {
if((state_val_32184 === (4))){
var inst_32173 = (state_32183[(2)]);
var inst_32174 = process(inst_32173);
var state_32183__$1 = state_32183;
if(cljs.core.truth_(inst_32174)){
var statearr_32191_34664 = state_32183__$1;
(statearr_32191_34664[(1)] = (5));

} else {
var statearr_32192_34681 = state_32183__$1;
(statearr_32192_34681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (5))){
var state_32183__$1 = state_32183;
var statearr_32193_34682 = state_32183__$1;
(statearr_32193_34682[(2)] = null);

(statearr_32193_34682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (6))){
var state_32183__$1 = state_32183;
var statearr_32198_34686 = state_32183__$1;
(statearr_32198_34686[(2)] = null);

(statearr_32198_34686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32184 === (7))){
var inst_32179 = (state_32183[(2)]);
var state_32183__$1 = state_32183;
var statearr_32199_34687 = state_32183__$1;
(statearr_32199_34687[(2)] = inst_32179);

(statearr_32199_34687[(1)] = (3));


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
});})(__34655,c__31712__auto___34659,G__32166_34656,G__32166_34657__$1,n__4613__auto___34654,jobs,results,process,async))
;
return ((function (__34655,switch__31563__auto__,c__31712__auto___34659,G__32166_34656,G__32166_34657__$1,n__4613__auto___34654,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0 = (function (){
var statearr_32205 = [null,null,null,null,null,null,null];
(statearr_32205[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__);

(statearr_32205[(1)] = (1));

return statearr_32205;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1 = (function (state_32183){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_32183);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e32207){var ex__31567__auto__ = e32207;
var statearr_32212_34695 = state_32183;
(statearr_32212_34695[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_32183[(4)]))){
var statearr_32213_34696 = state_32183;
(statearr_32213_34696[(1)] = cljs.core.first((state_32183[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34697 = state_32183;
state_32183 = G__34697;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__ = function(state_32183){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1.call(this,state_32183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__;
})()
;})(__34655,switch__31563__auto__,c__31712__auto___34659,G__32166_34656,G__32166_34657__$1,n__4613__auto___34654,jobs,results,process,async))
})();
var state__31715__auto__ = (function (){var statearr_32216 = f__31714__auto__();
(statearr_32216[(6)] = c__31712__auto___34659);

return statearr_32216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
});})(__34655,c__31712__auto___34659,G__32166_34656,G__32166_34657__$1,n__4613__auto___34654,jobs,results,process,async))
);


break;
case "async":
var c__31712__auto___34702 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34655,c__31712__auto___34702,G__32166_34656,G__32166_34657__$1,n__4613__auto___34654,jobs,results,process,async){
return (function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = ((function (__34655,c__31712__auto___34702,G__32166_34656,G__32166_34657__$1,n__4613__auto___34654,jobs,results,process,async){
return (function (state_32230){
var state_val_32231 = (state_32230[(1)]);
if((state_val_32231 === (1))){
var state_32230__$1 = state_32230;
var statearr_32233_34706 = state_32230__$1;
(statearr_32233_34706[(2)] = null);

(statearr_32233_34706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32231 === (2))){
var state_32230__$1 = state_32230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32230__$1,(4),jobs);
} else {
if((state_val_32231 === (3))){
var inst_32228 = (state_32230[(2)]);
var state_32230__$1 = state_32230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32230__$1,inst_32228);
} else {
if((state_val_32231 === (4))){
var inst_32220 = (state_32230[(2)]);
var inst_32221 = async(inst_32220);
var state_32230__$1 = state_32230;
if(cljs.core.truth_(inst_32221)){
var statearr_32238_34710 = state_32230__$1;
(statearr_32238_34710[(1)] = (5));

} else {
var statearr_32239_34711 = state_32230__$1;
(statearr_32239_34711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32231 === (5))){
var state_32230__$1 = state_32230;
var statearr_32240_34715 = state_32230__$1;
(statearr_32240_34715[(2)] = null);

(statearr_32240_34715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32231 === (6))){
var state_32230__$1 = state_32230;
var statearr_32241_34716 = state_32230__$1;
(statearr_32241_34716[(2)] = null);

(statearr_32241_34716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32231 === (7))){
var inst_32226 = (state_32230[(2)]);
var state_32230__$1 = state_32230;
var statearr_32243_34719 = state_32230__$1;
(statearr_32243_34719[(2)] = inst_32226);

(statearr_32243_34719[(1)] = (3));


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
});})(__34655,c__31712__auto___34702,G__32166_34656,G__32166_34657__$1,n__4613__auto___34654,jobs,results,process,async))
;
return ((function (__34655,switch__31563__auto__,c__31712__auto___34702,G__32166_34656,G__32166_34657__$1,n__4613__auto___34654,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0 = (function (){
var statearr_32244 = [null,null,null,null,null,null,null];
(statearr_32244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__);

(statearr_32244[(1)] = (1));

return statearr_32244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1 = (function (state_32230){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_32230);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e32247){var ex__31567__auto__ = e32247;
var statearr_32248_34725 = state_32230;
(statearr_32248_34725[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_32230[(4)]))){
var statearr_32249_34727 = state_32230;
(statearr_32249_34727[(1)] = cljs.core.first((state_32230[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34731 = state_32230;
state_32230 = G__34731;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__ = function(state_32230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1.call(this,state_32230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__;
})()
;})(__34655,switch__31563__auto__,c__31712__auto___34702,G__32166_34656,G__32166_34657__$1,n__4613__auto___34654,jobs,results,process,async))
})();
var state__31715__auto__ = (function (){var statearr_32250 = f__31714__auto__();
(statearr_32250[(6)] = c__31712__auto___34702);

return statearr_32250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
});})(__34655,c__31712__auto___34702,G__32166_34656,G__32166_34657__$1,n__4613__auto___34654,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32166_34657__$1)].join('')));

}

var G__34733 = (__34655 + (1));
__34655 = G__34733;
continue;
} else {
}
break;
}

var c__31712__auto___34735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_32289){
var state_val_32290 = (state_32289[(1)]);
if((state_val_32290 === (7))){
var inst_32285 = (state_32289[(2)]);
var state_32289__$1 = state_32289;
var statearr_32295_34743 = state_32289__$1;
(statearr_32295_34743[(2)] = inst_32285);

(statearr_32295_34743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32290 === (1))){
var state_32289__$1 = state_32289;
var statearr_32296_34749 = state_32289__$1;
(statearr_32296_34749[(2)] = null);

(statearr_32296_34749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32290 === (4))){
var inst_32260 = (state_32289[(7)]);
var inst_32260__$1 = (state_32289[(2)]);
var inst_32261 = (inst_32260__$1 == null);
var state_32289__$1 = (function (){var statearr_32297 = state_32289;
(statearr_32297[(7)] = inst_32260__$1);

return statearr_32297;
})();
if(cljs.core.truth_(inst_32261)){
var statearr_32299_34754 = state_32289__$1;
(statearr_32299_34754[(1)] = (5));

} else {
var statearr_32305_34755 = state_32289__$1;
(statearr_32305_34755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32290 === (6))){
var inst_32266 = (state_32289[(8)]);
var inst_32260 = (state_32289[(7)]);
var inst_32266__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32276 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32277 = [inst_32260,inst_32266__$1];
var inst_32278 = (new cljs.core.PersistentVector(null,2,(5),inst_32276,inst_32277,null));
var state_32289__$1 = (function (){var statearr_32306 = state_32289;
(statearr_32306[(8)] = inst_32266__$1);

return statearr_32306;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32289__$1,(8),jobs,inst_32278);
} else {
if((state_val_32290 === (3))){
var inst_32287 = (state_32289[(2)]);
var state_32289__$1 = state_32289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32289__$1,inst_32287);
} else {
if((state_val_32290 === (2))){
var state_32289__$1 = state_32289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32289__$1,(4),from);
} else {
if((state_val_32290 === (9))){
var inst_32282 = (state_32289[(2)]);
var state_32289__$1 = (function (){var statearr_32308 = state_32289;
(statearr_32308[(9)] = inst_32282);

return statearr_32308;
})();
var statearr_32309_34756 = state_32289__$1;
(statearr_32309_34756[(2)] = null);

(statearr_32309_34756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32290 === (5))){
var inst_32263 = cljs.core.async.close_BANG_(jobs);
var state_32289__$1 = state_32289;
var statearr_32310_34759 = state_32289__$1;
(statearr_32310_34759[(2)] = inst_32263);

(statearr_32310_34759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32290 === (8))){
var inst_32266 = (state_32289[(8)]);
var inst_32280 = (state_32289[(2)]);
var state_32289__$1 = (function (){var statearr_32312 = state_32289;
(statearr_32312[(10)] = inst_32280);

return statearr_32312;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32289__$1,(9),results,inst_32266);
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
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0 = (function (){
var statearr_32315 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__);

(statearr_32315[(1)] = (1));

return statearr_32315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1 = (function (state_32289){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_32289);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e32321){var ex__31567__auto__ = e32321;
var statearr_32322_34767 = state_32289;
(statearr_32322_34767[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_32289[(4)]))){
var statearr_32323_34768 = state_32289;
(statearr_32323_34768[(1)] = cljs.core.first((state_32289[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34769 = state_32289;
state_32289 = G__34769;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__ = function(state_32289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1.call(this,state_32289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_32327 = f__31714__auto__();
(statearr_32327[(6)] = c__31712__auto___34735);

return statearr_32327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
}));


var c__31712__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_32375){
var state_val_32376 = (state_32375[(1)]);
if((state_val_32376 === (7))){
var inst_32370 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32378_34772 = state_32375__$1;
(statearr_32378_34772[(2)] = inst_32370);

(statearr_32378_34772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (20))){
var state_32375__$1 = state_32375;
var statearr_32381_34777 = state_32375__$1;
(statearr_32381_34777[(2)] = null);

(statearr_32381_34777[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (1))){
var state_32375__$1 = state_32375;
var statearr_32384_34780 = state_32375__$1;
(statearr_32384_34780[(2)] = null);

(statearr_32384_34780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (4))){
var inst_32331 = (state_32375[(7)]);
var inst_32331__$1 = (state_32375[(2)]);
var inst_32332 = (inst_32331__$1 == null);
var state_32375__$1 = (function (){var statearr_32389 = state_32375;
(statearr_32389[(7)] = inst_32331__$1);

return statearr_32389;
})();
if(cljs.core.truth_(inst_32332)){
var statearr_32390_34786 = state_32375__$1;
(statearr_32390_34786[(1)] = (5));

} else {
var statearr_32391_34791 = state_32375__$1;
(statearr_32391_34791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (15))){
var inst_32346 = (state_32375[(8)]);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32375__$1,(18),to,inst_32346);
} else {
if((state_val_32376 === (21))){
var inst_32365 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32392_34792 = state_32375__$1;
(statearr_32392_34792[(2)] = inst_32365);

(statearr_32392_34792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (13))){
var inst_32367 = (state_32375[(2)]);
var state_32375__$1 = (function (){var statearr_32393 = state_32375;
(statearr_32393[(9)] = inst_32367);

return statearr_32393;
})();
var statearr_32394_34794 = state_32375__$1;
(statearr_32394_34794[(2)] = null);

(statearr_32394_34794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (6))){
var inst_32331 = (state_32375[(7)]);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32375__$1,(11),inst_32331);
} else {
if((state_val_32376 === (17))){
var inst_32360 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
if(cljs.core.truth_(inst_32360)){
var statearr_32395_34798 = state_32375__$1;
(statearr_32395_34798[(1)] = (19));

} else {
var statearr_32397_34799 = state_32375__$1;
(statearr_32397_34799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (3))){
var inst_32373 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32375__$1,inst_32373);
} else {
if((state_val_32376 === (12))){
var inst_32342 = (state_32375[(10)]);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32375__$1,(14),inst_32342);
} else {
if((state_val_32376 === (2))){
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32375__$1,(4),results);
} else {
if((state_val_32376 === (19))){
var state_32375__$1 = state_32375;
var statearr_32401_34826 = state_32375__$1;
(statearr_32401_34826[(2)] = null);

(statearr_32401_34826[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (11))){
var inst_32342 = (state_32375[(2)]);
var state_32375__$1 = (function (){var statearr_32402 = state_32375;
(statearr_32402[(10)] = inst_32342);

return statearr_32402;
})();
var statearr_32403_34827 = state_32375__$1;
(statearr_32403_34827[(2)] = null);

(statearr_32403_34827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (9))){
var state_32375__$1 = state_32375;
var statearr_32404_34828 = state_32375__$1;
(statearr_32404_34828[(2)] = null);

(statearr_32404_34828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (5))){
var state_32375__$1 = state_32375;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32405_34830 = state_32375__$1;
(statearr_32405_34830[(1)] = (8));

} else {
var statearr_32406_34832 = state_32375__$1;
(statearr_32406_34832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (14))){
var inst_32346 = (state_32375[(8)]);
var inst_32346__$1 = (state_32375[(2)]);
var inst_32351 = (inst_32346__$1 == null);
var inst_32352 = cljs.core.not(inst_32351);
var state_32375__$1 = (function (){var statearr_32407 = state_32375;
(statearr_32407[(8)] = inst_32346__$1);

return statearr_32407;
})();
if(inst_32352){
var statearr_32408_34834 = state_32375__$1;
(statearr_32408_34834[(1)] = (15));

} else {
var statearr_32409_34835 = state_32375__$1;
(statearr_32409_34835[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (16))){
var state_32375__$1 = state_32375;
var statearr_32410_34840 = state_32375__$1;
(statearr_32410_34840[(2)] = false);

(statearr_32410_34840[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (10))){
var inst_32339 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32412_34849 = state_32375__$1;
(statearr_32412_34849[(2)] = inst_32339);

(statearr_32412_34849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (18))){
var inst_32356 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32413_34853 = state_32375__$1;
(statearr_32413_34853[(2)] = inst_32356);

(statearr_32413_34853[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (8))){
var inst_32335 = cljs.core.async.close_BANG_(to);
var state_32375__$1 = state_32375;
var statearr_32414_34856 = state_32375__$1;
(statearr_32414_34856[(2)] = inst_32335);

(statearr_32414_34856[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0 = (function (){
var statearr_32422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32422[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__);

(statearr_32422[(1)] = (1));

return statearr_32422;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1 = (function (state_32375){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_32375);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e32423){var ex__31567__auto__ = e32423;
var statearr_32424_34863 = state_32375;
(statearr_32424_34863[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_32375[(4)]))){
var statearr_32425_34865 = state_32375;
(statearr_32425_34865[(1)] = cljs.core.first((state_32375[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34866 = state_32375;
state_32375 = G__34866;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__ = function(state_32375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1.call(this,state_32375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31564__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_32427 = f__31714__auto__();
(statearr_32427[(6)] = c__31712__auto__);

return statearr_32427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
}));

return c__31712__auto__;
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
var G__32431 = arguments.length;
switch (G__32431) {
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
var G__32440 = arguments.length;
switch (G__32440) {
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
var G__32450 = arguments.length;
switch (G__32450) {
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
var c__31712__auto___34894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_32493){
var state_val_32494 = (state_32493[(1)]);
if((state_val_32494 === (7))){
var inst_32489 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32499_34895 = state_32493__$1;
(statearr_32499_34895[(2)] = inst_32489);

(statearr_32499_34895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (1))){
var state_32493__$1 = state_32493;
var statearr_32500_34896 = state_32493__$1;
(statearr_32500_34896[(2)] = null);

(statearr_32500_34896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (4))){
var inst_32466 = (state_32493[(7)]);
var inst_32466__$1 = (state_32493[(2)]);
var inst_32467 = (inst_32466__$1 == null);
var state_32493__$1 = (function (){var statearr_32505 = state_32493;
(statearr_32505[(7)] = inst_32466__$1);

return statearr_32505;
})();
if(cljs.core.truth_(inst_32467)){
var statearr_32506_34945 = state_32493__$1;
(statearr_32506_34945[(1)] = (5));

} else {
var statearr_32507_34946 = state_32493__$1;
(statearr_32507_34946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (13))){
var state_32493__$1 = state_32493;
var statearr_32508_34952 = state_32493__$1;
(statearr_32508_34952[(2)] = null);

(statearr_32508_34952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (6))){
var inst_32466 = (state_32493[(7)]);
var inst_32472 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32466) : p.call(null,inst_32466));
var state_32493__$1 = state_32493;
if(cljs.core.truth_(inst_32472)){
var statearr_32509_34957 = state_32493__$1;
(statearr_32509_34957[(1)] = (9));

} else {
var statearr_32514_34958 = state_32493__$1;
(statearr_32514_34958[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (3))){
var inst_32491 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32493__$1,inst_32491);
} else {
if((state_val_32494 === (12))){
var state_32493__$1 = state_32493;
var statearr_32515_34963 = state_32493__$1;
(statearr_32515_34963[(2)] = null);

(statearr_32515_34963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (2))){
var state_32493__$1 = state_32493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32493__$1,(4),ch);
} else {
if((state_val_32494 === (11))){
var inst_32466 = (state_32493[(7)]);
var inst_32480 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32493__$1,(8),inst_32480,inst_32466);
} else {
if((state_val_32494 === (9))){
var state_32493__$1 = state_32493;
var statearr_32516_34966 = state_32493__$1;
(statearr_32516_34966[(2)] = tc);

(statearr_32516_34966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (5))){
var inst_32469 = cljs.core.async.close_BANG_(tc);
var inst_32470 = cljs.core.async.close_BANG_(fc);
var state_32493__$1 = (function (){var statearr_32517 = state_32493;
(statearr_32517[(8)] = inst_32469);

return statearr_32517;
})();
var statearr_32518_34971 = state_32493__$1;
(statearr_32518_34971[(2)] = inst_32470);

(statearr_32518_34971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (14))){
var inst_32487 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32520_34973 = state_32493__$1;
(statearr_32520_34973[(2)] = inst_32487);

(statearr_32520_34973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (10))){
var state_32493__$1 = state_32493;
var statearr_32521_34974 = state_32493__$1;
(statearr_32521_34974[(2)] = fc);

(statearr_32521_34974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32494 === (8))){
var inst_32482 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
if(cljs.core.truth_(inst_32482)){
var statearr_32522_34977 = state_32493__$1;
(statearr_32522_34977[(1)] = (12));

} else {
var statearr_32523_34978 = state_32493__$1;
(statearr_32523_34978[(1)] = (13));

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
var cljs$core$async$state_machine__31564__auto__ = null;
var cljs$core$async$state_machine__31564__auto____0 = (function (){
var statearr_32524 = [null,null,null,null,null,null,null,null,null];
(statearr_32524[(0)] = cljs$core$async$state_machine__31564__auto__);

(statearr_32524[(1)] = (1));

return statearr_32524;
});
var cljs$core$async$state_machine__31564__auto____1 = (function (state_32493){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_32493);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e32525){var ex__31567__auto__ = e32525;
var statearr_32526_34981 = state_32493;
(statearr_32526_34981[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_32493[(4)]))){
var statearr_32530_34982 = state_32493;
(statearr_32530_34982[(1)] = cljs.core.first((state_32493[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34983 = state_32493;
state_32493 = G__34983;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$state_machine__31564__auto__ = function(state_32493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31564__auto____1.call(this,state_32493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31564__auto____0;
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31564__auto____1;
return cljs$core$async$state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_32531 = f__31714__auto__();
(statearr_32531[(6)] = c__31712__auto___34894);

return statearr_32531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
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
var c__31712__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_32555){
var state_val_32556 = (state_32555[(1)]);
if((state_val_32556 === (7))){
var inst_32551 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32557_34988 = state_32555__$1;
(statearr_32557_34988[(2)] = inst_32551);

(statearr_32557_34988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (1))){
var inst_32534 = init;
var inst_32535 = inst_32534;
var state_32555__$1 = (function (){var statearr_32558 = state_32555;
(statearr_32558[(7)] = inst_32535);

return statearr_32558;
})();
var statearr_32559_34989 = state_32555__$1;
(statearr_32559_34989[(2)] = null);

(statearr_32559_34989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (4))){
var inst_32538 = (state_32555[(8)]);
var inst_32538__$1 = (state_32555[(2)]);
var inst_32539 = (inst_32538__$1 == null);
var state_32555__$1 = (function (){var statearr_32562 = state_32555;
(statearr_32562[(8)] = inst_32538__$1);

return statearr_32562;
})();
if(cljs.core.truth_(inst_32539)){
var statearr_32563_34990 = state_32555__$1;
(statearr_32563_34990[(1)] = (5));

} else {
var statearr_32564_34991 = state_32555__$1;
(statearr_32564_34991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (6))){
var inst_32542 = (state_32555[(9)]);
var inst_32535 = (state_32555[(7)]);
var inst_32538 = (state_32555[(8)]);
var inst_32542__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32535,inst_32538) : f.call(null,inst_32535,inst_32538));
var inst_32543 = cljs.core.reduced_QMARK_(inst_32542__$1);
var state_32555__$1 = (function (){var statearr_32566 = state_32555;
(statearr_32566[(9)] = inst_32542__$1);

return statearr_32566;
})();
if(inst_32543){
var statearr_32567_35001 = state_32555__$1;
(statearr_32567_35001[(1)] = (8));

} else {
var statearr_32568_35003 = state_32555__$1;
(statearr_32568_35003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (3))){
var inst_32553 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32555__$1,inst_32553);
} else {
if((state_val_32556 === (2))){
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32555__$1,(4),ch);
} else {
if((state_val_32556 === (9))){
var inst_32542 = (state_32555[(9)]);
var inst_32535 = inst_32542;
var state_32555__$1 = (function (){var statearr_32569 = state_32555;
(statearr_32569[(7)] = inst_32535);

return statearr_32569;
})();
var statearr_32573_35006 = state_32555__$1;
(statearr_32573_35006[(2)] = null);

(statearr_32573_35006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (5))){
var inst_32535 = (state_32555[(7)]);
var state_32555__$1 = state_32555;
var statearr_32574_35007 = state_32555__$1;
(statearr_32574_35007[(2)] = inst_32535);

(statearr_32574_35007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (10))){
var inst_32549 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32575_35010 = state_32555__$1;
(statearr_32575_35010[(2)] = inst_32549);

(statearr_32575_35010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (8))){
var inst_32542 = (state_32555[(9)]);
var inst_32545 = cljs.core.deref(inst_32542);
var state_32555__$1 = state_32555;
var statearr_32576_35011 = state_32555__$1;
(statearr_32576_35011[(2)] = inst_32545);

(statearr_32576_35011[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__31564__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31564__auto____0 = (function (){
var statearr_32577 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32577[(0)] = cljs$core$async$reduce_$_state_machine__31564__auto__);

(statearr_32577[(1)] = (1));

return statearr_32577;
});
var cljs$core$async$reduce_$_state_machine__31564__auto____1 = (function (state_32555){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_32555);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e32578){var ex__31567__auto__ = e32578;
var statearr_32579_35034 = state_32555;
(statearr_32579_35034[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_32555[(4)]))){
var statearr_32580_35035 = state_32555;
(statearr_32580_35035[(1)] = cljs.core.first((state_32555[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35036 = state_32555;
state_32555 = G__35036;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31564__auto__ = function(state_32555){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31564__auto____1.call(this,state_32555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31564__auto____0;
cljs$core$async$reduce_$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31564__auto____1;
return cljs$core$async$reduce_$_state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_32585 = f__31714__auto__();
(statearr_32585[(6)] = c__31712__auto__);

return statearr_32585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
}));

return c__31712__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31712__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_32591){
var state_val_32592 = (state_32591[(1)]);
if((state_val_32592 === (1))){
var inst_32586 = cljs.core.async.reduce(f__$1,init,ch);
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32591__$1,(2),inst_32586);
} else {
if((state_val_32592 === (2))){
var inst_32588 = (state_32591[(2)]);
var inst_32589 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32588) : f__$1.call(null,inst_32588));
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32591__$1,inst_32589);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31564__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31564__auto____0 = (function (){
var statearr_32593 = [null,null,null,null,null,null,null];
(statearr_32593[(0)] = cljs$core$async$transduce_$_state_machine__31564__auto__);

(statearr_32593[(1)] = (1));

return statearr_32593;
});
var cljs$core$async$transduce_$_state_machine__31564__auto____1 = (function (state_32591){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_32591);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e32594){var ex__31567__auto__ = e32594;
var statearr_32595_35051 = state_32591;
(statearr_32595_35051[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_32591[(4)]))){
var statearr_32598_35055 = state_32591;
(statearr_32598_35055[(1)] = cljs.core.first((state_32591[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35056 = state_32591;
state_32591 = G__35056;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31564__auto__ = function(state_32591){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31564__auto____1.call(this,state_32591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31564__auto____0;
cljs$core$async$transduce_$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31564__auto____1;
return cljs$core$async$transduce_$_state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_32600 = f__31714__auto__();
(statearr_32600[(6)] = c__31712__auto__);

return statearr_32600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
}));

return c__31712__auto__;
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
var G__32605 = arguments.length;
switch (G__32605) {
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
var c__31712__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_32639){
var state_val_32640 = (state_32639[(1)]);
if((state_val_32640 === (7))){
var inst_32615 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32646_35073 = state_32639__$1;
(statearr_32646_35073[(2)] = inst_32615);

(statearr_32646_35073[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (1))){
var inst_32609 = cljs.core.seq(coll);
var inst_32610 = inst_32609;
var state_32639__$1 = (function (){var statearr_32647 = state_32639;
(statearr_32647[(7)] = inst_32610);

return statearr_32647;
})();
var statearr_32650_35078 = state_32639__$1;
(statearr_32650_35078[(2)] = null);

(statearr_32650_35078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (4))){
var inst_32610 = (state_32639[(7)]);
var inst_32613 = cljs.core.first(inst_32610);
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32639__$1,(7),ch,inst_32613);
} else {
if((state_val_32640 === (13))){
var inst_32633 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32653_35086 = state_32639__$1;
(statearr_32653_35086[(2)] = inst_32633);

(statearr_32653_35086[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (6))){
var inst_32618 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
if(cljs.core.truth_(inst_32618)){
var statearr_32654_35088 = state_32639__$1;
(statearr_32654_35088[(1)] = (8));

} else {
var statearr_32655_35090 = state_32639__$1;
(statearr_32655_35090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (3))){
var inst_32637 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32639__$1,inst_32637);
} else {
if((state_val_32640 === (12))){
var state_32639__$1 = state_32639;
var statearr_32656_35093 = state_32639__$1;
(statearr_32656_35093[(2)] = null);

(statearr_32656_35093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (2))){
var inst_32610 = (state_32639[(7)]);
var state_32639__$1 = state_32639;
if(cljs.core.truth_(inst_32610)){
var statearr_32657_35095 = state_32639__$1;
(statearr_32657_35095[(1)] = (4));

} else {
var statearr_32658_35097 = state_32639__$1;
(statearr_32658_35097[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (11))){
var inst_32630 = cljs.core.async.close_BANG_(ch);
var state_32639__$1 = state_32639;
var statearr_32662_35098 = state_32639__$1;
(statearr_32662_35098[(2)] = inst_32630);

(statearr_32662_35098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (9))){
var state_32639__$1 = state_32639;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32670_35099 = state_32639__$1;
(statearr_32670_35099[(1)] = (11));

} else {
var statearr_32671_35100 = state_32639__$1;
(statearr_32671_35100[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (5))){
var inst_32610 = (state_32639[(7)]);
var state_32639__$1 = state_32639;
var statearr_32675_35101 = state_32639__$1;
(statearr_32675_35101[(2)] = inst_32610);

(statearr_32675_35101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (10))){
var inst_32635 = (state_32639[(2)]);
var state_32639__$1 = state_32639;
var statearr_32681_35102 = state_32639__$1;
(statearr_32681_35102[(2)] = inst_32635);

(statearr_32681_35102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32640 === (8))){
var inst_32610 = (state_32639[(7)]);
var inst_32622 = cljs.core.next(inst_32610);
var inst_32610__$1 = inst_32622;
var state_32639__$1 = (function (){var statearr_32682 = state_32639;
(statearr_32682[(7)] = inst_32610__$1);

return statearr_32682;
})();
var statearr_32683_35106 = state_32639__$1;
(statearr_32683_35106[(2)] = null);

(statearr_32683_35106[(1)] = (2));


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
var cljs$core$async$state_machine__31564__auto__ = null;
var cljs$core$async$state_machine__31564__auto____0 = (function (){
var statearr_32689 = [null,null,null,null,null,null,null,null];
(statearr_32689[(0)] = cljs$core$async$state_machine__31564__auto__);

(statearr_32689[(1)] = (1));

return statearr_32689;
});
var cljs$core$async$state_machine__31564__auto____1 = (function (state_32639){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_32639);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e32690){var ex__31567__auto__ = e32690;
var statearr_32692_35112 = state_32639;
(statearr_32692_35112[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_32639[(4)]))){
var statearr_32694_35113 = state_32639;
(statearr_32694_35113[(1)] = cljs.core.first((state_32639[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35114 = state_32639;
state_32639 = G__35114;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$state_machine__31564__auto__ = function(state_32639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31564__auto____1.call(this,state_32639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31564__auto____0;
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31564__auto____1;
return cljs$core$async$state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_32698 = f__31714__auto__();
(statearr_32698[(6)] = c__31712__auto__);

return statearr_32698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
}));

return c__31712__auto__;
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
var G__32707 = arguments.length;
switch (G__32707) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35151 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_35151(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35155 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_35155(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35156 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_35156(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35158 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_35158(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32740 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32740 = (function (ch,cs,meta32741){
this.ch = ch;
this.cs = cs;
this.meta32741 = meta32741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32742,meta32741__$1){
var self__ = this;
var _32742__$1 = this;
return (new cljs.core.async.t_cljs$core$async32740(self__.ch,self__.cs,meta32741__$1));
}));

(cljs.core.async.t_cljs$core$async32740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32742){
var self__ = this;
var _32742__$1 = this;
return self__.meta32741;
}));

(cljs.core.async.t_cljs$core$async32740.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32740.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32740.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32740.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32740.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32740.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32741","meta32741",-1542998001,null)], null);
}));

(cljs.core.async.t_cljs$core$async32740.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32740.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32740");

(cljs.core.async.t_cljs$core$async32740.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async32740");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32740.
 */
cljs.core.async.__GT_t_cljs$core$async32740 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32740(ch__$1,cs__$1,meta32741){
return (new cljs.core.async.t_cljs$core$async32740(ch__$1,cs__$1,meta32741));
});

}

return (new cljs.core.async.t_cljs$core$async32740(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31712__auto___35182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_32908){
var state_val_32909 = (state_32908[(1)]);
if((state_val_32909 === (7))){
var inst_32898 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32911_35183 = state_32908__$1;
(statearr_32911_35183[(2)] = inst_32898);

(statearr_32911_35183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (20))){
var inst_32792 = (state_32908[(7)]);
var inst_32804 = cljs.core.first(inst_32792);
var inst_32805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32804,(0),null);
var inst_32806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32804,(1),null);
var state_32908__$1 = (function (){var statearr_32912 = state_32908;
(statearr_32912[(8)] = inst_32805);

return statearr_32912;
})();
if(cljs.core.truth_(inst_32806)){
var statearr_32913_35185 = state_32908__$1;
(statearr_32913_35185[(1)] = (22));

} else {
var statearr_32914_35186 = state_32908__$1;
(statearr_32914_35186[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (27))){
var inst_32836 = (state_32908[(9)]);
var inst_32843 = (state_32908[(10)]);
var inst_32757 = (state_32908[(11)]);
var inst_32834 = (state_32908[(12)]);
var inst_32843__$1 = cljs.core._nth(inst_32834,inst_32836);
var inst_32844 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32843__$1,inst_32757,done);
var state_32908__$1 = (function (){var statearr_32916 = state_32908;
(statearr_32916[(10)] = inst_32843__$1);

return statearr_32916;
})();
if(cljs.core.truth_(inst_32844)){
var statearr_32917_35187 = state_32908__$1;
(statearr_32917_35187[(1)] = (30));

} else {
var statearr_32918_35188 = state_32908__$1;
(statearr_32918_35188[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (1))){
var state_32908__$1 = state_32908;
var statearr_32920_35231 = state_32908__$1;
(statearr_32920_35231[(2)] = null);

(statearr_32920_35231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (24))){
var inst_32792 = (state_32908[(7)]);
var inst_32811 = (state_32908[(2)]);
var inst_32812 = cljs.core.next(inst_32792);
var inst_32766 = inst_32812;
var inst_32767 = null;
var inst_32768 = (0);
var inst_32769 = (0);
var state_32908__$1 = (function (){var statearr_32921 = state_32908;
(statearr_32921[(13)] = inst_32767);

(statearr_32921[(14)] = inst_32766);

(statearr_32921[(15)] = inst_32811);

(statearr_32921[(16)] = inst_32769);

(statearr_32921[(17)] = inst_32768);

return statearr_32921;
})();
var statearr_32922_35232 = state_32908__$1;
(statearr_32922_35232[(2)] = null);

(statearr_32922_35232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (39))){
var state_32908__$1 = state_32908;
var statearr_32926_35233 = state_32908__$1;
(statearr_32926_35233[(2)] = null);

(statearr_32926_35233[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (4))){
var inst_32757 = (state_32908[(11)]);
var inst_32757__$1 = (state_32908[(2)]);
var inst_32758 = (inst_32757__$1 == null);
var state_32908__$1 = (function (){var statearr_32930 = state_32908;
(statearr_32930[(11)] = inst_32757__$1);

return statearr_32930;
})();
if(cljs.core.truth_(inst_32758)){
var statearr_32931_35234 = state_32908__$1;
(statearr_32931_35234[(1)] = (5));

} else {
var statearr_32933_35236 = state_32908__$1;
(statearr_32933_35236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (15))){
var inst_32767 = (state_32908[(13)]);
var inst_32766 = (state_32908[(14)]);
var inst_32769 = (state_32908[(16)]);
var inst_32768 = (state_32908[(17)]);
var inst_32788 = (state_32908[(2)]);
var inst_32789 = (inst_32769 + (1));
var tmp32923 = inst_32767;
var tmp32924 = inst_32766;
var tmp32925 = inst_32768;
var inst_32766__$1 = tmp32924;
var inst_32767__$1 = tmp32923;
var inst_32768__$1 = tmp32925;
var inst_32769__$1 = inst_32789;
var state_32908__$1 = (function (){var statearr_32938 = state_32908;
(statearr_32938[(13)] = inst_32767__$1);

(statearr_32938[(14)] = inst_32766__$1);

(statearr_32938[(16)] = inst_32769__$1);

(statearr_32938[(17)] = inst_32768__$1);

(statearr_32938[(18)] = inst_32788);

return statearr_32938;
})();
var statearr_32939_35238 = state_32908__$1;
(statearr_32939_35238[(2)] = null);

(statearr_32939_35238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (21))){
var inst_32815 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32945_35240 = state_32908__$1;
(statearr_32945_35240[(2)] = inst_32815);

(statearr_32945_35240[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (31))){
var inst_32843 = (state_32908[(10)]);
var inst_32848 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32843);
var state_32908__$1 = state_32908;
var statearr_32946_35241 = state_32908__$1;
(statearr_32946_35241[(2)] = inst_32848);

(statearr_32946_35241[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (32))){
var inst_32836 = (state_32908[(9)]);
var inst_32835 = (state_32908[(19)]);
var inst_32833 = (state_32908[(20)]);
var inst_32834 = (state_32908[(12)]);
var inst_32850 = (state_32908[(2)]);
var inst_32852 = (inst_32836 + (1));
var tmp32942 = inst_32835;
var tmp32943 = inst_32833;
var tmp32944 = inst_32834;
var inst_32833__$1 = tmp32943;
var inst_32834__$1 = tmp32944;
var inst_32835__$1 = tmp32942;
var inst_32836__$1 = inst_32852;
var state_32908__$1 = (function (){var statearr_32947 = state_32908;
(statearr_32947[(21)] = inst_32850);

(statearr_32947[(9)] = inst_32836__$1);

(statearr_32947[(19)] = inst_32835__$1);

(statearr_32947[(20)] = inst_32833__$1);

(statearr_32947[(12)] = inst_32834__$1);

return statearr_32947;
})();
var statearr_32948_35245 = state_32908__$1;
(statearr_32948_35245[(2)] = null);

(statearr_32948_35245[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (40))){
var inst_32868 = (state_32908[(22)]);
var inst_32872 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32868);
var state_32908__$1 = state_32908;
var statearr_32949_35246 = state_32908__$1;
(statearr_32949_35246[(2)] = inst_32872);

(statearr_32949_35246[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (33))){
var inst_32855 = (state_32908[(23)]);
var inst_32857 = cljs.core.chunked_seq_QMARK_(inst_32855);
var state_32908__$1 = state_32908;
if(inst_32857){
var statearr_32950_35250 = state_32908__$1;
(statearr_32950_35250[(1)] = (36));

} else {
var statearr_32951_35251 = state_32908__$1;
(statearr_32951_35251[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (13))){
var inst_32781 = (state_32908[(24)]);
var inst_32785 = cljs.core.async.close_BANG_(inst_32781);
var state_32908__$1 = state_32908;
var statearr_32952_35252 = state_32908__$1;
(statearr_32952_35252[(2)] = inst_32785);

(statearr_32952_35252[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (22))){
var inst_32805 = (state_32908[(8)]);
var inst_32808 = cljs.core.async.close_BANG_(inst_32805);
var state_32908__$1 = state_32908;
var statearr_32953_35253 = state_32908__$1;
(statearr_32953_35253[(2)] = inst_32808);

(statearr_32953_35253[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (36))){
var inst_32855 = (state_32908[(23)]);
var inst_32859 = cljs.core.chunk_first(inst_32855);
var inst_32864 = cljs.core.chunk_rest(inst_32855);
var inst_32865 = cljs.core.count(inst_32859);
var inst_32833 = inst_32864;
var inst_32834 = inst_32859;
var inst_32835 = inst_32865;
var inst_32836 = (0);
var state_32908__$1 = (function (){var statearr_32954 = state_32908;
(statearr_32954[(9)] = inst_32836);

(statearr_32954[(19)] = inst_32835);

(statearr_32954[(20)] = inst_32833);

(statearr_32954[(12)] = inst_32834);

return statearr_32954;
})();
var statearr_32955_35254 = state_32908__$1;
(statearr_32955_35254[(2)] = null);

(statearr_32955_35254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (41))){
var inst_32855 = (state_32908[(23)]);
var inst_32874 = (state_32908[(2)]);
var inst_32878 = cljs.core.next(inst_32855);
var inst_32833 = inst_32878;
var inst_32834 = null;
var inst_32835 = (0);
var inst_32836 = (0);
var state_32908__$1 = (function (){var statearr_32956 = state_32908;
(statearr_32956[(9)] = inst_32836);

(statearr_32956[(19)] = inst_32835);

(statearr_32956[(20)] = inst_32833);

(statearr_32956[(12)] = inst_32834);

(statearr_32956[(25)] = inst_32874);

return statearr_32956;
})();
var statearr_32957_35259 = state_32908__$1;
(statearr_32957_35259[(2)] = null);

(statearr_32957_35259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (43))){
var state_32908__$1 = state_32908;
var statearr_32958_35261 = state_32908__$1;
(statearr_32958_35261[(2)] = null);

(statearr_32958_35261[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (29))){
var inst_32886 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32959_35264 = state_32908__$1;
(statearr_32959_35264[(2)] = inst_32886);

(statearr_32959_35264[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (44))){
var inst_32895 = (state_32908[(2)]);
var state_32908__$1 = (function (){var statearr_32960 = state_32908;
(statearr_32960[(26)] = inst_32895);

return statearr_32960;
})();
var statearr_32961_35267 = state_32908__$1;
(statearr_32961_35267[(2)] = null);

(statearr_32961_35267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (6))){
var inst_32825 = (state_32908[(27)]);
var inst_32824 = cljs.core.deref(cs);
var inst_32825__$1 = cljs.core.keys(inst_32824);
var inst_32826 = cljs.core.count(inst_32825__$1);
var inst_32827 = cljs.core.reset_BANG_(dctr,inst_32826);
var inst_32832 = cljs.core.seq(inst_32825__$1);
var inst_32833 = inst_32832;
var inst_32834 = null;
var inst_32835 = (0);
var inst_32836 = (0);
var state_32908__$1 = (function (){var statearr_32962 = state_32908;
(statearr_32962[(9)] = inst_32836);

(statearr_32962[(19)] = inst_32835);

(statearr_32962[(20)] = inst_32833);

(statearr_32962[(28)] = inst_32827);

(statearr_32962[(12)] = inst_32834);

(statearr_32962[(27)] = inst_32825__$1);

return statearr_32962;
})();
var statearr_32963_35275 = state_32908__$1;
(statearr_32963_35275[(2)] = null);

(statearr_32963_35275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (28))){
var inst_32833 = (state_32908[(20)]);
var inst_32855 = (state_32908[(23)]);
var inst_32855__$1 = cljs.core.seq(inst_32833);
var state_32908__$1 = (function (){var statearr_32965 = state_32908;
(statearr_32965[(23)] = inst_32855__$1);

return statearr_32965;
})();
if(inst_32855__$1){
var statearr_32966_35302 = state_32908__$1;
(statearr_32966_35302[(1)] = (33));

} else {
var statearr_32967_35305 = state_32908__$1;
(statearr_32967_35305[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (25))){
var inst_32836 = (state_32908[(9)]);
var inst_32835 = (state_32908[(19)]);
var inst_32839 = (inst_32836 < inst_32835);
var inst_32840 = inst_32839;
var state_32908__$1 = state_32908;
if(cljs.core.truth_(inst_32840)){
var statearr_32968_35306 = state_32908__$1;
(statearr_32968_35306[(1)] = (27));

} else {
var statearr_32969_35307 = state_32908__$1;
(statearr_32969_35307[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (34))){
var state_32908__$1 = state_32908;
var statearr_32970_35313 = state_32908__$1;
(statearr_32970_35313[(2)] = null);

(statearr_32970_35313[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (17))){
var state_32908__$1 = state_32908;
var statearr_32971_35316 = state_32908__$1;
(statearr_32971_35316[(2)] = null);

(statearr_32971_35316[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (3))){
var inst_32900 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32908__$1,inst_32900);
} else {
if((state_val_32909 === (12))){
var inst_32820 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32978_35318 = state_32908__$1;
(statearr_32978_35318[(2)] = inst_32820);

(statearr_32978_35318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (2))){
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32908__$1,(4),ch);
} else {
if((state_val_32909 === (23))){
var state_32908__$1 = state_32908;
var statearr_32981_35326 = state_32908__$1;
(statearr_32981_35326[(2)] = null);

(statearr_32981_35326[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (35))){
var inst_32884 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32983_35328 = state_32908__$1;
(statearr_32983_35328[(2)] = inst_32884);

(statearr_32983_35328[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (19))){
var inst_32792 = (state_32908[(7)]);
var inst_32796 = cljs.core.chunk_first(inst_32792);
var inst_32797 = cljs.core.chunk_rest(inst_32792);
var inst_32798 = cljs.core.count(inst_32796);
var inst_32766 = inst_32797;
var inst_32767 = inst_32796;
var inst_32768 = inst_32798;
var inst_32769 = (0);
var state_32908__$1 = (function (){var statearr_32987 = state_32908;
(statearr_32987[(13)] = inst_32767);

(statearr_32987[(14)] = inst_32766);

(statearr_32987[(16)] = inst_32769);

(statearr_32987[(17)] = inst_32768);

return statearr_32987;
})();
var statearr_32988_35334 = state_32908__$1;
(statearr_32988_35334[(2)] = null);

(statearr_32988_35334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (11))){
var inst_32766 = (state_32908[(14)]);
var inst_32792 = (state_32908[(7)]);
var inst_32792__$1 = cljs.core.seq(inst_32766);
var state_32908__$1 = (function (){var statearr_32989 = state_32908;
(statearr_32989[(7)] = inst_32792__$1);

return statearr_32989;
})();
if(inst_32792__$1){
var statearr_32990_35335 = state_32908__$1;
(statearr_32990_35335[(1)] = (16));

} else {
var statearr_32991_35337 = state_32908__$1;
(statearr_32991_35337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (9))){
var inst_32822 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32992_35341 = state_32908__$1;
(statearr_32992_35341[(2)] = inst_32822);

(statearr_32992_35341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (5))){
var inst_32764 = cljs.core.deref(cs);
var inst_32765 = cljs.core.seq(inst_32764);
var inst_32766 = inst_32765;
var inst_32767 = null;
var inst_32768 = (0);
var inst_32769 = (0);
var state_32908__$1 = (function (){var statearr_32993 = state_32908;
(statearr_32993[(13)] = inst_32767);

(statearr_32993[(14)] = inst_32766);

(statearr_32993[(16)] = inst_32769);

(statearr_32993[(17)] = inst_32768);

return statearr_32993;
})();
var statearr_32994_35344 = state_32908__$1;
(statearr_32994_35344[(2)] = null);

(statearr_32994_35344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (14))){
var state_32908__$1 = state_32908;
var statearr_32995_35345 = state_32908__$1;
(statearr_32995_35345[(2)] = null);

(statearr_32995_35345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (45))){
var inst_32892 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_32997_35346 = state_32908__$1;
(statearr_32997_35346[(2)] = inst_32892);

(statearr_32997_35346[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (26))){
var inst_32825 = (state_32908[(27)]);
var inst_32888 = (state_32908[(2)]);
var inst_32889 = cljs.core.seq(inst_32825);
var state_32908__$1 = (function (){var statearr_33000 = state_32908;
(statearr_33000[(29)] = inst_32888);

return statearr_33000;
})();
if(inst_32889){
var statearr_33001_35349 = state_32908__$1;
(statearr_33001_35349[(1)] = (42));

} else {
var statearr_33002_35354 = state_32908__$1;
(statearr_33002_35354[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (16))){
var inst_32792 = (state_32908[(7)]);
var inst_32794 = cljs.core.chunked_seq_QMARK_(inst_32792);
var state_32908__$1 = state_32908;
if(inst_32794){
var statearr_33003_35355 = state_32908__$1;
(statearr_33003_35355[(1)] = (19));

} else {
var statearr_33004_35358 = state_32908__$1;
(statearr_33004_35358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (38))){
var inst_32881 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_33009_35361 = state_32908__$1;
(statearr_33009_35361[(2)] = inst_32881);

(statearr_33009_35361[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (30))){
var state_32908__$1 = state_32908;
var statearr_33010_35364 = state_32908__$1;
(statearr_33010_35364[(2)] = null);

(statearr_33010_35364[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (10))){
var inst_32767 = (state_32908[(13)]);
var inst_32769 = (state_32908[(16)]);
var inst_32779 = cljs.core._nth(inst_32767,inst_32769);
var inst_32781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32779,(0),null);
var inst_32782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32779,(1),null);
var state_32908__$1 = (function (){var statearr_33011 = state_32908;
(statearr_33011[(24)] = inst_32781);

return statearr_33011;
})();
if(cljs.core.truth_(inst_32782)){
var statearr_33014_35368 = state_32908__$1;
(statearr_33014_35368[(1)] = (13));

} else {
var statearr_33015_35369 = state_32908__$1;
(statearr_33015_35369[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (18))){
var inst_32818 = (state_32908[(2)]);
var state_32908__$1 = state_32908;
var statearr_33016_35370 = state_32908__$1;
(statearr_33016_35370[(2)] = inst_32818);

(statearr_33016_35370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (42))){
var state_32908__$1 = state_32908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32908__$1,(45),dchan);
} else {
if((state_val_32909 === (37))){
var inst_32868 = (state_32908[(22)]);
var inst_32757 = (state_32908[(11)]);
var inst_32855 = (state_32908[(23)]);
var inst_32868__$1 = cljs.core.first(inst_32855);
var inst_32869 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32868__$1,inst_32757,done);
var state_32908__$1 = (function (){var statearr_33017 = state_32908;
(statearr_33017[(22)] = inst_32868__$1);

return statearr_33017;
})();
if(cljs.core.truth_(inst_32869)){
var statearr_33018_35382 = state_32908__$1;
(statearr_33018_35382[(1)] = (39));

} else {
var statearr_33019_35384 = state_32908__$1;
(statearr_33019_35384[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32909 === (8))){
var inst_32769 = (state_32908[(16)]);
var inst_32768 = (state_32908[(17)]);
var inst_32771 = (inst_32769 < inst_32768);
var inst_32772 = inst_32771;
var state_32908__$1 = state_32908;
if(cljs.core.truth_(inst_32772)){
var statearr_33020_35389 = state_32908__$1;
(statearr_33020_35389[(1)] = (10));

} else {
var statearr_33021_35391 = state_32908__$1;
(statearr_33021_35391[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__31564__auto__ = null;
var cljs$core$async$mult_$_state_machine__31564__auto____0 = (function (){
var statearr_33023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33023[(0)] = cljs$core$async$mult_$_state_machine__31564__auto__);

(statearr_33023[(1)] = (1));

return statearr_33023;
});
var cljs$core$async$mult_$_state_machine__31564__auto____1 = (function (state_32908){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_32908);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e33024){var ex__31567__auto__ = e33024;
var statearr_33025_35410 = state_32908;
(statearr_33025_35410[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_32908[(4)]))){
var statearr_33026_35411 = state_32908;
(statearr_33026_35411[(1)] = cljs.core.first((state_32908[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35417 = state_32908;
state_32908 = G__35417;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31564__auto__ = function(state_32908){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31564__auto____1.call(this,state_32908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31564__auto____0;
cljs$core$async$mult_$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31564__auto____1;
return cljs$core$async$mult_$_state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_33027 = f__31714__auto__();
(statearr_33027[(6)] = c__31712__auto___35182);

return statearr_33027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
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
var G__33030 = arguments.length;
switch (G__33030) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35426 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_35426(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35436 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_35436(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35442 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35442(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35447 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_35447(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35455 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35455(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35473 = arguments.length;
var i__4737__auto___35474 = (0);
while(true){
if((i__4737__auto___35474 < len__4736__auto___35473)){
args__4742__auto__.push((arguments[i__4737__auto___35474]));

var G__35476 = (i__4737__auto___35474 + (1));
i__4737__auto___35474 = G__35476;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33062){
var map__33063 = p__33062;
var map__33063__$1 = (((((!((map__33063 == null))))?(((((map__33063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33063):map__33063);
var opts = map__33063__$1;
var statearr_33065_35486 = state;
(statearr_33065_35486[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33068_35488 = state;
(statearr_33068_35488[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33070_35493 = state;
(statearr_33070_35493[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33050){
var G__33051 = cljs.core.first(seq33050);
var seq33050__$1 = cljs.core.next(seq33050);
var G__33052 = cljs.core.first(seq33050__$1);
var seq33050__$2 = cljs.core.next(seq33050__$1);
var G__33053 = cljs.core.first(seq33050__$2);
var seq33050__$3 = cljs.core.next(seq33050__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33051,G__33052,G__33053,seq33050__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33074 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33075){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33075 = meta33075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33076,meta33075__$1){
var self__ = this;
var _33076__$1 = this;
return (new cljs.core.async.t_cljs$core$async33074(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33075__$1));
}));

(cljs.core.async.t_cljs$core$async33074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33076){
var self__ = this;
var _33076__$1 = this;
return self__.meta33075;
}));

(cljs.core.async.t_cljs$core$async33074.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33074.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33074.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33074.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33074.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33074.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33074.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33074.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33075","meta33075",-1743991703,null)], null);
}));

(cljs.core.async.t_cljs$core$async33074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33074");

(cljs.core.async.t_cljs$core$async33074.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33074.
 */
cljs.core.async.__GT_t_cljs$core$async33074 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33074(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33075){
return (new cljs.core.async.t_cljs$core$async33074(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33075));
});

}

return (new cljs.core.async.t_cljs$core$async33074(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31712__auto___35584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_33183){
var state_val_33184 = (state_33183[(1)]);
if((state_val_33184 === (7))){
var inst_33096 = (state_33183[(2)]);
var state_33183__$1 = state_33183;
var statearr_33186_35585 = state_33183__$1;
(statearr_33186_35585[(2)] = inst_33096);

(statearr_33186_35585[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (20))){
var inst_33108 = (state_33183[(7)]);
var state_33183__$1 = state_33183;
var statearr_33187_35587 = state_33183__$1;
(statearr_33187_35587[(2)] = inst_33108);

(statearr_33187_35587[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (27))){
var state_33183__$1 = state_33183;
var statearr_33188_35589 = state_33183__$1;
(statearr_33188_35589[(2)] = null);

(statearr_33188_35589[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (1))){
var inst_33082 = (state_33183[(8)]);
var inst_33082__$1 = calc_state();
var inst_33084 = (inst_33082__$1 == null);
var inst_33085 = cljs.core.not(inst_33084);
var state_33183__$1 = (function (){var statearr_33189 = state_33183;
(statearr_33189[(8)] = inst_33082__$1);

return statearr_33189;
})();
if(inst_33085){
var statearr_33190_35592 = state_33183__$1;
(statearr_33190_35592[(1)] = (2));

} else {
var statearr_33191_35593 = state_33183__$1;
(statearr_33191_35593[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (24))){
var inst_33141 = (state_33183[(9)]);
var inst_33155 = (state_33183[(10)]);
var inst_33132 = (state_33183[(11)]);
var inst_33155__$1 = (inst_33132.cljs$core$IFn$_invoke$arity$1 ? inst_33132.cljs$core$IFn$_invoke$arity$1(inst_33141) : inst_33132.call(null,inst_33141));
var state_33183__$1 = (function (){var statearr_33192 = state_33183;
(statearr_33192[(10)] = inst_33155__$1);

return statearr_33192;
})();
if(cljs.core.truth_(inst_33155__$1)){
var statearr_33193_35602 = state_33183__$1;
(statearr_33193_35602[(1)] = (29));

} else {
var statearr_33194_35603 = state_33183__$1;
(statearr_33194_35603[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (4))){
var inst_33099 = (state_33183[(2)]);
var state_33183__$1 = state_33183;
if(cljs.core.truth_(inst_33099)){
var statearr_33195_35606 = state_33183__$1;
(statearr_33195_35606[(1)] = (8));

} else {
var statearr_33196_35607 = state_33183__$1;
(statearr_33196_35607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (15))){
var inst_33126 = (state_33183[(2)]);
var state_33183__$1 = state_33183;
if(cljs.core.truth_(inst_33126)){
var statearr_33197_35608 = state_33183__$1;
(statearr_33197_35608[(1)] = (19));

} else {
var statearr_33198_35609 = state_33183__$1;
(statearr_33198_35609[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (21))){
var inst_33131 = (state_33183[(12)]);
var inst_33131__$1 = (state_33183[(2)]);
var inst_33132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33131__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33131__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33131__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33183__$1 = (function (){var statearr_33199 = state_33183;
(statearr_33199[(13)] = inst_33133);

(statearr_33199[(12)] = inst_33131__$1);

(statearr_33199[(11)] = inst_33132);

return statearr_33199;
})();
return cljs.core.async.ioc_alts_BANG_(state_33183__$1,(22),inst_33134);
} else {
if((state_val_33184 === (31))){
var inst_33164 = (state_33183[(2)]);
var state_33183__$1 = state_33183;
if(cljs.core.truth_(inst_33164)){
var statearr_33200_35623 = state_33183__$1;
(statearr_33200_35623[(1)] = (32));

} else {
var statearr_33201_35625 = state_33183__$1;
(statearr_33201_35625[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (32))){
var inst_33140 = (state_33183[(14)]);
var state_33183__$1 = state_33183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33183__$1,(35),out,inst_33140);
} else {
if((state_val_33184 === (33))){
var inst_33131 = (state_33183[(12)]);
var inst_33108 = inst_33131;
var state_33183__$1 = (function (){var statearr_33202 = state_33183;
(statearr_33202[(7)] = inst_33108);

return statearr_33202;
})();
var statearr_33203_35630 = state_33183__$1;
(statearr_33203_35630[(2)] = null);

(statearr_33203_35630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (13))){
var inst_33108 = (state_33183[(7)]);
var inst_33115 = inst_33108.cljs$lang$protocol_mask$partition0$;
var inst_33116 = (inst_33115 & (64));
var inst_33117 = inst_33108.cljs$core$ISeq$;
var inst_33118 = (cljs.core.PROTOCOL_SENTINEL === inst_33117);
var inst_33119 = ((inst_33116) || (inst_33118));
var state_33183__$1 = state_33183;
if(cljs.core.truth_(inst_33119)){
var statearr_33204_35635 = state_33183__$1;
(statearr_33204_35635[(1)] = (16));

} else {
var statearr_33205_35640 = state_33183__$1;
(statearr_33205_35640[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (22))){
var inst_33141 = (state_33183[(9)]);
var inst_33140 = (state_33183[(14)]);
var inst_33139 = (state_33183[(2)]);
var inst_33140__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33139,(0),null);
var inst_33141__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33139,(1),null);
var inst_33142 = (inst_33140__$1 == null);
var inst_33143 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33141__$1,change);
var inst_33144 = ((inst_33142) || (inst_33143));
var state_33183__$1 = (function (){var statearr_33207 = state_33183;
(statearr_33207[(9)] = inst_33141__$1);

(statearr_33207[(14)] = inst_33140__$1);

return statearr_33207;
})();
if(cljs.core.truth_(inst_33144)){
var statearr_33208_35651 = state_33183__$1;
(statearr_33208_35651[(1)] = (23));

} else {
var statearr_33209_35652 = state_33183__$1;
(statearr_33209_35652[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (36))){
var inst_33131 = (state_33183[(12)]);
var inst_33108 = inst_33131;
var state_33183__$1 = (function (){var statearr_33212 = state_33183;
(statearr_33212[(7)] = inst_33108);

return statearr_33212;
})();
var statearr_33213_35653 = state_33183__$1;
(statearr_33213_35653[(2)] = null);

(statearr_33213_35653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (29))){
var inst_33155 = (state_33183[(10)]);
var state_33183__$1 = state_33183;
var statearr_33215_35655 = state_33183__$1;
(statearr_33215_35655[(2)] = inst_33155);

(statearr_33215_35655[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (6))){
var state_33183__$1 = state_33183;
var statearr_33218_35656 = state_33183__$1;
(statearr_33218_35656[(2)] = false);

(statearr_33218_35656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (28))){
var inst_33151 = (state_33183[(2)]);
var inst_33152 = calc_state();
var inst_33108 = inst_33152;
var state_33183__$1 = (function (){var statearr_33219 = state_33183;
(statearr_33219[(7)] = inst_33108);

(statearr_33219[(15)] = inst_33151);

return statearr_33219;
})();
var statearr_33220_35660 = state_33183__$1;
(statearr_33220_35660[(2)] = null);

(statearr_33220_35660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (25))){
var inst_33178 = (state_33183[(2)]);
var state_33183__$1 = state_33183;
var statearr_33221_35663 = state_33183__$1;
(statearr_33221_35663[(2)] = inst_33178);

(statearr_33221_35663[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (34))){
var inst_33176 = (state_33183[(2)]);
var state_33183__$1 = state_33183;
var statearr_33222_35664 = state_33183__$1;
(statearr_33222_35664[(2)] = inst_33176);

(statearr_33222_35664[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (17))){
var state_33183__$1 = state_33183;
var statearr_33223_35666 = state_33183__$1;
(statearr_33223_35666[(2)] = false);

(statearr_33223_35666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (3))){
var state_33183__$1 = state_33183;
var statearr_33224_35667 = state_33183__$1;
(statearr_33224_35667[(2)] = false);

(statearr_33224_35667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (12))){
var inst_33180 = (state_33183[(2)]);
var state_33183__$1 = state_33183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33183__$1,inst_33180);
} else {
if((state_val_33184 === (2))){
var inst_33082 = (state_33183[(8)]);
var inst_33088 = inst_33082.cljs$lang$protocol_mask$partition0$;
var inst_33089 = (inst_33088 & (64));
var inst_33090 = inst_33082.cljs$core$ISeq$;
var inst_33091 = (cljs.core.PROTOCOL_SENTINEL === inst_33090);
var inst_33092 = ((inst_33089) || (inst_33091));
var state_33183__$1 = state_33183;
if(cljs.core.truth_(inst_33092)){
var statearr_33225_35668 = state_33183__$1;
(statearr_33225_35668[(1)] = (5));

} else {
var statearr_33226_35673 = state_33183__$1;
(statearr_33226_35673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (23))){
var inst_33140 = (state_33183[(14)]);
var inst_33146 = (inst_33140 == null);
var state_33183__$1 = state_33183;
if(cljs.core.truth_(inst_33146)){
var statearr_33227_35674 = state_33183__$1;
(statearr_33227_35674[(1)] = (26));

} else {
var statearr_33228_35675 = state_33183__$1;
(statearr_33228_35675[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (35))){
var inst_33167 = (state_33183[(2)]);
var state_33183__$1 = state_33183;
if(cljs.core.truth_(inst_33167)){
var statearr_33229_35677 = state_33183__$1;
(statearr_33229_35677[(1)] = (36));

} else {
var statearr_33230_35678 = state_33183__$1;
(statearr_33230_35678[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (19))){
var inst_33108 = (state_33183[(7)]);
var inst_33128 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33108);
var state_33183__$1 = state_33183;
var statearr_33235_35679 = state_33183__$1;
(statearr_33235_35679[(2)] = inst_33128);

(statearr_33235_35679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (11))){
var inst_33108 = (state_33183[(7)]);
var inst_33112 = (inst_33108 == null);
var inst_33113 = cljs.core.not(inst_33112);
var state_33183__$1 = state_33183;
if(inst_33113){
var statearr_33240_35681 = state_33183__$1;
(statearr_33240_35681[(1)] = (13));

} else {
var statearr_33241_35682 = state_33183__$1;
(statearr_33241_35682[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (9))){
var inst_33082 = (state_33183[(8)]);
var state_33183__$1 = state_33183;
var statearr_33246_35683 = state_33183__$1;
(statearr_33246_35683[(2)] = inst_33082);

(statearr_33246_35683[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (5))){
var state_33183__$1 = state_33183;
var statearr_33247_35684 = state_33183__$1;
(statearr_33247_35684[(2)] = true);

(statearr_33247_35684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (14))){
var state_33183__$1 = state_33183;
var statearr_33248_35685 = state_33183__$1;
(statearr_33248_35685[(2)] = false);

(statearr_33248_35685[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (26))){
var inst_33141 = (state_33183[(9)]);
var inst_33148 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33141);
var state_33183__$1 = state_33183;
var statearr_33249_35688 = state_33183__$1;
(statearr_33249_35688[(2)] = inst_33148);

(statearr_33249_35688[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (16))){
var state_33183__$1 = state_33183;
var statearr_33250_35689 = state_33183__$1;
(statearr_33250_35689[(2)] = true);

(statearr_33250_35689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (38))){
var inst_33172 = (state_33183[(2)]);
var state_33183__$1 = state_33183;
var statearr_33253_35691 = state_33183__$1;
(statearr_33253_35691[(2)] = inst_33172);

(statearr_33253_35691[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (30))){
var inst_33141 = (state_33183[(9)]);
var inst_33133 = (state_33183[(13)]);
var inst_33132 = (state_33183[(11)]);
var inst_33159 = cljs.core.empty_QMARK_(inst_33132);
var inst_33160 = (inst_33133.cljs$core$IFn$_invoke$arity$1 ? inst_33133.cljs$core$IFn$_invoke$arity$1(inst_33141) : inst_33133.call(null,inst_33141));
var inst_33161 = cljs.core.not(inst_33160);
var inst_33162 = ((inst_33159) && (inst_33161));
var state_33183__$1 = state_33183;
var statearr_33255_35708 = state_33183__$1;
(statearr_33255_35708[(2)] = inst_33162);

(statearr_33255_35708[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (10))){
var inst_33082 = (state_33183[(8)]);
var inst_33104 = (state_33183[(2)]);
var inst_33105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33104,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33106 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33104,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33104,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33108 = inst_33082;
var state_33183__$1 = (function (){var statearr_33256 = state_33183;
(statearr_33256[(16)] = inst_33106);

(statearr_33256[(17)] = inst_33107);

(statearr_33256[(7)] = inst_33108);

(statearr_33256[(18)] = inst_33105);

return statearr_33256;
})();
var statearr_33257_35710 = state_33183__$1;
(statearr_33257_35710[(2)] = null);

(statearr_33257_35710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (18))){
var inst_33123 = (state_33183[(2)]);
var state_33183__$1 = state_33183;
var statearr_33259_35711 = state_33183__$1;
(statearr_33259_35711[(2)] = inst_33123);

(statearr_33259_35711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (37))){
var state_33183__$1 = state_33183;
var statearr_33262_35713 = state_33183__$1;
(statearr_33262_35713[(2)] = null);

(statearr_33262_35713[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33184 === (8))){
var inst_33082 = (state_33183[(8)]);
var inst_33101 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33082);
var state_33183__$1 = state_33183;
var statearr_33263_35715 = state_33183__$1;
(statearr_33263_35715[(2)] = inst_33101);

(statearr_33263_35715[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__31564__auto__ = null;
var cljs$core$async$mix_$_state_machine__31564__auto____0 = (function (){
var statearr_33264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33264[(0)] = cljs$core$async$mix_$_state_machine__31564__auto__);

(statearr_33264[(1)] = (1));

return statearr_33264;
});
var cljs$core$async$mix_$_state_machine__31564__auto____1 = (function (state_33183){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_33183);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e33267){var ex__31567__auto__ = e33267;
var statearr_33268_35726 = state_33183;
(statearr_33268_35726[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_33183[(4)]))){
var statearr_33269_35731 = state_33183;
(statearr_33269_35731[(1)] = cljs.core.first((state_33183[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35732 = state_33183;
state_33183 = G__35732;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31564__auto__ = function(state_33183){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31564__auto____1.call(this,state_33183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31564__auto____0;
cljs$core$async$mix_$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31564__auto____1;
return cljs$core$async$mix_$_state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_33270 = f__31714__auto__();
(statearr_33270[(6)] = c__31712__auto___35584);

return statearr_33270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35735 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_35735(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35737 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_35737(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35738 = (function() {
var G__35739 = null;
var G__35739__1 = (function (p){
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
var G__35739__2 = (function (p,v){
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
G__35739 = function(p,v){
switch(arguments.length){
case 1:
return G__35739__1.call(this,p);
case 2:
return G__35739__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35739.cljs$core$IFn$_invoke$arity$1 = G__35739__1;
G__35739.cljs$core$IFn$_invoke$arity$2 = G__35739__2;
return G__35739;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33290 = arguments.length;
switch (G__33290) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35738(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35738(p,v);
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
var G__33312 = arguments.length;
switch (G__33312) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33308_SHARP_){
if(cljs.core.truth_((p1__33308_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33308_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33308_SHARP_.call(null,topic)))){
return p1__33308_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33308_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33314 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33315){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33315 = meta33315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33316,meta33315__$1){
var self__ = this;
var _33316__$1 = this;
return (new cljs.core.async.t_cljs$core$async33314(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33315__$1));
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33316){
var self__ = this;
var _33316__$1 = this;
return self__.meta33315;
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33315","meta33315",-1858914558,null)], null);
}));

(cljs.core.async.t_cljs$core$async33314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33314");

(cljs.core.async.t_cljs$core$async33314.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33314.
 */
cljs.core.async.__GT_t_cljs$core$async33314 = (function cljs$core$async$__GT_t_cljs$core$async33314(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33315){
return (new cljs.core.async.t_cljs$core$async33314(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33315));
});

}

return (new cljs.core.async.t_cljs$core$async33314(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31712__auto___35970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_33431){
var state_val_33432 = (state_33431[(1)]);
if((state_val_33432 === (7))){
var inst_33425 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33434_35972 = state_33431__$1;
(statearr_33434_35972[(2)] = inst_33425);

(statearr_33434_35972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (20))){
var state_33431__$1 = state_33431;
var statearr_33437_35973 = state_33431__$1;
(statearr_33437_35973[(2)] = null);

(statearr_33437_35973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (1))){
var state_33431__$1 = state_33431;
var statearr_33438_35974 = state_33431__$1;
(statearr_33438_35974[(2)] = null);

(statearr_33438_35974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (24))){
var inst_33406 = (state_33431[(7)]);
var inst_33417 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33406);
var state_33431__$1 = state_33431;
var statearr_33440_35981 = state_33431__$1;
(statearr_33440_35981[(2)] = inst_33417);

(statearr_33440_35981[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (4))){
var inst_33354 = (state_33431[(8)]);
var inst_33354__$1 = (state_33431[(2)]);
var inst_33355 = (inst_33354__$1 == null);
var state_33431__$1 = (function (){var statearr_33443 = state_33431;
(statearr_33443[(8)] = inst_33354__$1);

return statearr_33443;
})();
if(cljs.core.truth_(inst_33355)){
var statearr_33444_35986 = state_33431__$1;
(statearr_33444_35986[(1)] = (5));

} else {
var statearr_33445_35987 = state_33431__$1;
(statearr_33445_35987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (15))){
var inst_33400 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33447_35991 = state_33431__$1;
(statearr_33447_35991[(2)] = inst_33400);

(statearr_33447_35991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (21))){
var inst_33422 = (state_33431[(2)]);
var state_33431__$1 = (function (){var statearr_33449 = state_33431;
(statearr_33449[(9)] = inst_33422);

return statearr_33449;
})();
var statearr_33451_35992 = state_33431__$1;
(statearr_33451_35992[(2)] = null);

(statearr_33451_35992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (13))){
var inst_33380 = (state_33431[(10)]);
var inst_33383 = cljs.core.chunked_seq_QMARK_(inst_33380);
var state_33431__$1 = state_33431;
if(inst_33383){
var statearr_33454_35993 = state_33431__$1;
(statearr_33454_35993[(1)] = (16));

} else {
var statearr_33457_35996 = state_33431__$1;
(statearr_33457_35996[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (22))){
var inst_33414 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33414)){
var statearr_33459_35998 = state_33431__$1;
(statearr_33459_35998[(1)] = (23));

} else {
var statearr_33460_35999 = state_33431__$1;
(statearr_33460_35999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (6))){
var inst_33406 = (state_33431[(7)]);
var inst_33354 = (state_33431[(8)]);
var inst_33408 = (state_33431[(11)]);
var inst_33406__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33354) : topic_fn.call(null,inst_33354));
var inst_33407 = cljs.core.deref(mults);
var inst_33408__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33407,inst_33406__$1);
var state_33431__$1 = (function (){var statearr_33462 = state_33431;
(statearr_33462[(7)] = inst_33406__$1);

(statearr_33462[(11)] = inst_33408__$1);

return statearr_33462;
})();
if(cljs.core.truth_(inst_33408__$1)){
var statearr_33463_36013 = state_33431__$1;
(statearr_33463_36013[(1)] = (19));

} else {
var statearr_33464_36015 = state_33431__$1;
(statearr_33464_36015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (25))){
var inst_33419 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33465_36021 = state_33431__$1;
(statearr_33465_36021[(2)] = inst_33419);

(statearr_33465_36021[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (17))){
var inst_33380 = (state_33431[(10)]);
var inst_33391 = cljs.core.first(inst_33380);
var inst_33392 = cljs.core.async.muxch_STAR_(inst_33391);
var inst_33393 = cljs.core.async.close_BANG_(inst_33392);
var inst_33394 = cljs.core.next(inst_33380);
var inst_33366 = inst_33394;
var inst_33367 = null;
var inst_33368 = (0);
var inst_33369 = (0);
var state_33431__$1 = (function (){var statearr_33466 = state_33431;
(statearr_33466[(12)] = inst_33367);

(statearr_33466[(13)] = inst_33366);

(statearr_33466[(14)] = inst_33368);

(statearr_33466[(15)] = inst_33369);

(statearr_33466[(16)] = inst_33393);

return statearr_33466;
})();
var statearr_33467_36056 = state_33431__$1;
(statearr_33467_36056[(2)] = null);

(statearr_33467_36056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (3))){
var inst_33427 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33431__$1,inst_33427);
} else {
if((state_val_33432 === (12))){
var inst_33402 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33468_36075 = state_33431__$1;
(statearr_33468_36075[(2)] = inst_33402);

(statearr_33468_36075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (2))){
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33431__$1,(4),ch);
} else {
if((state_val_33432 === (23))){
var state_33431__$1 = state_33431;
var statearr_33469_36084 = state_33431__$1;
(statearr_33469_36084[(2)] = null);

(statearr_33469_36084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (19))){
var inst_33354 = (state_33431[(8)]);
var inst_33408 = (state_33431[(11)]);
var inst_33412 = cljs.core.async.muxch_STAR_(inst_33408);
var state_33431__$1 = state_33431;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33431__$1,(22),inst_33412,inst_33354);
} else {
if((state_val_33432 === (11))){
var inst_33366 = (state_33431[(13)]);
var inst_33380 = (state_33431[(10)]);
var inst_33380__$1 = cljs.core.seq(inst_33366);
var state_33431__$1 = (function (){var statearr_33470 = state_33431;
(statearr_33470[(10)] = inst_33380__$1);

return statearr_33470;
})();
if(inst_33380__$1){
var statearr_33471_36094 = state_33431__$1;
(statearr_33471_36094[(1)] = (13));

} else {
var statearr_33472_36095 = state_33431__$1;
(statearr_33472_36095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (9))){
var inst_33404 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33473_36096 = state_33431__$1;
(statearr_33473_36096[(2)] = inst_33404);

(statearr_33473_36096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (5))){
var inst_33361 = cljs.core.deref(mults);
var inst_33362 = cljs.core.vals(inst_33361);
var inst_33363 = cljs.core.seq(inst_33362);
var inst_33366 = inst_33363;
var inst_33367 = null;
var inst_33368 = (0);
var inst_33369 = (0);
var state_33431__$1 = (function (){var statearr_33475 = state_33431;
(statearr_33475[(12)] = inst_33367);

(statearr_33475[(13)] = inst_33366);

(statearr_33475[(14)] = inst_33368);

(statearr_33475[(15)] = inst_33369);

return statearr_33475;
})();
var statearr_33477_36101 = state_33431__$1;
(statearr_33477_36101[(2)] = null);

(statearr_33477_36101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (14))){
var state_33431__$1 = state_33431;
var statearr_33481_36102 = state_33431__$1;
(statearr_33481_36102[(2)] = null);

(statearr_33481_36102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (16))){
var inst_33380 = (state_33431[(10)]);
var inst_33386 = cljs.core.chunk_first(inst_33380);
var inst_33387 = cljs.core.chunk_rest(inst_33380);
var inst_33388 = cljs.core.count(inst_33386);
var inst_33366 = inst_33387;
var inst_33367 = inst_33386;
var inst_33368 = inst_33388;
var inst_33369 = (0);
var state_33431__$1 = (function (){var statearr_33482 = state_33431;
(statearr_33482[(12)] = inst_33367);

(statearr_33482[(13)] = inst_33366);

(statearr_33482[(14)] = inst_33368);

(statearr_33482[(15)] = inst_33369);

return statearr_33482;
})();
var statearr_33483_36103 = state_33431__$1;
(statearr_33483_36103[(2)] = null);

(statearr_33483_36103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (10))){
var inst_33367 = (state_33431[(12)]);
var inst_33366 = (state_33431[(13)]);
var inst_33368 = (state_33431[(14)]);
var inst_33369 = (state_33431[(15)]);
var inst_33374 = cljs.core._nth(inst_33367,inst_33369);
var inst_33375 = cljs.core.async.muxch_STAR_(inst_33374);
var inst_33376 = cljs.core.async.close_BANG_(inst_33375);
var inst_33377 = (inst_33369 + (1));
var tmp33478 = inst_33367;
var tmp33479 = inst_33366;
var tmp33480 = inst_33368;
var inst_33366__$1 = tmp33479;
var inst_33367__$1 = tmp33478;
var inst_33368__$1 = tmp33480;
var inst_33369__$1 = inst_33377;
var state_33431__$1 = (function (){var statearr_33484 = state_33431;
(statearr_33484[(12)] = inst_33367__$1);

(statearr_33484[(13)] = inst_33366__$1);

(statearr_33484[(14)] = inst_33368__$1);

(statearr_33484[(17)] = inst_33376);

(statearr_33484[(15)] = inst_33369__$1);

return statearr_33484;
})();
var statearr_33486_36104 = state_33431__$1;
(statearr_33486_36104[(2)] = null);

(statearr_33486_36104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (18))){
var inst_33397 = (state_33431[(2)]);
var state_33431__$1 = state_33431;
var statearr_33488_36105 = state_33431__$1;
(statearr_33488_36105[(2)] = inst_33397);

(statearr_33488_36105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33432 === (8))){
var inst_33368 = (state_33431[(14)]);
var inst_33369 = (state_33431[(15)]);
var inst_33371 = (inst_33369 < inst_33368);
var inst_33372 = inst_33371;
var state_33431__$1 = state_33431;
if(cljs.core.truth_(inst_33372)){
var statearr_33490_36111 = state_33431__$1;
(statearr_33490_36111[(1)] = (10));

} else {
var statearr_33491_36112 = state_33431__$1;
(statearr_33491_36112[(1)] = (11));

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
var cljs$core$async$state_machine__31564__auto__ = null;
var cljs$core$async$state_machine__31564__auto____0 = (function (){
var statearr_33494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33494[(0)] = cljs$core$async$state_machine__31564__auto__);

(statearr_33494[(1)] = (1));

return statearr_33494;
});
var cljs$core$async$state_machine__31564__auto____1 = (function (state_33431){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_33431);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e33495){var ex__31567__auto__ = e33495;
var statearr_33497_36117 = state_33431;
(statearr_33497_36117[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_33431[(4)]))){
var statearr_33498_36118 = state_33431;
(statearr_33498_36118[(1)] = cljs.core.first((state_33431[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36124 = state_33431;
state_33431 = G__36124;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$state_machine__31564__auto__ = function(state_33431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31564__auto____1.call(this,state_33431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31564__auto____0;
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31564__auto____1;
return cljs$core$async$state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_33499 = f__31714__auto__();
(statearr_33499[(6)] = c__31712__auto___35970);

return statearr_33499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
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
var G__33502 = arguments.length;
switch (G__33502) {
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
var G__33507 = arguments.length;
switch (G__33507) {
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
var G__33513 = arguments.length;
switch (G__33513) {
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
var c__31712__auto___36139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_33599){
var state_val_33602 = (state_33599[(1)]);
if((state_val_33602 === (7))){
var state_33599__$1 = state_33599;
var statearr_33605_36140 = state_33599__$1;
(statearr_33605_36140[(2)] = null);

(statearr_33605_36140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (1))){
var state_33599__$1 = state_33599;
var statearr_33606_36145 = state_33599__$1;
(statearr_33606_36145[(2)] = null);

(statearr_33606_36145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (4))){
var inst_33545 = (state_33599[(7)]);
var inst_33544 = (state_33599[(8)]);
var inst_33552 = (inst_33545 < inst_33544);
var state_33599__$1 = state_33599;
if(cljs.core.truth_(inst_33552)){
var statearr_33611_36147 = state_33599__$1;
(statearr_33611_36147[(1)] = (6));

} else {
var statearr_33612_36148 = state_33599__$1;
(statearr_33612_36148[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (15))){
var inst_33581 = (state_33599[(9)]);
var inst_33586 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33581);
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33599__$1,(17),out,inst_33586);
} else {
if((state_val_33602 === (13))){
var inst_33581 = (state_33599[(9)]);
var inst_33581__$1 = (state_33599[(2)]);
var inst_33582 = cljs.core.some(cljs.core.nil_QMARK_,inst_33581__$1);
var state_33599__$1 = (function (){var statearr_33616 = state_33599;
(statearr_33616[(9)] = inst_33581__$1);

return statearr_33616;
})();
if(cljs.core.truth_(inst_33582)){
var statearr_33617_36150 = state_33599__$1;
(statearr_33617_36150[(1)] = (14));

} else {
var statearr_33618_36151 = state_33599__$1;
(statearr_33618_36151[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (6))){
var state_33599__$1 = state_33599;
var statearr_33619_36152 = state_33599__$1;
(statearr_33619_36152[(2)] = null);

(statearr_33619_36152[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (17))){
var inst_33588 = (state_33599[(2)]);
var state_33599__$1 = (function (){var statearr_33625 = state_33599;
(statearr_33625[(10)] = inst_33588);

return statearr_33625;
})();
var statearr_33626_36153 = state_33599__$1;
(statearr_33626_36153[(2)] = null);

(statearr_33626_36153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (3))){
var inst_33595 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33599__$1,inst_33595);
} else {
if((state_val_33602 === (12))){
var _ = (function (){var statearr_33627 = state_33599;
(statearr_33627[(4)] = cljs.core.rest((state_33599[(4)])));

return statearr_33627;
})();
var state_33599__$1 = state_33599;
var ex33624 = (state_33599__$1[(2)]);
var statearr_33629_36169 = state_33599__$1;
(statearr_33629_36169[(5)] = ex33624);


if((ex33624 instanceof Object)){
var statearr_33630_36170 = state_33599__$1;
(statearr_33630_36170[(1)] = (11));

(statearr_33630_36170[(5)] = null);

} else {
throw ex33624;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (2))){
var inst_33542 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33544 = cnt;
var inst_33545 = (0);
var state_33599__$1 = (function (){var statearr_33636 = state_33599;
(statearr_33636[(7)] = inst_33545);

(statearr_33636[(8)] = inst_33544);

(statearr_33636[(11)] = inst_33542);

return statearr_33636;
})();
var statearr_33637_36171 = state_33599__$1;
(statearr_33637_36171[(2)] = null);

(statearr_33637_36171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (11))){
var inst_33559 = (state_33599[(2)]);
var inst_33560 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33599__$1 = (function (){var statearr_33638 = state_33599;
(statearr_33638[(12)] = inst_33559);

return statearr_33638;
})();
var statearr_33639_36173 = state_33599__$1;
(statearr_33639_36173[(2)] = inst_33560);

(statearr_33639_36173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (9))){
var inst_33545 = (state_33599[(7)]);
var _ = (function (){var statearr_33640 = state_33599;
(statearr_33640[(4)] = cljs.core.cons((12),(state_33599[(4)])));

return statearr_33640;
})();
var inst_33567 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33545) : chs__$1.call(null,inst_33545));
var inst_33568 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33545) : done.call(null,inst_33545));
var inst_33569 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33567,inst_33568);
var ___$1 = (function (){var statearr_33643 = state_33599;
(statearr_33643[(4)] = cljs.core.rest((state_33599[(4)])));

return statearr_33643;
})();
var state_33599__$1 = state_33599;
var statearr_33645_36180 = state_33599__$1;
(statearr_33645_36180[(2)] = inst_33569);

(statearr_33645_36180[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (5))){
var inst_33579 = (state_33599[(2)]);
var state_33599__$1 = (function (){var statearr_33646 = state_33599;
(statearr_33646[(13)] = inst_33579);

return statearr_33646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33599__$1,(13),dchan);
} else {
if((state_val_33602 === (14))){
var inst_33584 = cljs.core.async.close_BANG_(out);
var state_33599__$1 = state_33599;
var statearr_33647_36192 = state_33599__$1;
(statearr_33647_36192[(2)] = inst_33584);

(statearr_33647_36192[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (16))){
var inst_33591 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33650_36194 = state_33599__$1;
(statearr_33650_36194[(2)] = inst_33591);

(statearr_33650_36194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (10))){
var inst_33545 = (state_33599[(7)]);
var inst_33572 = (state_33599[(2)]);
var inst_33573 = (inst_33545 + (1));
var inst_33545__$1 = inst_33573;
var state_33599__$1 = (function (){var statearr_33654 = state_33599;
(statearr_33654[(7)] = inst_33545__$1);

(statearr_33654[(14)] = inst_33572);

return statearr_33654;
})();
var statearr_33659_36195 = state_33599__$1;
(statearr_33659_36195[(2)] = null);

(statearr_33659_36195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33602 === (8))){
var inst_33577 = (state_33599[(2)]);
var state_33599__$1 = state_33599;
var statearr_33663_36199 = state_33599__$1;
(statearr_33663_36199[(2)] = inst_33577);

(statearr_33663_36199[(1)] = (5));


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
var cljs$core$async$state_machine__31564__auto__ = null;
var cljs$core$async$state_machine__31564__auto____0 = (function (){
var statearr_33666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33666[(0)] = cljs$core$async$state_machine__31564__auto__);

(statearr_33666[(1)] = (1));

return statearr_33666;
});
var cljs$core$async$state_machine__31564__auto____1 = (function (state_33599){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_33599);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e33667){var ex__31567__auto__ = e33667;
var statearr_33668_36201 = state_33599;
(statearr_33668_36201[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_33599[(4)]))){
var statearr_33669_36202 = state_33599;
(statearr_33669_36202[(1)] = cljs.core.first((state_33599[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36206 = state_33599;
state_33599 = G__36206;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$state_machine__31564__auto__ = function(state_33599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31564__auto____1.call(this,state_33599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31564__auto____0;
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31564__auto____1;
return cljs$core$async$state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_33671 = f__31714__auto__();
(statearr_33671[(6)] = c__31712__auto___36139);

return statearr_33671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
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
var G__33682 = arguments.length;
switch (G__33682) {
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
var c__31712__auto___36214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_33728){
var state_val_33729 = (state_33728[(1)]);
if((state_val_33729 === (7))){
var inst_33706 = (state_33728[(7)]);
var inst_33707 = (state_33728[(8)]);
var inst_33706__$1 = (state_33728[(2)]);
var inst_33707__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33706__$1,(0),null);
var inst_33708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33706__$1,(1),null);
var inst_33709 = (inst_33707__$1 == null);
var state_33728__$1 = (function (){var statearr_33730 = state_33728;
(statearr_33730[(9)] = inst_33708);

(statearr_33730[(7)] = inst_33706__$1);

(statearr_33730[(8)] = inst_33707__$1);

return statearr_33730;
})();
if(cljs.core.truth_(inst_33709)){
var statearr_33731_36220 = state_33728__$1;
(statearr_33731_36220[(1)] = (8));

} else {
var statearr_33732_36221 = state_33728__$1;
(statearr_33732_36221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (1))){
var inst_33695 = cljs.core.vec(chs);
var inst_33696 = inst_33695;
var state_33728__$1 = (function (){var statearr_33735 = state_33728;
(statearr_33735[(10)] = inst_33696);

return statearr_33735;
})();
var statearr_33736_36223 = state_33728__$1;
(statearr_33736_36223[(2)] = null);

(statearr_33736_36223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (4))){
var inst_33696 = (state_33728[(10)]);
var state_33728__$1 = state_33728;
return cljs.core.async.ioc_alts_BANG_(state_33728__$1,(7),inst_33696);
} else {
if((state_val_33729 === (6))){
var inst_33724 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33739_36226 = state_33728__$1;
(statearr_33739_36226[(2)] = inst_33724);

(statearr_33739_36226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (3))){
var inst_33726 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33728__$1,inst_33726);
} else {
if((state_val_33729 === (2))){
var inst_33696 = (state_33728[(10)]);
var inst_33699 = cljs.core.count(inst_33696);
var inst_33700 = (inst_33699 > (0));
var state_33728__$1 = state_33728;
if(cljs.core.truth_(inst_33700)){
var statearr_33742_36227 = state_33728__$1;
(statearr_33742_36227[(1)] = (4));

} else {
var statearr_33743_36228 = state_33728__$1;
(statearr_33743_36228[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (11))){
var inst_33696 = (state_33728[(10)]);
var inst_33717 = (state_33728[(2)]);
var tmp33741 = inst_33696;
var inst_33696__$1 = tmp33741;
var state_33728__$1 = (function (){var statearr_33744 = state_33728;
(statearr_33744[(10)] = inst_33696__$1);

(statearr_33744[(11)] = inst_33717);

return statearr_33744;
})();
var statearr_33746_36229 = state_33728__$1;
(statearr_33746_36229[(2)] = null);

(statearr_33746_36229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (9))){
var inst_33707 = (state_33728[(8)]);
var state_33728__$1 = state_33728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33728__$1,(11),out,inst_33707);
} else {
if((state_val_33729 === (5))){
var inst_33722 = cljs.core.async.close_BANG_(out);
var state_33728__$1 = state_33728;
var statearr_33756_36238 = state_33728__$1;
(statearr_33756_36238[(2)] = inst_33722);

(statearr_33756_36238[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (10))){
var inst_33720 = (state_33728[(2)]);
var state_33728__$1 = state_33728;
var statearr_33757_36245 = state_33728__$1;
(statearr_33757_36245[(2)] = inst_33720);

(statearr_33757_36245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33729 === (8))){
var inst_33708 = (state_33728[(9)]);
var inst_33706 = (state_33728[(7)]);
var inst_33696 = (state_33728[(10)]);
var inst_33707 = (state_33728[(8)]);
var inst_33712 = (function (){var cs = inst_33696;
var vec__33702 = inst_33706;
var v = inst_33707;
var c = inst_33708;
return (function (p1__33676_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33676_SHARP_);
});
})();
var inst_33713 = cljs.core.filterv(inst_33712,inst_33696);
var inst_33696__$1 = inst_33713;
var state_33728__$1 = (function (){var statearr_33759 = state_33728;
(statearr_33759[(10)] = inst_33696__$1);

return statearr_33759;
})();
var statearr_33760_36265 = state_33728__$1;
(statearr_33760_36265[(2)] = null);

(statearr_33760_36265[(1)] = (2));


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
var cljs$core$async$state_machine__31564__auto__ = null;
var cljs$core$async$state_machine__31564__auto____0 = (function (){
var statearr_33763 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33763[(0)] = cljs$core$async$state_machine__31564__auto__);

(statearr_33763[(1)] = (1));

return statearr_33763;
});
var cljs$core$async$state_machine__31564__auto____1 = (function (state_33728){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_33728);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e33764){var ex__31567__auto__ = e33764;
var statearr_33765_36266 = state_33728;
(statearr_33765_36266[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_33728[(4)]))){
var statearr_33766_36267 = state_33728;
(statearr_33766_36267[(1)] = cljs.core.first((state_33728[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36268 = state_33728;
state_33728 = G__36268;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$state_machine__31564__auto__ = function(state_33728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31564__auto____1.call(this,state_33728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31564__auto____0;
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31564__auto____1;
return cljs$core$async$state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_33771 = f__31714__auto__();
(statearr_33771[(6)] = c__31712__auto___36214);

return statearr_33771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
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
var G__33776 = arguments.length;
switch (G__33776) {
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
var c__31712__auto___36365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_33802){
var state_val_33803 = (state_33802[(1)]);
if((state_val_33803 === (7))){
var inst_33783 = (state_33802[(7)]);
var inst_33783__$1 = (state_33802[(2)]);
var inst_33784 = (inst_33783__$1 == null);
var inst_33785 = cljs.core.not(inst_33784);
var state_33802__$1 = (function (){var statearr_33807 = state_33802;
(statearr_33807[(7)] = inst_33783__$1);

return statearr_33807;
})();
if(inst_33785){
var statearr_33808_36383 = state_33802__$1;
(statearr_33808_36383[(1)] = (8));

} else {
var statearr_33809_36384 = state_33802__$1;
(statearr_33809_36384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (1))){
var inst_33778 = (0);
var state_33802__$1 = (function (){var statearr_33810 = state_33802;
(statearr_33810[(8)] = inst_33778);

return statearr_33810;
})();
var statearr_33811_36389 = state_33802__$1;
(statearr_33811_36389[(2)] = null);

(statearr_33811_36389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (4))){
var state_33802__$1 = state_33802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33802__$1,(7),ch);
} else {
if((state_val_33803 === (6))){
var inst_33797 = (state_33802[(2)]);
var state_33802__$1 = state_33802;
var statearr_33812_36397 = state_33802__$1;
(statearr_33812_36397[(2)] = inst_33797);

(statearr_33812_36397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (3))){
var inst_33799 = (state_33802[(2)]);
var inst_33800 = cljs.core.async.close_BANG_(out);
var state_33802__$1 = (function (){var statearr_33814 = state_33802;
(statearr_33814[(9)] = inst_33799);

return statearr_33814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33802__$1,inst_33800);
} else {
if((state_val_33803 === (2))){
var inst_33778 = (state_33802[(8)]);
var inst_33780 = (inst_33778 < n);
var state_33802__$1 = state_33802;
if(cljs.core.truth_(inst_33780)){
var statearr_33816_36409 = state_33802__$1;
(statearr_33816_36409[(1)] = (4));

} else {
var statearr_33817_36410 = state_33802__$1;
(statearr_33817_36410[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (11))){
var inst_33778 = (state_33802[(8)]);
var inst_33788 = (state_33802[(2)]);
var inst_33789 = (inst_33778 + (1));
var inst_33778__$1 = inst_33789;
var state_33802__$1 = (function (){var statearr_33818 = state_33802;
(statearr_33818[(8)] = inst_33778__$1);

(statearr_33818[(10)] = inst_33788);

return statearr_33818;
})();
var statearr_33819_36415 = state_33802__$1;
(statearr_33819_36415[(2)] = null);

(statearr_33819_36415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (9))){
var state_33802__$1 = state_33802;
var statearr_33820_36416 = state_33802__$1;
(statearr_33820_36416[(2)] = null);

(statearr_33820_36416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (5))){
var state_33802__$1 = state_33802;
var statearr_33821_36417 = state_33802__$1;
(statearr_33821_36417[(2)] = null);

(statearr_33821_36417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (10))){
var inst_33793 = (state_33802[(2)]);
var state_33802__$1 = state_33802;
var statearr_33822_36418 = state_33802__$1;
(statearr_33822_36418[(2)] = inst_33793);

(statearr_33822_36418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (8))){
var inst_33783 = (state_33802[(7)]);
var state_33802__$1 = state_33802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33802__$1,(11),out,inst_33783);
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
var cljs$core$async$state_machine__31564__auto__ = null;
var cljs$core$async$state_machine__31564__auto____0 = (function (){
var statearr_33825 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33825[(0)] = cljs$core$async$state_machine__31564__auto__);

(statearr_33825[(1)] = (1));

return statearr_33825;
});
var cljs$core$async$state_machine__31564__auto____1 = (function (state_33802){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_33802);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e33826){var ex__31567__auto__ = e33826;
var statearr_33827_36419 = state_33802;
(statearr_33827_36419[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_33802[(4)]))){
var statearr_33828_36420 = state_33802;
(statearr_33828_36420[(1)] = cljs.core.first((state_33802[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36421 = state_33802;
state_33802 = G__36421;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$state_machine__31564__auto__ = function(state_33802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31564__auto____1.call(this,state_33802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31564__auto____0;
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31564__auto____1;
return cljs$core$async$state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_33829 = f__31714__auto__();
(statearr_33829[(6)] = c__31712__auto___36365);

return statearr_33829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33833 = (function (f,ch,meta33834){
this.f = f;
this.ch = ch;
this.meta33834 = meta33834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33835,meta33834__$1){
var self__ = this;
var _33835__$1 = this;
return (new cljs.core.async.t_cljs$core$async33833(self__.f,self__.ch,meta33834__$1));
}));

(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33835){
var self__ = this;
var _33835__$1 = this;
return self__.meta33834;
}));

(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33846 = (function (f,ch,meta33834,_,fn1,meta33847){
this.f = f;
this.ch = ch;
this.meta33834 = meta33834;
this._ = _;
this.fn1 = fn1;
this.meta33847 = meta33847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33848,meta33847__$1){
var self__ = this;
var _33848__$1 = this;
return (new cljs.core.async.t_cljs$core$async33846(self__.f,self__.ch,self__.meta33834,self__._,self__.fn1,meta33847__$1));
}));

(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33848){
var self__ = this;
var _33848__$1 = this;
return self__.meta33847;
}));

(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33832_SHARP_){
var G__33852 = (((p1__33832_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33832_SHARP_) : self__.f.call(null,p1__33832_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33852) : f1.call(null,G__33852));
});
}));

(cljs.core.async.t_cljs$core$async33846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33834","meta33834",-1800136879,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33833","cljs.core.async/t_cljs$core$async33833",1230323596,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33847","meta33847",935262547,null)], null);
}));

(cljs.core.async.t_cljs$core$async33846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33846");

(cljs.core.async.t_cljs$core$async33846.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33846.
 */
cljs.core.async.__GT_t_cljs$core$async33846 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33846(f__$1,ch__$1,meta33834__$1,___$2,fn1__$1,meta33847){
return (new cljs.core.async.t_cljs$core$async33846(f__$1,ch__$1,meta33834__$1,___$2,fn1__$1,meta33847));
});

}

return (new cljs.core.async.t_cljs$core$async33846(self__.f,self__.ch,self__.meta33834,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33853 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33853) : self__.f.call(null,G__33853));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33834","meta33834",-1800136879,null)], null);
}));

(cljs.core.async.t_cljs$core$async33833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33833");

(cljs.core.async.t_cljs$core$async33833.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33833.
 */
cljs.core.async.__GT_t_cljs$core$async33833 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33833(f__$1,ch__$1,meta33834){
return (new cljs.core.async.t_cljs$core$async33833(f__$1,ch__$1,meta33834));
});

}

return (new cljs.core.async.t_cljs$core$async33833(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33858 = (function (f,ch,meta33859){
this.f = f;
this.ch = ch;
this.meta33859 = meta33859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33860,meta33859__$1){
var self__ = this;
var _33860__$1 = this;
return (new cljs.core.async.t_cljs$core$async33858(self__.f,self__.ch,meta33859__$1));
}));

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33860){
var self__ = this;
var _33860__$1 = this;
return self__.meta33859;
}));

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33858.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33859","meta33859",-2065364339,null)], null);
}));

(cljs.core.async.t_cljs$core$async33858.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33858");

(cljs.core.async.t_cljs$core$async33858.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33858");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33858.
 */
cljs.core.async.__GT_t_cljs$core$async33858 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33858(f__$1,ch__$1,meta33859){
return (new cljs.core.async.t_cljs$core$async33858(f__$1,ch__$1,meta33859));
});

}

return (new cljs.core.async.t_cljs$core$async33858(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33862 = (function (p,ch,meta33863){
this.p = p;
this.ch = ch;
this.meta33863 = meta33863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33864,meta33863__$1){
var self__ = this;
var _33864__$1 = this;
return (new cljs.core.async.t_cljs$core$async33862(self__.p,self__.ch,meta33863__$1));
}));

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33864){
var self__ = this;
var _33864__$1 = this;
return self__.meta33863;
}));

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33862.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33862.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33863","meta33863",-1777242211,null)], null);
}));

(cljs.core.async.t_cljs$core$async33862.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33862");

(cljs.core.async.t_cljs$core$async33862.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33862");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33862.
 */
cljs.core.async.__GT_t_cljs$core$async33862 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33862(p__$1,ch__$1,meta33863){
return (new cljs.core.async.t_cljs$core$async33862(p__$1,ch__$1,meta33863));
});

}

return (new cljs.core.async.t_cljs$core$async33862(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33875 = arguments.length;
switch (G__33875) {
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
var c__31712__auto___36482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_33900){
var state_val_33901 = (state_33900[(1)]);
if((state_val_33901 === (7))){
var inst_33896 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
var statearr_33910_36483 = state_33900__$1;
(statearr_33910_36483[(2)] = inst_33896);

(statearr_33910_36483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (1))){
var state_33900__$1 = state_33900;
var statearr_33911_36484 = state_33900__$1;
(statearr_33911_36484[(2)] = null);

(statearr_33911_36484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (4))){
var inst_33878 = (state_33900[(7)]);
var inst_33878__$1 = (state_33900[(2)]);
var inst_33879 = (inst_33878__$1 == null);
var state_33900__$1 = (function (){var statearr_33912 = state_33900;
(statearr_33912[(7)] = inst_33878__$1);

return statearr_33912;
})();
if(cljs.core.truth_(inst_33879)){
var statearr_33916_36486 = state_33900__$1;
(statearr_33916_36486[(1)] = (5));

} else {
var statearr_33917_36487 = state_33900__$1;
(statearr_33917_36487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (6))){
var inst_33878 = (state_33900[(7)]);
var inst_33883 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33878) : p.call(null,inst_33878));
var state_33900__$1 = state_33900;
if(cljs.core.truth_(inst_33883)){
var statearr_33921_36489 = state_33900__$1;
(statearr_33921_36489[(1)] = (8));

} else {
var statearr_33922_36490 = state_33900__$1;
(statearr_33922_36490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (3))){
var inst_33898 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33900__$1,inst_33898);
} else {
if((state_val_33901 === (2))){
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33900__$1,(4),ch);
} else {
if((state_val_33901 === (11))){
var inst_33890 = (state_33900[(2)]);
var state_33900__$1 = state_33900;
var statearr_33923_36494 = state_33900__$1;
(statearr_33923_36494[(2)] = inst_33890);

(statearr_33923_36494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (9))){
var state_33900__$1 = state_33900;
var statearr_33924_36497 = state_33900__$1;
(statearr_33924_36497[(2)] = null);

(statearr_33924_36497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (5))){
var inst_33881 = cljs.core.async.close_BANG_(out);
var state_33900__$1 = state_33900;
var statearr_33925_36499 = state_33900__$1;
(statearr_33925_36499[(2)] = inst_33881);

(statearr_33925_36499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (10))){
var inst_33893 = (state_33900[(2)]);
var state_33900__$1 = (function (){var statearr_33926 = state_33900;
(statearr_33926[(8)] = inst_33893);

return statearr_33926;
})();
var statearr_33927_36502 = state_33900__$1;
(statearr_33927_36502[(2)] = null);

(statearr_33927_36502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33901 === (8))){
var inst_33878 = (state_33900[(7)]);
var state_33900__$1 = state_33900;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33900__$1,(11),out,inst_33878);
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
var cljs$core$async$state_machine__31564__auto__ = null;
var cljs$core$async$state_machine__31564__auto____0 = (function (){
var statearr_33928 = [null,null,null,null,null,null,null,null,null];
(statearr_33928[(0)] = cljs$core$async$state_machine__31564__auto__);

(statearr_33928[(1)] = (1));

return statearr_33928;
});
var cljs$core$async$state_machine__31564__auto____1 = (function (state_33900){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_33900);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e33929){var ex__31567__auto__ = e33929;
var statearr_33930_36504 = state_33900;
(statearr_33930_36504[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_33900[(4)]))){
var statearr_33931_36507 = state_33900;
(statearr_33931_36507[(1)] = cljs.core.first((state_33900[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36508 = state_33900;
state_33900 = G__36508;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$state_machine__31564__auto__ = function(state_33900){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31564__auto____1.call(this,state_33900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31564__auto____0;
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31564__auto____1;
return cljs$core$async$state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_33932 = f__31714__auto__();
(statearr_33932[(6)] = c__31712__auto___36482);

return statearr_33932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33938 = arguments.length;
switch (G__33938) {
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
var c__31712__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_34012){
var state_val_34013 = (state_34012[(1)]);
if((state_val_34013 === (7))){
var inst_34007 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
var statearr_34042_36522 = state_34012__$1;
(statearr_34042_36522[(2)] = inst_34007);

(statearr_34042_36522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (20))){
var inst_33975 = (state_34012[(7)]);
var inst_33986 = (state_34012[(2)]);
var inst_33987 = cljs.core.next(inst_33975);
var inst_33959 = inst_33987;
var inst_33960 = null;
var inst_33961 = (0);
var inst_33962 = (0);
var state_34012__$1 = (function (){var statearr_34043 = state_34012;
(statearr_34043[(8)] = inst_33960);

(statearr_34043[(9)] = inst_33961);

(statearr_34043[(10)] = inst_33962);

(statearr_34043[(11)] = inst_33959);

(statearr_34043[(12)] = inst_33986);

return statearr_34043;
})();
var statearr_34044_36524 = state_34012__$1;
(statearr_34044_36524[(2)] = null);

(statearr_34044_36524[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (1))){
var state_34012__$1 = state_34012;
var statearr_34045_36525 = state_34012__$1;
(statearr_34045_36525[(2)] = null);

(statearr_34045_36525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (4))){
var inst_33946 = (state_34012[(13)]);
var inst_33946__$1 = (state_34012[(2)]);
var inst_33947 = (inst_33946__$1 == null);
var state_34012__$1 = (function (){var statearr_34046 = state_34012;
(statearr_34046[(13)] = inst_33946__$1);

return statearr_34046;
})();
if(cljs.core.truth_(inst_33947)){
var statearr_34047_36526 = state_34012__$1;
(statearr_34047_36526[(1)] = (5));

} else {
var statearr_34048_36527 = state_34012__$1;
(statearr_34048_36527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (15))){
var state_34012__$1 = state_34012;
var statearr_34052_36528 = state_34012__$1;
(statearr_34052_36528[(2)] = null);

(statearr_34052_36528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (21))){
var state_34012__$1 = state_34012;
var statearr_34053_36529 = state_34012__$1;
(statearr_34053_36529[(2)] = null);

(statearr_34053_36529[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (13))){
var inst_33960 = (state_34012[(8)]);
var inst_33961 = (state_34012[(9)]);
var inst_33962 = (state_34012[(10)]);
var inst_33959 = (state_34012[(11)]);
var inst_33970 = (state_34012[(2)]);
var inst_33971 = (inst_33962 + (1));
var tmp34049 = inst_33960;
var tmp34050 = inst_33961;
var tmp34051 = inst_33959;
var inst_33959__$1 = tmp34051;
var inst_33960__$1 = tmp34049;
var inst_33961__$1 = tmp34050;
var inst_33962__$1 = inst_33971;
var state_34012__$1 = (function (){var statearr_34054 = state_34012;
(statearr_34054[(8)] = inst_33960__$1);

(statearr_34054[(9)] = inst_33961__$1);

(statearr_34054[(10)] = inst_33962__$1);

(statearr_34054[(11)] = inst_33959__$1);

(statearr_34054[(14)] = inst_33970);

return statearr_34054;
})();
var statearr_34055_36534 = state_34012__$1;
(statearr_34055_36534[(2)] = null);

(statearr_34055_36534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (22))){
var state_34012__$1 = state_34012;
var statearr_34057_36536 = state_34012__$1;
(statearr_34057_36536[(2)] = null);

(statearr_34057_36536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (6))){
var inst_33946 = (state_34012[(13)]);
var inst_33956 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33946) : f.call(null,inst_33946));
var inst_33957 = cljs.core.seq(inst_33956);
var inst_33959 = inst_33957;
var inst_33960 = null;
var inst_33961 = (0);
var inst_33962 = (0);
var state_34012__$1 = (function (){var statearr_34058 = state_34012;
(statearr_34058[(8)] = inst_33960);

(statearr_34058[(9)] = inst_33961);

(statearr_34058[(10)] = inst_33962);

(statearr_34058[(11)] = inst_33959);

return statearr_34058;
})();
var statearr_34059_36544 = state_34012__$1;
(statearr_34059_36544[(2)] = null);

(statearr_34059_36544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (17))){
var inst_33975 = (state_34012[(7)]);
var inst_33979 = cljs.core.chunk_first(inst_33975);
var inst_33980 = cljs.core.chunk_rest(inst_33975);
var inst_33981 = cljs.core.count(inst_33979);
var inst_33959 = inst_33980;
var inst_33960 = inst_33979;
var inst_33961 = inst_33981;
var inst_33962 = (0);
var state_34012__$1 = (function (){var statearr_34060 = state_34012;
(statearr_34060[(8)] = inst_33960);

(statearr_34060[(9)] = inst_33961);

(statearr_34060[(10)] = inst_33962);

(statearr_34060[(11)] = inst_33959);

return statearr_34060;
})();
var statearr_34061_36548 = state_34012__$1;
(statearr_34061_36548[(2)] = null);

(statearr_34061_36548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (3))){
var inst_34009 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34012__$1,inst_34009);
} else {
if((state_val_34013 === (12))){
var inst_33997 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
var statearr_34066_36549 = state_34012__$1;
(statearr_34066_36549[(2)] = inst_33997);

(statearr_34066_36549[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (2))){
var state_34012__$1 = state_34012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34012__$1,(4),in$);
} else {
if((state_val_34013 === (23))){
var inst_34005 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
var statearr_34069_36553 = state_34012__$1;
(statearr_34069_36553[(2)] = inst_34005);

(statearr_34069_36553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (19))){
var inst_33992 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
var statearr_34072_36555 = state_34012__$1;
(statearr_34072_36555[(2)] = inst_33992);

(statearr_34072_36555[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (11))){
var inst_33975 = (state_34012[(7)]);
var inst_33959 = (state_34012[(11)]);
var inst_33975__$1 = cljs.core.seq(inst_33959);
var state_34012__$1 = (function (){var statearr_34076 = state_34012;
(statearr_34076[(7)] = inst_33975__$1);

return statearr_34076;
})();
if(inst_33975__$1){
var statearr_34077_36559 = state_34012__$1;
(statearr_34077_36559[(1)] = (14));

} else {
var statearr_34078_36560 = state_34012__$1;
(statearr_34078_36560[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (9))){
var inst_33999 = (state_34012[(2)]);
var inst_34000 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34012__$1 = (function (){var statearr_34079 = state_34012;
(statearr_34079[(15)] = inst_33999);

return statearr_34079;
})();
if(cljs.core.truth_(inst_34000)){
var statearr_34080_36562 = state_34012__$1;
(statearr_34080_36562[(1)] = (21));

} else {
var statearr_34081_36604 = state_34012__$1;
(statearr_34081_36604[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (5))){
var inst_33949 = cljs.core.async.close_BANG_(out);
var state_34012__$1 = state_34012;
var statearr_34082_36609 = state_34012__$1;
(statearr_34082_36609[(2)] = inst_33949);

(statearr_34082_36609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (14))){
var inst_33975 = (state_34012[(7)]);
var inst_33977 = cljs.core.chunked_seq_QMARK_(inst_33975);
var state_34012__$1 = state_34012;
if(inst_33977){
var statearr_34083_36613 = state_34012__$1;
(statearr_34083_36613[(1)] = (17));

} else {
var statearr_34084_36614 = state_34012__$1;
(statearr_34084_36614[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (16))){
var inst_33995 = (state_34012[(2)]);
var state_34012__$1 = state_34012;
var statearr_34085_36616 = state_34012__$1;
(statearr_34085_36616[(2)] = inst_33995);

(statearr_34085_36616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34013 === (10))){
var inst_33960 = (state_34012[(8)]);
var inst_33962 = (state_34012[(10)]);
var inst_33968 = cljs.core._nth(inst_33960,inst_33962);
var state_34012__$1 = state_34012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34012__$1,(13),out,inst_33968);
} else {
if((state_val_34013 === (18))){
var inst_33975 = (state_34012[(7)]);
var inst_33984 = cljs.core.first(inst_33975);
var state_34012__$1 = state_34012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34012__$1,(20),out,inst_33984);
} else {
if((state_val_34013 === (8))){
var inst_33961 = (state_34012[(9)]);
var inst_33962 = (state_34012[(10)]);
var inst_33964 = (inst_33962 < inst_33961);
var inst_33966 = inst_33964;
var state_34012__$1 = state_34012;
if(cljs.core.truth_(inst_33966)){
var statearr_34091_36618 = state_34012__$1;
(statearr_34091_36618[(1)] = (10));

} else {
var statearr_34092_36619 = state_34012__$1;
(statearr_34092_36619[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__31564__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31564__auto____0 = (function (){
var statearr_34093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34093[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31564__auto__);

(statearr_34093[(1)] = (1));

return statearr_34093;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31564__auto____1 = (function (state_34012){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_34012);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e34100){var ex__31567__auto__ = e34100;
var statearr_34101_36626 = state_34012;
(statearr_34101_36626[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_34012[(4)]))){
var statearr_34102_36631 = state_34012;
(statearr_34102_36631[(1)] = cljs.core.first((state_34012[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36636 = state_34012;
state_34012 = G__36636;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31564__auto__ = function(state_34012){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31564__auto____1.call(this,state_34012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31564__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31564__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_34104 = f__31714__auto__();
(statearr_34104[(6)] = c__31712__auto__);

return statearr_34104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
}));

return c__31712__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34110 = arguments.length;
switch (G__34110) {
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
var G__34121 = arguments.length;
switch (G__34121) {
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
var G__34133 = arguments.length;
switch (G__34133) {
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
var c__31712__auto___36646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_34165){
var state_val_34166 = (state_34165[(1)]);
if((state_val_34166 === (7))){
var inst_34160 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
var statearr_34170_36649 = state_34165__$1;
(statearr_34170_36649[(2)] = inst_34160);

(statearr_34170_36649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (1))){
var inst_34142 = null;
var state_34165__$1 = (function (){var statearr_34171 = state_34165;
(statearr_34171[(7)] = inst_34142);

return statearr_34171;
})();
var statearr_34173_36650 = state_34165__$1;
(statearr_34173_36650[(2)] = null);

(statearr_34173_36650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (4))){
var inst_34145 = (state_34165[(8)]);
var inst_34145__$1 = (state_34165[(2)]);
var inst_34146 = (inst_34145__$1 == null);
var inst_34147 = cljs.core.not(inst_34146);
var state_34165__$1 = (function (){var statearr_34174 = state_34165;
(statearr_34174[(8)] = inst_34145__$1);

return statearr_34174;
})();
if(inst_34147){
var statearr_34175_36660 = state_34165__$1;
(statearr_34175_36660[(1)] = (5));

} else {
var statearr_34176_36661 = state_34165__$1;
(statearr_34176_36661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (6))){
var state_34165__$1 = state_34165;
var statearr_34177_36663 = state_34165__$1;
(statearr_34177_36663[(2)] = null);

(statearr_34177_36663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (3))){
var inst_34162 = (state_34165[(2)]);
var inst_34163 = cljs.core.async.close_BANG_(out);
var state_34165__$1 = (function (){var statearr_34194 = state_34165;
(statearr_34194[(9)] = inst_34162);

return statearr_34194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34165__$1,inst_34163);
} else {
if((state_val_34166 === (2))){
var state_34165__$1 = state_34165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34165__$1,(4),ch);
} else {
if((state_val_34166 === (11))){
var inst_34145 = (state_34165[(8)]);
var inst_34154 = (state_34165[(2)]);
var inst_34142 = inst_34145;
var state_34165__$1 = (function (){var statearr_34195 = state_34165;
(statearr_34195[(7)] = inst_34142);

(statearr_34195[(10)] = inst_34154);

return statearr_34195;
})();
var statearr_34197_36669 = state_34165__$1;
(statearr_34197_36669[(2)] = null);

(statearr_34197_36669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (9))){
var inst_34145 = (state_34165[(8)]);
var state_34165__$1 = state_34165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34165__$1,(11),out,inst_34145);
} else {
if((state_val_34166 === (5))){
var inst_34145 = (state_34165[(8)]);
var inst_34142 = (state_34165[(7)]);
var inst_34149 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34145,inst_34142);
var state_34165__$1 = state_34165;
if(inst_34149){
var statearr_34199_36675 = state_34165__$1;
(statearr_34199_36675[(1)] = (8));

} else {
var statearr_34200_36677 = state_34165__$1;
(statearr_34200_36677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (10))){
var inst_34157 = (state_34165[(2)]);
var state_34165__$1 = state_34165;
var statearr_34203_36678 = state_34165__$1;
(statearr_34203_36678[(2)] = inst_34157);

(statearr_34203_36678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34166 === (8))){
var inst_34142 = (state_34165[(7)]);
var tmp34198 = inst_34142;
var inst_34142__$1 = tmp34198;
var state_34165__$1 = (function (){var statearr_34204 = state_34165;
(statearr_34204[(7)] = inst_34142__$1);

return statearr_34204;
})();
var statearr_34205_36679 = state_34165__$1;
(statearr_34205_36679[(2)] = null);

(statearr_34205_36679[(1)] = (2));


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
var cljs$core$async$state_machine__31564__auto__ = null;
var cljs$core$async$state_machine__31564__auto____0 = (function (){
var statearr_34206 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34206[(0)] = cljs$core$async$state_machine__31564__auto__);

(statearr_34206[(1)] = (1));

return statearr_34206;
});
var cljs$core$async$state_machine__31564__auto____1 = (function (state_34165){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_34165);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e34207){var ex__31567__auto__ = e34207;
var statearr_34208_36680 = state_34165;
(statearr_34208_36680[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_34165[(4)]))){
var statearr_34209_36681 = state_34165;
(statearr_34209_36681[(1)] = cljs.core.first((state_34165[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36683 = state_34165;
state_34165 = G__36683;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$state_machine__31564__auto__ = function(state_34165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31564__auto____1.call(this,state_34165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31564__auto____0;
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31564__auto____1;
return cljs$core$async$state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_34210 = f__31714__auto__();
(statearr_34210[(6)] = c__31712__auto___36646);

return statearr_34210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34212 = arguments.length;
switch (G__34212) {
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
var c__31712__auto___36686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_34268){
var state_val_34269 = (state_34268[(1)]);
if((state_val_34269 === (7))){
var inst_34264 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34278_36687 = state_34268__$1;
(statearr_34278_36687[(2)] = inst_34264);

(statearr_34278_36687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (1))){
var inst_34223 = (new Array(n));
var inst_34224 = inst_34223;
var inst_34225 = (0);
var state_34268__$1 = (function (){var statearr_34299 = state_34268;
(statearr_34299[(7)] = inst_34224);

(statearr_34299[(8)] = inst_34225);

return statearr_34299;
})();
var statearr_34300_36689 = state_34268__$1;
(statearr_34300_36689[(2)] = null);

(statearr_34300_36689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (4))){
var inst_34232 = (state_34268[(9)]);
var inst_34232__$1 = (state_34268[(2)]);
var inst_34233 = (inst_34232__$1 == null);
var inst_34234 = cljs.core.not(inst_34233);
var state_34268__$1 = (function (){var statearr_34301 = state_34268;
(statearr_34301[(9)] = inst_34232__$1);

return statearr_34301;
})();
if(inst_34234){
var statearr_34302_36694 = state_34268__$1;
(statearr_34302_36694[(1)] = (5));

} else {
var statearr_34303_36695 = state_34268__$1;
(statearr_34303_36695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (15))){
var inst_34258 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34306_36696 = state_34268__$1;
(statearr_34306_36696[(2)] = inst_34258);

(statearr_34306_36696[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (13))){
var state_34268__$1 = state_34268;
var statearr_34318_36697 = state_34268__$1;
(statearr_34318_36697[(2)] = null);

(statearr_34318_36697[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (6))){
var inst_34225 = (state_34268[(8)]);
var inst_34254 = (inst_34225 > (0));
var state_34268__$1 = state_34268;
if(cljs.core.truth_(inst_34254)){
var statearr_34326_36698 = state_34268__$1;
(statearr_34326_36698[(1)] = (12));

} else {
var statearr_34331_36699 = state_34268__$1;
(statearr_34331_36699[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (3))){
var inst_34266 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34268__$1,inst_34266);
} else {
if((state_val_34269 === (12))){
var inst_34224 = (state_34268[(7)]);
var inst_34256 = cljs.core.vec(inst_34224);
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34268__$1,(15),out,inst_34256);
} else {
if((state_val_34269 === (2))){
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34268__$1,(4),ch);
} else {
if((state_val_34269 === (11))){
var inst_34244 = (state_34268[(2)]);
var inst_34245 = (new Array(n));
var inst_34224 = inst_34245;
var inst_34225 = (0);
var state_34268__$1 = (function (){var statearr_34338 = state_34268;
(statearr_34338[(10)] = inst_34244);

(statearr_34338[(7)] = inst_34224);

(statearr_34338[(8)] = inst_34225);

return statearr_34338;
})();
var statearr_34339_36703 = state_34268__$1;
(statearr_34339_36703[(2)] = null);

(statearr_34339_36703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (9))){
var inst_34224 = (state_34268[(7)]);
var inst_34242 = cljs.core.vec(inst_34224);
var state_34268__$1 = state_34268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34268__$1,(11),out,inst_34242);
} else {
if((state_val_34269 === (5))){
var inst_34232 = (state_34268[(9)]);
var inst_34224 = (state_34268[(7)]);
var inst_34225 = (state_34268[(8)]);
var inst_34237 = (state_34268[(11)]);
var inst_34236 = (inst_34224[inst_34225] = inst_34232);
var inst_34237__$1 = (inst_34225 + (1));
var inst_34238 = (inst_34237__$1 < n);
var state_34268__$1 = (function (){var statearr_34351 = state_34268;
(statearr_34351[(12)] = inst_34236);

(statearr_34351[(11)] = inst_34237__$1);

return statearr_34351;
})();
if(cljs.core.truth_(inst_34238)){
var statearr_34355_36708 = state_34268__$1;
(statearr_34355_36708[(1)] = (8));

} else {
var statearr_34360_36709 = state_34268__$1;
(statearr_34360_36709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (14))){
var inst_34261 = (state_34268[(2)]);
var inst_34262 = cljs.core.async.close_BANG_(out);
var state_34268__$1 = (function (){var statearr_34371 = state_34268;
(statearr_34371[(13)] = inst_34261);

return statearr_34371;
})();
var statearr_34372_36710 = state_34268__$1;
(statearr_34372_36710[(2)] = inst_34262);

(statearr_34372_36710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (10))){
var inst_34252 = (state_34268[(2)]);
var state_34268__$1 = state_34268;
var statearr_34374_36711 = state_34268__$1;
(statearr_34374_36711[(2)] = inst_34252);

(statearr_34374_36711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34269 === (8))){
var inst_34224 = (state_34268[(7)]);
var inst_34237 = (state_34268[(11)]);
var tmp34366 = inst_34224;
var inst_34224__$1 = tmp34366;
var inst_34225 = inst_34237;
var state_34268__$1 = (function (){var statearr_34375 = state_34268;
(statearr_34375[(7)] = inst_34224__$1);

(statearr_34375[(8)] = inst_34225);

return statearr_34375;
})();
var statearr_34377_36712 = state_34268__$1;
(statearr_34377_36712[(2)] = null);

(statearr_34377_36712[(1)] = (2));


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
var cljs$core$async$state_machine__31564__auto__ = null;
var cljs$core$async$state_machine__31564__auto____0 = (function (){
var statearr_34378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34378[(0)] = cljs$core$async$state_machine__31564__auto__);

(statearr_34378[(1)] = (1));

return statearr_34378;
});
var cljs$core$async$state_machine__31564__auto____1 = (function (state_34268){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_34268);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e34379){var ex__31567__auto__ = e34379;
var statearr_34381_36713 = state_34268;
(statearr_34381_36713[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_34268[(4)]))){
var statearr_34382_36714 = state_34268;
(statearr_34382_36714[(1)] = cljs.core.first((state_34268[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36715 = state_34268;
state_34268 = G__36715;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$state_machine__31564__auto__ = function(state_34268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31564__auto____1.call(this,state_34268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31564__auto____0;
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31564__auto____1;
return cljs$core$async$state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_34385 = f__31714__auto__();
(statearr_34385[(6)] = c__31712__auto___36686);

return statearr_34385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34393 = arguments.length;
switch (G__34393) {
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
var c__31712__auto___36722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_34436){
var state_val_34437 = (state_34436[(1)]);
if((state_val_34437 === (7))){
var inst_34432 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
var statearr_34441_36730 = state_34436__$1;
(statearr_34441_36730[(2)] = inst_34432);

(statearr_34441_36730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (1))){
var inst_34395 = [];
var inst_34396 = inst_34395;
var inst_34397 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34436__$1 = (function (){var statearr_34442 = state_34436;
(statearr_34442[(7)] = inst_34396);

(statearr_34442[(8)] = inst_34397);

return statearr_34442;
})();
var statearr_34443_36755 = state_34436__$1;
(statearr_34443_36755[(2)] = null);

(statearr_34443_36755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (4))){
var inst_34400 = (state_34436[(9)]);
var inst_34400__$1 = (state_34436[(2)]);
var inst_34401 = (inst_34400__$1 == null);
var inst_34402 = cljs.core.not(inst_34401);
var state_34436__$1 = (function (){var statearr_34444 = state_34436;
(statearr_34444[(9)] = inst_34400__$1);

return statearr_34444;
})();
if(inst_34402){
var statearr_34446_36756 = state_34436__$1;
(statearr_34446_36756[(1)] = (5));

} else {
var statearr_34447_36757 = state_34436__$1;
(statearr_34447_36757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (15))){
var inst_34426 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
var statearr_34448_36758 = state_34436__$1;
(statearr_34448_36758[(2)] = inst_34426);

(statearr_34448_36758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (13))){
var state_34436__$1 = state_34436;
var statearr_34449_36759 = state_34436__$1;
(statearr_34449_36759[(2)] = null);

(statearr_34449_36759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (6))){
var inst_34396 = (state_34436[(7)]);
var inst_34421 = inst_34396.length;
var inst_34422 = (inst_34421 > (0));
var state_34436__$1 = state_34436;
if(cljs.core.truth_(inst_34422)){
var statearr_34452_36760 = state_34436__$1;
(statearr_34452_36760[(1)] = (12));

} else {
var statearr_34453_36761 = state_34436__$1;
(statearr_34453_36761[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (3))){
var inst_34434 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34436__$1,inst_34434);
} else {
if((state_val_34437 === (12))){
var inst_34396 = (state_34436[(7)]);
var inst_34424 = cljs.core.vec(inst_34396);
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34436__$1,(15),out,inst_34424);
} else {
if((state_val_34437 === (2))){
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34436__$1,(4),ch);
} else {
if((state_val_34437 === (11))){
var inst_34400 = (state_34436[(9)]);
var inst_34404 = (state_34436[(10)]);
var inst_34414 = (state_34436[(2)]);
var inst_34415 = [];
var inst_34416 = inst_34415.push(inst_34400);
var inst_34396 = inst_34415;
var inst_34397 = inst_34404;
var state_34436__$1 = (function (){var statearr_34454 = state_34436;
(statearr_34454[(7)] = inst_34396);

(statearr_34454[(11)] = inst_34414);

(statearr_34454[(8)] = inst_34397);

(statearr_34454[(12)] = inst_34416);

return statearr_34454;
})();
var statearr_34455_36762 = state_34436__$1;
(statearr_34455_36762[(2)] = null);

(statearr_34455_36762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (9))){
var inst_34396 = (state_34436[(7)]);
var inst_34412 = cljs.core.vec(inst_34396);
var state_34436__$1 = state_34436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34436__$1,(11),out,inst_34412);
} else {
if((state_val_34437 === (5))){
var inst_34400 = (state_34436[(9)]);
var inst_34404 = (state_34436[(10)]);
var inst_34397 = (state_34436[(8)]);
var inst_34404__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34400) : f.call(null,inst_34400));
var inst_34405 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34404__$1,inst_34397);
var inst_34406 = cljs.core.keyword_identical_QMARK_(inst_34397,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34407 = ((inst_34405) || (inst_34406));
var state_34436__$1 = (function (){var statearr_34457 = state_34436;
(statearr_34457[(10)] = inst_34404__$1);

return statearr_34457;
})();
if(cljs.core.truth_(inst_34407)){
var statearr_34458_36763 = state_34436__$1;
(statearr_34458_36763[(1)] = (8));

} else {
var statearr_34459_36764 = state_34436__$1;
(statearr_34459_36764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (14))){
var inst_34429 = (state_34436[(2)]);
var inst_34430 = cljs.core.async.close_BANG_(out);
var state_34436__$1 = (function (){var statearr_34461 = state_34436;
(statearr_34461[(13)] = inst_34429);

return statearr_34461;
})();
var statearr_34464_36765 = state_34436__$1;
(statearr_34464_36765[(2)] = inst_34430);

(statearr_34464_36765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (10))){
var inst_34419 = (state_34436[(2)]);
var state_34436__$1 = state_34436;
var statearr_34465_36766 = state_34436__$1;
(statearr_34465_36766[(2)] = inst_34419);

(statearr_34465_36766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34437 === (8))){
var inst_34400 = (state_34436[(9)]);
var inst_34396 = (state_34436[(7)]);
var inst_34404 = (state_34436[(10)]);
var inst_34409 = inst_34396.push(inst_34400);
var tmp34460 = inst_34396;
var inst_34396__$1 = tmp34460;
var inst_34397 = inst_34404;
var state_34436__$1 = (function (){var statearr_34466 = state_34436;
(statearr_34466[(14)] = inst_34409);

(statearr_34466[(7)] = inst_34396__$1);

(statearr_34466[(8)] = inst_34397);

return statearr_34466;
})();
var statearr_34467_36768 = state_34436__$1;
(statearr_34467_36768[(2)] = null);

(statearr_34467_36768[(1)] = (2));


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
var cljs$core$async$state_machine__31564__auto__ = null;
var cljs$core$async$state_machine__31564__auto____0 = (function (){
var statearr_34469 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34469[(0)] = cljs$core$async$state_machine__31564__auto__);

(statearr_34469[(1)] = (1));

return statearr_34469;
});
var cljs$core$async$state_machine__31564__auto____1 = (function (state_34436){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_34436);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e34470){var ex__31567__auto__ = e34470;
var statearr_34474_36774 = state_34436;
(statearr_34474_36774[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_34436[(4)]))){
var statearr_34475_36775 = state_34436;
(statearr_34475_36775[(1)] = cljs.core.first((state_34436[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36776 = state_34436;
state_34436 = G__36776;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
cljs$core$async$state_machine__31564__auto__ = function(state_34436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31564__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31564__auto____1.call(this,state_34436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31564__auto____0;
cljs$core$async$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31564__auto____1;
return cljs$core$async$state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_34476 = f__31714__auto__();
(statearr_34476[(6)] = c__31712__auto___36722);

return statearr_34476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
