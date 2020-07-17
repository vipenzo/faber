goog.provide('thi.ng.geom.mesh.csg');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
thi.ng.geom.mesh.csg.CSGNode = (function (plane,polygons,front,back,__meta,__extmap,__hash){
this.plane = plane;
this.polygons = polygons;
this.front = front;
this.back = back;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k28478,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__28482 = k28478;
var G__28482__$1 = (((G__28482 instanceof cljs.core.Keyword))?G__28482.fqn:null);
switch (G__28482__$1) {
case "plane":
return self__.plane;

break;
case "polygons":
return self__.polygons;

break;
case "front":
return self__.front;

break;
case "back":
return self__.back;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28478,else__4383__auto__);

}
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__28484){
var vec__28485 = p__28484;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28485,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28485,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#thi.ng.geom.mesh.csg.CSGNode{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"plane","plane",-223595224),self__.plane],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"polygons","polygons",-266433925),self__.polygons],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"front","front",-1523508988),self__.front],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"back","back",-417520012),self__.back],null))], null),self__.__extmap));
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28477){
var self__ = this;
var G__28477__$1 = this;
return (new cljs.core.RecordIter((0),G__28477__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plane","plane",-223595224),new cljs.core.Keyword(null,"polygons","polygons",-266433925),new cljs.core.Keyword(null,"front","front",-1523508988),new cljs.core.Keyword(null,"back","back",-417520012)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,self__.polygons,self__.front,self__.back,self__.__meta,self__.__extmap,self__.__hash));
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-137736435 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28479,other28480){
var self__ = this;
var this28479__$1 = this;
return (((!((other28480 == null)))) && ((this28479__$1.constructor === other28480.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28479__$1.plane,other28480.plane)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28479__$1.polygons,other28480.polygons)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28479__$1.front,other28480.front)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28479__$1.back,other28480.back)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28479__$1.__extmap,other28480.__extmap)));
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"front","front",-1523508988),null,new cljs.core.Keyword(null,"plane","plane",-223595224),null,new cljs.core.Keyword(null,"back","back",-417520012),null,new cljs.core.Keyword(null,"polygons","polygons",-266433925),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,self__.polygons,self__.front,self__.back,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__28477){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__28489 = cljs.core.keyword_identical_QMARK_;
var expr__28490 = k__4388__auto__;
if(cljs.core.truth_((pred__28489.cljs$core$IFn$_invoke$arity$2 ? pred__28489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plane","plane",-223595224),expr__28490) : pred__28489.call(null,new cljs.core.Keyword(null,"plane","plane",-223595224),expr__28490)))){
return (new thi.ng.geom.mesh.csg.CSGNode(G__28477,self__.polygons,self__.front,self__.back,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28489.cljs$core$IFn$_invoke$arity$2 ? pred__28489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"polygons","polygons",-266433925),expr__28490) : pred__28489.call(null,new cljs.core.Keyword(null,"polygons","polygons",-266433925),expr__28490)))){
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,G__28477,self__.front,self__.back,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28489.cljs$core$IFn$_invoke$arity$2 ? pred__28489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"front","front",-1523508988),expr__28490) : pred__28489.call(null,new cljs.core.Keyword(null,"front","front",-1523508988),expr__28490)))){
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,self__.polygons,G__28477,self__.back,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28489.cljs$core$IFn$_invoke$arity$2 ? pred__28489.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"back","back",-417520012),expr__28490) : pred__28489.call(null,new cljs.core.Keyword(null,"back","back",-417520012),expr__28490)))){
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,self__.polygons,self__.front,G__28477,self__.__meta,self__.__extmap,null));
} else {
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,self__.polygons,self__.front,self__.back,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__28477),null));
}
}
}
}
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"plane","plane",-223595224),self__.plane,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"polygons","polygons",-266433925),self__.polygons,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"front","front",-1523508988),self__.front,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"back","back",-417520012),self__.back,null))], null),self__.__extmap));
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__28477){
var self__ = this;
var this__4379__auto____$1 = this;
return (new thi.ng.geom.mesh.csg.CSGNode(self__.plane,self__.polygons,self__.front,self__.back,G__28477,self__.__extmap,self__.__hash));
}));

