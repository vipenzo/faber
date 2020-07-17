goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27397 = arguments.length;
var i__4737__auto___27400 = (0);
while(true){
if((i__4737__auto___27400 < len__4736__auto___27397)){
args__4742__auto__.push((arguments[i__4737__auto___27400]));

var G__27402 = (i__4737__auto___27400 + (1));
i__4737__auto___27400 = G__27402;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__27207_27403 = keyvals;
var vec__27208_27404 = G__27207_27403;
var seq__27209_27405 = cljs.core.seq(vec__27208_27404);
var first__27210_27406 = cljs.core.first(seq__27209_27405);
var seq__27209_27407__$1 = cljs.core.next(seq__27209_27405);
var k_27408 = first__27210_27406;
var first__27210_27409__$1 = cljs.core.first(seq__27209_27407__$1);
var seq__27209_27410__$2 = cljs.core.next(seq__27209_27407__$1);
var v_27411 = first__27210_27409__$1;
var keyvals_27412__$1 = seq__27209_27410__$2;
var G__27207_27423__$1 = G__27207_27403;
while(true){
var vec__27214_27424 = G__27207_27423__$1;
var seq__27215_27425 = cljs.core.seq(vec__27214_27424);
var first__27216_27426 = cljs.core.first(seq__27215_27425);
var seq__27215_27427__$1 = cljs.core.next(seq__27215_27425);
var k_27428__$1 = first__27216_27426;
var first__27216_27429__$1 = cljs.core.first(seq__27215_27427__$1);
var seq__27215_27430__$2 = cljs.core.next(seq__27215_27427__$1);
var v_27431__$1 = first__27216_27429__$1;
var keyvals_27432__$2 = seq__27215_27430__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_27428__$1)] = v_27431__$1);

