goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54403 = arguments.length;
var i__4737__auto___54404 = (0);
while(true){
if((i__4737__auto___54404 < len__4736__auto___54403)){
args__4742__auto__.push((arguments[i__4737__auto___54404]));

var G__54405 = (i__4737__auto___54404 + (1));
i__4737__auto___54404 = G__54405;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__54091_54406 = keyvals;
var vec__54095_54407 = G__54091_54406;
var seq__54096_54408 = cljs.core.seq(vec__54095_54407);
var first__54097_54409 = cljs.core.first(seq__54096_54408);
var seq__54096_54410__$1 = cljs.core.next(seq__54096_54408);
var k_54411 = first__54097_54409;
var first__54097_54412__$1 = cljs.core.first(seq__54096_54410__$1);
var seq__54096_54413__$2 = cljs.core.next(seq__54096_54410__$1);
var v_54414 = first__54097_54412__$1;
var keyvals_54415__$1 = seq__54096_54413__$2;
var G__54091_54416__$1 = G__54091_54406;
while(true){
var vec__54103_54417 = G__54091_54416__$1;
var seq__54104_54418 = cljs.core.seq(vec__54103_54417);
var first__54105_54419 = cljs.core.first(seq__54104_54418);
var seq__54104_54420__$1 = cljs.core.next(seq__54104_54418);
var k_54421__$1 = first__54105_54419;
var first__54105_54422__$1 = cljs.core.first(seq__54104_54420__$1);
var seq__54104_54423__$2 = cljs.core.next(seq__54104_54420__$1);
var v_54424__$1 = first__54105_54422__$1;
var keyvals_54425__$2 = seq__54104_54423__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_54421__$1)] = v_54424__$1);

