goog.provide('thi.ng.geom.core');
thi.ng.geom.core._STAR_resolution_STAR_ = (20);

/**
 * @interface
 */
thi.ng.geom.core.PMathOps = function(){};

var thi$ng$geom$core$PMathOps$_PLUS_$dyn_45702 = (function() {
var G__45703 = null;
var G__45703__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._PLUS_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core._PLUS_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMathOps.+",_);
}
}
});
var G__45703__2 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._PLUS_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core._PLUS_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PMathOps.+",_);
}
}
});
var G__45703__3 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._PLUS_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core._PLUS_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMathOps.+",_);
}
}
});
var G__45703__4 = (function (_,a,b,c){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._PLUS_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4429__auto__.call(null,_,a,b,c));
} else {
var m__4426__auto__ = (thi.ng.geom.core._PLUS_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4426__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("PMathOps.+",_);
}
}
});
G__45703 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__45703__1.call(this,_);
case 2:
return G__45703__2.call(this,_,a);
case 3:
return G__45703__3.call(this,_,a,b);
case 4:
return G__45703__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45703.cljs$core$IFn$_invoke$arity$1 = G__45703__1;
G__45703.cljs$core$IFn$_invoke$arity$2 = G__45703__2;
G__45703.cljs$core$IFn$_invoke$arity$3 = G__45703__3;
G__45703.cljs$core$IFn$_invoke$arity$4 = G__45703__4;
return G__45703;
})()
;
thi.ng.geom.core._PLUS_ = (function thi$ng$geom$core$_PLUS_(var_args){
var G__44986 = arguments.length;
switch (G__44986) {
case 1:
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$_PLUS_$arity$1 == null)))))){
return _.thi$ng$geom$core$PMathOps$_PLUS_$arity$1(_);
} else {
return thi$ng$geom$core$PMathOps$_PLUS_$dyn_45702(_);
}
}));

(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$_PLUS_$arity$2 == null)))))){
return _.thi$ng$geom$core$PMathOps$_PLUS_$arity$2(_,a);
} else {
return thi$ng$geom$core$PMathOps$_PLUS_$dyn_45702(_,a);
}
}));

(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$_PLUS_$arity$3 == null)))))){
return _.thi$ng$geom$core$PMathOps$_PLUS_$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMathOps$_PLUS_$dyn_45702(_,a,b);
}
}));

(thi.ng.geom.core._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$_PLUS_$arity$4 == null)))))){
return _.thi$ng$geom$core$PMathOps$_PLUS_$arity$4(_,a,b,c);
} else {
return thi$ng$geom$core$PMathOps$_PLUS_$dyn_45702(_,a,b,c);
}
}));

(thi.ng.geom.core._PLUS_.cljs$lang$maxFixedArity = 4);


var thi$ng$geom$core$PMathOps$_$dyn_45723 = (function() {
var G__45724 = null;
var G__45724__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core._["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMathOps.-",_);
}
}
});
var G__45724__2 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core._["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PMathOps.-",_);
}
}
});
var G__45724__3 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core._["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMathOps.-",_);
}
}
});
var G__45724__4 = (function (_,a,b,c){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4429__auto__.call(null,_,a,b,c));
} else {
var m__4426__auto__ = (thi.ng.geom.core._["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4426__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("PMathOps.-",_);
}
}
});
G__45724 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__45724__1.call(this,_);
case 2:
return G__45724__2.call(this,_,a);
case 3:
return G__45724__3.call(this,_,a,b);
case 4:
return G__45724__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45724.cljs$core$IFn$_invoke$arity$1 = G__45724__1;
G__45724.cljs$core$IFn$_invoke$arity$2 = G__45724__2;
G__45724.cljs$core$IFn$_invoke$arity$3 = G__45724__3;
G__45724.cljs$core$IFn$_invoke$arity$4 = G__45724__4;
return G__45724;
})()
;
thi.ng.geom.core._ = (function thi$ng$geom$core$_(var_args){
var G__45030 = arguments.length;
switch (G__45030) {
case 1:
return thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$_$arity$1 == null)))))){
return _.thi$ng$geom$core$PMathOps$_$arity$1(_);
} else {
return thi$ng$geom$core$PMathOps$_$dyn_45723(_);
}
}));

(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$_$arity$2 == null)))))){
return _.thi$ng$geom$core$PMathOps$_$arity$2(_,a);
} else {
return thi$ng$geom$core$PMathOps$_$dyn_45723(_,a);
}
}));

(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$_$arity$3 == null)))))){
return _.thi$ng$geom$core$PMathOps$_$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMathOps$_$dyn_45723(_,a,b);
}
}));

(thi.ng.geom.core._.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$_$arity$4 == null)))))){
return _.thi$ng$geom$core$PMathOps$_$arity$4(_,a,b,c);
} else {
return thi$ng$geom$core$PMathOps$_$dyn_45723(_,a,b,c);
}
}));

(thi.ng.geom.core._.cljs$lang$maxFixedArity = 4);


var thi$ng$geom$core$PMathOps$_STAR_$dyn_45744 = (function() {
var G__45745 = null;
var G__45745__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core._STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMathOps.*",_);
}
}
});
var G__45745__2 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core._STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PMathOps.*",_);
}
}
});
var G__45745__3 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core._STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMathOps.*",_);
}
}
});
var G__45745__4 = (function (_,a,b,c){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4429__auto__.call(null,_,a,b,c));
} else {
var m__4426__auto__ = (thi.ng.geom.core._STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4426__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("PMathOps.*",_);
}
}
});
G__45745 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__45745__1.call(this,_);
case 2:
return G__45745__2.call(this,_,a);
case 3:
return G__45745__3.call(this,_,a,b);
case 4:
return G__45745__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45745.cljs$core$IFn$_invoke$arity$1 = G__45745__1;
G__45745.cljs$core$IFn$_invoke$arity$2 = G__45745__2;
G__45745.cljs$core$IFn$_invoke$arity$3 = G__45745__3;
G__45745.cljs$core$IFn$_invoke$arity$4 = G__45745__4;
return G__45745;
})()
;
thi.ng.geom.core._STAR_ = (function thi$ng$geom$core$_STAR_(var_args){
var G__45042 = arguments.length;
switch (G__45042) {
case 1:
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$_STAR_$arity$1 == null)))))){
return _.thi$ng$geom$core$PMathOps$_STAR_$arity$1(_);
} else {
return thi$ng$geom$core$PMathOps$_STAR_$dyn_45744(_);
}
}));

(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$_STAR_$arity$2 == null)))))){
return _.thi$ng$geom$core$PMathOps$_STAR_$arity$2(_,a);
} else {
return thi$ng$geom$core$PMathOps$_STAR_$dyn_45744(_,a);
}
}));

(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$_STAR_$arity$3 == null)))))){
return _.thi$ng$geom$core$PMathOps$_STAR_$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMathOps$_STAR_$dyn_45744(_,a,b);
}
}));

(thi.ng.geom.core._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$_STAR_$arity$4 == null)))))){
return _.thi$ng$geom$core$PMathOps$_STAR_$arity$4(_,a,b,c);
} else {
return thi$ng$geom$core$PMathOps$_STAR_$dyn_45744(_,a,b,c);
}
}));

(thi.ng.geom.core._STAR_.cljs$lang$maxFixedArity = 4);


var thi$ng$geom$core$PMathOps$div$dyn_45773 = (function() {
var G__45774 = null;
var G__45774__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.div[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.div["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMathOps.div",_);
}
}
});
var G__45774__2 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.div[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core.div["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PMathOps.div",_);
}
}
});
var G__45774__3 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.div[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.div["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMathOps.div",_);
}
}
});
var G__45774__4 = (function (_,a,b,c){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.div[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4429__auto__.call(null,_,a,b,c));
} else {
var m__4426__auto__ = (thi.ng.geom.core.div["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4426__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("PMathOps.div",_);
}
}
});
G__45774 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__45774__1.call(this,_);
case 2:
return G__45774__2.call(this,_,a);
case 3:
return G__45774__3.call(this,_,a,b);
case 4:
return G__45774__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45774.cljs$core$IFn$_invoke$arity$1 = G__45774__1;
G__45774.cljs$core$IFn$_invoke$arity$2 = G__45774__2;
G__45774.cljs$core$IFn$_invoke$arity$3 = G__45774__3;
G__45774.cljs$core$IFn$_invoke$arity$4 = G__45774__4;
return G__45774;
})()
;
thi.ng.geom.core.div = (function thi$ng$geom$core$div(var_args){
var G__45088 = arguments.length;
switch (G__45088) {
case 1:
return thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$div$arity$1 == null)))))){
return _.thi$ng$geom$core$PMathOps$div$arity$1(_);
} else {
return thi$ng$geom$core$PMathOps$div$dyn_45773(_);
}
}));

(thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$div$arity$2 == null)))))){
return _.thi$ng$geom$core$PMathOps$div$arity$2(_,a);
} else {
return thi$ng$geom$core$PMathOps$div$dyn_45773(_,a);
}
}));

(thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$div$arity$3 == null)))))){
return _.thi$ng$geom$core$PMathOps$div$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMathOps$div$dyn_45773(_,a,b);
}
}));

(thi.ng.geom.core.div.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$div$arity$4 == null)))))){
return _.thi$ng$geom$core$PMathOps$div$arity$4(_,a,b,c);
} else {
return thi$ng$geom$core$PMathOps$div$dyn_45773(_,a,b,c);
}
}));

(thi.ng.geom.core.div.cljs$lang$maxFixedArity = 4);


var thi$ng$geom$core$PMathOps$madd$dyn_45812 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.madd[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.madd["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMathOps.madd",_);
}
}
});
thi.ng.geom.core.madd = (function thi$ng$geom$core$madd(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$madd$arity$3 == null)))))){
return _.thi$ng$geom$core$PMathOps$madd$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMathOps$madd$dyn_45812(_,a,b);
}
});

var thi$ng$geom$core$PMathOps$addm$dyn_45820 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.addm[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.addm["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMathOps.addm",_);
}
}
});
thi.ng.geom.core.addm = (function thi$ng$geom$core$addm(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$addm$arity$3 == null)))))){
return _.thi$ng$geom$core$PMathOps$addm$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMathOps$addm$dyn_45820(_,a,b);
}
});

var thi$ng$geom$core$PMathOps$msub$dyn_45825 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.msub[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.msub["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMathOps.msub",_);
}
}
});
thi.ng.geom.core.msub = (function thi$ng$geom$core$msub(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$msub$arity$3 == null)))))){
return _.thi$ng$geom$core$PMathOps$msub$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMathOps$msub$dyn_45825(_,a,b);
}
});

var thi$ng$geom$core$PMathOps$subm$dyn_45839 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.subm[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.subm["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMathOps.subm",_);
}
}
});
thi.ng.geom.core.subm = (function thi$ng$geom$core$subm(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$subm$arity$3 == null)))))){
return _.thi$ng$geom$core$PMathOps$subm$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMathOps$subm$dyn_45839(_,a,b);
}
});

var thi$ng$geom$core$PMathOps$abs$dyn_45845 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.abs[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.abs["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMathOps.abs",_);
}
}
});
thi.ng.geom.core.abs = (function thi$ng$geom$core$abs(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMathOps$abs$arity$1 == null)))))){
return _.thi$ng$geom$core$PMathOps$abs$arity$1(_);
} else {
return thi$ng$geom$core$PMathOps$abs$dyn_45845(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PMutableMathOps = function(){};

var thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$dyn_45847 = (function() {
var G__45848 = null;
var G__45848__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._PLUS__BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core._PLUS__BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.+!",_);
}
}
});
var G__45848__2 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._PLUS__BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core._PLUS__BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.+!",_);
}
}
});
var G__45848__3 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._PLUS__BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core._PLUS__BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.+!",_);
}
}
});
var G__45848__4 = (function (_,a,b,c){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._PLUS__BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4429__auto__.call(null,_,a,b,c));
} else {
var m__4426__auto__ = (thi.ng.geom.core._PLUS__BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4426__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.+!",_);
}
}
});
G__45848 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__45848__1.call(this,_);
case 2:
return G__45848__2.call(this,_,a);
case 3:
return G__45848__3.call(this,_,a,b);
case 4:
return G__45848__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45848.cljs$core$IFn$_invoke$arity$1 = G__45848__1;
G__45848.cljs$core$IFn$_invoke$arity$2 = G__45848__2;
G__45848.cljs$core$IFn$_invoke$arity$3 = G__45848__3;
G__45848.cljs$core$IFn$_invoke$arity$4 = G__45848__4;
return G__45848;
})()
;
thi.ng.geom.core._PLUS__BANG_ = (function thi$ng$geom$core$_PLUS__BANG_(var_args){
var G__45182 = arguments.length;
switch (G__45182) {
case 1:
return thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$1(_);
} else {
return thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$dyn_45847(_);
}
}));

(thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$2(_,a);
} else {
return thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$dyn_45847(_,a);
}
}));

(thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$dyn_45847(_,a,b);
}
}));

(thi.ng.geom.core._PLUS__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$4 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$geom$core$PMutableMathOps$_PLUS__BANG_$dyn_45847(_,a,b,c);
}
}));

(thi.ng.geom.core._PLUS__BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$geom$core$PMutableMathOps$__BANG_$dyn_45866 = (function() {
var G__45867 = null;
var G__45867__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.__BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.__BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.-!",_);
}
}
});
var G__45867__2 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.__BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core.__BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.-!",_);
}
}
});
var G__45867__3 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.__BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.__BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.-!",_);
}
}
});
var G__45867__4 = (function (_,a,b,c){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.__BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4429__auto__.call(null,_,a,b,c));
} else {
var m__4426__auto__ = (thi.ng.geom.core.__BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4426__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.-!",_);
}
}
});
G__45867 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__45867__1.call(this,_);
case 2:
return G__45867__2.call(this,_,a);
case 3:
return G__45867__3.call(this,_,a,b);
case 4:
return G__45867__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45867.cljs$core$IFn$_invoke$arity$1 = G__45867__1;
G__45867.cljs$core$IFn$_invoke$arity$2 = G__45867__2;
G__45867.cljs$core$IFn$_invoke$arity$3 = G__45867__3;
G__45867.cljs$core$IFn$_invoke$arity$4 = G__45867__4;
return G__45867;
})()
;
thi.ng.geom.core.__BANG_ = (function thi$ng$geom$core$__BANG_(var_args){
var G__45196 = arguments.length;
switch (G__45196) {
case 1:
return thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$1(_);
} else {
return thi$ng$geom$core$PMutableMathOps$__BANG_$dyn_45866(_);
}
}));

(thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$2(_,a);
} else {
return thi$ng$geom$core$PMutableMathOps$__BANG_$dyn_45866(_,a);
}
}));

(thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMutableMathOps$__BANG_$dyn_45866(_,a,b);
}
}));

(thi.ng.geom.core.__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$4 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$__BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$geom$core$PMutableMathOps$__BANG_$dyn_45866(_,a,b,c);
}
}));

