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
var G__52318 = m;
if((!(cljs.core.map_QMARK_(v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52318,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),v,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066),k], null));
} else {
return G__52318;
}
}),specs,specs)], 0)));
});
re_view.view_spec.Hiccup_QMARK_ = (function re_view$view_spec$Hiccup_QMARK_(p1__52319_SHARP_){
return ((cljs.core.vector_QMARK_(p1__52319_SHARP_)) && ((cljs.core.first(p1__52319_SHARP_) instanceof cljs.core.Keyword)));
});
re_view.view_spec.SVG_QMARK_ = (function re_view$view_spec$SVG_QMARK_(p1__52320_SHARP_){
return ((re_view.view_spec.Hiccup_QMARK_(p1__52320_SHARP_)) && (clojure.string.starts_with_QMARK_(cljs.core.name(cljs.core.first(p1__52320_SHARP_)),"svg")));
});
re_view.view_spec.Element_QMARK_ = re_view.util.any_pred.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_view.util.is_react_element_QMARK_,re_view.view_spec.Hiccup_QMARK_,cljs.core.string_QMARK_,cljs.core.nil_QMARK_], 0));
re_view.view_spec.builtins = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Boolean","Boolean",20610060),cljs.core.boolean_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"String","String",584378334),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Number","Number",2146289584),cljs.core.number_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Function","Function",1904540321),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Map","Map",-197728088),cljs.core.map_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Vector","Vector",-767641200),cljs.core.vector_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Element","Element",-142042455),re_view.view_spec.Element_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Hiccup","Hiccup",-786840006),re_view.view_spec.Hiccup_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"SVG","SVG",1636684280),re_view.view_spec.SVG_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Object","Object",-1579320773),cljs.core.object_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Keyword","Keyword",1804369776),cljs.core.keyword_QMARK_], null)], null);
re_view.view_spec.defspecs(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins));
re_view.view_spec.spec_kinds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__52321){
var vec__52322 = p__52321;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52322,(0),null);
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52322,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pred,name);
}),cljs.core.PersistentArrayMap.EMPTY,re_view.view_spec.builtins);
/**
 * Resolves a spec. Keywords are looked up in the spec registry recursively until a function or set is found.
 *   If a map's :spec is a namespaced keyword, it is resolved and merged (without overriding existing keys)
 */
