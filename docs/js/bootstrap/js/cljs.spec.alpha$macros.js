goog.provide('cljs.spec.alpha$macros');
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha$macros !== 'undefined') && (typeof cljs.spec.alpha$macros.registry_ref !== 'undefined')){
} else {
cljs.spec.alpha$macros.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha$macros.__GT_sym = (function cljs$spec$alpha$macros$__GT_sym(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
cljs.spec.alpha$macros.unfn = (function cljs$spec$alpha$macros$unfn(expr){
if(((cljs.core.seq_QMARK_(expr)) && ((cljs.core.first(expr) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fn*",cljs.core.name(cljs.core.first(expr)))))){
var vec__53650 = cljs.core.rest(expr);
var seq__53651 = cljs.core.seq(vec__53650);
var first__53652 = cljs.core.first(seq__53651);
var seq__53651__$1 = cljs.core.next(seq__53651);
var vec__53653 = first__53652;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53653,(0),null);
var form = seq__53651__$1;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([s,new cljs.core.Symbol(null,"%","%",-950237169,null)]),form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)], 0));
} else {
return expr;
}
});
cljs.spec.alpha$macros.res = (function cljs$spec$alpha$macros$res(env,form){
if((form instanceof cljs.core.Keyword)){
return form;
} else {
if((form instanceof cljs.core.Symbol)){
var resolved = (function (){var or__4126__auto__ = cljs.spec.alpha$macros.__GT_sym(cljs.analyzer.api.resolve(env,form));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return form;
}
})();
var ns_name = cljs.core.namespace(resolved);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__4115__auto__ = ns_name;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.ends_with_QMARK_(ns_name,"$macros");
} else {
return and__4115__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7))):ns_name),cljs.core.name(resolved));
} else {
if(cljs.core.sequential_QMARK_(form)){
return clojure.walk.postwalk((function (p1__53656_SHARP_){
if((p1__53656_SHARP_ instanceof cljs.core.Symbol)){
return (cljs.spec.alpha$macros.res.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha$macros.res.cljs$core$IFn$_invoke$arity$2(env,p1__53656_SHARP_) : cljs.spec.alpha$macros.res.call(null,env,p1__53656_SHARP_));
} else {
return p1__53656_SHARP_;
}
}),cljs.spec.alpha$macros.unfn(form));
} else {
return form;

}
}
}
});
var ret__4785__auto___54143 = /**
 * a compile time res, for use in cljs/spec/alpha.cljs
 */
cljs.spec.alpha$macros.mres = (function cljs$spec$alpha$macros$mres(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,form);
});
(cljs.spec.alpha$macros.mres.cljs$lang$macro = true);

/**
 * Qualify symbol s by resolving it or using the current *ns*.
 */
cljs.spec.alpha$macros.ns_qualify = (function cljs$spec$alpha$macros$ns_qualify(env,s){
if(cljs.core.truth_(cljs.core.namespace(s))){
return cljs.spec.alpha$macros.__GT_sym((function (){var _STAR_private_var_access_nowarn_STAR__orig_val__53660 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__53661 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__53661);

try{return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,s);
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__53660);
}})());
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha$macros !== 'undefined') && (typeof cljs.spec.alpha$macros._speced_vars !== 'undefined')){
} else {
cljs.spec.alpha$macros._speced_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
cljs.spec.alpha$macros.speced_vars = (function cljs$spec$alpha$macros$speced_vars(){
return cljs.core.deref(cljs.spec.alpha$macros._speced_vars);
});
var ret__4785__auto___54155 = /**
 * Given a namespace-qualified keyword or resolveable symbol k, and a
 *   spec, spec-name, predicate or regex-op makes an entry in the
 *   registry mapping k to the spec. Use nil to remove an entry in
 *   the registry for k.
 */
cljs.spec.alpha$macros.def = (function cljs$spec$alpha$macros$def(_AMPERSAND_form,_AMPERSAND_env,k,spec_form){
var k__$1 = (((k instanceof cljs.core.Symbol))?(function (){var sym = cljs.spec.alpha$macros.ns_qualify(_AMPERSAND_env,k);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha$macros._speced_vars,cljs.core.conj,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(sym,cljs.core.assoc,new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))));

return sym;
})():k);
var form = cljs.spec.alpha$macros.res(_AMPERSAND_env,spec_form);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha$macros.registry_ref,(function (r){
if((form == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(r,k__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k__$1,form);
}
}));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","def-impl","cljs.spec.alpha/def-impl",-940040760,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,k__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,spec_form,null,(1),null))], 0))));
});
(cljs.spec.alpha$macros.def.cljs$lang$macro = true);