(thi.ng.geom.core.__BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$dyn_45901 = (function() {
var G__45902 = null;
var G__45902__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._STAR__BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core._STAR__BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.*!",_);
}
}
});
var G__45902__2 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._STAR__BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core._STAR__BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.*!",_);
}
}
});
var G__45902__3 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._STAR__BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core._STAR__BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.*!",_);
}
}
});
var G__45902__4 = (function (_,a,b,c){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core._STAR__BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4429__auto__.call(null,_,a,b,c));
} else {
var m__4426__auto__ = (thi.ng.geom.core._STAR__BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4426__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.*!",_);
}
}
});
G__45902 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__45902__1.call(this,_);
case 2:
return G__45902__2.call(this,_,a);
case 3:
return G__45902__3.call(this,_,a,b);
case 4:
return G__45902__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45902.cljs$core$IFn$_invoke$arity$1 = G__45902__1;
G__45902.cljs$core$IFn$_invoke$arity$2 = G__45902__2;
G__45902.cljs$core$IFn$_invoke$arity$3 = G__45902__3;
G__45902.cljs$core$IFn$_invoke$arity$4 = G__45902__4;
return G__45902;
})()
;
thi.ng.geom.core._STAR__BANG_ = (function thi$ng$geom$core$_STAR__BANG_(var_args){
var G__45218 = arguments.length;
switch (G__45218) {
case 1:
return thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$1(_);
} else {
return thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$dyn_45901(_);
}
}));

(thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$2(_,a);
} else {
return thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$dyn_45901(_,a);
}
}));

(thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$dyn_45901(_,a,b);
}
}));

(thi.ng.geom.core._STAR__BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$4 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$geom$core$PMutableMathOps$_STAR__BANG_$dyn_45901(_,a,b,c);
}
}));

(thi.ng.geom.core._STAR__BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$geom$core$PMutableMathOps$div_BANG_$dyn_45914 = (function() {
var G__45915 = null;
var G__45915__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.div_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.div_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.div!",_);
}
}
});
var G__45915__2 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.div_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core.div_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.div!",_);
}
}
});
var G__45915__3 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.div_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.div_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.div!",_);
}
}
});
var G__45915__4 = (function (_,a,b,c){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.div_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4429__auto__.call(null,_,a,b,c));
} else {
var m__4426__auto__ = (thi.ng.geom.core.div_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4426__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.div!",_);
}
}
});
G__45915 = function(_,a,b,c){
switch(arguments.length){
case 1:
return G__45915__1.call(this,_);
case 2:
return G__45915__2.call(this,_,a);
case 3:
return G__45915__3.call(this,_,a,b);
case 4:
return G__45915__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45915.cljs$core$IFn$_invoke$arity$1 = G__45915__1;
G__45915.cljs$core$IFn$_invoke$arity$2 = G__45915__2;
G__45915.cljs$core$IFn$_invoke$arity$3 = G__45915__3;
G__45915.cljs$core$IFn$_invoke$arity$4 = G__45915__4;
return G__45915;
})()
;
thi.ng.geom.core.div_BANG_ = (function thi$ng$geom$core$div_BANG_(var_args){
var G__45236 = arguments.length;
switch (G__45236) {
case 1:
return thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$1(_);
} else {
return thi$ng$geom$core$PMutableMathOps$div_BANG_$dyn_45914(_);
}
}));

(thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$2(_,a);
} else {
return thi$ng$geom$core$PMutableMathOps$div_BANG_$dyn_45914(_,a);
}
}));

(thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMutableMathOps$div_BANG_$dyn_45914(_,a,b);
}
}));

(thi.ng.geom.core.div_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$4 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$div_BANG_$arity$4(_,a,b,c);
} else {
return thi$ng$geom$core$PMutableMathOps$div_BANG_$dyn_45914(_,a,b,c);
}
}));

(thi.ng.geom.core.div_BANG_.cljs$lang$maxFixedArity = 4);


var thi$ng$geom$core$PMutableMathOps$madd_BANG_$dyn_45936 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.madd_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.madd_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.madd!",_);
}
}
});
thi.ng.geom.core.madd_BANG_ = (function thi$ng$geom$core$madd_BANG_(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$madd_BANG_$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMutableMathOps$madd_BANG_$dyn_45936(_,a,b);
}
});

var thi$ng$geom$core$PMutableMathOps$addm_BANG_$dyn_45938 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.addm_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.addm_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.addm!",_);
}
}
});
thi.ng.geom.core.addm_BANG_ = (function thi$ng$geom$core$addm_BANG_(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$addm_BANG_$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMutableMathOps$addm_BANG_$dyn_45938(_,a,b);
}
});

var thi$ng$geom$core$PMutableMathOps$msub_BANG_$dyn_45940 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.msub_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.msub_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.msub!",_);
}
}
});
thi.ng.geom.core.msub_BANG_ = (function thi$ng$geom$core$msub_BANG_(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$msub_BANG_$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMutableMathOps$msub_BANG_$dyn_45940(_,a,b);
}
});

var thi$ng$geom$core$PMutableMathOps$subm_BANG_$dyn_45946 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.subm_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.subm_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.subm!",_);
}
}
});
thi.ng.geom.core.subm_BANG_ = (function thi$ng$geom$core$subm_BANG_(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$subm_BANG_$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMutableMathOps$subm_BANG_$dyn_45946(_,a,b);
}
});

var thi$ng$geom$core$PMutableMathOps$abs_BANG_$dyn_45949 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.abs_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.abs_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMutableMathOps.abs!",_);
}
}
});
thi.ng.geom.core.abs_BANG_ = (function thi$ng$geom$core$abs_BANG_(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1 == null)))))){
return _.thi$ng$geom$core$PMutableMathOps$abs_BANG_$arity$1(_);
} else {
return thi$ng$geom$core$PMutableMathOps$abs_BANG_$dyn_45949(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PConjugate = function(){};

var thi$ng$geom$core$PConjugate$conjugate$dyn_45951 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.conjugate[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.conjugate["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PConjugate.conjugate",_);
}
}
});
thi.ng.geom.core.conjugate = (function thi$ng$geom$core$conjugate(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PConjugate$conjugate$arity$1 == null)))))){
return _.thi$ng$geom$core$PConjugate$conjugate$arity$1(_);
} else {
return thi$ng$geom$core$PConjugate$conjugate$dyn_45951(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PCrossProduct = function(){};

var thi$ng$geom$core$PCrossProduct$cross$dyn_45953 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.cross[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core.cross["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PCrossProduct.cross",_);
}
}
});
thi.ng.geom.core.cross = (function thi$ng$geom$core$cross(_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PCrossProduct$cross$arity$2 == null)))))){
return _.thi$ng$geom$core$PCrossProduct$cross$arity$2(_,a);
} else {
return thi$ng$geom$core$PCrossProduct$cross$dyn_45953(_,a);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PDeterminant = function(){};

var thi$ng$geom$core$PDeterminant$determinant$dyn_45957 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.determinant[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.determinant["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PDeterminant.determinant",_);
}
}
});
thi.ng.geom.core.determinant = (function thi$ng$geom$core$determinant(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PDeterminant$determinant$arity$1 == null)))))){
return _.thi$ng$geom$core$PDeterminant$determinant$arity$1(_);
} else {
return thi$ng$geom$core$PDeterminant$determinant$dyn_45957(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PDistance = function(){};

var thi$ng$geom$core$PDistance$dist$dyn_45962 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.dist[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core.dist["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PDistance.dist",_);
}
}
});
thi.ng.geom.core.dist = (function thi$ng$geom$core$dist(_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PDistance$dist$arity$2 == null)))))){
return _.thi$ng$geom$core$PDistance$dist$arity$2(_,a);
} else {
return thi$ng$geom$core$PDistance$dist$dyn_45962(_,a);
}
});

var thi$ng$geom$core$PDistance$dist_squared$dyn_45966 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.dist_squared[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core.dist_squared["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PDistance.dist-squared",_);
}
}
});
thi.ng.geom.core.dist_squared = (function thi$ng$geom$core$dist_squared(_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PDistance$dist_squared$arity$2 == null)))))){
return _.thi$ng$geom$core$PDistance$dist_squared$arity$2(_,a);
} else {
return thi$ng$geom$core$PDistance$dist_squared$dyn_45966(_,a);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PDotProduct = function(){};

var thi$ng$geom$core$PDotProduct$dot$dyn_45970 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.dot[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core.dot["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PDotProduct.dot",_);
}
}
});
thi.ng.geom.core.dot = (function thi$ng$geom$core$dot(_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PDotProduct$dot$arity$2 == null)))))){
return _.thi$ng$geom$core$PDotProduct$dot$arity$2(_,a);
} else {
return thi$ng$geom$core$PDotProduct$dot$dyn_45970(_,a);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PHeading = function(){};

var thi$ng$geom$core$PHeading$heading$dyn_45971 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.heading[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.heading["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PHeading.heading",_);
}
}
});
thi.ng.geom.core.heading = (function thi$ng$geom$core$heading(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PHeading$heading$arity$1 == null)))))){
return _.thi$ng$geom$core$PHeading$heading$arity$1(_);
} else {
return thi$ng$geom$core$PHeading$heading$dyn_45971(_);
}
});

var thi$ng$geom$core$PHeading$heading_xy$dyn_45975 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.heading_xy[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.heading_xy["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PHeading.heading-xy",_);
}
}
});
thi.ng.geom.core.heading_xy = (function thi$ng$geom$core$heading_xy(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PHeading$heading_xy$arity$1 == null)))))){
return _.thi$ng$geom$core$PHeading$heading_xy$arity$1(_);
} else {
return thi$ng$geom$core$PHeading$heading_xy$dyn_45975(_);
}
});

var thi$ng$geom$core$PHeading$heading_xz$dyn_45977 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.heading_xz[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.heading_xz["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PHeading.heading-xz",_);
}
}
});
thi.ng.geom.core.heading_xz = (function thi$ng$geom$core$heading_xz(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PHeading$heading_xz$arity$1 == null)))))){
return _.thi$ng$geom$core$PHeading$heading_xz$arity$1(_);
} else {
return thi$ng$geom$core$PHeading$heading_xz$dyn_45977(_);
}
});

var thi$ng$geom$core$PHeading$heading_yz$dyn_45981 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.heading_yz[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.heading_yz["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PHeading.heading-yz",_);
}
}
});
thi.ng.geom.core.heading_yz = (function thi$ng$geom$core$heading_yz(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PHeading$heading_yz$arity$1 == null)))))){
return _.thi$ng$geom$core$PHeading$heading_yz$arity$1(_);
} else {
return thi$ng$geom$core$PHeading$heading_yz$dyn_45981(_);
}
});

var thi$ng$geom$core$PHeading$angle_between$dyn_45983 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.angle_between[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core.angle_between["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PHeading.angle-between",_);
}
}
});
thi.ng.geom.core.angle_between = (function thi$ng$geom$core$angle_between(_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PHeading$angle_between$arity$2 == null)))))){
return _.thi$ng$geom$core$PHeading$angle_between$arity$2(_,a);
} else {
return thi$ng$geom$core$PHeading$angle_between$dyn_45983(_,a);
}
});

var thi$ng$geom$core$PHeading$slope_xy$dyn_45988 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.slope_xy[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.slope_xy["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PHeading.slope-xy",_);
}
}
});
thi.ng.geom.core.slope_xy = (function thi$ng$geom$core$slope_xy(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PHeading$slope_xy$arity$1 == null)))))){
return _.thi$ng$geom$core$PHeading$slope_xy$arity$1(_);
} else {
return thi$ng$geom$core$PHeading$slope_xy$dyn_45988(_);
}
});

var thi$ng$geom$core$PHeading$slope_xz$dyn_45993 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.slope_xz[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.slope_xz["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PHeading.slope-xz",_);
}
}
});
thi.ng.geom.core.slope_xz = (function thi$ng$geom$core$slope_xz(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PHeading$slope_xz$arity$1 == null)))))){
return _.thi$ng$geom$core$PHeading$slope_xz$arity$1(_);
} else {
return thi$ng$geom$core$PHeading$slope_xz$dyn_45993(_);
}
});

var thi$ng$geom$core$PHeading$slope_yz$dyn_45998 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.slope_yz[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.slope_yz["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PHeading.slope-yz",_);
}
}
});
thi.ng.geom.core.slope_yz = (function thi$ng$geom$core$slope_yz(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PHeading$slope_yz$arity$1 == null)))))){
return _.thi$ng$geom$core$PHeading$slope_yz$arity$1(_);
} else {
return thi$ng$geom$core$PHeading$slope_yz$dyn_45998(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PInterpolate = function(){};

var thi$ng$geom$core$PInterpolate$mix$dyn_46000 = (function() {
var G__46001 = null;
var G__46001__2 = (function (_,x){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.mix[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4429__auto__.call(null,_,x));
} else {
var m__4426__auto__ = (thi.ng.geom.core.mix["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4426__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("PInterpolate.mix",_);
}
}
});
var G__46001__3 = (function (_,x,t){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.mix[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,x,t) : m__4429__auto__.call(null,_,x,t));
} else {
var m__4426__auto__ = (thi.ng.geom.core.mix["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,x,t) : m__4426__auto__.call(null,_,x,t));
} else {
throw cljs.core.missing_protocol("PInterpolate.mix",_);
}
}
});
var G__46001__6 = (function (_,a,b,c,u,v){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.mix[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$6 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$6(_,a,b,c,u,v) : m__4429__auto__.call(null,_,a,b,c,u,v));
} else {
var m__4426__auto__ = (thi.ng.geom.core.mix["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$6 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$6(_,a,b,c,u,v) : m__4426__auto__.call(null,_,a,b,c,u,v));
} else {
throw cljs.core.missing_protocol("PInterpolate.mix",_);
}
}
});
G__46001 = function(_,a,b,c,u,v){
switch(arguments.length){
case 2:
return G__46001__2.call(this,_,a);
case 3:
return G__46001__3.call(this,_,a,b);
case 6:
return G__46001__6.call(this,_,a,b,c,u,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46001.cljs$core$IFn$_invoke$arity$2 = G__46001__2;
G__46001.cljs$core$IFn$_invoke$arity$3 = G__46001__3;
G__46001.cljs$core$IFn$_invoke$arity$6 = G__46001__6;
return G__46001;
})()
;
thi.ng.geom.core.mix = (function thi$ng$geom$core$mix(var_args){
var G__45306 = arguments.length;
switch (G__45306) {
case 2:
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PInterpolate$mix$arity$2 == null)))))){
return _.thi$ng$geom$core$PInterpolate$mix$arity$2(_,x);
} else {
return thi$ng$geom$core$PInterpolate$mix$dyn_46000(_,x);
}
}));

(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$3 = (function (_,x,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PInterpolate$mix$arity$3 == null)))))){
return _.thi$ng$geom$core$PInterpolate$mix$arity$3(_,x,t);
} else {
return thi$ng$geom$core$PInterpolate$mix$dyn_46000(_,x,t);
}
}));

(thi.ng.geom.core.mix.cljs$core$IFn$_invoke$arity$6 = (function (_,a,b,c,u,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PInterpolate$mix$arity$6 == null)))))){
return _.thi$ng$geom$core$PInterpolate$mix$arity$6(_,a,b,c,u,v);
} else {
return thi$ng$geom$core$PInterpolate$mix$dyn_46000(_,a,b,c,u,v);
}
}));

(thi.ng.geom.core.mix.cljs$lang$maxFixedArity = 6);



/**
 * @interface
 */
