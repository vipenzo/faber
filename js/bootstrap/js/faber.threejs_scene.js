goog.provide('faber.threejs_scene');
if((typeof faber !== 'undefined') && (typeof faber.threejs_scene !== 'undefined') && (typeof faber.threejs_scene.makemesh !== 'undefined')){
} else {
faber.threejs_scene.makemesh = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__38545 = cljs.core.get_global_hierarchy;
return (fexpr__38545.cljs$core$IFn$_invoke$arity$0 ? fexpr__38545.cljs$core$IFn$_invoke$arity$0() : fexpr__38545.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("faber.threejs-scene","makemesh"),(function (p__38546){
var vec__38547 = p__38546;
var seq__38548 = cljs.core.seq(vec__38547);
var first__38549 = cljs.core.first(seq__38548);
var seq__38548__$1 = cljs.core.next(seq__38548);
var form = first__38549;
var args = seq__38548__$1;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["multi makemesh form=",form," args=",args], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"hole","hole",-743450790).cljs$core$IFn$_invoke$arity$1(form))){
return new cljs.core.Keyword(null,"hole","hole",-743450790);
} else {
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.Keyword(null,"compose","compose",-495790624);
} else {
if((form instanceof cljs.core.Keyword)){
return form;
} else {
return new cljs.core.Keyword(null,"list","list",765357683);

}
}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__38798__delegate = function (form,args){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unknown:",form,args], 0));
};
var G__38798 = function (form,var_args){
var args = null;
if (arguments.length > 1) {
var G__38799__i = 0, G__38799__a = new Array(arguments.length -  1);
while (G__38799__i < G__38799__a.length) {G__38799__a[G__38799__i] = arguments[G__38799__i + 1]; ++G__38799__i;}
  args = new cljs.core.IndexedSeq(G__38799__a,0,null);
} 
return G__38798__delegate.call(this,form,args);};
G__38798.cljs$lang$maxFixedArity = 1;
G__38798.cljs$lang$applyTo = (function (arglist__38800){
var form = cljs.core.first(arglist__38800);
var args = cljs.core.rest(arglist__38800);
return G__38798__delegate(form,args);
});
G__38798.cljs$core$IFn$_invoke$arity$variadic = G__38798__delegate;
return G__38798;
})()
);
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__38558){
var vec__38563 = p__38558;
var seq__38564 = cljs.core.seq(vec__38563);
var args = seq__38564;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":list args=",args], 0));

if((cljs.core.count(args) > (1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
} else {
return faber.threejs_scene.makemesh.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
}
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"compose","compose",-495790624),(function (p__38574){
var vec__38576 = p__38574;
var seq__38577 = cljs.core.seq(vec__38576);
var first__38578 = cljs.core.first(seq__38577);
var seq__38577__$1 = cljs.core.next(seq__38577);
var form = first__38578;
var args = seq__38577__$1;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":compose args=",args], 0));

var vec__38582 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__38571_SHARP_){
return (p1__38571_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38571_SHARP_.cljs$core$IFn$_invoke$arity$1(false) : p1__38571_SHARP_.call(null,false));
}),(function (p1__38572_SHARP_){
return (p1__38572_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38572_SHARP_.cljs$core$IFn$_invoke$arity$1(true) : p1__38572_SHARP_.call(null,true));
}))(cljs.core.group_by((function (p1__38573_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hole","hole",-743450790),cljs.core.first(p1__38573_SHARP_));
}),args));
var solids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38582,(0),null);
var holes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38582,(1),null);
var ufn = (function (l){
if(cljs.core.empty_QMARK_(l)){
return null;
} else {
return faber.threejs_scene.makemesh.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,l));
}
});
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":compose-2 solids=",solids," holes=",holes], 0));
var holes__$1 = ufn(holes);
var solids__$1 = ufn(solids);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":compose solids=",solids__$1," holes=",holes__$1], 0));

