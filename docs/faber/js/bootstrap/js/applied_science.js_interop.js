goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27859 = arguments.length;
var i__4737__auto___27860 = (0);
while(true){
if((i__4737__auto___27860 < len__4736__auto___27859)){
args__4742__auto__.push((arguments[i__4737__auto___27860]));

var G__27861 = (i__4737__auto___27860 + (1));
i__4737__auto___27860 = G__27861;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__27637_27864 = keyvals;
var vec__27640_27865 = G__27637_27864;
var seq__27641_27866 = cljs.core.seq(vec__27640_27865);
var first__27642_27867 = cljs.core.first(seq__27641_27866);
var seq__27641_27868__$1 = cljs.core.next(seq__27641_27866);
var k_27869 = first__27642_27867;
var first__27642_27870__$1 = cljs.core.first(seq__27641_27868__$1);
var seq__27641_27871__$2 = cljs.core.next(seq__27641_27868__$1);
var v_27872 = first__27642_27870__$1;
var keyvals_27873__$1 = seq__27641_27871__$2;
var G__27637_27874__$1 = G__27637_27864;
while(true){
var vec__27645_27875 = G__27637_27874__$1;
var seq__27646_27876 = cljs.core.seq(vec__27645_27875);
var first__27647_27877 = cljs.core.first(seq__27646_27876);
var seq__27646_27878__$1 = cljs.core.next(seq__27646_27876);
var k_27879__$1 = first__27647_27877;
var first__27647_27880__$1 = cljs.core.first(seq__27646_27878__$1);
var seq__27646_27881__$2 = cljs.core.next(seq__27646_27878__$1);
var v_27882__$1 = first__27647_27880__$1;
var keyvals_27883__$2 = seq__27646_27881__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_27879__$1)] = v_27882__$1);

