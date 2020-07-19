goog.provide('re_view.hiccup.hiccup');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Parses a hiccup key like :div#id.class1.class2 to return the tag name, id, and classes.
 * If tag-name is ommitted, defaults to 'div'. Class names are padded with spaces.
 */
re_view.hiccup.hiccup.parse_key = (function re_view$hiccup$hiccup$parse_key(x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.re_find(/:([^#.]*)(?:#([^.]+))?(.*)?/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),(1),(function (p1__26243_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__26243_SHARP_)){
return "div";
} else {
return clojure.string.replace(p1__26243_SHARP_,"/",":");
}
})),(3),(function (p1__26244_SHARP_){
if(cljs.core.truth_(p1__26244_SHARP_)){
return clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__26244_SHARP_,(1)),"."," ");
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
return clojure.string.replace(s,/-([a-z])/,(function (p__26256){
var vec__26257 = p__26256;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26257,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26257,(1),null);
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
var G__26264 = k_str;
if(re_view.hiccup.hiccup.camelCase_QMARK_(k_str)){
return re_view.hiccup.hiccup.camelCase(G__26264);
} else {
return G__26264;
}
}
});
/**
 * Return javascript object with camelCase keys. Not recursive.
 */
re_view.hiccup.hiccup.map__GT_js = (function re_view$hiccup$hiccup$map__GT_js(style){
var style_js = ({});
var seq__26269_26341 = cljs.core.seq(style);
var chunk__26270_26342 = null;
var count__26271_26343 = (0);
var i__26272_26344 = (0);
while(true){
if((i__26272_26344 < count__26271_26343)){
var vec__26281_26345 = chunk__26270_26342.cljs$core$IIndexed$_nth$arity$2(null,i__26272_26344);
var k_26346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26281_26345,(0),null);
var v_26347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26281_26345,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_26346))] = v_26347);


var G__26348 = seq__26269_26341;
var G__26349 = chunk__26270_26342;
var G__26350 = count__26271_26343;
var G__26351 = (i__26272_26344 + (1));
seq__26269_26341 = G__26348;
chunk__26270_26342 = G__26349;
count__26271_26343 = G__26350;
i__26272_26344 = G__26351;
continue;
} else {
var temp__5735__auto___26353 = cljs.core.seq(seq__26269_26341);
if(temp__5735__auto___26353){
var seq__26269_26356__$1 = temp__5735__auto___26353;
if(cljs.core.chunked_seq_QMARK_(seq__26269_26356__$1)){
var c__4556__auto___26357 = cljs.core.chunk_first(seq__26269_26356__$1);
var G__26358 = cljs.core.chunk_rest(seq__26269_26356__$1);
var G__26359 = c__4556__auto___26357;
var G__26360 = cljs.core.count(c__4556__auto___26357);
var G__26361 = (0);
seq__26269_26341 = G__26358;
chunk__26270_26342 = G__26359;
count__26271_26343 = G__26360;
i__26272_26344 = G__26361;
continue;
} else {
var vec__26287_26363 = cljs.core.first(seq__26269_26356__$1);
var k_26364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26287_26363,(0),null);
var v_26365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26287_26363,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_26364))] = v_26365);


var G__26366 = cljs.core.next(seq__26269_26356__$1);
var G__26367 = null;
var G__26368 = (0);
var G__26369 = (0);
seq__26269_26341 = G__26366;
chunk__26270_26342 = G__26367;
count__26271_26343 = G__26368;
i__26272_26344 = G__26369;
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__26290 = cljs.core.PersistentVector.EMPTY;
var G__26290__$1 = (cljs.core.truth_(k_classes)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26290,k_classes):G__26290);
var G__26290__$2 = (cljs.core.truth_(class$)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26290__$1,class$):G__26290__$1);
if(cljs.core.truth_(classes)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__26290__$2,classes);
} else {
return G__26290__$2;
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
var map__26301 = (function (){var G__26302 = props;
if(cljs.core.boolean$(re_view.hiccup.hiccup._STAR_wrap_props_STAR_)){
return re_view.hiccup.hiccup._STAR_wrap_props_STAR_.call(null,G__26302,tag);
} else {
return G__26302;
}
})();
var map__26301__$1 = (((((!((map__26301 == null))))?(((((map__26301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26301):map__26301);
var props__$1 = map__26301__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26301__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26301__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26301__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var prop_js = (function (){var G__26305 = ({});
var G__26305__$1 = (cljs.core.truth_(k_id)?(function (){var G__26309 = G__26305;
(G__26309["id"] = k_id);

return G__26309;
})():G__26305);
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
var G__26310 = G__26305__$1;
(G__26310["className"] = re_view.hiccup.hiccup.concat_classes(k_classes,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return class_name;
}
})(),classes));

return G__26310;
} else {
return G__26305__$1;
}
})();
var seq__26311_26370 = cljs.core.seq(props__$1);
var chunk__26312_26371 = null;
var count__26313_26372 = (0);
var i__26314_26373 = (0);
while(true){
if((i__26314_26373 < count__26313_26372)){
var vec__26323_26374 = chunk__26312_26371.cljs$core$IIndexed$_nth$arity$2(null,i__26314_26373);
var k_26375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26323_26374,(0),null);
var v_26376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26323_26374,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_26375,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_26375,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_26375)] = re_view.hiccup.hiccup.map__GT_js(v_26376));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_26375,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_26375,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_26375)] = v_26376);

}
}


var G__26377 = seq__26311_26370;
var G__26378 = chunk__26312_26371;
var G__26379 = count__26313_26372;
var G__26380 = (i__26314_26373 + (1));
seq__26311_26370 = G__26377;
chunk__26312_26371 = G__26378;
count__26313_26372 = G__26379;
i__26314_26373 = G__26380;
continue;
} else {
var temp__5735__auto___26381 = cljs.core.seq(seq__26311_26370);
if(temp__5735__auto___26381){
var seq__26311_26382__$1 = temp__5735__auto___26381;
if(cljs.core.chunked_seq_QMARK_(seq__26311_26382__$1)){
var c__4556__auto___26383 = cljs.core.chunk_first(seq__26311_26382__$1);
var G__26384 = cljs.core.chunk_rest(seq__26311_26382__$1);
var G__26385 = c__4556__auto___26383;
var G__26386 = cljs.core.count(c__4556__auto___26383);
var G__26387 = (0);
seq__26311_26370 = G__26384;
chunk__26312_26371 = G__26385;
count__26313_26372 = G__26386;
i__26314_26373 = G__26387;
continue;
} else {
var vec__26332_26388 = cljs.core.first(seq__26311_26382__$1);
var k_26389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26332_26388,(0),null);
var v_26390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26332_26388,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_26389,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_26389,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_26389)] = re_view.hiccup.hiccup.map__GT_js(v_26390));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_26389,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_26389,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_26389)] = v_26390);

}
}


var G__26392 = cljs.core.next(seq__26311_26382__$1);
var G__26393 = null;
var G__26394 = (0);
var G__26395 = (0);
seq__26311_26370 = G__26392;
chunk__26312_26371 = G__26393;
count__26313_26372 = G__26394;
i__26314_26373 = G__26395;
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
