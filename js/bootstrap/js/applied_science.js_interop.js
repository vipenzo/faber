goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27934 = arguments.length;
var i__4737__auto___27935 = (0);
while(true){
if((i__4737__auto___27935 < len__4736__auto___27934)){
args__4742__auto__.push((arguments[i__4737__auto___27935]));

var G__27937 = (i__4737__auto___27935 + (1));
i__4737__auto___27935 = G__27937;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__27717_27941 = keyvals;
var vec__27718_27942 = G__27717_27941;
var seq__27719_27943 = cljs.core.seq(vec__27718_27942);
var first__27720_27944 = cljs.core.first(seq__27719_27943);
var seq__27719_27945__$1 = cljs.core.next(seq__27719_27943);
var k_27946 = first__27720_27944;
var first__27720_27947__$1 = cljs.core.first(seq__27719_27945__$1);
var seq__27719_27948__$2 = cljs.core.next(seq__27719_27945__$1);
var v_27949 = first__27720_27947__$1;
var keyvals_27950__$1 = seq__27719_27948__$2;
var G__27717_27952__$1 = G__27717_27941;
while(true){
var vec__27721_27953 = G__27717_27952__$1;
var seq__27722_27954 = cljs.core.seq(vec__27721_27953);
var first__27723_27955 = cljs.core.first(seq__27722_27954);
var seq__27722_27956__$1 = cljs.core.next(seq__27722_27954);
var k_27957__$1 = first__27723_27955;
var first__27723_27958__$1 = cljs.core.first(seq__27722_27956__$1);
var seq__27722_27959__$2 = cljs.core.next(seq__27722_27956__$1);
var v_27960__$1 = first__27723_27958__$1;
var keyvals_27961__$2 = seq__27722_27959__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_27957__$1)] = v_27960__$1);