thi.ng.geom.core.PInvert = function(){};

var thi$ng$geom$core$PInvert$invert$dyn_46012 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.invert[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.invert["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PInvert.invert",_);
}
}
});
thi.ng.geom.core.invert = (function thi$ng$geom$core$invert(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PInvert$invert$arity$1 == null)))))){
return _.thi$ng$geom$core$PInvert$invert$arity$1(_);
} else {
return thi$ng$geom$core$PInvert$invert$dyn_46012(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PLimit = function(){};

var thi$ng$geom$core$PLimit$limit$dyn_46016 = (function (_,x){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.limit[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4429__auto__.call(null,_,x));
} else {
var m__4426__auto__ = (thi.ng.geom.core.limit["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4426__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("PLimit.limit",_);
}
}
});
thi.ng.geom.core.limit = (function thi$ng$geom$core$limit(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PLimit$limit$arity$2 == null)))))){
return _.thi$ng$geom$core$PLimit$limit$arity$2(_,x);
} else {
return thi$ng$geom$core$PLimit$limit$dyn_46016(_,x);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PMagnitude = function(){};

var thi$ng$geom$core$PMagnitude$mag$dyn_46019 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.mag[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.mag["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMagnitude.mag",_);
}
}
});
thi.ng.geom.core.mag = (function thi$ng$geom$core$mag(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMagnitude$mag$arity$1 == null)))))){
return _.thi$ng$geom$core$PMagnitude$mag$arity$1(_);
} else {
return thi$ng$geom$core$PMagnitude$mag$dyn_46019(_);
}
});

var thi$ng$geom$core$PMagnitude$mag_squared$dyn_46024 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.mag_squared[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.mag_squared["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMagnitude.mag-squared",_);
}
}
});
thi.ng.geom.core.mag_squared = (function thi$ng$geom$core$mag_squared(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMagnitude$mag_squared$arity$1 == null)))))){
return _.thi$ng$geom$core$PMagnitude$mag_squared$arity$1(_);
} else {
return thi$ng$geom$core$PMagnitude$mag_squared$dyn_46024(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PMatrixConvert = function(){};

var thi$ng$geom$core$PMatrixConvert$as_matrix$dyn_46028 = (function() {
var G__46029 = null;
var G__46029__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.as_matrix[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.as_matrix["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMatrixConvert.as-matrix",_);
}
}
});
var G__46029__2 = (function (_,opts){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.as_matrix[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4429__auto__.call(null,_,opts));
} else {
var m__4426__auto__ = (thi.ng.geom.core.as_matrix["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4426__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("PMatrixConvert.as-matrix",_);
}
}
});
G__46029 = function(_,opts){
switch(arguments.length){
case 1:
return G__46029__1.call(this,_);
case 2:
return G__46029__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46029.cljs$core$IFn$_invoke$arity$1 = G__46029__1;
G__46029.cljs$core$IFn$_invoke$arity$2 = G__46029__2;
return G__46029;
})()
;
thi.ng.geom.core.as_matrix = (function thi$ng$geom$core$as_matrix(var_args){
var G__45324 = arguments.length;
switch (G__45324) {
case 1:
return thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$1 == null)))))){
return _.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$1(_);
} else {
return thi$ng$geom$core$PMatrixConvert$as_matrix$dyn_46028(_);
}
}));

(thi.ng.geom.core.as_matrix.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$2 == null)))))){
return _.thi$ng$geom$core$PMatrixConvert$as_matrix$arity$2(_,opts);
} else {
return thi$ng$geom$core$PMatrixConvert$as_matrix$dyn_46028(_,opts);
}
}));

(thi.ng.geom.core.as_matrix.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.PMinMax = function(){};

var thi$ng$geom$core$PMinMax$min$dyn_46036 = (function() {
var G__46037 = null;
var G__46037__2 = (function (_,x){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.min[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4429__auto__.call(null,_,x));
} else {
var m__4426__auto__ = (thi.ng.geom.core.min["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4426__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("PMinMax.min",_);
}
}
});
var G__46037__3 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.min[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.min["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMinMax.min",_);
}
}
});
G__46037 = function(_,a,b){
switch(arguments.length){
case 2:
return G__46037__2.call(this,_,a);
case 3:
return G__46037__3.call(this,_,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46037.cljs$core$IFn$_invoke$arity$2 = G__46037__2;
G__46037.cljs$core$IFn$_invoke$arity$3 = G__46037__3;
return G__46037;
})()
;
thi.ng.geom.core.min = (function thi$ng$geom$core$min(var_args){
var G__45330 = arguments.length;
switch (G__45330) {
case 2:
return thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$2 = (function (_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMinMax$min$arity$2 == null)))))){
return _.thi$ng$geom$core$PMinMax$min$arity$2(_,x);
} else {
return thi$ng$geom$core$PMinMax$min$dyn_46036(_,x);
}
}));

(thi.ng.geom.core.min.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMinMax$min$arity$3 == null)))))){
return _.thi$ng$geom$core$PMinMax$min$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMinMax$min$dyn_46036(_,a,b);
}
}));

(thi.ng.geom.core.min.cljs$lang$maxFixedArity = 3);


var thi$ng$geom$core$PMinMax$max$dyn_46042 = (function() {
var G__46043 = null;
var G__46043__2 = (function (_,y){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.max[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,y) : m__4429__auto__.call(null,_,y));
} else {
var m__4426__auto__ = (thi.ng.geom.core.max["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,y) : m__4426__auto__.call(null,_,y));
} else {
throw cljs.core.missing_protocol("PMinMax.max",_);
}
}
});
var G__46043__3 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.max[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.max["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PMinMax.max",_);
}
}
});
G__46043 = function(_,a,b){
switch(arguments.length){
case 2:
return G__46043__2.call(this,_,a);
case 3:
return G__46043__3.call(this,_,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46043.cljs$core$IFn$_invoke$arity$2 = G__46043__2;
G__46043.cljs$core$IFn$_invoke$arity$3 = G__46043__3;
return G__46043;
})()
;
thi.ng.geom.core.max = (function thi$ng$geom$core$max(var_args){
var G__45332 = arguments.length;
switch (G__45332) {
case 2:
return thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$2 = (function (_,y){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMinMax$max$arity$2 == null)))))){
return _.thi$ng$geom$core$PMinMax$max$arity$2(_,y);
} else {
return thi$ng$geom$core$PMinMax$max$dyn_46042(_,y);
}
}));

(thi.ng.geom.core.max.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMinMax$max$arity$3 == null)))))){
return _.thi$ng$geom$core$PMinMax$max$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PMinMax$max$dyn_46042(_,a,b);
}
}));

(thi.ng.geom.core.max.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
thi.ng.geom.core.PNormal = function(){};

var thi$ng$geom$core$PNormal$normal$dyn_46050 = (function() {
var G__46051 = null;
var G__46051__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.normal[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.normal["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PNormal.normal",_);
}
}
});
var G__46051__2 = (function (_,a){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.normal[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4429__auto__.call(null,_,a));
} else {
var m__4426__auto__ = (thi.ng.geom.core.normal["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,a) : m__4426__auto__.call(null,_,a));
} else {
throw cljs.core.missing_protocol("PNormal.normal",_);
}
}
});
G__46051 = function(_,a){
switch(arguments.length){
case 1:
return G__46051__1.call(this,_);
case 2:
return G__46051__2.call(this,_,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46051.cljs$core$IFn$_invoke$arity$1 = G__46051__1;
G__46051.cljs$core$IFn$_invoke$arity$2 = G__46051__2;
return G__46051;
})()
;
thi.ng.geom.core.normal = (function thi$ng$geom$core$normal(var_args){
var G__45336 = arguments.length;
switch (G__45336) {
case 1:
return thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PNormal$normal$arity$1 == null)))))){
return _.thi$ng$geom$core$PNormal$normal$arity$1(_);
} else {
return thi$ng$geom$core$PNormal$normal$dyn_46050(_);
}
}));

(thi.ng.geom.core.normal.cljs$core$IFn$_invoke$arity$2 = (function (_,a){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PNormal$normal$arity$2 == null)))))){
return _.thi$ng$geom$core$PNormal$normal$arity$2(_,a);
} else {
return thi$ng$geom$core$PNormal$normal$dyn_46050(_,a);
}
}));

(thi.ng.geom.core.normal.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.PNormalize = function(){};

var thi$ng$geom$core$PNormalize$normalize$dyn_46054 = (function() {
var G__46055 = null;
var G__46055__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.normalize[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.normalize["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PNormalize.normalize",_);
}
}
});
var G__46055__2 = (function (_,len){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.normalize[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,len) : m__4429__auto__.call(null,_,len));
} else {
var m__4426__auto__ = (thi.ng.geom.core.normalize["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,len) : m__4426__auto__.call(null,_,len));
} else {
throw cljs.core.missing_protocol("PNormalize.normalize",_);
}
}
});
G__46055 = function(_,len){
switch(arguments.length){
case 1:
return G__46055__1.call(this,_);
case 2:
return G__46055__2.call(this,_,len);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46055.cljs$core$IFn$_invoke$arity$1 = G__46055__1;
G__46055.cljs$core$IFn$_invoke$arity$2 = G__46055__2;
return G__46055;
})()
;
thi.ng.geom.core.normalize = (function thi$ng$geom$core$normalize(var_args){
var G__45341 = arguments.length;
switch (G__45341) {
case 1:
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PNormalize$normalize$arity$1 == null)))))){
return _.thi$ng$geom$core$PNormalize$normalize$arity$1(_);
} else {
return thi$ng$geom$core$PNormalize$normalize$dyn_46054(_);
}
}));

(thi.ng.geom.core.normalize.cljs$core$IFn$_invoke$arity$2 = (function (_,len){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PNormalize$normalize$arity$2 == null)))))){
return _.thi$ng$geom$core$PNormalize$normalize$arity$2(_,len);
} else {
return thi$ng$geom$core$PNormalize$normalize$dyn_46054(_,len);
}
}));

(thi.ng.geom.core.normalize.cljs$lang$maxFixedArity = 2);


var thi$ng$geom$core$PNormalize$normalized_QMARK_$dyn_46062 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.normalized_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.normalized_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PNormalize.normalized?",_);
}
}
});
thi.ng.geom.core.normalized_QMARK_ = (function thi$ng$geom$core$normalized_QMARK_(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1 == null)))))){
return _.thi$ng$geom$core$PNormalize$normalized_QMARK_$arity$1(_);
} else {
return thi$ng$geom$core$PNormalize$normalized_QMARK_$dyn_46062(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PSetOps = function(){};

var thi$ng$geom$core$PSetOps$union$dyn_46069 = (function (_,x){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.union[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4429__auto__.call(null,_,x));
} else {
var m__4426__auto__ = (thi.ng.geom.core.union["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4426__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("PSetOps.union",_);
}
}
});
thi.ng.geom.core.union = (function thi$ng$geom$core$union(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSetOps$union$arity$2 == null)))))){
return _.thi$ng$geom$core$PSetOps$union$arity$2(_,x);
} else {
return thi$ng$geom$core$PSetOps$union$dyn_46069(_,x);
}
});

var thi$ng$geom$core$PSetOps$intersection$dyn_46074 = (function (_,y){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.intersection[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,y) : m__4429__auto__.call(null,_,y));
} else {
var m__4426__auto__ = (thi.ng.geom.core.intersection["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,y) : m__4426__auto__.call(null,_,y));
} else {
throw cljs.core.missing_protocol("PSetOps.intersection",_);
}
}
});
thi.ng.geom.core.intersection = (function thi$ng$geom$core$intersection(_,y){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSetOps$intersection$arity$2 == null)))))){
return _.thi$ng$geom$core$PSetOps$intersection$arity$2(_,y);
} else {
return thi$ng$geom$core$PSetOps$intersection$dyn_46074(_,y);
}
});

var thi$ng$geom$core$PSetOps$difference$dyn_46077 = (function (_,x){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.difference[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4429__auto__.call(null,_,x));
} else {
var m__4426__auto__ = (thi.ng.geom.core.difference["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,x) : m__4426__auto__.call(null,_,x));
} else {
throw cljs.core.missing_protocol("PSetOps.difference",_);
}
}
});
thi.ng.geom.core.difference = (function thi$ng$geom$core$difference(_,x){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSetOps$difference$arity$2 == null)))))){
return _.thi$ng$geom$core$PSetOps$difference$arity$2(_,x);
} else {
return thi$ng$geom$core$PSetOps$difference$dyn_46077(_,x);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PTranspose = function(){};

var thi$ng$geom$core$PTranspose$transpose$dyn_46078 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.transpose[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.transpose["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PTranspose.transpose",_);
}
}
});
thi.ng.geom.core.transpose = (function thi$ng$geom$core$transpose(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PTranspose$transpose$arity$1 == null)))))){
return _.thi$ng$geom$core$PTranspose$transpose$arity$1(_);
} else {
return thi$ng$geom$core$PTranspose$transpose$dyn_46078(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PPolar = function(){};

var thi$ng$geom$core$PPolar$as_polar$dyn_46081 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.as_polar[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.as_polar["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PPolar.as-polar",_);
}
}
});
thi.ng.geom.core.as_polar = (function thi$ng$geom$core$as_polar(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PPolar$as_polar$arity$1 == null)))))){
return _.thi$ng$geom$core$PPolar$as_polar$arity$1(_);
} else {
return thi$ng$geom$core$PPolar$as_polar$dyn_46081(_);
}
});

var thi$ng$geom$core$PPolar$as_cartesian$dyn_46084 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.as_cartesian[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.as_cartesian["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PPolar.as-cartesian",_);
}
}
});
thi.ng.geom.core.as_cartesian = (function thi$ng$geom$core$as_cartesian(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PPolar$as_cartesian$arity$1 == null)))))){
return _.thi$ng$geom$core$PPolar$as_cartesian$arity$1(_);
} else {
return thi$ng$geom$core$PPolar$as_cartesian$dyn_46084(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PReflect = function(){};

var thi$ng$geom$core$PReflect$reflect$dyn_46085 = (function (_,r){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.reflect[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,r) : m__4429__auto__.call(null,_,r));
} else {
var m__4426__auto__ = (thi.ng.geom.core.reflect["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,r) : m__4426__auto__.call(null,_,r));
} else {
throw cljs.core.missing_protocol("PReflect.reflect",_);
}
}
});
thi.ng.geom.core.reflect = (function thi$ng$geom$core$reflect(_,r){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PReflect$reflect$arity$2 == null)))))){
return _.thi$ng$geom$core$PReflect$reflect$arity$2(_,r);
} else {
return thi$ng$geom$core$PReflect$reflect$dyn_46085(_,r);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PRotate = function(){};

var thi$ng$geom$core$PRotate$rotate$dyn_46089 = (function (_,t){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.rotate[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__4429__auto__.call(null,_,t));
} else {
var m__4426__auto__ = (thi.ng.geom.core.rotate["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__4426__auto__.call(null,_,t));
} else {
throw cljs.core.missing_protocol("PRotate.rotate",_);
}
}
});
thi.ng.geom.core.rotate = (function thi$ng$geom$core$rotate(_,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PRotate$rotate$arity$2 == null)))))){
return _.thi$ng$geom$core$PRotate$rotate$arity$2(_,t);
} else {
return thi$ng$geom$core$PRotate$rotate$dyn_46089(_,t);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PRotate3D = function(){};

var thi$ng$geom$core$PRotate3D$rotate_x$dyn_46092 = (function (_,t){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.rotate_x[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__4429__auto__.call(null,_,t));
} else {
var m__4426__auto__ = (thi.ng.geom.core.rotate_x["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__4426__auto__.call(null,_,t));
} else {
throw cljs.core.missing_protocol("PRotate3D.rotate-x",_);
}
}
});
thi.ng.geom.core.rotate_x = (function thi$ng$geom$core$rotate_x(_,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PRotate3D$rotate_x$arity$2 == null)))))){
return _.thi$ng$geom$core$PRotate3D$rotate_x$arity$2(_,t);
} else {
return thi$ng$geom$core$PRotate3D$rotate_x$dyn_46092(_,t);
}
});

