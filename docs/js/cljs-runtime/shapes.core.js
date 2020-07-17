goog.provide('shapes.core');

/**
 * @interface
 */
shapes.core.IListen = function(){};

var shapes$core$IListen$_listen$dyn_44265 = (function (this$,listeners){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shapes.core._listen[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,listeners) : m__4429__auto__.call(null,this$,listeners));
} else {
var m__4426__auto__ = (shapes.core._listen["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,listeners) : m__4426__auto__.call(null,this$,listeners));
} else {
throw cljs.core.missing_protocol("IListen.-listen",this$);
}
}
});
/**
 * Attach event listeners to shape.
 */
shapes.core._listen = (function shapes$core$_listen(this$,listeners){
if((((!((this$ == null)))) && ((!((this$.shapes$core$IListen$_listen$arity$2 == null)))))){
return this$.shapes$core$IListen$_listen$arity$2(this$,listeners);
} else {
return shapes$core$IListen$_listen$dyn_44265(this$,listeners);
}
});

shapes.core.listen = (function shapes$core$listen(var_args){
var G__43592 = arguments.length;
switch (G__43592) {
case 3:
return shapes.core.listen.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___44291 = arguments.length;
var i__4737__auto___44292 = (0);
while(true){
if((i__4737__auto___44292 < len__4736__auto___44291)){
args_arr__4757__auto__.push((arguments[i__4737__auto___44292]));

var G__44293 = (i__4737__auto___44292 + (1));
i__4737__auto___44292 = G__44293;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return shapes.core.listen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(shapes.core.listen.cljs$core$IFn$_invoke$arity$3 = (function (event,listener,shape){
return shapes.core._listen(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,listener], null));
}));

(shapes.core.listen.cljs$core$IFn$_invoke$arity$variadic = (function (event_1,listener_1,event_2,listener_2,args){
return shapes.core._listen(cljs.core.last(args),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_1,listener_1,event_2,listener_2], null),cljs.core.butlast(args)));
}));

/** @this {Function} */
(shapes.core.listen.cljs$lang$applyTo = (function (seq43587){
var G__43588 = cljs.core.first(seq43587);
var seq43587__$1 = cljs.core.next(seq43587);
var G__43589 = cljs.core.first(seq43587__$1);
var seq43587__$2 = cljs.core.next(seq43587__$1);
var G__43590 = cljs.core.first(seq43587__$2);
var seq43587__$3 = cljs.core.next(seq43587__$2);
var G__43591 = cljs.core.first(seq43587__$3);
var seq43587__$4 = cljs.core.next(seq43587__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43588,G__43589,G__43590,G__43591,seq43587__$4);
}));

(shapes.core.listen.cljs$lang$maxFixedArity = (4));


/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shapes.core.IListen}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shapes.core.Shape = (function (attrs){
this.attrs = attrs;
this.cljs$lang$protocol_mask$partition0$ = 2155906816;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shapes.core.Shape.prototype.shapes$core$IListen$ = cljs.core.PROTOCOL_SENTINEL);

(shapes.core.Shape.prototype.shapes$core$IListen$_listen$arity$2 = (function (this$,listeners){
var self__ = this;
var this$__$1 = this;
return (new shapes.core.Shape(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (attrs__$1,p__43617){
var vec__43618 = p__43617;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43618,(0),null);
var listener = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43618,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["on-",cljs.core.name(event)].join('')),listener);
}),self__.attrs,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),listeners))));
}));

(shapes.core.Shape.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.attrs;
}));

(shapes.core.Shape.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.attrs,k);
}));

(shapes.core.Shape.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.attrs,k,not_found);
}));

(shapes.core.Shape.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,key,val){
var self__ = this;
var this$__$1 = this;
return (new shapes.core.Shape(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.attrs,key,val)));
}));

(shapes.core.Shape.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.attrs,key);
}));

(shapes.core.Shape.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (new shapes.core.Shape(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.attrs,key)));
}));

