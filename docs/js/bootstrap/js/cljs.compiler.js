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
var map__33015 = s;
var map__33015__$1 = (((((!((map__33015 == null))))?(((((map__33015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33015):map__33015);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33015__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33015__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__33018 = info;
var map__33019 = G__33018;
var map__33019__$1 = (((((!((map__33019 == null))))?(((((map__33019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33019.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33019):map__33019);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33019__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__33018__$1 = G__33018;
while(true){
var d__$2 = d__$1;
var map__33024 = G__33018__$1;
var map__33024__$1 = (((((!((map__33024 == null))))?(((((map__33024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33024):map__33024);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33024__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__33868 = (d__$2 + (1));
var G__33869 = shadow__$2;
d__$1 = G__33868;
G__33018__$1 = G__33869;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__33043){
var map__33045 = p__33043;
var map__33045__$1 = (((((!((map__33045 == null))))?(((((map__33045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33045):map__33045);
var name_var = map__33045__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33045__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33045__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__33058 = info;
var map__33058__$1 = (((((!((map__33058 == null))))?(((((map__33058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33058):map__33058);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33058__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33058__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__33078 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__33078) : cljs.compiler.munge.call(null,G__33078));
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
var seq__33086_33896 = cljs.core.seq(s);
var chunk__33087_33897 = null;
var count__33088_33898 = (0);
var i__33089_33899 = (0);
while(true){
if((i__33089_33899 < count__33088_33898)){
var c_33902 = chunk__33087_33897.cljs$core$IIndexed$_nth$arity$2(null,i__33089_33899);
sb.append(cljs.compiler.escape_char(c_33902));


var G__33905 = seq__33086_33896;
var G__33906 = chunk__33087_33897;
var G__33907 = count__33088_33898;
var G__33908 = (i__33089_33899 + (1));
seq__33086_33896 = G__33905;
chunk__33087_33897 = G__33906;
count__33088_33898 = G__33907;
i__33089_33899 = G__33908;
continue;
} else {
var temp__5735__auto___33909 = cljs.core.seq(seq__33086_33896);
if(temp__5735__auto___33909){
var seq__33086_33910__$1 = temp__5735__auto___33909;
if(cljs.core.chunked_seq_QMARK_(seq__33086_33910__$1)){
var c__4556__auto___33913 = cljs.core.chunk_first(seq__33086_33910__$1);
var G__33914 = cljs.core.chunk_rest(seq__33086_33910__$1);
var G__33915 = c__4556__auto___33913;
var G__33916 = cljs.core.count(c__4556__auto___33913);
var G__33917 = (0);
seq__33086_33896 = G__33914;
chunk__33087_33897 = G__33915;
count__33088_33898 = G__33916;
i__33089_33899 = G__33917;
continue;
} else {
var c_33918 = cljs.core.first(seq__33086_33910__$1);
sb.append(cljs.compiler.escape_char(c_33918));


var G__33919 = cljs.core.next(seq__33086_33910__$1);
var G__33920 = null;
var G__33921 = (0);
var G__33922 = (0);
seq__33086_33896 = G__33919;
chunk__33087_33897 = G__33920;
count__33088_33898 = G__33921;
i__33089_33899 = G__33922;
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
var map__33093_33928 = env_33927;
var map__33093_33929__$1 = (((((!((map__33093_33928 == null))))?(((((map__33093_33928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33093_33928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33093_33928):map__33093_33928);
var line_33930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33093_33929__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33093_33929__$1,new cljs.core.Keyword(null,"column","column",2078222095));
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_33930 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_33931)?(column_33931 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__33106 = arguments.length;
switch (G__33106) {
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
var len__4736__auto___33939 = arguments.length;
var i__4737__auto___33940 = (0);
while(true){
if((i__4737__auto___33940 < len__4736__auto___33939)){
args_arr__4757__auto__.push((arguments[i__4737__auto___33940]));

var G__33941 = (i__4737__auto___33940 + (1));
i__4737__auto___33940 = G__33941;
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
var s_33943 = (function (){var G__33107 = a;
if((!(typeof a === 'string'))){
return G__33107.toString();
} else {
return G__33107;
}
})();
var temp__5739__auto___33944 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___33944 == null)){
} else {
var sm_data_33945 = temp__5739__auto___33944;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_33945,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__33098_SHARP_){
return (p1__33098_SHARP_ + s_33943.length);
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

var seq__33108 = cljs.core.seq(xs);
var chunk__33109 = null;
var count__33110 = (0);
var i__33111 = (0);
while(true){
if((i__33111 < count__33110)){
var x = chunk__33109.cljs$core$IIndexed$_nth$arity$2(null,i__33111);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__33952 = seq__33108;
var G__33953 = chunk__33109;
var G__33954 = count__33110;
var G__33955 = (i__33111 + (1));
seq__33108 = G__33952;
chunk__33109 = G__33953;
count__33110 = G__33954;
i__33111 = G__33955;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33108);
if(temp__5735__auto__){
var seq__33108__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33108__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33108__$1);
var G__33956 = cljs.core.chunk_rest(seq__33108__$1);
var G__33957 = c__4556__auto__;
var G__33958 = cljs.core.count(c__4556__auto__);
var G__33959 = (0);
seq__33108 = G__33956;
chunk__33109 = G__33957;
count__33110 = G__33958;
i__33111 = G__33959;
continue;
} else {
var x = cljs.core.first(seq__33108__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__33960 = cljs.core.next(seq__33108__$1);
var G__33961 = null;
var G__33962 = (0);
var G__33963 = (0);
seq__33108 = G__33960;
chunk__33109 = G__33961;
count__33110 = G__33962;
i__33111 = G__33963;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq33100){
var G__33101 = cljs.core.first(seq33100);
var seq33100__$1 = cljs.core.next(seq33100);
var G__33102 = cljs.core.first(seq33100__$1);
var seq33100__$2 = cljs.core.next(seq33100__$1);
var G__33103 = cljs.core.first(seq33100__$2);
var seq33100__$3 = cljs.core.next(seq33100__$2);
var G__33104 = cljs.core.first(seq33100__$3);
var seq33100__$4 = cljs.core.next(seq33100__$3);
var G__33105 = cljs.core.first(seq33100__$4);
var seq33100__$5 = cljs.core.next(seq33100__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33101,G__33102,G__33103,G__33104,G__33105,seq33100__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__33115){
var map__33117 = p__33115;
var map__33117__$1 = (((((!((map__33117 == null))))?(((((map__33117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33117):map__33117);
var m = map__33117__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33117__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__33126 = arguments.length;
switch (G__33126) {
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
var len__4736__auto___33971 = arguments.length;
var i__4737__auto___33972 = (0);
while(true){
if((i__4737__auto___33972 < len__4736__auto___33971)){
args_arr__4757__auto__.push((arguments[i__4737__auto___33972]));

var G__33973 = (i__4737__auto___33972 + (1));
i__4737__auto___33972 = G__33973;
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

var seq__33129_33977 = cljs.core.seq(xs);
var chunk__33130_33978 = null;
var count__33131_33979 = (0);
var i__33132_33980 = (0);
while(true){
if((i__33132_33980 < count__33131_33979)){
var x_33981 = chunk__33130_33978.cljs$core$IIndexed$_nth$arity$2(null,i__33132_33980);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_33981);


var G__33983 = seq__33129_33977;
var G__33984 = chunk__33130_33978;
var G__33985 = count__33131_33979;
var G__33986 = (i__33132_33980 + (1));
seq__33129_33977 = G__33983;
chunk__33130_33978 = G__33984;
count__33131_33979 = G__33985;
i__33132_33980 = G__33986;
continue;
} else {
var temp__5735__auto___33988 = cljs.core.seq(seq__33129_33977);
if(temp__5735__auto___33988){
var seq__33129_33989__$1 = temp__5735__auto___33988;
if(cljs.core.chunked_seq_QMARK_(seq__33129_33989__$1)){
var c__4556__auto___33991 = cljs.core.chunk_first(seq__33129_33989__$1);
var G__33992 = cljs.core.chunk_rest(seq__33129_33989__$1);
var G__33993 = c__4556__auto___33991;
var G__33994 = cljs.core.count(c__4556__auto___33991);
var G__33995 = (0);
seq__33129_33977 = G__33992;
chunk__33130_33978 = G__33993;
count__33131_33979 = G__33994;
i__33132_33980 = G__33995;
continue;
} else {
var x_33996 = cljs.core.first(seq__33129_33989__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_33996);


var G__33997 = cljs.core.next(seq__33129_33989__$1);
var G__33998 = null;
var G__33999 = (0);
var G__34000 = (0);
seq__33129_33977 = G__33997;
chunk__33130_33978 = G__33998;
count__33131_33979 = G__33999;
i__33132_33980 = G__34000;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq33120){
var G__33121 = cljs.core.first(seq33120);
var seq33120__$1 = cljs.core.next(seq33120);
var G__33122 = cljs.core.first(seq33120__$1);
var seq33120__$2 = cljs.core.next(seq33120__$1);
var G__33123 = cljs.core.first(seq33120__$2);
var seq33120__$3 = cljs.core.next(seq33120__$2);
var G__33124 = cljs.core.first(seq33120__$3);
var seq33120__$4 = cljs.core.next(seq33120__$3);
var G__33125 = cljs.core.first(seq33120__$4);
var seq33120__$5 = cljs.core.next(seq33120__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33121,G__33122,G__33123,G__33124,G__33125,seq33120__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33134_34002 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33135_34003 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33136_34004 = true;
var _STAR_print_fn_STAR__temp_val__33137_34005 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33136_34004);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33137_34005);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33135_34003);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33134_34002);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__33138 = cljs.core.get_global_hierarchy;
return (fexpr__33138.cljs$core$IFn$_invoke$arity$0 ? fexpr__33138.cljs$core$IFn$_invoke$arity$0() : fexpr__33138.call(null));
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
var vec__33152 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33152,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33152,(1),null);
var G__33155 = ns;
var G__33156 = name;
var G__33157 = (function (){
var G__33158 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__33158) : cljs.compiler.emit_constant.call(null,G__33158));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__33155,G__33156,G__33157) : cljs.compiler.emit_record_value.call(null,G__33155,G__33156,G__33157));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__33160 = cljs.core.keys(x);
var G__33161 = cljs.core.vals(x);
var G__33162 = cljs.compiler.emit_constants_comma_sep;
var G__33163 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__33160,G__33161,G__33162,G__33163) : cljs.compiler.emit_map.call(null,G__33160,G__33161,G__33162,G__33163));
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
var G__33164 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__33165 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__33164,G__33165) : cljs.compiler.emit_with_meta.call(null,G__33164,G__33165));
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
var vec__33167 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33167,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33167,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33167,(2),null);
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
var G__33172 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__33172) : x.call(null,G__33172));
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
var G__33173 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__33173) : x.call(null,G__33173));
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
var G__33179 = items;
var G__33180 = (function (p1__33178_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__33178_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__33179,G__33180) : cljs.compiler.emit_js_object.call(null,G__33179,G__33180));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__33183){
var map__33184 = p__33183;
var map__33184__$1 = (((((!((map__33184 == null))))?(((((map__33184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33184):map__33184);
var ast = map__33184__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33184__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33184__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33184__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__33186 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__33186__$1 = (((((!((map__33186 == null))))?(((((map__33186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33186):map__33186);
var cenv = map__33186__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33186__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__33192 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__33196 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__33196) : cljs.compiler.es5_GT__EQ_.call(null,G__33196));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__33192,cljs.analyzer.es5_allowed);
} else {
return G__33192;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__33197 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__33197,reserved);
} else {
return G__33197;
}
})();
var env__33008__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__33198_34036 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__33198_34037__$1 = (((G__33198_34036 instanceof cljs.core.Keyword))?G__33198_34036.fqn:null);
switch (G__33198_34037__$1) {
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__33199){
var map__33200 = p__33199;
var map__33200__$1 = (((((!((map__33200 == null))))?(((((map__33200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33200):map__33200);
var arg = map__33200__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33200__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33200__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33200__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33200__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__33202 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__33202__$1 = (((((!((map__33202 == null))))?(((((map__33202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33202):map__33202);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33202__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__33205){
var map__33206 = p__33205;
var map__33206__$1 = (((((!((map__33206 == null))))?(((((map__33206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33206):map__33206);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33206__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33206__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33206__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__33208_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33208_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__33209 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__33209) : comma_sep.call(null,G__33209));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__33210 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__33210) : comma_sep.call(null,G__33210));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__33212){
var map__33213 = p__33212;
var map__33213__$1 = (((((!((map__33213 == null))))?(((((map__33213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33213):map__33213);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33213__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33213__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33213__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__33216){
var map__33217 = p__33216;
var map__33217__$1 = (((((!((map__33217 == null))))?(((((map__33217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33217):map__33217);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33217__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__33219_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__33219_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__33223 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__33223) : comma_sep.call(null,G__33223));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__33224){
var map__33225 = p__33224;
var map__33225__$1 = (((((!((map__33225 == null))))?(((((map__33225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33225):map__33225);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33225__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33225__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5735__auto___34061 = cljs.core.seq(items);
if(temp__5735__auto___34061){
var items_34062__$1 = temp__5735__auto___34061;
var vec__33231_34063 = items_34062__$1;
var seq__33232_34064 = cljs.core.seq(vec__33231_34063);
var first__33233_34065 = cljs.core.first(seq__33232_34064);
var seq__33232_34066__$1 = cljs.core.next(seq__33232_34064);
var vec__33234_34067 = first__33233_34065;
var k_34068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33234_34067,(0),null);
var v_34069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33234_34067,(1),null);
var r_34070 = seq__33232_34066__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_34068),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_34069) : emit_js_object_val.call(null,v_34069)));

var seq__33240_34071 = cljs.core.seq(r_34070);
var chunk__33241_34072 = null;
var count__33242_34073 = (0);
var i__33243_34074 = (0);
while(true){
if((i__33243_34074 < count__33242_34073)){
var vec__33250_34075 = chunk__33241_34072.cljs$core$IIndexed$_nth$arity$2(null,i__33243_34074);
var k_34076__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33250_34075,(0),null);
var v_34077__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33250_34075,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_34076__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_34077__$1) : emit_js_object_val.call(null,v_34077__$1)));


var G__34078 = seq__33240_34071;
var G__34079 = chunk__33241_34072;
var G__34080 = count__33242_34073;
var G__34081 = (i__33243_34074 + (1));
seq__33240_34071 = G__34078;
chunk__33241_34072 = G__34079;
count__33242_34073 = G__34080;
i__33243_34074 = G__34081;
continue;
} else {
var temp__5735__auto___34082__$1 = cljs.core.seq(seq__33240_34071);
if(temp__5735__auto___34082__$1){
var seq__33240_34086__$1 = temp__5735__auto___34082__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33240_34086__$1)){
var c__4556__auto___34087 = cljs.core.chunk_first(seq__33240_34086__$1);
var G__34088 = cljs.core.chunk_rest(seq__33240_34086__$1);
var G__34089 = c__4556__auto___34087;
var G__34090 = cljs.core.count(c__4556__auto___34087);
var G__34091 = (0);
seq__33240_34071 = G__34088;
chunk__33241_34072 = G__34089;
count__33242_34073 = G__34090;
i__33243_34074 = G__34091;
continue;
} else {
var vec__33255_34092 = cljs.core.first(seq__33240_34086__$1);
var k_34093__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33255_34092,(0),null);
var v_34094__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33255_34092,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_34093__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_34094__$1) : emit_js_object_val.call(null,v_34094__$1)));


var G__34096 = cljs.core.next(seq__33240_34086__$1);
var G__34097 = null;
var G__34098 = (0);
var G__34099 = (0);
seq__33240_34071 = G__34096;
chunk__33241_34072 = G__34097;
count__33242_34073 = G__34098;
i__33243_34074 = G__34099;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__33268){
var map__33269 = p__33268;
var map__33269__$1 = (((((!((map__33269 == null))))?(((((map__33269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33269):map__33269);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33269__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33269__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33269__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__33281){
var map__33282 = p__33281;
var map__33282__$1 = (((((!((map__33282 == null))))?(((((map__33282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33282):map__33282);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33282__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33282__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__33284 = cljs.analyzer.unwrap_quote(expr);
var map__33284__$1 = (((((!((map__33284 == null))))?(((((map__33284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33284):map__33284);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33284__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33284__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33284__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__33286 = cljs.analyzer.unwrap_quote(expr);
var map__33286__$1 = (((((!((map__33286 == null))))?(((((map__33286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33286):map__33286);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33286__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33286__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33286__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__33290 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__33290.cljs$core$IFn$_invoke$arity$1 ? fexpr__33290.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__33290.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__33291){
var map__33292 = p__33291;
var map__33292__$1 = (((((!((map__33292 == null))))?(((((map__33292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33292):map__33292);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33292__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33292__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33292__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33292__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33292__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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

var seq__33301_34136 = cljs.core.seq(nodes);
var chunk__33302_34137 = null;
var count__33303_34138 = (0);
var i__33304_34139 = (0);
while(true){
if((i__33304_34139 < count__33303_34138)){
var map__33321_34141 = chunk__33302_34137.cljs$core$IIndexed$_nth$arity$2(null,i__33304_34139);
var map__33321_34142__$1 = (((((!((map__33321_34141 == null))))?(((((map__33321_34141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33321_34141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33321_34141):map__33321_34141);
var ts_34143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33321_34142__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__33322_34144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33321_34142__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__33322_34145__$1 = (((((!((map__33322_34144 == null))))?(((((map__33322_34144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33322_34144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33322_34144):map__33322_34144);
var then_34146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33322_34145__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__33325_34147 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_34143));
var chunk__33326_34148 = null;
var count__33327_34149 = (0);
var i__33328_34150 = (0);
while(true){
if((i__33328_34150 < count__33327_34149)){
var test_34151 = chunk__33326_34148.cljs$core$IIndexed$_nth$arity$2(null,i__33328_34150);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_34151,":");


var G__34152 = seq__33325_34147;
var G__34153 = chunk__33326_34148;
var G__34154 = count__33327_34149;
var G__34155 = (i__33328_34150 + (1));
seq__33325_34147 = G__34152;
chunk__33326_34148 = G__34153;
count__33327_34149 = G__34154;
i__33328_34150 = G__34155;
continue;
} else {
var temp__5735__auto___34156 = cljs.core.seq(seq__33325_34147);
if(temp__5735__auto___34156){
var seq__33325_34158__$1 = temp__5735__auto___34156;
if(cljs.core.chunked_seq_QMARK_(seq__33325_34158__$1)){
var c__4556__auto___34159 = cljs.core.chunk_first(seq__33325_34158__$1);
var G__34160 = cljs.core.chunk_rest(seq__33325_34158__$1);
var G__34161 = c__4556__auto___34159;
var G__34162 = cljs.core.count(c__4556__auto___34159);
var G__34163 = (0);
seq__33325_34147 = G__34160;
chunk__33326_34148 = G__34161;
count__33327_34149 = G__34162;
i__33328_34150 = G__34163;
continue;
} else {
var test_34164 = cljs.core.first(seq__33325_34158__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_34164,":");


var G__34165 = cljs.core.next(seq__33325_34158__$1);
var G__34166 = null;
var G__34167 = (0);
var G__34168 = (0);
seq__33325_34147 = G__34165;
chunk__33326_34148 = G__34166;
count__33327_34149 = G__34167;
i__33328_34150 = G__34168;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_34146);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_34146);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__34169 = seq__33301_34136;
var G__34170 = chunk__33302_34137;
var G__34171 = count__33303_34138;
var G__34172 = (i__33304_34139 + (1));
seq__33301_34136 = G__34169;
chunk__33302_34137 = G__34170;
count__33303_34138 = G__34171;
i__33304_34139 = G__34172;
continue;
} else {
var temp__5735__auto___34174 = cljs.core.seq(seq__33301_34136);
if(temp__5735__auto___34174){
var seq__33301_34175__$1 = temp__5735__auto___34174;
if(cljs.core.chunked_seq_QMARK_(seq__33301_34175__$1)){
var c__4556__auto___34176 = cljs.core.chunk_first(seq__33301_34175__$1);
var G__34178 = cljs.core.chunk_rest(seq__33301_34175__$1);
var G__34179 = c__4556__auto___34176;
var G__34180 = cljs.core.count(c__4556__auto___34176);
var G__34181 = (0);
seq__33301_34136 = G__34178;
chunk__33302_34137 = G__34179;
count__33303_34138 = G__34180;
i__33304_34139 = G__34181;
continue;
} else {
var map__33329_34182 = cljs.core.first(seq__33301_34175__$1);
var map__33329_34183__$1 = (((((!((map__33329_34182 == null))))?(((((map__33329_34182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33329_34182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33329_34182):map__33329_34182);
var ts_34184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33329_34183__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__33330_34185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33329_34183__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__33330_34186__$1 = (((((!((map__33330_34185 == null))))?(((((map__33330_34185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33330_34185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33330_34185):map__33330_34185);
var then_34187 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33330_34186__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__33333_34188 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_34184));
var chunk__33334_34189 = null;
var count__33335_34190 = (0);
var i__33336_34191 = (0);
while(true){
if((i__33336_34191 < count__33335_34190)){
var test_34192 = chunk__33334_34189.cljs$core$IIndexed$_nth$arity$2(null,i__33336_34191);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_34192,":");


var G__34193 = seq__33333_34188;
var G__34194 = chunk__33334_34189;
var G__34195 = count__33335_34190;
var G__34196 = (i__33336_34191 + (1));
seq__33333_34188 = G__34193;
chunk__33334_34189 = G__34194;
count__33335_34190 = G__34195;
i__33336_34191 = G__34196;
continue;
} else {
var temp__5735__auto___34198__$1 = cljs.core.seq(seq__33333_34188);
if(temp__5735__auto___34198__$1){
var seq__33333_34200__$1 = temp__5735__auto___34198__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33333_34200__$1)){
var c__4556__auto___34201 = cljs.core.chunk_first(seq__33333_34200__$1);
var G__34202 = cljs.core.chunk_rest(seq__33333_34200__$1);
var G__34203 = c__4556__auto___34201;
var G__34204 = cljs.core.count(c__4556__auto___34201);
var G__34205 = (0);
seq__33333_34188 = G__34202;
chunk__33334_34189 = G__34203;
count__33335_34190 = G__34204;
i__33336_34191 = G__34205;
continue;
} else {
var test_34206 = cljs.core.first(seq__33333_34200__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_34206,":");


var G__34207 = cljs.core.next(seq__33333_34200__$1);
var G__34208 = null;
var G__34209 = (0);
var G__34210 = (0);
seq__33333_34188 = G__34207;
chunk__33334_34189 = G__34208;
count__33335_34190 = G__34209;
i__33336_34191 = G__34210;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_34187);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_34187);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__34211 = cljs.core.next(seq__33301_34175__$1);
var G__34212 = null;
var G__34213 = (0);
var G__34214 = (0);
seq__33301_34136 = G__34211;
chunk__33302_34137 = G__34212;
count__33303_34138 = G__34213;
i__33304_34139 = G__34214;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__33337){
var map__33338 = p__33337;
var map__33338__$1 = (((((!((map__33338 == null))))?(((((map__33338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33338):map__33338);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33338__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33338__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33343 = env;
var G__33344 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__33343,G__33344) : cljs.compiler.resolve_type.call(null,G__33343,G__33344));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__33345 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33345,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33345,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__33340_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__33340_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__33340_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__33348 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__33348,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__33348;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__33351 = env;
var G__33352 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__33351,G__33352) : cljs.compiler.resolve_type.call(null,G__33351,G__33352));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33358_SHARP_){
return cljs.compiler.resolve_type(env,p1__33358_SHARP_);
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
var G__33372 = arguments.length;
switch (G__33372) {
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
var vec__33380 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33370_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__33370_SHARP_);
} else {
return p1__33370_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__33381 = cljs.core.seq(vec__33380);
var first__33382 = cljs.core.first(seq__33381);
var seq__33381__$1 = cljs.core.next(seq__33381);
var x = first__33382;
var ys = seq__33381__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__33383 = cljs.core.seq(ys);
var chunk__33384 = null;
var count__33385 = (0);
var i__33386 = (0);
while(true){
if((i__33386 < count__33385)){
var next_line = chunk__33384.cljs$core$IIndexed$_nth$arity$2(null,i__33386);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__34250 = seq__33383;
var G__34251 = chunk__33384;
var G__34252 = count__33385;
var G__34253 = (i__33386 + (1));
seq__33383 = G__34250;
chunk__33384 = G__34251;
count__33385 = G__34252;
i__33386 = G__34253;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33383);
if(temp__5735__auto__){
var seq__33383__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33383__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33383__$1);
var G__34254 = cljs.core.chunk_rest(seq__33383__$1);
var G__34255 = c__4556__auto__;
var G__34256 = cljs.core.count(c__4556__auto__);
var G__34257 = (0);
seq__33383 = G__34254;
chunk__33384 = G__34255;
count__33385 = G__34256;
i__33386 = G__34257;
continue;
} else {
var next_line = cljs.core.first(seq__33383__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__34259 = cljs.core.next(seq__33383__$1);
var G__34260 = null;
var G__34261 = (0);
var G__34262 = (0);
seq__33383 = G__34259;
chunk__33384 = G__34260;
count__33385 = G__34261;
i__33386 = G__34262;
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

var seq__33388_34264 = cljs.core.seq(docs__$2);
var chunk__33389_34265 = null;
var count__33390_34266 = (0);
var i__33391_34267 = (0);
while(true){
if((i__33391_34267 < count__33390_34266)){
var e_34272 = chunk__33389_34265.cljs$core$IIndexed$_nth$arity$2(null,i__33391_34267);
if(cljs.core.truth_(e_34272)){
print_comment_lines(e_34272);
} else {
}


var G__34275 = seq__33388_34264;
var G__34276 = chunk__33389_34265;
var G__34277 = count__33390_34266;
var G__34278 = (i__33391_34267 + (1));
seq__33388_34264 = G__34275;
chunk__33389_34265 = G__34276;
count__33390_34266 = G__34277;
i__33391_34267 = G__34278;
continue;
} else {
var temp__5735__auto___34279 = cljs.core.seq(seq__33388_34264);
if(temp__5735__auto___34279){
var seq__33388_34280__$1 = temp__5735__auto___34279;
if(cljs.core.chunked_seq_QMARK_(seq__33388_34280__$1)){
var c__4556__auto___34281 = cljs.core.chunk_first(seq__33388_34280__$1);
var G__34282 = cljs.core.chunk_rest(seq__33388_34280__$1);
var G__34283 = c__4556__auto___34281;
var G__34284 = cljs.core.count(c__4556__auto___34281);
var G__34285 = (0);
seq__33388_34264 = G__34282;
chunk__33389_34265 = G__34283;
count__33390_34266 = G__34284;
i__33391_34267 = G__34285;
continue;
} else {
var e_34286 = cljs.core.first(seq__33388_34280__$1);
if(cljs.core.truth_(e_34286)){
print_comment_lines(e_34286);
} else {
}


var G__34290 = cljs.core.next(seq__33388_34280__$1);
var G__34291 = null;
var G__34292 = (0);
var G__34293 = (0);
seq__33388_34264 = G__34290;
chunk__33389_34265 = G__34291;
count__33390_34266 = G__34292;
i__33391_34267 = G__34293;
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
var and__4115__auto__ = cljs.core.some((function (p1__33394_SHARP_){
return goog.string.startsWith(p1__33394_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__33399){
var map__33400 = p__33399;
var map__33400__$1 = (((((!((map__33400 == null))))?(((((map__33400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33400):map__33400);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__33402){
var map__33403 = p__33402;
var map__33403__$1 = (((((!((map__33403 == null))))?(((((map__33403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33403):map__33403);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33403__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33403__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33403__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__33407_34311 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__33408_34312 = null;
var count__33409_34313 = (0);
var i__33410_34314 = (0);
while(true){
if((i__33410_34314 < count__33409_34313)){
var vec__33417_34315 = chunk__33408_34312.cljs$core$IIndexed$_nth$arity$2(null,i__33410_34314);
var i_34316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33417_34315,(0),null);
var param_34317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33417_34315,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_34317);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__34326 = seq__33407_34311;
var G__34327 = chunk__33408_34312;
var G__34328 = count__33409_34313;
var G__34329 = (i__33410_34314 + (1));
seq__33407_34311 = G__34326;
chunk__33408_34312 = G__34327;
count__33409_34313 = G__34328;
i__33410_34314 = G__34329;
continue;
} else {
var temp__5735__auto___34331 = cljs.core.seq(seq__33407_34311);
if(temp__5735__auto___34331){
var seq__33407_34333__$1 = temp__5735__auto___34331;
if(cljs.core.chunked_seq_QMARK_(seq__33407_34333__$1)){
var c__4556__auto___34334 = cljs.core.chunk_first(seq__33407_34333__$1);
var G__34335 = cljs.core.chunk_rest(seq__33407_34333__$1);
var G__34336 = c__4556__auto___34334;
var G__34337 = cljs.core.count(c__4556__auto___34334);
var G__34338 = (0);
seq__33407_34311 = G__34335;
chunk__33408_34312 = G__34336;
count__33409_34313 = G__34337;
i__33410_34314 = G__34338;
continue;
} else {
var vec__33420_34340 = cljs.core.first(seq__33407_34333__$1);
var i_34341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33420_34340,(0),null);
var param_34342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33420_34340,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_34342);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__34347 = cljs.core.next(seq__33407_34333__$1);
var G__34348 = null;
var G__34349 = (0);
var G__34350 = (0);
seq__33407_34311 = G__34347;
chunk__33408_34312 = G__34348;
count__33409_34313 = G__34349;
i__33410_34314 = G__34350;
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

var seq__33423_34354 = cljs.core.seq(params);
var chunk__33424_34355 = null;
var count__33425_34356 = (0);
var i__33426_34357 = (0);
while(true){
if((i__33426_34357 < count__33425_34356)){
var param_34358 = chunk__33424_34355.cljs$core$IIndexed$_nth$arity$2(null,i__33426_34357);
cljs.compiler.emit(param_34358);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34358,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34360 = seq__33423_34354;
var G__34361 = chunk__33424_34355;
var G__34362 = count__33425_34356;
var G__34363 = (i__33426_34357 + (1));
seq__33423_34354 = G__34360;
chunk__33424_34355 = G__34361;
count__33425_34356 = G__34362;
i__33426_34357 = G__34363;
continue;
} else {
var temp__5735__auto___34364 = cljs.core.seq(seq__33423_34354);
if(temp__5735__auto___34364){
var seq__33423_34365__$1 = temp__5735__auto___34364;
if(cljs.core.chunked_seq_QMARK_(seq__33423_34365__$1)){
var c__4556__auto___34366 = cljs.core.chunk_first(seq__33423_34365__$1);
var G__34367 = cljs.core.chunk_rest(seq__33423_34365__$1);
var G__34368 = c__4556__auto___34366;
var G__34369 = cljs.core.count(c__4556__auto___34366);
var G__34370 = (0);
seq__33423_34354 = G__34367;
chunk__33424_34355 = G__34368;
count__33425_34356 = G__34369;
i__33426_34357 = G__34370;
continue;
} else {
var param_34371 = cljs.core.first(seq__33423_34365__$1);
cljs.compiler.emit(param_34371);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34371,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34372 = cljs.core.next(seq__33423_34365__$1);
var G__34373 = null;
var G__34374 = (0);
var G__34375 = (0);
seq__33423_34354 = G__34372;
chunk__33424_34355 = G__34373;
count__33425_34356 = G__34374;
i__33426_34357 = G__34375;
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

var seq__33427_34379 = cljs.core.seq(params);
var chunk__33428_34380 = null;
var count__33429_34381 = (0);
var i__33430_34382 = (0);
while(true){
if((i__33430_34382 < count__33429_34381)){
var param_34383 = chunk__33428_34380.cljs$core$IIndexed$_nth$arity$2(null,i__33430_34382);
cljs.compiler.emit(param_34383);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34383,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34384 = seq__33427_34379;
var G__34385 = chunk__33428_34380;
var G__34386 = count__33429_34381;
var G__34387 = (i__33430_34382 + (1));
seq__33427_34379 = G__34384;
chunk__33428_34380 = G__34385;
count__33429_34381 = G__34386;
i__33430_34382 = G__34387;
continue;
} else {
var temp__5735__auto___34389 = cljs.core.seq(seq__33427_34379);
if(temp__5735__auto___34389){
var seq__33427_34393__$1 = temp__5735__auto___34389;
if(cljs.core.chunked_seq_QMARK_(seq__33427_34393__$1)){
var c__4556__auto___34394 = cljs.core.chunk_first(seq__33427_34393__$1);
var G__34395 = cljs.core.chunk_rest(seq__33427_34393__$1);
var G__34396 = c__4556__auto___34394;
var G__34397 = cljs.core.count(c__4556__auto___34394);
var G__34398 = (0);
seq__33427_34379 = G__34395;
chunk__33428_34380 = G__34396;
count__33429_34381 = G__34397;
i__33430_34382 = G__34398;
continue;
} else {
var param_34399 = cljs.core.first(seq__33427_34393__$1);
cljs.compiler.emit(param_34399);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34399,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34400 = cljs.core.next(seq__33427_34393__$1);
var G__34401 = null;
var G__34402 = (0);
var G__34403 = (0);
seq__33427_34379 = G__34400;
chunk__33428_34380 = G__34401;
count__33429_34381 = G__34402;
i__33430_34382 = G__34403;
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


var G__34408 = seq__33431;
var G__34409 = chunk__33432;
var G__34410 = count__33433;
var G__34411 = (i__33434 + (1));
seq__33431 = G__34408;
chunk__33432 = G__34409;
count__33433 = G__34410;
i__33434 = G__34411;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33431);
if(temp__5735__auto__){
var seq__33431__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33431__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33431__$1);
var G__34414 = cljs.core.chunk_rest(seq__33431__$1);
var G__34415 = c__4556__auto__;
var G__34416 = cljs.core.count(c__4556__auto__);
var G__34417 = (0);
seq__33431 = G__34414;
chunk__33432 = G__34415;
count__33433 = G__34416;
i__33434 = G__34417;
continue;
} else {
var param = cljs.core.first(seq__33431__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34418 = cljs.core.next(seq__33431__$1);
var G__34419 = null;
var G__34420 = (0);
var G__34421 = (0);
seq__33431 = G__34418;
chunk__33432 = G__34419;
count__33433 = G__34420;
i__33434 = G__34421;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__33435){
var map__33436 = p__33435;
var map__33436__$1 = (((((!((map__33436 == null))))?(((((map__33436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33436):map__33436);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33436__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33436__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33436__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33436__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33436__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__33438){
var map__33439 = p__33438;
var map__33439__$1 = (((((!((map__33439 == null))))?(((((map__33439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33439):map__33439);
var f = map__33439__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33439__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
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

var name_34437__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_34438 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_34437__$1);
var delegate_name_34439 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_34438),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_34439," = function (");

var seq__33441_34441 = cljs.core.seq(params);
var chunk__33442_34442 = null;
var count__33443_34443 = (0);
var i__33444_34444 = (0);
while(true){
if((i__33444_34444 < count__33443_34443)){
var param_34445 = chunk__33442_34442.cljs$core$IIndexed$_nth$arity$2(null,i__33444_34444);
cljs.compiler.emit(param_34445);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34445,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34446 = seq__33441_34441;
var G__34447 = chunk__33442_34442;
var G__34448 = count__33443_34443;
var G__34449 = (i__33444_34444 + (1));
seq__33441_34441 = G__34446;
chunk__33442_34442 = G__34447;
count__33443_34443 = G__34448;
i__33444_34444 = G__34449;
continue;
} else {
var temp__5735__auto___34451 = cljs.core.seq(seq__33441_34441);
if(temp__5735__auto___34451){
var seq__33441_34453__$1 = temp__5735__auto___34451;
if(cljs.core.chunked_seq_QMARK_(seq__33441_34453__$1)){
var c__4556__auto___34454 = cljs.core.chunk_first(seq__33441_34453__$1);
var G__34455 = cljs.core.chunk_rest(seq__33441_34453__$1);
var G__34456 = c__4556__auto___34454;
var G__34457 = cljs.core.count(c__4556__auto___34454);
var G__34458 = (0);
seq__33441_34441 = G__34455;
chunk__33442_34442 = G__34456;
count__33443_34443 = G__34457;
i__33444_34444 = G__34458;
continue;
} else {
var param_34459 = cljs.core.first(seq__33441_34453__$1);
cljs.compiler.emit(param_34459);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34459,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34460 = cljs.core.next(seq__33441_34453__$1);
var G__34461 = null;
var G__34462 = (0);
var G__34463 = (0);
seq__33441_34441 = G__34460;
chunk__33442_34442 = G__34461;
count__33443_34443 = G__34462;
i__33444_34444 = G__34463;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_34438," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_34476 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_34476,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_34439,".call(this,");

var seq__33448_34477 = cljs.core.seq(params);
var chunk__33449_34478 = null;
var count__33450_34479 = (0);
var i__33451_34480 = (0);
while(true){
if((i__33451_34480 < count__33450_34479)){
var param_34481 = chunk__33449_34478.cljs$core$IIndexed$_nth$arity$2(null,i__33451_34480);
cljs.compiler.emit(param_34481);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34481,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34483 = seq__33448_34477;
var G__34484 = chunk__33449_34478;
var G__34485 = count__33450_34479;
var G__34486 = (i__33451_34480 + (1));
seq__33448_34477 = G__34483;
chunk__33449_34478 = G__34484;
count__33450_34479 = G__34485;
i__33451_34480 = G__34486;
continue;
} else {
var temp__5735__auto___34489 = cljs.core.seq(seq__33448_34477);
if(temp__5735__auto___34489){
var seq__33448_34490__$1 = temp__5735__auto___34489;
if(cljs.core.chunked_seq_QMARK_(seq__33448_34490__$1)){
var c__4556__auto___34491 = cljs.core.chunk_first(seq__33448_34490__$1);
var G__34493 = cljs.core.chunk_rest(seq__33448_34490__$1);
var G__34494 = c__4556__auto___34491;
var G__34495 = cljs.core.count(c__4556__auto___34491);
var G__34496 = (0);
seq__33448_34477 = G__34493;
chunk__33449_34478 = G__34494;
count__33450_34479 = G__34495;
i__33451_34480 = G__34496;
continue;
} else {
var param_34500 = cljs.core.first(seq__33448_34490__$1);
cljs.compiler.emit(param_34500);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_34500,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__34501 = cljs.core.next(seq__33448_34490__$1);
var G__34502 = null;
var G__34503 = (0);
var G__34504 = (0);
seq__33448_34477 = G__34501;
chunk__33449_34478 = G__34502;
count__33450_34479 = G__34503;
i__33451_34480 = G__34504;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34438,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_34438,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_34437__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34438,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_34439,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_34438,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__33008__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__33455){
var map__33456 = p__33455;
var map__33456__$1 = (((((!((map__33456 == null))))?(((((map__33456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33456):map__33456);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33456__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33456__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33456__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33456__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33456__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33456__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33456__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33456__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
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
var name_34516__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_34517 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_34516__$1);
var maxparams_34518 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_34519 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_34517),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_34520 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__33453_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__33453_SHARP_)));
}),cljs.core.seq(mmap_34519));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_34517," = null;");

var seq__33458_34526 = cljs.core.seq(ms_34520);
var chunk__33459_34527 = null;
var count__33460_34528 = (0);
var i__33461_34529 = (0);
while(true){
if((i__33461_34529 < count__33460_34528)){
var vec__33468_34530 = chunk__33459_34527.cljs$core$IIndexed$_nth$arity$2(null,i__33461_34529);
var n_34531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33468_34530,(0),null);
var meth_34532 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33468_34530,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_34531," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34532))){
cljs.compiler.emit_variadic_fn_method(meth_34532);
} else {
cljs.compiler.emit_fn_method(meth_34532);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__34536 = seq__33458_34526;
var G__34537 = chunk__33459_34527;
var G__34538 = count__33460_34528;
var G__34539 = (i__33461_34529 + (1));
seq__33458_34526 = G__34536;
chunk__33459_34527 = G__34537;
count__33460_34528 = G__34538;
i__33461_34529 = G__34539;
continue;
} else {
var temp__5735__auto___34547 = cljs.core.seq(seq__33458_34526);
if(temp__5735__auto___34547){
var seq__33458_34548__$1 = temp__5735__auto___34547;
if(cljs.core.chunked_seq_QMARK_(seq__33458_34548__$1)){
var c__4556__auto___34549 = cljs.core.chunk_first(seq__33458_34548__$1);
var G__34550 = cljs.core.chunk_rest(seq__33458_34548__$1);
var G__34551 = c__4556__auto___34549;
var G__34552 = cljs.core.count(c__4556__auto___34549);
var G__34553 = (0);
seq__33458_34526 = G__34550;
chunk__33459_34527 = G__34551;
count__33460_34528 = G__34552;
i__33461_34529 = G__34553;
continue;
} else {
var vec__33471_34554 = cljs.core.first(seq__33458_34548__$1);
var n_34555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33471_34554,(0),null);
var meth_34556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33471_34554,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_34555," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34556))){
cljs.compiler.emit_variadic_fn_method(meth_34556);
} else {
cljs.compiler.emit_fn_method(meth_34556);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__34558 = cljs.core.next(seq__33458_34548__$1);
var G__34559 = null;
var G__34560 = (0);
var G__34561 = (0);
seq__33458_34526 = G__34558;
chunk__33459_34527 = G__34559;
count__33460_34528 = G__34560;
i__33461_34529 = G__34561;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34517," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_34518),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_34518)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_34518));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__33474_34564 = cljs.core.seq(ms_34520);
var chunk__33475_34565 = null;
var count__33476_34566 = (0);
var i__33477_34567 = (0);
while(true){
if((i__33477_34567 < count__33476_34566)){
var vec__33487_34568 = chunk__33475_34565.cljs$core$IIndexed$_nth$arity$2(null,i__33477_34567);
var n_34569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487_34568,(0),null);
var meth_34570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33487_34568,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34570))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_34572 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_34572," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_34573 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_34572," = new cljs.core.IndexedSeq(",a_34573,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_34569,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_34518)),(((cljs.core.count(maxparams_34518) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_34572,");"], 0));
} else {
var pcnt_34576 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34570));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_34576,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_34569,".call(this",(((pcnt_34576 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_34576,maxparams_34518)),null,(1),null)),(2),null))),");");
}


var G__34582 = seq__33474_34564;
var G__34583 = chunk__33475_34565;
var G__34584 = count__33476_34566;
var G__34585 = (i__33477_34567 + (1));
seq__33474_34564 = G__34582;
chunk__33475_34565 = G__34583;
count__33476_34566 = G__34584;
i__33477_34567 = G__34585;
continue;
} else {
var temp__5735__auto___34586 = cljs.core.seq(seq__33474_34564);
if(temp__5735__auto___34586){
var seq__33474_34587__$1 = temp__5735__auto___34586;
if(cljs.core.chunked_seq_QMARK_(seq__33474_34587__$1)){
var c__4556__auto___34588 = cljs.core.chunk_first(seq__33474_34587__$1);
var G__34589 = cljs.core.chunk_rest(seq__33474_34587__$1);
var G__34590 = c__4556__auto___34588;
var G__34591 = cljs.core.count(c__4556__auto___34588);
var G__34592 = (0);
seq__33474_34564 = G__34589;
chunk__33475_34565 = G__34590;
count__33476_34566 = G__34591;
i__33477_34567 = G__34592;
continue;
} else {
var vec__33490_34593 = cljs.core.first(seq__33474_34587__$1);
var n_34594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33490_34593,(0),null);
var meth_34595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33490_34593,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34595))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_34598 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_34598," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_34599 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_34598," = new cljs.core.IndexedSeq(",a_34599,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_34594,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_34518)),(((cljs.core.count(maxparams_34518) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_34598,");"], 0));
} else {
var pcnt_34600 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34595));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_34600,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_34594,".call(this",(((pcnt_34600 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_34600,maxparams_34518)),null,(1),null)),(2),null))),");");
}


var G__34603 = cljs.core.next(seq__33474_34587__$1);
var G__34604 = null;
var G__34605 = (0);
var G__34606 = (0);
seq__33474_34564 = G__34603;
chunk__33475_34565 = G__34604;
count__33476_34566 = G__34605;
i__33477_34567 = G__34606;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_34607 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_34520)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_34607,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34517,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34517,".cljs$lang$applyTo = ",cljs.core.some((function (p1__33454_SHARP_){
var vec__33497 = p1__33454_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33497,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33497,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_34520),".cljs$lang$applyTo;");
} else {
}

var seq__33500_34613 = cljs.core.seq(ms_34520);
var chunk__33501_34614 = null;
var count__33502_34615 = (0);
var i__33503_34616 = (0);
while(true){
if((i__33503_34616 < count__33502_34615)){
var vec__33510_34617 = chunk__33501_34614.cljs$core$IIndexed$_nth$arity$2(null,i__33503_34616);
var n_34618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33510_34617,(0),null);
var meth_34619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33510_34617,(1),null);
var c_34620 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34619));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34619))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34517,".cljs$core$IFn$_invoke$arity$variadic = ",n_34618,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_34517,".cljs$core$IFn$_invoke$arity$",c_34620," = ",n_34618,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__34627 = seq__33500_34613;
var G__34628 = chunk__33501_34614;
var G__34629 = count__33502_34615;
var G__34630 = (i__33503_34616 + (1));
seq__33500_34613 = G__34627;
chunk__33501_34614 = G__34628;
count__33502_34615 = G__34629;
i__33503_34616 = G__34630;
continue;
} else {
var temp__5735__auto___34635 = cljs.core.seq(seq__33500_34613);
if(temp__5735__auto___34635){
var seq__33500_34636__$1 = temp__5735__auto___34635;
if(cljs.core.chunked_seq_QMARK_(seq__33500_34636__$1)){
var c__4556__auto___34637 = cljs.core.chunk_first(seq__33500_34636__$1);
var G__34638 = cljs.core.chunk_rest(seq__33500_34636__$1);
var G__34639 = c__4556__auto___34637;
var G__34640 = cljs.core.count(c__4556__auto___34637);
var G__34641 = (0);
seq__33500_34613 = G__34638;
chunk__33501_34614 = G__34639;
count__33502_34615 = G__34640;
i__33503_34616 = G__34641;
continue;
} else {
var vec__33513_34642 = cljs.core.first(seq__33500_34636__$1);
var n_34643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33513_34642,(0),null);
var meth_34644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33513_34642,(1),null);
var c_34646 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_34644));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_34644))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_34517,".cljs$core$IFn$_invoke$arity$variadic = ",n_34643,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_34517,".cljs$core$IFn$_invoke$arity$",c_34646," = ",n_34643,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__34649 = cljs.core.next(seq__33500_34636__$1);
var G__34650 = null;
var G__34651 = (0);
var G__34652 = (0);
seq__33500_34613 = G__34649;
chunk__33501_34614 = G__34650;
count__33502_34615 = G__34651;
i__33503_34616 = G__34652;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_34517,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__33516){
var map__33517 = p__33516;
var map__33517__$1 = (((((!((map__33517 == null))))?(((((map__33517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33517):map__33517);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33517__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33517__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33517__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__33519_34655 = cljs.core.seq(statements);
var chunk__33520_34656 = null;
var count__33521_34657 = (0);
var i__33522_34658 = (0);
while(true){
if((i__33522_34658 < count__33521_34657)){
var s_34660 = chunk__33520_34656.cljs$core$IIndexed$_nth$arity$2(null,i__33522_34658);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_34660);


var G__34661 = seq__33519_34655;
var G__34662 = chunk__33520_34656;
var G__34663 = count__33521_34657;
var G__34664 = (i__33522_34658 + (1));
seq__33519_34655 = G__34661;
chunk__33520_34656 = G__34662;
count__33521_34657 = G__34663;
i__33522_34658 = G__34664;
continue;
} else {
var temp__5735__auto___34665 = cljs.core.seq(seq__33519_34655);
if(temp__5735__auto___34665){
var seq__33519_34666__$1 = temp__5735__auto___34665;
if(cljs.core.chunked_seq_QMARK_(seq__33519_34666__$1)){
var c__4556__auto___34667 = cljs.core.chunk_first(seq__33519_34666__$1);
var G__34668 = cljs.core.chunk_rest(seq__33519_34666__$1);
var G__34669 = c__4556__auto___34667;
var G__34670 = cljs.core.count(c__4556__auto___34667);
var G__34671 = (0);
seq__33519_34655 = G__34668;
chunk__33520_34656 = G__34669;
count__33521_34657 = G__34670;
i__33522_34658 = G__34671;
continue;
} else {
var s_34672 = cljs.core.first(seq__33519_34666__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_34672);


var G__34673 = cljs.core.next(seq__33519_34666__$1);
var G__34674 = null;
var G__34675 = (0);
var G__34676 = (0);
seq__33519_34655 = G__34673;
chunk__33520_34656 = G__34674;
count__33521_34657 = G__34675;
i__33522_34658 = G__34676;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__33523){
var map__33524 = p__33523;
var map__33524__$1 = (((((!((map__33524 == null))))?(((((map__33524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33524):map__33524);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33524__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33524__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33524__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33524__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33524__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__33526,is_loop){
var map__33527 = p__33526;
var map__33527__$1 = (((((!((map__33527 == null))))?(((((map__33527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33527):map__33527);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33527__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33527__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33527__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__33529_34686 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__33530_34687 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__33530_34687);

try{var seq__33532_34688 = cljs.core.seq(bindings);
var chunk__33533_34689 = null;
var count__33534_34690 = (0);
var i__33535_34691 = (0);
while(true){
if((i__33535_34691 < count__33534_34690)){
var map__33544_34692 = chunk__33533_34689.cljs$core$IIndexed$_nth$arity$2(null,i__33535_34691);
var map__33544_34693__$1 = (((((!((map__33544_34692 == null))))?(((((map__33544_34692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33544_34692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33544_34692):map__33544_34692);
var binding_34694 = map__33544_34693__$1;
var init_34695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33544_34693__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_34694);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_34695,";");


var G__34696 = seq__33532_34688;
var G__34697 = chunk__33533_34689;
var G__34698 = count__33534_34690;
var G__34699 = (i__33535_34691 + (1));
seq__33532_34688 = G__34696;
chunk__33533_34689 = G__34697;
count__33534_34690 = G__34698;
i__33535_34691 = G__34699;
continue;
} else {
var temp__5735__auto___34704 = cljs.core.seq(seq__33532_34688);
if(temp__5735__auto___34704){
var seq__33532_34705__$1 = temp__5735__auto___34704;
if(cljs.core.chunked_seq_QMARK_(seq__33532_34705__$1)){
var c__4556__auto___34706 = cljs.core.chunk_first(seq__33532_34705__$1);
var G__34707 = cljs.core.chunk_rest(seq__33532_34705__$1);
var G__34708 = c__4556__auto___34706;
var G__34709 = cljs.core.count(c__4556__auto___34706);
var G__34710 = (0);
seq__33532_34688 = G__34707;
chunk__33533_34689 = G__34708;
count__33534_34690 = G__34709;
i__33535_34691 = G__34710;
continue;
} else {
var map__33546_34711 = cljs.core.first(seq__33532_34705__$1);
var map__33546_34712__$1 = (((((!((map__33546_34711 == null))))?(((((map__33546_34711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33546_34711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33546_34711):map__33546_34711);
var binding_34713 = map__33546_34712__$1;
var init_34714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33546_34712__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_34713);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_34714,";");


var G__34715 = cljs.core.next(seq__33532_34705__$1);
var G__34716 = null;
var G__34717 = (0);
var G__34718 = (0);
seq__33532_34688 = G__34715;
chunk__33533_34689 = G__34716;
count__33534_34690 = G__34717;
i__33535_34691 = G__34718;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__33529_34686);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__33549){
var map__33550 = p__33549;
var map__33550__$1 = (((((!((map__33550 == null))))?(((((map__33550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33550):map__33550);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33550__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33550__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33550__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___34727 = cljs.core.count(exprs);
var i_34728 = (0);
while(true){
if((i_34728 < n__4613__auto___34727)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_34728) : temps.call(null,i_34728))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_34728) : exprs.call(null,i_34728)),";");

var G__34733 = (i_34728 + (1));
i_34728 = G__34733;
continue;
} else {
}
break;
}

var n__4613__auto___34734 = cljs.core.count(exprs);
var i_34735 = (0);
while(true){
if((i_34735 < n__4613__auto___34734)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_34735) : params.call(null,i_34735)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_34735) : temps.call(null,i_34735)),";");

var G__34736 = (i_34735 + (1));
i_34735 = G__34736;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__33557){
var map__33558 = p__33557;
var map__33558__$1 = (((((!((map__33558 == null))))?(((((map__33558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33558):map__33558);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33558__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33558__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33558__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__33564_34737 = cljs.core.seq(bindings);
var chunk__33565_34738 = null;
var count__33566_34739 = (0);
var i__33567_34740 = (0);
while(true){
if((i__33567_34740 < count__33566_34739)){
var map__33577_34741 = chunk__33565_34738.cljs$core$IIndexed$_nth$arity$2(null,i__33567_34740);
var map__33577_34742__$1 = (((((!((map__33577_34741 == null))))?(((((map__33577_34741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33577_34741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33577_34741):map__33577_34741);
var binding_34743 = map__33577_34742__$1;
var init_34744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33577_34742__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_34743)," = ",init_34744,";");


var G__34746 = seq__33564_34737;
var G__34747 = chunk__33565_34738;
var G__34748 = count__33566_34739;
var G__34749 = (i__33567_34740 + (1));
seq__33564_34737 = G__34746;
chunk__33565_34738 = G__34747;
count__33566_34739 = G__34748;
i__33567_34740 = G__34749;
continue;
} else {
var temp__5735__auto___34751 = cljs.core.seq(seq__33564_34737);
if(temp__5735__auto___34751){
var seq__33564_34752__$1 = temp__5735__auto___34751;
if(cljs.core.chunked_seq_QMARK_(seq__33564_34752__$1)){
var c__4556__auto___34753 = cljs.core.chunk_first(seq__33564_34752__$1);
var G__34754 = cljs.core.chunk_rest(seq__33564_34752__$1);
var G__34755 = c__4556__auto___34753;
var G__34756 = cljs.core.count(c__4556__auto___34753);
var G__34757 = (0);
seq__33564_34737 = G__34754;
chunk__33565_34738 = G__34755;
count__33566_34739 = G__34756;
i__33567_34740 = G__34757;
continue;
} else {
var map__33579_34758 = cljs.core.first(seq__33564_34752__$1);
var map__33579_34759__$1 = (((((!((map__33579_34758 == null))))?(((((map__33579_34758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33579_34758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33579_34758):map__33579_34758);
var binding_34760 = map__33579_34759__$1;
var init_34761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33579_34759__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_34760)," = ",init_34761,";");


var G__34767 = cljs.core.next(seq__33564_34752__$1);
var G__34768 = null;
var G__34769 = (0);
var G__34770 = (0);
seq__33564_34737 = G__34767;
chunk__33565_34738 = G__34768;
count__33566_34739 = G__34769;
i__33567_34740 = G__34770;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__33591){
var map__33592 = p__33591;
var map__33592__$1 = (((((!((map__33592 == null))))?(((((map__33592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33592):map__33592);
var expr = map__33592__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33592__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33592__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33592__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__33634 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__33634.cljs$core$IFn$_invoke$arity$1 ? fexpr__33634.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__33634.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__33636 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__33636.cljs$core$IFn$_invoke$arity$1 ? fexpr__33636.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__33636.call(null,first_arg_tag));
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
var vec__33599 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__33585_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33585_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__33586_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33586_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599,(1),null);
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
var pimpl_34831 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_34831,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_34836 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_34836,args)),(((mfa_34836 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_34836,args)),"], 0))"], 0));
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
var G__33667 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__33666 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__33666.cljs$core$IFn$_invoke$arity$1 ? fexpr__33666.cljs$core$IFn$_invoke$arity$1(G__33667) : fexpr__33666.call(null,G__33667));
} else {
return and__4115__auto__;
}
})())){
var fprop_34839 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_34839," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_34839,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_34839," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_34839,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__33668){
var map__33671 = p__33668;
var map__33671__$1 = (((((!((map__33671 == null))))?(((((map__33671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33671):map__33671);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33671__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33671__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33671__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__33673){
var map__33674 = p__33673;
var map__33674__$1 = (((((!((map__33674 == null))))?(((((map__33674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33674):map__33674);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33674__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33674__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33674__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__33701 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__33701__$1 = (((((!((map__33701 == null))))?(((((map__33701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33701):map__33701);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33701__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33701__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__33702 = options;
var map__33702__$1 = (((((!((map__33702 == null))))?(((((map__33702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33702):map__33702);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33702__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33702__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33702__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__33703 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__33708 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__33708__$1 = (((((!((map__33708 == null))))?(((((map__33708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33708):map__33708);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33708__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33703,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33703,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__33710_34847 = cljs.core.seq(libs_to_load);
var chunk__33711_34848 = null;
var count__33712_34849 = (0);
var i__33713_34850 = (0);
while(true){
if((i__33713_34850 < count__33712_34849)){
var lib_34851 = chunk__33711_34848.cljs$core$IIndexed$_nth$arity$2(null,i__33713_34850);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_34851)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_34851),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34851),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_34851),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34851),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_34851,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34851),"');");
}

}
}
}


var G__34852 = seq__33710_34847;
var G__34853 = chunk__33711_34848;
var G__34854 = count__33712_34849;
var G__34855 = (i__33713_34850 + (1));
seq__33710_34847 = G__34852;
chunk__33711_34848 = G__34853;
count__33712_34849 = G__34854;
i__33713_34850 = G__34855;
continue;
} else {
var temp__5735__auto___34856 = cljs.core.seq(seq__33710_34847);
if(temp__5735__auto___34856){
var seq__33710_34857__$1 = temp__5735__auto___34856;
if(cljs.core.chunked_seq_QMARK_(seq__33710_34857__$1)){
var c__4556__auto___34858 = cljs.core.chunk_first(seq__33710_34857__$1);
var G__34859 = cljs.core.chunk_rest(seq__33710_34857__$1);
var G__34860 = c__4556__auto___34858;
var G__34861 = cljs.core.count(c__4556__auto___34858);
var G__34862 = (0);
seq__33710_34847 = G__34859;
chunk__33711_34848 = G__34860;
count__33712_34849 = G__34861;
i__33713_34850 = G__34862;
continue;
} else {
var lib_34863 = cljs.core.first(seq__33710_34857__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_34863)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_34863),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34863),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_34863),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34863),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_34863,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_34863),"');");
}

}
}
}


var G__34864 = cljs.core.next(seq__33710_34857__$1);
var G__34865 = null;
var G__34866 = (0);
var G__34867 = (0);
seq__33710_34847 = G__34864;
chunk__33711_34848 = G__34865;
count__33712_34849 = G__34866;
i__33713_34850 = G__34867;
continue;
}
} else {
}
}
break;
}

var seq__33724_34868 = cljs.core.seq(node_libs);
var chunk__33725_34869 = null;
var count__33726_34870 = (0);
var i__33727_34871 = (0);
while(true){
if((i__33727_34871 < count__33726_34870)){
var lib_34872 = chunk__33725_34869.cljs$core$IIndexed$_nth$arity$2(null,i__33727_34871);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_34872)," = require('",lib_34872,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__34873 = seq__33724_34868;
var G__34874 = chunk__33725_34869;
var G__34875 = count__33726_34870;
var G__34876 = (i__33727_34871 + (1));
seq__33724_34868 = G__34873;
chunk__33725_34869 = G__34874;
count__33726_34870 = G__34875;
i__33727_34871 = G__34876;
continue;
} else {
var temp__5735__auto___34877 = cljs.core.seq(seq__33724_34868);
if(temp__5735__auto___34877){
var seq__33724_34878__$1 = temp__5735__auto___34877;
if(cljs.core.chunked_seq_QMARK_(seq__33724_34878__$1)){
var c__4556__auto___34879 = cljs.core.chunk_first(seq__33724_34878__$1);
var G__34880 = cljs.core.chunk_rest(seq__33724_34878__$1);
var G__34881 = c__4556__auto___34879;
var G__34882 = cljs.core.count(c__4556__auto___34879);
var G__34883 = (0);
seq__33724_34868 = G__34880;
chunk__33725_34869 = G__34881;
count__33726_34870 = G__34882;
i__33727_34871 = G__34883;
continue;
} else {
var lib_34884 = cljs.core.first(seq__33724_34878__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_34884)," = require('",lib_34884,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__34885 = cljs.core.next(seq__33724_34878__$1);
var G__34886 = null;
var G__34887 = (0);
var G__34888 = (0);
seq__33724_34868 = G__34885;
chunk__33725_34869 = G__34886;
count__33726_34870 = G__34887;
i__33727_34871 = G__34888;
continue;
}
} else {
}
}
break;
}

var seq__33734_34889 = cljs.core.seq(global_exports_libs);
var chunk__33735_34890 = null;
var count__33736_34891 = (0);
var i__33737_34892 = (0);
while(true){
if((i__33737_34892 < count__33736_34891)){
var lib_34893 = chunk__33735_34890.cljs$core$IIndexed$_nth$arity$2(null,i__33737_34892);
var map__33742_34894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_34893));
var map__33742_34895__$1 = (((((!((map__33742_34894 == null))))?(((((map__33742_34894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33742_34894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33742_34894):map__33742_34894);
var global_exports_34896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33742_34895__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_34896,lib_34893);


var G__34903 = seq__33734_34889;
var G__34904 = chunk__33735_34890;
var G__34905 = count__33736_34891;
var G__34906 = (i__33737_34892 + (1));
seq__33734_34889 = G__34903;
chunk__33735_34890 = G__34904;
count__33736_34891 = G__34905;
i__33737_34892 = G__34906;
continue;
} else {
var temp__5735__auto___34929 = cljs.core.seq(seq__33734_34889);
if(temp__5735__auto___34929){
var seq__33734_34930__$1 = temp__5735__auto___34929;
if(cljs.core.chunked_seq_QMARK_(seq__33734_34930__$1)){
var c__4556__auto___34931 = cljs.core.chunk_first(seq__33734_34930__$1);
var G__34932 = cljs.core.chunk_rest(seq__33734_34930__$1);
var G__34933 = c__4556__auto___34931;
var G__34934 = cljs.core.count(c__4556__auto___34931);
var G__34935 = (0);
seq__33734_34889 = G__34932;
chunk__33735_34890 = G__34933;
count__33736_34891 = G__34934;
i__33737_34892 = G__34935;
continue;
} else {
var lib_34936 = cljs.core.first(seq__33734_34930__$1);
var map__33744_34937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_34936));
var map__33744_34938__$1 = (((((!((map__33744_34937 == null))))?(((((map__33744_34937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33744_34937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33744_34937):map__33744_34937);
var global_exports_34939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33744_34938__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_34939,lib_34936);


var G__34940 = cljs.core.next(seq__33734_34930__$1);
var G__34941 = null;
var G__34942 = (0);
var G__34943 = (0);
seq__33734_34889 = G__34940;
chunk__33735_34890 = G__34941;
count__33736_34891 = G__34942;
i__33737_34892 = G__34943;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__33747){
var map__33749 = p__33747;
var map__33749__$1 = (((((!((map__33749 == null))))?(((((map__33749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33749):map__33749);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33749__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33749__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33749__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33749__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33749__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33749__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33749__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__33751){
var map__33752 = p__33751;
var map__33752__$1 = (((((!((map__33752 == null))))?(((((map__33752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33752):map__33752);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33752__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33752__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33752__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33752__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33752__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33752__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33752__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__33754){
var map__33755 = p__33754;
var map__33755__$1 = (((((!((map__33755 == null))))?(((((map__33755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33755):map__33755);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33755__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33755__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33755__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33755__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33755__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__33757_34957 = cljs.core.seq(protocols);
var chunk__33758_34958 = null;
var count__33759_34959 = (0);
var i__33760_34960 = (0);
while(true){
if((i__33760_34960 < count__33759_34959)){
var protocol_34961 = chunk__33758_34958.cljs$core$IIndexed$_nth$arity$2(null,i__33760_34960);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34961)),"}");


var G__34962 = seq__33757_34957;
var G__34963 = chunk__33758_34958;
var G__34964 = count__33759_34959;
var G__34965 = (i__33760_34960 + (1));
seq__33757_34957 = G__34962;
chunk__33758_34958 = G__34963;
count__33759_34959 = G__34964;
i__33760_34960 = G__34965;
continue;
} else {
var temp__5735__auto___34966 = cljs.core.seq(seq__33757_34957);
if(temp__5735__auto___34966){
var seq__33757_34967__$1 = temp__5735__auto___34966;
if(cljs.core.chunked_seq_QMARK_(seq__33757_34967__$1)){
var c__4556__auto___34968 = cljs.core.chunk_first(seq__33757_34967__$1);
var G__34969 = cljs.core.chunk_rest(seq__33757_34967__$1);
var G__34970 = c__4556__auto___34968;
var G__34971 = cljs.core.count(c__4556__auto___34968);
var G__34972 = (0);
seq__33757_34957 = G__34969;
chunk__33758_34958 = G__34970;
count__33759_34959 = G__34971;
i__33760_34960 = G__34972;
continue;
} else {
var protocol_34973 = cljs.core.first(seq__33757_34967__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_34973)),"}");


var G__34974 = cljs.core.next(seq__33757_34967__$1);
var G__34975 = null;
var G__34976 = (0);
var G__34977 = (0);
seq__33757_34957 = G__34974;
chunk__33758_34958 = G__34975;
count__33759_34959 = G__34976;
i__33760_34960 = G__34977;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__33765_34978 = cljs.core.seq(fields__$1);
var chunk__33766_34979 = null;
var count__33767_34980 = (0);
var i__33768_34981 = (0);
while(true){
if((i__33768_34981 < count__33767_34980)){
var fld_34982 = chunk__33766_34979.cljs$core$IIndexed$_nth$arity$2(null,i__33768_34981);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_34982," = ",fld_34982,";");


var G__34983 = seq__33765_34978;
var G__34984 = chunk__33766_34979;
var G__34985 = count__33767_34980;
var G__34986 = (i__33768_34981 + (1));
seq__33765_34978 = G__34983;
chunk__33766_34979 = G__34984;
count__33767_34980 = G__34985;
i__33768_34981 = G__34986;
continue;
} else {
var temp__5735__auto___34987 = cljs.core.seq(seq__33765_34978);
if(temp__5735__auto___34987){
var seq__33765_34988__$1 = temp__5735__auto___34987;
if(cljs.core.chunked_seq_QMARK_(seq__33765_34988__$1)){
var c__4556__auto___34989 = cljs.core.chunk_first(seq__33765_34988__$1);
var G__34990 = cljs.core.chunk_rest(seq__33765_34988__$1);
var G__34991 = c__4556__auto___34989;
var G__34992 = cljs.core.count(c__4556__auto___34989);
var G__34993 = (0);
seq__33765_34978 = G__34990;
chunk__33766_34979 = G__34991;
count__33767_34980 = G__34992;
i__33768_34981 = G__34993;
continue;
} else {
var fld_34994 = cljs.core.first(seq__33765_34988__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_34994," = ",fld_34994,";");


var G__34995 = cljs.core.next(seq__33765_34988__$1);
var G__34996 = null;
var G__34997 = (0);
var G__34998 = (0);
seq__33765_34978 = G__34995;
chunk__33766_34979 = G__34996;
count__33767_34980 = G__34997;
i__33768_34981 = G__34998;
continue;
}
} else {
}
}
break;
}

var seq__33785_34999 = cljs.core.seq(pmasks);
var chunk__33786_35000 = null;
var count__33787_35001 = (0);
var i__33788_35002 = (0);
while(true){
if((i__33788_35002 < count__33787_35001)){
var vec__33797_35003 = chunk__33786_35000.cljs$core$IIndexed$_nth$arity$2(null,i__33788_35002);
var pno_35004 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33797_35003,(0),null);
var pmask_35005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33797_35003,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_35004,"$ = ",pmask_35005,";");


var G__35006 = seq__33785_34999;
var G__35007 = chunk__33786_35000;
var G__35008 = count__33787_35001;
var G__35009 = (i__33788_35002 + (1));
seq__33785_34999 = G__35006;
chunk__33786_35000 = G__35007;
count__33787_35001 = G__35008;
i__33788_35002 = G__35009;
continue;
} else {
var temp__5735__auto___35010 = cljs.core.seq(seq__33785_34999);
if(temp__5735__auto___35010){
var seq__33785_35011__$1 = temp__5735__auto___35010;
if(cljs.core.chunked_seq_QMARK_(seq__33785_35011__$1)){
var c__4556__auto___35012 = cljs.core.chunk_first(seq__33785_35011__$1);
var G__35013 = cljs.core.chunk_rest(seq__33785_35011__$1);
var G__35014 = c__4556__auto___35012;
var G__35015 = cljs.core.count(c__4556__auto___35012);
var G__35016 = (0);
seq__33785_34999 = G__35013;
chunk__33786_35000 = G__35014;
count__33787_35001 = G__35015;
i__33788_35002 = G__35016;
continue;
} else {
var vec__33800_35020 = cljs.core.first(seq__33785_35011__$1);
var pno_35021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33800_35020,(0),null);
var pmask_35022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33800_35020,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_35021,"$ = ",pmask_35022,";");


var G__35027 = cljs.core.next(seq__33785_35011__$1);
var G__35028 = null;
var G__35029 = (0);
var G__35030 = (0);
seq__33785_34999 = G__35027;
chunk__33786_35000 = G__35028;
count__33787_35001 = G__35029;
i__33788_35002 = G__35030;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__33803){
var map__33804 = p__33803;
var map__33804__$1 = (((((!((map__33804 == null))))?(((((map__33804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33804):map__33804);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33804__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33804__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33804__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33804__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33804__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__33806_35033 = cljs.core.seq(protocols);
var chunk__33807_35034 = null;
var count__33808_35035 = (0);
var i__33809_35036 = (0);
while(true){
if((i__33809_35036 < count__33808_35035)){
var protocol_35037 = chunk__33807_35034.cljs$core$IIndexed$_nth$arity$2(null,i__33809_35036);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35037)),"}");


var G__35039 = seq__33806_35033;
var G__35040 = chunk__33807_35034;
var G__35041 = count__33808_35035;
var G__35042 = (i__33809_35036 + (1));
seq__33806_35033 = G__35039;
chunk__33807_35034 = G__35040;
count__33808_35035 = G__35041;
i__33809_35036 = G__35042;
continue;
} else {
var temp__5735__auto___35044 = cljs.core.seq(seq__33806_35033);
if(temp__5735__auto___35044){
var seq__33806_35045__$1 = temp__5735__auto___35044;
if(cljs.core.chunked_seq_QMARK_(seq__33806_35045__$1)){
var c__4556__auto___35046 = cljs.core.chunk_first(seq__33806_35045__$1);
var G__35047 = cljs.core.chunk_rest(seq__33806_35045__$1);
var G__35048 = c__4556__auto___35046;
var G__35049 = cljs.core.count(c__4556__auto___35046);
var G__35050 = (0);
seq__33806_35033 = G__35047;
chunk__33807_35034 = G__35048;
count__33808_35035 = G__35049;
i__33809_35036 = G__35050;
continue;
} else {
var protocol_35051 = cljs.core.first(seq__33806_35045__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_35051)),"}");


var G__35052 = cljs.core.next(seq__33806_35045__$1);
var G__35053 = null;
var G__35054 = (0);
var G__35055 = (0);
seq__33806_35033 = G__35052;
chunk__33807_35034 = G__35053;
count__33808_35035 = G__35054;
i__33809_35036 = G__35055;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__33812_35056 = cljs.core.seq(fields__$1);
var chunk__33813_35057 = null;
var count__33814_35058 = (0);
var i__33815_35059 = (0);
while(true){
if((i__33815_35059 < count__33814_35058)){
var fld_35060 = chunk__33813_35057.cljs$core$IIndexed$_nth$arity$2(null,i__33815_35059);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_35060," = ",fld_35060,";");


var G__35061 = seq__33812_35056;
var G__35062 = chunk__33813_35057;
var G__35063 = count__33814_35058;
var G__35064 = (i__33815_35059 + (1));
seq__33812_35056 = G__35061;
chunk__33813_35057 = G__35062;
count__33814_35058 = G__35063;
i__33815_35059 = G__35064;
continue;
} else {
var temp__5735__auto___35065 = cljs.core.seq(seq__33812_35056);
if(temp__5735__auto___35065){
var seq__33812_35066__$1 = temp__5735__auto___35065;
if(cljs.core.chunked_seq_QMARK_(seq__33812_35066__$1)){
var c__4556__auto___35067 = cljs.core.chunk_first(seq__33812_35066__$1);
var G__35068 = cljs.core.chunk_rest(seq__33812_35066__$1);
var G__35069 = c__4556__auto___35067;
var G__35070 = cljs.core.count(c__4556__auto___35067);
var G__35071 = (0);
seq__33812_35056 = G__35068;
chunk__33813_35057 = G__35069;
count__33814_35058 = G__35070;
i__33815_35059 = G__35071;
continue;
} else {
var fld_35072 = cljs.core.first(seq__33812_35066__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_35072," = ",fld_35072,";");


var G__35073 = cljs.core.next(seq__33812_35066__$1);
var G__35074 = null;
var G__35075 = (0);
var G__35076 = (0);
seq__33812_35056 = G__35073;
chunk__33813_35057 = G__35074;
count__33814_35058 = G__35075;
i__33815_35059 = G__35076;
continue;
}
} else {
}
}
break;
}

var seq__33816_35077 = cljs.core.seq(pmasks);
var chunk__33817_35078 = null;
var count__33818_35079 = (0);
var i__33819_35080 = (0);
while(true){
if((i__33819_35080 < count__33818_35079)){
var vec__33826_35081 = chunk__33817_35078.cljs$core$IIndexed$_nth$arity$2(null,i__33819_35080);
var pno_35082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33826_35081,(0),null);
var pmask_35083 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33826_35081,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_35082,"$ = ",pmask_35083,";");


var G__35084 = seq__33816_35077;
var G__35085 = chunk__33817_35078;
var G__35086 = count__33818_35079;
var G__35087 = (i__33819_35080 + (1));
seq__33816_35077 = G__35084;
chunk__33817_35078 = G__35085;
count__33818_35079 = G__35086;
i__33819_35080 = G__35087;
continue;
} else {
var temp__5735__auto___35088 = cljs.core.seq(seq__33816_35077);
if(temp__5735__auto___35088){
var seq__33816_35089__$1 = temp__5735__auto___35088;
if(cljs.core.chunked_seq_QMARK_(seq__33816_35089__$1)){
var c__4556__auto___35090 = cljs.core.chunk_first(seq__33816_35089__$1);
var G__35091 = cljs.core.chunk_rest(seq__33816_35089__$1);
var G__35092 = c__4556__auto___35090;
var G__35093 = cljs.core.count(c__4556__auto___35090);
var G__35094 = (0);
seq__33816_35077 = G__35091;
chunk__33817_35078 = G__35092;
count__33818_35079 = G__35093;
i__33819_35080 = G__35094;
continue;
} else {
var vec__33829_35095 = cljs.core.first(seq__33816_35089__$1);
var pno_35096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33829_35095,(0),null);
var pmask_35097 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33829_35095,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_35096,"$ = ",pmask_35097,";");


var G__35100 = cljs.core.next(seq__33816_35089__$1);
var G__35101 = null;
var G__35102 = (0);
var G__35103 = (0);
seq__33816_35077 = G__35100;
chunk__33817_35078 = G__35101;
count__33818_35079 = G__35102;
i__33819_35080 = G__35103;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__33835){
var map__33836 = p__33835;
var map__33836__$1 = (((((!((map__33836 == null))))?(((((map__33836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33836):map__33836);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33836__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33836__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33836__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33836__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33836__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__33842 = cljs.core.seq(table);
var chunk__33843 = null;
var count__33844 = (0);
var i__33845 = (0);
while(true){
if((i__33845 < count__33844)){
var vec__33855 = chunk__33843.cljs$core$IIndexed$_nth$arity$2(null,i__33845);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33855,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33855,(1),null);
var ns_35133 = cljs.core.namespace(sym);
var name_35134 = cljs.core.name(sym);
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


var G__35140 = seq__33842;
var G__35141 = chunk__33843;
var G__35142 = count__33844;
var G__35143 = (i__33845 + (1));
seq__33842 = G__35140;
chunk__33843 = G__35141;
count__33844 = G__35142;
i__33845 = G__35143;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33842);
if(temp__5735__auto__){
var seq__33842__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33842__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__33842__$1);
var G__35146 = cljs.core.chunk_rest(seq__33842__$1);
var G__35147 = c__4556__auto__;
var G__35148 = cljs.core.count(c__4556__auto__);
var G__35149 = (0);
seq__33842 = G__35146;
chunk__33843 = G__35147;
count__33844 = G__35148;
i__33845 = G__35149;
continue;
} else {
var vec__33860 = cljs.core.first(seq__33842__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33860,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33860,(1),null);
var ns_35150 = cljs.core.namespace(sym);
var name_35151 = cljs.core.name(sym);
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


var G__35160 = cljs.core.next(seq__33842__$1);
var G__35161 = null;
var G__35162 = (0);
var G__35163 = (0);
seq__33842 = G__35160;
chunk__33843 = G__35161;
count__33844 = G__35162;
i__33845 = G__35163;
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
var k_35169 = cljs.core.first(ks);
var vec__33865_35170 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_35169);
var top_35171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33865_35170,(0),null);
var prefix_SINGLEQUOTE__35172 = vec__33865_35170;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_35169)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__35172) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_35171)) || (cljs.core.contains_QMARK_(known_externs,top_35171)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__35172)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_35171);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__35172)),";");
}
} else {
}

var m_35173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_35169);
if(cljs.core.empty_QMARK_(m_35173)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__35172,m_35173,top_level,known_externs);
}

var G__35174 = cljs.core.next(ks);
ks = G__35174;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
