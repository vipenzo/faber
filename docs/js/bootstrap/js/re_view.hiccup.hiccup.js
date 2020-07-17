goog.provide('re_view.hiccup.hiccup');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * Parses a hiccup key like :div#id.class1.class2 to return the tag name, id, and classes.
 * If tag-name is ommitted, defaults to 'div'. Class names are padded with spaces.
 */
re_view.hiccup.hiccup.parse_key = (function re_view$hiccup$hiccup$parse_key(x){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.re_find(/:([^#.]*)(?:#([^.]+))?(.*)?/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)),(1),(function (p1__27694_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__27694_SHARP_)){
return "div";
} else {
return clojure.string.replace(p1__27694_SHARP_,"/",":");
}
})),(3),(function (p1__27695_SHARP_){
if(cljs.core.truth_(p1__27695_SHARP_)){
return clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__27695_SHARP_,(1)),"."," ");
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
return clojure.string.replace(s,/-([a-z])/,(function (p__27702){
var vec__27703 = p__27702;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27703,(0),null);
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27703,(1),null);
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
var G__27708 = k_str;
if(re_view.hiccup.hiccup.camelCase_QMARK_(k_str)){
return re_view.hiccup.hiccup.camelCase(G__27708);
} else {
return G__27708;
}
}
});
/**
 * Return javascript object with camelCase keys. Not recursive.
 */
re_view.hiccup.hiccup.map__GT_js = (function re_view$hiccup$hiccup$map__GT_js(style){
var style_js = ({});
var seq__27716_27789 = cljs.core.seq(style);
var chunk__27717_27790 = null;
var count__27718_27791 = (0);
var i__27719_27792 = (0);
while(true){
if((i__27719_27792 < count__27718_27791)){
var vec__27734_27795 = chunk__27717_27790.cljs$core$IIndexed$_nth$arity$2(null,i__27719_27792);
var k_27796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27734_27795,(0),null);
var v_27797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27734_27795,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_27796))] = v_27797);


var G__27799 = seq__27716_27789;
var G__27800 = chunk__27717_27790;
var G__27801 = count__27718_27791;
var G__27802 = (i__27719_27792 + (1));
seq__27716_27789 = G__27799;
chunk__27717_27790 = G__27800;
count__27718_27791 = G__27801;
i__27719_27792 = G__27802;
continue;
} else {
var temp__5735__auto___27803 = cljs.core.seq(seq__27716_27789);
if(temp__5735__auto___27803){
var seq__27716_27805__$1 = temp__5735__auto___27803;
if(cljs.core.chunked_seq_QMARK_(seq__27716_27805__$1)){
var c__4556__auto___27806 = cljs.core.chunk_first(seq__27716_27805__$1);
var G__27807 = cljs.core.chunk_rest(seq__27716_27805__$1);
var G__27808 = c__4556__auto___27806;
var G__27809 = cljs.core.count(c__4556__auto___27806);
var G__27810 = (0);
seq__27716_27789 = G__27807;
chunk__27717_27790 = G__27808;
count__27718_27791 = G__27809;
i__27719_27792 = G__27810;
continue;
} else {
var vec__27737_27811 = cljs.core.first(seq__27716_27805__$1);
var k_27812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27737_27811,(0),null);
var v_27813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27737_27811,(1),null);
(style_js[re_view.hiccup.hiccup.camelCase(cljs.core.name(k_27812))] = v_27813);


var G__27816 = cljs.core.next(seq__27716_27805__$1);
var G__27817 = null;
var G__27818 = (0);
var G__27819 = (0);
seq__27716_27789 = G__27816;
chunk__27717_27790 = G__27817;
count__27718_27791 = G__27818;
i__27719_27792 = G__27819;
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
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",(function (){var G__27741 = cljs.core.PersistentVector.EMPTY;
var G__27741__$1 = (cljs.core.truth_(k_classes)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__27741,k_classes):G__27741);
var G__27741__$2 = (cljs.core.truth_(class$)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__27741__$1,class$):G__27741__$1);
if(cljs.core.truth_(classes)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__27741__$2,classes);
} else {
return G__27741__$2;
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
var map__27746 = (function (){var G__27747 = props;
if(cljs.core.boolean$(re_view.hiccup.hiccup._STAR_wrap_props_STAR_)){
return re_view.hiccup.hiccup._STAR_wrap_props_STAR_.call(null,G__27747,tag);
} else {
return G__27747;
}
})();
var map__27746__$1 = (((((!((map__27746 == null))))?(((((map__27746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27746):map__27746);
var props__$1 = map__27746__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27746__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27746__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27746__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var prop_js = (function (){var G__27749 = ({});
var G__27749__$1 = (cljs.core.truth_(k_id)?(function (){var G__27753 = G__27749;
(G__27753["id"] = k_id);

return G__27753;
})():G__27749);
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
var G__27754 = G__27749__$1;
(G__27754["className"] = re_view.hiccup.hiccup.concat_classes(k_classes,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return class_name;
}
})(),classes));

return G__27754;
} else {
return G__27749__$1;
}
})();
var seq__27755_27826 = cljs.core.seq(props__$1);
var chunk__27756_27827 = null;
var count__27757_27828 = (0);
var i__27758_27829 = (0);
while(true){
if((i__27758_27829 < count__27757_27828)){
var vec__27770_27834 = chunk__27756_27827.cljs$core$IIndexed$_nth$arity$2(null,i__27758_27829);
var k_27835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27770_27834,(0),null);
var v_27836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27770_27834,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_27835,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_27835,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_27835)] = re_view.hiccup.hiccup.map__GT_js(v_27836));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_27835,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_27835,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_27835)] = v_27836);

}
}