(thi.ng.geom.mesh.csg.CSGNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(thi.ng.geom.mesh.csg.CSGNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"plane","plane",1416936303,null),new cljs.core.Symbol(null,"polygons","polygons",1374097602,null),new cljs.core.Symbol(null,"front","front",117022539,null),new cljs.core.Symbol(null,"back","back",1223011515,null)], null);
}));

(thi.ng.geom.mesh.csg.CSGNode.cljs$lang$type = true);

(thi.ng.geom.mesh.csg.CSGNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"thi.ng.geom.mesh.csg/CSGNode",null,(1),null));
}));

(thi.ng.geom.mesh.csg.CSGNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"thi.ng.geom.mesh.csg/CSGNode");
}));

/**
 * Positional factory function for thi.ng.geom.mesh.csg/CSGNode.
 */
thi.ng.geom.mesh.csg.__GT_CSGNode = (function thi$ng$geom$mesh$csg$__GT_CSGNode(plane,polygons,front,back){
return (new thi.ng.geom.mesh.csg.CSGNode(plane,polygons,front,back,null,null,null));
});

/**
 * Factory function for thi.ng.geom.mesh.csg/CSGNode, taking a map of keywords to field values.
 */
thi.ng.geom.mesh.csg.map__GT_CSGNode = (function thi$ng$geom$mesh$csg$map__GT_CSGNode(G__28481){
var extmap__4419__auto__ = (function (){var G__28492 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28481,new cljs.core.Keyword(null,"plane","plane",-223595224),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"polygons","polygons",-266433925),new cljs.core.Keyword(null,"front","front",-1523508988),new cljs.core.Keyword(null,"back","back",-417520012)], 0));
if(cljs.core.record_QMARK_(G__28481)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28492);
} else {
return G__28492;
}
})();
return (new thi.ng.geom.mesh.csg.CSGNode(new cljs.core.Keyword(null,"plane","plane",-223595224).cljs$core$IFn$_invoke$arity$1(G__28481),new cljs.core.Keyword(null,"polygons","polygons",-266433925).cljs$core$IFn$_invoke$arity$1(G__28481),new cljs.core.Keyword(null,"front","front",-1523508988).cljs$core$IFn$_invoke$arity$1(G__28481),new cljs.core.Keyword(null,"back","back",-417520012).cljs$core$IFn$_invoke$arity$1(G__28481),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
* @constructor
 * @implements {thi.ng.geom.core.PBoundingSphere}
 * @implements {thi.ng.geom.core.PFlip}
*/
thi.ng.geom.mesh.csg.CSGPolygon = (function (plane,vertices,shared,bsphere){
this.plane = plane;
this.vertices = vertices;
this.shared = shared;
this.bsphere = bsphere;
});
(thi.ng.geom.mesh.csg.CSGPolygon.prototype.thi$ng$geom$core$PBoundingSphere$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.mesh.csg.CSGPolygon.prototype.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.bsphere)){
return self__.bsphere;
} else {
(self__.bsphere = thi.ng.geom.types.utils.bounding_sphere.cljs$core$IFn$_invoke$arity$1(self__.vertices));

return self__.bsphere;
}
}));

(thi.ng.geom.mesh.csg.CSGPolygon.prototype.thi$ng$geom$core$PFlip$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.geom.mesh.csg.CSGPolygon.prototype.thi$ng$geom$core$PFlip$flip$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.geom.mesh.csg.CSGPolygon(thi.ng.geom.core.flip(self__.plane),cljs.core.reverse(self__.vertices),self__.shared,self__.bsphere));
}));

