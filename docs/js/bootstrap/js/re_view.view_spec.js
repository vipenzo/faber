goog.provide('re_view.view_spec');
/**
 * Global registry for view specs
 */
re_view.view_spec.spec_registry = cljs.core.PersistentArrayMap.EMPTY;
/**
 * Define a view spec
 */
re_view.view_spec.defspecs = (function re_view$view_spec$defspecs(specs){
return (re_view.view_spec.spec_registry = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_view.view_spec.spec_registry,cljs.core.reduce_kv((function (m,k,v){
var G__26791 = m;
if((!(cljs.core.map_QMARK_(v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26791,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),v,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),k], null));
} else {
return G__26791;
}
}),specs,specs)], 0)));
});
re_view.view_spec.Hiccup_QMARK_ = (function re_view$view_spec$Hiccup_QMARK_(p1__26793_SHARP_){
return ((cljs.core.vector_QMARK_(p1__26793_SHARP_)) && ((cljs.core.first(p1__26793_SHARP_) instanceof cljs.core.Keyword)));
});
re_view.view_spec.SVG_QMARK_ = (function re_view$view_spec$SVG_QMARK_(p1__26799_SHARP_){
return ((re_view.view_spec.Hiccup_QMARK_(p1__26799_SHARP_)) && (clojure.string.starts_with_QMARK_(cljs.core.name(cljs.core.first(p1__26799_SHARP_)),"svg")));
});
re_view.view_spec.Element_QMARK_ = re_view.util.any_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_view.util.is_react_element_QMARK_,re_view.view_spec.Hiccup_QMARK_,cljs.core.string_QMARK_,cljs.core.nil_QMARK_], 0));
re_view.view_spec.builtins = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Boolean","Boolean",20610060),cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"String","String",584378334),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Number","Number",2146289584),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Function","Function",1904540321),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Map","Map",-197728088),cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Vector","Vector",-767641200),cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Element","Element",-142042455),re_view.view_spec.Element_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Hiccup","Hiccup",-786840006),re_view.view_spec.Hiccup_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"SVG","SVG",1636684280),re_view.view_spec.SVG_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Object","Object",-1579320773),cljs.core.object_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Keyword","Keyword",1804369776),cljs.core.keyword_QMARK_], null)], null);
re_view.view_spec.defspecs(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins));
re_view.view_spec.spec_kinds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__26805){
var vec__26806 = p__26805;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26806,(0),null);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26806,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pred,name);
}),cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins);
/**
 * Resolves a spec. Keywords are looked up in the spec registry recursively until a function or set is found.
 *   If a map's :spec is a namespaced keyword, it is resolved and merged (without overriding existing keys)
 */
re_view.view_spec.resolve_spec = (function re_view$view_spec$resolve_spec(k){
if((k instanceof cljs.core.Keyword)){
var G__26811 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.spec_registry,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw Error(["View spec not registered: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
}
})();
return (re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1 ? re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1(G__26811) : re_view.view_spec.resolve_spec.call(null,G__26811));
} else {
if(cljs.core.set_QMARK_(k)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),k,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),new cljs.core.Keyword(null,"Set","Set",-1553598550)], null);
} else {
if(cljs.core.fn_QMARK_(k)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),k], null);
} else {
if(cljs.core.map_QMARK_(k)){
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"spec","spec",347520401));
if(((cljs.core.fn_QMARK_(spec)) || (cljs.core.set_QMARK_(spec)))){
return k;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k,(re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1 ? re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1(spec) : re_view.view_spec.resolve_spec.call(null,spec))], 0));
}
} else {
throw Error(["Invalid spec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

}
}
}
}
});
re_view.view_spec.spec_kind = (function re_view$view_spec$spec_kind(p__26816){
var map__26817 = p__26816;
var map__26817__$1 = (((((!((map__26817 == null))))?(((((map__26817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26817):map__26817);
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26817__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26817__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.spec_kinds,spec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.set_QMARK_(spec)){
return new cljs.core.Keyword(null,"Set","Set",-1553598550);
} else {
return spec_name;
}
}
});
/**
 * Resolves specs in map
 */
re_view.view_spec.normalize_props_map = (function re_view$view_spec$normalize_props_map(p__26820){
var map__26821 = p__26820;
var map__26821__$1 = (((((!((map__26821 == null))))?(((((map__26821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26821):map__26821);
var props = map__26821__$1;
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26821__$1,new cljs.core.Keyword("props","keys","props/keys",1162814594));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26821__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
var props__$1 = props;
var props__$2 = cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,re_view.view_spec.resolve_spec(v));
}),props__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props__$1,new cljs.core.Keyword("props","keys","props/keys",1162814594),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("props","required","props/required",1633699918)], 0)));
var props__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),re_view.view_spec.resolve_spec(k));
}),props__$2,keys);
var props__$4 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(re_view.view_spec.resolve_spec(k),new cljs.core.Keyword(null,"required","required",1807647006),true));
}),props__$3,required);
return cljs.core.reduce_kv((function (m,k,v){
var map__26824 = v;
var map__26824__$1 = (((((!((map__26824 == null))))?(((((map__26824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26824):map__26824);
var spec = map__26824__$1;
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26824__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var pass_through = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26824__$1,new cljs.core.Keyword(null,"pass-through","pass-through",-1285552122));
var required__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26824__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var G__26827 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,spec);
var G__26827__$1 = ((cljs.core.not(pass_through))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__26827,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.conj,k):G__26827);
var G__26827__$2 = (cljs.core.truth_(required__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__26827__$1,new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.conj,k):G__26827__$1);
if(cljs.core.truth_(default$)){
return cljs.core.assoc_in(G__26827__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("props","defaults","props/defaults",999110366),k], null),default$);
} else {
return G__26827__$2;
}
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props__$4,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.PersistentVector.EMPTY], 0)),props__$4);
});
/**
 * Resolves specs in vector
 */
