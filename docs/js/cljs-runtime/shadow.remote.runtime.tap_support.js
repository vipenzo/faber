goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37935,p__37936){
var map__37937 = p__37935;
var map__37937__$1 = (((((!((map__37937 == null))))?(((((map__37937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37937):map__37937);
var svc = map__37937__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37937__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37937__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37937__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37938 = p__37936;
var map__37938__$1 = (((((!((map__37938 == null))))?(((((map__37938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37938):map__37938);
var msg = map__37938__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37938__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37938__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37938__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37938__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37941,p__37942){
var map__37943 = p__37941;
var map__37943__$1 = (((((!((map__37943 == null))))?(((((map__37943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37943):map__37943);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37943__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37944 = p__37942;
var map__37944__$1 = (((((!((map__37944 == null))))?(((((map__37944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37944.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37944):map__37944);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37944__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37947,p__37948){
var map__37949 = p__37947;
var map__37949__$1 = (((((!((map__37949 == null))))?(((((map__37949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37949):map__37949);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37950 = p__37948;
var map__37950__$1 = (((((!((map__37950 == null))))?(((((map__37950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37950):map__37950);
var msg = map__37950__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37950__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37958,tid){
var map__37960 = p__37958;
var map__37960__$1 = (((((!((map__37960 == null))))?(((((map__37960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37960):map__37960);
var svc = map__37960__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37960__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37974 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37975 = null;
var count__37976 = (0);
var i__37977 = (0);
while(true){
if((i__37977 < count__37976)){
var vec__37988 = chunk__37975.cljs$core$IIndexed$_nth$arity$2(null,i__37977);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37988,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37988,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38013 = seq__37974;
var G__38014 = chunk__37975;
var G__38015 = count__37976;
var G__38016 = (i__37977 + (1));
seq__37974 = G__38013;
chunk__37975 = G__38014;
count__37976 = G__38015;
i__37977 = G__38016;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37974);
if(temp__5735__auto__){
var seq__37974__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37974__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37974__$1);
var G__38017 = cljs.core.chunk_rest(seq__37974__$1);
var G__38018 = c__4556__auto__;
var G__38019 = cljs.core.count(c__4556__auto__);
var G__38020 = (0);
seq__37974 = G__38017;
chunk__37975 = G__38018;
count__37976 = G__38019;
i__37977 = G__38020;
continue;
} else {
var vec__37991 = cljs.core.first(seq__37974__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37991,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37991,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38021 = cljs.core.next(seq__37974__$1);
var G__38022 = null;
var G__38023 = (0);
var G__38024 = (0);
seq__37974 = G__38021;
chunk__37975 = G__38022;
count__37976 = G__38023;
i__37977 = G__38024;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37965_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37965_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37966_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37966_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37967_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37967_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37968_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37968_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37999){
var map__38000 = p__37999;
var map__38000__$1 = (((((!((map__38000 == null))))?(((((map__38000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38000):map__38000);
var svc = map__38000__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38000__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
