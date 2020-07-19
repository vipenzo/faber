goog.provide('re_view.hiccup.hiccup');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Parses a hiccup key like :div#id.class1.class2 to return the tag name, id, and classes.
 * If tag-name is ommitted, defaults to 'div'. Class names are padded with spaces.
 */
re_view.hiccup.hiccup.parse_key = (function re_view$hiccup$hiccup$parse_key(x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.re_find(/:([^#.]*)(?:#([^.]+))?(.*)?/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),(1),(function (p1__51997_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__51997_SHARP_)){
return "div";
} else {
return clojure.string.replace(p1__51997_SHARP_,"/",":");
}
})),(3),(function (p1__51998_SHARP_){
if(cljs.core.truth_(p1__51998_SHARP_)){
return clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__51998_SHARP_,(1)),"."," ");
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
return clojure.string.replace(s,/-([a-z])/,(function (p__52011){
var vec__52012 = p__52011;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52012,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52012,(1),null);
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
var G__52017 = k_str;
if(re_view.hiccup.hiccup.camelCase_QMARK_(k_str)){
return re_view.hiccup.hiccup.camelCase(G__52017);
} else {
return G__52017;
}
}
});
/**
 * Return javascript object with camelCase keys. Not recursive.
 */
re_view.hiccup.hiccup.map__GT_js = (function re_view$hiccup$hiccup$map__GT_js(style){
var style_js = ({});
var seq__52022_52097 = cljs.core.seq(style);
var chunk__52023_52098 = null;
var count__52024_52099 = (0);
var i__52025_52100 = (0);
while(true){
if((i__52025_52100 < count__52024_52099)){
var vec__52036_52101 = chunk__52023_52098.cljs$core$IIndexed$_nth$arity$2(null,i__52025_52100);
var k_52102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52036_52101,(0),null);
var v_52103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52036_52101,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_52102))] = v_52103);


var G__52104 = seq__52022_52097;
var G__52105 = chunk__52023_52098;
var G__52106 = count__52024_52099;
var G__52107 = (i__52025_52100 + (1));
seq__52022_52097 = G__52104;
chunk__52023_52098 = G__52105;
count__52024_52099 = G__52106;
i__52025_52100 = G__52107;
continue;
} else {
var temp__5735__auto___52108 = cljs.core.seq(seq__52022_52097);
if(temp__5735__auto___52108){
var seq__52022_52109__$1 = temp__5735__auto___52108;
if(cljs.core.chunked_seq_QMARK_(seq__52022_52109__$1)){
var c__4556__auto___52110 = cljs.core.chunk_first(seq__52022_52109__$1);
var G__52111 = cljs.core.chunk_rest(seq__52022_52109__$1);
var G__52112 = c__4556__auto___52110;
var G__52113 = cljs.core.count(c__4556__auto___52110);
var G__52114 = (0);
seq__52022_52097 = G__52111;
chunk__52023_52098 = G__52112;
count__52024_52099 = G__52113;
i__52025_52100 = G__52114;
continue;
} else {
var vec__52045_52115 = cljs.core.first(seq__52022_52109__$1);
var k_52116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52045_52115,(0),null);
var v_52117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52045_52115,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_52116))] = v_52117);


var G__52118 = cljs.core.next(seq__52022_52109__$1);
var G__52119 = null;
var G__52120 = (0);
var G__52121 = (0);
seq__52022_52097 = G__52118;
chunk__52023_52098 = G__52119;
count__52024_52099 = G__52120;
i__52025_52100 = G__52121;
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__52049 = cljs.core.PersistentVector.EMPTY;
var G__52049__$1 = (cljs.core.truth_(k_classes)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52049,k_classes):G__52049);
var G__52049__$2 = (cljs.core.truth_(class$)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__52049__$1,class$):G__52049__$1);
if(cljs.core.truth_(classes)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__52049__$2,classes);
} else {
return G__52049__$2;
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
var map__52053 = (function (){var G__52055 = props;
if(cljs.core.boolean$(re_view.hiccup.hiccup._STAR_wrap_props_STAR_)){
return re_view.hiccup.hiccup._STAR_wrap_props_STAR_.call(null,G__52055,tag);
} else {
return G__52055;
}
})();
var map__52053__$1 = (((((!((map__52053 == null))))?(((((map__52053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52053):map__52053);
var props__$1 = map__52053__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52053__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52053__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52053__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var prop_js = (function (){var G__52058 = ({});
var G__52058__$1 = (cljs.core.truth_(k_id)?(function (){var G__52061 = G__52058;
(G__52061["id"] = k_id);

return G__52061;
})():G__52058);
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
var G__52065 = G__52058__$1;
(G__52065["className"] = re_view.hiccup.hiccup.concat_classes(k_classes,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return class_name;
}
})(),classes));

return G__52065;
} else {
return G__52058__$1;
}
})();
var seq__52066_52147 = cljs.core.seq(props__$1);
var chunk__52067_52148 = null;
var count__52068_52149 = (0);
var i__52069_52150 = (0);
while(true){
if((i__52069_52150 < count__52068_52149)){
var vec__52079_52151 = chunk__52067_52148.cljs$core$IIndexed$_nth$arity$2(null,i__52069_52150);
var k_52152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52079_52151,(0),null);
var v_52153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52079_52151,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_52152,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_52152,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_52152)] = re_view.hiccup.hiccup.map__GT_js(v_52153));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_52152,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_52152,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_52152)] = v_52153);

}
}


var G__52158 = seq__52066_52147;
var G__52159 = chunk__52067_52148;
var G__52160 = count__52068_52149;
var G__52161 = (i__52069_52150 + (1));
seq__52066_52147 = G__52158;
chunk__52067_52148 = G__52159;
count__52068_52149 = G__52160;
i__52069_52150 = G__52161;
continue;
} else {
var temp__5735__auto___52162 = cljs.core.seq(seq__52066_52147);
if(temp__5735__auto___52162){
var seq__52066_52163__$1 = temp__5735__auto___52162;
if(cljs.core.chunked_seq_QMARK_(seq__52066_52163__$1)){
var c__4556__auto___52164 = cljs.core.chunk_first(seq__52066_52163__$1);
var G__52165 = cljs.core.chunk_rest(seq__52066_52163__$1);
var G__52166 = c__4556__auto___52164;
var G__52167 = cljs.core.count(c__4556__auto___52164);
var G__52168 = (0);
seq__52066_52147 = G__52165;
chunk__52067_52148 = G__52166;
count__52068_52149 = G__52167;
i__52069_52150 = G__52168;
continue;
} else {
var vec__52086_52169 = cljs.core.first(seq__52066_52163__$1);
var k_52170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52086_52169,(0),null);
var v_52171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52086_52169,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_52170,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_52170,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_52170)] = re_view.hiccup.hiccup.map__GT_js(v_52171));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_52170,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_52170,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_52170)] = v_52171);

}
}


var G__52172 = cljs.core.next(seq__52066_52163__$1);
var G__52173 = null;
var G__52174 = (0);
var G__52175 = (0);
seq__52066_52147 = G__52172;
chunk__52067_52148 = G__52173;
count__52068_52149 = G__52174;
i__52069_52150 = G__52175;
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
