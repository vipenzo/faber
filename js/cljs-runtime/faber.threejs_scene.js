goog.provide('faber.threejs_scene');
if((typeof faber !== 'undefined') && (typeof faber.threejs_scene !== 'undefined') && (typeof faber.threejs_scene.makemesh !== 'undefined')){
} else {
faber.threejs_scene.makemesh = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__38537 = cljs.core.get_global_hierarchy;
return (fexpr__38537.cljs$core$IFn$_invoke$arity$0 ? fexpr__38537.cljs$core$IFn$_invoke$arity$0() : fexpr__38537.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("faber.threejs-scene","makemesh"),(function (p__38538){
var vec__38539 = p__38538;
var seq__38540 = cljs.core.seq(vec__38539);
var first__38541 = cljs.core.first(seq__38540);
var seq__38540__$1 = cljs.core.next(seq__38540);
var form = first__38541;
var args = seq__38540__$1;
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
var G__38795__delegate = function (form,args){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unknown:",form,args], 0));
};
var G__38795 = function (form,var_args){
var args = null;
if (arguments.length > 1) {
var G__38796__i = 0, G__38796__a = new Array(arguments.length -  1);
while (G__38796__i < G__38796__a.length) {G__38796__a[G__38796__i] = arguments[G__38796__i + 1]; ++G__38796__i;}
  args = new cljs.core.IndexedSeq(G__38796__a,0,null);
} 
return G__38795__delegate.call(this,form,args);};
G__38795.cljs$lang$maxFixedArity = 1;
G__38795.cljs$lang$applyTo = (function (arglist__38797){
var form = cljs.core.first(arglist__38797);
var args = cljs.core.rest(arglist__38797);
return G__38795__delegate(form,args);
});
G__38795.cljs$core$IFn$_invoke$arity$variadic = G__38795__delegate;
return G__38795;
})()
);
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__38550){
var vec__38551 = p__38550;
var seq__38552 = cljs.core.seq(vec__38551);
var args = seq__38552;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":list args=",args], 0));

if((cljs.core.count(args) > (1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
} else {
return faber.threejs_scene.makemesh.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args));
}
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"compose","compose",-495790624),(function (p__38557){
var vec__38559 = p__38557;
var seq__38560 = cljs.core.seq(vec__38559);
var first__38561 = cljs.core.first(seq__38560);
var seq__38560__$1 = cljs.core.next(seq__38560);
var form = first__38561;
var args = seq__38560__$1;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":compose args=",args], 0));

var vec__38568 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__38554_SHARP_){
return (p1__38554_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38554_SHARP_.cljs$core$IFn$_invoke$arity$1(false) : p1__38554_SHARP_.call(null,false));
}),(function (p1__38555_SHARP_){
return (p1__38555_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38555_SHARP_.cljs$core$IFn$_invoke$arity$1(true) : p1__38555_SHARP_.call(null,true));
}))(cljs.core.group_by((function (p1__38556_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hole","hole",-743450790),cljs.core.first(p1__38556_SHARP_));
}),args));
var solids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38568,(0),null);
var holes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38568,(1),null);
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
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (p__38585){
var vec__38586 = p__38585;
var seq__38587 = cljs.core.seq(vec__38586);
var first__38588 = cljs.core.first(seq__38587);
var seq__38587__$1 = cljs.core.next(seq__38587);
var form = first__38588;
var args = seq__38587__$1;
return faber.threejs_scene.makemesh.cljs$core$IFn$_invoke$arity$1(args);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"hull","hull",-957096876),(function (p__38589){
var vec__38590 = p__38589;
var seq__38591 = cljs.core.seq(vec__38590);
var first__38592 = cljs.core.first(seq__38591);
var seq__38591__$1 = cljs.core.next(seq__38591);
var form = first__38592;
var args = seq__38591__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.hull,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"difference","difference",1916101396),(function (p__38601){
var vec__38603 = p__38601;
var seq__38604 = cljs.core.seq(vec__38603);
var first__38605 = cljs.core.first(seq__38604);
var seq__38604__$1 = cljs.core.next(seq__38604);
var form = first__38605;
var args = seq__38604__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.difference,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),(function (p__38612){
var vec__38615 = p__38612;
var seq__38616 = cljs.core.seq(vec__38615);
var first__38617 = cljs.core.first(seq__38616);
var seq__38616__$1 = cljs.core.next(seq__38616);
var form = first__38617;
var args = seq__38616__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cube","cube",-1501611368),(function (p__38623){
var vec__38624 = p__38623;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38624,(0),null);
var map__38627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38624,(1),null);
var map__38627__$1 = (((((!((map__38627 == null))))?(((((map__38627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38627):map__38627);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38627__$1,new cljs.core.Keyword(null,"center","center",-748944368));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["makemesh :cube form=",form," y=",y], 0));

return faber.operations_3d.cube(x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),(function (p__38646){
var vec__38649 = p__38646;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38649,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38649,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38649,(2),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38649,(3),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["makemesh :cylinder form=",form," h=",h," r=",r," r2=",r2], 0));

return faber.operations_3d.cylinder(h,r,r2);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polyhedron","polyhedron",998587527),(function (p__38652){
var vec__38655 = p__38652;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38655,(0),null);
var points = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38655,(1),null);
var faces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38655,(2),null);
return faber.operations_3d.polyhedron(points,faces);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sphere","sphere",384337120),(function (p__38663){
var vec__38664 = p__38663;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38664,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38664,(1),null);
return faber.operations_3d.sphere(r);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"translate","translate",1336199447),(function (p__38671){
var vec__38673 = p__38671;
var seq__38674 = cljs.core.seq(vec__38673);
var first__38675 = cljs.core.first(seq__38674);
var seq__38674__$1 = cljs.core.next(seq__38674);
var form = first__38675;
var first__38675__$1 = cljs.core.first(seq__38674__$1);
var seq__38674__$2 = cljs.core.next(seq__38674__$1);
var vec__38676 = first__38675__$1;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38676,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38676,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38676,(2),null);
var block = seq__38674__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":translate mesh=",mesh], 0));

