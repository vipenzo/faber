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
var G__26824 = m;
if((!(cljs.core.map_QMARK_(v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26824,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),v,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),k], null));
} else {
return G__26824;
}
}),specs,specs)], 0)));
});
re_view.view_spec.Hiccup_QMARK_ = (function re_view$view_spec$Hiccup_QMARK_(p1__26825_SHARP_){
return ((cljs.core.vector_QMARK_(p1__26825_SHARP_)) && ((cljs.core.first(p1__26825_SHARP_) instanceof cljs.core.Keyword)));
});
re_view.view_spec.SVG_QMARK_ = (function re_view$view_spec$SVG_QMARK_(p1__26826_SHARP_){
return ((re_view.view_spec.Hiccup_QMARK_(p1__26826_SHARP_)) && (clojure.string.starts_with_QMARK_(cljs.core.name(cljs.core.first(p1__26826_SHARP_)),"svg")));
});
re_view.view_spec.Element_QMARK_ = re_view.util.any_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_view.util.is_react_element_QMARK_,re_view.view_spec.Hiccup_QMARK_,cljs.core.string_QMARK_,cljs.core.nil_QMARK_], 0));
re_view.view_spec.builtins = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Boolean","Boolean",20610060),cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"String","String",584378334),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Number","Number",2146289584),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Function","Function",1904540321),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Map","Map",-197728088),cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Vector","Vector",-767641200),cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Element","Element",-142042455),re_view.view_spec.Element_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Hiccup","Hiccup",-786840006),re_view.view_spec.Hiccup_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"SVG","SVG",1636684280),re_view.view_spec.SVG_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Object","Object",-1579320773),cljs.core.object_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Keyword","Keyword",1804369776),cljs.core.keyword_QMARK_], null)], null);
re_view.view_spec.defspecs(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins));
re_view.view_spec.spec_kinds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__26833){
var vec__26835 = p__26833;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26835,(0),null);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26835,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pred,name);
}),cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins);
/**
 * Resolves a spec. Keywords are looked up in the spec registry recursively until a function or set is found.
 *   If a map's :spec is a namespaced keyword, it is resolved and merged (without overriding existing keys)
 */
