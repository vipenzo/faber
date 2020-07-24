goog.provide('re_view.hiccup.hiccup');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Parses a hiccup key like :div#id.class1.class2 to return the tag name, id, and classes.
 * If tag-name is ommitted, defaults to 'div'. Class names are padded with spaces.
 */
re_view.hiccup.hiccup.parse_key = (function re_view$hiccup$hiccup$parse_key(x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.re_find(/:([^#.]*)(?:#([^.]+))?(.*)?/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),(1),(function (p1__26245_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__26245_SHARP_)){
return "div";
} else {
return clojure.string.replace(p1__26245_SHARP_,"/",":");
}
})),(3),(function (p1__26246_SHARP_){
if(cljs.core.truth_(p1__26246_SHARP_)){
return clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__26246_SHARP_,(1)),"."," ");
} else {
return null;
}
}));
});
re_view.hiccup.hiccup.parse_key_memoized = cljs.core.memoize(re_view.hiccup.hiccup.parse_key);
/**
 * Recursively apply f to nested vectors, unwrapping seqs. Similar to recursive `mapcat` but returns a vector.
 */
re_view.hiccup.hiccup.reduce_flatten_seqs = (function re_view$hiccup$hiccup$reduce_flatten_seqs(f,init,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function re_view$hiccup$hiccup$reduce_flatten_seqs_$_my_f(c,x){
if(cljs.core.seq_QMARK_(x)){
return (re_view.hiccup.hiccup.reduce_flatten_seqs.cljs$core$IFn$_invoke$arity$3 ? re_view.hiccup.hiccup.reduce_flatten_seqs.cljs$core$IFn$_invoke$arity$3(f,c,x) : re_view.hiccup.hiccup.reduce_flatten_seqs.call(null,f,c,x));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)));
}
}),init,coll);
});
/**
 * Return props and children for a hiccup form. If the second element is not a map, supplies an empty map as props.
 */
re_view.hiccup.hiccup.parse_args = (function re_view$hiccup$hiccup$parse_args(form){
var len = cljs.core.count(form);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(len,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY], null);
} else {
if((function (){var first_child = (form.cljs$core$IFn$_invoke$arity$1 ? form.cljs$core$IFn$_invoke$arity$1((1)) : form.call(null,(1)));
return (((first_child == null)) || ((first_child instanceof cljs.core.PersistentArrayMap)) || ((first_child instanceof cljs.core.PersistentHashMap)));
})()){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(form.cljs$core$IFn$_invoke$arity$1 ? form.cljs$core$IFn$_invoke$arity$1((1)) : form.call(null,(1))),(((len > (2)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(form,(2),len):cljs.core.PersistentVector.EMPTY)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(form,(1),len)], null);

}
}
});
re_view.hiccup.hiccup.camelCase = (function re_view$hiccup$hiccup$camelCase(s){
return clojure.string.replace(s,/-([a-z])/,(function (p__26249){
var vec__26250 = p__26249;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26250,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26250,(1),null);
return clojure.string.upper_case(s__$1);
}));
});
/**
 * CamelCase by default, only exceptions are data- and aria- attributes.
 */
re_view.hiccup.hiccup.camelCase_QMARK_ = (function re_view$hiccup$hiccup$camelCase_QMARK_(attr_name){
return cljs.core.not(cljs.core.re_find(/^(?:data\-|aria\-)/,attr_name));
});
/**
 * CamelCase react keys, except for aria- and data- attributes
 */
re_view.hiccup.hiccup.key__GT_react_attr = (function re_view$hiccup$hiccup$key__GT_react_attr(k){
if(cljs.core.keyword_identical_QMARK_(k,new cljs.core.Keyword(null,"for","for",-1323786319))){
return "htmlFor";
} else {
var k_str = cljs.core.name(k);
var G__26255 = k_str;
if(re_view.hiccup.hiccup.camelCase_QMARK_(k_str)){
return re_view.hiccup.hiccup.camelCase(G__26255);
} else {
return G__26255;
}
}
});
/**
 * Return javascript object with camelCase keys. Not recursive.
 */
re_view.hiccup.hiccup.map__GT_js = (function re_view$hiccup$hiccup$map__GT_js(style){
var style_js = ({});
var seq__26260_26335 = cljs.core.seq(style);
var chunk__26261_26336 = null;
var count__26262_26337 = (0);
var i__26263_26338 = (0);
while(true){
if((i__26263_26338 < count__26262_26337)){
var vec__26271_26339 = chunk__26261_26336.cljs$core$IIndexed$_nth$arity$2(null,i__26263_26338);
var k_26340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26271_26339,(0),null);
var v_26341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26271_26339,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_26340))] = v_26341);


var G__26342 = seq__26260_26335;
var G__26343 = chunk__26261_26336;
var G__26344 = count__26262_26337;
var G__26345 = (i__26263_26338 + (1));
seq__26260_26335 = G__26342;
chunk__26261_26336 = G__26343;
count__26262_26337 = G__26344;
i__26263_26338 = G__26345;
continue;
} else {
var temp__5735__auto___26346 = cljs.core.seq(seq__26260_26335);
if(temp__5735__auto___26346){
var seq__26260_26347__$1 = temp__5735__auto___26346;
if(cljs.core.chunked_seq_QMARK_(seq__26260_26347__$1)){
var c__4556__auto___26348 = cljs.core.chunk_first(seq__26260_26347__$1);
var G__26349 = cljs.core.chunk_rest(seq__26260_26347__$1);
var G__26350 = c__4556__auto___26348;
var G__26351 = cljs.core.count(c__4556__auto___26348);
var G__26352 = (0);
seq__26260_26335 = G__26349;
chunk__26261_26336 = G__26350;
count__26262_26337 = G__26351;
i__26263_26338 = G__26352;
continue;
} else {
var vec__26276_26353 = cljs.core.first(seq__26260_26347__$1);
var k_26354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26276_26353,(0),null);
var v_26355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26276_26353,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_26354))] = v_26355);


