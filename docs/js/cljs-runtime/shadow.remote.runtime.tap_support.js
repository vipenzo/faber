goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__47718,p__47719){
var map__47720 = p__47718;
var map__47720__$1 = (((((!((map__47720 == null))))?(((((map__47720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47720):map__47720);
var svc = map__47720__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47720__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47720__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47720__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47721 = p__47719;
var map__47721__$1 = (((((!((map__47721 == null))))?(((((map__47721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47721):map__47721);
var msg = map__47721__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47721__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47721__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47721__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47721__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__47730,p__47731){
var map__47732 = p__47730;
var map__47732__$1 = (((((!((map__47732 == null))))?(((((map__47732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47732):map__47732);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47732__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__47733 = p__47731;
var map__47733__$1 = (((((!((map__47733 == null))))?(((((map__47733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47733):map__47733);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47733__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__47742,p__47743){
var map__47745 = p__47742;
var map__47745__$1 = (((((!((map__47745 == null))))?(((((map__47745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47745):map__47745);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47745__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47745__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__47746 = p__47743;
var map__47746__$1 = (((((!((map__47746 == null))))?(((((map__47746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47746):map__47746);
var msg = map__47746__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47746__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__47754,tid){
var map__47755 = p__47754;
var map__47755__$1 = (((((!((map__47755 == null))))?(((((map__47755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47755):map__47755);
var svc = map__47755__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47755__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__47766 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__47767 = null;
var count__47768 = (0);
var i__47769 = (0);
while(true){
if((i__47769 < count__47768)){
var vec__47780 = chunk__47767.cljs$core$IIndexed$_nth$arity$2(null,i__47769);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47780,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47780,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47796 = seq__47766;
var G__47797 = chunk__47767;
var G__47798 = count__47768;
var G__47799 = (i__47769 + (1));
seq__47766 = G__47796;
chunk__47767 = G__47797;
count__47768 = G__47798;
i__47769 = G__47799;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47766);
if(temp__5735__auto__){
var seq__47766__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47766__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__47766__$1);
var G__47800 = cljs.core.chunk_rest(seq__47766__$1);
var G__47801 = c__4556__auto__;
var G__47802 = cljs.core.count(c__4556__auto__);
var G__47803 = (0);
seq__47766 = G__47800;
chunk__47767 = G__47801;
count__47768 = G__47802;
i__47769 = G__47803;
continue;
} else {
var vec__47785 = cljs.core.first(seq__47766__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47785,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47785,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__47804 = cljs.core.next(seq__47766__$1);
var G__47805 = null;
var G__47806 = (0);
var G__47807 = (0);
seq__47766 = G__47804;
chunk__47767 = G__47805;
count__47768 = G__47806;
i__47769 = G__47807;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__47757_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__47757_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__47758_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__47758_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__47759_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__47759_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__47760_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__47760_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__47789){
var map__47790 = p__47789;
var map__47790__$1 = (((((!((map__47790 == null))))?(((((map__47790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47790):map__47790);
var svc = map__47790__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47790__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47790__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