re_view.view_spec.resolve_spec = (function re_view$view_spec$resolve_spec(k){
if((k instanceof cljs.core.Keyword)){
var G__26840 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.spec_registry,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw Error(["View spec not registered: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
}
})();
return (re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1 ? re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1(G__26840) : re_view.view_spec.resolve_spec.call(null,G__26840));
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
re_view.view_spec.spec_kind = (function re_view$view_spec$spec_kind(p__26848){
var map__26849 = p__26848;
var map__26849__$1 = (((((!((map__26849 == null))))?(((((map__26849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26849):map__26849);
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26849__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26849__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
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
re_view.view_spec.normalize_props_map = (function re_view$view_spec$normalize_props_map(p__26854){
var map__26855 = p__26854;
var map__26855__$1 = (((((!((map__26855 == null))))?(((((map__26855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26855):map__26855);
var props = map__26855__$1;
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword("props","keys","props/keys",1162814594));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26855__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
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
var map__26858 = v;
var map__26858__$1 = (((((!((map__26858 == null))))?(((((map__26858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26858):map__26858);
var spec = map__26858__$1;
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26858__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var pass_through = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26858__$1,new cljs.core.Keyword(null,"pass-through","pass-through",-1285552122));
var required__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26858__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var G__26861 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,spec);
var G__26861__$1 = ((cljs.core.not(pass_through))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__26861,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.conj,k):G__26861);
var G__26861__$2 = (cljs.core.truth_(required__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__26861__$1,new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.conj,k):G__26861__$1);
if(cljs.core.truth_(default$)){
return cljs.core.assoc_in(G__26861__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("props","defaults","props/defaults",999110366),k], null),default$);
} else {
return G__26861__$2;
}
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props__$4,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.PersistentVector.EMPTY], 0)),props__$4);
});
/**
 * Resolves specs in vector
 */
re_view.view_spec.resolve_spec_vector = (function re_view$view_spec$resolve_spec_vector(specs){
if(cljs.core.truth_(specs)){
var vec__26862 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,new cljs.core.Keyword(null,"&","&",509580121)),specs);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26862,(0),null);
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26862,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.resolve_spec,req),new cljs.core.Keyword(null,"&more","&more",-116680563),(function (){var G__26865 = cljs.core.second(opt);
if((G__26865 == null)){
return null;
} else {
return re_view.view_spec.resolve_spec(G__26865);
}
})()], null);
} else {
return null;
}
});
re_view.view_spec.validate_spec = (function re_view$view_spec$validate_spec(k,p__26873,value){
var map__26874 = p__26873;
var map__26874__$1 = (((((!((map__26874 == null))))?(((((map__26874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26874):map__26874);
var spec_map = map__26874__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26874__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26874__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26874__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
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
re_view.view_spec.validate_props = (function re_view$view_spec$validate_props(display_name,p__26905,props){
var map__26906 = p__26905;
var map__26906__$1 = (((((!((map__26906 == null))))?(((((map__26906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26906):map__26906);
var prop_specs = map__26906__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26906__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
var prop_keys_27011 = cljs.core.keys(props);
try{var seq__26910_27012 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(required,cljs.core.filterv(((function (prop_keys_27011,map__26906,map__26906__$1,prop_specs,required){
return (function (p1__26900_SHARP_){
return cljs.core.not((function (){var G__26917 = cljs.core.namespace(p1__26900_SHARP_);
var fexpr__26916 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"props",null], null), null);
return (fexpr__26916.cljs$core$IFn$_invoke$arity$1 ? fexpr__26916.cljs$core$IFn$_invoke$arity$1(G__26917) : fexpr__26916.call(null,G__26917));
})());
});})(prop_keys_27011,map__26906,map__26906__$1,prop_specs,required))
,cljs.core.keys(props))));
var chunk__26911_27013 = null;
var count__26912_27014 = (0);
var i__26913_27015 = (0);
while(true){
if((i__26913_27015 < count__26912_27014)){
var k_27020 = chunk__26911_27013.cljs$core$IIndexed$_nth$arity$2(null,i__26913_27015);
re_view.view_spec.validate_spec(k_27020,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_27020),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_27020));


var G__27021 = seq__26910_27012;
var G__27022 = chunk__26911_27013;
var G__27023 = count__26912_27014;
var G__27024 = (i__26913_27015 + (1));
seq__26910_27012 = G__27021;
chunk__26911_27013 = G__27022;
count__26912_27014 = G__27023;
i__26913_27015 = G__27024;
continue;
} else {
var temp__5735__auto___27025 = cljs.core.seq(seq__26910_27012);
if(temp__5735__auto___27025){
var seq__26910_27027__$1 = temp__5735__auto___27025;
if(cljs.core.chunked_seq_QMARK_(seq__26910_27027__$1)){
var c__4556__auto___27028 = cljs.core.chunk_first(seq__26910_27027__$1);
var G__27029 = cljs.core.chunk_rest(seq__26910_27027__$1);
var G__27030 = c__4556__auto___27028;
var G__27031 = cljs.core.count(c__4556__auto___27028);
var G__27032 = (0);
seq__26910_27012 = G__27029;
chunk__26911_27013 = G__27030;
count__26912_27014 = G__27031;
i__26913_27015 = G__27032;
continue;
} else {
var k_27034 = cljs.core.first(seq__26910_27027__$1);
re_view.view_spec.validate_spec(k_27034,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_27034),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_27034));


var G__27035 = cljs.core.next(seq__26910_27027__$1);
var G__27036 = null;
var G__27037 = (0);
var G__27038 = (0);
seq__26910_27012 = G__27035;
chunk__26911_27013 = G__27036;
count__26912_27014 = G__27037;
i__26913_27015 = G__27038;
continue;
}
} else {
}
}
break;
}
}catch (e26909){if((e26909 instanceof Error)){
var e_27045 = e26909;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error validating props in ",display_name], 0));

throw e_27045;
} else {
throw e26909;

}
}
return props;
});
re_view.view_spec.validate_children = (function re_view$view_spec$validate_children(display_name,p__26919,children){
var map__26920 = p__26919;
var map__26920__$1 = (((((!((map__26920 == null))))?(((((map__26920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26920):map__26920);
var children_spec = map__26920__$1;
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26920__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var _AMPERSAND_more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26920__$1,new cljs.core.Keyword(null,"&more","&more",-116680563));
if(cljs.core.truth_(children_spec)){
try{var children_27057__$1 = re_view.util.flatten_seqs(children);
var remaining_req_27059 = req;
var remaining_children_27060 = children_27057__$1;
var i_27061 = (0);
while(true){
if(cljs.core.empty_QMARK_(remaining_req_27059)){
if(cljs.core.empty_QMARK_(remaining_children_27060)){
} else {
if(cljs.core.truth_(_AMPERSAND_more)){
var seq__26936_27064 = cljs.core.seq(remaining_children_27060);
var chunk__26937_27065 = null;
var count__26938_27066 = (0);
var i__26939_27067 = (0);
while(true){
if((i__26939_27067 < count__26938_27066)){
var child_27069 = chunk__26937_27065.cljs$core$IIndexed$_nth$arity$2(null,i__26939_27067);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_27069);


var G__27070 = seq__26936_27064;
var G__27071 = chunk__26937_27065;
var G__27072 = count__26938_27066;
var G__27073 = (i__26939_27067 + (1));
seq__26936_27064 = G__27070;
chunk__26937_27065 = G__27071;
count__26938_27066 = G__27072;
i__26939_27067 = G__27073;
continue;
} else {
var temp__5735__auto___27075 = cljs.core.seq(seq__26936_27064);
if(temp__5735__auto___27075){
var seq__26936_27078__$1 = temp__5735__auto___27075;
if(cljs.core.chunked_seq_QMARK_(seq__26936_27078__$1)){
var c__4556__auto___27080 = cljs.core.chunk_first(seq__26936_27078__$1);
var G__27081 = cljs.core.chunk_rest(seq__26936_27078__$1);
var G__27082 = c__4556__auto___27080;
var G__27083 = cljs.core.count(c__4556__auto___27080);
var G__27084 = (0);
seq__26936_27064 = G__27081;
chunk__26937_27065 = G__27082;
count__26938_27066 = G__27083;
i__26939_27067 = G__27084;
continue;
} else {
var child_27085 = cljs.core.first(seq__26936_27078__$1);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_27085);


var G__27086 = cljs.core.next(seq__26936_27078__$1);
var G__27087 = null;
var G__27088 = (0);
var G__27089 = (0);
seq__26936_27064 = G__27086;
chunk__26937_27065 = G__27087;
count__26938_27066 = G__27088;
i__26939_27067 = G__27089;
continue;
}
} else {
}
}
break;
}
} else {
throw Error(["Expected fewer children. Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_27057__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),(cljs.core.truth_(_AMPERSAND_more)?" or more":null),"."].join(''));
}
}
} else {
if(cljs.core.empty_QMARK_(remaining_children_27060)){
throw Error(["Expected more children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name),". Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_27057__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),(cljs.core.truth_(_AMPERSAND_more)?" or more":null),"."].join(''));
} else {
re_view.view_spec.validate_spec(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["children-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_27061)].join('')),cljs.core.first(remaining_req_27059),cljs.core.first(remaining_children_27060));

var G__27090 = cljs.core.rest(remaining_req_27059);
var G__27091 = cljs.core.rest(remaining_children_27060);
var G__27092 = (i_27061 + (1));
remaining_req_27059 = G__27090;
remaining_children_27060 = G__27091;
i_27061 = G__27092;
continue;
}
}
break;
}
}catch (e26922){if((e26922 instanceof Error)){
var e_27093 = e26922;
console.error(["Error validating children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)].join(''));

throw Error(e_27093);
} else {
throw e26922;

}
}} else {
}

return children;
});

//# sourceMappingURL=re_view.view_spec.js.map