re_view.view_spec.resolve_spec_vector = (function re_view$view_spec$resolve_spec_vector(specs){
if(cljs.core.truth_(specs)){
var vec__26829 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,new cljs.core.Keyword(null,"&","&",509580121)),specs);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26829,(0),null);
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26829,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.resolve_spec,req),new cljs.core.Keyword(null,"&more","&more",-116680563),(function (){var G__26832 = cljs.core.second(opt);
if((G__26832 == null)){
return null;
} else {
return re_view.view_spec.resolve_spec(G__26832);
}
})()], null);
} else {
return null;
}
});
re_view.view_spec.validate_spec = (function re_view$view_spec$validate_spec(k,p__26833,value){
var map__26834 = p__26833;
var map__26834__$1 = (((((!((map__26834 == null))))?(((((map__26834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26834):map__26834);
var spec_map = map__26834__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26834__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26834__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26834__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
if(cljs.core.truth_((function (){var and__4115__auto__ = spec_map;
if(cljs.core.truth_(and__4115__auto__)){
return (((!(cljs.core.fn_QMARK_(spec)))) && ((!(cljs.core.set_QMARK_(spec)))));
} else {
return and__4115__auto__;
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"invalid-spec?","invalid-spec?",541170561),k,spec_map], 0));
} else {
}

if((value == null)){
if(cljs.core.truth_(required)){
throw Error(["Prop is required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = spec;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not((spec.cljs$core$IFn$_invoke$arity$1 ? spec.cljs$core$IFn$_invoke$arity$1(value) : spec.call(null,value)));
} else {
return and__4115__auto__;
}
})())){
console.log("value",value);

console.log("spec",spec);

throw Error(["Validation failed for prop: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," with spec ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = spec_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return spec;
}
})())," and value ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
} else {
return null;
}
}
});
re_view.view_spec.validate_props = (function re_view$view_spec$validate_props(display_name,p__26839,props){
var map__26840 = p__26839;
var map__26840__$1 = (((((!((map__26840 == null))))?(((((map__26840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26840):map__26840);
var prop_specs = map__26840__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26840__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
var prop_keys_26943 = cljs.core.keys(props);
try{var seq__26843_26944 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(required,cljs.core.filterv(((function (prop_keys_26943,map__26840,map__26840__$1,prop_specs,required){
return (function (p1__26837_SHARP_){
return cljs.core.not((function (){var G__26852 = cljs.core.namespace(p1__26837_SHARP_);
var fexpr__26851 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"props",null], null), null);
return (fexpr__26851.cljs$core$IFn$_invoke$arity$1 ? fexpr__26851.cljs$core$IFn$_invoke$arity$1(G__26852) : fexpr__26851.call(null,G__26852));
})());
});})(prop_keys_26943,map__26840,map__26840__$1,prop_specs,required))
,cljs.core.keys(props))));
var chunk__26844_26945 = null;
var count__26845_26946 = (0);
var i__26846_26947 = (0);
while(true){
if((i__26846_26947 < count__26845_26946)){
var k_26959 = chunk__26844_26945.cljs$core$IIndexed$_nth$arity$2(null,i__26846_26947);
re_view.view_spec.validate_spec(k_26959,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_26959),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_26959));


var G__26961 = seq__26843_26944;
var G__26962 = chunk__26844_26945;
var G__26963 = count__26845_26946;
var G__26964 = (i__26846_26947 + (1));
seq__26843_26944 = G__26961;
chunk__26844_26945 = G__26962;
count__26845_26946 = G__26963;
i__26846_26947 = G__26964;
continue;
} else {
var temp__5735__auto___26968 = cljs.core.seq(seq__26843_26944);
if(temp__5735__auto___26968){
var seq__26843_26969__$1 = temp__5735__auto___26968;
if(cljs.core.chunked_seq_QMARK_(seq__26843_26969__$1)){
var c__4556__auto___26970 = cljs.core.chunk_first(seq__26843_26969__$1);
var G__26972 = cljs.core.chunk_rest(seq__26843_26969__$1);
var G__26973 = c__4556__auto___26970;
var G__26974 = cljs.core.count(c__4556__auto___26970);
var G__26975 = (0);
seq__26843_26944 = G__26972;
chunk__26844_26945 = G__26973;
count__26845_26946 = G__26974;
i__26846_26947 = G__26975;
continue;
} else {
var k_26976 = cljs.core.first(seq__26843_26969__$1);
re_view.view_spec.validate_spec(k_26976,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_26976),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_26976));


var G__26977 = cljs.core.next(seq__26843_26969__$1);
var G__26978 = null;
var G__26979 = (0);
var G__26980 = (0);
seq__26843_26944 = G__26977;
chunk__26844_26945 = G__26978;
count__26845_26946 = G__26979;
i__26846_26947 = G__26980;
continue;
}
} else {
}
}
break;
}
}catch (e26842){if((e26842 instanceof Error)){
var e_26981 = e26842;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error validating props in ",display_name], 0));

throw e_26981;
} else {
throw e26842;

}
}
return props;
});
re_view.view_spec.validate_children = (function re_view$view_spec$validate_children(display_name,p__26853,children){
var map__26854 = p__26853;
var map__26854__$1 = (((((!((map__26854 == null))))?(((((map__26854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26854):map__26854);
var children_spec = map__26854__$1;
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26854__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var _AMPERSAND_more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26854__$1,new cljs.core.Keyword(null,"&more","&more",-116680563));
if(cljs.core.truth_(children_spec)){
try{var children_26984__$1 = re_view.util.flatten_seqs(children);
var remaining_req_26985 = req;
var remaining_children_26986 = children_26984__$1;
var i_26987 = (0);
while(true){
if(cljs.core.empty_QMARK_(remaining_req_26985)){
if(cljs.core.empty_QMARK_(remaining_children_26986)){
} else {
if(cljs.core.truth_(_AMPERSAND_more)){
var seq__26872_26988 = cljs.core.seq(remaining_children_26986);
var chunk__26873_26989 = null;
var count__26874_26990 = (0);
var i__26875_26991 = (0);
while(true){
if((i__26875_26991 < count__26874_26990)){
var child_26992 = chunk__26873_26989.cljs$core$IIndexed$_nth$arity$2(null,i__26875_26991);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_26992);


var G__26993 = seq__26872_26988;
var G__26994 = chunk__26873_26989;
var G__26995 = count__26874_26990;
var G__26996 = (i__26875_26991 + (1));
seq__26872_26988 = G__26993;
chunk__26873_26989 = G__26994;
count__26874_26990 = G__26995;
i__26875_26991 = G__26996;
continue;
} else {
var temp__5735__auto___26997 = cljs.core.seq(seq__26872_26988);
if(temp__5735__auto___26997){
var seq__26872_26998__$1 = temp__5735__auto___26997;
if(cljs.core.chunked_seq_QMARK_(seq__26872_26998__$1)){
var c__4556__auto___26999 = cljs.core.chunk_first(seq__26872_26998__$1);
var G__27000 = cljs.core.chunk_rest(seq__26872_26998__$1);
var G__27001 = c__4556__auto___26999;
var G__27002 = cljs.core.count(c__4556__auto___26999);
var G__27003 = (0);
seq__26872_26988 = G__27000;
chunk__26873_26989 = G__27001;
count__26874_26990 = G__27002;
i__26875_26991 = G__27003;
continue;
} else {
var child_27004 = cljs.core.first(seq__26872_26998__$1);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_27004);


var G__27005 = cljs.core.next(seq__26872_26998__$1);
var G__27006 = null;
var G__27007 = (0);
var G__27008 = (0);
seq__26872_26988 = G__27005;
chunk__26873_26989 = G__27006;
count__26874_26990 = G__27007;
i__26875_26991 = G__27008;
continue;
}
} else {
}
}
break;
}
} else {
throw Error(["Expected fewer children. Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_26984__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),(cljs.core.truth_(_AMPERSAND_more)?" or more":null),"."].join(''));
}
}
} else {
if(cljs.core.empty_QMARK_(remaining_children_26986)){
throw Error(["Expected more children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name),". Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_26984__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),(cljs.core.truth_(_AMPERSAND_more)?" or more":null),"."].join(''));
} else {
re_view.view_spec.validate_spec(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["children-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_26987)].join('')),cljs.core.first(remaining_req_26985),cljs.core.first(remaining_children_26986));

var G__27009 = cljs.core.rest(remaining_req_26985);
var G__27010 = cljs.core.rest(remaining_children_26986);
var G__27011 = (i_26987 + (1));
remaining_req_26985 = G__27009;
remaining_children_26986 = G__27010;
i_26987 = G__27011;
continue;
}
}
break;
}
}catch (e26856){if((e26856 instanceof Error)){
var e_27012 = e26856;
console.error(["Error validating children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)].join(''));

throw Error(e_27012);
} else {
throw e26856;

}
}} else {
}

return children;
});

//# sourceMappingURL=re_view.view_spec.js.map
