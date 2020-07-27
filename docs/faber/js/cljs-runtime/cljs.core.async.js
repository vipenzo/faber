goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42159 = arguments.length;
switch (G__42159) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42164 = (function (f,blockable,meta42165){
this.f = f;
this.blockable = blockable;
this.meta42165 = meta42165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42166,meta42165__$1){
var self__ = this;
var _42166__$1 = this;
return (new cljs.core.async.t_cljs$core$async42164(self__.f,self__.blockable,meta42165__$1));
}));

(cljs.core.async.t_cljs$core$async42164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42166){
var self__ = this;
var _42166__$1 = this;
return self__.meta42165;
}));

(cljs.core.async.t_cljs$core$async42164.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42165","meta42165",1078140867,null)], null);
}));

(cljs.core.async.t_cljs$core$async42164.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42164");

(cljs.core.async.t_cljs$core$async42164.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42164");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42164.
 */
cljs.core.async.__GT_t_cljs$core$async42164 = (function cljs$core$async$__GT_t_cljs$core$async42164(f__$1,blockable__$1,meta42165){
return (new cljs.core.async.t_cljs$core$async42164(f__$1,blockable__$1,meta42165));
});

}

return (new cljs.core.async.t_cljs$core$async42164(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42176 = arguments.length;
switch (G__42176) {
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
var G__42184 = arguments.length;
switch (G__42184) {
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
var G__42197 = arguments.length;
switch (G__42197) {
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
var val_44701 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44701) : fn1.call(null,val_44701));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44701) : fn1.call(null,val_44701));
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
var G__42202 = arguments.length;
switch (G__42202) {
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
var n__4613__auto___44706 = n;
var x_44707 = (0);
while(true){
if((x_44707 < n__4613__auto___44706)){
(a[x_44707] = x_44707);

var G__44708 = (x_44707 + (1));
x_44707 = G__44708;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42216 = (function (flag,meta42217){
this.flag = flag;
this.meta42217 = meta42217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42218,meta42217__$1){
var self__ = this;
var _42218__$1 = this;
return (new cljs.core.async.t_cljs$core$async42216(self__.flag,meta42217__$1));
}));

(cljs.core.async.t_cljs$core$async42216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42218){
var self__ = this;
var _42218__$1 = this;
return self__.meta42217;
}));

(cljs.core.async.t_cljs$core$async42216.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42216.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42216.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42217","meta42217",-1057773087,null)], null);
}));

(cljs.core.async.t_cljs$core$async42216.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42216");

(cljs.core.async.t_cljs$core$async42216.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42216");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42216.
 */
cljs.core.async.__GT_t_cljs$core$async42216 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42216(flag__$1,meta42217){
return (new cljs.core.async.t_cljs$core$async42216(flag__$1,meta42217));
});

}

return (new cljs.core.async.t_cljs$core$async42216(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42219 = (function (flag,cb,meta42220){
this.flag = flag;
this.cb = cb;
this.meta42220 = meta42220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42221,meta42220__$1){
var self__ = this;
var _42221__$1 = this;
return (new cljs.core.async.t_cljs$core$async42219(self__.flag,self__.cb,meta42220__$1));
}));

(cljs.core.async.t_cljs$core$async42219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42221){
var self__ = this;
var _42221__$1 = this;
return self__.meta42220;
}));

(cljs.core.async.t_cljs$core$async42219.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42219.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42220","meta42220",-1715265378,null)], null);
}));

(cljs.core.async.t_cljs$core$async42219.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42219");

(cljs.core.async.t_cljs$core$async42219.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42219");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42219.
 */
cljs.core.async.__GT_t_cljs$core$async42219 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42219(flag__$1,cb__$1,meta42220){
return (new cljs.core.async.t_cljs$core$async42219(flag__$1,cb__$1,meta42220));
});

}