var G__27845 = seq__27755_27826;
var G__27846 = chunk__27756_27827;
var G__27847 = count__27757_27828;
var G__27848 = (i__27758_27829 + (1));
seq__27755_27826 = G__27845;
chunk__27756_27827 = G__27846;
count__27757_27828 = G__27847;
i__27758_27829 = G__27848;
continue;
} else {
var temp__5735__auto___27852 = cljs.core.seq(seq__27755_27826);
if(temp__5735__auto___27852){
var seq__27755_27853__$1 = temp__5735__auto___27852;
if(cljs.core.chunked_seq_QMARK_(seq__27755_27853__$1)){
var c__4556__auto___27854 = cljs.core.chunk_first(seq__27755_27853__$1);
var G__27855 = cljs.core.chunk_rest(seq__27755_27853__$1);
var G__27856 = c__4556__auto___27854;
var G__27857 = cljs.core.count(c__4556__auto___27854);
var G__27858 = (0);
seq__27755_27826 = G__27855;
chunk__27756_27827 = G__27856;
count__27757_27828 = G__27857;
i__27758_27829 = G__27858;
continue;
} else {
var vec__27773_27859 = cljs.core.first(seq__27755_27853__$1);
var k_27860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27773_27859,(0),null);
var v_27861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27773_27859,(1),null);
if(((cljs.core.keyword_identical_QMARK_(k_27860,new cljs.core.Keyword(null,"style","style",-496642736))) || (cljs.core.keyword_identical_QMARK_(k_27860,new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138))))){
(prop_js[cljs.core.name(k_27860)] = re_view.hiccup.hiccup.map__GT_js(v_27861));
} else {
if(((cljs.core.keyword_identical_QMARK_(k_27860,new cljs.core.Keyword(null,"classes","classes",2037804510))) || (cljs.core.keyword_identical_QMARK_(k_27860,new cljs.core.Keyword(null,"class","class",-2030961996))))){
} else {
(prop_js[re_view.hiccup.hiccup.key__GT_react_attr(k_27860)] = v_27861);

}
}


var G__27866 = cljs.core.next(seq__27755_27853__$1);
var G__27867 = null;
var G__27868 = (0);
var G__27869 = (0);
seq__27755_27826 = G__27866;
chunk__27756_27827 = G__27867;
count__27757_27828 = G__27868;
i__27758_27829 = G__27869;
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