var ret__4785__auto___54167 = (function (){
/**
 * Takes a single predicate form, e.g. can be the name of a predicate,
 *   like even?, or a fn literal like #(< % 42). Note that it is not
 *   generally necessary to wrap predicates in spec when using the rest
 *   of the spec macros, only to attach a unique generator
 * 
 *   Can also be passed the result of one of the regex ops -
 *   cat, alt, *, +, ?, in which case it will return a regex-conforming
 *   spec, useful when nesting an independent regex.
 *   ---
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator.
 * 
 *   Returns a spec.
 */
cljs.spec.alpha$macros.spec = (function cljs$spec$alpha$macros$spec(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54168 = arguments.length;
var i__4737__auto___54169 = (0);
while(true){
if((i__4737__auto___54169 < len__4736__auto___54168)){
args__4742__auto__.push((arguments[i__4737__auto___54169]));

var G__54170 = (i__4737__auto___54169 + (1));
i__4737__auto___54169 = G__54170;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.spec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.spec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,p__53687){
var map__53688 = p__53687;
var map__53688__$1 = (((((!((map__53688 == null))))?(((((map__53688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53688):map__53688);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53688__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
if(cljs.core.truth_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",69764672,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,form),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,gen,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
} else {
return null;
}
}));

(cljs.spec.alpha$macros.spec.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.spec.alpha$macros.spec.cljs$lang$applyTo = (function (seq53679){
var G__53680 = cljs.core.first(seq53679);
var seq53679__$1 = cljs.core.next(seq53679);
var G__53681 = cljs.core.first(seq53679__$1);
var seq53679__$2 = cljs.core.next(seq53679__$1);
var G__53682 = cljs.core.first(seq53679__$2);
var seq53679__$3 = cljs.core.next(seq53679__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53680,G__53681,G__53682,seq53679__$3);
}));

return null;
})()
;
(cljs.spec.alpha$macros.spec.cljs$lang$macro = true);

var ret__4785__auto___54177 = /**
 * Takes the name of a spec/predicate-returning multimethod and a
 *   tag-restoring keyword or fn (retag).  Returns a spec that when
 *   conforming or explaining data will pass it to the multimethod to get
 *   an appropriate spec. You can e.g. use multi-spec to dynamically and
 *   extensibly associate specs with 'tagged' data (i.e. data where one
 *   of the fields indicates the shape of the rest of the structure).
 * 
 *   (defmulti mspec :tag)
 * 
 *   The methods should ignore their argument and return a predicate/spec:
 *   (defmethod mspec :int [_] (s/keys :req-un [::tag ::i]))
 * 
 *   retag is used during generation to retag generated values with
 *   matching tags. retag can either be a keyword, at which key the
 *   dispatch-tag will be assoc'ed, or a fn of generated value and
 *   dispatch-tag that should return an appropriately retagged value.
 * 
 *   Note that because the tags themselves comprise an open set,
 *   the tag key spec cannot enumerate the values, but can e.g.
 *   test for keyword?.
 * 
 *   Note also that the dispatch values of the multimethod will be
 *   included in the path, i.e. in reporting and gen overrides, even
 *   though those values are not evident in the spec.
 */
cljs.spec.alpha$macros.multi_spec = (function cljs$spec$alpha$macros$multi_spec(_AMPERSAND_form,_AMPERSAND_env,mm,retag){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","multi-spec-impl","cljs.spec.alpha/multi-spec-impl",-1581100244,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,mm),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,mm,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,retag,null,(1),null))], 0))));
});
(cljs.spec.alpha$macros.multi_spec.cljs$lang$macro = true);

var ret__4785__auto___54178 = (function (){
/**
 * Creates and returns a map validating spec. :req and :opt are both
 *   vectors of namespaced-qualified keywords. The validator will ensure
 *   the :req keys are present. The :opt keys serve as documentation and
 *   may be used by the generator.
 * 
 *   The :req key vector supports 'and' and 'or' for key groups:
 * 
 *   (s/keys :req [::x ::y (or ::secret (and ::user ::pwd))] :opt [::z])
 * 
 *   There are also -un versions of :req and :opt. These allow
 *   you to connect unqualified keys to specs.  In each case, fully
 *   qualfied keywords are passed, which name the specs, but unqualified
 *   keys (with the same name component) are expected and checked at
 *   conform-time, and generated during gen:
 * 
 *   (s/keys :req-un [:my.ns/x :my.ns/y])
 * 
 *   The above says keys :x and :y are required, and will be validated
 *   and generated by specs (if they exist) named :my.ns/x :my.ns/y
 *   respectively.
 * 
 *   In addition, the values of *all* namespace-qualified keys will be validated
 *   (and possibly destructured) by any registered specs. Note: there is
 *   no support for inline value specification, by design.
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator.
 */
cljs.spec.alpha$macros.keys = (function cljs$spec$alpha$macros$keys(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54179 = arguments.length;
var i__4737__auto___54180 = (0);
while(true){
if((i__4737__auto___54180 < len__4736__auto___54179)){
args__4742__auto__.push((arguments[i__4737__auto___54180]));

var G__54181 = (i__4737__auto___54180 + (1));
i__4737__auto___54180 = G__54181;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.keys.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__53712){
var map__53713 = p__53712;
var map__53713__$1 = (((((!((map__53713 == null))))?(((((map__53713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53713):map__53713);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53713__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53713__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53713__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53713__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53713__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var unk = (function (p1__53702_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__53702_SHARP_));
});
var req_keys = cljs.core.filterv(cljs.core.keyword_QMARK_,cljs.core.flatten(req));
var req_un_specs = cljs.core.filterv(cljs.core.keyword_QMARK_,cljs.core.flatten(req_un));
var _ = ((cljs.core.every_QMARK_((function (p1__53703_SHARP_){
if((p1__53703_SHARP_ instanceof cljs.core.Keyword)){
return cljs.core.namespace(p1__53703_SHARP_);
} else {
return false;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(req_keys,req_un_specs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt,opt_un], 0))))?null:(function(){throw (new Error(["Assert failed: ","all keys must be namespace-qualified keywords","\n","(every? (fn* [p1__53703#] (clojure.core/and (keyword? p1__53703#) (namespace p1__53703#))) (concat req-keys req-un-specs opt opt-un))"].join('')))})());
var req_specs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(req_keys,req_un_specs);
var req_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(req_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2(unk,req_un_specs));
var opt_keys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(opt),cljs.core.map.cljs$core$IFn$_invoke$arity$2(unk,opt_un));
var opt_specs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(opt),opt_un);
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var parse_req = (function (rk,f){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),null,(1),null))], 0))));
} else {
return clojure.walk.postwalk((function (y){
if((y instanceof cljs.core.Keyword)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y)),null,(1),null))], 0))));
} else {
return y;
}
}),x);
}
}),rk);
});
var pred_exprs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)))))], null);
var pred_exprs__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred_exprs,parse_req(req,cljs.core.identity));
var pred_exprs__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred_exprs__$1,parse_req(req_un,unk));
var keys_pred = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gx,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),pred_exprs__$2))),null,(1),null))], 0))));
var pred_exprs__$3 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gx,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,e,null,(1),null))], 0))));
}),pred_exprs__$2);
var pred_forms = clojure.walk.postwalk((function (p1__53704_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__53704_SHARP_);
}),pred_exprs__$3);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","map-spec-impl","cljs.spec.alpha/map-spec-impl",1965627085,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"req-un","req-un",1074571008),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,req_un,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,opt_un,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"gfn","gfn",791517474),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),null,(1),null)),(new cljs.core.List(null,pred_exprs__$3,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),null,(1),null)),(new cljs.core.List(null,keys_pred,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,opt_keys,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"req-specs","req-specs",553962313),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,req_specs,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"req","req",-326448303),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,req,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"req-keys","req-keys",514319221),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,req_keys__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,opt_specs,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pred_forms,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"opt","opt",-794706369),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,opt,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)))));
}));

