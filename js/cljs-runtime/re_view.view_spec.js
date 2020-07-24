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
var G__52218 = m;
if((!(cljs.core.map_QMARK_(v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52218,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),v,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),k], null));
} else {
return G__52218;
}
}),specs,specs)], 0)));
});
re_view.view_spec.Hiccup_QMARK_ = (function re_view$view_spec$Hiccup_QMARK_(p1__52219_SHARP_){
return ((cljs.core.vector_QMARK_(p1__52219_SHARP_)) && ((cljs.core.first(p1__52219_SHARP_) instanceof cljs.core.Keyword)));
});
re_view.view_spec.SVG_QMARK_ = (function re_view$view_spec$SVG_QMARK_(p1__52220_SHARP_){
return ((re_view.view_spec.Hiccup_QMARK_(p1__52220_SHARP_)) && (clojure.string.starts_with_QMARK_(cljs.core.name(cljs.core.first(p1__52220_SHARP_)),"svg")));
});
re_view.view_spec.Element_QMARK_ = re_view.util.any_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_view.util.is_react_element_QMARK_,re_view.view_spec.Hiccup_QMARK_,cljs.core.string_QMARK_,cljs.core.nil_QMARK_], 0));
re_view.view_spec.builtins = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Boolean","Boolean",20610060),cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"String","String",584378334),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Number","Number",2146289584),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Function","Function",1904540321),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Map","Map",-197728088),cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Vector","Vector",-767641200),cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Element","Element",-142042455),re_view.view_spec.Element_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Hiccup","Hiccup",-786840006),re_view.view_spec.Hiccup_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"SVG","SVG",1636684280),re_view.view_spec.SVG_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Object","Object",-1579320773),cljs.core.object_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Keyword","Keyword",1804369776),cljs.core.keyword_QMARK_], null)], null);
re_view.view_spec.defspecs(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins));
re_view.view_spec.spec_kinds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__52221){
var vec__52222 = p__52221;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52222,(0),null);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52222,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pred,name);
}),cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins);
/**
 * Resolves a spec. Keywords are looked up in the spec registry recursively until a function or set is found.
 *   If a map's :spec is a namespaced keyword, it is resolved and merged (without overriding existing keys)
 */
