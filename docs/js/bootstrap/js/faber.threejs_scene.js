goog.provide('faber.threejs_scene');
if((typeof faber !== 'undefined') && (typeof faber.threejs_scene !== 'undefined') && (typeof faber.threejs_scene.makemesh !== 'undefined')){
} else {
faber.threejs_scene.makemesh = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__28296 = cljs.core.get_global_hierarchy;
return (fexpr__28296.cljs$core$IFn$_invoke$arity$0 ? fexpr__28296.cljs$core$IFn$_invoke$arity$0() : fexpr__28296.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("faber.threejs-scene","makemesh"),(function (p__28297){
var vec__28298 = p__28297;
var seq__28299 = cljs.core.seq(vec__28298);
var first__28300 = cljs.core.first(seq__28299);
var seq__28299__$1 = cljs.core.next(seq__28299);
var form = first__28300;
var args = seq__28299__$1;
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
var G__28464__delegate = function (form,args){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unknown:",form,args], 0));
};
var G__28464 = function (form,var_args){
var args = null;
if (arguments.length > 1) {
var G__28465__i = 0, G__28465__a = new Array(arguments.length -  1);
while (G__28465__i < G__28465__a.length) {G__28465__a[G__28465__i] = arguments[G__28465__i + 1]; ++G__28465__i;}
  args = new cljs.core.IndexedSeq(G__28465__a,0,null);
} 
return G__28464__delegate.call(this,form,args);};
G__28464.cljs$lang$maxFixedArity = 1;
G__28464.cljs$lang$applyTo = (function (arglist__28466){
var form = cljs.core.first(arglist__28466);
var args = cljs.core.rest(arglist__28466);
return G__28464__delegate(form,args);
});
G__28464.cljs$core$IFn$_invoke$arity$variadic = G__28464__delegate;
return G__28464;
})()
);
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__28302){
var vec__28303 = p__28302;
var seq__28304 = cljs.core.seq(vec__28303);
var args = seq__28304;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":list args=",args], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (p__28306){
var vec__28307 = p__28306;
var seq__28308 = cljs.core.seq(vec__28307);
var first__28309 = cljs.core.first(seq__28308);
var seq__28308__$1 = cljs.core.next(seq__28308);
var form = first__28309;
var args = seq__28308__$1;
return faber.threejs_scene.makemesh.cljs$core$IFn$_invoke$arity$1(args);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"hull","hull",-957096876),(function (p__28314){
var vec__28315 = p__28314;
var seq__28316 = cljs.core.seq(vec__28315);
var first__28317 = cljs.core.first(seq__28316);
var seq__28316__$1 = cljs.core.next(seq__28316);
var form = first__28317;
var args = seq__28316__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.hull,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"difference","difference",1916101396),(function (p__28319){
var vec__28320 = p__28319;
var seq__28321 = cljs.core.seq(vec__28320);
var first__28322 = cljs.core.first(seq__28321);
var seq__28321__$1 = cljs.core.next(seq__28321);
var form = first__28322;
var args = seq__28321__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.difference,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),(function (p__28326){
var vec__28330 = p__28326;
var seq__28331 = cljs.core.seq(vec__28330);
var first__28332 = cljs.core.first(seq__28331);
var seq__28331__$1 = cljs.core.next(seq__28331);
var form = first__28332;
var args = seq__28331__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cube","cube",-1501611368),(function (p__28337){
var vec__28338 = p__28337;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28338,(0),null);
var map__28341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28338,(1),null);
var map__28341__$1 = (((((!((map__28341 == null))))?(((((map__28341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28341):map__28341);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28341__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28341__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28341__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28341__$1,new cljs.core.Keyword(null,"center","center",-748944368));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["makemesh :cube form=",form," y=",y], 0));

return faber.operations_3d.cube(x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),(function (p__28343){
var vec__28344 = p__28343;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344,(2),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28344,(3),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["makemesh :cylinder form=",form," h=",h," r=",r," r2=",r2], 0));

return faber.operations_3d.cylinder(h,r,r2);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polyhedron","polyhedron",998587527),(function (p__28348){
var vec__28350 = p__28348;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28350,(0),null);
var points = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28350,(1),null);
var faces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28350,(2),null);
return faber.operations_3d.polyhedron(points,faces);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sphere","sphere",384337120),(function (p__28354){
var vec__28355 = p__28354;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28355,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28355,(1),null);
return faber.operations_3d.sphere(r);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"translate","translate",1336199447),(function (p__28359){
var vec__28360 = p__28359;
var seq__28361 = cljs.core.seq(vec__28360);
var first__28362 = cljs.core.first(seq__28361);
var seq__28361__$1 = cljs.core.next(seq__28361);
var form = first__28362;
var first__28362__$1 = cljs.core.first(seq__28361__$1);
var seq__28361__$2 = cljs.core.next(seq__28361__$1);
var vec__28363 = first__28362__$1;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28363,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28363,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28363,(2),null);
var block = seq__28361__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":translate mesh=",mesh], 0));