(shapes.core.Shape.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq(self__.attrs);
}));

(shapes.core.Shape.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.attrs], 0))], 0));
}));

(shapes.core.Shape.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null)], null);
}));

(shapes.core.Shape.cljs$lang$type = true);

(shapes.core.Shape.cljs$lang$ctorStr = "shapes.core/Shape");

(shapes.core.Shape.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shapes.core/Shape");
}));

/**
 * Positional factory function for shapes.core/Shape.
 */
shapes.core.__GT_Shape = (function shapes$core$__GT_Shape(attrs){
return (new shapes.core.Shape(attrs));
});

shapes.core.assert_number = (function shapes$core$assert_number(message,x){
if(cljs.core.truth_(isNaN(x))){
throw (new Error(message));
} else {
return parseFloat(x);
}
});
shapes.core.assert_number_range = (function shapes$core$assert_number_range(message,x_min,x_max,x){
var x_parsed = shapes.core.assert_number(message,x);
if((((x_min <= x_parsed)) && ((x_parsed <= x_max)))){
return x_parsed;
} else {
throw (new Error(message));
}
});
/**
 * Returns a circle of `radius`.
 */
shapes.core.circle = (function shapes$core$circle(radius){
shapes.core.assert_number("radius must be a number!",radius);

return shapes.core.__GT_Shape(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"is-a","is-a",-1409523272),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"r","r",-471384190),radius,new cljs.core.Keyword(null,"cx","cx",1272694324),radius,new cljs.core.Keyword(null,"cy","cy",755331060),radius,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
/**
 * Returns a rectangle of `width` and `height`.
 */
shapes.core.rectangle = (function shapes$core$rectangle(width,height){
shapes.core.assert_number("width must be a number!",width);

shapes.core.assert_number("height must be a number!",height);

return shapes.core.__GT_Shape(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"is-a","is-a",-1409523272),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null));
});
/**
 * Returns a square of dimension `side`.
 */
shapes.core.square = (function shapes$core$square(side){
shapes.core.assert_number("side must be a number!",side);

return shapes.core.rectangle(side,side);
});
/**
 * Returns an equilateral triangle with sides of `size`.
 */
shapes.core.triangle = (function shapes$core$triangle(size){
shapes.core.assert_number("size must be a number!",size);

return shapes.core.__GT_Shape((function (){var h = (0.8660259 * size);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"is-a","is-a",-1409523272),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"height","height",1025178622)],[(0),"none","black",size,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),size], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(size / (2)),(size - h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size,size], null)], null),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"shape","shape",1190694006),(0),size]);
})());
});
/**
 * Add an image to the drawing
 */
shapes.core.image = (function shapes$core$image(var_args){
var G__43680 = arguments.length;
switch (G__43680) {
case 1:
return shapes.core.image.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shapes.core.image.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shapes.core.image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shapes.core.image.cljs$core$IFn$_invoke$arity$1 = (function (src){
return shapes.core.image.cljs$core$IFn$_invoke$arity$3((200),(200),src);
}));

(shapes.core.image.cljs$core$IFn$_invoke$arity$2 = (function (size,src){
shapes.core.assert_number("size must be a number!",size);

return shapes.core.image.cljs$core$IFn$_invoke$arity$3(size,size,src);
}));

(shapes.core.image.cljs$core$IFn$_invoke$arity$3 = (function (width,height,src){
shapes.core.assert_number("width must be a number!",width);

shapes.core.assert_number("height must be a number!",height);

return shapes.core.__GT_Shape(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"href","href",-793805698),src,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));
}));

(shapes.core.image.cljs$lang$maxFixedArity = 3);

/**
 * Add a label containing `the-text` to a drawing.
 */
shapes.core.text = (function shapes$core$text(the_text){
return shapes.core.__GT_Shape(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"is-a","is-a",-1409523272),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"text","text",-1790561697)],[(18),(15),"normal","#3f4245",((9) * cljs.core.count(the_text)),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"shape","shape",1190694006),(0),"Fira Code",(18),the_text]));
});
/**
 * Create an arbitrary path from a set of points.
 */