(cljs.spec.alpha$macros.keys.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.keys.cljs$lang$applyTo = (function (seq53705){
var G__53706 = cljs.core.first(seq53705);
var seq53705__$1 = cljs.core.next(seq53705);
var G__53707 = cljs.core.first(seq53705__$1);
var seq53705__$2 = cljs.core.next(seq53705__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53706,G__53707,seq53705__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.keys.cljs$lang$macro = true);

var ret__4785__auto___54206 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/or :even even? :small #(< % 42))
 * 
 *   Returns a destructuring spec that returns a map entry containing the
 *   key of the first matching pred and the corresponding value. Thus the
 *   'key' and 'val' functions can be used to refer generically to the
 *   components of the tagged return.
 */
cljs.spec.alpha$macros.or = (function cljs$spec$alpha$macros$or(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54207 = arguments.length;
var i__4737__auto___54208 = (0);
while(true){
if((i__4737__auto___54208 < len__4736__auto___54207)){
args__4742__auto__.push((arguments[i__4737__auto___54208]));

var G__54209 = (i__4737__auto___54208 + (1));
i__4737__auto___54208 = G__54209;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53727_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__53727_SHARP_);
}),pred_forms);
if(((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys)))){
} else {
throw (new Error(["Assert failed: ","spec/or expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","or-spec-impl","cljs.spec.alpha/or-spec-impl",174083152,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,pred_forms,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.or.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.or.cljs$lang$applyTo = (function (seq53728){
var G__53729 = cljs.core.first(seq53728);
var seq53728__$1 = cljs.core.next(seq53728);
var G__53730 = cljs.core.first(seq53728__$1);
var seq53728__$2 = cljs.core.next(seq53728__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53729,G__53730,seq53728__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.or.cljs$lang$macro = true);

var ret__4785__auto___54219 = (function (){
/**
 * Takes predicate/spec-forms, e.g.
 * 
 *   (s/and even? #(< % 42))
 * 
 *   Returns a spec that returns the conformed value. Successive
 *   conformed values propagate through rest of predicates.
 */
cljs.spec.alpha$macros.and = (function cljs$spec$alpha$macros$and(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54220 = arguments.length;
var i__4737__auto___54226 = (0);
while(true){
if((i__4737__auto___54226 < len__4736__auto___54220)){
args__4742__auto__.push((arguments[i__4737__auto___54226]));

var G__54228 = (i__4737__auto___54226 + (1));
i__4737__auto___54226 = G__54228;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and-spec-impl","cljs.spec.alpha/and-spec-impl",-492178340,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53735_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__53735_SHARP_);
}),pred_forms),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(pred_forms),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.and.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.and.cljs$lang$applyTo = (function (seq53736){
var G__53737 = cljs.core.first(seq53736);
var seq53736__$1 = cljs.core.next(seq53736);
var G__53738 = cljs.core.first(seq53736__$1);
var seq53736__$2 = cljs.core.next(seq53736__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53737,G__53738,seq53736__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.and.cljs$lang$macro = true);

cljs.spec.alpha$macros.res_kind = (function cljs$spec$alpha$macros$res_kind(env,opts){
var map__53745 = opts;
var map__53745__$1 = (((((!((map__53745 == null))))?(((((map__53745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53745):map__53745);
var mopts = map__53745__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53745__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(kind)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mopts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.spec.alpha$macros.res(env,kind)):mopts)], 0));
});
var ret__4785__auto___54247 = (function (){
/**
 * takes a pred and validates collection elements against that pred.
 * 
 *   Note that 'every' does not do exhaustive checking, rather it samples
 *   *coll-check-limit* elements. Nor (as a result) does it do any
 *   conforming of elements. 'explain' will report at most *coll-error-limit*
 *   problems.  Thus 'every' should be suitable for potentially large
 *   collections.
 * 
 *   Takes several kwargs options that further constrain the collection:
 * 
 *   :kind - a pred that the collection type must satisfy, e.g. vector?
 *        (default nil) Note that if :kind is specified and :into is
 *        not, this pred must generate in order for every to generate.
 *   :count - specifies coll has exactly this count (default nil)
 *   :min-count, :max-count - coll has count (<= min-count count max-count) (defaults nil)
 *   :distinct - all the elements are distinct (default nil)
 * 
 *   And additional args that control gen
 * 
 *   :gen-max - the maximum coll size to generate (default 20)
 *   :into - one of [], (), {}, #{} - the default collection to generate into
 *    (default same as :kind if supplied, else []
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator
 * 
 *   See also - coll-of, every-kv
 */
cljs.spec.alpha$macros.every = (function cljs$spec$alpha$macros$every(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54248 = arguments.length;
var i__4737__auto___54249 = (0);
while(true){
if((i__4737__auto___54249 < len__4736__auto___54248)){
args__4742__auto__.push((arguments[i__4737__auto___54249]));

var G__54250 = (i__4737__auto___54249 + (1));
i__4737__auto___54249 = G__54250;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.every.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.every.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,p__53767){
var map__53768 = p__53767;
var map__53768__$1 = (((((!((map__53768 == null))))?(((((map__53768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53768):map__53768);
var opts = map__53768__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445));
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"gen-into","gen-into",-1047890542));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var desc = new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911).cljs$core$IFn$_invoke$arity$1(opts);
var nopts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"gen","gen",142575302),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911)], 0)),new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opts)),null,(1),null))))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),(function (){var or__4126__auto__ = desc;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0)))),null,(1),null)))));
}
})()], 0));
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cpreds = (function (){var G__53777 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,(function (){var or__4126__auto__ = kind;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})(),(new cljs.core.List(null,gx,null,(1),null)),(2),null))], null);
var G__53777__$1 = (cljs.core.truth_(count)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__53777,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",355256728,null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gx,null,(1),null))], 0)))),null,(1),null))], 0))))):G__53777);
var G__53777__$2 = (cljs.core.truth_((function (){var or__4126__auto__ = min_count;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return max_count;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__53777__$1,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,min_count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",355256728,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,max_count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,max_count,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,min_count,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gx,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,max_count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","MAX_INT","cljs.spec.alpha/MAX_INT",1315428963,null),null,(1),null))], 0)))),null,(1),null))], 0))))):G__53777__$1);
if(cljs.core.truth_(distinct)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__53777__$2,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","distinct?","cljs.core/distinct?",-1285807788,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gx,null,(1),null))], 0)))),null,(1),null))], 0)))));
} else {
return G__53777__$2;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every-impl","cljs.spec.alpha/every-impl",30419907,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred,null,(1),null)),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nopts,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gx,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),cpreds))),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.every.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.spec.alpha$macros.every.cljs$lang$applyTo = (function (seq53757){
var G__53758 = cljs.core.first(seq53757);
var seq53757__$1 = cljs.core.next(seq53757);
var G__53759 = cljs.core.first(seq53757__$1);
var seq53757__$2 = cljs.core.next(seq53757__$1);
var G__53760 = cljs.core.first(seq53757__$2);
var seq53757__$3 = cljs.core.next(seq53757__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53758,G__53759,G__53760,seq53757__$3);
}));