var G__26356 = cljs.core.next(seq__26260_26347__$1);
var G__26357 = null;
var G__26358 = (0);
var G__26359 = (0);
seq__26260_26335 = G__26356;
chunk__26261_26336 = G__26357;
count__26262_26337 = G__26358;
i__26263_26338 = G__26359;
continue;
}
} else {
}
}
break;
}

return style_js;
});
/**
 * Build className from keyword classes, :class and :classes.
 */
re_view.hiccup.hiccup.concat_classes = (function re_view$hiccup$hiccup$concat_classes(k_classes,class$,classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__26279 = cljs.core.PersistentVector.EMPTY;
var G__26279__$1 = (cljs.core.truth_(k_classes)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26279,k_classes):G__26279);
var G__26279__$2 = (cljs.core.truth_(class$)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26279__$1,class$):G__26279__$1);
if(cljs.core.truth_(classes)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__26279__$2,classes);
} else {
return G__26279__$2;
}
})());
});
re_view.hiccup.hiccup._STAR_wrap_props_STAR_ = null;
/**
 * Returns a React-conformant javascript object. An alternative to clj->js,
 *   allowing for key renaming without an extra loop through every prop map.
 */
re_view.hiccup.hiccup.props__GT_js = (function re_view$hiccup$hiccup$props__GT_js(tag,k_id,k_classes,props){
if(cljs.core.truth_((function (){var or__4126__auto__ = props;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = k_id;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return k_classes;
}
}
})())){
var map__26280 = (function (){var G__26281 = props;
if(cljs.core.boolean$(re_view.hiccup.hiccup._STAR_wrap_props_STAR_)){
return re_view.hiccup.hiccup._STAR_wrap_props_STAR_.call(null,G__26281,tag);
} else {
return G__26281;
}
})();
var map__26280__$1 = (((((!((map__26280 == null))))?(((((map__26280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26280):map__26280);
var props__$1 = map__26280__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26280__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26280__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26280__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var prop_js = (function (){var G__26291 = ({});
var G__26291__$1 = (cljs.core.truth_(k_id)?(function (){var G__26294 = G__26291;
(G__26294["id"] = k_id);

return G__26294;
})():G__26291);
if(cljs.core.truth_((function (){var or__4126__auto__ = k_classes;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = class$;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = class_name;
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return classes;
}
}
}
})())){
var G__26298 = G__26291__$1;
(G__26298["className"] = re_view.hiccup.hiccup.concat_classes(k_classes,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return class_name;
}
})(),classes));

return G__26298;
} else {
return G__26291__$1;
}
})();
var seq__26299_26376 = cljs.core.seq(props__$1);
var chunk__26300_26377 = null;
var count__26301_26378 = (0);
var i__26302_26379 = (0);
while(true){
if((i__26302_26379 < count__26301_26378)){
var vec__26310_26382 = chunk__26300_26377.cljs$core$IIndexed$_nth$arity$2(null,i__26302_26379);
var k_26383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26310_26382,(0),null);
var v_26384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26310_26382,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_26383,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_26383,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_26383)] = re_view.hiccup.hiccup.map__GT_js(v_26384));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_26383,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_26383,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_26383)] = v_26384);

}
}


var G__26386 = seq__26299_26376;
var G__26387 = chunk__26300_26377;
var G__26388 = count__26301_26378;
var G__26389 = (i__26302_26379 + (1));
seq__26299_26376 = G__26386;
chunk__26300_26377 = G__26387;
count__26301_26378 = G__26388;
i__26302_26379 = G__26389;
continue;
} else {
var temp__5735__auto___26390 = cljs.core.seq(seq__26299_26376);
if(temp__5735__auto___26390){
var seq__26299_26391__$1 = temp__5735__auto___26390;
if(cljs.core.chunked_seq_QMARK_(seq__26299_26391__$1)){
var c__4556__auto___26392 = cljs.core.chunk_first(seq__26299_26391__$1);
var G__26393 = cljs.core.chunk_rest(seq__26299_26391__$1);
var G__26394 = c__4556__auto___26392;
var G__26395 = cljs.core.count(c__4556__auto___26392);
var G__26396 = (0);
seq__26299_26376 = G__26393;
chunk__26300_26377 = G__26394;
count__26301_26378 = G__26395;
i__26302_26379 = G__26396;
continue;
} else {
var vec__26316_26397 = cljs.core.first(seq__26299_26391__$1);
var k_26398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26316_26397,(0),null);
var v_26399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26316_26397,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_26398,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_26398,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_26398)] = re_view.hiccup.hiccup.map__GT_js(v_26399));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_26398,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_26398,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_26398)] = v_26399);

}
}


var G__26402 = cljs.core.next(seq__26299_26391__$1);
var G__26403 = null;
var G__26404 = (0);
var G__26405 = (0);
seq__26299_26376 = G__26402;
chunk__26300_26377 = G__26403;
count__26301_26378 = G__26404;
i__26302_26379 = G__26405;
continue;
}
} else {
}
}
break;
}

return prop_js;
} else {
return null;
}
});
re_view.hiccup.hiccup._STAR_create_element_STAR_ = module$node_modules$react$index.createElement;

//# sourceMappingURL=re_view.hiccup.hiccup.js.map
