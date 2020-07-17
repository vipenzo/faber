goog.provide('thi.ng.strf.core');
thi.ng.strf.core.parse_int = (function thi$ng$strf$core$parse_int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45666 = arguments.length;
var i__4737__auto___45667 = (0);
while(true){
if((i__4737__auto___45667 < len__4736__auto___45666)){
args__4742__auto__.push((arguments[i__4737__auto___45667]));

var G__45668 = (i__4737__auto___45667 + (1));
i__4737__auto___45667 = G__45668;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__45583){
var vec__45584 = p__45583;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45584,(0),null);
var x_SINGLEQUOTE_ = parseInt(x,radix);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
}));

(thi.ng.strf.core.parse_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.strf.core.parse_int.cljs$lang$applyTo = (function (seq45580){
var G__45581 = cljs.core.first(seq45580);
var seq45580__$1 = cljs.core.next(seq45580);
var G__45582 = cljs.core.first(seq45580__$1);
var seq45580__$2 = cljs.core.next(seq45580__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45581,G__45582,seq45580__$2);
}));

thi.ng.strf.core.parse_long = (function thi$ng$strf$core$parse_long(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45669 = arguments.length;
var i__4737__auto___45670 = (0);
while(true){
if((i__4737__auto___45670 < len__4736__auto___45669)){
args__4742__auto__.push((arguments[i__4737__auto___45670]));

var G__45671 = (i__4737__auto___45670 + (1));
i__4737__auto___45670 = G__45671;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(thi.ng.strf.core.parse_long.cljs$core$IFn$_invoke$arity$variadic = (function (x,radix,p__45590){
var vec__45591 = p__45590;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45591,(0),null);
return thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(x,radix,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}));

(thi.ng.strf.core.parse_long.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(thi.ng.strf.core.parse_long.cljs$lang$applyTo = (function (seq45587){
var G__45588 = cljs.core.first(seq45587);
var seq45587__$1 = cljs.core.next(seq45587);
var G__45589 = cljs.core.first(seq45587__$1);
var seq45587__$2 = cljs.core.next(seq45587__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45588,G__45589,seq45587__$2);
}));

thi.ng.strf.core.parse_float = (function thi$ng$strf$core$parse_float(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45672 = arguments.length;
var i__4737__auto___45673 = (0);
while(true){
if((i__4737__auto___45673 < len__4736__auto___45672)){
args__4742__auto__.push((arguments[i__4737__auto___45673]));

var G__45674 = (i__4737__auto___45673 + (1));
i__4737__auto___45673 = G__45674;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__45596){
var vec__45597 = p__45596;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45597,(0),null);
var x_SINGLEQUOTE_ = parseFloat(x);
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return default$;
} else {
return x_SINGLEQUOTE_;
}
}));

(thi.ng.strf.core.parse_float.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.parse_float.cljs$lang$applyTo = (function (seq45594){
var G__45595 = cljs.core.first(seq45594);
var seq45594__$1 = cljs.core.next(seq45594);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45595,seq45594__$1);
}));

thi.ng.strf.core.parse_double = (function thi$ng$strf$core$parse_double(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45675 = arguments.length;
var i__4737__auto___45676 = (0);
while(true){
if((i__4737__auto___45676 < len__4736__auto___45675)){
args__4742__auto__.push((arguments[i__4737__auto___45676]));

var G__45677 = (i__4737__auto___45676 + (1));
i__4737__auto___45676 = G__45677;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(thi.ng.strf.core.parse_double.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__45603){
var vec__45604 = p__45603;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45604,(0),null);
return thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default$], 0));
}));

(thi.ng.strf.core.parse_double.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.parse_double.cljs$lang$applyTo = (function (seq45600){
var G__45601 = cljs.core.first(seq45600);
var seq45600__$1 = cljs.core.next(seq45600);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45601,seq45600__$1);
}));

