goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38330 = arguments.length;
var i__4737__auto___38331 = (0);
while(true){
if((i__4737__auto___38331 < len__4736__auto___38330)){
args__4742__auto__.push((arguments[i__4737__auto___38331]));

var G__38332 = (i__4737__auto___38331 + (1));
i__4737__auto___38331 = G__38332;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38160){
var G__38161 = cljs.core.first(seq38160);
var seq38160__$1 = cljs.core.next(seq38160);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38161,seq38160__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38164 = cljs.core.seq(sources);
var chunk__38165 = null;
var count__38166 = (0);
var i__38167 = (0);
while(true){
if((i__38167 < count__38166)){
var map__38184 = chunk__38165.cljs$core$IIndexed$_nth$arity$2(null,i__38167);
var map__38184__$1 = (((((!((map__38184 == null))))?(((((map__38184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38184):map__38184);
var src = map__38184__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38184__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38184__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38184__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38184__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38186){var e_38334 = e38186;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38334);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38334.message)].join('')));
}

var G__38335 = seq__38164;
var G__38336 = chunk__38165;
var G__38337 = count__38166;
var G__38338 = (i__38167 + (1));
seq__38164 = G__38335;
chunk__38165 = G__38336;
count__38166 = G__38337;
i__38167 = G__38338;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38164);
if(temp__5735__auto__){
var seq__38164__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38164__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38164__$1);
var G__38339 = cljs.core.chunk_rest(seq__38164__$1);
var G__38340 = c__4556__auto__;
var G__38341 = cljs.core.count(c__4556__auto__);
var G__38342 = (0);
seq__38164 = G__38339;
chunk__38165 = G__38340;
count__38166 = G__38341;
i__38167 = G__38342;
continue;
} else {
var map__38187 = cljs.core.first(seq__38164__$1);
var map__38187__$1 = (((((!((map__38187 == null))))?(((((map__38187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38187):map__38187);
var src = map__38187__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38187__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38187__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38187__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38187__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38190){var e_38343 = e38190;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38343);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38343.message)].join('')));
}

var G__38345 = cljs.core.next(seq__38164__$1);
var G__38346 = null;
var G__38347 = (0);
var G__38348 = (0);
seq__38164 = G__38345;
chunk__38165 = G__38346;
count__38166 = G__38347;
i__38167 = G__38348;
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
var seq__38193 = cljs.core.seq(js_requires);
var chunk__38194 = null;
var count__38195 = (0);
var i__38196 = (0);
while(true){
if((i__38196 < count__38195)){
var js_ns = chunk__38194.cljs$core$IIndexed$_nth$arity$2(null,i__38196);
var require_str_38349 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38349);


var G__38350 = seq__38193;
var G__38351 = chunk__38194;
var G__38352 = count__38195;
var G__38353 = (i__38196 + (1));
seq__38193 = G__38350;
chunk__38194 = G__38351;
count__38195 = G__38352;
i__38196 = G__38353;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38193);
if(temp__5735__auto__){
var seq__38193__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38193__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38193__$1);
var G__38354 = cljs.core.chunk_rest(seq__38193__$1);
var G__38355 = c__4556__auto__;
var G__38356 = cljs.core.count(c__4556__auto__);
var G__38357 = (0);
seq__38193 = G__38354;
chunk__38194 = G__38355;
count__38195 = G__38356;
i__38196 = G__38357;
continue;
} else {
var js_ns = cljs.core.first(seq__38193__$1);
var require_str_38358 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38358);


var G__38359 = cljs.core.next(seq__38193__$1);
var G__38360 = null;
var G__38361 = (0);
var G__38362 = (0);
seq__38193 = G__38359;
chunk__38194 = G__38360;
count__38195 = G__38361;
i__38196 = G__38362;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38199){
var map__38200 = p__38199;
var map__38200__$1 = (((((!((map__38200 == null))))?(((((map__38200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38200):map__38200);
var msg = map__38200__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38200__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38200__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38202(s__38203){
return (new cljs.core.LazySeq(null,(function (){
var s__38203__$1 = s__38203;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38203__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38209 = cljs.core.first(xs__6292__auto__);
var map__38209__$1 = (((((!((map__38209 == null))))?(((((map__38209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38209):map__38209);
var src = map__38209__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38209__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38209__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__38203__$1,map__38209,map__38209__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38200,map__38200__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38202_$_iter__38204(s__38205){
return (new cljs.core.LazySeq(null,((function (s__38203__$1,map__38209,map__38209__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38200,map__38200__$1,msg,info,reload_info){
return (function (){
var s__38205__$1 = s__38205;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38205__$1);
if(temp__5735__auto____$1){
var s__38205__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38205__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38205__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38207 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38206 = (0);
while(true){
if((i__38206 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__38206);
cljs.core.chunk_append(b__38207,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38364 = (i__38206 + (1));
i__38206 = G__38364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38207),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38202_$_iter__38204(cljs.core.chunk_rest(s__38205__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38207),null);
}
} else {
var warning = cljs.core.first(s__38205__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38202_$_iter__38204(cljs.core.rest(s__38205__$2)));
}
} else {
return null;
}
break;
}
});})(s__38203__$1,map__38209,map__38209__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38200,map__38200__$1,msg,info,reload_info))
,null,null));
});})(s__38203__$1,map__38209,map__38209__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38200,map__38200__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38202(cljs.core.rest(s__38203__$1)));
} else {
var G__38366 = cljs.core.rest(s__38203__$1);
s__38203__$1 = G__38366;
continue;
}
} else {
var G__38367 = cljs.core.rest(s__38203__$1);
s__38203__$1 = G__38367;
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
var seq__38213_38368 = cljs.core.seq(warnings);
var chunk__38214_38369 = null;
var count__38215_38370 = (0);
var i__38216_38371 = (0);
while(true){
if((i__38216_38371 < count__38215_38370)){
var map__38221_38372 = chunk__38214_38369.cljs$core$IIndexed$_nth$arity$2(null,i__38216_38371);
var map__38221_38373__$1 = (((((!((map__38221_38372 == null))))?(((((map__38221_38372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38221_38372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38221_38372):map__38221_38372);
var w_38374 = map__38221_38373__$1;
var msg_38375__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38221_38373__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38376 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38221_38373__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38221_38373__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38221_38373__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38378)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38376),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38377),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38375__$1)].join(''));


var G__38379 = seq__38213_38368;
var G__38380 = chunk__38214_38369;
var G__38381 = count__38215_38370;
var G__38382 = (i__38216_38371 + (1));
seq__38213_38368 = G__38379;
chunk__38214_38369 = G__38380;
count__38215_38370 = G__38381;
i__38216_38371 = G__38382;
continue;
} else {
var temp__5735__auto___38383 = cljs.core.seq(seq__38213_38368);
if(temp__5735__auto___38383){
var seq__38213_38384__$1 = temp__5735__auto___38383;
if(cljs.core.chunked_seq_QMARK_(seq__38213_38384__$1)){
var c__4556__auto___38385 = cljs.core.chunk_first(seq__38213_38384__$1);
var G__38386 = cljs.core.chunk_rest(seq__38213_38384__$1);
var G__38387 = c__4556__auto___38385;
var G__38388 = cljs.core.count(c__4556__auto___38385);
var G__38389 = (0);
seq__38213_38368 = G__38386;
chunk__38214_38369 = G__38387;
count__38215_38370 = G__38388;
i__38216_38371 = G__38389;
continue;
} else {
var map__38223_38390 = cljs.core.first(seq__38213_38384__$1);
var map__38223_38391__$1 = (((((!((map__38223_38390 == null))))?(((((map__38223_38390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38223_38390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38223_38390):map__38223_38390);
var w_38392 = map__38223_38391__$1;
var msg_38393__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38223_38391__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38223_38391__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38223_38391__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38223_38391__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38396)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38394),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38395),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38393__$1)].join(''));


var G__38398 = cljs.core.next(seq__38213_38384__$1);
var G__38399 = null;
var G__38400 = (0);
var G__38401 = (0);
seq__38213_38368 = G__38398;
chunk__38214_38369 = G__38399;
count__38215_38370 = G__38400;
i__38216_38371 = G__38401;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38198_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38198_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38227){
var map__38228 = p__38227;
var map__38228__$1 = (((((!((map__38228 == null))))?(((((map__38228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38228):map__38228);
var msg = map__38228__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38228__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__38230 = cljs.core.seq(updates);
var chunk__38232 = null;
var count__38233 = (0);
var i__38234 = (0);
while(true){
if((i__38234 < count__38233)){
var path = chunk__38232.cljs$core$IIndexed$_nth$arity$2(null,i__38234);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38267_38403 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38270_38404 = null;
var count__38271_38405 = (0);
var i__38272_38406 = (0);
while(true){
if((i__38272_38406 < count__38271_38405)){
var node_38407 = chunk__38270_38404.cljs$core$IIndexed$_nth$arity$2(null,i__38272_38406);
var path_match_38408 = shadow.cljs.devtools.client.browser.match_paths(node_38407.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38408)){
var new_link_38409 = (function (){var G__38278 = node_38407.cloneNode(true);
G__38278.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38408),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38278;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38408], 0));

goog.dom.insertSiblingAfter(new_link_38409,node_38407);

goog.dom.removeNode(node_38407);


var G__38410 = seq__38267_38403;
var G__38411 = chunk__38270_38404;
var G__38412 = count__38271_38405;
var G__38413 = (i__38272_38406 + (1));
seq__38267_38403 = G__38410;
chunk__38270_38404 = G__38411;
count__38271_38405 = G__38412;
i__38272_38406 = G__38413;
continue;
} else {
var G__38414 = seq__38267_38403;
var G__38415 = chunk__38270_38404;
var G__38416 = count__38271_38405;
var G__38417 = (i__38272_38406 + (1));
seq__38267_38403 = G__38414;
chunk__38270_38404 = G__38415;
count__38271_38405 = G__38416;
i__38272_38406 = G__38417;
continue;
}
} else {
var temp__5735__auto___38418 = cljs.core.seq(seq__38267_38403);
if(temp__5735__auto___38418){
var seq__38267_38419__$1 = temp__5735__auto___38418;
if(cljs.core.chunked_seq_QMARK_(seq__38267_38419__$1)){
var c__4556__auto___38420 = cljs.core.chunk_first(seq__38267_38419__$1);
var G__38421 = cljs.core.chunk_rest(seq__38267_38419__$1);
var G__38422 = c__4556__auto___38420;
var G__38423 = cljs.core.count(c__4556__auto___38420);
var G__38424 = (0);
seq__38267_38403 = G__38421;
chunk__38270_38404 = G__38422;
count__38271_38405 = G__38423;
i__38272_38406 = G__38424;
continue;
} else {
var node_38425 = cljs.core.first(seq__38267_38419__$1);
var path_match_38426 = shadow.cljs.devtools.client.browser.match_paths(node_38425.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38426)){
var new_link_38427 = (function (){var G__38279 = node_38425.cloneNode(true);
G__38279.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38426),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38279;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38426], 0));

goog.dom.insertSiblingAfter(new_link_38427,node_38425);

goog.dom.removeNode(node_38425);


var G__38429 = cljs.core.next(seq__38267_38419__$1);
var G__38430 = null;
var G__38431 = (0);
var G__38432 = (0);
seq__38267_38403 = G__38429;
chunk__38270_38404 = G__38430;
count__38271_38405 = G__38431;
i__38272_38406 = G__38432;
continue;
} else {
var G__38433 = cljs.core.next(seq__38267_38419__$1);
var G__38434 = null;
var G__38435 = (0);
var G__38436 = (0);
seq__38267_38403 = G__38433;
chunk__38270_38404 = G__38434;
count__38271_38405 = G__38435;
i__38272_38406 = G__38436;
continue;
}
}
} else {
}
}
break;
}


var G__38437 = seq__38230;
var G__38438 = chunk__38232;
var G__38439 = count__38233;
var G__38440 = (i__38234 + (1));
seq__38230 = G__38437;
chunk__38232 = G__38438;
count__38233 = G__38439;
i__38234 = G__38440;
continue;
} else {
var G__38441 = seq__38230;
var G__38442 = chunk__38232;
var G__38443 = count__38233;
var G__38444 = (i__38234 + (1));
seq__38230 = G__38441;
chunk__38232 = G__38442;
count__38233 = G__38443;
i__38234 = G__38444;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38230);
if(temp__5735__auto__){
var seq__38230__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38230__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38230__$1);
var G__38445 = cljs.core.chunk_rest(seq__38230__$1);
var G__38446 = c__4556__auto__;
var G__38447 = cljs.core.count(c__4556__auto__);
var G__38448 = (0);
seq__38230 = G__38445;
chunk__38232 = G__38446;
count__38233 = G__38447;
i__38234 = G__38448;
continue;
} else {
var path = cljs.core.first(seq__38230__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38281_38449 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38284_38450 = null;
var count__38285_38451 = (0);
var i__38286_38452 = (0);
while(true){
if((i__38286_38452 < count__38285_38451)){
var node_38453 = chunk__38284_38450.cljs$core$IIndexed$_nth$arity$2(null,i__38286_38452);
var path_match_38454 = shadow.cljs.devtools.client.browser.match_paths(node_38453.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38454)){
var new_link_38455 = (function (){var G__38292 = node_38453.cloneNode(true);
G__38292.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38454),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38292;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38454], 0));

goog.dom.insertSiblingAfter(new_link_38455,node_38453);

goog.dom.removeNode(node_38453);


var G__38456 = seq__38281_38449;
var G__38457 = chunk__38284_38450;
var G__38458 = count__38285_38451;
var G__38459 = (i__38286_38452 + (1));
seq__38281_38449 = G__38456;
chunk__38284_38450 = G__38457;
count__38285_38451 = G__38458;
i__38286_38452 = G__38459;
continue;
} else {
var G__38460 = seq__38281_38449;
var G__38461 = chunk__38284_38450;
var G__38462 = count__38285_38451;
var G__38463 = (i__38286_38452 + (1));
seq__38281_38449 = G__38460;
chunk__38284_38450 = G__38461;
count__38285_38451 = G__38462;
i__38286_38452 = G__38463;
continue;
}
} else {
var temp__5735__auto___38464__$1 = cljs.core.seq(seq__38281_38449);
if(temp__5735__auto___38464__$1){
var seq__38281_38465__$1 = temp__5735__auto___38464__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38281_38465__$1)){
var c__4556__auto___38466 = cljs.core.chunk_first(seq__38281_38465__$1);
var G__38467 = cljs.core.chunk_rest(seq__38281_38465__$1);
var G__38468 = c__4556__auto___38466;
var G__38469 = cljs.core.count(c__4556__auto___38466);
var G__38470 = (0);
seq__38281_38449 = G__38467;
chunk__38284_38450 = G__38468;
count__38285_38451 = G__38469;
i__38286_38452 = G__38470;
continue;
} else {
var node_38471 = cljs.core.first(seq__38281_38465__$1);
var path_match_38472 = shadow.cljs.devtools.client.browser.match_paths(node_38471.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38472)){
var new_link_38473 = (function (){var G__38294 = node_38471.cloneNode(true);
G__38294.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38472),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38294;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38472], 0));

goog.dom.insertSiblingAfter(new_link_38473,node_38471);

goog.dom.removeNode(node_38471);


var G__38474 = cljs.core.next(seq__38281_38465__$1);
var G__38475 = null;
var G__38476 = (0);
var G__38477 = (0);
seq__38281_38449 = G__38474;
chunk__38284_38450 = G__38475;
count__38285_38451 = G__38476;
i__38286_38452 = G__38477;
continue;
} else {
var G__38478 = cljs.core.next(seq__38281_38465__$1);
var G__38479 = null;
var G__38480 = (0);
var G__38481 = (0);
seq__38281_38449 = G__38478;
chunk__38284_38450 = G__38479;
count__38285_38451 = G__38480;
i__38286_38452 = G__38481;
continue;
}
}
} else {
}
}
break;
}


var G__38482 = cljs.core.next(seq__38230__$1);
var G__38483 = null;
var G__38484 = (0);
var G__38485 = (0);
seq__38230 = G__38482;
chunk__38232 = G__38483;
count__38233 = G__38484;
i__38234 = G__38485;
continue;
} else {
var G__38486 = cljs.core.next(seq__38230__$1);
var G__38487 = null;
var G__38488 = (0);
var G__38489 = (0);
seq__38230 = G__38486;
chunk__38232 = G__38487;
count__38233 = G__38488;
i__38234 = G__38489;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38295){
var map__38296 = p__38295;
var map__38296__$1 = (((((!((map__38296 == null))))?(((((map__38296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38296):map__38296);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38296__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38299){
var map__38300 = p__38299;
var map__38300__$1 = (((((!((map__38300 == null))))?(((((map__38300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38300):map__38300);
var _ = map__38300__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38300__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38302,done,error){
var map__38303 = p__38302;
var map__38303__$1 = (((((!((map__38303 == null))))?(((((map__38303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38303):map__38303);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38303__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38305,done,error){
var map__38307 = p__38305;
var map__38307__$1 = (((((!((map__38307 == null))))?(((((map__38307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38307):map__38307);
var msg = map__38307__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38307__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38307__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38307__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38309){
var map__38310 = p__38309;
var map__38310__$1 = (((((!((map__38310 == null))))?(((((map__38310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38310):map__38310);
var src = map__38310__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38310__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38312 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38312) : done.call(null,G__38312));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38313){
var map__38314 = p__38313;
var map__38314__$1 = (((((!((map__38314 == null))))?(((((map__38314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38314):map__38314);
var msg__$1 = map__38314__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38314__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38316){var ex = e38316;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38317){
var map__38318 = p__38317;
var map__38318__$1 = (((((!((map__38318 == null))))?(((((map__38318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38318):map__38318);
var env = map__38318__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38318__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__38320){
var map__38321 = p__38320;
var map__38321__$1 = (((((!((map__38321 == null))))?(((((map__38321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38321):map__38321);
var msg = map__38321__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38321__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38323){
var map__38324 = p__38323;
var map__38324__$1 = (((((!((map__38324 == null))))?(((((map__38324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38324):map__38324);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38324__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38324__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__38326){
var map__38327 = p__38326;
var map__38327__$1 = (((((!((map__38327 == null))))?(((((map__38327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38327):map__38327);
var svc = map__38327__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38327__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
