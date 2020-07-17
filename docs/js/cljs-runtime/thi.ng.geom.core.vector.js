goog.provide('thi.ng.geom.core.vector');









/**
* @constructor
 * @implements {thi.ng.geom.core.PScale}
 * @implements {thi.ng.geom.core.PHeading}
 * @implements {thi.ng.geom.core.PMagnitude}
 * @implements {cljs.core.IIndexed}
 * @implements {thi.ng.geom.core.PDistance}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.geom.core.PMathOps}
 * @implements {cljs.core.IFn}
 * @implements {thi.ng.geom.core.PNormal}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.geom.core.PTranslate}
 * @implements {thi.ng.geom.core.PMinMax}
 * @implements {thi.ng.geom.core.PLimit}
 * @implements {thi.ng.geom.core.PVectorReduce}
 * @implements {thi.ng.geom.core.PPolar}
 * @implements {thi.ng.geom.core.PInterpolate}
 * @implements {thi.ng.geom.core.PTransform}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.core.PClear}
 * @implements {thi.ng.geom.core.PDotProduct}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.geom.core.PNormalize}
 * @implements {thi.ng.geom.core.PBuffered}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {thi.ng.geom.core.PRotate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.geom.core.PCrossProduct}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.geom.core.PReflect}
 * @implements {thi.ng.geom.core.PMutableMathOps}
 * @implements {thi.ng.math.core.PDeltaEquals}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.PInvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.core.vector.Vec2 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
});
(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector(m,___$1);
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((2)));
var G__46356 = self__.buf;
var G__46357 = (G__46356[(0)]);
var G__46358 = (G__46356[(1)]);
(b[(0)] = ((G__46357 * c) - (G__46358 * s)));

(b[(1)] = ((G__46357 * s) + (G__46358 * c)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(0)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(1)])),"]"].join('');
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__46383 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46384 = v.buf;
return (((G__46383[(0)]) * (G__46384[(0)])) + ((G__46383[(1)]) * (G__46384[(1)])));
} else {
return (((G__46383[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__46383[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__46389 = self__.buf;
var G__46390 = (G__46389[(0)]);
var G__46391 = (G__46389[(1)]);
var l = Math.sqrt(((G__46390 * G__46390) + (G__46391 * G__46391)));
if((l > (0))){
var b = (new Float32Array((2)));
(b[(0)] = (G__46390 / l));

(b[(1)] = (G__46391 / l));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__46394 = self__.buf;
var G__46395 = (G__46394[(0)]);
var G__46396 = (G__46394[(1)]);
var l = Math.sqrt(((G__46395 * G__46395) + (G__46396 * G__46396)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((2)));
(b[(0)] = (G__46395 * l__$1));

(b[(1)] = (G__46396 * l__$1));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
return ___$1;
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_(1.0,___$1.thi$ng$geom$core$PMagnitude$mag_squared$arity$1(null));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__46399 = self__.buf;
var G__46401 = (G__46399[(0)]);
var G__46402 = (G__46399[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46400 = v.buf;
var G__46403 = (G__46400[(0)]);
var G__46404 = (G__46400[(1)]);
var d = (((G__46401 * G__46403) + (G__46402 * G__46404)) + (2));
(b[(0)] = ((G__46403 * d) - G__46401));

(b[(1)] = ((G__46404 * d) - G__46402));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
var G__46403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__46404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var d = (((G__46401 * G__46403) + (G__46402 * G__46404)) + (2));
(b[(0)] = ((G__46403 * d) - G__46401));

(b[(1)] = ((G__46404 * d) - G__46402));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__46406 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46407 = v.buf;
return (((G__46406[(0)]) * (G__46407[(1)])) - ((G__46406[(1)]) * (G__46407[(0)])));
} else {
return (((G__46406[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) - ((G__46406[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_(n);
}
} else {
return null;
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (2))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),null);
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (2);
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(1)]);
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)])], null),self__._meta);
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__46430_47559 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46431_47560 = v.buf;
(self__.buf[(0)] = ((G__46430_47559[(0)]) - (G__46431_47560[(0)])));

(self__.buf[(1)] = ((G__46430_47559[(1)]) - (G__46431_47560[(1)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__46430_47559[(0)]) - v));

(self__.buf[(1)] = ((G__46430_47559[(1)]) - v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__46430_47559[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__46430_47559[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__46440_47562 = typeof v1 === 'number';
var G__46441_47563 = typeof v2 === 'number';
if(((G__46440_47562)?G__46441_47563:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) - v1));

(self__.buf[(1)] = ((self__.buf[(1)]) - v2));
} else {
var G__46442_47564 = (((!(G__46440_47562)))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46443_47565 = (((!(G__46441_47563)))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46434_47566 = (cljs.core.truth_(G__46442_47564)?v1.buf:null);
var G__46435_47567 = (cljs.core.truth_(G__46443_47565)?v2.buf:null);
var G__46436_47568 = (cljs.core.truth_(G__46442_47564)?(G__46434_47566[(0)]):((G__46440_47562)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__46437_47569 = (cljs.core.truth_(G__46442_47564)?(G__46434_47566[(1)]):((G__46440_47562)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__46438_47570 = (cljs.core.truth_(G__46443_47565)?(G__46435_47567[(0)]):((G__46441_47563)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__46439_47571 = (cljs.core.truth_(G__46443_47565)?(G__46435_47567[(1)]):((G__46441_47563)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) - G__46436_47568) - G__46438_47570));

(self__.buf[(1)] = (((self__.buf[(1)]) - G__46437_47569) - G__46439_47571));
}

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__46451_47576 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46452_47577 = v.buf;
(self__.buf[(0)] = ((G__46451_47576[(0)]) * (G__46452_47577[(0)])));

(self__.buf[(1)] = ((G__46451_47576[(1)]) * (G__46452_47577[(1)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__46451_47576[(0)]) * v));

(self__.buf[(1)] = ((G__46451_47576[(1)]) * v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__46451_47576[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__46451_47576[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__46461_47578 = typeof v1 === 'number';
var G__46462_47579 = typeof v2 === 'number';
if(((G__46461_47578)?G__46462_47579:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) * v1));

(self__.buf[(1)] = ((self__.buf[(1)]) * v2));
} else {
var G__46463_47580 = (((!(G__46461_47578)))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46464_47581 = (((!(G__46462_47579)))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46455_47582 = (cljs.core.truth_(G__46463_47580)?v1.buf:null);
var G__46456_47583 = (cljs.core.truth_(G__46464_47581)?v2.buf:null);
var G__46457_47584 = (cljs.core.truth_(G__46463_47580)?(G__46455_47582[(0)]):((G__46461_47578)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__46458_47585 = (cljs.core.truth_(G__46463_47580)?(G__46455_47582[(1)]):((G__46461_47578)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__46459_47586 = (cljs.core.truth_(G__46464_47581)?(G__46456_47583[(0)]):((G__46462_47579)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__46460_47587 = (cljs.core.truth_(G__46464_47581)?(G__46456_47583[(1)]):((G__46462_47579)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) * G__46457_47584) * G__46459_47586));

(self__.buf[(1)] = (((self__.buf[(1)]) * G__46458_47585) * G__46460_47587));
}

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__46478_47589 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__46479_47590 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__46480_47591 = (((!(G__46478_47589)))?typeof a === 'number':null);
var G__46481_47592 = (((!(G__46479_47590)))?typeof b === 'number':null);
var G__46469_47593 = self__.buf;
var G__46470_47594 = ((G__46478_47589)?a.buf:null);
var G__46471_47595 = ((G__46479_47590)?b.buf:null);
var G__46472_47596 = (G__46469_47593[(0)]);
var G__46473_47597 = (G__46469_47593[(1)]);
var G__46474_47598 = ((G__46478_47589)?(G__46470_47594[(0)]):(cljs.core.truth_(G__46480_47591)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__46475_47599 = ((G__46478_47589)?(G__46470_47594[(1)]):(cljs.core.truth_(G__46480_47591)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__46476_47600 = ((G__46479_47590)?(G__46471_47595[(0)]):(cljs.core.truth_(G__46481_47592)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__46477_47601 = ((G__46479_47590)?(G__46471_47595[(1)]):(cljs.core.truth_(G__46481_47592)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(self__.buf[(0)] = ((G__46472_47596 - G__46474_47598) * G__46476_47600));

(self__.buf[(1)] = ((G__46473_47597 - G__46475_47599) * G__46477_47601));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__46493_47603 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__46494_47604 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__46495_47605 = (((!(G__46493_47603)))?typeof a === 'number':null);
var G__46496_47606 = (((!(G__46494_47604)))?typeof b === 'number':null);
var G__46484_47607 = self__.buf;
var G__46485_47608 = ((G__46493_47603)?a.buf:null);
var G__46486_47609 = ((G__46494_47604)?b.buf:null);
var G__46487_47610 = (G__46484_47607[(0)]);
var G__46488_47611 = (G__46484_47607[(1)]);
var G__46489_47612 = ((G__46493_47603)?(G__46485_47608[(0)]):(cljs.core.truth_(G__46495_47605)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__46490_47613 = ((G__46493_47603)?(G__46485_47608[(1)]):(cljs.core.truth_(G__46495_47605)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__46491_47614 = ((G__46494_47604)?(G__46486_47609[(0)]):(cljs.core.truth_(G__46496_47606)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__46492_47615 = ((G__46494_47604)?(G__46486_47609[(1)]):(cljs.core.truth_(G__46496_47606)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(self__.buf[(0)] = ((G__46487_47610 * G__46489_47612) - G__46491_47614));

(self__.buf[(1)] = ((G__46488_47611 * G__46490_47613) - G__46492_47615));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (function (){var G__46497 = (self__.buf[(0)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__46497) : thi.ng.math.core.abs.call(null,G__46497));
})());

(self__.buf[(1)] = (function (){var G__46498 = (self__.buf[(1)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__46498) : thi.ng.math.core.abs.call(null,G__46498));
})());

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__46509_47618 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__46510_47619 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__46511_47620 = (((!(G__46509_47618)))?typeof a === 'number':null);
var G__46512_47621 = (((!(G__46510_47619)))?typeof b === 'number':null);
var G__46500_47622 = self__.buf;
var G__46501_47623 = ((G__46509_47618)?a.buf:null);
var G__46502_47624 = ((G__46510_47619)?b.buf:null);
var G__46503_47625 = (G__46500_47622[(0)]);
var G__46504_47626 = (G__46500_47622[(1)]);
var G__46505_47627 = ((G__46509_47618)?(G__46501_47623[(0)]):(cljs.core.truth_(G__46511_47620)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__46506_47628 = ((G__46509_47618)?(G__46501_47623[(1)]):(cljs.core.truth_(G__46511_47620)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__46507_47629 = ((G__46510_47619)?(G__46502_47624[(0)]):(cljs.core.truth_(G__46512_47621)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__46508_47630 = ((G__46510_47619)?(G__46502_47624[(1)]):(cljs.core.truth_(G__46512_47621)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(self__.buf[(0)] = ((G__46503_47625 * G__46505_47627) + G__46507_47629));

(self__.buf[(1)] = ((G__46504_47626 * G__46506_47628) + G__46508_47630));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__46514_47631 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46515_47632 = v.buf;
(self__.buf[(0)] = ((G__46514_47631[(0)]) / (G__46515_47632[(0)])));

(self__.buf[(1)] = ((G__46514_47631[(1)]) / (G__46515_47632[(1)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__46514_47631[(0)]) / v));

(self__.buf[(1)] = ((G__46514_47631[(1)]) / v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__46514_47631[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__46514_47631[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__46523_47639 = typeof v1 === 'number';
var G__46524_47640 = typeof v2 === 'number';
if(((G__46523_47639)?G__46524_47640:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) / v1));

(self__.buf[(1)] = ((self__.buf[(1)]) / v2));
} else {
var G__46525_47641 = (((!(G__46523_47639)))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46526_47642 = (((!(G__46524_47640)))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46517_47643 = (cljs.core.truth_(G__46525_47641)?v1.buf:null);
var G__46518_47644 = (cljs.core.truth_(G__46526_47642)?v2.buf:null);
var G__46519_47645 = (cljs.core.truth_(G__46525_47641)?(G__46517_47643[(0)]):((G__46523_47639)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__46520_47646 = (cljs.core.truth_(G__46525_47641)?(G__46517_47643[(1)]):((G__46523_47639)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__46521_47647 = (cljs.core.truth_(G__46526_47642)?(G__46518_47644[(0)]):((G__46524_47640)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__46522_47648 = (cljs.core.truth_(G__46526_47642)?(G__46518_47644[(1)]):((G__46524_47640)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) / G__46519_47645) / G__46521_47647));

(self__.buf[(1)] = (((self__.buf[(1)]) / G__46520_47646) / G__46522_47648));
}

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__46529_47653 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46530_47654 = v.buf;
(self__.buf[(0)] = ((G__46529_47653[(0)]) + (G__46530_47654[(0)])));

(self__.buf[(1)] = ((G__46529_47653[(1)]) + (G__46530_47654[(1)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__46529_47653[(0)]) + v));

(self__.buf[(1)] = ((G__46529_47653[(1)]) + v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__46529_47653[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__46529_47653[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__46538_47655 = typeof v1 === 'number';
var G__46539_47656 = typeof v2 === 'number';
if(((G__46538_47655)?G__46539_47656:false)){
(self__.buf[(0)] = ((self__.buf[(0)]) + v1));

(self__.buf[(1)] = ((self__.buf[(1)]) + v2));
} else {
var G__46540_47657 = (((!(G__46538_47655)))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46541_47658 = (((!(G__46539_47656)))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46532_47659 = (cljs.core.truth_(G__46540_47657)?v1.buf:null);
var G__46533_47660 = (cljs.core.truth_(G__46541_47658)?v2.buf:null);
var G__46534_47661 = (cljs.core.truth_(G__46540_47657)?(G__46532_47659[(0)]):((G__46538_47655)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__46535_47662 = (cljs.core.truth_(G__46540_47657)?(G__46532_47659[(1)]):((G__46538_47655)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__46536_47663 = (cljs.core.truth_(G__46541_47658)?(G__46533_47660[(0)]):((G__46539_47656)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__46537_47664 = (cljs.core.truth_(G__46541_47658)?(G__46533_47660[(1)]):((G__46539_47656)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(self__.buf[(0)] = (((self__.buf[(0)]) + G__46534_47661) + G__46536_47663));

(self__.buf[(1)] = (((self__.buf[(1)]) + G__46535_47662) + G__46537_47664));
}

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__46554_47673 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__46555_47674 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__46556_47675 = (((!(G__46554_47673)))?typeof a === 'number':null);
var G__46557_47676 = (((!(G__46555_47674)))?typeof b === 'number':null);
var G__46545_47677 = self__.buf;
var G__46546_47678 = ((G__46554_47673)?a.buf:null);
var G__46547_47679 = ((G__46555_47674)?b.buf:null);
var G__46548_47680 = (G__46545_47677[(0)]);
var G__46549_47681 = (G__46545_47677[(1)]);
var G__46550_47682 = ((G__46554_47673)?(G__46546_47678[(0)]):(cljs.core.truth_(G__46556_47675)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__46551_47683 = ((G__46554_47673)?(G__46546_47678[(1)]):(cljs.core.truth_(G__46556_47675)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__46552_47684 = ((G__46555_47674)?(G__46547_47679[(0)]):(cljs.core.truth_(G__46557_47676)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__46553_47685 = ((G__46555_47674)?(G__46547_47679[(1)]):(cljs.core.truth_(G__46557_47676)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(self__.buf[(0)] = ((G__46548_47680 + G__46550_47682) * G__46552_47684));

(self__.buf[(1)] = ((G__46549_47681 + G__46551_47683) * G__46553_47685));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var fexpr__46565 = (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"yx","yx",1696579752)) : thi.ng.geom.core.vector.swizzle2_fns.call(null,new cljs.core.Keyword(null,"yx","yx",1696579752)));
return (fexpr__46565.cljs$core$IFn$_invoke$arity$1 ? fexpr__46565.cljs$core$IFn$_invoke$arity$1(___$1) : fexpr__46565.call(null,___$1));
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = self__._hash;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (___$1._hash = cljs.core.mix_collection_hash(((cljs.core.imul((((31) + cljs.core.hash((self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(1)]))) | (0)),(2)));
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
return ((((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))));
} else {
return ((cljs.core.sequential_QMARK_(o)) && (((2) === cljs.core.count(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(0)]),cljs.core.first(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1)))));
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$PHeading$heading$arity$1(null);
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,a){
var self__ = this;
var ___$1 = this;
var t = (thi.ng.geom.core.heading(a) - ___$1.thi$ng$geom$core$PHeading$heading$arity$1(null));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(___$1.thi$ng$geom$core$PDistance$dist_squared$arity$2(null,v));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__46577 = self__.buf;
var G__46579 = (G__46577[(0)]);
var G__46580 = (G__46577[(1)]);
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46578 = v.buf;
var G__46581 = (G__46578[(0)]);
var G__46582 = (G__46578[(1)]);
var dx = (G__46579 - G__46581);
var dy = (G__46580 - G__46582);
return ((dx * dx) + (dy * dy));
} else {
var G__46581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__46582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var dx = (G__46579 - G__46581);
var dy = (G__46580 - G__46582);
return ((dx * dx) + (dy * dy));
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__46583 = (self__.buf[(0)]);
var G__46584 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46583,G__46584) : f.call(null,G__46583,G__46584));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
return acc;
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__46585 = start;
var G__46586 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46585,G__46586) : f.call(null,G__46585,G__46586));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
var acc__$1 = (function (){var G__46587 = acc;
var G__46588 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__46587,G__46588) : f.call(null,G__46587,G__46588));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.deref(acc__$1);
} else {
return acc__$1;
}
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$PMathOps$_$arity$1(null);
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__46131__auto__ = (new Float32Array((2)));
var G__46598_47711 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__46599_47712 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__46600_47713 = (((!(G__46598_47711)))?typeof a === 'number':null);
var G__46601_47714 = (((!(G__46599_47712)))?typeof b === 'number':null);
var G__46589_47715 = self__.buf;
var G__46590_47716 = ((G__46598_47711)?a.buf:null);
var G__46591_47717 = ((G__46599_47712)?b.buf:null);
var G__46592_47718 = (G__46589_47715[(0)]);
var G__46593_47719 = (G__46589_47715[(1)]);
var G__46594_47720 = ((G__46598_47711)?(G__46590_47716[(0)]):(cljs.core.truth_(G__46600_47713)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__46595_47721 = ((G__46598_47711)?(G__46590_47716[(1)]):(cljs.core.truth_(G__46600_47713)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__46596_47722 = ((G__46599_47712)?(G__46591_47717[(0)]):(cljs.core.truth_(G__46601_47714)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__46597_47723 = ((G__46599_47712)?(G__46591_47717[(1)]):(cljs.core.truth_(G__46601_47714)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__46131__auto__[(0)] = ((G__46592_47718 * G__46594_47720) - G__46596_47722));

(dest__46131__auto__[(1)] = ((G__46593_47719 * G__46595_47721) - G__46597_47723));

return (new thi.ng.geom.core.vector.Vec2(dest__46131__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46113__auto__ = (new Float32Array((2)));
var G__46614_47729 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46615_47730 = v.buf;
(dest__46113__auto__[(0)] = ((G__46614_47729[(0)]) * (G__46615_47730[(0)])));

(dest__46113__auto__[(1)] = ((G__46614_47729[(1)]) * (G__46615_47730[(1)])));
} else {
if(typeof v === 'number'){
(dest__46113__auto__[(0)] = ((G__46614_47729[(0)]) * v));

(dest__46113__auto__[(1)] = ((G__46614_47729[(1)]) * v));
} else {
(dest__46113__auto__[(0)] = ((G__46614_47729[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__46113__auto__[(1)] = ((G__46614_47729[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__46113__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__46616 = self__.buf;
var G__46619 = (new Float32Array((2)));
var G__46620 = (G__46616[(0)]);
var G__46621 = (G__46616[(1)]);
var G__46626 = typeof v1 === 'number';
var G__46627 = typeof v2 === 'number';
if(((G__46626)?G__46627:false)){
(G__46619[(0)] = (G__46620 * v1));

(G__46619[(1)] = (G__46621 * v2));
} else {
var G__46628_47735 = (((!(G__46626)))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46629_47736 = (((!(G__46627)))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46617_47737 = (cljs.core.truth_(G__46628_47735)?v1.buf:null);
var G__46618_47738 = (cljs.core.truth_(G__46629_47736)?v2.buf:null);
var G__46622_47739 = (cljs.core.truth_(G__46628_47735)?(G__46617_47737[(0)]):((G__46626)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__46623_47740 = (cljs.core.truth_(G__46628_47735)?(G__46617_47737[(1)]):((G__46626)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__46624_47741 = (cljs.core.truth_(G__46629_47736)?(G__46618_47738[(0)]):((G__46627)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__46625_47742 = (cljs.core.truth_(G__46629_47736)?(G__46618_47738[(1)]):((G__46627)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
(G__46619[(0)] = ((G__46620 * G__46622_47739) * G__46624_47741));

(G__46619[(1)] = ((G__46621 * G__46623_47740) * G__46625_47742));
}

return (new thi.ng.geom.core.vector.Vec2(G__46619,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__46061__auto__ = (new Float32Array((2)));
var G__46630_47755 = self__.buf;
(dest__46061__auto__[(0)] = (- (G__46630_47755[(0)])));

(dest__46061__auto__[(1)] = (- (G__46630_47755[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__46061__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46113__auto__ = (new Float32Array((2)));
var G__46631_47756 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46632_47757 = v.buf;
(dest__46113__auto__[(0)] = ((G__46631_47756[(0)]) - (G__46632_47757[(0)])));

(dest__46113__auto__[(1)] = ((G__46631_47756[(1)]) - (G__46632_47757[(1)])));
} else {
if(typeof v === 'number'){
(dest__46113__auto__[(0)] = ((G__46631_47756[(0)]) - v));

(dest__46113__auto__[(1)] = ((G__46631_47756[(1)]) - v));
} else {
(dest__46113__auto__[(0)] = ((G__46631_47756[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__46113__auto__[(1)] = ((G__46631_47756[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__46113__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__46633 = self__.buf;
var G__46636 = (new Float32Array((2)));
var G__46637 = (G__46633[(0)]);
var G__46638 = (G__46633[(1)]);
var G__46643 = typeof v1 === 'number';
var G__46644 = typeof v2 === 'number';
if(((G__46643)?G__46644:false)){
(G__46636[(0)] = (G__46637 - v1));

(G__46636[(1)] = (G__46638 - v2));
} else {
var G__46645_47758 = (((!(G__46643)))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46646_47759 = (((!(G__46644)))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46634_47760 = (cljs.core.truth_(G__46645_47758)?v1.buf:null);
var G__46635_47761 = (cljs.core.truth_(G__46646_47759)?v2.buf:null);
var G__46639_47762 = (cljs.core.truth_(G__46645_47758)?(G__46634_47760[(0)]):((G__46643)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__46640_47763 = (cljs.core.truth_(G__46645_47758)?(G__46634_47760[(1)]):((G__46643)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__46641_47764 = (cljs.core.truth_(G__46646_47759)?(G__46635_47761[(0)]):((G__46644)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__46642_47765 = (cljs.core.truth_(G__46646_47759)?(G__46635_47761[(1)]):((G__46644)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__46636[(0)] = ((G__46637 - G__46639_47762) - G__46641_47764));

(G__46636[(1)] = ((G__46638 - G__46640_47763) - G__46642_47765));
}

return (new thi.ng.geom.core.vector.Vec2(G__46636,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__46131__auto__ = (new Float32Array((2)));
var G__46658_47766 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__46659_47767 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__46660_47768 = (((!(G__46658_47766)))?typeof a === 'number':null);
var G__46661_47769 = (((!(G__46659_47767)))?typeof b === 'number':null);
var G__46649_47770 = self__.buf;
var G__46650_47771 = ((G__46658_47766)?a.buf:null);
var G__46651_47772 = ((G__46659_47767)?b.buf:null);
var G__46652_47773 = (G__46649_47770[(0)]);
var G__46653_47774 = (G__46649_47770[(1)]);
var G__46654_47775 = ((G__46658_47766)?(G__46650_47771[(0)]):(cljs.core.truth_(G__46660_47768)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__46655_47776 = ((G__46658_47766)?(G__46650_47771[(1)]):(cljs.core.truth_(G__46660_47768)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__46656_47777 = ((G__46659_47767)?(G__46651_47772[(0)]):(cljs.core.truth_(G__46661_47769)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__46657_47778 = ((G__46659_47767)?(G__46651_47772[(1)]):(cljs.core.truth_(G__46661_47769)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
(dest__46131__auto__[(0)] = ((G__46652_47773 * G__46654_47775) + G__46656_47777));

(dest__46131__auto__[(1)] = ((G__46653_47774 * G__46655_47776) + G__46657_47778));

return (new thi.ng.geom.core.vector.Vec2(dest__46131__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__46131__auto__ = (new Float32Array((2)));
var G__46673_47781 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__46674_47782 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__46675_47783 = (((!(G__46673_47781)))?typeof a === 'number':null);
var G__46676_47784 = (((!(G__46674_47782)))?typeof b === 'number':null);
var G__46664_47785 = self__.buf;
var G__46665_47786 = ((G__46673_47781)?a.buf:null);
var G__46666_47787 = ((G__46674_47782)?b.buf:null);
var G__46667_47788 = (G__46664_47785[(0)]);
var G__46668_47789 = (G__46664_47785[(1)]);
var G__46669_47790 = ((G__46673_47781)?(G__46665_47786[(0)]):(cljs.core.truth_(G__46675_47783)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__46670_47791 = ((G__46673_47781)?(G__46665_47786[(1)]):(cljs.core.truth_(G__46675_47783)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__46671_47792 = ((G__46674_47782)?(G__46666_47787[(0)]):(cljs.core.truth_(G__46676_47784)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__46672_47793 = ((G__46674_47782)?(G__46666_47787[(1)]):(cljs.core.truth_(G__46676_47784)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__46131__auto__[(0)] = ((G__46667_47788 + G__46669_47790) * G__46671_47792));

(dest__46131__auto__[(1)] = ((G__46668_47789 + G__46670_47791) * G__46672_47793));

return (new thi.ng.geom.core.vector.Vec2(dest__46131__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__46061__auto__ = (new Float32Array((2)));
var G__46679_47798 = self__.buf;
(dest__46061__auto__[(0)] = ((1) / (G__46679_47798[(0)])));

(dest__46061__auto__[(1)] = ((1) / (G__46679_47798[(1)])));

return (new thi.ng.geom.core.vector.Vec2(dest__46061__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46113__auto__ = (new Float32Array((2)));
var G__46681_47799 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46682_47800 = v.buf;
(dest__46113__auto__[(0)] = ((G__46681_47799[(0)]) / (G__46682_47800[(0)])));

(dest__46113__auto__[(1)] = ((G__46681_47799[(1)]) / (G__46682_47800[(1)])));
} else {
if(typeof v === 'number'){
(dest__46113__auto__[(0)] = ((G__46681_47799[(0)]) / v));

(dest__46113__auto__[(1)] = ((G__46681_47799[(1)]) / v));
} else {
(dest__46113__auto__[(0)] = ((G__46681_47799[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__46113__auto__[(1)] = ((G__46681_47799[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__46113__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__46684 = self__.buf;
var G__46687 = (new Float32Array((2)));
var G__46688 = (G__46684[(0)]);
var G__46689 = (G__46684[(1)]);
var G__46694 = typeof v1 === 'number';
var G__46695 = typeof v2 === 'number';
if(((G__46694)?G__46695:false)){
(G__46687[(0)] = (G__46688 / v1));

(G__46687[(1)] = (G__46689 / v2));
} else {
var G__46696_47801 = (((!(G__46694)))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46697_47802 = (((!(G__46695)))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46685_47803 = (cljs.core.truth_(G__46696_47801)?v1.buf:null);
var G__46686_47804 = (cljs.core.truth_(G__46697_47802)?v2.buf:null);
var G__46690_47805 = (cljs.core.truth_(G__46696_47801)?(G__46685_47803[(0)]):((G__46694)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__46691_47806 = (cljs.core.truth_(G__46696_47801)?(G__46685_47803[(1)]):((G__46694)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__46692_47807 = (cljs.core.truth_(G__46697_47802)?(G__46686_47804[(0)]):((G__46695)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__46693_47808 = (cljs.core.truth_(G__46697_47802)?(G__46686_47804[(1)]):((G__46695)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__46687[(0)] = ((G__46688 / G__46690_47805) / G__46692_47807));

(G__46687[(1)] = ((G__46689 / G__46691_47806) / G__46693_47808));
}

return (new thi.ng.geom.core.vector.Vec2(G__46687,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46113__auto__ = (new Float32Array((2)));
var G__46701_47812 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46702_47813 = v.buf;
(dest__46113__auto__[(0)] = ((G__46701_47812[(0)]) + (G__46702_47813[(0)])));

(dest__46113__auto__[(1)] = ((G__46701_47812[(1)]) + (G__46702_47813[(1)])));
} else {
if(typeof v === 'number'){
(dest__46113__auto__[(0)] = ((G__46701_47812[(0)]) + v));

(dest__46113__auto__[(1)] = ((G__46701_47812[(1)]) + v));
} else {
(dest__46113__auto__[(0)] = ((G__46701_47812[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__46113__auto__[(1)] = ((G__46701_47812[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__46113__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__46704 = self__.buf;
var G__46707 = (new Float32Array((2)));
var G__46708 = (G__46704[(0)]);
var G__46709 = (G__46704[(1)]);
var G__46714 = typeof v1 === 'number';
var G__46715 = typeof v2 === 'number';
if(((G__46714)?G__46715:false)){
(G__46707[(0)] = (G__46708 + v1));

(G__46707[(1)] = (G__46709 + v2));
} else {
var G__46716_47816 = (((!(G__46714)))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46717_47817 = (((!(G__46715)))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46705_47818 = (cljs.core.truth_(G__46716_47816)?v1.buf:null);
var G__46706_47819 = (cljs.core.truth_(G__46717_47817)?v2.buf:null);
var G__46710_47820 = (cljs.core.truth_(G__46716_47816)?(G__46705_47818[(0)]):((G__46714)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__46711_47821 = (cljs.core.truth_(G__46716_47816)?(G__46705_47818[(1)]):((G__46714)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__46712_47822 = (cljs.core.truth_(G__46717_47817)?(G__46706_47819[(0)]):((G__46715)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__46713_47823 = (cljs.core.truth_(G__46717_47817)?(G__46706_47819[(1)]):((G__46715)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__46707[(0)] = ((G__46708 + G__46710_47820) + G__46712_47822));

(G__46707[(1)] = ((G__46709 + G__46711_47821) + G__46713_47823));
}

return (new thi.ng.geom.core.vector.Vec2(G__46707,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__46061__auto__ = (new Float32Array((2)));
var G__46722_47825 = self__.buf;
(dest__46061__auto__[(0)] = (function (){var G__46723 = (G__46722_47825[(0)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__46723) : thi.ng.math.core.abs.call(null,G__46723));
})());

(dest__46061__auto__[(1)] = (function (){var G__46724 = (G__46722_47825[(1)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__46724) : thi.ng.math.core.abs.call(null,G__46724));
})());

return (new thi.ng.geom.core.vector.Vec2(dest__46061__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__46131__auto__ = (new Float32Array((2)));
var G__46735_47826 = (a instanceof thi.ng.geom.core.vector.Vec2);
var G__46736_47827 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__46737_47828 = (((!(G__46735_47826)))?typeof a === 'number':null);
var G__46738_47829 = (((!(G__46736_47827)))?typeof b === 'number':null);
var G__46726_47830 = self__.buf;
var G__46727_47831 = ((G__46735_47826)?a.buf:null);
var G__46728_47832 = ((G__46736_47827)?b.buf:null);
var G__46729_47833 = (G__46726_47830[(0)]);
var G__46730_47834 = (G__46726_47830[(1)]);
var G__46731_47835 = ((G__46735_47826)?(G__46727_47831[(0)]):(cljs.core.truth_(G__46737_47828)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__46732_47836 = ((G__46735_47826)?(G__46727_47831[(1)]):(cljs.core.truth_(G__46737_47828)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__46733_47837 = ((G__46736_47827)?(G__46728_47832[(0)]):(cljs.core.truth_(G__46738_47829)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__46734_47838 = ((G__46736_47827)?(G__46728_47832[(1)]):(cljs.core.truth_(G__46738_47829)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
(dest__46131__auto__[(0)] = ((G__46729_47833 - G__46731_47835) * G__46733_47837));

(dest__46131__auto__[(1)] = ((G__46730_47834 - G__46732_47836) * G__46734_47838));

return (new thi.ng.geom.core.vector.Vec2(dest__46131__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PNormal$normal$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (- (self__.buf[(1)])));

(b[(1)] = (self__.buf[(0)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),null);
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46113__auto__ = (new Float32Array((2)));
var G__46743_47839 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46744_47840 = v.buf;
(dest__46113__auto__[(0)] = ((G__46743_47839[(0)]) + (G__46744_47840[(0)])));

(dest__46113__auto__[(1)] = ((G__46743_47839[(1)]) + (G__46744_47840[(1)])));
} else {
if(typeof v === 'number'){
(dest__46113__auto__[(0)] = ((G__46743_47839[(0)]) + v));

(dest__46113__auto__[(1)] = ((G__46743_47839[(1)]) + v));
} else {
(dest__46113__auto__[(0)] = ((G__46743_47839[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__46113__auto__[(1)] = ((G__46743_47839[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__46113__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__46746 = self__.buf;
var G__46749 = (new Float32Array((2)));
var G__46750 = (G__46746[(0)]);
var G__46751 = (G__46746[(1)]);
var G__46756 = typeof v1 === 'number';
var G__46757 = typeof v2 === 'number';
if(((G__46756)?G__46757:false)){
(G__46749[(0)] = (G__46750 + v1));

(G__46749[(1)] = (G__46751 + v2));
} else {
var G__46758_47843 = (((!(G__46756)))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46759_47844 = (((!(G__46757)))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46747_47845 = (cljs.core.truth_(G__46758_47843)?v1.buf:null);
var G__46748_47846 = (cljs.core.truth_(G__46759_47844)?v2.buf:null);
var G__46752_47847 = (cljs.core.truth_(G__46758_47843)?(G__46747_47845[(0)]):((G__46756)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__46753_47848 = (cljs.core.truth_(G__46758_47843)?(G__46747_47845[(1)]):((G__46756)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__46754_47849 = (cljs.core.truth_(G__46759_47844)?(G__46748_47846[(0)]):((G__46757)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__46755_47850 = (cljs.core.truth_(G__46759_47844)?(G__46748_47846[(1)]):((G__46757)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(G__46749[(0)] = ((G__46750 + G__46752_47847) + G__46754_47849));

(G__46749[(1)] = ((G__46751 + G__46753_47848) + G__46755_47850));
}

return (new thi.ng.geom.core.vector.Vec2(G__46749,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return (((k >= (0))) && ((k < (2))));
} else {
if(cljs.core.truth_((thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle2_fns.call(null,k)))){
return true;
} else {
return false;
}
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if((((k === (0))) || ((k === (1))))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
} else {
if((k === (2))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"z","z",-789527183),k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec2((function (){var G__46763 = self__.buf;
var G__46764 = (new Float32Array(self__.buf));
var G__46765 = new cljs.core.PersistentArrayMap(null, 2, ["x",(0),"y",(1)], null);
var G__46766 = k;
var G__46767 = v;
return (thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__46763,G__46764,G__46765,G__46766,G__46767) : thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,G__46763,G__46764,G__46765,G__46766,G__46767));
})(),null,self__._meta));
}
} else {
return null;
}
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46113__auto__ = (new Float32Array((2)));
var G__46768_47862 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46769_47863 = v.buf;
(dest__46113__auto__[(0)] = ((G__46768_47862[(0)]) * (G__46769_47863[(0)])));

(dest__46113__auto__[(1)] = ((G__46768_47862[(1)]) * (G__46769_47863[(1)])));
} else {
if(typeof v === 'number'){
(dest__46113__auto__[(0)] = ((G__46768_47862[(0)]) * v));

(dest__46113__auto__[(1)] = ((G__46768_47862[(1)]) * v));
} else {
(dest__46113__auto__[(0)] = ((G__46768_47862[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__46113__auto__[(1)] = ((G__46768_47862[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__46113__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__46770 = self__.buf;
var G__46773 = (new Float32Array((2)));
var G__46774 = (G__46770[(0)]);
var G__46775 = (G__46770[(1)]);
var G__46780 = typeof v1 === 'number';
var G__46781 = typeof v2 === 'number';
if(((G__46780)?G__46781:false)){
(G__46773[(0)] = (G__46774 * v1));

(G__46773[(1)] = (G__46775 * v2));
} else {
var G__46782_47867 = (((!(G__46780)))?(v1 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46783_47868 = (((!(G__46781)))?(v2 instanceof thi.ng.geom.core.vector.Vec2):null);
var G__46771_47869 = (cljs.core.truth_(G__46782_47867)?v1.buf:null);
var G__46772_47870 = (cljs.core.truth_(G__46783_47868)?v2.buf:null);
var G__46776_47871 = (cljs.core.truth_(G__46782_47867)?(G__46771_47869[(0)]):((G__46780)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__46777_47872 = (cljs.core.truth_(G__46782_47867)?(G__46771_47869[(1)]):((G__46780)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__46778_47873 = (cljs.core.truth_(G__46783_47868)?(G__46772_47870[(0)]):((G__46781)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__46779_47874 = (cljs.core.truth_(G__46783_47868)?(G__46772_47870[(1)]):((G__46781)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
(G__46773[(0)] = ((G__46774 * G__46776_47871) * G__46778_47873));

(G__46773[(1)] = ((G__46775 * G__46777_47872) * G__46779_47874));
}

return (new thi.ng.geom.core.vector.Vec2(G__46773,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec2((new Float32Array(self__.buf)),self__._hash,m));
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta((function (){var G__46784 = (self__.buf[(0)]);
var G__46785 = (self__.buf[(1)]);
var G__46786 = x;
return (thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(G__46784,G__46785,G__46786) : thi.ng.geom.core.vector.vec3.call(null,G__46784,G__46785,G__46786));
})(),self__._meta);
}));

(thi.ng.geom.core.vector.Vec2.prototype.call = (function (unused__9546__auto__){
var self__ = this;
var self__ = this;
var G__46787 = (arguments.length - (1));
switch (G__46787) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(thi.ng.geom.core.vector.Vec2.prototype.apply = (function (self__,args46351){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46351)));
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle2_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle2_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k < (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46113__auto__ = (new Float32Array((2)));
var G__46788_47890 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46789_47891 = v.buf;
(dest__46113__auto__[(0)] = (function (){var a__45302__auto__ = (G__46788_47890[(0)]);
var b__45303__auto__ = (G__46789_47891[(0)]);
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

(dest__46113__auto__[(1)] = (function (){var a__45302__auto__ = (G__46788_47890[(1)]);
var b__45303__auto__ = (G__46789_47891[(1)]);
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__46113__auto__[(0)] = (function (){var a__45302__auto__ = (G__46788_47890[(0)]);
var b__45303__auto__ = v;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

(dest__46113__auto__[(1)] = (function (){var a__45302__auto__ = (G__46788_47890[(1)]);
var b__45303__auto__ = v;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());
} else {
(dest__46113__auto__[(0)] = (function (){var a__45302__auto__ = (G__46788_47890[(0)]);
var b__45303__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

(dest__46113__auto__[(1)] = (function (){var a__45302__auto__ = (G__46788_47890[(1)]);
var b__45303__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__46113__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__46131__auto__ = (new Float32Array((2)));
var G__46799_47900 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__46800_47901 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__46801_47902 = (((!(G__46799_47900)))?typeof v === 'number':null);
var G__46802_47903 = (((!(G__46800_47901)))?typeof v2 === 'number':null);
var G__46790_47904 = self__.buf;
var G__46791_47905 = ((G__46799_47900)?v.buf:null);
var G__46792_47906 = ((G__46800_47901)?v2.buf:null);
var G__46793_47907 = (G__46790_47904[(0)]);
var G__46794_47908 = (G__46790_47904[(1)]);
var G__46795_47909 = ((G__46799_47900)?(G__46791_47905[(0)]):(cljs.core.truth_(G__46801_47902)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__46796_47910 = ((G__46799_47900)?(G__46791_47905[(1)]):(cljs.core.truth_(G__46801_47902)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__46797_47911 = ((G__46800_47901)?(G__46792_47906[(0)]):(cljs.core.truth_(G__46802_47903)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__46798_47912 = ((G__46800_47901)?(G__46792_47906[(1)]):(cljs.core.truth_(G__46802_47903)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__46131__auto__[(0)] = (function (){var a__45302__auto__ = (function (){var a__45302__auto__ = G__46793_47907;
var b__45303__auto__ = G__46795_47909;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})();
var b__45303__auto__ = G__46797_47911;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

(dest__46131__auto__[(1)] = (function (){var a__45302__auto__ = (function (){var a__45302__auto__ = G__46794_47908;
var b__45303__auto__ = G__46796_47910;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})();
var b__45303__auto__ = G__46798_47912;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__46131__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46113__auto__ = (new Float32Array((2)));
var G__46803_47914 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46804_47915 = v.buf;
(dest__46113__auto__[(0)] = (function (){var a__45311__auto__ = (G__46803_47914[(0)]);
var b__45312__auto__ = (G__46804_47915[(0)]);
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

(dest__46113__auto__[(1)] = (function (){var a__45311__auto__ = (G__46803_47914[(1)]);
var b__45312__auto__ = (G__46804_47915[(1)]);
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__46113__auto__[(0)] = (function (){var a__45311__auto__ = (G__46803_47914[(0)]);
var b__45312__auto__ = v;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

(dest__46113__auto__[(1)] = (function (){var a__45311__auto__ = (G__46803_47914[(1)]);
var b__45312__auto__ = v;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());
} else {
(dest__46113__auto__[(0)] = (function (){var a__45311__auto__ = (G__46803_47914[(0)]);
var b__45312__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

(dest__46113__auto__[(1)] = (function (){var a__45311__auto__ = (G__46803_47914[(1)]);
var b__45312__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec2(dest__46113__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__46131__auto__ = (new Float32Array((2)));
var G__46814_47922 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__46815_47923 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__46816_47924 = (((!(G__46814_47922)))?typeof v === 'number':null);
var G__46817_47925 = (((!(G__46815_47923)))?typeof v2 === 'number':null);
var G__46805_47926 = self__.buf;
var G__46806_47927 = ((G__46814_47922)?v.buf:null);
var G__46807_47928 = ((G__46815_47923)?v2.buf:null);
var G__46808_47929 = (G__46805_47926[(0)]);
var G__46809_47930 = (G__46805_47926[(1)]);
var G__46810_47931 = ((G__46814_47922)?(G__46806_47927[(0)]):(cljs.core.truth_(G__46816_47924)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__46811_47932 = ((G__46814_47922)?(G__46806_47927[(1)]):(cljs.core.truth_(G__46816_47924)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__46812_47933 = ((G__46815_47923)?(G__46807_47928[(0)]):(cljs.core.truth_(G__46817_47925)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__46813_47934 = ((G__46815_47923)?(G__46807_47928[(1)]):(cljs.core.truth_(G__46817_47925)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(dest__46131__auto__[(0)] = (function (){var a__45311__auto__ = (function (){var a__45311__auto__ = G__46808_47929;
var b__45312__auto__ = G__46810_47931;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})();
var b__45312__auto__ = G__46812_47933;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

(dest__46131__auto__[(1)] = (function (){var a__45311__auto__ = (function (){var a__45311__auto__ = G__46809_47930;
var b__45312__auto__ = G__46811_47932;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})();
var b__45312__auto__ = G__46813_47934;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec2(dest__46131__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec2)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare((self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
return cljs.core.compare((self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((2) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((2) - c);
}
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec2((thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs)),null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
(thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec2_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.core.vector.vec2_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs));

(buf_SINGLEQUOTE_[(0)] = (function (){var G__46818 = (buf_SINGLEQUOTE_[(0)]);
var G__46819 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__46818,G__46819) : f2.call(null,G__46818,G__46819));
})());

(buf_SINGLEQUOTE_[(1)] = (function (){var G__46820 = (buf_SINGLEQUOTE_[(1)]);
var G__46821 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__46820,G__46821) : f2.call(null,G__46820,G__46821));
})());

return (new thi.ng.geom.core.vector.Vec2(buf_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3(null,v,thi.ng.math.core._STAR_eps_STAR_);
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_(v)){
if(((2) === cljs.core.count(v))){
var G__46822 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46823 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_((G__46822[(0)]),(G__46823[(0)]),eps))){
return thi.ng.math.core.delta_EQ_((G__46822[(1)]),(G__46823[(1)]),eps);
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_((G__46822[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
return thi.ng.math.core.delta_EQ_((G__46822[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps);
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__46824 = self__.buf;
var G__46825 = (G__46824[(0)]);
var G__46826 = (G__46824[(1)]);
return Math.sqrt(((G__46825 * G__46825) + (G__46826 * G__46826)));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__46827 = self__.buf;
var G__46828 = (G__46827[(0)]);
var G__46829 = (G__46827[(1)]);
return ((G__46828 * G__46828) + (G__46829 * G__46829));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__46830_47943 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec2)){
var G__46831_47944 = v.buf;
(b[(0)] = (((G__46830_47943[(0)]) + (G__46831_47944[(0)])) * 0.5));

(b[(1)] = (((G__46830_47943[(1)]) + (G__46831_47944[(1)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__46830_47943[(0)]) + v) * 0.5));

(b[(1)] = (((G__46830_47943[(1)]) + v) * 0.5));
} else {
(b[(0)] = (((G__46830_47943[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__46830_47943[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
var G__46841_47946 = (v instanceof thi.ng.geom.core.vector.Vec2);
var G__46842_47947 = (v2 instanceof thi.ng.geom.core.vector.Vec2);
var G__46843_47948 = (((!(G__46841_47946)))?typeof v === 'number':null);
var G__46844_47949 = (((!(G__46842_47947)))?typeof v2 === 'number':null);
var G__46832_47950 = self__.buf;
var G__46833_47951 = ((G__46841_47946)?v.buf:null);
var G__46834_47952 = ((G__46842_47947)?v2.buf:null);
var G__46835_47953 = (G__46832_47950[(0)]);
var G__46836_47954 = (G__46832_47950[(1)]);
var G__46837_47955 = ((G__46841_47946)?(G__46833_47951[(0)]):(cljs.core.truth_(G__46843_47948)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__46838_47956 = ((G__46841_47946)?(G__46833_47951[(1)]):(cljs.core.truth_(G__46843_47948)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__46839_47957 = ((G__46842_47947)?(G__46834_47952[(0)]):(cljs.core.truth_(G__46844_47949)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__46840_47958 = ((G__46842_47947)?(G__46834_47952[(1)]):(cljs.core.truth_(G__46844_47949)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
(b[(0)] = (((G__46837_47955 - G__46835_47953) * G__46839_47957) + G__46835_47953));

(b[(1)] = (((G__46838_47956 - G__46836_47954) * G__46840_47958) + G__46836_47954));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((2)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec2);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(1),0.0)));
var G__46854_47963 = (b instanceof thi.ng.geom.core.vector.Vec2);
var G__46855_47964 = (c instanceof thi.ng.geom.core.vector.Vec2);
var G__46856_47965 = (((!(G__46854_47963)))?typeof b === 'number':null);
var G__46857_47966 = (((!(G__46855_47964)))?typeof c === 'number':null);
var G__46845_47967 = self__.buf;
var G__46846_47968 = ((G__46854_47963)?b.buf:null);
var G__46847_47969 = ((G__46855_47964)?c.buf:null);
var G__46848_47970 = (G__46845_47967[(0)]);
var G__46849_47971 = (G__46845_47967[(1)]);
var G__46850_47972 = ((G__46854_47963)?(G__46846_47968[(0)]):(cljs.core.truth_(G__46856_47965)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__46851_47973 = ((G__46854_47963)?(G__46846_47968[(1)]):(cljs.core.truth_(G__46856_47965)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__46852_47974 = ((G__46855_47964)?(G__46847_47969[(0)]):(cljs.core.truth_(G__46857_47966)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__46853_47975 = ((G__46855_47964)?(G__46847_47969[(1)]):(cljs.core.truth_(G__46857_47966)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var x1_47993 = (((G__46850_47972 - G__46848_47970) * u) + G__46848_47970);
var y1_47994 = (((G__46851_47973 - G__46849_47971) * u) + G__46849_47971);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__46852_47974) * u) + G__46852_47974) - x1_47993) * v) + x1_47993));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__46853_47975) * u) + G__46853_47975) - y1_47994) * v) + y1_47994));

return (new thi.ng.geom.core.vector.Vec2(b_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((___$1.thi$ng$geom$core$PMagnitude$mag_squared$arity$1(null) > (len * len))){
return ___$1.thi$ng$geom$core$PNormalize$normalize$arity$2(null,len);
} else {
return ___$1;
}
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = ___$1.thi$ng$geom$core$PMagnitude$mag$arity$1(null));

(b[(1)] = ___$1.thi$ng$geom$core$PHeading$heading$arity$1(null));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__46858 = self__.buf;
var G__46859 = (G__46858[(0)]);
var G__46860 = (G__46858[(1)]);
var b = (new Float32Array((2)));
(b[(0)] = (G__46859 * Math.cos(G__46860)));

(b[(1)] = (G__46859 * Math.sin(G__46860)));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec2.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(thi.ng.geom.core.vector.Vec2.cljs$lang$type = true);

(thi.ng.geom.core.vector.Vec2.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec2");

(thi.ng.geom.core.vector.Vec2.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"thi.ng.geom.core.vector/Vec2");
}));

/**
 * Positional factory function for thi.ng.geom.core.vector/Vec2.
 */
