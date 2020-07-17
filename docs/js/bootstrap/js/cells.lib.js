goog.provide('cells.lib');




cells.lib.status_BANG_ = cells.cell.status_BANG_;
/**
 * Returns the cell's status (a keyword)
 */
cells.lib.status = cells.cell.status;
/**
 * Returns the cell's status message, if it exists.
 */
cells.lib.message = cells.cell.message;
/**
 * Returns true if cell's status is :error
 */
cells.lib.error_QMARK_ = cells.cell.error_QMARK_;
/**
 * Wraps a cell with a view (as metadata)
 */
cells.lib.with_view = cells.cell.with_view;
/**
 * Returns true if x has a status of :loading.
 */
cells.lib.loading_QMARK_ = (function cells$lib$loading_QMARK_(x){
if((((!((x == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cells$cell$IStatus$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cells.cell.IStatus,x):false)):cljs.core.native_satisfies_QMARK_(cells.cell.IStatus,x))){
return cells.cell.loading_QMARK_(x);
} else {
return false;
}
});
cells.lib.dependencies = cells.cell.dependencies;
cells.lib.dependents = cells.cell.dependents;
cells.lib.unique_id = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cells.util.unique_id);
cells.lib.query_string = (function cells$lib$query_string(query){
return goog.Uri.QueryData.createFromMap(cljs.core.clj__GT_js(query)).toString();
});
cells.lib._on_frame = (function cells$lib$_on_frame(var_args){
var G__48613 = arguments.length;
switch (G__48613) {
case 1:
return cells.lib._on_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cells.lib._on_frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cells.lib._on_frame.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cells.lib._on_frame.cljs$core$IFn$_invoke$arity$2(f,null);
}));

(cells.lib._on_frame.cljs$core$IFn$_invoke$arity$2 = (function (f,initial_value){
var self = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var stop_QMARK_ = cljs.core.volatile_BANG_(false);
var interval_f = (function (){var the_cell__43468__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__43469__auto__ = cells.cell._STAR_eval_context_STAR_;
return (function() { 
var G__48764__delegate = function (args__43470__auto__){
var _STAR_cell_stack_STAR__orig_val__48621 = cells.cell._STAR_cell_stack_STAR_;
var _STAR_cell_stack_STAR__temp_val__48622 = cljs.core.cons(the_cell__43468__auto__,cells.cell._STAR_cell_stack_STAR_);
(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__temp_val__48622);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function cells$lib$frame_f(){
cljs.core.reset_BANG_(self,(function (){var G__48649 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48649) : f.call(null,G__48649));
})());

if(cljs.core.truth_(cljs.core.deref(stop_QMARK_))){
return null;
} else {
return window.requestAnimationFrame(cells$lib$frame_f);
}
}),args__43470__auto__);
}catch (e48632){if((e48632 instanceof Error)){
var error__43471__auto__ = e48632;
return cells.eval_context.handle_error(context__43469__auto__,error__43471__auto__);
} else {
throw e48632;

}
}}finally {(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__orig_val__48621);
}};
var G__48764 = function (var_args){
var args__43470__auto__ = null;
if (arguments.length > 0) {
var G__48767__i = 0, G__48767__a = new Array(arguments.length -  0);
while (G__48767__i < G__48767__a.length) {G__48767__a[G__48767__i] = arguments[G__48767__i + 0]; ++G__48767__i;}
  args__43470__auto__ = new cljs.core.IndexedSeq(G__48767__a,0,null);
} 
return G__48764__delegate.call(this,args__43470__auto__);};
G__48764.cljs$lang$maxFixedArity = 0;
G__48764.cljs$lang$applyTo = (function (arglist__48768){
var args__43470__auto__ = cljs.core.seq(arglist__48768);
return G__48764__delegate(args__43470__auto__);
});
G__48764.cljs$core$IFn$_invoke$arity$variadic = G__48764__delegate;
return G__48764;
})()
;
})();
cells.eval_context.on_dispose(self,(function (){
return cljs.core.vreset_BANG_(stop_QMARK_,true);
}));

cljs.core.reset_BANG_(self,initial_value);

return window.requestAnimationFrame(interval_f);
}));

(cells.lib._on_frame.cljs$lang$maxFixedArity = 2);