if(keyvals_54425__$2){
var G__54426 = keyvals_54425__$2;
G__54091_54416__$1 = G__54426;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq54064){
var G__54065 = cljs.core.first(seq54064);
var seq54064__$1 = cljs.core.next(seq54064);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54065,seq54064__$1);
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
var G__54122 = arguments.length;
switch (G__54122) {
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
var obj54127 = obj;
var k54128 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj54129 = obj54127;
return (((!((obj54129 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k54128,obj54129)));
})()){
return (obj54127[k54128]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj54130 = obj;
var k54131 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj54132 = obj54130;
return (((!((obj54132 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k54131,obj54132)));
})()){
return (obj54130[k54131]);
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
var G__54134 = arguments.length;
switch (G__54134) {
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
var obj54213 = self__.obj;
var k54214 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj54215 = obj54213;
return (((!((obj54215 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k54214,obj54215)));
})()){
return (obj54213[k54214]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj54218 = self__.obj;
var k54219 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj54220 = obj54218;
return (((!((obj54220 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k54219,obj54220)));
})()){
return (obj54218[k54219]);
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
var len__4736__auto___54442 = arguments.length;
var i__4737__auto___54443 = (0);
while(true){
if((i__4737__auto___54443 < len__4736__auto___54442)){
args__4742__auto__.push((arguments[i__4737__auto___54443]));

var G__54444 = (i__4737__auto___54443 + (1));
i__4737__auto___54443 = G__54444;
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
var G__54241 = keyvals;
var vec__54242 = G__54241;
var seq__54243 = cljs.core.seq(vec__54242);
var first__54244 = cljs.core.first(seq__54243);
var seq__54243__$1 = cljs.core.next(seq__54243);
var k = first__54244;
var first__54244__$1 = cljs.core.first(seq__54243__$1);
var seq__54243__$2 = cljs.core.next(seq__54243__$1);
var v = first__54244__$1;
var kvs = seq__54243__$2;
var G__54241__$1 = G__54241;
while(true){
var vec__54245 = G__54241__$1;
var seq__54246 = cljs.core.seq(vec__54245);
var first__54247 = cljs.core.first(seq__54246);
var seq__54246__$1 = cljs.core.next(seq__54246);
var k__$1 = first__54247;
var first__54247__$1 = cljs.core.first(seq__54246__$1);
var seq__54246__$2 = cljs.core.next(seq__54246__$1);
var v__$1 = first__54247__$1;
var kvs__$1 = seq__54246__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__54448 = kvs__$1;
G__54241__$1 = G__54448;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq54224){
var G__54225 = cljs.core.first(seq54224);
var seq54224__$1 = cljs.core.next(seq54224);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54225,seq54224__$1);
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
var len__4736__auto___54451 = arguments.length;
var i__4737__auto___54452 = (0);
while(true){
if((i__4737__auto___54452 < len__4736__auto___54451)){
args__4742__auto__.push((arguments[i__4737__auto___54452]));

var G__54454 = (i__4737__auto___54452 + (1));
i__4737__auto___54452 = G__54454;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq54258){
var G__54259 = cljs.core.first(seq54258);
var seq54258__$1 = cljs.core.next(seq54258);
var G__54260 = cljs.core.first(seq54258__$1);
var seq54258__$2 = cljs.core.next(seq54258__$1);
var G__54261 = cljs.core.first(seq54258__$2);
var seq54258__$3 = cljs.core.next(seq54258__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54259,G__54260,G__54261,seq54258__$3);
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
var len__4736__auto___54455 = arguments.length;
var i__4737__auto___54456 = (0);
while(true){
if((i__4737__auto___54456 < len__4736__auto___54455)){
args__4742__auto__.push((arguments[i__4737__auto___54456]));

var G__54458 = (i__4737__auto___54456 + (1));
i__4737__auto___54456 = G__54458;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq54278){
var G__54279 = cljs.core.first(seq54278);
var seq54278__$1 = cljs.core.next(seq54278);
var G__54280 = cljs.core.first(seq54278__$1);
var seq54278__$2 = cljs.core.next(seq54278__$1);
var G__54281 = cljs.core.first(seq54278__$2);
var seq54278__$3 = cljs.core.next(seq54278__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54279,G__54280,G__54281,seq54278__$3);
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
var G__54288 = arguments.length;
switch (G__54288) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54462 = arguments.length;
var i__4737__auto___54463 = (0);
while(true){
if((i__4737__auto___54463 < len__4736__auto___54462)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54463]));

var G__54465 = (i__4737__auto___54463 + (1));
i__4737__auto___54463 = G__54465;
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
var seq__54289_54468 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__54290_54469 = null;
var count__54291_54470 = (0);
var i__54292_54471 = (0);
while(true){
if((i__54292_54471 < count__54291_54470)){
var k_54472 = chunk__54290_54469.cljs$core$IIndexed$_nth$arity$2(null,i__54292_54471);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54472,applied_science.js_interop.unchecked_get(x,k_54472)], 0));


var G__54473 = seq__54289_54468;
var G__54474 = chunk__54290_54469;
var G__54475 = count__54291_54470;
var G__54476 = (i__54292_54471 + (1));
seq__54289_54468 = G__54473;
chunk__54290_54469 = G__54474;
count__54291_54470 = G__54475;
i__54292_54471 = G__54476;
continue;
} else {
var temp__5735__auto___54478 = cljs.core.seq(seq__54289_54468);
if(temp__5735__auto___54478){
var seq__54289_54480__$1 = temp__5735__auto___54478;
if(cljs.core.chunked_seq_QMARK_(seq__54289_54480__$1)){
var c__4556__auto___54482 = cljs.core.chunk_first(seq__54289_54480__$1);
var G__54483 = cljs.core.chunk_rest(seq__54289_54480__$1);
var G__54484 = c__4556__auto___54482;
var G__54485 = cljs.core.count(c__4556__auto___54482);
var G__54486 = (0);
seq__54289_54468 = G__54483;
chunk__54290_54469 = G__54484;
count__54291_54470 = G__54485;
i__54292_54471 = G__54486;
continue;
} else {
var k_54487 = cljs.core.first(seq__54289_54480__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54487,applied_science.js_interop.unchecked_get(x,k_54487)], 0));


var G__54488 = cljs.core.next(seq__54289_54480__$1);
var G__54489 = null;
var G__54490 = (0);
var G__54491 = (0);
seq__54289_54468 = G__54488;
chunk__54290_54469 = G__54489;
count__54291_54470 = G__54490;
i__54292_54471 = G__54491;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq54285){
var G__54286 = cljs.core.first(seq54285);
var seq54285__$1 = cljs.core.next(seq54285);
var G__54287 = cljs.core.first(seq54285__$1);
var seq54285__$2 = cljs.core.next(seq54285__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54286,G__54287,seq54285__$2);
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
var G__54304 = array;
G__54304.push(x);

return G__54304;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__54305 = array;
G__54305.unshift(x);

return G__54305;
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
var len__4736__auto___54509 = arguments.length;
var i__4737__auto___54510 = (0);
while(true){
if((i__4737__auto___54510 < len__4736__auto___54509)){
args__4742__auto__.push((arguments[i__4737__auto___54510]));

var G__54512 = (i__4737__auto___54510 + (1));
i__4737__auto___54510 = G__54512;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj54319 = obj;
var k54320 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj54321 = obj54319;
return (((!((obj54321 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k54320,obj54321)));
})()){
return (obj54319[k54320]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq54316){
var G__54317 = cljs.core.first(seq54316);
var seq54316__$1 = cljs.core.next(seq54316);
var G__54318 = cljs.core.first(seq54316__$1);
var seq54316__$2 = cljs.core.next(seq54316__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54317,G__54318,seq54316__$2);
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
return (function (){var obj54325 = obj;
var k54326 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj54327 = obj54325;
return (((!((obj54327 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k54326,obj54327)));
})()){
return (obj54325[k54326]);
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
var len__4736__auto___54516 = arguments.length;
var i__4737__auto___54517 = (0);
while(true){
if((i__4737__auto___54517 < len__4736__auto___54516)){
args__4742__auto__.push((arguments[i__4737__auto___54517]));

var G__54519 = (i__4737__auto___54517 + (1));
i__4737__auto___54517 = G__54519;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq54328){
var G__54329 = cljs.core.first(seq54328);
var seq54328__$1 = cljs.core.next(seq54328);
var G__54330 = cljs.core.first(seq54328__$1);
var seq54328__$2 = cljs.core.next(seq54328__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54329,G__54330,seq54328__$2);
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
var len__4736__auto___54523 = arguments.length;
var i__4737__auto___54524 = (0);
while(true){
if((i__4737__auto___54524 < len__4736__auto___54523)){
args__4742__auto__.push((arguments[i__4737__auto___54524]));

var G__54525 = (i__4737__auto___54524 + (1));
i__4737__auto___54524 = G__54525;
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
var seq__54349_54526 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__54350_54527 = null;
var count__54351_54528 = (0);
var i__54352_54529 = (0);
while(true){
if((i__54352_54529 < count__54351_54528)){
var vec__54384_54532 = chunk__54350_54527.cljs$core$IIndexed$_nth$arity$2(null,i__54352_54529);
var k_54533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54384_54532,(0),null);
var v_54534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54384_54532,(1),null);
var obj54388_54538 = obj;
var obj54389_54539 = (((!((obj54388_54538 == null))))?obj54388_54538:({}));
(obj54389_54539[applied_science.js_interop.impl.wrap_key(k_54533)] = v_54534);



var G__54540 = seq__54349_54526;
var G__54541 = chunk__54350_54527;
var G__54542 = count__54351_54528;
var G__54543 = (i__54352_54529 + (1));
seq__54349_54526 = G__54540;
chunk__54350_54527 = G__54541;
count__54351_54528 = G__54542;
i__54352_54529 = G__54543;
continue;
} else {
var temp__5735__auto___54544 = cljs.core.seq(seq__54349_54526);
if(temp__5735__auto___54544){
var seq__54349_54546__$1 = temp__5735__auto___54544;
if(cljs.core.chunked_seq_QMARK_(seq__54349_54546__$1)){
var c__4556__auto___54547 = cljs.core.chunk_first(seq__54349_54546__$1);
var G__54548 = cljs.core.chunk_rest(seq__54349_54546__$1);
var G__54549 = c__4556__auto___54547;
var G__54550 = cljs.core.count(c__4556__auto___54547);
var G__54551 = (0);
seq__54349_54526 = G__54548;
chunk__54350_54527 = G__54549;
count__54351_54528 = G__54550;
i__54352_54529 = G__54551;
continue;
} else {
var vec__54392_54554 = cljs.core.first(seq__54349_54546__$1);
var k_54555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54392_54554,(0),null);
var v_54556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54392_54554,(1),null);
var obj54395_54563 = obj;
var obj54396_54564 = (((!((obj54395_54563 == null))))?obj54395_54563:({}));
(obj54396_54564[applied_science.js_interop.impl.wrap_key(k_54555)] = v_54556);



var G__54566 = cljs.core.next(seq__54349_54546__$1);
var G__54567 = null;
var G__54568 = (0);
var G__54569 = (0);
seq__54349_54526 = G__54566;
chunk__54350_54527 = G__54567;
count__54351_54528 = G__54568;
i__54352_54529 = G__54569;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq54340){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54340));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
