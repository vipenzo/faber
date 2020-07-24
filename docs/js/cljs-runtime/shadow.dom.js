goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45967 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_45967(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45969 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_45969(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__44874 = coll;
var G__44875 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__44874,G__44875) : shadow.dom.lazy_native_coll_seq.call(null,G__44874,G__44875));
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
var G__44905 = arguments.length;
switch (G__44905) {
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
var G__44915 = arguments.length;
switch (G__44915) {
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
var G__44921 = arguments.length;
switch (G__44921) {
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
var G__44932 = arguments.length;
switch (G__44932) {
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
var G__44940 = arguments.length;
switch (G__44940) {
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
var G__44961 = arguments.length;
switch (G__44961) {
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
}catch (e44971){if((e44971 instanceof Object)){
var e = e44971;
return console.log("didnt support attachEvent",el,e);
} else {
throw e44971;

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
var seq__44981 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__44982 = null;
var count__44983 = (0);
var i__44984 = (0);
while(true){
if((i__44984 < count__44983)){
var el = chunk__44982.cljs$core$IIndexed$_nth$arity$2(null,i__44984);
var handler_45991__$1 = ((function (seq__44981,chunk__44982,count__44983,i__44984,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44981,chunk__44982,count__44983,i__44984,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45991__$1);


var G__45992 = seq__44981;
var G__45993 = chunk__44982;
var G__45994 = count__44983;
var G__45995 = (i__44984 + (1));
seq__44981 = G__45992;
chunk__44982 = G__45993;
count__44983 = G__45994;
i__44984 = G__45995;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44981);
if(temp__5735__auto__){
var seq__44981__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44981__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__44981__$1);
var G__45996 = cljs.core.chunk_rest(seq__44981__$1);
var G__45997 = c__4556__auto__;
var G__45998 = cljs.core.count(c__4556__auto__);
var G__45999 = (0);
seq__44981 = G__45996;
chunk__44982 = G__45997;
count__44983 = G__45998;
i__44984 = G__45999;
continue;
} else {
var el = cljs.core.first(seq__44981__$1);
var handler_46000__$1 = ((function (seq__44981,chunk__44982,count__44983,i__44984,el,seq__44981__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__44981,chunk__44982,count__44983,i__44984,el,seq__44981__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46000__$1);


var G__46003 = cljs.core.next(seq__44981__$1);
var G__46004 = null;
var G__46005 = (0);
var G__46006 = (0);
seq__44981 = G__46003;
chunk__44982 = G__46004;
count__44983 = G__46005;
i__44984 = G__46006;
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
var G__45009 = arguments.length;
switch (G__45009) {
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
var seq__45017 = cljs.core.seq(events);
var chunk__45018 = null;
var count__45019 = (0);
var i__45020 = (0);
while(true){
if((i__45020 < count__45019)){
var vec__45035 = chunk__45018.cljs$core$IIndexed$_nth$arity$2(null,i__45020);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45035,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45035,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46012 = seq__45017;
var G__46013 = chunk__45018;
var G__46014 = count__45019;
var G__46015 = (i__45020 + (1));
seq__45017 = G__46012;
chunk__45018 = G__46013;
count__45019 = G__46014;
i__45020 = G__46015;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45017);
if(temp__5735__auto__){
var seq__45017__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45017__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45017__$1);
var G__46018 = cljs.core.chunk_rest(seq__45017__$1);
var G__46019 = c__4556__auto__;
var G__46020 = cljs.core.count(c__4556__auto__);
var G__46021 = (0);
seq__45017 = G__46018;
chunk__45018 = G__46019;
count__45019 = G__46020;
i__45020 = G__46021;
continue;
} else {
var vec__45040 = cljs.core.first(seq__45017__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45040,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45040,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46022 = cljs.core.next(seq__45017__$1);
var G__46023 = null;
var G__46024 = (0);
var G__46025 = (0);
seq__45017 = G__46022;
chunk__45018 = G__46023;
count__45019 = G__46024;
i__45020 = G__46025;
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
var seq__45048 = cljs.core.seq(styles);
var chunk__45049 = null;
var count__45050 = (0);
var i__45051 = (0);
while(true){
if((i__45051 < count__45050)){
var vec__45065 = chunk__45049.cljs$core$IIndexed$_nth$arity$2(null,i__45051);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45065,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45065,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46026 = seq__45048;
var G__46027 = chunk__45049;
var G__46028 = count__45050;
var G__46029 = (i__45051 + (1));
seq__45048 = G__46026;
chunk__45049 = G__46027;
count__45050 = G__46028;
i__45051 = G__46029;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45048);
if(temp__5735__auto__){
var seq__45048__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45048__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45048__$1);
var G__46030 = cljs.core.chunk_rest(seq__45048__$1);
var G__46031 = c__4556__auto__;
var G__46032 = cljs.core.count(c__4556__auto__);
var G__46033 = (0);
seq__45048 = G__46030;
chunk__45049 = G__46031;
count__45050 = G__46032;
i__45051 = G__46033;
continue;
} else {
var vec__45072 = cljs.core.first(seq__45048__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45072,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45072,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46034 = cljs.core.next(seq__45048__$1);
var G__46035 = null;
var G__46036 = (0);
var G__46037 = (0);
seq__45048 = G__46034;
chunk__45049 = G__46035;
count__45050 = G__46036;
i__45051 = G__46037;
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
var G__45079_46038 = key;
var G__45079_46039__$1 = (((G__45079_46038 instanceof cljs.core.Keyword))?G__45079_46038.fqn:null);
switch (G__45079_46039__$1) {
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
var ks_46041 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_46041,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_46041,"aria-");
}
})())){
el.setAttribute(ks_46041,value);
} else {
(el[ks_46041] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45098){
var map__45099 = p__45098;
var map__45099__$1 = (((((!((map__45099 == null))))?(((((map__45099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45099):map__45099);
var props = map__45099__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45099__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45108 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45108,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45108,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45108,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45114 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45114,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45114;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45126 = arguments.length;
switch (G__45126) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45143){
var vec__45144 = p__45143;
var seq__45145 = cljs.core.seq(vec__45144);
var first__45146 = cljs.core.first(seq__45145);
var seq__45145__$1 = cljs.core.next(seq__45145);
var nn = first__45146;
var first__45146__$1 = cljs.core.first(seq__45145__$1);
var seq__45145__$2 = cljs.core.next(seq__45145__$1);
var np = first__45146__$1;
var nc = seq__45145__$2;
var node = vec__45144;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45155 = nn;
var G__45156 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45155,G__45156) : create_fn.call(null,G__45155,G__45156));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45159 = nn;
var G__45160 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45159,G__45160) : create_fn.call(null,G__45159,G__45160));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45165 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45165,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45165,(1),null);
var seq__45171_46051 = cljs.core.seq(node_children);
var chunk__45172_46052 = null;
var count__45173_46053 = (0);
var i__45174_46054 = (0);
while(true){
if((i__45174_46054 < count__45173_46053)){
var child_struct_46055 = chunk__45172_46052.cljs$core$IIndexed$_nth$arity$2(null,i__45174_46054);
var children_46056 = shadow.dom.dom_node(child_struct_46055);
if(cljs.core.seq_QMARK_(children_46056)){
var seq__45215_46057 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46056));
var chunk__45217_46058 = null;
var count__45218_46059 = (0);
var i__45219_46060 = (0);
while(true){
if((i__45219_46060 < count__45218_46059)){
var child_46062 = chunk__45217_46058.cljs$core$IIndexed$_nth$arity$2(null,i__45219_46060);
if(cljs.core.truth_(child_46062)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46062);


var G__46063 = seq__45215_46057;
var G__46064 = chunk__45217_46058;
var G__46065 = count__45218_46059;
var G__46066 = (i__45219_46060 + (1));
seq__45215_46057 = G__46063;
chunk__45217_46058 = G__46064;
count__45218_46059 = G__46065;
i__45219_46060 = G__46066;
continue;
} else {
var G__46067 = seq__45215_46057;
var G__46068 = chunk__45217_46058;
var G__46069 = count__45218_46059;
var G__46070 = (i__45219_46060 + (1));
seq__45215_46057 = G__46067;
chunk__45217_46058 = G__46068;
count__45218_46059 = G__46069;
i__45219_46060 = G__46070;
continue;
}
} else {
var temp__5735__auto___46071 = cljs.core.seq(seq__45215_46057);
if(temp__5735__auto___46071){
var seq__45215_46072__$1 = temp__5735__auto___46071;
if(cljs.core.chunked_seq_QMARK_(seq__45215_46072__$1)){
var c__4556__auto___46074 = cljs.core.chunk_first(seq__45215_46072__$1);
var G__46075 = cljs.core.chunk_rest(seq__45215_46072__$1);
var G__46076 = c__4556__auto___46074;
var G__46077 = cljs.core.count(c__4556__auto___46074);
var G__46078 = (0);
seq__45215_46057 = G__46075;
chunk__45217_46058 = G__46076;
count__45218_46059 = G__46077;
i__45219_46060 = G__46078;
continue;
} else {
var child_46080 = cljs.core.first(seq__45215_46072__$1);
if(cljs.core.truth_(child_46080)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46080);


var G__46081 = cljs.core.next(seq__45215_46072__$1);
var G__46082 = null;
var G__46083 = (0);
var G__46084 = (0);
seq__45215_46057 = G__46081;
chunk__45217_46058 = G__46082;
count__45218_46059 = G__46083;
i__45219_46060 = G__46084;
continue;
} else {
var G__46085 = cljs.core.next(seq__45215_46072__$1);
var G__46086 = null;
var G__46087 = (0);
var G__46088 = (0);
seq__45215_46057 = G__46085;
chunk__45217_46058 = G__46086;
count__45218_46059 = G__46087;
i__45219_46060 = G__46088;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46056);
}


var G__46089 = seq__45171_46051;
var G__46090 = chunk__45172_46052;
var G__46091 = count__45173_46053;
var G__46092 = (i__45174_46054 + (1));
seq__45171_46051 = G__46089;
chunk__45172_46052 = G__46090;
count__45173_46053 = G__46091;
i__45174_46054 = G__46092;
continue;
} else {
var temp__5735__auto___46094 = cljs.core.seq(seq__45171_46051);
if(temp__5735__auto___46094){
var seq__45171_46096__$1 = temp__5735__auto___46094;
if(cljs.core.chunked_seq_QMARK_(seq__45171_46096__$1)){
var c__4556__auto___46098 = cljs.core.chunk_first(seq__45171_46096__$1);
var G__46099 = cljs.core.chunk_rest(seq__45171_46096__$1);
var G__46100 = c__4556__auto___46098;
var G__46101 = cljs.core.count(c__4556__auto___46098);
var G__46102 = (0);
seq__45171_46051 = G__46099;
chunk__45172_46052 = G__46100;
count__45173_46053 = G__46101;
i__45174_46054 = G__46102;
continue;
} else {
var child_struct_46104 = cljs.core.first(seq__45171_46096__$1);
var children_46105 = shadow.dom.dom_node(child_struct_46104);
if(cljs.core.seq_QMARK_(children_46105)){
var seq__45255_46107 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46105));
var chunk__45257_46108 = null;
var count__45258_46109 = (0);
var i__45259_46110 = (0);
while(true){
if((i__45259_46110 < count__45258_46109)){
var child_46111 = chunk__45257_46108.cljs$core$IIndexed$_nth$arity$2(null,i__45259_46110);
if(cljs.core.truth_(child_46111)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46111);


var G__46112 = seq__45255_46107;
var G__46113 = chunk__45257_46108;
var G__46114 = count__45258_46109;
var G__46115 = (i__45259_46110 + (1));
seq__45255_46107 = G__46112;
chunk__45257_46108 = G__46113;
count__45258_46109 = G__46114;
i__45259_46110 = G__46115;
continue;
} else {
var G__46117 = seq__45255_46107;
var G__46118 = chunk__45257_46108;
var G__46119 = count__45258_46109;
var G__46120 = (i__45259_46110 + (1));
seq__45255_46107 = G__46117;
chunk__45257_46108 = G__46118;
count__45258_46109 = G__46119;
i__45259_46110 = G__46120;
continue;
}
} else {
var temp__5735__auto___46121__$1 = cljs.core.seq(seq__45255_46107);
if(temp__5735__auto___46121__$1){
var seq__45255_46123__$1 = temp__5735__auto___46121__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45255_46123__$1)){
var c__4556__auto___46124 = cljs.core.chunk_first(seq__45255_46123__$1);
var G__46125 = cljs.core.chunk_rest(seq__45255_46123__$1);
var G__46126 = c__4556__auto___46124;
var G__46127 = cljs.core.count(c__4556__auto___46124);
var G__46128 = (0);
seq__45255_46107 = G__46125;
chunk__45257_46108 = G__46126;
count__45258_46109 = G__46127;
i__45259_46110 = G__46128;
continue;
} else {
var child_46130 = cljs.core.first(seq__45255_46123__$1);
if(cljs.core.truth_(child_46130)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46130);


var G__46132 = cljs.core.next(seq__45255_46123__$1);
var G__46133 = null;
var G__46134 = (0);
var G__46135 = (0);
seq__45255_46107 = G__46132;
chunk__45257_46108 = G__46133;
count__45258_46109 = G__46134;
i__45259_46110 = G__46135;
continue;
} else {
var G__46136 = cljs.core.next(seq__45255_46123__$1);
var G__46137 = null;
var G__46138 = (0);
var G__46139 = (0);
seq__45255_46107 = G__46136;
chunk__45257_46108 = G__46137;
count__45258_46109 = G__46138;
i__45259_46110 = G__46139;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46105);
}


var G__46140 = cljs.core.next(seq__45171_46096__$1);
var G__46141 = null;
var G__46142 = (0);
var G__46143 = (0);
seq__45171_46051 = G__46140;
chunk__45172_46052 = G__46141;
count__45173_46053 = G__46142;
i__45174_46054 = G__46143;
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
var seq__45308 = cljs.core.seq(node);
var chunk__45309 = null;
var count__45310 = (0);
var i__45311 = (0);
while(true){
if((i__45311 < count__45310)){
var n = chunk__45309.cljs$core$IIndexed$_nth$arity$2(null,i__45311);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46152 = seq__45308;
var G__46153 = chunk__45309;
var G__46154 = count__45310;
var G__46155 = (i__45311 + (1));
seq__45308 = G__46152;
chunk__45309 = G__46153;
count__45310 = G__46154;
i__45311 = G__46155;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45308);
if(temp__5735__auto__){
var seq__45308__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45308__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45308__$1);
var G__46157 = cljs.core.chunk_rest(seq__45308__$1);
var G__46158 = c__4556__auto__;
var G__46159 = cljs.core.count(c__4556__auto__);
var G__46160 = (0);
seq__45308 = G__46157;
chunk__45309 = G__46158;
count__45310 = G__46159;
i__45311 = G__46160;
continue;
} else {
var n = cljs.core.first(seq__45308__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46162 = cljs.core.next(seq__45308__$1);
var G__46163 = null;
var G__46164 = (0);
var G__46165 = (0);
seq__45308 = G__46162;
chunk__45309 = G__46163;
count__45310 = G__46164;
i__45311 = G__46165;
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
var G__45342 = arguments.length;
switch (G__45342) {
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
var G__45359 = arguments.length;
switch (G__45359) {
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
var G__45386 = arguments.length;
switch (G__45386) {
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
var len__4736__auto___46182 = arguments.length;
var i__4737__auto___46183 = (0);
while(true){
if((i__4737__auto___46183 < len__4736__auto___46182)){
args__4742__auto__.push((arguments[i__4737__auto___46183]));

var G__46184 = (i__4737__auto___46183 + (1));
i__4737__auto___46183 = G__46184;
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
var seq__45456_46185 = cljs.core.seq(nodes);
var chunk__45457_46186 = null;
var count__45458_46187 = (0);
var i__45459_46188 = (0);
while(true){
if((i__45459_46188 < count__45458_46187)){
var node_46191 = chunk__45457_46186.cljs$core$IIndexed$_nth$arity$2(null,i__45459_46188);
fragment.appendChild(shadow.dom._to_dom(node_46191));


var G__46192 = seq__45456_46185;
var G__46193 = chunk__45457_46186;
var G__46194 = count__45458_46187;
var G__46195 = (i__45459_46188 + (1));
seq__45456_46185 = G__46192;
chunk__45457_46186 = G__46193;
count__45458_46187 = G__46194;
i__45459_46188 = G__46195;
continue;
} else {
var temp__5735__auto___46196 = cljs.core.seq(seq__45456_46185);
if(temp__5735__auto___46196){
var seq__45456_46197__$1 = temp__5735__auto___46196;
if(cljs.core.chunked_seq_QMARK_(seq__45456_46197__$1)){
var c__4556__auto___46198 = cljs.core.chunk_first(seq__45456_46197__$1);
var G__46199 = cljs.core.chunk_rest(seq__45456_46197__$1);
var G__46200 = c__4556__auto___46198;
var G__46201 = cljs.core.count(c__4556__auto___46198);
var G__46202 = (0);
seq__45456_46185 = G__46199;
chunk__45457_46186 = G__46200;
count__45458_46187 = G__46201;
i__45459_46188 = G__46202;
continue;
} else {
var node_46203 = cljs.core.first(seq__45456_46197__$1);
fragment.appendChild(shadow.dom._to_dom(node_46203));


var G__46205 = cljs.core.next(seq__45456_46197__$1);
var G__46206 = null;
var G__46207 = (0);
var G__46208 = (0);
seq__45456_46185 = G__46205;
chunk__45457_46186 = G__46206;
count__45458_46187 = G__46207;
i__45459_46188 = G__46208;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq45431){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45431));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45489_46211 = cljs.core.seq(scripts);
var chunk__45490_46212 = null;
var count__45491_46213 = (0);
var i__45492_46214 = (0);
while(true){
if((i__45492_46214 < count__45491_46213)){
var vec__45511_46215 = chunk__45490_46212.cljs$core$IIndexed$_nth$arity$2(null,i__45492_46214);
var script_tag_46216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45511_46215,(0),null);
var script_body_46217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45511_46215,(1),null);
eval(script_body_46217);


var G__46219 = seq__45489_46211;
var G__46220 = chunk__45490_46212;
var G__46221 = count__45491_46213;
var G__46222 = (i__45492_46214 + (1));
seq__45489_46211 = G__46219;
chunk__45490_46212 = G__46220;
count__45491_46213 = G__46221;
i__45492_46214 = G__46222;
continue;
} else {
var temp__5735__auto___46223 = cljs.core.seq(seq__45489_46211);
if(temp__5735__auto___46223){
var seq__45489_46224__$1 = temp__5735__auto___46223;
if(cljs.core.chunked_seq_QMARK_(seq__45489_46224__$1)){
var c__4556__auto___46225 = cljs.core.chunk_first(seq__45489_46224__$1);
var G__46226 = cljs.core.chunk_rest(seq__45489_46224__$1);
var G__46227 = c__4556__auto___46225;
var G__46228 = cljs.core.count(c__4556__auto___46225);
var G__46229 = (0);
seq__45489_46211 = G__46226;
chunk__45490_46212 = G__46227;
count__45491_46213 = G__46228;
i__45492_46214 = G__46229;
continue;
} else {
var vec__45518_46230 = cljs.core.first(seq__45489_46224__$1);
var script_tag_46231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45518_46230,(0),null);
var script_body_46232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45518_46230,(1),null);
eval(script_body_46232);


var G__46233 = cljs.core.next(seq__45489_46224__$1);
var G__46234 = null;
var G__46235 = (0);
var G__46236 = (0);
seq__45489_46211 = G__46233;
chunk__45490_46212 = G__46234;
count__45491_46213 = G__46235;
i__45492_46214 = G__46236;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45524){
var vec__45525 = p__45524;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45525,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45525,(1),null);
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
var G__45557 = arguments.length;
switch (G__45557) {
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
var seq__45578 = cljs.core.seq(style_keys);
var chunk__45579 = null;
var count__45580 = (0);
var i__45581 = (0);
while(true){
if((i__45581 < count__45580)){
var it = chunk__45579.cljs$core$IIndexed$_nth$arity$2(null,i__45581);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46245 = seq__45578;
var G__46246 = chunk__45579;
var G__46247 = count__45580;
var G__46248 = (i__45581 + (1));
seq__45578 = G__46245;
chunk__45579 = G__46246;
count__45580 = G__46247;
i__45581 = G__46248;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45578);
if(temp__5735__auto__){
var seq__45578__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45578__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__45578__$1);
var G__46250 = cljs.core.chunk_rest(seq__45578__$1);
var G__46251 = c__4556__auto__;
var G__46252 = cljs.core.count(c__4556__auto__);
var G__46253 = (0);
seq__45578 = G__46250;
chunk__45579 = G__46251;
count__45580 = G__46252;
i__45581 = G__46253;
continue;
} else {
var it = cljs.core.first(seq__45578__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46258 = cljs.core.next(seq__45578__$1);
var G__46259 = null;
var G__46260 = (0);
var G__46261 = (0);
seq__45578 = G__46258;
chunk__45579 = G__46259;
count__45580 = G__46260;
i__45581 = G__46261;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k45594,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__45606 = k45594;
var G__45606__$1 = (((G__45606 instanceof cljs.core.Keyword))?G__45606.fqn:null);
switch (G__45606__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45594,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__45615){
var vec__45616 = p__45615;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45616,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45616,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45593){
var self__ = this;
var G__45593__$1 = this;
return (new cljs.core.RecordIter((0),G__45593__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45595,other45596){
var self__ = this;
var this45595__$1 = this;
return (((!((other45596 == null)))) && ((this45595__$1.constructor === other45596.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45595__$1.x,other45596.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45595__$1.y,other45596.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45595__$1.__extmap,other45596.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__45593){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__45635 = cljs.core.keyword_identical_QMARK_;
var expr__45636 = k__4388__auto__;
if(cljs.core.truth_((pred__45635.cljs$core$IFn$_invoke$arity$2 ? pred__45635.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45636) : pred__45635.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45636)))){
return (new shadow.dom.Coordinate(G__45593,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45635.cljs$core$IFn$_invoke$arity$2 ? pred__45635.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45636) : pred__45635.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45636)))){
return (new shadow.dom.Coordinate(self__.x,G__45593,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__45593),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__45593){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45593,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45598){
var extmap__4419__auto__ = (function (){var G__45649 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45598,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45598)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45649);
} else {
return G__45649;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45598),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45598),null,cljs.core.not_empty(extmap__4419__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k45656,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__45665 = k45656;
var G__45665__$1 = (((G__45665 instanceof cljs.core.Keyword))?G__45665.fqn:null);
switch (G__45665__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45656,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__45669){
var vec__45670 = p__45669;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45670,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45670,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45655){
var self__ = this;
var G__45655__$1 = this;
return (new cljs.core.RecordIter((0),G__45655__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45657,other45658){
var self__ = this;
var this45657__$1 = this;
return (((!((other45658 == null)))) && ((this45657__$1.constructor === other45658.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45657__$1.w,other45658.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45657__$1.h,other45658.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45657__$1.__extmap,other45658.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__45655){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__45691 = cljs.core.keyword_identical_QMARK_;
var expr__45692 = k__4388__auto__;
if(cljs.core.truth_((pred__45691.cljs$core$IFn$_invoke$arity$2 ? pred__45691.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__45692) : pred__45691.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__45692)))){
return (new shadow.dom.Size(G__45655,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45691.cljs$core$IFn$_invoke$arity$2 ? pred__45691.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__45692) : pred__45691.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__45692)))){
return (new shadow.dom.Size(self__.w,G__45655,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__45655),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__45655){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45655,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45659){
var extmap__4419__auto__ = (function (){var G__45701 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45659,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45659)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45701);
} else {
return G__45701;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45659),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45659),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var G__46310 = (i + (1));
var G__46311 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46310;
ret = G__46311;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45716){
var vec__45717 = p__45716;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45717,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45717,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45722 = arguments.length;
switch (G__45722) {
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
var G__46322 = ps;
var G__46323 = (i + (1));
el__$1 = G__46322;
i = G__46323;
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
var vec__45752 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45752,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45752,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45752,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45758_46335 = cljs.core.seq(props);
var chunk__45759_46336 = null;
var count__45760_46337 = (0);
var i__45761_46338 = (0);
while(true){
if((i__45761_46338 < count__45760_46337)){
var vec__45774_46339 = chunk__45759_46336.cljs$core$IIndexed$_nth$arity$2(null,i__45761_46338);
var k_46340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45774_46339,(0),null);
var v_46341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45774_46339,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_46340);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46340),v_46341);


var G__46343 = seq__45758_46335;
var G__46344 = chunk__45759_46336;
var G__46345 = count__45760_46337;
var G__46346 = (i__45761_46338 + (1));
seq__45758_46335 = G__46343;
chunk__45759_46336 = G__46344;
count__45760_46337 = G__46345;
i__45761_46338 = G__46346;
continue;
} else {
var temp__5735__auto___46347 = cljs.core.seq(seq__45758_46335);
if(temp__5735__auto___46347){
var seq__45758_46348__$1 = temp__5735__auto___46347;
if(cljs.core.chunked_seq_QMARK_(seq__45758_46348__$1)){
var c__4556__auto___46349 = cljs.core.chunk_first(seq__45758_46348__$1);
var G__46353 = cljs.core.chunk_rest(seq__45758_46348__$1);
var G__46354 = c__4556__auto___46349;
var G__46355 = cljs.core.count(c__4556__auto___46349);
var G__46356 = (0);
seq__45758_46335 = G__46353;
chunk__45759_46336 = G__46354;
count__45760_46337 = G__46355;
i__45761_46338 = G__46356;
continue;
} else {
var vec__45783_46357 = cljs.core.first(seq__45758_46348__$1);
var k_46358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45783_46357,(0),null);
var v_46359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45783_46357,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_46358);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46358),v_46359);


var G__46363 = cljs.core.next(seq__45758_46348__$1);
var G__46364 = null;
var G__46365 = (0);
var G__46366 = (0);
seq__45758_46335 = G__46363;
chunk__45759_46336 = G__46364;
count__45760_46337 = G__46365;
i__45761_46338 = G__46366;
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
var vec__45803 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45803,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45803,(1),null);
var seq__45807_46367 = cljs.core.seq(node_children);
var chunk__45809_46368 = null;
var count__45810_46369 = (0);
var i__45811_46370 = (0);
while(true){
if((i__45811_46370 < count__45810_46369)){
var child_struct_46374 = chunk__45809_46368.cljs$core$IIndexed$_nth$arity$2(null,i__45811_46370);
if((!((child_struct_46374 == null)))){
if(typeof child_struct_46374 === 'string'){
var text_46376 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46376),child_struct_46374].join(''));
} else {
var children_46377 = shadow.dom.svg_node(child_struct_46374);
if(cljs.core.seq_QMARK_(children_46377)){
var seq__45879_46378 = cljs.core.seq(children_46377);
var chunk__45881_46379 = null;
var count__45882_46380 = (0);
var i__45883_46381 = (0);
while(true){
if((i__45883_46381 < count__45882_46380)){
var child_46382 = chunk__45881_46379.cljs$core$IIndexed$_nth$arity$2(null,i__45883_46381);
if(cljs.core.truth_(child_46382)){
node.appendChild(child_46382);


var G__46383 = seq__45879_46378;
var G__46384 = chunk__45881_46379;
var G__46385 = count__45882_46380;
var G__46386 = (i__45883_46381 + (1));
seq__45879_46378 = G__46383;
chunk__45881_46379 = G__46384;
count__45882_46380 = G__46385;
i__45883_46381 = G__46386;
continue;
} else {
var G__46387 = seq__45879_46378;
var G__46388 = chunk__45881_46379;
var G__46389 = count__45882_46380;
var G__46390 = (i__45883_46381 + (1));
seq__45879_46378 = G__46387;
chunk__45881_46379 = G__46388;
count__45882_46380 = G__46389;
i__45883_46381 = G__46390;
continue;
}
} else {
var temp__5735__auto___46391 = cljs.core.seq(seq__45879_46378);
if(temp__5735__auto___46391){
var seq__45879_46392__$1 = temp__5735__auto___46391;
if(cljs.core.chunked_seq_QMARK_(seq__45879_46392__$1)){
var c__4556__auto___46393 = cljs.core.chunk_first(seq__45879_46392__$1);
var G__46394 = cljs.core.chunk_rest(seq__45879_46392__$1);
var G__46395 = c__4556__auto___46393;
var G__46396 = cljs.core.count(c__4556__auto___46393);
var G__46397 = (0);
seq__45879_46378 = G__46394;
chunk__45881_46379 = G__46395;
count__45882_46380 = G__46396;
i__45883_46381 = G__46397;
continue;
} else {
var child_46398 = cljs.core.first(seq__45879_46392__$1);
if(cljs.core.truth_(child_46398)){
node.appendChild(child_46398);


var G__46399 = cljs.core.next(seq__45879_46392__$1);
var G__46400 = null;
var G__46401 = (0);
var G__46402 = (0);
seq__45879_46378 = G__46399;
chunk__45881_46379 = G__46400;
count__45882_46380 = G__46401;
i__45883_46381 = G__46402;
continue;
} else {
var G__46403 = cljs.core.next(seq__45879_46392__$1);
var G__46404 = null;
var G__46405 = (0);
var G__46406 = (0);
seq__45879_46378 = G__46403;
chunk__45881_46379 = G__46404;
count__45882_46380 = G__46405;
i__45883_46381 = G__46406;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46377);
}
}


var G__46410 = seq__45807_46367;
var G__46411 = chunk__45809_46368;
var G__46412 = count__45810_46369;
var G__46413 = (i__45811_46370 + (1));
seq__45807_46367 = G__46410;
chunk__45809_46368 = G__46411;
count__45810_46369 = G__46412;
i__45811_46370 = G__46413;
continue;
} else {
var G__46414 = seq__45807_46367;
var G__46415 = chunk__45809_46368;
var G__46416 = count__45810_46369;
var G__46417 = (i__45811_46370 + (1));
seq__45807_46367 = G__46414;
chunk__45809_46368 = G__46415;
count__45810_46369 = G__46416;
i__45811_46370 = G__46417;
continue;
}
} else {
var temp__5735__auto___46418 = cljs.core.seq(seq__45807_46367);
if(temp__5735__auto___46418){
var seq__45807_46419__$1 = temp__5735__auto___46418;
if(cljs.core.chunked_seq_QMARK_(seq__45807_46419__$1)){
var c__4556__auto___46420 = cljs.core.chunk_first(seq__45807_46419__$1);
var G__46421 = cljs.core.chunk_rest(seq__45807_46419__$1);
var G__46422 = c__4556__auto___46420;
var G__46423 = cljs.core.count(c__4556__auto___46420);
var G__46424 = (0);
seq__45807_46367 = G__46421;
chunk__45809_46368 = G__46422;
count__45810_46369 = G__46423;
i__45811_46370 = G__46424;
continue;
} else {
var child_struct_46425 = cljs.core.first(seq__45807_46419__$1);
if((!((child_struct_46425 == null)))){
if(typeof child_struct_46425 === 'string'){
var text_46426 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46426),child_struct_46425].join(''));
} else {
var children_46427 = shadow.dom.svg_node(child_struct_46425);
if(cljs.core.seq_QMARK_(children_46427)){
var seq__45901_46428 = cljs.core.seq(children_46427);
var chunk__45903_46429 = null;
var count__45904_46430 = (0);
var i__45905_46431 = (0);
while(true){
if((i__45905_46431 < count__45904_46430)){
var child_46432 = chunk__45903_46429.cljs$core$IIndexed$_nth$arity$2(null,i__45905_46431);
if(cljs.core.truth_(child_46432)){
node.appendChild(child_46432);


var G__46433 = seq__45901_46428;
var G__46434 = chunk__45903_46429;
var G__46435 = count__45904_46430;
var G__46436 = (i__45905_46431 + (1));
seq__45901_46428 = G__46433;
chunk__45903_46429 = G__46434;
count__45904_46430 = G__46435;
i__45905_46431 = G__46436;
continue;
} else {
var G__46437 = seq__45901_46428;
var G__46438 = chunk__45903_46429;
var G__46439 = count__45904_46430;
var G__46440 = (i__45905_46431 + (1));
seq__45901_46428 = G__46437;
chunk__45903_46429 = G__46438;
count__45904_46430 = G__46439;
i__45905_46431 = G__46440;
continue;
}
} else {
var temp__5735__auto___46441__$1 = cljs.core.seq(seq__45901_46428);
if(temp__5735__auto___46441__$1){
var seq__45901_46442__$1 = temp__5735__auto___46441__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45901_46442__$1)){
var c__4556__auto___46443 = cljs.core.chunk_first(seq__45901_46442__$1);
var G__46444 = cljs.core.chunk_rest(seq__45901_46442__$1);
var G__46445 = c__4556__auto___46443;
var G__46446 = cljs.core.count(c__4556__auto___46443);
var G__46447 = (0);
seq__45901_46428 = G__46444;
chunk__45903_46429 = G__46445;
count__45904_46430 = G__46446;
i__45905_46431 = G__46447;
continue;
} else {
var child_46449 = cljs.core.first(seq__45901_46442__$1);
if(cljs.core.truth_(child_46449)){
node.appendChild(child_46449);


var G__46453 = cljs.core.next(seq__45901_46442__$1);
var G__46454 = null;
var G__46455 = (0);
var G__46456 = (0);
seq__45901_46428 = G__46453;
chunk__45903_46429 = G__46454;
count__45904_46430 = G__46455;
i__45905_46431 = G__46456;
continue;
} else {
var G__46458 = cljs.core.next(seq__45901_46442__$1);
var G__46459 = null;
var G__46460 = (0);
var G__46461 = (0);
seq__45901_46428 = G__46458;
chunk__45903_46429 = G__46459;
count__45904_46430 = G__46460;
i__45905_46431 = G__46461;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46427);
}
}


var G__46462 = cljs.core.next(seq__45807_46419__$1);
var G__46463 = null;
var G__46464 = (0);
var G__46465 = (0);
seq__45807_46367 = G__46462;
chunk__45809_46368 = G__46463;
count__45810_46369 = G__46464;
i__45811_46370 = G__46465;
continue;
} else {
var G__46466 = cljs.core.next(seq__45807_46419__$1);
var G__46467 = null;
var G__46468 = (0);
var G__46469 = (0);
seq__45807_46367 = G__46466;
chunk__45809_46368 = G__46467;
count__45810_46369 = G__46468;
i__45811_46370 = G__46469;
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
var len__4736__auto___46470 = arguments.length;
var i__4737__auto___46471 = (0);
while(true){
if((i__4737__auto___46471 < len__4736__auto___46470)){
args__4742__auto__.push((arguments[i__4737__auto___46471]));

var G__46472 = (i__4737__auto___46471 + (1));
i__4737__auto___46471 = G__46472;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq45921){
var G__45922 = cljs.core.first(seq45921);
var seq45921__$1 = cljs.core.next(seq45921);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45922,seq45921__$1);
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
var G__45935 = arguments.length;
switch (G__45935) {
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
var c__42268__auto___46482 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42269__auto__ = (function (){var switch__42148__auto__ = (function (state_45946){
var state_val_45947 = (state_45946[(1)]);
if((state_val_45947 === (1))){
var state_45946__$1 = state_45946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45946__$1,(2),once_or_cleanup);
} else {
if((state_val_45947 === (2))){
var inst_45943 = (state_45946[(2)]);
var inst_45944 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45946__$1 = (function (){var statearr_45952 = state_45946;
(statearr_45952[(7)] = inst_45943);

return statearr_45952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45946__$1,inst_45944);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42149__auto__ = null;
var shadow$dom$state_machine__42149__auto____0 = (function (){
var statearr_45954 = [null,null,null,null,null,null,null,null];
(statearr_45954[(0)] = shadow$dom$state_machine__42149__auto__);

(statearr_45954[(1)] = (1));

return statearr_45954;
});
var shadow$dom$state_machine__42149__auto____1 = (function (state_45946){
while(true){
var ret_value__42150__auto__ = (function (){try{while(true){
var result__42151__auto__ = switch__42148__auto__(state_45946);
if(cljs.core.keyword_identical_QMARK_(result__42151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42151__auto__;
}
break;
}
}catch (e45956){var ex__42152__auto__ = e45956;
var statearr_45957_46485 = state_45946;
(statearr_45957_46485[(2)] = ex__42152__auto__);


if(cljs.core.seq((state_45946[(4)]))){
var statearr_45959_46487 = state_45946;
(statearr_45959_46487[(1)] = cljs.core.first((state_45946[(4)])));

} else {
throw ex__42152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46488 = state_45946;
state_45946 = G__46488;
continue;
} else {
return ret_value__42150__auto__;
}
break;
}
});
shadow$dom$state_machine__42149__auto__ = function(state_45946){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42149__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42149__auto____1.call(this,state_45946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42149__auto____0;
shadow$dom$state_machine__42149__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42149__auto____1;
return shadow$dom$state_machine__42149__auto__;
})()
})();
var state__42270__auto__ = (function (){var statearr_45961 = f__42269__auto__();
(statearr_45961[(6)] = c__42268__auto___46482);

return statearr_45961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42270__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
