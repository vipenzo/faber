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
var map__51277 = s;
var map__51277__$1 = (((((!((map__51277 == null))))?(((((map__51277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51277):map__51277);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51277__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51277__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__51280 = info;
var map__51281 = G__51280;
var map__51281__$1 = (((((!((map__51281 == null))))?(((((map__51281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51281):map__51281);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51281__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__51280__$1 = G__51280;
while(true){
var d__$2 = d__$1;
var map__51285 = G__51280__$1;
var map__51285__$1 = (((((!((map__51285 == null))))?(((((map__51285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51285):map__51285);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51285__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__52338 = (d__$2 + (1));
var G__52339 = shadow__$2;
d__$1 = G__52338;
G__51280__$1 = G__52339;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__51287){
var map__51288 = p__51287;
var map__51288__$1 = (((((!((map__51288 == null))))?(((((map__51288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51288):map__51288);
var name_var = map__51288__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51288__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51288__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__51290 = info;
var map__51290__$1 = (((((!((map__51290 == null))))?(((((map__51290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51290):map__51290);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51290__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51290__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__51292 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__51292) : cljs.compiler.munge.call(null,G__51292));
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
var G__51295 = arguments.length;
switch (G__51295) {
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
var ms = (function (){var fexpr__51296 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__51296.cljs$core$IFn$_invoke$arity$1 ? fexpr__51296.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__51296.call(null,ss__$3));
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
var G__51298 = cp;
switch (G__51298) {
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
var seq__51300_52348 = cljs.core.seq(s);
var chunk__51301_52349 = null;
var count__51302_52350 = (0);
var i__51303_52351 = (0);
while(true){
if((i__51303_52351 < count__51302_52350)){
var c_52353 = chunk__51301_52349.cljs$core$IIndexed$_nth$arity$2(null,i__51303_52351);
sb.append(cljs.compiler.escape_char(c_52353));


var G__52355 = seq__51300_52348;
var G__52356 = chunk__51301_52349;
var G__52357 = count__51302_52350;
var G__52358 = (i__51303_52351 + (1));
seq__51300_52348 = G__52355;
chunk__51301_52349 = G__52356;
count__51302_52350 = G__52357;
i__51303_52351 = G__52358;
continue;
} else {
var temp__5735__auto___52360 = cljs.core.seq(seq__51300_52348);
if(temp__5735__auto___52360){
var seq__51300_52361__$1 = temp__5735__auto___52360;
if(cljs.core.chunked_seq_QMARK_(seq__51300_52361__$1)){
var c__4556__auto___52362 = cljs.core.chunk_first(seq__51300_52361__$1);
var G__52363 = cljs.core.chunk_rest(seq__51300_52361__$1);
var G__52364 = c__4556__auto___52362;
var G__52365 = cljs.core.count(c__4556__auto___52362);
var G__52366 = (0);
seq__51300_52348 = G__52363;
chunk__51301_52349 = G__52364;
count__51302_52350 = G__52365;
i__51303_52351 = G__52366;
continue;
} else {
var c_52401 = cljs.core.first(seq__51300_52361__$1);
sb.append(cljs.compiler.escape_char(c_52401));


var G__52402 = cljs.core.next(seq__51300_52361__$1);
var G__52403 = null;
var G__52404 = (0);
var G__52405 = (0);
seq__51300_52348 = G__52402;
chunk__51301_52349 = G__52403;
count__51302_52350 = G__52404;
i__51303_52351 = G__52405;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51346 = cljs.core.get_global_hierarchy;
return (fexpr__51346.cljs$core$IFn$_invoke$arity$0 ? fexpr__51346.cljs$core$IFn$_invoke$arity$0() : fexpr__51346.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__51351_52427 = ast;
var map__51351_52428__$1 = (((((!((map__51351_52427 == null))))?(((((map__51351_52427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51351_52427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51351_52427):map__51351_52427);
var env_52429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51351_52428__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_52429))){
var map__51356_52444 = env_52429;
var map__51356_52445__$1 = (((((!((map__51356_52444 == null))))?(((((map__51356_52444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51356_52444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51356_52444):map__51356_52444);
var line_52446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51356_52445__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51356_52445__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__51358 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__51360 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__51359 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__51359.cljs$core$IFn$_invoke$arity$1 ? fexpr__51359.cljs$core$IFn$_invoke$arity$1(G__51360) : fexpr__51359.call(null,G__51360));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51358,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__51358;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_52446 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_52447)?(column_52447 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__51369 = arguments.length;
switch (G__51369) {
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
var len__4736__auto___52454 = arguments.length;
var i__4737__auto___52455 = (0);
while(true){
if((i__4737__auto___52455 < len__4736__auto___52454)){
args_arr__4757__auto__.push((arguments[i__4737__auto___52455]));

var G__52456 = (i__4737__auto___52455 + (1));
i__4737__auto___52455 = G__52456;
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
var s_52459 = (function (){var G__51370 = a;
if((!(typeof a === 'string'))){
return G__51370.toString();
} else {
return G__51370;
}
})();
var temp__5739__auto___52460 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___52460 == null)){
} else {
var sm_data_52461 = temp__5739__auto___52460;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_52461,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__51361_SHARP_){
return (p1__51361_SHARP_ + s_52459.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_52459], 0));

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

var seq__51371 = cljs.core.seq(xs);
var chunk__51372 = null;
var count__51373 = (0);
var i__51374 = (0);
while(true){
if((i__51374 < count__51373)){
var x = chunk__51372.cljs$core$IIndexed$_nth$arity$2(null,i__51374);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__52463 = seq__51371;
var G__52464 = chunk__51372;
var G__52465 = count__51373;
var G__52466 = (i__51374 + (1));
seq__51371 = G__52463;
chunk__51372 = G__52464;
count__51373 = G__52465;
i__51374 = G__52466;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51371);
if(temp__5735__auto__){
var seq__51371__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51371__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51371__$1);
var G__52467 = cljs.core.chunk_rest(seq__51371__$1);
var G__52468 = c__4556__auto__;
var G__52469 = cljs.core.count(c__4556__auto__);
var G__52470 = (0);
seq__51371 = G__52467;
chunk__51372 = G__52468;
count__51373 = G__52469;
i__51374 = G__52470;
continue;
} else {
var x = cljs.core.first(seq__51371__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__52471 = cljs.core.next(seq__51371__$1);
var G__52472 = null;
var G__52473 = (0);
var G__52474 = (0);
seq__51371 = G__52471;
chunk__51372 = G__52472;
count__51373 = G__52473;
i__51374 = G__52474;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq51363){
var G__51364 = cljs.core.first(seq51363);
var seq51363__$1 = cljs.core.next(seq51363);
var G__51365 = cljs.core.first(seq51363__$1);
var seq51363__$2 = cljs.core.next(seq51363__$1);
var G__51366 = cljs.core.first(seq51363__$2);
var seq51363__$3 = cljs.core.next(seq51363__$2);
var G__51367 = cljs.core.first(seq51363__$3);
var seq51363__$4 = cljs.core.next(seq51363__$3);
var G__51368 = cljs.core.first(seq51363__$4);
var seq51363__$5 = cljs.core.next(seq51363__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51364,G__51365,G__51366,G__51367,G__51368,seq51363__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__51375){
var map__51376 = p__51375;
var map__51376__$1 = (((((!((map__51376 == null))))?(((((map__51376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51376):map__51376);
var m = map__51376__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51376__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__51387 = arguments.length;
switch (G__51387) {
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
var len__4736__auto___52494 = arguments.length;
var i__4737__auto___52495 = (0);
while(true){
if((i__4737__auto___52495 < len__4736__auto___52494)){
args_arr__4757__auto__.push((arguments[i__4737__auto___52495]));

var G__52496 = (i__4737__auto___52495 + (1));
i__4737__auto___52495 = G__52496;
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

var seq__51392_52505 = cljs.core.seq(xs);
var chunk__51393_52506 = null;
var count__51394_52507 = (0);
var i__51395_52508 = (0);
while(true){
if((i__51395_52508 < count__51394_52507)){
var x_52509 = chunk__51393_52506.cljs$core$IIndexed$_nth$arity$2(null,i__51395_52508);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_52509);


var G__52510 = seq__51392_52505;
var G__52511 = chunk__51393_52506;
var G__52512 = count__51394_52507;
var G__52513 = (i__51395_52508 + (1));
seq__51392_52505 = G__52510;
chunk__51393_52506 = G__52511;
count__51394_52507 = G__52512;
i__51395_52508 = G__52513;
continue;
} else {
var temp__5735__auto___52514 = cljs.core.seq(seq__51392_52505);
if(temp__5735__auto___52514){
var seq__51392_52515__$1 = temp__5735__auto___52514;
if(cljs.core.chunked_seq_QMARK_(seq__51392_52515__$1)){
var c__4556__auto___52516 = cljs.core.chunk_first(seq__51392_52515__$1);
var G__52517 = cljs.core.chunk_rest(seq__51392_52515__$1);
var G__52518 = c__4556__auto___52516;
var G__52519 = cljs.core.count(c__4556__auto___52516);
var G__52520 = (0);
seq__51392_52505 = G__52517;
chunk__51393_52506 = G__52518;
count__51394_52507 = G__52519;
i__51395_52508 = G__52520;
continue;
} else {
var x_52521 = cljs.core.first(seq__51392_52515__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_52521);


var G__52522 = cljs.core.next(seq__51392_52515__$1);
var G__52523 = null;
var G__52524 = (0);
var G__52525 = (0);
seq__51392_52505 = G__52522;
chunk__51393_52506 = G__52523;
count__51394_52507 = G__52524;
i__51395_52508 = G__52525;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq51381){
var G__51382 = cljs.core.first(seq51381);
var seq51381__$1 = cljs.core.next(seq51381);
var G__51383 = cljs.core.first(seq51381__$1);
var seq51381__$2 = cljs.core.next(seq51381__$1);
var G__51384 = cljs.core.first(seq51381__$2);
var seq51381__$3 = cljs.core.next(seq51381__$2);
var G__51385 = cljs.core.first(seq51381__$3);
var seq51381__$4 = cljs.core.next(seq51381__$3);
var G__51386 = cljs.core.first(seq51381__$4);
var seq51381__$5 = cljs.core.next(seq51381__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51382,G__51383,G__51384,G__51385,G__51386,seq51381__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51398_52527 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51399_52528 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51400_52529 = true;
var _STAR_print_fn_STAR__temp_val__51401_52530 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51400_52529);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51401_52530);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51399_52528);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51398_52527);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__51404 = cljs.core.get_global_hierarchy;
return (fexpr__51404.cljs$core$IFn$_invoke$arity$0 ? fexpr__51404.cljs$core$IFn$_invoke$arity$0() : fexpr__51404.call(null));
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
var vec__51408 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51408,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51408,(1),null);
var G__51411 = ns;
var G__51412 = name;
var G__51413 = (function (){
var G__51415 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__51415) : cljs.compiler.emit_constant.call(null,G__51415));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__51411,G__51412,G__51413) : cljs.compiler.emit_record_value.call(null,G__51411,G__51412,G__51413));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__51416 = cljs.core.keys(x);
var G__51417 = cljs.core.vals(x);
var G__51418 = cljs.compiler.emit_constants_comma_sep;
var G__51419 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__51416,G__51417,G__51418,G__51419) : cljs.compiler.emit_map.call(null,G__51416,G__51417,G__51418,G__51419));
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
var G__51422 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__51423 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__51422,G__51423) : cljs.compiler.emit_with_meta.call(null,G__51422,G__51423));
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
var vec__51427 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51427,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51427,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51427,(2),null);
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
var G__51436 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__51436) : x.call(null,G__51436));
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
var G__51437 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__51437) : x.call(null,G__51437));
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
var G__51440 = items;
var G__51441 = (function (p1__51439_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__51439_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__51440,G__51441) : cljs.compiler.emit_js_object.call(null,G__51440,G__51441));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__51444){
var map__51445 = p__51444;
var map__51445__$1 = (((((!((map__51445 == null))))?(((((map__51445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51445):map__51445);
var ast = map__51445__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51445__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51445__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51445__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__51447 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__51447__$1 = (((((!((map__51447 == null))))?(((((map__51447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51447):map__51447);
var cenv = map__51447__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51447__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__51449 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__51454 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__51454) : cljs.compiler.es5_GT__EQ_.call(null,G__51454));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__51449,cljs.analyzer.es5_allowed);
} else {
return G__51449;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__51455 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__51455,reserved);
} else {
return G__51455;
}
})();
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__51456_52594 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__51456_52595__$1 = (((G__51456_52594 instanceof cljs.core.Keyword))?G__51456_52594.fqn:null);
switch (G__51456_52595__$1) {
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__51459){
var map__51460 = p__51459;
var map__51460__$1 = (((((!((map__51460 == null))))?(((((map__51460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51460):map__51460);
var arg = map__51460__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51460__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51460__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51460__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51460__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__51463 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__51463__$1 = (((((!((map__51463 == null))))?(((((map__51463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51463):map__51463);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51463__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__51468){
var map__51469 = p__51468;
var map__51469__$1 = (((((!((map__51469 == null))))?(((((map__51469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51469):map__51469);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51469__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51469__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51469__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__51471_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__51471_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__51477 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__51477) : comma_sep.call(null,G__51477));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__51478 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__51478) : comma_sep.call(null,G__51478));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__51480){
var map__51481 = p__51480;
var map__51481__$1 = (((((!((map__51481 == null))))?(((((map__51481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51481):map__51481);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__51483){
var map__51485 = p__51483;
var map__51485__$1 = (((((!((map__51485 == null))))?(((((map__51485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51485):map__51485);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51485__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51485__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__51492_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__51492_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__51506 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__51506) : comma_sep.call(null,G__51506));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__51508){
var map__51509 = p__51508;
var map__51509__$1 = (((((!((map__51509 == null))))?(((((map__51509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51509):map__51509);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51509__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51509__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5735__auto___52861 = cljs.core.seq(items);
if(temp__5735__auto___52861){
var items_52862__$1 = temp__5735__auto___52861;
var vec__51516_52863 = items_52862__$1;
var seq__51517_52864 = cljs.core.seq(vec__51516_52863);
var first__51518_52865 = cljs.core.first(seq__51517_52864);
var seq__51517_52866__$1 = cljs.core.next(seq__51517_52864);
var vec__51519_52867 = first__51518_52865;
var k_52868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51519_52867,(0),null);
var v_52869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51519_52867,(1),null);
var r_52870 = seq__51517_52866__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_52868),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_52869) : emit_js_object_val.call(null,v_52869)));

var seq__51522_52873 = cljs.core.seq(r_52870);
var chunk__51523_52874 = null;
var count__51524_52875 = (0);
var i__51525_52876 = (0);
while(true){
if((i__51525_52876 < count__51524_52875)){
var vec__51537_52877 = chunk__51523_52874.cljs$core$IIndexed$_nth$arity$2(null,i__51525_52876);
var k_52878__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51537_52877,(0),null);
var v_52879__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51537_52877,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_52878__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_52879__$1) : emit_js_object_val.call(null,v_52879__$1)));


var G__52884 = seq__51522_52873;
var G__52885 = chunk__51523_52874;
var G__52886 = count__51524_52875;
var G__52887 = (i__51525_52876 + (1));
seq__51522_52873 = G__52884;
chunk__51523_52874 = G__52885;
count__51524_52875 = G__52886;
i__51525_52876 = G__52887;
continue;
} else {
var temp__5735__auto___52888__$1 = cljs.core.seq(seq__51522_52873);
if(temp__5735__auto___52888__$1){
var seq__51522_52889__$1 = temp__5735__auto___52888__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51522_52889__$1)){
var c__4556__auto___52890 = cljs.core.chunk_first(seq__51522_52889__$1);
var G__52891 = cljs.core.chunk_rest(seq__51522_52889__$1);
var G__52892 = c__4556__auto___52890;
var G__52893 = cljs.core.count(c__4556__auto___52890);
var G__52894 = (0);
seq__51522_52873 = G__52891;
chunk__51523_52874 = G__52892;
count__51524_52875 = G__52893;
i__51525_52876 = G__52894;
continue;
} else {
var vec__51541_52895 = cljs.core.first(seq__51522_52889__$1);
var k_52897__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51541_52895,(0),null);
var v_52899__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51541_52895,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_52897__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_52899__$1) : emit_js_object_val.call(null,v_52899__$1)));


var G__52900 = cljs.core.next(seq__51522_52889__$1);
var G__52901 = null;
var G__52902 = (0);
var G__52903 = (0);
seq__51522_52873 = G__52900;
chunk__51523_52874 = G__52901;
count__51524_52875 = G__52902;
i__51525_52876 = G__52903;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__51544){
var map__51545 = p__51544;
var map__51545__$1 = (((((!((map__51545 == null))))?(((((map__51545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51545):map__51545);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51545__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51545__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51545__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__51548){
var map__51549 = p__51548;
var map__51549__$1 = (((((!((map__51549 == null))))?(((((map__51549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51549):map__51549);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51549__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51549__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__51553){
var map__51554 = p__51553;
var map__51554__$1 = (((((!((map__51554 == null))))?(((((map__51554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51554):map__51554);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51554__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__51561){
var map__51562 = p__51561;
var map__51562__$1 = (((((!((map__51562 == null))))?(((((map__51562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51562):map__51562);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51562__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51562__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__51569 = cljs.analyzer.unwrap_quote(expr);
var map__51569__$1 = (((((!((map__51569 == null))))?(((((map__51569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51569):map__51569);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51569__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51569__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51569__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__51576 = cljs.analyzer.unwrap_quote(expr);
var map__51576__$1 = (((((!((map__51576 == null))))?(((((map__51576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51576):map__51576);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51576__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51576__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51576__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__51581 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__51581.cljs$core$IFn$_invoke$arity$1 ? fexpr__51581.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__51581.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__51582){
var map__51583 = p__51582;
var map__51583__$1 = (((((!((map__51583 == null))))?(((((map__51583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51583):map__51583);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51583__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51583__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51583__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51583__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51583__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__51585){
var map__51586 = p__51585;
var map__51586__$1 = (((((!((map__51586 == null))))?(((((map__51586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51586):map__51586);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51586__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51586__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51586__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51586__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__51588_52981 = cljs.core.seq(nodes);
var chunk__51589_52982 = null;
var count__51590_52983 = (0);
var i__51591_52984 = (0);
while(true){
if((i__51591_52984 < count__51590_52983)){
var map__51624_52986 = chunk__51589_52982.cljs$core$IIndexed$_nth$arity$2(null,i__51591_52984);
var map__51624_52987__$1 = (((((!((map__51624_52986 == null))))?(((((map__51624_52986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51624_52986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51624_52986):map__51624_52986);
var ts_52988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51624_52987__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__51625_52989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51624_52987__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__51625_52990__$1 = (((((!((map__51625_52989 == null))))?(((((map__51625_52989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51625_52989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51625_52989):map__51625_52989);
var then_52991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51625_52990__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__51629_52994 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_52988));
var chunk__51630_52995 = null;
var count__51631_52996 = (0);
var i__51632_52997 = (0);
while(true){
if((i__51632_52997 < count__51631_52996)){
var test_52998 = chunk__51630_52995.cljs$core$IIndexed$_nth$arity$2(null,i__51632_52997);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_52998,":");


var G__52999 = seq__51629_52994;
var G__53000 = chunk__51630_52995;
var G__53001 = count__51631_52996;
var G__53002 = (i__51632_52997 + (1));
seq__51629_52994 = G__52999;
chunk__51630_52995 = G__53000;
count__51631_52996 = G__53001;
i__51632_52997 = G__53002;
continue;
} else {
var temp__5735__auto___53003 = cljs.core.seq(seq__51629_52994);
if(temp__5735__auto___53003){
var seq__51629_53004__$1 = temp__5735__auto___53003;
if(cljs.core.chunked_seq_QMARK_(seq__51629_53004__$1)){
var c__4556__auto___53005 = cljs.core.chunk_first(seq__51629_53004__$1);
var G__53006 = cljs.core.chunk_rest(seq__51629_53004__$1);
var G__53007 = c__4556__auto___53005;
var G__53008 = cljs.core.count(c__4556__auto___53005);
var G__53009 = (0);
seq__51629_52994 = G__53006;
chunk__51630_52995 = G__53007;
count__51631_52996 = G__53008;
i__51632_52997 = G__53009;
continue;
} else {
var test_53011 = cljs.core.first(seq__51629_53004__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_53011,":");


var G__53012 = cljs.core.next(seq__51629_53004__$1);
var G__53013 = null;
var G__53014 = (0);
var G__53015 = (0);
seq__51629_52994 = G__53012;
chunk__51630_52995 = G__53013;
count__51631_52996 = G__53014;
i__51632_52997 = G__53015;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_52991);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_52991);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__53017 = seq__51588_52981;
var G__53018 = chunk__51589_52982;
var G__53019 = count__51590_52983;
var G__53020 = (i__51591_52984 + (1));
seq__51588_52981 = G__53017;
chunk__51589_52982 = G__53018;
count__51590_52983 = G__53019;
i__51591_52984 = G__53020;
continue;
} else {
var temp__5735__auto___53021 = cljs.core.seq(seq__51588_52981);
if(temp__5735__auto___53021){
var seq__51588_53022__$1 = temp__5735__auto___53021;
if(cljs.core.chunked_seq_QMARK_(seq__51588_53022__$1)){
var c__4556__auto___53023 = cljs.core.chunk_first(seq__51588_53022__$1);
var G__53024 = cljs.core.chunk_rest(seq__51588_53022__$1);
var G__53025 = c__4556__auto___53023;
var G__53026 = cljs.core.count(c__4556__auto___53023);
var G__53027 = (0);
seq__51588_52981 = G__53024;
chunk__51589_52982 = G__53025;
count__51590_52983 = G__53026;
i__51591_52984 = G__53027;
continue;
} else {
var map__51636_53028 = cljs.core.first(seq__51588_53022__$1);
var map__51636_53029__$1 = (((((!((map__51636_53028 == null))))?(((((map__51636_53028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51636_53028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51636_53028):map__51636_53028);
var ts_53030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51636_53029__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__51637_53031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51636_53029__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__51637_53032__$1 = (((((!((map__51637_53031 == null))))?(((((map__51637_53031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51637_53031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51637_53031):map__51637_53031);
var then_53033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51637_53032__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__51643_53034 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_53030));
var chunk__51644_53035 = null;
var count__51645_53036 = (0);
var i__51646_53037 = (0);
while(true){
if((i__51646_53037 < count__51645_53036)){
var test_53040 = chunk__51644_53035.cljs$core$IIndexed$_nth$arity$2(null,i__51646_53037);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_53040,":");


var G__53041 = seq__51643_53034;
var G__53042 = chunk__51644_53035;
var G__53043 = count__51645_53036;
var G__53044 = (i__51646_53037 + (1));
seq__51643_53034 = G__53041;
chunk__51644_53035 = G__53042;
count__51645_53036 = G__53043;
i__51646_53037 = G__53044;
continue;
} else {
var temp__5735__auto___53045__$1 = cljs.core.seq(seq__51643_53034);
if(temp__5735__auto___53045__$1){
var seq__51643_53046__$1 = temp__5735__auto___53045__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51643_53046__$1)){
var c__4556__auto___53047 = cljs.core.chunk_first(seq__51643_53046__$1);
var G__53048 = cljs.core.chunk_rest(seq__51643_53046__$1);
var G__53049 = c__4556__auto___53047;
var G__53050 = cljs.core.count(c__4556__auto___53047);
var G__53051 = (0);
seq__51643_53034 = G__53048;
chunk__51644_53035 = G__53049;
count__51645_53036 = G__53050;
i__51646_53037 = G__53051;
continue;
} else {
var test_53052 = cljs.core.first(seq__51643_53046__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_53052,":");


var G__53053 = cljs.core.next(seq__51643_53046__$1);
var G__53054 = null;
var G__53055 = (0);
var G__53056 = (0);
seq__51643_53034 = G__53053;
chunk__51644_53035 = G__53054;
count__51645_53036 = G__53055;
i__51646_53037 = G__53056;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_53033);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_53033);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__53057 = cljs.core.next(seq__51588_53022__$1);
var G__53058 = null;
var G__53059 = (0);
var G__53060 = (0);
seq__51588_52981 = G__53057;
chunk__51589_52982 = G__53058;
count__51590_52983 = G__53059;
i__51591_52984 = G__53060;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__51651){
var map__51652 = p__51651;
var map__51652__$1 = (((((!((map__51652 == null))))?(((((map__51652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51652):map__51652);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51652__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51652__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__51662 = env;
var G__51663 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__51662,G__51663) : cljs.compiler.resolve_type.call(null,G__51662,G__51663));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__51664 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51664,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51664,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__51658_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__51658_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__51658_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__51668 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__51668,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__51668;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__51672 = env;
var G__51673 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__51672,G__51673) : cljs.compiler.resolve_type.call(null,G__51672,G__51673));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51677_SHARP_){
return cljs.compiler.resolve_type(env,p1__51677_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__51680 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__51681 = cljs.core.seq(vec__51680);
var first__51682 = cljs.core.first(seq__51681);
var seq__51681__$1 = cljs.core.next(seq__51681);
var p = first__51682;
var first__51682__$1 = cljs.core.first(seq__51681__$1);
var seq__51681__$2 = cljs.core.next(seq__51681__$1);
var ts = first__51682__$1;
var first__51682__$2 = cljs.core.first(seq__51681__$2);
var seq__51681__$3 = cljs.core.next(seq__51681__$2);
var n = first__51682__$2;
var xs = seq__51681__$3;
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
var vec__51684 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__51685 = cljs.core.seq(vec__51684);
var first__51686 = cljs.core.first(seq__51685);
var seq__51685__$1 = cljs.core.next(seq__51685);
var p = first__51686;
var first__51686__$1 = cljs.core.first(seq__51685__$1);
var seq__51685__$2 = cljs.core.next(seq__51685__$1);
var ts = first__51686__$1;
var xs = seq__51685__$2;
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
var G__51692 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__51691 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__51691.cljs$core$IFn$_invoke$arity$1 ? fexpr__51691.cljs$core$IFn$_invoke$arity$1(G__51692) : fexpr__51691.call(null,G__51692));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__51695 = arguments.length;
switch (G__51695) {
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
var vec__51706 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51693_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__51693_SHARP_);
} else {
return p1__51693_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__51707 = cljs.core.seq(vec__51706);
var first__51708 = cljs.core.first(seq__51707);
var seq__51707__$1 = cljs.core.next(seq__51707);
var x = first__51708;
var ys = seq__51707__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__51712 = cljs.core.seq(ys);
var chunk__51713 = null;
var count__51714 = (0);
var i__51715 = (0);
while(true){
if((i__51715 < count__51714)){
var next_line = chunk__51713.cljs$core$IIndexed$_nth$arity$2(null,i__51715);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__53143 = seq__51712;
var G__53144 = chunk__51713;
var G__53145 = count__51714;
var G__53146 = (i__51715 + (1));
seq__51712 = G__53143;
chunk__51713 = G__53144;
count__51714 = G__53145;
i__51715 = G__53146;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51712);
if(temp__5735__auto__){
var seq__51712__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51712__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51712__$1);
var G__53147 = cljs.core.chunk_rest(seq__51712__$1);
var G__53148 = c__4556__auto__;
var G__53149 = cljs.core.count(c__4556__auto__);
var G__53150 = (0);
seq__51712 = G__53147;
chunk__51713 = G__53148;
count__51714 = G__53149;
i__51715 = G__53150;
continue;
} else {
var next_line = cljs.core.first(seq__51712__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__53151 = cljs.core.next(seq__51712__$1);
var G__53152 = null;
var G__53153 = (0);
var G__53154 = (0);
seq__51712 = G__53151;
chunk__51713 = G__53152;
count__51714 = G__53153;
i__51715 = G__53154;
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

var seq__51719_53155 = cljs.core.seq(docs__$2);
var chunk__51720_53156 = null;
var count__51721_53157 = (0);
var i__51722_53158 = (0);
while(true){
if((i__51722_53158 < count__51721_53157)){
var e_53162 = chunk__51720_53156.cljs$core$IIndexed$_nth$arity$2(null,i__51722_53158);
if(cljs.core.truth_(e_53162)){
print_comment_lines(e_53162);
} else {
}


var G__53165 = seq__51719_53155;
var G__53166 = chunk__51720_53156;
var G__53167 = count__51721_53157;
var G__53168 = (i__51722_53158 + (1));
seq__51719_53155 = G__53165;
chunk__51720_53156 = G__53166;
count__51721_53157 = G__53167;
i__51722_53158 = G__53168;
continue;
} else {
var temp__5735__auto___53169 = cljs.core.seq(seq__51719_53155);
if(temp__5735__auto___53169){
var seq__51719_53170__$1 = temp__5735__auto___53169;
if(cljs.core.chunked_seq_QMARK_(seq__51719_53170__$1)){
var c__4556__auto___53173 = cljs.core.chunk_first(seq__51719_53170__$1);
var G__53174 = cljs.core.chunk_rest(seq__51719_53170__$1);
var G__53175 = c__4556__auto___53173;
var G__53176 = cljs.core.count(c__4556__auto___53173);
var G__53177 = (0);
seq__51719_53155 = G__53174;
chunk__51720_53156 = G__53175;
count__51721_53157 = G__53176;
i__51722_53158 = G__53177;
continue;
} else {
var e_53178 = cljs.core.first(seq__51719_53170__$1);
if(cljs.core.truth_(e_53178)){
print_comment_lines(e_53178);
} else {
}


var G__53179 = cljs.core.next(seq__51719_53170__$1);
var G__53180 = null;
var G__53181 = (0);
var G__53182 = (0);
seq__51719_53155 = G__53179;
chunk__51720_53156 = G__53180;
count__51721_53157 = G__53181;
i__51722_53158 = G__53182;
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
var and__4115__auto__ = cljs.core.some((function (p1__51726_SHARP_){
return goog.string.startsWith(p1__51726_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__51730){
var map__51731 = p__51730;
var map__51731__$1 = (((((!((map__51731 == null))))?(((((map__51731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51731):map__51731);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51731__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51731__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51731__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51731__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51731__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51731__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51731__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51731__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51731__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51731__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__51734){
var map__51739 = p__51734;
var map__51739__$1 = (((((!((map__51739 == null))))?(((((map__51739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51739):map__51739);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51739__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51739__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51739__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__51742_53235 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__51743_53236 = null;
var count__51744_53237 = (0);
var i__51745_53238 = (0);
while(true){
if((i__51745_53238 < count__51744_53237)){
var vec__51757_53239 = chunk__51743_53236.cljs$core$IIndexed$_nth$arity$2(null,i__51745_53238);
var i_53240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51757_53239,(0),null);
var param_53241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51757_53239,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_53241);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__53242 = seq__51742_53235;
var G__53243 = chunk__51743_53236;
var G__53244 = count__51744_53237;
var G__53245 = (i__51745_53238 + (1));
seq__51742_53235 = G__53242;
chunk__51743_53236 = G__53243;
count__51744_53237 = G__53244;
i__51745_53238 = G__53245;
continue;
} else {
var temp__5735__auto___53246 = cljs.core.seq(seq__51742_53235);
if(temp__5735__auto___53246){
var seq__51742_53247__$1 = temp__5735__auto___53246;
if(cljs.core.chunked_seq_QMARK_(seq__51742_53247__$1)){
var c__4556__auto___53248 = cljs.core.chunk_first(seq__51742_53247__$1);
var G__53249 = cljs.core.chunk_rest(seq__51742_53247__$1);
var G__53250 = c__4556__auto___53248;
var G__53251 = cljs.core.count(c__4556__auto___53248);
var G__53252 = (0);
seq__51742_53235 = G__53249;
chunk__51743_53236 = G__53250;
count__51744_53237 = G__53251;
i__51745_53238 = G__53252;
continue;
} else {
var vec__51763_53253 = cljs.core.first(seq__51742_53247__$1);
var i_53254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51763_53253,(0),null);
var param_53255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51763_53253,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_53255);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__53256 = cljs.core.next(seq__51742_53247__$1);
var G__53257 = null;
var G__53258 = (0);
var G__53259 = (0);
seq__51742_53235 = G__53256;
chunk__51743_53236 = G__53257;
count__51744_53237 = G__53258;
i__51745_53238 = G__53259;
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

var seq__51774_53260 = cljs.core.seq(params);
var chunk__51775_53261 = null;
var count__51776_53262 = (0);
var i__51777_53263 = (0);
while(true){
if((i__51777_53263 < count__51776_53262)){
var param_53264 = chunk__51775_53261.cljs$core$IIndexed$_nth$arity$2(null,i__51777_53263);
cljs.compiler.emit(param_53264);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53264,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53265 = seq__51774_53260;
var G__53266 = chunk__51775_53261;
var G__53267 = count__51776_53262;
var G__53268 = (i__51777_53263 + (1));
seq__51774_53260 = G__53265;
chunk__51775_53261 = G__53266;
count__51776_53262 = G__53267;
i__51777_53263 = G__53268;
continue;
} else {
var temp__5735__auto___53269 = cljs.core.seq(seq__51774_53260);
if(temp__5735__auto___53269){
var seq__51774_53270__$1 = temp__5735__auto___53269;
if(cljs.core.chunked_seq_QMARK_(seq__51774_53270__$1)){
var c__4556__auto___53271 = cljs.core.chunk_first(seq__51774_53270__$1);
var G__53272 = cljs.core.chunk_rest(seq__51774_53270__$1);
var G__53273 = c__4556__auto___53271;
var G__53274 = cljs.core.count(c__4556__auto___53271);
var G__53275 = (0);
seq__51774_53260 = G__53272;
chunk__51775_53261 = G__53273;
count__51776_53262 = G__53274;
i__51777_53263 = G__53275;
continue;
} else {
var param_53276 = cljs.core.first(seq__51774_53270__$1);
cljs.compiler.emit(param_53276);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53276,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53277 = cljs.core.next(seq__51774_53270__$1);
var G__53278 = null;
var G__53279 = (0);
var G__53280 = (0);
seq__51774_53260 = G__53277;
chunk__51775_53261 = G__53278;
count__51776_53262 = G__53279;
i__51777_53263 = G__53280;
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

var seq__51787_53283 = cljs.core.seq(params);
var chunk__51788_53284 = null;
var count__51789_53285 = (0);
var i__51790_53286 = (0);
while(true){
if((i__51790_53286 < count__51789_53285)){
var param_53288 = chunk__51788_53284.cljs$core$IIndexed$_nth$arity$2(null,i__51790_53286);
cljs.compiler.emit(param_53288);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53288,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53291 = seq__51787_53283;
var G__53292 = chunk__51788_53284;
var G__53293 = count__51789_53285;
var G__53294 = (i__51790_53286 + (1));
seq__51787_53283 = G__53291;
chunk__51788_53284 = G__53292;
count__51789_53285 = G__53293;
i__51790_53286 = G__53294;
continue;
} else {
var temp__5735__auto___53295 = cljs.core.seq(seq__51787_53283);
if(temp__5735__auto___53295){
var seq__51787_53298__$1 = temp__5735__auto___53295;
if(cljs.core.chunked_seq_QMARK_(seq__51787_53298__$1)){
var c__4556__auto___53300 = cljs.core.chunk_first(seq__51787_53298__$1);
var G__53305 = cljs.core.chunk_rest(seq__51787_53298__$1);
var G__53306 = c__4556__auto___53300;
var G__53307 = cljs.core.count(c__4556__auto___53300);
var G__53308 = (0);
seq__51787_53283 = G__53305;
chunk__51788_53284 = G__53306;
count__51789_53285 = G__53307;
i__51790_53286 = G__53308;
continue;
} else {
var param_53313 = cljs.core.first(seq__51787_53298__$1);
cljs.compiler.emit(param_53313);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53313,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53340 = cljs.core.next(seq__51787_53298__$1);
var G__53341 = null;
var G__53342 = (0);
var G__53343 = (0);
seq__51787_53283 = G__53340;
chunk__51788_53284 = G__53341;
count__51789_53285 = G__53342;
i__51790_53286 = G__53343;
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
var seq__51793 = cljs.core.seq(params);
var chunk__51794 = null;
var count__51795 = (0);
var i__51796 = (0);
while(true){
if((i__51796 < count__51795)){
var param = chunk__51794.cljs$core$IIndexed$_nth$arity$2(null,i__51796);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53345 = seq__51793;
var G__53346 = chunk__51794;
var G__53347 = count__51795;
var G__53348 = (i__51796 + (1));
seq__51793 = G__53345;
chunk__51794 = G__53346;
count__51795 = G__53347;
i__51796 = G__53348;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51793);
if(temp__5735__auto__){
var seq__51793__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51793__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__51793__$1);
var G__53354 = cljs.core.chunk_rest(seq__51793__$1);
var G__53355 = c__4556__auto__;
var G__53356 = cljs.core.count(c__4556__auto__);
var G__53357 = (0);
seq__51793 = G__53354;
chunk__51794 = G__53355;
count__51795 = G__53356;
i__51796 = G__53357;
continue;
} else {
var param = cljs.core.first(seq__51793__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53378 = cljs.core.next(seq__51793__$1);
var G__53379 = null;
var G__53380 = (0);
var G__53381 = (0);
seq__51793 = G__53378;
chunk__51794 = G__53379;
count__51795 = G__53380;
i__51796 = G__53381;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__51797){
var map__51798 = p__51797;
var map__51798__$1 = (((((!((map__51798 == null))))?(((((map__51798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51798):map__51798);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51798__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51798__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51798__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51798__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51798__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51798__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__51801){
var map__51802 = p__51801;
var map__51802__$1 = (((((!((map__51802 == null))))?(((((map__51802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51802):map__51802);
var f = map__51802__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51802__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51802__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51802__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51802__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51802__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51802__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51802__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51802__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_53392__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_53393 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_53392__$1);
var delegate_name_53394 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_53393),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_53394," = function (");

var seq__51805_53396 = cljs.core.seq(params);
var chunk__51806_53397 = null;
var count__51807_53398 = (0);
var i__51808_53399 = (0);
while(true){
if((i__51808_53399 < count__51807_53398)){
var param_53401 = chunk__51806_53397.cljs$core$IIndexed$_nth$arity$2(null,i__51808_53399);
cljs.compiler.emit(param_53401);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53401,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53404 = seq__51805_53396;
var G__53405 = chunk__51806_53397;
var G__53406 = count__51807_53398;
var G__53407 = (i__51808_53399 + (1));
seq__51805_53396 = G__53404;
chunk__51806_53397 = G__53405;
count__51807_53398 = G__53406;
i__51808_53399 = G__53407;
continue;
} else {
var temp__5735__auto___53408 = cljs.core.seq(seq__51805_53396);
if(temp__5735__auto___53408){
var seq__51805_53409__$1 = temp__5735__auto___53408;
if(cljs.core.chunked_seq_QMARK_(seq__51805_53409__$1)){
var c__4556__auto___53410 = cljs.core.chunk_first(seq__51805_53409__$1);
var G__53411 = cljs.core.chunk_rest(seq__51805_53409__$1);
var G__53412 = c__4556__auto___53410;
var G__53413 = cljs.core.count(c__4556__auto___53410);
var G__53414 = (0);
seq__51805_53396 = G__53411;
chunk__51806_53397 = G__53412;
count__51807_53398 = G__53413;
i__51808_53399 = G__53414;
continue;
} else {
var param_53415 = cljs.core.first(seq__51805_53409__$1);
cljs.compiler.emit(param_53415);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53415,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53416 = cljs.core.next(seq__51805_53409__$1);
var G__53417 = null;
var G__53418 = (0);
var G__53419 = (0);
seq__51805_53396 = G__53416;
chunk__51806_53397 = G__53417;
count__51807_53398 = G__53418;
i__51808_53399 = G__53419;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_53393," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_53424 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_53424,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_53394,".call(this,");

var seq__51813_53429 = cljs.core.seq(params);
var chunk__51814_53430 = null;
var count__51815_53431 = (0);
var i__51816_53432 = (0);
while(true){
if((i__51816_53432 < count__51815_53431)){
var param_53433 = chunk__51814_53430.cljs$core$IIndexed$_nth$arity$2(null,i__51816_53432);
cljs.compiler.emit(param_53433);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53433,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53438 = seq__51813_53429;
var G__53439 = chunk__51814_53430;
var G__53440 = count__51815_53431;
var G__53441 = (i__51816_53432 + (1));
seq__51813_53429 = G__53438;
chunk__51814_53430 = G__53439;
count__51815_53431 = G__53440;
i__51816_53432 = G__53441;
continue;
} else {
var temp__5735__auto___53446 = cljs.core.seq(seq__51813_53429);
if(temp__5735__auto___53446){
var seq__51813_53447__$1 = temp__5735__auto___53446;
if(cljs.core.chunked_seq_QMARK_(seq__51813_53447__$1)){
var c__4556__auto___53449 = cljs.core.chunk_first(seq__51813_53447__$1);
var G__53451 = cljs.core.chunk_rest(seq__51813_53447__$1);
var G__53452 = c__4556__auto___53449;
var G__53453 = cljs.core.count(c__4556__auto___53449);
var G__53454 = (0);
seq__51813_53429 = G__53451;
chunk__51814_53430 = G__53452;
count__51815_53431 = G__53453;
i__51816_53432 = G__53454;
continue;
} else {
var param_53455 = cljs.core.first(seq__51813_53447__$1);
cljs.compiler.emit(param_53455);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_53455,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__53456 = cljs.core.next(seq__51813_53447__$1);
var G__53457 = null;
var G__53458 = (0);
var G__53459 = (0);
seq__51813_53429 = G__53456;
chunk__51814_53430 = G__53457;
count__51815_53431 = G__53458;
i__51816_53432 = G__53459;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53393,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_53393,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_53392__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53393,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_53394,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_53393,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__51823){
var map__51824 = p__51823;
var map__51824__$1 = (((((!((map__51824 == null))))?(((((map__51824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51824):map__51824);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51824__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51817_SHARP_){
var and__4115__auto__ = p1__51817_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__51817_SHARP_));
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
var name_53475__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_53476 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_53475__$1);
var maxparams_53477 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_53478 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_53476),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_53479 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__51821_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__51821_SHARP_)));
}),cljs.core.seq(mmap_53478));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_53476," = null;");

var seq__51833_53480 = cljs.core.seq(ms_53479);
var chunk__51834_53481 = null;
var count__51835_53482 = (0);
var i__51836_53483 = (0);
while(true){
if((i__51836_53483 < count__51835_53482)){
var vec__51860_53486 = chunk__51834_53481.cljs$core$IIndexed$_nth$arity$2(null,i__51836_53483);
var n_53487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51860_53486,(0),null);
var meth_53488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51860_53486,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_53487," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53488))){
cljs.compiler.emit_variadic_fn_method(meth_53488);
} else {
cljs.compiler.emit_fn_method(meth_53488);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__53491 = seq__51833_53480;
var G__53492 = chunk__51834_53481;
var G__53493 = count__51835_53482;
var G__53494 = (i__51836_53483 + (1));
seq__51833_53480 = G__53491;
chunk__51834_53481 = G__53492;
count__51835_53482 = G__53493;
i__51836_53483 = G__53494;
continue;
} else {
var temp__5735__auto___53495 = cljs.core.seq(seq__51833_53480);
if(temp__5735__auto___53495){
var seq__51833_53496__$1 = temp__5735__auto___53495;
if(cljs.core.chunked_seq_QMARK_(seq__51833_53496__$1)){
var c__4556__auto___53497 = cljs.core.chunk_first(seq__51833_53496__$1);
var G__53498 = cljs.core.chunk_rest(seq__51833_53496__$1);
var G__53499 = c__4556__auto___53497;
var G__53500 = cljs.core.count(c__4556__auto___53497);
var G__53501 = (0);
seq__51833_53480 = G__53498;
chunk__51834_53481 = G__53499;
count__51835_53482 = G__53500;
i__51836_53483 = G__53501;
continue;
} else {
var vec__51873_53502 = cljs.core.first(seq__51833_53496__$1);
var n_53503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51873_53502,(0),null);
var meth_53504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51873_53502,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_53503," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53504))){
cljs.compiler.emit_variadic_fn_method(meth_53504);
} else {
cljs.compiler.emit_fn_method(meth_53504);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__53505 = cljs.core.next(seq__51833_53496__$1);
var G__53506 = null;
var G__53507 = (0);
var G__53508 = (0);
seq__51833_53480 = G__53505;
chunk__51834_53481 = G__53506;
count__51835_53482 = G__53507;
i__51836_53483 = G__53508;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53476," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_53477),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_53477)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_53477));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__51888_53509 = cljs.core.seq(ms_53479);
var chunk__51889_53510 = null;
var count__51890_53511 = (0);
var i__51891_53512 = (0);
while(true){
if((i__51891_53512 < count__51890_53511)){
var vec__51900_53513 = chunk__51889_53510.cljs$core$IIndexed$_nth$arity$2(null,i__51891_53512);
var n_53514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51900_53513,(0),null);
var meth_53515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51900_53513,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53515))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_53516 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_53516," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_53517 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_53516," = new cljs.core.IndexedSeq(",a_53517,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_53514,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_53477)),(((cljs.core.count(maxparams_53477) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_53516,");"], 0));
} else {
var pcnt_53518 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_53515));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_53518,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_53514,".call(this",(((pcnt_53518 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_53518,maxparams_53477)),null,(1),null)),(2),null))),");");
}


var G__53519 = seq__51888_53509;
var G__53520 = chunk__51889_53510;
var G__53521 = count__51890_53511;
var G__53522 = (i__51891_53512 + (1));
seq__51888_53509 = G__53519;
chunk__51889_53510 = G__53520;
count__51890_53511 = G__53521;
i__51891_53512 = G__53522;
continue;
} else {
var temp__5735__auto___53523 = cljs.core.seq(seq__51888_53509);
if(temp__5735__auto___53523){
var seq__51888_53524__$1 = temp__5735__auto___53523;
if(cljs.core.chunked_seq_QMARK_(seq__51888_53524__$1)){
var c__4556__auto___53525 = cljs.core.chunk_first(seq__51888_53524__$1);
var G__53526 = cljs.core.chunk_rest(seq__51888_53524__$1);
var G__53527 = c__4556__auto___53525;
var G__53528 = cljs.core.count(c__4556__auto___53525);
var G__53529 = (0);
seq__51888_53509 = G__53526;
chunk__51889_53510 = G__53527;
count__51890_53511 = G__53528;
i__51891_53512 = G__53529;
continue;
} else {
var vec__51908_53531 = cljs.core.first(seq__51888_53524__$1);
var n_53532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51908_53531,(0),null);
var meth_53533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51908_53531,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53533))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_53534 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_53534," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_53535 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_53534," = new cljs.core.IndexedSeq(",a_53535,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_53532,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_53477)),(((cljs.core.count(maxparams_53477) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_53534,");"], 0));
} else {
var pcnt_53536 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_53533));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_53536,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_53532,".call(this",(((pcnt_53536 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_53536,maxparams_53477)),null,(1),null)),(2),null))),");");
}


var G__53540 = cljs.core.next(seq__51888_53524__$1);
var G__53541 = null;
var G__53542 = (0);
var G__53543 = (0);
seq__51888_53509 = G__53540;
chunk__51889_53510 = G__53541;
count__51890_53511 = G__53542;
i__51891_53512 = G__53543;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_53544 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_53479)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_53544,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53476,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53476,".cljs$lang$applyTo = ",cljs.core.some((function (p1__51822_SHARP_){
var vec__51936 = p1__51822_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51936,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51936,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_53479),".cljs$lang$applyTo;");
} else {
}

var seq__51943_53546 = cljs.core.seq(ms_53479);
var chunk__51944_53547 = null;
var count__51945_53548 = (0);
var i__51946_53549 = (0);
while(true){
if((i__51946_53549 < count__51945_53548)){
var vec__51956_53604 = chunk__51944_53547.cljs$core$IIndexed$_nth$arity$2(null,i__51946_53549);
var n_53605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51956_53604,(0),null);
var meth_53606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51956_53604,(1),null);
var c_53608 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_53606));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53606))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53476,".cljs$core$IFn$_invoke$arity$variadic = ",n_53605,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_53476,".cljs$core$IFn$_invoke$arity$",c_53608," = ",n_53605,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__53611 = seq__51943_53546;
var G__53612 = chunk__51944_53547;
var G__53613 = count__51945_53548;
var G__53614 = (i__51946_53549 + (1));
seq__51943_53546 = G__53611;
chunk__51944_53547 = G__53612;
count__51945_53548 = G__53613;
i__51946_53549 = G__53614;
continue;
} else {
var temp__5735__auto___53615 = cljs.core.seq(seq__51943_53546);
if(temp__5735__auto___53615){
var seq__51943_53616__$1 = temp__5735__auto___53615;
if(cljs.core.chunked_seq_QMARK_(seq__51943_53616__$1)){
var c__4556__auto___53617 = cljs.core.chunk_first(seq__51943_53616__$1);
var G__53618 = cljs.core.chunk_rest(seq__51943_53616__$1);
var G__53619 = c__4556__auto___53617;
var G__53620 = cljs.core.count(c__4556__auto___53617);
var G__53621 = (0);
seq__51943_53546 = G__53618;
chunk__51944_53547 = G__53619;
count__51945_53548 = G__53620;
i__51946_53549 = G__53621;
continue;
} else {
var vec__51959_53622 = cljs.core.first(seq__51943_53616__$1);
var n_53623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51959_53622,(0),null);
var meth_53624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51959_53622,(1),null);
var c_53626 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_53624));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_53624))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_53476,".cljs$core$IFn$_invoke$arity$variadic = ",n_53623,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_53476,".cljs$core$IFn$_invoke$arity$",c_53626," = ",n_53623,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__53627 = cljs.core.next(seq__51943_53616__$1);
var G__53628 = null;
var G__53629 = (0);
var G__53630 = (0);
seq__51943_53546 = G__53627;
chunk__51944_53547 = G__53628;
count__51945_53548 = G__53629;
i__51946_53549 = G__53630;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_53476,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__51962){
var map__51963 = p__51962;
var map__51963__$1 = (((((!((map__51963 == null))))?(((((map__51963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51963):map__51963);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51963__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51963__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51963__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__51965_53632 = cljs.core.seq(statements);
var chunk__51966_53633 = null;
var count__51967_53634 = (0);
var i__51968_53635 = (0);
while(true){
if((i__51968_53635 < count__51967_53634)){
var s_53636 = chunk__51966_53633.cljs$core$IIndexed$_nth$arity$2(null,i__51968_53635);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_53636);


var G__53637 = seq__51965_53632;
var G__53638 = chunk__51966_53633;
var G__53639 = count__51967_53634;
var G__53640 = (i__51968_53635 + (1));
seq__51965_53632 = G__53637;
chunk__51966_53633 = G__53638;
count__51967_53634 = G__53639;
i__51968_53635 = G__53640;
continue;
} else {
var temp__5735__auto___53642 = cljs.core.seq(seq__51965_53632);
if(temp__5735__auto___53642){
var seq__51965_53643__$1 = temp__5735__auto___53642;
if(cljs.core.chunked_seq_QMARK_(seq__51965_53643__$1)){
var c__4556__auto___53646 = cljs.core.chunk_first(seq__51965_53643__$1);
var G__53647 = cljs.core.chunk_rest(seq__51965_53643__$1);
var G__53648 = c__4556__auto___53646;
var G__53649 = cljs.core.count(c__4556__auto___53646);
var G__53650 = (0);
seq__51965_53632 = G__53647;
chunk__51966_53633 = G__53648;
count__51967_53634 = G__53649;
i__51968_53635 = G__53650;
continue;
} else {
var s_53651 = cljs.core.first(seq__51965_53643__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_53651);


var G__53652 = cljs.core.next(seq__51965_53643__$1);
var G__53653 = null;
var G__53654 = (0);
var G__53655 = (0);
seq__51965_53632 = G__53652;
chunk__51966_53633 = G__53653;
count__51967_53634 = G__53654;
i__51968_53635 = G__53655;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__51977){
var map__51978 = p__51977;
var map__51978__$1 = (((((!((map__51978 == null))))?(((((map__51978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51978):map__51978);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51978__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__51980,is_loop){
var map__51981 = p__51980;
var map__51981__$1 = (((((!((map__51981 == null))))?(((((map__51981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51981):map__51981);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51981__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51981__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51981__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__51983_53661 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__51984_53662 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__51984_53662);

try{var seq__51985_53666 = cljs.core.seq(bindings);
var chunk__51986_53667 = null;
var count__51987_53668 = (0);
var i__51988_53669 = (0);
while(true){
if((i__51988_53669 < count__51987_53668)){
var map__51993_53670 = chunk__51986_53667.cljs$core$IIndexed$_nth$arity$2(null,i__51988_53669);
var map__51993_53671__$1 = (((((!((map__51993_53670 == null))))?(((((map__51993_53670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51993_53670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51993_53670):map__51993_53670);
var binding_53672 = map__51993_53671__$1;
var init_53673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51993_53671__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_53672);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_53673,";");


var G__53679 = seq__51985_53666;
var G__53680 = chunk__51986_53667;
var G__53681 = count__51987_53668;
var G__53682 = (i__51988_53669 + (1));
seq__51985_53666 = G__53679;
chunk__51986_53667 = G__53680;
count__51987_53668 = G__53681;
i__51988_53669 = G__53682;
continue;
} else {
var temp__5735__auto___53687 = cljs.core.seq(seq__51985_53666);
if(temp__5735__auto___53687){
var seq__51985_53688__$1 = temp__5735__auto___53687;
if(cljs.core.chunked_seq_QMARK_(seq__51985_53688__$1)){
var c__4556__auto___53690 = cljs.core.chunk_first(seq__51985_53688__$1);
var G__53691 = cljs.core.chunk_rest(seq__51985_53688__$1);
var G__53692 = c__4556__auto___53690;
var G__53693 = cljs.core.count(c__4556__auto___53690);
var G__53694 = (0);
seq__51985_53666 = G__53691;
chunk__51986_53667 = G__53692;
count__51987_53668 = G__53693;
i__51988_53669 = G__53694;
continue;
} else {
var map__51995_53695 = cljs.core.first(seq__51985_53688__$1);
var map__51995_53696__$1 = (((((!((map__51995_53695 == null))))?(((((map__51995_53695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51995_53695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51995_53695):map__51995_53695);
var binding_53697 = map__51995_53696__$1;
var init_53698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51995_53696__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_53697);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_53698,";");


var G__53699 = cljs.core.next(seq__51985_53688__$1);
var G__53700 = null;
var G__53701 = (0);
var G__53702 = (0);
seq__51985_53666 = G__53699;
chunk__51986_53667 = G__53700;
count__51987_53668 = G__53701;
i__51988_53669 = G__53702;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__51983_53661);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__51999){
var map__52000 = p__51999;
var map__52000__$1 = (((((!((map__52000 == null))))?(((((map__52000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52000):map__52000);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52000__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52000__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52000__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___53780 = cljs.core.count(exprs);
var i_53781 = (0);
while(true){
if((i_53781 < n__4613__auto___53780)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_53781) : temps.call(null,i_53781))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_53781) : exprs.call(null,i_53781)),";");

var G__53782 = (i_53781 + (1));
i_53781 = G__53782;
continue;
} else {
}
break;
}

var n__4613__auto___53783 = cljs.core.count(exprs);
var i_53784 = (0);
while(true){
if((i_53784 < n__4613__auto___53783)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_53784) : params.call(null,i_53784)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_53784) : temps.call(null,i_53784)),";");

var G__53785 = (i_53784 + (1));
i_53784 = G__53785;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__52002){
var map__52003 = p__52002;
var map__52003__$1 = (((((!((map__52003 == null))))?(((((map__52003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52003):map__52003);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52003__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52003__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52003__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__52005_53786 = cljs.core.seq(bindings);
var chunk__52006_53787 = null;
var count__52007_53788 = (0);
var i__52008_53789 = (0);
while(true){
if((i__52008_53789 < count__52007_53788)){
var map__52018_53794 = chunk__52006_53787.cljs$core$IIndexed$_nth$arity$2(null,i__52008_53789);
var map__52018_53795__$1 = (((((!((map__52018_53794 == null))))?(((((map__52018_53794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52018_53794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52018_53794):map__52018_53794);
var binding_53796 = map__52018_53795__$1;
var init_53797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52018_53795__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_53796)," = ",init_53797,";");


var G__53799 = seq__52005_53786;
var G__53800 = chunk__52006_53787;
var G__53801 = count__52007_53788;
var G__53802 = (i__52008_53789 + (1));
seq__52005_53786 = G__53799;
chunk__52006_53787 = G__53800;
count__52007_53788 = G__53801;
i__52008_53789 = G__53802;
continue;
} else {
var temp__5735__auto___53803 = cljs.core.seq(seq__52005_53786);
if(temp__5735__auto___53803){
var seq__52005_53804__$1 = temp__5735__auto___53803;
if(cljs.core.chunked_seq_QMARK_(seq__52005_53804__$1)){
var c__4556__auto___53805 = cljs.core.chunk_first(seq__52005_53804__$1);
var G__53806 = cljs.core.chunk_rest(seq__52005_53804__$1);
var G__53807 = c__4556__auto___53805;
var G__53808 = cljs.core.count(c__4556__auto___53805);
var G__53809 = (0);
seq__52005_53786 = G__53806;
chunk__52006_53787 = G__53807;
count__52007_53788 = G__53808;
i__52008_53789 = G__53809;
continue;
} else {
var map__52029_53810 = cljs.core.first(seq__52005_53804__$1);
var map__52029_53811__$1 = (((((!((map__52029_53810 == null))))?(((((map__52029_53810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52029_53810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52029_53810):map__52029_53810);
var binding_53812 = map__52029_53811__$1;
var init_53813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52029_53811__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_53812)," = ",init_53813,";");


var G__53814 = cljs.core.next(seq__52005_53804__$1);
var G__53815 = null;
var G__53816 = (0);
var G__53817 = (0);
seq__52005_53786 = G__53814;
chunk__52006_53787 = G__53815;
count__52007_53788 = G__53816;
i__52008_53789 = G__53817;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__52039){
var map__52040 = p__52039;
var map__52040__$1 = (((((!((map__52040 == null))))?(((((map__52040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52040):map__52040);
var expr = map__52040__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52040__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52040__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52040__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__52064 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__52064.cljs$core$IFn$_invoke$arity$1 ? fexpr__52064.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__52064.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__52074 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__52074.cljs$core$IFn$_invoke$arity$1 ? fexpr__52074.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__52074.call(null,first_arg_tag));
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
var vec__52042 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__52034_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52034_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__52035_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__52035_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52042,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52042,(1),null);
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
var pimpl_53826 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_53826,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_53827 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_53827,args)),(((mfa_53827 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_53827,args)),"], 0))"], 0));
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
var G__52090 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__52089 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__52089.cljs$core$IFn$_invoke$arity$1 ? fexpr__52089.cljs$core$IFn$_invoke$arity$1(G__52090) : fexpr__52089.call(null,G__52090));
} else {
return and__4115__auto__;
}
})())){
var fprop_53828 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_53828," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_53828,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_53828," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_53828,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__52091){
var map__52092 = p__52091;
var map__52092__$1 = (((((!((map__52092 == null))))?(((((map__52092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52092):map__52092);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52092__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52092__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52092__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__52094){
var map__52095 = p__52094;
var map__52095__$1 = (((((!((map__52095 == null))))?(((((map__52095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52095):map__52095);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52095__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52095__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52095__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__52122 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__52122__$1 = (((((!((map__52122 == null))))?(((((map__52122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52122):map__52122);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52122__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52122__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__52123 = options;
var map__52123__$1 = (((((!((map__52123 == null))))?(((((map__52123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52123):map__52123);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52123__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__52124 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__52129 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__52129__$1 = (((((!((map__52129 == null))))?(((((map__52129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52129):map__52129);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52129__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52129__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52124,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52124,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__52131_53934 = cljs.core.seq(libs_to_load);
var chunk__52132_53935 = null;
var count__52133_53936 = (0);
var i__52134_53937 = (0);
while(true){
if((i__52134_53937 < count__52133_53936)){
var lib_53938 = chunk__52132_53935.cljs$core$IIndexed$_nth$arity$2(null,i__52134_53937);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_53938)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53938),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53938),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53938),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53938),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_53938,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53938),"');");
}

}
}
}


var G__53941 = seq__52131_53934;
var G__53942 = chunk__52132_53935;
var G__53943 = count__52133_53936;
var G__53944 = (i__52134_53937 + (1));
seq__52131_53934 = G__53941;
chunk__52132_53935 = G__53942;
count__52133_53936 = G__53943;
i__52134_53937 = G__53944;
continue;
} else {
var temp__5735__auto___53946 = cljs.core.seq(seq__52131_53934);
if(temp__5735__auto___53946){
var seq__52131_53947__$1 = temp__5735__auto___53946;
if(cljs.core.chunked_seq_QMARK_(seq__52131_53947__$1)){
var c__4556__auto___53948 = cljs.core.chunk_first(seq__52131_53947__$1);
var G__53949 = cljs.core.chunk_rest(seq__52131_53947__$1);
var G__53950 = c__4556__auto___53948;
var G__53951 = cljs.core.count(c__4556__auto___53948);
var G__53952 = (0);
seq__52131_53934 = G__53949;
chunk__52132_53935 = G__53950;
count__52133_53936 = G__53951;
i__52134_53937 = G__53952;
continue;
} else {
var lib_53953 = cljs.core.first(seq__52131_53947__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_53953)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53953),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53953),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_53953),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53953),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_53953,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_53953),"');");
}

}
}
}


var G__53954 = cljs.core.next(seq__52131_53947__$1);
var G__53955 = null;
var G__53956 = (0);
var G__53957 = (0);
seq__52131_53934 = G__53954;
chunk__52132_53935 = G__53955;
count__52133_53936 = G__53956;
i__52134_53937 = G__53957;
continue;
}
} else {
}
}
break;
}

var seq__52154_53959 = cljs.core.seq(node_libs);
var chunk__52155_53960 = null;
var count__52156_53961 = (0);
var i__52157_53962 = (0);
while(true){
if((i__52157_53962 < count__52156_53961)){
var lib_53964 = chunk__52155_53960.cljs$core$IIndexed$_nth$arity$2(null,i__52157_53962);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_53964)," = require('",lib_53964,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__53969 = seq__52154_53959;
var G__53970 = chunk__52155_53960;
var G__53971 = count__52156_53961;
var G__53972 = (i__52157_53962 + (1));
seq__52154_53959 = G__53969;
chunk__52155_53960 = G__53970;
count__52156_53961 = G__53971;
i__52157_53962 = G__53972;
continue;
} else {
var temp__5735__auto___53975 = cljs.core.seq(seq__52154_53959);
if(temp__5735__auto___53975){
var seq__52154_53976__$1 = temp__5735__auto___53975;
if(cljs.core.chunked_seq_QMARK_(seq__52154_53976__$1)){
var c__4556__auto___53977 = cljs.core.chunk_first(seq__52154_53976__$1);
var G__53978 = cljs.core.chunk_rest(seq__52154_53976__$1);
var G__53979 = c__4556__auto___53977;
var G__53980 = cljs.core.count(c__4556__auto___53977);
var G__53981 = (0);
seq__52154_53959 = G__53978;
chunk__52155_53960 = G__53979;
count__52156_53961 = G__53980;
i__52157_53962 = G__53981;
continue;
} else {
var lib_53982 = cljs.core.first(seq__52154_53976__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_53982)," = require('",lib_53982,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__53983 = cljs.core.next(seq__52154_53976__$1);
var G__53984 = null;
var G__53985 = (0);
var G__53986 = (0);
seq__52154_53959 = G__53983;
chunk__52155_53960 = G__53984;
count__52156_53961 = G__53985;
i__52157_53962 = G__53986;
continue;
}
} else {
}
}
break;
}

var seq__52176_53987 = cljs.core.seq(global_exports_libs);
var chunk__52177_53988 = null;
var count__52178_53989 = (0);
var i__52179_53990 = (0);
while(true){
if((i__52179_53990 < count__52178_53989)){
var lib_53991 = chunk__52177_53988.cljs$core$IIndexed$_nth$arity$2(null,i__52179_53990);
var map__52184_53992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_53991));
var map__52184_53993__$1 = (((((!((map__52184_53992 == null))))?(((((map__52184_53992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52184_53992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52184_53992):map__52184_53992);
var global_exports_53994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52184_53993__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_53994,lib_53991);


var G__54003 = seq__52176_53987;
var G__54004 = chunk__52177_53988;
var G__54005 = count__52178_53989;
var G__54006 = (i__52179_53990 + (1));
seq__52176_53987 = G__54003;
chunk__52177_53988 = G__54004;
count__52178_53989 = G__54005;
i__52179_53990 = G__54006;
continue;
} else {
var temp__5735__auto___54007 = cljs.core.seq(seq__52176_53987);
if(temp__5735__auto___54007){
var seq__52176_54008__$1 = temp__5735__auto___54007;
if(cljs.core.chunked_seq_QMARK_(seq__52176_54008__$1)){
var c__4556__auto___54009 = cljs.core.chunk_first(seq__52176_54008__$1);
var G__54010 = cljs.core.chunk_rest(seq__52176_54008__$1);
var G__54011 = c__4556__auto___54009;
var G__54012 = cljs.core.count(c__4556__auto___54009);
var G__54013 = (0);
seq__52176_53987 = G__54010;
chunk__52177_53988 = G__54011;
count__52178_53989 = G__54012;
i__52179_53990 = G__54013;
continue;
} else {
var lib_54014 = cljs.core.first(seq__52176_54008__$1);
var map__52187_54015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_54014));
var map__52187_54016__$1 = (((((!((map__52187_54015 == null))))?(((((map__52187_54015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52187_54015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52187_54015):map__52187_54015);
var global_exports_54017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52187_54016__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_54017,lib_54014);


var G__54018 = cljs.core.next(seq__52176_54008__$1);
var G__54019 = null;
var G__54020 = (0);
var G__54021 = (0);
seq__52176_53987 = G__54018;
chunk__52177_53988 = G__54019;
count__52178_53989 = G__54020;
i__52179_53990 = G__54021;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__52191){
var map__52192 = p__52191;
var map__52192__$1 = (((((!((map__52192 == null))))?(((((map__52192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52192):map__52192);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52192__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__52197){
var map__52198 = p__52197;
var map__52198__$1 = (((((!((map__52198 == null))))?(((((map__52198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52198):map__52198);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52198__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52198__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52198__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52198__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52198__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52198__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52198__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__52204){
var map__52205 = p__52204;
var map__52205__$1 = (((((!((map__52205 == null))))?(((((map__52205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52205):map__52205);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52205__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52205__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52205__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52205__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52205__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__52207_54035 = cljs.core.seq(protocols);
var chunk__52208_54036 = null;
var count__52209_54037 = (0);
var i__52210_54038 = (0);
while(true){
if((i__52210_54038 < count__52209_54037)){
var protocol_54039 = chunk__52208_54036.cljs$core$IIndexed$_nth$arity$2(null,i__52210_54038);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_54039)),"}");


var G__54040 = seq__52207_54035;
var G__54041 = chunk__52208_54036;
var G__54042 = count__52209_54037;
var G__54043 = (i__52210_54038 + (1));
seq__52207_54035 = G__54040;
chunk__52208_54036 = G__54041;
count__52209_54037 = G__54042;
i__52210_54038 = G__54043;
continue;
} else {
var temp__5735__auto___54044 = cljs.core.seq(seq__52207_54035);
if(temp__5735__auto___54044){
var seq__52207_54045__$1 = temp__5735__auto___54044;
if(cljs.core.chunked_seq_QMARK_(seq__52207_54045__$1)){
var c__4556__auto___54046 = cljs.core.chunk_first(seq__52207_54045__$1);
var G__54047 = cljs.core.chunk_rest(seq__52207_54045__$1);
var G__54048 = c__4556__auto___54046;
var G__54049 = cljs.core.count(c__4556__auto___54046);
var G__54050 = (0);
seq__52207_54035 = G__54047;
chunk__52208_54036 = G__54048;
count__52209_54037 = G__54049;
i__52210_54038 = G__54050;
continue;
} else {
var protocol_54052 = cljs.core.first(seq__52207_54045__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_54052)),"}");


var G__54056 = cljs.core.next(seq__52207_54045__$1);
var G__54057 = null;
var G__54058 = (0);
var G__54059 = (0);
seq__52207_54035 = G__54056;
chunk__52208_54036 = G__54057;
count__52209_54037 = G__54058;
i__52210_54038 = G__54059;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__52211_54060 = cljs.core.seq(fields__$1);
var chunk__52212_54061 = null;
var count__52213_54062 = (0);
var i__52214_54063 = (0);
while(true){
if((i__52214_54063 < count__52213_54062)){
var fld_54066 = chunk__52212_54061.cljs$core$IIndexed$_nth$arity$2(null,i__52214_54063);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_54066," = ",fld_54066,";");


var G__54067 = seq__52211_54060;
var G__54068 = chunk__52212_54061;
var G__54069 = count__52213_54062;
var G__54070 = (i__52214_54063 + (1));
seq__52211_54060 = G__54067;
chunk__52212_54061 = G__54068;
count__52213_54062 = G__54069;
i__52214_54063 = G__54070;
continue;
} else {
var temp__5735__auto___54071 = cljs.core.seq(seq__52211_54060);
if(temp__5735__auto___54071){
var seq__52211_54073__$1 = temp__5735__auto___54071;
if(cljs.core.chunked_seq_QMARK_(seq__52211_54073__$1)){
var c__4556__auto___54074 = cljs.core.chunk_first(seq__52211_54073__$1);
var G__54075 = cljs.core.chunk_rest(seq__52211_54073__$1);
var G__54076 = c__4556__auto___54074;
var G__54077 = cljs.core.count(c__4556__auto___54074);
var G__54078 = (0);
seq__52211_54060 = G__54075;
chunk__52212_54061 = G__54076;
count__52213_54062 = G__54077;
i__52214_54063 = G__54078;
continue;
} else {
var fld_54079 = cljs.core.first(seq__52211_54073__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_54079," = ",fld_54079,";");


var G__54080 = cljs.core.next(seq__52211_54073__$1);
var G__54081 = null;
var G__54082 = (0);
var G__54083 = (0);
seq__52211_54060 = G__54080;
chunk__52212_54061 = G__54081;
count__52213_54062 = G__54082;
i__52214_54063 = G__54083;
continue;
}
} else {
}
}
break;
}

var seq__52215_54084 = cljs.core.seq(pmasks);
var chunk__52216_54085 = null;
var count__52217_54086 = (0);
var i__52218_54087 = (0);
while(true){
if((i__52218_54087 < count__52217_54086)){
var vec__52225_54092 = chunk__52216_54085.cljs$core$IIndexed$_nth$arity$2(null,i__52218_54087);
var pno_54093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52225_54092,(0),null);
var pmask_54094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52225_54092,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_54093,"$ = ",pmask_54094,";");


var G__54098 = seq__52215_54084;
var G__54099 = chunk__52216_54085;
var G__54100 = count__52217_54086;
var G__54101 = (i__52218_54087 + (1));
seq__52215_54084 = G__54098;
chunk__52216_54085 = G__54099;
count__52217_54086 = G__54100;
i__52218_54087 = G__54101;
continue;
} else {
var temp__5735__auto___54102 = cljs.core.seq(seq__52215_54084);
if(temp__5735__auto___54102){
var seq__52215_54106__$1 = temp__5735__auto___54102;
if(cljs.core.chunked_seq_QMARK_(seq__52215_54106__$1)){
var c__4556__auto___54107 = cljs.core.chunk_first(seq__52215_54106__$1);
var G__54108 = cljs.core.chunk_rest(seq__52215_54106__$1);
var G__54109 = c__4556__auto___54107;
var G__54110 = cljs.core.count(c__4556__auto___54107);
var G__54111 = (0);
seq__52215_54084 = G__54108;
chunk__52216_54085 = G__54109;
count__52217_54086 = G__54110;
i__52218_54087 = G__54111;
continue;
} else {
var vec__52231_54112 = cljs.core.first(seq__52215_54106__$1);
var pno_54113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52231_54112,(0),null);
var pmask_54114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52231_54112,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_54113,"$ = ",pmask_54114,";");


var G__54115 = cljs.core.next(seq__52215_54106__$1);
var G__54116 = null;
var G__54117 = (0);
var G__54118 = (0);
seq__52215_54084 = G__54115;
chunk__52216_54085 = G__54116;
count__52217_54086 = G__54117;
i__52218_54087 = G__54118;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__52235){
var map__52236 = p__52235;
var map__52236__$1 = (((((!((map__52236 == null))))?(((((map__52236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52236):map__52236);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__52238_54123 = cljs.core.seq(protocols);
var chunk__52239_54124 = null;
var count__52240_54125 = (0);
var i__52241_54126 = (0);
while(true){
if((i__52241_54126 < count__52240_54125)){
var protocol_54140 = chunk__52239_54124.cljs$core$IIndexed$_nth$arity$2(null,i__52241_54126);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_54140)),"}");


var G__54145 = seq__52238_54123;
var G__54146 = chunk__52239_54124;
var G__54147 = count__52240_54125;
var G__54148 = (i__52241_54126 + (1));
seq__52238_54123 = G__54145;
chunk__52239_54124 = G__54146;
count__52240_54125 = G__54147;
i__52241_54126 = G__54148;
continue;
} else {
var temp__5735__auto___54149 = cljs.core.seq(seq__52238_54123);
if(temp__5735__auto___54149){
var seq__52238_54150__$1 = temp__5735__auto___54149;
if(cljs.core.chunked_seq_QMARK_(seq__52238_54150__$1)){
var c__4556__auto___54151 = cljs.core.chunk_first(seq__52238_54150__$1);
var G__54152 = cljs.core.chunk_rest(seq__52238_54150__$1);
var G__54153 = c__4556__auto___54151;
var G__54154 = cljs.core.count(c__4556__auto___54151);
var G__54155 = (0);
seq__52238_54123 = G__54152;
chunk__52239_54124 = G__54153;
count__52240_54125 = G__54154;
i__52241_54126 = G__54155;
continue;
} else {
var protocol_54156 = cljs.core.first(seq__52238_54150__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_54156)),"}");


var G__54157 = cljs.core.next(seq__52238_54150__$1);
var G__54158 = null;
var G__54159 = (0);
var G__54160 = (0);
seq__52238_54123 = G__54157;
chunk__52239_54124 = G__54158;
count__52240_54125 = G__54159;
i__52241_54126 = G__54160;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__52243_54161 = cljs.core.seq(fields__$1);
var chunk__52244_54162 = null;
var count__52245_54163 = (0);
var i__52246_54164 = (0);
while(true){
if((i__52246_54164 < count__52245_54163)){
var fld_54165 = chunk__52244_54162.cljs$core$IIndexed$_nth$arity$2(null,i__52246_54164);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_54165," = ",fld_54165,";");


var G__54169 = seq__52243_54161;
var G__54170 = chunk__52244_54162;
var G__54171 = count__52245_54163;
var G__54172 = (i__52246_54164 + (1));
seq__52243_54161 = G__54169;
chunk__52244_54162 = G__54170;
count__52245_54163 = G__54171;
i__52246_54164 = G__54172;
continue;
} else {
var temp__5735__auto___54173 = cljs.core.seq(seq__52243_54161);
if(temp__5735__auto___54173){
var seq__52243_54174__$1 = temp__5735__auto___54173;
if(cljs.core.chunked_seq_QMARK_(seq__52243_54174__$1)){
var c__4556__auto___54175 = cljs.core.chunk_first(seq__52243_54174__$1);
var G__54176 = cljs.core.chunk_rest(seq__52243_54174__$1);
var G__54177 = c__4556__auto___54175;
var G__54178 = cljs.core.count(c__4556__auto___54175);
var G__54179 = (0);
seq__52243_54161 = G__54176;
chunk__52244_54162 = G__54177;
count__52245_54163 = G__54178;
i__52246_54164 = G__54179;
continue;
} else {
var fld_54180 = cljs.core.first(seq__52243_54174__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_54180," = ",fld_54180,";");


var G__54181 = cljs.core.next(seq__52243_54174__$1);
var G__54182 = null;
var G__54183 = (0);
var G__54184 = (0);
seq__52243_54161 = G__54181;
chunk__52244_54162 = G__54182;
count__52245_54163 = G__54183;
i__52246_54164 = G__54184;
continue;
}
} else {
}
}
break;
}

var seq__52248_54185 = cljs.core.seq(pmasks);
var chunk__52249_54186 = null;
var count__52250_54187 = (0);
var i__52251_54188 = (0);
while(true){
if((i__52251_54188 < count__52250_54187)){
var vec__52258_54190 = chunk__52249_54186.cljs$core$IIndexed$_nth$arity$2(null,i__52251_54188);
var pno_54191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52258_54190,(0),null);
var pmask_54192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52258_54190,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_54191,"$ = ",pmask_54192,";");


var G__54195 = seq__52248_54185;
var G__54196 = chunk__52249_54186;
var G__54197 = count__52250_54187;
var G__54198 = (i__52251_54188 + (1));
seq__52248_54185 = G__54195;
chunk__52249_54186 = G__54196;
count__52250_54187 = G__54197;
i__52251_54188 = G__54198;
continue;
} else {
var temp__5735__auto___54199 = cljs.core.seq(seq__52248_54185);
if(temp__5735__auto___54199){
var seq__52248_54200__$1 = temp__5735__auto___54199;
if(cljs.core.chunked_seq_QMARK_(seq__52248_54200__$1)){
var c__4556__auto___54201 = cljs.core.chunk_first(seq__52248_54200__$1);
var G__54202 = cljs.core.chunk_rest(seq__52248_54200__$1);
var G__54203 = c__4556__auto___54201;
var G__54204 = cljs.core.count(c__4556__auto___54201);
var G__54205 = (0);
seq__52248_54185 = G__54202;
chunk__52249_54186 = G__54203;
count__52250_54187 = G__54204;
i__52251_54188 = G__54205;
continue;
} else {
var vec__52261_54206 = cljs.core.first(seq__52248_54200__$1);
var pno_54207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52261_54206,(0),null);
var pmask_54208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52261_54206,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_54207,"$ = ",pmask_54208,";");


var G__54209 = cljs.core.next(seq__52248_54200__$1);
var G__54210 = null;
var G__54211 = (0);
var G__54212 = (0);
seq__52248_54185 = G__54209;
chunk__52249_54186 = G__54210;
count__52250_54187 = G__54211;
i__52251_54188 = G__54212;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__52264){
var map__52265 = p__52264;
var map__52265__$1 = (((((!((map__52265 == null))))?(((((map__52265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52265):map__52265);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52265__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52265__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52265__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52265__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52265__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__52267){
var map__52268 = p__52267;
var map__52268__$1 = (((((!((map__52268 == null))))?(((((map__52268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52268):map__52268);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52268__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52268__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52268__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52268__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52268__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__52283 = cljs.core.seq(table);
var chunk__52284 = null;
var count__52285 = (0);
var i__52286 = (0);
while(true){
if((i__52286 < count__52285)){
var vec__52295 = chunk__52284.cljs$core$IIndexed$_nth$arity$2(null,i__52286);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52295,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52295,(1),null);
var ns_54222 = cljs.core.namespace(sym);
var name_54223 = cljs.core.name(sym);
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


var G__54226 = seq__52283;
var G__54227 = chunk__52284;
var G__54228 = count__52285;
var G__54229 = (i__52286 + (1));
seq__52283 = G__54226;
chunk__52284 = G__54227;
count__52285 = G__54228;
i__52286 = G__54229;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52283);
if(temp__5735__auto__){
var seq__52283__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52283__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52283__$1);
var G__54232 = cljs.core.chunk_rest(seq__52283__$1);
var G__54233 = c__4556__auto__;
var G__54234 = cljs.core.count(c__4556__auto__);
var G__54235 = (0);
seq__52283 = G__54232;
chunk__52284 = G__54233;
count__52285 = G__54234;
i__52286 = G__54235;
continue;
} else {
var vec__52300 = cljs.core.first(seq__52283__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52300,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52300,(1),null);
var ns_54236 = cljs.core.namespace(sym);
var name_54237 = cljs.core.name(sym);
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


var G__54248 = cljs.core.next(seq__52283__$1);
var G__54249 = null;
var G__54250 = (0);
var G__54251 = (0);
seq__52283 = G__54248;
chunk__52284 = G__54249;
count__52285 = G__54250;
i__52286 = G__54251;
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
var G__52308 = arguments.length;
switch (G__52308) {
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
var k_54254 = cljs.core.first(ks);
var vec__52312_54255 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_54254);
var top_54256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52312_54255,(0),null);
var prefix_SINGLEQUOTE__54257 = vec__52312_54255;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_54254)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__54257) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_54256)) || (cljs.core.contains_QMARK_(known_externs,top_54256)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__54257)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_54256);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__54257)),";");
}
} else {
}

var m_54266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_54254);
if(cljs.core.empty_QMARK_(m_54266)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__54257,m_54266,top_level,known_externs);
}

var G__54267 = cljs.core.next(ks);
ks = G__54267;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