if(keyvals_27432__$2){
var G__27443 = keyvals_27432__$2;
G__27207_27423__$1 = G__27443;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq27201){
var G__27202 = cljs.core.first(seq27201);
var seq27201__$1 = cljs.core.next(seq27201);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27202,seq27201__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__27220 = arguments.length;
switch (G__27220) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj27221 = obj;
var k27222 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27223 = obj27221;
return (((!((obj27223 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27222,obj27223)));
})()){
return (obj27221[k27222]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj27224 = obj;
var k27225 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27226 = obj27224;
return (((!((obj27226 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27225,obj27226)));
})()){
return (obj27224[k27225]);
} else {
return not_found;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__27228 = arguments.length;
switch (G__27228) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj27231 = self__.obj;
var k27232 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27233 = obj27231;
return (((!((obj27233 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27232,obj27233)));
})()){
return (obj27231[k27232]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj27235 = self__.obj;
var k27237 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27239 = obj27235;
return (((!((obj27239 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27237,obj27239)));
})()){
return (obj27235[k27237]);
} else {
return not_found;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27466 = arguments.length;
var i__4737__auto___27467 = (0);
while(true){
if((i__4737__auto___27467 < len__4736__auto___27466)){
args__4742__auto__.push((arguments[i__4737__auto___27467]));

var G__27468 = (i__4737__auto___27467 + (1));
i__4737__auto___27467 = G__27468;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__27251 = keyvals;
var vec__27253 = G__27251;
var seq__27254 = cljs.core.seq(vec__27253);
var first__27255 = cljs.core.first(seq__27254);
var seq__27254__$1 = cljs.core.next(seq__27254);
var k = first__27255;
var first__27255__$1 = cljs.core.first(seq__27254__$1);
var seq__27254__$2 = cljs.core.next(seq__27254__$1);
var v = first__27255__$1;
var kvs = seq__27254__$2;
var G__27251__$1 = G__27251;
while(true){
var vec__27259 = G__27251__$1;
var seq__27260 = cljs.core.seq(vec__27259);
var first__27261 = cljs.core.first(seq__27260);
var seq__27260__$1 = cljs.core.next(seq__27260);
var k__$1 = first__27261;
var first__27261__$1 = cljs.core.first(seq__27260__$1);
var seq__27260__$2 = cljs.core.next(seq__27260__$1);
var v__$1 = first__27261__$1;
var kvs__$1 = seq__27260__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__27470 = kvs__$1;
G__27251__$1 = G__27470;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq27241){
var G__27243 = cljs.core.first(seq27241);
var seq27241__$1 = cljs.core.next(seq27241);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27243,seq27241__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27474 = arguments.length;
var i__4737__auto___27475 = (0);
while(true){
if((i__4737__auto___27475 < len__4736__auto___27474)){
args__4742__auto__.push((arguments[i__4737__auto___27475]));

var G__27476 = (i__4737__auto___27475 + (1));
i__4737__auto___27475 = G__27476;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq27266){
var G__27268 = cljs.core.first(seq27266);
var seq27266__$1 = cljs.core.next(seq27266);
var G__27269 = cljs.core.first(seq27266__$1);
var seq27266__$2 = cljs.core.next(seq27266__$1);
var G__27271 = cljs.core.first(seq27266__$2);
var seq27266__$3 = cljs.core.next(seq27266__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27268,G__27269,G__27271,seq27266__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27492 = arguments.length;
var i__4737__auto___27493 = (0);
while(true){
if((i__4737__auto___27493 < len__4736__auto___27492)){
args__4742__auto__.push((arguments[i__4737__auto___27493]));

var G__27494 = (i__4737__auto___27493 + (1));
i__4737__auto___27493 = G__27494;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq27274){
var G__27276 = cljs.core.first(seq27274);
var seq27274__$1 = cljs.core.next(seq27274);
var G__27278 = cljs.core.first(seq27274__$1);
var seq27274__$2 = cljs.core.next(seq27274__$1);
var G__27279 = cljs.core.first(seq27274__$2);
var seq27274__$3 = cljs.core.next(seq27274__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27276,G__27278,G__27279,seq27274__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__27290 = arguments.length;
switch (G__27290) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___27513 = arguments.length;
var i__4737__auto___27514 = (0);
while(true){
if((i__4737__auto___27514 < len__4736__auto___27513)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27514]));

var G__27519 = (i__4737__auto___27514 + (1));
i__4737__auto___27514 = G__27519;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__27292_27521 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__27294_27522 = null;
var count__27296_27523 = (0);
var i__27298_27524 = (0);
while(true){
if((i__27298_27524 < count__27296_27523)){
var k_27525 = chunk__27294_27522.cljs$core$IIndexed$_nth$arity$2(null,i__27298_27524);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27525,applied_science.js_interop.unchecked_get(x,k_27525)], 0));


var G__27526 = seq__27292_27521;
var G__27527 = chunk__27294_27522;
var G__27528 = count__27296_27523;
var G__27529 = (i__27298_27524 + (1));
seq__27292_27521 = G__27526;
chunk__27294_27522 = G__27527;
count__27296_27523 = G__27528;
i__27298_27524 = G__27529;
continue;
} else {
var temp__5735__auto___27532 = cljs.core.seq(seq__27292_27521);
if(temp__5735__auto___27532){
var seq__27292_27533__$1 = temp__5735__auto___27532;
if(cljs.core.chunked_seq_QMARK_(seq__27292_27533__$1)){
var c__4556__auto___27536 = cljs.core.chunk_first(seq__27292_27533__$1);
var G__27537 = cljs.core.chunk_rest(seq__27292_27533__$1);
var G__27538 = c__4556__auto___27536;
var G__27539 = cljs.core.count(c__4556__auto___27536);
var G__27540 = (0);
seq__27292_27521 = G__27537;
chunk__27294_27522 = G__27538;
count__27296_27523 = G__27539;
i__27298_27524 = G__27540;
continue;
} else {
var k_27541 = cljs.core.first(seq__27292_27533__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27541,applied_science.js_interop.unchecked_get(x,k_27541)], 0));


var G__27542 = cljs.core.next(seq__27292_27533__$1);
var G__27543 = null;
var G__27544 = (0);
var G__27545 = (0);
seq__27292_27521 = G__27542;
chunk__27294_27522 = G__27543;
count__27296_27523 = G__27544;
i__27298_27524 = G__27545;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq27284){
var G__27285 = cljs.core.first(seq27284);
var seq27284__$1 = cljs.core.next(seq27284);
var G__27288 = cljs.core.first(seq27284__$1);
var seq27284__$2 = cljs.core.next(seq27284__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27285,G__27288,seq27284__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__27299 = array;
G__27299.push(x);

return G__27299;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__27302 = array;
G__27302.unshift(x);

return G__27302;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27551 = arguments.length;
var i__4737__auto___27552 = (0);
while(true){
if((i__4737__auto___27552 < len__4736__auto___27551)){
args__4742__auto__.push((arguments[i__4737__auto___27552]));

var G__27553 = (i__4737__auto___27552 + (1));
i__4737__auto___27552 = G__27553;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj27309 = obj;
var k27312 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27313 = obj27309;
return (((!((obj27313 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27312,obj27313)));
})()){
return (obj27309[k27312]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq27304){
var G__27305 = cljs.core.first(seq27304);
var seq27304__$1 = cljs.core.next(seq27304);
var G__27308 = cljs.core.first(seq27304__$1);
var seq27304__$2 = cljs.core.next(seq27304__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27305,G__27308,seq27304__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj27315 = obj;
var k27316 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27319 = obj27315;
return (((!((obj27319 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27316,obj27319)));
})()){
return (obj27315[k27316]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27572 = arguments.length;
var i__4737__auto___27573 = (0);
while(true){
if((i__4737__auto___27573 < len__4736__auto___27572)){
args__4742__auto__.push((arguments[i__4737__auto___27573]));

var G__27575 = (i__4737__auto___27573 + (1));
i__4737__auto___27573 = G__27575;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq27322){
var G__27324 = cljs.core.first(seq27322);
var seq27322__$1 = cljs.core.next(seq27322);
var G__27326 = cljs.core.first(seq27322__$1);
var seq27322__$2 = cljs.core.next(seq27322__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27324,G__27326,seq27322__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27591 = arguments.length;
var i__4737__auto___27592 = (0);
while(true){
if((i__4737__auto___27592 < len__4736__auto___27591)){
args__4742__auto__.push((arguments[i__4737__auto___27592]));

var G__27593 = (i__4737__auto___27592 + (1));
i__4737__auto___27592 = G__27593;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__27333_27594 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__27336_27595 = null;
var count__27337_27596 = (0);
var i__27339_27597 = (0);
while(true){
if((i__27339_27597 < count__27337_27596)){
var vec__27369_27598 = chunk__27336_27595.cljs$core$IIndexed$_nth$arity$2(null,i__27339_27597);
var k_27599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27369_27598,(0),null);
var v_27600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27369_27598,(1),null);
var obj27375_27601 = obj;
var obj27376_27602 = (((!((obj27375_27601 == null))))?obj27375_27601:({}));
(obj27376_27602[applied_science.js_interop.impl.wrap_key(k_27599)] = v_27600);



var G__27603 = seq__27333_27594;
var G__27604 = chunk__27336_27595;
var G__27605 = count__27337_27596;
var G__27606 = (i__27339_27597 + (1));
seq__27333_27594 = G__27603;
chunk__27336_27595 = G__27604;
count__27337_27596 = G__27605;
i__27339_27597 = G__27606;
continue;
} else {
var temp__5735__auto___27607 = cljs.core.seq(seq__27333_27594);
if(temp__5735__auto___27607){
var seq__27333_27608__$1 = temp__5735__auto___27607;
if(cljs.core.chunked_seq_QMARK_(seq__27333_27608__$1)){
var c__4556__auto___27609 = cljs.core.chunk_first(seq__27333_27608__$1);
var G__27610 = cljs.core.chunk_rest(seq__27333_27608__$1);
var G__27611 = c__4556__auto___27609;
var G__27612 = cljs.core.count(c__4556__auto___27609);
var G__27613 = (0);
seq__27333_27594 = G__27610;
chunk__27336_27595 = G__27611;
count__27337_27596 = G__27612;
i__27339_27597 = G__27613;
continue;
} else {
var vec__27383_27614 = cljs.core.first(seq__27333_27608__$1);
var k_27615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27383_27614,(0),null);
var v_27616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27383_27614,(1),null);
var obj27386_27617 = obj;
var obj27390_27618 = (((!((obj27386_27617 == null))))?obj27386_27617:({}));
(obj27390_27618[applied_science.js_interop.impl.wrap_key(k_27615)] = v_27616);



var G__27619 = cljs.core.next(seq__27333_27608__$1);
var G__27620 = null;
var G__27621 = (0);
var G__27622 = (0);
seq__27333_27594 = G__27619;
chunk__27336_27595 = G__27620;
count__27337_27596 = G__27621;
i__27339_27597 = G__27622;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq27328){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27328));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