cells.lib.interval = (function cells$lib$interval(var_args){
var G__48659 = arguments.length;
switch (G__48659) {
case 2:
return cells.lib.interval.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cells.lib.interval.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cells.lib.interval.cljs$core$IFn$_invoke$arity$2 = (function (n,f){
return cells.lib.interval.cljs$core$IFn$_invoke$arity$3(n,f,null);
}));

(cells.lib.interval.cljs$core$IFn$_invoke$arity$3 = (function (n,f,initial_value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.Keyword(null,"frame","frame",-1711082588))){
return cells.lib._on_frame.cljs$core$IFn$_invoke$arity$2(f,initial_value);
} else {
var self = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var clear_key = cljs.core.volatile_BANG_(null);
var _ = cells.eval_context.on_dispose(self,(function (){
var G__48664 = cljs.core.deref(clear_key);
if((G__48664 == null)){
return null;
} else {
return clearInterval(G__48664);
}
}));
var interval_f = (function (){var the_cell__43468__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__43469__auto__ = cells.cell._STAR_eval_context_STAR_;
return (function() { 
var G__48778__delegate = function (args__43470__auto__){
var _STAR_cell_stack_STAR__orig_val__48665 = cells.cell._STAR_cell_stack_STAR_;
var _STAR_cell_stack_STAR__temp_val__48666 = cljs.core.cons(the_cell__43468__auto__,cells.cell._STAR_cell_stack_STAR_);
(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__temp_val__48666);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){
return cljs.core.reset_BANG_(self,(function (){var G__48671 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48671) : f.call(null,G__48671));
})());
}),args__43470__auto__);
}catch (e48667){if((e48667 instanceof Error)){
var error__43471__auto__ = e48667;
return cells.eval_context.handle_error(context__43469__auto__,error__43471__auto__);
} else {
throw e48667;

}
}}finally {(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__orig_val__48665);
}};
var G__48778 = function (var_args){
var args__43470__auto__ = null;
if (arguments.length > 0) {
var G__48780__i = 0, G__48780__a = new Array(arguments.length -  0);
while (G__48780__i < G__48780__a.length) {G__48780__a[G__48780__i] = arguments[G__48780__i + 0]; ++G__48780__i;}
  args__43470__auto__ = new cljs.core.IndexedSeq(G__48780__a,0,null);
} 
return G__48778__delegate.call(this,args__43470__auto__);};
G__48778.cljs$lang$maxFixedArity = 0;
G__48778.cljs$lang$applyTo = (function (arglist__48784){
var args__43470__auto__ = cljs.core.seq(arglist__48784);
return G__48778__delegate(args__43470__auto__);
});
G__48778.cljs$core$IFn$_invoke$arity$variadic = G__48778__delegate;
return G__48778;
})()
;
})();
cljs.core.vreset_BANG_(clear_key,setInterval(interval_f,n));

return cljs.core.reset_BANG_(self,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(initial_value) : f.call(null,initial_value)));
}
}));

(cells.lib.interval.cljs$lang$maxFixedArity = 3);

cells.lib.timeout = (function cells$lib$timeout(var_args){
var G__48678 = arguments.length;
switch (G__48678) {
case 2:
return cells.lib.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cells.lib.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cells.lib.timeout.cljs$core$IFn$_invoke$arity$2 = (function (n,f){
return cells.lib.timeout.cljs$core$IFn$_invoke$arity$3(n,f,null);
}));

(cells.lib.timeout.cljs$core$IFn$_invoke$arity$3 = (function (n,f,initial_value){
var self = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var _ = cells.cell.status_BANG_(self,new cljs.core.Keyword(null,"loading","loading",-737050189));
var clear_key = setTimeout((function (){var the_cell__43468__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__43469__auto__ = cells.cell._STAR_eval_context_STAR_;
return (function() { 
var G__48786__delegate = function (args__43470__auto__){
var _STAR_cell_stack_STAR__orig_val__48684 = cells.cell._STAR_cell_stack_STAR_;
var _STAR_cell_stack_STAR__temp_val__48685 = cljs.core.cons(the_cell__43468__auto__,cells.cell._STAR_cell_stack_STAR_);
(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__temp_val__48685);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){
cells.cell.status_BANG_(self,null);

return cljs.core.reset_BANG_(self,(function (){var G__48687 = cljs.core.deref(self);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__48687) : f.call(null,G__48687));
})());
}),args__43470__auto__);
}catch (e48686){if((e48686 instanceof Error)){
var error__43471__auto__ = e48686;
return cells.eval_context.handle_error(context__43469__auto__,error__43471__auto__);
} else {
throw e48686;

}
}}finally {(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__orig_val__48684);
}};
var G__48786 = function (var_args){
var args__43470__auto__ = null;
if (arguments.length > 0) {
var G__48788__i = 0, G__48788__a = new Array(arguments.length -  0);
while (G__48788__i < G__48788__a.length) {G__48788__a[G__48788__i] = arguments[G__48788__i + 0]; ++G__48788__i;}
  args__43470__auto__ = new cljs.core.IndexedSeq(G__48788__a,0,null);
} 
return G__48786__delegate.call(this,args__43470__auto__);};
G__48786.cljs$lang$maxFixedArity = 0;
G__48786.cljs$lang$applyTo = (function (arglist__48790){
var args__43470__auto__ = cljs.core.seq(arglist__48790);
return G__48786__delegate(args__43470__auto__);
});
G__48786.cljs$core$IFn$_invoke$arity$variadic = G__48786__delegate;
return G__48786;
})()
;
})(),n);
cells.eval_context.on_dispose(self,(function (){
return clearTimeout(clear_key);
}));