if(keyvals_27961__$2){
var G__27962 = keyvals_27961__$2;
G__27717_27952__$1 = G__27962;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq27708){
var G__27709 = cljs.core.first(seq27708);
var seq27708__$1 = cljs.core.next(seq27708);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27709,seq27708__$1);
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
var G__27732 = arguments.length;
switch (G__27732) {
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
var obj27740 = obj;
var k27741 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27742 = obj27740;
return (((!((obj27742 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27741,obj27742)));
})()){
return (obj27740[k27741]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj27743 = obj;
var k27744 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27747 = obj27743;
return (((!((obj27747 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27744,obj27747)));
})()){
return (obj27743[k27744]);
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
var G__27752 = arguments.length;
switch (G__27752) {
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
var obj27771 = self__.obj;
var k27772 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27775 = obj27771;
return (((!((obj27775 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27772,obj27775)));
})()){
return (obj27771[k27772]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj27781 = self__.obj;
var k27782 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27783 = obj27781;
return (((!((obj27783 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27782,obj27783)));
})()){
return (obj27781[k27782]);
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
var len__4736__auto___27987 = arguments.length;
var i__4737__auto___27988 = (0);
while(true){
if((i__4737__auto___27988 < len__4736__auto___27987)){
args__4742__auto__.push((arguments[i__4737__auto___27988]));

var G__27989 = (i__4737__auto___27988 + (1));
i__4737__auto___27988 = G__27989;
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
var G__27809 = keyvals;
var vec__27810 = G__27809;
var seq__27811 = cljs.core.seq(vec__27810);
var first__27812 = cljs.core.first(seq__27811);
var seq__27811__$1 = cljs.core.next(seq__27811);
var k = first__27812;
var first__27812__$1 = cljs.core.first(seq__27811__$1);
var seq__27811__$2 = cljs.core.next(seq__27811__$1);
var v = first__27812__$1;
var kvs = seq__27811__$2;
var G__27809__$1 = G__27809;
while(true){
var vec__27814 = G__27809__$1;
var seq__27815 = cljs.core.seq(vec__27814);
var first__27816 = cljs.core.first(seq__27815);
var seq__27815__$1 = cljs.core.next(seq__27815);
var k__$1 = first__27816;
var first__27816__$1 = cljs.core.first(seq__27815__$1);
var seq__27815__$2 = cljs.core.next(seq__27815__$1);
var v__$1 = first__27816__$1;
var kvs__$1 = seq__27815__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__27997 = kvs__$1;
G__27809__$1 = G__27997;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq27798){
var G__27799 = cljs.core.first(seq27798);
var seq27798__$1 = cljs.core.next(seq27798);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27799,seq27798__$1);
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
var len__4736__auto___27999 = arguments.length;
var i__4737__auto___28000 = (0);
while(true){
if((i__4737__auto___28000 < len__4736__auto___27999)){
args__4742__auto__.push((arguments[i__4737__auto___28000]));

var G__28002 = (i__4737__auto___28000 + (1));
i__4737__auto___28000 = G__28002;
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
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq27824){
var G__27825 = cljs.core.first(seq27824);
var seq27824__$1 = cljs.core.next(seq27824);
var G__27826 = cljs.core.first(seq27824__$1);
var seq27824__$2 = cljs.core.next(seq27824__$1);
var G__27827 = cljs.core.first(seq27824__$2);
var seq27824__$3 = cljs.core.next(seq27824__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27825,G__27826,G__27827,seq27824__$3);
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
var len__4736__auto___28006 = arguments.length;
var i__4737__auto___28007 = (0);
while(true){
if((i__4737__auto___28007 < len__4736__auto___28006)){
args__4742__auto__.push((arguments[i__4737__auto___28007]));

var G__28012 = (i__4737__auto___28007 + (1));
i__4737__auto___28007 = G__28012;
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
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq27835){
var G__27836 = cljs.core.first(seq27835);
var seq27835__$1 = cljs.core.next(seq27835);
var G__27837 = cljs.core.first(seq27835__$1);
var seq27835__$2 = cljs.core.next(seq27835__$1);
var G__27838 = cljs.core.first(seq27835__$2);
var seq27835__$3 = cljs.core.next(seq27835__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27836,G__27837,G__27838,seq27835__$3);
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
var G__27843 = arguments.length;
switch (G__27843) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___28014 = arguments.length;
var i__4737__auto___28015 = (0);
while(true){
if((i__4737__auto___28015 < len__4736__auto___28014)){
args_arr__4757__auto__.push((arguments[i__4737__auto___28015]));

var G__28016 = (i__4737__auto___28015 + (1));
i__4737__auto___28015 = G__28016;
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
var seq__27848_28017 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__27849_28018 = null;
var count__27850_28019 = (0);
var i__27851_28020 = (0);
while(true){
if((i__27851_28020 < count__27850_28019)){
var k_28021 = chunk__27849_28018.cljs$core$IIndexed$_nth$arity$2(null,i__27851_28020);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_28021,applied_science.js_interop.unchecked_get(x,k_28021)], 0));


var G__28022 = seq__27848_28017;
var G__28023 = chunk__27849_28018;
var G__28024 = count__27850_28019;
var G__28025 = (i__27851_28020 + (1));
seq__27848_28017 = G__28022;
chunk__27849_28018 = G__28023;
count__27850_28019 = G__28024;
i__27851_28020 = G__28025;
continue;
} else {
var temp__5735__auto___28026 = cljs.core.seq(seq__27848_28017);
if(temp__5735__auto___28026){
var seq__27848_28027__$1 = temp__5735__auto___28026;
if(cljs.core.chunked_seq_QMARK_(seq__27848_28027__$1)){
var c__4556__auto___28028 = cljs.core.chunk_first(seq__27848_28027__$1);
var G__28029 = cljs.core.chunk_rest(seq__27848_28027__$1);
var G__28030 = c__4556__auto___28028;
var G__28031 = cljs.core.count(c__4556__auto___28028);
var G__28032 = (0);
seq__27848_28017 = G__28029;
chunk__27849_28018 = G__28030;
count__27850_28019 = G__28031;
i__27851_28020 = G__28032;
continue;
} else {
var k_28033 = cljs.core.first(seq__27848_28027__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_28033,applied_science.js_interop.unchecked_get(x,k_28033)], 0));


var G__28034 = cljs.core.next(seq__27848_28027__$1);
var G__28035 = null;
var G__28036 = (0);
var G__28037 = (0);
seq__27848_28017 = G__28034;
chunk__27849_28018 = G__28035;
count__27850_28019 = G__28036;
i__27851_28020 = G__28037;
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
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq27840){
var G__27841 = cljs.core.first(seq27840);
var seq27840__$1 = cljs.core.next(seq27840);
var G__27842 = cljs.core.first(seq27840__$1);
var seq27840__$2 = cljs.core.next(seq27840__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27841,G__27842,seq27840__$2);
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
var G__27858 = array;
G__27858.push(x);

return G__27858;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__27859 = array;
G__27859.unshift(x);

return G__27859;
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
var len__4736__auto___28038 = arguments.length;
var i__4737__auto___28039 = (0);
while(true){
if((i__4737__auto___28039 < len__4736__auto___28038)){
args__4742__auto__.push((arguments[i__4737__auto___28039]));

var G__28042 = (i__4737__auto___28039 + (1));
i__4737__auto___28039 = G__28042;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj27866 = obj;
var k27867 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27868 = obj27866;
return (((!((obj27868 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27867,obj27868)));
})()){
return (obj27866[k27867]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq27860){
var G__27861 = cljs.core.first(seq27860);
var seq27860__$1 = cljs.core.next(seq27860);
var G__27862 = cljs.core.first(seq27860__$1);
var seq27860__$2 = cljs.core.next(seq27860__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27861,G__27862,seq27860__$2);
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
return (function (){var obj27871 = obj;
var k27872 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj27873 = obj27871;
return (((!((obj27873 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k27872,obj27873)));
})()){
return (obj27871[k27872]);
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
var len__4736__auto___28048 = arguments.length;
var i__4737__auto___28049 = (0);
while(true){
if((i__4737__auto___28049 < len__4736__auto___28048)){
args__4742__auto__.push((arguments[i__4737__auto___28049]));

var G__28050 = (i__4737__auto___28049 + (1));
i__4737__auto___28049 = G__28050;
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
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq27876){
var G__27877 = cljs.core.first(seq27876);
var seq27876__$1 = cljs.core.next(seq27876);
var G__27878 = cljs.core.first(seq27876__$1);
var seq27876__$2 = cljs.core.next(seq27876__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27877,G__27878,seq27876__$2);
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
var len__4736__auto___28062 = arguments.length;
var i__4737__auto___28063 = (0);
while(true){
if((i__4737__auto___28063 < len__4736__auto___28062)){
args__4742__auto__.push((arguments[i__4737__auto___28063]));

var G__28064 = (i__4737__auto___28063 + (1));
i__4737__auto___28063 = G__28064;
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
var seq__27886_28069 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__27887_28070 = null;
var count__27888_28071 = (0);
var i__27889_28072 = (0);
while(true){
if((i__27889_28072 < count__27888_28071)){
var vec__27907_28077 = chunk__27887_28070.cljs$core$IIndexed$_nth$arity$2(null,i__27889_28072);
var k_28078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27907_28077,(0),null);
var v_28079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27907_28077,(1),null);
var obj27911_28084 = obj;
var obj27912_28085 = (((!((obj27911_28084 == null))))?obj27911_28084:({}));
(obj27912_28085[applied_science.js_interop.impl.wrap_key(k_28078)] = v_28079);



var G__28091 = seq__27886_28069;
var G__28092 = chunk__27887_28070;
var G__28093 = count__27888_28071;
var G__28094 = (i__27889_28072 + (1));
seq__27886_28069 = G__28091;
chunk__27887_28070 = G__28092;
count__27888_28071 = G__28093;
i__27889_28072 = G__28094;
continue;
} else {
var temp__5735__auto___28095 = cljs.core.seq(seq__27886_28069);
if(temp__5735__auto___28095){
var seq__27886_28096__$1 = temp__5735__auto___28095;
if(cljs.core.chunked_seq_QMARK_(seq__27886_28096__$1)){
var c__4556__auto___28097 = cljs.core.chunk_first(seq__27886_28096__$1);
var G__28099 = cljs.core.chunk_rest(seq__27886_28096__$1);
var G__28100 = c__4556__auto___28097;
var G__28101 = cljs.core.count(c__4556__auto___28097);
var G__28102 = (0);
seq__27886_28069 = G__28099;
chunk__27887_28070 = G__28100;
count__27888_28071 = G__28101;
i__27889_28072 = G__28102;
continue;
} else {
var vec__27918_28103 = cljs.core.first(seq__27886_28096__$1);
var k_28104 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27918_28103,(0),null);
var v_28105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27918_28103,(1),null);
var obj27921_28106 = obj;
var obj27922_28107 = (((!((obj27921_28106 == null))))?obj27921_28106:({}));
(obj27922_28107[applied_science.js_interop.impl.wrap_key(k_28104)] = v_28105);



var G__28111 = cljs.core.next(seq__27886_28096__$1);
var G__28112 = null;
var G__28113 = (0);
var G__28114 = (0);
seq__27886_28069 = G__28111;
chunk__27887_28070 = G__28112;
count__27888_28071 = G__28113;
i__27889_28072 = G__28114;
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
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq27883){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27883));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
