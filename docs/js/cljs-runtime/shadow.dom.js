goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45521 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_45521(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45522 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_45522(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44709 = coll;
var G__44710 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44709,G__44710) : shadow.dom.lazy_native_coll_seq.call(null,G__44709,G__44710));
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
var G__44733 = arguments.length;
switch (G__44733) {
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
var G__44738 = arguments.length;
switch (G__44738) {
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
var G__44743 = arguments.length;
switch (G__44743) {
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
var G__44751 = arguments.length;
switch (G__44751) {
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
var G__44762 = arguments.length;
switch (G__44762) {
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
var G__44771 = arguments.length;
switch (G__44771) {
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
}catch (e44777){if((e44777 instanceof Object)){
var e = e44777;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44777;

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
var seq__44786 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44787 = null;
var count__44788 = (0);
var i__44789 = (0);
while(true){
if((i__44789 < count__44788)){
var el = chunk__44787.cljs$core$IIndexed$_nth$arity$2(null,i__44789);
var handler_45595__$1 = ((function (seq__44786,chunk__44787,count__44788,i__44789,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44786,chunk__44787,count__44788,i__44789,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45595__$1);


var G__45598 = seq__44786;
var G__45599 = chunk__44787;
var G__45600 = count__44788;
var G__45601 = (i__44789 + (1));
seq__44786 = G__45598;
chunk__44787 = G__45599;
count__44788 = G__45600;
i__44789 = G__45601;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44786);
if(temp__5735__auto__){
var seq__44786__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44786__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44786__$1);
var G__45603 = cljs.core.chunk_rest(seq__44786__$1);
var G__45604 = c__4556__auto__;
var G__45605 = cljs.core.count(c__4556__auto__);
var G__45606 = (0);
seq__44786 = G__45603;
chunk__44787 = G__45604;
count__44788 = G__45605;
i__44789 = G__45606;
continue;
} else {
var el = cljs.core.first(seq__44786__$1);
var handler_45609__$1 = ((function (seq__44786,chunk__44787,count__44788,i__44789,el,seq__44786__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44786,chunk__44787,count__44788,i__44789,el,seq__44786__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45609__$1);


var G__45611 = cljs.core.next(seq__44786__$1);
var G__45612 = null;
var G__45613 = (0);
var G__45614 = (0);
seq__44786 = G__45611;
chunk__44787 = G__45612;
count__44788 = G__45613;
i__44789 = G__45614;
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
var G__44802 = arguments.length;
switch (G__44802) {
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
var seq__44809 = cljs.core.seq(events);
var chunk__44810 = null;
var count__44811 = (0);
var i__44812 = (0);
while(true){
if((i__44812 < count__44811)){
var vec__44821 = chunk__44810.cljs$core$IIndexed$_nth$arity$2(null,i__44812);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44821,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44821,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45626 = seq__44809;
var G__45627 = chunk__44810;
var G__45628 = count__44811;
var G__45629 = (i__44812 + (1));
seq__44809 = G__45626;
chunk__44810 = G__45627;
count__44811 = G__45628;
i__44812 = G__45629;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44809);
if(temp__5735__auto__){
var seq__44809__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44809__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44809__$1);
var G__45630 = cljs.core.chunk_rest(seq__44809__$1);
var G__45631 = c__4556__auto__;
var G__45632 = cljs.core.count(c__4556__auto__);
var G__45633 = (0);
seq__44809 = G__45630;
chunk__44810 = G__45631;
count__44811 = G__45632;
i__44812 = G__45633;
continue;
} else {
var vec__44826 = cljs.core.first(seq__44809__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44826,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44826,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45635 = cljs.core.next(seq__44809__$1);
var G__45636 = null;
var G__45637 = (0);
var G__45638 = (0);
seq__44809 = G__45635;
chunk__44810 = G__45636;
count__44811 = G__45637;
i__44812 = G__45638;
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
var seq__44833 = cljs.core.seq(styles);
var chunk__44834 = null;
var count__44835 = (0);
var i__44836 = (0);
while(true){
if((i__44836 < count__44835)){
var vec__44845 = chunk__44834.cljs$core$IIndexed$_nth$arity$2(null,i__44836);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44845,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44845,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45641 = seq__44833;
var G__45642 = chunk__44834;
var G__45643 = count__44835;
var G__45644 = (i__44836 + (1));
seq__44833 = G__45641;
chunk__44834 = G__45642;
count__44835 = G__45643;
i__44836 = G__45644;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44833);
if(temp__5735__auto__){
var seq__44833__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44833__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44833__$1);
var G__45646 = cljs.core.chunk_rest(seq__44833__$1);
var G__45647 = c__4556__auto__;
var G__45648 = cljs.core.count(c__4556__auto__);
var G__45649 = (0);
seq__44833 = G__45646;
chunk__44834 = G__45647;
count__44835 = G__45648;
i__44836 = G__45649;
continue;
} else {
var vec__44848 = cljs.core.first(seq__44833__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44848,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44848,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45651 = cljs.core.next(seq__44833__$1);
var G__45652 = null;
var G__45653 = (0);
var G__45654 = (0);
seq__44833 = G__45651;
chunk__44834 = G__45652;
count__44835 = G__45653;
i__44836 = G__45654;
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
var G__44854_45656 = key;
var G__44854_45657__$1 = (((G__44854_45656 instanceof cljs.core.Keyword))?G__44854_45656.fqn:null);
switch (G__44854_45657__$1) {
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
var ks_45664 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_45664,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_45664,"aria-");
}
})())){
el.setAttribute(ks_45664,value);
} else {
(el[ks_45664] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__44873){
var map__44874 = p__44873;
var map__44874__$1 = (((((!((map__44874 == null))))?(((((map__44874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44874):map__44874);
var props = map__44874__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44874__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__44882 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44882,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44882,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44882,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__44887 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__44887,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__44887;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__44889 = arguments.length;
switch (G__44889) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__44892){
var vec__44893 = p__44892;
var seq__44894 = cljs.core.seq(vec__44893);
var first__44895 = cljs.core.first(seq__44894);
var seq__44894__$1 = cljs.core.next(seq__44894);
var nn = first__44895;
var first__44895__$1 = cljs.core.first(seq__44894__$1);
var seq__44894__$2 = cljs.core.next(seq__44894__$1);
var np = first__44895__$1;
var nc = seq__44894__$2;
var node = vec__44893;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44900 = nn;
var G__44901 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44900,G__44901) : create_fn.call(null,G__44900,G__44901));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__44902 = nn;
var G__44903 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__44902,G__44903) : create_fn.call(null,G__44902,G__44903));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__44904 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44904,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44904,(1),null);
var seq__44909_45690 = cljs.core.seq(node_children);
var chunk__44910_45691 = null;
var count__44911_45692 = (0);
var i__44912_45693 = (0);
while(true){
if((i__44912_45693 < count__44911_45692)){
var child_struct_45695 = chunk__44910_45691.cljs$core$IIndexed$_nth$arity$2(null,i__44912_45693);
var children_45696 = shadow.dom.dom_node(child_struct_45695);
if(cljs.core.seq_QMARK_(children_45696)){
var seq__44958_45697 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45696));
var chunk__44960_45698 = null;
var count__44961_45699 = (0);
var i__44962_45700 = (0);
while(true){
if((i__44962_45700 < count__44961_45699)){
var child_45703 = chunk__44960_45698.cljs$core$IIndexed$_nth$arity$2(null,i__44962_45700);
if(cljs.core.truth_(child_45703)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45703);


var G__45707 = seq__44958_45697;
var G__45708 = chunk__44960_45698;
var G__45709 = count__44961_45699;
var G__45710 = (i__44962_45700 + (1));
seq__44958_45697 = G__45707;
chunk__44960_45698 = G__45708;
count__44961_45699 = G__45709;
i__44962_45700 = G__45710;
continue;
} else {
var G__45711 = seq__44958_45697;
var G__45712 = chunk__44960_45698;
var G__45713 = count__44961_45699;
var G__45714 = (i__44962_45700 + (1));
seq__44958_45697 = G__45711;
chunk__44960_45698 = G__45712;
count__44961_45699 = G__45713;
i__44962_45700 = G__45714;
continue;
}
} else {
var temp__5735__auto___45715 = cljs.core.seq(seq__44958_45697);
if(temp__5735__auto___45715){
var seq__44958_45716__$1 = temp__5735__auto___45715;
if(cljs.core.chunked_seq_QMARK_(seq__44958_45716__$1)){
var c__4556__auto___45717 = cljs.core.chunk_first(seq__44958_45716__$1);
var G__45718 = cljs.core.chunk_rest(seq__44958_45716__$1);
var G__45719 = c__4556__auto___45717;
var G__45720 = cljs.core.count(c__4556__auto___45717);
var G__45721 = (0);
seq__44958_45697 = G__45718;
chunk__44960_45698 = G__45719;
count__44961_45699 = G__45720;
i__44962_45700 = G__45721;
continue;
} else {
var child_45723 = cljs.core.first(seq__44958_45716__$1);
if(cljs.core.truth_(child_45723)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45723);


var G__45725 = cljs.core.next(seq__44958_45716__$1);
var G__45726 = null;
var G__45727 = (0);
var G__45728 = (0);
seq__44958_45697 = G__45725;
chunk__44960_45698 = G__45726;
count__44961_45699 = G__45727;
i__44962_45700 = G__45728;
continue;
} else {
var G__45729 = cljs.core.next(seq__44958_45716__$1);
var G__45730 = null;
var G__45731 = (0);
var G__45732 = (0);
seq__44958_45697 = G__45729;
chunk__44960_45698 = G__45730;
count__44961_45699 = G__45731;
i__44962_45700 = G__45732;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45696);
}


var G__45734 = seq__44909_45690;
var G__45735 = chunk__44910_45691;
var G__45736 = count__44911_45692;
var G__45737 = (i__44912_45693 + (1));
seq__44909_45690 = G__45734;
chunk__44910_45691 = G__45735;
count__44911_45692 = G__45736;
i__44912_45693 = G__45737;
continue;
} else {
var temp__5735__auto___45738 = cljs.core.seq(seq__44909_45690);
if(temp__5735__auto___45738){
var seq__44909_45739__$1 = temp__5735__auto___45738;
if(cljs.core.chunked_seq_QMARK_(seq__44909_45739__$1)){
var c__4556__auto___45740 = cljs.core.chunk_first(seq__44909_45739__$1);
var G__45741 = cljs.core.chunk_rest(seq__44909_45739__$1);
var G__45742 = c__4556__auto___45740;
var G__45743 = cljs.core.count(c__4556__auto___45740);
var G__45744 = (0);
seq__44909_45690 = G__45741;
chunk__44910_45691 = G__45742;
count__44911_45692 = G__45743;
i__44912_45693 = G__45744;
continue;
} else {
var child_struct_45746 = cljs.core.first(seq__44909_45739__$1);
var children_45747 = shadow.dom.dom_node(child_struct_45746);
if(cljs.core.seq_QMARK_(children_45747)){
var seq__44969_45748 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45747));
var chunk__44971_45749 = null;
var count__44972_45750 = (0);
var i__44973_45751 = (0);
while(true){
if((i__44973_45751 < count__44972_45750)){
var child_45752 = chunk__44971_45749.cljs$core$IIndexed$_nth$arity$2(null,i__44973_45751);
if(cljs.core.truth_(child_45752)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45752);


var G__45753 = seq__44969_45748;
var G__45754 = chunk__44971_45749;
var G__45755 = count__44972_45750;
var G__45756 = (i__44973_45751 + (1));
seq__44969_45748 = G__45753;
chunk__44971_45749 = G__45754;
count__44972_45750 = G__45755;
i__44973_45751 = G__45756;
continue;
} else {
var G__45757 = seq__44969_45748;
var G__45758 = chunk__44971_45749;
var G__45759 = count__44972_45750;
var G__45760 = (i__44973_45751 + (1));
seq__44969_45748 = G__45757;
chunk__44971_45749 = G__45758;
count__44972_45750 = G__45759;
i__44973_45751 = G__45760;
continue;
}
} else {
var temp__5735__auto___45764__$1 = cljs.core.seq(seq__44969_45748);
if(temp__5735__auto___45764__$1){
var seq__44969_45766__$1 = temp__5735__auto___45764__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44969_45766__$1)){
var c__4556__auto___45767 = cljs.core.chunk_first(seq__44969_45766__$1);
var G__45768 = cljs.core.chunk_rest(seq__44969_45766__$1);
var G__45769 = c__4556__auto___45767;
var G__45770 = cljs.core.count(c__4556__auto___45767);
var G__45771 = (0);
seq__44969_45748 = G__45768;
chunk__44971_45749 = G__45769;
count__44972_45750 = G__45770;
i__44973_45751 = G__45771;
continue;
} else {
var child_45772 = cljs.core.first(seq__44969_45766__$1);
if(cljs.core.truth_(child_45772)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45772);


var G__45773 = cljs.core.next(seq__44969_45766__$1);
var G__45774 = null;
var G__45775 = (0);
var G__45776 = (0);
seq__44969_45748 = G__45773;
chunk__44971_45749 = G__45774;
count__44972_45750 = G__45775;
i__44973_45751 = G__45776;
continue;
} else {
var G__45777 = cljs.core.next(seq__44969_45766__$1);
var G__45778 = null;
var G__45779 = (0);
var G__45780 = (0);
seq__44969_45748 = G__45777;
chunk__44971_45749 = G__45778;
count__44972_45750 = G__45779;
i__44973_45751 = G__45780;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45747);
}


var G__45782 = cljs.core.next(seq__44909_45739__$1);
var G__45783 = null;
var G__45784 = (0);
var G__45785 = (0);
seq__44909_45690 = G__45782;
chunk__44910_45691 = G__45783;
count__44911_45692 = G__45784;
i__44912_45693 = G__45785;
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
var seq__44994 = cljs.core.seq(node);
var chunk__44995 = null;
var count__44996 = (0);
var i__44997 = (0);
while(true){
if((i__44997 < count__44996)){
var n = chunk__44995.cljs$core$IIndexed$_nth$arity$2(null,i__44997);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45794 = seq__44994;
var G__45795 = chunk__44995;
var G__45796 = count__44996;
var G__45797 = (i__44997 + (1));
seq__44994 = G__45794;
chunk__44995 = G__45795;
count__44996 = G__45796;
i__44997 = G__45797;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44994);
if(temp__5735__auto__){
var seq__44994__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44994__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44994__$1);
var G__45798 = cljs.core.chunk_rest(seq__44994__$1);
var G__45799 = c__4556__auto__;
var G__45800 = cljs.core.count(c__4556__auto__);
var G__45801 = (0);
seq__44994 = G__45798;
chunk__44995 = G__45799;
count__44996 = G__45800;
i__44997 = G__45801;
continue;
} else {
var n = cljs.core.first(seq__44994__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45804 = cljs.core.next(seq__44994__$1);
var G__45805 = null;
var G__45806 = (0);
var G__45807 = (0);
seq__44994 = G__45804;
chunk__44995 = G__45805;
count__44996 = G__45806;
i__44997 = G__45807;
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
var G__45022 = arguments.length;
switch (G__45022) {
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
var G__45030 = arguments.length;
switch (G__45030) {
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
var G__45044 = arguments.length;
switch (G__45044) {
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
var len__4736__auto___45819 = arguments.length;
var i__4737__auto___45822 = (0);
while(true){
if((i__4737__auto___45822 < len__4736__auto___45819)){
args__4742__auto__.push((arguments[i__4737__auto___45822]));

var G__45823 = (i__4737__auto___45822 + (1));
i__4737__auto___45822 = G__45823;
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
var seq__45060_45824 = cljs.core.seq(nodes);
var chunk__45061_45825 = null;
var count__45062_45826 = (0);
var i__45063_45827 = (0);
while(true){
if((i__45063_45827 < count__45062_45826)){
var node_45829 = chunk__45061_45825.cljs$core$IIndexed$_nth$arity$2(null,i__45063_45827);
fragment.appendChild(shadow.dom._to_dom(node_45829));


var G__45831 = seq__45060_45824;
var G__45832 = chunk__45061_45825;
var G__45833 = count__45062_45826;
var G__45834 = (i__45063_45827 + (1));
seq__45060_45824 = G__45831;
chunk__45061_45825 = G__45832;
count__45062_45826 = G__45833;
i__45063_45827 = G__45834;
continue;
} else {
var temp__5735__auto___45835 = cljs.core.seq(seq__45060_45824);
if(temp__5735__auto___45835){
var seq__45060_45836__$1 = temp__5735__auto___45835;
if(cljs.core.chunked_seq_QMARK_(seq__45060_45836__$1)){
var c__4556__auto___45837 = cljs.core.chunk_first(seq__45060_45836__$1);
var G__45838 = cljs.core.chunk_rest(seq__45060_45836__$1);
var G__45839 = c__4556__auto___45837;
var G__45840 = cljs.core.count(c__4556__auto___45837);
var G__45841 = (0);
seq__45060_45824 = G__45838;
chunk__45061_45825 = G__45839;
count__45062_45826 = G__45840;
i__45063_45827 = G__45841;
continue;
} else {
var node_45842 = cljs.core.first(seq__45060_45836__$1);
fragment.appendChild(shadow.dom._to_dom(node_45842));


var G__45843 = cljs.core.next(seq__45060_45836__$1);
var G__45844 = null;
var G__45845 = (0);
var G__45846 = (0);
seq__45060_45824 = G__45843;
chunk__45061_45825 = G__45844;
count__45062_45826 = G__45845;
i__45063_45827 = G__45846;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq45052){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45052));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45074_45847 = cljs.core.seq(scripts);
var chunk__45075_45848 = null;
var count__45076_45849 = (0);
var i__45077_45850 = (0);
while(true){
if((i__45077_45850 < count__45076_45849)){
var vec__45087_45851 = chunk__45075_45848.cljs$core$IIndexed$_nth$arity$2(null,i__45077_45850);
var script_tag_45852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45087_45851,(0),null);
var script_body_45853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45087_45851,(1),null);
eval(script_body_45853);


var G__45854 = seq__45074_45847;
var G__45855 = chunk__45075_45848;
var G__45856 = count__45076_45849;
var G__45857 = (i__45077_45850 + (1));
seq__45074_45847 = G__45854;
chunk__45075_45848 = G__45855;
count__45076_45849 = G__45856;
i__45077_45850 = G__45857;
continue;
} else {
var temp__5735__auto___45858 = cljs.core.seq(seq__45074_45847);
if(temp__5735__auto___45858){
var seq__45074_45859__$1 = temp__5735__auto___45858;
if(cljs.core.chunked_seq_QMARK_(seq__45074_45859__$1)){
var c__4556__auto___45864 = cljs.core.chunk_first(seq__45074_45859__$1);
var G__45865 = cljs.core.chunk_rest(seq__45074_45859__$1);
var G__45866 = c__4556__auto___45864;
var G__45867 = cljs.core.count(c__4556__auto___45864);
var G__45868 = (0);
seq__45074_45847 = G__45865;
chunk__45075_45848 = G__45866;
count__45076_45849 = G__45867;
i__45077_45850 = G__45868;
continue;
} else {
var vec__45091_45869 = cljs.core.first(seq__45074_45859__$1);
var script_tag_45870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45091_45869,(0),null);
var script_body_45871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45091_45869,(1),null);
eval(script_body_45871);


var G__45875 = cljs.core.next(seq__45074_45859__$1);
var G__45876 = null;
var G__45877 = (0);
var G__45878 = (0);
seq__45074_45847 = G__45875;
chunk__45075_45848 = G__45876;
count__45076_45849 = G__45877;
i__45077_45850 = G__45878;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45096){
var vec__45097 = p__45096;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45097,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45097,(1),null);
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
var G__45108 = arguments.length;
switch (G__45108) {
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
var seq__45130 = cljs.core.seq(style_keys);
var chunk__45132 = null;
var count__45133 = (0);
var i__45134 = (0);
while(true){
if((i__45134 < count__45133)){
var it = chunk__45132.cljs$core$IIndexed$_nth$arity$2(null,i__45134);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45916 = seq__45130;
var G__45917 = chunk__45132;
var G__45918 = count__45133;
var G__45919 = (i__45134 + (1));
seq__45130 = G__45916;
chunk__45132 = G__45917;
count__45133 = G__45918;
i__45134 = G__45919;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45130);
if(temp__5735__auto__){
var seq__45130__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45130__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45130__$1);
var G__45921 = cljs.core.chunk_rest(seq__45130__$1);
var G__45922 = c__4556__auto__;
var G__45923 = cljs.core.count(c__4556__auto__);
var G__45924 = (0);
seq__45130 = G__45921;
chunk__45132 = G__45922;
count__45133 = G__45923;
i__45134 = G__45924;
continue;
} else {
var it = cljs.core.first(seq__45130__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45926 = cljs.core.next(seq__45130__$1);
var G__45927 = null;
var G__45928 = (0);
var G__45929 = (0);
seq__45130 = G__45926;
chunk__45132 = G__45927;
count__45133 = G__45928;
i__45134 = G__45929;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k45154,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__45167 = k45154;
var G__45167__$1 = (((G__45167 instanceof cljs.core.Keyword))?G__45167.fqn:null);
switch (G__45167__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45154,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__45173){
var vec__45174 = p__45173;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45174,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45174,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45153){
var self__ = this;
var G__45153__$1 = this;
return (new cljs.core.RecordIter((0),G__45153__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45155,other45156){
var self__ = this;
var this45155__$1 = this;
return (((!((other45156 == null)))) && ((this45155__$1.constructor === other45156.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45155__$1.x,other45156.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45155__$1.y,other45156.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45155__$1.__extmap,other45156.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__45153){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__45209 = cljs.core.keyword_identical_QMARK_;
var expr__45210 = k__4388__auto__;
if(cljs.core.truth_((pred__45209.cljs$core$IFn$_invoke$arity$2 ? pred__45209.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45210) : pred__45209.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45210)))){
return (new shadow.dom.Coordinate(G__45153,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45209.cljs$core$IFn$_invoke$arity$2 ? pred__45209.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45210) : pred__45209.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45210)))){
return (new shadow.dom.Coordinate(self__.x,G__45153,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__45153),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__45153){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45153,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45158){
var extmap__4419__auto__ = (function (){var G__45238 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45158,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45158)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45238);
} else {
return G__45238;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45158),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45158),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k45253,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__45268 = k45253;
var G__45268__$1 = (((G__45268 instanceof cljs.core.Keyword))?G__45268.fqn:null);
switch (G__45268__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45253,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__45273){
var vec__45274 = p__45273;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45274,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45274,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45252){
var self__ = this;
var G__45252__$1 = this;
return (new cljs.core.RecordIter((0),G__45252__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45254,other45255){
var self__ = this;
var this45254__$1 = this;
return (((!((other45255 == null)))) && ((this45254__$1.constructor === other45255.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45254__$1.w,other45255.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45254__$1.h,other45255.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45254__$1.__extmap,other45255.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__45252){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__45302 = cljs.core.keyword_identical_QMARK_;
var expr__45303 = k__4388__auto__;
if(cljs.core.truth_((pred__45302.cljs$core$IFn$_invoke$arity$2 ? pred__45302.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__45303) : pred__45302.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__45303)))){
return (new shadow.dom.Size(G__45252,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45302.cljs$core$IFn$_invoke$arity$2 ? pred__45302.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__45303) : pred__45302.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__45303)))){
return (new shadow.dom.Size(self__.w,G__45252,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__45252),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__45252){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45252,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45257){
var extmap__4419__auto__ = (function (){var G__45309 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45257,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45257)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45309);
} else {
return G__45309;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45257),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45257),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__45987 = (i + (1));
var G__45988 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__45987;
ret = G__45988;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45327){
var vec__45329 = p__45327;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45329,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45329,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45336 = arguments.length;
switch (G__45336) {
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
var G__46000 = ps;
var G__46001 = (i + (1));
el__$1 = G__46000;
i = G__46001;
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
var vec__45376 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45376,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45376,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45376,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45382_46003 = cljs.core.seq(props);
var chunk__45383_46004 = null;
var count__45384_46005 = (0);
var i__45385_46006 = (0);
while(true){
if((i__45385_46006 < count__45384_46005)){
var vec__45398_46007 = chunk__45383_46004.cljs$core$IIndexed$_nth$arity$2(null,i__45385_46006);
var k_46008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45398_46007,(0),null);
var v_46009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45398_46007,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_46008);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46008),v_46009);


var G__46010 = seq__45382_46003;
var G__46011 = chunk__45383_46004;
var G__46012 = count__45384_46005;
var G__46013 = (i__45385_46006 + (1));
seq__45382_46003 = G__46010;
chunk__45383_46004 = G__46011;
count__45384_46005 = G__46012;
i__45385_46006 = G__46013;
continue;
} else {
var temp__5735__auto___46014 = cljs.core.seq(seq__45382_46003);
if(temp__5735__auto___46014){
var seq__45382_46015__$1 = temp__5735__auto___46014;
if(cljs.core.chunked_seq_QMARK_(seq__45382_46015__$1)){
var c__4556__auto___46020 = cljs.core.chunk_first(seq__45382_46015__$1);
var G__46021 = cljs.core.chunk_rest(seq__45382_46015__$1);
var G__46022 = c__4556__auto___46020;
var G__46023 = cljs.core.count(c__4556__auto___46020);
var G__46024 = (0);
seq__45382_46003 = G__46021;
chunk__45383_46004 = G__46022;
count__45384_46005 = G__46023;
i__45385_46006 = G__46024;
continue;
} else {
var vec__45404_46026 = cljs.core.first(seq__45382_46015__$1);
var k_46027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45404_46026,(0),null);
var v_46028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45404_46026,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_46027);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46027),v_46028);


var G__46030 = cljs.core.next(seq__45382_46015__$1);
var G__46031 = null;
var G__46032 = (0);
var G__46033 = (0);
seq__45382_46003 = G__46030;
chunk__45383_46004 = G__46031;
count__45384_46005 = G__46032;
i__45385_46006 = G__46033;
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
var vec__45414 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45414,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45414,(1),null);
var seq__45418_46036 = cljs.core.seq(node_children);
var chunk__45420_46037 = null;
var count__45421_46038 = (0);
var i__45422_46039 = (0);
while(true){
if((i__45422_46039 < count__45421_46038)){
var child_struct_46040 = chunk__45420_46037.cljs$core$IIndexed$_nth$arity$2(null,i__45422_46039);
if((!((child_struct_46040 == null)))){
if(typeof child_struct_46040 === 'string'){
var text_46041 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46041),child_struct_46040].join(''));
} else {
var children_46044 = shadow.dom.svg_node(child_struct_46040);
if(cljs.core.seq_QMARK_(children_46044)){
var seq__45447_46045 = cljs.core.seq(children_46044);
var chunk__45449_46046 = null;
var count__45450_46047 = (0);
var i__45451_46048 = (0);
while(true){
if((i__45451_46048 < count__45450_46047)){
var child_46060 = chunk__45449_46046.cljs$core$IIndexed$_nth$arity$2(null,i__45451_46048);
if(cljs.core.truth_(child_46060)){
node.appendChild(child_46060);


var G__46061 = seq__45447_46045;
var G__46062 = chunk__45449_46046;
var G__46063 = count__45450_46047;
var G__46064 = (i__45451_46048 + (1));
seq__45447_46045 = G__46061;
chunk__45449_46046 = G__46062;
count__45450_46047 = G__46063;
i__45451_46048 = G__46064;
continue;
} else {
var G__46065 = seq__45447_46045;
var G__46066 = chunk__45449_46046;
var G__46067 = count__45450_46047;
var G__46068 = (i__45451_46048 + (1));
seq__45447_46045 = G__46065;
chunk__45449_46046 = G__46066;
count__45450_46047 = G__46067;
i__45451_46048 = G__46068;
continue;
}
} else {
var temp__5735__auto___46069 = cljs.core.seq(seq__45447_46045);
if(temp__5735__auto___46069){
var seq__45447_46070__$1 = temp__5735__auto___46069;
if(cljs.core.chunked_seq_QMARK_(seq__45447_46070__$1)){
var c__4556__auto___46071 = cljs.core.chunk_first(seq__45447_46070__$1);
var G__46072 = cljs.core.chunk_rest(seq__45447_46070__$1);
var G__46073 = c__4556__auto___46071;
var G__46074 = cljs.core.count(c__4556__auto___46071);
var G__46075 = (0);
seq__45447_46045 = G__46072;
chunk__45449_46046 = G__46073;
count__45450_46047 = G__46074;
i__45451_46048 = G__46075;
continue;
} else {
var child_46076 = cljs.core.first(seq__45447_46070__$1);
if(cljs.core.truth_(child_46076)){
node.appendChild(child_46076);


var G__46077 = cljs.core.next(seq__45447_46070__$1);
var G__46078 = null;
var G__46079 = (0);
var G__46080 = (0);
seq__45447_46045 = G__46077;
chunk__45449_46046 = G__46078;
count__45450_46047 = G__46079;
i__45451_46048 = G__46080;
continue;
} else {
var G__46081 = cljs.core.next(seq__45447_46070__$1);
var G__46082 = null;
var G__46083 = (0);
var G__46084 = (0);
seq__45447_46045 = G__46081;
chunk__45449_46046 = G__46082;
count__45450_46047 = G__46083;
i__45451_46048 = G__46084;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46044);
}
}


var G__46085 = seq__45418_46036;
var G__46086 = chunk__45420_46037;
var G__46087 = count__45421_46038;
var G__46088 = (i__45422_46039 + (1));
seq__45418_46036 = G__46085;
chunk__45420_46037 = G__46086;
count__45421_46038 = G__46087;
i__45422_46039 = G__46088;
continue;
} else {
var G__46089 = seq__45418_46036;
var G__46090 = chunk__45420_46037;
var G__46091 = count__45421_46038;
var G__46092 = (i__45422_46039 + (1));
seq__45418_46036 = G__46089;
chunk__45420_46037 = G__46090;
count__45421_46038 = G__46091;
i__45422_46039 = G__46092;
continue;
}
} else {
var temp__5735__auto___46093 = cljs.core.seq(seq__45418_46036);
if(temp__5735__auto___46093){
var seq__45418_46094__$1 = temp__5735__auto___46093;
if(cljs.core.chunked_seq_QMARK_(seq__45418_46094__$1)){
var c__4556__auto___46095 = cljs.core.chunk_first(seq__45418_46094__$1);
var G__46096 = cljs.core.chunk_rest(seq__45418_46094__$1);
var G__46097 = c__4556__auto___46095;
var G__46098 = cljs.core.count(c__4556__auto___46095);
var G__46099 = (0);
seq__45418_46036 = G__46096;
chunk__45420_46037 = G__46097;
count__45421_46038 = G__46098;
i__45422_46039 = G__46099;
continue;
} else {
var child_struct_46100 = cljs.core.first(seq__45418_46094__$1);
if((!((child_struct_46100 == null)))){
if(typeof child_struct_46100 === 'string'){
var text_46101 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46101),child_struct_46100].join(''));
} else {
var children_46102 = shadow.dom.svg_node(child_struct_46100);
if(cljs.core.seq_QMARK_(children_46102)){
var seq__45457_46103 = cljs.core.seq(children_46102);
var chunk__45459_46104 = null;
var count__45460_46105 = (0);
var i__45461_46106 = (0);
while(true){
if((i__45461_46106 < count__45460_46105)){
var child_46107 = chunk__45459_46104.cljs$core$IIndexed$_nth$arity$2(null,i__45461_46106);
if(cljs.core.truth_(child_46107)){
node.appendChild(child_46107);


var G__46108 = seq__45457_46103;
var G__46109 = chunk__45459_46104;
var G__46110 = count__45460_46105;
var G__46111 = (i__45461_46106 + (1));
seq__45457_46103 = G__46108;
chunk__45459_46104 = G__46109;
count__45460_46105 = G__46110;
i__45461_46106 = G__46111;
continue;
} else {
var G__46112 = seq__45457_46103;
var G__46113 = chunk__45459_46104;
var G__46114 = count__45460_46105;
var G__46115 = (i__45461_46106 + (1));
seq__45457_46103 = G__46112;
chunk__45459_46104 = G__46113;
count__45460_46105 = G__46114;
i__45461_46106 = G__46115;
continue;
}
} else {
var temp__5735__auto___46116__$1 = cljs.core.seq(seq__45457_46103);
if(temp__5735__auto___46116__$1){
var seq__45457_46117__$1 = temp__5735__auto___46116__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45457_46117__$1)){
var c__4556__auto___46118 = cljs.core.chunk_first(seq__45457_46117__$1);
var G__46119 = cljs.core.chunk_rest(seq__45457_46117__$1);
var G__46120 = c__4556__auto___46118;
var G__46121 = cljs.core.count(c__4556__auto___46118);
var G__46122 = (0);
seq__45457_46103 = G__46119;
chunk__45459_46104 = G__46120;
count__45460_46105 = G__46121;
i__45461_46106 = G__46122;
continue;
} else {
var child_46123 = cljs.core.first(seq__45457_46117__$1);
if(cljs.core.truth_(child_46123)){
node.appendChild(child_46123);


var G__46124 = cljs.core.next(seq__45457_46117__$1);
var G__46125 = null;
var G__46126 = (0);
var G__46127 = (0);
seq__45457_46103 = G__46124;
chunk__45459_46104 = G__46125;
count__45460_46105 = G__46126;
i__45461_46106 = G__46127;
continue;
} else {
var G__46128 = cljs.core.next(seq__45457_46117__$1);
var G__46129 = null;
var G__46130 = (0);
var G__46131 = (0);
seq__45457_46103 = G__46128;
chunk__45459_46104 = G__46129;
count__45460_46105 = G__46130;
i__45461_46106 = G__46131;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46102);
}
}


var G__46136 = cljs.core.next(seq__45418_46094__$1);
var G__46137 = null;
var G__46138 = (0);
var G__46139 = (0);
seq__45418_46036 = G__46136;
chunk__45420_46037 = G__46137;
count__45421_46038 = G__46138;
i__45422_46039 = G__46139;
continue;
} else {
var G__46141 = cljs.core.next(seq__45418_46094__$1);
var G__46142 = null;
var G__46143 = (0);
var G__46144 = (0);
seq__45418_46036 = G__46141;
chunk__45420_46037 = G__46142;
count__45421_46038 = G__46143;
i__45422_46039 = G__46144;
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
var len__4736__auto___46155 = arguments.length;
var i__4737__auto___46156 = (0);
while(true){
if((i__4737__auto___46156 < len__4736__auto___46155)){
args__4742__auto__.push((arguments[i__4737__auto___46156]));

var G__46157 = (i__4737__auto___46156 + (1));
i__4737__auto___46156 = G__46157;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq45479){
var G__45480 = cljs.core.first(seq45479);
var seq45479__$1 = cljs.core.next(seq45479);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45480,seq45479__$1);
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
var G__45492 = arguments.length;
switch (G__45492) {
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
var c__42085__auto___46170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42086__auto__ = (function (){var switch__41952__auto__ = (function (state_45500){
var state_val_45501 = (state_45500[(1)]);
if((state_val_45501 === (1))){
var state_45500__$1 = state_45500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45500__$1,(2),once_or_cleanup);
} else {
if((state_val_45501 === (2))){
var inst_45497 = (state_45500[(2)]);
var inst_45498 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45500__$1 = (function (){var statearr_45504 = state_45500;
(statearr_45504[(7)] = inst_45497);

return statearr_45504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45500__$1,inst_45498);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__41953__auto__ = null;
var shadow$dom$state_machine__41953__auto____0 = (function (){
var statearr_45507 = [null,null,null,null,null,null,null,null];
(statearr_45507[(0)] = shadow$dom$state_machine__41953__auto__);

(statearr_45507[(1)] = (1));

return statearr_45507;
});
var shadow$dom$state_machine__41953__auto____1 = (function (state_45500){
while(true){
var ret_value__41954__auto__ = (function (){try{while(true){
var result__41955__auto__ = switch__41952__auto__(state_45500);
if(cljs.core.keyword_identical_QMARK_(result__41955__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41955__auto__;
}
break;
}
}catch (e45508){var ex__41956__auto__ = e45508;
var statearr_45510_46217 = state_45500;
(statearr_45510_46217[(2)] = ex__41956__auto__);


if(cljs.core.seq((state_45500[(4)]))){
var statearr_45511_46218 = state_45500;
(statearr_45511_46218[(1)] = cljs.core.first((state_45500[(4)])));

} else {
throw ex__41956__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41954__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46219 = state_45500;
state_45500 = G__46219;
continue;
} else {
return ret_value__41954__auto__;
}
break;
}
});
shadow$dom$state_machine__41953__auto__ = function(state_45500){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__41953__auto____0.call(this);
case 1:
return shadow$dom$state_machine__41953__auto____1.call(this,state_45500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__41953__auto____0;
shadow$dom$state_machine__41953__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__41953__auto____1;
return shadow$dom$state_machine__41953__auto__;
})()
})();
var state__42087__auto__ = (function (){var statearr_45514 = f__42086__auto__();
(statearr_45514[(6)] = c__42085__auto___46170);

return statearr_45514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42087__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