return initial_value;
}));

(cells.lib.timeout.cljs$lang$maxFixedArity = 3);

cells.lib.parse_fns = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"json->clj","json->clj",1598798328),cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__48692_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__48692_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}),JSON.parse),new cljs.core.Keyword(null,"json","json",1279968570),JSON.parse,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.identity], null);
/**
 * Fetch a resource from a url. By default, response is parsed as JSON and converted to Clojure via clj->js with :keywordize-keys true.
 *   Accepts options :format, which may be :json or :text, and :query, a map which will be
 *   appended to url as a query parameter string.
 */
cells.lib.fetch = (function cells$lib$fetch(var_args){
var G__48706 = arguments.length;
switch (G__48706) {
case 1:
return cells.lib.fetch.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cells.lib.fetch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cells.lib.fetch.cljs$core$IFn$_invoke$arity$1 = (function (url){
return cells.lib.fetch.cljs$core$IFn$_invoke$arity$2(url,cljs.core.PersistentArrayMap.EMPTY);
}));

(cells.lib.fetch.cljs$core$IFn$_invoke$arity$2 = (function (url,p__48708){
var map__48710 = p__48708;
var map__48710__$1 = (((((!((map__48710 == null))))?(((((map__48710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48710):map__48710);
var options = map__48710__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48710__$1,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json->clj","json->clj",1598798328));
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48710__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,options], null);

var self = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var url__$1 = (function (){var G__48714 = url;
if(cljs.core.truth_(query)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48714),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cells.lib.query_string(query))].join('');
} else {
return G__48714;
}
})();
var parse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cells.lib.parse_fns,format);
cells.cell.status_BANG_(self,new cljs.core.Keyword(null,"loading","loading",-737050189));

goog.net.XhrIo.send(url__$1,(function (){var the_cell__43468__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__43469__auto__ = cells.cell._STAR_eval_context_STAR_;
return (function() { 
var G__48796__delegate = function (args__43470__auto__){
var _STAR_cell_stack_STAR__orig_val__48716 = cells.cell._STAR_cell_stack_STAR_;
var _STAR_cell_stack_STAR__temp_val__48717 = cljs.core.cons(the_cell__43468__auto__,cells.cell._STAR_cell_stack_STAR_);
(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__temp_val__48717);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (event){
var xhrio = event.target;
if(cljs.core.not(xhrio.isSuccess())){
var G__48724 = self;
var G__48725 = new cljs.core.Keyword(null,"error","error",-978969032);
var G__48726 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode()),new cljs.core.Keyword(null,"xhrio","xhrio",-615140538),xhrio], null);
return (cells.lib.status_BANG_.cljs$core$IFn$_invoke$arity$3 ? cells.lib.status_BANG_.cljs$core$IFn$_invoke$arity$3(G__48724,G__48725,G__48726) : cells.lib.status_BANG_.call(null,G__48724,G__48725,G__48726));
} else {
var formatted_value = (function (){var G__48729 = xhrio.getResponseText();
return (parse.cljs$core$IFn$_invoke$arity$1 ? parse.cljs$core$IFn$_invoke$arity$1(G__48729) : parse.call(null,G__48729));
})();
(cells.lib.status_BANG_.cljs$core$IFn$_invoke$arity$2 ? cells.lib.status_BANG_.cljs$core$IFn$_invoke$arity$2(self,null) : cells.lib.status_BANG_.call(null,self,null));

return cljs.core.reset_BANG_(self,formatted_value);
}
}),args__43470__auto__);
}catch (e48723){if((e48723 instanceof Error)){
var error__43471__auto__ = e48723;
return cells.eval_context.handle_error(context__43469__auto__,error__43471__auto__);
} else {
throw e48723;

}
}}finally {(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__orig_val__48716);
}};
var G__48796 = function (var_args){
var args__43470__auto__ = null;
if (arguments.length > 0) {
var G__48807__i = 0, G__48807__a = new Array(arguments.length -  0);
while (G__48807__i < G__48807__a.length) {G__48807__a[G__48807__i] = arguments[G__48807__i + 0]; ++G__48807__i;}
  args__43470__auto__ = new cljs.core.IndexedSeq(G__48807__a,0,null);
} 
return G__48796__delegate.call(this,args__43470__auto__);};
G__48796.cljs$lang$maxFixedArity = 0;
G__48796.cljs$lang$applyTo = (function (arglist__48812){
var args__43470__auto__ = cljs.core.seq(arglist__48812);
return G__48796__delegate(args__43470__auto__);
});
G__48796.cljs$core$IFn$_invoke$arity$variadic = G__48796__delegate;
return G__48796;
})()
;
})());

