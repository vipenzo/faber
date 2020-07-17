goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35686 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35686(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35693 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35693(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34536 = coll;
var G__34537 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34536,G__34537) : shadow.dom.lazy_native_coll_seq.call(null,G__34536,G__34537));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34553 = arguments.length;
switch (G__34553) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34567 = arguments.length;
switch (G__34567) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34572 = arguments.length;
switch (G__34572) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34584 = arguments.length;
switch (G__34584) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34600 = arguments.length;
switch (G__34600) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34623 = arguments.length;
switch (G__34623) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34631){if((e34631 instanceof Object)){
var e = e34631;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34631;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34641 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34642 = null;
var count__34643 = (0);
var i__34644 = (0);
while(true){
if((i__34644 < count__34643)){
var el = chunk__34642.cljs$core$IIndexed$_nth$arity$2(null,i__34644);
var handler_35741__$1 = ((function (seq__34641,chunk__34642,count__34643,i__34644,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34641,chunk__34642,count__34643,i__34644,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35741__$1);


var G__35744 = seq__34641;
var G__35745 = chunk__34642;
var G__35746 = count__34643;
var G__35747 = (i__34644 + (1));
seq__34641 = G__35744;
chunk__34642 = G__35745;
count__34643 = G__35746;
i__34644 = G__35747;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34641);
if(temp__5735__auto__){
var seq__34641__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34641__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34641__$1);
var G__35751 = cljs.core.chunk_rest(seq__34641__$1);
var G__35752 = c__4556__auto__;
var G__35753 = cljs.core.count(c__4556__auto__);
var G__35754 = (0);
seq__34641 = G__35751;
chunk__34642 = G__35752;
count__34643 = G__35753;
i__34644 = G__35754;
continue;
} else {
var el = cljs.core.first(seq__34641__$1);
var handler_35756__$1 = ((function (seq__34641,chunk__34642,count__34643,i__34644,el,seq__34641__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34641,chunk__34642,count__34643,i__34644,el,seq__34641__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35756__$1);


var G__35757 = cljs.core.next(seq__34641__$1);
var G__35758 = null;
var G__35759 = (0);
var G__35760 = (0);
seq__34641 = G__35757;
chunk__34642 = G__35758;
count__34643 = G__35759;
i__34644 = G__35760;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34661 = arguments.length;
switch (G__34661) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34666 = cljs.core.seq(events);
var chunk__34667 = null;
var count__34668 = (0);
var i__34669 = (0);
while(true){
if((i__34669 < count__34668)){
var vec__34678 = chunk__34667.cljs$core$IIndexed$_nth$arity$2(null,i__34669);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34678,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34678,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35769 = seq__34666;
var G__35770 = chunk__34667;
var G__35771 = count__34668;
var G__35772 = (i__34669 + (1));
seq__34666 = G__35769;
chunk__34667 = G__35770;
count__34668 = G__35771;
i__34669 = G__35772;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34666);
if(temp__5735__auto__){
var seq__34666__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34666__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34666__$1);
var G__35773 = cljs.core.chunk_rest(seq__34666__$1);
var G__35774 = c__4556__auto__;
var G__35775 = cljs.core.count(c__4556__auto__);
var G__35776 = (0);
seq__34666 = G__35773;
chunk__34667 = G__35774;
count__34668 = G__35775;
i__34669 = G__35776;
continue;
} else {
var vec__34683 = cljs.core.first(seq__34666__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34683,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34683,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35781 = cljs.core.next(seq__34666__$1);
var G__35782 = null;
var G__35783 = (0);
var G__35784 = (0);
seq__34666 = G__35781;
chunk__34667 = G__35782;
count__34668 = G__35783;
i__34669 = G__35784;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34688 = cljs.core.seq(styles);
var chunk__34689 = null;
var count__34690 = (0);
var i__34691 = (0);
while(true){
if((i__34691 < count__34690)){
var vec__34703 = chunk__34689.cljs$core$IIndexed$_nth$arity$2(null,i__34691);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34703,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34703,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35789 = seq__34688;
var G__35790 = chunk__34689;
var G__35791 = count__34690;
var G__35792 = (i__34691 + (1));
seq__34688 = G__35789;
chunk__34689 = G__35790;
count__34690 = G__35791;
i__34691 = G__35792;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34688);
if(temp__5735__auto__){
var seq__34688__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34688__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34688__$1);
var G__35797 = cljs.core.chunk_rest(seq__34688__$1);
var G__35798 = c__4556__auto__;
var G__35799 = cljs.core.count(c__4556__auto__);
var G__35800 = (0);
seq__34688 = G__35797;
chunk__34689 = G__35798;
count__34690 = G__35799;
i__34691 = G__35800;
continue;
} else {
var vec__34712 = cljs.core.first(seq__34688__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34712,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34712,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35803 = cljs.core.next(seq__34688__$1);
var G__35804 = null;
var G__35805 = (0);
var G__35806 = (0);
seq__34688 = G__35803;
chunk__34689 = G__35804;
count__34690 = G__35805;
i__34691 = G__35806;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34724_35807 = key;
var G__34724_35808__$1 = (((G__34724_35807 instanceof cljs.core.Keyword))?G__34724_35807.fqn:null);
switch (G__34724_35808__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35816 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_35816,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_35816,"aria-");
}
})())){
el.setAttribute(ks_35816,value);
} else {
(el[ks_35816] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34760){
var map__34761 = p__34760;
var map__34761__$1 = (((((!((map__34761 == null))))?(((((map__34761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34761):map__34761);
var props = map__34761__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34761__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34763 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34763,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34763,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34763,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34766 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34766,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34766;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34771 = arguments.length;
switch (G__34771) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34793){
var vec__34795 = p__34793;
var seq__34796 = cljs.core.seq(vec__34795);
var first__34797 = cljs.core.first(seq__34796);
var seq__34796__$1 = cljs.core.next(seq__34796);
var nn = first__34797;
var first__34797__$1 = cljs.core.first(seq__34796__$1);
var seq__34796__$2 = cljs.core.next(seq__34796__$1);
var np = first__34797__$1;
var nc = seq__34796__$2;
var node = vec__34795;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34800 = nn;
var G__34801 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34800,G__34801) : create_fn.call(null,G__34800,G__34801));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34802 = nn;
var G__34803 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34802,G__34803) : create_fn.call(null,G__34802,G__34803));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34804 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34804,(1),null);
var seq__34807_35843 = cljs.core.seq(node_children);
var chunk__34808_35844 = null;
var count__34809_35845 = (0);
var i__34810_35846 = (0);
while(true){
if((i__34810_35846 < count__34809_35845)){
var child_struct_35847 = chunk__34808_35844.cljs$core$IIndexed$_nth$arity$2(null,i__34810_35846);
var children_35848 = shadow.dom.dom_node(child_struct_35847);
if(cljs.core.seq_QMARK_(children_35848)){
var seq__34871_35849 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35848));
var chunk__34873_35850 = null;
var count__34874_35851 = (0);
var i__34875_35852 = (0);
while(true){
if((i__34875_35852 < count__34874_35851)){
var child_35853 = chunk__34873_35850.cljs$core$IIndexed$_nth$arity$2(null,i__34875_35852);
if(cljs.core.truth_(child_35853)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35853);


var G__35854 = seq__34871_35849;
var G__35855 = chunk__34873_35850;
var G__35856 = count__34874_35851;
var G__35857 = (i__34875_35852 + (1));
seq__34871_35849 = G__35854;
chunk__34873_35850 = G__35855;
count__34874_35851 = G__35856;
i__34875_35852 = G__35857;
continue;
} else {
var G__35858 = seq__34871_35849;
var G__35859 = chunk__34873_35850;
var G__35860 = count__34874_35851;
var G__35861 = (i__34875_35852 + (1));
seq__34871_35849 = G__35858;
chunk__34873_35850 = G__35859;
count__34874_35851 = G__35860;
i__34875_35852 = G__35861;
continue;
}
} else {
var temp__5735__auto___35862 = cljs.core.seq(seq__34871_35849);
if(temp__5735__auto___35862){
var seq__34871_35863__$1 = temp__5735__auto___35862;
if(cljs.core.chunked_seq_QMARK_(seq__34871_35863__$1)){
var c__4556__auto___35864 = cljs.core.chunk_first(seq__34871_35863__$1);
var G__35865 = cljs.core.chunk_rest(seq__34871_35863__$1);
var G__35866 = c__4556__auto___35864;
var G__35867 = cljs.core.count(c__4556__auto___35864);
var G__35868 = (0);
seq__34871_35849 = G__35865;
chunk__34873_35850 = G__35866;
count__34874_35851 = G__35867;
i__34875_35852 = G__35868;
continue;
} else {
var child_35869 = cljs.core.first(seq__34871_35863__$1);
if(cljs.core.truth_(child_35869)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35869);


var G__35870 = cljs.core.next(seq__34871_35863__$1);
var G__35871 = null;
var G__35872 = (0);
var G__35873 = (0);
seq__34871_35849 = G__35870;
chunk__34873_35850 = G__35871;
count__34874_35851 = G__35872;
i__34875_35852 = G__35873;
continue;
} else {
var G__35874 = cljs.core.next(seq__34871_35863__$1);
var G__35875 = null;
var G__35876 = (0);
var G__35877 = (0);
seq__34871_35849 = G__35874;
chunk__34873_35850 = G__35875;
count__34874_35851 = G__35876;
i__34875_35852 = G__35877;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35848);
}


var G__35878 = seq__34807_35843;
var G__35879 = chunk__34808_35844;
var G__35880 = count__34809_35845;
var G__35881 = (i__34810_35846 + (1));
seq__34807_35843 = G__35878;
chunk__34808_35844 = G__35879;
count__34809_35845 = G__35880;
i__34810_35846 = G__35881;
continue;
} else {
var temp__5735__auto___35882 = cljs.core.seq(seq__34807_35843);
if(temp__5735__auto___35882){
var seq__34807_35883__$1 = temp__5735__auto___35882;
if(cljs.core.chunked_seq_QMARK_(seq__34807_35883__$1)){
var c__4556__auto___35884 = cljs.core.chunk_first(seq__34807_35883__$1);
var G__35885 = cljs.core.chunk_rest(seq__34807_35883__$1);
var G__35886 = c__4556__auto___35884;
var G__35887 = cljs.core.count(c__4556__auto___35884);
var G__35888 = (0);
seq__34807_35843 = G__35885;
chunk__34808_35844 = G__35886;
count__34809_35845 = G__35887;
i__34810_35846 = G__35888;
continue;
} else {
var child_struct_35892 = cljs.core.first(seq__34807_35883__$1);
var children_35893 = shadow.dom.dom_node(child_struct_35892);
if(cljs.core.seq_QMARK_(children_35893)){
var seq__34888_35894 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35893));
var chunk__34890_35895 = null;
var count__34891_35896 = (0);
var i__34892_35897 = (0);
while(true){
if((i__34892_35897 < count__34891_35896)){
var child_35899 = chunk__34890_35895.cljs$core$IIndexed$_nth$arity$2(null,i__34892_35897);
if(cljs.core.truth_(child_35899)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35899);


var G__35901 = seq__34888_35894;
var G__35902 = chunk__34890_35895;
var G__35903 = count__34891_35896;
var G__35904 = (i__34892_35897 + (1));
seq__34888_35894 = G__35901;
chunk__34890_35895 = G__35902;
count__34891_35896 = G__35903;
i__34892_35897 = G__35904;
continue;
} else {
var G__35906 = seq__34888_35894;
var G__35907 = chunk__34890_35895;
var G__35908 = count__34891_35896;
var G__35909 = (i__34892_35897 + (1));
seq__34888_35894 = G__35906;
chunk__34890_35895 = G__35907;
count__34891_35896 = G__35908;
i__34892_35897 = G__35909;
continue;
}
} else {
var temp__5735__auto___35911__$1 = cljs.core.seq(seq__34888_35894);
if(temp__5735__auto___35911__$1){
var seq__34888_35913__$1 = temp__5735__auto___35911__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34888_35913__$1)){
var c__4556__auto___35914 = cljs.core.chunk_first(seq__34888_35913__$1);
var G__35915 = cljs.core.chunk_rest(seq__34888_35913__$1);
var G__35916 = c__4556__auto___35914;
var G__35917 = cljs.core.count(c__4556__auto___35914);
var G__35918 = (0);
seq__34888_35894 = G__35915;
chunk__34890_35895 = G__35916;
count__34891_35896 = G__35917;
i__34892_35897 = G__35918;
continue;
} else {
var child_35926 = cljs.core.first(seq__34888_35913__$1);
if(cljs.core.truth_(child_35926)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35926);


var G__35929 = cljs.core.next(seq__34888_35913__$1);
var G__35930 = null;
var G__35931 = (0);
var G__35932 = (0);
seq__34888_35894 = G__35929;
chunk__34890_35895 = G__35930;
count__34891_35896 = G__35931;
i__34892_35897 = G__35932;
continue;
} else {
var G__35933 = cljs.core.next(seq__34888_35913__$1);
var G__35934 = null;
var G__35935 = (0);
var G__35936 = (0);
seq__34888_35894 = G__35933;
chunk__34890_35895 = G__35934;
count__34891_35896 = G__35935;
i__34892_35897 = G__35936;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35893);
}


var G__35940 = cljs.core.next(seq__34807_35883__$1);
var G__35941 = null;
var G__35942 = (0);
var G__35943 = (0);
seq__34807_35843 = G__35940;
chunk__34808_35844 = G__35941;
count__34809_35845 = G__35942;
i__34810_35846 = G__35943;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34928 = cljs.core.seq(node);
var chunk__34929 = null;
var count__34930 = (0);
var i__34931 = (0);
while(true){
if((i__34931 < count__34930)){
var n = chunk__34929.cljs$core$IIndexed$_nth$arity$2(null,i__34931);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35950 = seq__34928;
var G__35951 = chunk__34929;
var G__35952 = count__34930;
var G__35953 = (i__34931 + (1));
seq__34928 = G__35950;
chunk__34929 = G__35951;
count__34930 = G__35952;
i__34931 = G__35953;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34928);
if(temp__5735__auto__){
var seq__34928__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34928__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34928__$1);
var G__35956 = cljs.core.chunk_rest(seq__34928__$1);
var G__35957 = c__4556__auto__;
var G__35958 = cljs.core.count(c__4556__auto__);
var G__35959 = (0);
seq__34928 = G__35956;
chunk__34929 = G__35957;
count__34930 = G__35958;
i__34931 = G__35959;
continue;
} else {
var n = cljs.core.first(seq__34928__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35965 = cljs.core.next(seq__34928__$1);
var G__35966 = null;
var G__35967 = (0);
var G__35968 = (0);
seq__34928 = G__35965;
chunk__34929 = G__35966;
count__34930 = G__35967;
i__34931 = G__35968;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34951 = arguments.length;
switch (G__34951) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34965 = arguments.length;
switch (G__34965) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34987 = arguments.length;
switch (G__34987) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35994 = arguments.length;
var i__4737__auto___35995 = (0);
while(true){
if((i__4737__auto___35995 < len__4736__auto___35994)){
args__4742__auto__.push((arguments[i__4737__auto___35995]));

var G__35997 = (i__4737__auto___35995 + (1));
i__4737__auto___35995 = G__35997;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35021_36003 = cljs.core.seq(nodes);
var chunk__35023_36004 = null;
var count__35024_36005 = (0);
var i__35025_36006 = (0);
while(true){
if((i__35025_36006 < count__35024_36005)){
var node_36007 = chunk__35023_36004.cljs$core$IIndexed$_nth$arity$2(null,i__35025_36006);
fragment.appendChild(shadow.dom._to_dom(node_36007));


var G__36008 = seq__35021_36003;
var G__36009 = chunk__35023_36004;
var G__36010 = count__35024_36005;
var G__36011 = (i__35025_36006 + (1));
seq__35021_36003 = G__36008;
chunk__35023_36004 = G__36009;
count__35024_36005 = G__36010;
i__35025_36006 = G__36011;
continue;
} else {
var temp__5735__auto___36012 = cljs.core.seq(seq__35021_36003);
if(temp__5735__auto___36012){
var seq__35021_36014__$1 = temp__5735__auto___36012;
if(cljs.core.chunked_seq_QMARK_(seq__35021_36014__$1)){
var c__4556__auto___36016 = cljs.core.chunk_first(seq__35021_36014__$1);
var G__36017 = cljs.core.chunk_rest(seq__35021_36014__$1);
var G__36018 = c__4556__auto___36016;
var G__36019 = cljs.core.count(c__4556__auto___36016);
var G__36020 = (0);
seq__35021_36003 = G__36017;
chunk__35023_36004 = G__36018;
count__35024_36005 = G__36019;
i__35025_36006 = G__36020;
continue;
} else {
var node_36022 = cljs.core.first(seq__35021_36014__$1);
fragment.appendChild(shadow.dom._to_dom(node_36022));


var G__36023 = cljs.core.next(seq__35021_36014__$1);
var G__36024 = null;
var G__36025 = (0);
var G__36026 = (0);
seq__35021_36003 = G__36023;
chunk__35023_36004 = G__36024;
count__35024_36005 = G__36025;
i__35025_36006 = G__36026;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35015){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35015));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35037_36027 = cljs.core.seq(scripts);
var chunk__35038_36028 = null;
var count__35039_36029 = (0);
var i__35040_36030 = (0);
while(true){
if((i__35040_36030 < count__35039_36029)){
var vec__35052_36031 = chunk__35038_36028.cljs$core$IIndexed$_nth$arity$2(null,i__35040_36030);
var script_tag_36032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35052_36031,(0),null);
var script_body_36033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35052_36031,(1),null);
eval(script_body_36033);


var G__36034 = seq__35037_36027;
var G__36035 = chunk__35038_36028;
var G__36036 = count__35039_36029;
var G__36037 = (i__35040_36030 + (1));
seq__35037_36027 = G__36034;
chunk__35038_36028 = G__36035;
count__35039_36029 = G__36036;
i__35040_36030 = G__36037;
continue;
} else {
var temp__5735__auto___36038 = cljs.core.seq(seq__35037_36027);
if(temp__5735__auto___36038){
var seq__35037_36042__$1 = temp__5735__auto___36038;
if(cljs.core.chunked_seq_QMARK_(seq__35037_36042__$1)){
var c__4556__auto___36043 = cljs.core.chunk_first(seq__35037_36042__$1);
var G__36044 = cljs.core.chunk_rest(seq__35037_36042__$1);
var G__36045 = c__4556__auto___36043;
var G__36046 = cljs.core.count(c__4556__auto___36043);
var G__36047 = (0);
seq__35037_36027 = G__36044;
chunk__35038_36028 = G__36045;
count__35039_36029 = G__36046;
i__35040_36030 = G__36047;
continue;
} else {
var vec__35057_36048 = cljs.core.first(seq__35037_36042__$1);
var script_tag_36049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35057_36048,(0),null);
var script_body_36050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35057_36048,(1),null);
eval(script_body_36050);


var G__36051 = cljs.core.next(seq__35037_36042__$1);
var G__36052 = null;
var G__36053 = (0);
var G__36054 = (0);
seq__35037_36027 = G__36051;
chunk__35038_36028 = G__36052;
count__35039_36029 = G__36053;
i__35040_36030 = G__36054;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35063){
var vec__35064 = p__35063;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35064,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35064,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35096 = arguments.length;
switch (G__35096) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35117 = cljs.core.seq(style_keys);
var chunk__35118 = null;
var count__35119 = (0);
var i__35120 = (0);
while(true){
if((i__35120 < count__35119)){
var it = chunk__35118.cljs$core$IIndexed$_nth$arity$2(null,i__35120);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36057 = seq__35117;
var G__36058 = chunk__35118;
var G__36059 = count__35119;
var G__36060 = (i__35120 + (1));
seq__35117 = G__36057;
chunk__35118 = G__36058;
count__35119 = G__36059;
i__35120 = G__36060;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35117);
if(temp__5735__auto__){
var seq__35117__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35117__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35117__$1);
var G__36063 = cljs.core.chunk_rest(seq__35117__$1);
var G__36064 = c__4556__auto__;
var G__36065 = cljs.core.count(c__4556__auto__);
var G__36066 = (0);
seq__35117 = G__36063;
chunk__35118 = G__36064;
count__35119 = G__36065;
i__35120 = G__36066;
continue;
} else {
var it = cljs.core.first(seq__35117__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36067 = cljs.core.next(seq__35117__$1);
var G__36068 = null;
var G__36069 = (0);
var G__36070 = (0);
seq__35117 = G__36067;
chunk__35118 = G__36068;
count__35119 = G__36069;
i__35120 = G__36070;
continue;
}
} else {
return null;
}
}
break;
}
});

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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35125,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35136 = k35125;
var G__35136__$1 = (((G__35136 instanceof cljs.core.Keyword))?G__35136.fqn:null);
switch (G__35136__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35125,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35137){
var vec__35138 = p__35137;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35138,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35138,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35124){
var self__ = this;
var G__35124__$1 = this;
return (new cljs.core.RecordIter((0),G__35124__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35126,other35127){
var self__ = this;
var this35126__$1 = this;
return (((!((other35127 == null)))) && ((this35126__$1.constructor === other35127.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35126__$1.x,other35127.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35126__$1.y,other35127.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35126__$1.__extmap,other35127.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35124){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35165 = cljs.core.keyword_identical_QMARK_;
var expr__35166 = k__4388__auto__;
if(cljs.core.truth_((pred__35165.cljs$core$IFn$_invoke$arity$2 ? pred__35165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35166) : pred__35165.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35166)))){
return (new shadow.dom.Coordinate(G__35124,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35165.cljs$core$IFn$_invoke$arity$2 ? pred__35165.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35166) : pred__35165.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35166)))){
return (new shadow.dom.Coordinate(self__.x,G__35124,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35124),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35124){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35124,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35129){
var extmap__4419__auto__ = (function (){var G__35184 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35129,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35129)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35184);
} else {
return G__35184;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35129),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35129),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35197,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35221 = k35197;
var G__35221__$1 = (((G__35221 instanceof cljs.core.Keyword))?G__35221.fqn:null);
switch (G__35221__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35197,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35223){
var vec__35224 = p__35223;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35224,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35224,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35196){
var self__ = this;
var G__35196__$1 = this;
return (new cljs.core.RecordIter((0),G__35196__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35202,other35203){
var self__ = this;
var this35202__$1 = this;
return (((!((other35203 == null)))) && ((this35202__$1.constructor === other35203.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35202__$1.w,other35203.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35202__$1.h,other35203.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35202__$1.__extmap,other35203.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35196){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35247 = cljs.core.keyword_identical_QMARK_;
var expr__35248 = k__4388__auto__;
if(cljs.core.truth_((pred__35247.cljs$core$IFn$_invoke$arity$2 ? pred__35247.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35248) : pred__35247.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35248)))){
return (new shadow.dom.Size(G__35196,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35247.cljs$core$IFn$_invoke$arity$2 ? pred__35247.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35248) : pred__35247.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35248)))){
return (new shadow.dom.Size(self__.w,G__35196,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35196),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35196){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35196,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35208){
var extmap__4419__auto__ = (function (){var G__35266 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35208,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35208)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35266);
} else {
return G__35266;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35208),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35208),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__36204 = (i + (1));
var G__36205 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36204;
ret = G__36205;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35317){
var vec__35319 = p__35317;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35319,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35319,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35330 = arguments.length;
switch (G__35330) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36224 = ps;
var G__36225 = (i + (1));
el__$1 = G__36224;
i = G__36225;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35407 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35407,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35407,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35407,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35413_36231 = cljs.core.seq(props);
var chunk__35414_36232 = null;
var count__35415_36233 = (0);
var i__35416_36234 = (0);
while(true){
if((i__35416_36234 < count__35415_36233)){
var vec__35430_36239 = chunk__35414_36232.cljs$core$IIndexed$_nth$arity$2(null,i__35416_36234);
var k_36240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35430_36239,(0),null);
var v_36241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35430_36239,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36240);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36240),v_36241);


var G__36246 = seq__35413_36231;
var G__36247 = chunk__35414_36232;
var G__36248 = count__35415_36233;
var G__36249 = (i__35416_36234 + (1));
seq__35413_36231 = G__36246;
chunk__35414_36232 = G__36247;
count__35415_36233 = G__36248;
i__35416_36234 = G__36249;
continue;
} else {
var temp__5735__auto___36254 = cljs.core.seq(seq__35413_36231);
if(temp__5735__auto___36254){
var seq__35413_36255__$1 = temp__5735__auto___36254;
if(cljs.core.chunked_seq_QMARK_(seq__35413_36255__$1)){
var c__4556__auto___36256 = cljs.core.chunk_first(seq__35413_36255__$1);
var G__36257 = cljs.core.chunk_rest(seq__35413_36255__$1);
var G__36258 = c__4556__auto___36256;
var G__36259 = cljs.core.count(c__4556__auto___36256);
var G__36260 = (0);
seq__35413_36231 = G__36257;
chunk__35414_36232 = G__36258;
count__35415_36233 = G__36259;
i__35416_36234 = G__36260;
continue;
} else {
var vec__35437_36262 = cljs.core.first(seq__35413_36255__$1);
var k_36263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35437_36262,(0),null);
var v_36264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35437_36262,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36263);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36263),v_36264);


var G__36272 = cljs.core.next(seq__35413_36255__$1);
var G__36273 = null;
var G__36274 = (0);
var G__36275 = (0);
seq__35413_36231 = G__36272;
chunk__35414_36232 = G__36273;
count__35415_36233 = G__36274;
i__35416_36234 = G__36275;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35452 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35452,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35452,(1),null);
var seq__35456_36277 = cljs.core.seq(node_children);
var chunk__35458_36278 = null;
var count__35459_36279 = (0);
var i__35460_36280 = (0);
while(true){
if((i__35460_36280 < count__35459_36279)){
var child_struct_36281 = chunk__35458_36278.cljs$core$IIndexed$_nth$arity$2(null,i__35460_36280);
if((!((child_struct_36281 == null)))){
if(typeof child_struct_36281 === 'string'){
var text_36282 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36282),child_struct_36281].join(''));
} else {
var children_36283 = shadow.dom.svg_node(child_struct_36281);
if(cljs.core.seq_QMARK_(children_36283)){
var seq__35537_36284 = cljs.core.seq(children_36283);
var chunk__35539_36285 = null;
var count__35540_36286 = (0);
var i__35541_36287 = (0);
while(true){
if((i__35541_36287 < count__35540_36286)){
var child_36289 = chunk__35539_36285.cljs$core$IIndexed$_nth$arity$2(null,i__35541_36287);
if(cljs.core.truth_(child_36289)){
node.appendChild(child_36289);


var G__36290 = seq__35537_36284;
var G__36291 = chunk__35539_36285;
var G__36292 = count__35540_36286;
var G__36293 = (i__35541_36287 + (1));
seq__35537_36284 = G__36290;
chunk__35539_36285 = G__36291;
count__35540_36286 = G__36292;
i__35541_36287 = G__36293;
continue;
} else {
var G__36294 = seq__35537_36284;
var G__36295 = chunk__35539_36285;
var G__36296 = count__35540_36286;
var G__36297 = (i__35541_36287 + (1));
seq__35537_36284 = G__36294;
chunk__35539_36285 = G__36295;
count__35540_36286 = G__36296;
i__35541_36287 = G__36297;
continue;
}
} else {
var temp__5735__auto___36298 = cljs.core.seq(seq__35537_36284);
if(temp__5735__auto___36298){
var seq__35537_36299__$1 = temp__5735__auto___36298;
if(cljs.core.chunked_seq_QMARK_(seq__35537_36299__$1)){
var c__4556__auto___36300 = cljs.core.chunk_first(seq__35537_36299__$1);
var G__36301 = cljs.core.chunk_rest(seq__35537_36299__$1);
var G__36302 = c__4556__auto___36300;
var G__36303 = cljs.core.count(c__4556__auto___36300);
var G__36304 = (0);
seq__35537_36284 = G__36301;
chunk__35539_36285 = G__36302;
count__35540_36286 = G__36303;
i__35541_36287 = G__36304;
continue;
} else {
var child_36306 = cljs.core.first(seq__35537_36299__$1);
if(cljs.core.truth_(child_36306)){
node.appendChild(child_36306);


var G__36307 = cljs.core.next(seq__35537_36299__$1);
var G__36308 = null;
var G__36309 = (0);
var G__36310 = (0);
seq__35537_36284 = G__36307;
chunk__35539_36285 = G__36308;
count__35540_36286 = G__36309;
i__35541_36287 = G__36310;
continue;
} else {
var G__36314 = cljs.core.next(seq__35537_36299__$1);
var G__36315 = null;
var G__36316 = (0);
var G__36317 = (0);
seq__35537_36284 = G__36314;
chunk__35539_36285 = G__36315;
count__35540_36286 = G__36316;
i__35541_36287 = G__36317;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36283);
}
}


var G__36318 = seq__35456_36277;
var G__36319 = chunk__35458_36278;
var G__36320 = count__35459_36279;
var G__36321 = (i__35460_36280 + (1));
seq__35456_36277 = G__36318;
chunk__35458_36278 = G__36319;
count__35459_36279 = G__36320;
i__35460_36280 = G__36321;
continue;
} else {
var G__36322 = seq__35456_36277;
var G__36323 = chunk__35458_36278;
var G__36324 = count__35459_36279;
var G__36325 = (i__35460_36280 + (1));
seq__35456_36277 = G__36322;
chunk__35458_36278 = G__36323;
count__35459_36279 = G__36324;
i__35460_36280 = G__36325;
continue;
}
} else {
var temp__5735__auto___36326 = cljs.core.seq(seq__35456_36277);
if(temp__5735__auto___36326){
var seq__35456_36327__$1 = temp__5735__auto___36326;
if(cljs.core.chunked_seq_QMARK_(seq__35456_36327__$1)){
var c__4556__auto___36328 = cljs.core.chunk_first(seq__35456_36327__$1);
var G__36329 = cljs.core.chunk_rest(seq__35456_36327__$1);
var G__36330 = c__4556__auto___36328;
var G__36331 = cljs.core.count(c__4556__auto___36328);
var G__36332 = (0);
seq__35456_36277 = G__36329;
chunk__35458_36278 = G__36330;
count__35459_36279 = G__36331;
i__35460_36280 = G__36332;
continue;
} else {
var child_struct_36333 = cljs.core.first(seq__35456_36327__$1);
if((!((child_struct_36333 == null)))){
if(typeof child_struct_36333 === 'string'){
var text_36334 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36334),child_struct_36333].join(''));
} else {
var children_36335 = shadow.dom.svg_node(child_struct_36333);
if(cljs.core.seq_QMARK_(children_36335)){
var seq__35558_36338 = cljs.core.seq(children_36335);
var chunk__35560_36339 = null;
var count__35561_36340 = (0);
var i__35562_36341 = (0);
while(true){
if((i__35562_36341 < count__35561_36340)){
var child_36343 = chunk__35560_36339.cljs$core$IIndexed$_nth$arity$2(null,i__35562_36341);
if(cljs.core.truth_(child_36343)){
node.appendChild(child_36343);


var G__36344 = seq__35558_36338;
var G__36345 = chunk__35560_36339;
var G__36346 = count__35561_36340;
var G__36347 = (i__35562_36341 + (1));
seq__35558_36338 = G__36344;
chunk__35560_36339 = G__36345;
count__35561_36340 = G__36346;
i__35562_36341 = G__36347;
continue;
} else {
var G__36348 = seq__35558_36338;
var G__36349 = chunk__35560_36339;
var G__36350 = count__35561_36340;
var G__36351 = (i__35562_36341 + (1));
seq__35558_36338 = G__36348;
chunk__35560_36339 = G__36349;
count__35561_36340 = G__36350;
i__35562_36341 = G__36351;
continue;
}
} else {
var temp__5735__auto___36353__$1 = cljs.core.seq(seq__35558_36338);
if(temp__5735__auto___36353__$1){
var seq__35558_36354__$1 = temp__5735__auto___36353__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35558_36354__$1)){
var c__4556__auto___36355 = cljs.core.chunk_first(seq__35558_36354__$1);
var G__36356 = cljs.core.chunk_rest(seq__35558_36354__$1);
var G__36357 = c__4556__auto___36355;
var G__36358 = cljs.core.count(c__4556__auto___36355);
var G__36359 = (0);
seq__35558_36338 = G__36356;
chunk__35560_36339 = G__36357;
count__35561_36340 = G__36358;
i__35562_36341 = G__36359;
continue;
} else {
var child_36360 = cljs.core.first(seq__35558_36354__$1);
if(cljs.core.truth_(child_36360)){
node.appendChild(child_36360);


var G__36361 = cljs.core.next(seq__35558_36354__$1);
var G__36362 = null;
var G__36363 = (0);
var G__36364 = (0);
seq__35558_36338 = G__36361;
chunk__35560_36339 = G__36362;
count__35561_36340 = G__36363;
i__35562_36341 = G__36364;
continue;
} else {
var G__36367 = cljs.core.next(seq__35558_36354__$1);
var G__36368 = null;
var G__36369 = (0);
var G__36370 = (0);
seq__35558_36338 = G__36367;
chunk__35560_36339 = G__36368;
count__35561_36340 = G__36369;
i__35562_36341 = G__36370;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36335);
}
}


var G__36371 = cljs.core.next(seq__35456_36327__$1);
var G__36372 = null;
var G__36373 = (0);
var G__36374 = (0);
seq__35456_36277 = G__36371;
chunk__35458_36278 = G__36372;
count__35459_36279 = G__36373;
i__35460_36280 = G__36374;
continue;
} else {
var G__36375 = cljs.core.next(seq__35456_36327__$1);
var G__36376 = null;
var G__36377 = (0);
var G__36378 = (0);
seq__35456_36277 = G__36375;
chunk__35458_36278 = G__36376;
count__35459_36279 = G__36377;
i__35460_36280 = G__36378;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36422 = arguments.length;
var i__4737__auto___36423 = (0);
while(true){
if((i__4737__auto___36423 < len__4736__auto___36422)){
args__4742__auto__.push((arguments[i__4737__auto___36423]));

var G__36424 = (i__4737__auto___36423 + (1));
i__4737__auto___36423 = G__36424;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35598){
var G__35599 = cljs.core.first(seq35598);
var seq35598__$1 = cljs.core.next(seq35598);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35599,seq35598__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35622 = arguments.length;
switch (G__35622) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__31712__auto___36426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31714__auto__ = (function (){var switch__31563__auto__ = (function (state_35649){
var state_val_35650 = (state_35649[(1)]);
if((state_val_35650 === (1))){
var state_35649__$1 = state_35649;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35649__$1,(2),once_or_cleanup);
} else {
if((state_val_35650 === (2))){
var inst_35646 = (state_35649[(2)]);
var inst_35647 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35649__$1 = (function (){var statearr_35654 = state_35649;
(statearr_35654[(7)] = inst_35646);

return statearr_35654;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35649__$1,inst_35647);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__31564__auto__ = null;
var shadow$dom$state_machine__31564__auto____0 = (function (){
var statearr_35658 = [null,null,null,null,null,null,null,null];
(statearr_35658[(0)] = shadow$dom$state_machine__31564__auto__);

(statearr_35658[(1)] = (1));

return statearr_35658;
});
var shadow$dom$state_machine__31564__auto____1 = (function (state_35649){
while(true){
var ret_value__31565__auto__ = (function (){try{while(true){
var result__31566__auto__ = switch__31563__auto__(state_35649);
if(cljs.core.keyword_identical_QMARK_(result__31566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31566__auto__;
}
break;
}
}catch (e35659){var ex__31567__auto__ = e35659;
var statearr_35661_36427 = state_35649;
(statearr_35661_36427[(2)] = ex__31567__auto__);


if(cljs.core.seq((state_35649[(4)]))){
var statearr_35662_36428 = state_35649;
(statearr_35662_36428[(1)] = cljs.core.first((state_35649[(4)])));

} else {
throw ex__31567__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31565__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36429 = state_35649;
state_35649 = G__36429;
continue;
} else {
return ret_value__31565__auto__;
}
break;
}
});
shadow$dom$state_machine__31564__auto__ = function(state_35649){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__31564__auto____0.call(this);
case 1:
return shadow$dom$state_machine__31564__auto____1.call(this,state_35649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__31564__auto____0;
shadow$dom$state_machine__31564__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__31564__auto____1;
return shadow$dom$state_machine__31564__auto__;
})()
})();
var state__31715__auto__ = (function (){var statearr_35665 = f__31714__auto__();
(statearr_35665[(6)] = c__31712__auto___36426);

return statearr_35665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31715__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