thi.ng.strf.core.parse_boolean = (function thi$ng$strf$core$parse_boolean(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",clojure.string.lower_case(x));
});
thi.ng.strf.core.int$ = cljs.core.int$;
thi.ng.strf.core.long$ = thi.ng.strf.core.int$;
thi.ng.strf.core.float$ = cljs.core.memoize((function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.double$ = cljs.core.memoize((function (prec){
return (function (x){
return (new Number(x)).toFixed(prec);
});
}));
thi.ng.strf.core.pad_left = cljs.core.memoize((function (len,fill){
var fill__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,fill));
return (function (x){
var l = cljs.core.count(x);
if((l < len)){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fill__$1,(0),(len - l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return x;
}
});
}));
thi.ng.strf.core.pad_right = cljs.core.memoize((function (len,fill){
var fill__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,fill));
return (function (x){
var l = cljs.core.count(x);
if((l < len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fill__$1,(0),(len - l))].join('');
} else {
return x;
}
});
}));
thi.ng.strf.core.hex = cljs.core.memoize((function (len){
var pad = thi.ng.strf.core.pad_left(len,"0");
return (function (x){
var G__45610 = (new Number((thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1(x) : thi.ng.strf.core.int$.call(null,x)))).toString((16));
return (pad.cljs$core$IFn$_invoke$arity$1 ? pad.cljs$core$IFn$_invoke$arity$1(G__45610) : pad.call(null,G__45610));
});
}));
thi.ng.strf.core.trunc_left = (function thi$ng$strf$core$trunc_left(len){
return (function (x){
var l = cljs.core.count(x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x,(0),len);
}
});
});
thi.ng.strf.core.trunc_right = (function thi$ng$strf$core$trunc_right(len){
return (function (x){
var l = cljs.core.count(x);
if((l <= len)){
return x;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,(l - len));
}
});
});
thi.ng.strf.core.format = (function thi$ng$strf$core$format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___45678 = arguments.length;
var i__4737__auto___45679 = (0);
while(true){
if((i__4737__auto___45679 < len__4736__auto___45678)){
args__4742__auto__.push((arguments[i__4737__auto___45679]));

var G__45680 = (i__4737__auto___45679 + (1));
i__4737__auto___45679 = G__45680;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var s = cljs.core.PersistentVector.EMPTY;
var fmt__$1 = fmt;
var args__$1 = args;
while(true){
var temp__5733__auto__ = cljs.core.first(fmt__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
if(typeof f === 'string'){
var G__45681 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,f);
var G__45682 = cljs.core.next(fmt__$1);
var G__45683 = args__$1;
s = G__45681;
fmt__$1 = G__45682;
args__$1 = G__45683;
continue;
} else {
var G__45684 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,(function (){var G__45629 = cljs.core.first(args__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45629) : f.call(null,G__45629));
})());
var G__45685 = cljs.core.next(fmt__$1);
var G__45686 = cljs.core.next(args__$1);
s = G__45684;
fmt__$1 = G__45685;
args__$1 = G__45686;
continue;
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,s);
}
break;
}
}));

(thi.ng.strf.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(thi.ng.strf.core.format.cljs$lang$applyTo = (function (seq45619){
var G__45620 = cljs.core.first(seq45619);
var seq45619__$1 = cljs.core.next(seq45619);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45620,seq45619__$1);
}));

thi.ng.strf.core.date_fields = (function thi$ng$strf$core$date_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate()], null)], null);
});
thi.ng.strf.core.time_fields = (function thi$ng$strf$core$time_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.datetime_fields = (function thi$ng$strf$core$datetime_fields(d){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.getFullYear(),(d.getMonth() + (1)),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds()], null)], null);
});
thi.ng.strf.core.date_formatters = (function (){var d2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(thi.ng.strf.core.pad_left((2),"0"),cljs.core.str);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"yyyy-mm-dd","yyyy-mm-dd",1870000488),(function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2], null),thi.ng.strf.core.date_fields(d));
}),new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629),(function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,"-",d2,"-",d2," ",d2,":",d2,":",d2], null),thi.ng.strf.core.datetime_fields(d));
}),new cljs.core.Keyword(null,"yyyymmdd-hhmmss","yyyymmdd-hhmmss",1691759860),(function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str,d2,d2,"-",d2,d2,d2], null),thi.ng.strf.core.datetime_fields(d));
}),new cljs.core.Keyword(null,"dd-mm-yyyy","dd-mm-yyyy",-705729643),(function (d){
var vec__45640 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45640,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45640,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45640,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d__$1,m,y], 0));
}),new cljs.core.Keyword(null,"mm-dd-yyyy","mm-dd-yyyy",-911118576),(function (d){
var vec__45643 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45643,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45643,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45643,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.str], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,d__$1,y], 0));
}),new cljs.core.Keyword(null,"dd-mm-yy","dd-mm-yy",-664945286),(function (d){
var vec__45646 = thi.ng.strf.core.date_fields(d);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45646,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45646,(1),null);
var d__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45646,(2),null);
return thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,"/",d2,"/",cljs.core.comp.cljs$core$IFn$_invoke$arity$2(d2,(function (p1__45638_SHARP_){
return cljs.core.mod(p1__45638_SHARP_,(100));
}))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d__$1,m,y], 0));
}),new cljs.core.Keyword(null,"hh-mm-ss","hh-mm-ss",1000840174),(function (d){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(thi.ng.strf.core.format,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d2,":",d2,":",d2], null),thi.ng.strf.core.time_fields(d));
})], null);
})();
thi.ng.strf.core.format_date = (function thi$ng$strf$core$format_date(var_args){
var G__45652 = arguments.length;
switch (G__45652) {
case 1:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$1 = (function (d){
var fexpr__45654 = (thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629)) : thi.ng.strf.core.date_formatters.call(null,new cljs.core.Keyword(null,"yyyy-mm-dd-hh-mm-ss","yyyy-mm-dd-hh-mm-ss",515818629)));
return (fexpr__45654.cljs$core$IFn$_invoke$arity$1 ? fexpr__45654.cljs$core$IFn$_invoke$arity$1(d) : fexpr__45654.call(null,d));
}));

