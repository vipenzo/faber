goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54295 = arguments.length;
var i__4737__auto___54296 = (0);
while(true){
if((i__4737__auto___54296 < len__4736__auto___54295)){
args__4742__auto__.push((arguments[i__4737__auto___54296]));

var G__54298 = (i__4737__auto___54296 + (1));
i__4737__auto___54296 = G__54298;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__53806_54302 = keyvals;
var vec__53807_54303 = G__53806_54302;
var seq__53808_54304 = cljs.core.seq(vec__53807_54303);
var first__53809_54305 = cljs.core.first(seq__53808_54304);
var seq__53808_54306__$1 = cljs.core.next(seq__53808_54304);
var k_54307 = first__53809_54305;
var first__53809_54308__$1 = cljs.core.first(seq__53808_54306__$1);
var seq__53808_54309__$2 = cljs.core.next(seq__53808_54306__$1);
var v_54310 = first__53809_54308__$1;
var keyvals_54311__$1 = seq__53808_54309__$2;
var G__53806_54316__$1 = G__53806_54302;
while(true){
var vec__53810_54317 = G__53806_54316__$1;
var seq__53811_54318 = cljs.core.seq(vec__53810_54317);
var first__53812_54319 = cljs.core.first(seq__53811_54318);
var seq__53811_54320__$1 = cljs.core.next(seq__53811_54318);
var k_54321__$1 = first__53812_54319;
var first__53812_54322__$1 = cljs.core.first(seq__53811_54320__$1);
var seq__53811_54323__$2 = cljs.core.next(seq__53811_54320__$1);
var v_54324__$1 = first__53812_54322__$1;
var keyvals_54325__$2 = seq__53811_54323__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_54321__$1)] = v_54324__$1);

