goog.provide('com.stuartsierra.dependency');

/**
 * @interface
 */
com.stuartsierra.dependency.DependencyGraph = function(){};

var com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$dyn_43308 = (function (graph,node){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (com.stuartsierra.dependency.immediate_dependencies[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__4429__auto__.call(null,graph,node));
} else {
var m__4426__auto__ = (com.stuartsierra.dependency.immediate_dependencies["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__4426__auto__.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraph.immediate-dependencies",graph);
}
}
});
/**
 * Returns the set of immediate dependencies of node.
 */
com.stuartsierra.dependency.immediate_dependencies = (function com$stuartsierra$dependency$immediate_dependencies(graph,node){
if((((!((graph == null)))) && ((!((graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2 == null)))))){
return graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2(graph,node);
} else {
return com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$dyn_43308(graph,node);
}
});

var com$stuartsierra$dependency$DependencyGraph$immediate_dependents$dyn_43313 = (function (graph,node){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (com.stuartsierra.dependency.immediate_dependents[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__4429__auto__.call(null,graph,node));
} else {
var m__4426__auto__ = (com.stuartsierra.dependency.immediate_dependents["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__4426__auto__.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraph.immediate-dependents",graph);
}
}
});
/**
 * Returns the set of immediate dependents of node.
 */
com.stuartsierra.dependency.immediate_dependents = (function com$stuartsierra$dependency$immediate_dependents(graph,node){
if((((!((graph == null)))) && ((!((graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2 == null)))))){
return graph.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2(graph,node);
} else {
return com$stuartsierra$dependency$DependencyGraph$immediate_dependents$dyn_43313(graph,node);
}
});

var com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$dyn_43315 = (function (graph,node){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (com.stuartsierra.dependency.transitive_dependencies[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__4429__auto__.call(null,graph,node));
} else {
var m__4426__auto__ = (com.stuartsierra.dependency.transitive_dependencies["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__4426__auto__.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraph.transitive-dependencies",graph);
}
}
});
/**
 * Returns the set of all things which node depends on, directly or
 *  transitively.
 */
com.stuartsierra.dependency.transitive_dependencies = (function com$stuartsierra$dependency$transitive_dependencies(graph,node){
if((((!((graph == null)))) && ((!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2 == null)))))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2(graph,node);
} else {
return com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$dyn_43315(graph,node);
}
});

var com$stuartsierra$dependency$DependencyGraph$transitive_dependents$dyn_43324 = (function (graph,node){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (com.stuartsierra.dependency.transitive_dependents[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__4429__auto__.call(null,graph,node));
} else {
var m__4426__auto__ = (com.stuartsierra.dependency.transitive_dependents["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__4426__auto__.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraph.transitive-dependents",graph);
}
}
});
/**
 * Returns the set of all things which depend upon node, directly or
 *  transitively.
 */
com.stuartsierra.dependency.transitive_dependents = (function com$stuartsierra$dependency$transitive_dependents(graph,node){
if((((!((graph == null)))) && ((!((graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2 == null)))))){
return graph.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2(graph,node);
} else {
return com$stuartsierra$dependency$DependencyGraph$transitive_dependents$dyn_43324(graph,node);
}
});

var com$stuartsierra$dependency$DependencyGraph$nodes$dyn_43328 = (function (graph){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (com.stuartsierra.dependency.nodes[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(graph) : m__4429__auto__.call(null,graph));
} else {
var m__4426__auto__ = (com.stuartsierra.dependency.nodes["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(graph) : m__4426__auto__.call(null,graph));
} else {
throw cljs.core.missing_protocol("DependencyGraph.nodes",graph);
}
}
});
/**
 * Returns the set of all nodes in graph.
 */
com.stuartsierra.dependency.nodes = (function com$stuartsierra$dependency$nodes(graph){
if((((!((graph == null)))) && ((!((graph.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1 == null)))))){
return graph.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1(graph);
} else {
return com$stuartsierra$dependency$DependencyGraph$nodes$dyn_43328(graph);
}
});


/**
 * @interface
 */
com.stuartsierra.dependency.DependencyGraphUpdate = function(){};

var com$stuartsierra$dependency$DependencyGraphUpdate$depend$dyn_43333 = (function (graph,node,dep){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (com.stuartsierra.dependency.depend[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__4429__auto__.call(null,graph,node,dep));
} else {
var m__4426__auto__ = (com.stuartsierra.dependency.depend["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__4426__auto__.call(null,graph,node,dep));
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.depend",graph);
}
}
});
/**
 * Returns a new graph with a dependency from node to dep ("node depends
 *  on dep"). Forbids circular dependencies.
 */
com.stuartsierra.dependency.depend = (function com$stuartsierra$dependency$depend(graph,node,dep){
if((((!((graph == null)))) && ((!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3 == null)))))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3(graph,node,dep);
} else {
return com$stuartsierra$dependency$DependencyGraphUpdate$depend$dyn_43333(graph,node,dep);
}
});