return faber.operations_3d.translate(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotatev","rotatev",1387211932),(function (p__28369){
var vec__28371 = p__28369;
var seq__28372 = cljs.core.seq(vec__28371);
var first__28373 = cljs.core.first(seq__28372);
var seq__28372__$1 = cljs.core.next(seq__28372);
var form = first__28373;
var first__28373__$1 = cljs.core.first(seq__28372__$1);
var seq__28372__$2 = cljs.core.next(seq__28372__$1);
var a = first__28373__$1;
var first__28373__$2 = cljs.core.first(seq__28372__$2);
var seq__28372__$3 = cljs.core.next(seq__28372__$2);
var v = first__28373__$2;
var block = seq__28372__$3;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
var vec__28374 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(faber.model.deg__GT_rad,v);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28374,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28374,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28374,(2),null);
return faber.operations_3d.rotatev(mesh,(10),x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotatec","rotatec",2126840625),(function (p__28377){
var vec__28381 = p__28377;
var seq__28382 = cljs.core.seq(vec__28381);
var first__28383 = cljs.core.first(seq__28382);
var seq__28382__$1 = cljs.core.next(seq__28382);
var form = first__28383;
var first__28383__$1 = cljs.core.first(seq__28382__$1);
var seq__28382__$2 = cljs.core.next(seq__28382__$1);
var v = first__28383__$1;
var block = seq__28382__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
var vec__28386 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(faber.model.deg__GT_rad,v);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28386,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28386,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28386,(2),null);
return faber.operations_3d.rotatec(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fn","with-fn",627777509),(function (p__28390){
var vec__28391 = p__28390;
var seq__28392 = cljs.core.seq(vec__28391);
var first__28393 = cljs.core.first(seq__28392);
var seq__28392__$1 = cljs.core.next(seq__28392);
var form = first__28393;
var first__28393__$1 = cljs.core.first(seq__28392__$1);
var seq__28392__$2 = cljs.core.next(seq__28392__$1);
var x = first__28393__$1;
var block = seq__28392__$2;
return faber.operations_3d.with_fn(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fa","with-fa",-1456357876),(function (p__28410){
var vec__28412 = p__28410;
var seq__28413 = cljs.core.seq(vec__28412);
var first__28414 = cljs.core.first(seq__28413);
var seq__28413__$1 = cljs.core.next(seq__28413);
var form = first__28414;
var first__28414__$1 = cljs.core.first(seq__28413__$1);
var seq__28413__$2 = cljs.core.next(seq__28413__$1);
var x = first__28414__$1;
var block = seq__28413__$2;
return faber.operations_3d.with_fa(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fs","with-fs",-531734560),(function (p__28417){
var vec__28418 = p__28417;
var seq__28419 = cljs.core.seq(vec__28418);
var first__28420 = cljs.core.first(seq__28419);
var seq__28419__$1 = cljs.core.next(seq__28419);
var form = first__28420;
var first__28420__$1 = cljs.core.first(seq__28419__$1);
var seq__28419__$2 = cljs.core.next(seq__28419__$1);
var x = first__28420__$1;
var block = seq__28419__$2;
return faber.operations_3d.with_fs(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scale","scale",-230427353),(function (p__28429){
var vec__28430 = p__28429;
var seq__28431 = cljs.core.seq(vec__28430);
var first__28432 = cljs.core.first(seq__28431);
var seq__28431__$1 = cljs.core.next(seq__28431);
var form = first__28432;
var first__28432__$1 = cljs.core.first(seq__28431__$1);
var seq__28431__$2 = cljs.core.next(seq__28431__$1);
var vec__28433 = first__28432__$1;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28433,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28433,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28433,(2),null);
var block = seq__28431__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":scale mesh=",mesh], 0));

return faber.operations_3d.scale(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset","offset",296498311),(function (p__28441){
var vec__28442 = p__28441;
var seq__28443 = cljs.core.seq(vec__28442);
var first__28444 = cljs.core.first(seq__28443);
var seq__28443__$1 = cljs.core.next(seq__28443);
var form = first__28444;
var first__28444__$1 = cljs.core.first(seq__28443__$1);
var seq__28443__$2 = cljs.core.next(seq__28443__$1);
var options = first__28444__$1;
var block = seq__28443__$2;
return faber.operations_3d.offset(options,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block));
}));
faber.threejs_scene.pippo = (34);
faber.threejs_scene.model = (function faber$threejs_scene$model(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28505 = arguments.length;
var i__4737__auto___28506 = (0);
while(true){
if((i__4737__auto___28506 < len__4736__auto___28505)){
args__4742__auto__.push((arguments[i__4737__auto___28506]));

var G__28508 = (i__4737__auto___28506 + (1));
i__4737__auto___28506 = G__28508;
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
(faber.threejs_scene.model.cljs$lang$applyTo = (function (seq28446){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28446));
}));


//# sourceMappingURL=faber.threejs_scene.js.map