return null;
})()
;
(cljs.spec.alpha$macros.every.cljs$lang$macro = true);

var ret__4785__auto___54267 = (function (){
/**
 * like 'every' but takes separate key and val preds and works on associative collections.
 * 
 *   Same options as 'every', :into defaults to {}
 * 
 *   See also - map-of
 */
cljs.spec.alpha$macros.every_kv = (function cljs$spec$alpha$macros$every_kv(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54268 = arguments.length;
var i__4737__auto___54269 = (0);
while(true){
if((i__4737__auto___54269 < len__4736__auto___54268)){
args__4742__auto__.push((arguments[i__4737__auto___54269]));

var G__54270 = (i__4737__auto___54269 + (1));
i__4737__auto___54269 = G__54270;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.spec.alpha$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every-kv","cljs.spec.alpha/every-kv",-133428374,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,kpred),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,vpred),null,(1),null)),cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),(new cljs.core.List(null,kpred,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,vpred,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"i__53797__auto__","i__53797__auto__",-888767496,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__53798__auto__","v__53798__auto__",1269841899,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__53798__auto__","v__53798__auto__",1269841899,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"into","into",-150836029),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,desc,null,(1),null))))),null,(1),null)),opts], 0))));
}));

(cljs.spec.alpha$macros.every_kv.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.spec.alpha$macros.every_kv.cljs$lang$applyTo = (function (seq53802){
var G__53803 = cljs.core.first(seq53802);
var seq53802__$1 = cljs.core.next(seq53802);
var G__53804 = cljs.core.first(seq53802__$1);
var seq53802__$2 = cljs.core.next(seq53802__$1);
var G__53805 = cljs.core.first(seq53802__$2);
var seq53802__$3 = cljs.core.next(seq53802__$2);
var G__53806 = cljs.core.first(seq53802__$3);
var seq53802__$4 = cljs.core.next(seq53802__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53803,G__53804,G__53805,G__53806,seq53802__$4);
}));

return null;
})()
;
(cljs.spec.alpha$macros.every_kv.cljs$lang$macro = true);

var ret__4785__auto___54271 = (function (){
/**
 * Returns a spec for a collection of items satisfying pred. Unlike
 *   generator will fill an empty init-coll.
 * 
 *   Same options as 'every'. conform will produce a collection
 *   corresponding to :into if supplied, else will match the input collection,
 *   avoiding rebuilding when possible.
 * 
 *   Same options as 'every'.
 * 
 *   See also - every, map-of
 */
cljs.spec.alpha$macros.coll_of = (function cljs$spec$alpha$macros$coll_of(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54272 = arguments.length;
var i__4737__auto___54273 = (0);
while(true){
if((i__4737__auto___54273 < len__4736__auto___54272)){
args__4742__auto__.push((arguments[i__4737__auto___54273]));

var G__54274 = (i__4737__auto___54273 + (1));
i__4737__auto___54273 = G__54274;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,desc,null,(1),null))))),null,(1),null)),opts], 0))));
}));

(cljs.spec.alpha$macros.coll_of.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.spec.alpha$macros.coll_of.cljs$lang$applyTo = (function (seq53819){
var G__53820 = cljs.core.first(seq53819);
var seq53819__$1 = cljs.core.next(seq53819);
var G__53821 = cljs.core.first(seq53819__$1);
var seq53819__$2 = cljs.core.next(seq53819__$1);
var G__53822 = cljs.core.first(seq53819__$2);
var seq53819__$3 = cljs.core.next(seq53819__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53820,G__53821,G__53822,seq53819__$3);
}));

return null;
})()
;
(cljs.spec.alpha$macros.coll_of.cljs$lang$macro = true);

var ret__4785__auto___54283 = (function (){
/**
 * Returns a spec for a map whose keys satisfy kpred and vals satisfy
 *   vpred. Unlike 'every-kv', map-of will exhaustively conform every
 *   value.
 * 
 *   Same options as 'every', :kind defaults to map?, with the addition of:
 * 
 *   :conform-keys - conform keys as well as values (default false)
 * 
 *   See also - every-kv
 */
cljs.spec.alpha$macros.map_of = (function cljs$spec$alpha$macros$map_of(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54286 = arguments.length;
var i__4737__auto___54287 = (0);
while(true){
if((i__4737__auto___54287 < len__4736__auto___54286)){
args__4742__auto__.push((arguments[i__4737__auto___54287]));

var G__54288 = (i__4737__auto___54287 + (1));
i__4737__auto___54287 = G__54288;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.spec.alpha$macros.map_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.map_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,kpred),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,vpred),null,(1),null)),cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every-kv","cljs.spec.alpha/every-kv",-133428374,null),null,(1),null)),(new cljs.core.List(null,kpred,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,vpred,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"kind","kind",-717265803),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,desc,null,(1),null))))),null,(1),null)),opts], 0))));
}));