thi.ng.geom.core.vector.__GT_Vec2 = (function thi$ng$geom$core$vector$__GT_Vec2(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec2(buf,_hash,_meta));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.PScale}
 * @implements {thi.ng.geom.core.PHeading}
 * @implements {thi.ng.geom.core.PMagnitude}
 * @implements {cljs.core.IIndexed}
 * @implements {thi.ng.geom.core.PDistance}
 * @implements {cljs.core.IVector}
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {thi.ng.geom.core.PMathOps}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {thi.ng.geom.core.PTranslate}
 * @implements {thi.ng.geom.core.PMinMax}
 * @implements {thi.ng.geom.core.PLimit}
 * @implements {thi.ng.geom.core.PVectorReduce}
 * @implements {thi.ng.geom.core.PPolar}
 * @implements {thi.ng.geom.core.PInterpolate}
 * @implements {thi.ng.geom.core.PTransform}
 * @implements {cljs.core.ICounted}
 * @implements {thi.ng.geom.core.PRotate3D}
 * @implements {thi.ng.geom.core.PClear}
 * @implements {thi.ng.geom.core.PDotProduct}
 * @implements {cljs.core.ISeq}
 * @implements {thi.ng.geom.core.PNormalize}
 * @implements {thi.ng.geom.core.PBuffered}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {thi.ng.geom.core.PRotate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {thi.ng.geom.core.PCrossProduct}
 * @implements {cljs.core.IStack}
 * @implements {thi.ng.geom.core.PReflect}
 * @implements {thi.ng.geom.core.PMutableMathOps}
 * @implements {thi.ng.math.core.PDeltaEquals}
 * @implements {cljs.core.IComparable}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.geom.core.PInvert}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.IReduce}