var thi$ng$geom$core$PRotate3D$rotate_y$dyn_46093 = (function (_,t){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.rotate_y[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__4429__auto__.call(null,_,t));
} else {
var m__4426__auto__ = (thi.ng.geom.core.rotate_y["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__4426__auto__.call(null,_,t));
} else {
throw cljs.core.missing_protocol("PRotate3D.rotate-y",_);
}
}
});
thi.ng.geom.core.rotate_y = (function thi$ng$geom$core$rotate_y(_,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PRotate3D$rotate_y$arity$2 == null)))))){
return _.thi$ng$geom$core$PRotate3D$rotate_y$arity$2(_,t);
} else {
return thi$ng$geom$core$PRotate3D$rotate_y$dyn_46093(_,t);
}
});

var thi$ng$geom$core$PRotate3D$rotate_z$dyn_46097 = (function (_,t){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.rotate_z[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__4429__auto__.call(null,_,t));
} else {
var m__4426__auto__ = (thi.ng.geom.core.rotate_z["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__4426__auto__.call(null,_,t));
} else {
throw cljs.core.missing_protocol("PRotate3D.rotate-z",_);
}
}
});
thi.ng.geom.core.rotate_z = (function thi$ng$geom$core$rotate_z(_,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PRotate3D$rotate_z$arity$2 == null)))))){
return _.thi$ng$geom$core$PRotate3D$rotate_z$arity$2(_,t);
} else {
return thi$ng$geom$core$PRotate3D$rotate_z$dyn_46097(_,t);
}
});

var thi$ng$geom$core$PRotate3D$rotate_around_axis$dyn_46100 = (function (_,a,t){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.rotate_around_axis[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,t) : m__4429__auto__.call(null,_,a,t));
} else {
var m__4426__auto__ = (thi.ng.geom.core.rotate_around_axis["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,t) : m__4426__auto__.call(null,_,a,t));
} else {
throw cljs.core.missing_protocol("PRotate3D.rotate-around-axis",_);
}
}
});
thi.ng.geom.core.rotate_around_axis = (function thi$ng$geom$core$rotate_around_axis(_,a,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3 == null)))))){
return _.thi$ng$geom$core$PRotate3D$rotate_around_axis$arity$3(_,a,t);
} else {
return thi$ng$geom$core$PRotate3D$rotate_around_axis$dyn_46100(_,a,t);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PScale = function(){};

var thi$ng$geom$core$PScale$scale$dyn_46104 = (function() {
var G__46105 = null;
var G__46105__2 = (function (_,s){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.scale[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4429__auto__.call(null,_,s));
} else {
var m__4426__auto__ = (thi.ng.geom.core.scale["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4426__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("PScale.scale",_);
}
}
});
var G__46105__3 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.scale[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.scale["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PScale.scale",_);
}
}
});
var G__46105__4 = (function (_,a,b,c){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.scale[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4429__auto__.call(null,_,a,b,c));
} else {
var m__4426__auto__ = (thi.ng.geom.core.scale["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,c) : m__4426__auto__.call(null,_,a,b,c));
} else {
throw cljs.core.missing_protocol("PScale.scale",_);
}
}
});
G__46105 = function(_,a,b,c){
switch(arguments.length){
case 2:
return G__46105__2.call(this,_,a);
case 3:
return G__46105__3.call(this,_,a,b);
case 4:
return G__46105__4.call(this,_,a,b,c);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46105.cljs$core$IFn$_invoke$arity$2 = G__46105__2;
G__46105.cljs$core$IFn$_invoke$arity$3 = G__46105__3;
G__46105.cljs$core$IFn$_invoke$arity$4 = G__46105__4;
return G__46105;
})()
;
thi.ng.geom.core.scale = (function thi$ng$geom$core$scale(var_args){
var G__45409 = arguments.length;
switch (G__45409) {
case 2:
return thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$2 = (function (_,s){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PScale$scale$arity$2 == null)))))){
return _.thi$ng$geom$core$PScale$scale$arity$2(_,s);
} else {
return thi$ng$geom$core$PScale$scale$dyn_46104(_,s);
}
}));

(thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$3 = (function (_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PScale$scale$arity$3 == null)))))){
return _.thi$ng$geom$core$PScale$scale$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PScale$scale$dyn_46104(_,a,b);
}
}));

(thi.ng.geom.core.scale.cljs$core$IFn$_invoke$arity$4 = (function (_,a,b,c){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PScale$scale$arity$4 == null)))))){
return _.thi$ng$geom$core$PScale$scale$arity$4(_,a,b,c);
} else {
return thi$ng$geom$core$PScale$scale$dyn_46104(_,a,b,c);
}
}));

(thi.ng.geom.core.scale.cljs$lang$maxFixedArity = 4);


var thi$ng$geom$core$PScale$scale_size$dyn_46112 = (function (_,s){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.scale_size[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4429__auto__.call(null,_,s));
} else {
var m__4426__auto__ = (thi.ng.geom.core.scale_size["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4426__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("PScale.scale-size",_);
}
}
});
thi.ng.geom.core.scale_size = (function thi$ng$geom$core$scale_size(_,s){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PScale$scale_size$arity$2 == null)))))){
return _.thi$ng$geom$core$PScale$scale_size$arity$2(_,s);
} else {
return thi$ng$geom$core$PScale$scale_size$dyn_46112(_,s);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PShear = function(){};

var thi$ng$geom$core$PShear$shear$dyn_46115 = (function() {
var G__46116 = null;
var G__46116__2 = (function (_,s){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.shear[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4429__auto__.call(null,_,s));
} else {
var m__4426__auto__ = (thi.ng.geom.core.shear["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4426__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("PShear.shear",_);
}
}
});
var G__46116__3 = (function (_,sx,sy){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.shear[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,sx,sy) : m__4429__auto__.call(null,_,sx,sy));
} else {
var m__4426__auto__ = (thi.ng.geom.core.shear["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,sx,sy) : m__4426__auto__.call(null,_,sx,sy));
} else {
throw cljs.core.missing_protocol("PShear.shear",_);
}
}
});
var G__46116__4 = (function (_,sx,sy,sz){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.shear[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,sx,sy,sz) : m__4429__auto__.call(null,_,sx,sy,sz));
} else {
var m__4426__auto__ = (thi.ng.geom.core.shear["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,sx,sy,sz) : m__4426__auto__.call(null,_,sx,sy,sz));
} else {
throw cljs.core.missing_protocol("PShear.shear",_);
}
}
});
G__46116 = function(_,sx,sy,sz){
switch(arguments.length){
case 2:
return G__46116__2.call(this,_,sx);
case 3:
return G__46116__3.call(this,_,sx,sy);
case 4:
return G__46116__4.call(this,_,sx,sy,sz);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46116.cljs$core$IFn$_invoke$arity$2 = G__46116__2;
G__46116.cljs$core$IFn$_invoke$arity$3 = G__46116__3;
G__46116.cljs$core$IFn$_invoke$arity$4 = G__46116__4;
return G__46116;
})()
;
thi.ng.geom.core.shear = (function thi$ng$geom$core$shear(var_args){
var G__45473 = arguments.length;
switch (G__45473) {
case 2:
return thi.ng.geom.core.shear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.shear.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.shear.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.shear.cljs$core$IFn$_invoke$arity$2 = (function (_,s){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PShear$shear$arity$2 == null)))))){
return _.thi$ng$geom$core$PShear$shear$arity$2(_,s);
} else {
return thi$ng$geom$core$PShear$shear$dyn_46115(_,s);
}
}));

(thi.ng.geom.core.shear.cljs$core$IFn$_invoke$arity$3 = (function (_,sx,sy){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PShear$shear$arity$3 == null)))))){
return _.thi$ng$geom$core$PShear$shear$arity$3(_,sx,sy);
} else {
return thi$ng$geom$core$PShear$shear$dyn_46115(_,sx,sy);
}
}));

(thi.ng.geom.core.shear.cljs$core$IFn$_invoke$arity$4 = (function (_,sx,sy,sz){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PShear$shear$arity$4 == null)))))){
return _.thi$ng$geom$core$PShear$shear$arity$4(_,sx,sy,sz);
} else {
return thi$ng$geom$core$PShear$shear$dyn_46115(_,sx,sy,sz);
}
}));

(thi.ng.geom.core.shear.cljs$lang$maxFixedArity = 4);



/**
 * @interface
 */
thi.ng.geom.core.PTransform = function(){};

var thi$ng$geom$core$PTransform$transform$dyn_46132 = (function (_,matrix){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.transform[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,matrix) : m__4429__auto__.call(null,_,matrix));
} else {
var m__4426__auto__ = (thi.ng.geom.core.transform["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,matrix) : m__4426__auto__.call(null,_,matrix));
} else {
throw cljs.core.missing_protocol("PTransform.transform",_);
}
}
});
thi.ng.geom.core.transform = (function thi$ng$geom$core$transform(_,matrix){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PTransform$transform$arity$2 == null)))))){
return _.thi$ng$geom$core$PTransform$transform$arity$2(_,matrix);
} else {
return thi$ng$geom$core$PTransform$transform$dyn_46132(_,matrix);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PTranslate = function(){};

var thi$ng$geom$core$PTranslate$translate$dyn_46136 = (function() {
var G__46137 = null;
var G__46137__2 = (function (_,t){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.translate[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__4429__auto__.call(null,_,t));
} else {
var m__4426__auto__ = (thi.ng.geom.core.translate["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__4426__auto__.call(null,_,t));
} else {
throw cljs.core.missing_protocol("PTranslate.translate",_);
}
}
});
var G__46137__3 = (function (_,x,y){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.translate[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,x,y) : m__4429__auto__.call(null,_,x,y));
} else {
var m__4426__auto__ = (thi.ng.geom.core.translate["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,x,y) : m__4426__auto__.call(null,_,x,y));
} else {
throw cljs.core.missing_protocol("PTranslate.translate",_);
}
}
});
var G__46137__4 = (function (_,x,y,z){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.translate[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,x,y,z) : m__4429__auto__.call(null,_,x,y,z));
} else {
var m__4426__auto__ = (thi.ng.geom.core.translate["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,x,y,z) : m__4426__auto__.call(null,_,x,y,z));
} else {
throw cljs.core.missing_protocol("PTranslate.translate",_);
}
}
});
G__46137 = function(_,x,y,z){
switch(arguments.length){
case 2:
return G__46137__2.call(this,_,x);
case 3:
return G__46137__3.call(this,_,x,y);
case 4:
return G__46137__4.call(this,_,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46137.cljs$core$IFn$_invoke$arity$2 = G__46137__2;
G__46137.cljs$core$IFn$_invoke$arity$3 = G__46137__3;
G__46137.cljs$core$IFn$_invoke$arity$4 = G__46137__4;
return G__46137;
})()
;
thi.ng.geom.core.translate = (function thi$ng$geom$core$translate(var_args){
var G__45488 = arguments.length;
switch (G__45488) {
case 2:
return thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$2 = (function (_,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PTranslate$translate$arity$2 == null)))))){
return _.thi$ng$geom$core$PTranslate$translate$arity$2(_,t);
} else {
return thi$ng$geom$core$PTranslate$translate$dyn_46136(_,t);
}
}));

(thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$3 = (function (_,x,y){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PTranslate$translate$arity$3 == null)))))){
return _.thi$ng$geom$core$PTranslate$translate$arity$3(_,x,y);
} else {
return thi$ng$geom$core$PTranslate$translate$dyn_46136(_,x,y);
}
}));

(thi.ng.geom.core.translate.cljs$core$IFn$_invoke$arity$4 = (function (_,x,y,z){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PTranslate$translate$arity$4 == null)))))){
return _.thi$ng$geom$core$PTranslate$translate$arity$4(_,x,y,z);
} else {
return thi$ng$geom$core$PTranslate$translate$dyn_46136(_,x,y,z);
}
}));

(thi.ng.geom.core.translate.cljs$lang$maxFixedArity = 4);



/**
 * @interface
 */
thi.ng.geom.core.PVectorTransform = function(){};

var thi$ng$geom$core$PVectorTransform$transform_vector$dyn_46154 = (function (_,v){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.transform_vector[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4429__auto__.call(null,_,v));
} else {
var m__4426__auto__ = (thi.ng.geom.core.transform_vector["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4426__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("PVectorTransform.transform-vector",_);
}
}
});
thi.ng.geom.core.transform_vector = (function thi$ng$geom$core$transform_vector(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PVectorTransform$transform_vector$arity$2 == null)))))){
return _.thi$ng$geom$core$PVectorTransform$transform_vector$arity$2(_,v);
} else {
return thi$ng$geom$core$PVectorTransform$transform_vector$dyn_46154(_,v);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PGraph = function(){};

var thi$ng$geom$core$PGraph$connected_components$dyn_46160 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.connected_components[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.connected_components["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PGraph.connected-components",_);
}
}
});
thi.ng.geom.core.connected_components = (function thi$ng$geom$core$connected_components(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PGraph$connected_components$arity$1 == null)))))){
return _.thi$ng$geom$core$PGraph$connected_components$arity$1(_);
} else {
return thi$ng$geom$core$PGraph$connected_components$dyn_46160(_);
}
});

var thi$ng$geom$core$PGraph$cyclic_QMARK_$dyn_46161 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.cyclic_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.cyclic_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PGraph.cyclic?",_);
}
}
});
thi.ng.geom.core.cyclic_QMARK_ = (function thi$ng$geom$core$cyclic_QMARK_(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PGraph$cyclic_QMARK_$arity$1 == null)))))){
return _.thi$ng$geom$core$PGraph$cyclic_QMARK_$arity$1(_);
} else {
return thi$ng$geom$core$PGraph$cyclic_QMARK_$dyn_46161(_);
}
});

var thi$ng$geom$core$PGraph$vertex_valence$dyn_46163 = (function (_,v){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.vertex_valence[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4429__auto__.call(null,_,v));
} else {
var m__4426__auto__ = (thi.ng.geom.core.vertex_valence["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4426__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("PGraph.vertex-valence",_);
}
}
});
thi.ng.geom.core.vertex_valence = (function thi$ng$geom$core$vertex_valence(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PGraph$vertex_valence$arity$2 == null)))))){
return _.thi$ng$geom$core$PGraph$vertex_valence$arity$2(_,v);
} else {
return thi$ng$geom$core$PGraph$vertex_valence$dyn_46163(_,v);
}
});

