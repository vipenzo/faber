goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27398 = arguments.length;
var i__4737__auto___27399 = (0);
while(true){
if((i__4737__auto___27399 < len__4736__auto___27398)){
args__4742__auto__.push((arguments[i__4737__auto___27399]));

var G__27401 = (i__4737__auto___27399 + (1));
i__4737__auto___27399 = G__27401;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__27190_27413 = keyvals;
var vec__27191_27414 = G__27190_27413;
var seq__27192_27415 = cljs.core.seq(vec__27191_27414);
var first__27193_27416 = cljs.core.first(seq__27192_27415);
var seq__27192_27417__$1 = cljs.core.next(seq__27192_27415);
var k_27418 = first__27193_27416;
var first__27193_27419__$1 = cljs.core.first(seq__27192_27417__$1);
var seq__27192_27420__$2 = cljs.core.next(seq__27192_27417__$1);
var v_27421 = first__27193_27419__$1;
var keyvals_27422__$1 = seq__27192_27420__$2;
var G__27190_27433__$1 = G__27190_27413;
while(true){
var vec__27194_27434 = G__27190_27433__$1;
var seq__27195_27435 = cljs.core.seq(vec__27194_27434);
var first__27196_27436 = cljs.core.first(seq__27195_27435);
var seq__27195_27437__$1 = cljs.core.next(seq__27195_27435);
var k_27438__$1 = first__27196_27436;
var first__27196_27439__$1 = cljs.core.first(seq__27195_27437__$1);
var seq__27195_27440__$2 = cljs.core.next(seq__27195_27437__$1);
var v_27441__$1 = first__27196_27439__$1;
var keyvals_27442__$2 = seq__27195_27440__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_27438__$1)] = v_27441__$1);

