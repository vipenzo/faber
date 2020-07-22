goog.provide('faber.threejs_scene');
if((typeof faber !== 'undefined') && (typeof faber.threejs_scene !== 'undefined') && (typeof faber.threejs_scene.makemesh !== 'undefined')){
} else {
faber.threejs_scene.makemesh = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28229 = cljs.core.get_global_hierarchy;
return (fexpr__28229.cljs$core$IFn$_invoke$arity$0 ? fexpr__28229.cljs$core$IFn$_invoke$arity$0() : fexpr__28229.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("faber.threejs-scene","makemesh"),(function (p__28230){
var vec__28231 = p__28230;
var seq__28232 = cljs.core.seq(vec__28231);
var first__28233 = cljs.core.first(seq__28232);
var seq__28232__$1 = cljs.core.next(seq__28232);
var form = first__28233;
var args = seq__28232__$1;
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
var G__28375__delegate = function (form,args){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unknown:",form,args], 0));
};
var G__28375 = function (form,var_args){
var args = null;
if (arguments.length > 1) {
var G__28376__i = 0, G__28376__a = new Array(arguments.length -  1);
while (G__28376__i < G__28376__a.length) {G__28376__a[G__28376__i] = arguments[G__28376__i + 1]; ++G__28376__i;}
  args = new cljs.core.IndexedSeq(G__28376__a,0,null);
} 
return G__28375__delegate.call(this,form,args);};
G__28375.cljs$lang$maxFixedArity = 1;
G__28375.cljs$lang$applyTo = (function (arglist__28377){
var form = cljs.core.first(arglist__28377);
var args = cljs.core.rest(arglist__28377);
return G__28375__delegate(form,args);
});
G__28375.cljs$core$IFn$_invoke$arity$variadic = G__28375__delegate;
return G__28375;
})()
);
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__28234){
var vec__28236 = p__28234;
var seq__28237 = cljs.core.seq(vec__28236);
var args = seq__28237;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":list args=",args], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (p__28239){
var vec__28240 = p__28239;
var seq__28241 = cljs.core.seq(vec__28240);
var first__28242 = cljs.core.first(seq__28241);
var seq__28241__$1 = cljs.core.next(seq__28241);
var form = first__28242;
var args = seq__28241__$1;
return faber.threejs_scene.makemesh.cljs$core$IFn$_invoke$arity$1(args);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"hull","hull",-957096876),(function (p__28244){
var vec__28245 = p__28244;
var seq__28246 = cljs.core.seq(vec__28245);
var first__28247 = cljs.core.first(seq__28246);
var seq__28246__$1 = cljs.core.next(seq__28246);
var form = first__28247;
var args = seq__28246__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.hull,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"difference","difference",1916101396),(function (p__28248){
var vec__28249 = p__28248;
var seq__28250 = cljs.core.seq(vec__28249);
var first__28251 = cljs.core.first(seq__28250);
var seq__28250__$1 = cljs.core.next(seq__28250);
var form = first__28251;
var args = seq__28250__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.difference,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),(function (p__28253){
var vec__28254 = p__28253;
var seq__28255 = cljs.core.seq(vec__28254);
var first__28256 = cljs.core.first(seq__28255);
var seq__28255__$1 = cljs.core.next(seq__28255);
var form = first__28256;
var args = seq__28255__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cube","cube",-1501611368),(function (p__28261){
var vec__28262 = p__28261;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28262,(0),null);
var map__28265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28262,(1),null);
var map__28265__$1 = (((((!((map__28265 == null))))?(((((map__28265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28265):map__28265);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28265__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28265__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28265__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28265__$1,new cljs.core.Keyword(null,"center","center",-748944368));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["makemesh :cube form=",form," y=",y], 0));

return faber.operations_3d.cube(x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),(function (p__28283){
var vec__28284 = p__28283;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28284,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28284,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28284,(2),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28284,(3),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["makemesh :cylinder form=",form," h=",h," r=",r," r2=",r2], 0));

return faber.operations_3d.cylinder(h,r,r2);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polyhedron","polyhedron",998587527),(function (p__28287){
var vec__28288 = p__28287;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28288,(0),null);
var points = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28288,(1),null);
var faces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28288,(2),null);
return faber.operations_3d.polyhedron(points,faces);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sphere","sphere",384337120),(function (p__28291){
var vec__28292 = p__28291;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28292,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28292,(1),null);
return faber.operations_3d.sphere(r);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"translate","translate",1336199447),(function (p__28295){
var vec__28296 = p__28295;
var seq__28297 = cljs.core.seq(vec__28296);
var first__28298 = cljs.core.first(seq__28297);
var seq__28297__$1 = cljs.core.next(seq__28297);
var form = first__28298;
var first__28298__$1 = cljs.core.first(seq__28297__$1);
var seq__28297__$2 = cljs.core.next(seq__28297__$1);
var vec__28299 = first__28298__$1;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28299,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28299,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28299,(2),null);
var block = seq__28297__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":translate mesh=",mesh], 0));

