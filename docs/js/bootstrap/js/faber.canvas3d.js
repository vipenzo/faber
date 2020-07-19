goog.provide('faber.canvas3d');
var module$node_modules$three$build$three=shadow.js.require("module$node_modules$three$build$three", {});
var module$node_modules$three_orbitcontrols$OrbitControls=shadow.js.require("module$node_modules$three_orbitcontrols$OrbitControls", {});
var module$node_modules$three_js_csg$index=shadow.js.require("module$node_modules$three_js_csg$index", {});
var module$node_modules$threejs_export_stl$lib$index=shadow.js.require("module$node_modules$threejs_export_stl$lib$index", {});
var module$node_modules$file_saver$dist$FileSaver_min=shadow.js.require("module$node_modules$file_saver$dist$FileSaver_min", {});
console.log("three=",module$node_modules$three$build$three);
faber.canvas3d.is3dmodel_QMARK_ = (function faber$canvas3d$is3dmodel_QMARK_(value){
return new cljs.core.Keyword(null,"3dmodel","3dmodel",135298134).cljs$core$IFn$_invoke$arity$1(value);
});
if((typeof faber !== 'undefined') && (typeof faber.canvas3d !== 'undefined') && (typeof faber.canvas3d.context !== 'undefined')){
} else {
faber.canvas3d.context = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof faber !== 'undefined') && (typeof faber.canvas3d !== 'undefined') && (typeof faber.canvas3d.faber_scene !== 'undefined')){
} else {
faber.canvas3d.faber_scene = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
faber.canvas3d.new_scene = (function faber$canvas3d$new_scene(){
var scene = (new module$node_modules$three$build$three.Scene());
var light = (new module$node_modules$three$build$three.DirectionalLight((16777215)));
var ambient_light = (new module$node_modules$three$build$three.AmbientLight((9498656)));
(light.position.x = (200));

(light.position.y = (50));

(light.position.z = (100));

light.position.normalize();

scene.add(light);

scene.add(ambient_light);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(faber.canvas3d.context,(function (p1__27908_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__27908_SHARP_,new cljs.core.Keyword(null,"scene","scene",1523800415),scene),new cljs.core.Keyword(null,"light","light",1918998747),light),new cljs.core.Keyword(null,"ambient-light","ambient-light",1637901620),ambient_light);
}));
});
faber.canvas3d.init_context = (function faber$canvas3d$init_context(canvas){
var width = canvas.offsetWidth;
var height = canvas.offsetHeight;
var scene = (new module$node_modules$three$build$three.Scene());
var camera = (new module$node_modules$three$build$three.PerspectiveCamera((75),(width / height),0.1,(1000)));
var renderer = (new module$node_modules$three$build$three.WebGLRenderer(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas], null))));
var light = (new module$node_modules$three$build$three.DirectionalLight((16777215)));
var ambient_light = (new module$node_modules$three$build$three.AmbientLight((9498656)));
var controls = (new module$node_modules$three_orbitcontrols$OrbitControls(camera,renderer.domElement));
renderer.setSize(width,height);

(camera.position.z = (5));

(light.position.x = (200));

(light.position.y = (50));

(light.position.z = (100));

light.position.normalize();

scene.add(light);

scene.add(ambient_light);

return cljs.core.reset_BANG_(faber.canvas3d.context,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"ambient-light","ambient-light",1637901620),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"scene","scene",1523800415)],[width,controls,canvas,renderer,ambient_light,camera,light,height,scene]));
});
faber.canvas3d.render = (function faber$canvas3d$render(){
var map__27929 = cljs.core.deref(faber.canvas3d.context);
var map__27929__$1 = (((((!((map__27929 == null))))?(((((map__27929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27929):map__27929);
var scene = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27929__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));
var renderer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27929__$1,new cljs.core.Keyword(null,"renderer","renderer",336841071));
var camera = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27929__$1,new cljs.core.Keyword(null,"camera","camera",-1190348585));
return renderer.render(scene,camera);
});
faber.canvas3d.animate = (function faber$canvas3d$animate(){
window.requestAnimationFrame(faber.canvas3d.animate);

return faber.canvas3d.render();
});
faber.canvas3d.make_stl_blob = (function faber$canvas3d$make_stl_blob(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Make stl blob"], 0));

var temp__5733__auto__ = new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(faber.canvas3d.context));
if(cljs.core.truth_(temp__5733__auto__)){
var mesh = temp__5733__auto__;
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["make-stl mesh=",mesh], 0));
var stl = module$node_modules$threejs_export_stl$lib$index.fromMesh(mesh);
var blob = (new Blob((new Array(stl)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text/plain"], null)));
var toolbar = re_db.d.get(new cljs.core.Keyword(null,"faber","faber",-1316193656),new cljs.core.Keyword(null,"stlbutton","stlbutton",-1508903376));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["update toolbar"], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(toolbar),cljs.core.assoc,new cljs.core.Keyword(null,"stl-blob","stl-blob",-17273097),blob);
} else {
return null;
}
});
faber.canvas3d.create_scene = (function faber$canvas3d$create_scene(mesh){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["create-scene mesh=",mesh], 0));

faber.canvas3d.new_scene();

var map__27958_28125 = cljs.core.deref(faber.canvas3d.context);
var map__27958_28126__$1 = (((((!((map__27958_28125 == null))))?(((((map__27958_28125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27958_28125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27958_28125):map__27958_28125);
var scene_28127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27958_28126__$1,new cljs.core.Keyword(null,"scene","scene",1523800415));
if(cljs.core.truth_(mesh)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["create scene",mesh], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(faber.canvas3d.context,cljs.core.assoc,new cljs.core.Keyword(null,"mesh","mesh",456320595),mesh);

faber.canvas3d.make_stl_blob();

scene_28127.add(mesh);
} else {
}

return faber.canvas3d.animate();
});
var the_class__27590__auto___28134 = re_view.core.class_STAR_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lifecycle-keys","lifecycle-keys",-1618460896),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("view","did-mount","view/did-mount",914520155),(function (this$,_){
var canvas = re_view.core.dom_node(this$);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["canvas3d did-mount. ",new cljs.core.Keyword("view","state","view/state",-1991815820).cljs$core$IFn$_invoke$arity$1(this$)], 0));

return faber.canvas3d.init_context(canvas);
}),new cljs.core.Keyword("view","did-update","view/did-update",-2147322383),(function (this$){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["did update:",new cljs.core.Keyword("view","props","view/props",449562012).cljs$core$IFn$_invoke$arity$1(this$)], 0));

return faber.canvas3d.create_scene(new cljs.core.Keyword(null,"3dmodel","3dmodel",135298134).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("view","props","view/props",449562012).cljs$core$IFn$_invoke$arity$1(this$)));
}),new cljs.core.Keyword("view","render","view/render",-1412767573),(function faber$canvas3d$canvas3d(){
return re_view.hiccup.core.element.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas#canvas3d.w-100.h-100","canvas#canvas3d.w-100.h-100",1834215452)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap-props","wrap-props",-983244308),re_view.core.wrap_props], null));
})], null),new cljs.core.Keyword(null,"react-keys","react-keys",-1618321002),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"docstring","docstring",879233117),null,new cljs.core.Keyword(null,"display-name","display-name",694513143),"canvas3d/canvas3d"], null),new cljs.core.Keyword(null,"instance-keys","instance-keys",1299417647),null], null));
faber.canvas3d.canvas3dClass = the_class__27590__auto___28134;

faber.canvas3d.canvas3d = re_view.core.factory(the_class__27590__auto___28134);

//# sourceMappingURL=faber.canvas3d.js.map