shapes.core.path = (function shapes$core$path(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44394 = arguments.length;
var i__4737__auto___44395 = (0);
while(true){
if((i__4737__auto___44395 < len__4736__auto___44394)){
args__4742__auto__.push((arguments[i__4737__auto___44395]));

var G__44396 = (i__4737__auto___44395 + (1));
i__4737__auto___44395 = G__44396;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shapes.core.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shapes.core.path.cljs$core$IFn$_invoke$arity$variadic = (function (points){
return shapes.core.__GT_Shape(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"is-a","is-a",-1409523272),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100),new cljs.core.Keyword(null,"d","d",1972142424),points,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null));
}));

(shapes.core.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shapes.core.path.cljs$lang$applyTo = (function (seq43685){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43685));
}));

/**
 * Returns `shape-or-shapes` wrapped in a vector if it appears to be a single shape.
 */
shapes.core.assure_shape_seq = (function shapes$core$assure_shape_seq(shape_or_shapes){
if((shape_or_shapes instanceof shapes.core.Shape)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_or_shapes], null);
} else {
if((cljs.core.first(shape_or_shapes) instanceof shapes.core.Shape)){
return shape_or_shapes;
} else {
var G__43687 = cljs.core.first(shape_or_shapes);
return (shapes.core.assure_shape_seq.cljs$core$IFn$_invoke$arity$1 ? shapes.core.assure_shape_seq.cljs$core$IFn$_invoke$arity$1(G__43687) : shapes.core.assure_shape_seq.call(null,G__43687));

}
}
});
/**
 * Scale a set of `points` by `factor`.
 */
shapes.core.scale_points = (function shapes$core$scale_points(points,factor){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43688_SHARP_){
if(typeof p1__43688_SHARP_ === 'number'){
return (factor * p1__43688_SHARP_);
} else {
return p1__43688_SHARP_;
}
}),points);
});
shapes.core.points_bounds = (function shapes$core$points_bounds(pts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__43695,p__43696){
var vec__43698 = p__43695;
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43698,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43698,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43698,(2),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43698,(3),null);
var vec__43701 = p__43696;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43701,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43701,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x < x_min))?x:x_min),(((y < y_min))?y:y_min),(((x > x_max))?x:x_max),(((y > y_max))?y:y_max)], null);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100000),(100000),(-100000),(-100000)], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,pts)));
});
/**
 * Returns a map containing :height :width keys that represent the outer (i.e. highest) x/y position for this shape.
 */
shapes.core.shape_bounds = (function shapes$core$shape_bounds(shape){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(((((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()) + (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()) + (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()) + (function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(temp__5733__auto__)){
var pts = temp__5733__auto__;
var vec__43737 = shapes.core.points_bounds(pts);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43737,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43737,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43737,(2),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43737,(3),null);
return x_max;
} else {
return (0);
}
})()),new cljs.core.Keyword(null,"height","height",1025178622),(((((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()) + (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()) + (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()) + (function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(temp__5733__auto__)){
var pts = temp__5733__auto__;
var vec__43803 = shapes.core.points_bounds(pts);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803,(2),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43803,(3),null);
return y_max;
} else {
return (0);
}
})())], null);
});
shapes.core.center_point = (function shapes$core$center_point(shape){
var bounds = shapes.core.shape_bounds(shape);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds) - (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()) / (2)) + (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()),(((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds) - (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})()) / (2)) + (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})())], null);
});
/**
 * Returns a map containing :height :width keys that represent the outer (i.e. highest) x/y position for this group of shapes.
 */