*/
thi.ng.geom.core.vector.Vec3 = (function (buf,_hash,_meta){
this.buf = buf;
this._hash = _hash;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 166618075;
this.cljs$lang$protocol_mask$partition1$ = 10240;
});
(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$get_buffer$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.buf;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 = (function (_,dest,stride,idx){
var self__ = this;
var ___$1 = this;
dest.set(self__.buf,idx);

return (idx + stride);
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTransform$transform$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return thi.ng.geom.core.transform_vector(m,___$1);
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate$rotate$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$PRotate3D$rotate_z$arity$2(null,theta);
}));

(thi.ng.geom.core.vector.Vec3.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(0)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(1)]))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.buf[(2)])),"]"].join('');
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,nf){
var self__ = this;
var ___$1 = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(___$1) : f.call(null,___$1));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDotProduct$dot$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__46863 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__46864 = v.buf;
return ((((G__46863[(0)]) * (G__46864[(0)])) + ((G__46863[(1)]) * (G__46864[(1)]))) + ((G__46863[(2)]) * (G__46864[(2)])));
} else {
return ((((G__46863[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) + ((G__46863[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0))) + ((G__46863[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__46865 = self__.buf;
var G__46866 = (G__46865[(0)]);
var G__46867 = (G__46865[(1)]);
var G__46868 = (G__46865[(2)]);
var l = Math.sqrt((((G__46866 * G__46866) + (G__46867 * G__46867)) + (G__46868 * G__46868)));
if((l > (0))){
var b = (new Float32Array((3)));
(b[(0)] = (G__46866 / l));

(b[(1)] = (G__46867 / l));

(b[(2)] = (G__46868 / l));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalize$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
var G__46869 = self__.buf;
var G__46870 = (G__46869[(0)]);
var G__46871 = (G__46869[(1)]);
var G__46872 = (G__46869[(2)]);
var l = Math.sqrt((((G__46870 * G__46870) + (G__46871 * G__46871)) + (G__46872 * G__46872)));
if((l > (0))){
var l__$1 = (len / l);
var b = (new Float32Array((3)));
(b[(0)] = (G__46870 * l__$1));

(b[(1)] = (G__46871 * l__$1));

(b[(2)] = (G__46872 * l__$1));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
return ___$1;
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.math.core.delta_EQ_(1.0,___$1.thi$ng$geom$core$PMagnitude$mag_squared$arity$1(null));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__46873 = self__.buf;
var G__46874 = (G__46873[(0)]);
var G__46875 = (G__46873[(1)]);
var G__46876 = (G__46873[(2)]);
(b[(0)] = G__46874);

(b[(1)] = ((G__46875 * c) - (G__46876 * s)));

(b[(2)] = ((G__46875 * s) + (G__46876 * c)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__46877 = self__.buf;
var G__46878 = (G__46877[(0)]);
var G__46879 = (G__46877[(1)]);
var G__46880 = (G__46877[(2)]);
(b[(0)] = ((G__46878 * c) + (G__46880 * s)));

(b[(1)] = G__46879);

(b[(2)] = ((G__46880 * c) - (G__46878 * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var s = Math.sin(theta);
var c = Math.cos(theta);
var b = (new Float32Array((3)));
var G__46881 = self__.buf;
var G__46882 = (G__46881[(0)]);
var G__46883 = (G__46881[(1)]);
var G__46884 = (G__46881[(2)]);
(b[(0)] = ((G__46882 * c) - (G__46883 * s)));

(b[(1)] = ((G__46882 * s) + (G__46883 * c)));

(b[(2)] = G__46884);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 = (function (_,v,theta){
var self__ = this;
var ___$1 = this;
var G__46885 = self__.buf;
var G__46887 = (G__46885[(0)]);
var G__46888 = (G__46885[(1)]);
var G__46889 = (G__46885[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__46886 = v.buf;
var G__46890 = (G__46886[(0)]);
var G__46891 = (G__46886[(1)]);
var G__46892 = (G__46886[(2)]);
var ux_SINGLEQUOTE_ = (G__46890 * G__46887);
var uy_SINGLEQUOTE_ = (G__46890 * G__46888);
var uz_SINGLEQUOTE_ = (G__46890 * G__46889);
var vx_SINGLEQUOTE_ = (G__46891 * G__46887);
var vy_SINGLEQUOTE_ = (G__46891 * G__46888);
var vz_SINGLEQUOTE_ = (G__46891 * G__46889);
var wx_SINGLEQUOTE_ = (G__46892 * G__46887);
var wy_SINGLEQUOTE_ = (G__46892 * G__46888);
var wz_SINGLEQUOTE_ = (G__46892 * G__46889);
var vx2 = (G__46890 * G__46890);
var vy2 = (G__46891 * G__46891);
var vz2 = (G__46892 * G__46892);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__46890) + ((((vy2 + vz2) * G__46887) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__46890)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__46891) + ((((vx2 + vz2) * G__46888) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__46891)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__46892) + ((((vx2 + vy2) * G__46889) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__46892)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__46890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__46891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__46892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var ux_SINGLEQUOTE_ = (G__46890 * G__46887);
var uy_SINGLEQUOTE_ = (G__46890 * G__46888);
var uz_SINGLEQUOTE_ = (G__46890 * G__46889);
var vx_SINGLEQUOTE_ = (G__46891 * G__46887);
var vy_SINGLEQUOTE_ = (G__46891 * G__46888);
var vz_SINGLEQUOTE_ = (G__46891 * G__46889);
var wx_SINGLEQUOTE_ = (G__46892 * G__46887);
var wy_SINGLEQUOTE_ = (G__46892 * G__46888);
var wz_SINGLEQUOTE_ = (G__46892 * G__46889);
var vx2 = (G__46890 * G__46890);
var vy2 = (G__46891 * G__46891);
var vz2 = (G__46892 * G__46892);
var s = Math.sin(theta);
var c = Math.cos(theta);
var uvw = ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) + wz_SINGLEQUOTE_);
var b = (new Float32Array((3)));
(b[(0)] = (((uvw * G__46890) + ((((vy2 + vz2) * G__46887) - ((vy_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__46890)) * c)) + ((vz_SINGLEQUOTE_ - wy_SINGLEQUOTE_) * s)));

(b[(1)] = (((uvw * G__46891) + ((((vx2 + vz2) * G__46888) - ((ux_SINGLEQUOTE_ + wz_SINGLEQUOTE_) * G__46891)) * c)) + ((wx_SINGLEQUOTE_ - uz_SINGLEQUOTE_) * s)));

(b[(2)] = (((uvw * G__46892) + ((((vx2 + vy2) * G__46889) - ((ux_SINGLEQUOTE_ + vy_SINGLEQUOTE_) * G__46892)) * c)) + ((uy_SINGLEQUOTE_ - vx_SINGLEQUOTE_) * s)));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PClear$clear_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = 0.0);

(self__.buf[(1)] = 0.0);

(self__.buf[(2)] = 0.0);

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PReflect$reflect$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__46893 = self__.buf;
var G__46895 = (G__46893[(0)]);
var G__46896 = (G__46893[(1)]);
var G__46897 = (G__46893[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__46894 = v.buf;
var G__46898 = (G__46894[(0)]);
var G__46899 = (G__46894[(1)]);
var G__46900 = (G__46894[(2)]);
var d = ((((G__46895 * G__46898) + (G__46896 * G__46899)) + (G__46897 * G__46900)) * 2.0);
(b[(0)] = ((G__46898 * d) - G__46895));

(b[(1)] = ((G__46899 * d) - G__46896));

(b[(2)] = ((G__46900 * d) - G__46897));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
var G__46898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__46899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__46900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var d = ((((G__46895 * G__46898) + (G__46896 * G__46899)) + (G__46897 * G__46900)) * 2.0);
(b[(0)] = ((G__46898 * d) - G__46895));

(b[(1)] = ((G__46899 * d) - G__46896));

(b[(2)] = ((G__46900 * d) - G__46897));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PCrossProduct$cross$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__46901_48006 = self__.buf;
var G__46903_48007 = (G__46901_48006[(0)]);
var G__46904_48008 = (G__46901_48006[(1)]);
var G__46905_48009 = (G__46901_48006[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__46902_48010 = v.buf;
var G__46906_48011 = (G__46902_48010[(0)]);
var G__46907_48012 = (G__46902_48010[(1)]);
var G__46908_48013 = (G__46902_48010[(2)]);
(b[(0)] = ((G__46904_48008 * G__46908_48013) - (G__46907_48012 * G__46905_48009)));

(b[(1)] = ((G__46905_48009 * G__46906_48011) - (G__46908_48013 * G__46903_48007)));

(b[(2)] = ((G__46903_48007 * G__46907_48012) - (G__46906_48011 * G__46904_48008)));
} else {
var G__46906_48014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__46907_48015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__46908_48016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
(b[(0)] = ((G__46904_48008 * G__46908_48016) - (G__46907_48015 * G__46905_48009)));

(b[(1)] = ((G__46905_48009 * G__46906_48014) - (G__46908_48016 * G__46903_48007)));

(b[(2)] = ((G__46903_48007 * G__46907_48015) - (G__46906_48014 * G__46904_48008)));
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return thi.ng.xerror.core.key_error_BANG_(n);
}
} else {
return null;
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,nf){
var self__ = this;
var ___$1 = this;
if((n >= (0))){
if((n < (3))){
return (self__.buf[n]);
} else {
return nf;
}
} else {
return null;
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (_,n,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array(self__.buf));
(b[n] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),cljs.core.cons((self__.buf[(2)]),null));
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (3);
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(2)]);
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((2)));
(b[(0)] = (self__.buf[(0)]));

(b[(1)] = (self__.buf[(1)]));

return (new thi.ng.geom.core.vector.Vec2(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (- (self__.buf[(0)])));

(self__.buf[(1)] = (- (self__.buf[(1)])));

(self__.buf[(2)] = (- (self__.buf[(2)])));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__46909_48020 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__46910_48021 = v.buf;
(self__.buf[(0)] = ((G__46909_48020[(0)]) - (G__46910_48021[(0)])));

(self__.buf[(1)] = ((G__46909_48020[(1)]) - (G__46910_48021[(1)])));

(self__.buf[(2)] = ((G__46909_48020[(2)]) - (G__46910_48021[(2)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__46909_48020[(0)]) - v));

(self__.buf[(1)] = ((G__46909_48020[(1)]) - v));

(self__.buf[(2)] = ((G__46909_48020[(2)]) - v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__46909_48020[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__46909_48020[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__46909_48020[(2)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__46923_48022 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__46924_48023 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__46925_48024 = (((!(G__46923_48022)))?typeof v1 === 'number':null);
var G__46926_48025 = (((!(G__46924_48023)))?typeof v2 === 'number':null);
var G__46911_48026 = self__.buf;
var G__46912_48027 = ((G__46923_48022)?v1.buf:null);
var G__46913_48028 = ((G__46924_48023)?v2.buf:null);
var G__46914_48029 = (G__46911_48026[(0)]);
var G__46915_48030 = (G__46911_48026[(1)]);
var G__46916_48031 = (G__46911_48026[(2)]);
var G__46917_48032 = ((G__46923_48022)?(G__46912_48027[(0)]):(cljs.core.truth_(G__46925_48024)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__46918_48033 = ((G__46923_48022)?(G__46912_48027[(1)]):(cljs.core.truth_(G__46925_48024)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__46919_48034 = ((G__46923_48022)?(G__46912_48027[(2)]):(cljs.core.truth_(G__46925_48024)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__46920_48035 = ((G__46924_48023)?(G__46913_48028[(0)]):(cljs.core.truth_(G__46926_48025)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__46921_48036 = ((G__46924_48023)?(G__46913_48028[(1)]):(cljs.core.truth_(G__46926_48025)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__46922_48037 = ((G__46924_48023)?(G__46913_48028[(2)]):(cljs.core.truth_(G__46926_48025)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__46914_48029 - G__46917_48032) - G__46920_48035));

(self__.buf[(1)] = ((G__46915_48030 - G__46918_48033) - G__46921_48036));

(self__.buf[(2)] = ((G__46916_48031 - G__46919_48034) - G__46922_48037));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) - x));

(self__.buf[(1)] = ((self__.buf[(1)]) - y));

(self__.buf[(2)] = ((self__.buf[(2)]) - z));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__46927_48038 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__46928_48039 = v.buf;
(self__.buf[(0)] = ((G__46927_48038[(0)]) * (G__46928_48039[(0)])));

(self__.buf[(1)] = ((G__46927_48038[(1)]) * (G__46928_48039[(1)])));

(self__.buf[(2)] = ((G__46927_48038[(2)]) * (G__46928_48039[(2)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__46927_48038[(0)]) * v));

(self__.buf[(1)] = ((G__46927_48038[(1)]) * v));

(self__.buf[(2)] = ((G__46927_48038[(2)]) * v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__46927_48038[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__46927_48038[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__46927_48038[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__46941_48040 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__46942_48041 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__46943_48042 = (((!(G__46941_48040)))?typeof v1 === 'number':null);
var G__46944_48043 = (((!(G__46942_48041)))?typeof v2 === 'number':null);
var G__46929_48044 = self__.buf;
var G__46930_48045 = ((G__46941_48040)?v1.buf:null);
var G__46931_48046 = ((G__46942_48041)?v2.buf:null);
var G__46932_48047 = (G__46929_48044[(0)]);
var G__46933_48048 = (G__46929_48044[(1)]);
var G__46934_48049 = (G__46929_48044[(2)]);
var G__46935_48050 = ((G__46941_48040)?(G__46930_48045[(0)]):(cljs.core.truth_(G__46943_48042)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__46936_48051 = ((G__46941_48040)?(G__46930_48045[(1)]):(cljs.core.truth_(G__46943_48042)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__46937_48052 = ((G__46941_48040)?(G__46930_48045[(2)]):(cljs.core.truth_(G__46943_48042)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__46938_48053 = ((G__46942_48041)?(G__46931_48046[(0)]):(cljs.core.truth_(G__46944_48043)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__46939_48054 = ((G__46942_48041)?(G__46931_48046[(1)]):(cljs.core.truth_(G__46944_48043)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__46940_48055 = ((G__46942_48041)?(G__46931_48046[(2)]):(cljs.core.truth_(G__46944_48043)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__46932_48047 * G__46935_48050) * G__46938_48053));

(self__.buf[(1)] = ((G__46933_48048 * G__46936_48051) * G__46939_48054));

(self__.buf[(2)] = ((G__46934_48049 * G__46937_48052) * G__46940_48055));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) * x));

(self__.buf[(1)] = ((self__.buf[(1)]) * y));

(self__.buf[(2)] = ((self__.buf[(2)]) * z));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__46957_48056 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__46958_48057 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__46959_48058 = (((!(G__46957_48056)))?typeof a === 'number':null);
var G__46960_48059 = (((!(G__46958_48057)))?typeof b === 'number':null);
var G__46945_48060 = self__.buf;
var G__46946_48061 = ((G__46957_48056)?a.buf:null);
var G__46947_48062 = ((G__46958_48057)?b.buf:null);
var G__46948_48063 = (G__46945_48060[(0)]);
var G__46949_48064 = (G__46945_48060[(1)]);
var G__46950_48065 = (G__46945_48060[(2)]);
var G__46951_48066 = ((G__46957_48056)?(G__46946_48061[(0)]):(cljs.core.truth_(G__46959_48058)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__46952_48067 = ((G__46957_48056)?(G__46946_48061[(1)]):(cljs.core.truth_(G__46959_48058)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__46953_48068 = ((G__46957_48056)?(G__46946_48061[(2)]):(cljs.core.truth_(G__46959_48058)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__46954_48069 = ((G__46958_48057)?(G__46947_48062[(0)]):(cljs.core.truth_(G__46960_48059)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__46955_48070 = ((G__46958_48057)?(G__46947_48062[(1)]):(cljs.core.truth_(G__46960_48059)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__46956_48071 = ((G__46958_48057)?(G__46947_48062[(2)]):(cljs.core.truth_(G__46960_48059)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(self__.buf[(0)] = ((G__46948_48063 - G__46951_48066) * G__46954_48069));

(self__.buf[(1)] = ((G__46949_48064 - G__46952_48067) * G__46955_48070));

(self__.buf[(2)] = ((G__46950_48065 - G__46953_48068) * G__46956_48071));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__46974_48072 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__46975_48073 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__46976_48074 = (((!(G__46974_48072)))?typeof a === 'number':null);
var G__46977_48075 = (((!(G__46975_48073)))?typeof b === 'number':null);
var G__46962_48076 = self__.buf;
var G__46963_48077 = ((G__46974_48072)?a.buf:null);
var G__46964_48078 = ((G__46975_48073)?b.buf:null);
var G__46965_48079 = (G__46962_48076[(0)]);
var G__46966_48080 = (G__46962_48076[(1)]);
var G__46967_48081 = (G__46962_48076[(2)]);
var G__46968_48082 = ((G__46974_48072)?(G__46963_48077[(0)]):(cljs.core.truth_(G__46976_48074)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__46969_48083 = ((G__46974_48072)?(G__46963_48077[(1)]):(cljs.core.truth_(G__46976_48074)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__46970_48084 = ((G__46974_48072)?(G__46963_48077[(2)]):(cljs.core.truth_(G__46976_48074)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__46971_48085 = ((G__46975_48073)?(G__46964_48078[(0)]):(cljs.core.truth_(G__46977_48075)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__46972_48086 = ((G__46975_48073)?(G__46964_48078[(1)]):(cljs.core.truth_(G__46977_48075)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__46973_48087 = ((G__46975_48073)?(G__46964_48078[(2)]):(cljs.core.truth_(G__46977_48075)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(self__.buf[(0)] = ((G__46965_48079 * G__46968_48082) - G__46971_48085));

(self__.buf[(1)] = ((G__46966_48080 * G__46969_48083) - G__46972_48086));

(self__.buf[(2)] = ((G__46967_48081 * G__46970_48084) - G__46973_48087));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = (function (){var G__46980 = (self__.buf[(0)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__46980) : thi.ng.math.core.abs.call(null,G__46980));
})());

(self__.buf[(1)] = (function (){var G__46981 = (self__.buf[(1)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__46981) : thi.ng.math.core.abs.call(null,G__46981));
})());

(self__.buf[(2)] = (function (){var G__46982 = (self__.buf[(2)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__46982) : thi.ng.math.core.abs.call(null,G__46982));
})());

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__46996_48092 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__46997_48093 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__46998_48094 = (((!(G__46996_48092)))?typeof a === 'number':null);
var G__46999_48095 = (((!(G__46997_48093)))?typeof b === 'number':null);
var G__46984_48096 = self__.buf;
var G__46985_48097 = ((G__46996_48092)?a.buf:null);
var G__46986_48098 = ((G__46997_48093)?b.buf:null);
var G__46987_48099 = (G__46984_48096[(0)]);
var G__46988_48100 = (G__46984_48096[(1)]);
var G__46989_48101 = (G__46984_48096[(2)]);
var G__46990_48102 = ((G__46996_48092)?(G__46985_48097[(0)]):(cljs.core.truth_(G__46998_48094)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__46991_48103 = ((G__46996_48092)?(G__46985_48097[(1)]):(cljs.core.truth_(G__46998_48094)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__46992_48104 = ((G__46996_48092)?(G__46985_48097[(2)]):(cljs.core.truth_(G__46998_48094)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__46993_48105 = ((G__46997_48093)?(G__46986_48098[(0)]):(cljs.core.truth_(G__46999_48095)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__46994_48106 = ((G__46997_48093)?(G__46986_48098[(1)]):(cljs.core.truth_(G__46999_48095)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__46995_48107 = ((G__46997_48093)?(G__46986_48098[(2)]):(cljs.core.truth_(G__46999_48095)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(self__.buf[(0)] = ((G__46987_48099 * G__46990_48102) + G__46993_48105));

(self__.buf[(1)] = ((G__46988_48100 * G__46991_48103) + G__46994_48106));

(self__.buf[(2)] = ((G__46989_48101 * G__46992_48104) + G__46995_48107));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((1) / (self__.buf[(0)])));

(self__.buf[(1)] = ((1) / (self__.buf[(1)])));

(self__.buf[(2)] = ((1) / (self__.buf[(2)])));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__47001_48111 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__47002_48112 = v.buf;
(self__.buf[(0)] = ((G__47001_48111[(0)]) / (G__47002_48112[(0)])));

(self__.buf[(1)] = ((G__47001_48111[(1)]) / (G__47002_48112[(1)])));

(self__.buf[(2)] = ((G__47001_48111[(2)]) / (G__47002_48112[(2)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__47001_48111[(0)]) / v));

(self__.buf[(1)] = ((G__47001_48111[(1)]) / v));

(self__.buf[(2)] = ((G__47001_48111[(2)]) / v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__47001_48111[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__47001_48111[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__47001_48111[(2)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__47015_48113 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__47016_48114 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__47017_48115 = (((!(G__47015_48113)))?typeof v1 === 'number':null);
var G__47018_48116 = (((!(G__47016_48114)))?typeof v2 === 'number':null);
var G__47003_48117 = self__.buf;
var G__47004_48118 = ((G__47015_48113)?v1.buf:null);
var G__47005_48119 = ((G__47016_48114)?v2.buf:null);
var G__47006_48120 = (G__47003_48117[(0)]);
var G__47007_48121 = (G__47003_48117[(1)]);
var G__47008_48122 = (G__47003_48117[(2)]);
var G__47009_48123 = ((G__47015_48113)?(G__47004_48118[(0)]):(cljs.core.truth_(G__47017_48115)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__47010_48124 = ((G__47015_48113)?(G__47004_48118[(1)]):(cljs.core.truth_(G__47017_48115)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__47011_48125 = ((G__47015_48113)?(G__47004_48118[(2)]):(cljs.core.truth_(G__47017_48115)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__47012_48126 = ((G__47016_48114)?(G__47005_48119[(0)]):(cljs.core.truth_(G__47018_48116)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__47013_48127 = ((G__47016_48114)?(G__47005_48119[(1)]):(cljs.core.truth_(G__47018_48116)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__47014_48128 = ((G__47016_48114)?(G__47005_48119[(2)]):(cljs.core.truth_(G__47018_48116)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__47006_48120 / G__47009_48123) / G__47012_48126));

(self__.buf[(1)] = ((G__47007_48121 / G__47010_48124) / G__47013_48127));

(self__.buf[(2)] = ((G__47008_48122 / G__47011_48125) / G__47014_48128));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) / x));

(self__.buf[(1)] = ((self__.buf[(1)]) / y));

(self__.buf[(2)] = ((self__.buf[(2)]) / z));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__47019_48129 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__47020_48130 = v.buf;
(self__.buf[(0)] = ((G__47019_48129[(0)]) + (G__47020_48130[(0)])));

(self__.buf[(1)] = ((G__47019_48129[(1)]) + (G__47020_48130[(1)])));

(self__.buf[(2)] = ((G__47019_48129[(2)]) + (G__47020_48130[(2)])));

(self__._hash = null);
} else {
if(typeof v === 'number'){
(self__.buf[(0)] = ((G__47019_48129[(0)]) + v));

(self__.buf[(1)] = ((G__47019_48129[(1)]) + v));

(self__.buf[(2)] = ((G__47019_48129[(2)]) + v));

(self__._hash = null);
} else {
(self__.buf[(0)] = ((G__47019_48129[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(self__.buf[(1)] = ((G__47019_48129[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(self__.buf[(2)] = ((G__47019_48129[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));

(self__._hash = null);
}
}

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var G__47033_48133 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__47034_48134 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__47035_48135 = (((!(G__47033_48133)))?typeof v1 === 'number':null);
var G__47036_48136 = (((!(G__47034_48134)))?typeof v2 === 'number':null);
var G__47021_48137 = self__.buf;
var G__47022_48138 = ((G__47033_48133)?v1.buf:null);
var G__47023_48139 = ((G__47034_48134)?v2.buf:null);
var G__47024_48140 = (G__47021_48137[(0)]);
var G__47025_48141 = (G__47021_48137[(1)]);
var G__47026_48142 = (G__47021_48137[(2)]);
var G__47027_48143 = ((G__47033_48133)?(G__47022_48138[(0)]):(cljs.core.truth_(G__47035_48135)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__47028_48144 = ((G__47033_48133)?(G__47022_48138[(1)]):(cljs.core.truth_(G__47035_48135)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__47029_48145 = ((G__47033_48133)?(G__47022_48138[(2)]):(cljs.core.truth_(G__47035_48135)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__47030_48146 = ((G__47034_48134)?(G__47023_48139[(0)]):(cljs.core.truth_(G__47036_48136)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__47031_48147 = ((G__47034_48134)?(G__47023_48139[(1)]):(cljs.core.truth_(G__47036_48136)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__47032_48148 = ((G__47034_48134)?(G__47023_48139[(2)]):(cljs.core.truth_(G__47036_48136)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(self__.buf[(0)] = ((G__47024_48140 + G__47027_48143) + G__47030_48146));

(self__.buf[(1)] = ((G__47025_48141 + G__47028_48144) + G__47031_48147));

(self__.buf[(2)] = ((G__47026_48142 + G__47029_48145) + G__47032_48148));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
(self__.buf[(0)] = ((self__.buf[(0)]) + x));

(self__.buf[(1)] = ((self__.buf[(1)]) + y));

(self__.buf[(2)] = ((self__.buf[(2)]) + z));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var G__47050_48155 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__47051_48156 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__47052_48157 = (((!(G__47050_48155)))?typeof a === 'number':null);
var G__47053_48158 = (((!(G__47051_48156)))?typeof b === 'number':null);
var G__47038_48159 = self__.buf;
var G__47039_48160 = ((G__47050_48155)?a.buf:null);
var G__47040_48161 = ((G__47051_48156)?b.buf:null);
var G__47041_48162 = (G__47038_48159[(0)]);
var G__47042_48163 = (G__47038_48159[(1)]);
var G__47043_48164 = (G__47038_48159[(2)]);
var G__47044_48165 = ((G__47050_48155)?(G__47039_48160[(0)]):(cljs.core.truth_(G__47052_48157)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__47045_48166 = ((G__47050_48155)?(G__47039_48160[(1)]):(cljs.core.truth_(G__47052_48157)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__47046_48167 = ((G__47050_48155)?(G__47039_48160[(2)]):(cljs.core.truth_(G__47052_48157)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__47047_48168 = ((G__47051_48156)?(G__47040_48161[(0)]):(cljs.core.truth_(G__47053_48158)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__47048_48169 = ((G__47051_48156)?(G__47040_48161[(1)]):(cljs.core.truth_(G__47053_48158)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__47049_48170 = ((G__47051_48156)?(G__47040_48161[(2)]):(cljs.core.truth_(G__47053_48158)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(self__.buf[(0)] = ((G__47041_48162 + G__47044_48165) * G__47047_48168));

(self__.buf[(1)] = ((G__47042_48163 + G__47045_48166) * G__47048_48169));

(self__.buf[(2)] = ((G__47043_48164 + G__47046_48167) * G__47049_48170));

(self__._hash = null);

return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var fexpr__47054 = (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"zyx","zyx",1752527951)) : thi.ng.geom.core.vector.swizzle3_fns.call(null,new cljs.core.Keyword(null,"zyx","zyx",1752527951)));
return (fexpr__47054.cljs$core$IFn$_invoke$arity$1 ? fexpr__47054.cljs$core$IFn$_invoke$arity$1(___$1) : fexpr__47054.call(null,___$1));
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var or__4126__auto__ = self__._hash;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (___$1._hash = cljs.core.mix_collection_hash(((cljs.core.imul(((cljs.core.imul((((31) + cljs.core.hash((self__.buf[(0)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(1)]))) | (0)),(31)) + cljs.core.hash((self__.buf[(2)]))) | (0)),(3)));
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
return ((((self__.buf[(0)]) === (b_SINGLEQUOTE_[(0)]))) && (((self__.buf[(1)]) === (b_SINGLEQUOTE_[(1)]))) && (((self__.buf[(2)]) === (b_SINGLEQUOTE_[(2)]))));
} else {
return ((cljs.core.sequential_QMARK_(o)) && (((3) === cljs.core.count(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(0)]),cljs.core.first(o))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(1)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((self__.buf[(2)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(o,(2)))));
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$PHeading$heading_xy$arity$1(null);
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(1)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(0)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$heading_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var t = Math.atan2((self__.buf[(2)]),(self__.buf[(1)]));
if((t < (0))){
return (t + thi.ng.math.core.TWO_PI);
} else {
return t;
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$angle_between$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var v__$1 = (((v instanceof thi.ng.geom.core.vector.Vec3))?v:(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(v) : thi.ng.geom.core.vector.vec3.call(null,v)));
return Math.acos(thi.ng.geom.core.dot(___$1.thi$ng$geom$core$PNormalize$normalize$arity$1(null),thi.ng.geom.core.normalize(v__$1)));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xy$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(1)]) / (self__.buf[(0)]));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_xz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(0)]));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PHeading$slope_yz$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((self__.buf[(2)]) / (self__.buf[(1)]));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return Math.sqrt(___$1.thi$ng$geom$core$PDistance$dist_squared$arity$2(null,v));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PDistance$dist_squared$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var G__47058 = self__.buf;
var G__47060 = (G__47058[(0)]);
var G__47061 = (G__47058[(1)]);
var G__47062 = (G__47058[(2)]);
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__47059 = v.buf;
var G__47063 = (G__47059[(0)]);
var G__47064 = (G__47059[(1)]);
var G__47065 = (G__47059[(2)]);
var dx = (G__47060 - G__47063);
var dy = (G__47061 - G__47064);
var dz = (G__47062 - G__47065);
return (((dx * dx) + (dy * dy)) + (dz * dz));
} else {
var G__47063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
var G__47064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
var G__47065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
var dx = (G__47060 - G__47063);
var dy = (G__47061 - G__47064);
var dz = (G__47062 - G__47065);
return (((dx * dx) + (dy * dy)) + (dz * dz));
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__47066 = (self__.buf[(0)]);
var G__47067 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47066,G__47067) : f.call(null,G__47066,G__47067));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
var acc__$1 = (function (){var G__47068 = acc;
var G__47069 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47068,G__47069) : f.call(null,G__47068,G__47069));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.deref(acc__$1);
} else {
return acc__$1;
}
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
var coll__$1 = this;
var acc = (function (){var G__47070 = start;
var G__47071 = (self__.buf[(0)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47070,G__47071) : f.call(null,G__47070,G__47071));
})();
if(cljs.core.reduced_QMARK_(acc)){
return cljs.core.deref(acc);
} else {
var acc__$1 = (function (){var G__47072 = acc;
var G__47073 = (self__.buf[(1)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47072,G__47073) : f.call(null,G__47072,G__47073));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.deref(acc__$1);
} else {
var acc__$2 = (function (){var G__47074 = acc__$1;
var G__47075 = (self__.buf[(2)]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__47074,G__47075) : f.call(null,G__47074,G__47075));
})();
if(cljs.core.reduced_QMARK_(acc__$2)){
return cljs.core.deref(acc__$2);
} else {
return acc__$2;
}
}
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInvert$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$geom$core$PMathOps$_$arity$1(null);
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$msub$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__46308__auto__ = (new Float32Array((3)));
var G__47088_48185 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__47089_48186 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__47090_48187 = (((!(G__47088_48185)))?typeof a === 'number':null);
var G__47091_48188 = (((!(G__47089_48186)))?typeof b === 'number':null);
var G__47076_48189 = self__.buf;
var G__47077_48190 = ((G__47088_48185)?a.buf:null);
var G__47078_48191 = ((G__47089_48186)?b.buf:null);
var G__47079_48192 = (G__47076_48189[(0)]);
var G__47080_48193 = (G__47076_48189[(1)]);
var G__47081_48194 = (G__47076_48189[(2)]);
var G__47082_48195 = ((G__47088_48185)?(G__47077_48190[(0)]):(cljs.core.truth_(G__47090_48187)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__47083_48196 = ((G__47088_48185)?(G__47077_48190[(1)]):(cljs.core.truth_(G__47090_48187)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__47084_48197 = ((G__47088_48185)?(G__47077_48190[(2)]):(cljs.core.truth_(G__47090_48187)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__47085_48198 = ((G__47089_48186)?(G__47078_48191[(0)]):(cljs.core.truth_(G__47091_48188)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__47086_48199 = ((G__47089_48186)?(G__47078_48191[(1)]):(cljs.core.truth_(G__47091_48188)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__47087_48200 = ((G__47089_48186)?(G__47078_48191[(2)]):(cljs.core.truth_(G__47091_48188)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__46308__auto__[(0)] = ((G__47079_48192 * G__47082_48195) - G__47085_48198));

(dest__46308__auto__[(1)] = ((G__47080_48193 * G__47083_48196) - G__47086_48199));

(dest__46308__auto__[(2)] = ((G__47081_48194 * G__47084_48197) - G__47087_48200));

return (new thi.ng.geom.core.vector.Vec3(dest__46308__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46283__auto__ = (new Float32Array((3)));
var G__47093_48202 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__47094_48203 = v.buf;
(dest__46283__auto__[(0)] = ((G__47093_48202[(0)]) * (G__47094_48203[(0)])));

(dest__46283__auto__[(1)] = ((G__47093_48202[(1)]) * (G__47094_48203[(1)])));

(dest__46283__auto__[(2)] = ((G__47093_48202[(2)]) * (G__47094_48203[(2)])));
} else {
if(typeof v === 'number'){
(dest__46283__auto__[(0)] = ((G__47093_48202[(0)]) * v));

(dest__46283__auto__[(1)] = ((G__47093_48202[(1)]) * v));

(dest__46283__auto__[(2)] = ((G__47093_48202[(2)]) * v));
} else {
(dest__46283__auto__[(0)] = ((G__47093_48202[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__46283__auto__[(1)] = ((G__47093_48202[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__46283__auto__[(2)] = ((G__47093_48202[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__46283__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__46308__auto__ = (new Float32Array((3)));
var G__47107_48204 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__47108_48205 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__47109_48206 = (((!(G__47107_48204)))?typeof v1 === 'number':null);
var G__47110_48207 = (((!(G__47108_48205)))?typeof v2 === 'number':null);
var G__47095_48208 = self__.buf;
var G__47096_48209 = ((G__47107_48204)?v1.buf:null);
var G__47097_48210 = ((G__47108_48205)?v2.buf:null);
var G__47098_48211 = (G__47095_48208[(0)]);
var G__47099_48212 = (G__47095_48208[(1)]);
var G__47100_48213 = (G__47095_48208[(2)]);
var G__47101_48214 = ((G__47107_48204)?(G__47096_48209[(0)]):(cljs.core.truth_(G__47109_48206)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__47102_48215 = ((G__47107_48204)?(G__47096_48209[(1)]):(cljs.core.truth_(G__47109_48206)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__47103_48216 = ((G__47107_48204)?(G__47096_48209[(2)]):(cljs.core.truth_(G__47109_48206)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__47104_48217 = ((G__47108_48205)?(G__47097_48210[(0)]):(cljs.core.truth_(G__47110_48207)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__47105_48218 = ((G__47108_48205)?(G__47097_48210[(1)]):(cljs.core.truth_(G__47110_48207)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__47106_48219 = ((G__47108_48205)?(G__47097_48210[(2)]):(cljs.core.truth_(G__47110_48207)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__46308__auto__[(0)] = ((G__47098_48211 * G__47101_48214) * G__47104_48217));

(dest__46308__auto__[(1)] = ((G__47099_48212 * G__47102_48215) * G__47105_48218));

(dest__46308__auto__[(2)] = ((G__47100_48213 * G__47103_48216) * G__47106_48219));

return (new thi.ng.geom.core.vector.Vec3(dest__46308__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_STAR_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__47111 = self__.buf;
var dest__46261__auto__ = (new Float32Array((3)));
(dest__46261__auto__[(0)] = ((G__47111[(0)]) * x));

(dest__46261__auto__[(1)] = ((G__47111[(1)]) * y));

(dest__46261__auto__[(2)] = ((G__47111[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__46261__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__46252__auto__ = (new Float32Array((3)));
var G__47112_48222 = self__.buf;
(dest__46252__auto__[(0)] = (- (G__47112_48222[(0)])));

(dest__46252__auto__[(1)] = (- (G__47112_48222[(1)])));

(dest__46252__auto__[(2)] = (- (G__47112_48222[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__46252__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46283__auto__ = (new Float32Array((3)));
var G__47113_48223 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__47114_48224 = v.buf;
(dest__46283__auto__[(0)] = ((G__47113_48223[(0)]) - (G__47114_48224[(0)])));

(dest__46283__auto__[(1)] = ((G__47113_48223[(1)]) - (G__47114_48224[(1)])));

(dest__46283__auto__[(2)] = ((G__47113_48223[(2)]) - (G__47114_48224[(2)])));
} else {
if(typeof v === 'number'){
(dest__46283__auto__[(0)] = ((G__47113_48223[(0)]) - v));

(dest__46283__auto__[(1)] = ((G__47113_48223[(1)]) - v));

(dest__46283__auto__[(2)] = ((G__47113_48223[(2)]) - v));
} else {
(dest__46283__auto__[(0)] = ((G__47113_48223[(0)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__46283__auto__[(1)] = ((G__47113_48223[(1)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__46283__auto__[(2)] = ((G__47113_48223[(2)]) - cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__46283__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__46308__auto__ = (new Float32Array((3)));
var G__47127_48237 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__47128_48238 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__47129_48239 = (((!(G__47127_48237)))?typeof v1 === 'number':null);
var G__47130_48240 = (((!(G__47128_48238)))?typeof v2 === 'number':null);
var G__47115_48241 = self__.buf;
var G__47116_48242 = ((G__47127_48237)?v1.buf:null);
var G__47117_48243 = ((G__47128_48238)?v2.buf:null);
var G__47118_48244 = (G__47115_48241[(0)]);
var G__47119_48245 = (G__47115_48241[(1)]);
var G__47120_48246 = (G__47115_48241[(2)]);
var G__47121_48247 = ((G__47127_48237)?(G__47116_48242[(0)]):(cljs.core.truth_(G__47129_48239)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__47122_48248 = ((G__47127_48237)?(G__47116_48242[(1)]):(cljs.core.truth_(G__47129_48239)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__47123_48249 = ((G__47127_48237)?(G__47116_48242[(2)]):(cljs.core.truth_(G__47129_48239)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__47124_48250 = ((G__47128_48238)?(G__47117_48243[(0)]):(cljs.core.truth_(G__47130_48240)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__47125_48251 = ((G__47128_48238)?(G__47117_48243[(1)]):(cljs.core.truth_(G__47130_48240)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__47126_48252 = ((G__47128_48238)?(G__47117_48243[(2)]):(cljs.core.truth_(G__47130_48240)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__46308__auto__[(0)] = ((G__47118_48244 - G__47121_48247) - G__47124_48250));

(dest__46308__auto__[(1)] = ((G__47119_48245 - G__47122_48248) - G__47125_48251));

(dest__46308__auto__[(2)] = ((G__47120_48246 - G__47123_48249) - G__47126_48252));

return (new thi.ng.geom.core.vector.Vec3(dest__46308__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__47131 = self__.buf;
var dest__46261__auto__ = (new Float32Array((3)));
(dest__46261__auto__[(0)] = ((G__47131[(0)]) - x));

(dest__46261__auto__[(1)] = ((G__47131[(1)]) - y));

(dest__46261__auto__[(2)] = ((G__47131[(2)]) - z));

return (new thi.ng.geom.core.vector.Vec3(dest__46261__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$madd$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__46308__auto__ = (new Float32Array((3)));
var G__47144_48261 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__47145_48262 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__47146_48263 = (((!(G__47144_48261)))?typeof a === 'number':null);
var G__47147_48264 = (((!(G__47145_48262)))?typeof b === 'number':null);
var G__47132_48265 = self__.buf;
var G__47133_48266 = ((G__47144_48261)?a.buf:null);
var G__47134_48267 = ((G__47145_48262)?b.buf:null);
var G__47135_48268 = (G__47132_48265[(0)]);
var G__47136_48269 = (G__47132_48265[(1)]);
var G__47137_48270 = (G__47132_48265[(2)]);
var G__47138_48271 = ((G__47144_48261)?(G__47133_48266[(0)]):(cljs.core.truth_(G__47146_48263)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),1.0)));
var G__47139_48272 = ((G__47144_48261)?(G__47133_48266[(1)]):(cljs.core.truth_(G__47146_48263)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),1.0)));
var G__47140_48273 = ((G__47144_48261)?(G__47133_48266[(2)]):(cljs.core.truth_(G__47146_48263)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),1.0)));
var G__47141_48274 = ((G__47145_48262)?(G__47134_48267[(0)]):(cljs.core.truth_(G__47147_48264)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__47142_48275 = ((G__47145_48262)?(G__47134_48267[(1)]):(cljs.core.truth_(G__47147_48264)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__47143_48276 = ((G__47145_48262)?(G__47134_48267[(2)]):(cljs.core.truth_(G__47147_48264)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
(dest__46308__auto__[(0)] = ((G__47135_48268 * G__47138_48271) + G__47141_48274));

(dest__46308__auto__[(1)] = ((G__47136_48269 * G__47139_48272) + G__47142_48275));

(dest__46308__auto__[(2)] = ((G__47137_48270 * G__47140_48273) + G__47143_48276));

return (new thi.ng.geom.core.vector.Vec3(dest__46308__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$addm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__46308__auto__ = (new Float32Array((3)));
var G__47160_48291 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__47161_48292 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__47162_48293 = (((!(G__47160_48291)))?typeof a === 'number':null);
var G__47163_48294 = (((!(G__47161_48292)))?typeof b === 'number':null);
var G__47148_48295 = self__.buf;
var G__47149_48296 = ((G__47160_48291)?a.buf:null);
var G__47150_48297 = ((G__47161_48292)?b.buf:null);
var G__47151_48298 = (G__47148_48295[(0)]);
var G__47152_48299 = (G__47148_48295[(1)]);
var G__47153_48300 = (G__47148_48295[(2)]);
var G__47154_48301 = ((G__47160_48291)?(G__47149_48296[(0)]):(cljs.core.truth_(G__47162_48293)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__47155_48302 = ((G__47160_48291)?(G__47149_48296[(1)]):(cljs.core.truth_(G__47162_48293)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__47156_48303 = ((G__47160_48291)?(G__47149_48296[(2)]):(cljs.core.truth_(G__47162_48293)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__47157_48304 = ((G__47161_48292)?(G__47150_48297[(0)]):(cljs.core.truth_(G__47163_48294)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__47158_48305 = ((G__47161_48292)?(G__47150_48297[(1)]):(cljs.core.truth_(G__47163_48294)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__47159_48306 = ((G__47161_48292)?(G__47150_48297[(2)]):(cljs.core.truth_(G__47163_48294)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(dest__46308__auto__[(0)] = ((G__47151_48298 + G__47154_48301) * G__47157_48304));

(dest__46308__auto__[(1)] = ((G__47152_48299 + G__47155_48302) * G__47158_48305));

(dest__46308__auto__[(2)] = ((G__47153_48300 + G__47156_48303) * G__47159_48306));

return (new thi.ng.geom.core.vector.Vec3(dest__46308__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__46252__auto__ = (new Float32Array((3)));
var G__47164_48314 = self__.buf;
(dest__46252__auto__[(0)] = ((1) / (G__47164_48314[(0)])));

(dest__46252__auto__[(1)] = ((1) / (G__47164_48314[(1)])));

(dest__46252__auto__[(2)] = ((1) / (G__47164_48314[(2)])));

return (new thi.ng.geom.core.vector.Vec3(dest__46252__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46283__auto__ = (new Float32Array((3)));
var G__47165_48316 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__47166_48317 = v.buf;
(dest__46283__auto__[(0)] = ((G__47165_48316[(0)]) / (G__47166_48317[(0)])));

(dest__46283__auto__[(1)] = ((G__47165_48316[(1)]) / (G__47166_48317[(1)])));

(dest__46283__auto__[(2)] = ((G__47165_48316[(2)]) / (G__47166_48317[(2)])));
} else {
if(typeof v === 'number'){
(dest__46283__auto__[(0)] = ((G__47165_48316[(0)]) / v));

(dest__46283__auto__[(1)] = ((G__47165_48316[(1)]) / v));

(dest__46283__auto__[(2)] = ((G__47165_48316[(2)]) / v));
} else {
(dest__46283__auto__[(0)] = ((G__47165_48316[(0)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__46283__auto__[(1)] = ((G__47165_48316[(1)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__46283__auto__[(2)] = ((G__47165_48316[(2)]) / cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__46283__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__46308__auto__ = (new Float32Array((3)));
var G__47179_48333 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__47180_48334 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__47181_48335 = (((!(G__47179_48333)))?typeof v1 === 'number':null);
var G__47182_48336 = (((!(G__47180_48334)))?typeof v2 === 'number':null);
var G__47167_48337 = self__.buf;
var G__47168_48338 = ((G__47179_48333)?v1.buf:null);
var G__47169_48339 = ((G__47180_48334)?v2.buf:null);
var G__47170_48340 = (G__47167_48337[(0)]);
var G__47171_48341 = (G__47167_48337[(1)]);
var G__47172_48342 = (G__47167_48337[(2)]);
var G__47173_48343 = ((G__47179_48333)?(G__47168_48338[(0)]):(cljs.core.truth_(G__47181_48335)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__47174_48344 = ((G__47179_48333)?(G__47168_48338[(1)]):(cljs.core.truth_(G__47181_48335)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__47175_48345 = ((G__47179_48333)?(G__47168_48338[(2)]):(cljs.core.truth_(G__47181_48335)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__47176_48346 = ((G__47180_48334)?(G__47169_48339[(0)]):(cljs.core.truth_(G__47182_48336)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__47177_48347 = ((G__47180_48334)?(G__47169_48339[(1)]):(cljs.core.truth_(G__47182_48336)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__47178_48348 = ((G__47180_48334)?(G__47169_48339[(2)]):(cljs.core.truth_(G__47182_48336)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__46308__auto__[(0)] = ((G__47170_48340 / G__47173_48343) / G__47176_48346));

(dest__46308__auto__[(1)] = ((G__47171_48341 / G__47174_48344) / G__47177_48347));

(dest__46308__auto__[(2)] = ((G__47172_48342 / G__47175_48345) / G__47178_48348));

return (new thi.ng.geom.core.vector.Vec3(dest__46308__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$div$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__47183 = self__.buf;
var dest__46261__auto__ = (new Float32Array((3)));
(dest__46261__auto__[(0)] = ((G__47183[(0)]) / x));

(dest__46261__auto__[(1)] = ((G__47183[(1)]) / y));

(dest__46261__auto__[(2)] = ((G__47183[(2)]) / z));

return (new thi.ng.geom.core.vector.Vec3(dest__46261__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46283__auto__ = (new Float32Array((3)));
var G__47184_48359 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__47185_48360 = v.buf;
(dest__46283__auto__[(0)] = ((G__47184_48359[(0)]) + (G__47185_48360[(0)])));

(dest__46283__auto__[(1)] = ((G__47184_48359[(1)]) + (G__47185_48360[(1)])));

(dest__46283__auto__[(2)] = ((G__47184_48359[(2)]) + (G__47185_48360[(2)])));
} else {
if(typeof v === 'number'){
(dest__46283__auto__[(0)] = ((G__47184_48359[(0)]) + v));

(dest__46283__auto__[(1)] = ((G__47184_48359[(1)]) + v));

(dest__46283__auto__[(2)] = ((G__47184_48359[(2)]) + v));
} else {
(dest__46283__auto__[(0)] = ((G__47184_48359[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__46283__auto__[(1)] = ((G__47184_48359[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__46283__auto__[(2)] = ((G__47184_48359[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__46283__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__46308__auto__ = (new Float32Array((3)));
var G__47198_48361 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__47199_48362 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__47200_48363 = (((!(G__47198_48361)))?typeof v1 === 'number':null);
var G__47201_48364 = (((!(G__47199_48362)))?typeof v2 === 'number':null);
var G__47186_48365 = self__.buf;
var G__47187_48366 = ((G__47198_48361)?v1.buf:null);
var G__47188_48367 = ((G__47199_48362)?v2.buf:null);
var G__47189_48368 = (G__47186_48365[(0)]);
var G__47190_48369 = (G__47186_48365[(1)]);
var G__47191_48370 = (G__47186_48365[(2)]);
var G__47192_48371 = ((G__47198_48361)?(G__47187_48366[(0)]):(cljs.core.truth_(G__47200_48363)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__47193_48372 = ((G__47198_48361)?(G__47187_48366[(1)]):(cljs.core.truth_(G__47200_48363)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__47194_48373 = ((G__47198_48361)?(G__47187_48366[(2)]):(cljs.core.truth_(G__47200_48363)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__47195_48374 = ((G__47199_48362)?(G__47188_48367[(0)]):(cljs.core.truth_(G__47201_48364)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__47196_48375 = ((G__47199_48362)?(G__47188_48367[(1)]):(cljs.core.truth_(G__47201_48364)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__47197_48376 = ((G__47199_48362)?(G__47188_48367[(2)]):(cljs.core.truth_(G__47201_48364)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__46308__auto__[(0)] = ((G__47189_48368 + G__47192_48371) + G__47195_48374));

(dest__46308__auto__[(1)] = ((G__47190_48369 + G__47193_48372) + G__47196_48375));

(dest__46308__auto__[(2)] = ((G__47191_48370 + G__47194_48373) + G__47197_48376));

return (new thi.ng.geom.core.vector.Vec3(dest__46308__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__47202 = self__.buf;
var dest__46261__auto__ = (new Float32Array((3)));
(dest__46261__auto__[(0)] = ((G__47202[(0)]) + x));

(dest__46261__auto__[(1)] = ((G__47202[(1)]) + y));

(dest__46261__auto__[(2)] = ((G__47202[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__46261__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$abs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var dest__46252__auto__ = (new Float32Array((3)));
var G__47203_48383 = self__.buf;
(dest__46252__auto__[(0)] = (function (){var G__47204 = (G__47203_48383[(0)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__47204) : thi.ng.math.core.abs.call(null,G__47204));
})());

(dest__46252__auto__[(1)] = (function (){var G__47205 = (G__47203_48383[(1)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__47205) : thi.ng.math.core.abs.call(null,G__47205));
})());

(dest__46252__auto__[(2)] = (function (){var G__47206 = (G__47203_48383[(2)]);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__47206) : thi.ng.math.core.abs.call(null,G__47206));
})());

return (new thi.ng.geom.core.vector.Vec3(dest__46252__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMathOps$subm$arity$3 = (function (_,a,b){
var self__ = this;
var ___$1 = this;
var dest__46308__auto__ = (new Float32Array((3)));
var G__47219_48385 = (a instanceof thi.ng.geom.core.vector.Vec3);
var G__47220_48386 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__47221_48387 = (((!(G__47219_48385)))?typeof a === 'number':null);
var G__47222_48388 = (((!(G__47220_48386)))?typeof b === 'number':null);
var G__47207_48389 = self__.buf;
var G__47208_48390 = ((G__47219_48385)?a.buf:null);
var G__47209_48391 = ((G__47220_48386)?b.buf:null);
var G__47210_48392 = (G__47207_48389[(0)]);
var G__47211_48393 = (G__47207_48389[(1)]);
var G__47212_48394 = (G__47207_48389[(2)]);
var G__47213_48395 = ((G__47219_48385)?(G__47208_48390[(0)]):(cljs.core.truth_(G__47221_48387)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(0),0.0)));
var G__47214_48396 = ((G__47219_48385)?(G__47208_48390[(1)]):(cljs.core.truth_(G__47221_48387)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(1),0.0)));
var G__47215_48397 = ((G__47219_48385)?(G__47208_48390[(2)]):(cljs.core.truth_(G__47221_48387)?a:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(a,(2),0.0)));
var G__47216_48398 = ((G__47220_48386)?(G__47209_48391[(0)]):(cljs.core.truth_(G__47222_48388)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),1.0)));
var G__47217_48399 = ((G__47220_48386)?(G__47209_48391[(1)]):(cljs.core.truth_(G__47222_48388)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),1.0)));
var G__47218_48400 = ((G__47220_48386)?(G__47209_48391[(2)]):(cljs.core.truth_(G__47222_48388)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),1.0)));
(dest__46308__auto__[(0)] = ((G__47210_48392 - G__47213_48395) * G__47216_48398));

(dest__46308__auto__[(1)] = ((G__47211_48393 - G__47214_48396) * G__47217_48399));

(dest__46308__auto__[(2)] = ((G__47212_48394 - G__47215_48397) * G__47218_48400));

return (new thi.ng.geom.core.vector.Vec3(dest__46308__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.buf[(0)]);
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons((self__.buf[(1)]),cljs.core.cons((self__.buf[(2)]),null));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46283__auto__ = (new Float32Array((3)));
var G__47223_48405 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__47224_48406 = v.buf;
(dest__46283__auto__[(0)] = ((G__47223_48405[(0)]) + (G__47224_48406[(0)])));

(dest__46283__auto__[(1)] = ((G__47223_48405[(1)]) + (G__47224_48406[(1)])));

(dest__46283__auto__[(2)] = ((G__47223_48405[(2)]) + (G__47224_48406[(2)])));
} else {
if(typeof v === 'number'){
(dest__46283__auto__[(0)] = ((G__47223_48405[(0)]) + v));

(dest__46283__auto__[(1)] = ((G__47223_48405[(1)]) + v));

(dest__46283__auto__[(2)] = ((G__47223_48405[(2)]) + v));
} else {
(dest__46283__auto__[(0)] = ((G__47223_48405[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__46283__auto__[(1)] = ((G__47223_48405[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__46283__auto__[(2)] = ((G__47223_48405[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__46283__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__46308__auto__ = (new Float32Array((3)));
var G__47237_48410 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__47238_48411 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__47239_48412 = (((!(G__47237_48410)))?typeof v1 === 'number':null);
var G__47240_48413 = (((!(G__47238_48411)))?typeof v2 === 'number':null);
var G__47225_48414 = self__.buf;
var G__47226_48415 = ((G__47237_48410)?v1.buf:null);
var G__47227_48416 = ((G__47238_48411)?v2.buf:null);
var G__47228_48417 = (G__47225_48414[(0)]);
var G__47229_48418 = (G__47225_48414[(1)]);
var G__47230_48419 = (G__47225_48414[(2)]);
var G__47231_48420 = ((G__47237_48410)?(G__47226_48415[(0)]):(cljs.core.truth_(G__47239_48412)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),0.0)));
var G__47232_48421 = ((G__47237_48410)?(G__47226_48415[(1)]):(cljs.core.truth_(G__47239_48412)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),0.0)));
var G__47233_48422 = ((G__47237_48410)?(G__47226_48415[(2)]):(cljs.core.truth_(G__47239_48412)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),0.0)));
var G__47234_48423 = ((G__47238_48411)?(G__47227_48416[(0)]):(cljs.core.truth_(G__47240_48413)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__47235_48424 = ((G__47238_48411)?(G__47227_48416[(1)]):(cljs.core.truth_(G__47240_48413)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__47236_48425 = ((G__47238_48411)?(G__47227_48416[(2)]):(cljs.core.truth_(G__47240_48413)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__46308__auto__[(0)] = ((G__47228_48417 + G__47231_48420) + G__47234_48423));

(dest__46308__auto__[(1)] = ((G__47229_48418 + G__47232_48421) + G__47235_48424));

(dest__46308__auto__[(2)] = ((G__47230_48419 + G__47233_48422) + G__47236_48425));

return (new thi.ng.geom.core.vector.Vec3(dest__46308__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PTranslate$translate$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__47241 = self__.buf;
var dest__46261__auto__ = (new Float32Array((3)));
(dest__46261__auto__[(0)] = ((G__47241[(0)]) + x));

(dest__46261__auto__[(1)] = ((G__47241[(1)]) + y));

(dest__46261__auto__[(2)] = ((G__47241[(2)]) + z));

return (new thi.ng.geom.core.vector.Vec3(dest__46261__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
return (((k >= (0))) && ((k <= (2))));
} else {
if(cljs.core.truth_((thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle3_fns.call(null,k)))){
return true;
} else {
return false;
}
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
if(typeof k === 'number'){
if((((k >= (0))) && ((k <= (2))))){
var b = (new Float32Array(self__.buf));
(b[k] = v);

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
} else {
if((k === (3))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
} else {
if((k instanceof cljs.core.Keyword)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),k)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(___$1,v);
} else {
return (new thi.ng.geom.core.vector.Vec3((function (){var G__47242 = self__.buf;
var G__47243 = (new Float32Array(self__.buf));
var G__47244 = new cljs.core.PersistentArrayMap(null, 3, ["x",(0),"y",(1),"z",(2)], null);
var G__47245 = k;
var G__47246 = v;
return (thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5 ? thi.ng.geom.core.vector.swizzle_assoc_STAR_.cljs$core$IFn$_invoke$arity$5(G__47242,G__47243,G__47244,G__47245,G__47246) : thi.ng.geom.core.vector.swizzle_assoc_STAR_.call(null,G__47242,G__47243,G__47244,G__47245,G__47246));
})(),null,self__._meta));
}
} else {
return null;
}
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46283__auto__ = (new Float32Array((3)));
var G__47247_48433 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__47248_48434 = v.buf;
(dest__46283__auto__[(0)] = ((G__47247_48433[(0)]) * (G__47248_48434[(0)])));

(dest__46283__auto__[(1)] = ((G__47247_48433[(1)]) * (G__47248_48434[(1)])));

(dest__46283__auto__[(2)] = ((G__47247_48433[(2)]) * (G__47248_48434[(2)])));
} else {
if(typeof v === 'number'){
(dest__46283__auto__[(0)] = ((G__47247_48433[(0)]) * v));

(dest__46283__auto__[(1)] = ((G__47247_48433[(1)]) * v));

(dest__46283__auto__[(2)] = ((G__47247_48433[(2)]) * v));
} else {
(dest__46283__auto__[(0)] = ((G__47247_48433[(0)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));

(dest__46283__auto__[(1)] = ((G__47247_48433[(1)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));

(dest__46283__auto__[(2)] = ((G__47247_48433[(2)]) * cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__46283__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$3 = (function (_,v1,v2){
var self__ = this;
var ___$1 = this;
var dest__46308__auto__ = (new Float32Array((3)));
var G__47261_48436 = (v1 instanceof thi.ng.geom.core.vector.Vec3);
var G__47262_48437 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__47263_48438 = (((!(G__47261_48436)))?typeof v1 === 'number':null);
var G__47264_48439 = (((!(G__47262_48437)))?typeof v2 === 'number':null);
var G__47249_48440 = self__.buf;
var G__47250_48441 = ((G__47261_48436)?v1.buf:null);
var G__47251_48442 = ((G__47262_48437)?v2.buf:null);
var G__47252_48443 = (G__47249_48440[(0)]);
var G__47253_48444 = (G__47249_48440[(1)]);
var G__47254_48445 = (G__47249_48440[(2)]);
var G__47255_48446 = ((G__47261_48436)?(G__47250_48441[(0)]):(cljs.core.truth_(G__47263_48438)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(0),1.0)));
var G__47256_48447 = ((G__47261_48436)?(G__47250_48441[(1)]):(cljs.core.truth_(G__47263_48438)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(1),1.0)));
var G__47257_48448 = ((G__47261_48436)?(G__47250_48441[(2)]):(cljs.core.truth_(G__47263_48438)?v1:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v1,(2),1.0)));
var G__47258_48449 = ((G__47262_48437)?(G__47251_48442[(0)]):(cljs.core.truth_(G__47264_48439)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),1.0)));
var G__47259_48450 = ((G__47262_48437)?(G__47251_48442[(1)]):(cljs.core.truth_(G__47264_48439)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),1.0)));
var G__47260_48451 = ((G__47262_48437)?(G__47251_48442[(2)]):(cljs.core.truth_(G__47264_48439)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),1.0)));
(dest__46308__auto__[(0)] = ((G__47252_48443 * G__47255_48446) * G__47258_48449));

(dest__46308__auto__[(1)] = ((G__47253_48444 * G__47256_48447) * G__47259_48450));

(dest__46308__auto__[(2)] = ((G__47254_48445 * G__47257_48448) * G__47260_48451));

return (new thi.ng.geom.core.vector.Vec3(dest__46308__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PScale$scale$arity$4 = (function (_,x,y,z){
var self__ = this;
var ___$1 = this;
var G__47265 = self__.buf;
var dest__46261__auto__ = (new Float32Array((3)));
(dest__46261__auto__[(0)] = ((G__47265[(0)]) * x));

(dest__46261__auto__[(1)] = ((G__47265[(1)]) * y));

(dest__46261__auto__[(2)] = ((G__47265[(2)]) * z));

return (new thi.ng.geom.core.vector.Vec3(dest__46261__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,m){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.core.vector.Vec3((new Float32Array(self__.buf)),self__._hash,m));
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.buf[(0)]),(self__.buf[(1)]),(self__.buf[(2)]),x], null),self__._meta);
}));

(thi.ng.geom.core.vector.Vec3.prototype.call = (function (unused__9546__auto__){
var self__ = this;
var self__ = this;
var G__47266 = (arguments.length - (1));
switch (G__47266) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(thi.ng.geom.core.vector.Vec3.prototype.apply = (function (self__,args46862){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args46862)));
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,nf){
var self__ = this;
var _ = this;
if((k instanceof cljs.core.Keyword)){
var temp__5733__auto__ = (thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.core.vector.swizzle3_fns.cljs$core$IFn$_invoke$arity$1(k) : thi.ng.geom.core.vector.swizzle3_fns.call(null,k));
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(_) : f.call(null,_));
} else {
return nf;
}
} else {
if((((k >= (0))) && ((k <= (2))))){
return (self__.buf[k]);
} else {
return nf;
}
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46283__auto__ = (new Float32Array((3)));
var G__47267_48465 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__47268_48466 = v.buf;
(dest__46283__auto__[(0)] = (function (){var a__45302__auto__ = (G__47267_48465[(0)]);
var b__45303__auto__ = (G__47268_48466[(0)]);
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

(dest__46283__auto__[(1)] = (function (){var a__45302__auto__ = (G__47267_48465[(1)]);
var b__45303__auto__ = (G__47268_48466[(1)]);
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

(dest__46283__auto__[(2)] = (function (){var a__45302__auto__ = (G__47267_48465[(2)]);
var b__45303__auto__ = (G__47268_48466[(2)]);
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__46283__auto__[(0)] = (function (){var a__45302__auto__ = (G__47267_48465[(0)]);
var b__45303__auto__ = v;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

(dest__46283__auto__[(1)] = (function (){var a__45302__auto__ = (G__47267_48465[(1)]);
var b__45303__auto__ = v;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

(dest__46283__auto__[(2)] = (function (){var a__45302__auto__ = (G__47267_48465[(2)]);
var b__45303__auto__ = v;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());
} else {
(dest__46283__auto__[(0)] = (function (){var a__45302__auto__ = (G__47267_48465[(0)]);
var b__45303__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

(dest__46283__auto__[(1)] = (function (){var a__45302__auto__ = (G__47267_48465[(1)]);
var b__45303__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

(dest__46283__auto__[(2)] = (function (){var a__45302__auto__ = (G__47267_48465[(2)]);
var b__45303__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__46283__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$min$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__46308__auto__ = (new Float32Array((3)));
var G__47281_48471 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__47282_48472 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__47283_48473 = (((!(G__47281_48471)))?typeof v === 'number':null);
var G__47284_48474 = (((!(G__47282_48472)))?typeof v2 === 'number':null);
var G__47269_48475 = self__.buf;
var G__47270_48476 = ((G__47281_48471)?v.buf:null);
var G__47271_48477 = ((G__47282_48472)?v2.buf:null);
var G__47272_48478 = (G__47269_48475[(0)]);
var G__47273_48479 = (G__47269_48475[(1)]);
var G__47274_48480 = (G__47269_48475[(2)]);
var G__47275_48481 = ((G__47281_48471)?(G__47270_48476[(0)]):(cljs.core.truth_(G__47283_48473)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__47276_48482 = ((G__47281_48471)?(G__47270_48476[(1)]):(cljs.core.truth_(G__47283_48473)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__47277_48483 = ((G__47281_48471)?(G__47270_48476[(2)]):(cljs.core.truth_(G__47283_48473)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__47278_48484 = ((G__47282_48472)?(G__47271_48477[(0)]):(cljs.core.truth_(G__47284_48474)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__47279_48485 = ((G__47282_48472)?(G__47271_48477[(1)]):(cljs.core.truth_(G__47284_48474)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__47280_48486 = ((G__47282_48472)?(G__47271_48477[(2)]):(cljs.core.truth_(G__47284_48474)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__46308__auto__[(0)] = (function (){var a__45302__auto__ = (function (){var a__45302__auto__ = G__47272_48478;
var b__45303__auto__ = G__47275_48481;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})();
var b__45303__auto__ = G__47278_48484;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

(dest__46308__auto__[(1)] = (function (){var a__45302__auto__ = (function (){var a__45302__auto__ = G__47273_48479;
var b__45303__auto__ = G__47276_48482;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})();
var b__45303__auto__ = G__47279_48485;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

(dest__46308__auto__[(2)] = (function (){var a__45302__auto__ = (function (){var a__45302__auto__ = G__47274_48480;
var b__45303__auto__ = G__47277_48483;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})();
var b__45303__auto__ = G__47280_48486;
if((a__45302__auto__ <= b__45303__auto__)){
return a__45302__auto__;
} else {
return b__45303__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__46308__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var dest__46283__auto__ = (new Float32Array((3)));
var G__47285_48500 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__47286_48501 = v.buf;
(dest__46283__auto__[(0)] = (function (){var a__45311__auto__ = (G__47285_48500[(0)]);
var b__45312__auto__ = (G__47286_48501[(0)]);
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

(dest__46283__auto__[(1)] = (function (){var a__45311__auto__ = (G__47285_48500[(1)]);
var b__45312__auto__ = (G__47286_48501[(1)]);
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

(dest__46283__auto__[(2)] = (function (){var a__45311__auto__ = (G__47285_48500[(2)]);
var b__45312__auto__ = (G__47286_48501[(2)]);
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());
} else {
if(typeof v === 'number'){
(dest__46283__auto__[(0)] = (function (){var a__45311__auto__ = (G__47285_48500[(0)]);
var b__45312__auto__ = v;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

(dest__46283__auto__[(1)] = (function (){var a__45311__auto__ = (G__47285_48500[(1)]);
var b__45312__auto__ = v;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

(dest__46283__auto__[(2)] = (function (){var a__45311__auto__ = (G__47285_48500[(2)]);
var b__45312__auto__ = v;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());
} else {
(dest__46283__auto__[(0)] = (function (){var a__45311__auto__ = (G__47285_48500[(0)]);
var b__45312__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0);
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

(dest__46283__auto__[(1)] = (function (){var a__45311__auto__ = (G__47285_48500[(1)]);
var b__45312__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0);
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

(dest__46283__auto__[(2)] = (function (){var a__45311__auto__ = (G__47285_48500[(2)]);
var b__45312__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0);
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());
}
}

return (new thi.ng.geom.core.vector.Vec3(dest__46283__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMinMax$max$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var dest__46308__auto__ = (new Float32Array((3)));
var G__47299_48515 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__47300_48516 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__47301_48517 = (((!(G__47299_48515)))?typeof v === 'number':null);
var G__47302_48518 = (((!(G__47300_48516)))?typeof v2 === 'number':null);
var G__47287_48519 = self__.buf;
var G__47288_48520 = ((G__47299_48515)?v.buf:null);
var G__47289_48521 = ((G__47300_48516)?v2.buf:null);
var G__47290_48522 = (G__47287_48519[(0)]);
var G__47291_48523 = (G__47287_48519[(1)]);
var G__47292_48524 = (G__47287_48519[(2)]);
var G__47293_48525 = ((G__47299_48515)?(G__47288_48520[(0)]):(cljs.core.truth_(G__47301_48517)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__47294_48526 = ((G__47299_48515)?(G__47288_48520[(1)]):(cljs.core.truth_(G__47301_48517)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__47295_48527 = ((G__47299_48515)?(G__47288_48520[(2)]):(cljs.core.truth_(G__47301_48517)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__47296_48528 = ((G__47300_48516)?(G__47289_48521[(0)]):(cljs.core.truth_(G__47302_48518)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__47297_48529 = ((G__47300_48516)?(G__47289_48521[(1)]):(cljs.core.truth_(G__47302_48518)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__47298_48530 = ((G__47300_48516)?(G__47289_48521[(2)]):(cljs.core.truth_(G__47302_48518)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(dest__46308__auto__[(0)] = (function (){var a__45311__auto__ = (function (){var a__45311__auto__ = G__47290_48522;
var b__45312__auto__ = G__47293_48525;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})();
var b__45312__auto__ = G__47296_48528;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

(dest__46308__auto__[(1)] = (function (){var a__45311__auto__ = (function (){var a__45311__auto__ = G__47291_48523;
var b__45312__auto__ = G__47294_48526;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})();
var b__45312__auto__ = G__47297_48529;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

(dest__46308__auto__[(2)] = (function (){var a__45311__auto__ = (function (){var a__45311__auto__ = G__47292_48524;
var b__45312__auto__ = G__47295_48527;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})();
var b__45312__auto__ = G__47298_48530;
if((a__45311__auto__ >= b__45312__auto__)){
return a__45311__auto__;
} else {
return b__45312__auto__;
}
})());

return (new thi.ng.geom.core.vector.Vec3(dest__46308__auto__,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.cljs$core$IComparable$_compare$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
if((o instanceof thi.ng.geom.core.vector.Vec3)){
var b_SINGLEQUOTE_ = o.buf;
var c = cljs.core.compare((self__.buf[(0)]),(b_SINGLEQUOTE_[(0)]));
if(((0) === c)){
var c__$1 = cljs.core.compare((self__.buf[(1)]),(b_SINGLEQUOTE_[(1)]));
if(((0) === c__$1)){
return cljs.core.compare((self__.buf[(2)]),(b_SINGLEQUOTE_[(2)]));
} else {
return c__$1;
}
} else {
return c;
}
} else {
var c = cljs.core.count(o);
if(((3) === c)){
return (- cljs.core.compare(o,___$1));
} else {
return ((3) - c);
}
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 = (function (_,f,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
return (new thi.ng.geom.core.vector.Vec3((thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs)),null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 = (function (_,f,f2,xs){
var self__ = this;
var ___$1 = this;
var buf_SINGLEQUOTE_ = (new Float32Array(self__.buf));
(thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3 ? thi.ng.geom.core.vector.vec3_reduce_STAR_.cljs$core$IFn$_invoke$arity$3(f,buf_SINGLEQUOTE_,xs) : thi.ng.geom.core.vector.vec3_reduce_STAR_.call(null,f,buf_SINGLEQUOTE_,xs));

(buf_SINGLEQUOTE_[(0)] = (function (){var G__47303 = (buf_SINGLEQUOTE_[(0)]);
var G__47304 = (0);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__47303,G__47304) : f2.call(null,G__47303,G__47304));
})());

(buf_SINGLEQUOTE_[(1)] = (function (){var G__47305 = (buf_SINGLEQUOTE_[(1)]);
var G__47306 = (1);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__47305,G__47306) : f2.call(null,G__47305,G__47306));
})());

(buf_SINGLEQUOTE_[(2)] = (function (){var G__47307 = (buf_SINGLEQUOTE_[(2)]);
var G__47308 = (2);
return (f2.cljs$core$IFn$_invoke$arity$2 ? f2.cljs$core$IFn$_invoke$arity$2(G__47307,G__47308) : f2.call(null,G__47307,G__47308));
})());

return (new thi.ng.geom.core.vector.Vec3(buf_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return ___$1.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3(null,v,thi.ng.math.core._STAR_eps_STAR_);
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$math$core$PDeltaEquals$delta_EQ_$arity$3 = (function (_,v,eps){
var self__ = this;
var ___$1 = this;
if(cljs.core.sequential_QMARK_(v)){
if(((3) === cljs.core.count(v))){
var G__47309 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__47310 = v.buf;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_((G__47309[(0)]),(G__47310[(0)]),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_((G__47309[(1)]),(G__47310[(1)]),eps))){
return thi.ng.math.core.delta_EQ_((G__47309[(2)]),(G__47310[(2)]),eps);
} else {
return null;
}
} else {
return null;
}
} else {
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_((G__47309[(0)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),eps))){
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_((G__47309[(1)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),eps))){
return thi.ng.math.core.delta_EQ_((G__47309[(2)]),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0),eps);
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__47311 = self__.buf;
var G__47312 = (G__47311[(0)]);
var G__47313 = (G__47311[(1)]);
var G__47314 = (G__47311[(2)]);
return Math.sqrt((((G__47312 * G__47312) + (G__47313 * G__47313)) + (G__47314 * G__47314)));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__47315 = self__.buf;
var G__47316 = (G__47315[(0)]);
var G__47317 = (G__47315[(1)]);
var G__47318 = (G__47315[(2)]);
return (((G__47316 * G__47316) + (G__47317 * G__47317)) + (G__47318 * G__47318));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__47319_48584 = self__.buf;
if((v instanceof thi.ng.geom.core.vector.Vec3)){
var G__47320_48586 = v.buf;
(b[(0)] = (((G__47319_48584[(0)]) + (G__47320_48586[(0)])) * 0.5));

(b[(1)] = (((G__47319_48584[(1)]) + (G__47320_48586[(1)])) * 0.5));

(b[(2)] = (((G__47319_48584[(2)]) + (G__47320_48586[(2)])) * 0.5));
} else {
if(typeof v === 'number'){
(b[(0)] = (((G__47319_48584[(0)]) + v) * 0.5));

(b[(1)] = (((G__47319_48584[(1)]) + v) * 0.5));

(b[(2)] = (((G__47319_48584[(2)]) + v) * 0.5));
} else {
(b[(0)] = (((G__47319_48584[(0)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)) * 0.5));

(b[(1)] = (((G__47319_48584[(1)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)) * 0.5));

(b[(2)] = (((G__47319_48584[(2)]) + cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)) * 0.5));
}
}

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$3 = (function (_,v,v2){
var self__ = this;
var ___$1 = this;
var b = (new Float32Array((3)));
var G__47333_48595 = (v instanceof thi.ng.geom.core.vector.Vec3);
var G__47334_48596 = (v2 instanceof thi.ng.geom.core.vector.Vec3);
var G__47335_48597 = (((!(G__47333_48595)))?typeof v === 'number':null);
var G__47336_48598 = (((!(G__47334_48596)))?typeof v2 === 'number':null);
var G__47321_48599 = self__.buf;
var G__47322_48600 = ((G__47333_48595)?v.buf:null);
var G__47323_48601 = ((G__47334_48596)?v2.buf:null);
var G__47324_48602 = (G__47321_48599[(0)]);
var G__47325_48603 = (G__47321_48599[(1)]);
var G__47326_48604 = (G__47321_48599[(2)]);
var G__47327_48605 = ((G__47333_48595)?(G__47322_48600[(0)]):(cljs.core.truth_(G__47335_48597)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0)));
var G__47328_48606 = ((G__47333_48595)?(G__47322_48600[(1)]):(cljs.core.truth_(G__47335_48597)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0)));
var G__47329_48607 = ((G__47333_48595)?(G__47322_48600[(2)]):(cljs.core.truth_(G__47335_48597)?v:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0)));
var G__47330_48608 = ((G__47334_48596)?(G__47323_48601[(0)]):(cljs.core.truth_(G__47336_48598)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(0),0.0)));
var G__47331_48609 = ((G__47334_48596)?(G__47323_48601[(1)]):(cljs.core.truth_(G__47336_48598)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(1),0.0)));
var G__47332_48610 = ((G__47334_48596)?(G__47323_48601[(2)]):(cljs.core.truth_(G__47336_48598)?v2:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v2,(2),0.0)));
(b[(0)] = (((G__47327_48605 - G__47324_48602) * G__47330_48608) + G__47324_48602));

(b[(1)] = (((G__47328_48606 - G__47325_48603) * G__47331_48609) + G__47325_48603));

(b[(2)] = (((G__47329_48607 - G__47326_48604) * G__47332_48610) + G__47326_48604));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PInterpolate$mix$arity$6 = (function (_,b,c,d,u,v){
var self__ = this;
var ___$1 = this;
var b_SINGLEQUOTE_ = (new Float32Array((3)));
var dv_QMARK_ = (d instanceof thi.ng.geom.core.vector.Vec3);
var dn_QMARK_ = typeof d === 'number';
var dv = ((dv_QMARK_)?d.buf:null);
var dx = ((dv_QMARK_)?(dv[(0)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(0),0.0)));
var dy = ((dv_QMARK_)?(dv[(1)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(1),0.0)));
var dz = ((dv_QMARK_)?(dv[(2)]):((dn_QMARK_)?d:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(d,(2),0.0)));
var G__47349_48633 = (b instanceof thi.ng.geom.core.vector.Vec3);
var G__47350_48634 = (c instanceof thi.ng.geom.core.vector.Vec3);
var G__47351_48635 = (((!(G__47349_48633)))?typeof b === 'number':null);
var G__47352_48636 = (((!(G__47350_48634)))?typeof c === 'number':null);
var G__47337_48637 = self__.buf;
var G__47338_48638 = ((G__47349_48633)?b.buf:null);
var G__47339_48639 = ((G__47350_48634)?c.buf:null);
var G__47340_48640 = (G__47337_48637[(0)]);
var G__47341_48641 = (G__47337_48637[(1)]);
var G__47342_48642 = (G__47337_48637[(2)]);
var G__47343_48643 = ((G__47349_48633)?(G__47338_48638[(0)]):(cljs.core.truth_(G__47351_48635)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(0),0.0)));
var G__47344_48644 = ((G__47349_48633)?(G__47338_48638[(1)]):(cljs.core.truth_(G__47351_48635)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(1),0.0)));
var G__47345_48645 = ((G__47349_48633)?(G__47338_48638[(2)]):(cljs.core.truth_(G__47351_48635)?b:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(b,(2),0.0)));
var G__47346_48646 = ((G__47350_48634)?(G__47339_48639[(0)]):(cljs.core.truth_(G__47352_48636)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(0),0.0)));
var G__47347_48647 = ((G__47350_48634)?(G__47339_48639[(1)]):(cljs.core.truth_(G__47352_48636)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(1),0.0)));
var G__47348_48648 = ((G__47350_48634)?(G__47339_48639[(2)]):(cljs.core.truth_(G__47352_48636)?c:cljs.core.nth.cljs$core$IFn$_invoke$arity$3(c,(2),0.0)));
var x1_48656 = (((G__47343_48643 - G__47340_48640) * u) + G__47340_48640);
var y1_48657 = (((G__47344_48644 - G__47341_48641) * u) + G__47341_48641);
var z1_48658 = (((G__47345_48645 - G__47342_48642) * u) + G__47342_48642);
(b_SINGLEQUOTE_[(0)] = ((((((dx - G__47346_48646) * u) + G__47346_48646) - x1_48656) * v) + x1_48656));

(b_SINGLEQUOTE_[(1)] = ((((((dy - G__47347_48647) * u) + G__47347_48647) - y1_48657) * v) + y1_48657));

(b_SINGLEQUOTE_[(2)] = ((((((dz - G__47348_48648) * u) + G__47348_48648) - z1_48658) * v) + z1_48658));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PLimit$limit$arity$2 = (function (_,len){
var self__ = this;
var ___$1 = this;
if((___$1.thi$ng$geom$core$PMagnitude$mag_squared$arity$1(null) > (len * len))){
return ___$1.thi$ng$geom$core$PNormalize$normalize$arity$2(null,len);
} else {
return ___$1;
}
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_polar$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var r = ___$1.thi$ng$geom$core$PMagnitude$mag$arity$1(null);
var b = (new Float32Array((3)));
(b[(0)] = r);

(b[(1)] = Math.asin(((self__.buf[(2)]) / r)));

(b[(2)] = Math.atan2((self__.buf[(1)]),(self__.buf[(0)])));

return (new thi.ng.geom.core.vector.Vec3(b,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.prototype.thi$ng$geom$core$PPolar$as_cartesian$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var b = self__.buf;
var x = (b[(0)]);
var y = (b[(1)]);
var z = (b[(2)]);
var rcos = (x * Math.cos(y));
var b_SINGLEQUOTE_ = (new Float32Array((3)));
(b_SINGLEQUOTE_[(0)] = (rcos * Math.cos(z)));

(b_SINGLEQUOTE_[(1)] = (rcos * Math.sin(z)));

(b_SINGLEQUOTE_[(2)] = (x * Math.sin(y)));

return (new thi.ng.geom.core.vector.Vec3(b_SINGLEQUOTE_,null,self__._meta));
}));

(thi.ng.geom.core.vector.Vec3.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",1426618187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_hash","_hash",-2130838312,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(thi.ng.geom.core.vector.Vec3.cljs$lang$type = true);

(thi.ng.geom.core.vector.Vec3.cljs$lang$ctorStr = "thi.ng.geom.core.vector/Vec3");

(thi.ng.geom.core.vector.Vec3.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"thi.ng.geom.core.vector/Vec3");
}));

/**
 * Positional factory function for thi.ng.geom.core.vector/Vec3.
 */
thi.ng.geom.core.vector.__GT_Vec3 = (function thi$ng$geom$core$vector$__GT_Vec3(buf,_hash,_meta){
return (new thi.ng.geom.core.vector.Vec3(buf,_hash,_meta));
});

thi.ng.geom.core.vector.x = (function thi$ng$geom$core$vector$x(G__47355){
var G__47353 = (((G__47355 instanceof thi.ng.geom.core.vector.Vec2))?G__47355.buf:G__47355.buf);
return (G__47353[(0)]);
});
thi.ng.geom.core.vector.xx = (function thi$ng$geom$core$vector$xx(G__47358){
var G__47356 = (((G__47358 instanceof thi.ng.geom.core.vector.Vec2))?G__47358.buf:G__47358.buf);
var G__47357 = (new Float32Array(2));
(G__47357[(0)] = (G__47356[(0)]));

(G__47357[(1)] = (G__47356[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__47357,null,cljs.core.meta(G__47358)));
});
thi.ng.geom.core.vector.xxx = (function thi$ng$geom$core$vector$xxx(G__47361){
var G__47359 = (((G__47361 instanceof thi.ng.geom.core.vector.Vec2))?G__47361.buf:G__47361.buf);
var G__47360 = (new Float32Array(3));
(G__47360[(0)] = (G__47359[(0)]));

(G__47360[(1)] = (G__47359[(0)]));

(G__47360[(2)] = (G__47359[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__47360,null,cljs.core.meta(G__47361)));
});
thi.ng.geom.core.vector.xxy = (function thi$ng$geom$core$vector$xxy(G__47364){
var G__47362 = (((G__47364 instanceof thi.ng.geom.core.vector.Vec2))?G__47364.buf:G__47364.buf);
var G__47363 = (new Float32Array(3));
(G__47363[(0)] = (G__47362[(0)]));

(G__47363[(1)] = (G__47362[(0)]));

(G__47363[(2)] = (G__47362[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__47363,null,cljs.core.meta(G__47364)));
});
thi.ng.geom.core.vector.xxz = (function thi$ng$geom$core$vector$xxz(G__47367){
if((G__47367 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47367)"));
}

var G__47365 = (((G__47367 instanceof thi.ng.geom.core.vector.Vec2))?G__47367.buf:G__47367.buf);
var G__47366 = (new Float32Array(3));
(G__47366[(0)] = (G__47365[(0)]));

(G__47366[(1)] = (G__47365[(0)]));

(G__47366[(2)] = (G__47365[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__47366,null,cljs.core.meta(G__47367)));
});
thi.ng.geom.core.vector.xy = (function thi$ng$geom$core$vector$xy(G__47370){
var G__47368 = (((G__47370 instanceof thi.ng.geom.core.vector.Vec2))?G__47370.buf:G__47370.buf);
var G__47369 = (new Float32Array(2));
(G__47369[(0)] = (G__47368[(0)]));

(G__47369[(1)] = (G__47368[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__47369,null,cljs.core.meta(G__47370)));
});
thi.ng.geom.core.vector.xyx = (function thi$ng$geom$core$vector$xyx(G__47373){
var G__47371 = (((G__47373 instanceof thi.ng.geom.core.vector.Vec2))?G__47373.buf:G__47373.buf);
var G__47372 = (new Float32Array(3));
(G__47372[(0)] = (G__47371[(0)]));

(G__47372[(1)] = (G__47371[(1)]));

(G__47372[(2)] = (G__47371[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__47372,null,cljs.core.meta(G__47373)));
});
thi.ng.geom.core.vector.xyy = (function thi$ng$geom$core$vector$xyy(G__47376){
var G__47374 = (((G__47376 instanceof thi.ng.geom.core.vector.Vec2))?G__47376.buf:G__47376.buf);
var G__47375 = (new Float32Array(3));
(G__47375[(0)] = (G__47374[(0)]));

(G__47375[(1)] = (G__47374[(1)]));

(G__47375[(2)] = (G__47374[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__47375,null,cljs.core.meta(G__47376)));
});
thi.ng.geom.core.vector.xyz = (function thi$ng$geom$core$vector$xyz(G__47379){
if((G__47379 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47379)"));
}

var G__47377 = (((G__47379 instanceof thi.ng.geom.core.vector.Vec2))?G__47379.buf:G__47379.buf);
var G__47378 = (new Float32Array(3));
(G__47378[(0)] = (G__47377[(0)]));

(G__47378[(1)] = (G__47377[(1)]));

(G__47378[(2)] = (G__47377[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__47378,null,cljs.core.meta(G__47379)));
});
thi.ng.geom.core.vector.xz = (function thi$ng$geom$core$vector$xz(G__47382){
if((G__47382 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47382)"));
}

var G__47380 = (((G__47382 instanceof thi.ng.geom.core.vector.Vec2))?G__47382.buf:G__47382.buf);
var G__47381 = (new Float32Array(2));
(G__47381[(0)] = (G__47380[(0)]));

(G__47381[(1)] = (G__47380[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__47381,null,cljs.core.meta(G__47382)));
});
thi.ng.geom.core.vector.xzx = (function thi$ng$geom$core$vector$xzx(G__47385){
if((G__47385 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47385)"));
}

var G__47383 = (((G__47385 instanceof thi.ng.geom.core.vector.Vec2))?G__47385.buf:G__47385.buf);
var G__47384 = (new Float32Array(3));
(G__47384[(0)] = (G__47383[(0)]));

(G__47384[(1)] = (G__47383[(2)]));

(G__47384[(2)] = (G__47383[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__47384,null,cljs.core.meta(G__47385)));
});
thi.ng.geom.core.vector.xzy = (function thi$ng$geom$core$vector$xzy(G__47388){
if((G__47388 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47388)"));
}

var G__47386 = (((G__47388 instanceof thi.ng.geom.core.vector.Vec2))?G__47388.buf:G__47388.buf);
var G__47387 = (new Float32Array(3));
(G__47387[(0)] = (G__47386[(0)]));

(G__47387[(1)] = (G__47386[(2)]));

(G__47387[(2)] = (G__47386[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__47387,null,cljs.core.meta(G__47388)));
});
thi.ng.geom.core.vector.xzz = (function thi$ng$geom$core$vector$xzz(G__47391){
if((G__47391 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47391)"));
}

var G__47389 = (((G__47391 instanceof thi.ng.geom.core.vector.Vec2))?G__47391.buf:G__47391.buf);
var G__47390 = (new Float32Array(3));
(G__47390[(0)] = (G__47389[(0)]));

(G__47390[(1)] = (G__47389[(2)]));

(G__47390[(2)] = (G__47389[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__47390,null,cljs.core.meta(G__47391)));
});
thi.ng.geom.core.vector.y = (function thi$ng$geom$core$vector$y(G__47394){
var G__47392 = (((G__47394 instanceof thi.ng.geom.core.vector.Vec2))?G__47394.buf:G__47394.buf);
return (G__47392[(1)]);
});
thi.ng.geom.core.vector.yx = (function thi$ng$geom$core$vector$yx(G__47397){
var G__47395 = (((G__47397 instanceof thi.ng.geom.core.vector.Vec2))?G__47397.buf:G__47397.buf);
var G__47396 = (new Float32Array(2));
(G__47396[(0)] = (G__47395[(1)]));

(G__47396[(1)] = (G__47395[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__47396,null,cljs.core.meta(G__47397)));
});
thi.ng.geom.core.vector.yxx = (function thi$ng$geom$core$vector$yxx(G__47400){
var G__47398 = (((G__47400 instanceof thi.ng.geom.core.vector.Vec2))?G__47400.buf:G__47400.buf);
var G__47399 = (new Float32Array(3));
(G__47399[(0)] = (G__47398[(1)]));

(G__47399[(1)] = (G__47398[(0)]));

(G__47399[(2)] = (G__47398[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__47399,null,cljs.core.meta(G__47400)));
});
thi.ng.geom.core.vector.yxy = (function thi$ng$geom$core$vector$yxy(G__47403){
var G__47401 = (((G__47403 instanceof thi.ng.geom.core.vector.Vec2))?G__47403.buf:G__47403.buf);
var G__47402 = (new Float32Array(3));
(G__47402[(0)] = (G__47401[(1)]));

(G__47402[(1)] = (G__47401[(0)]));

(G__47402[(2)] = (G__47401[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__47402,null,cljs.core.meta(G__47403)));
});
thi.ng.geom.core.vector.yxz = (function thi$ng$geom$core$vector$yxz(G__47406){
if((G__47406 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47406)"));
}

var G__47404 = (((G__47406 instanceof thi.ng.geom.core.vector.Vec2))?G__47406.buf:G__47406.buf);
var G__47405 = (new Float32Array(3));
(G__47405[(0)] = (G__47404[(1)]));

(G__47405[(1)] = (G__47404[(0)]));

(G__47405[(2)] = (G__47404[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__47405,null,cljs.core.meta(G__47406)));
});
thi.ng.geom.core.vector.yy = (function thi$ng$geom$core$vector$yy(G__47409){
var G__47407 = (((G__47409 instanceof thi.ng.geom.core.vector.Vec2))?G__47409.buf:G__47409.buf);
var G__47408 = (new Float32Array(2));
(G__47408[(0)] = (G__47407[(1)]));

(G__47408[(1)] = (G__47407[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__47408,null,cljs.core.meta(G__47409)));
});
thi.ng.geom.core.vector.yyx = (function thi$ng$geom$core$vector$yyx(G__47412){
var G__47410 = (((G__47412 instanceof thi.ng.geom.core.vector.Vec2))?G__47412.buf:G__47412.buf);
var G__47411 = (new Float32Array(3));
(G__47411[(0)] = (G__47410[(1)]));

(G__47411[(1)] = (G__47410[(1)]));

(G__47411[(2)] = (G__47410[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__47411,null,cljs.core.meta(G__47412)));
});
thi.ng.geom.core.vector.yyy = (function thi$ng$geom$core$vector$yyy(G__47415){
var G__47413 = (((G__47415 instanceof thi.ng.geom.core.vector.Vec2))?G__47415.buf:G__47415.buf);
var G__47414 = (new Float32Array(3));
(G__47414[(0)] = (G__47413[(1)]));

(G__47414[(1)] = (G__47413[(1)]));

(G__47414[(2)] = (G__47413[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__47414,null,cljs.core.meta(G__47415)));
});
thi.ng.geom.core.vector.yyz = (function thi$ng$geom$core$vector$yyz(G__47418){
if((G__47418 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47418)"));
}

var G__47416 = (((G__47418 instanceof thi.ng.geom.core.vector.Vec2))?G__47418.buf:G__47418.buf);
var G__47417 = (new Float32Array(3));
(G__47417[(0)] = (G__47416[(1)]));

(G__47417[(1)] = (G__47416[(1)]));

(G__47417[(2)] = (G__47416[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__47417,null,cljs.core.meta(G__47418)));
});
thi.ng.geom.core.vector.yz = (function thi$ng$geom$core$vector$yz(G__47421){
if((G__47421 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47421)"));
}

var G__47419 = (((G__47421 instanceof thi.ng.geom.core.vector.Vec2))?G__47421.buf:G__47421.buf);
var G__47420 = (new Float32Array(2));
(G__47420[(0)] = (G__47419[(1)]));

(G__47420[(1)] = (G__47419[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__47420,null,cljs.core.meta(G__47421)));
});
thi.ng.geom.core.vector.yzx = (function thi$ng$geom$core$vector$yzx(G__47424){
if((G__47424 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47424)"));
}

var G__47422 = (((G__47424 instanceof thi.ng.geom.core.vector.Vec2))?G__47424.buf:G__47424.buf);
var G__47423 = (new Float32Array(3));
(G__47423[(0)] = (G__47422[(1)]));

(G__47423[(1)] = (G__47422[(2)]));

(G__47423[(2)] = (G__47422[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__47423,null,cljs.core.meta(G__47424)));
});
thi.ng.geom.core.vector.yzy = (function thi$ng$geom$core$vector$yzy(G__47427){
if((G__47427 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47427)"));
}

var G__47425 = (((G__47427 instanceof thi.ng.geom.core.vector.Vec2))?G__47427.buf:G__47427.buf);
var G__47426 = (new Float32Array(3));
(G__47426[(0)] = (G__47425[(1)]));

(G__47426[(1)] = (G__47425[(2)]));

(G__47426[(2)] = (G__47425[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__47426,null,cljs.core.meta(G__47427)));
});
thi.ng.geom.core.vector.yzz = (function thi$ng$geom$core$vector$yzz(G__47430){
if((G__47430 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47430)"));
}

var G__47428 = (((G__47430 instanceof thi.ng.geom.core.vector.Vec2))?G__47430.buf:G__47430.buf);
var G__47429 = (new Float32Array(3));
(G__47429[(0)] = (G__47428[(1)]));

(G__47429[(1)] = (G__47428[(2)]));

(G__47429[(2)] = (G__47428[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__47429,null,cljs.core.meta(G__47430)));
});
thi.ng.geom.core.vector.z = (function thi$ng$geom$core$vector$z(G__47433){
if((G__47433 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47433)"));
}

var G__47431 = (((G__47433 instanceof thi.ng.geom.core.vector.Vec2))?G__47433.buf:G__47433.buf);
return (G__47431[(2)]);
});
thi.ng.geom.core.vector.zx = (function thi$ng$geom$core$vector$zx(G__47436){
if((G__47436 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47436)"));
}

var G__47434 = (((G__47436 instanceof thi.ng.geom.core.vector.Vec2))?G__47436.buf:G__47436.buf);
var G__47435 = (new Float32Array(2));
(G__47435[(0)] = (G__47434[(2)]));

(G__47435[(1)] = (G__47434[(0)]));

return (new thi.ng.geom.core.vector.Vec2(G__47435,null,cljs.core.meta(G__47436)));
});
thi.ng.geom.core.vector.zxx = (function thi$ng$geom$core$vector$zxx(G__47439){
if((G__47439 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47439)"));
}

var G__47437 = (((G__47439 instanceof thi.ng.geom.core.vector.Vec2))?G__47439.buf:G__47439.buf);
var G__47438 = (new Float32Array(3));
(G__47438[(0)] = (G__47437[(2)]));

(G__47438[(1)] = (G__47437[(0)]));

(G__47438[(2)] = (G__47437[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__47438,null,cljs.core.meta(G__47439)));
});
thi.ng.geom.core.vector.zxy = (function thi$ng$geom$core$vector$zxy(G__47442){
if((G__47442 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47442)"));
}

var G__47440 = (((G__47442 instanceof thi.ng.geom.core.vector.Vec2))?G__47442.buf:G__47442.buf);
var G__47441 = (new Float32Array(3));
(G__47441[(0)] = (G__47440[(2)]));

(G__47441[(1)] = (G__47440[(0)]));

(G__47441[(2)] = (G__47440[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__47441,null,cljs.core.meta(G__47442)));
});
thi.ng.geom.core.vector.zxz = (function thi$ng$geom$core$vector$zxz(G__47449){
if((G__47449 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47449)"));
}

var G__47447 = (((G__47449 instanceof thi.ng.geom.core.vector.Vec2))?G__47449.buf:G__47449.buf);
var G__47448 = (new Float32Array(3));
(G__47448[(0)] = (G__47447[(2)]));

(G__47448[(1)] = (G__47447[(0)]));

(G__47448[(2)] = (G__47447[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__47448,null,cljs.core.meta(G__47449)));
});
thi.ng.geom.core.vector.zy = (function thi$ng$geom$core$vector$zy(G__47452){
if((G__47452 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47452)"));
}

var G__47450 = (((G__47452 instanceof thi.ng.geom.core.vector.Vec2))?G__47452.buf:G__47452.buf);
var G__47451 = (new Float32Array(2));
(G__47451[(0)] = (G__47450[(2)]));

(G__47451[(1)] = (G__47450[(1)]));

return (new thi.ng.geom.core.vector.Vec2(G__47451,null,cljs.core.meta(G__47452)));
});
thi.ng.geom.core.vector.zyx = (function thi$ng$geom$core$vector$zyx(G__47459){
if((G__47459 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47459)"));
}

var G__47457 = (((G__47459 instanceof thi.ng.geom.core.vector.Vec2))?G__47459.buf:G__47459.buf);
var G__47458 = (new Float32Array(3));
(G__47458[(0)] = (G__47457[(2)]));

(G__47458[(1)] = (G__47457[(1)]));

(G__47458[(2)] = (G__47457[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__47458,null,cljs.core.meta(G__47459)));
});
thi.ng.geom.core.vector.zyy = (function thi$ng$geom$core$vector$zyy(G__47463){
if((G__47463 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47463)"));
}

var G__47461 = (((G__47463 instanceof thi.ng.geom.core.vector.Vec2))?G__47463.buf:G__47463.buf);
var G__47462 = (new Float32Array(3));
(G__47462[(0)] = (G__47461[(2)]));

(G__47462[(1)] = (G__47461[(1)]));

(G__47462[(2)] = (G__47461[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__47462,null,cljs.core.meta(G__47463)));
});
thi.ng.geom.core.vector.zyz = (function thi$ng$geom$core$vector$zyz(G__47467){
if((G__47467 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47467)"));
}

var G__47465 = (((G__47467 instanceof thi.ng.geom.core.vector.Vec2))?G__47467.buf:G__47467.buf);
var G__47466 = (new Float32Array(3));
(G__47466[(0)] = (G__47465[(2)]));

(G__47466[(1)] = (G__47465[(1)]));

(G__47466[(2)] = (G__47465[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__47466,null,cljs.core.meta(G__47467)));
});
thi.ng.geom.core.vector.zz = (function thi$ng$geom$core$vector$zz(G__47474){
if((G__47474 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47474)"));
}

var G__47472 = (((G__47474 instanceof thi.ng.geom.core.vector.Vec2))?G__47474.buf:G__47474.buf);
var G__47473 = (new Float32Array(2));
(G__47473[(0)] = (G__47472[(2)]));

(G__47473[(1)] = (G__47472[(2)]));

return (new thi.ng.geom.core.vector.Vec2(G__47473,null,cljs.core.meta(G__47474)));
});
thi.ng.geom.core.vector.zzx = (function thi$ng$geom$core$vector$zzx(G__47477){
if((G__47477 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47477)"));
}

var G__47475 = (((G__47477 instanceof thi.ng.geom.core.vector.Vec2))?G__47477.buf:G__47477.buf);
var G__47476 = (new Float32Array(3));
(G__47476[(0)] = (G__47475[(2)]));

(G__47476[(1)] = (G__47475[(2)]));

(G__47476[(2)] = (G__47475[(0)]));

return (new thi.ng.geom.core.vector.Vec3(G__47476,null,cljs.core.meta(G__47477)));
});
thi.ng.geom.core.vector.zzy = (function thi$ng$geom$core$vector$zzy(G__47480){
if((G__47480 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47480)"));
}

var G__47478 = (((G__47480 instanceof thi.ng.geom.core.vector.Vec2))?G__47480.buf:G__47480.buf);
var G__47479 = (new Float32Array(3));
(G__47479[(0)] = (G__47478[(2)]));

(G__47479[(1)] = (G__47478[(2)]));

(G__47479[(2)] = (G__47478[(1)]));

return (new thi.ng.geom.core.vector.Vec3(G__47479,null,cljs.core.meta(G__47480)));
});
thi.ng.geom.core.vector.zzz = (function thi$ng$geom$core$vector$zzz(G__47483){
if((G__47483 instanceof thi.ng.geom.core.vector.Vec3)){
} else {
throw (new Error("Assert failed: (clojure.core/instance? Vec3 G__47483)"));
}

var G__47481 = (((G__47483 instanceof thi.ng.geom.core.vector.Vec2))?G__47483.buf:G__47483.buf);
var G__47482 = (new Float32Array(3));
(G__47482[(0)] = (G__47481[(2)]));

(G__47482[(1)] = (G__47481[(2)]));

(G__47482[(2)] = (G__47481[(2)]));

return (new thi.ng.geom.core.vector.Vec3(G__47482,null,cljs.core.meta(G__47483)));
});
thi.ng.geom.core.vector.swizzle2_fns = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),thi.ng.geom.core.vector.x,new cljs.core.Keyword(null,"xx","xx",-1542203733),thi.ng.geom.core.vector.xx,new cljs.core.Keyword(null,"xy","xy",-696978232),thi.ng.geom.core.vector.xy,new cljs.core.Keyword(null,"y","y",-1757859776),thi.ng.geom.core.vector.y,new cljs.core.Keyword(null,"yx","yx",1696579752),thi.ng.geom.core.vector.yx,new cljs.core.Keyword(null,"yy","yy",-1432012814),thi.ng.geom.core.vector.yy], null);
thi.ng.geom.core.vector.swizzle3_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"xzx","xzx",-1000197983),new cljs.core.Keyword(null,"xyz","xyz",-1605570015),new cljs.core.Keyword(null,"zzy","zzy",-874287326),new cljs.core.Keyword(null,"yx","yx",1696579752),new cljs.core.Keyword(null,"xy","xy",-696978232),new cljs.core.Keyword(null,"yyz","yyz",1133968296),new cljs.core.Keyword(null,"zxy","zxy",-1258840183),new cljs.core.Keyword(null,"xzy","xzy",1043177385),new cljs.core.Keyword(null,"zxz","zxz",1026042602),new cljs.core.Keyword(null,"zx","zx",-933582998),new cljs.core.Keyword(null,"xx","xx",-1542203733),new cljs.core.Keyword(null,"xxx","xxx",-1019301908),new cljs.core.Keyword(null,"zy","zy",-1975963090),new cljs.core.Keyword(null,"zzx","zzx",20750383),new cljs.core.Keyword(null,"zyx","zyx",1752527951),new cljs.core.Keyword(null,"yzx","yzx",-1496223025),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"yyx","yyx",-1318218191),new cljs.core.Keyword(null,"xz","xz",426487154),new cljs.core.Keyword(null,"zyz","zyz",-1838068142),new cljs.core.Keyword(null,"yy","yy",-1432012814),new cljs.core.Keyword(null,"xxz","xxz",129827699),new cljs.core.Keyword(null,"yzy","yzy",-179510251),new cljs.core.Keyword(null,"yz","yz",679015029),new cljs.core.Keyword(null,"yxx","yxx",-332290091),new cljs.core.Keyword(null,"xyy","xyy",996073014),new cljs.core.Keyword(null,"xxy","xxy",-650102026),new cljs.core.Keyword(null,"zz","zz",122901783),new cljs.core.Keyword(null,"zzz","zzz",-77420552),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"xzz","xzz",-643126693),new cljs.core.Keyword(null,"yxz","yxz",1786796508),new cljs.core.Keyword(null,"zxx","zxx",-61980804),new cljs.core.Keyword(null,"yzz","yzz",-1034441732),new cljs.core.Keyword(null,"xyx","xyx",1899467293),new cljs.core.Keyword(null,"yxy","yxy",1369901661),new cljs.core.Keyword(null,"yyy","yyy",780595422),new cljs.core.Keyword(null,"zyy","zyy",1946268991)],[thi.ng.geom.core.vector.y,thi.ng.geom.core.vector.xzx,thi.ng.geom.core.vector.xyz,thi.ng.geom.core.vector.zzy,thi.ng.geom.core.vector.yx,thi.ng.geom.core.vector.xy,thi.ng.geom.core.vector.yyz,thi.ng.geom.core.vector.zxy,thi.ng.geom.core.vector.xzy,thi.ng.geom.core.vector.zxz,thi.ng.geom.core.vector.zx,thi.ng.geom.core.vector.xx,thi.ng.geom.core.vector.xxx,thi.ng.geom.core.vector.zy,thi.ng.geom.core.vector.zzx,thi.ng.geom.core.vector.zyx,thi.ng.geom.core.vector.yzx,thi.ng.geom.core.vector.z,thi.ng.geom.core.vector.yyx,thi.ng.geom.core.vector.xz,thi.ng.geom.core.vector.zyz,thi.ng.geom.core.vector.yy,thi.ng.geom.core.vector.xxz,thi.ng.geom.core.vector.yzy,thi.ng.geom.core.vector.yz,thi.ng.geom.core.vector.yxx,thi.ng.geom.core.vector.xyy,thi.ng.geom.core.vector.xxy,thi.ng.geom.core.vector.zz,thi.ng.geom.core.vector.zzz,thi.ng.geom.core.vector.x,thi.ng.geom.core.vector.xzz,thi.ng.geom.core.vector.yxz,thi.ng.geom.core.vector.zxx,thi.ng.geom.core.vector.yzz,thi.ng.geom.core.vector.xyx,thi.ng.geom.core.vector.yxy,thi.ng.geom.core.vector.yyy,thi.ng.geom.core.vector.zyy]);
thi.ng.geom.core.vector.swizzle_assoc_STAR_ = (function thi$ng$geom$core$vector$swizzle_assoc_STAR_(src,dest,keymap,k,v){
var n = cljs.core.name(k);
var c = ((n).length);
var temp__5733__auto__ = ((((1) === c))?(function (){var G__47488 = cljs.core.first(n);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__47488) : keymap.call(null,G__47488));
})():false);
if(cljs.core.truth_(temp__5733__auto__)){
var idx = temp__5733__auto__;
(dest[(idx | (0))] = v);

return dest;
} else {
if((((c <= cljs.core.count(keymap))) && ((((c === cljs.core.count(v))) && ((cljs.core.count(v) === cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,n)))))))){
var i = (0);
var n__$1 = n;
while(true){
if(cljs.core.truth_(n__$1)){
var temp__5733__auto____$1 = (function (){var G__47490 = cljs.core.first(n__$1);
return (keymap.cljs$core$IFn$_invoke$arity$1 ? keymap.cljs$core$IFn$_invoke$arity$1(G__47490) : keymap.call(null,G__47490));
})();
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
(dest[(idx | (0))] = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)));

var G__48897 = (i + (1));
var G__48898 = cljs.core.next(n__$1);
i = G__48897;
n__$1 = G__48898;
continue;
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
} else {
return dest;
}
break;
}
} else {
return thi.ng.xerror.core.key_error_BANG_(k);
}
}
});
thi.ng.geom.core.vector.vec2_reduce_STAR_ = (function thi$ng$geom$core$vector$vec2_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return x.buf;
})),(function() {
var G__48899 = null;
var G__48899__1 = (function (a){
return a;
});
var G__48899__2 = (function (a,b){
(a[(0)] = (function (){var G__47491 = (a[(0)]);
var G__47492 = (b[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__47491,G__47492) : op.call(null,G__47491,G__47492));
})());

(a[(1)] = (function (){var G__47493 = (a[(1)]);
var G__47494 = (b[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__47493,G__47494) : op.call(null,G__47493,G__47494));
})());

return a;
});
G__48899 = function(a,b){
switch(arguments.length){
case 1:
return G__48899__1.call(this,a);
case 2:
return G__48899__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48899.cljs$core$IFn$_invoke$arity$1 = G__48899__1;
G__48899.cljs$core$IFn$_invoke$arity$2 = G__48899__2;
return G__48899;
})()
,acc,xs);
});
thi.ng.geom.core.vector.vec3_reduce_STAR_ = (function thi$ng$geom$core$vector$vec3_reduce_STAR_(op,acc,xs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (x){
return x.buf;
})),(function() {
var G__48904 = null;
var G__48904__1 = (function (a){
return a;
});
var G__48904__2 = (function (a,b){
(a[(0)] = (function (){var G__47495 = (a[(0)]);
var G__47496 = (b[(0)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__47495,G__47496) : op.call(null,G__47495,G__47496));
})());

(a[(1)] = (function (){var G__47497 = (a[(1)]);
var G__47498 = (b[(1)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__47497,G__47498) : op.call(null,G__47497,G__47498));
})());

(a[(2)] = (function (){var G__47499 = (a[(2)]);
var G__47500 = (b[(2)]);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__47499,G__47500) : op.call(null,G__47499,G__47500));
})());

return a;
});
G__48904 = function(a,b){
switch(arguments.length){
case 1:
return G__48904__1.call(this,a);
case 2:
return G__48904__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48904.cljs$core$IFn$_invoke$arity$1 = G__48904__1;
G__48904.cljs$core$IFn$_invoke$arity$2 = G__48904__2;
return G__48904;
})()
,acc,xs);
});
thi.ng.geom.core.vector.V2 = (new thi.ng.geom.core.vector.Vec2((new Float32Array((2))),null,null));
thi.ng.geom.core.vector.V3 = (new thi.ng.geom.core.vector.Vec3((new Float32Array((3))),null,null));
thi.ng.geom.core.vector.vec2 = (function thi$ng$geom$core$vector$vec2(var_args){
var G__47503 = arguments.length;
switch (G__47503) {
case 0:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V2;
}));

(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(v,v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0));
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec2",v);

}
}
}
}
}));

(thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,null));
}));

(thi.ng.geom.core.vector.vec2.cljs$lang$maxFixedArity = 2);

thi.ng.geom.core.vector.vec3 = (function thi$ng$geom$core$vector$vec3(var_args){
var G__47512 = arguments.length;
switch (G__47512) {
case 0:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.V3;
}));

(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1 = (function (v){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return v;
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(v,v,v);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0));
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,(0)));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

}
}
}
}
}));

(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$2 = (function (v,z){
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),z);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,(0)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,(0)),z);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(v,z,(0));
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

}
}
}
}));

(thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,null));
}));

(thi.ng.geom.core.vector.vec3.cljs$lang$maxFixedArity = 3);

thi.ng.geom.core.vector.vec2_with_meta = (function thi$ng$geom$core$vector$vec2_with_meta(var_args){
var G__47520 = arguments.length;
switch (G__47520) {
case 2:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec2)){
return cljs.core.with_meta(v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(v,v,meta);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),meta);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec2",v);

}
}
}
}
}));

(thi.ng.geom.core.vector.vec2_with_meta.cljs$core$IFn$_invoke$arity$3 = (function (x,y,meta){
var b = (new Float32Array((2)));
(b[(0)] = x);

(b[(1)] = y);

return (new thi.ng.geom.core.vector.Vec2(b,null,meta));
}));

(thi.ng.geom.core.vector.vec2_with_meta.cljs$lang$maxFixedArity = 3);

thi.ng.geom.core.vector.vec3_with_meta = (function thi$ng$geom$core$vector$vec3_with_meta(var_args){
var G__47524 = arguments.length;
switch (G__47524) {
case 2:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$2 = (function (v,meta){
if((v instanceof thi.ng.geom.core.vector.Vec3)){
return cljs.core.with_meta(v,meta);
} else {
if(typeof v === 'number'){
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(v,v,v,meta);
} else {
if(cljs.core.sequential_QMARK_(v)){
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(0),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),0.0),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(2),0.0),meta);
} else {
if(cljs.core.map_QMARK_(v)){
return thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(v,0.0),new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$2(v,0.0),meta);
} else {
return thi.ng.xerror.core.type_error_BANG_("Vec3",v);

}
}
}
}
}));

(thi.ng.geom.core.vector.vec3_with_meta.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,meta){
var b = (new Float32Array((3)));
(b[(0)] = x);

(b[(1)] = y);

(b[(2)] = z);

return (new thi.ng.geom.core.vector.Vec3(b,null,meta));
}));

(thi.ng.geom.core.vector.vec3_with_meta.cljs$lang$maxFixedArity = 4);

thi.ng.geom.core.vector.vec2_QMARK_ = (function thi$ng$geom$core$vector$vec2_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec2);
});
thi.ng.geom.core.vector.vec3_QMARK_ = (function thi$ng$geom$core$vector$vec3_QMARK_(x){
return (x instanceof thi.ng.geom.core.vector.Vec3);
});
thi.ng.geom.core.vector.V2X = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((1),(0));
thi.ng.geom.core.vector.V2Y = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2((0),(1));
thi.ng.geom.core.vector.V3X = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((1),(0),(0));
thi.ng.geom.core.vector.V3Y = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(1),(0));
thi.ng.geom.core.vector.V3Z = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3((0),(0),(1));
thi.ng.geom.core.vector.V2INF_ = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_);
thi.ng.geom.core.vector.V2INF_PLUS_ = thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_PLUS_);
thi.ng.geom.core.vector.V3INF_ = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_);
thi.ng.geom.core.vector.V3INF_PLUS_ = thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$1(thi.ng.math.core.INF_PLUS_);
thi.ng.geom.core.vector.randvec2 = (function thi$ng$geom$core$vector$randvec2(var_args){
var G__47531 = arguments.length;
switch (G__47531) {
case 0:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()).thi$ng$geom$core$PNormalize$normalize$arity$1(null);
}));

(thi.ng.geom.core.vector.randvec2.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.vector.vec2.cljs$core$IFn$_invoke$arity$2(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()).thi$ng$geom$core$PNormalize$normalize$arity$2(null,n);
}));

(thi.ng.geom.core.vector.randvec2.cljs$lang$maxFixedArity = 1);

thi.ng.geom.core.vector.randvec3 = (function thi$ng$geom$core$vector$randvec3(var_args){
var G__47535 = arguments.length;
switch (G__47535) {
case 0:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$0 = (function (){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()).thi$ng$geom$core$PNormalize$normalize$arity$1(null);
}));

(thi.ng.geom.core.vector.randvec3.cljs$core$IFn$_invoke$arity$1 = (function (n){
return thi.ng.geom.core.vector.vec3.cljs$core$IFn$_invoke$arity$3(thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm(),thi.ng.math.core.randnorm()).thi$ng$geom$core$PNormalize$normalize$arity$2(null,n);
}));

(thi.ng.geom.core.vector.randvec3.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=thi.ng.geom.core.vector.js.map