return faber.operations_3d.translate(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotatev","rotatev",1387211932),(function (p__28307){
var vec__28308 = p__28307;
var seq__28309 = cljs.core.seq(vec__28308);
var first__28310 = cljs.core.first(seq__28309);
var seq__28309__$1 = cljs.core.next(seq__28309);
var form = first__28310;
var first__28310__$1 = cljs.core.first(seq__28309__$1);
var seq__28309__$2 = cljs.core.next(seq__28309__$1);
var a = first__28310__$1;
var first__28310__$2 = cljs.core.first(seq__28309__$2);
var seq__28309__$3 = cljs.core.next(seq__28309__$2);
var v = first__28310__$2;
var block = seq__28309__$3;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
var vec__28311 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(faber.model.deg__GT_rad,v);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28311,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28311,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28311,(2),null);
return faber.operations_3d.rotatev(mesh,(10),x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotatec","rotatec",2126840625),(function (p__28315){
var vec__28318 = p__28315;
var seq__28319 = cljs.core.seq(vec__28318);
var first__28320 = cljs.core.first(seq__28319);
var seq__28319__$1 = cljs.core.next(seq__28319);
var form = first__28320;
var first__28320__$1 = cljs.core.first(seq__28319__$1);
var seq__28319__$2 = cljs.core.next(seq__28319__$1);
var v = first__28320__$1;
var block = seq__28319__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
var vec__28323 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(faber.model.deg__GT_rad,v);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28323,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28323,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28323,(2),null);
return faber.operations_3d.rotatec(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fn","with-fn",627777509),(function (p__28329){
var vec__28330 = p__28329;
var seq__28331 = cljs.core.seq(vec__28330);
var first__28332 = cljs.core.first(seq__28331);
var seq__28331__$1 = cljs.core.next(seq__28331);
var form = first__28332;
var first__28332__$1 = cljs.core.first(seq__28331__$1);
var seq__28331__$2 = cljs.core.next(seq__28331__$1);
var x = first__28332__$1;
var block = seq__28331__$2;
return faber.operations_3d.with_fn(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fa","with-fa",-1456357876),(function (p__28334){
var vec__28335 = p__28334;
var seq__28336 = cljs.core.seq(vec__28335);
var first__28337 = cljs.core.first(seq__28336);
var seq__28336__$1 = cljs.core.next(seq__28336);
var form = first__28337;
var first__28337__$1 = cljs.core.first(seq__28336__$1);
var seq__28336__$2 = cljs.core.next(seq__28336__$1);
var x = first__28337__$1;
var block = seq__28336__$2;
return faber.operations_3d.with_fa(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fs","with-fs",-531734560),(function (p__28338){
var vec__28339 = p__28338;
var seq__28340 = cljs.core.seq(vec__28339);
var first__28341 = cljs.core.first(seq__28340);
var seq__28340__$1 = cljs.core.next(seq__28340);
var form = first__28341;
var first__28341__$1 = cljs.core.first(seq__28340__$1);
var seq__28340__$2 = cljs.core.next(seq__28340__$1);
var x = first__28341__$1;
var block = seq__28340__$2;
return faber.operations_3d.with_fs(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scale","scale",-230427353),(function (p__28342){
var vec__28343 = p__28342;
var seq__28344 = cljs.core.seq(vec__28343);
var first__28345 = cljs.core.first(seq__28344);
var seq__28344__$1 = cljs.core.next(seq__28344);
var form = first__28345;
var first__28345__$1 = cljs.core.first(seq__28344__$1);
var seq__28344__$2 = cljs.core.next(seq__28344__$1);
var vec__28346 = first__28345__$1;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28346,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28346,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28346,(2),null);
var block = seq__28344__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":scale mesh=",mesh], 0));

return faber.operations_3d.scale(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset","offset",296498311),(function (p__28349){
var vec__28350 = p__28349;
var seq__28351 = cljs.core.seq(vec__28350);
var first__28352 = cljs.core.first(seq__28351);
var seq__28351__$1 = cljs.core.next(seq__28351);
var form = first__28352;
var first__28352__$1 = cljs.core.first(seq__28351__$1);
var seq__28351__$2 = cljs.core.next(seq__28351__$1);
var options = first__28352__$1;
var block = seq__28351__$2;
return faber.operations_3d.offset(options,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block));
}));
faber.threejs_scene.pippo = (34);
faber.threejs_scene.model = (function faber$threejs_scene$model(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28393 = arguments.length;
var i__4737__auto___28394 = (0);
while(true){
if((i__4737__auto___28394 < len__4736__auto___28393)){
args__4742__auto__.push((arguments[i__4737__auto___28394]));

var G__28395 = (i__4737__auto___28394 + (1));
i__4737__auto___28394 = G__28395;
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
(faber.threejs_scene.model.cljs$lang$applyTo = (function (seq28356){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28356));
}));


//# sourceMappingURL=faber.threejs_scene.js.map
