goog.provide('faber.threejs_scene');
if((typeof faber !== 'undefined') && (typeof faber.threejs_scene !== 'undefined') && (typeof faber.threejs_scene.makemesh !== 'undefined')){
} else {
faber.threejs_scene.makemesh = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__50477 = cljs.core.get_global_hierarchy;
return (fexpr__50477.cljs$core$IFn$_invoke$arity$0 ? fexpr__50477.cljs$core$IFn$_invoke$arity$0() : fexpr__50477.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("faber.threejs-scene","makemesh"),(function (p__50482){
var vec__50483 = p__50482;
var seq__50484 = cljs.core.seq(vec__50483);
var first__50485 = cljs.core.first(seq__50484);
var seq__50484__$1 = cljs.core.next(seq__50484);
var form = first__50485;
var args = seq__50484__$1;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["multi makemesh form=",form," args=",args], 0));

if((form instanceof cljs.core.Keyword)){
return form;
} else {
return new cljs.core.Keyword(null,"list","list",765357683);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__50697__delegate = function (form,args){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unknown:",form,args], 0));
};
var G__50697 = function (form,var_args){
var args = null;
if (arguments.length > 1) {
var G__50699__i = 0, G__50699__a = new Array(arguments.length -  1);
while (G__50699__i < G__50699__a.length) {G__50699__a[G__50699__i] = arguments[G__50699__i + 1]; ++G__50699__i;}
  args = new cljs.core.IndexedSeq(G__50699__a,0,null);
} 
return G__50697__delegate.call(this,form,args);};
G__50697.cljs$lang$maxFixedArity = 1;
G__50697.cljs$lang$applyTo = (function (arglist__50701){
var form = cljs.core.first(arglist__50701);
var args = cljs.core.rest(arglist__50701);
return G__50697__delegate(form,args);
});
G__50697.cljs$core$IFn$_invoke$arity$variadic = G__50697__delegate;
return G__50697;
})()
);
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__50490){
var vec__50491 = p__50490;
var seq__50492 = cljs.core.seq(vec__50491);
var args = seq__50492;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":list args=",args], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (p__50500){
var vec__50502 = p__50500;
var seq__50503 = cljs.core.seq(vec__50502);
var first__50504 = cljs.core.first(seq__50503);
var seq__50503__$1 = cljs.core.next(seq__50503);
var form = first__50504;
var args = seq__50503__$1;
return faber.threejs_scene.makemesh.cljs$core$IFn$_invoke$arity$1(args);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"hull","hull",-957096876),(function (p__50512){
var vec__50514 = p__50512;
var seq__50515 = cljs.core.seq(vec__50514);
var first__50516 = cljs.core.first(seq__50515);
var seq__50515__$1 = cljs.core.next(seq__50515);
var form = first__50516;
var args = seq__50515__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.hull,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"difference","difference",1916101396),(function (p__50521){
var vec__50522 = p__50521;
var seq__50523 = cljs.core.seq(vec__50522);
var first__50524 = cljs.core.first(seq__50523);
var seq__50523__$1 = cljs.core.next(seq__50523);
var form = first__50524;
var args = seq__50523__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.difference,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),(function (p__50529){
var vec__50530 = p__50529;
var seq__50531 = cljs.core.seq(vec__50530);
var first__50532 = cljs.core.first(seq__50531);
var seq__50531__$1 = cljs.core.next(seq__50531);
var form = first__50532;
var args = seq__50531__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cube","cube",-1501611368),(function (p__50537){
var vec__50542 = p__50537;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50542,(0),null);
var map__50545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50542,(1),null);
var map__50545__$1 = (((((!((map__50545 == null))))?(((((map__50545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50545):map__50545);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50545__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50545__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50545__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50545__$1,new cljs.core.Keyword(null,"center","center",-748944368));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["makemesh :cube form=",form," y=",y], 0));

return faber.operations_3d.cube(x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),(function (p__50556){
var vec__50562 = p__50556;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50562,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50562,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50562,(2),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50562,(3),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["makemesh :cylinder form=",form," h=",h," r=",r," r2=",r2], 0));

return faber.operations_3d.cylinder(h,r,r2);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polyhedron","polyhedron",998587527),(function (p__50567){
var vec__50573 = p__50567;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50573,(0),null);
var points = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50573,(1),null);
var faces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50573,(2),null);
return faber.operations_3d.polyhedron(points,faces);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sphere","sphere",384337120),(function (p__50578){
var vec__50582 = p__50578;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50582,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50582,(1),null);
return faber.operations_3d.sphere(r);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"translate","translate",1336199447),(function (p__50589){
var vec__50596 = p__50589;
var seq__50597 = cljs.core.seq(vec__50596);
var first__50598 = cljs.core.first(seq__50597);
var seq__50597__$1 = cljs.core.next(seq__50597);
var form = first__50598;
var first__50598__$1 = cljs.core.first(seq__50597__$1);
var seq__50597__$2 = cljs.core.next(seq__50597__$1);
var vec__50599 = first__50598__$1;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50599,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50599,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50599,(2),null);
var block = seq__50597__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":translate mesh=",mesh], 0));

