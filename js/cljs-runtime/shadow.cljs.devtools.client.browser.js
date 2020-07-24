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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47946){
var G__47947 = cljs.core.first(seq47946);
var seq47946__$1 = cljs.core.next(seq47946);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47947,seq47946__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47949 = cljs.core.seq(sources);
var chunk__47950 = null;
var count__47951 = (0);
var i__47952 = (0);
while(true){
if((i__47952 < count__47951)){
var map__47970 = chunk__47950.cljs$core$IIndexed$_nth$arity$2(null,i__47952);
var map__47970__$1 = (((((!((map__47970 == null))))?(((((map__47970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47970):map__47970);
var src = map__47970__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47970__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47970__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47970__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47970__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47972){var e_48164 = e47972;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48164);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48164.message)].join('')));
}

var G__48167 = seq__47949;
var G__48168 = chunk__47950;
var G__48169 = count__47951;
var G__48170 = (i__47952 + (1));
seq__47949 = G__48167;
chunk__47950 = G__48168;
count__47951 = G__48169;
i__47952 = G__48170;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47949);
if(temp__5735__auto__){
var seq__47949__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47949__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47949__$1);
var G__48171 = cljs.core.chunk_rest(seq__47949__$1);
var G__48172 = c__4556__auto__;
var G__48173 = cljs.core.count(c__4556__auto__);
var G__48174 = (0);
seq__47949 = G__48171;
chunk__47950 = G__48172;
count__47951 = G__48173;
i__47952 = G__48174;
continue;
} else {
var map__47974 = cljs.core.first(seq__47949__$1);
var map__47974__$1 = (((((!((map__47974 == null))))?(((((map__47974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47974):map__47974);
var src = map__47974__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47974__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47974__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47974__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47974__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47976){var e_48178 = e47976;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48178);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48178.message)].join('')));
}

var G__48180 = cljs.core.next(seq__47949__$1);
var G__48181 = null;
var G__48182 = (0);
var G__48183 = (0);
seq__47949 = G__48180;
chunk__47950 = G__48181;
count__47951 = G__48182;
i__47952 = G__48183;
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
var seq__47979 = cljs.core.seq(js_requires);
var chunk__47980 = null;
var count__47981 = (0);
var i__47982 = (0);
while(true){
if((i__47982 < count__47981)){
var js_ns = chunk__47980.cljs$core$IIndexed$_nth$arity$2(null,i__47982);
var require_str_48184 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48184);


var G__48185 = seq__47979;
var G__48186 = chunk__47980;
var G__48187 = count__47981;
var G__48188 = (i__47982 + (1));
seq__47979 = G__48185;
chunk__47980 = G__48186;
count__47981 = G__48187;
i__47982 = G__48188;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47979);
if(temp__5735__auto__){
var seq__47979__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47979__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47979__$1);
var G__48189 = cljs.core.chunk_rest(seq__47979__$1);
var G__48190 = c__4556__auto__;
var G__48191 = cljs.core.count(c__4556__auto__);
var G__48192 = (0);
seq__47979 = G__48189;
chunk__47980 = G__48190;
count__47981 = G__48191;
i__47982 = G__48192;
continue;
} else {
var js_ns = cljs.core.first(seq__47979__$1);
var require_str_48193 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48193);


var G__48194 = cljs.core.next(seq__47979__$1);
var G__48195 = null;
var G__48196 = (0);
var G__48197 = (0);
seq__47979 = G__48194;
chunk__47980 = G__48195;
count__47981 = G__48196;
i__47982 = G__48197;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47985){
var map__47986 = p__47985;
var map__47986__$1 = (((((!((map__47986 == null))))?(((((map__47986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47986):map__47986);
var msg = map__47986__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47986__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47986__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47989(s__47990){
return (new cljs.core.LazySeq(null,(function (){
var s__47990__$1 = s__47990;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__47990__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__47995 = cljs.core.first(xs__6292__auto__);
var map__47995__$1 = (((((!((map__47995 == null))))?(((((map__47995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47995):map__47995);
var src = map__47995__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47995__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47995__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__47990__$1,map__47995,map__47995__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47986,map__47986__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47989_$_iter__47991(s__47992){
return (new cljs.core.LazySeq(null,((function (s__47990__$1,map__47995,map__47995__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47986,map__47986__$1,msg,info,reload_info){
return (function (){
var s__47992__$1 = s__47992;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__47992__$1);
if(temp__5735__auto____$1){
var s__47992__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47992__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__47992__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__47994 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__47993 = (0);
while(true){
if((i__47993 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__47993);
cljs.core.chunk_append(b__47994,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48200 = (i__47993 + (1));
i__47993 = G__48200;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47994),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47989_$_iter__47991(cljs.core.chunk_rest(s__47992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47994),null);
}
} else {
var warning = cljs.core.first(s__47992__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47989_$_iter__47991(cljs.core.rest(s__47992__$2)));
}
} else {
return null;
}
break;
}
});})(s__47990__$1,map__47995,map__47995__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47986,map__47986__$1,msg,info,reload_info))
,null,null));
});})(s__47990__$1,map__47995,map__47995__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__47986,map__47986__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47989(cljs.core.rest(s__47990__$1)));
} else {
var G__48201 = cljs.core.rest(s__47990__$1);
s__47990__$1 = G__48201;
continue;
}
} else {
var G__48202 = cljs.core.rest(s__47990__$1);
s__47990__$1 = G__48202;
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
var seq__48000_48203 = cljs.core.seq(warnings);
var chunk__48001_48204 = null;
var count__48002_48205 = (0);
var i__48003_48206 = (0);
while(true){
if((i__48003_48206 < count__48002_48205)){
var map__48012_48207 = chunk__48001_48204.cljs$core$IIndexed$_nth$arity$2(null,i__48003_48206);
var map__48012_48208__$1 = (((((!((map__48012_48207 == null))))?(((((map__48012_48207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48012_48207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48012_48207):map__48012_48207);
var w_48209 = map__48012_48208__$1;
var msg_48210__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48012_48208__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48012_48208__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48012_48208__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48012_48208__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48213)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48211),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48212),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48210__$1)].join(''));


var G__48215 = seq__48000_48203;
var G__48216 = chunk__48001_48204;
var G__48217 = count__48002_48205;
var G__48218 = (i__48003_48206 + (1));
seq__48000_48203 = G__48215;
chunk__48001_48204 = G__48216;
count__48002_48205 = G__48217;
i__48003_48206 = G__48218;
continue;
} else {
var temp__5735__auto___48219 = cljs.core.seq(seq__48000_48203);
if(temp__5735__auto___48219){
var seq__48000_48220__$1 = temp__5735__auto___48219;
if(cljs.core.chunked_seq_QMARK_(seq__48000_48220__$1)){
var c__4556__auto___48221 = cljs.core.chunk_first(seq__48000_48220__$1);
var G__48222 = cljs.core.chunk_rest(seq__48000_48220__$1);
var G__48223 = c__4556__auto___48221;
var G__48224 = cljs.core.count(c__4556__auto___48221);
var G__48225 = (0);
seq__48000_48203 = G__48222;
chunk__48001_48204 = G__48223;
count__48002_48205 = G__48224;
i__48003_48206 = G__48225;
continue;
} else {
var map__48014_48226 = cljs.core.first(seq__48000_48220__$1);
var map__48014_48227__$1 = (((((!((map__48014_48226 == null))))?(((((map__48014_48226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48014_48226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48014_48226):map__48014_48226);
var w_48228 = map__48014_48227__$1;
var msg_48229__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48014_48227__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48014_48227__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48014_48227__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48014_48227__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48232)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48230),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48231),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48229__$1)].join(''));


var G__48233 = cljs.core.next(seq__48000_48220__$1);
var G__48234 = null;
var G__48235 = (0);
var G__48236 = (0);
seq__48000_48203 = G__48233;
chunk__48001_48204 = G__48234;
count__48002_48205 = G__48235;
i__48003_48206 = G__48236;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47984_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47984_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var seq__48021 = cljs.core.seq(updates);
var chunk__48023 = null;
var count__48024 = (0);
var i__48025 = (0);
while(true){
if((i__48025 < count__48024)){
var path = chunk__48023.cljs$core$IIndexed$_nth$arity$2(null,i__48025);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48058_48238 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48061_48239 = null;
var count__48062_48240 = (0);
var i__48063_48241 = (0);
while(true){
if((i__48063_48241 < count__48062_48240)){
var node_48242 = chunk__48061_48239.cljs$core$IIndexed$_nth$arity$2(null,i__48063_48241);
var path_match_48243 = shadow.cljs.devtools.client.browser.match_paths(node_48242.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48243)){
var new_link_48244 = (function (){var G__48069 = node_48242.cloneNode(true);
G__48069.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48243),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48069;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48243], 0));

goog.dom.insertSiblingAfter(new_link_48244,node_48242);

goog.dom.removeNode(node_48242);


var G__48246 = seq__48058_48238;
var G__48247 = chunk__48061_48239;
var G__48248 = count__48062_48240;
var G__48249 = (i__48063_48241 + (1));
seq__48058_48238 = G__48246;
chunk__48061_48239 = G__48247;
count__48062_48240 = G__48248;
i__48063_48241 = G__48249;
continue;
} else {
var G__48250 = seq__48058_48238;
var G__48251 = chunk__48061_48239;
var G__48252 = count__48062_48240;
var G__48253 = (i__48063_48241 + (1));
seq__48058_48238 = G__48250;
chunk__48061_48239 = G__48251;
count__48062_48240 = G__48252;
i__48063_48241 = G__48253;
continue;
}
} else {
var temp__5735__auto___48254 = cljs.core.seq(seq__48058_48238);
if(temp__5735__auto___48254){
var seq__48058_48255__$1 = temp__5735__auto___48254;
if(cljs.core.chunked_seq_QMARK_(seq__48058_48255__$1)){
var c__4556__auto___48256 = cljs.core.chunk_first(seq__48058_48255__$1);
var G__48257 = cljs.core.chunk_rest(seq__48058_48255__$1);
var G__48258 = c__4556__auto___48256;
var G__48259 = cljs.core.count(c__4556__auto___48256);
var G__48260 = (0);
seq__48058_48238 = G__48257;
chunk__48061_48239 = G__48258;
count__48062_48240 = G__48259;
i__48063_48241 = G__48260;
continue;
} else {
var node_48261 = cljs.core.first(seq__48058_48255__$1);
var path_match_48262 = shadow.cljs.devtools.client.browser.match_paths(node_48261.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48262)){
var new_link_48263 = (function (){var G__48071 = node_48261.cloneNode(true);
G__48071.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48262),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48071;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48262], 0));

goog.dom.insertSiblingAfter(new_link_48263,node_48261);

goog.dom.removeNode(node_48261);


var G__48264 = cljs.core.next(seq__48058_48255__$1);
var G__48265 = null;
var G__48266 = (0);
var G__48267 = (0);
seq__48058_48238 = G__48264;
chunk__48061_48239 = G__48265;
count__48062_48240 = G__48266;
i__48063_48241 = G__48267;
continue;
} else {
var G__48270 = cljs.core.next(seq__48058_48255__$1);
var G__48271 = null;
var G__48272 = (0);
var G__48273 = (0);
seq__48058_48238 = G__48270;
chunk__48061_48239 = G__48271;
count__48062_48240 = G__48272;
i__48063_48241 = G__48273;
continue;
}
}
} else {
}
}
break;
}


var G__48275 = seq__48021;
var G__48276 = chunk__48023;
var G__48277 = count__48024;
var G__48278 = (i__48025 + (1));
seq__48021 = G__48275;
chunk__48023 = G__48276;
count__48024 = G__48277;
i__48025 = G__48278;
continue;
} else {
var G__48279 = seq__48021;
var G__48280 = chunk__48023;
var G__48281 = count__48024;
var G__48282 = (i__48025 + (1));
seq__48021 = G__48279;
chunk__48023 = G__48280;
count__48024 = G__48281;
i__48025 = G__48282;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48021);
if(temp__5735__auto__){
var seq__48021__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48021__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__48021__$1);
var G__48284 = cljs.core.chunk_rest(seq__48021__$1);
var G__48285 = c__4556__auto__;
var G__48286 = cljs.core.count(c__4556__auto__);
var G__48287 = (0);
seq__48021 = G__48284;
chunk__48023 = G__48285;
count__48024 = G__48286;
i__48025 = G__48287;
continue;
} else {
var path = cljs.core.first(seq__48021__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48072_48288 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48075_48289 = null;
var count__48076_48290 = (0);
var i__48077_48291 = (0);
while(true){
if((i__48077_48291 < count__48076_48290)){
var node_48292 = chunk__48075_48289.cljs$core$IIndexed$_nth$arity$2(null,i__48077_48291);
var path_match_48293 = shadow.cljs.devtools.client.browser.match_paths(node_48292.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48293)){
var new_link_48295 = (function (){var G__48084 = node_48292.cloneNode(true);
G__48084.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48293),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48084;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48293], 0));

goog.dom.insertSiblingAfter(new_link_48295,node_48292);

goog.dom.removeNode(node_48292);


var G__48296 = seq__48072_48288;
var G__48297 = chunk__48075_48289;
var G__48298 = count__48076_48290;
var G__48299 = (i__48077_48291 + (1));
seq__48072_48288 = G__48296;
chunk__48075_48289 = G__48297;
count__48076_48290 = G__48298;
i__48077_48291 = G__48299;
continue;
} else {
var G__48300 = seq__48072_48288;
var G__48301 = chunk__48075_48289;
var G__48302 = count__48076_48290;
var G__48303 = (i__48077_48291 + (1));
seq__48072_48288 = G__48300;
chunk__48075_48289 = G__48301;
count__48076_48290 = G__48302;
i__48077_48291 = G__48303;
continue;
}
} else {
var temp__5735__auto___48304__$1 = cljs.core.seq(seq__48072_48288);
if(temp__5735__auto___48304__$1){
var seq__48072_48305__$1 = temp__5735__auto___48304__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48072_48305__$1)){
var c__4556__auto___48306 = cljs.core.chunk_first(seq__48072_48305__$1);
var G__48307 = cljs.core.chunk_rest(seq__48072_48305__$1);
var G__48308 = c__4556__auto___48306;
var G__48309 = cljs.core.count(c__4556__auto___48306);
var G__48310 = (0);
seq__48072_48288 = G__48307;
chunk__48075_48289 = G__48308;
count__48076_48290 = G__48309;
i__48077_48291 = G__48310;
continue;
} else {
var node_48311 = cljs.core.first(seq__48072_48305__$1);
var path_match_48312 = shadow.cljs.devtools.client.browser.match_paths(node_48311.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48312)){
var new_link_48313 = (function (){var G__48087 = node_48311.cloneNode(true);
G__48087.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48312),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48087;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48312], 0));

goog.dom.insertSiblingAfter(new_link_48313,node_48311);

goog.dom.removeNode(node_48311);


var G__48314 = cljs.core.next(seq__48072_48305__$1);
var G__48315 = null;
var G__48316 = (0);
var G__48317 = (0);
seq__48072_48288 = G__48314;
chunk__48075_48289 = G__48315;
count__48076_48290 = G__48316;
i__48077_48291 = G__48317;
continue;
} else {
var G__48318 = cljs.core.next(seq__48072_48305__$1);
var G__48319 = null;
var G__48320 = (0);
var G__48321 = (0);
seq__48072_48288 = G__48318;
chunk__48075_48289 = G__48319;
count__48076_48290 = G__48320;
i__48077_48291 = G__48321;
continue;
}
}
} else {
}
}
break;
}


var G__48322 = cljs.core.next(seq__48021__$1);
var G__48323 = null;
var G__48324 = (0);
var G__48325 = (0);
seq__48021 = G__48322;
chunk__48023 = G__48323;
count__48024 = G__48324;
i__48025 = G__48325;
continue;
} else {
var G__48326 = cljs.core.next(seq__48021__$1);
var G__48327 = null;
var G__48328 = (0);
var G__48329 = (0);
seq__48021 = G__48326;
chunk__48023 = G__48327;
count__48024 = G__48328;
i__48025 = G__48329;
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48098){
var map__48099 = p__48098;
var map__48099__$1 = (((((!((map__48099 == null))))?(((((map__48099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48099):map__48099);
var _ = map__48099__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48099__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48103,done,error){
var map__48104 = p__48103;
var map__48104__$1 = (((((!((map__48104 == null))))?(((((map__48104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48104):map__48104);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48104__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48108,done,error){
var map__48109 = p__48108;
var map__48109__$1 = (((((!((map__48109 == null))))?(((((map__48109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48109):map__48109);
var msg = map__48109__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48109__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48109__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48109__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48111){
var map__48112 = p__48111;
var map__48112__$1 = (((((!((map__48112 == null))))?(((((map__48112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48112):map__48112);
var src = map__48112__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48112__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48117 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48117) : done.call(null,G__48117));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48118){
var map__48119 = p__48118;
var map__48119__$1 = (((((!((map__48119 == null))))?(((((map__48119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48119):map__48119);
var msg__$1 = map__48119__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48119__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48121){var ex = e48121;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48126){
var map__48127 = p__48126;
var map__48127__$1 = (((((!((map__48127 == null))))?(((((map__48127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48127):map__48127);
var env = map__48127__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48127__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__48137){
var map__48138 = p__48137;
var map__48138__$1 = (((((!((map__48138 == null))))?(((((map__48138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48138):map__48138);
var msg = map__48138__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48138__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48144){
var map__48145 = p__48144;
var map__48145__$1 = (((((!((map__48145 == null))))?(((((map__48145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48145):map__48145);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48145__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48145__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__48154){
var map__48155 = p__48154;
var map__48155__$1 = (((((!((map__48155 == null))))?(((((map__48155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48155):map__48155);
var svc = map__48155__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48155__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