if((holes__$1 == null)){
return solids__$1;
} else {
if((solids__$1 == null)){
return solids__$1;
} else {
return faber.operations_3d.difference.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([solids__$1,holes__$1], 0));

}
}
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (p__38593){
var vec__38596 = p__38593;
var seq__38597 = cljs.core.seq(vec__38596);
var first__38598 = cljs.core.first(seq__38597);
var seq__38597__$1 = cljs.core.next(seq__38597);
var form = first__38598;
var args = seq__38597__$1;
return faber.threejs_scene.makemesh.cljs$core$IFn$_invoke$arity$1(args);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"hull","hull",-957096876),(function (p__38608){
var vec__38609 = p__38608;
var seq__38610 = cljs.core.seq(vec__38609);
var first__38611 = cljs.core.first(seq__38610);
var seq__38610__$1 = cljs.core.next(seq__38610);
var form = first__38611;
var args = seq__38610__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.hull,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"difference","difference",1916101396),(function (p__38619){
var vec__38620 = p__38619;
var seq__38621 = cljs.core.seq(vec__38620);
var first__38622 = cljs.core.first(seq__38621);
var seq__38621__$1 = cljs.core.next(seq__38621);
var form = first__38622;
var args = seq__38621__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.difference,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),(function (p__38630){
var vec__38633 = p__38630;
var seq__38634 = cljs.core.seq(vec__38633);
var first__38635 = cljs.core.first(seq__38634);
var seq__38634__$1 = cljs.core.next(seq__38634);
var form = first__38635;
var args = seq__38634__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cube","cube",-1501611368),(function (p__38639){
var vec__38640 = p__38639;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38640,(0),null);
var map__38643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38640,(1),null);
var map__38643__$1 = (((((!((map__38643 == null))))?(((((map__38643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38643):map__38643);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38643__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38643__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38643__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38643__$1,new cljs.core.Keyword(null,"center","center",-748944368));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["makemesh :cube form=",form," y=",y], 0));

return faber.operations_3d.cube(x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),(function (p__38658){
var vec__38660 = p__38658;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38660,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38660,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38660,(2),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38660,(3),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["makemesh :cylinder form=",form," h=",h," r=",r," r2=",r2], 0));

return faber.operations_3d.cylinder(h,r,r2);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polyhedron","polyhedron",998587527),(function (p__38667){
var vec__38668 = p__38667;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38668,(0),null);
var points = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38668,(1),null);
var faces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38668,(2),null);
return faber.operations_3d.polyhedron(points,faces);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sphere","sphere",384337120),(function (p__38672){
var vec__38679 = p__38672;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38679,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38679,(1),null);
return faber.operations_3d.sphere(r);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"translate","translate",1336199447),(function (p__38682){
var vec__38684 = p__38682;
var seq__38685 = cljs.core.seq(vec__38684);
var first__38686 = cljs.core.first(seq__38685);
var seq__38685__$1 = cljs.core.next(seq__38685);
var form = first__38686;
var first__38686__$1 = cljs.core.first(seq__38685__$1);
var seq__38685__$2 = cljs.core.next(seq__38685__$1);
var vec__38687 = first__38686__$1;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38687,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38687,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38687,(2),null);
var block = seq__38685__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":translate mesh=",mesh], 0));