return faber.operations_3d.translate(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotatev","rotatev",1387211932),(function (p__50606){
var vec__50610 = p__50606;
var seq__50611 = cljs.core.seq(vec__50610);
var first__50612 = cljs.core.first(seq__50611);
var seq__50611__$1 = cljs.core.next(seq__50611);
var form = first__50612;
var first__50612__$1 = cljs.core.first(seq__50611__$1);
var seq__50611__$2 = cljs.core.next(seq__50611__$1);
var a = first__50612__$1;
var first__50612__$2 = cljs.core.first(seq__50611__$2);
var seq__50611__$3 = cljs.core.next(seq__50611__$2);
var v = first__50612__$2;
var block = seq__50611__$3;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
var vec__50616 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(faber.model.deg__GT_rad,v);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50616,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50616,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50616,(2),null);
return faber.operations_3d.rotatev(mesh,(10),x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotatec","rotatec",2126840625),(function (p__50623){
var vec__50624 = p__50623;
var seq__50625 = cljs.core.seq(vec__50624);
var first__50626 = cljs.core.first(seq__50625);
var seq__50625__$1 = cljs.core.next(seq__50625);
var form = first__50626;
var first__50626__$1 = cljs.core.first(seq__50625__$1);
var seq__50625__$2 = cljs.core.next(seq__50625__$1);
var v = first__50626__$1;
var block = seq__50625__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
var vec__50630 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(faber.model.deg__GT_rad,v);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50630,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50630,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50630,(2),null);
return faber.operations_3d.rotatec(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fn","with-fn",627777509),(function (p__50637){
var vec__50638 = p__50637;
var seq__50639 = cljs.core.seq(vec__50638);
var first__50640 = cljs.core.first(seq__50639);
var seq__50639__$1 = cljs.core.next(seq__50639);
var form = first__50640;
var first__50640__$1 = cljs.core.first(seq__50639__$1);
var seq__50639__$2 = cljs.core.next(seq__50639__$1);
var x = first__50640__$1;
var block = seq__50639__$2;
return faber.operations_3d.with_fn(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fa","with-fa",-1456357876),(function (p__50648){
var vec__50649 = p__50648;
var seq__50650 = cljs.core.seq(vec__50649);
var first__50651 = cljs.core.first(seq__50650);
var seq__50650__$1 = cljs.core.next(seq__50650);
var form = first__50651;
var first__50651__$1 = cljs.core.first(seq__50650__$1);
var seq__50650__$2 = cljs.core.next(seq__50650__$1);
var x = first__50651__$1;
var block = seq__50650__$2;
return faber.operations_3d.with_fa(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fs","with-fs",-531734560),(function (p__50656){
var vec__50657 = p__50656;
var seq__50658 = cljs.core.seq(vec__50657);
var first__50659 = cljs.core.first(seq__50658);
var seq__50658__$1 = cljs.core.next(seq__50658);
var form = first__50659;
var first__50659__$1 = cljs.core.first(seq__50658__$1);
var seq__50658__$2 = cljs.core.next(seq__50658__$1);
var x = first__50659__$1;
var block = seq__50658__$2;
return faber.operations_3d.with_fs(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scale","scale",-230427353),(function (p__50663){
var vec__50670 = p__50663;
var seq__50671 = cljs.core.seq(vec__50670);
var first__50672 = cljs.core.first(seq__50671);
var seq__50671__$1 = cljs.core.next(seq__50671);
var form = first__50672;
var first__50672__$1 = cljs.core.first(seq__50671__$1);
var seq__50671__$2 = cljs.core.next(seq__50671__$1);
var vec__50673 = first__50672__$1;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50673,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50673,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50673,(2),null);
var block = seq__50671__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":scale mesh=",mesh], 0));

return faber.operations_3d.scale(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset","offset",296498311),(function (p__50679){
var vec__50681 = p__50679;
var seq__50683 = cljs.core.seq(vec__50681);
var first__50685 = cljs.core.first(seq__50683);
var seq__50683__$1 = cljs.core.next(seq__50683);
var form = first__50685;
var first__50685__$1 = cljs.core.first(seq__50683__$1);
var seq__50683__$2 = cljs.core.next(seq__50683__$1);
var options = first__50685__$1;
var block = seq__50683__$2;
return faber.operations_3d.offset(options,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block));
}));
faber.threejs_scene.pippo = (34);
faber.threejs_scene.model = (function faber$threejs_scene$model(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50714 = arguments.length;
var i__4737__auto___50715 = (0);
while(true){
if((i__4737__auto___50715 < len__4736__auto___50714)){
args__4742__auto__.push((arguments[i__4737__auto___50715]));

var G__50719 = (i__4737__auto___50715 + (1));
i__4737__auto___50715 = G__50719;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return faber.threejs_scene.model.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(faber.threejs_scene.model.cljs$core$IFn$_invoke$arity$variadic = (function (args){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["model. args=",args], 0));

var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"3dmodel","3dmodel",135298134),mesh], null);
}));

(faber.threejs_scene.model.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(faber.threejs_scene.model.cljs$lang$applyTo = (function (seq50689){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50689));
}));


//# sourceMappingURL=faber.threejs_scene.js.map