return faber.operations_3d.translate(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotatev","rotatev",1387211932),(function (p__38683){
var vec__38690 = p__38683;
var seq__38691 = cljs.core.seq(vec__38690);
var first__38692 = cljs.core.first(seq__38691);
var seq__38691__$1 = cljs.core.next(seq__38691);
var form = first__38692;
var first__38692__$1 = cljs.core.first(seq__38691__$1);
var seq__38691__$2 = cljs.core.next(seq__38691__$1);
var a = first__38692__$1;
var first__38692__$2 = cljs.core.first(seq__38691__$2);
var seq__38691__$3 = cljs.core.next(seq__38691__$2);
var v = first__38692__$2;
var block = seq__38691__$3;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
var vec__38693 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(faber.model.deg__GT_rad,v);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38693,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38693,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38693,(2),null);
return faber.operations_3d.rotatev(mesh,(10),x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotatec","rotatec",2126840625),(function (p__38700){
var vec__38701 = p__38700;
var seq__38702 = cljs.core.seq(vec__38701);
var first__38703 = cljs.core.first(seq__38702);
var seq__38702__$1 = cljs.core.next(seq__38702);
var form = first__38703;
var first__38703__$1 = cljs.core.first(seq__38702__$1);
var seq__38702__$2 = cljs.core.next(seq__38702__$1);
var v = first__38703__$1;
var block = seq__38702__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
var vec__38710 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(faber.model.deg__GT_rad,v);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38710,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38710,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38710,(2),null);
return faber.operations_3d.rotatec(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fn","with-fn",627777509),(function (p__38714){
var vec__38718 = p__38714;
var seq__38719 = cljs.core.seq(vec__38718);
var first__38720 = cljs.core.first(seq__38719);
var seq__38719__$1 = cljs.core.next(seq__38719);
var form = first__38720;
var first__38720__$1 = cljs.core.first(seq__38719__$1);
var seq__38719__$2 = cljs.core.next(seq__38719__$1);
var x = first__38720__$1;
var block = seq__38719__$2;
return faber.operations_3d.with_fn(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fa","with-fa",-1456357876),(function (p__38726){
var vec__38727 = p__38726;
var seq__38728 = cljs.core.seq(vec__38727);
var first__38729 = cljs.core.first(seq__38728);
var seq__38728__$1 = cljs.core.next(seq__38728);
var form = first__38729;
var first__38729__$1 = cljs.core.first(seq__38728__$1);
var seq__38728__$2 = cljs.core.next(seq__38728__$1);
var x = first__38729__$1;
var block = seq__38728__$2;
return faber.operations_3d.with_fa(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fs","with-fs",-531734560),(function (p__38737){
var vec__38739 = p__38737;
var seq__38740 = cljs.core.seq(vec__38739);
var first__38741 = cljs.core.first(seq__38740);
var seq__38740__$1 = cljs.core.next(seq__38740);
var form = first__38741;
var first__38741__$1 = cljs.core.first(seq__38740__$1);
var seq__38740__$2 = cljs.core.next(seq__38740__$1);
var x = first__38741__$1;
var block = seq__38740__$2;
return faber.operations_3d.with_fs(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scale","scale",-230427353),(function (p__38746){
var vec__38752 = p__38746;
var seq__38753 = cljs.core.seq(vec__38752);
var first__38754 = cljs.core.first(seq__38753);
var seq__38753__$1 = cljs.core.next(seq__38753);
var form = first__38754;
var first__38754__$1 = cljs.core.first(seq__38753__$1);
var seq__38753__$2 = cljs.core.next(seq__38753__$1);
var vec__38755 = first__38754__$1;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38755,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38755,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38755,(2),null);
var block = seq__38753__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":scale mesh=",mesh], 0));

return faber.operations_3d.scale(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset","offset",296498311),(function (p__38759){
var vec__38766 = p__38759;
var seq__38767 = cljs.core.seq(vec__38766);
var first__38768 = cljs.core.first(seq__38767);
var seq__38767__$1 = cljs.core.next(seq__38767);
var form = first__38768;
var first__38768__$1 = cljs.core.first(seq__38767__$1);
var seq__38767__$2 = cljs.core.next(seq__38767__$1);
var options = first__38768__$1;
var block = seq__38767__$2;
return faber.operations_3d.offset(options,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"hole","hole",-743450790),(function (p__38772){
var vec__38774 = p__38772;
var seq__38775 = cljs.core.seq(vec__38774);
var first__38776 = cljs.core.first(seq__38775);
var seq__38775__$1 = cljs.core.next(seq__38775);
var form = first__38776;
var block = seq__38775__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
faber.threejs_scene.pippo = (34);
faber.threejs_scene.model = (function faber$threejs_scene$model(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38803 = arguments.length;
var i__4737__auto___38804 = (0);
while(true){
if((i__4737__auto___38804 < len__4736__auto___38803)){
args__4742__auto__.push((arguments[i__4737__auto___38804]));

var G__38806 = (i__4737__auto___38804 + (1));
i__4737__auto___38804 = G__38806;
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
(faber.threejs_scene.model.cljs$lang$applyTo = (function (seq38783){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38783));
}));


//# sourceMappingURL=faber.threejs_scene.js.map
