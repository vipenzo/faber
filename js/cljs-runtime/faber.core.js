goog.provide('faber.core');
var module$node_modules$codemirror$lib$codemirror=shadow.js.require("module$node_modules$codemirror$lib$codemirror", {});
var module$node_modules$codemirror$mode$clojure$clojure=shadow.js.require("module$node_modules$codemirror$mode$clojure$clojure", {});
var module$node_modules$codemirror$addon$edit$closebrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$closebrackets", {});
var module$node_modules$codemirror$addon$edit$matchbrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$matchbrackets", {});
var module$node_modules$parinfer_codemirror$parinfer_codemirror=shadow.js.require("module$node_modules$parinfer_codemirror$parinfer_codemirror", {});
faber.core.source_examples = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(circle 40)","(for [n (range 10)] n)","(defcell x 10)","(defcell counter (interval 1000 inc))","(defcell bigger-counter (* @counter 10))","(require '[cljs.js :as cljs])\n\n(fn? cljs/eval-str)"], null);
if((typeof faber !== 'undefined') && (typeof faber.core !== 'undefined') && (typeof faber.core.c_state !== 'undefined')){
} else {
faber.core.c_state = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
}
faber.core.eval_str = (function faber$core$eval_str(source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(faber.core.c_state,source,"[test]",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,faber.core.c_state),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("faber.user")], null),cb);
});
faber.core.format_value = (function faber$core$format_value(value){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
});
faber.core.visible_pane_QMARK_ = (function faber$core$visible_pane_QMARK_(visible){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(visible)?"block":"none")], null)], null);
});
var the_class__26988__auto___38928 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),null,new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/error-pane"], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function faber$core$error_pane(p__38899){
var map__38900 = p__38899;
var map__38900__$1 = (((((!((map__38900 == null))))?(((((map__38900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38900):map__38900);
var map__38901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38900__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var map__38901__$1 = (((((!((map__38901 == null))))?(((((map__38901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38901):map__38901);
var visible = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38901__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38901__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["render error-pane visible=",visible," value=",value], 0));

return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),faber.core.visible_pane_QMARK_(visible),(((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(value) instanceof Error))?re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3.bg-washed-red",".pa3.bg-washed-red",270898254),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".b",".b",-335131582),cljs.core.ex_message(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(value))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(value)))], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_cause(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(value))], 0))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
faber.core.error_paneClass = the_class__26988__auto___38928;

faber.core.error_pane = re_view.core.factory(the_class__26988__auto___38928);
var the_class__26988__auto___38929 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),null,new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/result-pane"], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function faber$core$result_pane(p__38904){
var map__38905 = p__38904;
var map__38905__$1 = (((((!((map__38905 == null))))?(((((map__38905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38905):map__38905);
var map__38906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38905__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var map__38906__$1 = (((((!((map__38906 == null))))?(((((map__38906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38906):map__38906);
var visible = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38906__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38906__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["render result-pane visible=",visible," value=",value], 0));

return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2(re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3.bg-washed-green",".pa3.bg-washed-green",431134598),faber.core.visible_pane_QMARK_(visible),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Result:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3",".pa3",1465128375),faber.core.format_value(value)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
faber.core.result_paneClass = the_class__26988__auto___38929;

faber.core.result_pane = re_view.core.factory(the_class__26988__auto___38929);
var the_class__26988__auto___38930 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),null,new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/canvas3d-pane"], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function faber$core$canvas3d_pane(p__38909){
var map__38910 = p__38909;
var map__38910__$1 = (((((!((map__38910 == null))))?(((((map__38910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38910):map__38910);
var map__38911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38910__$1,new cljs.core.Keyword("view","props","view/props",449562012));
var map__38911__$1 = (((((!((map__38911 == null))))?(((((map__38911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38911):map__38911);
var visible = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38911__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38911__$1,new cljs.core.Keyword(null,"value","value",305978217));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["render 3d-pane visible=",visible," value=",value], 0));

return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),faber.core.visible_pane_QMARK_(visible),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(:3Dmodel value)=",new cljs.core.Keyword(null,"3dmodel","3dmodel",135298134).cljs$core$IFn$_invoke$arity$1(value)], 0)),faber.canvas3d.canvas3d(value)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
faber.core.canvas3d_paneClass = the_class__26988__auto___38930;

faber.core.canvas3d_pane = re_view.core.factory(the_class__26988__auto___38930);
var the_class__26988__auto___38931 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (_,source){
return source;
}),new cljs.core.Keyword(null,"docstring","docstring",879233117),null,new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/model-editor"], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("view","initial-state","view/initial-state",-2068231227),(function (_,source){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"model-source","model-source",-1983623726),source], null);
}),new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (this$,source){
var textarea = document.getElementById("codearea");
var codearea = module$node_modules$codemirror$lib$codemirror.fromTextArea(textarea,({"lineNumbers": true, "viewportMargin": Infinity, "matchBrackets": true, "closebrackets": true, "autofocus": true, "autoCloseBrackets": true, "mode": "clojure"}));
module$node_modules$parinfer_codemirror$parinfer_codemirror.init(codearea);

re_db.d.transact_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"codearea","codearea",1347344499),codearea], null)], null));

return faber.core.eval_str(source,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211)));
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function faber$core$model_editor(p__38914){
var map__38915 = p__38914;
var map__38915__$1 = (((((!((map__38915 == null))))?(((((map__38915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38915):map__38915);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38915__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2((function (){var map__38917 = cljs.core.deref(state);
var map__38917__$1 = (((((!((map__38917 == null))))?(((((map__38917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38917):map__38917);
var model_source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38917__$1,new cljs.core.Keyword(null,"model-source","model-source",-1983623726));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38917__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#codearea.f6.bg-near-white.monospace","textarea#codearea.f6.bg-near-white.monospace",-1586178204),new cljs.core.Keyword(null,"model-source","model-source",-1983623726).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null);
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
faber.core.model_editorClass = the_class__26988__auto___38931;

faber.core.model_editor = re_view.core.factory(the_class__26988__auto___38931);
var the_class__26988__auto___38932 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("view","initial-state","view/initial-state",-2068231227),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"3d","3d",-1024035737),new cljs.core.Keyword(null,"value","value",305978217),"press Run"], null);
}),new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (this$){
return re_db.d.transact_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword(null,"faber","faber",-1316193656),new cljs.core.Keyword(null,"right-pane","right-pane",1762684259),this$], null)], null));
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function faber$core$right_pane(p__38919){
var map__38920 = p__38919;
var map__38920__$1 = (((((!((map__38920 == null))))?(((((map__38920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38920):map__38920);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38920__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2((function (){var current = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state));
var make_pane_value = (function (kind){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,kind),new cljs.core.Keyword(null,"value","value",305978217),value], null);
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["render right-pane","current=",current,"value=",value], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),faber.core.canvas3d_pane(make_pane_value(new cljs.core.Keyword(null,"3d","3d",-1024035737))),faber.core.result_pane(make_pane_value(new cljs.core.Keyword(null,"result","result",1415092211))),faber.core.error_pane(make_pane_value(new cljs.core.Keyword(null,"error","error",-978969032)))], null);
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),null,new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/right-pane"], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
faber.core.right_paneClass = the_class__26988__auto___38932;

faber.core.right_pane = re_view.core.factory(the_class__26988__auto___38932);
faber.core.parse_result = (function faber$core$parse_result(res){
var toolbar = re_db.d.get(new cljs.core.Keyword(null,"faber","faber",-1316193656),new cljs.core.Keyword(null,"stlbutton","stlbutton",-1508903376));
var vec__38922 = (cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),res], null):(cljs.core.truth_(new cljs.core.Keyword(null,"3dmodel","3dmodel",135298134).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"3d","3d",-1024035737),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res)], null)
));
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38922,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38922,(1),null);
var right_pane = re_db.d.get(new cljs.core.Keyword(null,"faber","faber",-1316193656),new cljs.core.Keyword(null,"right-pane","right-pane",1762684259));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["value=",value," kind=",kind], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(right_pane),(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"value","value",305978217),value),new cljs.core.Keyword(null,"current","current",-1088038603),kind);
}));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(kind,new cljs.core.Keyword(null,"3d","3d",-1024035737))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(toolbar),cljs.core.assoc,new cljs.core.Keyword(null,"stl-blob","stl-blob",-17273097),null);
} else {
return null;
}
});
faber.core.compile = (function faber$core$compile(){
var codearea = re_db.d.get(new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"codearea","codearea",1347344499));
var code = codearea.getValue();
console.log("Value:",code);

return faber.core.eval_str(code,(function (res){
return faber.core.parse_result(res);
}));
});
var the_class__26988__auto___38933 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("view","initial-state","view/initial-state",-2068231227),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stl-blob","stl-blob",-17273097),null], null);
}),new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (this$){
return re_db.d.transact_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword(null,"faber","faber",-1316193656),new cljs.core.Keyword(null,"stlbutton","stlbutton",-1508903376),this$], null)], null));
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),(function (this$){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["toolbar did update:",new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(this$)], 0));

var temp__5733__auto__ = new cljs.core.Keyword(null,"stl-blob","stl-blob",-17273097).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(temp__5733__auto__)){
var blob = temp__5733__auto__;
var node = re_view.core.dom_node(this$);
(node.href = URL.createObjectURL(blob));

return (node.download = "model.stl");
} else {
return null;
}
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function faber$core$stlsavebutton(p__38925){
var map__38926 = p__38925;
var map__38926__$1 = (((((!((map__38926 == null))))?(((((map__38926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38926):map__38926);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38926__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.link.f6.dim.ba.bw1.ph3.pv2.ma3.dib.purple#stlsavebutton","a.link.f6.dim.ba.bw1.ph3.pv2.ma3.dib.purple#stlsavebutton",-1708866294),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(new cljs.core.Keyword(null,"stl-blob","stl-blob",-17273097).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))?"inline-block":"none")], null)], null),"Save STL"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),null,new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/stlsavebutton"], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
faber.core.stlsavebuttonClass = the_class__26988__auto___38933;

faber.core.stlsavebutton = re_view.core.factory(the_class__26988__auto___38933);
var the_class__26988__auto___38934 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),null,new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/toolbar"], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function faber$core$toolbar(){
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.f6.link.dim.ba.bw1.ph3.pv2.ma3.dib.purple","a.f6.link.dim.ba.bw1.ph3.pv2.ma3.dib.purple",-1357023328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return faber.core.compile();
})], null),"Run"], null),faber.core.stlsavebutton()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
faber.core.toolbarClass = the_class__26988__auto___38934;

faber.core.toolbar = re_view.core.factory(the_class__26988__auto___38934);
faber.core.example = "(model (compose\n         (cube 2)\n         (hole (rotate [0 0 90 ] (cylinder 0.5 3)))\n         (hole (rotate [90 0 0 ] (cylinder 0.1 3)))\n         (hole (cylinder 0.2 3))\n         (cube 3 0.9 0.9)))";
var the_class__26988__auto___38935 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),"Root view for the page",new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/main-page"], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function faber$core$main_page(){
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(re_db.d.get(new cljs.core.Keyword("faber.core","eval-state","faber.core/eval-state",219916951),new cljs.core.Keyword(null,"ready?","ready?",-105765697))))?"Loading...":new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-100","div.h-100",1804561247),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.f1","h1.f1",1174523147),"Faber"], null),faber.core.toolbar(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.monospace.f6.h-75","div.monospace.f6.h-75",423059594),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-near-white.h-100.flex","div.bg-near-white.h-100.flex",-1668321888),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-100.w-50","div.h-100.w-50",790915212),faber.core.model_editor(faber.core.example)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".w-50",".w-50",-356515952),faber.core.right_pane()], null)], null)], null)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
faber.core.main_pageClass = the_class__26988__auto___38935;

/**
 * Root view for the page
 */
faber.core.main_page = re_view.core.factory(the_class__26988__auto___38935);
if((typeof faber !== 'undefined') && (typeof faber.core !== 'undefined') && (typeof faber.core._ !== 'undefined')){
} else {
faber.core._ = shadow.cljs.bootstrap.browser.init(faber.core.c_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/js/bootstrap",new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"faber.user","faber.user",659237491,null),"null"], null), null)], null),(function (){
return re_db.d.transact_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("faber.core","eval-state","faber.core/eval-state",219916951),new cljs.core.Keyword(null,"ready?","ready?",-105765697),true], null)], null));
}));
}
faber.core.render = (function faber$core$render(){
return re_view.core.render_to_dom(faber.core.main_page(),"faber");
});

//# sourceMappingURL=faber.core.js.map