return (new cljs.core.async.t_cljs$core$async42219(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42222_SHARP_){
var G__42233 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42222_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42233) : fret.call(null,G__42233));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42223_SHARP_){
var G__42234 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42223_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42234) : fret.call(null,G__42234));
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
var G__44732 = (i + (1));
i = G__44732;
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
var len__4736__auto___44734 = arguments.length;
var i__4737__auto___44735 = (0);
while(true){
if((i__4737__auto___44735 < len__4736__auto___44734)){
args__4742__auto__.push((arguments[i__4737__auto___44735]));

var G__44736 = (i__4737__auto___44735 + (1));
i__4737__auto___44735 = G__44736;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42241){
var map__42242 = p__42241;
var map__42242__$1 = (((((!((map__42242 == null))))?(((((map__42242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42242):map__42242);
var opts = map__42242__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42239){
var G__42240 = cljs.core.first(seq42239);
var seq42239__$1 = cljs.core.next(seq42239);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42240,seq42239__$1);
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
var G__42254 = arguments.length;
switch (G__42254) {
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
var c__42085__auto___44744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_42288){
var state_val_42289 = (state_42288[(1)]);
if((state_val_42289 === (7))){
var inst_42284 = (state_42288[(2)]);
var state_42288__$1 = state_42288;
var statearr_42300_44745 = state_42288__$1;
(statearr_42300_44745[(2)] = inst_42284);

(statearr_42300_44745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (1))){
var state_42288__$1 = state_42288;
var statearr_42301_44748 = state_42288__$1;
(statearr_42301_44748[(2)] = null);

(statearr_42301_44748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (4))){
var inst_42267 = (state_42288[(7)]);
var inst_42267__$1 = (state_42288[(2)]);
var inst_42268 = (inst_42267__$1 == null);
var state_42288__$1 = (function (){var statearr_42305 = state_42288;
(statearr_42305[(7)] = inst_42267__$1);

return statearr_42305;
})();
if(cljs.core.truth_(inst_42268)){
var statearr_42306_44750 = state_42288__$1;
(statearr_42306_44750[(1)] = (5));

} else {
var statearr_42307_44752 = state_42288__$1;
(statearr_42307_44752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (13))){
var state_42288__$1 = state_42288;
var statearr_42308_44753 = state_42288__$1;
(statearr_42308_44753[(2)] = null);

(statearr_42308_44753[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (6))){
var inst_42267 = (state_42288[(7)]);
var state_42288__$1 = state_42288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42288__$1,(11),to,inst_42267);
} else {
if((state_val_42289 === (3))){
var inst_42286 = (state_42288[(2)]);
var state_42288__$1 = state_42288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42288__$1,inst_42286);
} else {
if((state_val_42289 === (12))){
var state_42288__$1 = state_42288;
var statearr_42313_44754 = state_42288__$1;
(statearr_42313_44754[(2)] = null);

(statearr_42313_44754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (2))){
var state_42288__$1 = state_42288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42288__$1,(4),from);
} else {
if((state_val_42289 === (11))){
var inst_42277 = (state_42288[(2)]);
var state_42288__$1 = state_42288;
if(cljs.core.truth_(inst_42277)){
var statearr_42319_44756 = state_42288__$1;
(statearr_42319_44756[(1)] = (12));

} else {
var statearr_42320_44757 = state_42288__$1;
(statearr_42320_44757[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (9))){
var state_42288__$1 = state_42288;
var statearr_42321_44758 = state_42288__$1;
(statearr_42321_44758[(2)] = null);

(statearr_42321_44758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (5))){
var state_42288__$1 = state_42288;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42322_44759 = state_42288__$1;
(statearr_42322_44759[(1)] = (8));

} else {
var statearr_42323_44760 = state_42288__$1;
(statearr_42323_44760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (14))){
var inst_42282 = (state_42288[(2)]);
var state_42288__$1 = state_42288;
var statearr_42324_44763 = state_42288__$1;
(statearr_42324_44763[(2)] = inst_42282);

(statearr_42324_44763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (10))){
var inst_42274 = (state_42288[(2)]);
var state_42288__$1 = state_42288;
var statearr_42325_44764 = state_42288__$1;
(statearr_42325_44764[(2)] = inst_42274);

(statearr_42325_44764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42289 === (8))){
var inst_42271 = cljs.core.async.close_BANG_(to);
var state_42288__$1 = state_42288;
var statearr_42326_44765 = state_42288__$1;
(statearr_42326_44765[(2)] = inst_42271);

(statearr_42326_44765[(1)] = (10));


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
var cljs$core$async$state_machine__41953__auto__ = null;
var cljs$core$async$state_machine__41953__auto____0 = (function (){
var statearr_42327 = [null,null,null,null,null,null,null,null];
(statearr_42327[(0)] = cljs$core$async$state_machine__41953__auto__);

(statearr_42327[(1)] = (1));

return statearr_42327;
});
var cljs$core$async$state_machine__41953__auto____1 = (function (state_42288){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_42288);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e42328){var ex__41956__auto__ = e42328;
var statearr_42329_44767 = state_42288;
(statearr_42329_44767[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_42288[(4)]))){
var statearr_42330_44768 = state_42288;
(statearr_42330_44768[(1)] = cljs.core.first((state_42288[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44769 = state_42288;
state_42288 = G__44769;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$state_machine__41953__auto__ = function(state_42288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41953__auto____1.call(this,state_42288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41953__auto____0;
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41953__auto____1;
return cljs$core$async$state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_42333 = f__42086__auto__();
(statearr_42333[(6)] = c__42085__auto___44744);

return statearr_42333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
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
var process = (function (p__42336){
var vec__42337 = p__42336;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42337,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42337,(1),null);
var job = vec__42337;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42085__auto___44774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_42344){
var state_val_42345 = (state_42344[(1)]);
if((state_val_42345 === (1))){
var state_42344__$1 = state_42344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42344__$1,(2),res,v);
} else {
if((state_val_42345 === (2))){
var inst_42341 = (state_42344[(2)]);
var inst_42342 = cljs.core.async.close_BANG_(res);
var state_42344__$1 = (function (){var statearr_42351 = state_42344;
(statearr_42351[(7)] = inst_42341);

return statearr_42351;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42344__$1,inst_42342);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0 = (function (){
var statearr_42352 = [null,null,null,null,null,null,null,null];
(statearr_42352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__);

(statearr_42352[(1)] = (1));

return statearr_42352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1 = (function (state_42344){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_42344);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e42353){var ex__41956__auto__ = e42353;
var statearr_42354_44775 = state_42344;
(statearr_42354_44775[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_42344[(4)]))){
var statearr_42355_44776 = state_42344;
(statearr_42355_44776[(1)] = cljs.core.first((state_42344[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44778 = state_42344;
state_42344 = G__44778;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__ = function(state_42344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1.call(this,state_42344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_42358 = f__42086__auto__();
(statearr_42358[(6)] = c__42085__auto___44774);

return statearr_42358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42363){
var vec__42364 = p__42363;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42364,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42364,(1),null);
var job = vec__42364;
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
var n__4613__auto___44779 = n;
var __44780 = (0);
while(true){
if((__44780 < n__4613__auto___44779)){
var G__42367_44781 = type;
var G__42367_44782__$1 = (((G__42367_44781 instanceof cljs.core.Keyword))?G__42367_44781.fqn:null);
switch (G__42367_44782__$1) {
case "compute":
var c__42085__auto___44784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44780,c__42085__auto___44784,G__42367_44781,G__42367_44782__$1,n__4613__auto___44779,jobs,results,process,async){
return (function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = ((function (__44780,c__42085__auto___44784,G__42367_44781,G__42367_44782__$1,n__4613__auto___44779,jobs,results,process,async){
return (function (state_42381){
var state_val_42382 = (state_42381[(1)]);
if((state_val_42382 === (1))){
var state_42381__$1 = state_42381;
var statearr_42384_44785 = state_42381__$1;
(statearr_42384_44785[(2)] = null);

(statearr_42384_44785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (2))){
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42381__$1,(4),jobs);
} else {
if((state_val_42382 === (3))){
var inst_42379 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42381__$1,inst_42379);
} else {
if((state_val_42382 === (4))){
var inst_42371 = (state_42381[(2)]);
var inst_42372 = process(inst_42371);
var state_42381__$1 = state_42381;
if(cljs.core.truth_(inst_42372)){
var statearr_42388_44790 = state_42381__$1;
(statearr_42388_44790[(1)] = (5));

} else {
var statearr_42389_44791 = state_42381__$1;
(statearr_42389_44791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (5))){
var state_42381__$1 = state_42381;
var statearr_42394_44792 = state_42381__$1;
(statearr_42394_44792[(2)] = null);

(statearr_42394_44792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (6))){
var state_42381__$1 = state_42381;
var statearr_42395_44793 = state_42381__$1;
(statearr_42395_44793[(2)] = null);

(statearr_42395_44793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (7))){
var inst_42377 = (state_42381[(2)]);
var state_42381__$1 = state_42381;
var statearr_42396_44794 = state_42381__$1;
(statearr_42396_44794[(2)] = inst_42377);

(statearr_42396_44794[(1)] = (3));


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
});})(__44780,c__42085__auto___44784,G__42367_44781,G__42367_44782__$1,n__4613__auto___44779,jobs,results,process,async))
;
return ((function (__44780,switch__41952__auto__,c__42085__auto___44784,G__42367_44781,G__42367_44782__$1,n__4613__auto___44779,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0 = (function (){
var statearr_42397 = [null,null,null,null,null,null,null];
(statearr_42397[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__);

(statearr_42397[(1)] = (1));

return statearr_42397;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1 = (function (state_42381){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_42381);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e42398){var ex__41956__auto__ = e42398;
var statearr_42399_44796 = state_42381;
(statearr_42399_44796[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_42381[(4)]))){
var statearr_42400_44797 = state_42381;
(statearr_42400_44797[(1)] = cljs.core.first((state_42381[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44798 = state_42381;
state_42381 = G__44798;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__ = function(state_42381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1.call(this,state_42381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__;
})()
;})(__44780,switch__41952__auto__,c__42085__auto___44784,G__42367_44781,G__42367_44782__$1,n__4613__auto___44779,jobs,results,process,async))
})();
var state__42087__auto__ = (function (){var statearr_42402 = f__42086__auto__();
(statearr_42402[(6)] = c__42085__auto___44784);

return statearr_42402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
});})(__44780,c__42085__auto___44784,G__42367_44781,G__42367_44782__$1,n__4613__auto___44779,jobs,results,process,async))
);


break;
case "async":
var c__42085__auto___44799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44780,c__42085__auto___44799,G__42367_44781,G__42367_44782__$1,n__4613__auto___44779,jobs,results,process,async){
return (function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = ((function (__44780,c__42085__auto___44799,G__42367_44781,G__42367_44782__$1,n__4613__auto___44779,jobs,results,process,async){
return (function (state_42416){
var state_val_42417 = (state_42416[(1)]);
if((state_val_42417 === (1))){
var state_42416__$1 = state_42416;
var statearr_42418_44801 = state_42416__$1;
(statearr_42418_44801[(2)] = null);

(statearr_42418_44801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (2))){
var state_42416__$1 = state_42416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42416__$1,(4),jobs);
} else {
if((state_val_42417 === (3))){
var inst_42414 = (state_42416[(2)]);
var state_42416__$1 = state_42416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42416__$1,inst_42414);
} else {
if((state_val_42417 === (4))){
var inst_42406 = (state_42416[(2)]);
var inst_42407 = async(inst_42406);
var state_42416__$1 = state_42416;
if(cljs.core.truth_(inst_42407)){
var statearr_42420_44803 = state_42416__$1;
(statearr_42420_44803[(1)] = (5));

} else {
var statearr_42421_44804 = state_42416__$1;
(statearr_42421_44804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (5))){
var state_42416__$1 = state_42416;
var statearr_42422_44805 = state_42416__$1;
(statearr_42422_44805[(2)] = null);

(statearr_42422_44805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (6))){
var state_42416__$1 = state_42416;
var statearr_42423_44806 = state_42416__$1;
(statearr_42423_44806[(2)] = null);

(statearr_42423_44806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (7))){
var inst_42412 = (state_42416[(2)]);
var state_42416__$1 = state_42416;
var statearr_42424_44807 = state_42416__$1;
(statearr_42424_44807[(2)] = inst_42412);

(statearr_42424_44807[(1)] = (3));


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
});})(__44780,c__42085__auto___44799,G__42367_44781,G__42367_44782__$1,n__4613__auto___44779,jobs,results,process,async))
;
return ((function (__44780,switch__41952__auto__,c__42085__auto___44799,G__42367_44781,G__42367_44782__$1,n__4613__auto___44779,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0 = (function (){
var statearr_42425 = [null,null,null,null,null,null,null];
(statearr_42425[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__);

(statearr_42425[(1)] = (1));

return statearr_42425;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1 = (function (state_42416){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_42416);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e42426){var ex__41956__auto__ = e42426;
var statearr_42427_44808 = state_42416;
(statearr_42427_44808[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_42416[(4)]))){
var statearr_42428_44813 = state_42416;
(statearr_42428_44813[(1)] = cljs.core.first((state_42416[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44820 = state_42416;
state_42416 = G__44820;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__ = function(state_42416){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1.call(this,state_42416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__;
})()
;})(__44780,switch__41952__auto__,c__42085__auto___44799,G__42367_44781,G__42367_44782__$1,n__4613__auto___44779,jobs,results,process,async))
})();
var state__42087__auto__ = (function (){var statearr_42429 = f__42086__auto__();
(statearr_42429[(6)] = c__42085__auto___44799);

return statearr_42429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
});})(__44780,c__42085__auto___44799,G__42367_44781,G__42367_44782__$1,n__4613__auto___44779,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42367_44782__$1)].join('')));

}

var G__44824 = (__44780 + (1));
__44780 = G__44824;
continue;
} else {
}
break;
}

var c__42085__auto___44825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_42456){
var state_val_42457 = (state_42456[(1)]);
if((state_val_42457 === (7))){
var inst_42452 = (state_42456[(2)]);
var state_42456__$1 = state_42456;
var statearr_42458_44829 = state_42456__$1;
(statearr_42458_44829[(2)] = inst_42452);

(statearr_42458_44829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (1))){
var state_42456__$1 = state_42456;
var statearr_42463_44830 = state_42456__$1;
(statearr_42463_44830[(2)] = null);

(statearr_42463_44830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (4))){
var inst_42435 = (state_42456[(7)]);
var inst_42435__$1 = (state_42456[(2)]);
var inst_42436 = (inst_42435__$1 == null);
var state_42456__$1 = (function (){var statearr_42464 = state_42456;
(statearr_42464[(7)] = inst_42435__$1);

return statearr_42464;
})();
if(cljs.core.truth_(inst_42436)){
var statearr_42465_44831 = state_42456__$1;
(statearr_42465_44831[(1)] = (5));

} else {
var statearr_42466_44832 = state_42456__$1;
(statearr_42466_44832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (6))){
var inst_42441 = (state_42456[(8)]);
var inst_42435 = (state_42456[(7)]);
var inst_42441__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42443 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42444 = [inst_42435,inst_42441__$1];
var inst_42445 = (new cljs.core.PersistentVector(null,2,(5),inst_42443,inst_42444,null));
var state_42456__$1 = (function (){var statearr_42473 = state_42456;
(statearr_42473[(8)] = inst_42441__$1);

return statearr_42473;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42456__$1,(8),jobs,inst_42445);
} else {
if((state_val_42457 === (3))){
var inst_42454 = (state_42456[(2)]);
var state_42456__$1 = state_42456;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42456__$1,inst_42454);
} else {
if((state_val_42457 === (2))){
var state_42456__$1 = state_42456;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42456__$1,(4),from);
} else {
if((state_val_42457 === (9))){
var inst_42449 = (state_42456[(2)]);
var state_42456__$1 = (function (){var statearr_42481 = state_42456;
(statearr_42481[(9)] = inst_42449);

return statearr_42481;
})();
var statearr_42482_44843 = state_42456__$1;
(statearr_42482_44843[(2)] = null);

(statearr_42482_44843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (5))){
var inst_42438 = cljs.core.async.close_BANG_(jobs);
var state_42456__$1 = state_42456;
var statearr_42483_44844 = state_42456__$1;
(statearr_42483_44844[(2)] = inst_42438);

(statearr_42483_44844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42457 === (8))){
var inst_42441 = (state_42456[(8)]);
var inst_42447 = (state_42456[(2)]);
var state_42456__$1 = (function (){var statearr_42484 = state_42456;
(statearr_42484[(10)] = inst_42447);

return statearr_42484;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42456__$1,(9),results,inst_42441);
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
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0 = (function (){
var statearr_42488 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__);

(statearr_42488[(1)] = (1));

return statearr_42488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1 = (function (state_42456){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_42456);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e42489){var ex__41956__auto__ = e42489;
var statearr_42490_44851 = state_42456;
(statearr_42490_44851[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_42456[(4)]))){
var statearr_42491_44852 = state_42456;
(statearr_42491_44852[(1)] = cljs.core.first((state_42456[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44853 = state_42456;
state_42456 = G__44853;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__ = function(state_42456){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1.call(this,state_42456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_42500 = f__42086__auto__();
(statearr_42500[(6)] = c__42085__auto___44825);

return statearr_42500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
}));


var c__42085__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_42545){
var state_val_42546 = (state_42545[(1)]);
if((state_val_42546 === (7))){
var inst_42541 = (state_42545[(2)]);
var state_42545__$1 = state_42545;
var statearr_42548_44855 = state_42545__$1;
(statearr_42548_44855[(2)] = inst_42541);

(statearr_42548_44855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (20))){
var state_42545__$1 = state_42545;
var statearr_42549_44856 = state_42545__$1;
(statearr_42549_44856[(2)] = null);

(statearr_42549_44856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (1))){
var state_42545__$1 = state_42545;
var statearr_42550_44857 = state_42545__$1;
(statearr_42550_44857[(2)] = null);

(statearr_42550_44857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (4))){
var inst_42503 = (state_42545[(7)]);
var inst_42503__$1 = (state_42545[(2)]);
var inst_42504 = (inst_42503__$1 == null);
var state_42545__$1 = (function (){var statearr_42551 = state_42545;
(statearr_42551[(7)] = inst_42503__$1);

return statearr_42551;
})();
if(cljs.core.truth_(inst_42504)){
var statearr_42552_44862 = state_42545__$1;
(statearr_42552_44862[(1)] = (5));

} else {
var statearr_42553_44863 = state_42545__$1;
(statearr_42553_44863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (15))){
var inst_42521 = (state_42545[(8)]);
var state_42545__$1 = state_42545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42545__$1,(18),to,inst_42521);
} else {
if((state_val_42546 === (21))){
var inst_42536 = (state_42545[(2)]);
var state_42545__$1 = state_42545;
var statearr_42554_44866 = state_42545__$1;
(statearr_42554_44866[(2)] = inst_42536);

(statearr_42554_44866[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (13))){
var inst_42538 = (state_42545[(2)]);
var state_42545__$1 = (function (){var statearr_42555 = state_42545;
(statearr_42555[(9)] = inst_42538);

return statearr_42555;
})();
var statearr_42556_44867 = state_42545__$1;
(statearr_42556_44867[(2)] = null);

(statearr_42556_44867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (6))){
var inst_42503 = (state_42545[(7)]);
var state_42545__$1 = state_42545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42545__$1,(11),inst_42503);
} else {
if((state_val_42546 === (17))){
var inst_42531 = (state_42545[(2)]);
var state_42545__$1 = state_42545;
if(cljs.core.truth_(inst_42531)){
var statearr_42557_44868 = state_42545__$1;
(statearr_42557_44868[(1)] = (19));

} else {
var statearr_42558_44869 = state_42545__$1;
(statearr_42558_44869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (3))){
var inst_42543 = (state_42545[(2)]);
var state_42545__$1 = state_42545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42545__$1,inst_42543);
} else {
if((state_val_42546 === (12))){
var inst_42517 = (state_42545[(10)]);
var state_42545__$1 = state_42545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42545__$1,(14),inst_42517);
} else {
if((state_val_42546 === (2))){
var state_42545__$1 = state_42545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42545__$1,(4),results);
} else {
if((state_val_42546 === (19))){
var state_42545__$1 = state_42545;
var statearr_42559_44870 = state_42545__$1;
(statearr_42559_44870[(2)] = null);

(statearr_42559_44870[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (11))){
var inst_42517 = (state_42545[(2)]);
var state_42545__$1 = (function (){var statearr_42560 = state_42545;
(statearr_42560[(10)] = inst_42517);

return statearr_42560;
})();
var statearr_42561_44871 = state_42545__$1;
(statearr_42561_44871[(2)] = null);

(statearr_42561_44871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (9))){
var state_42545__$1 = state_42545;
var statearr_42562_44872 = state_42545__$1;
(statearr_42562_44872[(2)] = null);

(statearr_42562_44872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (5))){
var state_42545__$1 = state_42545;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42563_44890 = state_42545__$1;
(statearr_42563_44890[(1)] = (8));

} else {
var statearr_42564_44891 = state_42545__$1;
(statearr_42564_44891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (14))){
var inst_42521 = (state_42545[(8)]);
var inst_42521__$1 = (state_42545[(2)]);
var inst_42524 = (inst_42521__$1 == null);
var inst_42525 = cljs.core.not(inst_42524);
var state_42545__$1 = (function (){var statearr_42565 = state_42545;
(statearr_42565[(8)] = inst_42521__$1);

return statearr_42565;
})();
if(inst_42525){
var statearr_42566_44983 = state_42545__$1;
(statearr_42566_44983[(1)] = (15));

} else {
var statearr_42567_44984 = state_42545__$1;
(statearr_42567_44984[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (16))){
var state_42545__$1 = state_42545;
var statearr_42568_44985 = state_42545__$1;
(statearr_42568_44985[(2)] = false);

(statearr_42568_44985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (10))){
var inst_42510 = (state_42545[(2)]);
var state_42545__$1 = state_42545;
var statearr_42569_44986 = state_42545__$1;
(statearr_42569_44986[(2)] = inst_42510);

(statearr_42569_44986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (18))){
var inst_42528 = (state_42545[(2)]);
var state_42545__$1 = state_42545;
var statearr_42570_44987 = state_42545__$1;
(statearr_42570_44987[(2)] = inst_42528);

(statearr_42570_44987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42546 === (8))){
var inst_42507 = cljs.core.async.close_BANG_(to);
var state_42545__$1 = state_42545;
var statearr_42571_44993 = state_42545__$1;
(statearr_42571_44993[(2)] = inst_42507);

(statearr_42571_44993[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0 = (function (){
var statearr_42572 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42572[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__);

(statearr_42572[(1)] = (1));

return statearr_42572;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1 = (function (state_42545){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_42545);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e42573){var ex__41956__auto__ = e42573;
var statearr_42574_45017 = state_42545;
(statearr_42574_45017[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_42545[(4)]))){
var statearr_42575_45018 = state_42545;
(statearr_42575_45018[(1)] = cljs.core.first((state_42545[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45025 = state_42545;
state_42545 = G__45025;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__ = function(state_42545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1.call(this,state_42545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41953__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_42579 = f__42086__auto__();
(statearr_42579[(6)] = c__42085__auto__);

return statearr_42579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
}));

return c__42085__auto__;
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
var G__42582 = arguments.length;
switch (G__42582) {
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
var G__42592 = arguments.length;
switch (G__42592) {
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
var G__42610 = arguments.length;
switch (G__42610) {
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
var c__42085__auto___45048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_42639){
var state_val_42640 = (state_42639[(1)]);
if((state_val_42640 === (7))){
var inst_42635 = (state_42639[(2)]);
var state_42639__$1 = state_42639;
var statearr_42641_45050 = state_42639__$1;
(statearr_42641_45050[(2)] = inst_42635);

(statearr_42641_45050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (1))){
var state_42639__$1 = state_42639;
var statearr_42642_45051 = state_42639__$1;
(statearr_42642_45051[(2)] = null);

(statearr_42642_45051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (4))){
var inst_42616 = (state_42639[(7)]);
var inst_42616__$1 = (state_42639[(2)]);
var inst_42617 = (inst_42616__$1 == null);
var state_42639__$1 = (function (){var statearr_42644 = state_42639;
(statearr_42644[(7)] = inst_42616__$1);

return statearr_42644;
})();
if(cljs.core.truth_(inst_42617)){
var statearr_42645_45053 = state_42639__$1;
(statearr_42645_45053[(1)] = (5));

} else {
var statearr_42646_45054 = state_42639__$1;
(statearr_42646_45054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (13))){
var state_42639__$1 = state_42639;
var statearr_42647_45055 = state_42639__$1;
(statearr_42647_45055[(2)] = null);

(statearr_42647_45055[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (6))){
var inst_42616 = (state_42639[(7)]);
var inst_42622 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42616) : p.call(null,inst_42616));
var state_42639__$1 = state_42639;
if(cljs.core.truth_(inst_42622)){
var statearr_42654_45056 = state_42639__$1;
(statearr_42654_45056[(1)] = (9));

} else {
var statearr_42655_45059 = state_42639__$1;
(statearr_42655_45059[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (3))){
var inst_42637 = (state_42639[(2)]);
var state_42639__$1 = state_42639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42639__$1,inst_42637);
} else {
if((state_val_42640 === (12))){
var state_42639__$1 = state_42639;
var statearr_42657_45064 = state_42639__$1;
(statearr_42657_45064[(2)] = null);

(statearr_42657_45064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (2))){
var state_42639__$1 = state_42639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42639__$1,(4),ch);
} else {
if((state_val_42640 === (11))){
var inst_42616 = (state_42639[(7)]);
var inst_42626 = (state_42639[(2)]);
var state_42639__$1 = state_42639;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42639__$1,(8),inst_42626,inst_42616);
} else {
if((state_val_42640 === (9))){
var state_42639__$1 = state_42639;
var statearr_42659_45065 = state_42639__$1;
(statearr_42659_45065[(2)] = tc);

(statearr_42659_45065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (5))){
var inst_42619 = cljs.core.async.close_BANG_(tc);
var inst_42620 = cljs.core.async.close_BANG_(fc);
var state_42639__$1 = (function (){var statearr_42660 = state_42639;
(statearr_42660[(8)] = inst_42619);

return statearr_42660;
})();
var statearr_42661_45067 = state_42639__$1;
(statearr_42661_45067[(2)] = inst_42620);

(statearr_42661_45067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (14))){
var inst_42633 = (state_42639[(2)]);
var state_42639__$1 = state_42639;
var statearr_42662_45069 = state_42639__$1;
(statearr_42662_45069[(2)] = inst_42633);

(statearr_42662_45069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (10))){
var state_42639__$1 = state_42639;
var statearr_42663_45070 = state_42639__$1;
(statearr_42663_45070[(2)] = fc);

(statearr_42663_45070[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42640 === (8))){
var inst_42628 = (state_42639[(2)]);
var state_42639__$1 = state_42639;
if(cljs.core.truth_(inst_42628)){
var statearr_42669_45071 = state_42639__$1;
(statearr_42669_45071[(1)] = (12));

} else {
var statearr_42671_45072 = state_42639__$1;
(statearr_42671_45072[(1)] = (13));

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
var cljs$core$async$state_machine__41953__auto__ = null;
var cljs$core$async$state_machine__41953__auto____0 = (function (){
var statearr_42674 = [null,null,null,null,null,null,null,null,null];
(statearr_42674[(0)] = cljs$core$async$state_machine__41953__auto__);

(statearr_42674[(1)] = (1));

return statearr_42674;
});
var cljs$core$async$state_machine__41953__auto____1 = (function (state_42639){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_42639);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e42675){var ex__41956__auto__ = e42675;
var statearr_42677_45073 = state_42639;
(statearr_42677_45073[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_42639[(4)]))){
var statearr_42678_45078 = state_42639;
(statearr_42678_45078[(1)] = cljs.core.first((state_42639[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45082 = state_42639;
state_42639 = G__45082;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$state_machine__41953__auto__ = function(state_42639){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41953__auto____1.call(this,state_42639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41953__auto____0;
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41953__auto____1;
return cljs$core$async$state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_42682 = f__42086__auto__();
(statearr_42682[(6)] = c__42085__auto___45048);

return statearr_42682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
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
var c__42085__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_42710){
var state_val_42711 = (state_42710[(1)]);
if((state_val_42711 === (7))){
var inst_42706 = (state_42710[(2)]);
var state_42710__$1 = state_42710;
var statearr_42717_45086 = state_42710__$1;
(statearr_42717_45086[(2)] = inst_42706);

(statearr_42717_45086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42711 === (1))){
var inst_42688 = init;
var inst_42689 = inst_42688;
var state_42710__$1 = (function (){var statearr_42720 = state_42710;
(statearr_42720[(7)] = inst_42689);

return statearr_42720;
})();
var statearr_42722_45090 = state_42710__$1;
(statearr_42722_45090[(2)] = null);

(statearr_42722_45090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42711 === (4))){
var inst_42692 = (state_42710[(8)]);
var inst_42692__$1 = (state_42710[(2)]);
var inst_42693 = (inst_42692__$1 == null);
var state_42710__$1 = (function (){var statearr_42724 = state_42710;
(statearr_42724[(8)] = inst_42692__$1);

return statearr_42724;
})();
if(cljs.core.truth_(inst_42693)){
var statearr_42725_45094 = state_42710__$1;
(statearr_42725_45094[(1)] = (5));

} else {
var statearr_42728_45095 = state_42710__$1;
(statearr_42728_45095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42711 === (6))){
var inst_42696 = (state_42710[(9)]);
var inst_42692 = (state_42710[(8)]);
var inst_42689 = (state_42710[(7)]);
var inst_42696__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_42689,inst_42692) : f.call(null,inst_42689,inst_42692));
var inst_42697 = cljs.core.reduced_QMARK_(inst_42696__$1);
var state_42710__$1 = (function (){var statearr_42733 = state_42710;
(statearr_42733[(9)] = inst_42696__$1);

return statearr_42733;
})();
if(inst_42697){
var statearr_42734_45100 = state_42710__$1;
(statearr_42734_45100[(1)] = (8));

} else {
var statearr_42735_45101 = state_42710__$1;
(statearr_42735_45101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42711 === (3))){
var inst_42708 = (state_42710[(2)]);
var state_42710__$1 = state_42710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42710__$1,inst_42708);
} else {
if((state_val_42711 === (2))){
var state_42710__$1 = state_42710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42710__$1,(4),ch);
} else {
if((state_val_42711 === (9))){
var inst_42696 = (state_42710[(9)]);
var inst_42689 = inst_42696;
var state_42710__$1 = (function (){var statearr_42741 = state_42710;
(statearr_42741[(7)] = inst_42689);

return statearr_42741;
})();
var statearr_42742_45102 = state_42710__$1;
(statearr_42742_45102[(2)] = null);

(statearr_42742_45102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42711 === (5))){
var inst_42689 = (state_42710[(7)]);
var state_42710__$1 = state_42710;
var statearr_42744_45103 = state_42710__$1;
(statearr_42744_45103[(2)] = inst_42689);

(statearr_42744_45103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42711 === (10))){
var inst_42704 = (state_42710[(2)]);
var state_42710__$1 = state_42710;
var statearr_42747_45104 = state_42710__$1;
(statearr_42747_45104[(2)] = inst_42704);

(statearr_42747_45104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42711 === (8))){
var inst_42696 = (state_42710[(9)]);
var inst_42700 = cljs.core.deref(inst_42696);
var state_42710__$1 = state_42710;
var statearr_42748_45106 = state_42710__$1;
(statearr_42748_45106[(2)] = inst_42700);

(statearr_42748_45106[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__41953__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41953__auto____0 = (function (){
var statearr_42752 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42752[(0)] = cljs$core$async$reduce_$_state_machine__41953__auto__);

(statearr_42752[(1)] = (1));

return statearr_42752;
});
var cljs$core$async$reduce_$_state_machine__41953__auto____1 = (function (state_42710){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_42710);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e42753){var ex__41956__auto__ = e42753;
var statearr_42754_45109 = state_42710;
(statearr_42754_45109[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_42710[(4)]))){
var statearr_42755_45110 = state_42710;
(statearr_42755_45110[(1)] = cljs.core.first((state_42710[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45113 = state_42710;
state_42710 = G__45113;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41953__auto__ = function(state_42710){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41953__auto____1.call(this,state_42710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41953__auto____0;
cljs$core$async$reduce_$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41953__auto____1;
return cljs$core$async$reduce_$_state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_42759 = f__42086__auto__();
(statearr_42759[(6)] = c__42085__auto__);

return statearr_42759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
}));

return c__42085__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42085__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_42770){
var state_val_42771 = (state_42770[(1)]);
if((state_val_42771 === (1))){
var inst_42763 = cljs.core.async.reduce(f__$1,init,ch);
var state_42770__$1 = state_42770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42770__$1,(2),inst_42763);
} else {
if((state_val_42771 === (2))){
var inst_42766 = (state_42770[(2)]);
var inst_42768 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_42766) : f__$1.call(null,inst_42766));
var state_42770__$1 = state_42770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42770__$1,inst_42768);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__41953__auto__ = null;
var cljs$core$async$transduce_$_state_machine__41953__auto____0 = (function (){
var statearr_42783 = [null,null,null,null,null,null,null];
(statearr_42783[(0)] = cljs$core$async$transduce_$_state_machine__41953__auto__);

(statearr_42783[(1)] = (1));

return statearr_42783;
});
var cljs$core$async$transduce_$_state_machine__41953__auto____1 = (function (state_42770){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_42770);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e42784){var ex__41956__auto__ = e42784;
var statearr_42785_45119 = state_42770;
(statearr_42785_45119[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_42770[(4)]))){
var statearr_42786_45122 = state_42770;
(statearr_42786_45122[(1)] = cljs.core.first((state_42770[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45123 = state_42770;
state_42770 = G__45123;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__41953__auto__ = function(state_42770){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__41953__auto____1.call(this,state_42770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__41953__auto____0;
cljs$core$async$transduce_$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__41953__auto____1;
return cljs$core$async$transduce_$_state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_42789 = f__42086__auto__();
(statearr_42789[(6)] = c__42085__auto__);

return statearr_42789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
}));

return c__42085__auto__;
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
var G__42798 = arguments.length;
switch (G__42798) {
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
var c__42085__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_42832){
var state_val_42834 = (state_42832[(1)]);
if((state_val_42834 === (7))){
var inst_42812 = (state_42832[(2)]);
var state_42832__$1 = state_42832;
var statearr_42844_45142 = state_42832__$1;
(statearr_42844_45142[(2)] = inst_42812);

(statearr_42844_45142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42834 === (1))){
var inst_42804 = cljs.core.seq(coll);
var inst_42805 = inst_42804;
var state_42832__$1 = (function (){var statearr_42850 = state_42832;
(statearr_42850[(7)] = inst_42805);

return statearr_42850;
})();
var statearr_42851_45152 = state_42832__$1;
(statearr_42851_45152[(2)] = null);

(statearr_42851_45152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42834 === (4))){
var inst_42805 = (state_42832[(7)]);
var inst_42810 = cljs.core.first(inst_42805);
var state_42832__$1 = state_42832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42832__$1,(7),ch,inst_42810);
} else {
if((state_val_42834 === (13))){
var inst_42824 = (state_42832[(2)]);
var state_42832__$1 = state_42832;
var statearr_42857_45159 = state_42832__$1;
(statearr_42857_45159[(2)] = inst_42824);

(statearr_42857_45159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42834 === (6))){
var inst_42815 = (state_42832[(2)]);
var state_42832__$1 = state_42832;
if(cljs.core.truth_(inst_42815)){
var statearr_42858_45162 = state_42832__$1;
(statearr_42858_45162[(1)] = (8));

} else {
var statearr_42859_45164 = state_42832__$1;
(statearr_42859_45164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42834 === (3))){
var inst_42828 = (state_42832[(2)]);
var state_42832__$1 = state_42832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42832__$1,inst_42828);
} else {
if((state_val_42834 === (12))){
var state_42832__$1 = state_42832;
var statearr_42861_45168 = state_42832__$1;
(statearr_42861_45168[(2)] = null);

(statearr_42861_45168[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42834 === (2))){
var inst_42805 = (state_42832[(7)]);
var state_42832__$1 = state_42832;
if(cljs.core.truth_(inst_42805)){
var statearr_42862_45169 = state_42832__$1;
(statearr_42862_45169[(1)] = (4));

} else {
var statearr_42863_45170 = state_42832__$1;
(statearr_42863_45170[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42834 === (11))){
var inst_42821 = cljs.core.async.close_BANG_(ch);
var state_42832__$1 = state_42832;
var statearr_42864_45171 = state_42832__$1;
(statearr_42864_45171[(2)] = inst_42821);

(statearr_42864_45171[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42834 === (9))){
var state_42832__$1 = state_42832;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42865_45179 = state_42832__$1;
(statearr_42865_45179[(1)] = (11));

} else {
var statearr_42866_45180 = state_42832__$1;
(statearr_42866_45180[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42834 === (5))){
var inst_42805 = (state_42832[(7)]);
var state_42832__$1 = state_42832;
var statearr_42867_45182 = state_42832__$1;
(statearr_42867_45182[(2)] = inst_42805);

(statearr_42867_45182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42834 === (10))){
var inst_42826 = (state_42832[(2)]);
var state_42832__$1 = state_42832;
var statearr_42868_45188 = state_42832__$1;
(statearr_42868_45188[(2)] = inst_42826);

(statearr_42868_45188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42834 === (8))){
var inst_42805 = (state_42832[(7)]);
var inst_42817 = cljs.core.next(inst_42805);
var inst_42805__$1 = inst_42817;
var state_42832__$1 = (function (){var statearr_42869 = state_42832;
(statearr_42869[(7)] = inst_42805__$1);

return statearr_42869;
})();
var statearr_42870_45189 = state_42832__$1;
(statearr_42870_45189[(2)] = null);

(statearr_42870_45189[(1)] = (2));


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
var cljs$core$async$state_machine__41953__auto__ = null;
var cljs$core$async$state_machine__41953__auto____0 = (function (){
var statearr_42874 = [null,null,null,null,null,null,null,null];
(statearr_42874[(0)] = cljs$core$async$state_machine__41953__auto__);

(statearr_42874[(1)] = (1));

return statearr_42874;
});
var cljs$core$async$state_machine__41953__auto____1 = (function (state_42832){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_42832);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e42878){var ex__41956__auto__ = e42878;
var statearr_42880_45201 = state_42832;
(statearr_42880_45201[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_42832[(4)]))){
var statearr_42882_45203 = state_42832;
(statearr_42882_45203[(1)] = cljs.core.first((state_42832[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45205 = state_42832;
state_42832 = G__45205;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$state_machine__41953__auto__ = function(state_42832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41953__auto____1.call(this,state_42832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41953__auto____0;
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41953__auto____1;
return cljs$core$async$state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_42883 = f__42086__auto__();
(statearr_42883[(6)] = c__42085__auto__);

return statearr_42883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
}));

return c__42085__auto__;
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
var G__42888 = arguments.length;
switch (G__42888) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_45231 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_45231(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45256 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_45256(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45264 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_45264(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45277 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_45277(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42936 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42936 = (function (ch,cs,meta42937){
this.ch = ch;
this.cs = cs;
this.meta42937 = meta42937;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42936.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42938,meta42937__$1){
var self__ = this;
var _42938__$1 = this;
return (new cljs.core.async.t_cljs$core$async42936(self__.ch,self__.cs,meta42937__$1));
}));

(cljs.core.async.t_cljs$core$async42936.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42938){
var self__ = this;
var _42938__$1 = this;
return self__.meta42937;
}));

(cljs.core.async.t_cljs$core$async42936.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42936.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42936.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42936.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async42936.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async42936.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async42936.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42937","meta42937",759819607,null)], null);
}));

(cljs.core.async.t_cljs$core$async42936.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42936.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42936");

(cljs.core.async.t_cljs$core$async42936.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async42936");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42936.
 */
cljs.core.async.__GT_t_cljs$core$async42936 = (function cljs$core$async$mult_$___GT_t_cljs$core$async42936(ch__$1,cs__$1,meta42937){
return (new cljs.core.async.t_cljs$core$async42936(ch__$1,cs__$1,meta42937));
});

}

return (new cljs.core.async.t_cljs$core$async42936(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42085__auto___45308 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_43096){
var state_val_43097 = (state_43096[(1)]);
if((state_val_43097 === (7))){
var inst_43091 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43098_45310 = state_43096__$1;
(statearr_43098_45310[(2)] = inst_43091);

(statearr_43098_45310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (20))){
var inst_42991 = (state_43096[(7)]);
var inst_43003 = cljs.core.first(inst_42991);
var inst_43004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43003,(0),null);
var inst_43005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43003,(1),null);
var state_43096__$1 = (function (){var statearr_43105 = state_43096;
(statearr_43105[(8)] = inst_43004);

return statearr_43105;
})();
if(cljs.core.truth_(inst_43005)){
var statearr_43106_45311 = state_43096__$1;
(statearr_43106_45311[(1)] = (22));

} else {
var statearr_43108_45312 = state_43096__$1;
(statearr_43108_45312[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (27))){
var inst_42946 = (state_43096[(9)]);
var inst_43035 = (state_43096[(10)]);
var inst_43042 = (state_43096[(11)]);
var inst_43033 = (state_43096[(12)]);
var inst_43042__$1 = cljs.core._nth(inst_43033,inst_43035);
var inst_43043 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43042__$1,inst_42946,done);
var state_43096__$1 = (function (){var statearr_43111 = state_43096;
(statearr_43111[(11)] = inst_43042__$1);

return statearr_43111;
})();
if(cljs.core.truth_(inst_43043)){
var statearr_43113_45313 = state_43096__$1;
(statearr_43113_45313[(1)] = (30));

} else {
var statearr_43114_45314 = state_43096__$1;
(statearr_43114_45314[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (1))){
var state_43096__$1 = state_43096;
var statearr_43115_45315 = state_43096__$1;
(statearr_43115_45315[(2)] = null);

(statearr_43115_45315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (24))){
var inst_42991 = (state_43096[(7)]);
var inst_43010 = (state_43096[(2)]);
var inst_43011 = cljs.core.next(inst_42991);
var inst_42959 = inst_43011;
var inst_42960 = null;
var inst_42961 = (0);
var inst_42962 = (0);
var state_43096__$1 = (function (){var statearr_43117 = state_43096;
(statearr_43117[(13)] = inst_42961);

(statearr_43117[(14)] = inst_42959);

(statearr_43117[(15)] = inst_42962);

(statearr_43117[(16)] = inst_42960);

(statearr_43117[(17)] = inst_43010);

return statearr_43117;
})();
var statearr_43119_45316 = state_43096__$1;
(statearr_43119_45316[(2)] = null);

(statearr_43119_45316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (39))){
var state_43096__$1 = state_43096;
var statearr_43124_45317 = state_43096__$1;
(statearr_43124_45317[(2)] = null);

(statearr_43124_45317[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (4))){
var inst_42946 = (state_43096[(9)]);
var inst_42946__$1 = (state_43096[(2)]);
var inst_42951 = (inst_42946__$1 == null);
var state_43096__$1 = (function (){var statearr_43125 = state_43096;
(statearr_43125[(9)] = inst_42946__$1);

return statearr_43125;
})();
if(cljs.core.truth_(inst_42951)){
var statearr_43127_45318 = state_43096__$1;
(statearr_43127_45318[(1)] = (5));

} else {
var statearr_43128_45319 = state_43096__$1;
(statearr_43128_45319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (15))){
var inst_42961 = (state_43096[(13)]);
var inst_42959 = (state_43096[(14)]);
var inst_42962 = (state_43096[(15)]);
var inst_42960 = (state_43096[(16)]);
var inst_42986 = (state_43096[(2)]);
var inst_42988 = (inst_42962 + (1));
var tmp43121 = inst_42961;
var tmp43122 = inst_42959;
var tmp43123 = inst_42960;
var inst_42959__$1 = tmp43122;
var inst_42960__$1 = tmp43123;
var inst_42961__$1 = tmp43121;
var inst_42962__$1 = inst_42988;
var state_43096__$1 = (function (){var statearr_43134 = state_43096;
(statearr_43134[(13)] = inst_42961__$1);

(statearr_43134[(14)] = inst_42959__$1);

(statearr_43134[(15)] = inst_42962__$1);

(statearr_43134[(16)] = inst_42960__$1);

(statearr_43134[(18)] = inst_42986);

return statearr_43134;
})();
var statearr_43135_45320 = state_43096__$1;
(statearr_43135_45320[(2)] = null);

(statearr_43135_45320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (21))){
var inst_43014 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43141_45321 = state_43096__$1;
(statearr_43141_45321[(2)] = inst_43014);

(statearr_43141_45321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (31))){
var inst_43042 = (state_43096[(11)]);
var inst_43046 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43042);
var state_43096__$1 = state_43096;
var statearr_43142_45322 = state_43096__$1;
(statearr_43142_45322[(2)] = inst_43046);

(statearr_43142_45322[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (32))){
var inst_43035 = (state_43096[(10)]);
var inst_43034 = (state_43096[(19)]);
var inst_43033 = (state_43096[(12)]);
var inst_43032 = (state_43096[(20)]);
var inst_43048 = (state_43096[(2)]);
var inst_43049 = (inst_43035 + (1));
var tmp43136 = inst_43034;
var tmp43137 = inst_43033;
var tmp43138 = inst_43032;
var inst_43032__$1 = tmp43138;
var inst_43033__$1 = tmp43137;
var inst_43034__$1 = tmp43136;
var inst_43035__$1 = inst_43049;
var state_43096__$1 = (function (){var statearr_43143 = state_43096;
(statearr_43143[(21)] = inst_43048);

(statearr_43143[(10)] = inst_43035__$1);

(statearr_43143[(19)] = inst_43034__$1);

(statearr_43143[(12)] = inst_43033__$1);

(statearr_43143[(20)] = inst_43032__$1);

return statearr_43143;
})();
var statearr_43146_45328 = state_43096__$1;
(statearr_43146_45328[(2)] = null);

(statearr_43146_45328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (40))){
var inst_43063 = (state_43096[(22)]);
var inst_43067 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43063);
var state_43096__$1 = state_43096;
var statearr_43151_45332 = state_43096__$1;
(statearr_43151_45332[(2)] = inst_43067);

(statearr_43151_45332[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (33))){
var inst_43052 = (state_43096[(23)]);
var inst_43054 = cljs.core.chunked_seq_QMARK_(inst_43052);
var state_43096__$1 = state_43096;
if(inst_43054){
var statearr_43156_45333 = state_43096__$1;
(statearr_43156_45333[(1)] = (36));

} else {
var statearr_43157_45335 = state_43096__$1;
(statearr_43157_45335[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (13))){
var inst_42979 = (state_43096[(24)]);
var inst_42983 = cljs.core.async.close_BANG_(inst_42979);
var state_43096__$1 = state_43096;
var statearr_43162_45337 = state_43096__$1;
(statearr_43162_45337[(2)] = inst_42983);

(statearr_43162_45337[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (22))){
var inst_43004 = (state_43096[(8)]);
var inst_43007 = cljs.core.async.close_BANG_(inst_43004);
var state_43096__$1 = state_43096;
var statearr_43164_45339 = state_43096__$1;
(statearr_43164_45339[(2)] = inst_43007);

(statearr_43164_45339[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (36))){
var inst_43052 = (state_43096[(23)]);
var inst_43058 = cljs.core.chunk_first(inst_43052);
var inst_43059 = cljs.core.chunk_rest(inst_43052);
var inst_43060 = cljs.core.count(inst_43058);
var inst_43032 = inst_43059;
var inst_43033 = inst_43058;
var inst_43034 = inst_43060;
var inst_43035 = (0);
var state_43096__$1 = (function (){var statearr_43165 = state_43096;
(statearr_43165[(10)] = inst_43035);

(statearr_43165[(19)] = inst_43034);

(statearr_43165[(12)] = inst_43033);

(statearr_43165[(20)] = inst_43032);

return statearr_43165;
})();
var statearr_43166_45340 = state_43096__$1;
(statearr_43166_45340[(2)] = null);

(statearr_43166_45340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (41))){
var inst_43052 = (state_43096[(23)]);
var inst_43069 = (state_43096[(2)]);
var inst_43071 = cljs.core.next(inst_43052);
var inst_43032 = inst_43071;
var inst_43033 = null;
var inst_43034 = (0);
var inst_43035 = (0);
var state_43096__$1 = (function (){var statearr_43169 = state_43096;
(statearr_43169[(25)] = inst_43069);

(statearr_43169[(10)] = inst_43035);

(statearr_43169[(19)] = inst_43034);

(statearr_43169[(12)] = inst_43033);

(statearr_43169[(20)] = inst_43032);

return statearr_43169;
})();
var statearr_43171_45341 = state_43096__$1;
(statearr_43171_45341[(2)] = null);

(statearr_43171_45341[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (43))){
var state_43096__$1 = state_43096;
var statearr_43172_45342 = state_43096__$1;
(statearr_43172_45342[(2)] = null);

(statearr_43172_45342[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (29))){
var inst_43079 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43175_45343 = state_43096__$1;
(statearr_43175_45343[(2)] = inst_43079);

(statearr_43175_45343[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (44))){
var inst_43088 = (state_43096[(2)]);
var state_43096__$1 = (function (){var statearr_43176 = state_43096;
(statearr_43176[(26)] = inst_43088);

return statearr_43176;
})();
var statearr_43177_45344 = state_43096__$1;
(statearr_43177_45344[(2)] = null);

(statearr_43177_45344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (6))){
var inst_43024 = (state_43096[(27)]);
var inst_43023 = cljs.core.deref(cs);
var inst_43024__$1 = cljs.core.keys(inst_43023);
var inst_43025 = cljs.core.count(inst_43024__$1);
var inst_43026 = cljs.core.reset_BANG_(dctr,inst_43025);
var inst_43031 = cljs.core.seq(inst_43024__$1);
var inst_43032 = inst_43031;
var inst_43033 = null;
var inst_43034 = (0);
var inst_43035 = (0);
var state_43096__$1 = (function (){var statearr_43178 = state_43096;
(statearr_43178[(27)] = inst_43024__$1);

(statearr_43178[(28)] = inst_43026);

(statearr_43178[(10)] = inst_43035);

(statearr_43178[(19)] = inst_43034);

(statearr_43178[(12)] = inst_43033);

(statearr_43178[(20)] = inst_43032);

return statearr_43178;
})();
var statearr_43179_45346 = state_43096__$1;
(statearr_43179_45346[(2)] = null);

(statearr_43179_45346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (28))){
var inst_43052 = (state_43096[(23)]);
var inst_43032 = (state_43096[(20)]);
var inst_43052__$1 = cljs.core.seq(inst_43032);
var state_43096__$1 = (function (){var statearr_43180 = state_43096;
(statearr_43180[(23)] = inst_43052__$1);

return statearr_43180;
})();
if(inst_43052__$1){
var statearr_43181_45347 = state_43096__$1;
(statearr_43181_45347[(1)] = (33));

} else {
var statearr_43182_45348 = state_43096__$1;
(statearr_43182_45348[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (25))){
var inst_43035 = (state_43096[(10)]);
var inst_43034 = (state_43096[(19)]);
var inst_43039 = (inst_43035 < inst_43034);
var inst_43040 = inst_43039;
var state_43096__$1 = state_43096;
if(cljs.core.truth_(inst_43040)){
var statearr_43183_45349 = state_43096__$1;
(statearr_43183_45349[(1)] = (27));

} else {
var statearr_43184_45350 = state_43096__$1;
(statearr_43184_45350[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (34))){
var state_43096__$1 = state_43096;
var statearr_43185_45351 = state_43096__$1;
(statearr_43185_45351[(2)] = null);

(statearr_43185_45351[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (17))){
var state_43096__$1 = state_43096;
var statearr_43186_45352 = state_43096__$1;
(statearr_43186_45352[(2)] = null);

(statearr_43186_45352[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (3))){
var inst_43093 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43096__$1,inst_43093);
} else {
if((state_val_43097 === (12))){
var inst_43019 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43188_45357 = state_43096__$1;
(statearr_43188_45357[(2)] = inst_43019);

(statearr_43188_45357[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (2))){
var state_43096__$1 = state_43096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43096__$1,(4),ch);
} else {
if((state_val_43097 === (23))){
var state_43096__$1 = state_43096;
var statearr_43189_45362 = state_43096__$1;
(statearr_43189_45362[(2)] = null);

(statearr_43189_45362[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (35))){
var inst_43077 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43191_45363 = state_43096__$1;
(statearr_43191_45363[(2)] = inst_43077);

(statearr_43191_45363[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (19))){
var inst_42991 = (state_43096[(7)]);
var inst_42995 = cljs.core.chunk_first(inst_42991);
var inst_42996 = cljs.core.chunk_rest(inst_42991);
var inst_42997 = cljs.core.count(inst_42995);
var inst_42959 = inst_42996;
var inst_42960 = inst_42995;
var inst_42961 = inst_42997;
var inst_42962 = (0);
var state_43096__$1 = (function (){var statearr_43192 = state_43096;
(statearr_43192[(13)] = inst_42961);

(statearr_43192[(14)] = inst_42959);

(statearr_43192[(15)] = inst_42962);

(statearr_43192[(16)] = inst_42960);

return statearr_43192;
})();
var statearr_43193_45368 = state_43096__$1;
(statearr_43193_45368[(2)] = null);

(statearr_43193_45368[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (11))){
var inst_42959 = (state_43096[(14)]);
var inst_42991 = (state_43096[(7)]);
var inst_42991__$1 = cljs.core.seq(inst_42959);
var state_43096__$1 = (function (){var statearr_43194 = state_43096;
(statearr_43194[(7)] = inst_42991__$1);

return statearr_43194;
})();
if(inst_42991__$1){
var statearr_43195_45369 = state_43096__$1;
(statearr_43195_45369[(1)] = (16));

} else {
var statearr_43196_45370 = state_43096__$1;
(statearr_43196_45370[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (9))){
var inst_43021 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43201_45371 = state_43096__$1;
(statearr_43201_45371[(2)] = inst_43021);

(statearr_43201_45371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (5))){
var inst_42957 = cljs.core.deref(cs);
var inst_42958 = cljs.core.seq(inst_42957);
var inst_42959 = inst_42958;
var inst_42960 = null;
var inst_42961 = (0);
var inst_42962 = (0);
var state_43096__$1 = (function (){var statearr_43202 = state_43096;
(statearr_43202[(13)] = inst_42961);

(statearr_43202[(14)] = inst_42959);

(statearr_43202[(15)] = inst_42962);

(statearr_43202[(16)] = inst_42960);

return statearr_43202;
})();
var statearr_43203_45372 = state_43096__$1;
(statearr_43203_45372[(2)] = null);

(statearr_43203_45372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (14))){
var state_43096__$1 = state_43096;
var statearr_43204_45373 = state_43096__$1;
(statearr_43204_45373[(2)] = null);

(statearr_43204_45373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (45))){
var inst_43085 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43205_45374 = state_43096__$1;
(statearr_43205_45374[(2)] = inst_43085);

(statearr_43205_45374[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (26))){
var inst_43024 = (state_43096[(27)]);
var inst_43081 = (state_43096[(2)]);
var inst_43082 = cljs.core.seq(inst_43024);
var state_43096__$1 = (function (){var statearr_43209 = state_43096;
(statearr_43209[(29)] = inst_43081);

return statearr_43209;
})();
if(inst_43082){
var statearr_43211_45375 = state_43096__$1;
(statearr_43211_45375[(1)] = (42));

} else {
var statearr_43212_45379 = state_43096__$1;
(statearr_43212_45379[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (16))){
var inst_42991 = (state_43096[(7)]);
var inst_42993 = cljs.core.chunked_seq_QMARK_(inst_42991);
var state_43096__$1 = state_43096;
if(inst_42993){
var statearr_43213_45380 = state_43096__$1;
(statearr_43213_45380[(1)] = (19));

} else {
var statearr_43214_45381 = state_43096__$1;
(statearr_43214_45381[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (38))){
var inst_43074 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43215_45386 = state_43096__$1;
(statearr_43215_45386[(2)] = inst_43074);

(statearr_43215_45386[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (30))){
var state_43096__$1 = state_43096;
var statearr_43216_45390 = state_43096__$1;
(statearr_43216_45390[(2)] = null);

(statearr_43216_45390[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (10))){
var inst_42962 = (state_43096[(15)]);
var inst_42960 = (state_43096[(16)]);
var inst_42974 = cljs.core._nth(inst_42960,inst_42962);
var inst_42979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42974,(0),null);
var inst_42981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42974,(1),null);
var state_43096__$1 = (function (){var statearr_43217 = state_43096;
(statearr_43217[(24)] = inst_42979);

return statearr_43217;
})();
if(cljs.core.truth_(inst_42981)){
var statearr_43218_45391 = state_43096__$1;
(statearr_43218_45391[(1)] = (13));

} else {
var statearr_43219_45392 = state_43096__$1;
(statearr_43219_45392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (18))){
var inst_43017 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43220_45393 = state_43096__$1;
(statearr_43220_45393[(2)] = inst_43017);

(statearr_43220_45393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (42))){
var state_43096__$1 = state_43096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43096__$1,(45),dchan);
} else {
if((state_val_43097 === (37))){
var inst_43052 = (state_43096[(23)]);
var inst_42946 = (state_43096[(9)]);
var inst_43063 = (state_43096[(22)]);
var inst_43063__$1 = cljs.core.first(inst_43052);
var inst_43064 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43063__$1,inst_42946,done);
var state_43096__$1 = (function (){var statearr_43224 = state_43096;
(statearr_43224[(22)] = inst_43063__$1);

return statearr_43224;
})();
if(cljs.core.truth_(inst_43064)){
var statearr_43226_45397 = state_43096__$1;
(statearr_43226_45397[(1)] = (39));

} else {
var statearr_43227_45401 = state_43096__$1;
(statearr_43227_45401[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (8))){
var inst_42961 = (state_43096[(13)]);
var inst_42962 = (state_43096[(15)]);
var inst_42968 = (inst_42962 < inst_42961);
var inst_42969 = inst_42968;
var state_43096__$1 = state_43096;
if(cljs.core.truth_(inst_42969)){
var statearr_43229_45402 = state_43096__$1;
(statearr_43229_45402[(1)] = (10));

} else {
var statearr_43230_45403 = state_43096__$1;
(statearr_43230_45403[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__41953__auto__ = null;
var cljs$core$async$mult_$_state_machine__41953__auto____0 = (function (){
var statearr_43231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43231[(0)] = cljs$core$async$mult_$_state_machine__41953__auto__);

(statearr_43231[(1)] = (1));

return statearr_43231;
});
var cljs$core$async$mult_$_state_machine__41953__auto____1 = (function (state_43096){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_43096);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e43232){var ex__41956__auto__ = e43232;
var statearr_43233_45407 = state_43096;
(statearr_43233_45407[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_43096[(4)]))){
var statearr_43234_45408 = state_43096;
(statearr_43234_45408[(1)] = cljs.core.first((state_43096[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45409 = state_43096;
state_43096 = G__45409;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41953__auto__ = function(state_43096){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41953__auto____1.call(this,state_43096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41953__auto____0;
cljs$core$async$mult_$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41953__auto____1;
return cljs$core$async$mult_$_state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_43235 = f__42086__auto__();
(statearr_43235[(6)] = c__42085__auto___45308);

return statearr_43235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
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
var G__43237 = arguments.length;
switch (G__43237) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_45412 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_45412(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_45413 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_45413(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_45417 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_45417(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_45424 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_45424(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_45425 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_45425(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45432 = arguments.length;
var i__4737__auto___45433 = (0);
while(true){
if((i__4737__auto___45433 < len__4736__auto___45432)){
args__4742__auto__.push((arguments[i__4737__auto___45433]));

var G__45434 = (i__4737__auto___45433 + (1));
i__4737__auto___45433 = G__45434;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43304){
var map__43305 = p__43304;
var map__43305__$1 = (((((!((map__43305 == null))))?(((((map__43305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43305):map__43305);
var opts = map__43305__$1;
var statearr_43307_45435 = state;
(statearr_43307_45435[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43309_45436 = state;
(statearr_43309_45436[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_43311_45437 = state;
(statearr_43311_45437[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43297){
var G__43298 = cljs.core.first(seq43297);
var seq43297__$1 = cljs.core.next(seq43297);
var G__43299 = cljs.core.first(seq43297__$1);
var seq43297__$2 = cljs.core.next(seq43297__$1);
var G__43300 = cljs.core.first(seq43297__$2);
var seq43297__$3 = cljs.core.next(seq43297__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43298,G__43299,G__43300,seq43297__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43317 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43317 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43318){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43318 = meta43318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43319,meta43318__$1){
var self__ = this;
var _43319__$1 = this;
return (new cljs.core.async.t_cljs$core$async43317(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43318__$1));
}));

(cljs.core.async.t_cljs$core$async43317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43319){
var self__ = this;
var _43319__$1 = this;
return self__.meta43318;
}));

(cljs.core.async.t_cljs$core$async43317.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43317.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43317.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43317.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43317.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43317.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43317.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43317.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43318","meta43318",1566011010,null)], null);
}));

(cljs.core.async.t_cljs$core$async43317.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43317");

(cljs.core.async.t_cljs$core$async43317.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43317");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43317.
 */
cljs.core.async.__GT_t_cljs$core$async43317 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43317(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43318){
return (new cljs.core.async.t_cljs$core$async43317(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43318));
});

}

return (new cljs.core.async.t_cljs$core$async43317(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42085__auto___45453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_43497){
var state_val_43498 = (state_43497[(1)]);
if((state_val_43498 === (7))){
var inst_43352 = (state_43497[(2)]);
var state_43497__$1 = state_43497;
var statearr_43499_45454 = state_43497__$1;
(statearr_43499_45454[(2)] = inst_43352);

(statearr_43499_45454[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (20))){
var inst_43369 = (state_43497[(7)]);
var state_43497__$1 = state_43497;
var statearr_43500_45455 = state_43497__$1;
(statearr_43500_45455[(2)] = inst_43369);

(statearr_43500_45455[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (27))){
var state_43497__$1 = state_43497;
var statearr_43501_45456 = state_43497__$1;
(statearr_43501_45456[(2)] = null);

(statearr_43501_45456[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (1))){
var inst_43333 = (state_43497[(8)]);
var inst_43333__$1 = calc_state();
var inst_43335 = (inst_43333__$1 == null);
var inst_43336 = cljs.core.not(inst_43335);
var state_43497__$1 = (function (){var statearr_43502 = state_43497;
(statearr_43502[(8)] = inst_43333__$1);

return statearr_43502;
})();
if(inst_43336){
var statearr_43503_45463 = state_43497__$1;
(statearr_43503_45463[(1)] = (2));

} else {
var statearr_43504_45464 = state_43497__$1;
(statearr_43504_45464[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (24))){
var inst_43470 = (state_43497[(9)]);
var inst_43409 = (state_43497[(10)]);
var inst_43421 = (state_43497[(11)]);
var inst_43470__$1 = (inst_43409.cljs$core$IFn$_invoke$arity$1 ? inst_43409.cljs$core$IFn$_invoke$arity$1(inst_43421) : inst_43409.call(null,inst_43421));
var state_43497__$1 = (function (){var statearr_43506 = state_43497;
(statearr_43506[(9)] = inst_43470__$1);

return statearr_43506;
})();
if(cljs.core.truth_(inst_43470__$1)){
var statearr_43507_45465 = state_43497__$1;
(statearr_43507_45465[(1)] = (29));

} else {
var statearr_43509_45466 = state_43497__$1;
(statearr_43509_45466[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (4))){
var inst_43355 = (state_43497[(2)]);
var state_43497__$1 = state_43497;
if(cljs.core.truth_(inst_43355)){
var statearr_43511_45467 = state_43497__$1;
(statearr_43511_45467[(1)] = (8));

} else {
var statearr_43514_45468 = state_43497__$1;
(statearr_43514_45468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (15))){
var inst_43399 = (state_43497[(2)]);
var state_43497__$1 = state_43497;
if(cljs.core.truth_(inst_43399)){
var statearr_43515_45469 = state_43497__$1;
(statearr_43515_45469[(1)] = (19));

} else {
var statearr_43516_45471 = state_43497__$1;
(statearr_43516_45471[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (21))){
var inst_43404 = (state_43497[(12)]);
var inst_43404__$1 = (state_43497[(2)]);
var inst_43409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43404__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43404__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43404__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43497__$1 = (function (){var statearr_43517 = state_43497;
(statearr_43517[(13)] = inst_43410);

(statearr_43517[(10)] = inst_43409);

(statearr_43517[(12)] = inst_43404__$1);

return statearr_43517;
})();
return cljs.core.async.ioc_alts_BANG_(state_43497__$1,(22),inst_43411);
} else {
if((state_val_43498 === (31))){
var inst_43479 = (state_43497[(2)]);
var state_43497__$1 = state_43497;
if(cljs.core.truth_(inst_43479)){
var statearr_43519_45472 = state_43497__$1;
(statearr_43519_45472[(1)] = (32));

} else {
var statearr_43520_45473 = state_43497__$1;
(statearr_43520_45473[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (32))){
var inst_43420 = (state_43497[(14)]);
var state_43497__$1 = state_43497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43497__$1,(35),out,inst_43420);
} else {
if((state_val_43498 === (33))){
var inst_43404 = (state_43497[(12)]);
var inst_43369 = inst_43404;
var state_43497__$1 = (function (){var statearr_43525 = state_43497;
(statearr_43525[(7)] = inst_43369);

return statearr_43525;
})();
var statearr_43526_45474 = state_43497__$1;
(statearr_43526_45474[(2)] = null);

(statearr_43526_45474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (13))){
var inst_43369 = (state_43497[(7)]);
var inst_43388 = inst_43369.cljs$lang$protocol_mask$partition0$;
var inst_43389 = (inst_43388 & (64));
var inst_43390 = inst_43369.cljs$core$ISeq$;
var inst_43391 = (cljs.core.PROTOCOL_SENTINEL === inst_43390);
var inst_43392 = ((inst_43389) || (inst_43391));
var state_43497__$1 = state_43497;
if(cljs.core.truth_(inst_43392)){
var statearr_43527_45475 = state_43497__$1;
(statearr_43527_45475[(1)] = (16));

} else {
var statearr_43529_45476 = state_43497__$1;
(statearr_43529_45476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (22))){
var inst_43420 = (state_43497[(14)]);
var inst_43421 = (state_43497[(11)]);
var inst_43419 = (state_43497[(2)]);
var inst_43420__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43419,(0),null);
var inst_43421__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43419,(1),null);
var inst_43426 = (inst_43420__$1 == null);
var inst_43428 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43421__$1,change);
var inst_43429 = ((inst_43426) || (inst_43428));
var state_43497__$1 = (function (){var statearr_43532 = state_43497;
(statearr_43532[(14)] = inst_43420__$1);

(statearr_43532[(11)] = inst_43421__$1);

return statearr_43532;
})();
if(cljs.core.truth_(inst_43429)){
var statearr_43534_45481 = state_43497__$1;
(statearr_43534_45481[(1)] = (23));

} else {
var statearr_43535_45482 = state_43497__$1;
(statearr_43535_45482[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (36))){
var inst_43404 = (state_43497[(12)]);
var inst_43369 = inst_43404;
var state_43497__$1 = (function (){var statearr_43538 = state_43497;
(statearr_43538[(7)] = inst_43369);

return statearr_43538;
})();
var statearr_43539_45484 = state_43497__$1;
(statearr_43539_45484[(2)] = null);

(statearr_43539_45484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (29))){
var inst_43470 = (state_43497[(9)]);
var state_43497__$1 = state_43497;
var statearr_43541_45485 = state_43497__$1;
(statearr_43541_45485[(2)] = inst_43470);

(statearr_43541_45485[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (6))){
var state_43497__$1 = state_43497;
var statearr_43543_45486 = state_43497__$1;
(statearr_43543_45486[(2)] = false);

(statearr_43543_45486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (28))){
var inst_43443 = (state_43497[(2)]);
var inst_43467 = calc_state();
var inst_43369 = inst_43467;
var state_43497__$1 = (function (){var statearr_43546 = state_43497;
(statearr_43546[(15)] = inst_43443);

(statearr_43546[(7)] = inst_43369);

return statearr_43546;
})();
var statearr_43547_45487 = state_43497__$1;
(statearr_43547_45487[(2)] = null);

(statearr_43547_45487[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (25))){
var inst_43493 = (state_43497[(2)]);
var state_43497__$1 = state_43497;
var statearr_43548_45488 = state_43497__$1;
(statearr_43548_45488[(2)] = inst_43493);

(statearr_43548_45488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (34))){
var inst_43491 = (state_43497[(2)]);
var state_43497__$1 = state_43497;
var statearr_43551_45489 = state_43497__$1;
(statearr_43551_45489[(2)] = inst_43491);

(statearr_43551_45489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (17))){
var state_43497__$1 = state_43497;
var statearr_43553_45491 = state_43497__$1;
(statearr_43553_45491[(2)] = false);

(statearr_43553_45491[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (3))){
var state_43497__$1 = state_43497;
var statearr_43554_45493 = state_43497__$1;
(statearr_43554_45493[(2)] = false);

(statearr_43554_45493[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (12))){
var inst_43495 = (state_43497[(2)]);
var state_43497__$1 = state_43497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43497__$1,inst_43495);
} else {
if((state_val_43498 === (2))){
var inst_43333 = (state_43497[(8)]);
var inst_43344 = inst_43333.cljs$lang$protocol_mask$partition0$;
var inst_43345 = (inst_43344 & (64));
var inst_43346 = inst_43333.cljs$core$ISeq$;
var inst_43347 = (cljs.core.PROTOCOL_SENTINEL === inst_43346);
var inst_43348 = ((inst_43345) || (inst_43347));
var state_43497__$1 = state_43497;
if(cljs.core.truth_(inst_43348)){
var statearr_43555_45494 = state_43497__$1;
(statearr_43555_45494[(1)] = (5));

} else {
var statearr_43556_45495 = state_43497__$1;
(statearr_43556_45495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (23))){
var inst_43420 = (state_43497[(14)]);
var inst_43432 = (inst_43420 == null);
var state_43497__$1 = state_43497;
if(cljs.core.truth_(inst_43432)){
var statearr_43557_45502 = state_43497__$1;
(statearr_43557_45502[(1)] = (26));

} else {
var statearr_43558_45503 = state_43497__$1;
(statearr_43558_45503[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (35))){
var inst_43482 = (state_43497[(2)]);
var state_43497__$1 = state_43497;
if(cljs.core.truth_(inst_43482)){
var statearr_43559_45505 = state_43497__$1;
(statearr_43559_45505[(1)] = (36));

} else {
var statearr_43560_45506 = state_43497__$1;
(statearr_43560_45506[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (19))){
var inst_43369 = (state_43497[(7)]);
var inst_43401 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43369);
var state_43497__$1 = state_43497;
var statearr_43561_45509 = state_43497__$1;
(statearr_43561_45509[(2)] = inst_43401);

(statearr_43561_45509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (11))){
var inst_43369 = (state_43497[(7)]);
var inst_43380 = (inst_43369 == null);
var inst_43381 = cljs.core.not(inst_43380);
var state_43497__$1 = state_43497;
if(inst_43381){
var statearr_43562_45512 = state_43497__$1;
(statearr_43562_45512[(1)] = (13));

} else {
var statearr_43563_45513 = state_43497__$1;
(statearr_43563_45513[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (9))){
var inst_43333 = (state_43497[(8)]);
var state_43497__$1 = state_43497;
var statearr_43564_45515 = state_43497__$1;
(statearr_43564_45515[(2)] = inst_43333);

(statearr_43564_45515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (5))){
var state_43497__$1 = state_43497;
var statearr_43565_45516 = state_43497__$1;
(statearr_43565_45516[(2)] = true);

(statearr_43565_45516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (14))){
var state_43497__$1 = state_43497;
var statearr_43566_45517 = state_43497__$1;
(statearr_43566_45517[(2)] = false);

(statearr_43566_45517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (26))){
var inst_43421 = (state_43497[(11)]);
var inst_43436 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43421);
var state_43497__$1 = state_43497;
var statearr_43568_45518 = state_43497__$1;
(statearr_43568_45518[(2)] = inst_43436);

(statearr_43568_45518[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (16))){
var state_43497__$1 = state_43497;
var statearr_43569_45520 = state_43497__$1;
(statearr_43569_45520[(2)] = true);

(statearr_43569_45520[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (38))){
var inst_43487 = (state_43497[(2)]);
var state_43497__$1 = state_43497;
var statearr_43571_45523 = state_43497__$1;
(statearr_43571_45523[(2)] = inst_43487);

(statearr_43571_45523[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (30))){
var inst_43410 = (state_43497[(13)]);
var inst_43409 = (state_43497[(10)]);
var inst_43421 = (state_43497[(11)]);
var inst_43474 = cljs.core.empty_QMARK_(inst_43409);
var inst_43475 = (inst_43410.cljs$core$IFn$_invoke$arity$1 ? inst_43410.cljs$core$IFn$_invoke$arity$1(inst_43421) : inst_43410.call(null,inst_43421));
var inst_43476 = cljs.core.not(inst_43475);
var inst_43477 = ((inst_43474) && (inst_43476));
var state_43497__$1 = state_43497;
var statearr_43572_45524 = state_43497__$1;
(statearr_43572_45524[(2)] = inst_43477);

(statearr_43572_45524[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (10))){
var inst_43333 = (state_43497[(8)]);
var inst_43361 = (state_43497[(2)]);
var inst_43362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43361,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43361,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43361,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43369 = inst_43333;
var state_43497__$1 = (function (){var statearr_43573 = state_43497;
(statearr_43573[(16)] = inst_43368);

(statearr_43573[(17)] = inst_43362);

(statearr_43573[(18)] = inst_43367);

(statearr_43573[(7)] = inst_43369);

return statearr_43573;
})();
var statearr_43574_45525 = state_43497__$1;
(statearr_43574_45525[(2)] = null);

(statearr_43574_45525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (18))){
var inst_43396 = (state_43497[(2)]);
var state_43497__$1 = state_43497;
var statearr_43579_45526 = state_43497__$1;
(statearr_43579_45526[(2)] = inst_43396);

(statearr_43579_45526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (37))){
var state_43497__$1 = state_43497;
var statearr_43594_45527 = state_43497__$1;
(statearr_43594_45527[(2)] = null);

(statearr_43594_45527[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43498 === (8))){
var inst_43333 = (state_43497[(8)]);
var inst_43358 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43333);
var state_43497__$1 = state_43497;
var statearr_43595_45528 = state_43497__$1;
(statearr_43595_45528[(2)] = inst_43358);

(statearr_43595_45528[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__41953__auto__ = null;
var cljs$core$async$mix_$_state_machine__41953__auto____0 = (function (){
var statearr_43596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43596[(0)] = cljs$core$async$mix_$_state_machine__41953__auto__);

(statearr_43596[(1)] = (1));

return statearr_43596;
});
var cljs$core$async$mix_$_state_machine__41953__auto____1 = (function (state_43497){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_43497);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e43604){var ex__41956__auto__ = e43604;
var statearr_43605_45529 = state_43497;
(statearr_43605_45529[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_43497[(4)]))){
var statearr_43606_45530 = state_43497;
(statearr_43606_45530[(1)] = cljs.core.first((state_43497[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45531 = state_43497;
state_43497 = G__45531;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41953__auto__ = function(state_43497){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41953__auto____1.call(this,state_43497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41953__auto____0;
cljs$core$async$mix_$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41953__auto____1;
return cljs$core$async$mix_$_state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_43609 = f__42086__auto__();
(statearr_43609[(6)] = c__42085__auto___45453);

return statearr_43609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_45544 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_45544(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45545 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_45545(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45548 = (function() {
var G__45549 = null;
var G__45549__1 = (function (p){
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
var G__45549__2 = (function (p,v){
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
G__45549 = function(p,v){
switch(arguments.length){
case 1:
return G__45549__1.call(this,p);
case 2:
return G__45549__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45549.cljs$core$IFn$_invoke$arity$1 = G__45549__1;
G__45549.cljs$core$IFn$_invoke$arity$2 = G__45549__2;
return G__45549;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43684 = arguments.length;
switch (G__43684) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45548(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45548(p,v);
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
var G__43701 = arguments.length;
switch (G__43701) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43694_SHARP_){
if(cljs.core.truth_((p1__43694_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43694_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43694_SHARP_.call(null,topic)))){
return p1__43694_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43694_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43709 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43710){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43710 = meta43710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43711,meta43710__$1){
var self__ = this;
var _43711__$1 = this;
return (new cljs.core.async.t_cljs$core$async43709(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43710__$1));
}));

(cljs.core.async.t_cljs$core$async43709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43711){
var self__ = this;
var _43711__$1 = this;
return self__.meta43710;
}));

(cljs.core.async.t_cljs$core$async43709.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43709.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43709.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43709.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43709.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async43709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43709.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43710","meta43710",1492249281,null)], null);
}));

(cljs.core.async.t_cljs$core$async43709.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43709");

(cljs.core.async.t_cljs$core$async43709.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async43709");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43709.
 */
cljs.core.async.__GT_t_cljs$core$async43709 = (function cljs$core$async$__GT_t_cljs$core$async43709(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43710){
return (new cljs.core.async.t_cljs$core$async43709(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43710));
});

}

return (new cljs.core.async.t_cljs$core$async43709(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42085__auto___45569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_43801){
var state_val_43802 = (state_43801[(1)]);
if((state_val_43802 === (7))){
var inst_43796 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43805_45571 = state_43801__$1;
(statearr_43805_45571[(2)] = inst_43796);

(statearr_43805_45571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (20))){
var state_43801__$1 = state_43801;
var statearr_43808_45634 = state_43801__$1;
(statearr_43808_45634[(2)] = null);

(statearr_43808_45634[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (1))){
var state_43801__$1 = state_43801;
var statearr_43809_45639 = state_43801__$1;
(statearr_43809_45639[(2)] = null);

(statearr_43809_45639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (24))){
var inst_43779 = (state_43801[(7)]);
var inst_43788 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43779);
var state_43801__$1 = state_43801;
var statearr_43810_45640 = state_43801__$1;
(statearr_43810_45640[(2)] = inst_43788);

(statearr_43810_45640[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (4))){
var inst_43727 = (state_43801[(8)]);
var inst_43727__$1 = (state_43801[(2)]);
var inst_43728 = (inst_43727__$1 == null);
var state_43801__$1 = (function (){var statearr_43811 = state_43801;
(statearr_43811[(8)] = inst_43727__$1);

return statearr_43811;
})();
if(cljs.core.truth_(inst_43728)){
var statearr_43812_45645 = state_43801__$1;
(statearr_43812_45645[(1)] = (5));

} else {
var statearr_43814_45650 = state_43801__$1;
(statearr_43814_45650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (15))){
var inst_43773 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43817_45655 = state_43801__$1;
(statearr_43817_45655[(2)] = inst_43773);

(statearr_43817_45655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (21))){
var inst_43793 = (state_43801[(2)]);
var state_43801__$1 = (function (){var statearr_43819 = state_43801;
(statearr_43819[(9)] = inst_43793);

return statearr_43819;
})();
var statearr_43820_45659 = state_43801__$1;
(statearr_43820_45659[(2)] = null);

(statearr_43820_45659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (13))){
var inst_43752 = (state_43801[(10)]);
var inst_43757 = cljs.core.chunked_seq_QMARK_(inst_43752);
var state_43801__$1 = state_43801;
if(inst_43757){
var statearr_43822_45660 = state_43801__$1;
(statearr_43822_45660[(1)] = (16));

} else {
var statearr_43823_45661 = state_43801__$1;
(statearr_43823_45661[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (22))){
var inst_43785 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
if(cljs.core.truth_(inst_43785)){
var statearr_43824_45662 = state_43801__$1;
(statearr_43824_45662[(1)] = (23));

} else {
var statearr_43825_45663 = state_43801__$1;
(statearr_43825_45663[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (6))){
var inst_43779 = (state_43801[(7)]);
var inst_43781 = (state_43801[(11)]);
var inst_43727 = (state_43801[(8)]);
var inst_43779__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43727) : topic_fn.call(null,inst_43727));
var inst_43780 = cljs.core.deref(mults);
var inst_43781__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43780,inst_43779__$1);
var state_43801__$1 = (function (){var statearr_43829 = state_43801;
(statearr_43829[(7)] = inst_43779__$1);

(statearr_43829[(11)] = inst_43781__$1);

return statearr_43829;
})();
if(cljs.core.truth_(inst_43781__$1)){
var statearr_43830_45668 = state_43801__$1;
(statearr_43830_45668[(1)] = (19));

} else {
var statearr_43832_45669 = state_43801__$1;
(statearr_43832_45669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (25))){
var inst_43790 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43841_45670 = state_43801__$1;
(statearr_43841_45670[(2)] = inst_43790);

(statearr_43841_45670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (17))){
var inst_43752 = (state_43801[(10)]);
var inst_43764 = cljs.core.first(inst_43752);
var inst_43765 = cljs.core.async.muxch_STAR_(inst_43764);
var inst_43766 = cljs.core.async.close_BANG_(inst_43765);
var inst_43767 = cljs.core.next(inst_43752);
var inst_43737 = inst_43767;
var inst_43738 = null;
var inst_43739 = (0);
var inst_43740 = (0);
var state_43801__$1 = (function (){var statearr_43844 = state_43801;
(statearr_43844[(12)] = inst_43740);

(statearr_43844[(13)] = inst_43737);

(statearr_43844[(14)] = inst_43738);

(statearr_43844[(15)] = inst_43766);

(statearr_43844[(16)] = inst_43739);

return statearr_43844;
})();
var statearr_43846_45675 = state_43801__$1;
(statearr_43846_45675[(2)] = null);

(statearr_43846_45675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (3))){
var inst_43798 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43801__$1,inst_43798);
} else {
if((state_val_43802 === (12))){
var inst_43775 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43854_45676 = state_43801__$1;
(statearr_43854_45676[(2)] = inst_43775);

(statearr_43854_45676[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (2))){
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43801__$1,(4),ch);
} else {
if((state_val_43802 === (23))){
var state_43801__$1 = state_43801;
var statearr_43864_45677 = state_43801__$1;
(statearr_43864_45677[(2)] = null);

(statearr_43864_45677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (19))){
var inst_43781 = (state_43801[(11)]);
var inst_43727 = (state_43801[(8)]);
var inst_43783 = cljs.core.async.muxch_STAR_(inst_43781);
var state_43801__$1 = state_43801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43801__$1,(22),inst_43783,inst_43727);
} else {
if((state_val_43802 === (11))){
var inst_43737 = (state_43801[(13)]);
var inst_43752 = (state_43801[(10)]);
var inst_43752__$1 = cljs.core.seq(inst_43737);
var state_43801__$1 = (function (){var statearr_43873 = state_43801;
(statearr_43873[(10)] = inst_43752__$1);

return statearr_43873;
})();
if(inst_43752__$1){
var statearr_43874_45678 = state_43801__$1;
(statearr_43874_45678[(1)] = (13));

} else {
var statearr_43875_45679 = state_43801__$1;
(statearr_43875_45679[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (9))){
var inst_43777 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43876_45681 = state_43801__$1;
(statearr_43876_45681[(2)] = inst_43777);

(statearr_43876_45681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (5))){
var inst_43734 = cljs.core.deref(mults);
var inst_43735 = cljs.core.vals(inst_43734);
var inst_43736 = cljs.core.seq(inst_43735);
var inst_43737 = inst_43736;
var inst_43738 = null;
var inst_43739 = (0);
var inst_43740 = (0);
var state_43801__$1 = (function (){var statearr_43877 = state_43801;
(statearr_43877[(12)] = inst_43740);

(statearr_43877[(13)] = inst_43737);

(statearr_43877[(14)] = inst_43738);

(statearr_43877[(16)] = inst_43739);

return statearr_43877;
})();
var statearr_43878_45682 = state_43801__$1;
(statearr_43878_45682[(2)] = null);

(statearr_43878_45682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (14))){
var state_43801__$1 = state_43801;
var statearr_43882_45683 = state_43801__$1;
(statearr_43882_45683[(2)] = null);

(statearr_43882_45683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (16))){
var inst_43752 = (state_43801[(10)]);
var inst_43759 = cljs.core.chunk_first(inst_43752);
var inst_43760 = cljs.core.chunk_rest(inst_43752);
var inst_43761 = cljs.core.count(inst_43759);
var inst_43737 = inst_43760;
var inst_43738 = inst_43759;
var inst_43739 = inst_43761;
var inst_43740 = (0);
var state_43801__$1 = (function (){var statearr_43883 = state_43801;
(statearr_43883[(12)] = inst_43740);

(statearr_43883[(13)] = inst_43737);

(statearr_43883[(14)] = inst_43738);

(statearr_43883[(16)] = inst_43739);

return statearr_43883;
})();
var statearr_43884_45688 = state_43801__$1;
(statearr_43884_45688[(2)] = null);

(statearr_43884_45688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (10))){
var inst_43740 = (state_43801[(12)]);
var inst_43737 = (state_43801[(13)]);
var inst_43738 = (state_43801[(14)]);
var inst_43739 = (state_43801[(16)]);
var inst_43745 = cljs.core._nth(inst_43738,inst_43740);
var inst_43746 = cljs.core.async.muxch_STAR_(inst_43745);
var inst_43747 = cljs.core.async.close_BANG_(inst_43746);
var inst_43748 = (inst_43740 + (1));
var tmp43879 = inst_43737;
var tmp43880 = inst_43738;
var tmp43881 = inst_43739;
var inst_43737__$1 = tmp43879;
var inst_43738__$1 = tmp43880;
var inst_43739__$1 = tmp43881;
var inst_43740__$1 = inst_43748;
var state_43801__$1 = (function (){var statearr_43885 = state_43801;
(statearr_43885[(12)] = inst_43740__$1);

(statearr_43885[(13)] = inst_43737__$1);

(statearr_43885[(14)] = inst_43738__$1);

(statearr_43885[(17)] = inst_43747);

(statearr_43885[(16)] = inst_43739__$1);

return statearr_43885;
})();
var statearr_43886_45689 = state_43801__$1;
(statearr_43886_45689[(2)] = null);

(statearr_43886_45689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (18))){
var inst_43770 = (state_43801[(2)]);
var state_43801__$1 = state_43801;
var statearr_43887_45694 = state_43801__$1;
(statearr_43887_45694[(2)] = inst_43770);

(statearr_43887_45694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43802 === (8))){
var inst_43740 = (state_43801[(12)]);
var inst_43739 = (state_43801[(16)]);
var inst_43742 = (inst_43740 < inst_43739);
var inst_43743 = inst_43742;
var state_43801__$1 = state_43801;
if(cljs.core.truth_(inst_43743)){
var statearr_43888_45701 = state_43801__$1;
(statearr_43888_45701[(1)] = (10));

} else {
var statearr_43889_45702 = state_43801__$1;
(statearr_43889_45702[(1)] = (11));

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
var cljs$core$async$state_machine__41953__auto__ = null;
var cljs$core$async$state_machine__41953__auto____0 = (function (){
var statearr_43891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43891[(0)] = cljs$core$async$state_machine__41953__auto__);

(statearr_43891[(1)] = (1));

return statearr_43891;
});
var cljs$core$async$state_machine__41953__auto____1 = (function (state_43801){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_43801);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e43892){var ex__41956__auto__ = e43892;
var statearr_43893_45722 = state_43801;
(statearr_43893_45722[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_43801[(4)]))){
var statearr_43894_45724 = state_43801;
(statearr_43894_45724[(1)] = cljs.core.first((state_43801[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45733 = state_43801;
state_43801 = G__45733;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$state_machine__41953__auto__ = function(state_43801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41953__auto____1.call(this,state_43801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41953__auto____0;
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41953__auto____1;
return cljs$core$async$state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_43895 = f__42086__auto__();
(statearr_43895[(6)] = c__42085__auto___45569);

return statearr_43895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
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
var G__43897 = arguments.length;
switch (G__43897) {
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
var G__43905 = arguments.length;
switch (G__43905) {
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
var G__43911 = arguments.length;
switch (G__43911) {
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
var c__42085__auto___45786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_43956){
var state_val_43957 = (state_43956[(1)]);
if((state_val_43957 === (7))){
var state_43956__$1 = state_43956;
var statearr_43961_45787 = state_43956__$1;
(statearr_43961_45787[(2)] = null);

(statearr_43961_45787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43957 === (1))){
var state_43956__$1 = state_43956;
var statearr_43962_45788 = state_43956__$1;
(statearr_43962_45788[(2)] = null);

(statearr_43962_45788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43957 === (4))){
var inst_43915 = (state_43956[(7)]);
var inst_43916 = (state_43956[(8)]);
var inst_43918 = (inst_43916 < inst_43915);
var state_43956__$1 = state_43956;
if(cljs.core.truth_(inst_43918)){
var statearr_43966_45792 = state_43956__$1;
(statearr_43966_45792[(1)] = (6));

} else {
var statearr_43968_45793 = state_43956__$1;
(statearr_43968_45793[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43957 === (15))){
var inst_43942 = (state_43956[(9)]);
var inst_43947 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_43942);
var state_43956__$1 = state_43956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43956__$1,(17),out,inst_43947);
} else {
if((state_val_43957 === (13))){
var inst_43942 = (state_43956[(9)]);
var inst_43942__$1 = (state_43956[(2)]);
var inst_43943 = cljs.core.some(cljs.core.nil_QMARK_,inst_43942__$1);
var state_43956__$1 = (function (){var statearr_43972 = state_43956;
(statearr_43972[(9)] = inst_43942__$1);

return statearr_43972;
})();
if(cljs.core.truth_(inst_43943)){
var statearr_43973_45803 = state_43956__$1;
(statearr_43973_45803[(1)] = (14));

} else {
var statearr_43974_45808 = state_43956__$1;
(statearr_43974_45808[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43957 === (6))){
var state_43956__$1 = state_43956;
var statearr_43975_45809 = state_43956__$1;
(statearr_43975_45809[(2)] = null);

(statearr_43975_45809[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43957 === (17))){
var inst_43949 = (state_43956[(2)]);
var state_43956__$1 = (function (){var statearr_43977 = state_43956;
(statearr_43977[(10)] = inst_43949);

return statearr_43977;
})();
var statearr_43978_45811 = state_43956__$1;
(statearr_43978_45811[(2)] = null);

(statearr_43978_45811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43957 === (3))){
var inst_43954 = (state_43956[(2)]);
var state_43956__$1 = state_43956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43956__$1,inst_43954);
} else {
if((state_val_43957 === (12))){
var _ = (function (){var statearr_43985 = state_43956;
(statearr_43985[(4)] = cljs.core.rest((state_43956[(4)])));

return statearr_43985;
})();
var state_43956__$1 = state_43956;
var ex43976 = (state_43956__$1[(2)]);
var statearr_43986_45814 = state_43956__$1;
(statearr_43986_45814[(5)] = ex43976);


if((ex43976 instanceof Object)){
var statearr_43987_45815 = state_43956__$1;
(statearr_43987_45815[(1)] = (11));

(statearr_43987_45815[(5)] = null);

} else {
throw ex43976;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43957 === (2))){
var inst_43914 = cljs.core.reset_BANG_(dctr,cnt);
var inst_43915 = cnt;
var inst_43916 = (0);
var state_43956__$1 = (function (){var statearr_43989 = state_43956;
(statearr_43989[(7)] = inst_43915);

(statearr_43989[(11)] = inst_43914);

(statearr_43989[(8)] = inst_43916);

return statearr_43989;
})();
var statearr_43993_45816 = state_43956__$1;
(statearr_43993_45816[(2)] = null);

(statearr_43993_45816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43957 === (11))){
var inst_43921 = (state_43956[(2)]);
var inst_43922 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_43956__$1 = (function (){var statearr_43996 = state_43956;
(statearr_43996[(12)] = inst_43921);

return statearr_43996;
})();
var statearr_43998_45817 = state_43956__$1;
(statearr_43998_45817[(2)] = inst_43922);

(statearr_43998_45817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43957 === (9))){
var inst_43916 = (state_43956[(8)]);
var _ = (function (){var statearr_43999 = state_43956;
(statearr_43999[(4)] = cljs.core.cons((12),(state_43956[(4)])));

return statearr_43999;
})();
var inst_43928 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_43916) : chs__$1.call(null,inst_43916));
var inst_43929 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_43916) : done.call(null,inst_43916));
var inst_43930 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_43928,inst_43929);
var ___$1 = (function (){var statearr_44000 = state_43956;
(statearr_44000[(4)] = cljs.core.rest((state_43956[(4)])));

return statearr_44000;
})();
var state_43956__$1 = state_43956;
var statearr_44001_45879 = state_43956__$1;
(statearr_44001_45879[(2)] = inst_43930);

(statearr_44001_45879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43957 === (5))){
var inst_43940 = (state_43956[(2)]);
var state_43956__$1 = (function (){var statearr_44002 = state_43956;
(statearr_44002[(13)] = inst_43940);

return statearr_44002;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43956__$1,(13),dchan);
} else {
if((state_val_43957 === (14))){
var inst_43945 = cljs.core.async.close_BANG_(out);
var state_43956__$1 = state_43956;
var statearr_44003_45880 = state_43956__$1;
(statearr_44003_45880[(2)] = inst_43945);

(statearr_44003_45880[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43957 === (16))){
var inst_43952 = (state_43956[(2)]);
var state_43956__$1 = state_43956;
var statearr_44004_45886 = state_43956__$1;
(statearr_44004_45886[(2)] = inst_43952);

(statearr_44004_45886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43957 === (10))){
var inst_43916 = (state_43956[(8)]);
var inst_43933 = (state_43956[(2)]);
var inst_43934 = (inst_43916 + (1));
var inst_43916__$1 = inst_43934;
var state_43956__$1 = (function (){var statearr_44005 = state_43956;
(statearr_44005[(14)] = inst_43933);

(statearr_44005[(8)] = inst_43916__$1);

return statearr_44005;
})();
var statearr_44008_45888 = state_43956__$1;
(statearr_44008_45888[(2)] = null);

(statearr_44008_45888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43957 === (8))){
var inst_43938 = (state_43956[(2)]);
var state_43956__$1 = state_43956;
var statearr_44010_45889 = state_43956__$1;
(statearr_44010_45889[(2)] = inst_43938);

(statearr_44010_45889[(1)] = (5));


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
var cljs$core$async$state_machine__41953__auto__ = null;
var cljs$core$async$state_machine__41953__auto____0 = (function (){
var statearr_44011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44011[(0)] = cljs$core$async$state_machine__41953__auto__);

(statearr_44011[(1)] = (1));

return statearr_44011;
});
var cljs$core$async$state_machine__41953__auto____1 = (function (state_43956){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_43956);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e44012){var ex__41956__auto__ = e44012;
var statearr_44013_45893 = state_43956;
(statearr_44013_45893[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_43956[(4)]))){
var statearr_44014_45897 = state_43956;
(statearr_44014_45897[(1)] = cljs.core.first((state_43956[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45898 = state_43956;
state_43956 = G__45898;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$state_machine__41953__auto__ = function(state_43956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41953__auto____1.call(this,state_43956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41953__auto____0;
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41953__auto____1;
return cljs$core$async$state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_44017 = f__42086__auto__();
(statearr_44017[(6)] = c__42085__auto___45786);

return statearr_44017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
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
var G__44021 = arguments.length;
switch (G__44021) {
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
var c__42085__auto___45906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_44057){
var state_val_44058 = (state_44057[(1)]);
if((state_val_44058 === (7))){
var inst_44036 = (state_44057[(7)]);
var inst_44037 = (state_44057[(8)]);
var inst_44036__$1 = (state_44057[(2)]);
var inst_44037__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44036__$1,(0),null);
var inst_44038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44036__$1,(1),null);
var inst_44039 = (inst_44037__$1 == null);
var state_44057__$1 = (function (){var statearr_44060 = state_44057;
(statearr_44060[(9)] = inst_44038);

(statearr_44060[(7)] = inst_44036__$1);

(statearr_44060[(8)] = inst_44037__$1);

return statearr_44060;
})();
if(cljs.core.truth_(inst_44039)){
var statearr_44061_45907 = state_44057__$1;
(statearr_44061_45907[(1)] = (8));

} else {
var statearr_44062_45908 = state_44057__$1;
(statearr_44062_45908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44058 === (1))){
var inst_44026 = cljs.core.vec(chs);
var inst_44027 = inst_44026;
var state_44057__$1 = (function (){var statearr_44066 = state_44057;
(statearr_44066[(10)] = inst_44027);

return statearr_44066;
})();
var statearr_44067_45909 = state_44057__$1;
(statearr_44067_45909[(2)] = null);

(statearr_44067_45909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44058 === (4))){
var inst_44027 = (state_44057[(10)]);
var state_44057__$1 = state_44057;
return cljs.core.async.ioc_alts_BANG_(state_44057__$1,(7),inst_44027);
} else {
if((state_val_44058 === (6))){
var inst_44053 = (state_44057[(2)]);
var state_44057__$1 = state_44057;
var statearr_44068_45914 = state_44057__$1;
(statearr_44068_45914[(2)] = inst_44053);

(statearr_44068_45914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44058 === (3))){
var inst_44055 = (state_44057[(2)]);
var state_44057__$1 = state_44057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44057__$1,inst_44055);
} else {
if((state_val_44058 === (2))){
var inst_44027 = (state_44057[(10)]);
var inst_44029 = cljs.core.count(inst_44027);
var inst_44030 = (inst_44029 > (0));
var state_44057__$1 = state_44057;
if(cljs.core.truth_(inst_44030)){
var statearr_44072_45915 = state_44057__$1;
(statearr_44072_45915[(1)] = (4));

} else {
var statearr_44073_45920 = state_44057__$1;
(statearr_44073_45920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44058 === (11))){
var inst_44027 = (state_44057[(10)]);
var inst_44046 = (state_44057[(2)]);
var tmp44070 = inst_44027;
var inst_44027__$1 = tmp44070;
var state_44057__$1 = (function (){var statearr_44074 = state_44057;
(statearr_44074[(11)] = inst_44046);

(statearr_44074[(10)] = inst_44027__$1);

return statearr_44074;
})();
var statearr_44075_45925 = state_44057__$1;
(statearr_44075_45925[(2)] = null);

(statearr_44075_45925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44058 === (9))){
var inst_44037 = (state_44057[(8)]);
var state_44057__$1 = state_44057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44057__$1,(11),out,inst_44037);
} else {
if((state_val_44058 === (5))){
var inst_44051 = cljs.core.async.close_BANG_(out);
var state_44057__$1 = state_44057;
var statearr_44080_45930 = state_44057__$1;
(statearr_44080_45930[(2)] = inst_44051);

(statearr_44080_45930[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44058 === (10))){
var inst_44049 = (state_44057[(2)]);
var state_44057__$1 = state_44057;
var statearr_44082_45935 = state_44057__$1;
(statearr_44082_45935[(2)] = inst_44049);

(statearr_44082_45935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44058 === (8))){
var inst_44038 = (state_44057[(9)]);
var inst_44036 = (state_44057[(7)]);
var inst_44037 = (state_44057[(8)]);
var inst_44027 = (state_44057[(10)]);
var inst_44041 = (function (){var cs = inst_44027;
var vec__44032 = inst_44036;
var v = inst_44037;
var c = inst_44038;
return (function (p1__44018_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44018_SHARP_);
});
})();
var inst_44042 = cljs.core.filterv(inst_44041,inst_44027);
var inst_44027__$1 = inst_44042;
var state_44057__$1 = (function (){var statearr_44083 = state_44057;
(statearr_44083[(10)] = inst_44027__$1);

return statearr_44083;
})();
var statearr_44084_45945 = state_44057__$1;
(statearr_44084_45945[(2)] = null);

(statearr_44084_45945[(1)] = (2));


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
var cljs$core$async$state_machine__41953__auto__ = null;
var cljs$core$async$state_machine__41953__auto____0 = (function (){
var statearr_44085 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44085[(0)] = cljs$core$async$state_machine__41953__auto__);

(statearr_44085[(1)] = (1));

return statearr_44085;
});
var cljs$core$async$state_machine__41953__auto____1 = (function (state_44057){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_44057);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e44086){var ex__41956__auto__ = e44086;
var statearr_44087_45949 = state_44057;
(statearr_44087_45949[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_44057[(4)]))){
var statearr_44088_45950 = state_44057;
(statearr_44088_45950[(1)] = cljs.core.first((state_44057[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45951 = state_44057;
state_44057 = G__45951;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$state_machine__41953__auto__ = function(state_44057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41953__auto____1.call(this,state_44057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41953__auto____0;
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41953__auto____1;
return cljs$core$async$state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_44089 = f__42086__auto__();
(statearr_44089[(6)] = c__42085__auto___45906);

return statearr_44089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
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
var G__44091 = arguments.length;
switch (G__44091) {
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
var c__42085__auto___45953 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_44122){
var state_val_44123 = (state_44122[(1)]);
if((state_val_44123 === (7))){
var inst_44104 = (state_44122[(7)]);
var inst_44104__$1 = (state_44122[(2)]);
var inst_44105 = (inst_44104__$1 == null);
var inst_44106 = cljs.core.not(inst_44105);
var state_44122__$1 = (function (){var statearr_44125 = state_44122;
(statearr_44125[(7)] = inst_44104__$1);

return statearr_44125;
})();
if(inst_44106){
var statearr_44126_45955 = state_44122__$1;
(statearr_44126_45955[(1)] = (8));

} else {
var statearr_44127_45957 = state_44122__$1;
(statearr_44127_45957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44123 === (1))){
var inst_44099 = (0);
var state_44122__$1 = (function (){var statearr_44128 = state_44122;
(statearr_44128[(8)] = inst_44099);

return statearr_44128;
})();
var statearr_44129_45958 = state_44122__$1;
(statearr_44129_45958[(2)] = null);

(statearr_44129_45958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44123 === (4))){
var state_44122__$1 = state_44122;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44122__$1,(7),ch);
} else {
if((state_val_44123 === (6))){
var inst_44117 = (state_44122[(2)]);
var state_44122__$1 = state_44122;
var statearr_44130_45959 = state_44122__$1;
(statearr_44130_45959[(2)] = inst_44117);

(statearr_44130_45959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44123 === (3))){
var inst_44119 = (state_44122[(2)]);
var inst_44120 = cljs.core.async.close_BANG_(out);
var state_44122__$1 = (function (){var statearr_44131 = state_44122;
(statearr_44131[(9)] = inst_44119);

return statearr_44131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44122__$1,inst_44120);
} else {
if((state_val_44123 === (2))){
var inst_44099 = (state_44122[(8)]);
var inst_44101 = (inst_44099 < n);
var state_44122__$1 = state_44122;
if(cljs.core.truth_(inst_44101)){
var statearr_44134_45961 = state_44122__$1;
(statearr_44134_45961[(1)] = (4));

} else {
var statearr_44135_45963 = state_44122__$1;
(statearr_44135_45963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44123 === (11))){
var inst_44099 = (state_44122[(8)]);
var inst_44109 = (state_44122[(2)]);
var inst_44110 = (inst_44099 + (1));
var inst_44099__$1 = inst_44110;
var state_44122__$1 = (function (){var statearr_44136 = state_44122;
(statearr_44136[(10)] = inst_44109);

(statearr_44136[(8)] = inst_44099__$1);

return statearr_44136;
})();
var statearr_44137_45964 = state_44122__$1;
(statearr_44137_45964[(2)] = null);

(statearr_44137_45964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44123 === (9))){
var state_44122__$1 = state_44122;
var statearr_44138_45965 = state_44122__$1;
(statearr_44138_45965[(2)] = null);

(statearr_44138_45965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44123 === (5))){
var state_44122__$1 = state_44122;
var statearr_44139_45970 = state_44122__$1;
(statearr_44139_45970[(2)] = null);

(statearr_44139_45970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44123 === (10))){
var inst_44114 = (state_44122[(2)]);
var state_44122__$1 = state_44122;
var statearr_44140_45972 = state_44122__$1;
(statearr_44140_45972[(2)] = inst_44114);

(statearr_44140_45972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44123 === (8))){
var inst_44104 = (state_44122[(7)]);
var state_44122__$1 = state_44122;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44122__$1,(11),out,inst_44104);
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
var cljs$core$async$state_machine__41953__auto__ = null;
var cljs$core$async$state_machine__41953__auto____0 = (function (){
var statearr_44141 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44141[(0)] = cljs$core$async$state_machine__41953__auto__);

(statearr_44141[(1)] = (1));

return statearr_44141;
});
var cljs$core$async$state_machine__41953__auto____1 = (function (state_44122){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_44122);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e44144){var ex__41956__auto__ = e44144;
var statearr_44145_45973 = state_44122;
(statearr_44145_45973[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_44122[(4)]))){
var statearr_44147_45974 = state_44122;
(statearr_44147_45974[(1)] = cljs.core.first((state_44122[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45976 = state_44122;
state_44122 = G__45976;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$state_machine__41953__auto__ = function(state_44122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41953__auto____1.call(this,state_44122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41953__auto____0;
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41953__auto____1;
return cljs$core$async$state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_44148 = f__42086__auto__();
(statearr_44148[(6)] = c__42085__auto___45953);

return statearr_44148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44151 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44151 = (function (f,ch,meta44152){
this.f = f;
this.ch = ch;
this.meta44152 = meta44152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44153,meta44152__$1){
var self__ = this;
var _44153__$1 = this;
return (new cljs.core.async.t_cljs$core$async44151(self__.f,self__.ch,meta44152__$1));
}));

(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44153){
var self__ = this;
var _44153__$1 = this;
return self__.meta44152;
}));

(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44161 = (function (f,ch,meta44152,_,fn1,meta44162){
this.f = f;
this.ch = ch;
this.meta44152 = meta44152;
this._ = _;
this.fn1 = fn1;
this.meta44162 = meta44162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44163,meta44162__$1){
var self__ = this;
var _44163__$1 = this;
return (new cljs.core.async.t_cljs$core$async44161(self__.f,self__.ch,self__.meta44152,self__._,self__.fn1,meta44162__$1));
}));

(cljs.core.async.t_cljs$core$async44161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44163){
var self__ = this;
var _44163__$1 = this;
return self__.meta44162;
}));

(cljs.core.async.t_cljs$core$async44161.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44161.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44149_SHARP_){
var G__44164 = (((p1__44149_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44149_SHARP_) : self__.f.call(null,p1__44149_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44164) : f1.call(null,G__44164));
});
}));

(cljs.core.async.t_cljs$core$async44161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44152","meta44152",-260975648,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44151","cljs.core.async/t_cljs$core$async44151",308208286,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44162","meta44162",-947828395,null)], null);
}));

(cljs.core.async.t_cljs$core$async44161.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44161");

(cljs.core.async.t_cljs$core$async44161.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44161");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44161.
 */
cljs.core.async.__GT_t_cljs$core$async44161 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44161(f__$1,ch__$1,meta44152__$1,___$2,fn1__$1,meta44162){
return (new cljs.core.async.t_cljs$core$async44161(f__$1,ch__$1,meta44152__$1,___$2,fn1__$1,meta44162));
});

}

return (new cljs.core.async.t_cljs$core$async44161(self__.f,self__.ch,self__.meta44152,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44165 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44165) : self__.f.call(null,G__44165));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44151.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44152","meta44152",-260975648,null)], null);
}));

(cljs.core.async.t_cljs$core$async44151.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44151");

(cljs.core.async.t_cljs$core$async44151.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44151");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44151.
 */
cljs.core.async.__GT_t_cljs$core$async44151 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44151(f__$1,ch__$1,meta44152){
return (new cljs.core.async.t_cljs$core$async44151(f__$1,ch__$1,meta44152));
});

}

return (new cljs.core.async.t_cljs$core$async44151(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44175 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44175 = (function (f,ch,meta44176){
this.f = f;
this.ch = ch;
this.meta44176 = meta44176;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44177,meta44176__$1){
var self__ = this;
var _44177__$1 = this;
return (new cljs.core.async.t_cljs$core$async44175(self__.f,self__.ch,meta44176__$1));
}));

(cljs.core.async.t_cljs$core$async44175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44177){
var self__ = this;
var _44177__$1 = this;
return self__.meta44176;
}));

(cljs.core.async.t_cljs$core$async44175.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44175.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44175.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44175.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44175.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44175.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44175.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44176","meta44176",-1998557391,null)], null);
}));

(cljs.core.async.t_cljs$core$async44175.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44175.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44175");

(cljs.core.async.t_cljs$core$async44175.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44175");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44175.
 */
cljs.core.async.__GT_t_cljs$core$async44175 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44175(f__$1,ch__$1,meta44176){
return (new cljs.core.async.t_cljs$core$async44175(f__$1,ch__$1,meta44176));
});

}

return (new cljs.core.async.t_cljs$core$async44175(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44191 = (function (p,ch,meta44192){
this.p = p;
this.ch = ch;
this.meta44192 = meta44192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44193,meta44192__$1){
var self__ = this;
var _44193__$1 = this;
return (new cljs.core.async.t_cljs$core$async44191(self__.p,self__.ch,meta44192__$1));
}));

(cljs.core.async.t_cljs$core$async44191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44193){
var self__ = this;
var _44193__$1 = this;
return self__.meta44192;
}));

(cljs.core.async.t_cljs$core$async44191.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44191.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44191.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44191.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44192","meta44192",-367392992,null)], null);
}));

(cljs.core.async.t_cljs$core$async44191.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44191");

(cljs.core.async.t_cljs$core$async44191.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async44191");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44191.
 */
cljs.core.async.__GT_t_cljs$core$async44191 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44191(p__$1,ch__$1,meta44192){
return (new cljs.core.async.t_cljs$core$async44191(p__$1,ch__$1,meta44192));
});

}

return (new cljs.core.async.t_cljs$core$async44191(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44205 = arguments.length;
switch (G__44205) {
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
var c__42085__auto___46050 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_44232){
var state_val_44233 = (state_44232[(1)]);
if((state_val_44233 === (7))){
var inst_44223 = (state_44232[(2)]);
var state_44232__$1 = state_44232;
var statearr_44235_46053 = state_44232__$1;
(statearr_44235_46053[(2)] = inst_44223);

(statearr_44235_46053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (1))){
var state_44232__$1 = state_44232;
var statearr_44236_46054 = state_44232__$1;
(statearr_44236_46054[(2)] = null);

(statearr_44236_46054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (4))){
var inst_44209 = (state_44232[(7)]);
var inst_44209__$1 = (state_44232[(2)]);
var inst_44210 = (inst_44209__$1 == null);
var state_44232__$1 = (function (){var statearr_44237 = state_44232;
(statearr_44237[(7)] = inst_44209__$1);

return statearr_44237;
})();
if(cljs.core.truth_(inst_44210)){
var statearr_44238_46055 = state_44232__$1;
(statearr_44238_46055[(1)] = (5));

} else {
var statearr_44239_46154 = state_44232__$1;
(statearr_44239_46154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (6))){
var inst_44209 = (state_44232[(7)]);
var inst_44214 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44209) : p.call(null,inst_44209));
var state_44232__$1 = state_44232;
if(cljs.core.truth_(inst_44214)){
var statearr_44241_46158 = state_44232__$1;
(statearr_44241_46158[(1)] = (8));

} else {
var statearr_44242_46161 = state_44232__$1;
(statearr_44242_46161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (3))){
var inst_44225 = (state_44232[(2)]);
var state_44232__$1 = state_44232;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44232__$1,inst_44225);
} else {
if((state_val_44233 === (2))){
var state_44232__$1 = state_44232;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44232__$1,(4),ch);
} else {
if((state_val_44233 === (11))){
var inst_44217 = (state_44232[(2)]);
var state_44232__$1 = state_44232;
var statearr_44243_46162 = state_44232__$1;
(statearr_44243_46162[(2)] = inst_44217);

(statearr_44243_46162[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (9))){
var state_44232__$1 = state_44232;
var statearr_44244_46164 = state_44232__$1;
(statearr_44244_46164[(2)] = null);

(statearr_44244_46164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (5))){
var inst_44212 = cljs.core.async.close_BANG_(out);
var state_44232__$1 = state_44232;
var statearr_44245_46166 = state_44232__$1;
(statearr_44245_46166[(2)] = inst_44212);

(statearr_44245_46166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (10))){
var inst_44220 = (state_44232[(2)]);
var state_44232__$1 = (function (){var statearr_44246 = state_44232;
(statearr_44246[(8)] = inst_44220);

return statearr_44246;
})();
var statearr_44247_46167 = state_44232__$1;
(statearr_44247_46167[(2)] = null);

(statearr_44247_46167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44233 === (8))){
var inst_44209 = (state_44232[(7)]);
var state_44232__$1 = state_44232;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44232__$1,(11),out,inst_44209);
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
var cljs$core$async$state_machine__41953__auto__ = null;
var cljs$core$async$state_machine__41953__auto____0 = (function (){
var statearr_44248 = [null,null,null,null,null,null,null,null,null];
(statearr_44248[(0)] = cljs$core$async$state_machine__41953__auto__);

(statearr_44248[(1)] = (1));

return statearr_44248;
});
var cljs$core$async$state_machine__41953__auto____1 = (function (state_44232){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_44232);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e44251){var ex__41956__auto__ = e44251;
var statearr_44252_46168 = state_44232;
(statearr_44252_46168[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_44232[(4)]))){
var statearr_44253_46169 = state_44232;
(statearr_44253_46169[(1)] = cljs.core.first((state_44232[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46171 = state_44232;
state_44232 = G__46171;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$state_machine__41953__auto__ = function(state_44232){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41953__auto____1.call(this,state_44232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41953__auto____0;
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41953__auto____1;
return cljs$core$async$state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_44254 = f__42086__auto__();
(statearr_44254[(6)] = c__42085__auto___46050);

return statearr_44254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44256 = arguments.length;
switch (G__44256) {
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
var c__42085__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_44358){
var state_val_44359 = (state_44358[(1)]);
if((state_val_44359 === (7))){
var inst_44354 = (state_44358[(2)]);
var state_44358__$1 = state_44358;
var statearr_44361_46177 = state_44358__$1;
(statearr_44361_46177[(2)] = inst_44354);

(statearr_44361_46177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (20))){
var inst_44324 = (state_44358[(7)]);
var inst_44335 = (state_44358[(2)]);
var inst_44336 = cljs.core.next(inst_44324);
var inst_44279 = inst_44336;
var inst_44280 = null;
var inst_44281 = (0);
var inst_44282 = (0);
var state_44358__$1 = (function (){var statearr_44363 = state_44358;
(statearr_44363[(8)] = inst_44281);

(statearr_44363[(9)] = inst_44280);

(statearr_44363[(10)] = inst_44335);

(statearr_44363[(11)] = inst_44282);

(statearr_44363[(12)] = inst_44279);

return statearr_44363;
})();
var statearr_44364_46178 = state_44358__$1;
(statearr_44364_46178[(2)] = null);

(statearr_44364_46178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (1))){
var state_44358__$1 = state_44358;
var statearr_44365_46179 = state_44358__$1;
(statearr_44365_46179[(2)] = null);

(statearr_44365_46179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (4))){
var inst_44264 = (state_44358[(13)]);
var inst_44264__$1 = (state_44358[(2)]);
var inst_44265 = (inst_44264__$1 == null);
var state_44358__$1 = (function (){var statearr_44366 = state_44358;
(statearr_44366[(13)] = inst_44264__$1);

return statearr_44366;
})();
if(cljs.core.truth_(inst_44265)){
var statearr_44367_46180 = state_44358__$1;
(statearr_44367_46180[(1)] = (5));

} else {
var statearr_44368_46181 = state_44358__$1;
(statearr_44368_46181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (15))){
var state_44358__$1 = state_44358;
var statearr_44372_46182 = state_44358__$1;
(statearr_44372_46182[(2)] = null);

(statearr_44372_46182[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (21))){
var state_44358__$1 = state_44358;
var statearr_44373_46185 = state_44358__$1;
(statearr_44373_46185[(2)] = null);

(statearr_44373_46185[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (13))){
var inst_44281 = (state_44358[(8)]);
var inst_44280 = (state_44358[(9)]);
var inst_44282 = (state_44358[(11)]);
var inst_44279 = (state_44358[(12)]);
var inst_44320 = (state_44358[(2)]);
var inst_44321 = (inst_44282 + (1));
var tmp44369 = inst_44281;
var tmp44370 = inst_44280;
var tmp44371 = inst_44279;
var inst_44279__$1 = tmp44371;
var inst_44280__$1 = tmp44370;
var inst_44281__$1 = tmp44369;
var inst_44282__$1 = inst_44321;
var state_44358__$1 = (function (){var statearr_44374 = state_44358;
(statearr_44374[(8)] = inst_44281__$1);

(statearr_44374[(9)] = inst_44280__$1);

(statearr_44374[(11)] = inst_44282__$1);

(statearr_44374[(14)] = inst_44320);

(statearr_44374[(12)] = inst_44279__$1);

return statearr_44374;
})();
var statearr_44375_46193 = state_44358__$1;
(statearr_44375_46193[(2)] = null);

(statearr_44375_46193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (22))){
var state_44358__$1 = state_44358;
var statearr_44376_46198 = state_44358__$1;
(statearr_44376_46198[(2)] = null);

(statearr_44376_46198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (6))){
var inst_44264 = (state_44358[(13)]);
var inst_44277 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44264) : f.call(null,inst_44264));
var inst_44278 = cljs.core.seq(inst_44277);
var inst_44279 = inst_44278;
var inst_44280 = null;
var inst_44281 = (0);
var inst_44282 = (0);
var state_44358__$1 = (function (){var statearr_44377 = state_44358;
(statearr_44377[(8)] = inst_44281);

(statearr_44377[(9)] = inst_44280);

(statearr_44377[(11)] = inst_44282);

(statearr_44377[(12)] = inst_44279);

return statearr_44377;
})();
var statearr_44378_46224 = state_44358__$1;
(statearr_44378_46224[(2)] = null);

(statearr_44378_46224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (17))){
var inst_44324 = (state_44358[(7)]);
var inst_44328 = cljs.core.chunk_first(inst_44324);
var inst_44329 = cljs.core.chunk_rest(inst_44324);
var inst_44330 = cljs.core.count(inst_44328);
var inst_44279 = inst_44329;
var inst_44280 = inst_44328;
var inst_44281 = inst_44330;
var inst_44282 = (0);
var state_44358__$1 = (function (){var statearr_44380 = state_44358;
(statearr_44380[(8)] = inst_44281);

(statearr_44380[(9)] = inst_44280);

(statearr_44380[(11)] = inst_44282);

(statearr_44380[(12)] = inst_44279);

return statearr_44380;
})();
var statearr_44382_46228 = state_44358__$1;
(statearr_44382_46228[(2)] = null);

(statearr_44382_46228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (3))){
var inst_44356 = (state_44358[(2)]);
var state_44358__$1 = state_44358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44358__$1,inst_44356);
} else {
if((state_val_44359 === (12))){
var inst_44344 = (state_44358[(2)]);
var state_44358__$1 = state_44358;
var statearr_44383_46229 = state_44358__$1;
(statearr_44383_46229[(2)] = inst_44344);

(statearr_44383_46229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (2))){
var state_44358__$1 = state_44358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44358__$1,(4),in$);
} else {
if((state_val_44359 === (23))){
var inst_44352 = (state_44358[(2)]);
var state_44358__$1 = state_44358;
var statearr_44384_46232 = state_44358__$1;
(statearr_44384_46232[(2)] = inst_44352);

(statearr_44384_46232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (19))){
var inst_44339 = (state_44358[(2)]);
var state_44358__$1 = state_44358;
var statearr_44385_46235 = state_44358__$1;
(statearr_44385_46235[(2)] = inst_44339);

(statearr_44385_46235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (11))){
var inst_44279 = (state_44358[(12)]);
var inst_44324 = (state_44358[(7)]);
var inst_44324__$1 = cljs.core.seq(inst_44279);
var state_44358__$1 = (function (){var statearr_44389 = state_44358;
(statearr_44389[(7)] = inst_44324__$1);

return statearr_44389;
})();
if(inst_44324__$1){
var statearr_44390_46236 = state_44358__$1;
(statearr_44390_46236[(1)] = (14));

} else {
var statearr_44391_46237 = state_44358__$1;
(statearr_44391_46237[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (9))){
var inst_44346 = (state_44358[(2)]);
var inst_44347 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44358__$1 = (function (){var statearr_44392 = state_44358;
(statearr_44392[(15)] = inst_44346);

return statearr_44392;
})();
if(cljs.core.truth_(inst_44347)){
var statearr_44393_46238 = state_44358__$1;
(statearr_44393_46238[(1)] = (21));

} else {
var statearr_44394_46239 = state_44358__$1;
(statearr_44394_46239[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (5))){
var inst_44267 = cljs.core.async.close_BANG_(out);
var state_44358__$1 = state_44358;
var statearr_44395_46244 = state_44358__$1;
(statearr_44395_46244[(2)] = inst_44267);

(statearr_44395_46244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (14))){
var inst_44324 = (state_44358[(7)]);
var inst_44326 = cljs.core.chunked_seq_QMARK_(inst_44324);
var state_44358__$1 = state_44358;
if(inst_44326){
var statearr_44398_46245 = state_44358__$1;
(statearr_44398_46245[(1)] = (17));

} else {
var statearr_44399_46246 = state_44358__$1;
(statearr_44399_46246[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (16))){
var inst_44342 = (state_44358[(2)]);
var state_44358__$1 = state_44358;
var statearr_44400_46247 = state_44358__$1;
(statearr_44400_46247[(2)] = inst_44342);

(statearr_44400_46247[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44359 === (10))){
var inst_44280 = (state_44358[(9)]);
var inst_44282 = (state_44358[(11)]);
var inst_44317 = cljs.core._nth(inst_44280,inst_44282);
var state_44358__$1 = state_44358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44358__$1,(13),out,inst_44317);
} else {
if((state_val_44359 === (18))){
var inst_44324 = (state_44358[(7)]);
var inst_44333 = cljs.core.first(inst_44324);
var state_44358__$1 = state_44358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44358__$1,(20),out,inst_44333);
} else {
if((state_val_44359 === (8))){
var inst_44281 = (state_44358[(8)]);
var inst_44282 = (state_44358[(11)]);
var inst_44308 = (inst_44282 < inst_44281);
var inst_44309 = inst_44308;
var state_44358__$1 = state_44358;
if(cljs.core.truth_(inst_44309)){
var statearr_44401_46248 = state_44358__$1;
(statearr_44401_46248[(1)] = (10));

} else {
var statearr_44402_46249 = state_44358__$1;
(statearr_44402_46249[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__41953__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41953__auto____0 = (function (){
var statearr_44406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44406[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41953__auto__);

(statearr_44406[(1)] = (1));

return statearr_44406;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41953__auto____1 = (function (state_44358){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_44358);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e44407){var ex__41956__auto__ = e44407;
var statearr_44408_46251 = state_44358;
(statearr_44408_46251[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_44358[(4)]))){
var statearr_44409_46252 = state_44358;
(statearr_44409_46252[(1)] = cljs.core.first((state_44358[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46253 = state_44358;
state_44358 = G__46253;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41953__auto__ = function(state_44358){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41953__auto____1.call(this,state_44358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41953__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41953__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_44410 = f__42086__auto__();
(statearr_44410[(6)] = c__42085__auto__);

return statearr_44410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
}));

return c__42085__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44414 = arguments.length;
switch (G__44414) {
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
var G__44422 = arguments.length;
switch (G__44422) {
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
var G__44427 = arguments.length;
switch (G__44427) {
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
var c__42085__auto___46280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_44453){
var state_val_44454 = (state_44453[(1)]);
if((state_val_44454 === (7))){
var inst_44448 = (state_44453[(2)]);
var state_44453__$1 = state_44453;
var statearr_44459_46281 = state_44453__$1;
(statearr_44459_46281[(2)] = inst_44448);

(statearr_44459_46281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44454 === (1))){
var inst_44428 = null;
var state_44453__$1 = (function (){var statearr_44464 = state_44453;
(statearr_44464[(7)] = inst_44428);

return statearr_44464;
})();
var statearr_44465_46285 = state_44453__$1;
(statearr_44465_46285[(2)] = null);

(statearr_44465_46285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44454 === (4))){
var inst_44431 = (state_44453[(8)]);
var inst_44431__$1 = (state_44453[(2)]);
var inst_44434 = (inst_44431__$1 == null);
var inst_44435 = cljs.core.not(inst_44434);
var state_44453__$1 = (function (){var statearr_44466 = state_44453;
(statearr_44466[(8)] = inst_44431__$1);

return statearr_44466;
})();
if(inst_44435){
var statearr_44467_46286 = state_44453__$1;
(statearr_44467_46286[(1)] = (5));

} else {
var statearr_44468_46287 = state_44453__$1;
(statearr_44468_46287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44454 === (6))){
var state_44453__$1 = state_44453;
var statearr_44469_46292 = state_44453__$1;
(statearr_44469_46292[(2)] = null);

(statearr_44469_46292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44454 === (3))){
var inst_44450 = (state_44453[(2)]);
var inst_44451 = cljs.core.async.close_BANG_(out);
var state_44453__$1 = (function (){var statearr_44470 = state_44453;
(statearr_44470[(9)] = inst_44450);

return statearr_44470;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44453__$1,inst_44451);
} else {
if((state_val_44454 === (2))){
var state_44453__$1 = state_44453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44453__$1,(4),ch);
} else {
if((state_val_44454 === (11))){
var inst_44431 = (state_44453[(8)]);
var inst_44442 = (state_44453[(2)]);
var inst_44428 = inst_44431;
var state_44453__$1 = (function (){var statearr_44471 = state_44453;
(statearr_44471[(10)] = inst_44442);

(statearr_44471[(7)] = inst_44428);

return statearr_44471;
})();
var statearr_44472_46293 = state_44453__$1;
(statearr_44472_46293[(2)] = null);

(statearr_44472_46293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44454 === (9))){
var inst_44431 = (state_44453[(8)]);
var state_44453__$1 = state_44453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44453__$1,(11),out,inst_44431);
} else {
if((state_val_44454 === (5))){
var inst_44428 = (state_44453[(7)]);
var inst_44431 = (state_44453[(8)]);
var inst_44437 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44431,inst_44428);
var state_44453__$1 = state_44453;
if(inst_44437){
var statearr_44474_46298 = state_44453__$1;
(statearr_44474_46298[(1)] = (8));

} else {
var statearr_44475_46299 = state_44453__$1;
(statearr_44475_46299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44454 === (10))){
var inst_44445 = (state_44453[(2)]);
var state_44453__$1 = state_44453;
var statearr_44476_46300 = state_44453__$1;
(statearr_44476_46300[(2)] = inst_44445);

(statearr_44476_46300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44454 === (8))){
var inst_44428 = (state_44453[(7)]);
var tmp44473 = inst_44428;
var inst_44428__$1 = tmp44473;
var state_44453__$1 = (function (){var statearr_44477 = state_44453;
(statearr_44477[(7)] = inst_44428__$1);

return statearr_44477;
})();
var statearr_44478_46305 = state_44453__$1;
(statearr_44478_46305[(2)] = null);

(statearr_44478_46305[(1)] = (2));


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
var cljs$core$async$state_machine__41953__auto__ = null;
var cljs$core$async$state_machine__41953__auto____0 = (function (){
var statearr_44480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44480[(0)] = cljs$core$async$state_machine__41953__auto__);

(statearr_44480[(1)] = (1));

return statearr_44480;
});
var cljs$core$async$state_machine__41953__auto____1 = (function (state_44453){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_44453);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e44481){var ex__41956__auto__ = e44481;
var statearr_44482_46329 = state_44453;
(statearr_44482_46329[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_44453[(4)]))){
var statearr_44483_46330 = state_44453;
(statearr_44483_46330[(1)] = cljs.core.first((state_44453[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46338 = state_44453;
state_44453 = G__46338;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$state_machine__41953__auto__ = function(state_44453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41953__auto____1.call(this,state_44453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41953__auto____0;
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41953__auto____1;
return cljs$core$async$state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_44484 = f__42086__auto__();
(statearr_44484[(6)] = c__42085__auto___46280);

return statearr_44484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44486 = arguments.length;
switch (G__44486) {
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
var c__42085__auto___46340 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_44524){
var state_val_44525 = (state_44524[(1)]);
if((state_val_44525 === (7))){
var inst_44520 = (state_44524[(2)]);
var state_44524__$1 = state_44524;
var statearr_44526_46341 = state_44524__$1;
(statearr_44526_46341[(2)] = inst_44520);

(statearr_44526_46341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (1))){
var inst_44487 = (new Array(n));
var inst_44488 = inst_44487;
var inst_44489 = (0);
var state_44524__$1 = (function (){var statearr_44527 = state_44524;
(statearr_44527[(7)] = inst_44489);

(statearr_44527[(8)] = inst_44488);

return statearr_44527;
})();
var statearr_44528_46342 = state_44524__$1;
(statearr_44528_46342[(2)] = null);

(statearr_44528_46342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (4))){
var inst_44492 = (state_44524[(9)]);
var inst_44492__$1 = (state_44524[(2)]);
var inst_44493 = (inst_44492__$1 == null);
var inst_44494 = cljs.core.not(inst_44493);
var state_44524__$1 = (function (){var statearr_44530 = state_44524;
(statearr_44530[(9)] = inst_44492__$1);

return statearr_44530;
})();
if(inst_44494){
var statearr_44531_46344 = state_44524__$1;
(statearr_44531_46344[(1)] = (5));

} else {
var statearr_44533_46345 = state_44524__$1;
(statearr_44533_46345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (15))){
var inst_44514 = (state_44524[(2)]);
var state_44524__$1 = state_44524;
var statearr_44534_46346 = state_44524__$1;
(statearr_44534_46346[(2)] = inst_44514);

(statearr_44534_46346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (13))){
var state_44524__$1 = state_44524;
var statearr_44536_46347 = state_44524__$1;
(statearr_44536_46347[(2)] = null);

(statearr_44536_46347[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (6))){
var inst_44489 = (state_44524[(7)]);
var inst_44510 = (inst_44489 > (0));
var state_44524__$1 = state_44524;
if(cljs.core.truth_(inst_44510)){
var statearr_44537_46528 = state_44524__$1;
(statearr_44537_46528[(1)] = (12));

} else {
var statearr_44538_46529 = state_44524__$1;
(statearr_44538_46529[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (3))){
var inst_44522 = (state_44524[(2)]);
var state_44524__$1 = state_44524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44524__$1,inst_44522);
} else {
if((state_val_44525 === (12))){
var inst_44488 = (state_44524[(8)]);
var inst_44512 = cljs.core.vec(inst_44488);
var state_44524__$1 = state_44524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44524__$1,(15),out,inst_44512);
} else {
if((state_val_44525 === (2))){
var state_44524__$1 = state_44524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44524__$1,(4),ch);
} else {
if((state_val_44525 === (11))){
var inst_44504 = (state_44524[(2)]);
var inst_44505 = (new Array(n));
var inst_44488 = inst_44505;
var inst_44489 = (0);
var state_44524__$1 = (function (){var statearr_44541 = state_44524;
(statearr_44541[(7)] = inst_44489);

(statearr_44541[(8)] = inst_44488);

(statearr_44541[(10)] = inst_44504);

return statearr_44541;
})();
var statearr_44542_46555 = state_44524__$1;
(statearr_44542_46555[(2)] = null);

(statearr_44542_46555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (9))){
var inst_44488 = (state_44524[(8)]);
var inst_44502 = cljs.core.vec(inst_44488);
var state_44524__$1 = state_44524;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44524__$1,(11),out,inst_44502);
} else {
if((state_val_44525 === (5))){
var inst_44489 = (state_44524[(7)]);
var inst_44488 = (state_44524[(8)]);
var inst_44492 = (state_44524[(9)]);
var inst_44497 = (state_44524[(11)]);
var inst_44496 = (inst_44488[inst_44489] = inst_44492);
var inst_44497__$1 = (inst_44489 + (1));
var inst_44498 = (inst_44497__$1 < n);
var state_44524__$1 = (function (){var statearr_44544 = state_44524;
(statearr_44544[(11)] = inst_44497__$1);

(statearr_44544[(12)] = inst_44496);

return statearr_44544;
})();
if(cljs.core.truth_(inst_44498)){
var statearr_44546_46556 = state_44524__$1;
(statearr_44546_46556[(1)] = (8));

} else {
var statearr_44547_46557 = state_44524__$1;
(statearr_44547_46557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (14))){
var inst_44517 = (state_44524[(2)]);
var inst_44518 = cljs.core.async.close_BANG_(out);
var state_44524__$1 = (function (){var statearr_44549 = state_44524;
(statearr_44549[(13)] = inst_44517);

return statearr_44549;
})();
var statearr_44550_46558 = state_44524__$1;
(statearr_44550_46558[(2)] = inst_44518);

(statearr_44550_46558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (10))){
var inst_44508 = (state_44524[(2)]);
var state_44524__$1 = state_44524;
var statearr_44551_46559 = state_44524__$1;
(statearr_44551_46559[(2)] = inst_44508);

(statearr_44551_46559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44525 === (8))){
var inst_44488 = (state_44524[(8)]);
var inst_44497 = (state_44524[(11)]);
var tmp44548 = inst_44488;
var inst_44488__$1 = tmp44548;
var inst_44489 = inst_44497;
var state_44524__$1 = (function (){var statearr_44554 = state_44524;
(statearr_44554[(7)] = inst_44489);

(statearr_44554[(8)] = inst_44488__$1);

return statearr_44554;
})();
var statearr_44555_46560 = state_44524__$1;
(statearr_44555_46560[(2)] = null);

(statearr_44555_46560[(1)] = (2));


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
var cljs$core$async$state_machine__41953__auto__ = null;
var cljs$core$async$state_machine__41953__auto____0 = (function (){
var statearr_44557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44557[(0)] = cljs$core$async$state_machine__41953__auto__);

(statearr_44557[(1)] = (1));

return statearr_44557;
});
var cljs$core$async$state_machine__41953__auto____1 = (function (state_44524){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_44524);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e44558){var ex__41956__auto__ = e44558;
var statearr_44559_46561 = state_44524;
(statearr_44559_46561[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_44524[(4)]))){
var statearr_44560_46562 = state_44524;
(statearr_44560_46562[(1)] = cljs.core.first((state_44524[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46563 = state_44524;
state_44524 = G__46563;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$state_machine__41953__auto__ = function(state_44524){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41953__auto____1.call(this,state_44524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41953__auto____0;
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41953__auto____1;
return cljs$core$async$state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_44561 = f__42086__auto__();
(statearr_44561[(6)] = c__42085__auto___46340);

return statearr_44561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44563 = arguments.length;
switch (G__44563) {
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
var c__42085__auto___46565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_44615){
var state_val_44616 = (state_44615[(1)]);
if((state_val_44616 === (7))){
var inst_44611 = (state_44615[(2)]);
var state_44615__$1 = state_44615;
var statearr_44621_46566 = state_44615__$1;
(statearr_44621_46566[(2)] = inst_44611);

(statearr_44621_46566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (1))){
var inst_44571 = [];
var inst_44574 = inst_44571;
var inst_44575 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44615__$1 = (function (){var statearr_44622 = state_44615;
(statearr_44622[(7)] = inst_44575);

(statearr_44622[(8)] = inst_44574);

return statearr_44622;
})();
var statearr_44623_46567 = state_44615__$1;
(statearr_44623_46567[(2)] = null);

(statearr_44623_46567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (4))){
var inst_44578 = (state_44615[(9)]);
var inst_44578__$1 = (state_44615[(2)]);
var inst_44579 = (inst_44578__$1 == null);
var inst_44580 = cljs.core.not(inst_44579);
var state_44615__$1 = (function (){var statearr_44624 = state_44615;
(statearr_44624[(9)] = inst_44578__$1);

return statearr_44624;
})();
if(inst_44580){
var statearr_44625_46569 = state_44615__$1;
(statearr_44625_46569[(1)] = (5));

} else {
var statearr_44626_46570 = state_44615__$1;
(statearr_44626_46570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (15))){
var inst_44605 = (state_44615[(2)]);
var state_44615__$1 = state_44615;
var statearr_44628_46571 = state_44615__$1;
(statearr_44628_46571[(2)] = inst_44605);

(statearr_44628_46571[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (13))){
var state_44615__$1 = state_44615;
var statearr_44629_46572 = state_44615__$1;
(statearr_44629_46572[(2)] = null);

(statearr_44629_46572[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (6))){
var inst_44574 = (state_44615[(8)]);
var inst_44600 = inst_44574.length;
var inst_44601 = (inst_44600 > (0));
var state_44615__$1 = state_44615;
if(cljs.core.truth_(inst_44601)){
var statearr_44631_46573 = state_44615__$1;
(statearr_44631_46573[(1)] = (12));

} else {
var statearr_44632_46574 = state_44615__$1;
(statearr_44632_46574[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (3))){
var inst_44613 = (state_44615[(2)]);
var state_44615__$1 = state_44615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44615__$1,inst_44613);
} else {
if((state_val_44616 === (12))){
var inst_44574 = (state_44615[(8)]);
var inst_44603 = cljs.core.vec(inst_44574);
var state_44615__$1 = state_44615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44615__$1,(15),out,inst_44603);
} else {
if((state_val_44616 === (2))){
var state_44615__$1 = state_44615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44615__$1,(4),ch);
} else {
if((state_val_44616 === (11))){
var inst_44582 = (state_44615[(10)]);
var inst_44578 = (state_44615[(9)]);
var inst_44592 = (state_44615[(2)]);
var inst_44593 = [];
var inst_44594 = inst_44593.push(inst_44578);
var inst_44574 = inst_44593;
var inst_44575 = inst_44582;
var state_44615__$1 = (function (){var statearr_44633 = state_44615;
(statearr_44633[(7)] = inst_44575);

(statearr_44633[(11)] = inst_44594);

(statearr_44633[(8)] = inst_44574);

(statearr_44633[(12)] = inst_44592);

return statearr_44633;
})();
var statearr_44634_46575 = state_44615__$1;
(statearr_44634_46575[(2)] = null);

(statearr_44634_46575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (9))){
var inst_44574 = (state_44615[(8)]);
var inst_44590 = cljs.core.vec(inst_44574);
var state_44615__$1 = state_44615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44615__$1,(11),out,inst_44590);
} else {
if((state_val_44616 === (5))){
var inst_44575 = (state_44615[(7)]);
var inst_44582 = (state_44615[(10)]);
var inst_44578 = (state_44615[(9)]);
var inst_44582__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44578) : f.call(null,inst_44578));
var inst_44583 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44582__$1,inst_44575);
var inst_44584 = cljs.core.keyword_identical_QMARK_(inst_44575,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44585 = ((inst_44583) || (inst_44584));
var state_44615__$1 = (function (){var statearr_44635 = state_44615;
(statearr_44635[(10)] = inst_44582__$1);

return statearr_44635;
})();
if(cljs.core.truth_(inst_44585)){
var statearr_44636_46584 = state_44615__$1;
(statearr_44636_46584[(1)] = (8));

} else {
var statearr_44637_46585 = state_44615__$1;
(statearr_44637_46585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (14))){
var inst_44608 = (state_44615[(2)]);
var inst_44609 = cljs.core.async.close_BANG_(out);
var state_44615__$1 = (function (){var statearr_44639 = state_44615;
(statearr_44639[(13)] = inst_44608);

return statearr_44639;
})();
var statearr_44640_46586 = state_44615__$1;
(statearr_44640_46586[(2)] = inst_44609);

(statearr_44640_46586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (10))){
var inst_44598 = (state_44615[(2)]);
var state_44615__$1 = state_44615;
var statearr_44641_46587 = state_44615__$1;
(statearr_44641_46587[(2)] = inst_44598);

(statearr_44641_46587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44616 === (8))){
var inst_44574 = (state_44615[(8)]);
var inst_44582 = (state_44615[(10)]);
var inst_44578 = (state_44615[(9)]);
var inst_44587 = inst_44574.push(inst_44578);
var tmp44638 = inst_44574;
var inst_44574__$1 = tmp44638;
var inst_44575 = inst_44582;
var state_44615__$1 = (function (){var statearr_44642 = state_44615;
(statearr_44642[(7)] = inst_44575);

(statearr_44642[(8)] = inst_44574__$1);

(statearr_44642[(14)] = inst_44587);

return statearr_44642;
})();
var statearr_44643_46596 = state_44615__$1;
(statearr_44643_46596[(2)] = null);

(statearr_44643_46596[(1)] = (2));


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
var cljs$core$async$state_machine__41953__auto__ = null;
var cljs$core$async$state_machine__41953__auto____0 = (function (){
var statearr_44644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44644[(0)] = cljs$core$async$state_machine__41953__auto__);

(statearr_44644[(1)] = (1));

return statearr_44644;
});
var cljs$core$async$state_machine__41953__auto____1 = (function (state_44615){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_44615);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e44645){var ex__41956__auto__ = e44645;
var statearr_44646_46609 = state_44615;
(statearr_44646_46609[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_44615[(4)]))){
var statearr_44647_46615 = state_44615;
(statearr_44647_46615[(1)] = cljs.core.first((state_44615[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46617 = state_44615;
state_44615 = G__46617;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
cljs$core$async$state_machine__41953__auto__ = function(state_44615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41953__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41953__auto____1.call(this,state_44615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41953__auto____0;
cljs$core$async$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41953__auto____1;
return cljs$core$async$state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_44648 = f__42086__auto__();
(statearr_44648[(6)] = c__42085__auto___46565);

return statearr_44648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
