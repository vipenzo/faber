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
var G__42129 = m;
if((!(cljs.core.map_QMARK_(v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42129,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),v,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),k], null));
} else {
return G__42129;
}
}),specs,specs)], 0)));
});
re_view.view_spec.Hiccup_QMARK_ = (function re_view$view_spec$Hiccup_QMARK_(p1__42131_SHARP_){
return ((cljs.core.vector_QMARK_(p1__42131_SHARP_)) && ((cljs.core.first(p1__42131_SHARP_) instanceof cljs.core.Keyword)));
});
re_view.view_spec.SVG_QMARK_ = (function re_view$view_spec$SVG_QMARK_(p1__42136_SHARP_){
return ((re_view.view_spec.Hiccup_QMARK_(p1__42136_SHARP_)) && (clojure.string.starts_with_QMARK_(cljs.core.name(cljs.core.first(p1__42136_SHARP_)),"svg")));
});
re_view.view_spec.Element_QMARK_ = re_view.util.any_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_view.util.is_react_element_QMARK_,re_view.view_spec.Hiccup_QMARK_,cljs.core.string_QMARK_,cljs.core.nil_QMARK_], 0));
re_view.view_spec.builtins = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Boolean","Boolean",20610060),cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"String","String",584378334),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Number","Number",2146289584),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Function","Function",1904540321),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Map","Map",-197728088),cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Vector","Vector",-767641200),cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Element","Element",-142042455),re_view.view_spec.Element_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Hiccup","Hiccup",-786840006),re_view.view_spec.Hiccup_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"SVG","SVG",1636684280),re_view.view_spec.SVG_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Object","Object",-1579320773),cljs.core.object_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Keyword","Keyword",1804369776),cljs.core.keyword_QMARK_], null)], null);
re_view.view_spec.defspecs(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins));
re_view.view_spec.spec_kinds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__42139){
var vec__42140 = p__42139;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42140,(0),null);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42140,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pred,name);
}),cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins);
/**
 * Resolves a spec. Keywords are looked up in the spec registry recursively until a function or set is found.
 *   If a map's :spec is a namespaced keyword, it is resolved and merged (without overriding existing keys)
 */