if(keyvals_27883__$2){
var G__27889 = keyvals_27883__$2;
G__27637_27874__$1 = G__27889;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq27632){
var G__27633 = cljs.core.first(seq27632);
var seq27632__$1 = cljs.core.next(seq27632);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27633,seq27632__$1);
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
var G__27655 = arguments.length;
switch (G__27655) {
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
var obj27660 = obj;
var k27661 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27663 = obj27660;
return (((!((obj27663 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27661,obj27663)));
})()){
return (obj27660[k27661]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj27665 = obj;
var k27666 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27667 = obj27665;
return (((!((obj27667 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27666,obj27667)));
})()){
return (obj27665[k27666]);
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
var G__27669 = arguments.length;
switch (G__27669) {
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
var obj27678 = self__.obj;
var k27679 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27680 = obj27678;
return (((!((obj27680 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27679,obj27680)));
})()){
return (obj27678[k27679]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj27681 = self__.obj;
var k27682 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27683 = obj27681;
return (((!((obj27683 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27682,obj27683)));
})()){
return (obj27681[k27682]);
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
var len__4736__auto___27905 = arguments.length;
var i__4737__auto___27906 = (0);
while(true){
if((i__4737__auto___27906 < len__4736__auto___27905)){
args__4742__auto__.push((arguments[i__4737__auto___27906]));

var G__27907 = (i__4737__auto___27906 + (1));
i__4737__auto___27906 = G__27907;
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
var G__27699 = keyvals;
var vec__27700 = G__27699;
var seq__27701 = cljs.core.seq(vec__27700);
var first__27702 = cljs.core.first(seq__27701);
var seq__27701__$1 = cljs.core.next(seq__27701);
var k = first__27702;
var first__27702__$1 = cljs.core.first(seq__27701__$1);
var seq__27701__$2 = cljs.core.next(seq__27701__$1);
var v = first__27702__$1;
var kvs = seq__27701__$2;
var G__27699__$1 = G__27699;
while(true){
var vec__27703 = G__27699__$1;
var seq__27704 = cljs.core.seq(vec__27703);
var first__27705 = cljs.core.first(seq__27704);
var seq__27704__$1 = cljs.core.next(seq__27704);
var k__$1 = first__27705;
var first__27705__$1 = cljs.core.first(seq__27704__$1);
var seq__27704__$2 = cljs.core.next(seq__27704__$1);
var v__$1 = first__27705__$1;
var kvs__$1 = seq__27704__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__27913 = kvs__$1;
G__27699__$1 = G__27913;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq27689){
var G__27690 = cljs.core.first(seq27689);
var seq27689__$1 = cljs.core.next(seq27689);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27690,seq27689__$1);
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
var len__4736__auto___27916 = arguments.length;
var i__4737__auto___27917 = (0);
while(true){
if((i__4737__auto___27917 < len__4736__auto___27916)){
args__4742__auto__.push((arguments[i__4737__auto___27917]));

var G__27919 = (i__4737__auto___27917 + (1));
i__4737__auto___27917 = G__27919;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq27711){
var G__27712 = cljs.core.first(seq27711);
var seq27711__$1 = cljs.core.next(seq27711);
var G__27713 = cljs.core.first(seq27711__$1);
var seq27711__$2 = cljs.core.next(seq27711__$1);
var G__27714 = cljs.core.first(seq27711__$2);
var seq27711__$3 = cljs.core.next(seq27711__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27712,G__27713,G__27714,seq27711__$3);
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
var len__4736__auto___27935 = arguments.length;
var i__4737__auto___27937 = (0);
while(true){
if((i__4737__auto___27937 < len__4736__auto___27935)){
args__4742__auto__.push((arguments[i__4737__auto___27937]));

var G__27939 = (i__4737__auto___27937 + (1));
i__4737__auto___27937 = G__27939;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq27735){
var G__27736 = cljs.core.first(seq27735);
var seq27735__$1 = cljs.core.next(seq27735);
var G__27737 = cljs.core.first(seq27735__$1);
var seq27735__$2 = cljs.core.next(seq27735__$1);
var G__27738 = cljs.core.first(seq27735__$2);
var seq27735__$3 = cljs.core.next(seq27735__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27736,G__27737,G__27738,seq27735__$3);
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
var G__27746 = arguments.length;
switch (G__27746) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___27945 = arguments.length;
var i__4737__auto___27946 = (0);
while(true){
if((i__4737__auto___27946 < len__4736__auto___27945)){
args_arr__4757__auto__.push((arguments[i__4737__auto___27946]));

var G__27947 = (i__4737__auto___27946 + (1));
i__4737__auto___27946 = G__27947;
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
var seq__27749_27949 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__27750_27950 = null;
var count__27751_27951 = (0);
var i__27752_27952 = (0);
while(true){
if((i__27752_27952 < count__27751_27951)){
var k_27953 = chunk__27750_27950.cljs$core$IIndexed$_nth$arity$2(null,i__27752_27952);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27953,applied_science.js_interop.unchecked_get(x,k_27953)], 0));


var G__27954 = seq__27749_27949;
var G__27955 = chunk__27750_27950;
var G__27956 = count__27751_27951;
var G__27957 = (i__27752_27952 + (1));
seq__27749_27949 = G__27954;
chunk__27750_27950 = G__27955;
count__27751_27951 = G__27956;
i__27752_27952 = G__27957;
continue;
} else {
var temp__5735__auto___27961 = cljs.core.seq(seq__27749_27949);
if(temp__5735__auto___27961){
var seq__27749_27962__$1 = temp__5735__auto___27961;
if(cljs.core.chunked_seq_QMARK_(seq__27749_27962__$1)){
var c__4556__auto___27963 = cljs.core.chunk_first(seq__27749_27962__$1);
var G__27964 = cljs.core.chunk_rest(seq__27749_27962__$1);
var G__27965 = c__4556__auto___27963;
var G__27966 = cljs.core.count(c__4556__auto___27963);
var G__27967 = (0);
seq__27749_27949 = G__27964;
chunk__27750_27950 = G__27965;
count__27751_27951 = G__27966;
i__27752_27952 = G__27967;
continue;
} else {
var k_27968 = cljs.core.first(seq__27749_27962__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27968,applied_science.js_interop.unchecked_get(x,k_27968)], 0));


var G__27971 = cljs.core.next(seq__27749_27962__$1);
var G__27972 = null;
var G__27973 = (0);
var G__27974 = (0);
seq__27749_27949 = G__27971;
chunk__27750_27950 = G__27972;
count__27751_27951 = G__27973;
i__27752_27952 = G__27974;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq27743){
var G__27744 = cljs.core.first(seq27743);
var seq27743__$1 = cljs.core.next(seq27743);
var G__27745 = cljs.core.first(seq27743__$1);
var seq27743__$2 = cljs.core.next(seq27743__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27744,G__27745,seq27743__$2);
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
var G__27759 = array;
G__27759.push(x);

return G__27759;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__27760 = array;
G__27760.unshift(x);

return G__27760;
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
var len__4736__auto___27979 = arguments.length;
var i__4737__auto___27980 = (0);
while(true){
if((i__4737__auto___27980 < len__4736__auto___27979)){
args__4742__auto__.push((arguments[i__4737__auto___27980]));

var G__27981 = (i__4737__auto___27980 + (1));
i__4737__auto___27980 = G__27981;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj27767 = obj;
var k27768 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27769 = obj27767;
return (((!((obj27769 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27768,obj27769)));
})()){
return (obj27767[k27768]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq27761){
var G__27762 = cljs.core.first(seq27761);
var seq27761__$1 = cljs.core.next(seq27761);
var G__27763 = cljs.core.first(seq27761__$1);
var seq27761__$2 = cljs.core.next(seq27761__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27762,G__27763,seq27761__$2);
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
return (function (){var obj27778 = obj;
var k27779 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27780 = obj27778;
return (((!((obj27780 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27779,obj27780)));
})()){
return (obj27778[k27779]);
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
var len__4736__auto___27987 = arguments.length;
var i__4737__auto___27988 = (0);
while(true){
if((i__4737__auto___27988 < len__4736__auto___27987)){
args__4742__auto__.push((arguments[i__4737__auto___27988]));

var G__27992 = (i__4737__auto___27988 + (1));
i__4737__auto___27988 = G__27992;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq27782){
var G__27783 = cljs.core.first(seq27782);
var seq27782__$1 = cljs.core.next(seq27782);
var G__27784 = cljs.core.first(seq27782__$1);
var seq27782__$2 = cljs.core.next(seq27782__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27783,G__27784,seq27782__$2);
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
var len__4736__auto___27998 = arguments.length;
var i__4737__auto___27999 = (0);
while(true){
if((i__4737__auto___27999 < len__4736__auto___27998)){
args__4742__auto__.push((arguments[i__4737__auto___27999]));

var G__28000 = (i__4737__auto___27999 + (1));
i__4737__auto___27999 = G__28000;
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
var seq__27799_28002 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__27800_28003 = null;
var count__27801_28004 = (0);
var i__27802_28005 = (0);
while(true){
if((i__27802_28005 < count__27801_28004)){
var vec__27827_28008 = chunk__27800_28003.cljs$core$IIndexed$_nth$arity$2(null,i__27802_28005);
var k_28009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27827_28008,(0),null);
var v_28010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27827_28008,(1),null);
var obj27831_28011 = obj;
var obj27833_28012 = (((!((obj27831_28011 == null))))?obj27831_28011:({}));
(obj27833_28012[applied_science.js_interop.impl.wrap_key(k_28009)] = v_28010);



var G__28014 = seq__27799_28002;
var G__28015 = chunk__27800_28003;
var G__28016 = count__27801_28004;
var G__28017 = (i__27802_28005 + (1));
seq__27799_28002 = G__28014;
chunk__27800_28003 = G__28015;
count__27801_28004 = G__28016;
i__27802_28005 = G__28017;
continue;
} else {
var temp__5735__auto___28018 = cljs.core.seq(seq__27799_28002);
if(temp__5735__auto___28018){
var seq__27799_28019__$1 = temp__5735__auto___28018;
if(cljs.core.chunked_seq_QMARK_(seq__27799_28019__$1)){
var c__4556__auto___28023 = cljs.core.chunk_first(seq__27799_28019__$1);
var G__28026 = cljs.core.chunk_rest(seq__27799_28019__$1);
var G__28027 = c__4556__auto___28023;
var G__28028 = cljs.core.count(c__4556__auto___28023);
var G__28029 = (0);
seq__27799_28002 = G__28026;
chunk__27800_28003 = G__28027;
count__27801_28004 = G__28028;
i__27802_28005 = G__28029;
continue;
} else {
var vec__27848_28031 = cljs.core.first(seq__27799_28019__$1);
var k_28032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27848_28031,(0),null);
var v_28033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27848_28031,(1),null);
var obj27851_28034 = obj;
var obj27852_28035 = (((!((obj27851_28034 == null))))?obj27851_28034:({}));
(obj27852_28035[applied_science.js_interop.impl.wrap_key(k_28032)] = v_28033);



var G__28036 = cljs.core.next(seq__27799_28019__$1);
var G__28037 = null;
var G__28038 = (0);
var G__28039 = (0);
seq__27799_28002 = G__28036;
chunk__27800_28003 = G__28037;
count__27801_28004 = G__28038;
i__27802_28005 = G__28039;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq27791){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27791));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
