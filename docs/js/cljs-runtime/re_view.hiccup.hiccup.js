goog.provide('re_view.hiccup.hiccup');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Parses a hiccup key like :div#id.class1.class2 to return the tag name, id, and classes.
 * If tag-name is ommitted, defaults to 'div'. Class names are padded with spaces.
 */
re_view.hiccup.hiccup.parse_key = (function re_view$hiccup$hiccup$parse_key(x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.re_find(/:([^#.]*)(?:#([^.]+))?(.*)?/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),(1),(function (p1__41778_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__41778_SHARP_)){
return "div";
} else {
return clojure.string.replace(p1__41778_SHARP_,"/",":");
}
})),(3),(function (p1__41779_SHARP_){
if(cljs.core.truth_(p1__41779_SHARP_)){
return clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__41779_SHARP_,(1)),"."," ");
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
return clojure.string.replace(s,/-([a-z])/,(function (p__41789){
var vec__41793 = p__41789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41793,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41793,(1),null);
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
var G__41796 = k_str;
if(re_view.hiccup.hiccup.camelCase_QMARK_(k_str)){
return re_view.hiccup.hiccup.camelCase(G__41796);
} else {
return G__41796;
}
}
});
/**
 * Return javascript object with camelCase keys. Not recursive.
 */
re_view.hiccup.hiccup.map__GT_js = (function re_view$hiccup$hiccup$map__GT_js(style){
var style_js = ({});
var seq__41801_41906 = cljs.core.seq(style);
var chunk__41802_41907 = null;
var count__41803_41908 = (0);
var i__41804_41909 = (0);
while(true){
if((i__41804_41909 < count__41803_41908)){
var vec__41811_41910 = chunk__41802_41907.cljs$core$IIndexed$_nth$arity$2(null,i__41804_41909);
var k_41911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41811_41910,(0),null);
var v_41912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41811_41910,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_41911))] = v_41912);


var G__41913 = seq__41801_41906;
var G__41914 = chunk__41802_41907;
var G__41915 = count__41803_41908;
var G__41916 = (i__41804_41909 + (1));
seq__41801_41906 = G__41913;
chunk__41802_41907 = G__41914;
count__41803_41908 = G__41915;
i__41804_41909 = G__41916;
continue;
} else {
var temp__5735__auto___41917 = cljs.core.seq(seq__41801_41906);
if(temp__5735__auto___41917){
var seq__41801_41918__$1 = temp__5735__auto___41917;
if(cljs.core.chunked_seq_QMARK_(seq__41801_41918__$1)){
var c__4556__auto___41919 = cljs.core.chunk_first(seq__41801_41918__$1);
var G__41920 = cljs.core.chunk_rest(seq__41801_41918__$1);
var G__41921 = c__4556__auto___41919;
var G__41922 = cljs.core.count(c__4556__auto___41919);
var G__41923 = (0);
seq__41801_41906 = G__41920;
chunk__41802_41907 = G__41921;
count__41803_41908 = G__41922;
i__41804_41909 = G__41923;
continue;
} else {
var vec__41816_41924 = cljs.core.first(seq__41801_41918__$1);
var k_41925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41816_41924,(0),null);
var v_41926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41816_41924,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_41925))] = v_41926);


var G__41927 = cljs.core.next(seq__41801_41918__$1);
var G__41928 = null;
var G__41929 = (0);
var G__41930 = (0);
seq__41801_41906 = G__41927;
chunk__41802_41907 = G__41928;
count__41803_41908 = G__41929;
i__41804_41909 = G__41930;
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__41819 = cljs.core.PersistentVector.EMPTY;
var G__41819__$1 = (cljs.core.truth_(k_classes)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41819,k_classes):G__41819);
var G__41819__$2 = (cljs.core.truth_(class$)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__41819__$1,class$):G__41819__$1);
if(cljs.core.truth_(classes)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__41819__$2,classes);
} else {
return G__41819__$2;
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
var map__41828 = (function (){var G__41829 = props;
if(cljs.core.boolean$(re_view.hiccup.hiccup._STAR_wrap_props_STAR_)){
return re_view.hiccup.hiccup._STAR_wrap_props_STAR_.call(null,G__41829,tag);
} else {
return G__41829;
}
})();
var map__41828__$1 = (((((!((map__41828 == null))))?(((((map__41828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41828):map__41828);
var props__$1 = map__41828__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41828__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41828__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41828__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var prop_js = (function (){var G__41843 = ({});
var G__41843__$1 = (cljs.core.truth_(k_id)?(function (){var G__41851 = G__41843;
(G__41851["id"] = k_id);

return G__41851;
})():G__41843);
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
var G__41858 = G__41843__$1;
(G__41858["className"] = re_view.hiccup.hiccup.concat_classes(k_classes,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return class_name;
}
})(),classes));

return G__41858;
} else {
return G__41843__$1;
}
})();
var seq__41863_41931 = cljs.core.seq(props__$1);
var chunk__41864_41932 = null;
var count__41865_41933 = (0);
var i__41866_41934 = (0);
while(true){
if((i__41866_41934 < count__41865_41933)){
var vec__41884_41935 = chunk__41864_41932.cljs$core$IIndexed$_nth$arity$2(null,i__41866_41934);
var k_41936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41884_41935,(0),null);
var v_41937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41884_41935,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_41936,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_41936,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_41936)] = re_view.hiccup.hiccup.map__GT_js(v_41937));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_41936,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_41936,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_41936)] = v_41937);

}
}


var G__41941 = seq__41863_41931;
var G__41942 = chunk__41864_41932;
var G__41943 = count__41865_41933;
var G__41944 = (i__41866_41934 + (1));
seq__41863_41931 = G__41941;
chunk__41864_41932 = G__41942;
count__41865_41933 = G__41943;
i__41866_41934 = G__41944;
continue;
} else {
var temp__5735__auto___41947 = cljs.core.seq(seq__41863_41931);
if(temp__5735__auto___41947){
var seq__41863_41949__$1 = temp__5735__auto___41947;
if(cljs.core.chunked_seq_QMARK_(seq__41863_41949__$1)){
var c__4556__auto___41950 = cljs.core.chunk_first(seq__41863_41949__$1);
var G__41951 = cljs.core.chunk_rest(seq__41863_41949__$1);
var G__41952 = c__4556__auto___41950;
var G__41953 = cljs.core.count(c__4556__auto___41950);
var G__41954 = (0);
seq__41863_41931 = G__41951;
chunk__41864_41932 = G__41952;
count__41865_41933 = G__41953;
i__41866_41934 = G__41954;
continue;
} else {
var vec__41889_41955 = cljs.core.first(seq__41863_41949__$1);
var k_41956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41889_41955,(0),null);
var v_41957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41889_41955,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_41956,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_41956,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_41956)] = re_view.hiccup.hiccup.map__GT_js(v_41957));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_41956,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_41956,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_41956)] = v_41957);

}
}


var G__41960 = cljs.core.next(seq__41863_41949__$1);
var G__41961 = null;
var G__41962 = (0);
var G__41963 = (0);
seq__41863_41931 = G__41960;
chunk__41864_41932 = G__41961;
count__41865_41933 = G__41962;
i__41866_41934 = G__41963;
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
