goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__51386 = s;
var map__51386__$1 = (((((!((map__51386 == null))))?(((((map__51386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51386):map__51386);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51386__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51386__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__51390 = info;
var map__51391 = G__51390;
var map__51391__$1 = (((((!((map__51391 == null))))?(((((map__51391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51391):map__51391);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51391__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__51390__$1 = G__51390;
while(true){
var d__$2 = d__$1;
var map__51395 = G__51390__$1;
var map__51395__$1 = (((((!((map__51395 == null))))?(((((map__51395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51395):map__51395);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51395__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__52484 = (d__$2 + (1));
var G__52485 = shadow__$2;
d__$1 = G__52484;
G__51390__$1 = G__52485;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__51398){
var map__51399 = p__51398;
var map__51399__$1 = (((((!((map__51399 == null))))?(((((map__51399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51399):map__51399);
var name_var = map__51399__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51399__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51399__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__51401 = info;
var map__51401__$1 = (((((!((map__51401 == null))))?(((((map__51401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51401):map__51401);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51401__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51401__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__51404 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__51404) : cljs.compiler.munge.call(null,G__51404));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__51410 = arguments.length;
switch (G__51410) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__51413 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__51413.cljs$core$IFn$_invoke$arity$1 ? fexpr__51413.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__51413.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__51425 = cp;
switch (G__51425) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__51426_52501 = cljs.core.seq(s);
var chunk__51427_52502 = null;
var count__51428_52503 = (0);
var i__51429_52504 = (0);
while(true){
if((i__51429_52504 < count__51428_52503)){
var c_52505 = chunk__51427_52502.cljs$core$IIndexed$_nth$arity$2(null,i__51429_52504);
sb.append(cljs.compiler.escape_char(c_52505));


var G__52506 = seq__51426_52501;
var G__52507 = chunk__51427_52502;
var G__52508 = count__51428_52503;
var G__52509 = (i__51429_52504 + (1));
seq__51426_52501 = G__52506;
chunk__51427_52502 = G__52507;
count__51428_52503 = G__52508;
i__51429_52504 = G__52509;
continue;
} else {
var temp__5735__auto___52510 = cljs.core.seq(seq__51426_52501);
if(temp__5735__auto___52510){
var seq__51426_52511__$1 = temp__5735__auto___52510;
if(cljs.core.chunked_seq_QMARK_(seq__51426_52511__$1)){
var c__4556__auto___52512 = cljs.core.chunk_first(seq__51426_52511__$1);
var G__52513 = cljs.core.chunk_rest(seq__51426_52511__$1);
var G__52514 = c__4556__auto___52512;
var G__52515 = cljs.core.count(c__4556__auto___52512);
var G__52516 = (0);
seq__51426_52501 = G__52513;
chunk__51427_52502 = G__52514;
count__51428_52503 = G__52515;
i__51429_52504 = G__52516;
continue;
} else {
var c_52517 = cljs.core.first(seq__51426_52511__$1);
sb.append(cljs.compiler.escape_char(c_52517));


var G__52518 = cljs.core.next(seq__51426_52511__$1);
var G__52519 = null;
var G__52520 = (0);
var G__52521 = (0);
seq__51426_52501 = G__52518;
chunk__51427_52502 = G__52519;
count__51428_52503 = G__52520;
i__51429_52504 = G__52521;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51430 = cljs.core.get_global_hierarchy;
return (fexpr__51430.cljs$core$IFn$_invoke$arity$0 ? fexpr__51430.cljs$core$IFn$_invoke$arity$0() : fexpr__51430.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__51431_52524 = ast;
var map__51431_52525__$1 = (((((!((map__51431_52524 == null))))?(((((map__51431_52524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51431_52524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51431_52524):map__51431_52524);
var env_52526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51431_52525__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_52526))){
var map__51433_52529 = env_52526;
var map__51433_52530__$1 = (((((!((map__51433_52529 == null))))?(((((map__51433_52529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51433_52529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51433_52529):map__51433_52529);
var line_52531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51433_52530__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51433_52530__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__51435 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__51437 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__51436 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__51436.cljs$core$IFn$_invoke$arity$1 ? fexpr__51436.cljs$core$IFn$_invoke$arity$1(G__51437) : fexpr__51436.call(null,G__51437));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51435,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__51435;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_52531 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_52532)?(column_52532 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__51466 = arguments.length;
switch (G__51466) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___52542 = arguments.length;
var i__4737__auto___52543 = (0);
while(true){
if((i__4737__auto___52543 < len__4736__auto___52542)){
args_arr__4757__auto__.push((arguments[i__4737__auto___52543]));

var G__52544 = (i__4737__auto___52543 + (1));
i__4737__auto___52543 = G__52544;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_52547 = (function (){var G__51486 = a;
if((!(typeof a === 'string'))){
return G__51486.toString();
} else {
return G__51486;
}
})();
var temp__5739__auto___52548 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___52548 == null)){
} else {
var sm_data_52549 = temp__5739__auto___52548;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_52549,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__51447_SHARP_){
return (p1__51447_SHARP_ + s_52547.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_52547], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__51489 = cljs.core.seq(xs);
var chunk__51490 = null;
var count__51491 = (0);
var i__51492 = (0);
while(true){
if((i__51492 < count__51491)){
var x = chunk__51490.cljs$core$IIndexed$_nth$arity$2(null,i__51492);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__52565 = seq__51489;
var G__52566 = chunk__51490;
var G__52567 = count__51491;
var G__52568 = (i__51492 + (1));
seq__51489 = G__52565;
chunk__51490 = G__52566;
count__51491 = G__52567;
i__51492 = G__52568;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51489);
if(temp__5735__auto__){
var seq__51489__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51489__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51489__$1);
var G__52574 = cljs.core.chunk_rest(seq__51489__$1);
var G__52575 = c__4556__auto__;
var G__52576 = cljs.core.count(c__4556__auto__);
var G__52577 = (0);
seq__51489 = G__52574;
chunk__51490 = G__52575;
count__51491 = G__52576;
i__51492 = G__52577;
continue;
} else {
var x = cljs.core.first(seq__51489__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__52578 = cljs.core.next(seq__51489__$1);
var G__52579 = null;
var G__52580 = (0);
var G__52581 = (0);
seq__51489 = G__52578;
chunk__51490 = G__52579;
count__51491 = G__52580;
i__51492 = G__52581;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq51460){
var G__51461 = cljs.core.first(seq51460);
var seq51460__$1 = cljs.core.next(seq51460);
var G__51462 = cljs.core.first(seq51460__$1);
var seq51460__$2 = cljs.core.next(seq51460__$1);
var G__51463 = cljs.core.first(seq51460__$2);
var seq51460__$3 = cljs.core.next(seq51460__$2);
var G__51464 = cljs.core.first(seq51460__$3);
var seq51460__$4 = cljs.core.next(seq51460__$3);
var G__51465 = cljs.core.first(seq51460__$4);
var seq51460__$5 = cljs.core.next(seq51460__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51461,G__51462,G__51463,G__51464,G__51465,seq51460__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__51493){
var map__51494 = p__51493;
var map__51494__$1 = (((((!((map__51494 == null))))?(((((map__51494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51494):map__51494);
var m = map__51494__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51494__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__51503 = arguments.length;
switch (G__51503) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___52603 = arguments.length;
var i__4737__auto___52604 = (0);
while(true){
if((i__4737__auto___52604 < len__4736__auto___52603)){
args_arr__4757__auto__.push((arguments[i__4737__auto___52604]));

var G__52605 = (i__4737__auto___52604 + (1));
i__4737__auto___52604 = G__52605;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__51507_52621 = cljs.core.seq(xs);
var chunk__51508_52622 = null;
var count__51509_52623 = (0);
var i__51510_52624 = (0);
while(true){
if((i__51510_52624 < count__51509_52623)){
var x_52629 = chunk__51508_52622.cljs$core$IIndexed$_nth$arity$2(null,i__51510_52624);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_52629);


var G__52630 = seq__51507_52621;
var G__52631 = chunk__51508_52622;
var G__52632 = count__51509_52623;
var G__52633 = (i__51510_52624 + (1));
seq__51507_52621 = G__52630;
chunk__51508_52622 = G__52631;
count__51509_52623 = G__52632;
i__51510_52624 = G__52633;
continue;
} else {
var temp__5735__auto___52637 = cljs.core.seq(seq__51507_52621);
if(temp__5735__auto___52637){
var seq__51507_52638__$1 = temp__5735__auto___52637;
if(cljs.core.chunked_seq_QMARK_(seq__51507_52638__$1)){
var c__4556__auto___52639 = cljs.core.chunk_first(seq__51507_52638__$1);
var G__52641 = cljs.core.chunk_rest(seq__51507_52638__$1);
var G__52642 = c__4556__auto___52639;
var G__52643 = cljs.core.count(c__4556__auto___52639);
var G__52644 = (0);
seq__51507_52621 = G__52641;
chunk__51508_52622 = G__52642;
count__51509_52623 = G__52643;
i__51510_52624 = G__52644;
continue;
} else {
var x_52645 = cljs.core.first(seq__51507_52638__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_52645);


var G__52646 = cljs.core.next(seq__51507_52638__$1);
var G__52647 = null;
var G__52648 = (0);
var G__52649 = (0);
seq__51507_52621 = G__52646;
chunk__51508_52622 = G__52647;
count__51509_52623 = G__52648;
i__51510_52624 = G__52649;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq51497){
var G__51498 = cljs.core.first(seq51497);
var seq51497__$1 = cljs.core.next(seq51497);
var G__51499 = cljs.core.first(seq51497__$1);
var seq51497__$2 = cljs.core.next(seq51497__$1);
var G__51500 = cljs.core.first(seq51497__$2);
var seq51497__$3 = cljs.core.next(seq51497__$2);
var G__51501 = cljs.core.first(seq51497__$3);
var seq51497__$4 = cljs.core.next(seq51497__$3);
var G__51502 = cljs.core.first(seq51497__$4);
var seq51497__$5 = cljs.core.next(seq51497__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51498,G__51499,G__51500,G__51501,G__51502,seq51497__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51525_52650 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51526_52651 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51527_52652 = true;
var _STAR_print_fn_STAR__temp_val__51528_52653 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51527_52652);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51528_52653);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51526_52651);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51525_52650);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51544 = cljs.core.get_global_hierarchy;
return (fexpr__51544.cljs$core$IFn$_invoke$arity$0 ? fexpr__51544.cljs$core$IFn$_invoke$arity$0() : fexpr__51544.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__51557 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51557,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51557,(1),null);
var G__51560 = ns;
var G__51561 = name;
var G__51562 = (function (){
var G__51563 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__51563) : cljs.compiler.emit_constant.call(null,G__51563));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__51560,G__51561,G__51562) : cljs.compiler.emit_record_value.call(null,G__51560,G__51561,G__51562));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__51565 = cljs.core.keys(x);
var G__51566 = cljs.core.vals(x);
var G__51567 = cljs.compiler.emit_constants_comma_sep;
var G__51568 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__51565,G__51566,G__51567,G__51568) : cljs.compiler.emit_map.call(null,G__51565,G__51566,G__51567,G__51568));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__51569 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__51570 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__51569,G__51570) : cljs.compiler.emit_with_meta.call(null,G__51569,G__51570));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__51572 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51572,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51572,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51572,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__51577 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__51577) : x.call(null,G__51577));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__51578 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__51578) : x.call(null,G__51578));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__51580 = items;
var G__51581 = (function (p1__51579_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__51579_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__51580,G__51581) : cljs.compiler.emit_js_object.call(null,G__51580,G__51581));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__51583){
var map__51584 = p__51583;
var map__51584__$1 = (((((!((map__51584 == null))))?(((((map__51584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51584):map__51584);
var ast = map__51584__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51584__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51584__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51584__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__51586 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__51586__$1 = (((((!((map__51586 == null))))?(((((map__51586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51586):map__51586);
var cenv = map__51586__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51586__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__51588 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__51591 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__51591) : cljs.compiler.es5_GT__EQ_.call(null,G__51591));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__51588,cljs.analyzer.es5_allowed);
} else {
return G__51588;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__51592 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__51592,reserved);
} else {
return G__51592;
}
})();
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__51593_52734 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__51593_52735__$1 = (((G__51593_52734 instanceof cljs.core.Keyword))?G__51593_52734.fqn:null);
switch (G__51593_52735__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4115__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__51594){
var map__51595 = p__51594;
var map__51595__$1 = (((((!((map__51595 == null))))?(((((map__51595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51595):map__51595);
var arg = map__51595__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51595__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51595__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51595__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51595__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__51597 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__51597__$1 = (((((!((map__51597 == null))))?(((((map__51597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51597):map__51597);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51597__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__51600){
var map__51601 = p__51600;
var map__51601__$1 = (((((!((map__51601 == null))))?(((((map__51601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51601):map__51601);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51601__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__51607_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__51607_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__51617 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__51617) : comma_sep.call(null,G__51617));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__51618 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__51618) : comma_sep.call(null,G__51618));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__51620){
var map__51621 = p__51620;
var map__51621__$1 = (((((!((map__51621 == null))))?(((((map__51621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51621):map__51621);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51621__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51621__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51621__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__51623){
var map__51624 = p__51623;
var map__51624__$1 = (((((!((map__51624 == null))))?(((((map__51624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51624):map__51624);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51624__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51624__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__51626_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__51626_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__51627 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__51627) : comma_sep.call(null,G__51627));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__51628){
var map__51629 = p__51628;
var map__51629__$1 = (((((!((map__51629 == null))))?(((((map__51629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51629):map__51629);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51629__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51629__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___52777 = cljs.core.seq(items);
if(temp__5735__auto___52777){
var items_52778__$1 = temp__5735__auto___52777;
var vec__51631_52779 = items_52778__$1;
var seq__51632_52780 = cljs.core.seq(vec__51631_52779);
var first__51633_52781 = cljs.core.first(seq__51632_52780);
var seq__51632_52782__$1 = cljs.core.next(seq__51632_52780);
var vec__51634_52783 = first__51633_52781;
var k_52784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51634_52783,(0),null);
var v_52785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51634_52783,(1),null);
var r_52786 = seq__51632_52782__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_52784),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_52785) : emit_js_object_val.call(null,v_52785)));

var seq__51637_52790 = cljs.core.seq(r_52786);
var chunk__51638_52791 = null;
var count__51639_52792 = (0);
var i__51640_52793 = (0);
while(true){
if((i__51640_52793 < count__51639_52792)){
var vec__51648_52795 = chunk__51638_52791.cljs$core$IIndexed$_nth$arity$2(null,i__51640_52793);
var k_52796__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51648_52795,(0),null);
var v_52797__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51648_52795,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_52796__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_52797__$1) : emit_js_object_val.call(null,v_52797__$1)));


var G__52799 = seq__51637_52790;
var G__52800 = chunk__51638_52791;
var G__52801 = count__51639_52792;
var G__52802 = (i__51640_52793 + (1));
seq__51637_52790 = G__52799;
chunk__51638_52791 = G__52800;
count__51639_52792 = G__52801;
i__51640_52793 = G__52802;
continue;
} else {
var temp__5735__auto___52803__$1 = cljs.core.seq(seq__51637_52790);
if(temp__5735__auto___52803__$1){
var seq__51637_52804__$1 = temp__5735__auto___52803__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51637_52804__$1)){
var c__4556__auto___52810 = cljs.core.chunk_first(seq__51637_52804__$1);
var G__52814 = cljs.core.chunk_rest(seq__51637_52804__$1);
var G__52815 = c__4556__auto___52810;
var G__52816 = cljs.core.count(c__4556__auto___52810);
var G__52817 = (0);
seq__51637_52790 = G__52814;
chunk__51638_52791 = G__52815;
count__51639_52792 = G__52816;
i__51640_52793 = G__52817;
continue;
} else {
var vec__51651_52819 = cljs.core.first(seq__51637_52804__$1);
var k_52820__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51651_52819,(0),null);
var v_52821__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51651_52819,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_52820__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_52821__$1) : emit_js_object_val.call(null,v_52821__$1)));


var G__52831 = cljs.core.next(seq__51637_52804__$1);
var G__52832 = null;
var G__52833 = (0);
var G__52834 = (0);
seq__51637_52790 = G__52831;
chunk__51638_52791 = G__52832;
count__51639_52792 = G__52833;
i__51640_52793 = G__52834;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__51655){
var map__51656 = p__51655;
var map__51656__$1 = (((((!((map__51656 == null))))?(((((map__51656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51656):map__51656);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51656__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51656__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51656__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__51659){
var map__51660 = p__51659;
var map__51660__$1 = (((((!((map__51660 == null))))?(((((map__51660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51660):map__51660);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51660__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51660__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__51662){
var map__51663 = p__51662;
var map__51663__$1 = (((((!((map__51663 == null))))?(((((map__51663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51663):map__51663);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51663__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__51665){
var map__51666 = p__51665;
var map__51666__$1 = (((((!((map__51666 == null))))?(((((map__51666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51666):map__51666);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51666__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51666__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__51668 = cljs.analyzer.unwrap_quote(expr);
var map__51668__$1 = (((((!((map__51668 == null))))?(((((map__51668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51668):map__51668);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51668__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51668__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51668__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__51670 = cljs.analyzer.unwrap_quote(expr);
var map__51670__$1 = (((((!((map__51670 == null))))?(((((map__51670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51670):map__51670);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51670__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51670__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51670__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4126__auto__ = (function (){var fexpr__51673 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__51673.cljs$core$IFn$_invoke$arity$1 ? fexpr__51673.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__51673.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__51678){
var map__51679 = p__51678;
var map__51679__$1 = (((((!((map__51679 == null))))?(((((map__51679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51679):map__51679);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51679__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51679__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51679__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51679__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51679__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__51682){
var map__51683 = p__51682;
var map__51683__$1 = (((((!((map__51683 == null))))?(((((map__51683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51683):map__51683);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51683__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51683__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51683__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51683__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__51685_52945 = cljs.core.seq(nodes);
var chunk__51686_52946 = null;
var count__51687_52947 = (0);
var i__51688_52948 = (0);
while(true){
if((i__51688_52948 < count__51687_52947)){
var map__51710_52949 = chunk__51686_52946.cljs$core$IIndexed$_nth$arity$2(null,i__51688_52948);
var map__51710_52950__$1 = (((((!((map__51710_52949 == null))))?(((((map__51710_52949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51710_52949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51710_52949):map__51710_52949);
var ts_52951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51710_52950__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__51711_52952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51710_52950__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__51711_52953__$1 = (((((!((map__51711_52952 == null))))?(((((map__51711_52952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51711_52952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51711_52952):map__51711_52952);
var then_52954 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51711_52953__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__51714_52955 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_52951));
var chunk__51715_52956 = null;
var count__51716_52957 = (0);
var i__51717_52958 = (0);
while(true){
if((i__51717_52958 < count__51716_52957)){
var test_52960 = chunk__51715_52956.cljs$core$IIndexed$_nth$arity$2(null,i__51717_52958);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_52960,":");


var G__52961 = seq__51714_52955;
var G__52962 = chunk__51715_52956;
var G__52963 = count__51716_52957;
var G__52964 = (i__51717_52958 + (1));
seq__51714_52955 = G__52961;
chunk__51715_52956 = G__52962;
count__51716_52957 = G__52963;
i__51717_52958 = G__52964;
continue;
} else {
var temp__5735__auto___52965 = cljs.core.seq(seq__51714_52955);
if(temp__5735__auto___52965){
var seq__51714_52967__$1 = temp__5735__auto___52965;
if(cljs.core.chunked_seq_QMARK_(seq__51714_52967__$1)){
var c__4556__auto___52976 = cljs.core.chunk_first(seq__51714_52967__$1);
var G__52977 = cljs.core.chunk_rest(seq__51714_52967__$1);
var G__52978 = c__4556__auto___52976;
var G__52979 = cljs.core.count(c__4556__auto___52976);
var G__52980 = (0);
seq__51714_52955 = G__52977;
chunk__51715_52956 = G__52978;
count__51716_52957 = G__52979;
i__51717_52958 = G__52980;
continue;
} else {
var test_52981 = cljs.core.first(seq__51714_52967__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_52981,":");


var G__52982 = cljs.core.next(seq__51714_52967__$1);
var G__52983 = null;
var G__52984 = (0);
var G__52985 = (0);
seq__51714_52955 = G__52982;
chunk__51715_52956 = G__52983;
count__51716_52957 = G__52984;
i__51717_52958 = G__52985;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_52954);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_52954);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__52988 = seq__51685_52945;
var G__52989 = chunk__51686_52946;
var G__52990 = count__51687_52947;
var G__52991 = (i__51688_52948 + (1));
seq__51685_52945 = G__52988;
chunk__51686_52946 = G__52989;
count__51687_52947 = G__52990;
i__51688_52948 = G__52991;
continue;
} else {
var temp__5735__auto___53000 = cljs.core.seq(seq__51685_52945);
if(temp__5735__auto___53000){
var seq__51685_53001__$1 = temp__5735__auto___53000;
if(cljs.core.chunked_seq_QMARK_(seq__51685_53001__$1)){
var c__4556__auto___53002 = cljs.core.chunk_first(seq__51685_53001__$1);
var G__53003 = cljs.core.chunk_rest(seq__51685_53001__$1);
var G__53004 = c__4556__auto___53002;
var G__53005 = cljs.core.count(c__4556__auto___53002);
var G__53006 = (0);
seq__51685_52945 = G__53003;
chunk__51686_52946 = G__53004;
count__51687_52947 = G__53005;
i__51688_52948 = G__53006;
continue;
} else {
var map__51718_53008 = cljs.core.first(seq__51685_53001__$1);
var map__51718_53009__$1 = (((((!((map__51718_53008 == null))))?(((((map__51718_53008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51718_53008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51718_53008):map__51718_53008);
var ts_53010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51718_53009__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__51719_53011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51718_53009__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__51719_53012__$1 = (((((!((map__51719_53011 == null))))?(((((map__51719_53011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51719_53011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51719_53011):map__51719_53011);
var then_53013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51719_53012__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__51725_53015 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_53010));
var chunk__51726_53016 = null;
var count__51727_53017 = (0);
var i__51728_53018 = (0);
while(true){
if((i__51728_53018 < count__51727_53017)){
var test_53021 = chunk__51726_53016.cljs$core$IIndexed$_nth$arity$2(null,i__51728_53018);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_53021,":");


var G__53022 = seq__51725_53015;
var G__53023 = chunk__51726_53016;
var G__53024 = count__51727_53017;
var G__53025 = (i__51728_53018 + (1));
seq__51725_53015 = G__53022;
chunk__51726_53016 = G__53023;
count__51727_53017 = G__53024;
i__51728_53018 = G__53025;
continue;
} else {
var temp__5735__auto___53026__$1 = cljs.core.seq(seq__51725_53015);
if(temp__5735__auto___53026__$1){
var seq__51725_53027__$1 = temp__5735__auto___53026__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51725_53027__$1)){
var c__4556__auto___53029 = cljs.core.chunk_first(seq__51725_53027__$1);
var G__53030 = cljs.core.chunk_rest(seq__51725_53027__$1);
var G__53031 = c__4556__auto___53029;
var G__53032 = cljs.core.count(c__4556__auto___53029);
var G__53033 = (0);
seq__51725_53015 = G__53030;
chunk__51726_53016 = G__53031;
count__51727_53017 = G__53032;
i__51728_53018 = G__53033;
continue;
} else {
var test_53035 = cljs.core.first(seq__51725_53027__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_53035,":");


var G__53036 = cljs.core.next(seq__51725_53027__$1);
var G__53037 = null;
var G__53038 = (0);
var G__53039 = (0);
seq__51725_53015 = G__53036;
chunk__51726_53016 = G__53037;
count__51727_53017 = G__53038;
i__51728_53018 = G__53039;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_53013);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_53013);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__53040 = cljs.core.next(seq__51685_53001__$1);
var G__53041 = null;
var G__53042 = (0);
var G__53043 = (0);
seq__51685_52945 = G__53040;
chunk__51686_52946 = G__53041;
count__51687_52947 = G__53042;
i__51688_52948 = G__53043;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__51729){
var map__51730 = p__51729;
var map__51730__$1 = (((((!((map__51730 == null))))?(((((map__51730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51730):map__51730);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51730__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51730__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__51736 = env;
var G__51737 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__51736,G__51737) : cljs.compiler.resolve_type.call(null,G__51736,G__51737));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__51738 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51738,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51738,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__51733_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__51733_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__51733_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__51741 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__51741,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__51741;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__51744 = env;
var G__51745 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__51744,G__51745) : cljs.compiler.resolve_type.call(null,G__51744,G__51745));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51746_SHARP_){
return cljs.compiler.resolve_type(env,p1__51746_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__51748 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__51749 = cljs.core.seq(vec__51748);
var first__51750 = cljs.core.first(seq__51749);
var seq__51749__$1 = cljs.core.next(seq__51749);
var p = first__51750;
var first__51750__$1 = cljs.core.first(seq__51749__$1);
var seq__51749__$2 = cljs.core.next(seq__51749__$1);
var ts = first__51750__$1;
var first__51750__$2 = cljs.core.first(seq__51749__$2);
var seq__51749__$3 = cljs.core.next(seq__51749__$2);
var n = first__51750__$2;
var xs = seq__51749__$3;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__51752 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__51753 = cljs.core.seq(vec__51752);
var first__51754 = cljs.core.first(seq__51753);
var seq__51753__$1 = cljs.core.next(seq__51753);
var p = first__51754;
var first__51754__$1 = cljs.core.first(seq__51753__$1);
var seq__51753__$2 = cljs.core.next(seq__51753__$1);
var ts = first__51754__$1;
var xs = seq__51753__$2;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__51756 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__51755 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__51755.cljs$core$IFn$_invoke$arity$1 ? fexpr__51755.cljs$core$IFn$_invoke$arity$1(G__51756) : fexpr__51755.call(null,G__51756));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__51759 = arguments.length;
switch (G__51759) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__51770 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51757_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__51757_SHARP_);
} else {
return p1__51757_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__51771 = cljs.core.seq(vec__51770);
var first__51772 = cljs.core.first(seq__51771);
var seq__51771__$1 = cljs.core.next(seq__51771);
var x = first__51772;
var ys = seq__51771__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__51773 = cljs.core.seq(ys);
var chunk__51774 = null;
var count__51775 = (0);
var i__51776 = (0);
while(true){
if((i__51776 < count__51775)){
var next_line = chunk__51774.cljs$core$IIndexed$_nth$arity$2(null,i__51776);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__53085 = seq__51773;
var G__53086 = chunk__51774;
var G__53087 = count__51775;
var G__53088 = (i__51776 + (1));
seq__51773 = G__53085;
chunk__51774 = G__53086;
count__51775 = G__53087;
i__51776 = G__53088;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51773);
if(temp__5735__auto__){
var seq__51773__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51773__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51773__$1);
var G__53089 = cljs.core.chunk_rest(seq__51773__$1);
var G__53090 = c__4556__auto__;
var G__53091 = cljs.core.count(c__4556__auto__);
var G__53092 = (0);
seq__51773 = G__53089;
chunk__51774 = G__53090;
count__51775 = G__53091;
i__51776 = G__53092;
continue;
} else {
var next_line = cljs.core.first(seq__51773__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__53096 = cljs.core.next(seq__51773__$1);
var G__53097 = null;
var G__53098 = (0);
var G__53099 = (0);
seq__51773 = G__53096;
chunk__51774 = G__53097;
count__51775 = G__53098;
i__51776 = G__53099;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__51784_53100 = cljs.core.seq(docs__$2);
var chunk__51785_53101 = null;
var count__51786_53102 = (0);
var i__51787_53103 = (0);
while(true){
if((i__51787_53103 < count__51786_53102)){
var e_53104 = chunk__51785_53101.cljs$core$IIndexed$_nth$arity$2(null,i__51787_53103);
if(cljs.core.truth_(e_53104)){
print_comment_lines(e_53104);
} else {
}


var G__53106 = seq__51784_53100;
var G__53107 = chunk__51785_53101;
var G__53108 = count__51786_53102;
var G__53109 = (i__51787_53103 + (1));
seq__51784_53100 = G__53106;
chunk__51785_53101 = G__53107;
count__51786_53102 = G__53108;
i__51787_53103 = G__53109;
continue;
} else {
var temp__5735__auto___53110 = cljs.core.seq(seq__51784_53100);
if(temp__5735__auto___53110){
var seq__51784_53111__$1 = temp__5735__auto___53110;
if(cljs.core.chunked_seq_QMARK_(seq__51784_53111__$1)){
var c__4556__auto___53112 = cljs.core.chunk_first(seq__51784_53111__$1);
var G__53113 = cljs.core.chunk_rest(seq__51784_53111__$1);
var G__53114 = c__4556__auto___53112;
var G__53115 = cljs.core.count(c__4556__auto___53112);
var G__53116 = (0);
seq__51784_53100 = G__53113;
chunk__51785_53101 = G__53114;
count__51786_53102 = G__53115;
i__51787_53103 = G__53116;
continue;
} else {
var e_53119 = cljs.core.first(seq__51784_53111__$1);
if(cljs.core.truth_(e_53119)){
print_comment_lines(e_53119);
} else {
}


var G__53120 = cljs.core.next(seq__51784_53111__$1);
var G__53121 = null;
var G__53122 = (0);
var G__53123 = (0);
seq__51784_53100 = G__53120;
chunk__51785_53101 = G__53121;
count__51786_53102 = G__53122;
i__51787_53103 = G__53123;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4115__auto__ = cljs.core.some((function (p1__51789_SHARP_){
return goog.string.startsWith(p1__51789_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__51802){
var map__51803 = p__51802;
var map__51803__$1 = (((((!((map__51803 == null))))?(((((map__51803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51803):map__51803);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51803__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51803__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51803__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51803__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51803__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51803__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51803__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51803__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51803__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51803__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__51809){
var map__51810 = p__51809;
var map__51810__$1 = (((((!((map__51810 == null))))?(((((map__51810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51810):map__51810);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51810__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51810__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51810__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__51812_53145 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__51813_53146 = null;
var count__51814_53147 = (0);
var i__51815_53148 = (0);
while(true){
if((i__51815_53148 < count__51814_53147)){
var vec__51822_53149 = chunk__51813_53146.cljs$core$IIndexed$_nth$arity$2(null,i__51815_53148);
var i_53150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51822_53149,(0),null);
var param_53151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51822_53149,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_53151);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__53154 = seq__51812_53145;
var G__53155 = chunk__51813_53146;
var G__53156 = count__51814_53147;
var G__53157 = (i__51815_53148 + (1));
seq__51812_53145 = G__53154;
chunk__51813_53146 = G__53155;
count__51814_53147 = G__53156;
i__51815_53148 = G__53157;
continue;
} else {
var temp__5735__auto___53158 = cljs.core.seq(seq__51812_53145);
if(temp__5735__auto___53158){
var seq__51812_53159__$1 = temp__5735__auto___53158;
if(cljs.core.chunked_seq_QMARK_(seq__51812_53159__$1)){
var c__4556__auto___53160 = cljs.core.chunk_first(seq__51812_53159__$1);
var G__53161 = cljs.core.chunk_rest(seq__51812_53159__$1);
var G__53162 = c__4556__auto___53160;
var G__53163 = cljs.core.count(c__4556__auto___53160);
var G__53164 = (0);
seq__51812_53145 = G__53161;
chunk__51813_53146 = G__53162;
count__51814_53147 = G__53163;
i__51815_53148 = G__53164;
continue;
} else {
var vec__51825_53165 = cljs.core.first(seq__51812_53159__$1);
var i_53166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51825_53165,(0),null);
var param_53167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51825_53165,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_53167);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__53170 = cljs.core.next(seq__51812_53159__$1);
var G__53171 = null;
var G__53172 = (0);
var G__53173 = (0);
seq__51812_53145 = G__53170;
chunk__51813_53146 = G__53171;
count__51814_53147 = G__53172;
i__51815_53148 = G__53173;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__51828_53174 = cljs.core.seq(params);
var chunk__51829_53175 = null;
var count__51830_53176 = (0);
var i__51831_53177 = (0);
while(true){
if((i__51831_53177 < count__51830_53176)){
var param_53178 = chunk__51829_53175.cljs$core$IIndexed$_nth$arity$2(null,i__51831_53177);
cljs.compiler.emit(param_53178);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53178,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53181 = seq__51828_53174;
var G__53182 = chunk__51829_53175;
var G__53183 = count__51830_53176;
var G__53184 = (i__51831_53177 + (1));
seq__51828_53174 = G__53181;
chunk__51829_53175 = G__53182;
count__51830_53176 = G__53183;
i__51831_53177 = G__53184;
continue;
} else {
var temp__5735__auto___53185 = cljs.core.seq(seq__51828_53174);
if(temp__5735__auto___53185){
var seq__51828_53186__$1 = temp__5735__auto___53185;
if(cljs.core.chunked_seq_QMARK_(seq__51828_53186__$1)){
var c__4556__auto___53187 = cljs.core.chunk_first(seq__51828_53186__$1);
var G__53189 = cljs.core.chunk_rest(seq__51828_53186__$1);
var G__53190 = c__4556__auto___53187;
var G__53191 = cljs.core.count(c__4556__auto___53187);
var G__53192 = (0);
seq__51828_53174 = G__53189;
chunk__51829_53175 = G__53190;
count__51830_53176 = G__53191;
i__51831_53177 = G__53192;
continue;
} else {
var param_53193 = cljs.core.first(seq__51828_53186__$1);
cljs.compiler.emit(param_53193);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53193,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53194 = cljs.core.next(seq__51828_53186__$1);
var G__53195 = null;
var G__53196 = (0);
var G__53197 = (0);
seq__51828_53174 = G__53194;
chunk__51829_53175 = G__53195;
count__51830_53176 = G__53196;
i__51831_53177 = G__53197;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__51833_53202 = cljs.core.seq(params);
var chunk__51834_53203 = null;
var count__51835_53204 = (0);
var i__51836_53205 = (0);
while(true){
if((i__51836_53205 < count__51835_53204)){
var param_53207 = chunk__51834_53203.cljs$core$IIndexed$_nth$arity$2(null,i__51836_53205);
cljs.compiler.emit(param_53207);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53207,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53209 = seq__51833_53202;
var G__53210 = chunk__51834_53203;
var G__53211 = count__51835_53204;
var G__53212 = (i__51836_53205 + (1));
seq__51833_53202 = G__53209;
chunk__51834_53203 = G__53210;
count__51835_53204 = G__53211;
i__51836_53205 = G__53212;
continue;
} else {
var temp__5735__auto___53217 = cljs.core.seq(seq__51833_53202);
if(temp__5735__auto___53217){
var seq__51833_53218__$1 = temp__5735__auto___53217;
if(cljs.core.chunked_seq_QMARK_(seq__51833_53218__$1)){
var c__4556__auto___53219 = cljs.core.chunk_first(seq__51833_53218__$1);
var G__53220 = cljs.core.chunk_rest(seq__51833_53218__$1);
var G__53221 = c__4556__auto___53219;
var G__53222 = cljs.core.count(c__4556__auto___53219);
var G__53223 = (0);
seq__51833_53202 = G__53220;
chunk__51834_53203 = G__53221;
count__51835_53204 = G__53222;
i__51836_53205 = G__53223;
continue;
} else {
var param_53224 = cljs.core.first(seq__51833_53218__$1);
cljs.compiler.emit(param_53224);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53224,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53226 = cljs.core.next(seq__51833_53218__$1);
var G__53227 = null;
var G__53228 = (0);
var G__53229 = (0);
seq__51833_53202 = G__53226;
chunk__51834_53203 = G__53227;
count__51835_53204 = G__53228;
i__51836_53205 = G__53229;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__51841 = cljs.core.seq(params);
var chunk__51842 = null;
var count__51843 = (0);
var i__51844 = (0);
while(true){
if((i__51844 < count__51843)){
var param = chunk__51842.cljs$core$IIndexed$_nth$arity$2(null,i__51844);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53232 = seq__51841;
var G__53233 = chunk__51842;
var G__53234 = count__51843;
var G__53235 = (i__51844 + (1));
seq__51841 = G__53232;
chunk__51842 = G__53233;
count__51843 = G__53234;
i__51844 = G__53235;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51841);
if(temp__5735__auto__){
var seq__51841__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51841__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51841__$1);
var G__53237 = cljs.core.chunk_rest(seq__51841__$1);
var G__53238 = c__4556__auto__;
var G__53239 = cljs.core.count(c__4556__auto__);
var G__53240 = (0);
seq__51841 = G__53237;
chunk__51842 = G__53238;
count__51843 = G__53239;
i__51844 = G__53240;
continue;
} else {
var param = cljs.core.first(seq__51841__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53243 = cljs.core.next(seq__51841__$1);
var G__53244 = null;
var G__53245 = (0);
var G__53246 = (0);
seq__51841 = G__53243;
chunk__51842 = G__53244;
count__51843 = G__53245;
i__51844 = G__53246;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__51849){
var map__51852 = p__51849;
var map__51852__$1 = (((((!((map__51852 == null))))?(((((map__51852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51852):map__51852);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51852__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51852__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51852__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51852__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51852__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51852__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__51855){
var map__51856 = p__51855;
var map__51856__$1 = (((((!((map__51856 == null))))?(((((map__51856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51856):map__51856);
var f = map__51856__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51856__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51856__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51856__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51856__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51856__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51856__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51856__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51856__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_53271__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_53272 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_53271__$1);
var delegate_name_53273 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_53272),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_53273," = function (");

var seq__51865_53274 = cljs.core.seq(params);
var chunk__51866_53275 = null;
var count__51867_53276 = (0);
var i__51868_53277 = (0);
while(true){
if((i__51868_53277 < count__51867_53276)){
var param_53278 = chunk__51866_53275.cljs$core$IIndexed$_nth$arity$2(null,i__51868_53277);
cljs.compiler.emit(param_53278);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53278,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53283 = seq__51865_53274;
var G__53284 = chunk__51866_53275;
var G__53285 = count__51867_53276;
var G__53286 = (i__51868_53277 + (1));
seq__51865_53274 = G__53283;
chunk__51866_53275 = G__53284;
count__51867_53276 = G__53285;
i__51868_53277 = G__53286;
continue;
} else {
var temp__5735__auto___53287 = cljs.core.seq(seq__51865_53274);
if(temp__5735__auto___53287){
var seq__51865_53288__$1 = temp__5735__auto___53287;
if(cljs.core.chunked_seq_QMARK_(seq__51865_53288__$1)){
var c__4556__auto___53289 = cljs.core.chunk_first(seq__51865_53288__$1);
var G__53290 = cljs.core.chunk_rest(seq__51865_53288__$1);
var G__53291 = c__4556__auto___53289;
var G__53292 = cljs.core.count(c__4556__auto___53289);
var G__53293 = (0);
seq__51865_53274 = G__53290;
chunk__51866_53275 = G__53291;
count__51867_53276 = G__53292;
i__51868_53277 = G__53293;
continue;
} else {
var param_53294 = cljs.core.first(seq__51865_53288__$1);
cljs.compiler.emit(param_53294);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53294,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53296 = cljs.core.next(seq__51865_53288__$1);
var G__53297 = null;
var G__53298 = (0);
var G__53299 = (0);
seq__51865_53274 = G__53296;
chunk__51866_53275 = G__53297;
count__51867_53276 = G__53298;
i__51868_53277 = G__53299;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_53272," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_53309 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_53309,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_53273,".call(this,");

var seq__51876_53310 = cljs.core.seq(params);
var chunk__51877_53311 = null;
var count__51878_53312 = (0);
var i__51879_53313 = (0);
while(true){
if((i__51879_53313 < count__51878_53312)){
var param_53319 = chunk__51877_53311.cljs$core$IIndexed$_nth$arity$2(null,i__51879_53313);
cljs.compiler.emit(param_53319);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53319,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53320 = seq__51876_53310;
var G__53321 = chunk__51877_53311;
var G__53322 = count__51878_53312;
var G__53323 = (i__51879_53313 + (1));
seq__51876_53310 = G__53320;
chunk__51877_53311 = G__53321;
count__51878_53312 = G__53322;
i__51879_53313 = G__53323;
continue;
} else {
var temp__5735__auto___53324 = cljs.core.seq(seq__51876_53310);
if(temp__5735__auto___53324){
var seq__51876_53325__$1 = temp__5735__auto___53324;
if(cljs.core.chunked_seq_QMARK_(seq__51876_53325__$1)){
var c__4556__auto___53326 = cljs.core.chunk_first(seq__51876_53325__$1);
var G__53327 = cljs.core.chunk_rest(seq__51876_53325__$1);
var G__53328 = c__4556__auto___53326;
var G__53329 = cljs.core.count(c__4556__auto___53326);
var G__53330 = (0);
seq__51876_53310 = G__53327;
chunk__51877_53311 = G__53328;
count__51878_53312 = G__53329;
i__51879_53313 = G__53330;
continue;
} else {
var param_53331 = cljs.core.first(seq__51876_53325__$1);
cljs.compiler.emit(param_53331);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53331,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53332 = cljs.core.next(seq__51876_53325__$1);
var G__53333 = null;
var G__53334 = (0);
var G__53335 = (0);
seq__51876_53310 = G__53332;
chunk__51877_53311 = G__53333;
count__51878_53312 = G__53334;
i__51879_53313 = G__53335;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53272,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_53272,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_53271__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53272,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_53273,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_53272,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__51933){
var map__51934 = p__51933;
var map__51934__$1 = (((((!((map__51934 == null))))?(((((map__51934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51934):map__51934);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51934__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51934__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51934__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51934__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51934__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51934__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51934__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51934__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51925_SHARP_){
var and__4115__auto__ = p1__51925_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__51925_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_53350__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_53351 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_53350__$1);
var maxparams_53352 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_53353 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_53351),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_53354 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__51931_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__51931_SHARP_)));
}),cljs.core.seq(mmap_53353));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_53351," = null;");

var seq__51943_53363 = cljs.core.seq(ms_53354);
var chunk__51944_53364 = null;
var count__51945_53365 = (0);
var i__51946_53366 = (0);
while(true){
if((i__51946_53366 < count__51945_53365)){
var vec__51962_53369 = chunk__51944_53364.cljs$core$IIndexed$_nth$arity$2(null,i__51946_53366);
var n_53370 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51962_53369,(0),null);
var meth_53371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51962_53369,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_53370," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53371))){
cljs.compiler.emit_variadic_fn_method(meth_53371);
} else {
cljs.compiler.emit_fn_method(meth_53371);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__53372 = seq__51943_53363;
var G__53373 = chunk__51944_53364;
var G__53374 = count__51945_53365;
var G__53375 = (i__51946_53366 + (1));
seq__51943_53363 = G__53372;
chunk__51944_53364 = G__53373;
count__51945_53365 = G__53374;
i__51946_53366 = G__53375;
continue;
} else {
var temp__5735__auto___53376 = cljs.core.seq(seq__51943_53363);
if(temp__5735__auto___53376){
var seq__51943_53377__$1 = temp__5735__auto___53376;
if(cljs.core.chunked_seq_QMARK_(seq__51943_53377__$1)){
var c__4556__auto___53379 = cljs.core.chunk_first(seq__51943_53377__$1);
var G__53380 = cljs.core.chunk_rest(seq__51943_53377__$1);
var G__53381 = c__4556__auto___53379;
var G__53382 = cljs.core.count(c__4556__auto___53379);
var G__53383 = (0);
seq__51943_53363 = G__53380;
chunk__51944_53364 = G__53381;
count__51945_53365 = G__53382;
i__51946_53366 = G__53383;
continue;
} else {
var vec__51965_53385 = cljs.core.first(seq__51943_53377__$1);
var n_53386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51965_53385,(0),null);
var meth_53387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51965_53385,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_53386," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53387))){
cljs.compiler.emit_variadic_fn_method(meth_53387);
} else {
cljs.compiler.emit_fn_method(meth_53387);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__53392 = cljs.core.next(seq__51943_53377__$1);
var G__53393 = null;
var G__53394 = (0);
var G__53395 = (0);
seq__51943_53363 = G__53392;
chunk__51944_53364 = G__53393;
count__51945_53365 = G__53394;
i__51946_53366 = G__53395;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53351," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_53352),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_53352)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_53352));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__51971_53398 = cljs.core.seq(ms_53354);
var chunk__51972_53399 = null;
var count__51973_53400 = (0);
var i__51974_53401 = (0);
while(true){
if((i__51974_53401 < count__51973_53400)){
var vec__51987_53402 = chunk__51972_53399.cljs$core$IIndexed$_nth$arity$2(null,i__51974_53401);
var n_53403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51987_53402,(0),null);
var meth_53404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51987_53402,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53404))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_53405 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_53405," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_53408 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_53405," = new cljs.core.IndexedSeq(",a_53408,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_53403,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_53352)),(((cljs.core.count(maxparams_53352) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_53405,");"], 0));
} else {
var pcnt_53409 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_53404));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_53409,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_53403,".call(this",(((pcnt_53409 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_53409,maxparams_53352)),null,(1),null)),(2),null))),");");
}


var G__53414 = seq__51971_53398;
var G__53415 = chunk__51972_53399;
var G__53416 = count__51973_53400;
var G__53417 = (i__51974_53401 + (1));
seq__51971_53398 = G__53414;
chunk__51972_53399 = G__53415;
count__51973_53400 = G__53416;
i__51974_53401 = G__53417;
continue;
} else {
var temp__5735__auto___53418 = cljs.core.seq(seq__51971_53398);
if(temp__5735__auto___53418){
var seq__51971_53419__$1 = temp__5735__auto___53418;
if(cljs.core.chunked_seq_QMARK_(seq__51971_53419__$1)){
var c__4556__auto___53420 = cljs.core.chunk_first(seq__51971_53419__$1);
var G__53421 = cljs.core.chunk_rest(seq__51971_53419__$1);
var G__53422 = c__4556__auto___53420;
var G__53423 = cljs.core.count(c__4556__auto___53420);
var G__53424 = (0);
seq__51971_53398 = G__53421;
chunk__51972_53399 = G__53422;
count__51973_53400 = G__53423;
i__51974_53401 = G__53424;
continue;
} else {
var vec__51990_53425 = cljs.core.first(seq__51971_53419__$1);
var n_53426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51990_53425,(0),null);
var meth_53427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51990_53425,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53427))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_53428 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_53428," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_53429 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_53428," = new cljs.core.IndexedSeq(",a_53429,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_53426,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_53352)),(((cljs.core.count(maxparams_53352) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_53428,");"], 0));
} else {
var pcnt_53430 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_53427));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_53430,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_53426,".call(this",(((pcnt_53430 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_53430,maxparams_53352)),null,(1),null)),(2),null))),");");
}


var G__53431 = cljs.core.next(seq__51971_53419__$1);
var G__53432 = null;
var G__53433 = (0);
var G__53434 = (0);
seq__51971_53398 = G__53431;
chunk__51972_53399 = G__53432;
count__51973_53400 = G__53433;
i__51974_53401 = G__53434;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_53435 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_53354)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_53435,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53351,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53351,".cljs$lang$applyTo = ",cljs.core.some((function (p1__51932_SHARP_){
var vec__51997 = p1__51932_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51997,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51997,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_53354),".cljs$lang$applyTo;");
} else {
}

var seq__52003_53438 = cljs.core.seq(ms_53354);
var chunk__52004_53439 = null;
var count__52005_53440 = (0);
var i__52006_53441 = (0);
while(true){
if((i__52006_53441 < count__52005_53440)){
var vec__52031_53442 = chunk__52004_53439.cljs$core$IIndexed$_nth$arity$2(null,i__52006_53441);
var n_53443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52031_53442,(0),null);
var meth_53444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52031_53442,(1),null);
var c_53446 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_53444));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53444))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53351,".cljs$core$IFn$_invoke$arity$variadic = ",n_53443,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_53351,".cljs$core$IFn$_invoke$arity$",c_53446," = ",n_53443,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__53447 = seq__52003_53438;
var G__53448 = chunk__52004_53439;
var G__53449 = count__52005_53440;
var G__53450 = (i__52006_53441 + (1));
seq__52003_53438 = G__53447;
chunk__52004_53439 = G__53448;
count__52005_53440 = G__53449;
i__52006_53441 = G__53450;
continue;
} else {
var temp__5735__auto___53451 = cljs.core.seq(seq__52003_53438);
if(temp__5735__auto___53451){
var seq__52003_53465__$1 = temp__5735__auto___53451;
if(cljs.core.chunked_seq_QMARK_(seq__52003_53465__$1)){
var c__4556__auto___53477 = cljs.core.chunk_first(seq__52003_53465__$1);
var G__53478 = cljs.core.chunk_rest(seq__52003_53465__$1);
var G__53479 = c__4556__auto___53477;
var G__53480 = cljs.core.count(c__4556__auto___53477);
var G__53481 = (0);
seq__52003_53438 = G__53478;
chunk__52004_53439 = G__53479;
count__52005_53440 = G__53480;
i__52006_53441 = G__53481;
continue;
} else {
var vec__52034_53482 = cljs.core.first(seq__52003_53465__$1);
var n_53483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52034_53482,(0),null);
var meth_53484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52034_53482,(1),null);
var c_53485 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_53484));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53484))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53351,".cljs$core$IFn$_invoke$arity$variadic = ",n_53483,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_53351,".cljs$core$IFn$_invoke$arity$",c_53485," = ",n_53483,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__53486 = cljs.core.next(seq__52003_53465__$1);
var G__53487 = null;
var G__53488 = (0);
var G__53489 = (0);
seq__52003_53438 = G__53486;
chunk__52004_53439 = G__53487;
count__52005_53440 = G__53488;
i__52006_53441 = G__53489;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_53351,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__52037){
var map__52038 = p__52037;
var map__52038__$1 = (((((!((map__52038 == null))))?(((((map__52038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52038):map__52038);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52038__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52038__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52038__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__52040_53493 = cljs.core.seq(statements);
var chunk__52041_53494 = null;
var count__52042_53495 = (0);
var i__52043_53496 = (0);
while(true){
if((i__52043_53496 < count__52042_53495)){
var s_53498 = chunk__52041_53494.cljs$core$IIndexed$_nth$arity$2(null,i__52043_53496);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_53498);


var G__53499 = seq__52040_53493;
var G__53500 = chunk__52041_53494;
var G__53501 = count__52042_53495;
var G__53502 = (i__52043_53496 + (1));
seq__52040_53493 = G__53499;
chunk__52041_53494 = G__53500;
count__52042_53495 = G__53501;
i__52043_53496 = G__53502;
continue;
} else {
var temp__5735__auto___53503 = cljs.core.seq(seq__52040_53493);
if(temp__5735__auto___53503){
var seq__52040_53505__$1 = temp__5735__auto___53503;
if(cljs.core.chunked_seq_QMARK_(seq__52040_53505__$1)){
var c__4556__auto___53506 = cljs.core.chunk_first(seq__52040_53505__$1);
var G__53507 = cljs.core.chunk_rest(seq__52040_53505__$1);
var G__53508 = c__4556__auto___53506;
var G__53509 = cljs.core.count(c__4556__auto___53506);
var G__53510 = (0);
seq__52040_53493 = G__53507;
chunk__52041_53494 = G__53508;
count__52042_53495 = G__53509;
i__52043_53496 = G__53510;
continue;
} else {
var s_53511 = cljs.core.first(seq__52040_53505__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_53511);


var G__53514 = cljs.core.next(seq__52040_53505__$1);
var G__53515 = null;
var G__53516 = (0);
var G__53517 = (0);
seq__52040_53493 = G__53514;
chunk__52041_53494 = G__53515;
count__52042_53495 = G__53516;
i__52043_53496 = G__53517;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__52058){
var map__52063 = p__52058;
var map__52063__$1 = (((((!((map__52063 == null))))?(((((map__52063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52063):map__52063);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52063__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52063__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52063__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52063__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52063__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__52090,is_loop){
var map__52091 = p__52090;
var map__52091__$1 = (((((!((map__52091 == null))))?(((((map__52091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52091):map__52091);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52091__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52091__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52091__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__52094_53522 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__52095_53523 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__52095_53523);

try{var seq__52098_53524 = cljs.core.seq(bindings);
var chunk__52099_53525 = null;
var count__52100_53526 = (0);
var i__52101_53527 = (0);
while(true){
if((i__52101_53527 < count__52100_53526)){
var map__52106_53529 = chunk__52099_53525.cljs$core$IIndexed$_nth$arity$2(null,i__52101_53527);
var map__52106_53530__$1 = (((((!((map__52106_53529 == null))))?(((((map__52106_53529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52106_53529.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52106_53529):map__52106_53529);
var binding_53531 = map__52106_53530__$1;
var init_53532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52106_53530__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_53531);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_53532,";");


var G__53533 = seq__52098_53524;
var G__53534 = chunk__52099_53525;
var G__53535 = count__52100_53526;
var G__53536 = (i__52101_53527 + (1));
seq__52098_53524 = G__53533;
chunk__52099_53525 = G__53534;
count__52100_53526 = G__53535;
i__52101_53527 = G__53536;
continue;
} else {
var temp__5735__auto___53537 = cljs.core.seq(seq__52098_53524);
if(temp__5735__auto___53537){
var seq__52098_53538__$1 = temp__5735__auto___53537;
if(cljs.core.chunked_seq_QMARK_(seq__52098_53538__$1)){
var c__4556__auto___53539 = cljs.core.chunk_first(seq__52098_53538__$1);
var G__53540 = cljs.core.chunk_rest(seq__52098_53538__$1);
var G__53541 = c__4556__auto___53539;
var G__53542 = cljs.core.count(c__4556__auto___53539);
var G__53543 = (0);
seq__52098_53524 = G__53540;
chunk__52099_53525 = G__53541;
count__52100_53526 = G__53542;
i__52101_53527 = G__53543;
continue;
} else {
var map__52115_53544 = cljs.core.first(seq__52098_53538__$1);
var map__52115_53545__$1 = (((((!((map__52115_53544 == null))))?(((((map__52115_53544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52115_53544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52115_53544):map__52115_53544);
var binding_53546 = map__52115_53545__$1;
var init_53547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52115_53545__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_53546);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_53547,";");


var G__53549 = cljs.core.next(seq__52098_53538__$1);
var G__53550 = null;
var G__53551 = (0);
var G__53552 = (0);
seq__52098_53524 = G__53549;
chunk__52099_53525 = G__53550;
count__52100_53526 = G__53551;
i__52101_53527 = G__53552;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__52094_53522);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__52118){
var map__52119 = p__52118;
var map__52119__$1 = (((((!((map__52119 == null))))?(((((map__52119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52119):map__52119);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52119__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52119__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52119__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___53578 = cljs.core.count(exprs);
var i_53579 = (0);
while(true){
if((i_53579 < n__4613__auto___53578)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_53579) : temps.call(null,i_53579))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_53579) : exprs.call(null,i_53579)),";");

var G__53581 = (i_53579 + (1));
i_53579 = G__53581;
continue;
} else {
}
break;
}

var n__4613__auto___53582 = cljs.core.count(exprs);
var i_53583 = (0);
while(true){
if((i_53583 < n__4613__auto___53582)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_53583) : params.call(null,i_53583)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_53583) : temps.call(null,i_53583)),";");

var G__53584 = (i_53583 + (1));
i_53583 = G__53584;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__52122){
var map__52123 = p__52122;
var map__52123__$1 = (((((!((map__52123 == null))))?(((((map__52123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52123):map__52123);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__52125_53609 = cljs.core.seq(bindings);
var chunk__52126_53610 = null;
var count__52127_53612 = (0);
var i__52128_53613 = (0);
while(true){
if((i__52128_53613 < count__52127_53612)){
var map__52133_53615 = chunk__52126_53610.cljs$core$IIndexed$_nth$arity$2(null,i__52128_53613);
var map__52133_53616__$1 = (((((!((map__52133_53615 == null))))?(((((map__52133_53615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52133_53615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52133_53615):map__52133_53615);
var binding_53618 = map__52133_53616__$1;
var init_53619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52133_53616__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_53618)," = ",init_53619,";");


var G__53621 = seq__52125_53609;
var G__53622 = chunk__52126_53610;
var G__53623 = count__52127_53612;
var G__53624 = (i__52128_53613 + (1));
seq__52125_53609 = G__53621;
chunk__52126_53610 = G__53622;
count__52127_53612 = G__53623;
i__52128_53613 = G__53624;
continue;
} else {
var temp__5735__auto___53625 = cljs.core.seq(seq__52125_53609);
if(temp__5735__auto___53625){
var seq__52125_53626__$1 = temp__5735__auto___53625;
if(cljs.core.chunked_seq_QMARK_(seq__52125_53626__$1)){
var c__4556__auto___53627 = cljs.core.chunk_first(seq__52125_53626__$1);
var G__53628 = cljs.core.chunk_rest(seq__52125_53626__$1);
var G__53629 = c__4556__auto___53627;
var G__53630 = cljs.core.count(c__4556__auto___53627);
var G__53631 = (0);
seq__52125_53609 = G__53628;
chunk__52126_53610 = G__53629;
count__52127_53612 = G__53630;
i__52128_53613 = G__53631;
continue;
} else {
var map__52136_53633 = cljs.core.first(seq__52125_53626__$1);
var map__52136_53634__$1 = (((((!((map__52136_53633 == null))))?(((((map__52136_53633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52136_53633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52136_53633):map__52136_53633);
var binding_53635 = map__52136_53634__$1;
var init_53636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52136_53634__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_53635)," = ",init_53636,";");


var G__53641 = cljs.core.next(seq__52125_53626__$1);
var G__53642 = null;
var G__53643 = (0);
var G__53644 = (0);
seq__52125_53609 = G__53641;
chunk__52126_53610 = G__53642;
count__52127_53612 = G__53643;
i__52128_53613 = G__53644;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__52142){
var map__52143 = p__52142;
var map__52143__$1 = (((((!((map__52143 == null))))?(((((map__52143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52143):map__52143);
var expr = map__52143__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52143__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52143__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52143__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_(tag)))){
if(cljs.core.not((function (){var fexpr__52166 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__52166.cljs$core$IFn$_invoke$arity$1 ? fexpr__52166.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__52166.call(null,tag));
})())){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__52170 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__52170.cljs$core$IFn$_invoke$arity$1 ? fexpr__52170.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__52170.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__52145 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__52140_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52140_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__52141_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52141_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52145,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52145,(1),null);
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_53716 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_53716,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_53717 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_53717,args)),(((mfa_53717 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_53717,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var G__52179 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__52178 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__52178.cljs$core$IFn$_invoke$arity$1 ? fexpr__52178.cljs$core$IFn$_invoke$arity$1(G__52179) : fexpr__52178.call(null,G__52179));
} else {
return and__4115__auto__;
}
})())){
var fprop_53722 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_53722," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_53722,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_53722," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_53722,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__52180){
var map__52183 = p__52180;
var map__52183__$1 = (((((!((map__52183 == null))))?(((((map__52183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52183):map__52183);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52183__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52183__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52183__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__52189){
var map__52190 = p__52189;
var map__52190__$1 = (((((!((map__52190 == null))))?(((((map__52190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52190):map__52190);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52190__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52190__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52190__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__52198 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__52198__$1 = (((((!((map__52198 == null))))?(((((map__52198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52198):map__52198);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52198__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52198__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__52199 = options;
var map__52199__$1 = (((((!((map__52199 == null))))?(((((map__52199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52199):map__52199);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52199__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52199__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52199__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__52200 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__52209 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__52209__$1 = (((((!((map__52209 == null))))?(((((map__52209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52209):map__52209);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52209__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52209__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52200,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52200,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__52211_53778 = cljs.core.seq(libs_to_load);
var chunk__52212_53779 = null;
var count__52213_53780 = (0);
var i__52214_53781 = (0);
while(true){
if((i__52214_53781 < count__52213_53780)){
var lib_53782 = chunk__52212_53779.cljs$core$IIndexed$_nth$arity$2(null,i__52214_53781);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_53782)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53782),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53782),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53782),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53782),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_53782,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53782),"');");
}

}
}
}


var G__53791 = seq__52211_53778;
var G__53792 = chunk__52212_53779;
var G__53793 = count__52213_53780;
var G__53794 = (i__52214_53781 + (1));
seq__52211_53778 = G__53791;
chunk__52212_53779 = G__53792;
count__52213_53780 = G__53793;
i__52214_53781 = G__53794;
continue;
} else {
var temp__5735__auto___53795 = cljs.core.seq(seq__52211_53778);
if(temp__5735__auto___53795){
var seq__52211_53796__$1 = temp__5735__auto___53795;
if(cljs.core.chunked_seq_QMARK_(seq__52211_53796__$1)){
var c__4556__auto___53797 = cljs.core.chunk_first(seq__52211_53796__$1);
var G__53798 = cljs.core.chunk_rest(seq__52211_53796__$1);
var G__53799 = c__4556__auto___53797;
var G__53800 = cljs.core.count(c__4556__auto___53797);
var G__53801 = (0);
seq__52211_53778 = G__53798;
chunk__52212_53779 = G__53799;
count__52213_53780 = G__53800;
i__52214_53781 = G__53801;
continue;
} else {
var lib_53802 = cljs.core.first(seq__52211_53796__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_53802)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53802),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53802),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53802),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53802),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_53802,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53802),"');");
}

}
}
}


var G__53814 = cljs.core.next(seq__52211_53796__$1);
var G__53815 = null;
var G__53816 = (0);
var G__53817 = (0);
seq__52211_53778 = G__53814;
chunk__52212_53779 = G__53815;
count__52213_53780 = G__53816;
i__52214_53781 = G__53817;
continue;
}
} else {
}
}
break;
}

var seq__52229_53818 = cljs.core.seq(node_libs);
var chunk__52230_53819 = null;
var count__52231_53820 = (0);
var i__52232_53821 = (0);
while(true){
if((i__52232_53821 < count__52231_53820)){
var lib_53822 = chunk__52230_53819.cljs$core$IIndexed$_nth$arity$2(null,i__52232_53821);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_53822)," = require('",lib_53822,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__53823 = seq__52229_53818;
var G__53824 = chunk__52230_53819;
var G__53825 = count__52231_53820;
var G__53826 = (i__52232_53821 + (1));
seq__52229_53818 = G__53823;
chunk__52230_53819 = G__53824;
count__52231_53820 = G__53825;
i__52232_53821 = G__53826;
continue;
} else {
var temp__5735__auto___53827 = cljs.core.seq(seq__52229_53818);
if(temp__5735__auto___53827){
var seq__52229_53828__$1 = temp__5735__auto___53827;
if(cljs.core.chunked_seq_QMARK_(seq__52229_53828__$1)){
var c__4556__auto___53829 = cljs.core.chunk_first(seq__52229_53828__$1);
var G__53830 = cljs.core.chunk_rest(seq__52229_53828__$1);
var G__53831 = c__4556__auto___53829;
var G__53832 = cljs.core.count(c__4556__auto___53829);
var G__53833 = (0);
seq__52229_53818 = G__53830;
chunk__52230_53819 = G__53831;
count__52231_53820 = G__53832;
i__52232_53821 = G__53833;
continue;
} else {
var lib_53836 = cljs.core.first(seq__52229_53828__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_53836)," = require('",lib_53836,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__53838 = cljs.core.next(seq__52229_53828__$1);
var G__53839 = null;
var G__53840 = (0);
var G__53841 = (0);
seq__52229_53818 = G__53838;
chunk__52230_53819 = G__53839;
count__52231_53820 = G__53840;
i__52232_53821 = G__53841;
continue;
}
} else {
}
}
break;
}

var seq__52236_53843 = cljs.core.seq(global_exports_libs);
var chunk__52237_53844 = null;
var count__52238_53845 = (0);
var i__52239_53846 = (0);
while(true){
if((i__52239_53846 < count__52238_53845)){
var lib_53849 = chunk__52237_53844.cljs$core$IIndexed$_nth$arity$2(null,i__52239_53846);
var map__52250_53850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_53849));
var map__52250_53851__$1 = (((((!((map__52250_53850 == null))))?(((((map__52250_53850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52250_53850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52250_53850):map__52250_53850);
var global_exports_53852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52250_53851__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_53852,lib_53849);


var G__53862 = seq__52236_53843;
var G__53863 = chunk__52237_53844;
var G__53864 = count__52238_53845;
var G__53865 = (i__52239_53846 + (1));
seq__52236_53843 = G__53862;
chunk__52237_53844 = G__53863;
count__52238_53845 = G__53864;
i__52239_53846 = G__53865;
continue;
} else {
var temp__5735__auto___53871 = cljs.core.seq(seq__52236_53843);
if(temp__5735__auto___53871){
var seq__52236_53873__$1 = temp__5735__auto___53871;
if(cljs.core.chunked_seq_QMARK_(seq__52236_53873__$1)){
var c__4556__auto___53874 = cljs.core.chunk_first(seq__52236_53873__$1);
var G__53875 = cljs.core.chunk_rest(seq__52236_53873__$1);
var G__53876 = c__4556__auto___53874;
var G__53877 = cljs.core.count(c__4556__auto___53874);
var G__53878 = (0);
seq__52236_53843 = G__53875;
chunk__52237_53844 = G__53876;
count__52238_53845 = G__53877;
i__52239_53846 = G__53878;
continue;
} else {
var lib_53879 = cljs.core.first(seq__52236_53873__$1);
var map__52256_53880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_53879));
var map__52256_53881__$1 = (((((!((map__52256_53880 == null))))?(((((map__52256_53880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52256_53880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52256_53880):map__52256_53880);
var global_exports_53882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52256_53881__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_53882,lib_53879);


var G__53886 = cljs.core.next(seq__52236_53873__$1);
var G__53887 = null;
var G__53888 = (0);
var G__53889 = (0);
seq__52236_53843 = G__53886;
chunk__52237_53844 = G__53887;
count__52238_53845 = G__53888;
i__52239_53846 = G__53889;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__52261){
var map__52262 = p__52261;
var map__52262__$1 = (((((!((map__52262 == null))))?(((((map__52262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52262.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52262):map__52262);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52262__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52262__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52262__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52262__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52262__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52262__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52262__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__52264){
var map__52265 = p__52264;
var map__52265__$1 = (((((!((map__52265 == null))))?(((((map__52265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52265):map__52265);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52265__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52265__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52265__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52265__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52265__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52265__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52265__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__52271){
var map__52272 = p__52271;
var map__52272__$1 = (((((!((map__52272 == null))))?(((((map__52272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52272):map__52272);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52272__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__52281_53909 = cljs.core.seq(protocols);
var chunk__52282_53910 = null;
var count__52283_53911 = (0);
var i__52284_53912 = (0);
while(true){
if((i__52284_53912 < count__52283_53911)){
var protocol_53913 = chunk__52282_53910.cljs$core$IIndexed$_nth$arity$2(null,i__52284_53912);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_53913)),"}");


var G__53914 = seq__52281_53909;
var G__53915 = chunk__52282_53910;
var G__53916 = count__52283_53911;
var G__53917 = (i__52284_53912 + (1));
seq__52281_53909 = G__53914;
chunk__52282_53910 = G__53915;
count__52283_53911 = G__53916;
i__52284_53912 = G__53917;
continue;
} else {
var temp__5735__auto___53918 = cljs.core.seq(seq__52281_53909);
if(temp__5735__auto___53918){
var seq__52281_53919__$1 = temp__5735__auto___53918;
if(cljs.core.chunked_seq_QMARK_(seq__52281_53919__$1)){
var c__4556__auto___53920 = cljs.core.chunk_first(seq__52281_53919__$1);
var G__53921 = cljs.core.chunk_rest(seq__52281_53919__$1);
var G__53922 = c__4556__auto___53920;
var G__53923 = cljs.core.count(c__4556__auto___53920);
var G__53924 = (0);
seq__52281_53909 = G__53921;
chunk__52282_53910 = G__53922;
count__52283_53911 = G__53923;
i__52284_53912 = G__53924;
continue;
} else {
var protocol_53925 = cljs.core.first(seq__52281_53919__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_53925)),"}");


var G__53926 = cljs.core.next(seq__52281_53919__$1);
var G__53927 = null;
var G__53928 = (0);
var G__53929 = (0);
seq__52281_53909 = G__53926;
chunk__52282_53910 = G__53927;
count__52283_53911 = G__53928;
i__52284_53912 = G__53929;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__52287_53930 = cljs.core.seq(fields__$1);
var chunk__52288_53931 = null;
var count__52289_53932 = (0);
var i__52290_53933 = (0);
while(true){
if((i__52290_53933 < count__52289_53932)){
var fld_53934 = chunk__52288_53931.cljs$core$IIndexed$_nth$arity$2(null,i__52290_53933);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_53934," = ",fld_53934,";");


var G__53935 = seq__52287_53930;
var G__53936 = chunk__52288_53931;
var G__53937 = count__52289_53932;
var G__53938 = (i__52290_53933 + (1));
seq__52287_53930 = G__53935;
chunk__52288_53931 = G__53936;
count__52289_53932 = G__53937;
i__52290_53933 = G__53938;
continue;
} else {
var temp__5735__auto___53941 = cljs.core.seq(seq__52287_53930);
if(temp__5735__auto___53941){
var seq__52287_53943__$1 = temp__5735__auto___53941;
if(cljs.core.chunked_seq_QMARK_(seq__52287_53943__$1)){
var c__4556__auto___53944 = cljs.core.chunk_first(seq__52287_53943__$1);
var G__53945 = cljs.core.chunk_rest(seq__52287_53943__$1);
var G__53946 = c__4556__auto___53944;
var G__53947 = cljs.core.count(c__4556__auto___53944);
var G__53948 = (0);
seq__52287_53930 = G__53945;
chunk__52288_53931 = G__53946;
count__52289_53932 = G__53947;
i__52290_53933 = G__53948;
continue;
} else {
var fld_53949 = cljs.core.first(seq__52287_53943__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_53949," = ",fld_53949,";");


var G__53950 = cljs.core.next(seq__52287_53943__$1);
var G__53951 = null;
var G__53952 = (0);
var G__53953 = (0);
seq__52287_53930 = G__53950;
chunk__52288_53931 = G__53951;
count__52289_53932 = G__53952;
i__52290_53933 = G__53953;
continue;
}
} else {
}
}
break;
}

var seq__52294_53954 = cljs.core.seq(pmasks);
var chunk__52295_53955 = null;
var count__52296_53956 = (0);
var i__52297_53957 = (0);
while(true){
if((i__52297_53957 < count__52296_53956)){
var vec__52309_53961 = chunk__52295_53955.cljs$core$IIndexed$_nth$arity$2(null,i__52297_53957);
var pno_53962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52309_53961,(0),null);
var pmask_53963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52309_53961,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_53962,"$ = ",pmask_53963,";");


var G__53964 = seq__52294_53954;
var G__53965 = chunk__52295_53955;
var G__53966 = count__52296_53956;
var G__53967 = (i__52297_53957 + (1));
seq__52294_53954 = G__53964;
chunk__52295_53955 = G__53965;
count__52296_53956 = G__53966;
i__52297_53957 = G__53967;
continue;
} else {
var temp__5735__auto___53968 = cljs.core.seq(seq__52294_53954);
if(temp__5735__auto___53968){
var seq__52294_53969__$1 = temp__5735__auto___53968;
if(cljs.core.chunked_seq_QMARK_(seq__52294_53969__$1)){
var c__4556__auto___53970 = cljs.core.chunk_first(seq__52294_53969__$1);
var G__53971 = cljs.core.chunk_rest(seq__52294_53969__$1);
var G__53972 = c__4556__auto___53970;
var G__53973 = cljs.core.count(c__4556__auto___53970);
var G__53974 = (0);
seq__52294_53954 = G__53971;
chunk__52295_53955 = G__53972;
count__52296_53956 = G__53973;
i__52297_53957 = G__53974;
continue;
} else {
var vec__52312_53975 = cljs.core.first(seq__52294_53969__$1);
var pno_53976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52312_53975,(0),null);
var pmask_53977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52312_53975,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_53976,"$ = ",pmask_53977,";");


var G__53978 = cljs.core.next(seq__52294_53969__$1);
var G__53979 = null;
var G__53980 = (0);
var G__53981 = (0);
seq__52294_53954 = G__53978;
chunk__52295_53955 = G__53979;
count__52296_53956 = G__53980;
i__52297_53957 = G__53981;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__52315){
var map__52316 = p__52315;
var map__52316__$1 = (((((!((map__52316 == null))))?(((((map__52316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52316):map__52316);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52316__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52316__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52316__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52316__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52316__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__52318_53987 = cljs.core.seq(protocols);
var chunk__52319_53988 = null;
var count__52320_53989 = (0);
var i__52321_53990 = (0);
while(true){
if((i__52321_53990 < count__52320_53989)){
var protocol_53991 = chunk__52319_53988.cljs$core$IIndexed$_nth$arity$2(null,i__52321_53990);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_53991)),"}");


var G__53992 = seq__52318_53987;
var G__53993 = chunk__52319_53988;
var G__53994 = count__52320_53989;
var G__53995 = (i__52321_53990 + (1));
seq__52318_53987 = G__53992;
chunk__52319_53988 = G__53993;
count__52320_53989 = G__53994;
i__52321_53990 = G__53995;
continue;
} else {
var temp__5735__auto___53997 = cljs.core.seq(seq__52318_53987);
if(temp__5735__auto___53997){
var seq__52318_53998__$1 = temp__5735__auto___53997;
if(cljs.core.chunked_seq_QMARK_(seq__52318_53998__$1)){
var c__4556__auto___53999 = cljs.core.chunk_first(seq__52318_53998__$1);
var G__54000 = cljs.core.chunk_rest(seq__52318_53998__$1);
var G__54001 = c__4556__auto___53999;
var G__54002 = cljs.core.count(c__4556__auto___53999);
var G__54003 = (0);
seq__52318_53987 = G__54000;
chunk__52319_53988 = G__54001;
count__52320_53989 = G__54002;
i__52321_53990 = G__54003;
continue;
} else {
var protocol_54007 = cljs.core.first(seq__52318_53998__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_54007)),"}");


var G__54012 = cljs.core.next(seq__52318_53998__$1);
var G__54013 = null;
var G__54014 = (0);
var G__54015 = (0);
seq__52318_53987 = G__54012;
chunk__52319_53988 = G__54013;
count__52320_53989 = G__54014;
i__52321_53990 = G__54015;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__52326_54016 = cljs.core.seq(fields__$1);
var chunk__52327_54017 = null;
var count__52328_54018 = (0);
var i__52329_54019 = (0);
while(true){
if((i__52329_54019 < count__52328_54018)){
var fld_54023 = chunk__52327_54017.cljs$core$IIndexed$_nth$arity$2(null,i__52329_54019);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_54023," = ",fld_54023,";");


var G__54024 = seq__52326_54016;
var G__54025 = chunk__52327_54017;
var G__54026 = count__52328_54018;
var G__54027 = (i__52329_54019 + (1));
seq__52326_54016 = G__54024;
chunk__52327_54017 = G__54025;
count__52328_54018 = G__54026;
i__52329_54019 = G__54027;
continue;
} else {
var temp__5735__auto___54028 = cljs.core.seq(seq__52326_54016);
if(temp__5735__auto___54028){
var seq__52326_54029__$1 = temp__5735__auto___54028;
if(cljs.core.chunked_seq_QMARK_(seq__52326_54029__$1)){
var c__4556__auto___54030 = cljs.core.chunk_first(seq__52326_54029__$1);
var G__54031 = cljs.core.chunk_rest(seq__52326_54029__$1);
var G__54032 = c__4556__auto___54030;
var G__54033 = cljs.core.count(c__4556__auto___54030);
var G__54034 = (0);
seq__52326_54016 = G__54031;
chunk__52327_54017 = G__54032;
count__52328_54018 = G__54033;
i__52329_54019 = G__54034;
continue;
} else {
var fld_54035 = cljs.core.first(seq__52326_54029__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_54035," = ",fld_54035,";");


var G__54037 = cljs.core.next(seq__52326_54029__$1);
var G__54038 = null;
var G__54039 = (0);
var G__54040 = (0);
seq__52326_54016 = G__54037;
chunk__52327_54017 = G__54038;
count__52328_54018 = G__54039;
i__52329_54019 = G__54040;
continue;
}
} else {
}
}
break;
}

var seq__52330_54041 = cljs.core.seq(pmasks);
var chunk__52331_54042 = null;
var count__52332_54043 = (0);
var i__52333_54044 = (0);
while(true){
if((i__52333_54044 < count__52332_54043)){
var vec__52343_54045 = chunk__52331_54042.cljs$core$IIndexed$_nth$arity$2(null,i__52333_54044);
var pno_54046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52343_54045,(0),null);
var pmask_54047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52343_54045,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_54046,"$ = ",pmask_54047,";");


var G__54048 = seq__52330_54041;
var G__54049 = chunk__52331_54042;
var G__54050 = count__52332_54043;
var G__54051 = (i__52333_54044 + (1));
seq__52330_54041 = G__54048;
chunk__52331_54042 = G__54049;
count__52332_54043 = G__54050;
i__52333_54044 = G__54051;
continue;
} else {
var temp__5735__auto___54052 = cljs.core.seq(seq__52330_54041);
if(temp__5735__auto___54052){
var seq__52330_54053__$1 = temp__5735__auto___54052;
if(cljs.core.chunked_seq_QMARK_(seq__52330_54053__$1)){
var c__4556__auto___54054 = cljs.core.chunk_first(seq__52330_54053__$1);
var G__54055 = cljs.core.chunk_rest(seq__52330_54053__$1);
var G__54056 = c__4556__auto___54054;
var G__54057 = cljs.core.count(c__4556__auto___54054);
var G__54058 = (0);
seq__52330_54041 = G__54055;
chunk__52331_54042 = G__54056;
count__52332_54043 = G__54057;
i__52333_54044 = G__54058;
continue;
} else {
var vec__52346_54059 = cljs.core.first(seq__52330_54053__$1);
var pno_54060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52346_54059,(0),null);
var pmask_54061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52346_54059,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_54060,"$ = ",pmask_54061,";");


var G__54105 = cljs.core.next(seq__52330_54053__$1);
var G__54106 = null;
var G__54107 = (0);
var G__54108 = (0);
seq__52330_54041 = G__54105;
chunk__52331_54042 = G__54106;
count__52332_54043 = G__54107;
i__52333_54044 = G__54108;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__52350){
var map__52352 = p__52350;
var map__52352__$1 = (((((!((map__52352 == null))))?(((((map__52352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52352):map__52352);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52352__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52352__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52352__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52352__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52352__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__52363){
var map__52364 = p__52363;
var map__52364__$1 = (((((!((map__52364 == null))))?(((((map__52364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52364):map__52364);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52364__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52364__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52364__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52364__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52364__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__52399 = cljs.core.seq(table);
var chunk__52400 = null;
var count__52401 = (0);
var i__52402 = (0);
while(true){
if((i__52402 < count__52401)){
var vec__52442 = chunk__52400.cljs$core$IIndexed$_nth$arity$2(null,i__52402);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52442,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52442,(1),null);
var ns_54123 = cljs.core.namespace(sym);
var name_54124 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__54125 = seq__52399;
var G__54126 = chunk__52400;
var G__54127 = count__52401;
var G__54128 = (i__52402 + (1));
seq__52399 = G__54125;
chunk__52400 = G__54126;
count__52401 = G__54127;
i__52402 = G__54128;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52399);
if(temp__5735__auto__){
var seq__52399__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52399__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52399__$1);
var G__54130 = cljs.core.chunk_rest(seq__52399__$1);
var G__54131 = c__4556__auto__;
var G__54132 = cljs.core.count(c__4556__auto__);
var G__54133 = (0);
seq__52399 = G__54130;
chunk__52400 = G__54131;
count__52401 = G__54132;
i__52402 = G__54133;
continue;
} else {
var vec__52451 = cljs.core.first(seq__52399__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52451,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52451,(1),null);
var ns_54134 = cljs.core.namespace(sym);
var name_54135 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__54139 = cljs.core.next(seq__52399__$1);
var G__54140 = null;
var G__54141 = (0);
var G__54142 = (0);
seq__52399 = G__54139;
chunk__52400 = G__54140;
count__52401 = G__54141;
i__52402 = G__54142;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__52459 = arguments.length;
switch (G__52459) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_54147 = cljs.core.first(ks);
var vec__52460_54148 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_54147);
var top_54149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52460_54148,(0),null);
var prefix_SINGLEQUOTE__54150 = vec__52460_54148;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_54147)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__54150) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_54149)) || (cljs.core.contains_QMARK_(known_externs,top_54149)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__54150)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_54149);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__54150)),";");
}
} else {
}

var m_54152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_54147);
if(cljs.core.empty_QMARK_(m_54152)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__54150,m_54152,top_level,known_externs);
}

var G__54153 = cljs.core.next(ks);
ks = G__54153;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