var thi$ng$geom$core$PGraph$vertex_neighbors$dyn_46166 = (function (_,v){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.vertex_neighbors[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4429__auto__.call(null,_,v));
} else {
var m__4426__auto__ = (thi.ng.geom.core.vertex_neighbors["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4426__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("PGraph.vertex-neighbors",_);
}
}
});
thi.ng.geom.core.vertex_neighbors = (function thi$ng$geom$core$vertex_neighbors(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2 == null)))))){
return _.thi$ng$geom$core$PGraph$vertex_neighbors$arity$2(_,v);
} else {
return thi$ng$geom$core$PGraph$vertex_neighbors$dyn_46166(_,v);
}
});

var thi$ng$geom$core$PGraph$remove_vertex$dyn_46172 = (function (_,v){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.remove_vertex[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4429__auto__.call(null,_,v));
} else {
var m__4426__auto__ = (thi.ng.geom.core.remove_vertex["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4426__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("PGraph.remove-vertex",_);
}
}
});
thi.ng.geom.core.remove_vertex = (function thi$ng$geom$core$remove_vertex(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PGraph$remove_vertex$arity$2 == null)))))){
return _.thi$ng$geom$core$PGraph$remove_vertex$arity$2(_,v);
} else {
return thi$ng$geom$core$PGraph$remove_vertex$dyn_46172(_,v);
}
});

var thi$ng$geom$core$PGraph$replace_vertex$dyn_46174 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.replace_vertex[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.replace_vertex["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PGraph.replace-vertex",_);
}
}
});
thi.ng.geom.core.replace_vertex = (function thi$ng$geom$core$replace_vertex(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PGraph$replace_vertex$arity$3 == null)))))){
return _.thi$ng$geom$core$PGraph$replace_vertex$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PGraph$replace_vertex$dyn_46174(_,a,b);
}
});

var thi$ng$geom$core$PGraph$merge_vertices$dyn_46179 = (function (_,a,b){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.merge_vertices[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4429__auto__.call(null,_,a,b));
} else {
var m__4426__auto__ = (thi.ng.geom.core.merge_vertices["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,a,b) : m__4426__auto__.call(null,_,a,b));
} else {
throw cljs.core.missing_protocol("PGraph.merge-vertices",_);
}
}
});
thi.ng.geom.core.merge_vertices = (function thi$ng$geom$core$merge_vertices(_,a,b){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PGraph$merge_vertices$arity$3 == null)))))){
return _.thi$ng$geom$core$PGraph$merge_vertices$arity$3(_,a,b);
} else {
return thi$ng$geom$core$PGraph$merge_vertices$dyn_46179(_,a,b);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PDirectedGraph = function(){};

var thi$ng$geom$core$PDirectedGraph$in_vertices$dyn_46181 = (function (_,v){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.in_vertices[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4429__auto__.call(null,_,v));
} else {
var m__4426__auto__ = (thi.ng.geom.core.in_vertices["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4426__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("PDirectedGraph.in-vertices",_);
}
}
});
thi.ng.geom.core.in_vertices = (function thi$ng$geom$core$in_vertices(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PDirectedGraph$in_vertices$arity$2 == null)))))){
return _.thi$ng$geom$core$PDirectedGraph$in_vertices$arity$2(_,v);
} else {
return thi$ng$geom$core$PDirectedGraph$in_vertices$dyn_46181(_,v);
}
});

var thi$ng$geom$core$PDirectedGraph$out_vertices$dyn_46186 = (function (_,v){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.out_vertices[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4429__auto__.call(null,_,v));
} else {
var m__4426__auto__ = (thi.ng.geom.core.out_vertices["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4426__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("PDirectedGraph.out-vertices",_);
}
}
});
thi.ng.geom.core.out_vertices = (function thi$ng$geom$core$out_vertices(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PDirectedGraph$out_vertices$arity$2 == null)))))){
return _.thi$ng$geom$core$PDirectedGraph$out_vertices$arity$2(_,v);
} else {
return thi$ng$geom$core$PDirectedGraph$out_vertices$dyn_46186(_,v);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PGraphConvert = function(){};

var thi$ng$geom$core$PGraphConvert$as_graph$dyn_46188 = (function() {
var G__46189 = null;
var G__46189__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.as_graph[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.as_graph["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PGraphConvert.as-graph",_);
}
}
});
var G__46189__2 = (function (_,opts){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.as_graph[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4429__auto__.call(null,_,opts));
} else {
var m__4426__auto__ = (thi.ng.geom.core.as_graph["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4426__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("PGraphConvert.as-graph",_);
}
}
});
G__46189 = function(_,opts){
switch(arguments.length){
case 1:
return G__46189__1.call(this,_);
case 2:
return G__46189__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46189.cljs$core$IFn$_invoke$arity$1 = G__46189__1;
G__46189.cljs$core$IFn$_invoke$arity$2 = G__46189__2;
return G__46189;
})()
;
thi.ng.geom.core.as_graph = (function thi$ng$geom$core$as_graph(var_args){
var G__45531 = arguments.length;
switch (G__45531) {
case 1:
return thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PGraphConvert$as_graph$arity$1 == null)))))){
return _.thi$ng$geom$core$PGraphConvert$as_graph$arity$1(_);
} else {
return thi$ng$geom$core$PGraphConvert$as_graph$dyn_46188(_);
}
}));

(thi.ng.geom.core.as_graph.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PGraphConvert$as_graph$arity$2 == null)))))){
return _.thi$ng$geom$core$PGraphConvert$as_graph$arity$2(_,opts);
} else {
return thi$ng$geom$core$PGraphConvert$as_graph$dyn_46188(_,opts);
}
}));

(thi.ng.geom.core.as_graph.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.PVertexAccess = function(){};

var thi$ng$geom$core$PVertexAccess$vertices$dyn_46198 = (function() {
var G__46199 = null;
var G__46199__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.vertices[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.vertices["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PVertexAccess.vertices",_);
}
}
});
var G__46199__2 = (function (_,opts){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.vertices[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4429__auto__.call(null,_,opts));
} else {
var m__4426__auto__ = (thi.ng.geom.core.vertices["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4426__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("PVertexAccess.vertices",_);
}
}
});
G__46199 = function(_,opts){
switch(arguments.length){
case 1:
return G__46199__1.call(this,_);
case 2:
return G__46199__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46199.cljs$core$IFn$_invoke$arity$1 = G__46199__1;
G__46199.cljs$core$IFn$_invoke$arity$2 = G__46199__2;
return G__46199;
})()
;
thi.ng.geom.core.vertices = (function thi$ng$geom$core$vertices(var_args){
var G__45544 = arguments.length;
switch (G__45544) {
case 1:
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PVertexAccess$vertices$arity$1 == null)))))){
return _.thi$ng$geom$core$PVertexAccess$vertices$arity$1(_);
} else {
return thi$ng$geom$core$PVertexAccess$vertices$dyn_46198(_);
}
}));

(thi.ng.geom.core.vertices.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PVertexAccess$vertices$arity$2 == null)))))){
return _.thi$ng$geom$core$PVertexAccess$vertices$arity$2(_,opts);
} else {
return thi$ng$geom$core$PVertexAccess$vertices$dyn_46198(_,opts);
}
}));

(thi.ng.geom.core.vertices.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.PEdgeAccess = function(){};

var thi$ng$geom$core$PEdgeAccess$edges$dyn_46204 = (function() {
var G__46205 = null;
var G__46205__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.edges[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.edges["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PEdgeAccess.edges",_);
}
}
});
var G__46205__2 = (function (_,opts){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.edges[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4429__auto__.call(null,_,opts));
} else {
var m__4426__auto__ = (thi.ng.geom.core.edges["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4426__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("PEdgeAccess.edges",_);
}
}
});
G__46205 = function(_,opts){
switch(arguments.length){
case 1:
return G__46205__1.call(this,_);
case 2:
return G__46205__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46205.cljs$core$IFn$_invoke$arity$1 = G__46205__1;
G__46205.cljs$core$IFn$_invoke$arity$2 = G__46205__2;
return G__46205;
})()
;
thi.ng.geom.core.edges = (function thi$ng$geom$core$edges(var_args){
var G__45553 = arguments.length;
switch (G__45553) {
case 1:
return thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PEdgeAccess$edges$arity$1 == null)))))){
return _.thi$ng$geom$core$PEdgeAccess$edges$arity$1(_);
} else {
return thi$ng$geom$core$PEdgeAccess$edges$dyn_46204(_);
}
}));

(thi.ng.geom.core.edges.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PEdgeAccess$edges$arity$2 == null)))))){
return _.thi$ng$geom$core$PEdgeAccess$edges$arity$2(_,opts);
} else {
return thi$ng$geom$core$PEdgeAccess$edges$dyn_46204(_,opts);
}
}));

(thi.ng.geom.core.edges.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.PFaceAccess = function(){};

var thi$ng$geom$core$PFaceAccess$add_face$dyn_46213 = (function (_,f){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.add_face[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4429__auto__.call(null,_,f));
} else {
var m__4426__auto__ = (thi.ng.geom.core.add_face["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4426__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("PFaceAccess.add-face",_);
}
}
});
thi.ng.geom.core.add_face = (function thi$ng$geom$core$add_face(_,f){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PFaceAccess$add_face$arity$2 == null)))))){
return _.thi$ng$geom$core$PFaceAccess$add_face$arity$2(_,f);
} else {
return thi$ng$geom$core$PFaceAccess$add_face$dyn_46213(_,f);
}
});

var thi$ng$geom$core$PFaceAccess$faces$dyn_46214 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.faces[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.faces["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PFaceAccess.faces",_);
}
}
});
thi.ng.geom.core.faces = (function thi$ng$geom$core$faces(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PFaceAccess$faces$arity$1 == null)))))){
return _.thi$ng$geom$core$PFaceAccess$faces$arity$1(_);
} else {
return thi$ng$geom$core$PFaceAccess$faces$dyn_46214(_);
}
});

var thi$ng$geom$core$PFaceAccess$remove_face$dyn_46219 = (function (_,f){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.remove_face[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4429__auto__.call(null,_,f));
} else {
var m__4426__auto__ = (thi.ng.geom.core.remove_face["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4426__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("PFaceAccess.remove-face",_);
}
}
});
thi.ng.geom.core.remove_face = (function thi$ng$geom$core$remove_face(_,f){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PFaceAccess$remove_face$arity$2 == null)))))){
return _.thi$ng$geom$core$PFaceAccess$remove_face$arity$2(_,f);
} else {
return thi$ng$geom$core$PFaceAccess$remove_face$dyn_46219(_,f);
}
});

var thi$ng$geom$core$PFaceAccess$vertex_faces$dyn_46220 = (function (_,v){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.vertex_faces[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4429__auto__.call(null,_,v));
} else {
var m__4426__auto__ = (thi.ng.geom.core.vertex_faces["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4426__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("PFaceAccess.vertex-faces",_);
}
}
});
thi.ng.geom.core.vertex_faces = (function thi$ng$geom$core$vertex_faces(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PFaceAccess$vertex_faces$arity$2 == null)))))){
return _.thi$ng$geom$core$PFaceAccess$vertex_faces$arity$2(_,v);
} else {
return thi$ng$geom$core$PFaceAccess$vertex_faces$dyn_46220(_,v);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PNormalAccess = function(){};

var thi$ng$geom$core$PNormalAccess$compute_face_normals$dyn_46224 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.compute_face_normals[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.compute_face_normals["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PNormalAccess.compute-face-normals",_);
}
}
});
thi.ng.geom.core.compute_face_normals = (function thi$ng$geom$core$compute_face_normals(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PNormalAccess$compute_face_normals$arity$1 == null)))))){
return _.thi$ng$geom$core$PNormalAccess$compute_face_normals$arity$1(_);
} else {
return thi$ng$geom$core$PNormalAccess$compute_face_normals$dyn_46224(_);
}
});

var thi$ng$geom$core$PNormalAccess$compute_vertex_normals$dyn_46227 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.compute_vertex_normals[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.compute_vertex_normals["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PNormalAccess.compute-vertex-normals",_);
}
}
});
thi.ng.geom.core.compute_vertex_normals = (function thi$ng$geom$core$compute_vertex_normals(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PNormalAccess$compute_vertex_normals$arity$1 == null)))))){
return _.thi$ng$geom$core$PNormalAccess$compute_vertex_normals$arity$1(_);
} else {
return thi$ng$geom$core$PNormalAccess$compute_vertex_normals$dyn_46227(_);
}
});

var thi$ng$geom$core$PNormalAccess$face_normals$dyn_46231 = (function (_,force_QMARK_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.face_normals[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,force_QMARK_) : m__4429__auto__.call(null,_,force_QMARK_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.face_normals["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,force_QMARK_) : m__4426__auto__.call(null,_,force_QMARK_));
} else {
throw cljs.core.missing_protocol("PNormalAccess.face-normals",_);
}
}
});
thi.ng.geom.core.face_normals = (function thi$ng$geom$core$face_normals(_,force_QMARK_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PNormalAccess$face_normals$arity$2 == null)))))){
return _.thi$ng$geom$core$PNormalAccess$face_normals$arity$2(_,force_QMARK_);
} else {
return thi$ng$geom$core$PNormalAccess$face_normals$dyn_46231(_,force_QMARK_);
}
});

var thi$ng$geom$core$PNormalAccess$face_normal$dyn_46232 = (function (_,f){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.face_normal[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4429__auto__.call(null,_,f));
} else {
var m__4426__auto__ = (thi.ng.geom.core.face_normal["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__4426__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("PNormalAccess.face-normal",_);
}
}
});
thi.ng.geom.core.face_normal = (function thi$ng$geom$core$face_normal(_,f){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PNormalAccess$face_normal$arity$2 == null)))))){
return _.thi$ng$geom$core$PNormalAccess$face_normal$arity$2(_,f);
} else {
return thi$ng$geom$core$PNormalAccess$face_normal$dyn_46232(_,f);
}
});

var thi$ng$geom$core$PNormalAccess$vertex_normals$dyn_46234 = (function (_,force_QMARK_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.vertex_normals[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,force_QMARK_) : m__4429__auto__.call(null,_,force_QMARK_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.vertex_normals["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,force_QMARK_) : m__4426__auto__.call(null,_,force_QMARK_));
} else {
throw cljs.core.missing_protocol("PNormalAccess.vertex-normals",_);
}
}
});
thi.ng.geom.core.vertex_normals = (function thi$ng$geom$core$vertex_normals(_,force_QMARK_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PNormalAccess$vertex_normals$arity$2 == null)))))){
return _.thi$ng$geom$core$PNormalAccess$vertex_normals$arity$2(_,force_QMARK_);
} else {
return thi$ng$geom$core$PNormalAccess$vertex_normals$dyn_46234(_,force_QMARK_);
}
});