re_view.view_spec.resolve_spec = (function re_view$view_spec$resolve_spec(k){
if((k instanceof cljs.core.Keyword)){
var G__52225 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.spec_registry,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw Error(["View spec not registered: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
}
})();
return (re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1 ? re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1(G__52225) : re_view.view_spec.resolve_spec.call(null,G__52225));
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
re_view.view_spec.spec_kind = (function re_view$view_spec$spec_kind(p__52226){
var map__52227 = p__52226;
var map__52227__$1 = (((((!((map__52227 == null))))?(((((map__52227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52227):map__52227);
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52227__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52227__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
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
re_view.view_spec.normalize_props_map = (function re_view$view_spec$normalize_props_map(p__52233){
var map__52234 = p__52233;
var map__52234__$1 = (((((!((map__52234 == null))))?(((((map__52234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52234):map__52234);
var props = map__52234__$1;
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52234__$1,new cljs.core.Keyword("props","keys","props/keys",1162814594));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52234__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
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
var map__52242 = v;
var map__52242__$1 = (((((!((map__52242 == null))))?(((((map__52242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52242):map__52242);
var spec = map__52242__$1;
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52242__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var pass_through = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52242__$1,new cljs.core.Keyword(null,"pass-through","pass-through",-1285552122));
var required__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52242__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var G__52245 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,spec);
var G__52245__$1 = ((cljs.core.not(pass_through))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52245,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.conj,k):G__52245);
var G__52245__$2 = (cljs.core.truth_(required__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52245__$1,new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.conj,k):G__52245__$1);
if(cljs.core.truth_(default$)){
return cljs.core.assoc_in(G__52245__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("props","defaults","props/defaults",999110366),k], null),default$);
} else {
return G__52245__$2;
}
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props__$4,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.PersistentVector.EMPTY], 0)),props__$4);
});
/**
 * Resolves specs in vector
 */
re_view.view_spec.resolve_spec_vector = (function re_view$view_spec$resolve_spec_vector(specs){
if(cljs.core.truth_(specs)){
var vec__52252 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,new cljs.core.Keyword(null,"&","&",509580121)),specs);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52252,(0),null);
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52252,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.resolve_spec,req),new cljs.core.Keyword(null,"&more","&more",-116680563),(function (){var G__52255 = cljs.core.second(opt);
if((G__52255 == null)){
return null;
} else {
return re_view.view_spec.resolve_spec(G__52255);
}
})()], null);
} else {
return null;
}
});
re_view.view_spec.validate_spec = (function re_view$view_spec$validate_spec(k,p__52258,value){
var map__52259 = p__52258;
var map__52259__$1 = (((((!((map__52259 == null))))?(((((map__52259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52259):map__52259);
var spec_map = map__52259__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52259__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
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
re_view.view_spec.validate_props = (function re_view$view_spec$validate_props(display_name,p__52268,props){
var map__52269 = p__52268;
var map__52269__$1 = (((((!((map__52269 == null))))?(((((map__52269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52269):map__52269);
var prop_specs = map__52269__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52269__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
var prop_keys_52378 = cljs.core.keys(props);
try{var seq__52275_52379 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(required,cljs.core.filterv(((function (prop_keys_52378,map__52269,map__52269__$1,prop_specs,required){
return (function (p1__52267_SHARP_){
return cljs.core.not((function (){var G__52286 = cljs.core.namespace(p1__52267_SHARP_);
var fexpr__52285 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"props",null], null), null);
return (fexpr__52285.cljs$core$IFn$_invoke$arity$1 ? fexpr__52285.cljs$core$IFn$_invoke$arity$1(G__52286) : fexpr__52285.call(null,G__52286));
})());
});})(prop_keys_52378,map__52269,map__52269__$1,prop_specs,required))
,cljs.core.keys(props))));
var chunk__52276_52380 = null;
var count__52277_52381 = (0);
var i__52278_52382 = (0);
while(true){
if((i__52278_52382 < count__52277_52381)){
var k_52386 = chunk__52276_52380.cljs$core$IIndexed$_nth$arity$2(null,i__52278_52382);
re_view.view_spec.validate_spec(k_52386,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_52386),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_52386));


var G__52387 = seq__52275_52379;
var G__52388 = chunk__52276_52380;
var G__52389 = count__52277_52381;
var G__52390 = (i__52278_52382 + (1));
seq__52275_52379 = G__52387;
chunk__52276_52380 = G__52388;
count__52277_52381 = G__52389;
i__52278_52382 = G__52390;
continue;
} else {
var temp__5735__auto___52391 = cljs.core.seq(seq__52275_52379);
if(temp__5735__auto___52391){
var seq__52275_52392__$1 = temp__5735__auto___52391;
if(cljs.core.chunked_seq_QMARK_(seq__52275_52392__$1)){
var c__4556__auto___52393 = cljs.core.chunk_first(seq__52275_52392__$1);
var G__52394 = cljs.core.chunk_rest(seq__52275_52392__$1);
var G__52395 = c__4556__auto___52393;
var G__52396 = cljs.core.count(c__4556__auto___52393);
var G__52397 = (0);
seq__52275_52379 = G__52394;
chunk__52276_52380 = G__52395;
count__52277_52381 = G__52396;
i__52278_52382 = G__52397;
continue;
} else {
var k_52398 = cljs.core.first(seq__52275_52392__$1);
re_view.view_spec.validate_spec(k_52398,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_52398),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_52398));


var G__52403 = cljs.core.next(seq__52275_52392__$1);
var G__52404 = null;
var G__52405 = (0);
var G__52406 = (0);
seq__52275_52379 = G__52403;
chunk__52276_52380 = G__52404;
count__52277_52381 = G__52405;
i__52278_52382 = G__52406;
continue;
}
} else {
}
}
break;
}
}catch (e52273){if((e52273 instanceof Error)){
var e_52410 = e52273;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error validating props in ",display_name], 0));

throw e_52410;
} else {
throw e52273;

}
}
return props;
});
re_view.view_spec.validate_children = (function re_view$view_spec$validate_children(display_name,p__52291,children){
var map__52292 = p__52291;
var map__52292__$1 = (((((!((map__52292 == null))))?(((((map__52292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52292):map__52292);
var children_spec = map__52292__$1;
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52292__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var _AMPERSAND_more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52292__$1,new cljs.core.Keyword(null,"&more","&more",-116680563));
if(cljs.core.truth_(children_spec)){
try{var children_52411__$1 = re_view.util.flatten_seqs(children);
var remaining_req_52412 = req;
var remaining_children_52413 = children_52411__$1;
var i_52414 = (0);
while(true){
if(cljs.core.empty_QMARK_(remaining_req_52412)){
if(cljs.core.empty_QMARK_(remaining_children_52413)){
} else {
if(cljs.core.truth_(_AMPERSAND_more)){
var seq__52322_52416 = cljs.core.seq(remaining_children_52413);
var chunk__52323_52417 = null;
var count__52324_52418 = (0);
var i__52325_52419 = (0);
while(true){
if((i__52325_52419 < count__52324_52418)){
var child_52420 = chunk__52323_52417.cljs$core$IIndexed$_nth$arity$2(null,i__52325_52419);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_52420);


var G__52424 = seq__52322_52416;
var G__52425 = chunk__52323_52417;
var G__52426 = count__52324_52418;
var G__52427 = (i__52325_52419 + (1));
seq__52322_52416 = G__52424;
chunk__52323_52417 = G__52425;
count__52324_52418 = G__52426;
i__52325_52419 = G__52427;
continue;
} else {
var temp__5735__auto___52428 = cljs.core.seq(seq__52322_52416);
if(temp__5735__auto___52428){
var seq__52322_52429__$1 = temp__5735__auto___52428;
if(cljs.core.chunked_seq_QMARK_(seq__52322_52429__$1)){
var c__4556__auto___52430 = cljs.core.chunk_first(seq__52322_52429__$1);
var G__52431 = cljs.core.chunk_rest(seq__52322_52429__$1);
var G__52432 = c__4556__auto___52430;
var G__52433 = cljs.core.count(c__4556__auto___52430);
var G__52434 = (0);
seq__52322_52416 = G__52431;
chunk__52323_52417 = G__52432;
count__52324_52418 = G__52433;
i__52325_52419 = G__52434;
continue;
} else {
var child_52435 = cljs.core.first(seq__52322_52429__$1);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_52435);


var G__52437 = cljs.core.next(seq__52322_52429__$1);
var G__52438 = null;
var G__52439 = (0);
var G__52440 = (0);
seq__52322_52416 = G__52437;
chunk__52323_52417 = G__52438;
count__52324_52418 = G__52439;
i__52325_52419 = G__52440;
continue;
}
} else {
}
}
break;
}
} else {
throw Error(["Expected fewer children. Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_52411__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),(cljs.core.truth_(_AMPERSAND_more)?" or more":null),"."].join(''));
}
}
} else {
if(cljs.core.empty_QMARK_(remaining_children_52413)){
throw Error(["Expected more children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name),". Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_52411__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),(cljs.core.truth_(_AMPERSAND_more)?" or more":null),"."].join(''));
} else {
re_view.view_spec.validate_spec(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["children-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_52414)].join('')),cljs.core.first(remaining_req_52412),cljs.core.first(remaining_children_52413));

var G__52446 = cljs.core.rest(remaining_req_52412);
var G__52447 = cljs.core.rest(remaining_children_52413);
var G__52448 = (i_52414 + (1));
remaining_req_52412 = G__52446;
remaining_children_52413 = G__52447;
i_52414 = G__52448;
continue;
}
}
break;
}
}catch (e52301){if((e52301 instanceof Error)){
var e_52449 = e52301;
console.error(["Error validating children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)].join(''));

throw Error(e_52449);
} else {
throw e52301;

}
}} else {
}

return children;
});

//# sourceMappingURL=re_view.view_spec.js.map
