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
var map__53167 = s;
var map__53167__$1 = (((((!((map__53167 == null))))?(((((map__53167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53167):map__53167);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53167__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53167__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__53170 = info;
var map__53171 = G__53170;
var map__53171__$1 = (((((!((map__53171 == null))))?(((((map__53171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53171):map__53171);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53171__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__53170__$1 = G__53170;
while(true){
var d__$2 = d__$1;
var map__53178 = G__53170__$1;
var map__53178__$1 = (((((!((map__53178 == null))))?(((((map__53178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53178):map__53178);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53178__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__54275 = (d__$2 + (1));
var G__54276 = shadow__$2;
d__$1 = G__54275;
G__53170__$1 = G__54276;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__53184){
var map__53185 = p__53184;
var map__53185__$1 = (((((!((map__53185 == null))))?(((((map__53185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53185):map__53185);
var name_var = map__53185__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53185__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53185__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__53187 = info;
var map__53187__$1 = (((((!((map__53187 == null))))?(((((map__53187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53187):map__53187);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53187__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53187__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__53192 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__53192) : cljs.compiler.munge.call(null,G__53192));
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
var G__53199 = arguments.length;
switch (G__53199) {
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
var ms = (function (){var fexpr__53204 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__53204.cljs$core$IFn$_invoke$arity$1 ? fexpr__53204.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__53204.call(null,ss__$3));
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
var G__53216 = cp;
switch (G__53216) {
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
var seq__53240_54297 = cljs.core.seq(s);
var chunk__53241_54298 = null;
var count__53242_54299 = (0);
var i__53243_54300 = (0);
while(true){
if((i__53243_54300 < count__53242_54299)){
var c_54301 = chunk__53241_54298.cljs$core$IIndexed$_nth$arity$2(null,i__53243_54300);
sb.append(cljs.compiler.escape_char(c_54301));


var G__54302 = seq__53240_54297;
var G__54303 = chunk__53241_54298;
var G__54304 = count__53242_54299;
var G__54305 = (i__53243_54300 + (1));
seq__53240_54297 = G__54302;
chunk__53241_54298 = G__54303;
count__53242_54299 = G__54304;
i__53243_54300 = G__54305;
continue;
} else {
var temp__5735__auto___54306 = cljs.core.seq(seq__53240_54297);
if(temp__5735__auto___54306){
var seq__53240_54307__$1 = temp__5735__auto___54306;
if(cljs.core.chunked_seq_QMARK_(seq__53240_54307__$1)){
var c__4556__auto___54308 = cljs.core.chunk_first(seq__53240_54307__$1);
var G__54309 = cljs.core.chunk_rest(seq__53240_54307__$1);
var G__54310 = c__4556__auto___54308;
var G__54311 = cljs.core.count(c__4556__auto___54308);
var G__54312 = (0);
seq__53240_54297 = G__54309;
chunk__53241_54298 = G__54310;
count__53242_54299 = G__54311;
i__53243_54300 = G__54312;
continue;
} else {
var c_54314 = cljs.core.first(seq__53240_54307__$1);
sb.append(cljs.compiler.escape_char(c_54314));


var G__54317 = cljs.core.next(seq__53240_54307__$1);
var G__54318 = null;
var G__54319 = (0);
var G__54320 = (0);
seq__53240_54297 = G__54317;
chunk__53241_54298 = G__54318;
count__53242_54299 = G__54319;
i__53243_54300 = G__54320;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53266 = cljs.core.get_global_hierarchy;
return (fexpr__53266.cljs$core$IFn$_invoke$arity$0 ? fexpr__53266.cljs$core$IFn$_invoke$arity$0() : fexpr__53266.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__53268_54324 = ast;
var map__53268_54325__$1 = (((((!((map__53268_54324 == null))))?(((((map__53268_54324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53268_54324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53268_54324):map__53268_54324);
var env_54326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53268_54325__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_54326))){
var map__53270_54334 = env_54326;
var map__53270_54335__$1 = (((((!((map__53270_54334 == null))))?(((((map__53270_54334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53270_54334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53270_54334):map__53270_54334);
var line_54336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53270_54335__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53270_54335__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__53273 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__53277 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__53276 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__53276.cljs$core$IFn$_invoke$arity$1 ? fexpr__53276.cljs$core$IFn$_invoke$arity$1(G__53277) : fexpr__53276.call(null,G__53277));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53273,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__53273;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_54336 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_54337)?(column_54337 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__53287 = arguments.length;
switch (G__53287) {
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
var len__4736__auto___54363 = arguments.length;
var i__4737__auto___54364 = (0);
while(true){
if((i__4737__auto___54364 < len__4736__auto___54363)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54364]));

var G__54366 = (i__4737__auto___54364 + (1));
i__4737__auto___54364 = G__54366;
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
var s_54371 = (function (){var G__53292 = a;
if((!(typeof a === 'string'))){
return G__53292.toString();
} else {
return G__53292;
}
})();
var temp__5739__auto___54375 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___54375 == null)){
} else {
var sm_data_54376 = temp__5739__auto___54375;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_54376,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__53279_SHARP_){
return (p1__53279_SHARP_ + s_54371.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_54371], 0));

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

var seq__53297 = cljs.core.seq(xs);
var chunk__53298 = null;
var count__53299 = (0);
var i__53300 = (0);
while(true){
if((i__53300 < count__53299)){
var x = chunk__53298.cljs$core$IIndexed$_nth$arity$2(null,i__53300);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__54385 = seq__53297;
var G__54386 = chunk__53298;
var G__54387 = count__53299;
var G__54388 = (i__53300 + (1));
seq__53297 = G__54385;
chunk__53298 = G__54386;
count__53299 = G__54387;
i__53300 = G__54388;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53297);
if(temp__5735__auto__){
var seq__53297__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53297__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53297__$1);
var G__54389 = cljs.core.chunk_rest(seq__53297__$1);
var G__54390 = c__4556__auto__;
var G__54391 = cljs.core.count(c__4556__auto__);
var G__54392 = (0);
seq__53297 = G__54389;
chunk__53298 = G__54390;
count__53299 = G__54391;
i__53300 = G__54392;
continue;
} else {
var x = cljs.core.first(seq__53297__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__54393 = cljs.core.next(seq__53297__$1);
var G__54394 = null;
var G__54395 = (0);
var G__54396 = (0);
seq__53297 = G__54393;
chunk__53298 = G__54394;
count__53299 = G__54395;
i__53300 = G__54396;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq53281){
var G__53282 = cljs.core.first(seq53281);
var seq53281__$1 = cljs.core.next(seq53281);
var G__53283 = cljs.core.first(seq53281__$1);
var seq53281__$2 = cljs.core.next(seq53281__$1);
var G__53284 = cljs.core.first(seq53281__$2);
var seq53281__$3 = cljs.core.next(seq53281__$2);
var G__53285 = cljs.core.first(seq53281__$3);
var seq53281__$4 = cljs.core.next(seq53281__$3);
var G__53286 = cljs.core.first(seq53281__$4);
var seq53281__$5 = cljs.core.next(seq53281__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53282,G__53283,G__53284,G__53285,G__53286,seq53281__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__53305){
var map__53306 = p__53305;
var map__53306__$1 = (((((!((map__53306 == null))))?(((((map__53306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53306):map__53306);
var m = map__53306__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53306__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__53316 = arguments.length;
switch (G__53316) {
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
var len__4736__auto___54404 = arguments.length;
var i__4737__auto___54405 = (0);
while(true){
if((i__4737__auto___54405 < len__4736__auto___54404)){
args_arr__4757__auto__.push((arguments[i__4737__auto___54405]));

var G__54406 = (i__4737__auto___54405 + (1));
i__4737__auto___54405 = G__54406;
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

var seq__53320_54411 = cljs.core.seq(xs);
var chunk__53321_54412 = null;
var count__53322_54413 = (0);
var i__53323_54414 = (0);
while(true){
if((i__53323_54414 < count__53322_54413)){
var x_54415 = chunk__53321_54412.cljs$core$IIndexed$_nth$arity$2(null,i__53323_54414);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_54415);


var G__54416 = seq__53320_54411;
var G__54417 = chunk__53321_54412;
var G__54418 = count__53322_54413;
var G__54419 = (i__53323_54414 + (1));
seq__53320_54411 = G__54416;
chunk__53321_54412 = G__54417;
count__53322_54413 = G__54418;
i__53323_54414 = G__54419;
continue;
} else {
var temp__5735__auto___54420 = cljs.core.seq(seq__53320_54411);
if(temp__5735__auto___54420){
var seq__53320_54421__$1 = temp__5735__auto___54420;
if(cljs.core.chunked_seq_QMARK_(seq__53320_54421__$1)){
var c__4556__auto___54422 = cljs.core.chunk_first(seq__53320_54421__$1);
var G__54423 = cljs.core.chunk_rest(seq__53320_54421__$1);
var G__54424 = c__4556__auto___54422;
var G__54425 = cljs.core.count(c__4556__auto___54422);
var G__54426 = (0);
seq__53320_54411 = G__54423;
chunk__53321_54412 = G__54424;
count__53322_54413 = G__54425;
i__53323_54414 = G__54426;
continue;
} else {
var x_54427 = cljs.core.first(seq__53320_54421__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_54427);


var G__54428 = cljs.core.next(seq__53320_54421__$1);
var G__54429 = null;
var G__54430 = (0);
var G__54431 = (0);
seq__53320_54411 = G__54428;
chunk__53321_54412 = G__54429;
count__53322_54413 = G__54430;
i__53323_54414 = G__54431;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq53310){
var G__53311 = cljs.core.first(seq53310);
var seq53310__$1 = cljs.core.next(seq53310);
var G__53312 = cljs.core.first(seq53310__$1);
var seq53310__$2 = cljs.core.next(seq53310__$1);
var G__53313 = cljs.core.first(seq53310__$2);
var seq53310__$3 = cljs.core.next(seq53310__$2);
var G__53314 = cljs.core.first(seq53310__$3);
var seq53310__$4 = cljs.core.next(seq53310__$3);
var G__53315 = cljs.core.first(seq53310__$4);
var seq53310__$5 = cljs.core.next(seq53310__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53311,G__53312,G__53313,G__53314,G__53315,seq53310__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53330_54433 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53331_54434 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53332_54435 = true;
var _STAR_print_fn_STAR__temp_val__53333_54436 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53332_54435);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53333_54436);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53331_54434);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53330_54433);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53337 = cljs.core.get_global_hierarchy;
return (fexpr__53337.cljs$core$IFn$_invoke$arity$0 ? fexpr__53337.cljs$core$IFn$_invoke$arity$0() : fexpr__53337.call(null));
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
var vec__53339 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53339,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53339,(1),null);
var G__53342 = ns;
var G__53343 = name;
var G__53344 = (function (){
var G__53345 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__53345) : cljs.compiler.emit_constant.call(null,G__53345));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__53342,G__53343,G__53344) : cljs.compiler.emit_record_value.call(null,G__53342,G__53343,G__53344));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__53346 = cljs.core.keys(x);
var G__53347 = cljs.core.vals(x);
var G__53348 = cljs.compiler.emit_constants_comma_sep;
var G__53349 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__53346,G__53347,G__53348,G__53349) : cljs.compiler.emit_map.call(null,G__53346,G__53347,G__53348,G__53349));
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
var G__53351 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__53352 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__53351,G__53352) : cljs.compiler.emit_with_meta.call(null,G__53351,G__53352));
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
var vec__53371 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53371,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53371,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53371,(2),null);
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
var G__53377 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__53377) : x.call(null,G__53377));
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
var G__53380 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__53380) : x.call(null,G__53380));
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
var G__53388 = items;
var G__53389 = (function (p1__53385_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__53385_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__53388,G__53389) : cljs.compiler.emit_js_object.call(null,G__53388,G__53389));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__53392){
var map__53393 = p__53392;
var map__53393__$1 = (((((!((map__53393 == null))))?(((((map__53393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53393):map__53393);
var ast = map__53393__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53393__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53393__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53393__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__53395 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__53395__$1 = (((((!((map__53395 == null))))?(((((map__53395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53395):map__53395);
var cenv = map__53395__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53395__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__53401 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__53404 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__53404) : cljs.compiler.es5_GT__EQ_.call(null,G__53404));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__53401,cljs.analyzer.es5_allowed);
} else {
return G__53401;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__53406 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__53406,reserved);
} else {
return G__53406;
}
})();
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__53410_54480 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__53410_54481__$1 = (((G__53410_54480 instanceof cljs.core.Keyword))?G__53410_54480.fqn:null);
switch (G__53410_54481__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__53417){
var map__53418 = p__53417;
var map__53418__$1 = (((((!((map__53418 == null))))?(((((map__53418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53418):map__53418);
var arg = map__53418__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53418__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53418__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53418__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53418__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__53423 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__53423__$1 = (((((!((map__53423 == null))))?(((((map__53423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53423):map__53423);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53423__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__53427){
var map__53428 = p__53427;
var map__53428__$1 = (((((!((map__53428 == null))))?(((((map__53428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53428):map__53428);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53428__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53428__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53428__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__53430_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__53430_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__53431 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__53431) : comma_sep.call(null,G__53431));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__53432 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__53432) : comma_sep.call(null,G__53432));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__53433){
var map__53434 = p__53433;
var map__53434__$1 = (((((!((map__53434 == null))))?(((((map__53434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53434):map__53434);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53434__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53434__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53434__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__53437){
var map__53438 = p__53437;
var map__53438__$1 = (((((!((map__53438 == null))))?(((((map__53438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53438):map__53438);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53438__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53438__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__53440_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__53440_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__53441 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__53441) : comma_sep.call(null,G__53441));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__53443){
var map__53444 = p__53443;
var map__53444__$1 = (((((!((map__53444 == null))))?(((((map__53444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53444):map__53444);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53444__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53444__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___54517 = cljs.core.seq(items);
if(temp__5735__auto___54517){
var items_54518__$1 = temp__5735__auto___54517;
var vec__53447_54519 = items_54518__$1;
var seq__53448_54520 = cljs.core.seq(vec__53447_54519);
var first__53449_54521 = cljs.core.first(seq__53448_54520);
var seq__53448_54522__$1 = cljs.core.next(seq__53448_54520);
var vec__53450_54523 = first__53449_54521;
var k_54524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53450_54523,(0),null);
var v_54525 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53450_54523,(1),null);
var r_54526 = seq__53448_54522__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_54524),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_54525) : emit_js_object_val.call(null,v_54525)));

var seq__53453_54527 = cljs.core.seq(r_54526);
var chunk__53454_54528 = null;
var count__53455_54529 = (0);
var i__53456_54530 = (0);
while(true){
if((i__53456_54530 < count__53455_54529)){
var vec__53465_54531 = chunk__53454_54528.cljs$core$IIndexed$_nth$arity$2(null,i__53456_54530);
var k_54532__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53465_54531,(0),null);
var v_54533__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53465_54531,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_54532__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_54533__$1) : emit_js_object_val.call(null,v_54533__$1)));


var G__54535 = seq__53453_54527;
var G__54536 = chunk__53454_54528;
var G__54537 = count__53455_54529;
var G__54538 = (i__53456_54530 + (1));
seq__53453_54527 = G__54535;
chunk__53454_54528 = G__54536;
count__53455_54529 = G__54537;
i__53456_54530 = G__54538;
continue;
} else {
var temp__5735__auto___54540__$1 = cljs.core.seq(seq__53453_54527);
if(temp__5735__auto___54540__$1){
var seq__53453_54542__$1 = temp__5735__auto___54540__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53453_54542__$1)){
var c__4556__auto___54543 = cljs.core.chunk_first(seq__53453_54542__$1);
var G__54544 = cljs.core.chunk_rest(seq__53453_54542__$1);
var G__54545 = c__4556__auto___54543;
var G__54546 = cljs.core.count(c__4556__auto___54543);
var G__54547 = (0);
seq__53453_54527 = G__54544;
chunk__53454_54528 = G__54545;
count__53455_54529 = G__54546;
i__53456_54530 = G__54547;
continue;
} else {
var vec__53468_54552 = cljs.core.first(seq__53453_54542__$1);
var k_54553__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53468_54552,(0),null);
var v_54554__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53468_54552,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_54553__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_54554__$1) : emit_js_object_val.call(null,v_54554__$1)));


var G__54555 = cljs.core.next(seq__53453_54542__$1);
var G__54556 = null;
var G__54557 = (0);
var G__54558 = (0);
seq__53453_54527 = G__54555;
chunk__53454_54528 = G__54556;
count__53455_54529 = G__54557;
i__53456_54530 = G__54558;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__53474){
var map__53475 = p__53474;
var map__53475__$1 = (((((!((map__53475 == null))))?(((((map__53475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53475):map__53475);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53475__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53475__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53475__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__53477){
var map__53478 = p__53477;
var map__53478__$1 = (((((!((map__53478 == null))))?(((((map__53478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53478):map__53478);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53478__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53478__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__53486){
var map__53488 = p__53486;
var map__53488__$1 = (((((!((map__53488 == null))))?(((((map__53488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53488):map__53488);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53488__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__53494){
var map__53495 = p__53494;
var map__53495__$1 = (((((!((map__53495 == null))))?(((((map__53495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53495):map__53495);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53495__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53495__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__53497 = cljs.analyzer.unwrap_quote(expr);
var map__53497__$1 = (((((!((map__53497 == null))))?(((((map__53497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53497):map__53497);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53497__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53497__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53497__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__53522 = cljs.analyzer.unwrap_quote(expr);
var map__53522__$1 = (((((!((map__53522 == null))))?(((((map__53522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53522):map__53522);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53522__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53522__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53522__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__53527 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__53527.cljs$core$IFn$_invoke$arity$1 ? fexpr__53527.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__53527.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__53528){
var map__53530 = p__53528;
var map__53530__$1 = (((((!((map__53530 == null))))?(((((map__53530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53530):map__53530);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53530__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__53537){
var map__53538 = p__53537;
var map__53538__$1 = (((((!((map__53538 == null))))?(((((map__53538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53538):map__53538);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53538__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53538__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53538__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53538__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__53542_54596 = cljs.core.seq(nodes);
var chunk__53543_54597 = null;
var count__53544_54598 = (0);
var i__53545_54599 = (0);
while(true){
if((i__53545_54599 < count__53544_54598)){
var map__53572_54600 = chunk__53543_54597.cljs$core$IIndexed$_nth$arity$2(null,i__53545_54599);
var map__53572_54601__$1 = (((((!((map__53572_54600 == null))))?(((((map__53572_54600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53572_54600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53572_54600):map__53572_54600);
var ts_54602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572_54601__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__53573_54603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53572_54601__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__53573_54604__$1 = (((((!((map__53573_54603 == null))))?(((((map__53573_54603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53573_54603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53573_54603):map__53573_54603);
var then_54605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53573_54604__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__53578_54614 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_54602));
var chunk__53579_54615 = null;
var count__53580_54616 = (0);
var i__53581_54617 = (0);
while(true){
if((i__53581_54617 < count__53580_54616)){
var test_54619 = chunk__53579_54615.cljs$core$IIndexed$_nth$arity$2(null,i__53581_54617);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_54619,":");


var G__54622 = seq__53578_54614;
var G__54623 = chunk__53579_54615;
var G__54624 = count__53580_54616;
var G__54625 = (i__53581_54617 + (1));
seq__53578_54614 = G__54622;
chunk__53579_54615 = G__54623;
count__53580_54616 = G__54624;
i__53581_54617 = G__54625;
continue;
} else {
var temp__5735__auto___54630 = cljs.core.seq(seq__53578_54614);
if(temp__5735__auto___54630){
var seq__53578_54639__$1 = temp__5735__auto___54630;
if(cljs.core.chunked_seq_QMARK_(seq__53578_54639__$1)){
var c__4556__auto___54640 = cljs.core.chunk_first(seq__53578_54639__$1);
var G__54641 = cljs.core.chunk_rest(seq__53578_54639__$1);
var G__54642 = c__4556__auto___54640;
var G__54643 = cljs.core.count(c__4556__auto___54640);
var G__54644 = (0);
seq__53578_54614 = G__54641;
chunk__53579_54615 = G__54642;
count__53580_54616 = G__54643;
i__53581_54617 = G__54644;
continue;
} else {
var test_54645 = cljs.core.first(seq__53578_54639__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_54645,":");


var G__54647 = cljs.core.next(seq__53578_54639__$1);
var G__54648 = null;
var G__54649 = (0);
var G__54650 = (0);
seq__53578_54614 = G__54647;
chunk__53579_54615 = G__54648;
count__53580_54616 = G__54649;
i__53581_54617 = G__54650;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_54605);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_54605);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__54651 = seq__53542_54596;
var G__54652 = chunk__53543_54597;
var G__54653 = count__53544_54598;
var G__54654 = (i__53545_54599 + (1));
seq__53542_54596 = G__54651;
chunk__53543_54597 = G__54652;
count__53544_54598 = G__54653;
i__53545_54599 = G__54654;
continue;
} else {
var temp__5735__auto___54656 = cljs.core.seq(seq__53542_54596);
if(temp__5735__auto___54656){
var seq__53542_54657__$1 = temp__5735__auto___54656;
if(cljs.core.chunked_seq_QMARK_(seq__53542_54657__$1)){
var c__4556__auto___54658 = cljs.core.chunk_first(seq__53542_54657__$1);
var G__54659 = cljs.core.chunk_rest(seq__53542_54657__$1);
var G__54660 = c__4556__auto___54658;
var G__54661 = cljs.core.count(c__4556__auto___54658);
var G__54662 = (0);
seq__53542_54596 = G__54659;
chunk__53543_54597 = G__54660;
count__53544_54598 = G__54661;
i__53545_54599 = G__54662;
continue;
} else {
var map__53584_54663 = cljs.core.first(seq__53542_54657__$1);
var map__53584_54664__$1 = (((((!((map__53584_54663 == null))))?(((((map__53584_54663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53584_54663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53584_54663):map__53584_54663);
var ts_54665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53584_54664__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__53585_54666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53584_54664__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__53585_54667__$1 = (((((!((map__53585_54666 == null))))?(((((map__53585_54666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53585_54666.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53585_54666):map__53585_54666);
var then_54668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53585_54667__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__53589_54673 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_54665));
var chunk__53590_54674 = null;
var count__53591_54675 = (0);
var i__53592_54676 = (0);
while(true){
if((i__53592_54676 < count__53591_54675)){
var test_54678 = chunk__53590_54674.cljs$core$IIndexed$_nth$arity$2(null,i__53592_54676);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_54678,":");


var G__54683 = seq__53589_54673;
var G__54684 = chunk__53590_54674;
var G__54685 = count__53591_54675;
var G__54686 = (i__53592_54676 + (1));
seq__53589_54673 = G__54683;
chunk__53590_54674 = G__54684;
count__53591_54675 = G__54685;
i__53592_54676 = G__54686;
continue;
} else {
var temp__5735__auto___54687__$1 = cljs.core.seq(seq__53589_54673);
if(temp__5735__auto___54687__$1){
var seq__53589_54688__$1 = temp__5735__auto___54687__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53589_54688__$1)){
var c__4556__auto___54689 = cljs.core.chunk_first(seq__53589_54688__$1);
var G__54690 = cljs.core.chunk_rest(seq__53589_54688__$1);
var G__54691 = c__4556__auto___54689;
var G__54692 = cljs.core.count(c__4556__auto___54689);
var G__54693 = (0);
seq__53589_54673 = G__54690;
chunk__53590_54674 = G__54691;
count__53591_54675 = G__54692;
i__53592_54676 = G__54693;
continue;
} else {
var test_54694 = cljs.core.first(seq__53589_54688__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_54694,":");


var G__54698 = cljs.core.next(seq__53589_54688__$1);
var G__54699 = null;
var G__54700 = (0);
var G__54701 = (0);
seq__53589_54673 = G__54698;
chunk__53590_54674 = G__54699;
count__53591_54675 = G__54700;
i__53592_54676 = G__54701;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_54668);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_54668);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__54702 = cljs.core.next(seq__53542_54657__$1);
var G__54703 = null;
var G__54704 = (0);
var G__54705 = (0);
seq__53542_54596 = G__54702;
chunk__53543_54597 = G__54703;
count__53544_54598 = G__54704;
i__53545_54599 = G__54705;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__53594){
var map__53595 = p__53594;
var map__53595__$1 = (((((!((map__53595 == null))))?(((((map__53595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53595):map__53595);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53595__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53595__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__53600 = env;
var G__53601 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__53600,G__53601) : cljs.compiler.resolve_type.call(null,G__53600,G__53601));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__53602 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53602,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53602,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__53597_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__53597_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__53597_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__53605 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__53605,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__53605;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__53608 = env;
var G__53609 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__53608,G__53609) : cljs.compiler.resolve_type.call(null,G__53608,G__53609));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53610_SHARP_){
return cljs.compiler.resolve_type(env,p1__53610_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__53611 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__53612 = cljs.core.seq(vec__53611);
var first__53613 = cljs.core.first(seq__53612);
var seq__53612__$1 = cljs.core.next(seq__53612);
var p = first__53613;
var first__53613__$1 = cljs.core.first(seq__53612__$1);
var seq__53612__$2 = cljs.core.next(seq__53612__$1);
var ts = first__53613__$1;
var first__53613__$2 = cljs.core.first(seq__53612__$2);
var seq__53612__$3 = cljs.core.next(seq__53612__$2);
var n = first__53613__$2;
var xs = seq__53612__$3;
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
var vec__53614 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__53615 = cljs.core.seq(vec__53614);
var first__53616 = cljs.core.first(seq__53615);
var seq__53615__$1 = cljs.core.next(seq__53615);
var p = first__53616;
var first__53616__$1 = cljs.core.first(seq__53615__$1);
var seq__53615__$2 = cljs.core.next(seq__53615__$1);
var ts = first__53616__$1;
var xs = seq__53615__$2;
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
var G__53618 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__53617 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__53617.cljs$core$IFn$_invoke$arity$1 ? fexpr__53617.cljs$core$IFn$_invoke$arity$1(G__53618) : fexpr__53617.call(null,G__53618));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__53621 = arguments.length;
switch (G__53621) {
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
var vec__53629 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53619_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__53619_SHARP_);
} else {
return p1__53619_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__53630 = cljs.core.seq(vec__53629);
var first__53631 = cljs.core.first(seq__53630);
var seq__53630__$1 = cljs.core.next(seq__53630);
var x = first__53631;
var ys = seq__53630__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__53632 = cljs.core.seq(ys);
var chunk__53633 = null;
var count__53634 = (0);
var i__53635 = (0);
while(true){
if((i__53635 < count__53634)){
var next_line = chunk__53633.cljs$core$IIndexed$_nth$arity$2(null,i__53635);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__54744 = seq__53632;
var G__54745 = chunk__53633;
var G__54746 = count__53634;
var G__54747 = (i__53635 + (1));
seq__53632 = G__54744;
chunk__53633 = G__54745;
count__53634 = G__54746;
i__53635 = G__54747;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53632);
if(temp__5735__auto__){
var seq__53632__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53632__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53632__$1);
var G__54748 = cljs.core.chunk_rest(seq__53632__$1);
var G__54749 = c__4556__auto__;
var G__54750 = cljs.core.count(c__4556__auto__);
var G__54751 = (0);
seq__53632 = G__54748;
chunk__53633 = G__54749;
count__53634 = G__54750;
i__53635 = G__54751;
continue;
} else {
var next_line = cljs.core.first(seq__53632__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__54757 = cljs.core.next(seq__53632__$1);
var G__54758 = null;
var G__54759 = (0);
var G__54760 = (0);
seq__53632 = G__54757;
chunk__53633 = G__54758;
count__53634 = G__54759;
i__53635 = G__54760;
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

var seq__53644_54763 = cljs.core.seq(docs__$2);
var chunk__53645_54764 = null;
var count__53646_54765 = (0);
var i__53647_54766 = (0);
while(true){
if((i__53647_54766 < count__53646_54765)){
var e_54767 = chunk__53645_54764.cljs$core$IIndexed$_nth$arity$2(null,i__53647_54766);
if(cljs.core.truth_(e_54767)){
print_comment_lines(e_54767);
} else {
}


var G__54768 = seq__53644_54763;
var G__54769 = chunk__53645_54764;
var G__54770 = count__53646_54765;
var G__54771 = (i__53647_54766 + (1));
seq__53644_54763 = G__54768;
chunk__53645_54764 = G__54769;
count__53646_54765 = G__54770;
i__53647_54766 = G__54771;
continue;
} else {
var temp__5735__auto___54772 = cljs.core.seq(seq__53644_54763);
if(temp__5735__auto___54772){
var seq__53644_54773__$1 = temp__5735__auto___54772;
if(cljs.core.chunked_seq_QMARK_(seq__53644_54773__$1)){
var c__4556__auto___54775 = cljs.core.chunk_first(seq__53644_54773__$1);
var G__54776 = cljs.core.chunk_rest(seq__53644_54773__$1);
var G__54777 = c__4556__auto___54775;
var G__54778 = cljs.core.count(c__4556__auto___54775);
var G__54779 = (0);
seq__53644_54763 = G__54776;
chunk__53645_54764 = G__54777;
count__53646_54765 = G__54778;
i__53647_54766 = G__54779;
continue;
} else {
var e_54780 = cljs.core.first(seq__53644_54773__$1);
if(cljs.core.truth_(e_54780)){
print_comment_lines(e_54780);
} else {
}


var G__54781 = cljs.core.next(seq__53644_54773__$1);
var G__54782 = null;
var G__54783 = (0);
var G__54784 = (0);
seq__53644_54763 = G__54781;
chunk__53645_54764 = G__54782;
count__53646_54765 = G__54783;
i__53647_54766 = G__54784;
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
var and__4115__auto__ = cljs.core.some((function (p1__53649_SHARP_){
return goog.string.startsWith(p1__53649_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__53657){
var map__53658 = p__53657;
var map__53658__$1 = (((((!((map__53658 == null))))?(((((map__53658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53658):map__53658);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53658__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__53662){
var map__53663 = p__53662;
var map__53663__$1 = (((((!((map__53663 == null))))?(((((map__53663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53663):map__53663);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53663__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53663__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53663__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__53665_54817 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__53666_54818 = null;
var count__53667_54819 = (0);
var i__53668_54820 = (0);
while(true){
if((i__53668_54820 < count__53667_54819)){
var vec__53676_54821 = chunk__53666_54818.cljs$core$IIndexed$_nth$arity$2(null,i__53668_54820);
var i_54822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53676_54821,(0),null);
var param_54823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53676_54821,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_54823);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__54825 = seq__53665_54817;
var G__54826 = chunk__53666_54818;
var G__54827 = count__53667_54819;
var G__54828 = (i__53668_54820 + (1));
seq__53665_54817 = G__54825;
chunk__53666_54818 = G__54826;
count__53667_54819 = G__54827;
i__53668_54820 = G__54828;
continue;
} else {
var temp__5735__auto___54829 = cljs.core.seq(seq__53665_54817);
if(temp__5735__auto___54829){
var seq__53665_54831__$1 = temp__5735__auto___54829;
if(cljs.core.chunked_seq_QMARK_(seq__53665_54831__$1)){
var c__4556__auto___54832 = cljs.core.chunk_first(seq__53665_54831__$1);
var G__54834 = cljs.core.chunk_rest(seq__53665_54831__$1);
var G__54835 = c__4556__auto___54832;
var G__54836 = cljs.core.count(c__4556__auto___54832);
var G__54837 = (0);
seq__53665_54817 = G__54834;
chunk__53666_54818 = G__54835;
count__53667_54819 = G__54836;
i__53668_54820 = G__54837;
continue;
} else {
var vec__53684_54839 = cljs.core.first(seq__53665_54831__$1);
var i_54840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53684_54839,(0),null);
var param_54841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53684_54839,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_54841);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__54842 = cljs.core.next(seq__53665_54831__$1);
var G__54843 = null;
var G__54844 = (0);
var G__54845 = (0);
seq__53665_54817 = G__54842;
chunk__53666_54818 = G__54843;
count__53667_54819 = G__54844;
i__53668_54820 = G__54845;
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

var seq__53690_54846 = cljs.core.seq(params);
var chunk__53691_54847 = null;
var count__53692_54848 = (0);
var i__53693_54849 = (0);
while(true){
if((i__53693_54849 < count__53692_54848)){
var param_54852 = chunk__53691_54847.cljs$core$IIndexed$_nth$arity$2(null,i__53693_54849);
cljs.compiler.emit(param_54852);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_54852,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__54853 = seq__53690_54846;
var G__54854 = chunk__53691_54847;
var G__54855 = count__53692_54848;
var G__54856 = (i__53693_54849 + (1));
seq__53690_54846 = G__54853;
chunk__53691_54847 = G__54854;
count__53692_54848 = G__54855;
i__53693_54849 = G__54856;
continue;
} else {
var temp__5735__auto___54862 = cljs.core.seq(seq__53690_54846);
if(temp__5735__auto___54862){
var seq__53690_54863__$1 = temp__5735__auto___54862;
if(cljs.core.chunked_seq_QMARK_(seq__53690_54863__$1)){
var c__4556__auto___54864 = cljs.core.chunk_first(seq__53690_54863__$1);
var G__54865 = cljs.core.chunk_rest(seq__53690_54863__$1);
var G__54866 = c__4556__auto___54864;
var G__54867 = cljs.core.count(c__4556__auto___54864);
var G__54868 = (0);
seq__53690_54846 = G__54865;
chunk__53691_54847 = G__54866;
count__53692_54848 = G__54867;
i__53693_54849 = G__54868;
continue;
} else {
var param_54869 = cljs.core.first(seq__53690_54863__$1);
cljs.compiler.emit(param_54869);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_54869,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__54872 = cljs.core.next(seq__53690_54863__$1);
var G__54873 = null;
var G__54874 = (0);
var G__54875 = (0);
seq__53690_54846 = G__54872;
chunk__53691_54847 = G__54873;
count__53692_54848 = G__54874;
i__53693_54849 = G__54875;
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

var seq__53696_54877 = cljs.core.seq(params);
var chunk__53697_54878 = null;
var count__53698_54879 = (0);
var i__53699_54880 = (0);
while(true){
if((i__53699_54880 < count__53698_54879)){
var param_54884 = chunk__53697_54878.cljs$core$IIndexed$_nth$arity$2(null,i__53699_54880);
cljs.compiler.emit(param_54884);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_54884,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__54886 = seq__53696_54877;
var G__54887 = chunk__53697_54878;
var G__54888 = count__53698_54879;
var G__54889 = (i__53699_54880 + (1));
seq__53696_54877 = G__54886;
chunk__53697_54878 = G__54887;
count__53698_54879 = G__54888;
i__53699_54880 = G__54889;
continue;
} else {
var temp__5735__auto___54894 = cljs.core.seq(seq__53696_54877);
if(temp__5735__auto___54894){
var seq__53696_54895__$1 = temp__5735__auto___54894;
if(cljs.core.chunked_seq_QMARK_(seq__53696_54895__$1)){
var c__4556__auto___54896 = cljs.core.chunk_first(seq__53696_54895__$1);
var G__54897 = cljs.core.chunk_rest(seq__53696_54895__$1);
var G__54898 = c__4556__auto___54896;
var G__54899 = cljs.core.count(c__4556__auto___54896);
var G__54900 = (0);
seq__53696_54877 = G__54897;
chunk__53697_54878 = G__54898;
count__53698_54879 = G__54899;
i__53699_54880 = G__54900;
continue;
} else {
var param_54901 = cljs.core.first(seq__53696_54895__$1);
cljs.compiler.emit(param_54901);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_54901,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__54903 = cljs.core.next(seq__53696_54895__$1);
var G__54904 = null;
var G__54905 = (0);
var G__54906 = (0);
seq__53696_54877 = G__54903;
chunk__53697_54878 = G__54904;
count__53698_54879 = G__54905;
i__53699_54880 = G__54906;
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
var seq__53708 = cljs.core.seq(params);
var chunk__53709 = null;
var count__53710 = (0);
var i__53711 = (0);
while(true){
if((i__53711 < count__53710)){
var param = chunk__53709.cljs$core$IIndexed$_nth$arity$2(null,i__53711);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__54912 = seq__53708;
var G__54913 = chunk__53709;
var G__54914 = count__53710;
var G__54915 = (i__53711 + (1));
seq__53708 = G__54912;
chunk__53709 = G__54913;
count__53710 = G__54914;
i__53711 = G__54915;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53708);
if(temp__5735__auto__){
var seq__53708__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53708__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53708__$1);
var G__54917 = cljs.core.chunk_rest(seq__53708__$1);
var G__54918 = c__4556__auto__;
var G__54919 = cljs.core.count(c__4556__auto__);
var G__54920 = (0);
seq__53708 = G__54917;
chunk__53709 = G__54918;
count__53710 = G__54919;
i__53711 = G__54920;
continue;
} else {
var param = cljs.core.first(seq__53708__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__54924 = cljs.core.next(seq__53708__$1);
var G__54925 = null;
var G__54926 = (0);
var G__54927 = (0);
seq__53708 = G__54924;
chunk__53709 = G__54925;
count__53710 = G__54926;
i__53711 = G__54927;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__53715){
var map__53716 = p__53715;
var map__53716__$1 = (((((!((map__53716 == null))))?(((((map__53716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53716):map__53716);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53716__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53716__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53716__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53716__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53716__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53716__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__53720){
var map__53721 = p__53720;
var map__53721__$1 = (((((!((map__53721 == null))))?(((((map__53721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53721):map__53721);
var f = map__53721__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53721__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53721__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53721__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53721__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53721__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53721__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53721__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53721__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_54936__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_54937 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_54936__$1);
var delegate_name_54938 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_54937),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_54938," = function (");

var seq__53723_54939 = cljs.core.seq(params);
var chunk__53724_54940 = null;
var count__53725_54941 = (0);
var i__53726_54942 = (0);
while(true){
if((i__53726_54942 < count__53725_54941)){
var param_54947 = chunk__53724_54940.cljs$core$IIndexed$_nth$arity$2(null,i__53726_54942);
cljs.compiler.emit(param_54947);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_54947,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__54948 = seq__53723_54939;
var G__54949 = chunk__53724_54940;
var G__54950 = count__53725_54941;
var G__54951 = (i__53726_54942 + (1));
seq__53723_54939 = G__54948;
chunk__53724_54940 = G__54949;
count__53725_54941 = G__54950;
i__53726_54942 = G__54951;
continue;
} else {
var temp__5735__auto___54956 = cljs.core.seq(seq__53723_54939);
if(temp__5735__auto___54956){
var seq__53723_54957__$1 = temp__5735__auto___54956;
if(cljs.core.chunked_seq_QMARK_(seq__53723_54957__$1)){
var c__4556__auto___54958 = cljs.core.chunk_first(seq__53723_54957__$1);
var G__54959 = cljs.core.chunk_rest(seq__53723_54957__$1);
var G__54960 = c__4556__auto___54958;
var G__54961 = cljs.core.count(c__4556__auto___54958);
var G__54962 = (0);
seq__53723_54939 = G__54959;
chunk__53724_54940 = G__54960;
count__53725_54941 = G__54961;
i__53726_54942 = G__54962;
continue;
} else {
var param_54963 = cljs.core.first(seq__53723_54957__$1);
cljs.compiler.emit(param_54963);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_54963,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__54964 = cljs.core.next(seq__53723_54957__$1);
var G__54965 = null;
var G__54966 = (0);
var G__54967 = (0);
seq__53723_54939 = G__54964;
chunk__53724_54940 = G__54965;
count__53725_54941 = G__54966;
i__53726_54942 = G__54967;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_54937," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_54972 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_54972,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_54938,".call(this,");

var seq__53731_54973 = cljs.core.seq(params);
var chunk__53732_54974 = null;
var count__53733_54975 = (0);
var i__53734_54976 = (0);
while(true){
if((i__53734_54976 < count__53733_54975)){
var param_54977 = chunk__53732_54974.cljs$core$IIndexed$_nth$arity$2(null,i__53734_54976);
cljs.compiler.emit(param_54977);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_54977,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__54982 = seq__53731_54973;
var G__54983 = chunk__53732_54974;
var G__54984 = count__53733_54975;
var G__54985 = (i__53734_54976 + (1));
seq__53731_54973 = G__54982;
chunk__53732_54974 = G__54983;
count__53733_54975 = G__54984;
i__53734_54976 = G__54985;
continue;
} else {
var temp__5735__auto___54986 = cljs.core.seq(seq__53731_54973);
if(temp__5735__auto___54986){
var seq__53731_54987__$1 = temp__5735__auto___54986;
if(cljs.core.chunked_seq_QMARK_(seq__53731_54987__$1)){
var c__4556__auto___54992 = cljs.core.chunk_first(seq__53731_54987__$1);
var G__54993 = cljs.core.chunk_rest(seq__53731_54987__$1);
var G__54994 = c__4556__auto___54992;
var G__54995 = cljs.core.count(c__4556__auto___54992);
var G__54996 = (0);
seq__53731_54973 = G__54993;
chunk__53732_54974 = G__54994;
count__53733_54975 = G__54995;
i__53734_54976 = G__54996;
continue;
} else {
var param_54997 = cljs.core.first(seq__53731_54987__$1);
cljs.compiler.emit(param_54997);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_54997,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__54998 = cljs.core.next(seq__53731_54987__$1);
var G__54999 = null;
var G__55000 = (0);
var G__55001 = (0);
seq__53731_54973 = G__54998;
chunk__53732_54974 = G__54999;
count__53733_54975 = G__55000;
i__53734_54976 = G__55001;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_54937,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_54937,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_54936__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_54937,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_54938,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_54937,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__53742){
var map__53743 = p__53742;
var map__53743__$1 = (((((!((map__53743 == null))))?(((((map__53743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53743):map__53743);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53743__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53739_SHARP_){
var and__4115__auto__ = p1__53739_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__53739_SHARP_));
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
var name_55015__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_55016 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_55015__$1);
var maxparams_55017 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_55018 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_55016),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_55019 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__53740_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__53740_SHARP_)));
}),cljs.core.seq(mmap_55018));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_55016," = null;");

var seq__53747_55034 = cljs.core.seq(ms_55019);
var chunk__53748_55035 = null;
var count__53749_55036 = (0);
var i__53750_55037 = (0);
while(true){
if((i__53750_55037 < count__53749_55036)){
var vec__53761_55042 = chunk__53748_55035.cljs$core$IIndexed$_nth$arity$2(null,i__53750_55037);
var n_55043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53761_55042,(0),null);
var meth_55044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53761_55042,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_55043," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_55044))){
cljs.compiler.emit_variadic_fn_method(meth_55044);
} else {
cljs.compiler.emit_fn_method(meth_55044);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__55045 = seq__53747_55034;
var G__55046 = chunk__53748_55035;
var G__55047 = count__53749_55036;
var G__55048 = (i__53750_55037 + (1));
seq__53747_55034 = G__55045;
chunk__53748_55035 = G__55046;
count__53749_55036 = G__55047;
i__53750_55037 = G__55048;
continue;
} else {
var temp__5735__auto___55049 = cljs.core.seq(seq__53747_55034);
if(temp__5735__auto___55049){
var seq__53747_55050__$1 = temp__5735__auto___55049;
if(cljs.core.chunked_seq_QMARK_(seq__53747_55050__$1)){
var c__4556__auto___55051 = cljs.core.chunk_first(seq__53747_55050__$1);
var G__55052 = cljs.core.chunk_rest(seq__53747_55050__$1);
var G__55053 = c__4556__auto___55051;
var G__55054 = cljs.core.count(c__4556__auto___55051);
var G__55055 = (0);
seq__53747_55034 = G__55052;
chunk__53748_55035 = G__55053;
count__53749_55036 = G__55054;
i__53750_55037 = G__55055;
continue;
} else {
var vec__53764_55056 = cljs.core.first(seq__53747_55050__$1);
var n_55057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53764_55056,(0),null);
var meth_55058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53764_55056,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_55057," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_55058))){
cljs.compiler.emit_variadic_fn_method(meth_55058);
} else {
cljs.compiler.emit_fn_method(meth_55058);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__55061 = cljs.core.next(seq__53747_55050__$1);
var G__55062 = null;
var G__55063 = (0);
var G__55064 = (0);
seq__53747_55034 = G__55061;
chunk__53748_55035 = G__55062;
count__53749_55036 = G__55063;
i__53750_55037 = G__55064;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_55016," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_55017),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_55017)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_55017));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__53770_55069 = cljs.core.seq(ms_55019);
var chunk__53771_55070 = null;
var count__53772_55071 = (0);
var i__53773_55072 = (0);
while(true){
if((i__53773_55072 < count__53772_55071)){
var vec__53784_55073 = chunk__53771_55070.cljs$core$IIndexed$_nth$arity$2(null,i__53773_55072);
var n_55074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53784_55073,(0),null);
var meth_55075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53784_55073,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_55075))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_55076 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_55076," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_55077 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_55076," = new cljs.core.IndexedSeq(",a_55077,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_55074,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_55017)),(((cljs.core.count(maxparams_55017) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_55076,");"], 0));
} else {
var pcnt_55079 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_55075));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_55079,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_55074,".call(this",(((pcnt_55079 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_55079,maxparams_55017)),null,(1),null)),(2),null))),");");
}


var G__55081 = seq__53770_55069;
var G__55082 = chunk__53771_55070;
var G__55083 = count__53772_55071;
var G__55084 = (i__53773_55072 + (1));
seq__53770_55069 = G__55081;
chunk__53771_55070 = G__55082;
count__53772_55071 = G__55083;
i__53773_55072 = G__55084;
continue;
} else {
var temp__5735__auto___55085 = cljs.core.seq(seq__53770_55069);
if(temp__5735__auto___55085){
var seq__53770_55086__$1 = temp__5735__auto___55085;
if(cljs.core.chunked_seq_QMARK_(seq__53770_55086__$1)){
var c__4556__auto___55092 = cljs.core.chunk_first(seq__53770_55086__$1);
var G__55093 = cljs.core.chunk_rest(seq__53770_55086__$1);
var G__55094 = c__4556__auto___55092;
var G__55095 = cljs.core.count(c__4556__auto___55092);
var G__55096 = (0);
seq__53770_55069 = G__55093;
chunk__53771_55070 = G__55094;
count__53772_55071 = G__55095;
i__53773_55072 = G__55096;
continue;
} else {
var vec__53787_55097 = cljs.core.first(seq__53770_55086__$1);
var n_55098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53787_55097,(0),null);
var meth_55099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53787_55097,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_55099))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_55102 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_55102," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_55103 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_55102," = new cljs.core.IndexedSeq(",a_55103,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_55098,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_55017)),(((cljs.core.count(maxparams_55017) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_55102,");"], 0));
} else {
var pcnt_55108 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_55099));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_55108,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_55098,".call(this",(((pcnt_55108 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_55108,maxparams_55017)),null,(1),null)),(2),null))),");");
}


var G__55111 = cljs.core.next(seq__53770_55086__$1);
var G__55112 = null;
var G__55113 = (0);
var G__55114 = (0);
seq__53770_55069 = G__55111;
chunk__53771_55070 = G__55112;
count__53772_55071 = G__55113;
i__53773_55072 = G__55114;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_55115 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_55019)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_55115,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_55016,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_55016,".cljs$lang$applyTo = ",cljs.core.some((function (p1__53741_SHARP_){
var vec__53790 = p1__53741_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53790,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53790,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_55019),".cljs$lang$applyTo;");
} else {
}

var seq__53793_55120 = cljs.core.seq(ms_55019);
var chunk__53794_55121 = null;
var count__53795_55122 = (0);
var i__53796_55123 = (0);
while(true){
if((i__53796_55123 < count__53795_55122)){
var vec__53810_55124 = chunk__53794_55121.cljs$core$IIndexed$_nth$arity$2(null,i__53796_55123);
var n_55125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53810_55124,(0),null);
var meth_55126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53810_55124,(1),null);
var c_55127 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_55126));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_55126))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_55016,".cljs$core$IFn$_invoke$arity$variadic = ",n_55125,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_55016,".cljs$core$IFn$_invoke$arity$",c_55127," = ",n_55125,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__55129 = seq__53793_55120;
var G__55130 = chunk__53794_55121;
var G__55131 = count__53795_55122;
var G__55132 = (i__53796_55123 + (1));
seq__53793_55120 = G__55129;
chunk__53794_55121 = G__55130;
count__53795_55122 = G__55131;
i__53796_55123 = G__55132;
continue;
} else {
var temp__5735__auto___55133 = cljs.core.seq(seq__53793_55120);
if(temp__5735__auto___55133){
var seq__53793_55134__$1 = temp__5735__auto___55133;
if(cljs.core.chunked_seq_QMARK_(seq__53793_55134__$1)){
var c__4556__auto___55135 = cljs.core.chunk_first(seq__53793_55134__$1);
var G__55136 = cljs.core.chunk_rest(seq__53793_55134__$1);
var G__55137 = c__4556__auto___55135;
var G__55138 = cljs.core.count(c__4556__auto___55135);
var G__55139 = (0);
seq__53793_55120 = G__55136;
chunk__53794_55121 = G__55137;
count__53795_55122 = G__55138;
i__53796_55123 = G__55139;
continue;
} else {
var vec__53813_55140 = cljs.core.first(seq__53793_55134__$1);
var n_55141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53813_55140,(0),null);
var meth_55142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53813_55140,(1),null);
var c_55143 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_55142));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_55142))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_55016,".cljs$core$IFn$_invoke$arity$variadic = ",n_55141,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_55016,".cljs$core$IFn$_invoke$arity$",c_55143," = ",n_55141,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__55145 = cljs.core.next(seq__53793_55134__$1);
var G__55146 = null;
var G__55147 = (0);
var G__55148 = (0);
seq__53793_55120 = G__55145;
chunk__53794_55121 = G__55146;
count__53795_55122 = G__55147;
i__53796_55123 = G__55148;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_55016,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__53816){
var map__53817 = p__53816;
var map__53817__$1 = (((((!((map__53817 == null))))?(((((map__53817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53817):map__53817);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53817__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53817__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53817__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__53823_55153 = cljs.core.seq(statements);
var chunk__53824_55154 = null;
var count__53825_55155 = (0);
var i__53826_55156 = (0);
while(true){
if((i__53826_55156 < count__53825_55155)){
var s_55157 = chunk__53824_55154.cljs$core$IIndexed$_nth$arity$2(null,i__53826_55156);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_55157);


var G__55158 = seq__53823_55153;
var G__55159 = chunk__53824_55154;
var G__55160 = count__53825_55155;
var G__55161 = (i__53826_55156 + (1));
seq__53823_55153 = G__55158;
chunk__53824_55154 = G__55159;
count__53825_55155 = G__55160;
i__53826_55156 = G__55161;
continue;
} else {
var temp__5735__auto___55162 = cljs.core.seq(seq__53823_55153);
if(temp__5735__auto___55162){
var seq__53823_55163__$1 = temp__5735__auto___55162;
if(cljs.core.chunked_seq_QMARK_(seq__53823_55163__$1)){
var c__4556__auto___55164 = cljs.core.chunk_first(seq__53823_55163__$1);
var G__55179 = cljs.core.chunk_rest(seq__53823_55163__$1);
var G__55181 = c__4556__auto___55164;
var G__55182 = cljs.core.count(c__4556__auto___55164);
var G__55183 = (0);
seq__53823_55153 = G__55179;
chunk__53824_55154 = G__55181;
count__53825_55155 = G__55182;
i__53826_55156 = G__55183;
continue;
} else {
var s_55193 = cljs.core.first(seq__53823_55163__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_55193);


var G__55194 = cljs.core.next(seq__53823_55163__$1);
var G__55195 = null;
var G__55196 = (0);
var G__55197 = (0);
seq__53823_55153 = G__55194;
chunk__53824_55154 = G__55195;
count__53825_55155 = G__55196;
i__53826_55156 = G__55197;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__53835){
var map__53836 = p__53835;
var map__53836__$1 = (((((!((map__53836 == null))))?(((((map__53836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53836):map__53836);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53836__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53836__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53836__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53836__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53836__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__53838,is_loop){
var map__53839 = p__53838;
var map__53839__$1 = (((((!((map__53839 == null))))?(((((map__53839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53839):map__53839);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53839__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53839__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53839__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__53841_55201 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__53842_55202 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__53842_55202);

try{var seq__53843_55205 = cljs.core.seq(bindings);
var chunk__53844_55206 = null;
var count__53845_55207 = (0);
var i__53846_55208 = (0);
while(true){
if((i__53846_55208 < count__53845_55207)){
var map__53859_55209 = chunk__53844_55206.cljs$core$IIndexed$_nth$arity$2(null,i__53846_55208);
var map__53859_55210__$1 = (((((!((map__53859_55209 == null))))?(((((map__53859_55209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53859_55209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53859_55209):map__53859_55209);
var binding_55211 = map__53859_55210__$1;
var init_55212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53859_55210__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_55211);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_55212,";");


var G__55213 = seq__53843_55205;
var G__55214 = chunk__53844_55206;
var G__55215 = count__53845_55207;
var G__55216 = (i__53846_55208 + (1));
seq__53843_55205 = G__55213;
chunk__53844_55206 = G__55214;
count__53845_55207 = G__55215;
i__53846_55208 = G__55216;
continue;
} else {
var temp__5735__auto___55218 = cljs.core.seq(seq__53843_55205);
if(temp__5735__auto___55218){
var seq__53843_55220__$1 = temp__5735__auto___55218;
if(cljs.core.chunked_seq_QMARK_(seq__53843_55220__$1)){
var c__4556__auto___55223 = cljs.core.chunk_first(seq__53843_55220__$1);
var G__55224 = cljs.core.chunk_rest(seq__53843_55220__$1);
var G__55225 = c__4556__auto___55223;
var G__55226 = cljs.core.count(c__4556__auto___55223);
var G__55227 = (0);
seq__53843_55205 = G__55224;
chunk__53844_55206 = G__55225;
count__53845_55207 = G__55226;
i__53846_55208 = G__55227;
continue;
} else {
var map__53861_55228 = cljs.core.first(seq__53843_55220__$1);
var map__53861_55229__$1 = (((((!((map__53861_55228 == null))))?(((((map__53861_55228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53861_55228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53861_55228):map__53861_55228);
var binding_55230 = map__53861_55229__$1;
var init_55231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53861_55229__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_55230);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_55231,";");


var G__55235 = cljs.core.next(seq__53843_55220__$1);
var G__55236 = null;
var G__55237 = (0);
var G__55238 = (0);
seq__53843_55205 = G__55235;
chunk__53844_55206 = G__55236;
count__53845_55207 = G__55237;
i__53846_55208 = G__55238;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__53841_55201);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__53867){
var map__53868 = p__53867;
var map__53868__$1 = (((((!((map__53868 == null))))?(((((map__53868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53868):map__53868);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53868__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53868__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53868__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___55240 = cljs.core.count(exprs);
var i_55241 = (0);
while(true){
if((i_55241 < n__4613__auto___55240)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_55241) : temps.call(null,i_55241))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_55241) : exprs.call(null,i_55241)),";");

var G__55242 = (i_55241 + (1));
i_55241 = G__55242;
continue;
} else {
}
break;
}

var n__4613__auto___55243 = cljs.core.count(exprs);
var i_55244 = (0);
while(true){
if((i_55244 < n__4613__auto___55243)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_55244) : params.call(null,i_55244)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_55244) : temps.call(null,i_55244)),";");

var G__55245 = (i_55244 + (1));
i_55244 = G__55245;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__53870){
var map__53871 = p__53870;
var map__53871__$1 = (((((!((map__53871 == null))))?(((((map__53871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53871):map__53871);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53871__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53871__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53871__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__53878_55246 = cljs.core.seq(bindings);
var chunk__53879_55247 = null;
var count__53880_55248 = (0);
var i__53881_55249 = (0);
while(true){
if((i__53881_55249 < count__53880_55248)){
var map__53886_55250 = chunk__53879_55247.cljs$core$IIndexed$_nth$arity$2(null,i__53881_55249);
var map__53886_55251__$1 = (((((!((map__53886_55250 == null))))?(((((map__53886_55250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53886_55250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53886_55250):map__53886_55250);
var binding_55252 = map__53886_55251__$1;
var init_55253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53886_55251__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_55252)," = ",init_55253,";");


var G__55254 = seq__53878_55246;
var G__55255 = chunk__53879_55247;
var G__55256 = count__53880_55248;
var G__55257 = (i__53881_55249 + (1));
seq__53878_55246 = G__55254;
chunk__53879_55247 = G__55255;
count__53880_55248 = G__55256;
i__53881_55249 = G__55257;
continue;
} else {
var temp__5735__auto___55258 = cljs.core.seq(seq__53878_55246);
if(temp__5735__auto___55258){
var seq__53878_55259__$1 = temp__5735__auto___55258;
if(cljs.core.chunked_seq_QMARK_(seq__53878_55259__$1)){
var c__4556__auto___55260 = cljs.core.chunk_first(seq__53878_55259__$1);
var G__55262 = cljs.core.chunk_rest(seq__53878_55259__$1);
var G__55263 = c__4556__auto___55260;
var G__55264 = cljs.core.count(c__4556__auto___55260);
var G__55265 = (0);
seq__53878_55246 = G__55262;
chunk__53879_55247 = G__55263;
count__53880_55248 = G__55264;
i__53881_55249 = G__55265;
continue;
} else {
var map__53888_55266 = cljs.core.first(seq__53878_55259__$1);
var map__53888_55267__$1 = (((((!((map__53888_55266 == null))))?(((((map__53888_55266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53888_55266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53888_55266):map__53888_55266);
var binding_55268 = map__53888_55267__$1;
var init_55269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53888_55267__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_55268)," = ",init_55269,";");


var G__55292 = cljs.core.next(seq__53878_55259__$1);
var G__55293 = null;
var G__55294 = (0);
var G__55295 = (0);
seq__53878_55246 = G__55292;
chunk__53879_55247 = G__55293;
count__53880_55248 = G__55294;
i__53881_55249 = G__55295;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__53895){
var map__53896 = p__53895;
var map__53896__$1 = (((((!((map__53896 == null))))?(((((map__53896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53896):map__53896);
var expr = map__53896__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53896__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53896__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53896__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__53923 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__53923.cljs$core$IFn$_invoke$arity$1 ? fexpr__53923.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__53923.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__53925 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__53925.cljs$core$IFn$_invoke$arity$1 ? fexpr__53925.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__53925.call(null,first_arg_tag));
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
var vec__53901 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__53892_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53892_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__53893_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53893_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53901,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53901,(1),null);
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
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
var pimpl_55326 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_55326,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_55351 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_55351,args)),(((mfa_55351 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_55351,args)),"], 0))"], 0));
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
var G__53950 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__53949 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__53949.cljs$core$IFn$_invoke$arity$1 ? fexpr__53949.cljs$core$IFn$_invoke$arity$1(G__53950) : fexpr__53949.call(null,G__53950));
} else {
return and__4115__auto__;
}
})())){
var fprop_55363 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_55363," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_55363,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_55363," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_55363,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__53955){
var map__53956 = p__53955;
var map__53956__$1 = (((((!((map__53956 == null))))?(((((map__53956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53956):map__53956);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53956__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53956__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53956__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__53967){
var map__53968 = p__53967;
var map__53968__$1 = (((((!((map__53968 == null))))?(((((map__53968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53968):map__53968);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53968__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53968__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53968__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
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
var map__54001 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__54001__$1 = (((((!((map__54001 == null))))?(((((map__54001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54001):map__54001);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54001__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54001__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__54002 = options;
var map__54002__$1 = (((((!((map__54002 == null))))?(((((map__54002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54002):map__54002);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54002__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54002__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54002__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__54003 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__54008 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__54008__$1 = (((((!((map__54008 == null))))?(((((map__54008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54008):map__54008);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54008__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54008__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54003,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54003,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__54012_55389 = cljs.core.seq(libs_to_load);
var chunk__54013_55390 = null;
var count__54014_55391 = (0);
var i__54015_55392 = (0);
while(true){
if((i__54015_55392 < count__54014_55391)){
var lib_55393 = chunk__54013_55390.cljs$core$IIndexed$_nth$arity$2(null,i__54015_55392);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_55393)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_55393),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_55393),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_55393),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_55393),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_55393,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_55393),"');");
}

}
}
}


var G__55394 = seq__54012_55389;
var G__55395 = chunk__54013_55390;
var G__55396 = count__54014_55391;
var G__55397 = (i__54015_55392 + (1));
seq__54012_55389 = G__55394;
chunk__54013_55390 = G__55395;
count__54014_55391 = G__55396;
i__54015_55392 = G__55397;
continue;
} else {
var temp__5735__auto___55398 = cljs.core.seq(seq__54012_55389);
if(temp__5735__auto___55398){
var seq__54012_55399__$1 = temp__5735__auto___55398;
if(cljs.core.chunked_seq_QMARK_(seq__54012_55399__$1)){
var c__4556__auto___55400 = cljs.core.chunk_first(seq__54012_55399__$1);
var G__55401 = cljs.core.chunk_rest(seq__54012_55399__$1);
var G__55402 = c__4556__auto___55400;
var G__55403 = cljs.core.count(c__4556__auto___55400);
var G__55404 = (0);
seq__54012_55389 = G__55401;
chunk__54013_55390 = G__55402;
count__54014_55391 = G__55403;
i__54015_55392 = G__55404;
continue;
} else {
var lib_55411 = cljs.core.first(seq__54012_55399__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_55411)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_55411),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_55411),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_55411),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_55411),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_55411,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_55411),"');");
}

}
}
}


var G__55418 = cljs.core.next(seq__54012_55399__$1);
var G__55419 = null;
var G__55420 = (0);
var G__55421 = (0);
seq__54012_55389 = G__55418;
chunk__54013_55390 = G__55419;
count__54014_55391 = G__55420;
i__54015_55392 = G__55421;
continue;
}
} else {
}
}
break;
}

var seq__54040_55423 = cljs.core.seq(node_libs);
var chunk__54041_55424 = null;
var count__54042_55425 = (0);
var i__54043_55426 = (0);
while(true){
if((i__54043_55426 < count__54042_55425)){
var lib_55428 = chunk__54041_55424.cljs$core$IIndexed$_nth$arity$2(null,i__54043_55426);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_55428)," = require('",lib_55428,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__55429 = seq__54040_55423;
var G__55430 = chunk__54041_55424;
var G__55431 = count__54042_55425;
var G__55432 = (i__54043_55426 + (1));
seq__54040_55423 = G__55429;
chunk__54041_55424 = G__55430;
count__54042_55425 = G__55431;
i__54043_55426 = G__55432;
continue;
} else {
var temp__5735__auto___55433 = cljs.core.seq(seq__54040_55423);
if(temp__5735__auto___55433){
var seq__54040_55435__$1 = temp__5735__auto___55433;
if(cljs.core.chunked_seq_QMARK_(seq__54040_55435__$1)){
var c__4556__auto___55436 = cljs.core.chunk_first(seq__54040_55435__$1);
var G__55437 = cljs.core.chunk_rest(seq__54040_55435__$1);
var G__55438 = c__4556__auto___55436;
var G__55439 = cljs.core.count(c__4556__auto___55436);
var G__55440 = (0);
seq__54040_55423 = G__55437;
chunk__54041_55424 = G__55438;
count__54042_55425 = G__55439;
i__54043_55426 = G__55440;
continue;
} else {
var lib_55441 = cljs.core.first(seq__54040_55435__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_55441)," = require('",lib_55441,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__55442 = cljs.core.next(seq__54040_55435__$1);
var G__55443 = null;
var G__55444 = (0);
var G__55445 = (0);
seq__54040_55423 = G__55442;
chunk__54041_55424 = G__55443;
count__54042_55425 = G__55444;
i__54043_55426 = G__55445;
continue;
}
} else {
}
}
break;
}

var seq__54061_55446 = cljs.core.seq(global_exports_libs);
var chunk__54062_55447 = null;
var count__54063_55448 = (0);
var i__54064_55449 = (0);
while(true){
if((i__54064_55449 < count__54063_55448)){
var lib_55451 = chunk__54062_55447.cljs$core$IIndexed$_nth$arity$2(null,i__54064_55449);
var map__54075_55452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_55451));
var map__54075_55453__$1 = (((((!((map__54075_55452 == null))))?(((((map__54075_55452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54075_55452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54075_55452):map__54075_55452);
var global_exports_55454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54075_55453__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_55454,lib_55451);


var G__55456 = seq__54061_55446;
var G__55457 = chunk__54062_55447;
var G__55458 = count__54063_55448;
var G__55459 = (i__54064_55449 + (1));
seq__54061_55446 = G__55456;
chunk__54062_55447 = G__55457;
count__54063_55448 = G__55458;
i__54064_55449 = G__55459;
continue;
} else {
var temp__5735__auto___55461 = cljs.core.seq(seq__54061_55446);
if(temp__5735__auto___55461){
var seq__54061_55462__$1 = temp__5735__auto___55461;
if(cljs.core.chunked_seq_QMARK_(seq__54061_55462__$1)){
var c__4556__auto___55464 = cljs.core.chunk_first(seq__54061_55462__$1);
var G__55465 = cljs.core.chunk_rest(seq__54061_55462__$1);
var G__55466 = c__4556__auto___55464;
var G__55467 = cljs.core.count(c__4556__auto___55464);
var G__55468 = (0);
seq__54061_55446 = G__55465;
chunk__54062_55447 = G__55466;
count__54063_55448 = G__55467;
i__54064_55449 = G__55468;
continue;
} else {
var lib_55475 = cljs.core.first(seq__54061_55462__$1);
var map__54081_55476 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_55475));
var map__54081_55477__$1 = (((((!((map__54081_55476 == null))))?(((((map__54081_55476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54081_55476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54081_55476):map__54081_55476);
var global_exports_55478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54081_55477__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_55478,lib_55475);


var G__55506 = cljs.core.next(seq__54061_55462__$1);
var G__55507 = null;
var G__55508 = (0);
var G__55509 = (0);
seq__54061_55446 = G__55506;
chunk__54062_55447 = G__55507;
count__54063_55448 = G__55508;
i__54064_55449 = G__55509;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__54085){
var map__54090 = p__54085;
var map__54090__$1 = (((((!((map__54090 == null))))?(((((map__54090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54090.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54090):map__54090);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54090__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54090__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54090__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54090__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54090__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54090__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__54114){
var map__54115 = p__54114;
var map__54115__$1 = (((((!((map__54115 == null))))?(((((map__54115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54115):map__54115);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54115__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54115__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54115__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54115__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54115__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54115__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54115__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__54117){
var map__54118 = p__54117;
var map__54118__$1 = (((((!((map__54118 == null))))?(((((map__54118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54118):map__54118);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54118__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54118__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54118__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54118__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54118__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__54120_55528 = cljs.core.seq(protocols);
var chunk__54121_55529 = null;
var count__54122_55530 = (0);
var i__54123_55531 = (0);
while(true){
if((i__54123_55531 < count__54122_55530)){
var protocol_55536 = chunk__54121_55529.cljs$core$IIndexed$_nth$arity$2(null,i__54123_55531);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_55536)),"}");


var G__55537 = seq__54120_55528;
var G__55538 = chunk__54121_55529;
var G__55539 = count__54122_55530;
var G__55540 = (i__54123_55531 + (1));
seq__54120_55528 = G__55537;
chunk__54121_55529 = G__55538;
count__54122_55530 = G__55539;
i__54123_55531 = G__55540;
continue;
} else {
var temp__5735__auto___55541 = cljs.core.seq(seq__54120_55528);
if(temp__5735__auto___55541){
var seq__54120_55542__$1 = temp__5735__auto___55541;
if(cljs.core.chunked_seq_QMARK_(seq__54120_55542__$1)){
var c__4556__auto___55543 = cljs.core.chunk_first(seq__54120_55542__$1);
var G__55544 = cljs.core.chunk_rest(seq__54120_55542__$1);
var G__55545 = c__4556__auto___55543;
var G__55546 = cljs.core.count(c__4556__auto___55543);
var G__55547 = (0);
seq__54120_55528 = G__55544;
chunk__54121_55529 = G__55545;
count__54122_55530 = G__55546;
i__54123_55531 = G__55547;
continue;
} else {
var protocol_55548 = cljs.core.first(seq__54120_55542__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_55548)),"}");


var G__55549 = cljs.core.next(seq__54120_55542__$1);
var G__55550 = null;
var G__55551 = (0);
var G__55552 = (0);
seq__54120_55528 = G__55549;
chunk__54121_55529 = G__55550;
count__54122_55530 = G__55551;
i__54123_55531 = G__55552;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__54124_55553 = cljs.core.seq(fields__$1);
var chunk__54125_55554 = null;
var count__54126_55555 = (0);
var i__54127_55556 = (0);
while(true){
if((i__54127_55556 < count__54126_55555)){
var fld_55557 = chunk__54125_55554.cljs$core$IIndexed$_nth$arity$2(null,i__54127_55556);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_55557," = ",fld_55557,";");


var G__55558 = seq__54124_55553;
var G__55559 = chunk__54125_55554;
var G__55560 = count__54126_55555;
var G__55561 = (i__54127_55556 + (1));
seq__54124_55553 = G__55558;
chunk__54125_55554 = G__55559;
count__54126_55555 = G__55560;
i__54127_55556 = G__55561;
continue;
} else {
var temp__5735__auto___55562 = cljs.core.seq(seq__54124_55553);
if(temp__5735__auto___55562){
var seq__54124_55563__$1 = temp__5735__auto___55562;
if(cljs.core.chunked_seq_QMARK_(seq__54124_55563__$1)){
var c__4556__auto___55564 = cljs.core.chunk_first(seq__54124_55563__$1);
var G__55565 = cljs.core.chunk_rest(seq__54124_55563__$1);
var G__55566 = c__4556__auto___55564;
var G__55567 = cljs.core.count(c__4556__auto___55564);
var G__55568 = (0);
seq__54124_55553 = G__55565;
chunk__54125_55554 = G__55566;
count__54126_55555 = G__55567;
i__54127_55556 = G__55568;
continue;
} else {
var fld_55571 = cljs.core.first(seq__54124_55563__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_55571," = ",fld_55571,";");


var G__55572 = cljs.core.next(seq__54124_55563__$1);
var G__55573 = null;
var G__55574 = (0);
var G__55575 = (0);
seq__54124_55553 = G__55572;
chunk__54125_55554 = G__55573;
count__54126_55555 = G__55574;
i__54127_55556 = G__55575;
continue;
}
} else {
}
}
break;
}

var seq__54130_55603 = cljs.core.seq(pmasks);
var chunk__54131_55604 = null;
var count__54132_55605 = (0);
var i__54133_55606 = (0);
while(true){
if((i__54133_55606 < count__54132_55605)){
var vec__54140_55607 = chunk__54131_55604.cljs$core$IIndexed$_nth$arity$2(null,i__54133_55606);
var pno_55608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54140_55607,(0),null);
var pmask_55609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54140_55607,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_55608,"$ = ",pmask_55609,";");


var G__55610 = seq__54130_55603;
var G__55611 = chunk__54131_55604;
var G__55612 = count__54132_55605;
var G__55613 = (i__54133_55606 + (1));
seq__54130_55603 = G__55610;
chunk__54131_55604 = G__55611;
count__54132_55605 = G__55612;
i__54133_55606 = G__55613;
continue;
} else {
var temp__5735__auto___55614 = cljs.core.seq(seq__54130_55603);
if(temp__5735__auto___55614){
var seq__54130_55615__$1 = temp__5735__auto___55614;
if(cljs.core.chunked_seq_QMARK_(seq__54130_55615__$1)){
var c__4556__auto___55616 = cljs.core.chunk_first(seq__54130_55615__$1);
var G__55617 = cljs.core.chunk_rest(seq__54130_55615__$1);
var G__55618 = c__4556__auto___55616;
var G__55619 = cljs.core.count(c__4556__auto___55616);
var G__55620 = (0);
seq__54130_55603 = G__55617;
chunk__54131_55604 = G__55618;
count__54132_55605 = G__55619;
i__54133_55606 = G__55620;
continue;
} else {
var vec__54144_55621 = cljs.core.first(seq__54130_55615__$1);
var pno_55622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54144_55621,(0),null);
var pmask_55623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54144_55621,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_55622,"$ = ",pmask_55623,";");


var G__55624 = cljs.core.next(seq__54130_55615__$1);
var G__55625 = null;
var G__55626 = (0);
var G__55627 = (0);
seq__54130_55603 = G__55624;
chunk__54131_55604 = G__55625;
count__54132_55605 = G__55626;
i__54133_55606 = G__55627;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__54156){
var map__54157 = p__54156;
var map__54157__$1 = (((((!((map__54157 == null))))?(((((map__54157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54157):map__54157);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54157__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__54163_55637 = cljs.core.seq(protocols);
var chunk__54164_55638 = null;
var count__54165_55639 = (0);
var i__54166_55640 = (0);
while(true){
if((i__54166_55640 < count__54165_55639)){
var protocol_55642 = chunk__54164_55638.cljs$core$IIndexed$_nth$arity$2(null,i__54166_55640);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_55642)),"}");


var G__55643 = seq__54163_55637;
var G__55644 = chunk__54164_55638;
var G__55645 = count__54165_55639;
var G__55646 = (i__54166_55640 + (1));
seq__54163_55637 = G__55643;
chunk__54164_55638 = G__55644;
count__54165_55639 = G__55645;
i__54166_55640 = G__55646;
continue;
} else {
var temp__5735__auto___55647 = cljs.core.seq(seq__54163_55637);
if(temp__5735__auto___55647){
var seq__54163_55648__$1 = temp__5735__auto___55647;
if(cljs.core.chunked_seq_QMARK_(seq__54163_55648__$1)){
var c__4556__auto___55649 = cljs.core.chunk_first(seq__54163_55648__$1);
var G__55650 = cljs.core.chunk_rest(seq__54163_55648__$1);
var G__55651 = c__4556__auto___55649;
var G__55652 = cljs.core.count(c__4556__auto___55649);
var G__55653 = (0);
seq__54163_55637 = G__55650;
chunk__54164_55638 = G__55651;
count__54165_55639 = G__55652;
i__54166_55640 = G__55653;
continue;
} else {
var protocol_55654 = cljs.core.first(seq__54163_55648__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_55654)),"}");


var G__55656 = cljs.core.next(seq__54163_55648__$1);
var G__55657 = null;
var G__55658 = (0);
var G__55659 = (0);
seq__54163_55637 = G__55656;
chunk__54164_55638 = G__55657;
count__54165_55639 = G__55658;
i__54166_55640 = G__55659;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__54173_55661 = cljs.core.seq(fields__$1);
var chunk__54174_55662 = null;
var count__54175_55663 = (0);
var i__54176_55664 = (0);
while(true){
if((i__54176_55664 < count__54175_55663)){
var fld_55665 = chunk__54174_55662.cljs$core$IIndexed$_nth$arity$2(null,i__54176_55664);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_55665," = ",fld_55665,";");


var G__55666 = seq__54173_55661;
var G__55667 = chunk__54174_55662;
var G__55668 = count__54175_55663;
var G__55669 = (i__54176_55664 + (1));
seq__54173_55661 = G__55666;
chunk__54174_55662 = G__55667;
count__54175_55663 = G__55668;
i__54176_55664 = G__55669;
continue;
} else {
var temp__5735__auto___55670 = cljs.core.seq(seq__54173_55661);
if(temp__5735__auto___55670){
var seq__54173_55671__$1 = temp__5735__auto___55670;
if(cljs.core.chunked_seq_QMARK_(seq__54173_55671__$1)){
var c__4556__auto___55672 = cljs.core.chunk_first(seq__54173_55671__$1);
var G__55673 = cljs.core.chunk_rest(seq__54173_55671__$1);
var G__55674 = c__4556__auto___55672;
var G__55675 = cljs.core.count(c__4556__auto___55672);
var G__55676 = (0);
seq__54173_55661 = G__55673;
chunk__54174_55662 = G__55674;
count__54175_55663 = G__55675;
i__54176_55664 = G__55676;
continue;
} else {
var fld_55679 = cljs.core.first(seq__54173_55671__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_55679," = ",fld_55679,";");


var G__55680 = cljs.core.next(seq__54173_55671__$1);
var G__55681 = null;
var G__55682 = (0);
var G__55683 = (0);
seq__54173_55661 = G__55680;
chunk__54174_55662 = G__55681;
count__54175_55663 = G__55682;
i__54176_55664 = G__55683;
continue;
}
} else {
}
}
break;
}

var seq__54182_55685 = cljs.core.seq(pmasks);
var chunk__54183_55686 = null;
var count__54184_55687 = (0);
var i__54185_55688 = (0);
while(true){
if((i__54185_55688 < count__54184_55687)){
var vec__54192_55691 = chunk__54183_55686.cljs$core$IIndexed$_nth$arity$2(null,i__54185_55688);
var pno_55692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54192_55691,(0),null);
var pmask_55693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54192_55691,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_55692,"$ = ",pmask_55693,";");


var G__55694 = seq__54182_55685;
var G__55695 = chunk__54183_55686;
var G__55696 = count__54184_55687;
var G__55697 = (i__54185_55688 + (1));
seq__54182_55685 = G__55694;
chunk__54183_55686 = G__55695;
count__54184_55687 = G__55696;
i__54185_55688 = G__55697;
continue;
} else {
var temp__5735__auto___55698 = cljs.core.seq(seq__54182_55685);
if(temp__5735__auto___55698){
var seq__54182_55699__$1 = temp__5735__auto___55698;
if(cljs.core.chunked_seq_QMARK_(seq__54182_55699__$1)){
var c__4556__auto___55700 = cljs.core.chunk_first(seq__54182_55699__$1);
var G__55701 = cljs.core.chunk_rest(seq__54182_55699__$1);
var G__55702 = c__4556__auto___55700;
var G__55703 = cljs.core.count(c__4556__auto___55700);
var G__55704 = (0);
seq__54182_55685 = G__55701;
chunk__54183_55686 = G__55702;
count__54184_55687 = G__55703;
i__54185_55688 = G__55704;
continue;
} else {
var vec__54195_55705 = cljs.core.first(seq__54182_55699__$1);
var pno_55706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54195_55705,(0),null);
var pmask_55707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54195_55705,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_55706,"$ = ",pmask_55707,";");


var G__55708 = cljs.core.next(seq__54182_55699__$1);
var G__55709 = null;
var G__55710 = (0);
var G__55711 = (0);
seq__54182_55685 = G__55708;
chunk__54183_55686 = G__55709;
count__54184_55687 = G__55710;
i__54185_55688 = G__55711;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__54200){
var map__54201 = p__54200;
var map__54201__$1 = (((((!((map__54201 == null))))?(((((map__54201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54201):map__54201);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54201__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54201__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54201__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54201__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54201__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__54203){
var map__54204 = p__54203;
var map__54204__$1 = (((((!((map__54204 == null))))?(((((map__54204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54204):map__54204);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54204__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54204__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54204__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54204__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54204__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__54234 = cljs.core.seq(table);
var chunk__54235 = null;
var count__54236 = (0);
var i__54237 = (0);
while(true){
if((i__54237 < count__54236)){
var vec__54254 = chunk__54235.cljs$core$IIndexed$_nth$arity$2(null,i__54237);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54254,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54254,(1),null);
var ns_55712 = cljs.core.namespace(sym);
var name_55713 = cljs.core.name(sym);
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


var G__55732 = seq__54234;
var G__55733 = chunk__54235;
var G__55734 = count__54236;
var G__55735 = (i__54237 + (1));
seq__54234 = G__55732;
chunk__54235 = G__55733;
count__54236 = G__55734;
i__54237 = G__55735;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__54234);
if(temp__5735__auto__){
var seq__54234__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54234__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__54234__$1);
var G__55737 = cljs.core.chunk_rest(seq__54234__$1);
var G__55738 = c__4556__auto__;
var G__55739 = cljs.core.count(c__4556__auto__);
var G__55740 = (0);
seq__54234 = G__55737;
chunk__54235 = G__55738;
count__54236 = G__55739;
i__54237 = G__55740;
continue;
} else {
var vec__54257 = cljs.core.first(seq__54234__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54257,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54257,(1),null);
var ns_55741 = cljs.core.namespace(sym);
var name_55742 = cljs.core.name(sym);
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


var G__55743 = cljs.core.next(seq__54234__$1);
var G__55744 = null;
var G__55745 = (0);
var G__55746 = (0);
seq__54234 = G__55743;
chunk__54235 = G__55744;
count__54236 = G__55745;
i__54237 = G__55746;
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
var G__54263 = arguments.length;
switch (G__54263) {
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
var k_55748 = cljs.core.first(ks);
var vec__54264_55749 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_55748);
var top_55750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54264_55749,(0),null);
var prefix_SINGLEQUOTE__55751 = vec__54264_55749;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_55748)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__55751) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_55750)) || (cljs.core.contains_QMARK_(known_externs,top_55750)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__55751)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_55750);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__55751)),";");
}
} else {
}

var m_55752 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_55748);
if(cljs.core.empty_QMARK_(m_55752)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__55751,m_55752,top_level,known_externs);
}

var G__55753 = cljs.core.next(ks);
ks = G__55753;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