if(keyvals_27442__$2){
var G__27444 = keyvals_27442__$2;
G__27190_27433__$1 = G__27444;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq27185){
var G__27186 = cljs.core.first(seq27185);
var seq27185__$1 = cljs.core.next(seq27185);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27186,seq27185__$1);
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
var G__27198 = arguments.length;
switch (G__27198) {
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
var obj27199 = obj;
var k27200 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27203 = obj27199;
return (((!((obj27203 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27200,obj27203)));
})()){
return (obj27199[k27200]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj27211 = obj;
var k27212 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27213 = obj27211;
return (((!((obj27213 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27212,obj27213)));
})()){
return (obj27211[k27212]);
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
var G__27218 = arguments.length;
switch (G__27218) {
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
var obj27229 = self__.obj;
var k27230 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27234 = obj27229;
return (((!((obj27234 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27230,obj27234)));
})()){
return (obj27229[k27230]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj27236 = self__.obj;
var k27238 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27240 = obj27236;
return (((!((obj27240 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27238,obj27240)));
})()){
return (obj27236[k27238]);
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
var len__4736__auto___27463 = arguments.length;
var i__4737__auto___27464 = (0);
while(true){
if((i__4737__auto___27464 < len__4736__auto___27463)){
args__4742__auto__.push((arguments[i__4737__auto___27464]));

var G__27465 = (i__4737__auto___27464 + (1));
i__4737__auto___27464 = G__27465;
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
var G__27252 = keyvals;
var vec__27256 = G__27252;
var seq__27257 = cljs.core.seq(vec__27256);
var first__27258 = cljs.core.first(seq__27257);
var seq__27257__$1 = cljs.core.next(seq__27257);
var k = first__27258;
var first__27258__$1 = cljs.core.first(seq__27257__$1);
var seq__27257__$2 = cljs.core.next(seq__27257__$1);
var v = first__27258__$1;
var kvs = seq__27257__$2;
var G__27252__$1 = G__27252;
while(true){
var vec__27262 = G__27252__$1;
var seq__27263 = cljs.core.seq(vec__27262);
var first__27264 = cljs.core.first(seq__27263);
var seq__27263__$1 = cljs.core.next(seq__27263);
var k__$1 = first__27264;
var first__27264__$1 = cljs.core.first(seq__27263__$1);
var seq__27263__$2 = cljs.core.next(seq__27263__$1);
var v__$1 = first__27264__$1;
var kvs__$1 = seq__27263__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__27469 = kvs__$1;
G__27252__$1 = G__27469;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq27242){
var G__27244 = cljs.core.first(seq27242);
var seq27242__$1 = cljs.core.next(seq27242);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27244,seq27242__$1);
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
var len__4736__auto___27471 = arguments.length;
var i__4737__auto___27472 = (0);
while(true){
if((i__4737__auto___27472 < len__4736__auto___27471)){
args__4742__auto__.push((arguments[i__4737__auto___27472]));

var G__27473 = (i__4737__auto___27472 + (1));
i__4737__auto___27472 = G__27473;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq27265){
var G__27267 = cljs.core.first(seq27265);
var seq27265__$1 = cljs.core.next(seq27265);
var G__27270 = cljs.core.first(seq27265__$1);
var seq27265__$2 = cljs.core.next(seq27265__$1);
var G__27272 = cljs.core.first(seq27265__$2);
var seq27265__$3 = cljs.core.next(seq27265__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27267,G__27270,G__27272,seq27265__$3);
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
var len__4736__auto___27477 = arguments.length;
var i__4737__auto___27478 = (0);
while(true){
if((i__4737__auto___27478 < len__4736__auto___27477)){
args__4742__auto__.push((arguments[i__4737__auto___27478]));

var G__27479 = (i__4737__auto___27478 + (1));
i__4737__auto___27478 = G__27479;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq27273){
var G__27275 = cljs.core.first(seq27273);
var seq27273__$1 = cljs.core.next(seq27273);
var G__27277 = cljs.core.first(seq27273__$1);
var seq27273__$2 = cljs.core.next(seq27273__$1);
var G__27280 = cljs.core.first(seq27273__$2);
var seq27273__$3 = cljs.core.next(seq27273__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27275,G__27277,G__27280,seq27273__$3);
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
var G__27289 = arguments.length;
switch (G__27289) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___27485 = arguments.length;
var i__4737__auto___27486 = (0);
while(true){
if((i__4737__auto___27486 < len__4736__auto___27485)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27486]));

var G__27491 = (i__4737__auto___27486 + (1));
i__4737__auto___27486 = G__27491;
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
var seq__27291_27495 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__27293_27496 = null;
var count__27295_27497 = (0);
var i__27297_27498 = (0);
while(true){
if((i__27297_27498 < count__27295_27497)){
var k_27499 = chunk__27293_27496.cljs$core$IIndexed$_nth$arity$2(null,i__27297_27498);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27499,applied_science.js_interop.unchecked_get(x,k_27499)], 0));


var G__27500 = seq__27291_27495;
var G__27501 = chunk__27293_27496;
var G__27502 = count__27295_27497;
var G__27503 = (i__27297_27498 + (1));
seq__27291_27495 = G__27500;
chunk__27293_27496 = G__27501;
count__27295_27497 = G__27502;
i__27297_27498 = G__27503;
continue;
} else {
var temp__5735__auto___27504 = cljs.core.seq(seq__27291_27495);
if(temp__5735__auto___27504){
var seq__27291_27505__$1 = temp__5735__auto___27504;
if(cljs.core.chunked_seq_QMARK_(seq__27291_27505__$1)){
var c__4556__auto___27506 = cljs.core.chunk_first(seq__27291_27505__$1);
var G__27507 = cljs.core.chunk_rest(seq__27291_27505__$1);
var G__27508 = c__4556__auto___27506;
var G__27509 = cljs.core.count(c__4556__auto___27506);
var G__27510 = (0);
seq__27291_27495 = G__27507;
chunk__27293_27496 = G__27508;
count__27295_27497 = G__27509;
i__27297_27498 = G__27510;
continue;
} else {
var k_27512 = cljs.core.first(seq__27291_27505__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27512,applied_science.js_interop.unchecked_get(x,k_27512)], 0));


var G__27515 = cljs.core.next(seq__27291_27505__$1);
var G__27516 = null;
var G__27517 = (0);
var G__27518 = (0);
seq__27291_27495 = G__27515;
chunk__27293_27496 = G__27516;
count__27295_27497 = G__27517;
i__27297_27498 = G__27518;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq27283){
var G__27286 = cljs.core.first(seq27283);
var seq27283__$1 = cljs.core.next(seq27283);
var G__27287 = cljs.core.first(seq27283__$1);
var seq27283__$2 = cljs.core.next(seq27283__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27286,G__27287,seq27283__$2);
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
var G__27300 = array;
G__27300.push(x);

return G__27300;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__27301 = array;
G__27301.unshift(x);

return G__27301;
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
var len__4736__auto___27530 = arguments.length;
var i__4737__auto___27531 = (0);
while(true){
if((i__4737__auto___27531 < len__4736__auto___27530)){
args__4742__auto__.push((arguments[i__4737__auto___27531]));

var G__27535 = (i__4737__auto___27531 + (1));
i__4737__auto___27531 = G__27535;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj27310 = obj;
var k27311 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27314 = obj27310;
return (((!((obj27314 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27311,obj27314)));
})()){
return (obj27310[k27311]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq27303){
var G__27306 = cljs.core.first(seq27303);
var seq27303__$1 = cljs.core.next(seq27303);
var G__27307 = cljs.core.first(seq27303__$1);
var seq27303__$2 = cljs.core.next(seq27303__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27306,G__27307,seq27303__$2);
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
return (function (){var obj27317 = obj;
var k27318 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27320 = obj27317;
return (((!((obj27320 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27318,obj27320)));
})()){
return (obj27317[k27318]);
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
var len__4736__auto___27548 = arguments.length;
var i__4737__auto___27549 = (0);
while(true){
if((i__4737__auto___27549 < len__4736__auto___27548)){
args__4742__auto__.push((arguments[i__4737__auto___27549]));

var G__27550 = (i__4737__auto___27549 + (1));
i__4737__auto___27549 = G__27550;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq27321){
var G__27323 = cljs.core.first(seq27321);
var seq27321__$1 = cljs.core.next(seq27321);
var G__27325 = cljs.core.first(seq27321__$1);
var seq27321__$2 = cljs.core.next(seq27321__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27323,G__27325,seq27321__$2);
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
var len__4736__auto___27555 = arguments.length;
var i__4737__auto___27556 = (0);
while(true){
if((i__4737__auto___27556 < len__4736__auto___27555)){
args__4742__auto__.push((arguments[i__4737__auto___27556]));

var G__27557 = (i__4737__auto___27556 + (1));
i__4737__auto___27556 = G__27557;
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
var seq__27334_27559 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__27335_27560 = null;
var count__27338_27561 = (0);
var i__27340_27562 = (0);
while(true){
if((i__27340_27562 < count__27338_27561)){
var vec__27372_27563 = chunk__27335_27560.cljs$core$IIndexed$_nth$arity$2(null,i__27340_27562);
var k_27564 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27372_27563,(0),null);
var v_27565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27372_27563,(1),null);
var obj27377_27566 = obj;
var obj27378_27567 = (((!((obj27377_27566 == null))))?obj27377_27566:({}));
(obj27378_27567[applied_science.js_interop.impl.wrap_key(k_27564)] = v_27565);



var G__27568 = seq__27334_27559;
var G__27569 = chunk__27335_27560;
var G__27570 = count__27338_27561;
var G__27571 = (i__27340_27562 + (1));
seq__27334_27559 = G__27568;
chunk__27335_27560 = G__27569;
count__27338_27561 = G__27570;
i__27340_27562 = G__27571;
continue;
} else {
var temp__5735__auto___27574 = cljs.core.seq(seq__27334_27559);
if(temp__5735__auto___27574){
var seq__27334_27576__$1 = temp__5735__auto___27574;
if(cljs.core.chunked_seq_QMARK_(seq__27334_27576__$1)){
var c__4556__auto___27577 = cljs.core.chunk_first(seq__27334_27576__$1);
var G__27578 = cljs.core.chunk_rest(seq__27334_27576__$1);
var G__27579 = c__4556__auto___27577;
var G__27580 = cljs.core.count(c__4556__auto___27577);
var G__27581 = (0);
seq__27334_27559 = G__27578;
chunk__27335_27560 = G__27579;
count__27338_27561 = G__27580;
i__27340_27562 = G__27581;
continue;
} else {
var vec__27387_27582 = cljs.core.first(seq__27334_27576__$1);
var k_27583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27387_27582,(0),null);
var v_27584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27387_27582,(1),null);
var obj27391_27585 = obj;
var obj27394_27586 = (((!((obj27391_27585 == null))))?obj27391_27585:({}));
(obj27394_27586[applied_science.js_interop.impl.wrap_key(k_27583)] = v_27584);



var G__27587 = cljs.core.next(seq__27334_27576__$1);
var G__27588 = null;
var G__27589 = (0);
var G__27590 = (0);
seq__27334_27559 = G__27587;
chunk__27335_27560 = G__27588;
count__27338_27561 = G__27589;
i__27340_27562 = G__27590;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq27327){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27327));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
