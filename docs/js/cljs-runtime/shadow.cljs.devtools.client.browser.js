goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___48159 = arguments.length;
var i__4737__auto___48160 = (0);
while(true){
if((i__4737__auto___48160 < len__4736__auto___48159)){
args__4742__auto__.push((arguments[i__4737__auto___48160]));

var G__48161 = (i__4737__auto___48160 + (1));
i__4737__auto___48160 = G__48161;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47949){
var G__47950 = cljs.core.first(seq47949);
var seq47949__$1 = cljs.core.next(seq47949);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47950,seq47949__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47954 = cljs.core.seq(sources);
var chunk__47955 = null;
var count__47956 = (0);
var i__47957 = (0);
while(true){
if((i__47957 < count__47956)){
var map__47967 = chunk__47955.cljs$core$IIndexed$_nth$arity$2(null,i__47957);
var map__47967__$1 = (((((!((map__47967 == null))))?(((((map__47967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47967):map__47967);
var src = map__47967__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47967__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47967__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47967__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47967__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47969){var e_48162 = e47969;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48162);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48162.message)].join('')));
}

var G__48163 = seq__47954;
var G__48164 = chunk__47955;
var G__48165 = count__47956;
var G__48166 = (i__47957 + (1));
seq__47954 = G__48163;
chunk__47955 = G__48164;
count__47956 = G__48165;
i__47957 = G__48166;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47954);
if(temp__5735__auto__){
var seq__47954__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47954__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47954__$1);
var G__48167 = cljs.core.chunk_rest(seq__47954__$1);
var G__48168 = c__4556__auto__;
var G__48169 = cljs.core.count(c__4556__auto__);
var G__48170 = (0);
seq__47954 = G__48167;
chunk__47955 = G__48168;
count__47956 = G__48169;
i__47957 = G__48170;
continue;
} else {
var map__47978 = cljs.core.first(seq__47954__$1);
var map__47978__$1 = (((((!((map__47978 == null))))?(((((map__47978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47978):map__47978);
var src = map__47978__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47978__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47978__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47978__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47978__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47981){var e_48171 = e47981;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48171);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48171.message)].join('')));
}

var G__48172 = cljs.core.next(seq__47954__$1);
var G__48173 = null;
var G__48174 = (0);
var G__48175 = (0);
seq__47954 = G__48172;
chunk__47955 = G__48173;
count__47956 = G__48174;
i__47957 = G__48175;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__47982 = cljs.core.seq(js_requires);
var chunk__47983 = null;
var count__47984 = (0);
var i__47985 = (0);
while(true){
if((i__47985 < count__47984)){
var js_ns = chunk__47983.cljs$core$IIndexed$_nth$arity$2(null,i__47985);
var require_str_48177 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48177);


var G__48178 = seq__47982;
var G__48179 = chunk__47983;
var G__48180 = count__47984;
var G__48181 = (i__47985 + (1));
seq__47982 = G__48178;
chunk__47983 = G__48179;
count__47984 = G__48180;
i__47985 = G__48181;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47982);
if(temp__5735__auto__){
var seq__47982__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47982__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47982__$1);
var G__48182 = cljs.core.chunk_rest(seq__47982__$1);
var G__48183 = c__4556__auto__;
var G__48184 = cljs.core.count(c__4556__auto__);
var G__48185 = (0);
seq__47982 = G__48182;
chunk__47983 = G__48183;
count__47984 = G__48184;
i__47985 = G__48185;
continue;
} else {
var js_ns = cljs.core.first(seq__47982__$1);
var require_str_48186 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48186);


var G__48187 = cljs.core.next(seq__47982__$1);
var G__48188 = null;
var G__48189 = (0);
var G__48190 = (0);
seq__47982 = G__48187;
chunk__47983 = G__48188;
count__47984 = G__48189;
i__47985 = G__48190;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47991){
var map__47992 = p__47991;
var map__47992__$1 = (((((!((map__47992 == null))))?(((((map__47992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47992):map__47992);
var msg = map__47992__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47992__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47992__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47994(s__47995){
return (new cljs.core.LazySeq(null,(function (){
var s__47995__$1 = s__47995;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47995__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__48000 = cljs.core.first(xs__6292__auto__);
var map__48000__$1 = (((((!((map__48000 == null))))?(((((map__48000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48000):map__48000);
var src = map__48000__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48000__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48000__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__47995__$1,map__48000,map__48000__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47992,map__47992__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47994_$_iter__47996(s__47997){
return (new cljs.core.LazySeq(null,((function (s__47995__$1,map__48000,map__48000__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47992,map__47992__$1,msg,info,reload_info){
return (function (){
var s__47997__$1 = s__47997;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__47997__$1);
if(temp__5735__auto____$1){
var s__47997__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47997__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47997__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47999 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47998 = (0);
while(true){
if((i__47998 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__47998);
cljs.core.chunk_append(b__47999,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48192 = (i__47998 + (1));
i__47998 = G__48192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47999),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47994_$_iter__47996(cljs.core.chunk_rest(s__47997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47999),null);
}
} else {
var warning = cljs.core.first(s__47997__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47994_$_iter__47996(cljs.core.rest(s__47997__$2)));
}
} else {
return null;
}
break;
}
});})(s__47995__$1,map__48000,map__48000__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47992,map__47992__$1,msg,info,reload_info))
,null,null));
});})(s__47995__$1,map__48000,map__48000__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47992,map__47992__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47994(cljs.core.rest(s__47995__$1)));
} else {
var G__48193 = cljs.core.rest(s__47995__$1);
s__47995__$1 = G__48193;
continue;
}
} else {
var G__48194 = cljs.core.rest(s__47995__$1);
s__47995__$1 = G__48194;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__48003_48195 = cljs.core.seq(warnings);
var chunk__48004_48196 = null;
var count__48005_48197 = (0);
var i__48006_48198 = (0);
while(true){
if((i__48006_48198 < count__48005_48197)){
var map__48012_48200 = chunk__48004_48196.cljs$core$IIndexed$_nth$arity$2(null,i__48006_48198);
var map__48012_48201__$1 = (((((!((map__48012_48200 == null))))?(((((map__48012_48200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48012_48200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48012_48200):map__48012_48200);
var w_48202 = map__48012_48201__$1;
var msg_48203__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48012_48201__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48012_48201__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48012_48201__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48206 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48012_48201__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48206)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48204),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48205),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48203__$1)].join(''));


var G__48207 = seq__48003_48195;
var G__48208 = chunk__48004_48196;
var G__48209 = count__48005_48197;
var G__48210 = (i__48006_48198 + (1));
seq__48003_48195 = G__48207;
chunk__48004_48196 = G__48208;
count__48005_48197 = G__48209;
i__48006_48198 = G__48210;
continue;
} else {
var temp__5735__auto___48211 = cljs.core.seq(seq__48003_48195);
if(temp__5735__auto___48211){
var seq__48003_48212__$1 = temp__5735__auto___48211;
if(cljs.core.chunked_seq_QMARK_(seq__48003_48212__$1)){
var c__4556__auto___48213 = cljs.core.chunk_first(seq__48003_48212__$1);
var G__48214 = cljs.core.chunk_rest(seq__48003_48212__$1);
var G__48215 = c__4556__auto___48213;
var G__48216 = cljs.core.count(c__4556__auto___48213);
var G__48217 = (0);
seq__48003_48195 = G__48214;
chunk__48004_48196 = G__48215;
count__48005_48197 = G__48216;
i__48006_48198 = G__48217;
continue;
} else {
var map__48014_48218 = cljs.core.first(seq__48003_48212__$1);
var map__48014_48219__$1 = (((((!((map__48014_48218 == null))))?(((((map__48014_48218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48014_48218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48014_48218):map__48014_48218);
var w_48220 = map__48014_48219__$1;
var msg_48221__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48014_48219__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48014_48219__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48014_48219__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48014_48219__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48224)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48222),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48223),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48221__$1)].join(''));


var G__48229 = cljs.core.next(seq__48003_48212__$1);
var G__48230 = null;
var G__48231 = (0);
var G__48232 = (0);
seq__48003_48195 = G__48229;
chunk__48004_48196 = G__48230;
count__48005_48197 = G__48231;
i__48006_48198 = G__48232;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47990_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47990_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__48018){
var map__48019 = p__48018;
var map__48019__$1 = (((((!((map__48019 == null))))?(((((map__48019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48019):map__48019);
var msg = map__48019__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48019__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__48022 = cljs.core.seq(updates);
var chunk__48024 = null;
var count__48025 = (0);
var i__48026 = (0);
while(true){
if((i__48026 < count__48025)){
var path = chunk__48024.cljs$core$IIndexed$_nth$arity$2(null,i__48026);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48057_48234 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48060_48235 = null;
var count__48061_48236 = (0);
var i__48062_48237 = (0);
while(true){
if((i__48062_48237 < count__48061_48236)){
var node_48238 = chunk__48060_48235.cljs$core$IIndexed$_nth$arity$2(null,i__48062_48237);
var path_match_48239 = shadow.cljs.devtools.client.browser.match_paths(node_48238.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48239)){
var new_link_48240 = (function (){var G__48068 = node_48238.cloneNode(true);
G__48068.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48239),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48068;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48239], 0));

goog.dom.insertSiblingAfter(new_link_48240,node_48238);

goog.dom.removeNode(node_48238);


var G__48241 = seq__48057_48234;
var G__48242 = chunk__48060_48235;
var G__48243 = count__48061_48236;
var G__48244 = (i__48062_48237 + (1));
seq__48057_48234 = G__48241;
chunk__48060_48235 = G__48242;
count__48061_48236 = G__48243;
i__48062_48237 = G__48244;
continue;
} else {
var G__48245 = seq__48057_48234;
var G__48246 = chunk__48060_48235;
var G__48247 = count__48061_48236;
var G__48248 = (i__48062_48237 + (1));
seq__48057_48234 = G__48245;
chunk__48060_48235 = G__48246;
count__48061_48236 = G__48247;
i__48062_48237 = G__48248;
continue;
}
} else {
var temp__5735__auto___48249 = cljs.core.seq(seq__48057_48234);
if(temp__5735__auto___48249){
var seq__48057_48250__$1 = temp__5735__auto___48249;
if(cljs.core.chunked_seq_QMARK_(seq__48057_48250__$1)){
var c__4556__auto___48251 = cljs.core.chunk_first(seq__48057_48250__$1);
var G__48252 = cljs.core.chunk_rest(seq__48057_48250__$1);
var G__48253 = c__4556__auto___48251;
var G__48254 = cljs.core.count(c__4556__auto___48251);
var G__48255 = (0);
seq__48057_48234 = G__48252;
chunk__48060_48235 = G__48253;
count__48061_48236 = G__48254;
i__48062_48237 = G__48255;
continue;
} else {
var node_48256 = cljs.core.first(seq__48057_48250__$1);
var path_match_48257 = shadow.cljs.devtools.client.browser.match_paths(node_48256.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48257)){
var new_link_48258 = (function (){var G__48073 = node_48256.cloneNode(true);
G__48073.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48257),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48073;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48257], 0));

goog.dom.insertSiblingAfter(new_link_48258,node_48256);

goog.dom.removeNode(node_48256);


var G__48259 = cljs.core.next(seq__48057_48250__$1);
var G__48260 = null;
var G__48261 = (0);
var G__48262 = (0);
seq__48057_48234 = G__48259;
chunk__48060_48235 = G__48260;
count__48061_48236 = G__48261;
i__48062_48237 = G__48262;
continue;
} else {
var G__48263 = cljs.core.next(seq__48057_48250__$1);
var G__48264 = null;
var G__48265 = (0);
var G__48266 = (0);
seq__48057_48234 = G__48263;
chunk__48060_48235 = G__48264;
count__48061_48236 = G__48265;
i__48062_48237 = G__48266;
continue;
}
}
} else {
}
}
break;
}


var G__48267 = seq__48022;
var G__48268 = chunk__48024;
var G__48269 = count__48025;
var G__48270 = (i__48026 + (1));
seq__48022 = G__48267;
chunk__48024 = G__48268;
count__48025 = G__48269;
i__48026 = G__48270;
continue;
} else {
var G__48271 = seq__48022;
var G__48272 = chunk__48024;
var G__48273 = count__48025;
var G__48274 = (i__48026 + (1));
seq__48022 = G__48271;
chunk__48024 = G__48272;
count__48025 = G__48273;
i__48026 = G__48274;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48022);
if(temp__5735__auto__){
var seq__48022__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48022__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48022__$1);
var G__48275 = cljs.core.chunk_rest(seq__48022__$1);
var G__48276 = c__4556__auto__;
var G__48277 = cljs.core.count(c__4556__auto__);
var G__48278 = (0);
seq__48022 = G__48275;
chunk__48024 = G__48276;
count__48025 = G__48277;
i__48026 = G__48278;
continue;
} else {
var path = cljs.core.first(seq__48022__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48074_48279 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48077_48280 = null;
var count__48078_48281 = (0);
var i__48079_48282 = (0);
while(true){
if((i__48079_48282 < count__48078_48281)){
var node_48284 = chunk__48077_48280.cljs$core$IIndexed$_nth$arity$2(null,i__48079_48282);
var path_match_48285 = shadow.cljs.devtools.client.browser.match_paths(node_48284.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48285)){
var new_link_48287 = (function (){var G__48084 = node_48284.cloneNode(true);
G__48084.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48285),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48084;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48285], 0));

goog.dom.insertSiblingAfter(new_link_48287,node_48284);

goog.dom.removeNode(node_48284);


var G__48290 = seq__48074_48279;
var G__48291 = chunk__48077_48280;
var G__48292 = count__48078_48281;
var G__48293 = (i__48079_48282 + (1));
seq__48074_48279 = G__48290;
chunk__48077_48280 = G__48291;
count__48078_48281 = G__48292;
i__48079_48282 = G__48293;
continue;
} else {
var G__48294 = seq__48074_48279;
var G__48295 = chunk__48077_48280;
var G__48296 = count__48078_48281;
var G__48297 = (i__48079_48282 + (1));
seq__48074_48279 = G__48294;
chunk__48077_48280 = G__48295;
count__48078_48281 = G__48296;
i__48079_48282 = G__48297;
continue;
}
} else {
var temp__5735__auto___48298__$1 = cljs.core.seq(seq__48074_48279);
if(temp__5735__auto___48298__$1){
var seq__48074_48299__$1 = temp__5735__auto___48298__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48074_48299__$1)){
var c__4556__auto___48300 = cljs.core.chunk_first(seq__48074_48299__$1);
var G__48301 = cljs.core.chunk_rest(seq__48074_48299__$1);
var G__48302 = c__4556__auto___48300;
var G__48303 = cljs.core.count(c__4556__auto___48300);
var G__48304 = (0);
seq__48074_48279 = G__48301;
chunk__48077_48280 = G__48302;
count__48078_48281 = G__48303;
i__48079_48282 = G__48304;
continue;
} else {
var node_48305 = cljs.core.first(seq__48074_48299__$1);
var path_match_48306 = shadow.cljs.devtools.client.browser.match_paths(node_48305.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48306)){
var new_link_48307 = (function (){var G__48087 = node_48305.cloneNode(true);
G__48087.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48306),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48087;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48306], 0));

goog.dom.insertSiblingAfter(new_link_48307,node_48305);

goog.dom.removeNode(node_48305);


var G__48308 = cljs.core.next(seq__48074_48299__$1);
var G__48309 = null;
var G__48310 = (0);
var G__48311 = (0);
seq__48074_48279 = G__48308;
chunk__48077_48280 = G__48309;
count__48078_48281 = G__48310;
i__48079_48282 = G__48311;
continue;
} else {
var G__48313 = cljs.core.next(seq__48074_48299__$1);
var G__48314 = null;
var G__48316 = (0);
var G__48317 = (0);
seq__48074_48279 = G__48313;
chunk__48077_48280 = G__48314;
count__48078_48281 = G__48316;
i__48079_48282 = G__48317;
continue;
}
}
} else {
}
}
break;
}


var G__48319 = cljs.core.next(seq__48022__$1);
var G__48320 = null;
var G__48321 = (0);
var G__48322 = (0);
seq__48022 = G__48319;
chunk__48024 = G__48320;
count__48025 = G__48321;
i__48026 = G__48322;
continue;
} else {
var G__48323 = cljs.core.next(seq__48022__$1);
var G__48324 = null;
var G__48325 = (0);
var G__48326 = (0);
seq__48022 = G__48323;
chunk__48024 = G__48324;
count__48025 = G__48325;
i__48026 = G__48326;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48091){
var map__48092 = p__48091;
var map__48092__$1 = (((((!((map__48092 == null))))?(((((map__48092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48092):map__48092);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48092__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.client_info = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null);
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48103){
var map__48104 = p__48103;
var map__48104__$1 = (((((!((map__48104 == null))))?(((((map__48104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48104):map__48104);
var _ = map__48104__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48104__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48106,done,error){
var map__48107 = p__48106;
var map__48107__$1 = (((((!((map__48107 == null))))?(((((map__48107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48107):map__48107);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48107__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48114,done,error){
var map__48118 = p__48114;
var map__48118__$1 = (((((!((map__48118 == null))))?(((((map__48118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48118):map__48118);
var msg = map__48118__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48118__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48118__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48118__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48125){
var map__48126 = p__48125;
var map__48126__$1 = (((((!((map__48126 == null))))?(((((map__48126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48126):map__48126);
var src = map__48126__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48126__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48132 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48132) : done.call(null,G__48132));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48136){
var map__48137 = p__48136;
var map__48137__$1 = (((((!((map__48137 == null))))?(((((map__48137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48137):map__48137);
var msg__$1 = map__48137__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48137__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48139){var ex = e48139;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48140){
var map__48141 = p__48140;
var map__48141__$1 = (((((!((map__48141 == null))))?(((((map__48141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48141):map__48141);
var env = map__48141__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48141__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__48144){
var map__48145 = p__48144;
var map__48145__$1 = (((((!((map__48145 == null))))?(((((map__48145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48145):map__48145);
var msg = map__48145__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48145__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48150){
var map__48151 = p__48150;
var map__48151__$1 = (((((!((map__48151 == null))))?(((((map__48151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48151):map__48151);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48151__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48151__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__48156){
var map__48157 = p__48156;
var map__48157__$1 = (((((!((map__48157 == null))))?(((((map__48157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48157):map__48157);
var svc = map__48157__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48157__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