var thi$ng$geom$core$PNormalAccess$vertex_normal$dyn_46236 = (function (_,v){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.vertex_normal[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4429__auto__.call(null,_,v));
} else {
var m__4426__auto__ = (thi.ng.geom.core.vertex_normal["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,v) : m__4426__auto__.call(null,_,v));
} else {
throw cljs.core.missing_protocol("PNormalAccess.vertex-normal",_);
}
}
});
thi.ng.geom.core.vertex_normal = (function thi$ng$geom$core$vertex_normal(_,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PNormalAccess$vertex_normal$arity$2 == null)))))){
return _.thi$ng$geom$core$PNormalAccess$vertex_normal$arity$2(_,v);
} else {
return thi$ng$geom$core$PNormalAccess$vertex_normal$dyn_46236(_,v);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PAlign = function(){};

var thi$ng$geom$core$PAlign$align_with$dyn_46240 = (function (_,x,opts){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.align_with[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,x,opts) : m__4429__auto__.call(null,_,x,opts));
} else {
var m__4426__auto__ = (thi.ng.geom.core.align_with["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,x,opts) : m__4426__auto__.call(null,_,x,opts));
} else {
throw cljs.core.missing_protocol("PAlign.align-with",_);
}
}
});
/**
 * Returns updated entity aligned with `x` in the specified manner
 */
thi.ng.geom.core.align_with = (function thi$ng$geom$core$align_with(_,x,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PAlign$align_with$arity$3 == null)))))){
return _.thi$ng$geom$core$PAlign$align_with$arity$3(_,x,opts);
} else {
return thi$ng$geom$core$PAlign$align_with$dyn_46240(_,x,opts);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PArea = function(){};

var thi$ng$geom$core$PArea$area$dyn_46244 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.area[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.area["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PArea.area",_);
}
}
});
/**
 * Returns an entity's total surface area
 */
thi.ng.geom.core.area = (function thi$ng$geom$core$area(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PArea$area$arity$1 == null)))))){
return _.thi$ng$geom$core$PArea$area$arity$1(_);
} else {
return thi$ng$geom$core$PArea$area$dyn_46244(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PBoundary = function(){};

var thi$ng$geom$core$PBoundary$contains_entity_QMARK_$dyn_46246 = (function (_,s){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.contains_entity_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4429__auto__.call(null,_,s));
} else {
var m__4426__auto__ = (thi.ng.geom.core.contains_entity_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4426__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("PBoundary.contains-entity?",_);
}
}
});
thi.ng.geom.core.contains_entity_QMARK_ = (function thi$ng$geom$core$contains_entity_QMARK_(_,s){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PBoundary$contains_entity_QMARK_$arity$2 == null)))))){
return _.thi$ng$geom$core$PBoundary$contains_entity_QMARK_$arity$2(_,s);
} else {
return thi$ng$geom$core$PBoundary$contains_entity_QMARK_$dyn_46246(_,s);
}
});

var thi$ng$geom$core$PBoundary$contains_point_QMARK_$dyn_46249 = (function (_,p){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.contains_point_QMARK_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4429__auto__.call(null,_,p));
} else {
var m__4426__auto__ = (thi.ng.geom.core.contains_point_QMARK_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4426__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("PBoundary.contains-point?",_);
}
}
});
thi.ng.geom.core.contains_point_QMARK_ = (function thi$ng$geom$core$contains_point_QMARK_(_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2 == null)))))){
return _.thi$ng$geom$core$PBoundary$contains_point_QMARK_$arity$2(_,p);
} else {
return thi$ng$geom$core$PBoundary$contains_point_QMARK_$dyn_46249(_,p);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PBoundingCircle = function(){};

var thi$ng$geom$core$PBoundingCircle$bounding_circle$dyn_46253 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.bounding_circle[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.bounding_circle["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PBoundingCircle.bounding-circle",_);
}
}
});
thi.ng.geom.core.bounding_circle = (function thi$ng$geom$core$bounding_circle(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1 == null)))))){
return _.thi$ng$geom$core$PBoundingCircle$bounding_circle$arity$1(_);
} else {
return thi$ng$geom$core$PBoundingCircle$bounding_circle$dyn_46253(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PBoundingSphere = function(){};

var thi$ng$geom$core$PBoundingSphere$bounding_sphere$dyn_46255 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.bounding_sphere[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.bounding_sphere["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PBoundingSphere.bounding-sphere",_);
}
}
});
thi.ng.geom.core.bounding_sphere = (function thi$ng$geom$core$bounding_sphere(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1 == null)))))){
return _.thi$ng$geom$core$PBoundingSphere$bounding_sphere$arity$1(_);
} else {
return thi$ng$geom$core$PBoundingSphere$bounding_sphere$dyn_46255(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PBounds = function(){};

var thi$ng$geom$core$PBounds$bounds$dyn_46258 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.bounds[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.bounds["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PBounds.bounds",_);
}
}
});
/**
 * Returns bounding rect for 2d entities or box for 3d
 */
thi.ng.geom.core.bounds = (function thi$ng$geom$core$bounds(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PBounds$bounds$arity$1 == null)))))){
return _.thi$ng$geom$core$PBounds$bounds$arity$1(_);
} else {
return thi$ng$geom$core$PBounds$bounds$dyn_46258(_);
}
});

var thi$ng$geom$core$PBounds$depth$dyn_46262 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.depth[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.depth["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PBounds.depth",_);
}
}
});
/**
 * Returns entity's extent along Z (zero for 2d)
 */
thi.ng.geom.core.depth = (function thi$ng$geom$core$depth(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PBounds$depth$arity$1 == null)))))){
return _.thi$ng$geom$core$PBounds$depth$arity$1(_);
} else {
return thi$ng$geom$core$PBounds$depth$dyn_46262(_);
}
});

var thi$ng$geom$core$PBounds$height$dyn_46263 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.height[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.height["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PBounds.height",_);
}
}
});
/**
 * Returns entity's extent along Y axis
 */
thi.ng.geom.core.height = (function thi$ng$geom$core$height(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PBounds$height$arity$1 == null)))))){
return _.thi$ng$geom$core$PBounds$height$arity$1(_);
} else {
return thi$ng$geom$core$PBounds$height$dyn_46263(_);
}
});

var thi$ng$geom$core$PBounds$width$dyn_46265 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.width[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.width["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PBounds.width",_);
}
}
});
/**
 * Returns entity's extent along X axis
 */
thi.ng.geom.core.width = (function thi$ng$geom$core$width(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PBounds$width$arity$1 == null)))))){
return _.thi$ng$geom$core$PBounds$width$arity$1(_);
} else {
return thi$ng$geom$core$PBounds$width$dyn_46265(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PCenter = function(){};

var thi$ng$geom$core$PCenter$center$dyn_46266 = (function() {
var G__46267 = null;
var G__46267__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.center[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.center["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PCenter.center",_);
}
}
});
var G__46267__2 = (function (_,p){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.center[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4429__auto__.call(null,_,p));
} else {
var m__4426__auto__ = (thi.ng.geom.core.center["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4426__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("PCenter.center",_);
}
}
});
G__46267 = function(_,p){
switch(arguments.length){
case 1:
return G__46267__1.call(this,_);
case 2:
return G__46267__2.call(this,_,p);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46267.cljs$core$IFn$_invoke$arity$1 = G__46267__1;
G__46267.cljs$core$IFn$_invoke$arity$2 = G__46267__2;
return G__46267;
})()
;
/**
 * Returns updated entity centered around world origin or given point
 */
thi.ng.geom.core.center = (function thi$ng$geom$core$center(var_args){
var G__45579 = arguments.length;
switch (G__45579) {
case 1:
return thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PCenter$center$arity$1 == null)))))){
return _.thi$ng$geom$core$PCenter$center$arity$1(_);
} else {
return thi$ng$geom$core$PCenter$center$dyn_46266(_);
}
}));

(thi.ng.geom.core.center.cljs$core$IFn$_invoke$arity$2 = (function (_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PCenter$center$arity$2 == null)))))){
return _.thi$ng$geom$core$PCenter$center$arity$2(_,p);
} else {
return thi$ng$geom$core$PCenter$center$dyn_46266(_,p);
}
}));

(thi.ng.geom.core.center.cljs$lang$maxFixedArity = 2);


var thi$ng$geom$core$PCenter$centroid$dyn_46274 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.centroid[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.centroid["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PCenter.centroid",_);
}
}
});
/**
 * Returns centroid of entity
 */
thi.ng.geom.core.centroid = (function thi$ng$geom$core$centroid(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PCenter$centroid$arity$1 == null)))))){
return _.thi$ng$geom$core$PCenter$centroid$arity$1(_);
} else {
return thi$ng$geom$core$PCenter$centroid$dyn_46274(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PCircumference = function(){};

var thi$ng$geom$core$PCircumference$circumference$dyn_46278 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.circumference[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.circumference["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PCircumference.circumference",_);
}
}
});
/**
 * Returns an entity's circumference
 */
thi.ng.geom.core.circumference = (function thi$ng$geom$core$circumference(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PCircumference$circumference$arity$1 == null)))))){
return _.thi$ng$geom$core$PCircumference$circumference$arity$1(_);
} else {
return thi$ng$geom$core$PCircumference$circumference$dyn_46278(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PClassify = function(){};

var thi$ng$geom$core$PClassify$classify_point$dyn_46284 = (function (_,p){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.classify_point[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4429__auto__.call(null,_,p));
} else {
var m__4426__auto__ = (thi.ng.geom.core.classify_point["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4426__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("PClassify.classify-point",_);
}
}
});
thi.ng.geom.core.classify_point = (function thi$ng$geom$core$classify_point(_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PClassify$classify_point$arity$2 == null)))))){
return _.thi$ng$geom$core$PClassify$classify_point$arity$2(_,p);
} else {
return thi$ng$geom$core$PClassify$classify_point$dyn_46284(_,p);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PClear = function(){};

var thi$ng$geom$core$PClear$clear_STAR_$dyn_46289 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.clear_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.clear_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PClear.clear*",_);
}
}
});
thi.ng.geom.core.clear_STAR_ = (function thi$ng$geom$core$clear_STAR_(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PClear$clear_STAR_$arity$1 == null)))))){
return _.thi$ng$geom$core$PClear$clear_STAR_$arity$1(_);
} else {
return thi$ng$geom$core$PClear$clear_STAR_$dyn_46289(_);
}
});

var thi$ng$geom$core$PClear$clear_BANG_$dyn_46295 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.clear_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.clear_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PClear.clear!",_);
}
}
});
thi.ng.geom.core.clear_BANG_ = (function thi$ng$geom$core$clear_BANG_(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PClear$clear_BANG_$arity$1 == null)))))){
return _.thi$ng$geom$core$PClear$clear_BANG_$arity$1(_);
} else {
return thi$ng$geom$core$PClear$clear_BANG_$dyn_46295(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PClip = function(){};

var thi$ng$geom$core$PClip$clip_with$dyn_46303 = (function (_,s){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.clip_with[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4429__auto__.call(null,_,s));
} else {
var m__4426__auto__ = (thi.ng.geom.core.clip_with["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4426__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("PClip.clip-with",_);
}
}
});
thi.ng.geom.core.clip_with = (function thi$ng$geom$core$clip_with(_,s){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PClip$clip_with$arity$2 == null)))))){
return _.thi$ng$geom$core$PClip$clip_with$arity$2(_,s);
} else {
return thi$ng$geom$core$PClip$clip_with$dyn_46303(_,s);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PConvexHull = function(){};

var thi$ng$geom$core$PConvexHull$convex_hull$dyn_46309 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.convex_hull[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.convex_hull["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PConvexHull.convex-hull",_);
}
}
});
thi.ng.geom.core.convex_hull = (function thi$ng$geom$core$convex_hull(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PConvexHull$convex_hull$arity$1 == null)))))){
return _.thi$ng$geom$core$PConvexHull$convex_hull$arity$1(_);
} else {
return thi$ng$geom$core$PConvexHull$convex_hull$dyn_46309(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PExtrude = function(){};

var thi$ng$geom$core$PExtrude$extrude$dyn_46311 = (function (_,opts){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.extrude[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4429__auto__.call(null,_,opts));
} else {
var m__4426__auto__ = (thi.ng.geom.core.extrude["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4426__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("PExtrude.extrude",_);
}
}
});
thi.ng.geom.core.extrude = (function thi$ng$geom$core$extrude(_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PExtrude$extrude$arity$2 == null)))))){
return _.thi$ng$geom$core$PExtrude$extrude$arity$2(_,opts);
} else {
return thi$ng$geom$core$PExtrude$extrude$dyn_46311(_,opts);
}
});

var thi$ng$geom$core$PExtrude$extrude_shell$dyn_46316 = (function (_,opts){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.extrude_shell[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4429__auto__.call(null,_,opts));
} else {
var m__4426__auto__ = (thi.ng.geom.core.extrude_shell["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4426__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("PExtrude.extrude-shell",_);
}
}
});
thi.ng.geom.core.extrude_shell = (function thi$ng$geom$core$extrude_shell(_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PExtrude$extrude_shell$arity$2 == null)))))){
return _.thi$ng$geom$core$PExtrude$extrude_shell$arity$2(_,opts);
} else {
return thi$ng$geom$core$PExtrude$extrude_shell$dyn_46316(_,opts);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PFlip = function(){};

var thi$ng$geom$core$PFlip$flip$dyn_46318 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.flip[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.flip["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PFlip.flip",_);
}
}
});
thi.ng.geom.core.flip = (function thi$ng$geom$core$flip(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PFlip$flip$arity$1 == null)))))){
return _.thi$ng$geom$core$PFlip$flip$arity$1(_);
} else {
return thi$ng$geom$core$PFlip$flip$dyn_46318(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PGeomContainer = function(){};

var thi$ng$geom$core$PGeomContainer$into$dyn_46324 = (function (_,m){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.into[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__4429__auto__.call(null,_,m));
} else {
var m__4426__auto__ = (thi.ng.geom.core.into["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,m) : m__4426__auto__.call(null,_,m));
} else {
throw cljs.core.missing_protocol("PGeomContainer.into",_);
}
}
});
thi.ng.geom.core.into = (function thi$ng$geom$core$into(_,m){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PGeomContainer$into$arity$2 == null)))))){
return _.thi$ng$geom$core$PGeomContainer$into$arity$2(_,m);
} else {
return thi$ng$geom$core$PGeomContainer$into$dyn_46324(_,m);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PInset = function(){};

var thi$ng$geom$core$PInset$inset$dyn_46325 = (function (_,inset){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.inset[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,inset) : m__4429__auto__.call(null,_,inset));
} else {
var m__4426__auto__ = (thi.ng.geom.core.inset["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,inset) : m__4426__auto__.call(null,_,inset));
} else {
throw cljs.core.missing_protocol("PInset.inset",_);
}
}
});
thi.ng.geom.core.inset = (function thi$ng$geom$core$inset(_,inset){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PInset$inset$arity$2 == null)))))){
return _.thi$ng$geom$core$PInset$inset$arity$2(_,inset);
} else {
return thi$ng$geom$core$PInset$inset$dyn_46325(_,inset);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PIntersect = function(){};

var thi$ng$geom$core$PIntersect$intersect_line$dyn_46329 = (function() {
var G__46330 = null;
var G__46330__2 = (function (_,l){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.intersect_line[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,l) : m__4429__auto__.call(null,_,l));
} else {
var m__4426__auto__ = (thi.ng.geom.core.intersect_line["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,l) : m__4426__auto__.call(null,_,l));
} else {
throw cljs.core.missing_protocol("PIntersect.intersect-line",_);
}
}
});
var G__46330__3 = (function (_,p,q){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.intersect_line[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,p,q) : m__4429__auto__.call(null,_,p,q));
} else {
var m__4426__auto__ = (thi.ng.geom.core.intersect_line["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,p,q) : m__4426__auto__.call(null,_,p,q));
} else {
throw cljs.core.missing_protocol("PIntersect.intersect-line",_);
}
}
});
G__46330 = function(_,p,q){
switch(arguments.length){
case 2:
return G__46330__2.call(this,_,p);
case 3:
return G__46330__3.call(this,_,p,q);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46330.cljs$core$IFn$_invoke$arity$2 = G__46330__2;
G__46330.cljs$core$IFn$_invoke$arity$3 = G__46330__3;
return G__46330;
})()
;
thi.ng.geom.core.intersect_line = (function thi$ng$geom$core$intersect_line(var_args){
var G__45607 = arguments.length;
switch (G__45607) {
case 2:
return thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$2 = (function (_,l){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PIntersect$intersect_line$arity$2 == null)))))){
return _.thi$ng$geom$core$PIntersect$intersect_line$arity$2(_,l);
} else {
return thi$ng$geom$core$PIntersect$intersect_line$dyn_46329(_,l);
}
}));