return faber.operations_3d.translate(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotatev","rotatev",1387211932),(function (p__38696){
var vec__38697 = p__38696;
var seq__38698 = cljs.core.seq(vec__38697);
var first__38699 = cljs.core.first(seq__38698);
var seq__38698__$1 = cljs.core.next(seq__38698);
var form = first__38699;
var first__38699__$1 = cljs.core.first(seq__38698__$1);
var seq__38698__$2 = cljs.core.next(seq__38698__$1);
var a = first__38699__$1;
var first__38699__$2 = cljs.core.first(seq__38698__$2);
var seq__38698__$3 = cljs.core.next(seq__38698__$2);
var v = first__38699__$2;
var block = seq__38698__$3;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
var vec__38704 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(faber.model.deg__GT_rad,v);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38704,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38704,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38704,(2),null);
return faber.operations_3d.rotatev(mesh,(10),x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotatec","rotatec",2126840625),(function (p__38713){
var vec__38715 = p__38713;
var seq__38716 = cljs.core.seq(vec__38715);
var first__38717 = cljs.core.first(seq__38716);
var seq__38716__$1 = cljs.core.next(seq__38716);
var form = first__38717;
var first__38717__$1 = cljs.core.first(seq__38716__$1);
var seq__38716__$2 = cljs.core.next(seq__38716__$1);
var v = first__38717__$1;
var block = seq__38716__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
var vec__38721 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(faber.model.deg__GT_rad,v);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38721,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38721,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38721,(2),null);
return faber.operations_3d.rotatec(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fn","with-fn",627777509),(function (p__38730){
var vec__38731 = p__38730;
var seq__38732 = cljs.core.seq(vec__38731);
var first__38733 = cljs.core.first(seq__38732);
var seq__38732__$1 = cljs.core.next(seq__38732);
var form = first__38733;
var first__38733__$1 = cljs.core.first(seq__38732__$1);
var seq__38732__$2 = cljs.core.next(seq__38732__$1);
var x = first__38733__$1;
var block = seq__38732__$2;
return faber.operations_3d.with_fn(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fa","with-fa",-1456357876),(function (p__38738){
var vec__38742 = p__38738;
var seq__38743 = cljs.core.seq(vec__38742);
var first__38744 = cljs.core.first(seq__38743);
var seq__38743__$1 = cljs.core.next(seq__38743);
var form = first__38744;
var first__38744__$1 = cljs.core.first(seq__38743__$1);
var seq__38743__$2 = cljs.core.next(seq__38743__$1);
var x = first__38744__$1;
var block = seq__38743__$2;
return faber.operations_3d.with_fa(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fs","with-fs",-531734560),(function (p__38745){
var vec__38747 = p__38745;
var seq__38748 = cljs.core.seq(vec__38747);
var first__38749 = cljs.core.first(seq__38748);
var seq__38748__$1 = cljs.core.next(seq__38748);
var form = first__38749;
var first__38749__$1 = cljs.core.first(seq__38748__$1);
var seq__38748__$2 = cljs.core.next(seq__38748__$1);
var x = first__38749__$1;
var block = seq__38748__$2;
return faber.operations_3d.with_fs(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scale","scale",-230427353),(function (p__38758){
var vec__38760 = p__38758;
var seq__38761 = cljs.core.seq(vec__38760);
var first__38762 = cljs.core.first(seq__38761);
var seq__38761__$1 = cljs.core.next(seq__38761);
var form = first__38762;
var first__38762__$1 = cljs.core.first(seq__38761__$1);
var seq__38761__$2 = cljs.core.next(seq__38761__$1);
var vec__38763 = first__38762__$1;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38763,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38763,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38763,(2),null);
var block = seq__38761__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":scale mesh=",mesh], 0));

return faber.operations_3d.scale(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset","offset",296498311),(function (p__38779){
var vec__38780 = p__38779;
var seq__38781 = cljs.core.seq(vec__38780);
var first__38782 = cljs.core.first(seq__38781);
var seq__38781__$1 = cljs.core.next(seq__38781);
var form = first__38782;
var first__38782__$1 = cljs.core.first(seq__38781__$1);
var seq__38781__$2 = cljs.core.next(seq__38781__$1);
var options = first__38782__$1;
var block = seq__38781__$2;
return faber.operations_3d.offset(options,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"hole","hole",-743450790),(function (p__38784){
var vec__38785 = p__38784;
var seq__38786 = cljs.core.seq(vec__38785);
var first__38787 = cljs.core.first(seq__38786);
var seq__38786__$1 = cljs.core.next(seq__38786);
var form = first__38787;
var block = seq__38786__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
faber.threejs_scene.pippo = (34);
faber.threejs_scene.model = (function faber$threejs_scene$model(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38801 = arguments.length;
var i__4737__auto___38802 = (0);
while(true){
if((i__4737__auto___38802 < len__4736__auto___38801)){
args__4742__auto__.push((arguments[i__4737__auto___38802]));

var G__38805 = (i__4737__auto___38802 + (1));
i__4737__auto___38802 = G__38805;
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
(faber.threejs_scene.model.cljs$lang$applyTo = (function (seq38788){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38788));
}));


//# sourceMappingURL=faber.threejs_scene.js.map
