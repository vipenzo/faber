goog.provide('re_view.hiccup.hiccup');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Parses a hiccup key like :div#id.class1.class2 to return the tag name, id, and classes.
 * If tag-name is ommitted, defaults to 'div'. Class names are padded with spaces.
 */
re_view.hiccup.hiccup.parse_key = (function re_view$hiccup$hiccup$parse_key(x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.re_find(/:([^#.]*)(?:#([^.]+))?(.*)?/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),(1),(function (p1__51850_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__51850_SHARP_)){
return "div";
} else {
return clojure.string.replace(p1__51850_SHARP_,"/",":");
}
})),(3),(function (p1__51851_SHARP_){
if(cljs.core.truth_(p1__51851_SHARP_)){
return clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__51851_SHARP_,(1)),"."," ");
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
return clojure.string.replace(s,/-([a-z])/,(function (p__51858){
var vec__51859 = p__51858;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51859,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51859,(1),null);
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
var G__51871 = k_str;
if(re_view.hiccup.hiccup.camelCase_QMARK_(k_str)){
return re_view.hiccup.hiccup.camelCase(G__51871);
} else {
return G__51871;
}
}
});
/**
 * Return javascript object with camelCase keys. Not recursive.
 */
re_view.hiccup.hiccup.map__GT_js = (function re_view$hiccup$hiccup$map__GT_js(style){
var style_js = ({});
var seq__51890_51993 = cljs.core.seq(style);
var chunk__51891_51994 = null;
var count__51892_51995 = (0);
var i__51893_51996 = (0);
while(true){
if((i__51893_51996 < count__51892_51995)){
var vec__51921_52000 = chunk__51891_51994.cljs$core$IIndexed$_nth$arity$2(null,i__51893_51996);
var k_52001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51921_52000,(0),null);
var v_52002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51921_52000,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_52001))] = v_52002);


var G__52007 = seq__51890_51993;
var G__52008 = chunk__51891_51994;
var G__52009 = count__51892_51995;
var G__52010 = (i__51893_51996 + (1));
seq__51890_51993 = G__52007;
chunk__51891_51994 = G__52008;
count__51892_51995 = G__52009;
i__51893_51996 = G__52010;
continue;
} else {
var temp__5735__auto___52014 = cljs.core.seq(seq__51890_51993);
if(temp__5735__auto___52014){
var seq__51890_52015__$1 = temp__5735__auto___52014;
if(cljs.core.chunked_seq_QMARK_(seq__51890_52015__$1)){
var c__4556__auto___52016 = cljs.core.chunk_first(seq__51890_52015__$1);
var G__52017 = cljs.core.chunk_rest(seq__51890_52015__$1);
var G__52018 = c__4556__auto___52016;
var G__52019 = cljs.core.count(c__4556__auto___52016);
var G__52020 = (0);
seq__51890_51993 = G__52017;
chunk__51891_51994 = G__52018;
count__51892_51995 = G__52019;
i__51893_51996 = G__52020;
continue;
} else {
var vec__51927_52021 = cljs.core.first(seq__51890_52015__$1);
var k_52022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51927_52021,(0),null);
var v_52023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51927_52021,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_52022))] = v_52023);


var G__52024 = cljs.core.next(seq__51890_52015__$1);
var G__52025 = null;
var G__52026 = (0);
var G__52027 = (0);
seq__51890_51993 = G__52024;
chunk__51891_51994 = G__52025;
count__51892_51995 = G__52026;
i__51893_51996 = G__52027;
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__51936 = cljs.core.PersistentVector.EMPTY;
var G__51936__$1 = (cljs.core.truth_(k_classes)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51936,k_classes):G__51936);
var G__51936__$2 = (cljs.core.truth_(class$)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51936__$1,class$):G__51936__$1);
if(cljs.core.truth_(classes)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__51936__$2,classes);
} else {
return G__51936__$2;
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
var map__51937 = (function (){var G__51938 = props;
if(cljs.core.boolean$(re_view.hiccup.hiccup._STAR_wrap_props_STAR_)){
return re_view.hiccup.hiccup._STAR_wrap_props_STAR_.call(null,G__51938,tag);
} else {
return G__51938;
}
})();
var map__51937__$1 = (((((!((map__51937 == null))))?(((((map__51937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51937):map__51937);
var props__$1 = map__51937__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51937__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51937__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51937__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var prop_js = (function (){var G__51940 = ({});
var G__51940__$1 = (cljs.core.truth_(k_id)?(function (){var G__51947 = G__51940;
(G__51947["id"] = k_id);

return G__51947;
})():G__51940);
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
var G__51951 = G__51940__$1;
(G__51951["className"] = re_view.hiccup.hiccup.concat_classes(k_classes,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return class_name;
}
})(),classes));

return G__51951;
} else {
return G__51940__$1;
}
})();
var seq__51952_52044 = cljs.core.seq(props__$1);
var chunk__51953_52045 = null;
var count__51954_52046 = (0);
var i__51955_52047 = (0);
while(true){
if((i__51955_52047 < count__51954_52046)){
var vec__51978_52048 = chunk__51953_52045.cljs$core$IIndexed$_nth$arity$2(null,i__51955_52047);
var k_52049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51978_52048,(0),null);
var v_52050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51978_52048,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_52049,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_52049,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_52049)] = re_view.hiccup.hiccup.map__GT_js(v_52050));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_52049,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_52049,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_52049)] = v_52050);

}
}


var G__52051 = seq__51952_52044;
var G__52052 = chunk__51953_52045;
var G__52053 = count__51954_52046;
var G__52054 = (i__51955_52047 + (1));
seq__51952_52044 = G__52051;
chunk__51953_52045 = G__52052;
count__51954_52046 = G__52053;
i__51955_52047 = G__52054;
continue;
} else {
var temp__5735__auto___52055 = cljs.core.seq(seq__51952_52044);
if(temp__5735__auto___52055){
var seq__51952_52056__$1 = temp__5735__auto___52055;
if(cljs.core.chunked_seq_QMARK_(seq__51952_52056__$1)){
var c__4556__auto___52057 = cljs.core.chunk_first(seq__51952_52056__$1);
var G__52059 = cljs.core.chunk_rest(seq__51952_52056__$1);
var G__52060 = c__4556__auto___52057;
var G__52061 = cljs.core.count(c__4556__auto___52057);
var G__52062 = (0);
seq__51952_52044 = G__52059;
chunk__51953_52045 = G__52060;
count__51954_52046 = G__52061;
i__51955_52047 = G__52062;
continue;
} else {
var vec__51981_52065 = cljs.core.first(seq__51952_52056__$1);
var k_52066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51981_52065,(0),null);
var v_52067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51981_52065,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_52066,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_52066,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_52066)] = re_view.hiccup.hiccup.map__GT_js(v_52067));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_52066,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_52066,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_52066)] = v_52067);

}
}


var G__52076 = cljs.core.next(seq__51952_52056__$1);
var G__52077 = null;
var G__52078 = (0);
var G__52079 = (0);
seq__51952_52044 = G__52076;
chunk__51953_52045 = G__52077;
count__51954_52046 = G__52078;
i__51955_52047 = G__52079;
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