(thi.ng.geom.mesh.csg.CSGPolygon.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"plane","plane",1416936303,null),new cljs.core.Symbol(null,"vertices","vertices",-645530038,null),new cljs.core.Symbol(null,"shared","shared",1256385534,null),cljs.core.with_meta(new cljs.core.Symbol(null,"bsphere","bsphere",940397515,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),true], null))], null);
}));

(thi.ng.geom.mesh.csg.CSGPolygon.cljs$lang$type = true);

(thi.ng.geom.mesh.csg.CSGPolygon.cljs$lang$ctorStr = "thi.ng.geom.mesh.csg/CSGPolygon");

(thi.ng.geom.mesh.csg.CSGPolygon.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"thi.ng.geom.mesh.csg/CSGPolygon");
}));

/**
 * Positional factory function for thi.ng.geom.mesh.csg/CSGPolygon.
 */
thi.ng.geom.mesh.csg.__GT_CSGPolygon = (function thi$ng$geom$mesh$csg$__GT_CSGPolygon(plane,vertices,shared,bsphere){
return (new thi.ng.geom.mesh.csg.CSGPolygon(plane,vertices,shared,bsphere));
});

thi.ng.geom.mesh.csg.compute_split_types = (function thi$ng$geom$mesh$csg$compute_split_types(n,w,vertices){
var ieps = (- thi.ng.math.core._STAR_eps_STAR_);
var ptype = (0);
var types = cljs.core.PersistentVector.EMPTY;
var vertices__$1 = vertices;
while(true){
if(cljs.core.truth_(vertices__$1)){
var t = (thi.ng.geom.core.dot(n,cljs.core.first(vertices__$1)) + w);
var pt = (((t < ieps))?(2):(((t > thi.ng.math.core._STAR_eps_STAR_))?(1):(0)));
var G__28553 = (ptype | pt);
var G__28554 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(types,pt);
var G__28555 = cljs.core.next(vertices__$1);
ptype = G__28553;
types = G__28554;
vertices__$1 = G__28555;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ptype,types], null);
}
break;
}
});
thi.ng.geom.mesh.csg.split_poly_STAR_ = (function thi$ng$geom$mesh$csg$split_poly_STAR_(n,w,vertices,types){
var nv = cljs.core.count(vertices);
var f = cljs.core.PersistentVector.EMPTY;
var b = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if((i < nv)){
var j = cljs.core.rem((i + (1)),nv);
var vi = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vertices,i);
var ti = (types.cljs$core$IFn$_invoke$arity$1 ? types.cljs$core$IFn$_invoke$arity$1(i) : types.call(null,i));
var f__$1 = (((ti === (2)))?f:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(f,vi));
var b__$1 = (((ti === (1)))?b:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(b,vi));
if(((3) === (ti | (types.cljs$core$IFn$_invoke$arity$1 ? types.cljs$core$IFn$_invoke$arity$1(j) : types.call(null,j))))){
var vj = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(vertices,j);
var v = thi.ng.geom.core.mix(vi,vj,(((- w) - thi.ng.geom.core.dot(n,vi)) / thi.ng.geom.core.dot(n,thi.ng.geom.core._(vj,vi))));
var G__28558 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(f__$1,v);
var G__28559 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(b__$1,v);
var G__28560 = (i + (1));
f = G__28558;
b = G__28559;
i = G__28560;
continue;
} else {
var G__28562 = f__$1;
var G__28563 = b__$1;
var G__28564 = (i + (1));
f = G__28562;
b = G__28563;
i = G__28564;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,b], null);
}
break;
}
});
/**
 * Takes a plane and splits the given polygon with it. Returns a 4-element vector
 *  of classified sub-shapes: [coplanar-front coplanar-back front back].
 */