(cljs.spec.alpha$macros.map_of.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.spec.alpha$macros.map_of.cljs$lang$applyTo = (function (seq53827){
var G__53828 = cljs.core.first(seq53827);
var seq53827__$1 = cljs.core.next(seq53827);
var G__53829 = cljs.core.first(seq53827__$1);
var seq53827__$2 = cljs.core.next(seq53827__$1);
var G__53830 = cljs.core.first(seq53827__$2);
var seq53827__$3 = cljs.core.next(seq53827__$2);
var G__53831 = cljs.core.first(seq53827__$3);
var seq53827__$4 = cljs.core.next(seq53827__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53828,G__53829,G__53830,G__53831,seq53827__$4);
}));

return null;
})()
;
(cljs.spec.alpha$macros.map_of.cljs$lang$macro = true);

var ret__4785__auto___54294 = /**
 * Returns a regex op that matches zero or more values matching
 *   pred. Produces a vector of matches iff there is at least one match
 */
cljs.spec.alpha$macros._STAR_ = (function cljs$spec$alpha$macros$_STAR_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","rep-impl","cljs.spec.alpha/rep-impl",272857093,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred_form,null,(1),null))], 0))));
});
(cljs.spec.alpha$macros._STAR_.cljs$lang$macro = true);

var ret__4785__auto___54296 = /**
 * Returns a regex op that matches one or more values matching
 *   pred. Produces a vector of matches
 */
cljs.spec.alpha$macros._PLUS_ = (function cljs$spec$alpha$macros$_PLUS_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","rep+impl","cljs.spec.alpha/rep+impl",1883292654,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred_form,null,(1),null))], 0))));
});
(cljs.spec.alpha$macros._PLUS_.cljs$lang$macro = true);

var ret__4785__auto___54313 = /**
 * Returns a regex op that matches zero or one value matching
 *   pred. Produces a single value (not a collection) if matched.
 */
cljs.spec.alpha$macros._QMARK_ = (function cljs$spec$alpha$macros$_QMARK_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","maybe-impl","cljs.spec.alpha/maybe-impl",1618854020,null),null,(1),null)),(new cljs.core.List(null,pred_form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form),null,(1),null))))),null,(1),null))], 0))));
});
(cljs.spec.alpha$macros._QMARK_.cljs$lang$macro = true);

var ret__4785__auto___54321 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/alt :even even? :small #(< % 42))
 * 
 *   Returns a regex op that returns a map entry containing the key of the
 *   first matching pred and the corresponding value. Thus the
 *   'key' and 'val' functions can be used to refer generically to the
 *   components of the tagged return.
 */
