goog.provide('shadow_eval.core');
shadow_eval.core.source_examples = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(circle 40)","(for [n (range 10)] n)","(defcell x 10)","(defcell counter (interval 1000 inc))","(defcell bigger-counter (* @counter 10))","(require '[cljs.js :as cljs])\n\n(fn? cljs/eval-str)"], null);
if((typeof shadow_eval !== 'undefined') && (typeof shadow_eval.core !== 'undefined') && (typeof shadow_eval.core.c_state !== 'undefined')){
} else {
shadow_eval.core.c_state = cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0();
}
shadow_eval.core.eval_str = (function shadow_eval$core$eval_str(source,cb){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(shadow_eval.core.c_state,source,"[test]",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"load","load",-1318641184),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(shadow.cljs.bootstrap.browser.load,shadow_eval.core.c_state),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("shadow-eval.user")], null),cb);
});
var the_class__42481__auto___57650 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(function (_,source){
return source;
}),new cljs.core.Keyword(null,"docstring","docstring",879233117),"Shows a single example, with an editable textarea and value-view.",new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/show-example"], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("view","initial-state","view/initial-state",-2068231227),(function (_,source){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null);
}),new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (this$,source){
return shadow_eval.core.eval_str(source,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211)));
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function shadow_eval$core$show_example(p__57642){
var map__57643 = p__57642;
var map__57643__$1 = (((((!((map__57643 == null))))?(((((map__57643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57643):map__57643);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57643__$1,new cljs.core.Keyword("view","state","view/state",-1991815820));
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2((function (){var map__57645 = cljs.core.deref(state);
var map__57645__$1 = (((((!((map__57645 == null))))?(((((map__57645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57645):map__57645);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57645__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57645__$1,new cljs.core.Keyword(null,"result","result",1415092211));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".ma3.flex",".ma3.flex",-1429097780),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".bg-near-white.pa3.flex-none",".bg-near-white.pa3.flex-none",1379540009),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(450)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.bn.pre.w-100.f6.lh-copy.bg-near-white.outline-0.monospace.overflow-auto","textarea.bn.pre.w-100.f6.lh-copy.bg-near-white.outline-0.monospace.overflow-auto",1251654161),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((1.75 + (1.3125 * cljs.core.count(cljs.core.re_seq(/\n|\r\n/,source))))),"rem"].join('')], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__57641_SHARP_){
var source__$1 = p1__57641_SHARP_.target.value;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"source","source",-433931539),source__$1);

return shadow_eval.core.eval_str(source__$1,cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,state,cljs.core.assoc,new cljs.core.Keyword(null,"result","result",1415092211)));
})], null)], null)], null),(function (){var map__57647 = result;
var map__57647__$1 = (((((!((map__57647 == null))))?(((((map__57647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57647):map__57647);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57647__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57647__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pre-wrap",".pre-wrap",116019005),(cljs.core.truth_(error)?re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3.bg-washed-red",".pa3.bg-washed-red",270898254),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".b",".b",-335131582),cljs.core.ex_message(error)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(error))], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.ex_cause(error)], 0))], null)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".pa3",".pa3",1465128375),lark.value_viewer.core.format_value.cljs$core$IFn$_invoke$arity$1(value)], null))], null);
})()], null);
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
shadow_eval.core.show_exampleClass = the_class__42481__auto___57650;

/**
 * Shows a single example, with an editable textarea and value-view.
 */
shadow_eval.core.show_example = re_view.core.factory(the_class__42481__auto___57650);
var the_class__42481__auto___57651 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),"Root view for the page",new cljs.core.Keyword(null,"display-name","display-name",694513143),"core/examples"], null),new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("view","render","view/render",-1412767573),(function shadow_eval$core$examples(){
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2(((cljs.core.not(re_db.d.get(new cljs.core.Keyword("shadow-eval.core","eval-state","shadow-eval.core/eval-state",1569921134),new cljs.core.Keyword(null,"ready?","ready?",-105765697))))?"Loading...":new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".monospace.f6",".monospace.f6",1558994510),cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow_eval.core.show_example,shadow_eval.core.source_examples)], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
shadow_eval.core.examplesClass = the_class__42481__auto___57651;

/**
 * Root view for the page
 */
shadow_eval.core.examples = re_view.core.factory(the_class__42481__auto___57651);
if((typeof shadow_eval !== 'undefined') && (typeof shadow_eval.core !== 'undefined') && (typeof shadow_eval.core._ !== 'undefined')){
} else {
shadow_eval.core._ = shadow.cljs.bootstrap.browser.init(shadow_eval.core.c_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/js/bootstrap",new cljs.core.Keyword(null,"load-on-init","load-on-init",337216877),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"shadow-eval.user","shadow-eval.user",-2103561177,null),"null"], null), null)], null),(function (){
return re_db.d.transact_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword("shadow-eval.core","eval-state","shadow-eval.core/eval-state",1569921134),new cljs.core.Keyword(null,"ready?","ready?",-105765697),true], null)], null));
}));
}
shadow_eval.core.render = (function shadow_eval$core$render(){
return re_view.core.render_to_dom(shadow_eval.core.examples(),"shadow-eval");
});
(cells.cell.Cell.prototype.cells$cell$ICellStore$ = cljs.core.PROTOCOL_SENTINEL);

(cells.cell.Cell.prototype.cells$cell$ICellStore$put_value_BANG_$arity$2 = (function (this$,value){
var this$__$1 = this;
return re_db.d.transact_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.name(this$__$1),value], null)], null));
}));

(cells.cell.Cell.prototype.cells$cell$ICellStore$get_value$arity$1 = (function (this$){
var this$__$1 = this;
return re_db.d.get(new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.name(this$__$1));
}));

(cells.cell.Cell.prototype.cells$cell$ICellStore$invalidate_BANG_$arity$1 = (function (this$){
var this$__$1 = this;
return re_db.patterns.invalidate_BANG_(re_db.d._STAR_db_STAR_,new cljs.core.Keyword(null,"ea_","ea_",-139041839),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cells","cells",-985166822),cljs.core.name(this$__$1)], null));
}));

(cells.cell.Cell.prototype.lark$value_viewer$core$IView$ = cljs.core.PROTOCOL_SENTINEL);

(cells.cell.Cell.prototype.lark$value_viewer$core$IView$view$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.cells$cell$ICellView$view$arity$1(null);
}));
(cljs.core.Var.prototype.lark$value_viewer$core$IView$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Var.prototype.lark$value_viewer$core$IView$view$arity$1 = (function (this$){
var this$__$1 = this;
var fexpr__57649 = cljs.core.deref(this$__$1);
return (fexpr__57649.cljs$core$IFn$_invoke$arity$0 ? fexpr__57649.cljs$core$IFn$_invoke$arity$0() : fexpr__57649.call(null));
}));
(shapes.core.Shape.prototype.re_view$hiccup$core$IEmitHiccup$ = cljs.core.PROTOCOL_SENTINEL);

(shapes.core.Shape.prototype.re_view$hiccup$core$IEmitHiccup$to_hiccup$arity$1 = (function (this$){
var this$__$1 = this;
return shapes.core.to_hiccup(this$__$1);
}));
goog.object.set(cells.cell.IRenderHiccup,"object",true);

goog.object.set(cells.cell.render_hiccup,"object",(function (this$){
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$1(this$);
}));

//# sourceMappingURL=shadow_eval.core.js.map