shapes.core.bounds = (function shapes$core$bounds(shapes__$1){
var shapes__$2 = shapes.core.assure_shape_seq(shapes__$1);
var bounds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(shapes.core.shape_bounds,shapes__$2);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,new cljs.core.Keyword(null,"width","width",-384071477),bounds)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,new cljs.core.Keyword(null,"height","height",1025178622),bounds))], null);
});
shapes.core.points__GT_string = (function shapes$core$points__GT_string(pts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.flatten(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.interpose,","),pts))));
});
shapes.core.path_points__GT_string = (function shapes$core$path_points__GT_string(pts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43820_SHARP_){
if((p1__43820_SHARP_ instanceof cljs.core.Keyword)){
return cljs.core.name(p1__43820_SHARP_);
} else {
return p1__43820_SHARP_;
}
}),pts)));
});
shapes.core.shape__GT_vector = (function shapes$core$shape__GT_vector(shape){
var map__43833 = cljs.core.deref(shape);
var map__43833__$1 = (((((!((map__43833 == null))))?(((((map__43833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43833):map__43833);
var attrs = map__43833__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43833__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43833__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43833__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43833__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var unkinded = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"is-a","is-a",-1409523272),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"kind","kind",-717265803)], 0));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [kind,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__43840){
var vec__43841 = p__43840;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43841,(1),null);
var G__43844 = k;
var G__43844__$1 = (((G__43844 instanceof cljs.core.Keyword))?G__43844.fqn:null);
switch (G__43844__$1) {
case "d":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"d","d",1972142424),shapes.core.path_points__GT_string);

break;
case "points":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"points","points",-1486596883),shapes.core.points__GT_string);

break;
case "rotate":
var G__43846 = kind;
var G__43846__$1 = (((G__43846 instanceof cljs.core.Keyword))?G__43846.fqn:null);
switch (G__43846__$1) {
case "path":
var vec__43850 = shapes.core.points_bounds(d);
var x_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43850,(0),null);
var y_min = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43850,(1),null);
var x_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43850,(2),null);
var y_max = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43850,(3),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__43826_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = p1__43826_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})())," rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(m)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((x_max - x_min)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((y_max - y_min)),")"].join('');
}));

break;
default:
var vec__43859 = shapes.core.center_point(m);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43859,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43859,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__43829_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = p1__43829_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})())," rotate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rotate","rotate",152705015).cljs$core$IFn$_invoke$arity$1(m)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),")"].join('');
}));

}

break;
case "translate":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__43830_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = p1__43830_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})())," translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",new cljs.core.Keyword(null,"translate","translate",1336199447).cljs$core$IFn$_invoke$arity$1(m)))),")"].join('');
}));

break;
case "scale":
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"transform","transform",1381301764),(function (p1__43831_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = p1__43831_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})())," scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(m)),")"].join('');
}));

break;
default:
return m;

}
}),unkinded,cljs.core.select_keys(unkinded,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.Keyword(null,"scale","scale",-230427353)], null))),text], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(shapes.core.shape__GT_vector,children));
});
shapes.core.to_hiccup = (function shapes$core$to_hiccup(shape){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shapes.core.bounds(shape),new cljs.core.Keyword(null,"x","x",2099068185),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(0)], 0)),shapes.core.shape__GT_vector(shape)], null);
});
/**
 * Return `shape` with its stroke set to `color`.
 */
shapes.core.stroke = (function shapes$core$stroke(color,shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(shape))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shapes.core.stroke,color),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"stroke","stroke",1741823555),color);
}
});
/**
 * Return `shape` with its stroke color turned off.
 */
shapes.core.no_stroke = (function shapes$core$no_stroke(shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(shape))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(shapes.core.no_stroke,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none");
}
});
/**
 * Return `shape` with its fill set to `color`.
 */
shapes.core.fill = (function shapes$core$fill(color,shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(shape))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shapes.core.fill,color),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"fill","fill",883462889),color);
}
});
/**
 * Return `shape` with its fill color turned off.
 */
shapes.core.no_fill = (function shapes$core$no_fill(shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(shape))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(shapes.core.no_fill,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"fill","fill",883462889),"none");
}
});
/**
 * Return `shape` with its color set to `color`.
 */