re_view.view_spec.resolve_spec = (function re_view$view_spec$resolve_spec(k){
if((k instanceof cljs.core.Keyword)){
var G__42143 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.spec_registry,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw Error(["View spec not registered: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
}
})();
return (re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1 ? re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1(G__42143) : re_view.view_spec.resolve_spec.call(null,G__42143));
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
re_view.view_spec.spec_kind = (function re_view$view_spec$spec_kind(p__42155){
var map__42156 = p__42155;
var map__42156__$1 = (((((!((map__42156 == null))))?(((((map__42156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42156):map__42156);
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42156__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42156__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
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
re_view.view_spec.normalize_props_map = (function re_view$view_spec$normalize_props_map(p__42161){
var map__42162 = p__42161;
var map__42162__$1 = (((((!((map__42162 == null))))?(((((map__42162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42162):map__42162);
var props = map__42162__$1;
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42162__$1,new cljs.core.Keyword("props","keys","props/keys",1162814594));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42162__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
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
var map__42171 = v;
var map__42171__$1 = (((((!((map__42171 == null))))?(((((map__42171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42171):map__42171);
var spec = map__42171__$1;
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42171__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var pass_through = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42171__$1,new cljs.core.Keyword(null,"pass-through","pass-through",-1285552122));
var required__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42171__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var G__42181 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,spec);
var G__42181__$1 = ((cljs.core.not(pass_through))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__42181,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.conj,k):G__42181);
var G__42181__$2 = (cljs.core.truth_(required__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__42181__$1,new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.conj,k):G__42181__$1);
if(cljs.core.truth_(default$)){
return cljs.core.assoc_in(G__42181__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("props","defaults","props/defaults",999110366),k], null),default$);
} else {
return G__42181__$2;
}
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props__$4,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.PersistentVector.EMPTY], 0)),props__$4);
});
/**
 * Resolves specs in vector
 */
re_view.view_spec.resolve_spec_vector = (function re_view$view_spec$resolve_spec_vector(specs){
if(cljs.core.truth_(specs)){
var vec__42183 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,new cljs.core.Keyword(null,"&","&",509580121)),specs);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42183,(0),null);
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42183,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.resolve_spec,req),new cljs.core.Keyword(null,"&more","&more",-116680563),(function (){var G__42186 = cljs.core.second(opt);
if((G__42186 == null)){
return null;
} else {
return re_view.view_spec.resolve_spec(G__42186);
}
})()], null);
} else {
return null;
}
});
re_view.view_spec.validate_spec = (function re_view$view_spec$validate_spec(k,p__42187,value){
var map__42190 = p__42187;
var map__42190__$1 = (((((!((map__42190 == null))))?(((((map__42190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42190):map__42190);
var spec_map = map__42190__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42190__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42190__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42190__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
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
re_view.view_spec.validate_props = (function re_view$view_spec$validate_props(display_name,p__42194,props){
var map__42195 = p__42194;
var map__42195__$1 = (((((!((map__42195 == null))))?(((((map__42195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42195):map__42195);
var prop_specs = map__42195__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42195__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
var prop_keys_42294 = cljs.core.keys(props);
try{var seq__42199_42295 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(required,cljs.core.filterv(((function (prop_keys_42294,map__42195,map__42195__$1,prop_specs,required){
return (function (p1__42193_SHARP_){
return cljs.core.not((function (){var G__42210 = cljs.core.namespace(p1__42193_SHARP_);
var fexpr__42209 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"props",null], null), null);
return (fexpr__42209.cljs$core$IFn$_invoke$arity$1 ? fexpr__42209.cljs$core$IFn$_invoke$arity$1(G__42210) : fexpr__42209.call(null,G__42210));
})());
});})(prop_keys_42294,map__42195,map__42195__$1,prop_specs,required))
,cljs.core.keys(props))));
var chunk__42200_42296 = null;
var count__42201_42297 = (0);
var i__42202_42298 = (0);
while(true){
if((i__42202_42298 < count__42201_42297)){
var k_42306 = chunk__42200_42296.cljs$core$IIndexed$_nth$arity$2(null,i__42202_42298);
re_view.view_spec.validate_spec(k_42306,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_42306),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_42306));


var G__42307 = seq__42199_42295;
var G__42308 = chunk__42200_42296;
var G__42309 = count__42201_42297;
var G__42310 = (i__42202_42298 + (1));
seq__42199_42295 = G__42307;
chunk__42200_42296 = G__42308;
count__42201_42297 = G__42309;
i__42202_42298 = G__42310;
continue;
} else {
var temp__5735__auto___42315 = cljs.core.seq(seq__42199_42295);
if(temp__5735__auto___42315){
var seq__42199_42316__$1 = temp__5735__auto___42315;
if(cljs.core.chunked_seq_QMARK_(seq__42199_42316__$1)){
var c__4556__auto___42320 = cljs.core.chunk_first(seq__42199_42316__$1);
var G__42321 = cljs.core.chunk_rest(seq__42199_42316__$1);
var G__42322 = c__4556__auto___42320;
var G__42323 = cljs.core.count(c__4556__auto___42320);
var G__42324 = (0);
seq__42199_42295 = G__42321;
chunk__42200_42296 = G__42322;
count__42201_42297 = G__42323;
i__42202_42298 = G__42324;
continue;
} else {
var k_42325 = cljs.core.first(seq__42199_42316__$1);
re_view.view_spec.validate_spec(k_42325,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_42325),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_42325));


var G__42328 = cljs.core.next(seq__42199_42316__$1);
var G__42329 = null;
var G__42330 = (0);
var G__42331 = (0);
seq__42199_42295 = G__42328;
chunk__42200_42296 = G__42329;
count__42201_42297 = G__42330;
i__42202_42298 = G__42331;
continue;
}
} else {
}
}
break;
}
}catch (e42197){if((e42197 instanceof Error)){
var e_42332 = e42197;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error validating props in ",display_name], 0));

throw e_42332;
} else {
throw e42197;

}
}
return props;
});
re_view.view_spec.validate_children = (function re_view$view_spec$validate_children(display_name,p__42218,children){
var map__42219 = p__42218;
var map__42219__$1 = (((((!((map__42219 == null))))?(((((map__42219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42219):map__42219);
var children_spec = map__42219__$1;
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42219__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var _AMPERSAND_more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42219__$1,new cljs.core.Keyword(null,"&more","&more",-116680563));
if(cljs.core.truth_(children_spec)){
try{var children_42341__$1 = re_view.util.flatten_seqs(children);
var remaining_req_42345 = req;
var remaining_children_42346 = children_42341__$1;
var i_42347 = (0);
while(true){
if(cljs.core.empty_QMARK_(remaining_req_42345)){
if(cljs.core.empty_QMARK_(remaining_children_42346)){
} else {
if(cljs.core.truth_(_AMPERSAND_more)){
var seq__42232_42348 = cljs.core.seq(remaining_children_42346);
var chunk__42233_42349 = null;
var count__42234_42350 = (0);
var i__42235_42351 = (0);
while(true){
if((i__42235_42351 < count__42234_42350)){
var child_42352 = chunk__42233_42349.cljs$core$IIndexed$_nth$arity$2(null,i__42235_42351);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_42352);


var G__42353 = seq__42232_42348;
var G__42354 = chunk__42233_42349;
var G__42355 = count__42234_42350;
var G__42356 = (i__42235_42351 + (1));
seq__42232_42348 = G__42353;
chunk__42233_42349 = G__42354;
count__42234_42350 = G__42355;
i__42235_42351 = G__42356;
continue;
} else {
var temp__5735__auto___42357 = cljs.core.seq(seq__42232_42348);
if(temp__5735__auto___42357){
var seq__42232_42358__$1 = temp__5735__auto___42357;
if(cljs.core.chunked_seq_QMARK_(seq__42232_42358__$1)){
var c__4556__auto___42362 = cljs.core.chunk_first(seq__42232_42358__$1);
var G__42364 = cljs.core.chunk_rest(seq__42232_42358__$1);
var G__42365 = c__4556__auto___42362;
var G__42366 = cljs.core.count(c__4556__auto___42362);
var G__42367 = (0);
seq__42232_42348 = G__42364;
chunk__42233_42349 = G__42365;
count__42234_42350 = G__42366;
i__42235_42351 = G__42367;
continue;
} else {
var child_42368 = cljs.core.first(seq__42232_42358__$1);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_42368);


var G__42371 = cljs.core.next(seq__42232_42358__$1);
var G__42372 = null;
var G__42373 = (0);
var G__42374 = (0);
seq__42232_42348 = G__42371;
chunk__42233_42349 = G__42372;
count__42234_42350 = G__42373;
i__42235_42351 = G__42374;
continue;
}
} else {
}
}
break;
}
} else {
throw Error(["Expected fewer children. Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_42341__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),(cljs.core.truth_(_AMPERSAND_more)?" or more":null),"."].join(''));
}
}
} else {
if(cljs.core.empty_QMARK_(remaining_children_42346)){
throw Error(["Expected more children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name),". Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_42341__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),(cljs.core.truth_(_AMPERSAND_more)?" or more":null),"."].join(''));
} else {
re_view.view_spec.validate_spec(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["children-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_42347)].join('')),cljs.core.first(remaining_req_42345),cljs.core.first(remaining_children_42346));

var G__42378 = cljs.core.rest(remaining_req_42345);
var G__42379 = cljs.core.rest(remaining_children_42346);
var G__42380 = (i_42347 + (1));
remaining_req_42345 = G__42378;
remaining_children_42346 = G__42379;
i_42347 = G__42380;
continue;
}
}
break;
}
}catch (e42225){if((e42225 instanceof Error)){
var e_42385 = e42225;
console.error(["Error validating children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)].join(''));

throw Error(e_42385);
} else {
throw e42225;

}
}} else {
}

return children;
});

//# sourceMappingURL=re_view.view_spec.js.map