(thi.ng.strf.core.format_date.cljs$core$IFn$_invoke$arity$2 = (function (fmt,d){
if(cljs.core.fn_QMARK_(fmt)){
return (fmt.cljs$core$IFn$_invoke$arity$1 ? fmt.cljs$core$IFn$_invoke$arity$1(d) : fmt.call(null,d));
} else {
var fexpr__45655 = (thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.date_formatters.cljs$core$IFn$_invoke$arity$1(fmt) : thi.ng.strf.core.date_formatters.call(null,fmt));
return (fexpr__45655.cljs$core$IFn$_invoke$arity$1 ? fexpr__45655.cljs$core$IFn$_invoke$arity$1(d) : fexpr__45655.call(null,d));
}
}));

(thi.ng.strf.core.format_date.cljs$lang$maxFixedArity = 2);

thi.ng.strf.core.now = (function thi$ng$strf$core$now(){
return (new Date());
});
thi.ng.strf.core.timestamp = (function thi$ng$strf$core$timestamp(){
return (new Date()).getTime();
});
thi.ng.strf.core.format_16bit_hex = thi.ng.strf.core.pad_left((4),"0");
thi.ng.strf.core.rand_bits = (function thi$ng$strf$core$rand_bits(bits){
var G__45656 = (cljs.core.rand.cljs$core$IFn$_invoke$arity$0() * ((1) << bits));
return (thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.int$.cljs$core$IFn$_invoke$arity$1(G__45656) : thi.ng.strf.core.int$.call(null,G__45656));
});
thi.ng.strf.core.rand_bits_hex = (function thi$ng$strf$core$rand_bits_hex(bits){
var G__45658 = thi.ng.strf.core.rand_bits(bits).toString((16));
var fexpr__45657 = thi.ng.strf.core.pad_left(Math.ceil((bits / (4))),"0");
return (fexpr__45657.cljs$core$IFn$_invoke$arity$1 ? fexpr__45657.cljs$core$IFn$_invoke$arity$1(G__45658) : fexpr__45657.call(null,G__45658));
});
thi.ng.strf.core.rand_16bits_hex = (function thi$ng$strf$core$rand_16bits_hex(){
var G__45659 = cljs.core.rand_int((65536)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__45659) : thi.ng.strf.core.format_16bit_hex.call(null,G__45659));
});
thi.ng.strf.core.new_uuid = (function thi$ng$strf$core$new_uuid(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__45662 = ((thi.ng.strf.core.rand_bits((16)) & (4095)) | (16384)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__45662) : thi.ng.strf.core.format_16bit_hex.call(null,G__45662));
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__45663 = ((thi.ng.strf.core.rand_bits((16)) & (16383)) | (32768)).toString((16));
return (thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1 ? thi.ng.strf.core.format_16bit_hex.cljs$core$IFn$_invoke$arity$1(G__45663) : thi.ng.strf.core.format_16bit_hex.call(null,G__45663));
})()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.rand_16bits_hex())].join('');
});
thi.ng.strf.core.html_entities = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
thi.ng.strf.core.as_str = (function thi$ng$strf$core$as_str(x){
if((((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
return cljs.core.name(x);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
});
thi.ng.strf.core.escape_html = (function thi$ng$strf$core$escape_html(x){
return clojure.string.escape(thi.ng.strf.core.as_str(x),thi.ng.strf.core.html_entities);
});

//# sourceMappingURL=thi.ng.strf.core.js.map
