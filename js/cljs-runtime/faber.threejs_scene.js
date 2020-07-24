goog.provide('faber.threejs_scene');
if((typeof faber !== 'undefined') && (typeof faber.threejs_scene !== 'undefined') && (typeof faber.threejs_scene.makemesh !== 'undefined')){
} else {
faber.threejs_scene.makemesh = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54688 = cljs.core.get_global_hierarchy;
return (fexpr__54688.cljs$core$IFn$_invoke$arity$0 ? fexpr__54688.cljs$core$IFn$_invoke$arity$0() : fexpr__54688.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("faber.threejs-scene","makemesh"),(function (p__54689){
var vec__54690 = p__54689;
var seq__54691 = cljs.core.seq(vec__54690);
var first__54692 = cljs.core.first(seq__54691);
var seq__54691__$1 = cljs.core.next(seq__54691);
var form = first__54692;
var args = seq__54691__$1;
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
var G__54821__delegate = function (form,args){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["unknown:",form,args], 0));
};
var G__54821 = function (form,var_args){
var args = null;
if (arguments.length > 1) {
var G__54822__i = 0, G__54822__a = new Array(arguments.length -  1);
while (G__54822__i < G__54822__a.length) {G__54822__a[G__54822__i] = arguments[G__54822__i + 1]; ++G__54822__i;}
  args = new cljs.core.IndexedSeq(G__54822__a,0,null);
} 
return G__54821__delegate.call(this,form,args);};
G__54821.cljs$lang$maxFixedArity = 1;
G__54821.cljs$lang$applyTo = (function (arglist__54823){
var form = cljs.core.first(arglist__54823);
var args = cljs.core.rest(arglist__54823);
return G__54821__delegate(form,args);
});
G__54821.cljs$core$IFn$_invoke$arity$variadic = G__54821__delegate;
return G__54821;
})()
);
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__54693){
var vec__54694 = p__54693;
var seq__54695 = cljs.core.seq(vec__54694);
var args = seq__54695;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":list args=",args], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (p__54697){
var vec__54698 = p__54697;
var seq__54699 = cljs.core.seq(vec__54698);
var first__54700 = cljs.core.first(seq__54699);
var seq__54699__$1 = cljs.core.next(seq__54699);
var form = first__54700;
var args = seq__54699__$1;
return faber.threejs_scene.makemesh.cljs$core$IFn$_invoke$arity$1(args);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"hull","hull",-957096876),(function (p__54701){
var vec__54702 = p__54701;
var seq__54703 = cljs.core.seq(vec__54702);
var first__54704 = cljs.core.first(seq__54703);
var seq__54703__$1 = cljs.core.next(seq__54703);
var form = first__54704;
var args = seq__54703__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.hull,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"difference","difference",1916101396),(function (p__54705){
var vec__54706 = p__54705;
var seq__54707 = cljs.core.seq(vec__54706);
var first__54708 = cljs.core.first(seq__54707);
var seq__54707__$1 = cljs.core.next(seq__54707);
var form = first__54708;
var args = seq__54707__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.difference,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"intersection","intersection",2003891010),(function (p__54709){
var vec__54710 = p__54709;
var seq__54711 = cljs.core.seq(vec__54710);
var first__54712 = cljs.core.first(seq__54711);
var seq__54711__$1 = cljs.core.next(seq__54711);
var form = first__54712;
var args = seq__54711__$1;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.operations_3d.intersection,cljs.core.map.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,args));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cube","cube",-1501611368),(function (p__54713){
var vec__54714 = p__54713;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54714,(0),null);
var map__54717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54714,(1),null);
var map__54717__$1 = (((((!((map__54717 == null))))?(((((map__54717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__54717):map__54717);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54717__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54717__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var z = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54717__$1,new cljs.core.Keyword(null,"z","z",-789527183));
var center = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54717__$1,new cljs.core.Keyword(null,"center","center",-748944368));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["makemesh :cube form=",form," y=",y], 0));

return faber.operations_3d.cube(x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"cylinder","cylinder",-1762349035),(function (p__54719){
var vec__54720 = p__54719;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54720,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54720,(1),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54720,(2),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54720,(3),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["makemesh :cylinder form=",form," h=",h," r=",r," r2=",r2], 0));

return faber.operations_3d.cylinder(h,r,r2);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polyhedron","polyhedron",998587527),(function (p__54723){
var vec__54724 = p__54723;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54724,(0),null);
var points = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54724,(1),null);
var faces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54724,(2),null);
return faber.operations_3d.polyhedron(points,faces);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sphere","sphere",384337120),(function (p__54728){
var vec__54731 = p__54728;
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54731,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54731,(1),null);
return faber.operations_3d.sphere(r);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"translate","translate",1336199447),(function (p__54752){
var vec__54753 = p__54752;
var seq__54754 = cljs.core.seq(vec__54753);
var first__54755 = cljs.core.first(seq__54754);
var seq__54754__$1 = cljs.core.next(seq__54754);
var form = first__54755;
var first__54755__$1 = cljs.core.first(seq__54754__$1);
var seq__54754__$2 = cljs.core.next(seq__54754__$1);
var vec__54756 = first__54755__$1;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54756,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54756,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54756,(2),null);
var block = seq__54754__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":translate mesh=",mesh], 0));