thi.ng.geom.mesh.csg.split_poly = (function thi$ng$geom$mesh$csg$split_poly(p__28495,poly,state){
var map__28496 = p__28495;
var map__28496__$1 = (((((!((map__28496 == null))))?(((((map__28496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28496):map__28496);
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28496__$1,new cljs.core.Keyword(null,"n","n",562130025));
var w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28496__$1,new cljs.core.Keyword(null,"w","w",354169001));
var s = poly.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1(null);
var r = (new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(s) + thi.ng.math.core._STAR_eps_STAR_);
var d = (thi.ng.geom.core.dot(n,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(s)) + w);
if((d > r)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,(2),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((2)) : state.call(null,(2))),poly));
} else {
if((d < (- r))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,(3),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((3)) : state.call(null,(3))),poly));
} else {
var vec__28498 = thi.ng.geom.mesh.csg.compute_split_types(n,w,poly.vertices);
var ptype = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28498,(0),null);
var types = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28498,(1),null);
var G__28501 = (ptype | (0));
switch (G__28501) {
case (0):
if((thi.ng.geom.core.dot(n,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(poly.plane)) > (0))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,(0),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((0)) : state.call(null,(0))),poly));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,(1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((1)) : state.call(null,(1))),poly));
}

break;
case (1):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,(2),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((2)) : state.call(null,(2))),poly));

break;
case (2):
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,(3),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((3)) : state.call(null,(3))),poly));

break;
case (3):
var vec__28502 = thi.ng.geom.mesh.csg.split_poly_STAR_(n,w,poly.vertices,types);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28502,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28502,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((0)) : state.call(null,(0))),(state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((1)) : state.call(null,(1))),(((cljs.core.count(f) >= (3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((2)) : state.call(null,(2))),(function (){var G__28505 = f;
var G__28506 = poly.shared;
return (thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$2(G__28505,G__28506) : thi.ng.geom.mesh.csg.csg_polygon.call(null,G__28505,G__28506));
})()):f),(((cljs.core.count(b) >= (3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1((3)) : state.call(null,(3))),(function (){var G__28507 = b;
var G__28508 = poly.shared;
return (thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$2(G__28507,G__28508) : thi.ng.geom.mesh.csg.csg_polygon.call(null,G__28507,G__28508));
})()):b)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28501)].join('')));

}

}
}
});
/**
 * Uses a CSG node's plane to recursively clip the given seq of polygons.
 *   Returns a flat seq of polygons classified as in-front of the plane
 *   or the original seq if no clipping plane is available.
 */
thi.ng.geom.mesh.csg.clip_polygons = (function thi$ng$geom$mesh$csg$clip_polygons(p__28509,ps){
var map__28510 = p__28509;
var map__28510__$1 = (((((!((map__28510 == null))))?(((((map__28510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28510):map__28510);
var node = map__28510__$1;
var plane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510__$1,new cljs.core.Keyword(null,"plane","plane",-223595224));
var front = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var back = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28510__$1,new cljs.core.Keyword(null,"back","back",-417520012));
if(cljs.core.not(plane)){
return ps;
} else {
var vec__28512 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,poly){
return thi.ng.geom.mesh.csg.split_poly(plane,poly,state);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),ps);
var cp_front = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28512,(0),null);
var cp_back = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28512,(1),null);
var new_front = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28512,(2),null);
var new_back = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28512,(3),null);
var new_front__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new_front,cp_front);
var new_front__$2 = (cljs.core.truth_(front)?(thi.ng.geom.mesh.csg.clip_polygons.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.mesh.csg.clip_polygons.cljs$core$IFn$_invoke$arity$2(front,new_front__$1) : thi.ng.geom.mesh.csg.clip_polygons.call(null,front,new_front__$1)):new_front__$1);
var new_back__$1 = (cljs.core.truth_(back)?(function (){var G__28516 = back;
var G__28517 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new_back,cp_back);
return (thi.ng.geom.mesh.csg.clip_polygons.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.mesh.csg.clip_polygons.cljs$core$IFn$_invoke$arity$2(G__28516,G__28517) : thi.ng.geom.mesh.csg.clip_polygons.call(null,G__28516,G__28517));
})():cljs.core.PersistentVector.EMPTY);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new_front__$2,new_back__$1);
}
});
/**
 * Returns a lazy seq of all polygons of the given CSG node and its children.
 */