re_view.view_spec.resolve_spec = (function re_view$view_spec$resolve_spec(k){
if((k instanceof cljs.core.Keyword)){
var G__52325 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.spec_registry,k);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw Error(["View spec not registered: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));
}
})();
return (re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1 ? re_view.view_spec.resolve_spec.cljs$core$IFn$_invoke$arity$1(G__52325) : re_view.view_spec.resolve_spec.call(null,G__52325));
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
re_view.view_spec.spec_kind = (function re_view$view_spec$spec_kind(p__52332){
var map__52333 = p__52332;
var map__52333__$1 = (((((!((map__52333 == null))))?(((((map__52333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52333):map__52333);
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52333__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52333__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
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
re_view.view_spec.normalize_props_map = (function re_view$view_spec$normalize_props_map(p__52335){
var map__52336 = p__52335;
var map__52336__$1 = (((((!((map__52336 == null))))?(((((map__52336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52336):map__52336);
var props = map__52336__$1;
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52336__$1,new cljs.core.Keyword("props","keys","props/keys",1162814594));
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52336__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
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
var map__52372 = v;
var map__52372__$1 = (((((!((map__52372 == null))))?(((((map__52372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52372):map__52372);
var spec = map__52372__$1;
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52372__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var pass_through = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52372__$1,new cljs.core.Keyword(null,"pass-through","pass-through",-1285552122));
var required__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52372__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var G__52376 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,spec);
var G__52376__$1 = ((cljs.core.not(pass_through))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52376,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.conj,k):G__52376);
var G__52376__$2 = (cljs.core.truth_(required__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__52376__$1,new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.conj,k):G__52376__$1);
if(cljs.core.truth_(default$)){
return cljs.core.assoc_in(G__52376__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("props","defaults","props/defaults",999110366),k], null),default$);
} else {
return G__52376__$2;
}
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props__$4,new cljs.core.Keyword("props","consumed","props/consumed",174753542),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("props","required","props/required",1633699918),cljs.core.PersistentVector.EMPTY], 0)),props__$4);
});
/**
 * Resolves specs in vector
 */
re_view.view_spec.resolve_spec_vector = (function re_view$view_spec$resolve_spec_vector(specs){
if(cljs.core.truth_(specs)){
var vec__52377 = cljs.core.split_with(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,new cljs.core.Keyword(null,"&","&",509580121)),specs);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52377,(0),null);
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52377,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",-326448303),cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_view.view_spec.resolve_spec,req),new cljs.core.Keyword(null,"&more","&more",-116680563),(function (){var G__52380 = cljs.core.second(opt);
if((G__52380 == null)){
return null;
} else {
return re_view.view_spec.resolve_spec(G__52380);
}
})()], null);
} else {
return null;
}
});
re_view.view_spec.validate_spec = (function re_view$view_spec$validate_spec(k,p__52384,value){
var map__52385 = p__52384;
var map__52385__$1 = (((((!((map__52385 == null))))?(((((map__52385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52385):map__52385);
var spec_map = map__52385__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52385__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52385__$1,new cljs.core.Keyword(null,"spec","spec",347520401));
var spec_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52385__$1,new cljs.core.Keyword(null,"spec-name","spec-name",1234428066));
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
re_view.view_spec.validate_props = (function re_view$view_spec$validate_props(display_name,p__52397,props){
var map__52398 = p__52397;
var map__52398__$1 = (((((!((map__52398 == null))))?(((((map__52398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52398):map__52398);
var prop_specs = map__52398__$1;
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52398__$1,new cljs.core.Keyword("props","required","props/required",1633699918));
var prop_keys_52623 = cljs.core.keys(props);
try{var seq__52407_52624 = cljs.core.seq(cljs.core.into.cljs$core$IFn$_invoke$arity$2(required,cljs.core.filterv(((function (prop_keys_52623,map__52398,map__52398__$1,prop_specs,required){
return (function (p1__52394_SHARP_){
return cljs.core.not((function (){var G__52422 = cljs.core.namespace(p1__52394_SHARP_);
var fexpr__52421 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["spec",null,"props",null], null), null);
return (fexpr__52421.cljs$core$IFn$_invoke$arity$1 ? fexpr__52421.cljs$core$IFn$_invoke$arity$1(G__52422) : fexpr__52421.call(null,G__52422));
})());
});})(prop_keys_52623,map__52398,map__52398__$1,prop_specs,required))
,cljs.core.keys(props))));
var chunk__52408_52625 = null;
var count__52409_52626 = (0);
var i__52410_52627 = (0);
while(true){
if((i__52410_52627 < count__52409_52626)){
var k_52630 = chunk__52408_52625.cljs$core$IIndexed$_nth$arity$2(null,i__52410_52627);
re_view.view_spec.validate_spec(k_52630,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_52630),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_52630));


var G__52632 = seq__52407_52624;
var G__52633 = chunk__52408_52625;
var G__52634 = count__52409_52626;
var G__52635 = (i__52410_52627 + (1));
seq__52407_52624 = G__52632;
chunk__52408_52625 = G__52633;
count__52409_52626 = G__52634;
i__52410_52627 = G__52635;
continue;
} else {
var temp__5735__auto___52638 = cljs.core.seq(seq__52407_52624);
if(temp__5735__auto___52638){
var seq__52407_52639__$1 = temp__5735__auto___52638;
if(cljs.core.chunked_seq_QMARK_(seq__52407_52639__$1)){
var c__4556__auto___52640 = cljs.core.chunk_first(seq__52407_52639__$1);
var G__52641 = cljs.core.chunk_rest(seq__52407_52639__$1);
var G__52642 = c__4556__auto___52640;
var G__52643 = cljs.core.count(c__4556__auto___52640);
var G__52644 = (0);
seq__52407_52624 = G__52641;
chunk__52408_52625 = G__52642;
count__52409_52626 = G__52643;
i__52410_52627 = G__52644;
continue;
} else {
var k_52645 = cljs.core.first(seq__52407_52639__$1);
re_view.view_spec.validate_spec(k_52645,cljs.core.get.cljs$core$IFn$_invoke$arity$2(prop_specs,k_52645),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,k_52645));


var G__52650 = cljs.core.next(seq__52407_52639__$1);
var G__52651 = null;
var G__52652 = (0);
var G__52653 = (0);
seq__52407_52624 = G__52650;
chunk__52408_52625 = G__52651;
count__52409_52626 = G__52652;
i__52410_52627 = G__52653;
continue;
}
} else {
}
}
break;
}
}catch (e52406){if((e52406 instanceof Error)){
var e_52657 = e52406;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error validating props in ",display_name], 0));

throw e_52657;
} else {
throw e52406;

}
}
return props;
});
re_view.view_spec.validate_children = (function re_view$view_spec$validate_children(display_name,p__52436,children){
var map__52437 = p__52436;
var map__52437__$1 = (((((!((map__52437 == null))))?(((((map__52437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52437):map__52437);
var children_spec = map__52437__$1;
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52437__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var _AMPERSAND_more = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52437__$1,new cljs.core.Keyword(null,"&more","&more",-116680563));
if(cljs.core.truth_(children_spec)){
try{var children_52665__$1 = re_view.util.flatten_seqs(children);
var remaining_req_52667 = req;
var remaining_children_52668 = children_52665__$1;
var i_52669 = (0);
while(true){
if(cljs.core.empty_QMARK_(remaining_req_52667)){
if(cljs.core.empty_QMARK_(remaining_children_52668)){
} else {
if(cljs.core.truth_(_AMPERSAND_more)){
var seq__52450_52680 = cljs.core.seq(remaining_children_52668);
var chunk__52451_52681 = null;
var count__52452_52682 = (0);
var i__52453_52683 = (0);
while(true){
if((i__52453_52683 < count__52452_52682)){
var child_52687 = chunk__52451_52681.cljs$core$IIndexed$_nth$arity$2(null,i__52453_52683);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_52687);


var G__52688 = seq__52450_52680;
var G__52689 = chunk__52451_52681;
var G__52690 = count__52452_52682;
var G__52691 = (i__52453_52683 + (1));
seq__52450_52680 = G__52688;
chunk__52451_52681 = G__52689;
count__52452_52682 = G__52690;
i__52453_52683 = G__52691;
continue;
} else {
var temp__5735__auto___52692 = cljs.core.seq(seq__52450_52680);
if(temp__5735__auto___52692){
var seq__52450_52693__$1 = temp__5735__auto___52692;
if(cljs.core.chunked_seq_QMARK_(seq__52450_52693__$1)){
var c__4556__auto___52694 = cljs.core.chunk_first(seq__52450_52693__$1);
var G__52695 = cljs.core.chunk_rest(seq__52450_52693__$1);
var G__52696 = c__4556__auto___52694;
var G__52697 = cljs.core.count(c__4556__auto___52694);
var G__52698 = (0);
seq__52450_52680 = G__52695;
chunk__52451_52681 = G__52696;
count__52452_52682 = G__52697;
i__52453_52683 = G__52698;
continue;
} else {
var child_52703 = cljs.core.first(seq__52450_52693__$1);
re_view.view_spec.validate_spec(new cljs.core.Keyword(null,"children-&","children-&",-1841380146),_AMPERSAND_more,child_52703);


var G__52704 = cljs.core.next(seq__52450_52693__$1);
var G__52705 = null;
var G__52706 = (0);
var G__52707 = (0);
seq__52450_52680 = G__52704;
chunk__52451_52681 = G__52705;
count__52452_52682 = G__52706;
i__52453_52683 = G__52707;
continue;
}
} else {
}
}
break;
}
} else {
throw Error(["Expected fewer children. Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_52665__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),(cljs.core.truth_(_AMPERSAND_more)?" or more":null),"."].join(''));
}
}
} else {
if(cljs.core.empty_QMARK_(remaining_children_52668)){
throw Error(["Expected more children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name),". Provided ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(children_52665__$1)),", expected ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(req)),(cljs.core.truth_(_AMPERSAND_more)?" or more":null),"."].join(''));
} else {
re_view.view_spec.validate_spec(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["children-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_52669)].join('')),cljs.core.first(remaining_req_52667),cljs.core.first(remaining_children_52668));

var G__52708 = cljs.core.rest(remaining_req_52667);
var G__52709 = cljs.core.rest(remaining_children_52668);
var G__52710 = (i_52669 + (1));
remaining_req_52667 = G__52708;
remaining_children_52668 = G__52709;
i_52669 = G__52710;
continue;
}
}
break;
}
}catch (e52439){if((e52439 instanceof Error)){
var e_52711 = e52439;
console.error(["Error validating children in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(display_name)].join(''));

throw Error(e_52711);
} else {
throw e52439;

}
}} else {
}

return children;
});

//# sourceMappingURL=re_view.view_spec.js.map