(thi.ng.geom.core.intersect_line.cljs$core$IFn$_invoke$arity$3 = (function (_,p,q){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PIntersect$intersect_line$arity$3 == null)))))){
return _.thi$ng$geom$core$PIntersect$intersect_line$arity$3(_,p,q);
} else {
return thi$ng$geom$core$PIntersect$intersect_line$dyn_46329(_,p,q);
}
}));

(thi.ng.geom.core.intersect_line.cljs$lang$maxFixedArity = 3);


var thi$ng$geom$core$PIntersect$intersect_ray$dyn_46336 = (function() {
var G__46337 = null;
var G__46337__2 = (function (_,r){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.intersect_ray[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,r) : m__4429__auto__.call(null,_,r));
} else {
var m__4426__auto__ = (thi.ng.geom.core.intersect_ray["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,r) : m__4426__auto__.call(null,_,r));
} else {
throw cljs.core.missing_protocol("PIntersect.intersect-ray",_);
}
}
});
var G__46337__3 = (function (_,p,dir){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.intersect_ray[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,p,dir) : m__4429__auto__.call(null,_,p,dir));
} else {
var m__4426__auto__ = (thi.ng.geom.core.intersect_ray["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,p,dir) : m__4426__auto__.call(null,_,p,dir));
} else {
throw cljs.core.missing_protocol("PIntersect.intersect-ray",_);
}
}
});
G__46337 = function(_,p,dir){
switch(arguments.length){
case 2:
return G__46337__2.call(this,_,p);
case 3:
return G__46337__3.call(this,_,p,dir);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46337.cljs$core$IFn$_invoke$arity$2 = G__46337__2;
G__46337.cljs$core$IFn$_invoke$arity$3 = G__46337__3;
return G__46337;
})()
;
thi.ng.geom.core.intersect_ray = (function thi$ng$geom$core$intersect_ray(var_args){
var G__45609 = arguments.length;
switch (G__45609) {
case 2:
return thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$2 = (function (_,r){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PIntersect$intersect_ray$arity$2 == null)))))){
return _.thi$ng$geom$core$PIntersect$intersect_ray$arity$2(_,r);
} else {
return thi$ng$geom$core$PIntersect$intersect_ray$dyn_46336(_,r);
}
}));

(thi.ng.geom.core.intersect_ray.cljs$core$IFn$_invoke$arity$3 = (function (_,p,dir){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PIntersect$intersect_ray$arity$3 == null)))))){
return _.thi$ng$geom$core$PIntersect$intersect_ray$arity$3(_,p,dir);
} else {
return thi$ng$geom$core$PIntersect$intersect_ray$dyn_46336(_,p,dir);
}
}));

(thi.ng.geom.core.intersect_ray.cljs$lang$maxFixedArity = 3);


var thi$ng$geom$core$PIntersect$intersect_shape$dyn_46343 = (function (_,s){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.intersect_shape[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4429__auto__.call(null,_,s));
} else {
var m__4426__auto__ = (thi.ng.geom.core.intersect_shape["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4426__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("PIntersect.intersect-shape",_);
}
}
});
thi.ng.geom.core.intersect_shape = (function thi$ng$geom$core$intersect_shape(_,s){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PIntersect$intersect_shape$arity$2 == null)))))){
return _.thi$ng$geom$core$PIntersect$intersect_shape$arity$2(_,s);
} else {
return thi$ng$geom$core$PIntersect$intersect_shape$dyn_46343(_,s);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PMeshConvert = function(){};

var thi$ng$geom$core$PMeshConvert$as_mesh$dyn_46344 = (function() {
var G__46345 = null;
var G__46345__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.as_mesh[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.as_mesh["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PMeshConvert.as-mesh",_);
}
}
});
var G__46345__2 = (function (_,opts){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.as_mesh[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4429__auto__.call(null,_,opts));
} else {
var m__4426__auto__ = (thi.ng.geom.core.as_mesh["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4426__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("PMeshConvert.as-mesh",_);
}
}
});
G__46345 = function(_,opts){
switch(arguments.length){
case 1:
return G__46345__1.call(this,_);
case 2:
return G__46345__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46345.cljs$core$IFn$_invoke$arity$1 = G__46345__1;
G__46345.cljs$core$IFn$_invoke$arity$2 = G__46345__2;
return G__46345;
})()
;
/**
 * Transforms the current enitity into a mesh instance
 */
thi.ng.geom.core.as_mesh = (function thi$ng$geom$core$as_mesh(var_args){
var G__45628 = arguments.length;
switch (G__45628) {
case 1:
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1 == null)))))){
return _.thi$ng$geom$core$PMeshConvert$as_mesh$arity$1(_);
} else {
return thi$ng$geom$core$PMeshConvert$as_mesh$dyn_46344(_);
}
}));

(thi.ng.geom.core.as_mesh.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2 == null)))))){
return _.thi$ng$geom$core$PMeshConvert$as_mesh$arity$2(_,opts);
} else {
return thi$ng$geom$core$PMeshConvert$as_mesh$dyn_46344(_,opts);
}
}));

(thi.ng.geom.core.as_mesh.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.PPointMap = function(){};

var thi$ng$geom$core$PPointMap$map_point$dyn_46347 = (function (_,p){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.map_point[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4429__auto__.call(null,_,p));
} else {
var m__4426__auto__ = (thi.ng.geom.core.map_point["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4426__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("PPointMap.map-point",_);
}
}
});
thi.ng.geom.core.map_point = (function thi$ng$geom$core$map_point(_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PPointMap$map_point$arity$2 == null)))))){
return _.thi$ng$geom$core$PPointMap$map_point$arity$2(_,p);
} else {
return thi$ng$geom$core$PPointMap$map_point$dyn_46347(_,p);
}
});

var thi$ng$geom$core$PPointMap$unmap_point$dyn_46348 = (function (_,p){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.unmap_point[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4429__auto__.call(null,_,p));
} else {
var m__4426__auto__ = (thi.ng.geom.core.unmap_point["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4426__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("PPointMap.unmap-point",_);
}
}
});
thi.ng.geom.core.unmap_point = (function thi$ng$geom$core$unmap_point(_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PPointMap$unmap_point$arity$2 == null)))))){
return _.thi$ng$geom$core$PPointMap$unmap_point$arity$2(_,p);
} else {
return thi$ng$geom$core$PPointMap$unmap_point$dyn_46348(_,p);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PPolygonConvert = function(){};

var thi$ng$geom$core$PPolygonConvert$as_polygon$dyn_46349 = (function() {
var G__46350 = null;
var G__46350__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.as_polygon[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.as_polygon["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PPolygonConvert.as-polygon",_);
}
}
});
var G__46350__2 = (function (_,res){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.as_polygon[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,res) : m__4429__auto__.call(null,_,res));
} else {
var m__4426__auto__ = (thi.ng.geom.core.as_polygon["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,res) : m__4426__auto__.call(null,_,res));
} else {
throw cljs.core.missing_protocol("PPolygonConvert.as-polygon",_);
}
}
});
G__46350 = function(_,res){
switch(arguments.length){
case 1:
return G__46350__1.call(this,_);
case 2:
return G__46350__2.call(this,_,res);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46350.cljs$core$IFn$_invoke$arity$1 = G__46350__1;
G__46350.cljs$core$IFn$_invoke$arity$2 = G__46350__2;
return G__46350;
})()
;
/**
 * Transforms current entity into a Polygon2 instance
 */
thi.ng.geom.core.as_polygon = (function thi$ng$geom$core$as_polygon(var_args){
var G__45653 = arguments.length;
switch (G__45653) {
case 1:
return thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$1 == null)))))){
return _.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$1(_);
} else {
return thi$ng$geom$core$PPolygonConvert$as_polygon$dyn_46349(_);
}
}));

(thi.ng.geom.core.as_polygon.cljs$core$IFn$_invoke$arity$2 = (function (_,res){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$2 == null)))))){
return _.thi$ng$geom$core$PPolygonConvert$as_polygon$arity$2(_,res);
} else {
return thi$ng$geom$core$PPolygonConvert$as_polygon$dyn_46349(_,res);
}
}));

(thi.ng.geom.core.as_polygon.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.PProximity = function(){};

var thi$ng$geom$core$PProximity$closest_point$dyn_46355 = (function (_,p){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.closest_point[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4429__auto__.call(null,_,p));
} else {
var m__4426__auto__ = (thi.ng.geom.core.closest_point["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4426__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("PProximity.closest-point",_);
}
}
});
thi.ng.geom.core.closest_point = (function thi$ng$geom$core$closest_point(_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PProximity$closest_point$arity$2 == null)))))){
return _.thi$ng$geom$core$PProximity$closest_point$arity$2(_,p);
} else {
return thi$ng$geom$core$PProximity$closest_point$dyn_46355(_,p);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PSample = function(){};

var thi$ng$geom$core$PSample$point_at$dyn_46361 = (function() {
var G__46362 = null;
var G__46362__2 = (function (_,t){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.point_at[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__4429__auto__.call(null,_,t));
} else {
var m__4426__auto__ = (thi.ng.geom.core.point_at["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,t) : m__4426__auto__.call(null,_,t));
} else {
throw cljs.core.missing_protocol("PSample.point-at",_);
}
}
});
var G__46362__3 = (function (_,u,v){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.point_at[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,u,v) : m__4429__auto__.call(null,_,u,v));
} else {
var m__4426__auto__ = (thi.ng.geom.core.point_at["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,u,v) : m__4426__auto__.call(null,_,u,v));
} else {
throw cljs.core.missing_protocol("PSample.point-at",_);
}
}
});
G__46362 = function(_,u,v){
switch(arguments.length){
case 2:
return G__46362__2.call(this,_,u);
case 3:
return G__46362__3.call(this,_,u,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46362.cljs$core$IFn$_invoke$arity$2 = G__46362__2;
G__46362.cljs$core$IFn$_invoke$arity$3 = G__46362__3;
return G__46362;
})()
;
thi.ng.geom.core.point_at = (function thi$ng$geom$core$point_at(var_args){
var G__45665 = arguments.length;
switch (G__45665) {
case 2:
return thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$2 = (function (_,t){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSample$point_at$arity$2 == null)))))){
return _.thi$ng$geom$core$PSample$point_at$arity$2(_,t);
} else {
return thi$ng$geom$core$PSample$point_at$dyn_46361(_,t);
}
}));

(thi.ng.geom.core.point_at.cljs$core$IFn$_invoke$arity$3 = (function (_,u,v){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSample$point_at$arity$3 == null)))))){
return _.thi$ng$geom$core$PSample$point_at$arity$3(_,u,v);
} else {
return thi$ng$geom$core$PSample$point_at$dyn_46361(_,u,v);
}
}));

(thi.ng.geom.core.point_at.cljs$lang$maxFixedArity = 3);


var thi$ng$geom$core$PSample$random_point$dyn_46370 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.random_point[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.random_point["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PSample.random-point",_);
}
}
});
thi.ng.geom.core.random_point = (function thi$ng$geom$core$random_point(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSample$random_point$arity$1 == null)))))){
return _.thi$ng$geom$core$PSample$random_point$arity$1(_);
} else {
return thi$ng$geom$core$PSample$random_point$dyn_46370(_);
}
});

var thi$ng$geom$core$PSample$random_point_inside$dyn_46372 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.random_point_inside[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.random_point_inside["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PSample.random-point-inside",_);
}
}
});
thi.ng.geom.core.random_point_inside = (function thi$ng$geom$core$random_point_inside(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSample$random_point_inside$arity$1 == null)))))){
return _.thi$ng$geom$core$PSample$random_point_inside$arity$1(_);
} else {
return thi$ng$geom$core$PSample$random_point_inside$dyn_46372(_);
}
});

var thi$ng$geom$core$PSample$sample_uniform$dyn_46376 = (function (_,dist,include_last_QMARK_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.sample_uniform[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,dist,include_last_QMARK_) : m__4429__auto__.call(null,_,dist,include_last_QMARK_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.sample_uniform["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,dist,include_last_QMARK_) : m__4426__auto__.call(null,_,dist,include_last_QMARK_));
} else {
throw cljs.core.missing_protocol("PSample.sample-uniform",_);
}
}
});
thi.ng.geom.core.sample_uniform = (function thi$ng$geom$core$sample_uniform(_,dist,include_last_QMARK_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSample$sample_uniform$arity$3 == null)))))){
return _.thi$ng$geom$core$PSample$sample_uniform$arity$3(_,dist,include_last_QMARK_);
} else {
return thi$ng$geom$core$PSample$sample_uniform$dyn_46376(_,dist,include_last_QMARK_);
}
});

var thi$ng$geom$core$PSample$sample_with_resolution$dyn_46377 = (function (_,res){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.sample_with_resolution[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,res) : m__4429__auto__.call(null,_,res));
} else {
var m__4426__auto__ = (thi.ng.geom.core.sample_with_resolution["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,res) : m__4426__auto__.call(null,_,res));
} else {
throw cljs.core.missing_protocol("PSample.sample-with-resolution",_);
}
}
});
thi.ng.geom.core.sample_with_resolution = (function thi$ng$geom$core$sample_with_resolution(_,res){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSample$sample_with_resolution$arity$2 == null)))))){
return _.thi$ng$geom$core$PSample$sample_with_resolution$arity$2(_,res);
} else {
return thi$ng$geom$core$PSample$sample_with_resolution$dyn_46377(_,res);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PSlice = function(){};

var thi$ng$geom$core$PSlice$slice_with$dyn_46380 = (function() {
var G__46381 = null;
var G__46381__2 = (function (_,e){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__4429__auto__.call(null,_,e));
} else {
var m__4426__auto__ = (thi.ng.geom.core.slice_with["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,e) : m__4426__auto__.call(null,_,e));
} else {
throw cljs.core.missing_protocol("PSlice.slice-with",_);
}
}
});
var G__46381__3 = (function (_,e,classifier){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,e,classifier) : m__4429__auto__.call(null,_,e,classifier));
} else {
var m__4426__auto__ = (thi.ng.geom.core.slice_with["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,e,classifier) : m__4426__auto__.call(null,_,e,classifier));
} else {
throw cljs.core.missing_protocol("PSlice.slice-with",_);
}
}
});
var G__46381__4 = (function (_,e,classifier,parts){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.slice_with[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,e,classifier,parts) : m__4429__auto__.call(null,_,e,classifier,parts));
} else {
var m__4426__auto__ = (thi.ng.geom.core.slice_with["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,e,classifier,parts) : m__4426__auto__.call(null,_,e,classifier,parts));
} else {
throw cljs.core.missing_protocol("PSlice.slice-with",_);
}
}
});
G__46381 = function(_,e,classifier,parts){
switch(arguments.length){
case 2:
return G__46381__2.call(this,_,e);
case 3:
return G__46381__3.call(this,_,e,classifier);
case 4:
return G__46381__4.call(this,_,e,classifier,parts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46381.cljs$core$IFn$_invoke$arity$2 = G__46381__2;
G__46381.cljs$core$IFn$_invoke$arity$3 = G__46381__3;
G__46381.cljs$core$IFn$_invoke$arity$4 = G__46381__4;
return G__46381;
})()
;
thi.ng.geom.core.slice_with = (function thi$ng$geom$core$slice_with(var_args){
var G__45688 = arguments.length;
switch (G__45688) {
case 2:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$2 = (function (_,e){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSlice$slice_with$arity$2 == null)))))){
return _.thi$ng$geom$core$PSlice$slice_with$arity$2(_,e);
} else {
return thi$ng$geom$core$PSlice$slice_with$dyn_46380(_,e);
}
}));

(thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$3 = (function (_,e,classifier){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSlice$slice_with$arity$3 == null)))))){
return _.thi$ng$geom$core$PSlice$slice_with$arity$3(_,e,classifier);
} else {
return thi$ng$geom$core$PSlice$slice_with$dyn_46380(_,e,classifier);
}
}));

(thi.ng.geom.core.slice_with.cljs$core$IFn$_invoke$arity$4 = (function (_,e,classifier,parts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSlice$slice_with$arity$4 == null)))))){
return _.thi$ng$geom$core$PSlice$slice_with$arity$4(_,e,classifier,parts);
} else {
return thi$ng$geom$core$PSlice$slice_with$dyn_46380(_,e,classifier,parts);
}
}));

(thi.ng.geom.core.slice_with.cljs$lang$maxFixedArity = 4);



/**
 * @interface
 */
thi.ng.geom.core.PSubdivide = function(){};

var thi$ng$geom$core$PSubdivide$subdivide$dyn_46392 = (function() {
var G__46393 = null;
var G__46393__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.subdivide[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.subdivide["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PSubdivide.subdivide",_);
}
}
});
var G__46393__2 = (function (_,opts){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.subdivide[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4429__auto__.call(null,_,opts));
} else {
var m__4426__auto__ = (thi.ng.geom.core.subdivide["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4426__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("PSubdivide.subdivide",_);
}
}
});
G__46393 = function(_,opts){
switch(arguments.length){
case 1:
return G__46393__1.call(this,_);
case 2:
return G__46393__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46393.cljs$core$IFn$_invoke$arity$1 = G__46393__1;
G__46393.cljs$core$IFn$_invoke$arity$2 = G__46393__2;
return G__46393;
})()
;
thi.ng.geom.core.subdivide = (function thi$ng$geom$core$subdivide(var_args){
var G__45691 = arguments.length;
switch (G__45691) {
case 1:
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSubdivide$subdivide$arity$1 == null)))))){
return _.thi$ng$geom$core$PSubdivide$subdivide$arity$1(_);
} else {
return thi$ng$geom$core$PSubdivide$subdivide$dyn_46392(_);
}
}));

(thi.ng.geom.core.subdivide.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSubdivide$subdivide$arity$2 == null)))))){
return _.thi$ng$geom$core$PSubdivide$subdivide$arity$2(_,opts);
} else {
return thi$ng$geom$core$PSubdivide$subdivide$dyn_46392(_,opts);
}
}));

(thi.ng.geom.core.subdivide.cljs$lang$maxFixedArity = 2);


var thi$ng$geom$core$PSubdivide$subdivide_edge$dyn_46398 = (function (_,a,b,splits){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.subdivide_edge[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,splits) : m__4429__auto__.call(null,_,a,b,splits));
} else {
var m__4426__auto__ = (thi.ng.geom.core.subdivide_edge["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,a,b,splits) : m__4426__auto__.call(null,_,a,b,splits));
} else {
throw cljs.core.missing_protocol("PSubdivide.subdivide-edge",_);
}
}
});
thi.ng.geom.core.subdivide_edge = (function thi$ng$geom$core$subdivide_edge(_,a,b,splits){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSubdivide$subdivide_edge$arity$4 == null)))))){
return _.thi$ng$geom$core$PSubdivide$subdivide_edge$arity$4(_,a,b,splits);
} else {
return thi$ng$geom$core$PSubdivide$subdivide_edge$dyn_46398(_,a,b,splits);
}
});

var thi$ng$geom$core$PSubdivide$subdivide_face$dyn_46405 = (function (_,f,p,displace,splits){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.subdivide_face[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$5(_,f,p,displace,splits) : m__4429__auto__.call(null,_,f,p,displace,splits));
} else {
var m__4426__auto__ = (thi.ng.geom.core.subdivide_face["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$5 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$5(_,f,p,displace,splits) : m__4426__auto__.call(null,_,f,p,displace,splits));
} else {
throw cljs.core.missing_protocol("PSubdivide.subdivide-face",_);
}
}
});
thi.ng.geom.core.subdivide_face = (function thi$ng$geom$core$subdivide_face(_,f,p,displace,splits){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSubdivide$subdivide_face$arity$5 == null)))))){
return _.thi$ng$geom$core$PSubdivide$subdivide_face$arity$5(_,f,p,displace,splits);
} else {
return thi$ng$geom$core$PSubdivide$subdivide_face$dyn_46405(_,f,p,displace,splits);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PTessellate = function(){};

var thi$ng$geom$core$PTessellate$tessellate$dyn_46408 = (function() {
var G__46409 = null;
var G__46409__1 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.tessellate[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.tessellate["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PTessellate.tessellate",_);
}
}
});
var G__46409__2 = (function (_,opts){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.tessellate[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4429__auto__.call(null,_,opts));
} else {
var m__4426__auto__ = (thi.ng.geom.core.tessellate["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,opts) : m__4426__auto__.call(null,_,opts));
} else {
throw cljs.core.missing_protocol("PTessellate.tessellate",_);
}
}
});
G__46409 = function(_,opts){
switch(arguments.length){
case 1:
return G__46409__1.call(this,_);
case 2:
return G__46409__2.call(this,_,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46409.cljs$core$IFn$_invoke$arity$1 = G__46409__1;
G__46409.cljs$core$IFn$_invoke$arity$2 = G__46409__2;
return G__46409;
})()
;
thi.ng.geom.core.tessellate = (function thi$ng$geom$core$tessellate(var_args){
var G__45693 = arguments.length;
switch (G__45693) {
case 1:
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PTessellate$tessellate$arity$1 == null)))))){
return _.thi$ng$geom$core$PTessellate$tessellate$arity$1(_);
} else {
return thi$ng$geom$core$PTessellate$tessellate$dyn_46408(_);
}
}));

(thi.ng.geom.core.tessellate.cljs$core$IFn$_invoke$arity$2 = (function (_,opts){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PTessellate$tessellate$arity$2 == null)))))){
return _.thi$ng$geom$core$PTessellate$tessellate$arity$2(_,opts);
} else {
return thi$ng$geom$core$PTessellate$tessellate$dyn_46408(_,opts);
}
}));

(thi.ng.geom.core.tessellate.cljs$lang$maxFixedArity = 2);



/**
 * @interface
 */
thi.ng.geom.core.PVolume = function(){};

var thi$ng$geom$core$PVolume$volume$dyn_46420 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.volume[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.volume["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PVolume.volume",_);
}
}
});
/**
 * Returns an entity's inner volume.
 */
thi.ng.geom.core.volume = (function thi$ng$geom$core$volume(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PVolume$volume$arity$1 == null)))))){
return _.thi$ng$geom$core$PVolume$volume$arity$1(_);
} else {
return thi$ng$geom$core$PVolume$volume$dyn_46420(_);
}
});

var thi$ng$geom$core$PVolume$signed_volume$dyn_46422 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.signed_volume[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.signed_volume["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PVolume.signed-volume",_);
}
}
});
thi.ng.geom.core.signed_volume = (function thi$ng$geom$core$signed_volume(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PVolume$signed_volume$arity$1 == null)))))){
return _.thi$ng$geom$core$PVolume$signed_volume$arity$1(_);
} else {
return thi$ng$geom$core$PVolume$signed_volume$dyn_46422(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PVectorReduce = function(){};

var thi$ng$geom$core$PVectorReduce$reduce_vector$dyn_46429 = (function() {
var G__46432 = null;
var G__46432__3 = (function (_,f,xs){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.reduce_vector[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,f,xs) : m__4429__auto__.call(null,_,f,xs));
} else {
var m__4426__auto__ = (thi.ng.geom.core.reduce_vector["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,f,xs) : m__4426__auto__.call(null,_,f,xs));
} else {
throw cljs.core.missing_protocol("PVectorReduce.reduce-vector",_);
}
}
});
var G__46432__4 = (function (_,f,f2,xs){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.reduce_vector[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,f,f2,xs) : m__4429__auto__.call(null,_,f,f2,xs));
} else {
var m__4426__auto__ = (thi.ng.geom.core.reduce_vector["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,f,f2,xs) : m__4426__auto__.call(null,_,f,f2,xs));
} else {
throw cljs.core.missing_protocol("PVectorReduce.reduce-vector",_);
}
}
});
G__46432 = function(_,f,f2,xs){
switch(arguments.length){
case 3:
return G__46432__3.call(this,_,f,f2);
case 4:
return G__46432__4.call(this,_,f,f2,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46432.cljs$core$IFn$_invoke$arity$3 = G__46432__3;
G__46432.cljs$core$IFn$_invoke$arity$4 = G__46432__4;
return G__46432;
})()
;
thi.ng.geom.core.reduce_vector = (function thi$ng$geom$core$reduce_vector(var_args){
var G__45695 = arguments.length;
switch (G__45695) {
case 3:
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$3 = (function (_,f,xs){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3 == null)))))){
return _.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$3(_,f,xs);
} else {
return thi$ng$geom$core$PVectorReduce$reduce_vector$dyn_46429(_,f,xs);
}
}));

(thi.ng.geom.core.reduce_vector.cljs$core$IFn$_invoke$arity$4 = (function (_,f,f2,xs){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4 == null)))))){
return _.thi$ng$geom$core$PVectorReduce$reduce_vector$arity$4(_,f,f2,xs);
} else {
return thi$ng$geom$core$PVectorReduce$reduce_vector$dyn_46429(_,f,f2,xs);
}
}));

(thi.ng.geom.core.reduce_vector.cljs$lang$maxFixedArity = 4);



/**
 * @interface
 */
thi.ng.geom.core.PSpatialTree = function(){};

var thi$ng$geom$core$PSpatialTree$add_point$dyn_46447 = (function (_,p,d){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.add_point[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,p,d) : m__4429__auto__.call(null,_,p,d));
} else {
var m__4426__auto__ = (thi.ng.geom.core.add_point["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,p,d) : m__4426__auto__.call(null,_,p,d));
} else {
throw cljs.core.missing_protocol("PSpatialTree.add-point",_);
}
}
});
thi.ng.geom.core.add_point = (function thi$ng$geom$core$add_point(_,p,d){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSpatialTree$add_point$arity$3 == null)))))){
return _.thi$ng$geom$core$PSpatialTree$add_point$arity$3(_,p,d);
} else {
return thi$ng$geom$core$PSpatialTree$add_point$dyn_46447(_,p,d);
}
});

var thi$ng$geom$core$PSpatialTree$delete_point$dyn_46453 = (function (_,p){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.delete_point[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4429__auto__.call(null,_,p));
} else {
var m__4426__auto__ = (thi.ng.geom.core.delete_point["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,p) : m__4426__auto__.call(null,_,p));
} else {
throw cljs.core.missing_protocol("PSpatialTree.delete-point",_);
}
}
});
thi.ng.geom.core.delete_point = (function thi$ng$geom$core$delete_point(_,p){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSpatialTree$delete_point$arity$2 == null)))))){
return _.thi$ng$geom$core$PSpatialTree$delete_point$arity$2(_,p);
} else {
return thi$ng$geom$core$PSpatialTree$delete_point$dyn_46453(_,p);
}
});

var thi$ng$geom$core$PSpatialTree$get_point$dyn_46466 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.get_point[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.get_point["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PSpatialTree.get-point",_);
}
}
});
thi.ng.geom.core.get_point = (function thi$ng$geom$core$get_point(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSpatialTree$get_point$arity$1 == null)))))){
return _.thi$ng$geom$core$PSpatialTree$get_point$arity$1(_);
} else {
return thi$ng$geom$core$PSpatialTree$get_point$dyn_46466(_);
}
});

var thi$ng$geom$core$PSpatialTree$get_point_data$dyn_46468 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.get_point_data[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.get_point_data["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PSpatialTree.get-point-data",_);
}
}
});
thi.ng.geom.core.get_point_data = (function thi$ng$geom$core$get_point_data(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PSpatialTree$get_point_data$arity$1 == null)))))){
return _.thi$ng$geom$core$PSpatialTree$get_point_data$arity$1(_);
} else {
return thi$ng$geom$core$PSpatialTree$get_point_data$dyn_46468(_);
}
});


/**
 * @interface
 */
thi.ng.geom.core.PBuffered = function(){};

var thi$ng$geom$core$PBuffered$get_buffer$dyn_46482 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.get_buffer[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.geom.core.get_buffer["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("PBuffered.get-buffer",_);
}
}
});
thi.ng.geom.core.get_buffer = (function thi$ng$geom$core$get_buffer(_){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PBuffered$get_buffer$arity$1 == null)))))){
return _.thi$ng$geom$core$PBuffered$get_buffer$arity$1(_);
} else {
return thi$ng$geom$core$PBuffered$get_buffer$dyn_46482(_);
}
});

var thi$ng$geom$core$PBuffered$copy_to_buffer$dyn_46483 = (function (_,dest,stride,idx){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.geom.core.copy_to_buffer[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(_,dest,stride,idx) : m__4429__auto__.call(null,_,dest,stride,idx));
} else {
var m__4426__auto__ = (thi.ng.geom.core.copy_to_buffer["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(_,dest,stride,idx) : m__4426__auto__.call(null,_,dest,stride,idx));
} else {
throw cljs.core.missing_protocol("PBuffered.copy-to-buffer",_);
}
}
});
thi.ng.geom.core.copy_to_buffer = (function thi$ng$geom$core$copy_to_buffer(_,dest,stride,idx){
if((((!((_ == null)))) && ((!((_.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4 == null)))))){
return _.thi$ng$geom$core$PBuffered$copy_to_buffer$arity$4(_,dest,stride,idx);
} else {
return thi$ng$geom$core$PBuffered$copy_to_buffer$dyn_46483(_,dest,stride,idx);
}
});


//# sourceMappingURL=thi.ng.geom.core.js.map
