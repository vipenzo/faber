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
var map__41938 = s;
var map__41938__$1 = (((((!((map__41938 == null))))?(((((map__41938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41938):map__41938);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41938__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41938__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__41945 = info;
var map__41946 = G__41945;
var map__41946__$1 = (((((!((map__41946 == null))))?(((((map__41946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41946):map__41946);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41946__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__41945__$1 = G__41945;
while(true){
var d__$2 = d__$1;
var map__41964 = G__41945__$1;
var map__41964__$1 = (((((!((map__41964 == null))))?(((((map__41964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41964):map__41964);
var shadow__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41964__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$2)){
var G__43451 = (d__$2 + (1));
var G__43452 = shadow__$2;
d__$1 = G__43451;
G__41945__$1 = G__43452;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__41967){
var map__41968 = p__41967;
var map__41968__$1 = (((((!((map__41968 == null))))?(((((map__41968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41968):map__41968);
var name_var = map__41968__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41968__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41968__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__41970 = info;
var map__41970__$1 = (((((!((map__41970 == null))))?(((((map__41970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41970):map__41970);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41970__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41970__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__41972 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__41972) : cljs.compiler.munge.call(null,G__41972));
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
var G__41975 = arguments.length;
switch (G__41975) {
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
var ms = (function (){var fexpr__42003 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__42003.cljs$core$IFn$_invoke$arity$1 ? fexpr__42003.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__42003.call(null,ss__$3));
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
var G__42033 = cp;
switch (G__42033) {
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
var seq__42039_43473 = cljs.core.seq(s);
var chunk__42040_43474 = null;
var count__42041_43475 = (0);
var i__42042_43476 = (0);
while(true){
if((i__42042_43476 < count__42041_43475)){
var c_43478 = chunk__42040_43474.cljs$core$IIndexed$_nth$arity$2(null,i__42042_43476);
sb.append(cljs.compiler.escape_char(c_43478));


var G__43479 = seq__42039_43473;
var G__43480 = chunk__42040_43474;
var G__43481 = count__42041_43475;
var G__43482 = (i__42042_43476 + (1));
seq__42039_43473 = G__43479;
chunk__42040_43474 = G__43480;
count__42041_43475 = G__43481;
i__42042_43476 = G__43482;
continue;
} else {
var temp__5735__auto___43483 = cljs.core.seq(seq__42039_43473);
if(temp__5735__auto___43483){
var seq__42039_43484__$1 = temp__5735__auto___43483;
if(cljs.core.chunked_seq_QMARK_(seq__42039_43484__$1)){
var c__4556__auto___43485 = cljs.core.chunk_first(seq__42039_43484__$1);
var G__43487 = cljs.core.chunk_rest(seq__42039_43484__$1);
var G__43488 = c__4556__auto___43485;
var G__43489 = cljs.core.count(c__4556__auto___43485);
var G__43490 = (0);
seq__42039_43473 = G__43487;
chunk__42040_43474 = G__43488;
count__42041_43475 = G__43489;
i__42042_43476 = G__43490;
continue;
} else {
var c_43492 = cljs.core.first(seq__42039_43484__$1);
sb.append(cljs.compiler.escape_char(c_43492));


var G__43495 = cljs.core.next(seq__42039_43484__$1);
var G__43496 = null;
var G__43497 = (0);
var G__43498 = (0);
seq__42039_43473 = G__43495;
chunk__42040_43474 = G__43496;
count__42041_43475 = G__43497;
i__42042_43476 = G__43498;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__42052 = cljs.core.get_global_hierarchy;
return (fexpr__42052.cljs$core$IFn$_invoke$arity$0 ? fexpr__42052.cljs$core$IFn$_invoke$arity$0() : fexpr__42052.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__42054_43502 = ast;
var map__42054_43503__$1 = (((((!((map__42054_43502 == null))))?(((((map__42054_43502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42054_43502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42054_43502):map__42054_43502);
var env_43504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42054_43503__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_43504))){
var map__42057_43506 = env_43504;
var map__42057_43507__$1 = (((((!((map__42057_43506 == null))))?(((((map__42057_43506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42057_43506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42057_43506):map__42057_43506);
var line_43508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42057_43507__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_43509 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42057_43507__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__42063 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__42068 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__42067 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__42067.cljs$core$IFn$_invoke$arity$1 ? fexpr__42067.cljs$core$IFn$_invoke$arity$1(G__42068) : fexpr__42067.call(null,G__42068));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42063,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__42063;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_43508 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_43509)?(column_43509 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__42080 = arguments.length;
switch (G__42080) {
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
var len__4736__auto___43519 = arguments.length;
var i__4737__auto___43520 = (0);
while(true){
if((i__4737__auto___43520 < len__4736__auto___43519)){
args_arr__4757__auto__.push((arguments[i__4737__auto___43520]));

var G__43521 = (i__4737__auto___43520 + (1));
i__4737__auto___43520 = G__43521;
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
var s_43523 = (function (){var G__42082 = a;
if((!(typeof a === 'string'))){
return G__42082.toString();
} else {
return G__42082;
}
})();
var temp__5739__auto___43524 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___43524 == null)){
} else {
var sm_data_43527 = temp__5739__auto___43524;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_43527,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__42069_SHARP_){
return (p1__42069_SHARP_ + s_43523.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_43523], 0));

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

var seq__42086 = cljs.core.seq(xs);
var chunk__42087 = null;
var count__42088 = (0);
var i__42089 = (0);
while(true){
if((i__42089 < count__42088)){
var x = chunk__42087.cljs$core$IIndexed$_nth$arity$2(null,i__42089);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__43532 = seq__42086;
var G__43533 = chunk__42087;
var G__43534 = count__42088;
var G__43535 = (i__42089 + (1));
seq__42086 = G__43532;
chunk__42087 = G__43533;
count__42088 = G__43534;
i__42089 = G__43535;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42086);
if(temp__5735__auto__){
var seq__42086__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42086__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42086__$1);
var G__43538 = cljs.core.chunk_rest(seq__42086__$1);
var G__43539 = c__4556__auto__;
var G__43540 = cljs.core.count(c__4556__auto__);
var G__43541 = (0);
seq__42086 = G__43538;
chunk__42087 = G__43539;
count__42088 = G__43540;
i__42089 = G__43541;
continue;
} else {
var x = cljs.core.first(seq__42086__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__43542 = cljs.core.next(seq__42086__$1);
var G__43543 = null;
var G__43544 = (0);
var G__43545 = (0);
seq__42086 = G__43542;
chunk__42087 = G__43543;
count__42088 = G__43544;
i__42089 = G__43545;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq42074){
var G__42075 = cljs.core.first(seq42074);
var seq42074__$1 = cljs.core.next(seq42074);
var G__42076 = cljs.core.first(seq42074__$1);
var seq42074__$2 = cljs.core.next(seq42074__$1);
var G__42077 = cljs.core.first(seq42074__$2);
var seq42074__$3 = cljs.core.next(seq42074__$2);
var G__42078 = cljs.core.first(seq42074__$3);
var seq42074__$4 = cljs.core.next(seq42074__$3);
var G__42079 = cljs.core.first(seq42074__$4);
var seq42074__$5 = cljs.core.next(seq42074__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42075,G__42076,G__42077,G__42078,G__42079,seq42074__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__42097){
var map__42098 = p__42097;
var map__42098__$1 = (((((!((map__42098 == null))))?(((((map__42098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42098):map__42098);
var m = map__42098__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__42110 = arguments.length;
switch (G__42110) {
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
var len__4736__auto___43553 = arguments.length;
var i__4737__auto___43554 = (0);
while(true){
if((i__4737__auto___43554 < len__4736__auto___43553)){
args_arr__4757__auto__.push((arguments[i__4737__auto___43554]));

var G__43555 = (i__4737__auto___43554 + (1));
i__4737__auto___43554 = G__43555;
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

var seq__42125_43558 = cljs.core.seq(xs);
var chunk__42126_43559 = null;
var count__42127_43560 = (0);
var i__42128_43561 = (0);
while(true){
if((i__42128_43561 < count__42127_43560)){
var x_43562 = chunk__42126_43559.cljs$core$IIndexed$_nth$arity$2(null,i__42128_43561);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_43562);


var G__43563 = seq__42125_43558;
var G__43564 = chunk__42126_43559;
var G__43565 = count__42127_43560;
var G__43566 = (i__42128_43561 + (1));
seq__42125_43558 = G__43563;
chunk__42126_43559 = G__43564;
count__42127_43560 = G__43565;
i__42128_43561 = G__43566;
continue;
} else {
var temp__5735__auto___43567 = cljs.core.seq(seq__42125_43558);
if(temp__5735__auto___43567){
var seq__42125_43568__$1 = temp__5735__auto___43567;
if(cljs.core.chunked_seq_QMARK_(seq__42125_43568__$1)){
var c__4556__auto___43569 = cljs.core.chunk_first(seq__42125_43568__$1);
var G__43570 = cljs.core.chunk_rest(seq__42125_43568__$1);
var G__43571 = c__4556__auto___43569;
var G__43572 = cljs.core.count(c__4556__auto___43569);
var G__43573 = (0);
seq__42125_43558 = G__43570;
chunk__42126_43559 = G__43571;
count__42127_43560 = G__43572;
i__42128_43561 = G__43573;
continue;
} else {
var x_43574 = cljs.core.first(seq__42125_43568__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_43574);


var G__43575 = cljs.core.next(seq__42125_43568__$1);
var G__43576 = null;
var G__43577 = (0);
var G__43578 = (0);
seq__42125_43558 = G__43575;
chunk__42126_43559 = G__43576;
count__42127_43560 = G__43577;
i__42128_43561 = G__43578;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq42104){
var G__42105 = cljs.core.first(seq42104);
var seq42104__$1 = cljs.core.next(seq42104);
var G__42106 = cljs.core.first(seq42104__$1);
var seq42104__$2 = cljs.core.next(seq42104__$1);
var G__42107 = cljs.core.first(seq42104__$2);
var seq42104__$3 = cljs.core.next(seq42104__$2);
var G__42108 = cljs.core.first(seq42104__$3);
var seq42104__$4 = cljs.core.next(seq42104__$3);
var G__42109 = cljs.core.first(seq42104__$4);
var seq42104__$5 = cljs.core.next(seq42104__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42105,G__42106,G__42107,G__42108,G__42109,seq42104__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42132_43579 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42133_43580 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42134_43581 = true;
var _STAR_print_fn_STAR__temp_val__42135_43582 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42134_43581);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42135_43582);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42133_43580);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42132_43579);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__42137 = cljs.core.get_global_hierarchy;
return (fexpr__42137.cljs$core$IFn$_invoke$arity$0 ? fexpr__42137.cljs$core$IFn$_invoke$arity$0() : fexpr__42137.call(null));
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
var vec__42144 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42144,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42144,(1),null);
var G__42147 = ns;
var G__42148 = name;
var G__42149 = (function (){
var G__42150 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__42150) : cljs.compiler.emit_constant.call(null,G__42150));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__42147,G__42148,G__42149) : cljs.compiler.emit_record_value.call(null,G__42147,G__42148,G__42149));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__42151 = cljs.core.keys(x);
var G__42152 = cljs.core.vals(x);
var G__42153 = cljs.compiler.emit_constants_comma_sep;
var G__42154 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__42151,G__42152,G__42153,G__42154) : cljs.compiler.emit_map.call(null,G__42151,G__42152,G__42153,G__42154));
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
var G__42158 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__42159 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__42158,G__42159) : cljs.compiler.emit_with_meta.call(null,G__42158,G__42159));
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
var vec__42168 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42168,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42168,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42168,(2),null);
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
var G__42189 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__42189) : x.call(null,G__42189));
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
var G__42192 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__42192) : x.call(null,G__42192));
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
var G__42205 = items;
var G__42206 = (function (p1__42198_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__42198_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__42205,G__42206) : cljs.compiler.emit_js_object.call(null,G__42205,G__42206));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__42211){
var map__42212 = p__42211;
var map__42212__$1 = (((((!((map__42212 == null))))?(((((map__42212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42212):map__42212);
var ast = map__42212__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42212__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42212__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42212__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__42215 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__42215__$1 = (((((!((map__42215 == null))))?(((((map__42215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42215):map__42215);
var cenv = map__42215__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42215__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__42221 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__42224 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__42224) : cljs.compiler.es5_GT__EQ_.call(null,G__42224));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__42221,cljs.analyzer.es5_allowed);
} else {
return G__42221;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__42226 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__42226,reserved);
} else {
return G__42226;
}
})();
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__42231_43600 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__42231_43601__$1 = (((G__42231_43600 instanceof cljs.core.Keyword))?G__42231_43600.fqn:null);
switch (G__42231_43601__$1) {
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__42236){
var map__42238 = p__42236;
var map__42238__$1 = (((((!((map__42238 == null))))?(((((map__42238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42238):map__42238);
var arg = map__42238__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42238__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42238__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42238__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42238__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__42243 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__42243__$1 = (((((!((map__42243 == null))))?(((((map__42243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42243):map__42243);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42243__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__42246){
var map__42247 = p__42246;
var map__42247__$1 = (((((!((map__42247 == null))))?(((((map__42247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42247):map__42247);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42247__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42247__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42247__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__42249_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__42249_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__42255 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__42255) : comma_sep.call(null,G__42255));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__42256 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__42256) : comma_sep.call(null,G__42256));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__42257){
var map__42258 = p__42257;
var map__42258__$1 = (((((!((map__42258 == null))))?(((((map__42258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42258):map__42258);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42258__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42258__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42258__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__42273){
var map__42274 = p__42273;
var map__42274__$1 = (((((!((map__42274 == null))))?(((((map__42274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42274):map__42274);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42274__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42274__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ((cljs.core.every_QMARK_((function (p1__42277_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__42277_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__42285 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__42285) : comma_sep.call(null,G__42285));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__42288){
var map__42289 = p__42288;
var map__42289__$1 = (((((!((map__42289 == null))))?(((((map__42289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42289):map__42289);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42289__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42289__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var temp__5735__auto___43641 = cljs.core.seq(items);
if(temp__5735__auto___43641){
var items_43642__$1 = temp__5735__auto___43641;
var vec__42300_43643 = items_43642__$1;
var seq__42301_43644 = cljs.core.seq(vec__42300_43643);
var first__42302_43645 = cljs.core.first(seq__42301_43644);
var seq__42301_43646__$1 = cljs.core.next(seq__42301_43644);
var vec__42303_43647 = first__42302_43645;
var k_43648 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42303_43647,(0),null);
var v_43649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42303_43647,(1),null);
var r_43650 = seq__42301_43646__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_43648),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_43649) : emit_js_object_val.call(null,v_43649)));

var seq__42311_43651 = cljs.core.seq(r_43650);
var chunk__42312_43652 = null;
var count__42313_43653 = (0);
var i__42314_43654 = (0);
while(true){
if((i__42314_43654 < count__42313_43653)){
var vec__42342_43655 = chunk__42312_43652.cljs$core$IIndexed$_nth$arity$2(null,i__42314_43654);
var k_43656__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42342_43655,(0),null);
var v_43657__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42342_43655,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_43656__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_43657__$1) : emit_js_object_val.call(null,v_43657__$1)));


var G__43658 = seq__42311_43651;
var G__43659 = chunk__42312_43652;
var G__43660 = count__42313_43653;
var G__43661 = (i__42314_43654 + (1));
seq__42311_43651 = G__43658;
chunk__42312_43652 = G__43659;
count__42313_43653 = G__43660;
i__42314_43654 = G__43661;
continue;
} else {
var temp__5735__auto___43662__$1 = cljs.core.seq(seq__42311_43651);
if(temp__5735__auto___43662__$1){
var seq__42311_43663__$1 = temp__5735__auto___43662__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42311_43663__$1)){
var c__4556__auto___43666 = cljs.core.chunk_first(seq__42311_43663__$1);
var G__43667 = cljs.core.chunk_rest(seq__42311_43663__$1);
var G__43668 = c__4556__auto___43666;
var G__43669 = cljs.core.count(c__4556__auto___43666);
var G__43670 = (0);
seq__42311_43651 = G__43667;
chunk__42312_43652 = G__43668;
count__42313_43653 = G__43669;
i__42314_43654 = G__43670;
continue;
} else {
var vec__42359_43671 = cljs.core.first(seq__42311_43663__$1);
var k_43672__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42359_43671,(0),null);
var v_43673__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42359_43671,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_43672__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_43673__$1) : emit_js_object_val.call(null,v_43673__$1)));


var G__43674 = cljs.core.next(seq__42311_43663__$1);
var G__43675 = null;
var G__43676 = (0);
var G__43677 = (0);
seq__42311_43651 = G__43674;
chunk__42312_43652 = G__43675;
count__42313_43653 = G__43676;
i__42314_43654 = G__43677;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__42381){
var map__42384 = p__42381;
var map__42384__$1 = (((((!((map__42384 == null))))?(((((map__42384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42384):map__42384);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42384__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42384__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42384__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__42393){
var map__42394 = p__42393;
var map__42394__$1 = (((((!((map__42394 == null))))?(((((map__42394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42394):map__42394);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42394__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42394__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__42405){
var map__42406 = p__42405;
var map__42406__$1 = (((((!((map__42406 == null))))?(((((map__42406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42406):map__42406);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42406__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__42415){
var map__42416 = p__42415;
var map__42416__$1 = (((((!((map__42416 == null))))?(((((map__42416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42416):map__42416);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42416__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42416__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__42424 = cljs.analyzer.unwrap_quote(expr);
var map__42424__$1 = (((((!((map__42424 == null))))?(((((map__42424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42424):map__42424);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42424__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__42445 = cljs.analyzer.unwrap_quote(expr);
var map__42445__$1 = (((((!((map__42445 == null))))?(((((map__42445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42445):map__42445);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42445__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42445__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42445__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__42472 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__42472.cljs$core$IFn$_invoke$arity$1 ? fexpr__42472.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__42472.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__42474){
var map__42478 = p__42474;
var map__42478__$1 = (((((!((map__42478 == null))))?(((((map__42478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42478):map__42478);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42478__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42478__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42478__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42478__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42478__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__42486){
var map__42487 = p__42486;
var map__42487__$1 = (((((!((map__42487 == null))))?(((((map__42487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42487):map__42487);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42487__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42487__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42487__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42487__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__42492_43704 = cljs.core.seq(nodes);
var chunk__42493_43705 = null;
var count__42494_43706 = (0);
var i__42495_43707 = (0);
while(true){
if((i__42495_43707 < count__42494_43706)){
var map__42538_43711 = chunk__42493_43705.cljs$core$IIndexed$_nth$arity$2(null,i__42495_43707);
var map__42538_43712__$1 = (((((!((map__42538_43711 == null))))?(((((map__42538_43711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42538_43711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42538_43711):map__42538_43711);
var ts_43713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42538_43712__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__42539_43714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42538_43712__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__42539_43715__$1 = (((((!((map__42539_43714 == null))))?(((((map__42539_43714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42539_43714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42539_43714):map__42539_43714);
var then_43716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42539_43715__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__42543_43718 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_43713));
var chunk__42544_43719 = null;
var count__42545_43720 = (0);
var i__42546_43721 = (0);
while(true){
if((i__42546_43721 < count__42545_43720)){
var test_43722 = chunk__42544_43719.cljs$core$IIndexed$_nth$arity$2(null,i__42546_43721);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_43722,":");


var G__43723 = seq__42543_43718;
var G__43724 = chunk__42544_43719;
var G__43725 = count__42545_43720;
var G__43726 = (i__42546_43721 + (1));
seq__42543_43718 = G__43723;
chunk__42544_43719 = G__43724;
count__42545_43720 = G__43725;
i__42546_43721 = G__43726;
continue;
} else {
var temp__5735__auto___43728 = cljs.core.seq(seq__42543_43718);
if(temp__5735__auto___43728){
var seq__42543_43729__$1 = temp__5735__auto___43728;
if(cljs.core.chunked_seq_QMARK_(seq__42543_43729__$1)){
var c__4556__auto___43730 = cljs.core.chunk_first(seq__42543_43729__$1);
var G__43731 = cljs.core.chunk_rest(seq__42543_43729__$1);
var G__43732 = c__4556__auto___43730;
var G__43733 = cljs.core.count(c__4556__auto___43730);
var G__43734 = (0);
seq__42543_43718 = G__43731;
chunk__42544_43719 = G__43732;
count__42545_43720 = G__43733;
i__42546_43721 = G__43734;
continue;
} else {
var test_43736 = cljs.core.first(seq__42543_43729__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_43736,":");


var G__43740 = cljs.core.next(seq__42543_43729__$1);
var G__43741 = null;
var G__43742 = (0);
var G__43743 = (0);
seq__42543_43718 = G__43740;
chunk__42544_43719 = G__43741;
count__42545_43720 = G__43742;
i__42546_43721 = G__43743;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_43716);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_43716);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__43745 = seq__42492_43704;
var G__43746 = chunk__42493_43705;
var G__43747 = count__42494_43706;
var G__43748 = (i__42495_43707 + (1));
seq__42492_43704 = G__43745;
chunk__42493_43705 = G__43746;
count__42494_43706 = G__43747;
i__42495_43707 = G__43748;
continue;
} else {
var temp__5735__auto___43750 = cljs.core.seq(seq__42492_43704);
if(temp__5735__auto___43750){
var seq__42492_43751__$1 = temp__5735__auto___43750;
if(cljs.core.chunked_seq_QMARK_(seq__42492_43751__$1)){
var c__4556__auto___43756 = cljs.core.chunk_first(seq__42492_43751__$1);
var G__43757 = cljs.core.chunk_rest(seq__42492_43751__$1);
var G__43758 = c__4556__auto___43756;
var G__43759 = cljs.core.count(c__4556__auto___43756);
var G__43760 = (0);
seq__42492_43704 = G__43757;
chunk__42493_43705 = G__43758;
count__42494_43706 = G__43759;
i__42495_43707 = G__43760;
continue;
} else {
var map__42562_43761 = cljs.core.first(seq__42492_43751__$1);
var map__42562_43762__$1 = (((((!((map__42562_43761 == null))))?(((((map__42562_43761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42562_43761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42562_43761):map__42562_43761);
var ts_43763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42562_43762__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__42563_43764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42562_43762__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__42563_43765__$1 = (((((!((map__42563_43764 == null))))?(((((map__42563_43764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42563_43764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42563_43764):map__42563_43764);
var then_43766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42563_43765__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__42567_43768 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_43763));
var chunk__42568_43769 = null;
var count__42569_43770 = (0);
var i__42570_43771 = (0);
while(true){
if((i__42570_43771 < count__42569_43770)){
var test_43773 = chunk__42568_43769.cljs$core$IIndexed$_nth$arity$2(null,i__42570_43771);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_43773,":");


var G__43774 = seq__42567_43768;
var G__43775 = chunk__42568_43769;
var G__43776 = count__42569_43770;
var G__43777 = (i__42570_43771 + (1));
seq__42567_43768 = G__43774;
chunk__42568_43769 = G__43775;
count__42569_43770 = G__43776;
i__42570_43771 = G__43777;
continue;
} else {
var temp__5735__auto___43778__$1 = cljs.core.seq(seq__42567_43768);
if(temp__5735__auto___43778__$1){
var seq__42567_43779__$1 = temp__5735__auto___43778__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42567_43779__$1)){
var c__4556__auto___43782 = cljs.core.chunk_first(seq__42567_43779__$1);
var G__43783 = cljs.core.chunk_rest(seq__42567_43779__$1);
var G__43784 = c__4556__auto___43782;
var G__43785 = cljs.core.count(c__4556__auto___43782);
var G__43786 = (0);
seq__42567_43768 = G__43783;
chunk__42568_43769 = G__43784;
count__42569_43770 = G__43785;
i__42570_43771 = G__43786;
continue;
} else {
var test_43787 = cljs.core.first(seq__42567_43779__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_43787,":");


var G__43788 = cljs.core.next(seq__42567_43779__$1);
var G__43789 = null;
var G__43790 = (0);
var G__43791 = (0);
seq__42567_43768 = G__43788;
chunk__42568_43769 = G__43789;
count__42569_43770 = G__43790;
i__42570_43771 = G__43791;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_43766);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_43766);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__43795 = cljs.core.next(seq__42492_43751__$1);
var G__43796 = null;
var G__43797 = (0);
var G__43798 = (0);
seq__42492_43704 = G__43795;
chunk__42493_43705 = G__43796;
count__42494_43706 = G__43797;
i__42495_43707 = G__43798;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__42576){
var map__42577 = p__42576;
var map__42577__$1 = (((((!((map__42577 == null))))?(((((map__42577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42577):map__42577);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42577__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42577__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__42582 = env;
var G__42583 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__42582,G__42583) : cljs.compiler.resolve_type.call(null,G__42582,G__42583));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__42584 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42584,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42584,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__42579_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__42579_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__42579_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__42588 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__42588,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__42588;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__42591 = env;
var G__42592 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__42591,G__42592) : cljs.compiler.resolve_type.call(null,G__42591,G__42592));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42595_SHARP_){
return cljs.compiler.resolve_type(env,p1__42595_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__42600 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__42601 = cljs.core.seq(vec__42600);
var first__42602 = cljs.core.first(seq__42601);
var seq__42601__$1 = cljs.core.next(seq__42601);
var p = first__42602;
var first__42602__$1 = cljs.core.first(seq__42601__$1);
var seq__42601__$2 = cljs.core.next(seq__42601__$1);
var ts = first__42602__$1;
var first__42602__$2 = cljs.core.first(seq__42601__$2);
var seq__42601__$3 = cljs.core.next(seq__42601__$2);
var n = first__42602__$2;
var xs = seq__42601__$3;
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
var vec__42605 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__42606 = cljs.core.seq(vec__42605);
var first__42607 = cljs.core.first(seq__42606);
var seq__42606__$1 = cljs.core.next(seq__42606);
var p = first__42607;
var first__42607__$1 = cljs.core.first(seq__42606__$1);
var seq__42606__$2 = cljs.core.next(seq__42606__$1);
var ts = first__42607__$1;
var xs = seq__42606__$2;
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
var G__42609 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__42608 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__42608.cljs$core$IFn$_invoke$arity$1 ? fexpr__42608.cljs$core$IFn$_invoke$arity$1(G__42609) : fexpr__42608.call(null,G__42609));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__42612 = arguments.length;
switch (G__42612) {
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
var vec__42627 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42610_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__42610_SHARP_);
} else {
return p1__42610_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__42628 = cljs.core.seq(vec__42627);
var first__42629 = cljs.core.first(seq__42628);
var seq__42628__$1 = cljs.core.next(seq__42628);
var x = first__42629;
var ys = seq__42628__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__42630 = cljs.core.seq(ys);
var chunk__42631 = null;
var count__42632 = (0);
var i__42633 = (0);
while(true){
if((i__42633 < count__42632)){
var next_line = chunk__42631.cljs$core$IIndexed$_nth$arity$2(null,i__42633);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__43862 = seq__42630;
var G__43863 = chunk__42631;
var G__43864 = count__42632;
var G__43865 = (i__42633 + (1));
seq__42630 = G__43862;
chunk__42631 = G__43863;
count__42632 = G__43864;
i__42633 = G__43865;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42630);
if(temp__5735__auto__){
var seq__42630__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42630__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42630__$1);
var G__43866 = cljs.core.chunk_rest(seq__42630__$1);
var G__43867 = c__4556__auto__;
var G__43868 = cljs.core.count(c__4556__auto__);
var G__43869 = (0);
seq__42630 = G__43866;
chunk__42631 = G__43867;
count__42632 = G__43868;
i__42633 = G__43869;
continue;
} else {
var next_line = cljs.core.first(seq__42630__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__43870 = cljs.core.next(seq__42630__$1);
var G__43871 = null;
var G__43872 = (0);
var G__43873 = (0);
seq__42630 = G__43870;
chunk__42631 = G__43871;
count__42632 = G__43872;
i__42633 = G__43873;
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

var seq__42643_43875 = cljs.core.seq(docs__$2);
var chunk__42644_43876 = null;
var count__42645_43877 = (0);
var i__42646_43878 = (0);
while(true){
if((i__42646_43878 < count__42645_43877)){
var e_43879 = chunk__42644_43876.cljs$core$IIndexed$_nth$arity$2(null,i__42646_43878);
if(cljs.core.truth_(e_43879)){
print_comment_lines(e_43879);
} else {
}


var G__43881 = seq__42643_43875;
var G__43882 = chunk__42644_43876;
var G__43883 = count__42645_43877;
var G__43884 = (i__42646_43878 + (1));
seq__42643_43875 = G__43881;
chunk__42644_43876 = G__43882;
count__42645_43877 = G__43883;
i__42646_43878 = G__43884;
continue;
} else {
var temp__5735__auto___43885 = cljs.core.seq(seq__42643_43875);
if(temp__5735__auto___43885){
var seq__42643_43886__$1 = temp__5735__auto___43885;
if(cljs.core.chunked_seq_QMARK_(seq__42643_43886__$1)){
var c__4556__auto___43891 = cljs.core.chunk_first(seq__42643_43886__$1);
var G__43892 = cljs.core.chunk_rest(seq__42643_43886__$1);
var G__43893 = c__4556__auto___43891;
var G__43894 = cljs.core.count(c__4556__auto___43891);
var G__43895 = (0);
seq__42643_43875 = G__43892;
chunk__42644_43876 = G__43893;
count__42645_43877 = G__43894;
i__42646_43878 = G__43895;
continue;
} else {
var e_43896 = cljs.core.first(seq__42643_43886__$1);
if(cljs.core.truth_(e_43896)){
print_comment_lines(e_43896);
} else {
}


var G__43897 = cljs.core.next(seq__42643_43886__$1);
var G__43898 = null;
var G__43899 = (0);
var G__43900 = (0);
seq__42643_43875 = G__43897;
chunk__42644_43876 = G__43898;
count__42645_43877 = G__43899;
i__42646_43878 = G__43900;
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
var and__4115__auto__ = cljs.core.some((function (p1__42657_SHARP_){
return goog.string.startsWith(p1__42657_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__42662){
var map__42663 = p__42662;
var map__42663__$1 = (((((!((map__42663 == null))))?(((((map__42663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42663):map__42663);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42663__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__42666){
var map__42667 = p__42666;
var map__42667__$1 = (((((!((map__42667 == null))))?(((((map__42667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42667):map__42667);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42667__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42667__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42667__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__42671_43918 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__42672_43919 = null;
var count__42673_43920 = (0);
var i__42674_43921 = (0);
while(true){
if((i__42674_43921 < count__42673_43920)){
var vec__42686_43922 = chunk__42672_43919.cljs$core$IIndexed$_nth$arity$2(null,i__42674_43921);
var i_43923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42686_43922,(0),null);
var param_43924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42686_43922,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_43924);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__43928 = seq__42671_43918;
var G__43929 = chunk__42672_43919;
var G__43930 = count__42673_43920;
var G__43931 = (i__42674_43921 + (1));
seq__42671_43918 = G__43928;
chunk__42672_43919 = G__43929;
count__42673_43920 = G__43930;
i__42674_43921 = G__43931;
continue;
} else {
var temp__5735__auto___43932 = cljs.core.seq(seq__42671_43918);
if(temp__5735__auto___43932){
var seq__42671_43933__$1 = temp__5735__auto___43932;
if(cljs.core.chunked_seq_QMARK_(seq__42671_43933__$1)){
var c__4556__auto___43934 = cljs.core.chunk_first(seq__42671_43933__$1);
var G__43935 = cljs.core.chunk_rest(seq__42671_43933__$1);
var G__43936 = c__4556__auto___43934;
var G__43937 = cljs.core.count(c__4556__auto___43934);
var G__43938 = (0);
seq__42671_43918 = G__43935;
chunk__42672_43919 = G__43936;
count__42673_43920 = G__43937;
i__42674_43921 = G__43938;
continue;
} else {
var vec__42690_43939 = cljs.core.first(seq__42671_43933__$1);
var i_43940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42690_43939,(0),null);
var param_43941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42690_43939,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_43941);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__43942 = cljs.core.next(seq__42671_43933__$1);
var G__43943 = null;
var G__43944 = (0);
var G__43945 = (0);
seq__42671_43918 = G__43942;
chunk__42672_43919 = G__43943;
count__42673_43920 = G__43944;
i__42674_43921 = G__43945;
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

var seq__42696_43947 = cljs.core.seq(params);
var chunk__42697_43948 = null;
var count__42698_43949 = (0);
var i__42699_43950 = (0);
while(true){
if((i__42699_43950 < count__42698_43949)){
var param_43951 = chunk__42697_43948.cljs$core$IIndexed$_nth$arity$2(null,i__42699_43950);
cljs.compiler.emit(param_43951);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_43951,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__43952 = seq__42696_43947;
var G__43953 = chunk__42697_43948;
var G__43954 = count__42698_43949;
var G__43955 = (i__42699_43950 + (1));
seq__42696_43947 = G__43952;
chunk__42697_43948 = G__43953;
count__42698_43949 = G__43954;
i__42699_43950 = G__43955;
continue;
} else {
var temp__5735__auto___43956 = cljs.core.seq(seq__42696_43947);
if(temp__5735__auto___43956){
var seq__42696_43957__$1 = temp__5735__auto___43956;
if(cljs.core.chunked_seq_QMARK_(seq__42696_43957__$1)){
var c__4556__auto___43958 = cljs.core.chunk_first(seq__42696_43957__$1);
var G__43959 = cljs.core.chunk_rest(seq__42696_43957__$1);
var G__43960 = c__4556__auto___43958;
var G__43961 = cljs.core.count(c__4556__auto___43958);
var G__43962 = (0);
seq__42696_43947 = G__43959;
chunk__42697_43948 = G__43960;
count__42698_43949 = G__43961;
i__42699_43950 = G__43962;
continue;
} else {
var param_43963 = cljs.core.first(seq__42696_43957__$1);
cljs.compiler.emit(param_43963);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_43963,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__43986 = cljs.core.next(seq__42696_43957__$1);
var G__43987 = null;
var G__43988 = (0);
var G__43989 = (0);
seq__42696_43947 = G__43986;
chunk__42697_43948 = G__43987;
count__42698_43949 = G__43988;
i__42699_43950 = G__43989;
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

var seq__42706_43996 = cljs.core.seq(params);
var chunk__42707_43997 = null;
var count__42708_43998 = (0);
var i__42709_43999 = (0);
while(true){
if((i__42709_43999 < count__42708_43998)){
var param_44000 = chunk__42707_43997.cljs$core$IIndexed$_nth$arity$2(null,i__42709_43999);
cljs.compiler.emit(param_44000);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_44000,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__44001 = seq__42706_43996;
var G__44002 = chunk__42707_43997;
var G__44003 = count__42708_43998;
var G__44004 = (i__42709_43999 + (1));
seq__42706_43996 = G__44001;
chunk__42707_43997 = G__44002;
count__42708_43998 = G__44003;
i__42709_43999 = G__44004;
continue;
} else {
var temp__5735__auto___44005 = cljs.core.seq(seq__42706_43996);
if(temp__5735__auto___44005){
var seq__42706_44006__$1 = temp__5735__auto___44005;
if(cljs.core.chunked_seq_QMARK_(seq__42706_44006__$1)){
var c__4556__auto___44007 = cljs.core.chunk_first(seq__42706_44006__$1);
var G__44008 = cljs.core.chunk_rest(seq__42706_44006__$1);
var G__44009 = c__4556__auto___44007;
var G__44010 = cljs.core.count(c__4556__auto___44007);
var G__44011 = (0);
seq__42706_43996 = G__44008;
chunk__42707_43997 = G__44009;
count__42708_43998 = G__44010;
i__42709_43999 = G__44011;
continue;
} else {
var param_44012 = cljs.core.first(seq__42706_44006__$1);
cljs.compiler.emit(param_44012);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_44012,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__44013 = cljs.core.next(seq__42706_44006__$1);
var G__44014 = null;
var G__44015 = (0);
var G__44016 = (0);
seq__42706_43996 = G__44013;
chunk__42707_43997 = G__44014;
count__42708_43998 = G__44015;
i__42709_43999 = G__44016;
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
var seq__42725 = cljs.core.seq(params);
var chunk__42726 = null;
var count__42727 = (0);
var i__42728 = (0);
while(true){
if((i__42728 < count__42727)){
var param = chunk__42726.cljs$core$IIndexed$_nth$arity$2(null,i__42728);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__44017 = seq__42725;
var G__44018 = chunk__42726;
var G__44019 = count__42727;
var G__44020 = (i__42728 + (1));
seq__42725 = G__44017;
chunk__42726 = G__44018;
count__42727 = G__44019;
i__42728 = G__44020;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42725);
if(temp__5735__auto__){
var seq__42725__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42725__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42725__$1);
var G__44022 = cljs.core.chunk_rest(seq__42725__$1);
var G__44023 = c__4556__auto__;
var G__44024 = cljs.core.count(c__4556__auto__);
var G__44025 = (0);
seq__42725 = G__44022;
chunk__42726 = G__44023;
count__42727 = G__44024;
i__42728 = G__44025;
continue;
} else {
var param = cljs.core.first(seq__42725__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__44029 = cljs.core.next(seq__42725__$1);
var G__44030 = null;
var G__44031 = (0);
var G__44032 = (0);
seq__42725 = G__44029;
chunk__42726 = G__44030;
count__42727 = G__44031;
i__42728 = G__44032;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__42738){
var map__42739 = p__42738;
var map__42739__$1 = (((((!((map__42739 == null))))?(((((map__42739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42739):map__42739);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42739__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42739__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42739__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42739__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42739__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42739__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__42749){
var map__42750 = p__42749;
var map__42750__$1 = (((((!((map__42750 == null))))?(((((map__42750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42750):map__42750);
var f = map__42750__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42750__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42750__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42750__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42750__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42750__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42750__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42750__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42750__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__41900__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_44048__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_44049 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_44048__$1);
var delegate_name_44050 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_44049),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_44050," = function (");

var seq__42752_44051 = cljs.core.seq(params);
var chunk__42753_44052 = null;
var count__42754_44053 = (0);
var i__42755_44054 = (0);
while(true){
if((i__42755_44054 < count__42754_44053)){
var param_44055 = chunk__42753_44052.cljs$core$IIndexed$_nth$arity$2(null,i__42755_44054);
cljs.compiler.emit(param_44055);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_44055,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__44056 = seq__42752_44051;
var G__44057 = chunk__42753_44052;
var G__44058 = count__42754_44053;
var G__44059 = (i__42755_44054 + (1));
seq__42752_44051 = G__44056;
chunk__42753_44052 = G__44057;
count__42754_44053 = G__44058;
i__42755_44054 = G__44059;
continue;
} else {
var temp__5735__auto___44064 = cljs.core.seq(seq__42752_44051);
if(temp__5735__auto___44064){
var seq__42752_44065__$1 = temp__5735__auto___44064;
if(cljs.core.chunked_seq_QMARK_(seq__42752_44065__$1)){
var c__4556__auto___44066 = cljs.core.chunk_first(seq__42752_44065__$1);
var G__44068 = cljs.core.chunk_rest(seq__42752_44065__$1);
var G__44069 = c__4556__auto___44066;
var G__44070 = cljs.core.count(c__4556__auto___44066);
var G__44071 = (0);
seq__42752_44051 = G__44068;
chunk__42753_44052 = G__44069;
count__42754_44053 = G__44070;
i__42755_44054 = G__44071;
continue;
} else {
var param_44074 = cljs.core.first(seq__42752_44065__$1);
cljs.compiler.emit(param_44074);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_44074,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__44078 = cljs.core.next(seq__42752_44065__$1);
var G__44079 = null;
var G__44080 = (0);
var G__44081 = (0);
seq__42752_44051 = G__44078;
chunk__42753_44052 = G__44079;
count__42754_44053 = G__44080;
i__42755_44054 = G__44081;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_44049," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_44086 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_44086,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_44050,".call(this,");

var seq__42756_44088 = cljs.core.seq(params);
var chunk__42757_44089 = null;
var count__42758_44090 = (0);
var i__42759_44091 = (0);
while(true){
if((i__42759_44091 < count__42758_44090)){
var param_44092 = chunk__42757_44089.cljs$core$IIndexed$_nth$arity$2(null,i__42759_44091);
cljs.compiler.emit(param_44092);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_44092,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__44094 = seq__42756_44088;
var G__44095 = chunk__42757_44089;
var G__44096 = count__42758_44090;
var G__44097 = (i__42759_44091 + (1));
seq__42756_44088 = G__44094;
chunk__42757_44089 = G__44095;
count__42758_44090 = G__44096;
i__42759_44091 = G__44097;
continue;
} else {
var temp__5735__auto___44099 = cljs.core.seq(seq__42756_44088);
if(temp__5735__auto___44099){
var seq__42756_44100__$1 = temp__5735__auto___44099;
if(cljs.core.chunked_seq_QMARK_(seq__42756_44100__$1)){
var c__4556__auto___44101 = cljs.core.chunk_first(seq__42756_44100__$1);
var G__44102 = cljs.core.chunk_rest(seq__42756_44100__$1);
var G__44103 = c__4556__auto___44101;
var G__44104 = cljs.core.count(c__4556__auto___44101);
var G__44105 = (0);
seq__42756_44088 = G__44102;
chunk__42757_44089 = G__44103;
count__42758_44090 = G__44104;
i__42759_44091 = G__44105;
continue;
} else {
var param_44106 = cljs.core.first(seq__42756_44100__$1);
cljs.compiler.emit(param_44106);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_44106,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__44107 = cljs.core.next(seq__42756_44100__$1);
var G__44108 = null;
var G__44109 = (0);
var G__44110 = (0);
seq__42756_44088 = G__44107;
chunk__42757_44089 = G__44108;
count__42758_44090 = G__44109;
i__42759_44091 = G__44110;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_44049,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_44049,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_44048__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_44049,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_44050,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_44049,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__41900__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__42783){
var map__42784 = p__42783;
var map__42784__$1 = (((((!((map__42784 == null))))?(((((map__42784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42784):map__42784);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42784__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42784__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42784__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42784__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42784__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42784__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42784__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42784__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42770_SHARP_){
var and__4115__auto__ = p1__42770_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__42770_SHARP_));
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
var name_44125__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_44126 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_44125__$1);
var maxparams_44127 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_44128 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_44126),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_44129 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__42775_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__42775_SHARP_)));
}),cljs.core.seq(mmap_44128));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_44126," = null;");

var seq__42796_44135 = cljs.core.seq(ms_44129);
var chunk__42797_44136 = null;
var count__42798_44137 = (0);
var i__42799_44138 = (0);
while(true){
if((i__42799_44138 < count__42798_44137)){
var vec__42814_44140 = chunk__42797_44136.cljs$core$IIndexed$_nth$arity$2(null,i__42799_44138);
var n_44141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42814_44140,(0),null);
var meth_44142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42814_44140,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_44141," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_44142))){
cljs.compiler.emit_variadic_fn_method(meth_44142);
} else {
cljs.compiler.emit_fn_method(meth_44142);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__44144 = seq__42796_44135;
var G__44145 = chunk__42797_44136;
var G__44146 = count__42798_44137;
var G__44147 = (i__42799_44138 + (1));
seq__42796_44135 = G__44144;
chunk__42797_44136 = G__44145;
count__42798_44137 = G__44146;
i__42799_44138 = G__44147;
continue;
} else {
var temp__5735__auto___44149 = cljs.core.seq(seq__42796_44135);
if(temp__5735__auto___44149){
var seq__42796_44150__$1 = temp__5735__auto___44149;
if(cljs.core.chunked_seq_QMARK_(seq__42796_44150__$1)){
var c__4556__auto___44152 = cljs.core.chunk_first(seq__42796_44150__$1);
var G__44153 = cljs.core.chunk_rest(seq__42796_44150__$1);
var G__44154 = c__4556__auto___44152;
var G__44155 = cljs.core.count(c__4556__auto___44152);
var G__44156 = (0);
seq__42796_44135 = G__44153;
chunk__42797_44136 = G__44154;
count__42798_44137 = G__44155;
i__42799_44138 = G__44156;
continue;
} else {
var vec__42820_44158 = cljs.core.first(seq__42796_44150__$1);
var n_44159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42820_44158,(0),null);
var meth_44160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42820_44158,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_44159," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_44160))){
cljs.compiler.emit_variadic_fn_method(meth_44160);
} else {
cljs.compiler.emit_fn_method(meth_44160);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__44161 = cljs.core.next(seq__42796_44150__$1);
var G__44162 = null;
var G__44163 = (0);
var G__44164 = (0);
seq__42796_44135 = G__44161;
chunk__42797_44136 = G__44162;
count__42798_44137 = G__44163;
i__42799_44138 = G__44164;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_44126," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_44127),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_44127)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_44127));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__42824_44170 = cljs.core.seq(ms_44129);
var chunk__42825_44171 = null;
var count__42826_44172 = (0);
var i__42827_44173 = (0);
while(true){
if((i__42827_44173 < count__42826_44172)){
var vec__42850_44176 = chunk__42825_44171.cljs$core$IIndexed$_nth$arity$2(null,i__42827_44173);
var n_44177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42850_44176,(0),null);
var meth_44178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42850_44176,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_44178))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_44183 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_44183," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_44185 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_44183," = new cljs.core.IndexedSeq(",a_44185,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_44177,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_44127)),(((cljs.core.count(maxparams_44127) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_44183,");"], 0));
} else {
var pcnt_44187 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_44178));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_44187,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_44177,".call(this",(((pcnt_44187 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_44187,maxparams_44127)),null,(1),null)),(2),null))),");");
}


var G__44191 = seq__42824_44170;
var G__44192 = chunk__42825_44171;
var G__44193 = count__42826_44172;
var G__44194 = (i__42827_44173 + (1));
seq__42824_44170 = G__44191;
chunk__42825_44171 = G__44192;
count__42826_44172 = G__44193;
i__42827_44173 = G__44194;
continue;
} else {
var temp__5735__auto___44195 = cljs.core.seq(seq__42824_44170);
if(temp__5735__auto___44195){
var seq__42824_44196__$1 = temp__5735__auto___44195;
if(cljs.core.chunked_seq_QMARK_(seq__42824_44196__$1)){
var c__4556__auto___44197 = cljs.core.chunk_first(seq__42824_44196__$1);
var G__44198 = cljs.core.chunk_rest(seq__42824_44196__$1);
var G__44199 = c__4556__auto___44197;
var G__44200 = cljs.core.count(c__4556__auto___44197);
var G__44201 = (0);
seq__42824_44170 = G__44198;
chunk__42825_44171 = G__44199;
count__42826_44172 = G__44200;
i__42827_44173 = G__44201;
continue;
} else {
var vec__42885_44202 = cljs.core.first(seq__42824_44196__$1);
var n_44203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42885_44202,(0),null);
var meth_44204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42885_44202,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_44204))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_44207 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_44207," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_44214 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_44207," = new cljs.core.IndexedSeq(",a_44214,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_44203,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_44127)),(((cljs.core.count(maxparams_44127) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_44207,");"], 0));
} else {
var pcnt_44217 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_44204));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_44217,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_44203,".call(this",(((pcnt_44217 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_44217,maxparams_44127)),null,(1),null)),(2),null))),");");
}


var G__44219 = cljs.core.next(seq__42824_44196__$1);
var G__44220 = null;
var G__44221 = (0);
var G__44222 = (0);
seq__42824_44170 = G__44219;
chunk__42825_44171 = G__44220;
count__42826_44172 = G__44221;
i__42827_44173 = G__44222;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_44223 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_44129)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_44223,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_44126,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_44126,".cljs$lang$applyTo = ",cljs.core.some((function (p1__42781_SHARP_){
var vec__42897 = p1__42781_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42897,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42897,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_44129),".cljs$lang$applyTo;");
} else {
}

var seq__42900_44226 = cljs.core.seq(ms_44129);
var chunk__42901_44227 = null;
var count__42902_44228 = (0);
var i__42903_44229 = (0);
while(true){
if((i__42903_44229 < count__42902_44228)){
var vec__42919_44230 = chunk__42901_44227.cljs$core$IIndexed$_nth$arity$2(null,i__42903_44229);
var n_44231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42919_44230,(0),null);
var meth_44232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42919_44230,(1),null);
var c_44233 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_44232));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_44232))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_44126,".cljs$core$IFn$_invoke$arity$variadic = ",n_44231,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_44126,".cljs$core$IFn$_invoke$arity$",c_44233," = ",n_44231,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__44266 = seq__42900_44226;
var G__44267 = chunk__42901_44227;
var G__44268 = count__42902_44228;
var G__44269 = (i__42903_44229 + (1));
seq__42900_44226 = G__44266;
chunk__42901_44227 = G__44267;
count__42902_44228 = G__44268;
i__42903_44229 = G__44269;
continue;
} else {
var temp__5735__auto___44270 = cljs.core.seq(seq__42900_44226);
if(temp__5735__auto___44270){
var seq__42900_44271__$1 = temp__5735__auto___44270;
if(cljs.core.chunked_seq_QMARK_(seq__42900_44271__$1)){
var c__4556__auto___44272 = cljs.core.chunk_first(seq__42900_44271__$1);
var G__44278 = cljs.core.chunk_rest(seq__42900_44271__$1);
var G__44279 = c__4556__auto___44272;
var G__44280 = cljs.core.count(c__4556__auto___44272);
var G__44281 = (0);
seq__42900_44226 = G__44278;
chunk__42901_44227 = G__44279;
count__42902_44228 = G__44280;
i__42903_44229 = G__44281;
continue;
} else {
var vec__42929_44282 = cljs.core.first(seq__42900_44271__$1);
var n_44283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42929_44282,(0),null);
var meth_44284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42929_44282,(1),null);
var c_44286 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_44284));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_44284))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_44126,".cljs$core$IFn$_invoke$arity$variadic = ",n_44283,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_44126,".cljs$core$IFn$_invoke$arity$",c_44286," = ",n_44283,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__44294 = cljs.core.next(seq__42900_44271__$1);
var G__44295 = null;
var G__44296 = (0);
var G__44297 = (0);
seq__42900_44226 = G__44294;
chunk__42901_44227 = G__44295;
count__42902_44228 = G__44296;
i__42903_44229 = G__44297;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_44126,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__42941){
var map__42945 = p__42941;
var map__42945__$1 = (((((!((map__42945 == null))))?(((((map__42945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42945):map__42945);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42945__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42945__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42945__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__42973_44304 = cljs.core.seq(statements);
var chunk__42974_44305 = null;
var count__42975_44306 = (0);
var i__42976_44307 = (0);
while(true){
if((i__42976_44307 < count__42975_44306)){
var s_44308 = chunk__42974_44305.cljs$core$IIndexed$_nth$arity$2(null,i__42976_44307);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_44308);


var G__44309 = seq__42973_44304;
var G__44310 = chunk__42974_44305;
var G__44311 = count__42975_44306;
var G__44312 = (i__42976_44307 + (1));
seq__42973_44304 = G__44309;
chunk__42974_44305 = G__44310;
count__42975_44306 = G__44311;
i__42976_44307 = G__44312;
continue;
} else {
var temp__5735__auto___44313 = cljs.core.seq(seq__42973_44304);
if(temp__5735__auto___44313){
var seq__42973_44314__$1 = temp__5735__auto___44313;
if(cljs.core.chunked_seq_QMARK_(seq__42973_44314__$1)){
var c__4556__auto___44315 = cljs.core.chunk_first(seq__42973_44314__$1);
var G__44316 = cljs.core.chunk_rest(seq__42973_44314__$1);
var G__44317 = c__4556__auto___44315;
var G__44318 = cljs.core.count(c__4556__auto___44315);
var G__44319 = (0);
seq__42973_44304 = G__44316;
chunk__42974_44305 = G__44317;
count__42975_44306 = G__44318;
i__42976_44307 = G__44319;
continue;
} else {
var s_44320 = cljs.core.first(seq__42973_44314__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_44320);


var G__44321 = cljs.core.next(seq__42973_44314__$1);
var G__44322 = null;
var G__44323 = (0);
var G__44324 = (0);
seq__42973_44304 = G__44321;
chunk__42974_44305 = G__44322;
count__42975_44306 = G__44323;
i__42976_44307 = G__44324;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__42986){
var map__42987 = p__42986;
var map__42987__$1 = (((((!((map__42987 == null))))?(((((map__42987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42987):map__42987);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42987__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42987__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42987__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42987__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42987__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__42992,is_loop){
var map__42993 = p__42992;
var map__42993__$1 = (((((!((map__42993 == null))))?(((((map__42993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42993):map__42993);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42993__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42993__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42993__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__42997_44339 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__42998_44340 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__42998_44340);

try{var seq__42999_44347 = cljs.core.seq(bindings);
var chunk__43000_44348 = null;
var count__43001_44349 = (0);
var i__43002_44350 = (0);
while(true){
if((i__43002_44350 < count__43001_44349)){
var map__43015_44351 = chunk__43000_44348.cljs$core$IIndexed$_nth$arity$2(null,i__43002_44350);
var map__43015_44352__$1 = (((((!((map__43015_44351 == null))))?(((((map__43015_44351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43015_44351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43015_44351):map__43015_44351);
var binding_44353 = map__43015_44352__$1;
var init_44354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43015_44352__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_44353);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_44354,";");


var G__44355 = seq__42999_44347;
var G__44357 = chunk__43000_44348;
var G__44358 = count__43001_44349;
var G__44359 = (i__43002_44350 + (1));
seq__42999_44347 = G__44355;
chunk__43000_44348 = G__44357;
count__43001_44349 = G__44358;
i__43002_44350 = G__44359;
continue;
} else {
var temp__5735__auto___44361 = cljs.core.seq(seq__42999_44347);
if(temp__5735__auto___44361){
var seq__42999_44362__$1 = temp__5735__auto___44361;
if(cljs.core.chunked_seq_QMARK_(seq__42999_44362__$1)){
var c__4556__auto___44363 = cljs.core.chunk_first(seq__42999_44362__$1);
var G__44364 = cljs.core.chunk_rest(seq__42999_44362__$1);
var G__44365 = c__4556__auto___44363;
var G__44366 = cljs.core.count(c__4556__auto___44363);
var G__44367 = (0);
seq__42999_44347 = G__44364;
chunk__43000_44348 = G__44365;
count__43001_44349 = G__44366;
i__43002_44350 = G__44367;
continue;
} else {
var map__43017_44368 = cljs.core.first(seq__42999_44362__$1);
var map__43017_44369__$1 = (((((!((map__43017_44368 == null))))?(((((map__43017_44368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43017_44368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43017_44368):map__43017_44368);
var binding_44370 = map__43017_44369__$1;
var init_44371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43017_44369__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_44370);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_44371,";");


var G__44377 = cljs.core.next(seq__42999_44362__$1);
var G__44378 = null;
var G__44379 = (0);
var G__44380 = (0);
seq__42999_44347 = G__44377;
chunk__43000_44348 = G__44378;
count__43001_44349 = G__44379;
i__43002_44350 = G__44380;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__42997_44339);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__43019){
var map__43020 = p__43019;
var map__43020__$1 = (((((!((map__43020 == null))))?(((((map__43020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43020):map__43020);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43020__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43020__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43020__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___44397 = cljs.core.count(exprs);
var i_44400 = (0);
while(true){
if((i_44400 < n__4613__auto___44397)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_44400) : temps.call(null,i_44400))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_44400) : exprs.call(null,i_44400)),";");

var G__44402 = (i_44400 + (1));
i_44400 = G__44402;
continue;
} else {
}
break;
}

var n__4613__auto___44403 = cljs.core.count(exprs);
var i_44404 = (0);
while(true){
if((i_44404 < n__4613__auto___44403)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_44404) : params.call(null,i_44404)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_44404) : temps.call(null,i_44404)),";");

var G__44409 = (i_44404 + (1));
i_44404 = G__44409;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__43023){
var map__43024 = p__43023;
var map__43024__$1 = (((((!((map__43024 == null))))?(((((map__43024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43024):map__43024);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43024__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43024__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43024__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__43026_44411 = cljs.core.seq(bindings);
var chunk__43027_44412 = null;
var count__43028_44413 = (0);
var i__43029_44414 = (0);
while(true){
if((i__43029_44414 < count__43028_44413)){
var map__43034_44416 = chunk__43027_44412.cljs$core$IIndexed$_nth$arity$2(null,i__43029_44414);
var map__43034_44417__$1 = (((((!((map__43034_44416 == null))))?(((((map__43034_44416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43034_44416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43034_44416):map__43034_44416);
var binding_44418 = map__43034_44417__$1;
var init_44419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43034_44417__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_44418)," = ",init_44419,";");


var G__44421 = seq__43026_44411;
var G__44422 = chunk__43027_44412;
var G__44423 = count__43028_44413;
var G__44424 = (i__43029_44414 + (1));
seq__43026_44411 = G__44421;
chunk__43027_44412 = G__44422;
count__43028_44413 = G__44423;
i__43029_44414 = G__44424;
continue;
} else {
var temp__5735__auto___44425 = cljs.core.seq(seq__43026_44411);
if(temp__5735__auto___44425){
var seq__43026_44426__$1 = temp__5735__auto___44425;
if(cljs.core.chunked_seq_QMARK_(seq__43026_44426__$1)){
var c__4556__auto___44427 = cljs.core.chunk_first(seq__43026_44426__$1);
var G__44428 = cljs.core.chunk_rest(seq__43026_44426__$1);
var G__44429 = c__4556__auto___44427;
var G__44430 = cljs.core.count(c__4556__auto___44427);
var G__44431 = (0);
seq__43026_44411 = G__44428;
chunk__43027_44412 = G__44429;
count__43028_44413 = G__44430;
i__43029_44414 = G__44431;
continue;
} else {
var map__43037_44436 = cljs.core.first(seq__43026_44426__$1);
var map__43037_44437__$1 = (((((!((map__43037_44436 == null))))?(((((map__43037_44436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43037_44436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43037_44436):map__43037_44436);
var binding_44438 = map__43037_44437__$1;
var init_44439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43037_44437__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_44438)," = ",init_44439,";");


var G__44440 = cljs.core.next(seq__43026_44426__$1);
var G__44441 = null;
var G__44442 = (0);
var G__44443 = (0);
seq__43026_44411 = G__44440;
chunk__43027_44412 = G__44441;
count__43028_44413 = G__44442;
i__43029_44414 = G__44443;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__43042){
var map__43043 = p__43042;
var map__43043__$1 = (((((!((map__43043 == null))))?(((((map__43043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43043):map__43043);
var expr = map__43043__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43043__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43043__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43043__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__43064 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__43064.cljs$core$IFn$_invoke$arity$1 ? fexpr__43064.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__43064.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__43068 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__43068.cljs$core$IFn$_invoke$arity$1 ? fexpr__43068.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__43068.call(null,first_arg_tag));
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
var vec__43046 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__43040_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43040_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__43041_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__43041_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43046,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43046,(1),null);
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
var pimpl_44547 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_44547,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_44552 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_44552,args)),(((mfa_44552 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_44552,args)),"], 0))"], 0));
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
var G__43087 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__43086 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__43086.cljs$core$IFn$_invoke$arity$1 ? fexpr__43086.cljs$core$IFn$_invoke$arity$1(G__43087) : fexpr__43086.call(null,G__43087));
} else {
return and__4115__auto__;
}
})())){
var fprop_44561 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_44561," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_44561,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_44561," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_44561,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__43096){
var map__43098 = p__43096;
var map__43098__$1 = (((((!((map__43098 == null))))?(((((map__43098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43098):map__43098);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43098__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43098__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43098__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__43107){
var map__43112 = p__43107;
var map__43112__$1 = (((((!((map__43112 == null))))?(((((map__43112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43112):map__43112);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43112__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43112__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43112__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var map__43128 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__43128__$1 = (((((!((map__43128 == null))))?(((((map__43128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43128):map__43128);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43128__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43128__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__43129 = options;
var map__43129__$1 = (((((!((map__43129 == null))))?(((((map__43129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43129):map__43129);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43129__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43129__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43129__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__43130 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__43135 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__43135__$1 = (((((!((map__43135 == null))))?(((((map__43135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43135):map__43135);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43135__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43135__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43130,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43130,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__43137_44622 = cljs.core.seq(libs_to_load);
var chunk__43138_44623 = null;
var count__43139_44624 = (0);
var i__43140_44625 = (0);
while(true){
if((i__43140_44625 < count__43139_44624)){
var lib_44630 = chunk__43138_44623.cljs$core$IIndexed$_nth$arity$2(null,i__43140_44625);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_44630)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_44630),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_44630),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_44630),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_44630),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_44630,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_44630),"');");
}

}
}
}


var G__44636 = seq__43137_44622;
var G__44637 = chunk__43138_44623;
var G__44638 = count__43139_44624;
var G__44639 = (i__43140_44625 + (1));
seq__43137_44622 = G__44636;
chunk__43138_44623 = G__44637;
count__43139_44624 = G__44638;
i__43140_44625 = G__44639;
continue;
} else {
var temp__5735__auto___44644 = cljs.core.seq(seq__43137_44622);
if(temp__5735__auto___44644){
var seq__43137_44645__$1 = temp__5735__auto___44644;
if(cljs.core.chunked_seq_QMARK_(seq__43137_44645__$1)){
var c__4556__auto___44646 = cljs.core.chunk_first(seq__43137_44645__$1);
var G__44651 = cljs.core.chunk_rest(seq__43137_44645__$1);
var G__44652 = c__4556__auto___44646;
var G__44653 = cljs.core.count(c__4556__auto___44646);
var G__44654 = (0);
seq__43137_44622 = G__44651;
chunk__43138_44623 = G__44652;
count__43139_44624 = G__44653;
i__43140_44625 = G__44654;
continue;
} else {
var lib_44659 = cljs.core.first(seq__43137_44645__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_44659)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_44659),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_44659),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_44659),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_44659),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_44659,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_44659),"');");
}

}
}
}


var G__44661 = cljs.core.next(seq__43137_44645__$1);
var G__44662 = null;
var G__44663 = (0);
var G__44664 = (0);
seq__43137_44622 = G__44661;
chunk__43138_44623 = G__44662;
count__43139_44624 = G__44663;
i__43140_44625 = G__44664;
continue;
}
} else {
}
}
break;
}

var seq__43174_44665 = cljs.core.seq(node_libs);
var chunk__43175_44666 = null;
var count__43176_44667 = (0);
var i__43177_44668 = (0);
while(true){
if((i__43177_44668 < count__43176_44667)){
var lib_44669 = chunk__43175_44666.cljs$core$IIndexed$_nth$arity$2(null,i__43177_44668);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_44669)," = require('",lib_44669,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__44671 = seq__43174_44665;
var G__44672 = chunk__43175_44666;
var G__44673 = count__43176_44667;
var G__44674 = (i__43177_44668 + (1));
seq__43174_44665 = G__44671;
chunk__43175_44666 = G__44672;
count__43176_44667 = G__44673;
i__43177_44668 = G__44674;
continue;
} else {
var temp__5735__auto___44676 = cljs.core.seq(seq__43174_44665);
if(temp__5735__auto___44676){
var seq__43174_44677__$1 = temp__5735__auto___44676;
if(cljs.core.chunked_seq_QMARK_(seq__43174_44677__$1)){
var c__4556__auto___44678 = cljs.core.chunk_first(seq__43174_44677__$1);
var G__44679 = cljs.core.chunk_rest(seq__43174_44677__$1);
var G__44680 = c__4556__auto___44678;
var G__44681 = cljs.core.count(c__4556__auto___44678);
var G__44682 = (0);
seq__43174_44665 = G__44679;
chunk__43175_44666 = G__44680;
count__43176_44667 = G__44681;
i__43177_44668 = G__44682;
continue;
} else {
var lib_44683 = cljs.core.first(seq__43174_44677__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_44683)," = require('",lib_44683,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__44684 = cljs.core.next(seq__43174_44677__$1);
var G__44685 = null;
var G__44686 = (0);
var G__44687 = (0);
seq__43174_44665 = G__44684;
chunk__43175_44666 = G__44685;
count__43176_44667 = G__44686;
i__43177_44668 = G__44687;
continue;
}
} else {
}
}
break;
}

var seq__43190_44688 = cljs.core.seq(global_exports_libs);
var chunk__43191_44689 = null;
var count__43192_44690 = (0);
var i__43193_44691 = (0);
while(true){
if((i__43193_44691 < count__43192_44690)){
var lib_44692 = chunk__43191_44689.cljs$core$IIndexed$_nth$arity$2(null,i__43193_44691);
var map__43198_44693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_44692));
var map__43198_44694__$1 = (((((!((map__43198_44693 == null))))?(((((map__43198_44693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43198_44693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43198_44693):map__43198_44693);
var global_exports_44695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43198_44694__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_44695,lib_44692);


var G__44696 = seq__43190_44688;
var G__44697 = chunk__43191_44689;
var G__44698 = count__43192_44690;
var G__44699 = (i__43193_44691 + (1));
seq__43190_44688 = G__44696;
chunk__43191_44689 = G__44697;
count__43192_44690 = G__44698;
i__43193_44691 = G__44699;
continue;
} else {
var temp__5735__auto___44700 = cljs.core.seq(seq__43190_44688);
if(temp__5735__auto___44700){
var seq__43190_44701__$1 = temp__5735__auto___44700;
if(cljs.core.chunked_seq_QMARK_(seq__43190_44701__$1)){
var c__4556__auto___44702 = cljs.core.chunk_first(seq__43190_44701__$1);
var G__44703 = cljs.core.chunk_rest(seq__43190_44701__$1);
var G__44704 = c__4556__auto___44702;
var G__44705 = cljs.core.count(c__4556__auto___44702);
var G__44706 = (0);
seq__43190_44688 = G__44703;
chunk__43191_44689 = G__44704;
count__43192_44690 = G__44705;
i__43193_44691 = G__44706;
continue;
} else {
var lib_44707 = cljs.core.first(seq__43190_44701__$1);
var map__43204_44708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_44707));
var map__43204_44709__$1 = (((((!((map__43204_44708 == null))))?(((((map__43204_44708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43204_44708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43204_44708):map__43204_44708);
var global_exports_44710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43204_44709__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_44710,lib_44707);


var G__44711 = cljs.core.next(seq__43190_44701__$1);
var G__44712 = null;
var G__44713 = (0);
var G__44714 = (0);
seq__43190_44688 = G__44711;
chunk__43191_44689 = G__44712;
count__43192_44690 = G__44713;
i__43193_44691 = G__44714;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__43230){
var map__43231 = p__43230;
var map__43231__$1 = (((((!((map__43231 == null))))?(((((map__43231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43231):map__43231);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43231__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__43233){
var map__43234 = p__43233;
var map__43234__$1 = (((((!((map__43234 == null))))?(((((map__43234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43234):map__43234);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43234__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43234__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43234__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43234__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43234__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43234__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43234__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__43236){
var map__43237 = p__43236;
var map__43237__$1 = (((((!((map__43237 == null))))?(((((map__43237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43237):map__43237);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43237__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43237__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43237__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43237__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43237__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__43241_44741 = cljs.core.seq(protocols);
var chunk__43242_44742 = null;
var count__43243_44743 = (0);
var i__43244_44744 = (0);
while(true){
if((i__43244_44744 < count__43243_44743)){
var protocol_44746 = chunk__43242_44742.cljs$core$IIndexed$_nth$arity$2(null,i__43244_44744);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_44746)),"}");


var G__44747 = seq__43241_44741;
var G__44748 = chunk__43242_44742;
var G__44749 = count__43243_44743;
var G__44750 = (i__43244_44744 + (1));
seq__43241_44741 = G__44747;
chunk__43242_44742 = G__44748;
count__43243_44743 = G__44749;
i__43244_44744 = G__44750;
continue;
} else {
var temp__5735__auto___44751 = cljs.core.seq(seq__43241_44741);
if(temp__5735__auto___44751){
var seq__43241_44752__$1 = temp__5735__auto___44751;
if(cljs.core.chunked_seq_QMARK_(seq__43241_44752__$1)){
var c__4556__auto___44754 = cljs.core.chunk_first(seq__43241_44752__$1);
var G__44755 = cljs.core.chunk_rest(seq__43241_44752__$1);
var G__44756 = c__4556__auto___44754;
var G__44757 = cljs.core.count(c__4556__auto___44754);
var G__44758 = (0);
seq__43241_44741 = G__44755;
chunk__43242_44742 = G__44756;
count__43243_44743 = G__44757;
i__43244_44744 = G__44758;
continue;
} else {
var protocol_44759 = cljs.core.first(seq__43241_44752__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_44759)),"}");


var G__44760 = cljs.core.next(seq__43241_44752__$1);
var G__44761 = null;
var G__44762 = (0);
var G__44763 = (0);
seq__43241_44741 = G__44760;
chunk__43242_44742 = G__44761;
count__43243_44743 = G__44762;
i__43244_44744 = G__44763;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__43245_44768 = cljs.core.seq(fields__$1);
var chunk__43246_44769 = null;
var count__43247_44770 = (0);
var i__43248_44771 = (0);
while(true){
if((i__43248_44771 < count__43247_44770)){
var fld_44773 = chunk__43246_44769.cljs$core$IIndexed$_nth$arity$2(null,i__43248_44771);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_44773," = ",fld_44773,";");


var G__44774 = seq__43245_44768;
var G__44775 = chunk__43246_44769;
var G__44776 = count__43247_44770;
var G__44777 = (i__43248_44771 + (1));
seq__43245_44768 = G__44774;
chunk__43246_44769 = G__44775;
count__43247_44770 = G__44776;
i__43248_44771 = G__44777;
continue;
} else {
var temp__5735__auto___44778 = cljs.core.seq(seq__43245_44768);
if(temp__5735__auto___44778){
var seq__43245_44779__$1 = temp__5735__auto___44778;
if(cljs.core.chunked_seq_QMARK_(seq__43245_44779__$1)){
var c__4556__auto___44780 = cljs.core.chunk_first(seq__43245_44779__$1);
var G__44781 = cljs.core.chunk_rest(seq__43245_44779__$1);
var G__44782 = c__4556__auto___44780;
var G__44783 = cljs.core.count(c__4556__auto___44780);
var G__44784 = (0);
seq__43245_44768 = G__44781;
chunk__43246_44769 = G__44782;
count__43247_44770 = G__44783;
i__43248_44771 = G__44784;
continue;
} else {
var fld_44787 = cljs.core.first(seq__43245_44779__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_44787," = ",fld_44787,";");


var G__44788 = cljs.core.next(seq__43245_44779__$1);
var G__44789 = null;
var G__44790 = (0);
var G__44791 = (0);
seq__43245_44768 = G__44788;
chunk__43246_44769 = G__44789;
count__43247_44770 = G__44790;
i__43248_44771 = G__44791;
continue;
}
} else {
}
}
break;
}

var seq__43254_44792 = cljs.core.seq(pmasks);
var chunk__43255_44793 = null;
var count__43256_44794 = (0);
var i__43257_44795 = (0);
while(true){
if((i__43257_44795 < count__43256_44794)){
var vec__43279_44796 = chunk__43255_44793.cljs$core$IIndexed$_nth$arity$2(null,i__43257_44795);
var pno_44797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43279_44796,(0),null);
var pmask_44798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43279_44796,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_44797,"$ = ",pmask_44798,";");


var G__44803 = seq__43254_44792;
var G__44804 = chunk__43255_44793;
var G__44805 = count__43256_44794;
var G__44806 = (i__43257_44795 + (1));
seq__43254_44792 = G__44803;
chunk__43255_44793 = G__44804;
count__43256_44794 = G__44805;
i__43257_44795 = G__44806;
continue;
} else {
var temp__5735__auto___44807 = cljs.core.seq(seq__43254_44792);
if(temp__5735__auto___44807){
var seq__43254_44808__$1 = temp__5735__auto___44807;
if(cljs.core.chunked_seq_QMARK_(seq__43254_44808__$1)){
var c__4556__auto___44809 = cljs.core.chunk_first(seq__43254_44808__$1);
var G__44810 = cljs.core.chunk_rest(seq__43254_44808__$1);
var G__44811 = c__4556__auto___44809;
var G__44812 = cljs.core.count(c__4556__auto___44809);
var G__44813 = (0);
seq__43254_44792 = G__44810;
chunk__43255_44793 = G__44811;
count__43256_44794 = G__44812;
i__43257_44795 = G__44813;
continue;
} else {
var vec__43284_44814 = cljs.core.first(seq__43254_44808__$1);
var pno_44815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43284_44814,(0),null);
var pmask_44816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43284_44814,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_44815,"$ = ",pmask_44816,";");


var G__44817 = cljs.core.next(seq__43254_44808__$1);
var G__44818 = null;
var G__44819 = (0);
var G__44820 = (0);
seq__43254_44792 = G__44817;
chunk__43255_44793 = G__44818;
count__43256_44794 = G__44819;
i__43257_44795 = G__44820;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__43288){
var map__43289 = p__43288;
var map__43289__$1 = (((((!((map__43289 == null))))?(((((map__43289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43289):map__43289);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43289__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43289__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43289__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43289__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43289__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__43297_44825 = cljs.core.seq(protocols);
var chunk__43298_44826 = null;
var count__43299_44827 = (0);
var i__43300_44828 = (0);
while(true){
if((i__43300_44828 < count__43299_44827)){
var protocol_44829 = chunk__43298_44826.cljs$core$IIndexed$_nth$arity$2(null,i__43300_44828);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_44829)),"}");


var G__44830 = seq__43297_44825;
var G__44831 = chunk__43298_44826;
var G__44832 = count__43299_44827;
var G__44833 = (i__43300_44828 + (1));
seq__43297_44825 = G__44830;
chunk__43298_44826 = G__44831;
count__43299_44827 = G__44832;
i__43300_44828 = G__44833;
continue;
} else {
var temp__5735__auto___44834 = cljs.core.seq(seq__43297_44825);
if(temp__5735__auto___44834){
var seq__43297_44835__$1 = temp__5735__auto___44834;
if(cljs.core.chunked_seq_QMARK_(seq__43297_44835__$1)){
var c__4556__auto___44836 = cljs.core.chunk_first(seq__43297_44835__$1);
var G__44837 = cljs.core.chunk_rest(seq__43297_44835__$1);
var G__44838 = c__4556__auto___44836;
var G__44839 = cljs.core.count(c__4556__auto___44836);
var G__44840 = (0);
seq__43297_44825 = G__44837;
chunk__43298_44826 = G__44838;
count__43299_44827 = G__44839;
i__43300_44828 = G__44840;
continue;
} else {
var protocol_44841 = cljs.core.first(seq__43297_44835__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_44841)),"}");


var G__44843 = cljs.core.next(seq__43297_44835__$1);
var G__44844 = null;
var G__44845 = (0);
var G__44846 = (0);
seq__43297_44825 = G__44843;
chunk__43298_44826 = G__44844;
count__43299_44827 = G__44845;
i__43300_44828 = G__44846;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__43304_44848 = cljs.core.seq(fields__$1);
var chunk__43305_44849 = null;
var count__43306_44850 = (0);
var i__43307_44851 = (0);
while(true){
if((i__43307_44851 < count__43306_44850)){
var fld_44852 = chunk__43305_44849.cljs$core$IIndexed$_nth$arity$2(null,i__43307_44851);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_44852," = ",fld_44852,";");


var G__44853 = seq__43304_44848;
var G__44854 = chunk__43305_44849;
var G__44855 = count__43306_44850;
var G__44856 = (i__43307_44851 + (1));
seq__43304_44848 = G__44853;
chunk__43305_44849 = G__44854;
count__43306_44850 = G__44855;
i__43307_44851 = G__44856;
continue;
} else {
var temp__5735__auto___44857 = cljs.core.seq(seq__43304_44848);
if(temp__5735__auto___44857){
var seq__43304_44858__$1 = temp__5735__auto___44857;
if(cljs.core.chunked_seq_QMARK_(seq__43304_44858__$1)){
var c__4556__auto___44859 = cljs.core.chunk_first(seq__43304_44858__$1);
var G__44860 = cljs.core.chunk_rest(seq__43304_44858__$1);
var G__44861 = c__4556__auto___44859;
var G__44862 = cljs.core.count(c__4556__auto___44859);
var G__44863 = (0);
seq__43304_44848 = G__44860;
chunk__43305_44849 = G__44861;
count__43306_44850 = G__44862;
i__43307_44851 = G__44863;
continue;
} else {
var fld_44864 = cljs.core.first(seq__43304_44858__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_44864," = ",fld_44864,";");


var G__44865 = cljs.core.next(seq__43304_44858__$1);
var G__44866 = null;
var G__44867 = (0);
var G__44868 = (0);
seq__43304_44848 = G__44865;
chunk__43305_44849 = G__44866;
count__43306_44850 = G__44867;
i__43307_44851 = G__44868;
continue;
}
} else {
}
}
break;
}

var seq__43316_44869 = cljs.core.seq(pmasks);
var chunk__43317_44870 = null;
var count__43318_44871 = (0);
var i__43319_44872 = (0);
while(true){
if((i__43319_44872 < count__43318_44871)){
var vec__43329_44873 = chunk__43317_44870.cljs$core$IIndexed$_nth$arity$2(null,i__43319_44872);
var pno_44874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43329_44873,(0),null);
var pmask_44875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43329_44873,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_44874,"$ = ",pmask_44875,";");


var G__44876 = seq__43316_44869;
var G__44877 = chunk__43317_44870;
var G__44878 = count__43318_44871;
var G__44879 = (i__43319_44872 + (1));
seq__43316_44869 = G__44876;
chunk__43317_44870 = G__44877;
count__43318_44871 = G__44878;
i__43319_44872 = G__44879;
continue;
} else {
var temp__5735__auto___44880 = cljs.core.seq(seq__43316_44869);
if(temp__5735__auto___44880){
var seq__43316_44881__$1 = temp__5735__auto___44880;
if(cljs.core.chunked_seq_QMARK_(seq__43316_44881__$1)){
var c__4556__auto___44882 = cljs.core.chunk_first(seq__43316_44881__$1);
var G__44883 = cljs.core.chunk_rest(seq__43316_44881__$1);
var G__44884 = c__4556__auto___44882;
var G__44885 = cljs.core.count(c__4556__auto___44882);
var G__44886 = (0);
seq__43316_44869 = G__44883;
chunk__43317_44870 = G__44884;
count__43318_44871 = G__44885;
i__43319_44872 = G__44886;
continue;
} else {
var vec__43334_44887 = cljs.core.first(seq__43316_44881__$1);
var pno_44888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43334_44887,(0),null);
var pmask_44889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43334_44887,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_44888,"$ = ",pmask_44889,";");


var G__44890 = cljs.core.next(seq__43316_44881__$1);
var G__44891 = null;
var G__44892 = (0);
var G__44893 = (0);
seq__43316_44869 = G__44890;
chunk__43317_44870 = G__44891;
count__43318_44871 = G__44892;
i__43319_44872 = G__44893;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__43338){
var map__43340 = p__43338;
var map__43340__$1 = (((((!((map__43340 == null))))?(((((map__43340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43340):map__43340);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43340__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43340__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43340__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43340__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43340__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__43345){
var map__43346 = p__43345;
var map__43346__$1 = (((((!((map__43346 == null))))?(((((map__43346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43346):map__43346);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43346__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43346__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43346__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43346__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43346__$1,new cljs.core.Keyword(null,"args","args",1315556576));
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

var seq__43396 = cljs.core.seq(table);
var chunk__43397 = null;
var count__43398 = (0);
var i__43399 = (0);
while(true){
if((i__43399 < count__43398)){
var vec__43407 = chunk__43397.cljs$core$IIndexed$_nth$arity$2(null,i__43399);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43407,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43407,(1),null);
var ns_44930 = cljs.core.namespace(sym);
var name_44931 = cljs.core.name(sym);
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


var G__44934 = seq__43396;
var G__44935 = chunk__43397;
var G__44936 = count__43398;
var G__44937 = (i__43399 + (1));
seq__43396 = G__44934;
chunk__43397 = G__44935;
count__43398 = G__44936;
i__43399 = G__44937;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43396);
if(temp__5735__auto__){
var seq__43396__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43396__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43396__$1);
var G__44942 = cljs.core.chunk_rest(seq__43396__$1);
var G__44943 = c__4556__auto__;
var G__44944 = cljs.core.count(c__4556__auto__);
var G__44945 = (0);
seq__43396 = G__44942;
chunk__43397 = G__44943;
count__43398 = G__44944;
i__43399 = G__44945;
continue;
} else {
var vec__43411 = cljs.core.first(seq__43396__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43411,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43411,(1),null);
var ns_44946 = cljs.core.namespace(sym);
var name_44947 = cljs.core.name(sym);
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


var G__44948 = cljs.core.next(seq__43396__$1);
var G__44949 = null;
var G__44950 = (0);
var G__44951 = (0);
seq__43396 = G__44948;
chunk__43397 = G__44949;
count__43398 = G__44950;
i__43399 = G__44951;
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
var G__43421 = arguments.length;
switch (G__43421) {
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
var k_44955 = cljs.core.first(ks);
var vec__43425_44956 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_44955);
var top_44957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43425_44956,(0),null);
var prefix_SINGLEQUOTE__44958 = vec__43425_44956;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_44955)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__44958) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_44957)) || (cljs.core.contains_QMARK_(known_externs,top_44957)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__44958)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_44957);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__44958)),";");
}
} else {
}

var m_44963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_44955);
if(cljs.core.empty_QMARK_(m_44963)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__44958,m_44963,top_level,known_externs);
}

var G__44964 = cljs.core.next(ks);
ks = G__44964;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