return cljs.core.deref(self);
}));

(cells.lib.fetch.cljs$lang$maxFixedArity = 2);

cells.lib.geo_location = (function cells$lib$geo_location(){
var self = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
cells.cell.status_BANG_(self,new cljs.core.Keyword(null,"loading","loading",-737050189));

return navigator.geolocation.getCurrentPosition((function (){var the_cell__43468__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__43469__auto__ = cells.cell._STAR_eval_context_STAR_;
return (function() { 
var G__48813__delegate = function (args__43470__auto__){
var _STAR_cell_stack_STAR__orig_val__48732 = cells.cell._STAR_cell_stack_STAR_;
var _STAR_cell_stack_STAR__temp_val__48733 = cljs.core.cons(the_cell__43468__auto__,cells.cell._STAR_cell_stack_STAR_);
(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__temp_val__48733);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (location){
cells.cell.status_BANG_(self,null);

return cljs.core.reset_BANG_(self,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"latitude","latitude",394867543),location.coords.latitude,new cljs.core.Keyword(null,"longitude","longitude",-1268876372),location.coords.longitude], null));
}),args__43470__auto__);
}catch (e48738){if((e48738 instanceof Error)){
var error__43471__auto__ = e48738;
return cells.eval_context.handle_error(context__43469__auto__,error__43471__auto__);
} else {
throw e48738;

}
}}finally {(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__orig_val__48732);
}};
var G__48813 = function (var_args){
var args__43470__auto__ = null;
if (arguments.length > 0) {
var G__48814__i = 0, G__48814__a = new Array(arguments.length -  0);
while (G__48814__i < G__48814__a.length) {G__48814__a[G__48814__i] = arguments[G__48814__i + 0]; ++G__48814__i;}
  args__43470__auto__ = new cljs.core.IndexedSeq(G__48814__a,0,null);
} 
return G__48813__delegate.call(this,args__43470__auto__);};
G__48813.cljs$lang$maxFixedArity = 0;
G__48813.cljs$lang$applyTo = (function (arglist__48816){
var args__43470__auto__ = cljs.core.seq(arglist__48816);
return G__48813__delegate(args__43470__auto__);
});
G__48813.cljs$core$IFn$_invoke$arity$variadic = G__48813__delegate;
return G__48813;
})()
;
})(),(function (){var the_cell__43468__auto__ = cljs.core.first(cells.cell._STAR_cell_stack_STAR_);
var context__43469__auto__ = cells.cell._STAR_eval_context_STAR_;
return (function() { 
var G__48817__delegate = function (args__43470__auto__){
var _STAR_cell_stack_STAR__orig_val__48740 = cells.cell._STAR_cell_stack_STAR_;
var _STAR_cell_stack_STAR__temp_val__48741 = cljs.core.cons(the_cell__43468__auto__,cells.cell._STAR_cell_stack_STAR_);
(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__temp_val__48741);

try{try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (error){
return cells.cell.status_BANG_(self,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.str.cljs$core$IFn$_invoke$arity$1(error));
}),args__43470__auto__);
}catch (e48746){if((e48746 instanceof Error)){
var error__43471__auto__ = e48746;
return cells.eval_context.handle_error(context__43469__auto__,error__43471__auto__);
} else {
throw e48746;

}
}}finally {(cells.cell._STAR_cell_stack_STAR_ = _STAR_cell_stack_STAR__orig_val__48740);
}};
var G__48817 = function (var_args){
var args__43470__auto__ = null;
if (arguments.length > 0) {
var G__48820__i = 0, G__48820__a = new Array(arguments.length -  0);
while (G__48820__i < G__48820__a.length) {G__48820__a[G__48820__i] = arguments[G__48820__i + 0]; ++G__48820__i;}
  args__43470__auto__ = new cljs.core.IndexedSeq(G__48820__a,0,null);
} 
return G__48817__delegate.call(this,args__43470__auto__);};
G__48817.cljs$lang$maxFixedArity = 0;
G__48817.cljs$lang$applyTo = (function (arglist__48824){
var args__43470__auto__ = cljs.core.seq(arglist__48824);
return G__48817__delegate(args__43470__auto__);
});
G__48817.cljs$core$IFn$_invoke$arity$variadic = G__48817__delegate;
return G__48817;
})()
;
})());
});

//# sourceMappingURL=cells.lib.js.map