cljs.spec.alpha$macros.alt = (function cljs$spec$alpha$macros$alt(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54322 = arguments.length;
var i__4737__auto___54323 = (0);
while(true){
if((i__4737__auto___54323 < len__4736__auto___54322)){
args__4742__auto__.push((arguments[i__4737__auto___54323]));

var G__54327 = (i__4737__auto___54323 + (1));
i__4737__auto___54323 = G__54327;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.alt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.alt.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53848_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__53848_SHARP_);
}),pred_forms);
if(((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys)))){
} else {
throw (new Error(["Assert failed: ","alt expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","alt-impl","cljs.spec.alpha/alt-impl",1852741609,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred_forms,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.alt.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.alt.cljs$lang$applyTo = (function (seq53850){
var G__53851 = cljs.core.first(seq53850);
var seq53850__$1 = cljs.core.next(seq53850);
var G__53852 = cljs.core.first(seq53850__$1);
var seq53850__$2 = cljs.core.next(seq53850__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53851,G__53852,seq53850__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.alt.cljs$lang$macro = true);

var ret__4785__auto___54462 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/cat :e even? :o odd?)
 * 
 *   Returns a regex op that matches (all) values in sequence, returning a map
 *   containing the keys of each pred and the corresponding value.
 */
cljs.spec.alpha$macros.cat = (function cljs$spec$alpha$macros$cat(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54464 = arguments.length;
var i__4737__auto___54465 = (0);
while(true){
if((i__4737__auto___54465 < len__4736__auto___54464)){
args__4742__auto__.push((arguments[i__4737__auto___54465]));

var G__54469 = (i__4737__auto___54465 + (1));
i__4737__auto___54465 = G__54469;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53863_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__53863_SHARP_);
}),pred_forms);
if(((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys)))){
} else {
throw (new Error(["Assert failed: ","cat expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","cat-impl","cljs.spec.alpha/cat-impl",1256350867,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred_forms,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.cat.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.cat.cljs$lang$applyTo = (function (seq53864){
var G__53865 = cljs.core.first(seq53864);
var seq53864__$1 = cljs.core.next(seq53864);
var G__53866 = cljs.core.first(seq53864__$1);
var seq53864__$2 = cljs.core.next(seq53864__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53865,G__53866,seq53864__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.cat.cljs$lang$macro = true);

var ret__4785__auto___54475 = (function (){
/**
 * takes a regex op re, and predicates. Returns a regex-op that consumes
 *   input as per re but subjects the resulting value to the
 *   conjunction of the predicates, and any conforming they might perform.
 */
cljs.spec.alpha$macros._AMPERSAND_ = (function cljs$spec$alpha$macros$_AMPERSAND_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54477 = arguments.length;
var i__4737__auto___54478 = (0);
while(true){
if((i__4737__auto___54478 < len__4736__auto___54477)){
args__4742__auto__.push((arguments[i__4737__auto___54478]));

var G__54479 = (i__4737__auto___54478 + (1));
i__4737__auto___54478 = G__54479;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,re,preds){
var pv = cljs.core.vec(preds);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","amp-impl","cljs.spec.alpha/amp-impl",1419577313,null),null,(1),null)),(new cljs.core.List(null,re,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,re),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,pv,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53873_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__53873_SHARP_);
}),pv),null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$applyTo = (function (seq53874){
var G__53875 = cljs.core.first(seq53874);
var seq53874__$1 = cljs.core.next(seq53874);
var G__53876 = cljs.core.first(seq53874__$1);
var seq53874__$2 = cljs.core.next(seq53874__$1);
var G__53877 = cljs.core.first(seq53874__$2);
var seq53874__$3 = cljs.core.next(seq53874__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53875,G__53876,G__53877,seq53874__$3);
}));

return null;
})()
;
(cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$macro = true);

var ret__4785__auto___54487 = (function (){
/**
 * takes a predicate function with the semantics of conform i.e. it should return either a
 *   (possibly converted) value or :cljs.spec.alpha/invalid, and returns a
 *   spec that uses it as a predicate/conformer. Optionally takes a
 *   second fn that does unform of result of first
 */
cljs.spec.alpha$macros.conformer = (function cljs$spec$alpha$macros$conformer(var_args){
var G__53891 = arguments.length;
switch (G__53891) {
case 3:
return cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",69764672,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,f),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,f,unf){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",69764672,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,f),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,unf),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,unf,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.conformer.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(cljs.spec.alpha$macros.conformer.cljs$lang$macro = true);

var ret__4785__auto___54502 = (function (){
/**
 * takes :args :ret and (optional) :fn kwargs whose values are preds
 *   and returns a spec whose conform/explain take a fn and validates it
 *   using generative testing. The conformed value is always the fn itself.
 * 
 *   See 'fdef' for a single operation that creates an fspec and
 *   registers it, as well as a full description of :args, :ret and :fn
 * 
 *   fspecs can generate functions that validate the arguments and
 *   fabricate a return value compliant with the :ret spec, ignoring
 *   the :fn spec if present.
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args
 *   that returns a test.check generator.
 */
cljs.spec.alpha$macros.fspec = (function cljs$spec$alpha$macros$fspec(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54504 = arguments.length;
var i__4737__auto___54505 = (0);
while(true){
if((i__4737__auto___54505 < len__4736__auto___54504)){
args__4742__auto__.push((arguments[i__4737__auto___54505]));

var G__54506 = (i__4737__auto___54505 + (1));
i__4737__auto___54505 = G__54506;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.fspec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.fspec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__53908){
var map__53909 = p__53908;
var map__53909__$1 = (((((!((map__53909 == null))))?(((((map__53909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53909):map__53909);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53909__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53909__$1,new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53909__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53909__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var env = _AMPERSAND_env;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec-impl","cljs.spec.alpha/fspec-impl",-1748020611,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(env,args),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(env,ret),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,fn,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(env,fn),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.fspec.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.fspec.cljs$lang$applyTo = (function (seq53898){
var G__53899 = cljs.core.first(seq53898);
var seq53898__$1 = cljs.core.next(seq53898);
var G__53900 = cljs.core.first(seq53898__$1);
var seq53898__$2 = cljs.core.next(seq53898__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53899,G__53900,seq53898__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.fspec.cljs$lang$macro = true);

var ret__4785__auto___54583 = (function (){
/**
 * takes one or more preds and returns a spec for a tuple, a vector
 *   where each element conforms to the corresponding pred. Each element
 *   will be referred to in paths using its ordinal.
 */
cljs.spec.alpha$macros.tuple = (function cljs$spec$alpha$macros$tuple(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54584 = arguments.length;
var i__4737__auto___54585 = (0);
while(true){
if((i__4737__auto___54585 < len__4736__auto___54584)){
args__4742__auto__.push((arguments[i__4737__auto___54585]));

var G__54586 = (i__4737__auto___54585 + (1));
i__4737__auto___54585 = G__54586;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.tuple.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,preds){
if((!(cljs.core.empty_QMARK_(preds)))){
} else {
throw (new Error("Assert failed: (not (empty? preds))"));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple-impl","cljs.spec.alpha/tuple-impl",113790282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53916_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__53916_SHARP_);
}),preds),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(preds),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.tuple.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.tuple.cljs$lang$applyTo = (function (seq53918){
var G__53919 = cljs.core.first(seq53918);
var seq53918__$1 = cljs.core.next(seq53918);
var G__53920 = cljs.core.first(seq53918__$1);
var seq53918__$2 = cljs.core.next(seq53918__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53919,G__53920,seq53918__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.tuple.cljs$lang$macro = true);

var ret__4785__auto___54587 = (function (){
/**
 * Takes a symbol naming a function, and one or more of the following:
 * 
 *   :args A regex spec for the function arguments as they were a list to be
 *  passed to apply - in this way, a single spec can handle functions with
 *  multiple arities
 *   :ret A spec for the function's return value
 *   :fn A spec of the relationship between args and ret - the
 *  value passed is {:args conformed-args :ret conformed-ret} and is
 *  expected to contain predicates that relate those values
 * 
 *   Qualifies fn-sym with resolve, or using *ns* if no resolution found.
 *   Registers an fspec in the global registry, where it can be retrieved
 *   by calling get-spec with the var or fully-qualified symbol.
 * 
 *   Once registered, function specs are included in doc, checked by
 *   instrument, tested by the runner cljs.spec.test.alpha/check, and (if
 *   a macro) used to explain errors during macroexpansion.
 * 
 *   Note that :fn specs require the presence of :args and :ret specs to
 *   conform values, and so :fn specs will be ignored if :args or :ret
 *   are missing.
 * 
 *   Returns the qualified fn-sym.
 * 
 *   For example, to register function specs for the symbol function:
 * 
 *   (s/fdef cljs.core/symbol
 *  :args (s/alt :separate (s/cat :ns string? :n string?)
 *               :str string?
 *               :sym symbol?)
 *  :ret symbol?)
 */
cljs.spec.alpha$macros.fdef = (function cljs$spec$alpha$macros$fdef(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54589 = arguments.length;
var i__4737__auto___54590 = (0);
while(true){
if((i__4737__auto___54590 < len__4736__auto___54589)){
args__4742__auto__.push((arguments[i__4737__auto___54590]));

var G__54591 = (i__4737__auto___54590 + (1));
i__4737__auto___54590 = G__54591;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.fdef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.fdef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fn_sym,specs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","def","cljs.spec.alpha/def",1122970404,null),null,(1),null)),(new cljs.core.List(null,fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),null,(1),null)),specs))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.fdef.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.spec.alpha$macros.fdef.cljs$lang$applyTo = (function (seq53931){
var G__53932 = cljs.core.first(seq53931);
var seq53931__$1 = cljs.core.next(seq53931);
var G__53933 = cljs.core.first(seq53931__$1);
var seq53931__$2 = cljs.core.next(seq53931__$1);
var G__53934 = cljs.core.first(seq53931__$2);
var seq53931__$3 = cljs.core.next(seq53931__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53932,G__53933,G__53934,seq53931__$3);
}));

return null;
})()
;
(cljs.spec.alpha$macros.fdef.cljs$lang$macro = true);

var ret__4785__auto___54618 = (function (){
/**
 * takes the same arguments as spec/keys and returns a regex op that matches sequences of key/values,
 *   converts them into a map, and conforms that map with a corresponding
 *   spec/keys call:
 * 
 *   user=> (s/conform (s/keys :req-un [::a ::c]) {:a 1 :c 2})
 *   {:a 1, :c 2}
 *   user=> (s/conform (s/keys* :req-un [::a ::c]) [:a 1 :c 2])
 *   {:a 1, :c 2}
 * 
 *   the resulting regex op can be composed into a larger regex:
 * 
 *   user=> (s/conform (s/cat :i1 integer? :m (s/keys* :req-un [::a ::c]) :i2 integer?) [42 :a 1 :c 2 :d 4 99])
 *   {:i1 42, :m {:a 1, :c 2, :d 4}, :i2 99}
 */
cljs.spec.alpha$macros.keys_STAR_ = (function cljs$spec$alpha$macros$keys_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54620 = arguments.length;
var i__4737__auto___54621 = (0);
while(true){
if((i__4737__auto___54621 < len__4736__auto___54620)){
args__4742__auto__.push((arguments[i__4737__auto___54621]));

var G__54626 = (i__4737__auto___54621 + (1));
i__4737__auto___54621 = G__54626;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kspecs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"mspec__53944__auto__","mspec__53944__auto__",-1260498486,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),null,(1),null)),kspecs))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mspec__53944__auto__","mspec__53944__auto__",-1260498486,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","fmap","cljs.spec.gen.alpha/fmap",1863255061,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"m__53945__auto__","m__53945__auto__",-767631781,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"m__53945__auto__","m__53945__auto__",-767631781,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mspec__53944__auto__","mspec__53944__auto__",-1260498486,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.keys_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.keys_STAR_.cljs$lang$applyTo = (function (seq53946){
var G__53947 = cljs.core.first(seq53946);
var seq53946__$1 = cljs.core.next(seq53946);
var G__53948 = cljs.core.first(seq53946__$1);
var seq53946__$2 = cljs.core.next(seq53946__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53947,G__53948,seq53946__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.keys_STAR_.cljs$lang$macro = true);

var ret__4785__auto___54710 = /**
 * returns a spec that accepts nil and values satisfiying pred
 */
cljs.spec.alpha$macros.nilable = (function cljs$spec$alpha$macros$nilable(_AMPERSAND_form,_AMPERSAND_env,pred){
var pf = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nilable-impl","cljs.spec.alpha/nilable-impl",1785777257,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
});
(cljs.spec.alpha$macros.nilable.cljs$lang$macro = true);

var ret__4785__auto___54711 = /**
 * Returns a spec that validates insts in the range from start
 *   (inclusive) to end (exclusive).
 */
cljs.spec.alpha$macros.inst_in = (function cljs$spec$alpha$macros$inst_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"st__53982__auto__","st__53982__auto__",259378548,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",-515575156,null),null,(1),null)),(new cljs.core.List(null,start,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"et__53983__auto__","et__53983__auto__",1350047814,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",-515575156,null),null,(1),null)),(new cljs.core.List(null,end,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mkdate__53984__auto__","mkdate__53984__auto__",-1829584393,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"d__53985__auto__","d__53985__auto__",-493097810,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"d__53985__auto__","d__53985__auto__",-493097810,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inst?","cljs.core/inst?",1216133710,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__53977__53987__auto__","p1__53977__53987__auto__",-1786198140,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","inst-in-range?","cljs.spec.alpha/inst-in-range?",-1154968958,null),null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,end,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__53977__53987__auto__","p1__53977__53987__auto__",-1786198140,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"gen","gen",142575302),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","fmap","cljs.spec.gen.alpha/fmap",1863255061,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mkdate__53984__auto__","mkdate__53984__auto__",-1829584393,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","large-integer*","cljs.spec.gen.alpha/large-integer*",-227289663,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"min","min",444991522),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"st__53982__auto__","st__53982__auto__",259378548,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"max","max",61366548),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"et__53983__auto__","et__53983__auto__",1350047814,null),null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.spec.alpha$macros.inst_in.cljs$lang$macro = true);

var ret__4785__auto___54830 = /**
 * Returns a spec that validates fixed precision integers in the
 *   range from start (inclusive) to end (exclusive).
 */
cljs.spec.alpha$macros.int_in = (function cljs$spec$alpha$macros$int_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__54010__54011__auto__","p1__54010__54011__auto__",987860337,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","int-in-range?","cljs.spec.alpha/int-in-range?",92650900,null),null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,end,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__54010__54011__auto__","p1__54010__54011__auto__",987860337,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"gen","gen",142575302),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","large-integer*","cljs.spec.gen.alpha/large-integer*",-227289663,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"min","min",444991522),null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"max","max",61366548),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dec","cljs.core/dec",-443230268,null),null,(1),null)),(new cljs.core.List(null,end,null,(1),null))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.spec.alpha$macros.int_in.cljs$lang$macro = true);

var ret__4785__auto___54876 = (function (){
/**
 * Specs a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity allowed (default true)
 *  :NaN?      - whether NaN allowed (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 */
cljs.spec.alpha$macros.double_in = (function cljs$spec$alpha$macros$double_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54882 = arguments.length;
var i__4737__auto___54883 = (0);
while(true){
if((i__4737__auto___54883 < len__4736__auto___54882)){
args__4742__auto__.push((arguments[i__4737__auto___54883]));

var G__54885 = (i__4737__auto___54883 + (1));
i__4737__auto___54883 = G__54885;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.double_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.double_in.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__54031){
var map__54035 = p__54031;
var map__54035__$1 = (((((!((map__54035 == null))))?(((((map__54035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54035):map__54035);
var m = map__54035__$1;
var infinite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54035__$1,new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),true);
var NaN_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54035__$1,new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),true);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54035__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54035__$1,new cljs.core.Keyword(null,"max","max",61366548));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",1757455529,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(infinite_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__54016#","p1__54016#",1655489134,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"infinite?","infinite?",-377355081,null),new cljs.core.Symbol(null,"p1__54016#","p1__54016#",1655489134,null))))], null)),(cljs.core.truth_(NaN_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__54017#","p1__54017#",916005180,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("js","isNaN","js/isNaN",74901299,null),new cljs.core.Symbol(null,"p1__54017#","p1__54017#",916005180,null))))], null)),(cljs.core.truth_(max)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__54018__54019__auto__","p1__54018__54019__auto__",-1049523275,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__54018__54019__auto__","p1__54018__54019__auto__",-1049523275,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,max,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))):null),(cljs.core.truth_(min)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__54020__54021__auto__","p1__54020__54021__auto__",-62779924,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,min,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__54020__54021__auto__","p1__54020__54021__auto__",-62779924,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))):null)], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"gen","gen",142575302),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","double*","cljs.spec.gen.alpha/double*",416548942,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.double_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.double_in.cljs$lang$applyTo = (function (seq54022){
var G__54023 = cljs.core.first(seq54022);
var seq54022__$1 = cljs.core.next(seq54022);
var G__54024 = cljs.core.first(seq54022__$1);
var seq54022__$2 = cljs.core.next(seq54022__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54023,G__54024,seq54022__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.double_in.cljs$lang$macro = true);

var ret__4785__auto___55002 = (function (){
/**
 * Takes map-validating specs (e.g. 'keys' specs) and
 *   returns a spec that returns a conformed map satisfying all of the
 *   specs.  Successive conformed values propagate through rest of
 *   predicates. Unlike 'and', merge can generate maps satisfying the
 *   union of the predicates.
 */
cljs.spec.alpha$macros.merge = (function cljs$spec$alpha$macros$merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___55003 = arguments.length;
var i__4737__auto___55004 = (0);
while(true){
if((i__4737__auto___55004 < len__4736__auto___55003)){
args__4742__auto__.push((arguments[i__4737__auto___55004]));

var G__55009 = (i__4737__auto___55004 + (1));
i__4737__auto___55004 = G__55009;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.merge.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","merge-spec-impl","cljs.spec.alpha/merge-spec-impl",-1254890813,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54065_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__54065_SHARP_);
}),pred_forms),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(pred_forms),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.merge.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.merge.cljs$lang$applyTo = (function (seq54067){
var G__54068 = cljs.core.first(seq54067);
var seq54067__$1 = cljs.core.next(seq54067);
var G__54069 = cljs.core.first(seq54067__$1);
var seq54067__$2 = cljs.core.next(seq54067__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54068,G__54069,seq54067__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.merge.cljs$lang$macro = true);

var ret__4785__auto___55010 = (function (){
/**
 * exercises the fn named by sym (a symbol) by applying it to
 *   n (default 10) generated samples of its args spec. When fspec is
 *   supplied its arg spec is used, and sym-or-f can be a fn.  Returns a
 *   sequence of tuples of [args ret]. 
 */
cljs.spec.alpha$macros.exercise_fn = (function cljs$spec$alpha$macros$exercise_fn(var_args){
var G__54084 = arguments.length;
switch (G__54084) {
case 3:
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","exercise-fn","cljs.spec.alpha/exercise-fn",295872941,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(10),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","exercise-fn","cljs.spec.alpha/exercise-fn",295872941,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n,fspec){
var sym__$1 = (function (){var G__54109 = sym;
if(((cljs.core.sequential_QMARK_(sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))))){
return cljs.core.second(G__54109);
} else {
return G__54109;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fspec__54077__auto__","fspec__54077__auto__",-1588731346,null),null,(1),null)),(new cljs.core.List(null,((cljs.core.not(fspec))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","get-spec","cljs.spec.alpha/get-spec",785931985,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.api.resolve(_AMPERSAND_env,sym__$1)),null,(1),null))))),null,(1),null))))):fspec),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"f__54078__auto__","f__54078__auto__",1041608292,null),null,(1),null)),(new cljs.core.List(null,sym__$1,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"arg-spec__54079__auto__","arg-spec__54079__auto__",546202624,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fspec__54077__auto__","fspec__54077__auto__",-1588731346,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fspec__54077__auto__","fspec__54077__auto__",-1588731346,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"args__54080__auto__","args__54080__auto__",1026324742,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","sample","cljs.spec.gen.alpha/sample",-2084840585,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arg-spec__54079__auto__","arg-spec__54079__auto__",546202624,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"args__54080__auto__","args__54080__auto__",1026324742,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__54078__auto__","f__54078__auto__",1041608292,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__54080__auto__","args__54080__auto__",1026324742,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,"No :args spec found, can't generate",null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.exercise_fn.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(cljs.spec.alpha$macros.exercise_fn.cljs$lang$macro = true);

var ret__4785__auto___55091 = cljs.spec.alpha$macros.init_compile_asserts = (function cljs$spec$alpha$macros$init_compile_asserts(_AMPERSAND_form,_AMPERSAND_env){
var compile_asserts = cljs.core.not(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))));
return compile_asserts;
});
(cljs.spec.alpha$macros.init_compile_asserts.cljs$lang$macro = true);

var ret__4785__auto___55101 = /**
 * spec-checking assert expression. Returns x if x is valid? according
 * to spec, else throws an error with explain-data plus ::failure of
 * :assertion-failed.
 * Can be disabled at either compile time or runtime:
 * If *compile-asserts* is false at compile time, compiles to x. Defaults
 * to the negation value of the ':elide-asserts' compiler option, or true if
 * not set.
 * If (check-asserts?) is false at runtime, always returns x. Defaults to
 * value of 'cljs.spec.alpha/*runtime-asserts*', or false if not set. You can
 * toggle check-asserts? with (check-asserts bool).
 */
cljs.spec.alpha$macros.assert = (function cljs$spec$alpha$macros$assert(_AMPERSAND_form,_AMPERSAND_env,spec,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*compile-asserts*","cljs.spec.alpha/*compile-asserts*",-1808061440,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","assert*","cljs.spec.alpha/assert*",464381070,null),null,(1),null)),(new cljs.core.List(null,spec,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))], 0))));
});
(cljs.spec.alpha$macros.assert.cljs$lang$macro = true);


//# sourceMappingURL=cljs.spec.alpha$macros.js.map
