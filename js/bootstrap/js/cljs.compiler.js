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
var map__33038 = s;
var map__33038__$1 = (((((!((map__33038 == null))))?(((((map__33038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33038):map__33038);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33038__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33038__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__33052 = info;
var map__33053 = G__33052;
var map__33053__$1 = (((((!((map__33053 == null))))?(((((map__33053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33053):map__33053);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33053__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__33052__$1 = G__33052;
while(true){
var d__$2 = d__$1;
var map__33071 = G__33052__$1;
var map__33071__$1 = (((((!((map__33071 == null))))?(((((map__33071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33071):map__33071);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33071__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__33878 = (d__$2 + (1));
var G__33879 = shadow__$2;
d__$1 = G__33878;
G__33052__$1 = G__33879;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__33076){
var map__33077 = p__33076;
var map__33077__$1 = (((((!((map__33077 == null))))?(((((map__33077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33077):map__33077);
var name_var = map__33077__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33077__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33077__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__33079 = info;
var map__33079__$1 = (((((!((map__33079 == null))))?(((((map__33079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33079):map__33079);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33079__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33079__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__33081 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__33081) : cljs.compiler.munge.call(null,G__33081));
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
var G__33083 = arguments.length;
switch (G__33083) {
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
var ms = (function (){var fexpr__33084 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__33084.cljs$core$IFn$_invoke$arity$1 ? fexpr__33084.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__33084.call(null,ss__$3));
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
var G__33085 = cp;
switch (G__33085) {
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
var seq__33086_33902 = cljs.core.seq(s);
var chunk__33087_33903 = null;
var count__33088_33904 = (0);
var i__33089_33905 = (0);
while(true){
if((i__33089_33905 < count__33088_33904)){
var c_33907 = chunk__33087_33903.cljs$core$IIndexed$_nth$arity$2(null,i__33089_33905);
sb.append(cljs.compiler.escape_char(c_33907));


var G__33908 = seq__33086_33902;
var G__33909 = chunk__33087_33903;
var G__33910 = count__33088_33904;
var G__33911 = (i__33089_33905 + (1));
seq__33086_33902 = G__33908;
chunk__33087_33903 = G__33909;
count__33088_33904 = G__33910;
i__33089_33905 = G__33911;
continue;
} else {
var temp__5735__auto___33912 = cljs.core.seq(seq__33086_33902);
if(temp__5735__auto___33912){
var seq__33086_33913__$1 = temp__5735__auto___33912;
if(cljs.core.chunked_seq_QMARK_(seq__33086_33913__$1)){
var c__4556__auto___33914 = cljs.core.chunk_first(seq__33086_33913__$1);
var G__33915 = cljs.core.chunk_rest(seq__33086_33913__$1);
var G__33916 = c__4556__auto___33914;
var G__33917 = cljs.core.count(c__4556__auto___33914);
var G__33918 = (0);
seq__33086_33902 = G__33915;
chunk__33087_33903 = G__33916;
count__33088_33904 = G__33917;
i__33089_33905 = G__33918;
continue;
} else {
var c_33919 = cljs.core.first(seq__33086_33913__$1);
sb.append(cljs.compiler.escape_char(c_33919));


var G__33920 = cljs.core.next(seq__33086_33913__$1);
var G__33921 = null;
var G__33922 = (0);
var G__33923 = (0);
seq__33086_33902 = G__33920;
chunk__33087_33903 = G__33921;
count__33088_33904 = G__33922;
i__33089_33905 = G__33923;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33090 = cljs.core.get_global_hierarchy;
return (fexpr__33090.cljs$core$IFn$_invoke$arity$0 ? fexpr__33090.cljs$core$IFn$_invoke$arity$0() : fexpr__33090.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__33091_33925 = ast;
var map__33091_33926__$1 = (((((!((map__33091_33925 == null))))?(((((map__33091_33925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33091_33925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33091_33925):map__33091_33925);
var env_33927 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33091_33926__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_33927))){
var map__33093_33929 = env_33927;
var map__33093_33930__$1 = (((((!((map__33093_33929 == null))))?(((((map__33093_33929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33093_33929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33093_33929):map__33093_33929);
var line_33931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33093_33930__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33093_33930__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__33095 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__33097 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__33096 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__33096.cljs$core$IFn$_invoke$arity$1 ? fexpr__33096.cljs$core$IFn$_invoke$arity$1(G__33097) : fexpr__33096.call(null,G__33097));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33095,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__33095;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_33931 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_33932)?(column_33932 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__33109 = arguments.length;
switch (G__33109) {
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
var len__4736__auto___33940 = arguments.length;
var i__4737__auto___33941 = (0);
while(true){
if((i__4737__auto___33941 < len__4736__auto___33940)){
args_arr__4757__auto__.push((arguments[i__4737__auto___33941]));

var G__33942 = (i__4737__auto___33941 + (1));
i__4737__auto___33941 = G__33942;
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
var s_33943 = (function (){var G__33111 = a;
if((!(typeof a === 'string'))){
return G__33111.toString();
} else {
return G__33111;
}
})();
var temp__5739__auto___33944 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___33944 == null)){
} else {
var sm_data_33945 = temp__5739__auto___33944;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_33945,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__33099_SHARP_){
return (p1__33099_SHARP_ + s_33943.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_33943], 0));

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

var seq__33113 = cljs.core.seq(xs);
var chunk__33114 = null;
var count__33115 = (0);
var i__33116 = (0);
while(true){
if((i__33116 < count__33115)){
var x = chunk__33114.cljs$core$IIndexed$_nth$arity$2(null,i__33116);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__33953 = seq__33113;
var G__33954 = chunk__33114;
var G__33955 = count__33115;
var G__33956 = (i__33116 + (1));
seq__33113 = G__33953;
chunk__33114 = G__33954;
count__33115 = G__33955;
i__33116 = G__33956;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33113);
if(temp__5735__auto__){
var seq__33113__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33113__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33113__$1);
var G__33957 = cljs.core.chunk_rest(seq__33113__$1);
var G__33958 = c__4556__auto__;
var G__33959 = cljs.core.count(c__4556__auto__);
var G__33960 = (0);
seq__33113 = G__33957;
chunk__33114 = G__33958;
count__33115 = G__33959;
i__33116 = G__33960;
continue;
} else {
var x = cljs.core.first(seq__33113__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__33961 = cljs.core.next(seq__33113__$1);
var G__33962 = null;
var G__33963 = (0);
var G__33964 = (0);
seq__33113 = G__33961;
chunk__33114 = G__33962;
count__33115 = G__33963;
i__33116 = G__33964;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq33103){
var G__33104 = cljs.core.first(seq33103);
var seq33103__$1 = cljs.core.next(seq33103);
var G__33105 = cljs.core.first(seq33103__$1);
var seq33103__$2 = cljs.core.next(seq33103__$1);
var G__33106 = cljs.core.first(seq33103__$2);
var seq33103__$3 = cljs.core.next(seq33103__$2);
var G__33107 = cljs.core.first(seq33103__$3);
var seq33103__$4 = cljs.core.next(seq33103__$3);
var G__33108 = cljs.core.first(seq33103__$4);
var seq33103__$5 = cljs.core.next(seq33103__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33104,G__33105,G__33106,G__33107,G__33108,seq33103__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__33118){
var map__33119 = p__33118;
var map__33119__$1 = (((((!((map__33119 == null))))?(((((map__33119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33119):map__33119);
var m = map__33119__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33119__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__33129 = arguments.length;
switch (G__33129) {
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
var len__4736__auto___33969 = arguments.length;
var i__4737__auto___33970 = (0);
while(true){
if((i__4737__auto___33970 < len__4736__auto___33969)){
args_arr__4757__auto__.push((arguments[i__4737__auto___33970]));

var G__33977 = (i__4737__auto___33970 + (1));
i__4737__auto___33970 = G__33977;
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

var seq__33144_33981 = cljs.core.seq(xs);
var chunk__33145_33982 = null;
var count__33146_33983 = (0);
var i__33147_33984 = (0);
while(true){
if((i__33147_33984 < count__33146_33983)){
var x_33986 = chunk__33145_33982.cljs$core$IIndexed$_nth$arity$2(null,i__33147_33984);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_33986);


var G__33987 = seq__33144_33981;
var G__33988 = chunk__33145_33982;
var G__33989 = count__33146_33983;
var G__33990 = (i__33147_33984 + (1));
seq__33144_33981 = G__33987;
chunk__33145_33982 = G__33988;
count__33146_33983 = G__33989;
i__33147_33984 = G__33990;
continue;
} else {
var temp__5735__auto___33991 = cljs.core.seq(seq__33144_33981);
if(temp__5735__auto___33991){
var seq__33144_33992__$1 = temp__5735__auto___33991;
if(cljs.core.chunked_seq_QMARK_(seq__33144_33992__$1)){
var c__4556__auto___33993 = cljs.core.chunk_first(seq__33144_33992__$1);
var G__33994 = cljs.core.chunk_rest(seq__33144_33992__$1);
var G__33995 = c__4556__auto___33993;
var G__33996 = cljs.core.count(c__4556__auto___33993);
var G__33997 = (0);
seq__33144_33981 = G__33994;
chunk__33145_33982 = G__33995;
count__33146_33983 = G__33996;
i__33147_33984 = G__33997;
continue;
} else {
var x_33999 = cljs.core.first(seq__33144_33992__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_33999);


var G__34000 = cljs.core.next(seq__33144_33992__$1);
var G__34001 = null;
var G__34002 = (0);
var G__34003 = (0);
seq__33144_33981 = G__34000;
chunk__33145_33982 = G__34001;
count__33146_33983 = G__34002;
i__33147_33984 = G__34003;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq33123){
var G__33124 = cljs.core.first(seq33123);
var seq33123__$1 = cljs.core.next(seq33123);
var G__33125 = cljs.core.first(seq33123__$1);
var seq33123__$2 = cljs.core.next(seq33123__$1);
var G__33126 = cljs.core.first(seq33123__$2);
var seq33123__$3 = cljs.core.next(seq33123__$2);
var G__33127 = cljs.core.first(seq33123__$3);
var seq33123__$4 = cljs.core.next(seq33123__$3);
var G__33128 = cljs.core.first(seq33123__$4);
var seq33123__$5 = cljs.core.next(seq33123__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33124,G__33125,G__33126,G__33127,G__33128,seq33123__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33148_34007 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33149_34008 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33150_34009 = true;
var _STAR_print_fn_STAR__temp_val__33151_34010 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33150_34009);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33151_34010);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33149_34008);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33148_34007);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33152 = cljs.core.get_global_hierarchy;
return (fexpr__33152.cljs$core$IFn$_invoke$arity$0 ? fexpr__33152.cljs$core$IFn$_invoke$arity$0() : fexpr__33152.call(null));
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
var vec__33154 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33154,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33154,(1),null);
var G__33157 = ns;
var G__33158 = name;
var G__33159 = (function (){
var G__33160 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__33160) : cljs.compiler.emit_constant.call(null,G__33160));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__33157,G__33158,G__33159) : cljs.compiler.emit_record_value.call(null,G__33157,G__33158,G__33159));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__33161 = cljs.core.keys(x);
var G__33162 = cljs.core.vals(x);
var G__33163 = cljs.compiler.emit_constants_comma_sep;
var G__33164 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__33161,G__33162,G__33163,G__33164) : cljs.compiler.emit_map.call(null,G__33161,G__33162,G__33163,G__33164));
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
var G__33167 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__33168 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__33167,G__33168) : cljs.compiler.emit_with_meta.call(null,G__33167,G__33168));
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
var vec__33169 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33169,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33169,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33169,(2),null);
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
var G__33177 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__33177) : x.call(null,G__33177));
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
var G__33178 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__33178) : x.call(null,G__33178));
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
var G__33185 = items;
var G__33186 = (function (p1__33184_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__33184_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__33185,G__33186) : cljs.compiler.emit_js_object.call(null,G__33185,G__33186));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__33188){
var map__33189 = p__33188;
var map__33189__$1 = (((((!((map__33189 == null))))?(((((map__33189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33189):map__33189);
var ast = map__33189__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33189__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33189__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33189__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__33191 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__33191__$1 = (((((!((map__33191 == null))))?(((((map__33191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33191):map__33191);
var cenv = map__33191__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33191__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__33193 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__33196 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__33196) : cljs.compiler.es5_GT__EQ_.call(null,G__33196));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__33193,cljs.analyzer.es5_allowed);
} else {
return G__33193;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__33198 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__33198,reserved);
} else {
return G__33198;
}
})();
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__33199_34047 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__33199_34048__$1 = (((G__33199_34047 instanceof cljs.core.Keyword))?G__33199_34047.fqn:null);
switch (G__33199_34048__$1) {
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__33200){
var map__33201 = p__33200;
var map__33201__$1 = (((((!((map__33201 == null))))?(((((map__33201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33201):map__33201);
var arg = map__33201__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33201__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33201__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33201__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33201__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__33204 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__33204__$1 = (((((!((map__33204 == null))))?(((((map__33204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33204):map__33204);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33204__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__33207){
var map__33208 = p__33207;
var map__33208__$1 = (((((!((map__33208 == null))))?(((((map__33208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33208):map__33208);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33208__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33208__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33208__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__33210_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33210_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__33214 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__33214) : comma_sep.call(null,G__33214));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__33215 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__33215) : comma_sep.call(null,G__33215));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__33216){
var map__33217 = p__33216;
var map__33217__$1 = (((((!((map__33217 == null))))?(((((map__33217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33217):map__33217);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__33226){
var map__33227 = p__33226;
var map__33227__$1 = (((((!((map__33227 == null))))?(((((map__33227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33227):map__33227);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33227__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33227__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__33229_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33229_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__33242 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__33242) : comma_sep.call(null,G__33242));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__33247){
var map__33248 = p__33247;
var map__33248__$1 = (((((!((map__33248 == null))))?(((((map__33248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33248):map__33248);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33248__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33248__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5735__auto___34079 = cljs.core.seq(items);
if(temp__5735__auto___34079){
var items_34080__$1 = temp__5735__auto___34079;
var vec__33250_34082 = items_34080__$1;
var seq__33251_34083 = cljs.core.seq(vec__33250_34082);
var first__33252_34084 = cljs.core.first(seq__33251_34083);
var seq__33251_34085__$1 = cljs.core.next(seq__33251_34083);
var vec__33253_34086 = first__33252_34084;
var k_34087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33253_34086,(0),null);
var v_34088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33253_34086,(1),null);
var r_34089 = seq__33251_34085__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_34087),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_34088) : emit_js_object_val.call(null,v_34088)));

var seq__33256_34091 = cljs.core.seq(r_34089);
var chunk__33257_34092 = null;
var count__33258_34093 = (0);
var i__33259_34094 = (0);
while(true){
if((i__33259_34094 < count__33258_34093)){
var vec__33266_34096 = chunk__33257_34092.cljs$core$IIndexed$_nth$arity$2(null,i__33259_34094);
var k_34097__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33266_34096,(0),null);
var v_34098__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33266_34096,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_34097__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_34098__$1) : emit_js_object_val.call(null,v_34098__$1)));


var G__34100 = seq__33256_34091;
var G__34101 = chunk__33257_34092;
var G__34102 = count__33258_34093;
var G__34103 = (i__33259_34094 + (1));
seq__33256_34091 = G__34100;
chunk__33257_34092 = G__34101;
count__33258_34093 = G__34102;
i__33259_34094 = G__34103;
continue;
} else {
var temp__5735__auto___34105__$1 = cljs.core.seq(seq__33256_34091);
if(temp__5735__auto___34105__$1){
var seq__33256_34106__$1 = temp__5735__auto___34105__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33256_34106__$1)){
var c__4556__auto___34107 = cljs.core.chunk_first(seq__33256_34106__$1);
var G__34108 = cljs.core.chunk_rest(seq__33256_34106__$1);
var G__34109 = c__4556__auto___34107;
var G__34110 = cljs.core.count(c__4556__auto___34107);
var G__34111 = (0);
seq__33256_34091 = G__34108;
chunk__33257_34092 = G__34109;
count__33258_34093 = G__34110;
i__33259_34094 = G__34111;
continue;
} else {
var vec__33269_34113 = cljs.core.first(seq__33256_34106__$1);
var k_34114__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33269_34113,(0),null);
var v_34115__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33269_34113,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_34114__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_34115__$1) : emit_js_object_val.call(null,v_34115__$1)));


var G__34116 = cljs.core.next(seq__33256_34106__$1);
var G__34117 = null;
var G__34118 = (0);
var G__34119 = (0);
seq__33256_34091 = G__34116;
chunk__33257_34092 = G__34117;
count__33258_34093 = G__34118;
i__33259_34094 = G__34119;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__33272){
var map__33273 = p__33272;
var map__33273__$1 = (((((!((map__33273 == null))))?(((((map__33273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33273):map__33273);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33273__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33273__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33273__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__33275){
var map__33276 = p__33275;
var map__33276__$1 = (((((!((map__33276 == null))))?(((((map__33276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33276):map__33276);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33276__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33276__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__33278){
var map__33279 = p__33278;
var map__33279__$1 = (((((!((map__33279 == null))))?(((((map__33279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33279):map__33279);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33279__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__33282){
var map__33283 = p__33282;
var map__33283__$1 = (((((!((map__33283 == null))))?(((((map__33283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33283):map__33283);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33283__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33283__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__33285 = cljs.analyzer.unwrap_quote(expr);
var map__33285__$1 = (((((!((map__33285 == null))))?(((((map__33285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33285):map__33285);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33285__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33285__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33285__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__33291 = cljs.analyzer.unwrap_quote(expr);
var map__33291__$1 = (((((!((map__33291 == null))))?(((((map__33291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33291):map__33291);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33291__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33291__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33291__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__33294 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__33294.cljs$core$IFn$_invoke$arity$1 ? fexpr__33294.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__33294.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__33295){
var map__33296 = p__33295;
var map__33296__$1 = (((((!((map__33296 == null))))?(((((map__33296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33296):map__33296);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33296__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33296__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33296__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33296__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33296__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__33298){
var map__33299 = p__33298;
var map__33299__$1 = (((((!((map__33299 == null))))?(((((map__33299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33299):map__33299);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33299__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33299__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33299__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33299__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__33301_34145 = cljs.core.seq(nodes);
var chunk__33302_34146 = null;
var count__33303_34147 = (0);
var i__33304_34148 = (0);
while(true){
if((i__33304_34148 < count__33303_34147)){
var map__33321_34150 = chunk__33302_34146.cljs$core$IIndexed$_nth$arity$2(null,i__33304_34148);
var map__33321_34151__$1 = (((((!((map__33321_34150 == null))))?(((((map__33321_34150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33321_34150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33321_34150):map__33321_34150);
var ts_34152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33321_34151__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__33322_34153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33321_34151__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__33322_34154__$1 = (((((!((map__33322_34153 == null))))?(((((map__33322_34153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33322_34153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33322_34153):map__33322_34153);
var then_34155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33322_34154__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__33325_34158 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_34152));
var chunk__33326_34159 = null;
var count__33327_34160 = (0);
var i__33328_34161 = (0);
while(true){
if((i__33328_34161 < count__33327_34160)){
var test_34163 = chunk__33326_34159.cljs$core$IIndexed$_nth$arity$2(null,i__33328_34161);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_34163,":");


var G__34164 = seq__33325_34158;
var G__34165 = chunk__33326_34159;
var G__34166 = count__33327_34160;
var G__34167 = (i__33328_34161 + (1));
seq__33325_34158 = G__34164;
chunk__33326_34159 = G__34165;
count__33327_34160 = G__34166;
i__33328_34161 = G__34167;
continue;
} else {
var temp__5735__auto___34172 = cljs.core.seq(seq__33325_34158);
if(temp__5735__auto___34172){
var seq__33325_34173__$1 = temp__5735__auto___34172;
if(cljs.core.chunked_seq_QMARK_(seq__33325_34173__$1)){
var c__4556__auto___34175 = cljs.core.chunk_first(seq__33325_34173__$1);
var G__34176 = cljs.core.chunk_rest(seq__33325_34173__$1);
var G__34177 = c__4556__auto___34175;
var G__34178 = cljs.core.count(c__4556__auto___34175);
var G__34179 = (0);
seq__33325_34158 = G__34176;
chunk__33326_34159 = G__34177;
count__33327_34160 = G__34178;
i__33328_34161 = G__34179;
continue;
} else {
var test_34181 = cljs.core.first(seq__33325_34173__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_34181,":");


var G__34182 = cljs.core.next(seq__33325_34173__$1);
var G__34183 = null;
var G__34184 = (0);
var G__34185 = (0);
seq__33325_34158 = G__34182;
chunk__33326_34159 = G__34183;
count__33327_34160 = G__34184;
i__33328_34161 = G__34185;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_34155);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_34155);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__34186 = seq__33301_34145;
var G__34187 = chunk__33302_34146;
var G__34188 = count__33303_34147;
var G__34189 = (i__33304_34148 + (1));
seq__33301_34145 = G__34186;
chunk__33302_34146 = G__34187;
count__33303_34147 = G__34188;
i__33304_34148 = G__34189;
continue;
} else {
var temp__5735__auto___34190 = cljs.core.seq(seq__33301_34145);
if(temp__5735__auto___34190){
var seq__33301_34191__$1 = temp__5735__auto___34190;
if(cljs.core.chunked_seq_QMARK_(seq__33301_34191__$1)){
var c__4556__auto___34192 = cljs.core.chunk_first(seq__33301_34191__$1);
var G__34195 = cljs.core.chunk_rest(seq__33301_34191__$1);
var G__34196 = c__4556__auto___34192;
var G__34197 = cljs.core.count(c__4556__auto___34192);
var G__34198 = (0);
seq__33301_34145 = G__34195;
chunk__33302_34146 = G__34196;
count__33303_34147 = G__34197;
i__33304_34148 = G__34198;
continue;
} else {
var map__33329_34199 = cljs.core.first(seq__33301_34191__$1);
var map__33329_34200__$1 = (((((!((map__33329_34199 == null))))?(((((map__33329_34199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33329_34199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33329_34199):map__33329_34199);
var ts_34201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33329_34200__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__33330_34202 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33329_34200__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__33330_34203__$1 = (((((!((map__33330_34202 == null))))?(((((map__33330_34202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33330_34202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33330_34202):map__33330_34202);
var then_34204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33330_34203__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__33333_34207 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_34201));
var chunk__33334_34208 = null;
var count__33335_34209 = (0);
var i__33336_34210 = (0);
while(true){
if((i__33336_34210 < count__33335_34209)){
var test_34217 = chunk__33334_34208.cljs$core$IIndexed$_nth$arity$2(null,i__33336_34210);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_34217,":");


var G__34218 = seq__33333_34207;
var G__34219 = chunk__33334_34208;
var G__34220 = count__33335_34209;
var G__34221 = (i__33336_34210 + (1));
seq__33333_34207 = G__34218;
chunk__33334_34208 = G__34219;
count__33335_34209 = G__34220;
i__33336_34210 = G__34221;
continue;
} else {
var temp__5735__auto___34228__$1 = cljs.core.seq(seq__33333_34207);
if(temp__5735__auto___34228__$1){
var seq__33333_34229__$1 = temp__5735__auto___34228__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33333_34229__$1)){
var c__4556__auto___34231 = cljs.core.chunk_first(seq__33333_34229__$1);
var G__34232 = cljs.core.chunk_rest(seq__33333_34229__$1);
var G__34233 = c__4556__auto___34231;
var G__34234 = cljs.core.count(c__4556__auto___34231);
var G__34235 = (0);
seq__33333_34207 = G__34232;
chunk__33334_34208 = G__34233;
count__33335_34209 = G__34234;
i__33336_34210 = G__34235;
continue;
} else {
var test_34239 = cljs.core.first(seq__33333_34229__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_34239,":");


var G__34240 = cljs.core.next(seq__33333_34229__$1);
var G__34241 = null;
var G__34242 = (0);
var G__34243 = (0);
seq__33333_34207 = G__34240;
chunk__33334_34208 = G__34241;
count__33335_34209 = G__34242;
i__33336_34210 = G__34243;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_34204);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_34204);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__34244 = cljs.core.next(seq__33301_34191__$1);
var G__34245 = null;
var G__34246 = (0);
var G__34247 = (0);
seq__33301_34145 = G__34244;
chunk__33302_34146 = G__34245;
count__33303_34147 = G__34246;
i__33304_34148 = G__34247;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__33345){
var map__33346 = p__33345;
var map__33346__$1 = (((((!((map__33346 == null))))?(((((map__33346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33346):map__33346);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33346__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33346__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33351 = env;
var G__33352 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__33351,G__33352) : cljs.compiler.resolve_type.call(null,G__33351,G__33352));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__33353 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33353,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33353,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__33348_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__33348_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__33348_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__33356 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__33356,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__33356;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33359 = env;
var G__33360 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__33359,G__33360) : cljs.compiler.resolve_type.call(null,G__33359,G__33360));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33361_SHARP_){
return cljs.compiler.resolve_type(env,p1__33361_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__33362 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__33363 = cljs.core.seq(vec__33362);
var first__33364 = cljs.core.first(seq__33363);
var seq__33363__$1 = cljs.core.next(seq__33363);
var p = first__33364;
var first__33364__$1 = cljs.core.first(seq__33363__$1);
var seq__33363__$2 = cljs.core.next(seq__33363__$1);
var ts = first__33364__$1;
var first__33364__$2 = cljs.core.first(seq__33363__$2);
var seq__33363__$3 = cljs.core.next(seq__33363__$2);
var n = first__33364__$2;
var xs = seq__33363__$3;
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
var vec__33365 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__33366 = cljs.core.seq(vec__33365);
var first__33367 = cljs.core.first(seq__33366);
var seq__33366__$1 = cljs.core.next(seq__33366);
var p = first__33367;
var first__33367__$1 = cljs.core.first(seq__33366__$1);
var seq__33366__$2 = cljs.core.next(seq__33366__$1);
var ts = first__33367__$1;
var xs = seq__33366__$2;
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
var G__33369 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__33368 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__33368.cljs$core$IFn$_invoke$arity$1 ? fexpr__33368.cljs$core$IFn$_invoke$arity$1(G__33369) : fexpr__33368.call(null,G__33369));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__33373 = arguments.length;
switch (G__33373) {
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
var vec__33385 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33370_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__33370_SHARP_);
} else {
return p1__33370_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__33386 = cljs.core.seq(vec__33385);
var first__33387 = cljs.core.first(seq__33386);
var seq__33386__$1 = cljs.core.next(seq__33386);
var x = first__33387;
var ys = seq__33386__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__33389 = cljs.core.seq(ys);
var chunk__33390 = null;
var count__33391 = (0);
var i__33392 = (0);
while(true){
if((i__33392 < count__33391)){
var next_line = chunk__33390.cljs$core$IIndexed$_nth$arity$2(null,i__33392);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__34299 = seq__33389;
var G__34300 = chunk__33390;
var G__34301 = count__33391;
var G__34302 = (i__33392 + (1));
seq__33389 = G__34299;
chunk__33390 = G__34300;
count__33391 = G__34301;
i__33392 = G__34302;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33389);
if(temp__5735__auto__){
var seq__33389__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33389__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33389__$1);
var G__34303 = cljs.core.chunk_rest(seq__33389__$1);
var G__34304 = c__4556__auto__;
var G__34305 = cljs.core.count(c__4556__auto__);
var G__34306 = (0);
seq__33389 = G__34303;
chunk__33390 = G__34304;
count__33391 = G__34305;
i__33392 = G__34306;
continue;
} else {
var next_line = cljs.core.first(seq__33389__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__34307 = cljs.core.next(seq__33389__$1);
var G__34308 = null;
var G__34309 = (0);
var G__34310 = (0);
seq__33389 = G__34307;
chunk__33390 = G__34308;
count__33391 = G__34309;
i__33392 = G__34310;
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

var seq__33393_34311 = cljs.core.seq(docs__$2);
var chunk__33394_34312 = null;
var count__33395_34313 = (0);
var i__33396_34314 = (0);
while(true){
if((i__33396_34314 < count__33395_34313)){
var e_34318 = chunk__33394_34312.cljs$core$IIndexed$_nth$arity$2(null,i__33396_34314);
if(cljs.core.truth_(e_34318)){
print_comment_lines(e_34318);
} else {
}


var G__34319 = seq__33393_34311;
var G__34320 = chunk__33394_34312;
var G__34321 = count__33395_34313;
var G__34322 = (i__33396_34314 + (1));
seq__33393_34311 = G__34319;
chunk__33394_34312 = G__34320;
count__33395_34313 = G__34321;
i__33396_34314 = G__34322;
continue;
} else {
var temp__5735__auto___34323 = cljs.core.seq(seq__33393_34311);
if(temp__5735__auto___34323){
var seq__33393_34324__$1 = temp__5735__auto___34323;
if(cljs.core.chunked_seq_QMARK_(seq__33393_34324__$1)){
var c__4556__auto___34326 = cljs.core.chunk_first(seq__33393_34324__$1);
var G__34327 = cljs.core.chunk_rest(seq__33393_34324__$1);
var G__34328 = c__4556__auto___34326;
var G__34329 = cljs.core.count(c__4556__auto___34326);
var G__34330 = (0);
seq__33393_34311 = G__34327;
chunk__33394_34312 = G__34328;
count__33395_34313 = G__34329;
i__33396_34314 = G__34330;
continue;
} else {
var e_34334 = cljs.core.first(seq__33393_34324__$1);
if(cljs.core.truth_(e_34334)){
print_comment_lines(e_34334);
} else {
}


var G__34335 = cljs.core.next(seq__33393_34324__$1);
var G__34336 = null;
var G__34337 = (0);
var G__34338 = (0);
seq__33393_34311 = G__34335;
chunk__33394_34312 = G__34336;
count__33395_34313 = G__34337;
i__33396_34314 = G__34338;
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
var and__4115__auto__ = cljs.core.some((function (p1__33400_SHARP_){
return goog.string.startsWith(p1__33400_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__33401){
var map__33402 = p__33401;
var map__33402__$1 = (((((!((map__33402 == null))))?(((((map__33402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33402):map__33402);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33402__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33402__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33402__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33402__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33402__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33402__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33402__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33402__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33402__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33402__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__33404){
var map__33405 = p__33404;
var map__33405__$1 = (((((!((map__33405 == null))))?(((((map__33405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33405):map__33405);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33405__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33405__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33405__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__33407_34358 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__33408_34359 = null;
var count__33409_34360 = (0);
var i__33410_34361 = (0);
while(true){
if((i__33410_34361 < count__33409_34360)){
var vec__33417_34362 = chunk__33408_34359.cljs$core$IIndexed$_nth$arity$2(null,i__33410_34361);
var i_34363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33417_34362,(0),null);
var param_34364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33417_34362,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_34364);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__34368 = seq__33407_34358;
var G__34369 = chunk__33408_34359;
var G__34370 = count__33409_34360;
var G__34371 = (i__33410_34361 + (1));
seq__33407_34358 = G__34368;
chunk__33408_34359 = G__34369;
count__33409_34360 = G__34370;
i__33410_34361 = G__34371;
continue;
} else {
var temp__5735__auto___34372 = cljs.core.seq(seq__33407_34358);
if(temp__5735__auto___34372){
var seq__33407_34373__$1 = temp__5735__auto___34372;
if(cljs.core.chunked_seq_QMARK_(seq__33407_34373__$1)){
var c__4556__auto___34374 = cljs.core.chunk_first(seq__33407_34373__$1);
var G__34375 = cljs.core.chunk_rest(seq__33407_34373__$1);
var G__34376 = c__4556__auto___34374;
var G__34377 = cljs.core.count(c__4556__auto___34374);
var G__34378 = (0);
seq__33407_34358 = G__34375;
chunk__33408_34359 = G__34376;
count__33409_34360 = G__34377;
i__33410_34361 = G__34378;
continue;
} else {
var vec__33420_34379 = cljs.core.first(seq__33407_34373__$1);
var i_34380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33420_34379,(0),null);
var param_34381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33420_34379,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_34381);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__34384 = cljs.core.next(seq__33407_34373__$1);
var G__34385 = null;
var G__34386 = (0);
var G__34387 = (0);
seq__33407_34358 = G__34384;
chunk__33408_34359 = G__34385;
count__33409_34360 = G__34386;
i__33410_34361 = G__34387;
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

var seq__33423_34392 = cljs.core.seq(params);
var chunk__33424_34393 = null;
var count__33425_34394 = (0);
var i__33426_34395 = (0);
while(true){
if((i__33426_34395 < count__33425_34394)){
var param_34396 = chunk__33424_34393.cljs$core$IIndexed$_nth$arity$2(null,i__33426_34395);
cljs.compiler.emit(param_34396);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34396,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34400 = seq__33423_34392;
var G__34401 = chunk__33424_34393;
var G__34402 = count__33425_34394;
var G__34403 = (i__33426_34395 + (1));
seq__33423_34392 = G__34400;
chunk__33424_34393 = G__34401;
count__33425_34394 = G__34402;
i__33426_34395 = G__34403;
continue;
} else {
var temp__5735__auto___34408 = cljs.core.seq(seq__33423_34392);
if(temp__5735__auto___34408){
var seq__33423_34410__$1 = temp__5735__auto___34408;
if(cljs.core.chunked_seq_QMARK_(seq__33423_34410__$1)){
var c__4556__auto___34412 = cljs.core.chunk_first(seq__33423_34410__$1);
var G__34413 = cljs.core.chunk_rest(seq__33423_34410__$1);
var G__34414 = c__4556__auto___34412;
var G__34415 = cljs.core.count(c__4556__auto___34412);
var G__34416 = (0);
seq__33423_34392 = G__34413;
chunk__33424_34393 = G__34414;
count__33425_34394 = G__34415;
i__33426_34395 = G__34416;
continue;
} else {
var param_34417 = cljs.core.first(seq__33423_34410__$1);
cljs.compiler.emit(param_34417);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34417,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34418 = cljs.core.next(seq__33423_34410__$1);
var G__34419 = null;
var G__34420 = (0);
var G__34421 = (0);
seq__33423_34392 = G__34418;
chunk__33424_34393 = G__34419;
count__33425_34394 = G__34420;
i__33426_34395 = G__34421;
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

var seq__33427_34427 = cljs.core.seq(params);
var chunk__33428_34428 = null;
var count__33429_34429 = (0);
var i__33430_34430 = (0);
while(true){
if((i__33430_34430 < count__33429_34429)){
var param_34431 = chunk__33428_34428.cljs$core$IIndexed$_nth$arity$2(null,i__33430_34430);
cljs.compiler.emit(param_34431);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34431,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34434 = seq__33427_34427;
var G__34435 = chunk__33428_34428;
var G__34436 = count__33429_34429;
var G__34437 = (i__33430_34430 + (1));
seq__33427_34427 = G__34434;
chunk__33428_34428 = G__34435;
count__33429_34429 = G__34436;
i__33430_34430 = G__34437;
continue;
} else {
var temp__5735__auto___34438 = cljs.core.seq(seq__33427_34427);
if(temp__5735__auto___34438){
var seq__33427_34439__$1 = temp__5735__auto___34438;
if(cljs.core.chunked_seq_QMARK_(seq__33427_34439__$1)){
var c__4556__auto___34440 = cljs.core.chunk_first(seq__33427_34439__$1);
var G__34441 = cljs.core.chunk_rest(seq__33427_34439__$1);
var G__34442 = c__4556__auto___34440;
var G__34443 = cljs.core.count(c__4556__auto___34440);
var G__34444 = (0);
seq__33427_34427 = G__34441;
chunk__33428_34428 = G__34442;
count__33429_34429 = G__34443;
i__33430_34430 = G__34444;
continue;
} else {
var param_34445 = cljs.core.first(seq__33427_34439__$1);
cljs.compiler.emit(param_34445);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34445,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34446 = cljs.core.next(seq__33427_34439__$1);
var G__34447 = null;
var G__34448 = (0);
var G__34449 = (0);
seq__33427_34427 = G__34446;
chunk__33428_34428 = G__34447;
count__33429_34429 = G__34448;
i__33430_34430 = G__34449;
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
var seq__33431 = cljs.core.seq(params);
var chunk__33432 = null;
var count__33433 = (0);
var i__33434 = (0);
while(true){
if((i__33434 < count__33433)){
var param = chunk__33432.cljs$core$IIndexed$_nth$arity$2(null,i__33434);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34452 = seq__33431;
var G__34453 = chunk__33432;
var G__34454 = count__33433;
var G__34455 = (i__33434 + (1));
seq__33431 = G__34452;
chunk__33432 = G__34453;
count__33433 = G__34454;
i__33434 = G__34455;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33431);
if(temp__5735__auto__){
var seq__33431__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33431__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33431__$1);
var G__34456 = cljs.core.chunk_rest(seq__33431__$1);
var G__34457 = c__4556__auto__;
var G__34458 = cljs.core.count(c__4556__auto__);
var G__34459 = (0);
seq__33431 = G__34456;
chunk__33432 = G__34457;
count__33433 = G__34458;
i__33434 = G__34459;
continue;
} else {
var param = cljs.core.first(seq__33431__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34465 = cljs.core.next(seq__33431__$1);
var G__34466 = null;
var G__34467 = (0);
var G__34468 = (0);
seq__33431 = G__34465;
chunk__33432 = G__34466;
count__33433 = G__34467;
i__33434 = G__34468;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__33438){
var map__33439 = p__33438;
var map__33439__$1 = (((((!((map__33439 == null))))?(((((map__33439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33439):map__33439);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__33441){
var map__33442 = p__33441;
var map__33442__$1 = (((((!((map__33442 == null))))?(((((map__33442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33442):map__33442);
var f = map__33442__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33442__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_34489__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_34490 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_34489__$1);
var delegate_name_34491 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_34490),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_34491," = function (");

var seq__33444_34492 = cljs.core.seq(params);
var chunk__33445_34493 = null;
var count__33446_34494 = (0);
var i__33447_34495 = (0);
while(true){
if((i__33447_34495 < count__33446_34494)){
var param_34498 = chunk__33445_34493.cljs$core$IIndexed$_nth$arity$2(null,i__33447_34495);
cljs.compiler.emit(param_34498);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34498,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34504 = seq__33444_34492;
var G__34505 = chunk__33445_34493;
var G__34506 = count__33446_34494;
var G__34507 = (i__33447_34495 + (1));
seq__33444_34492 = G__34504;
chunk__33445_34493 = G__34505;
count__33446_34494 = G__34506;
i__33447_34495 = G__34507;
continue;
} else {
var temp__5735__auto___34508 = cljs.core.seq(seq__33444_34492);
if(temp__5735__auto___34508){
var seq__33444_34509__$1 = temp__5735__auto___34508;
if(cljs.core.chunked_seq_QMARK_(seq__33444_34509__$1)){
var c__4556__auto___34510 = cljs.core.chunk_first(seq__33444_34509__$1);
var G__34511 = cljs.core.chunk_rest(seq__33444_34509__$1);
var G__34512 = c__4556__auto___34510;
var G__34513 = cljs.core.count(c__4556__auto___34510);
var G__34514 = (0);
seq__33444_34492 = G__34511;
chunk__33445_34493 = G__34512;
count__33446_34494 = G__34513;
i__33447_34495 = G__34514;
continue;
} else {
var param_34515 = cljs.core.first(seq__33444_34509__$1);
cljs.compiler.emit(param_34515);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34515,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34517 = cljs.core.next(seq__33444_34509__$1);
var G__34518 = null;
var G__34519 = (0);
var G__34520 = (0);
seq__33444_34492 = G__34517;
chunk__33445_34493 = G__34518;
count__33446_34494 = G__34519;
i__33447_34495 = G__34520;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_34490," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_34523 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_34523,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_34491,".call(this,");

var seq__33448_34525 = cljs.core.seq(params);
var chunk__33449_34526 = null;
var count__33450_34527 = (0);
var i__33451_34528 = (0);
while(true){
if((i__33451_34528 < count__33450_34527)){
var param_34529 = chunk__33449_34526.cljs$core$IIndexed$_nth$arity$2(null,i__33451_34528);
cljs.compiler.emit(param_34529);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34529,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34531 = seq__33448_34525;
var G__34532 = chunk__33449_34526;
var G__34533 = count__33450_34527;
var G__34534 = (i__33451_34528 + (1));
seq__33448_34525 = G__34531;
chunk__33449_34526 = G__34532;
count__33450_34527 = G__34533;
i__33451_34528 = G__34534;
continue;
} else {
var temp__5735__auto___34535 = cljs.core.seq(seq__33448_34525);
if(temp__5735__auto___34535){
var seq__33448_34536__$1 = temp__5735__auto___34535;
if(cljs.core.chunked_seq_QMARK_(seq__33448_34536__$1)){
var c__4556__auto___34541 = cljs.core.chunk_first(seq__33448_34536__$1);
var G__34542 = cljs.core.chunk_rest(seq__33448_34536__$1);
var G__34543 = c__4556__auto___34541;
var G__34544 = cljs.core.count(c__4556__auto___34541);
var G__34545 = (0);
seq__33448_34525 = G__34542;
chunk__33449_34526 = G__34543;
count__33450_34527 = G__34544;
i__33451_34528 = G__34545;
continue;
} else {
var param_34546 = cljs.core.first(seq__33448_34536__$1);
cljs.compiler.emit(param_34546);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34546,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34551 = cljs.core.next(seq__33448_34536__$1);
var G__34552 = null;
var G__34553 = (0);
var G__34554 = (0);
seq__33448_34525 = G__34551;
chunk__33449_34526 = G__34552;
count__33450_34527 = G__34553;
i__33451_34528 = G__34554;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34490,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_34490,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_34489__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34490,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_34491,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_34490,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__33458){
var map__33459 = p__33458;
var map__33459__$1 = (((((!((map__33459 == null))))?(((((map__33459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33459):map__33459);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33459__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33459__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33459__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33459__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33459__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33459__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33459__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33459__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33452_SHARP_){
var and__4115__auto__ = p1__33452_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__33452_SHARP_));
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
var name_34567__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_34568 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_34567__$1);
var maxparams_34569 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_34570 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_34568),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_34571 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__33456_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__33456_SHARP_)));
}),cljs.core.seq(mmap_34570));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_34568," = null;");

var seq__33461_34576 = cljs.core.seq(ms_34571);
var chunk__33462_34577 = null;
var count__33463_34578 = (0);
var i__33464_34579 = (0);
while(true){
if((i__33464_34579 < count__33463_34578)){
var vec__33475_34581 = chunk__33462_34577.cljs$core$IIndexed$_nth$arity$2(null,i__33464_34579);
var n_34582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33475_34581,(0),null);
var meth_34583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33475_34581,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_34582," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34583))){
cljs.compiler.emit_variadic_fn_method(meth_34583);
} else {
cljs.compiler.emit_fn_method(meth_34583);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__34584 = seq__33461_34576;
var G__34585 = chunk__33462_34577;
var G__34586 = count__33463_34578;
var G__34587 = (i__33464_34579 + (1));
seq__33461_34576 = G__34584;
chunk__33462_34577 = G__34585;
count__33463_34578 = G__34586;
i__33464_34579 = G__34587;
continue;
} else {
var temp__5735__auto___34588 = cljs.core.seq(seq__33461_34576);
if(temp__5735__auto___34588){
var seq__33461_34589__$1 = temp__5735__auto___34588;
if(cljs.core.chunked_seq_QMARK_(seq__33461_34589__$1)){
var c__4556__auto___34590 = cljs.core.chunk_first(seq__33461_34589__$1);
var G__34591 = cljs.core.chunk_rest(seq__33461_34589__$1);
var G__34592 = c__4556__auto___34590;
var G__34593 = cljs.core.count(c__4556__auto___34590);
var G__34594 = (0);
seq__33461_34576 = G__34591;
chunk__33462_34577 = G__34592;
count__33463_34578 = G__34593;
i__33464_34579 = G__34594;
continue;
} else {
var vec__33478_34599 = cljs.core.first(seq__33461_34589__$1);
var n_34600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33478_34599,(0),null);
var meth_34601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33478_34599,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_34600," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34601))){
cljs.compiler.emit_variadic_fn_method(meth_34601);
} else {
cljs.compiler.emit_fn_method(meth_34601);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__34602 = cljs.core.next(seq__33461_34589__$1);
var G__34603 = null;
var G__34604 = (0);
var G__34605 = (0);
seq__33461_34576 = G__34602;
chunk__33462_34577 = G__34603;
count__33463_34578 = G__34604;
i__33464_34579 = G__34605;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34568," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_34569),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_34569)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_34569));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__33481_34610 = cljs.core.seq(ms_34571);
var chunk__33482_34611 = null;
var count__33483_34612 = (0);
var i__33484_34613 = (0);
while(true){
if((i__33484_34613 < count__33483_34612)){
var vec__33491_34614 = chunk__33482_34611.cljs$core$IIndexed$_nth$arity$2(null,i__33484_34613);
var n_34615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33491_34614,(0),null);
var meth_34616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33491_34614,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34616))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_34617 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_34617," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_34618 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_34617," = new cljs.core.IndexedSeq(",a_34618,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_34615,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_34569)),(((cljs.core.count(maxparams_34569) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_34617,");"], 0));
} else {
var pcnt_34623 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34616));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_34623,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_34615,".call(this",(((pcnt_34623 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_34623,maxparams_34569)),null,(1),null)),(2),null))),");");
}


var G__34625 = seq__33481_34610;
var G__34626 = chunk__33482_34611;
var G__34627 = count__33483_34612;
var G__34628 = (i__33484_34613 + (1));
seq__33481_34610 = G__34625;
chunk__33482_34611 = G__34626;
count__33483_34612 = G__34627;
i__33484_34613 = G__34628;
continue;
} else {
var temp__5735__auto___34629 = cljs.core.seq(seq__33481_34610);
if(temp__5735__auto___34629){
var seq__33481_34630__$1 = temp__5735__auto___34629;
if(cljs.core.chunked_seq_QMARK_(seq__33481_34630__$1)){
var c__4556__auto___34631 = cljs.core.chunk_first(seq__33481_34630__$1);
var G__34632 = cljs.core.chunk_rest(seq__33481_34630__$1);
var G__34633 = c__4556__auto___34631;
var G__34634 = cljs.core.count(c__4556__auto___34631);
var G__34635 = (0);
seq__33481_34610 = G__34632;
chunk__33482_34611 = G__34633;
count__33483_34612 = G__34634;
i__33484_34613 = G__34635;
continue;
} else {
var vec__33494_34647 = cljs.core.first(seq__33481_34630__$1);
var n_34648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33494_34647,(0),null);
var meth_34649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33494_34647,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34649))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_34651 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_34651," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_34652 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_34651," = new cljs.core.IndexedSeq(",a_34652,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_34648,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_34569)),(((cljs.core.count(maxparams_34569) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_34651,");"], 0));
} else {
var pcnt_34653 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34649));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_34653,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_34648,".call(this",(((pcnt_34653 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_34653,maxparams_34569)),null,(1),null)),(2),null))),");");
}


var G__34654 = cljs.core.next(seq__33481_34630__$1);
var G__34655 = null;
var G__34656 = (0);
var G__34657 = (0);
seq__33481_34610 = G__34654;
chunk__33482_34611 = G__34655;
count__33483_34612 = G__34656;
i__33484_34613 = G__34657;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_34658 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_34571)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_34658,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34568,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34568,".cljs$lang$applyTo = ",cljs.core.some((function (p1__33457_SHARP_){
var vec__33497 = p1__33457_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33497,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33497,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_34571),".cljs$lang$applyTo;");
} else {
}

var seq__33500_34663 = cljs.core.seq(ms_34571);
var chunk__33501_34664 = null;
var count__33502_34665 = (0);
var i__33503_34666 = (0);
while(true){
if((i__33503_34666 < count__33502_34665)){
var vec__33511_34667 = chunk__33501_34664.cljs$core$IIndexed$_nth$arity$2(null,i__33503_34666);
var n_34668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33511_34667,(0),null);
var meth_34669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33511_34667,(1),null);
var c_34670 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34669));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34669))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34568,".cljs$core$IFn$_invoke$arity$variadic = ",n_34668,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_34568,".cljs$core$IFn$_invoke$arity$",c_34670," = ",n_34668,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__34671 = seq__33500_34663;
var G__34672 = chunk__33501_34664;
var G__34673 = count__33502_34665;
var G__34674 = (i__33503_34666 + (1));
seq__33500_34663 = G__34671;
chunk__33501_34664 = G__34672;
count__33502_34665 = G__34673;
i__33503_34666 = G__34674;
continue;
} else {
var temp__5735__auto___34675 = cljs.core.seq(seq__33500_34663);
if(temp__5735__auto___34675){
var seq__33500_34676__$1 = temp__5735__auto___34675;
if(cljs.core.chunked_seq_QMARK_(seq__33500_34676__$1)){
var c__4556__auto___34678 = cljs.core.chunk_first(seq__33500_34676__$1);
var G__34679 = cljs.core.chunk_rest(seq__33500_34676__$1);
var G__34680 = c__4556__auto___34678;
var G__34681 = cljs.core.count(c__4556__auto___34678);
var G__34682 = (0);
seq__33500_34663 = G__34679;
chunk__33501_34664 = G__34680;
count__33502_34665 = G__34681;
i__33503_34666 = G__34682;
continue;
} else {
var vec__33514_34684 = cljs.core.first(seq__33500_34676__$1);
var n_34685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33514_34684,(0),null);
var meth_34686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33514_34684,(1),null);
var c_34687 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34686));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34686))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34568,".cljs$core$IFn$_invoke$arity$variadic = ",n_34685,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_34568,".cljs$core$IFn$_invoke$arity$",c_34687," = ",n_34685,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__34692 = cljs.core.next(seq__33500_34676__$1);
var G__34693 = null;
var G__34694 = (0);
var G__34695 = (0);
seq__33500_34663 = G__34692;
chunk__33501_34664 = G__34693;
count__33502_34665 = G__34694;
i__33503_34666 = G__34695;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_34568,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__33521){
var map__33522 = p__33521;
var map__33522__$1 = (((((!((map__33522 == null))))?(((((map__33522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33522):map__33522);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33522__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33522__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33522__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__33524_34707 = cljs.core.seq(statements);
var chunk__33525_34708 = null;
var count__33526_34709 = (0);
var i__33527_34710 = (0);
while(true){
if((i__33527_34710 < count__33526_34709)){
var s_34711 = chunk__33525_34708.cljs$core$IIndexed$_nth$arity$2(null,i__33527_34710);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_34711);


var G__34712 = seq__33524_34707;
var G__34713 = chunk__33525_34708;
var G__34714 = count__33526_34709;
var G__34715 = (i__33527_34710 + (1));
seq__33524_34707 = G__34712;
chunk__33525_34708 = G__34713;
count__33526_34709 = G__34714;
i__33527_34710 = G__34715;
continue;
} else {
var temp__5735__auto___34716 = cljs.core.seq(seq__33524_34707);
if(temp__5735__auto___34716){
var seq__33524_34717__$1 = temp__5735__auto___34716;
if(cljs.core.chunked_seq_QMARK_(seq__33524_34717__$1)){
var c__4556__auto___34718 = cljs.core.chunk_first(seq__33524_34717__$1);
var G__34719 = cljs.core.chunk_rest(seq__33524_34717__$1);
var G__34720 = c__4556__auto___34718;
var G__34721 = cljs.core.count(c__4556__auto___34718);
var G__34722 = (0);
seq__33524_34707 = G__34719;
chunk__33525_34708 = G__34720;
count__33526_34709 = G__34721;
i__33527_34710 = G__34722;
continue;
} else {
var s_34723 = cljs.core.first(seq__33524_34717__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_34723);


var G__34724 = cljs.core.next(seq__33524_34717__$1);
var G__34725 = null;
var G__34726 = (0);
var G__34727 = (0);
seq__33524_34707 = G__34724;
chunk__33525_34708 = G__34725;
count__33526_34709 = G__34726;
i__33527_34710 = G__34727;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__33529){
var map__33530 = p__33529;
var map__33530__$1 = (((((!((map__33530 == null))))?(((((map__33530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33530):map__33530);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33530__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33530__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33530__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33530__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33530__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__33542,is_loop){
var map__33543 = p__33542;
var map__33543__$1 = (((((!((map__33543 == null))))?(((((map__33543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33543):map__33543);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33543__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33543__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33543__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__33549_34742 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__33550_34743 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__33550_34743);

try{var seq__33551_34744 = cljs.core.seq(bindings);
var chunk__33552_34745 = null;
var count__33553_34746 = (0);
var i__33554_34747 = (0);
while(true){
if((i__33554_34747 < count__33553_34746)){
var map__33559_34748 = chunk__33552_34745.cljs$core$IIndexed$_nth$arity$2(null,i__33554_34747);
var map__33559_34749__$1 = (((((!((map__33559_34748 == null))))?(((((map__33559_34748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33559_34748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33559_34748):map__33559_34748);
var binding_34750 = map__33559_34749__$1;
var init_34751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33559_34749__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_34750);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_34751,";");


var G__34754 = seq__33551_34744;
var G__34755 = chunk__33552_34745;
var G__34756 = count__33553_34746;
var G__34757 = (i__33554_34747 + (1));
seq__33551_34744 = G__34754;
chunk__33552_34745 = G__34755;
count__33553_34746 = G__34756;
i__33554_34747 = G__34757;
continue;
} else {
var temp__5735__auto___34758 = cljs.core.seq(seq__33551_34744);
if(temp__5735__auto___34758){
var seq__33551_34759__$1 = temp__5735__auto___34758;
if(cljs.core.chunked_seq_QMARK_(seq__33551_34759__$1)){
var c__4556__auto___34760 = cljs.core.chunk_first(seq__33551_34759__$1);
var G__34761 = cljs.core.chunk_rest(seq__33551_34759__$1);
var G__34762 = c__4556__auto___34760;
var G__34763 = cljs.core.count(c__4556__auto___34760);
var G__34764 = (0);
seq__33551_34744 = G__34761;
chunk__33552_34745 = G__34762;
count__33553_34746 = G__34763;
i__33554_34747 = G__34764;
continue;
} else {
var map__33561_34765 = cljs.core.first(seq__33551_34759__$1);
var map__33561_34766__$1 = (((((!((map__33561_34765 == null))))?(((((map__33561_34765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33561_34765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33561_34765):map__33561_34765);
var binding_34767 = map__33561_34766__$1;
var init_34768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33561_34766__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_34767);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_34768,";");


var G__34773 = cljs.core.next(seq__33551_34759__$1);
var G__34774 = null;
var G__34775 = (0);
var G__34776 = (0);
seq__33551_34744 = G__34773;
chunk__33552_34745 = G__34774;
count__33553_34746 = G__34775;
i__33554_34747 = G__34776;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__33549_34742);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__33580){
var map__33581 = p__33580;
var map__33581__$1 = (((((!((map__33581 == null))))?(((((map__33581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33581):map__33581);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33581__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33581__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33581__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___34779 = cljs.core.count(exprs);
var i_34780 = (0);
while(true){
if((i_34780 < n__4613__auto___34779)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_34780) : temps.call(null,i_34780))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_34780) : exprs.call(null,i_34780)),";");

var G__34782 = (i_34780 + (1));
i_34780 = G__34782;
continue;
} else {
}
break;
}

var n__4613__auto___34783 = cljs.core.count(exprs);
var i_34784 = (0);
while(true){
if((i_34784 < n__4613__auto___34783)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_34784) : params.call(null,i_34784)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_34784) : temps.call(null,i_34784)),";");

var G__34786 = (i_34784 + (1));
i_34784 = G__34786;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__33604){
var map__33605 = p__33604;
var map__33605__$1 = (((((!((map__33605 == null))))?(((((map__33605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33605):map__33605);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33605__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33605__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33605__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__33607_34815 = cljs.core.seq(bindings);
var chunk__33608_34816 = null;
var count__33609_34817 = (0);
var i__33610_34818 = (0);
while(true){
if((i__33610_34818 < count__33609_34817)){
var map__33615_34819 = chunk__33608_34816.cljs$core$IIndexed$_nth$arity$2(null,i__33610_34818);
var map__33615_34820__$1 = (((((!((map__33615_34819 == null))))?(((((map__33615_34819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33615_34819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33615_34819):map__33615_34819);
var binding_34821 = map__33615_34820__$1;
var init_34822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33615_34820__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_34821)," = ",init_34822,";");


var G__34823 = seq__33607_34815;
var G__34824 = chunk__33608_34816;
var G__34825 = count__33609_34817;
var G__34826 = (i__33610_34818 + (1));
seq__33607_34815 = G__34823;
chunk__33608_34816 = G__34824;
count__33609_34817 = G__34825;
i__33610_34818 = G__34826;
continue;
} else {
var temp__5735__auto___34827 = cljs.core.seq(seq__33607_34815);
if(temp__5735__auto___34827){
var seq__33607_34828__$1 = temp__5735__auto___34827;
if(cljs.core.chunked_seq_QMARK_(seq__33607_34828__$1)){
var c__4556__auto___34829 = cljs.core.chunk_first(seq__33607_34828__$1);
var G__34831 = cljs.core.chunk_rest(seq__33607_34828__$1);
var G__34832 = c__4556__auto___34829;
var G__34833 = cljs.core.count(c__4556__auto___34829);
var G__34834 = (0);
seq__33607_34815 = G__34831;
chunk__33608_34816 = G__34832;
count__33609_34817 = G__34833;
i__33610_34818 = G__34834;
continue;
} else {
var map__33617_34835 = cljs.core.first(seq__33607_34828__$1);
var map__33617_34836__$1 = (((((!((map__33617_34835 == null))))?(((((map__33617_34835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33617_34835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33617_34835):map__33617_34835);
var binding_34837 = map__33617_34836__$1;
var init_34838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33617_34836__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_34837)," = ",init_34838,";");


var G__34840 = cljs.core.next(seq__33607_34828__$1);
var G__34841 = null;
var G__34842 = (0);
var G__34843 = (0);
seq__33607_34815 = G__34840;
chunk__33608_34816 = G__34841;
count__33609_34817 = G__34842;
i__33610_34818 = G__34843;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__33621){
var map__33625 = p__33621;
var map__33625__$1 = (((((!((map__33625 == null))))?(((((map__33625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33625):map__33625);
var expr = map__33625__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33625__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33625__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33625__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__33665 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__33665.cljs$core$IFn$_invoke$arity$1 ? fexpr__33665.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__33665.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__33667 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__33667.cljs$core$IFn$_invoke$arity$1 ? fexpr__33667.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__33667.call(null,first_arg_tag));
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
var vec__33636 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__33619_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33619_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__33620_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33620_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33636,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33636,(1),null);
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
var pimpl_34875 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_34875,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_34876 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_34876,args)),(((mfa_34876 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_34876,args)),"], 0))"], 0));
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
var G__33694 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__33693 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__33693.cljs$core$IFn$_invoke$arity$1 ? fexpr__33693.cljs$core$IFn$_invoke$arity$1(G__33694) : fexpr__33693.call(null,G__33694));
} else {
return and__4115__auto__;
}
})())){
var fprop_34883 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_34883," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_34883,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_34883," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_34883,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__33697){
var map__33698 = p__33697;
var map__33698__$1 = (((((!((map__33698 == null))))?(((((map__33698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33698):map__33698);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33698__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33698__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33698__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__33700){
var map__33701 = p__33700;
var map__33701__$1 = (((((!((map__33701 == null))))?(((((map__33701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33701):map__33701);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33701__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33701__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33701__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__33715 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__33715__$1 = (((((!((map__33715 == null))))?(((((map__33715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33715):map__33715);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33715__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33715__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__33716 = options;
var map__33716__$1 = (((((!((map__33716 == null))))?(((((map__33716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33716):map__33716);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33716__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33716__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33716__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__33717 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__33724 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__33724__$1 = (((((!((map__33724 == null))))?(((((map__33724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33724):map__33724);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33724__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33724__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33717,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33717,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__33726_34906 = cljs.core.seq(libs_to_load);
var chunk__33727_34907 = null;
var count__33728_34908 = (0);
var i__33729_34909 = (0);
while(true){
if((i__33729_34909 < count__33728_34908)){
var lib_34910 = chunk__33727_34907.cljs$core$IIndexed$_nth$arity$2(null,i__33729_34909);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_34910)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_34910),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34910),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_34910),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34910),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_34910,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34910),"');");
}

}
}
}


var G__34911 = seq__33726_34906;
var G__34912 = chunk__33727_34907;
var G__34913 = count__33728_34908;
var G__34914 = (i__33729_34909 + (1));
seq__33726_34906 = G__34911;
chunk__33727_34907 = G__34912;
count__33728_34908 = G__34913;
i__33729_34909 = G__34914;
continue;
} else {
var temp__5735__auto___34915 = cljs.core.seq(seq__33726_34906);
if(temp__5735__auto___34915){
var seq__33726_34916__$1 = temp__5735__auto___34915;
if(cljs.core.chunked_seq_QMARK_(seq__33726_34916__$1)){
var c__4556__auto___34917 = cljs.core.chunk_first(seq__33726_34916__$1);
var G__34918 = cljs.core.chunk_rest(seq__33726_34916__$1);
var G__34919 = c__4556__auto___34917;
var G__34920 = cljs.core.count(c__4556__auto___34917);
var G__34921 = (0);
seq__33726_34906 = G__34918;
chunk__33727_34907 = G__34919;
count__33728_34908 = G__34920;
i__33729_34909 = G__34921;
continue;
} else {
var lib_34924 = cljs.core.first(seq__33726_34916__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_34924)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_34924),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34924),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_34924),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34924),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_34924,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34924),"');");
}

}
}
}


var G__34948 = cljs.core.next(seq__33726_34916__$1);
var G__34949 = null;
var G__34950 = (0);
var G__34951 = (0);
seq__33726_34906 = G__34948;
chunk__33727_34907 = G__34949;
count__33728_34908 = G__34950;
i__33729_34909 = G__34951;
continue;
}
} else {
}
}
break;
}

var seq__33732_34952 = cljs.core.seq(node_libs);
var chunk__33733_34953 = null;
var count__33734_34954 = (0);
var i__33735_34955 = (0);
while(true){
if((i__33735_34955 < count__33734_34954)){
var lib_34956 = chunk__33733_34953.cljs$core$IIndexed$_nth$arity$2(null,i__33735_34955);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_34956)," = require('",lib_34956,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__34957 = seq__33732_34952;
var G__34958 = chunk__33733_34953;
var G__34959 = count__33734_34954;
var G__34960 = (i__33735_34955 + (1));
seq__33732_34952 = G__34957;
chunk__33733_34953 = G__34958;
count__33734_34954 = G__34959;
i__33735_34955 = G__34960;
continue;
} else {
var temp__5735__auto___34961 = cljs.core.seq(seq__33732_34952);
if(temp__5735__auto___34961){
var seq__33732_34962__$1 = temp__5735__auto___34961;
if(cljs.core.chunked_seq_QMARK_(seq__33732_34962__$1)){
var c__4556__auto___34963 = cljs.core.chunk_first(seq__33732_34962__$1);
var G__34964 = cljs.core.chunk_rest(seq__33732_34962__$1);
var G__34965 = c__4556__auto___34963;
var G__34966 = cljs.core.count(c__4556__auto___34963);
var G__34967 = (0);
seq__33732_34952 = G__34964;
chunk__33733_34953 = G__34965;
count__33734_34954 = G__34966;
i__33735_34955 = G__34967;
continue;
} else {
var lib_34969 = cljs.core.first(seq__33732_34962__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_34969)," = require('",lib_34969,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__34970 = cljs.core.next(seq__33732_34962__$1);
var G__34971 = null;
var G__34972 = (0);
var G__34973 = (0);
seq__33732_34952 = G__34970;
chunk__33733_34953 = G__34971;
count__33734_34954 = G__34972;
i__33735_34955 = G__34973;
continue;
}
} else {
}
}
break;
}

var seq__33736_34975 = cljs.core.seq(global_exports_libs);
var chunk__33737_34976 = null;
var count__33738_34977 = (0);
var i__33739_34978 = (0);
while(true){
if((i__33739_34978 < count__33738_34977)){
var lib_34979 = chunk__33737_34976.cljs$core$IIndexed$_nth$arity$2(null,i__33739_34978);
var map__33747_34980 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_34979));
var map__33747_34981__$1 = (((((!((map__33747_34980 == null))))?(((((map__33747_34980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33747_34980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33747_34980):map__33747_34980);
var global_exports_34982 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33747_34981__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_34982,lib_34979);


var G__34984 = seq__33736_34975;
var G__34985 = chunk__33737_34976;
var G__34986 = count__33738_34977;
var G__34987 = (i__33739_34978 + (1));
seq__33736_34975 = G__34984;
chunk__33737_34976 = G__34985;
count__33738_34977 = G__34986;
i__33739_34978 = G__34987;
continue;
} else {
var temp__5735__auto___34988 = cljs.core.seq(seq__33736_34975);
if(temp__5735__auto___34988){
var seq__33736_34990__$1 = temp__5735__auto___34988;
if(cljs.core.chunked_seq_QMARK_(seq__33736_34990__$1)){
var c__4556__auto___34995 = cljs.core.chunk_first(seq__33736_34990__$1);
var G__34996 = cljs.core.chunk_rest(seq__33736_34990__$1);
var G__34997 = c__4556__auto___34995;
var G__34998 = cljs.core.count(c__4556__auto___34995);
var G__34999 = (0);
seq__33736_34975 = G__34996;
chunk__33737_34976 = G__34997;
count__33738_34977 = G__34998;
i__33739_34978 = G__34999;
continue;
} else {
var lib_35000 = cljs.core.first(seq__33736_34990__$1);
var map__33761_35001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_35000));
var map__33761_35002__$1 = (((((!((map__33761_35001 == null))))?(((((map__33761_35001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33761_35001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33761_35001):map__33761_35001);
var global_exports_35003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33761_35002__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_35003,lib_35000);


var G__35036 = cljs.core.next(seq__33736_34990__$1);
var G__35037 = null;
var G__35038 = (0);
var G__35039 = (0);
seq__33736_34975 = G__35036;
chunk__33737_34976 = G__35037;
count__33738_34977 = G__35038;
i__33739_34978 = G__35039;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__33769){
var map__33770 = p__33769;
var map__33770__$1 = (((((!((map__33770 == null))))?(((((map__33770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33770):map__33770);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33770__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33770__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33770__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33770__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33770__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33770__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33770__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__33773){
var map__33774 = p__33773;
var map__33774__$1 = (((((!((map__33774 == null))))?(((((map__33774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33774):map__33774);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33774__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33774__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33774__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33774__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33774__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33774__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33774__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__33776){
var map__33777 = p__33776;
var map__33777__$1 = (((((!((map__33777 == null))))?(((((map__33777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33777):map__33777);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33777__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33777__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33777__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33777__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33777__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__33780_35082 = cljs.core.seq(protocols);
var chunk__33781_35083 = null;
var count__33782_35084 = (0);
var i__33783_35085 = (0);
while(true){
if((i__33783_35085 < count__33782_35084)){
var protocol_35086 = chunk__33781_35083.cljs$core$IIndexed$_nth$arity$2(null,i__33783_35085);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35086)),"}");


var G__35087 = seq__33780_35082;
var G__35088 = chunk__33781_35083;
var G__35089 = count__33782_35084;
var G__35090 = (i__33783_35085 + (1));
seq__33780_35082 = G__35087;
chunk__33781_35083 = G__35088;
count__33782_35084 = G__35089;
i__33783_35085 = G__35090;
continue;
} else {
var temp__5735__auto___35091 = cljs.core.seq(seq__33780_35082);
if(temp__5735__auto___35091){
var seq__33780_35092__$1 = temp__5735__auto___35091;
if(cljs.core.chunked_seq_QMARK_(seq__33780_35092__$1)){
var c__4556__auto___35095 = cljs.core.chunk_first(seq__33780_35092__$1);
var G__35096 = cljs.core.chunk_rest(seq__33780_35092__$1);
var G__35097 = c__4556__auto___35095;
var G__35098 = cljs.core.count(c__4556__auto___35095);
var G__35099 = (0);
seq__33780_35082 = G__35096;
chunk__33781_35083 = G__35097;
count__33782_35084 = G__35098;
i__33783_35085 = G__35099;
continue;
} else {
var protocol_35100 = cljs.core.first(seq__33780_35092__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35100)),"}");


var G__35105 = cljs.core.next(seq__33780_35092__$1);
var G__35106 = null;
var G__35107 = (0);
var G__35108 = (0);
seq__33780_35082 = G__35105;
chunk__33781_35083 = G__35106;
count__33782_35084 = G__35107;
i__33783_35085 = G__35108;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__33785_35109 = cljs.core.seq(fields__$1);
var chunk__33786_35110 = null;
var count__33787_35111 = (0);
var i__33788_35112 = (0);
while(true){
if((i__33788_35112 < count__33787_35111)){
var fld_35113 = chunk__33786_35110.cljs$core$IIndexed$_nth$arity$2(null,i__33788_35112);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_35113," = ",fld_35113,";");


var G__35114 = seq__33785_35109;
var G__35115 = chunk__33786_35110;
var G__35116 = count__33787_35111;
var G__35117 = (i__33788_35112 + (1));
seq__33785_35109 = G__35114;
chunk__33786_35110 = G__35115;
count__33787_35111 = G__35116;
i__33788_35112 = G__35117;
continue;
} else {
var temp__5735__auto___35118 = cljs.core.seq(seq__33785_35109);
if(temp__5735__auto___35118){
var seq__33785_35119__$1 = temp__5735__auto___35118;
if(cljs.core.chunked_seq_QMARK_(seq__33785_35119__$1)){
var c__4556__auto___35120 = cljs.core.chunk_first(seq__33785_35119__$1);
var G__35121 = cljs.core.chunk_rest(seq__33785_35119__$1);
var G__35122 = c__4556__auto___35120;
var G__35123 = cljs.core.count(c__4556__auto___35120);
var G__35124 = (0);
seq__33785_35109 = G__35121;
chunk__33786_35110 = G__35122;
count__33787_35111 = G__35123;
i__33788_35112 = G__35124;
continue;
} else {
var fld_35125 = cljs.core.first(seq__33785_35119__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_35125," = ",fld_35125,";");


var G__35126 = cljs.core.next(seq__33785_35119__$1);
var G__35127 = null;
var G__35128 = (0);
var G__35129 = (0);
seq__33785_35109 = G__35126;
chunk__33786_35110 = G__35127;
count__33787_35111 = G__35128;
i__33788_35112 = G__35129;
continue;
}
} else {
}
}
break;
}

var seq__33789_35130 = cljs.core.seq(pmasks);
var chunk__33790_35131 = null;
var count__33791_35132 = (0);
var i__33792_35133 = (0);
while(true){
if((i__33792_35133 < count__33791_35132)){
var vec__33799_35134 = chunk__33790_35131.cljs$core$IIndexed$_nth$arity$2(null,i__33792_35133);
var pno_35135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33799_35134,(0),null);
var pmask_35136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33799_35134,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_35135,"$ = ",pmask_35136,";");


var G__35137 = seq__33789_35130;
var G__35138 = chunk__33790_35131;
var G__35139 = count__33791_35132;
var G__35140 = (i__33792_35133 + (1));
seq__33789_35130 = G__35137;
chunk__33790_35131 = G__35138;
count__33791_35132 = G__35139;
i__33792_35133 = G__35140;
continue;
} else {
var temp__5735__auto___35141 = cljs.core.seq(seq__33789_35130);
if(temp__5735__auto___35141){
var seq__33789_35142__$1 = temp__5735__auto___35141;
if(cljs.core.chunked_seq_QMARK_(seq__33789_35142__$1)){
var c__4556__auto___35143 = cljs.core.chunk_first(seq__33789_35142__$1);
var G__35146 = cljs.core.chunk_rest(seq__33789_35142__$1);
var G__35147 = c__4556__auto___35143;
var G__35148 = cljs.core.count(c__4556__auto___35143);
var G__35149 = (0);
seq__33789_35130 = G__35146;
chunk__33790_35131 = G__35147;
count__33791_35132 = G__35148;
i__33792_35133 = G__35149;
continue;
} else {
var vec__33802_35150 = cljs.core.first(seq__33789_35142__$1);
var pno_35151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33802_35150,(0),null);
var pmask_35152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33802_35150,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_35151,"$ = ",pmask_35152,";");


var G__35159 = cljs.core.next(seq__33789_35142__$1);
var G__35160 = null;
var G__35161 = (0);
var G__35162 = (0);
seq__33789_35130 = G__35159;
chunk__33790_35131 = G__35160;
count__33791_35132 = G__35161;
i__33792_35133 = G__35162;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__33805){
var map__33806 = p__33805;
var map__33806__$1 = (((((!((map__33806 == null))))?(((((map__33806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33806):map__33806);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33806__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33806__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33806__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33806__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33806__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__33808_35194 = cljs.core.seq(protocols);
var chunk__33809_35195 = null;
var count__33810_35196 = (0);
var i__33811_35197 = (0);
while(true){
if((i__33811_35197 < count__33810_35196)){
var protocol_35200 = chunk__33809_35195.cljs$core$IIndexed$_nth$arity$2(null,i__33811_35197);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35200)),"}");


var G__35202 = seq__33808_35194;
var G__35203 = chunk__33809_35195;
var G__35204 = count__33810_35196;
var G__35205 = (i__33811_35197 + (1));
seq__33808_35194 = G__35202;
chunk__33809_35195 = G__35203;
count__33810_35196 = G__35204;
i__33811_35197 = G__35205;
continue;
} else {
var temp__5735__auto___35207 = cljs.core.seq(seq__33808_35194);
if(temp__5735__auto___35207){
var seq__33808_35208__$1 = temp__5735__auto___35207;
if(cljs.core.chunked_seq_QMARK_(seq__33808_35208__$1)){
var c__4556__auto___35209 = cljs.core.chunk_first(seq__33808_35208__$1);
var G__35210 = cljs.core.chunk_rest(seq__33808_35208__$1);
var G__35211 = c__4556__auto___35209;
var G__35212 = cljs.core.count(c__4556__auto___35209);
var G__35213 = (0);
seq__33808_35194 = G__35210;
chunk__33809_35195 = G__35211;
count__33810_35196 = G__35212;
i__33811_35197 = G__35213;
continue;
} else {
var protocol_35214 = cljs.core.first(seq__33808_35208__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35214)),"}");


var G__35215 = cljs.core.next(seq__33808_35208__$1);
var G__35216 = null;
var G__35217 = (0);
var G__35218 = (0);
seq__33808_35194 = G__35215;
chunk__33809_35195 = G__35216;
count__33810_35196 = G__35217;
i__33811_35197 = G__35218;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__33812_35219 = cljs.core.seq(fields__$1);
var chunk__33813_35220 = null;
var count__33814_35221 = (0);
var i__33815_35222 = (0);
while(true){
if((i__33815_35222 < count__33814_35221)){
var fld_35223 = chunk__33813_35220.cljs$core$IIndexed$_nth$arity$2(null,i__33815_35222);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_35223," = ",fld_35223,";");


var G__35224 = seq__33812_35219;
var G__35225 = chunk__33813_35220;
var G__35226 = count__33814_35221;
var G__35227 = (i__33815_35222 + (1));
seq__33812_35219 = G__35224;
chunk__33813_35220 = G__35225;
count__33814_35221 = G__35226;
i__33815_35222 = G__35227;
continue;
} else {
var temp__5735__auto___35229 = cljs.core.seq(seq__33812_35219);
if(temp__5735__auto___35229){
var seq__33812_35231__$1 = temp__5735__auto___35229;
if(cljs.core.chunked_seq_QMARK_(seq__33812_35231__$1)){
var c__4556__auto___35233 = cljs.core.chunk_first(seq__33812_35231__$1);
var G__35234 = cljs.core.chunk_rest(seq__33812_35231__$1);
var G__35235 = c__4556__auto___35233;
var G__35236 = cljs.core.count(c__4556__auto___35233);
var G__35237 = (0);
seq__33812_35219 = G__35234;
chunk__33813_35220 = G__35235;
count__33814_35221 = G__35236;
i__33815_35222 = G__35237;
continue;
} else {
var fld_35238 = cljs.core.first(seq__33812_35231__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_35238," = ",fld_35238,";");


var G__35239 = cljs.core.next(seq__33812_35231__$1);
var G__35240 = null;
var G__35241 = (0);
var G__35242 = (0);
seq__33812_35219 = G__35239;
chunk__33813_35220 = G__35240;
count__33814_35221 = G__35241;
i__33815_35222 = G__35242;
continue;
}
} else {
}
}
break;
}

var seq__33816_35243 = cljs.core.seq(pmasks);
var chunk__33817_35244 = null;
var count__33818_35245 = (0);
var i__33819_35246 = (0);
while(true){
if((i__33819_35246 < count__33818_35245)){
var vec__33826_35247 = chunk__33817_35244.cljs$core$IIndexed$_nth$arity$2(null,i__33819_35246);
var pno_35248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33826_35247,(0),null);
var pmask_35249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33826_35247,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_35248,"$ = ",pmask_35249,";");


var G__35250 = seq__33816_35243;
var G__35251 = chunk__33817_35244;
var G__35252 = count__33818_35245;
var G__35253 = (i__33819_35246 + (1));
seq__33816_35243 = G__35250;
chunk__33817_35244 = G__35251;
count__33818_35245 = G__35252;
i__33819_35246 = G__35253;
continue;
} else {
var temp__5735__auto___35254 = cljs.core.seq(seq__33816_35243);
if(temp__5735__auto___35254){
var seq__33816_35255__$1 = temp__5735__auto___35254;
if(cljs.core.chunked_seq_QMARK_(seq__33816_35255__$1)){
var c__4556__auto___35256 = cljs.core.chunk_first(seq__33816_35255__$1);
var G__35257 = cljs.core.chunk_rest(seq__33816_35255__$1);
var G__35258 = c__4556__auto___35256;
var G__35259 = cljs.core.count(c__4556__auto___35256);
var G__35260 = (0);
seq__33816_35243 = G__35257;
chunk__33817_35244 = G__35258;
count__33818_35245 = G__35259;
i__33819_35246 = G__35260;
continue;
} else {
var vec__33829_35261 = cljs.core.first(seq__33816_35255__$1);
var pno_35262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33829_35261,(0),null);
var pmask_35263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33829_35261,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_35262,"$ = ",pmask_35263,";");


var G__35264 = cljs.core.next(seq__33816_35255__$1);
var G__35265 = null;
var G__35266 = (0);
var G__35267 = (0);
seq__33816_35243 = G__35264;
chunk__33817_35244 = G__35265;
count__33818_35245 = G__35266;
i__33819_35246 = G__35267;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__33832){
var map__33833 = p__33832;
var map__33833__$1 = (((((!((map__33833 == null))))?(((((map__33833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33833):map__33833);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33833__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33833__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33833__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33833__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33833__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__33839){
var map__33840 = p__33839;
var map__33840__$1 = (((((!((map__33840 == null))))?(((((map__33840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33840):map__33840);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33840__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33840__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33840__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33840__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33840__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__33847 = cljs.core.seq(table);
var chunk__33848 = null;
var count__33849 = (0);
var i__33850 = (0);
while(true){
if((i__33850 < count__33849)){
var vec__33857 = chunk__33848.cljs$core$IIndexed$_nth$arity$2(null,i__33850);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33857,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33857,(1),null);
var ns_35272 = cljs.core.namespace(sym);
var name_35273 = cljs.core.name(sym);
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


var G__35280 = seq__33847;
var G__35281 = chunk__33848;
var G__35282 = count__33849;
var G__35283 = (i__33850 + (1));
seq__33847 = G__35280;
chunk__33848 = G__35281;
count__33849 = G__35282;
i__33850 = G__35283;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33847);
if(temp__5735__auto__){
var seq__33847__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33847__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33847__$1);
var G__35285 = cljs.core.chunk_rest(seq__33847__$1);
var G__35286 = c__4556__auto__;
var G__35287 = cljs.core.count(c__4556__auto__);
var G__35288 = (0);
seq__33847 = G__35285;
chunk__33848 = G__35286;
count__33849 = G__35287;
i__33850 = G__35288;
continue;
} else {
var vec__33860 = cljs.core.first(seq__33847__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33860,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33860,(1),null);
var ns_35289 = cljs.core.namespace(sym);
var name_35290 = cljs.core.name(sym);
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


var G__35291 = cljs.core.next(seq__33847__$1);
var G__35292 = null;
var G__35293 = (0);
var G__35294 = (0);
seq__33847 = G__35291;
chunk__33848 = G__35292;
count__33849 = G__35293;
i__33850 = G__35294;
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
var G__33864 = arguments.length;
switch (G__33864) {
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
var k_35296 = cljs.core.first(ks);
var vec__33865_35297 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_35296);
var top_35298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33865_35297,(0),null);
var prefix_SINGLEQUOTE__35299 = vec__33865_35297;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_35296)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__35299) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_35298)) || (cljs.core.contains_QMARK_(known_externs,top_35298)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__35299)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_35298);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__35299)),";");
}
} else {
}

var m_35300 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_35296);
if(cljs.core.empty_QMARK_(m_35300)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__35299,m_35300,top_level,known_externs);
}

var G__35301 = cljs.core.next(ks);
ks = G__35301;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