var com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$dyn_43339 = (function (graph,node,dep){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (com.stuartsierra.dependency.remove_edge[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__4429__auto__.call(null,graph,node,dep));
} else {
var m__4426__auto__ = (com.stuartsierra.dependency.remove_edge["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(graph,node,dep) : m__4426__auto__.call(null,graph,node,dep));
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.remove-edge",graph);
}
}
});
/**
 * Returns a new graph with the dependency from node to dep removed.
 */
com.stuartsierra.dependency.remove_edge = (function com$stuartsierra$dependency$remove_edge(graph,node,dep){
if((((!((graph == null)))) && ((!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3 == null)))))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3(graph,node,dep);
} else {
return com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$dyn_43339(graph,node,dep);
}
});

var com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$dyn_43343 = (function (graph,node){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (com.stuartsierra.dependency.remove_all[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__4429__auto__.call(null,graph,node));
} else {
var m__4426__auto__ = (com.stuartsierra.dependency.remove_all["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__4426__auto__.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.remove-all",graph);
}
}
});
/**
 * Returns a new dependency graph with all references to node removed.
 */
com.stuartsierra.dependency.remove_all = (function com$stuartsierra$dependency$remove_all(graph,node){
if((((!((graph == null)))) && ((!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2 == null)))))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2(graph,node);
} else {
return com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$dyn_43343(graph,node);
}
});

var com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$dyn_43344 = (function (graph,node){
var x__4428__auto__ = (((graph == null))?null:graph);
var m__4429__auto__ = (com.stuartsierra.dependency.remove_node[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__4429__auto__.call(null,graph,node));
} else {
var m__4426__auto__ = (com.stuartsierra.dependency.remove_node["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(graph,node) : m__4426__auto__.call(null,graph,node));
} else {
throw cljs.core.missing_protocol("DependencyGraphUpdate.remove-node",graph);
}
}
});
/**
 * Removes the node from the dependency graph without removing it as a
 *  dependency of other nodes. That is, removes all outgoing edges from
 *  node.
 */
com.stuartsierra.dependency.remove_node = (function com$stuartsierra$dependency$remove_node(graph,node){
if((((!((graph == null)))) && ((!((graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2 == null)))))){
return graph.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2(graph,node);
} else {
return com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$dyn_43344(graph,node);
}
});

com.stuartsierra.dependency.remove_from_map = (function com$stuartsierra$dependency$remove_from_map(amap,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__43144){
var vec__43148 = p__43144;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43148,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43148,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(vs,x));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(amap,x));
});
/**
 * Recursively expands the set of dependency relationships starting
 *   at (get m x)
 */
com.stuartsierra.dependency.transitive = (function com$stuartsierra$dependency$transitive(m,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(s,(com.stuartsierra.dependency.transitive.cljs$core$IFn$_invoke$arity$2 ? com.stuartsierra.dependency.transitive.cljs$core$IFn$_invoke$arity$2(m,k) : com.stuartsierra.dependency.transitive.call(null,m,k)));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,x),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,x));
});
com.stuartsierra.dependency.set_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {com.stuartsierra.dependency.DependencyGraph}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {com.stuartsierra.dependency.DependencyGraphUpdate}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.stuartsierra.dependency.MapDependencyGraph = (function (dependencies,dependents,__meta,__extmap,__hash){
this.dependencies = dependencies;
this.dependents = dependents;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k43158,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__43183 = k43158;
var G__43183__$1 = (((G__43183 instanceof cljs.core.Keyword))?G__43183.fqn:null);
switch (G__43183__$1) {
case "dependencies":
return self__.dependencies;

break;
case "dependents":
return self__.dependents;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k43158,else__4383__auto__);

}
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__43184){
var vec__43185 = p__43184;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43185,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43185,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#com.stuartsierra.dependency.MapDependencyGraph{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),self__.dependencies],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dependents","dependents",136812837),self__.dependents],null))], null),self__.__extmap));
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__43157){
var self__ = this;
var G__43157__$1 = this;
return (new cljs.core.RecordIter((0),G__43157__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),new cljs.core.Keyword(null,"dependents","dependents",136812837)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,self__.__extmap,self__.__hash));
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1526449397 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this43159,other43160){
var self__ = this;
var this43159__$1 = this;
return (((!((other43160 == null)))) && ((this43159__$1.constructor === other43160.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43159__$1.dependencies,other43160.dependencies)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43159__$1.dependents,other43160.dependents)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this43159__$1.__extmap,other43160.__extmap)));
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dependents","dependents",136812837),null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__43157){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__43216 = cljs.core.keyword_identical_QMARK_;
var expr__43217 = k__4388__auto__;
if(cljs.core.truth_((pred__43216.cljs$core$IFn$_invoke$arity$2 ? pred__43216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),expr__43217) : pred__43216.call(null,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),expr__43217)))){
return (new com.stuartsierra.dependency.MapDependencyGraph(G__43157,self__.dependents,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__43216.cljs$core$IFn$_invoke$arity$2 ? pred__43216.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dependents","dependents",136812837),expr__43217) : pred__43216.call(null,new cljs.core.Keyword(null,"dependents","dependents",136812837),expr__43217)))){
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,G__43157,self__.__meta,self__.__extmap,null));
} else {
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__43157),null));
}
}
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),self__.dependencies,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"dependents","dependents",136812837),self__.dependents,null))], null),self__.__extmap));
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$ = cljs.core.PROTOCOL_SENTINEL);