if(keyvals_54325__$2){
var G__54334 = keyvals_54325__$2;
G__53806_54316__$1 = G__54334;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq53785){
var G__53786 = cljs.core.first(seq53785);
var seq53785__$1 = cljs.core.next(seq53785);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53786,seq53785__$1);
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
var G__53848 = arguments.length;
switch (G__53848) {
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
var obj53866 = obj;
var k53867 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj53872 = obj53866;
return (((!((obj53872 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k53867,obj53872)));
})()){
return (obj53866[k53867]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj53883 = obj;
var k53884 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj53885 = obj53883;
return (((!((obj53885 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k53884,obj53885)));
})()){
return (obj53883[k53884]);
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
var G__53904 = arguments.length;
switch (G__53904) {
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
var obj53939 = self__.obj;
var k53940 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj53942 = obj53939;
return (((!((obj53942 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k53940,obj53942)));
})()){
return (obj53939[k53940]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj53958 = self__.obj;
var k53959 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj53960 = obj53958;
return (((!((obj53960 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k53959,obj53960)));
})()){
return (obj53958[k53959]);
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
var len__4736__auto___54368 = arguments.length;
var i__4737__auto___54369 = (0);
while(true){
if((i__4737__auto___54369 < len__4736__auto___54368)){
args__4742__auto__.push((arguments[i__4737__auto___54369]));

var G__54370 = (i__4737__auto___54369 + (1));
i__4737__auto___54369 = G__54370;
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
var G__54008 = keyvals;
var vec__54009 = G__54008;
var seq__54010 = cljs.core.seq(vec__54009);
var first__54011 = cljs.core.first(seq__54010);
var seq__54010__$1 = cljs.core.next(seq__54010);
var k = first__54011;
var first__54011__$1 = cljs.core.first(seq__54010__$1);
var seq__54010__$2 = cljs.core.next(seq__54010__$1);
var v = first__54011__$1;
var kvs = seq__54010__$2;
var G__54008__$1 = G__54008;
while(true){
var vec__54020 = G__54008__$1;
var seq__54021 = cljs.core.seq(vec__54020);
var first__54022 = cljs.core.first(seq__54021);
var seq__54021__$1 = cljs.core.next(seq__54021);
var k__$1 = first__54022;
var first__54022__$1 = cljs.core.first(seq__54021__$1);
var seq__54021__$2 = cljs.core.next(seq__54021__$1);
var v__$1 = first__54022__$1;
var kvs__$1 = seq__54021__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__54375 = kvs__$1;
G__54008__$1 = G__54375;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq53985){
var G__53986 = cljs.core.first(seq53985);
var seq53985__$1 = cljs.core.next(seq53985);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53986,seq53985__$1);
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
var len__4736__auto___54380 = arguments.length;
var i__4737__auto___54381 = (0);
while(true){
if((i__4737__auto___54381 < len__4736__auto___54380)){
args__4742__auto__.push((arguments[i__4737__auto___54381]));

var G__54384 = (i__4737__auto___54381 + (1));
i__4737__auto___54381 = G__54384;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq54086){
var G__54087 = cljs.core.first(seq54086);
var seq54086__$1 = cljs.core.next(seq54086);
var G__54088 = cljs.core.first(seq54086__$1);
var seq54086__$2 = cljs.core.next(seq54086__$1);
var G__54089 = cljs.core.first(seq54086__$2);
var seq54086__$3 = cljs.core.next(seq54086__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54087,G__54088,G__54089,seq54086__$3);
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
var len__4736__auto___54389 = arguments.length;
var i__4737__auto___54390 = (0);
while(true){
if((i__4737__auto___54390 < len__4736__auto___54389)){
args__4742__auto__.push((arguments[i__4737__auto___54390]));

var G__54393 = (i__4737__auto___54390 + (1));
i__4737__auto___54390 = G__54393;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq54101){
var G__54102 = cljs.core.first(seq54101);
var seq54101__$1 = cljs.core.next(seq54101);
var G__54103 = cljs.core.first(seq54101__$1);
var seq54101__$2 = cljs.core.next(seq54101__$1);
var G__54104 = cljs.core.first(seq54101__$2);
var seq54101__$3 = cljs.core.next(seq54101__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54102,G__54103,G__54104,seq54101__$3);
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
var G__54115 = arguments.length;
switch (G__54115) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___54396 = arguments.length;
var i__4737__auto___54397 = (0);
while(true){
if((i__4737__auto___54397 < len__4736__auto___54396)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54397]));

var G__54398 = (i__4737__auto___54397 + (1));
i__4737__auto___54397 = G__54398;
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
var seq__54119_54403 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__54120_54404 = null;
var count__54121_54405 = (0);
var i__54122_54406 = (0);
while(true){
if((i__54122_54406 < count__54121_54405)){
var k_54407 = chunk__54120_54404.cljs$core$IIndexed$_nth$arity$2(null,i__54122_54406);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54407,applied_science.js_interop.unchecked_get(x,k_54407)], 0));


var G__54410 = seq__54119_54403;
var G__54411 = chunk__54120_54404;
var G__54412 = count__54121_54405;
var G__54413 = (i__54122_54406 + (1));
seq__54119_54403 = G__54410;
chunk__54120_54404 = G__54411;
count__54121_54405 = G__54412;
i__54122_54406 = G__54413;
continue;
} else {
var temp__5735__auto___54414 = cljs.core.seq(seq__54119_54403);
if(temp__5735__auto___54414){
var seq__54119_54415__$1 = temp__5735__auto___54414;
if(cljs.core.chunked_seq_QMARK_(seq__54119_54415__$1)){
var c__4556__auto___54416 = cljs.core.chunk_first(seq__54119_54415__$1);
var G__54417 = cljs.core.chunk_rest(seq__54119_54415__$1);
var G__54418 = c__4556__auto___54416;
var G__54419 = cljs.core.count(c__4556__auto___54416);
var G__54420 = (0);
seq__54119_54403 = G__54417;
chunk__54120_54404 = G__54418;
count__54121_54405 = G__54419;
i__54122_54406 = G__54420;
continue;
} else {
var k_54421 = cljs.core.first(seq__54119_54415__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_54421,applied_science.js_interop.unchecked_get(x,k_54421)], 0));


var G__54424 = cljs.core.next(seq__54119_54415__$1);
var G__54425 = null;
var G__54426 = (0);
var G__54427 = (0);
seq__54119_54403 = G__54424;
chunk__54120_54404 = G__54425;
count__54121_54405 = G__54426;
i__54122_54406 = G__54427;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq54111){
var G__54112 = cljs.core.first(seq54111);
var seq54111__$1 = cljs.core.next(seq54111);
var G__54113 = cljs.core.first(seq54111__$1);
var seq54111__$2 = cljs.core.next(seq54111__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54112,G__54113,seq54111__$2);
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
var G__54164 = array;
G__54164.push(x);

return G__54164;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__54165 = array;
G__54165.unshift(x);

return G__54165;
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
var len__4736__auto___54430 = arguments.length;
var i__4737__auto___54431 = (0);
while(true){
if((i__4737__auto___54431 < len__4736__auto___54430)){
args__4742__auto__.push((arguments[i__4737__auto___54431]));

var G__54435 = (i__4737__auto___54431 + (1));
i__4737__auto___54431 = G__54435;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj54171 = obj;
var k54172 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj54173 = obj54171;
return (((!((obj54173 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k54172,obj54173)));
})()){
return (obj54171[k54172]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq54166){
var G__54167 = cljs.core.first(seq54166);
var seq54166__$1 = cljs.core.next(seq54166);
var G__54168 = cljs.core.first(seq54166__$1);
var seq54166__$2 = cljs.core.next(seq54166__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54167,G__54168,seq54166__$2);
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
return (function (){var obj54175 = obj;
var k54176 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj54177 = obj54175;
return (((!((obj54177 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k54176,obj54177)));
})()){
return (obj54175[k54176]);
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
var len__4736__auto___54444 = arguments.length;
var i__4737__auto___54446 = (0);
while(true){
if((i__4737__auto___54446 < len__4736__auto___54444)){
args__4742__auto__.push((arguments[i__4737__auto___54446]));

var G__54447 = (i__4737__auto___54446 + (1));
i__4737__auto___54446 = G__54447;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq54201){
var G__54202 = cljs.core.first(seq54201);
var seq54201__$1 = cljs.core.next(seq54201);
var G__54203 = cljs.core.first(seq54201__$1);
var seq54201__$2 = cljs.core.next(seq54201__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54202,G__54203,seq54201__$2);
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
var len__4736__auto___54452 = arguments.length;
var i__4737__auto___54453 = (0);
while(true){
if((i__4737__auto___54453 < len__4736__auto___54452)){
args__4742__auto__.push((arguments[i__4737__auto___54453]));

var G__54454 = (i__4737__auto___54453 + (1));
i__4737__auto___54453 = G__54454;
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
var seq__54213_54455 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__54214_54456 = null;
var count__54215_54457 = (0);
var i__54216_54458 = (0);
while(true){
if((i__54216_54458 < count__54215_54457)){
var vec__54236_54459 = chunk__54214_54456.cljs$core$IIndexed$_nth$arity$2(null,i__54216_54458);
var k_54460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54236_54459,(0),null);
var v_54461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54236_54459,(1),null);
var obj54239_54464 = obj;
var obj54240_54465 = (((!((obj54239_54464 == null))))?obj54239_54464:({}));
(obj54240_54465[applied_science.js_interop.impl.wrap_key(k_54460)] = v_54461);



var G__54466 = seq__54213_54455;
var G__54467 = chunk__54214_54456;
var G__54468 = count__54215_54457;
var G__54469 = (i__54216_54458 + (1));
seq__54213_54455 = G__54466;
chunk__54214_54456 = G__54467;
count__54215_54457 = G__54468;
i__54216_54458 = G__54469;
continue;
} else {
var temp__5735__auto___54470 = cljs.core.seq(seq__54213_54455);
if(temp__5735__auto___54470){
var seq__54213_54471__$1 = temp__5735__auto___54470;
if(cljs.core.chunked_seq_QMARK_(seq__54213_54471__$1)){
var c__4556__auto___54472 = cljs.core.chunk_first(seq__54213_54471__$1);
var G__54473 = cljs.core.chunk_rest(seq__54213_54471__$1);
var G__54474 = c__4556__auto___54472;
var G__54475 = cljs.core.count(c__4556__auto___54472);
var G__54476 = (0);
seq__54213_54455 = G__54473;
chunk__54214_54456 = G__54474;
count__54215_54457 = G__54475;
i__54216_54458 = G__54476;
continue;
} else {
var vec__54243_54477 = cljs.core.first(seq__54213_54471__$1);
var k_54478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54243_54477,(0),null);
var v_54479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54243_54477,(1),null);
var obj54246_54480 = obj;
var obj54247_54481 = (((!((obj54246_54480 == null))))?obj54246_54480:({}));
(obj54247_54481[applied_science.js_interop.impl.wrap_key(k_54478)] = v_54479);



var G__54482 = cljs.core.next(seq__54213_54471__$1);
var G__54483 = null;
var G__54484 = (0);
var G__54485 = (0);
seq__54213_54455 = G__54482;
chunk__54214_54456 = G__54483;
count__54215_54457 = G__54484;
i__54216_54458 = G__54485;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq54209){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54209));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
