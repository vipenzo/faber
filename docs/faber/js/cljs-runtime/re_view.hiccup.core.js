goog.provide('re_view.hiccup.core');
cljs.core.enable_console_print_BANG_();
if((typeof Symbol !== 'undefined')){
(Symbol.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (sym,writer,_){
var sym__$1 = this;
return cljs.core._write(writer,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym__$1.toString()),"\""].join(''));
}));
} else {
}

/**
 * @interface
 */
re_view.hiccup.core.IElement = function(){};

var re_view$hiccup$core$IElement$to_element$dyn_52234 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_view.hiccup.core.to_element[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (re_view.hiccup.core.to_element["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.to-element",this$);
}
}
});
/**
 * Returns a React element representing `this`
 */
re_view.hiccup.core.to_element = (function re_view$hiccup$core$to_element(this$){
if((((!((this$ == null)))) && ((!((this$.re_view$hiccup$core$IElement$to_element$arity$1 == null)))))){
return this$.re_view$hiccup$core$IElement$to_element$arity$1(this$);
} else {
return re_view$hiccup$core$IElement$to_element$dyn_52234(this$);
}
});


/**
 * @interface
 */
re_view.hiccup.core.IEmitHiccup = function(){};

var re_view$hiccup$core$IEmitHiccup$to_hiccup$dyn_52242 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (re_view.hiccup.core.to_hiccup[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (re_view.hiccup.core.to_hiccup["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEmitHiccup.to-hiccup",this$);
}
}
});
/**
 * Returns a hiccup form representing `this`
 */
re_view.hiccup.core.to_hiccup = (function re_view$hiccup$core$to_hiccup(this$){
if((((!((this$ == null)))) && ((!((this$.re_view$hiccup$core$IEmitHiccup$to_hiccup$arity$1 == null)))))){
return this$.re_view$hiccup$core$IEmitHiccup$to_hiccup$arity$1(this$);
} else {
return re_view$hiccup$core$IEmitHiccup$to_hiccup$dyn_52242(this$);
}
});

re_view.hiccup.core._to_element = (function re_view$hiccup$core$_to_element(form){
if(cljs.core.vector_QMARK_(form)){
try{var vec__52137 = re_view.hiccup.hiccup.parse_key_memoized((form.cljs$core$IFn$_invoke$arity$1 ? form.cljs$core$IFn$_invoke$arity$1((0)) : form.call(null,(0))));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52137,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52137,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52137,(2),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52137,(3),null);
var vec__52140 = re_view.hiccup.hiccup.parse_args(form);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52140,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52140,(1),null);
var args = re_view.hiccup.hiccup.reduce_flatten_seqs(re_view.hiccup.core._to_element,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,re_view.hiccup.hiccup.props__GT_js(tag,id,classes,props)], null),children);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_view.hiccup.hiccup._STAR_create_element_STAR_,args);
}catch (e52135){if((e52135 instanceof Error)){
var e = e52135;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error in render-hiccup-node:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));

return console.error(e);
} else {
throw e52135;

}
}} else {
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.re_view$hiccup$core$IElement$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(re_view.hiccup.core.IElement,form):false)):cljs.core.native_satisfies_QMARK_(re_view.hiccup.core.IElement,form))){
return re_view.hiccup.core.to_element(form);
} else {
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.re_view$hiccup$core$IEmitHiccup$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(re_view.hiccup.core.IEmitHiccup,form):false)):cljs.core.native_satisfies_QMARK_(re_view.hiccup.core.IEmitHiccup,form))){
var G__52146 = re_view.hiccup.core.to_hiccup(form);
return (re_view.hiccup.core._to_element.cljs$core$IFn$_invoke$arity$1 ? re_view.hiccup.core._to_element.cljs$core$IFn$_invoke$arity$1(G__52146) : re_view.hiccup.core._to_element.call(null,G__52146));
} else {
if(cljs.core.list_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out,el){
var G__52186 = out;
G__52186.push((re_view.hiccup.core._to_element.cljs$core$IFn$_invoke$arity$1 ? re_view.hiccup.core._to_element.cljs$core$IFn$_invoke$arity$1(el) : re_view.hiccup.core._to_element.call(null,el)));

return G__52186;
}),[],form);
} else {
return form;

}
}
}
}
});
/**
 * Converts Hiccup form into a React element. If a non-vector form
 * is supplied, it is returned untouched. Attribute and style keys
 * are converted from `dashed-names` to `camelCase` as spec'd by React.
 * 
 * - optional -
 * :wrap-props (fn) is applied to all props maps during parsing.
 * :create-element (fn) overrides React.createElement.
 */
re_view.hiccup.core.element = (function re_view$hiccup$core$element(var_args){
var G__52190 = arguments.length;
switch (G__52190) {
case 1:
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$1 = (function (form){
return re_view.hiccup.core._to_element(form);
}));

(re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2 = (function (form,p__52194){
var map__52195 = p__52194;
var map__52195__$1 = (((((!((map__52195 == null))))?(((((map__52195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52195):map__52195);
var wrap_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52195__$1,new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308));
var create_element = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52195__$1,new cljs.core.Keyword(null,"create-element","create-element",193243064));
var _STAR_wrap_props_STAR__orig_val__52200 = re_view.hiccup.hiccup._STAR_wrap_props_STAR_;
var _STAR_create_element_STAR__orig_val__52201 = re_view.hiccup.hiccup._STAR_create_element_STAR_;
var _STAR_wrap_props_STAR__temp_val__52202 = wrap_props;
var _STAR_create_element_STAR__temp_val__52203 = (function (){var or__4126__auto__ = re_view.hiccup.hiccup._STAR_create_element_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return create_element;
}
})();
(re_view.hiccup.hiccup._STAR_wrap_props_STAR_ = _STAR_wrap_props_STAR__temp_val__52202);

(re_view.hiccup.hiccup._STAR_create_element_STAR_ = _STAR_create_element_STAR__temp_val__52203);

try{return re_view.hiccup.core._to_element(form);
}finally {(re_view.hiccup.hiccup._STAR_create_element_STAR_ = _STAR_create_element_STAR__orig_val__52201);

(re_view.hiccup.hiccup._STAR_wrap_props_STAR_ = _STAR_wrap_props_STAR__orig_val__52200);
}}));

(re_view.hiccup.core.element.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=re_view.hiccup.core.js.map