(com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$immediate_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.dependencies,node,cljs.core.PersistentHashSet.EMPTY);
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$immediate_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.dependents,node,cljs.core.PersistentHashSet.EMPTY);
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependencies$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive(self__.dependencies,node);
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$transitive_dependents$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return com.stuartsierra.dependency.transitive(self__.dependents,node);
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraph$nodes$arity$1 = (function (graph){
var self__ = this;
var graph__$1 = this;
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(self__.dependencies)),cljs.core.set(cljs.core.keys(self__.dependents)));
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__43157){
var self__ = this;
var this__4379__auto____$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(self__.dependencies,self__.dependents,G__43157,self__.__extmap,self__.__hash));
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$ = cljs.core.PROTOCOL_SENTINEL);

(com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$depend$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node,dep);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return (com.stuartsierra.dependency.depends_QMARK_.cljs$core$IFn$_invoke$arity$3 ? com.stuartsierra.dependency.depends_QMARK_.cljs$core$IFn$_invoke$arity$3(graph__$1,dep,node) : com.stuartsierra.dependency.depends_QMARK_.call(null,graph__$1,dep,node));
}
})())){
throw (new Error(["Circular dependency between ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0))," and ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dep], 0))].join('')));
} else {
}

return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),com.stuartsierra.dependency.set_conj,dep),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),com.stuartsierra.dependency.set_conj,node),null,null,null));
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_edge$arity$3 = (function (graph,node,dep){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependencies,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.disj,dep),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(self__.dependents,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep], null),cljs.core.disj,node),null,null,null));
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_all$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(com.stuartsierra.dependency.remove_from_map(self__.dependencies,node),com.stuartsierra.dependency.remove_from_map(self__.dependents,node),null,null,null));
}));

(com.stuartsierra.dependency.MapDependencyGraph.prototype.com$stuartsierra$dependency$DependencyGraphUpdate$remove_node$arity$2 = (function (graph,node){
var self__ = this;
var graph__$1 = this;
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.dependencies,node),self__.dependents,null,null,null));
}));

(com.stuartsierra.dependency.MapDependencyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dependencies","dependencies",-1546371164,null),new cljs.core.Symbol(null,"dependents","dependents",1777344364,null)], null);
}));

(com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$type = true);

(com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"com.stuartsierra.dependency/MapDependencyGraph",null,(1),null));
}));

(com.stuartsierra.dependency.MapDependencyGraph.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"com.stuartsierra.dependency/MapDependencyGraph");
}));

/**
 * Positional factory function for com.stuartsierra.dependency/MapDependencyGraph.
 */
com.stuartsierra.dependency.__GT_MapDependencyGraph = (function com$stuartsierra$dependency$__GT_MapDependencyGraph(dependencies,dependents){
return (new com.stuartsierra.dependency.MapDependencyGraph(dependencies,dependents,null,null,null));
});

/**
 * Factory function for com.stuartsierra.dependency/MapDependencyGraph, taking a map of keywords to field values.
 */