shapes.core.colorize = (function shapes$core$colorize(color,shape){
shapes.core.stroke(color,shape);

return shapes.core.fill(color,shape);
});
/**
 * Return `shape` with rotated by `amount`.
 */
shapes.core.scale = (function shapes$core$scale(amount,shape){
shapes.core.assert_number("amount must be a number!",amount);

var G__44021 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(shape);
var G__44021__$1 = (((G__44021 instanceof cljs.core.Keyword))?G__44021.fqn:null);
switch (G__44021__$1) {
case "path":
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"d","d",1972142424),shapes.core.scale_points,amount);

break;
default:
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"scale","scale",-230427353),amount);

}
});
/**
 * Return `shape` with rotated by `amount`.
 */
shapes.core.rotate = (function shapes$core$rotate(amount,shape){
shapes.core.assert_number("amount must be a number!",amount);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(shape))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"rotate","rotate",152705015),amount);
} else {
return null;
}
});
shapes.core.move_points = (function shapes$core$move_points(m,new_x,new_y){
var old_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m);
var old_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__44039){
var vec__44040 = p__44039;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44040,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44040,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new_x + (x - old_x)),(new_y + (y - old_y))], null);
}),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(m)));
});
/**
 * Return `shape` with its x and y positions set to `x` and `y`.
 */
shapes.core.position = (function shapes$core$position(x,y,shape){
shapes.core.assert_number("x must be a number!",x);

shapes.core.assert_number("y must be a number!",y);

var G__44043 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(shape);
var G__44043__$1 = (((G__44043 instanceof cljs.core.Keyword))?G__44043.fqn:null);
switch (G__44043__$1) {
case "circle":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"cx","cx",1272694324),x),new cljs.core.Keyword(null,"cy","cy",755331060),y);

break;
case "polygon":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shapes.core.move_points(shape,x,y),new cljs.core.Keyword(null,"x","x",2099068185),x),new cljs.core.Keyword(null,"y","y",-1757859776),y);

break;
case "path":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"translate","translate",1336199447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"x","x",2099068185),x),new cljs.core.Keyword(null,"y","y",-1757859776),y);

break;
default:
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"x","x",2099068185),x),new cljs.core.Keyword(null,"y","y",-1757859776),y);

}
});
/**
 * Returns a new shape with these `shapes` layered over each other.
 */
shapes.core.layer = (function shapes$core$layer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44558 = arguments.length;
var i__4737__auto___44559 = (0);
while(true){
if((i__4737__auto___44559 < len__4736__auto___44558)){
args__4742__auto__.push((arguments[i__4737__auto___44559]));

var G__44560 = (i__4737__auto___44559 + (1));
i__4737__auto___44559 = G__44560;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shapes.core.layer.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shapes.core.layer.cljs$core$IFn$_invoke$arity$variadic = (function (shapes__$1){
return shapes.core.__GT_Shape(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shapes.core.bounds(shapes__$1),new cljs.core.Keyword(null,"is-a","is-a",-1409523272),new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"kind","kind",-717265803),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"children","children",-940561982),shapes__$1], 0)));
}));

(shapes.core.layer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shapes.core.layer.cljs$lang$applyTo = (function (seq44087){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44087));
}));

/**
 * Return `shapes` with their positions adjusted so they're lined up beside one another.
 */