thi.ng.geom.mesh.csg.all_polygons = (function thi$ng$geom$mesh$csg$all_polygons(p__28518){
var map__28519 = p__28518;
var map__28519__$1 = (((((!((map__28519 == null))))?(((((map__28519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28519):map__28519);
var node = map__28519__$1;
var front = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28519__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var back = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28519__$1,new cljs.core.Keyword(null,"back","back",-417520012));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"polygons","polygons",-266433925).cljs$core$IFn$_invoke$arity$1(node),(cljs.core.truth_(front)?(thi.ng.geom.mesh.csg.all_polygons.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.mesh.csg.all_polygons.cljs$core$IFn$_invoke$arity$1(front) : thi.ng.geom.mesh.csg.all_polygons.call(null,front)):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(back)?(thi.ng.geom.mesh.csg.all_polygons.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.mesh.csg.all_polygons.cljs$core$IFn$_invoke$arity$1(back) : thi.ng.geom.mesh.csg.all_polygons.call(null,back)):null)], 0));
});
thi.ng.geom.mesh.csg.invert = (function thi$ng$geom$mesh$csg$invert(p__28521){
var map__28522 = p__28521;
var map__28522__$1 = (((((!((map__28522 == null))))?(((((map__28522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28522):map__28522);
var node = map__28522__$1;
var front = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28522__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var back = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28522__$1,new cljs.core.Keyword(null,"back","back",-417520012));
var plane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28522__$1,new cljs.core.Keyword(null,"plane","plane",-223595224));
return (new thi.ng.geom.mesh.csg.CSGNode((cljs.core.truth_(plane)?thi.ng.geom.core.flip(plane):null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(thi.ng.geom.core.flip,new cljs.core.Keyword(null,"polygons","polygons",-266433925).cljs$core$IFn$_invoke$arity$1(node)),(cljs.core.truth_(back)?(thi.ng.geom.mesh.csg.invert.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.mesh.csg.invert.cljs$core$IFn$_invoke$arity$1(back) : thi.ng.geom.mesh.csg.invert.call(null,back)):null),(cljs.core.truth_(front)?(thi.ng.geom.mesh.csg.invert.cljs$core$IFn$_invoke$arity$1 ? thi.ng.geom.mesh.csg.invert.cljs$core$IFn$_invoke$arity$1(front) : thi.ng.geom.mesh.csg.invert.call(null,front)):null),null,null,null));
});
/**
 * Clips the polygons of the first node with the ones from the second.
 *   Returns the updated node.
 */
thi.ng.geom.mesh.csg.clip = (function thi$ng$geom$mesh$csg$clip(p__28524,b){
var map__28525 = p__28524;
var map__28525__$1 = (((((!((map__28525 == null))))?(((((map__28525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28525):map__28525);
var a = map__28525__$1;
var front = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28525__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var back = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28525__$1,new cljs.core.Keyword(null,"back","back",-417520012));
return (new thi.ng.geom.mesh.csg.CSGNode(new cljs.core.Keyword(null,"plane","plane",-223595224).cljs$core$IFn$_invoke$arity$1(a),thi.ng.geom.mesh.csg.clip_polygons(b,new cljs.core.Keyword(null,"polygons","polygons",-266433925).cljs$core$IFn$_invoke$arity$1(a)),(cljs.core.truth_(front)?(thi.ng.geom.mesh.csg.clip.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.mesh.csg.clip.cljs$core$IFn$_invoke$arity$2(front,b) : thi.ng.geom.mesh.csg.clip.call(null,front,b)):null),(cljs.core.truth_(back)?(thi.ng.geom.mesh.csg.clip.cljs$core$IFn$_invoke$arity$2 ? thi.ng.geom.mesh.csg.clip.cljs$core$IFn$_invoke$arity$2(back,b) : thi.ng.geom.mesh.csg.clip.call(null,back,b)):null),null,null,null));
});
/**
 * Creates a CSG polygon map from the given vertices and
 *   computes a plane definition using the first 3 vertices.
 */
thi.ng.geom.mesh.csg.csg_polygon = (function thi$ng$geom$mesh$csg$csg_polygon(var_args){
var G__28528 = arguments.length;
switch (G__28528) {
case 1:
return thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$1 = (function (vertices){
return thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$2(vertices,null);
}));

(thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$2 = (function (vertices,shared){
return (new thi.ng.geom.mesh.csg.CSGPolygon(thi.ng.geom.plane.plane_from_points.cljs$core$IFn$_invoke$arity$1(vertices),cljs.core.vec(vertices),shared,null));
}));

(thi.ng.geom.mesh.csg.csg_polygon.cljs$lang$maxFixedArity = 2);

/**
 * Creates a new or refines a CSG tree node and recursively
 *   adds the given polygons to it.
 */
thi.ng.geom.mesh.csg.csg_node = (function thi$ng$geom$mesh$csg$csg_node(var_args){
var G__28530 = arguments.length;
switch (G__28530) {
case 1:
return thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$1 = (function (polygons){
return thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$2(null,polygons);
}));

(thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$2 = (function (p__28532,ps){
var map__28533 = p__28532;
var map__28533__$1 = (((((!((map__28533 == null))))?(((((map__28533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28533):map__28533);
var node = map__28533__$1;
var polygons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28533__$1,new cljs.core.Keyword(null,"polygons","polygons",-266433925));
var plane = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28533__$1,new cljs.core.Keyword(null,"plane","plane",-223595224));
var front = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28533__$1,new cljs.core.Keyword(null,"front","front",-1523508988));
var back = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28533__$1,new cljs.core.Keyword(null,"back","back",-417520012));
if(cljs.core.seq(ps)){
var plane__$1 = (function (){var or__4126__auto__ = plane;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.first(ps).plane;
}
})();
var vec__28535 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,poly){
return thi.ng.geom.mesh.csg.split_poly(plane__$1,poly,state);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),ps);
var cp_front = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28535,(0),null);
var cp_back = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28535,(1),null);
var new_front = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28535,(2),null);
var new_back = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28535,(3),null);
return (new thi.ng.geom.mesh.csg.CSGNode(plane__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(polygons,cp_front),cp_back),((cljs.core.seq(new_front))?thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$2(front,new_front):front),((cljs.core.seq(new_back))?thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$2(back,new_back):back),null,null,null));
} else {
return node;
}
}));

(thi.ng.geom.mesh.csg.csg_node.cljs$lang$maxFixedArity = 2);

thi.ng.geom.mesh.csg.union = (function thi$ng$geom$mesh$csg$union(a,b){
var a__$1 = thi.ng.geom.mesh.csg.clip(a,b);
var b__$1 = thi.ng.geom.mesh.csg.invert(thi.ng.geom.mesh.csg.clip(thi.ng.geom.mesh.csg.invert(thi.ng.geom.mesh.csg.clip(b,a__$1)),a__$1));
return thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$2(a__$1,thi.ng.geom.mesh.csg.all_polygons(b__$1));
});
thi.ng.geom.mesh.csg.subtract = (function thi$ng$geom$mesh$csg$subtract(a,b){
var a__$1 = thi.ng.geom.mesh.csg.clip(thi.ng.geom.mesh.csg.invert(a),b);
var b__$1 = thi.ng.geom.mesh.csg.invert(thi.ng.geom.mesh.csg.clip(thi.ng.geom.mesh.csg.invert(thi.ng.geom.mesh.csg.clip(b,a__$1)),a__$1));
return thi.ng.geom.mesh.csg.invert(thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$2(a__$1,thi.ng.geom.mesh.csg.all_polygons(b__$1)));
});
thi.ng.geom.mesh.csg.intersect = (function thi$ng$geom$mesh$csg$intersect(a,b){
var a__$1 = thi.ng.geom.mesh.csg.invert(a);
var b__$1 = thi.ng.geom.mesh.csg.invert(thi.ng.geom.mesh.csg.clip(b,a__$1));
var a__$2 = thi.ng.geom.mesh.csg.clip(a__$1,b__$1);
var b__$2 = thi.ng.geom.mesh.csg.clip(b__$1,a__$2);
return thi.ng.geom.mesh.csg.invert(thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$2(a__$2,thi.ng.geom.mesh.csg.all_polygons(b__$2)));
});
thi.ng.geom.mesh.csg.mesh__GT_csg = (function thi$ng$geom$mesh$csg$mesh__GT_csg(m){
return thi.ng.geom.mesh.csg.csg_node.cljs$core$IFn$_invoke$arity$2(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$2(f,null);
}),thi.ng.geom.core.faces(m)));
});
thi.ng.geom.mesh.csg.csg__GT_mesh = (function thi$ng$geom$mesh$csg$csg__GT_mesh(node){
return thi.ng.geom.core.into(thi.ng.geom.basicmesh.basic_mesh(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (poly){
return poly.vertices;
}),thi.ng.geom.mesh.csg.all_polygons(node)));
});
thi.ng.geom.mesh.csg.csg_cone = (function thi$ng$geom$mesh$csg$csg_cone(var_args){
var G__28539 = arguments.length;
switch (G__28539) {
case 4:
return thi.ng.geom.mesh.csg.csg_cone.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.geom.mesh.csg.csg_cone.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.mesh.csg.csg_cone.cljs$core$IFn$_invoke$arity$4 = (function (s,e,radius,res){
return thi.ng.geom.mesh.csg.csg_cone.cljs$core$IFn$_invoke$arity$5(s,e,radius,radius,res);
}));

(thi.ng.geom.mesh.csg.csg_cone.cljs$core$IFn$_invoke$arity$5 = (function (s,e,r_south,r_north,res){
var dir = thi.ng.geom.core._(e,s);
var az = thi.ng.geom.core.normalize(dir);
var ax = thi.ng.geom.core.normalize(((((function (){var G__28540 = (az.cljs$core$IFn$_invoke$arity$1 ? az.cljs$core$IFn$_invoke$arity$1((1)) : az.call(null,(1)));
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__28540) : thi.ng.math.core.abs.call(null,G__28540));
})() > 0.5))?thi.ng.geom.core.vector.V3X:thi.ng.geom.core.vector.V3Y).thi$ng$geom$core$PCrossProduct$cross$arity$2(null,az));
var ay = thi.ng.geom.core.normalize(thi.ng.geom.core.cross(ax,az));
var f = (function (stack,i,r){
var theta = (thi.ng.math.core.TWO_PI * i);
var out = thi.ng.geom.core.madd(ax,Math.cos(theta),thi.ng.geom.core._STAR_(ay,Math.sin(theta)));
var pos = thi.ng.geom.core._PLUS_(s,thi.ng.geom.core._STAR_(dir,stack),thi.ng.geom.core._STAR_(out,r));
return pos;
});
var res__$1 = (1.0 / res);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (i){
var t0 = (i * res__$1);
var t1 = ((i + (1)) * res__$1);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,f((0),t0,r_south),f((0),t1,r_south)], null)),thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [f((0),t1,r_south),f((0),t0,r_south),f((1),t0,r_north),f((1),t1,r_north)], null)),thi.ng.geom.mesh.csg.csg_polygon.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,f((1),t1,r_north),f((1),t0,r_north)], null))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(res__$1)], 0));
}));

(thi.ng.geom.mesh.csg.csg_cone.cljs$lang$maxFixedArity = 5);


//# sourceMappingURL=thi.ng.geom.mesh.csg.js.map