com.stuartsierra.dependency.map__GT_MapDependencyGraph = (function com$stuartsierra$dependency$map__GT_MapDependencyGraph(G__43170){
var extmap__4419__auto__ = (function (){var G__43249 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__43170,new cljs.core.Keyword(null,"dependencies","dependencies",1108064605),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dependents","dependents",136812837)], 0));
if(cljs.core.record_QMARK_(G__43170)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__43249);
} else {
return G__43249;
}
})();
return (new com.stuartsierra.dependency.MapDependencyGraph(new cljs.core.Keyword(null,"dependencies","dependencies",1108064605).cljs$core$IFn$_invoke$arity$1(G__43170),new cljs.core.Keyword(null,"dependents","dependents",136812837).cljs$core$IFn$_invoke$arity$1(G__43170),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Returns a new, empty, dependency graph. A graph contains nodes,
 *   which may be any type which supports Clojure's equality semantics.
 *   Edges are represented as pairs of nodes. An edge between two nodes X
 *   and Y indicates that X depends on Y or, conversely, that Y is a
 *   dependent of X. A dependency graph may not have cycles.
 */
com.stuartsierra.dependency.graph = (function com$stuartsierra$dependency$graph(){
return (new com.stuartsierra.dependency.MapDependencyGraph(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null));
});
/**
 * True if x is directly or transitively dependent on y.
 */
com.stuartsierra.dependency.depends_QMARK_ = (function com$stuartsierra$dependency$depends_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_(com.stuartsierra.dependency.transitive_dependencies(graph,x),y);
});
/**
 * True if y is a direct or transitive dependent of x.
 */
com.stuartsierra.dependency.dependent_QMARK_ = (function com$stuartsierra$dependency$dependent_QMARK_(graph,x,y){
return cljs.core.contains_QMARK_(com.stuartsierra.dependency.transitive_dependents(graph,x),y);
});
/**
 * Returns a topologically-sorted list of nodes in graph.
 */
com.stuartsierra.dependency.topo_sort = (function com$stuartsierra$dependency$topo_sort(graph){
var sorted = cljs.core.List.EMPTY;
var g = graph;
var todo = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sorted,g){
return (function (p1__43265_SHARP_){
return cljs.core.empty_QMARK_(com.stuartsierra.dependency.immediate_dependents(graph,p1__43265_SHARP_));
});})(sorted,g))
,com.stuartsierra.dependency.nodes(graph)));
while(true){
if(cljs.core.empty_QMARK_(todo)){
return sorted;
} else {
var vec__43290 = cljs.core.seq(todo);
var seq__43292 = cljs.core.seq(vec__43290);
var first__43293 = cljs.core.first(seq__43292);
var seq__43292__$1 = cljs.core.next(seq__43292);
var node = first__43293;
var more = seq__43292__$1;
var deps = com.stuartsierra.dependency.immediate_dependencies(g,node);
var vec__43294 = (function (){var deps__$1 = deps;
var g__$1 = g;
var add = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(deps__$1)){
var d = cljs.core.first(deps__$1);
var g_SINGLEQUOTE_ = com.stuartsierra.dependency.remove_edge(g__$1,node,d);
if(cljs.core.empty_QMARK_(com.stuartsierra.dependency.immediate_dependents(g_SINGLEQUOTE_,d))){
var G__43415 = cljs.core.rest(deps__$1);
var G__43416 = g_SINGLEQUOTE_;
var G__43417 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(add,d);
deps__$1 = G__43415;
g__$1 = G__43416;
add = G__43417;
continue;
} else {
var G__43418 = cljs.core.rest(deps__$1);
var G__43419 = g_SINGLEQUOTE_;
var G__43420 = add;
deps__$1 = G__43418;
g__$1 = G__43419;
add = G__43420;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [add,g__$1], null);
}
break;
}
})();
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43294,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43294,(1),null);
var G__43422 = cljs.core.cons(node,sorted);
var G__43423 = com.stuartsierra.dependency.remove_node(g_SINGLEQUOTE_,node);
var G__43424 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(more),cljs.core.set(add));
sorted = G__43422;
g = G__43423;
todo = G__43424;
continue;
}
break;
}
});
/**
 * Returns a comparator fn which produces a topological sort based on
 *   the dependencies in graph. Nodes not present in the graph will sort
 *   after nodes in the graph.
 */
com.stuartsierra.dependency.topo_comparator = (function com$stuartsierra$dependency$topo_comparator(graph){
var pos = cljs.core.zipmap(com.stuartsierra.dependency.topo_sort(graph),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
return (function (a,b){
return cljs.core.compare(cljs.core.get.cljs$core$IFn$_invoke$arity$3(pos,a,Number.MAX_VALUE),cljs.core.get.cljs$core$IFn$_invoke$arity$3(pos,b,Number.MAX_VALUE));
});
});

//# sourceMappingURL=com.stuartsierra.dependency.js.map