shapes.core.beside = (function shapes$core$beside(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44567 = arguments.length;
var i__4737__auto___44568 = (0);
while(true){
if((i__4737__auto___44568 < len__4736__auto___44567)){
args__4742__auto__.push((arguments[i__4737__auto___44568]));

var G__44573 = (i__4737__auto___44568 + (1));
i__4737__auto___44568 = G__44573;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shapes.core.beside.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shapes.core.beside.cljs$core$IFn$_invoke$arity$variadic = (function (shapes__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(shapes.core.layer,new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,shape){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"out","out",-910545517)) : state.call(null,new cljs.core.Keyword(null,"out","out",-910545517))),cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"circle","circle",1903212362)))?new cljs.core.Keyword(null,"cx","cx",1272694324):new cljs.core.Keyword(null,"x","x",2099068185)),cljs.core._PLUS_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,new cljs.core.Keyword(null,"widths","widths",-1467327440).cljs$core$IFn$_invoke$arity$1(state)))),new cljs.core.Keyword(null,"widths","widths",-1467327440),cljs.core.butlast((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"widths","widths",-1467327440)) : state.call(null,new cljs.core.Keyword(null,"widths","widths",-1467327440))))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"widths","widths",-1467327440),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44113_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__44113_SHARP_),new cljs.core.Keyword(null,"circle","circle",1903212362))){
return new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(p1__44113_SHARP_);
} else {
return new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(p1__44113_SHARP_);
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(shapes.core.shape_bounds,cljs.core.butlast(shapes__$1)))], null),cljs.core.reverse(shapes.core.assure_shape_seq(shapes__$1)))));
}));

(shapes.core.beside.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shapes.core.beside.cljs$lang$applyTo = (function (seq44114){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44114));
}));

/**
 * Return `shapes` with their positions adjusted so they're stacked above one another.
 */
shapes.core.above = (function shapes$core$above(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44609 = arguments.length;
var i__4737__auto___44610 = (0);
while(true){
if((i__4737__auto___44610 < len__4736__auto___44609)){
args__4742__auto__.push((arguments[i__4737__auto___44610]));

var G__44611 = (i__4737__auto___44610 + (1));
i__4737__auto___44610 = G__44611;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shapes.core.above.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shapes.core.above.cljs$core$IFn$_invoke$arity$variadic = (function (shapes__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(shapes.core.layer,new cljs.core.Keyword(null,"out","out",-910545517).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state,shape){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"out","out",-910545517)) : state.call(null,new cljs.core.Keyword(null,"out","out",-910545517))),cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"circle","circle",1903212362)))?new cljs.core.Keyword(null,"cy","cy",755331060):new cljs.core.Keyword(null,"y","y",-1757859776)),cljs.core._PLUS_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,new cljs.core.Keyword(null,"heights","heights",-1501719023).cljs$core$IFn$_invoke$arity$1(state)))),new cljs.core.Keyword(null,"heights","heights",-1501719023),cljs.core.butlast((state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"heights","heights",-1501719023)) : state.call(null,new cljs.core.Keyword(null,"heights","heights",-1501719023))))], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"heights","heights",-1501719023),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44130_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__44130_SHARP_),new cljs.core.Keyword(null,"circle","circle",1903212362))){
return new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(p1__44130_SHARP_);
} else {
return new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(p1__44130_SHARP_);
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(shapes.core.shape_bounds,cljs.core.butlast(shapes__$1)))], null),cljs.core.reverse(shapes.core.assure_shape_seq(shapes__$1)))));
}));

(shapes.core.above.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shapes.core.above.cljs$lang$applyTo = (function (seq44131){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44131));
}));

/**
 * Set the opacity of the shape to `o`, which should be a decimal number between 0 and 1.0
 */