return faber.operations_3d.translate(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotatev","rotatev",1387211932),(function (p__54764){
var vec__54765 = p__54764;
var seq__54766 = cljs.core.seq(vec__54765);
var first__54767 = cljs.core.first(seq__54766);
var seq__54766__$1 = cljs.core.next(seq__54766);
var form = first__54767;
var first__54767__$1 = cljs.core.first(seq__54766__$1);
var seq__54766__$2 = cljs.core.next(seq__54766__$1);
var a = first__54767__$1;
var first__54767__$2 = cljs.core.first(seq__54766__$2);
var seq__54766__$3 = cljs.core.next(seq__54766__$2);
var v = first__54767__$2;
var block = seq__54766__$3;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
var vec__54768 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(faber.model.deg__GT_rad,v);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54768,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54768,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54768,(2),null);
return faber.operations_3d.rotatev(mesh,(10),x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rotatec","rotatec",2126840625),(function (p__54776){
var vec__54777 = p__54776;
var seq__54778 = cljs.core.seq(vec__54777);
var first__54779 = cljs.core.first(seq__54778);
var seq__54778__$1 = cljs.core.next(seq__54778);
var form = first__54779;
var first__54779__$1 = cljs.core.first(seq__54778__$1);
var seq__54778__$2 = cljs.core.next(seq__54778__$1);
var v = first__54779__$1;
var block = seq__54778__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
var vec__54780 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(faber.model.deg__GT_rad,v);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54780,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54780,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54780,(2),null);
return faber.operations_3d.rotatec(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fn","with-fn",627777509),(function (p__54787){
var vec__54788 = p__54787;
var seq__54789 = cljs.core.seq(vec__54788);
var first__54790 = cljs.core.first(seq__54789);
var seq__54789__$1 = cljs.core.next(seq__54789);
var form = first__54790;
var first__54790__$1 = cljs.core.first(seq__54789__$1);
var seq__54789__$2 = cljs.core.next(seq__54789__$1);
var x = first__54790__$1;
var block = seq__54789__$2;
return faber.operations_3d.with_fn(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fa","with-fa",-1456357876),(function (p__54791){
var vec__54792 = p__54791;
var seq__54793 = cljs.core.seq(vec__54792);
var first__54794 = cljs.core.first(seq__54793);
var seq__54793__$1 = cljs.core.next(seq__54793);
var form = first__54794;
var first__54794__$1 = cljs.core.first(seq__54793__$1);
var seq__54793__$2 = cljs.core.next(seq__54793__$1);
var x = first__54794__$1;
var block = seq__54793__$2;
return faber.operations_3d.with_fa(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-fs","with-fs",-531734560),(function (p__54795){
var vec__54796 = p__54795;
var seq__54797 = cljs.core.seq(vec__54796);
var first__54798 = cljs.core.first(seq__54797);
var seq__54797__$1 = cljs.core.next(seq__54797);
var form = first__54798;
var first__54798__$1 = cljs.core.first(seq__54797__$1);
var seq__54797__$2 = cljs.core.next(seq__54797__$1);
var x = first__54798__$1;
var block = seq__54797__$2;
return faber.operations_3d.with_fs(x,(function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
}));
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"scale","scale",-230427353),(function (p__54799){
var vec__54800 = p__54799;
var seq__54801 = cljs.core.seq(vec__54800);
var first__54802 = cljs.core.first(seq__54801);
var seq__54801__$1 = cljs.core.next(seq__54801);
var form = first__54802;
var first__54802__$1 = cljs.core.first(seq__54801__$1);
var seq__54801__$2 = cljs.core.next(seq__54801__$1);
var vec__54803 = first__54802__$1;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54803,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54803,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54803,(2),null);
var block = seq__54801__$2;
var mesh = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([":scale mesh=",mesh], 0));

return faber.operations_3d.scale(mesh,x,y,z);
}));
faber.threejs_scene.makemesh.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"offset","offset",296498311),(function (p__54806){
var vec__54807 = p__54806;
var seq__54808 = cljs.core.seq(vec__54807);
var first__54809 = cljs.core.first(seq__54808);
var seq__54808__$1 = cljs.core.next(seq__54808);
var form = first__54809;
var first__54809__$1 = cljs.core.first(seq__54808__$1);
var seq__54808__$2 = cljs.core.next(seq__54808__$1);
var options = first__54809__$1;
var block = seq__54808__$2;
return faber.operations_3d.offset(options,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(faber.threejs_scene.makemesh,block));
}));
faber.threejs_scene.pippo = (34);
faber.threejs_scene.model = (function faber$threejs_scene$model(var_args){
var args__4742__auto__ = [];
var len__4736__auto___54965 = arguments.length;
var i__4737__auto___54966 = (0);
while(true){
if((i__4737__auto___54966 < len__4736__auto___54965)){
args__4742__auto__.push((arguments[i__4737__auto___54966]));

var G__54967 = (i__4737__auto___54966 + (1));
i__4737__auto___54966 = G__54967;
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
(faber.threejs_scene.model.cljs$lang$applyTo = (function (seq54810){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54810));
}));


//# sourceMappingURL=faber.threejs_scene.js.map