shapes.core.opacity = (function shapes$core$opacity(o,shape){
shapes.core.assert_number_range("opacity must be a number between 0 and 1.0!",(0),1.0,o);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"opacity","opacity",397153780),cljs.core.str.cljs$core$IFn$_invoke$arity$1(o));
});
shapes.core.rgb = (function shapes$core$rgb(red,green,blue){

shapes.core.assert_number_range("red must be a number between 0 and 255!",(0),(255),red);

shapes.core.assert_number_range("green must be a number between 0 and 255!",(0),(255),green);

shapes.core.assert_number_range("blue must be a number between 0 and 255!",(0),(255),blue);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str,"rgb(",red,",",green,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",",blue,")"], 0));
});
shapes.core.rgba = (function shapes$core$rgba(red,green,blue,alpha){

shapes.core.assert_number_range("red must be a number between 0 and 255!",(0),(255),red);

shapes.core.assert_number_range("green must be a number between 0 and 255!",(0),(255),green);

shapes.core.assert_number_range("blue must be a number between 0 and 255!",(0),(255),blue);

shapes.core.assert_number_range("alpha must be a number between 0 and 1.0!",(0),1.0,alpha);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str,"rgba(",red,",",green,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",",blue,",",alpha,")"], 0));
});
/**
 * Returns a color of `hue` (a number between 0-359 representing an angle on the color wheel), `saturation` percentage and `lightness` percentage.
 */
shapes.core.hsl = (function shapes$core$hsl(hue,saturation,lightness){
shapes.core.assert_number_range("hue must be a number between 0 and 359!",(0),(359),hue);

shapes.core.assert_number_range("saturation must be a number between 0 and 100!",(0),(100),saturation);

shapes.core.assert_number_range("lightness must be a number between 0 and 100!",(0),(100),lightness);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str,"hsl(",hue,",",saturation,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["%,",lightness,"%)"], 0));
});
/**
 * Returns a color of `hue` (a number between 0-359 representing an angle on the color wheel)/`saturation` (percentage)/`lightness` (percentage)/`alpha` (0.0-1.0).
 */
shapes.core.hsla = (function shapes$core$hsla(hue,saturation,lightness,alpha){
shapes.core.assert_number_range("hue must be a number between 0 and 359!",(0),(359),hue);

shapes.core.assert_number_range("saturation must be a number between 0 and 100!",(0),(100),saturation);

shapes.core.assert_number_range("lightness must be a number between 0 and 100!",(0),(100),lightness);

shapes.core.assert_number_range("alpha must be a number between 0 and 1.0!",(0),1.0,alpha);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str,"hsla(",hue,",",saturation,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["%,",lightness,"%, ",alpha,")"], 0));
});
/**
 * Rescales value from range [old-min, old-max] to [new-min, new-max]
 */
shapes.core.rescale = (function shapes$core$rescale(value,old_min,old_max,new_min,new_max){
shapes.core.assert_number("value must be a number!",value);

shapes.core.assert_number("old-min must be a number!",old_min);

shapes.core.assert_number("old-max must be a number!",old_max);

shapes.core.assert_number("new-min must be a number!",new_min);

shapes.core.assert_number("new-max must be a number!",new_max);

var old_spread = (old_max - old_min);
var new_spread = (new_max - new_min);
return (((value - old_min) * (new_spread / old_spread)) + new_min);
});
/**
 * Recognized SVG color keyword names, mapped to their RGB value.
 */
shapes.core.color_names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__44250){
var vec__44252 = p__44250;
var color_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44252,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44252,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_name,shapes.core.colorize(color_name,shapes.core.square((25)))], null);
}),cljs.core.PersistentHashMap.fromArrays(["springgreen","aqua","blue","olivedrab","lightskyblue","greenyellow","ivory","navajowhite","cyan","mediumturquoise","darkslateblue","lawngreen","saddlebrown","white","silver","purple","gainsboro","plum","midnightblue","magenta","paleturquoise","hotpink","mediumorchid","gold","powderblue","papayawhip","bisque","salmon","forestgreen","blanchedalmond","grey","crimson","darkturquoise","steelblue","mediumvioletred","aquamarine","darkgoldenrod","orange","darkgray","lime","cornflowerblue","aliceblue","lightgoldenrodyellow","lemonchiffon","lightsalmon","deepskyblue","lightgreen","palegoldenrod","darkred","violet","gray","goldenrod","darksalmon","skyblue","darkviolet","fuchsia","lightcoral","moccasin","darkgreen","lightyellow","lavenderblush","sienna","burlywood","ghostwhite","coral","linen","lightslategray","azure","darkolivegreen","floralwhite","yellow","beige","wheat","slategray","darkmagenta","darkcyan","dodgerblue","mediumseagreen","darkgrey","mediumblue","pink","mistyrose","teal","olive","navy","darkkhaki","green","darkblue","red","maroon","limegreen","brown","seashell","chocolate","antiquewhite","tan","seagreen","palevioletred","rosybrown","cornsilk","lavender","mediumpurple","black","snow","lightseagreen","palegreen","deeppink","dimgray","blueviolet","cadetblue","slateblue","mediumspringgreen","lightpink","firebrick","dimgrey","khaki","royalblue","sandybrown","orangered","darkslategray","orchid","indianred","darkorchid","honeydew","oldlace","whitesmoke","mediumaquamarine","lightgrey","peru","chartreuse","lightcyan","lightblue","tomato","mintcream","peachpuff","thistle","lightsteelblue","mediumslateblue","darkslategrey","turquoise","slategrey","indigo","lightslategrey","darkorange","yellowgreen","lightgray","darkseagreen"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(127)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(107),(142),(35)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(135),(206),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(173),(255),(47)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(240)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(222),(173)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(72),(209),(204)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(72),(61),(139)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(124),(252),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(139),(69),(19)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(192),(192),(192)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(0),(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(220),(220),(220)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(221),(160),(221)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(25),(25),(112)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(175),(238),(238)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(105),(180)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(186),(85),(211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(215),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(176),(224),(230)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(239),(213)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(228),(196)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(128),(114)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(34),(139),(34)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(235),(205)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(128),(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(220),(20),(60)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(206),(209)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(70),(130),(180)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(199),(21),(133)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(127),(255),(212)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(184),(134),(11)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(165),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(169),(169),(169)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(149),(237)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(248),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(250),(210)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(250),(205)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(160),(122)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(191),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(144),(238),(144)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(238),(232),(170)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(139),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(238),(130),(238)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(128),(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(218),(165),(32)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(233),(150),(122)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(135),(206),(235)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(148),(0),(211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(128),(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(228),(181)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(100),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(224)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(240),(245)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(160),(82),(45)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(222),(184),(135)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(248),(248),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(127),(80)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(240),(230)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(119),(136),(153)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(85),(107),(47)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(250),(240)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(255),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(245),(245),(220)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(245),(222),(179)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(112),(128),(144)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(139),(0),(139)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(139),(139)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(144),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(60),(179),(113)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(169),(169),(169)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(205)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(192),(203)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(228),(225)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(128),(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(128),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(128)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(189),(183),(107)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(128),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(139)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(128),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(205),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(165),(42),(42)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(245),(238)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210),(105),(30)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(250),(235),(215)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(210),(180),(140)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(46),(139),(87)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(219),(112),(147)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(188),(143),(143)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(248),(220)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(230),(230),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(147),(112),(219)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(250),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(32),(178),(170)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(152),(251),(152)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(20),(147)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(105),(105),(105)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(138),(43),(226)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(95),(158),(160)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(106),(90),(205)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(250),(154)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(182),(193)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(178),(34),(34)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(105),(105),(105)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(230),(140)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(65),(105),(225)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(244),(164),(96)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(69),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(47),(79),(79)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(218),(112),(214)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(205),(92),(92)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(153),(50),(204)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(240),(255),(240)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(253),(245),(230)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(245),(245),(245)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(102),(205),(170)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(211),(211),(211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(205),(133),(63)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(127),(255),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(224),(255),(255)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(173),(216),(230)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(99),(71)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(245),(255),(250)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(218),(185)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(216),(191),(216)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(176),(196),(222)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(123),(104),(238)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(47),(79),(79)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(64),(224),(208)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(112),(128),(144)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(75),(0),(130)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(119),(136),(153)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(140),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(154),(205),(50)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(211),(211),(211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(143),(188),(143)], null)]));

//# sourceMappingURL=shapes.core.js.map
