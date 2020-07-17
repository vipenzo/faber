goog.provide('thi.ng.color.core');







thi.ng.color.core.THIRD = (1.0 / (3));
thi.ng.color.core.TWO_THIRD = (2.0 / (3));
thi.ng.color.core.SIXTH = (1.0 / (6));
thi.ng.color.core.INV8BIT = (1.0 / (255));
thi.ng.color.core.hex6 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#",thi.ng.strf.core.hex((6))], null);
thi.ng.color.core.ns_prefix = "#thi.ng.color.core.";

/**
 * @interface
 */
thi.ng.color.core.IRGBConvert = function(){};

var thi$ng$color$core$IRGBConvert$as_rgba$dyn_46647 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.as_rgba[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.as_rgba["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IRGBConvert.as-rgba",_);
}
}
});
thi.ng.color.core.as_rgba = (function thi$ng$color$core$as_rgba(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 == null)))))){
return _.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(_);
} else {
return thi$ng$color$core$IRGBConvert$as_rgba$dyn_46647(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSVConvert = function(){};

var thi$ng$color$core$IHSVConvert$as_hsva$dyn_46648 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.as_hsva[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.as_hsva["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHSVConvert.as-hsva",_);
}
}
});
thi.ng.color.core.as_hsva = (function thi$ng$color$core$as_hsva(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 == null)))))){
return _.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(_);
} else {
return thi$ng$color$core$IHSVConvert$as_hsva$dyn_46648(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IHSLConvert = function(){};

var thi$ng$color$core$IHSLConvert$as_hsla$dyn_46662 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.as_hsla[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.as_hsla["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IHSLConvert.as-hsla",_);
}
}
});
thi.ng.color.core.as_hsla = (function thi$ng$color$core$as_hsla(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 == null)))))){
return _.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(_);
} else {
return thi$ng$color$core$IHSLConvert$as_hsla$dyn_46662(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.ICMYKConvert = function(){};

var thi$ng$color$core$ICMYKConvert$as_cmyka$dyn_46663 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.as_cmyka[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.as_cmyka["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICMYKConvert.as-cmyka",_);
}
}
});
thi.ng.color.core.as_cmyka = (function thi$ng$color$core$as_cmyka(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 == null)))))){
return _.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(_);
} else {
return thi$ng$color$core$ICMYKConvert$as_cmyka$dyn_46663(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.ICSSConvert = function(){};

var thi$ng$color$core$ICSSConvert$as_css$dyn_46677 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.as_css[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.as_css["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ICSSConvert.as-css",_);
}
}
});
thi.ng.color.core.as_css = (function thi$ng$color$core$as_css(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$ICSSConvert$as_css$arity$1 == null)))))){
return _.thi$ng$color$core$ICSSConvert$as_css$arity$1(_);
} else {
return thi$ng$color$core$ICSSConvert$as_css$dyn_46677(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IIntConvert = function(){};

var thi$ng$color$core$IIntConvert$as_int24$dyn_46678 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.as_int24[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.as_int24["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IIntConvert.as-int24",_);
}
}
});
thi.ng.color.core.as_int24 = (function thi$ng$color$core$as_int24(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IIntConvert$as_int24$arity$1 == null)))))){
return _.thi$ng$color$core$IIntConvert$as_int24$arity$1(_);
} else {
return thi$ng$color$core$IIntConvert$as_int24$dyn_46678(_);
}
});

var thi$ng$color$core$IIntConvert$as_int32$dyn_46680 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.as_int32[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.as_int32["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IIntConvert.as-int32",_);
}
}
});
thi.ng.color.core.as_int32 = (function thi$ng$color$core$as_int32(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IIntConvert$as_int32$arity$1 == null)))))){
return _.thi$ng$color$core$IIntConvert$as_int32$arity$1(_);
} else {
return thi$ng$color$core$IIntConvert$as_int32$dyn_46680(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorComponents = function(){};

var thi$ng$color$core$IColorComponents$red$dyn_46683 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.red[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.red["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.red",_);
}
}
});
thi.ng.color.core.red = (function thi$ng$color$core$red(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$red$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$red$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$red$dyn_46683(_);
}
});

var thi$ng$color$core$IColorComponents$green$dyn_46698 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.green[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.green["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.green",_);
}
}
});
thi.ng.color.core.green = (function thi$ng$color$core$green(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$green$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$green$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$green$dyn_46698(_);
}
});

var thi$ng$color$core$IColorComponents$blue$dyn_46699 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.blue[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.blue["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.blue",_);
}
}
});
thi.ng.color.core.blue = (function thi$ng$color$core$blue(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$blue$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$blue$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$blue$dyn_46699(_);
}
});

var thi$ng$color$core$IColorComponents$alpha$dyn_46700 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.alpha[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.alpha["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.alpha",_);
}
}
});
thi.ng.color.core.alpha = (function thi$ng$color$core$alpha(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$alpha$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$alpha$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$alpha$dyn_46700(_);
}
});

var thi$ng$color$core$IColorComponents$hue$dyn_46703 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.hue[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.hue["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.hue",_);
}
}
});
thi.ng.color.core.hue = (function thi$ng$color$core$hue(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$hue$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$hue$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$hue$dyn_46703(_);
}
});

var thi$ng$color$core$IColorComponents$saturation$dyn_46718 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.saturation[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.saturation["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.saturation",_);
}
}
});
thi.ng.color.core.saturation = (function thi$ng$color$core$saturation(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$saturation$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$saturation$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$saturation$dyn_46718(_);
}
});

var thi$ng$color$core$IColorComponents$brightness$dyn_46719 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.brightness[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.brightness["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.brightness",_);
}
}
});
thi.ng.color.core.brightness = (function thi$ng$color$core$brightness(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$brightness$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$brightness$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$brightness$dyn_46719(_);
}
});

var thi$ng$color$core$IColorComponents$luminance$dyn_46720 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.luminance[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.luminance["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.luminance",_);
}
}
});
thi.ng.color.core.luminance = (function thi$ng$color$core$luminance(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$luminance$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$luminance$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$luminance$dyn_46720(_);
}
});

var thi$ng$color$core$IColorComponents$cyan$dyn_46721 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.cyan[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.cyan["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.cyan",_);
}
}
});
thi.ng.color.core.cyan = (function thi$ng$color$core$cyan(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$cyan$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$cyan$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$cyan$dyn_46721(_);
}
});

var thi$ng$color$core$IColorComponents$magenta$dyn_46725 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.magenta[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.magenta["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.magenta",_);
}
}
});
thi.ng.color.core.magenta = (function thi$ng$color$core$magenta(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$magenta$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$magenta$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$magenta$dyn_46725(_);
}
});

var thi$ng$color$core$IColorComponents$yellow$dyn_46739 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.yellow[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.yellow["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.yellow",_);
}
}
});
thi.ng.color.core.yellow = (function thi$ng$color$core$yellow(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$yellow$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$yellow$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$yellow$dyn_46739(_);
}
});

var thi$ng$color$core$IColorComponents$black$dyn_46740 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.black[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.black["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorComponents.black",_);
}
}
});
thi.ng.color.core.black = (function thi$ng$color$core$black(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorComponents$black$arity$1 == null)))))){
return _.thi$ng$color$core$IColorComponents$black$arity$1(_);
} else {
return thi$ng$color$core$IColorComponents$black$dyn_46740(_);
}
});


/**
 * @interface
 */
thi.ng.color.core.IColorOps = function(){};

var thi$ng$color$core$IColorOps$rotate_hue$dyn_46741 = (function (_,theta){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.rotate_hue[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,theta) : m__4429__auto__.call(null,_,theta));
} else {
var m__4426__auto__ = (thi.ng.color.core.rotate_hue["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,theta) : m__4426__auto__.call(null,_,theta));
} else {
throw cljs.core.missing_protocol("IColorOps.rotate-hue",_);
}
}
});
thi.ng.color.core.rotate_hue = (function thi$ng$color$core$rotate_hue(_,theta){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$rotate_hue$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$rotate_hue$arity$2(_,theta);
} else {
return thi$ng$color$core$IColorOps$rotate_hue$dyn_46741(_,theta);
}
});

var thi$ng$color$core$IColorOps$adjust_saturation$dyn_46742 = (function (_,offset){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.adjust_saturation[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4429__auto__.call(null,_,offset));
} else {
var m__4426__auto__ = (thi.ng.color.core.adjust_saturation["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4426__auto__.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-saturation",_);
}
}
});
thi.ng.color.core.adjust_saturation = (function thi$ng$color$core$adjust_saturation(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_saturation$arity$2(_,offset);
} else {
return thi$ng$color$core$IColorOps$adjust_saturation$dyn_46742(_,offset);
}
});

var thi$ng$color$core$IColorOps$adjust_brightness$dyn_46745 = (function (_,offset){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.adjust_brightness[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4429__auto__.call(null,_,offset));
} else {
var m__4426__auto__ = (thi.ng.color.core.adjust_brightness["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4426__auto__.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-brightness",_);
}
}
});
thi.ng.color.core.adjust_brightness = (function thi$ng$color$core$adjust_brightness(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_brightness$arity$2(_,offset);
} else {
return thi$ng$color$core$IColorOps$adjust_brightness$dyn_46745(_,offset);
}
});

var thi$ng$color$core$IColorOps$adjust_alpha$dyn_46760 = (function (_,offset){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.adjust_alpha[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4429__auto__.call(null,_,offset));
} else {
var m__4426__auto__ = (thi.ng.color.core.adjust_alpha["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(_,offset) : m__4426__auto__.call(null,_,offset));
} else {
throw cljs.core.missing_protocol("IColorOps.adjust-alpha",_);
}
}
});
thi.ng.color.core.adjust_alpha = (function thi$ng$color$core$adjust_alpha(_,offset){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 == null)))))){
return _.thi$ng$color$core$IColorOps$adjust_alpha$arity$2(_,offset);
} else {
return thi$ng$color$core$IColorOps$adjust_alpha$dyn_46760(_,offset);
}
});

var thi$ng$color$core$IColorOps$invert$dyn_46761 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.invert[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (thi.ng.color.core.invert["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IColorOps.invert",_);
}
}
});
thi.ng.color.core.invert = (function thi$ng$color$core$invert(_){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$invert$arity$1 == null)))))){
return _.thi$ng$color$core$IColorOps$invert$arity$1(_);
} else {
return thi$ng$color$core$IColorOps$invert$dyn_46761(_);
}
});

var thi$ng$color$core$IColorOps$blend$dyn_46762 = (function (_,dest,t){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (thi.ng.color.core.blend[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(_,dest,t) : m__4429__auto__.call(null,_,dest,t));
} else {
var m__4426__auto__ = (thi.ng.color.core.blend["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(_,dest,t) : m__4426__auto__.call(null,_,dest,t));
} else {
throw cljs.core.missing_protocol("IColorOps.blend",_);
}
}
});
thi.ng.color.core.blend = (function thi$ng$color$core$blend(_,dest,t){
if((((!((_ == null)))) && ((!((_.thi$ng$color$core$IColorOps$blend$arity$3 == null)))))){
return _.thi$ng$color$core$IColorOps$blend$arity$3(_,dest,t);
} else {
return thi$ng$color$core$IColorOps$blend$dyn_46762(_,dest,t);
}
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.RGBA = (function (r,g,b,a){
this.r = r;
this.g = g;
this.b = b;
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(thi.ng.color.core.RGBA.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [thi.ng.color.core.ns_prefix,"RGBA [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.r)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.g)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.b)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.a),"]"].join('');
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__45763 = ((((((self__.r * (255)) + 0.5) | (0)) << (16)) | ((((self__.g * (255)) + 0.5) | (0)) << (8))) | (((self__.b * (255)) + 0.5) | (0)));
return (thi.ng.color.core.int24.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.int24.cljs$core$IFn$_invoke$arity$1(G__45763) : thi.ng.color.core.int24.call(null,G__45763));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__45771 = (((((((self__.r * (255)) + 0.5) | (0)) << (16)) | ((((self__.g * (255)) + 0.5) | (0)) << (8))) | (((self__.b * (255)) + 0.5) | (0))) | ((((self__.a * (255)) + 0.5) | (0)) << (24)));
return (thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1(G__45771) : thi.ng.color.core.int32.call(null,G__45771));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_rgba(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA(self__.r,self__.g,self__.b,thi.ng.math.core.clamp((self__.a + offset),0.0,1.0)));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - self__.r),(1.0 - self__.g),(1.0 - self__.b),self__.a));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((function (){var a__45296__auto__ = self__.r;
return (((thi.ng.color.core.red(dest) - a__45296__auto__) * t) + a__45296__auto__);
})(),(function (){var a__45296__auto__ = self__.g;
return (((thi.ng.color.core.green(dest) - a__45296__auto__) * t) + a__45296__auto__);
})(),(function (){var a__45296__auto__ = self__.b;
return (((thi.ng.color.core.blue(dest) - a__45296__auto__) * t) + a__45296__auto__);
})(),(function (){var a__45296__auto__ = self__.a;
return (((thi.ng.color.core.alpha(dest) - a__45296__auto__) * t) + a__45296__auto__);
})()));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if((self__.a < 1.0)){
var r__$1 = ((255) * self__.r);
var g__$1 = ((255) * self__.g);
var b__$1 = ((255) * self__.b);
var G__45813 = ["rgba(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((r__$1 | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((g__$1 | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((b__$1 | (0))),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var x__4214__auto__ = 0.0;
var y__4215__auto__ = self__.a;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()),")"].join('');
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__45813) : thi.ng.color.core.css.call(null,G__45813));
} else {
return thi.ng.color.core.as_css(___$1.thi$ng$color$core$IIntConvert$as_int24$arity$1(null));
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = (function (){var x__4214__auto__ = (function (){var x__4214__auto__ = self__.r;
var y__4215__auto__ = self__.g;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = self__.b;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,v))){
return 0.0;
} else {
return ((v - (function (){var x__4217__auto__ = (function (){var x__4217__auto__ = self__.r;
var y__4218__auto__ = self__.g;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var y__4218__auto__ = self__.b;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()) / v);
}
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.g;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var x__4214__auto__ = (function (){var x__4214__auto__ = self__.r;
var y__4215__auto__ = self__.g;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = self__.b;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (((0.299 * self__.r) + (0.587 * self__.g)) + (0.114 * self__.b));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.r;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.b;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = (function (){var x__4214__auto__ = (function (){var x__4214__auto__ = self__.r;
var y__4215__auto__ = self__.g;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = self__.b;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var d = (v - (function (){var x__4217__auto__ = (function (){var x__4217__auto__ = self__.r;
var y__4218__auto__ = self__.g;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var y__4218__auto__ = self__.b;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
var s = (cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,v))?0.0:(d / v));
var h = (cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,s))?0.0:(function (){var pred__45868 = cljs.core._EQ__EQ_;
var expr__45869 = v;
if(cljs.core.truth_((pred__45868.cljs$core$IFn$_invoke$arity$2 ? pred__45868.cljs$core$IFn$_invoke$arity$2(self__.r,expr__45869) : pred__45868.call(null,self__.r,expr__45869)))){
return ((self__.g - self__.b) / d);
} else {
if(cljs.core.truth_((pred__45868.cljs$core$IFn$_invoke$arity$2 ? pred__45868.cljs$core$IFn$_invoke$arity$2(self__.g,expr__45869) : pred__45868.call(null,self__.g,expr__45869)))){
return (2.0 + ((self__.b - self__.r) / d));
} else {
return (4.0 + ((self__.r - self__.g) / d));
}
}
})());
var h__$1 = (h / 6.0);
var G__45877 = (((h__$1 < (0)))?(h__$1 + (1)):h__$1);
var G__45878 = s;
var G__45879 = v;
var G__45880 = self__.a;
return (thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4(G__45877,G__45878,G__45879,G__45880) : thi.ng.color.core.hsva.call(null,G__45877,G__45878,G__45879,G__45880));
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (1.0 - self__.r);
var m = (1.0 - self__.g);
var y = (1.0 - self__.b);
var k = (function (){var x__4217__auto__ = (function (){var x__4217__auto__ = c;
var y__4218__auto__ = m;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var y__4218__auto__ = y;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var G__45888 = (function (){var x__4214__auto__ = (c - k);
var y__4215__auto__ = 0.0;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var G__45889 = (function (){var x__4214__auto__ = (m - k);
var y__4215__auto__ = 0.0;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var G__45890 = (function (){var x__4214__auto__ = (y - k);
var y__4215__auto__ = 0.0;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var G__45891 = (function (){var x__4214__auto__ = k;
var y__4215__auto__ = 0.0;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return (thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4(G__45888,G__45889,G__45890,G__45891) : thi.ng.color.core.cmyka.call(null,G__45888,G__45889,G__45890,G__45891));
}));

(thi.ng.color.core.RGBA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.r,self__.g,self__.b,self__.a], null);
}));

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.RGBA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var f1 = (function (){var x__4217__auto__ = (function (){var x__4217__auto__ = self__.r;
var y__4218__auto__ = self__.g;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var y__4218__auto__ = self__.b;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var f2 = (function (){var x__4214__auto__ = (function (){var x__4214__auto__ = self__.r;
var y__4215__auto__ = self__.g;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var y__4215__auto__ = self__.b;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var l = ((f1 + f2) * 0.5);
var d = (f2 - f1);
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,d))){
return (thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4(0.0,0.0,l,self__.a) : thi.ng.color.core.hsla.call(null,0.0,0.0,l,self__.a));
} else {
var s = (((l < 0.5))?(d / (f1 + f2)):(d / ((2.0 - f2) - f1)));
var d2 = (0.5 * d);
var dr = ((((f2 - self__.r) * thi.ng.color.core.SIXTH) + d2) / d);
var dg = ((((f2 - self__.g) * thi.ng.color.core.SIXTH) + d2) / d);
var db = ((((f2 - self__.b) * thi.ng.color.core.SIXTH) + d2) / d);
var h = (function (){var pred__45921 = cljs.core._EQ__EQ_;
var expr__45922 = f2;
if(cljs.core.truth_((pred__45921.cljs$core$IFn$_invoke$arity$2 ? pred__45921.cljs$core$IFn$_invoke$arity$2(self__.r,expr__45922) : pred__45921.call(null,self__.r,expr__45922)))){
return (db - dg);
} else {
if(cljs.core.truth_((pred__45921.cljs$core$IFn$_invoke$arity$2 ? pred__45921.cljs$core$IFn$_invoke$arity$2(self__.g,expr__45922) : pred__45921.call(null,self__.g,expr__45922)))){
return ((thi.ng.color.core.THIRD + dr) - db);
} else {
return ((thi.ng.color.core.TWO_THIRD + dg) - dr);
}
}
})();
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
return (thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4(h__$1,s,l,self__.a) : thi.ng.color.core.hsla.call(null,h__$1,s,l,self__.a));
}
}));

(thi.ng.color.core.RGBA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"r","r",1169147337,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"g","g",-916345864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.RGBA.cljs$lang$type = true);

(thi.ng.color.core.RGBA.cljs$lang$ctorStr = "thi.ng.color.core/RGBA");

(thi.ng.color.core.RGBA.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"thi.ng.color.core/RGBA");
}));

/**
 * Positional factory function for thi.ng.color.core/RGBA.
 */
thi.ng.color.core.__GT_RGBA = (function thi$ng$color$core$__GT_RGBA(r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.Int24 = (function (col){
this.col = col;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(thi.ng.color.core.Int24.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [thi.ng.color.core.ns_prefix,"Int24 [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.col),"]"].join('');
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__45941 = (self__.col | (4278190080));
return (thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1(G__45941) : thi.ng.color.core.int32.call(null,G__45941));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.adjust_alpha(___$1.thi$ng$color$core$IIntConvert$as_int32$arity$1(null),offset);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col ^ (16777215))));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
return (new thi.ng.color.core.Int24((((((function (){var a__45296__auto__ = r;
return (((((thi.ng.color.core.red(dest) * (255)) + 0.5) - a__45296__auto__) * t) + a__45296__auto__);
})() | (0)) << (16)) | (((function (){var a__45296__auto__ = g;
return (((((thi.ng.color.core.green(dest) * (255)) + 0.5) - a__45296__auto__) * t) + a__45296__auto__);
})() | (0)) << (8))) | ((function (){var a__45296__auto__ = b;
return (((((thi.ng.color.core.blue(dest) * (255)) + 0.5) - a__45296__auto__) * t) + a__45296__auto__);
})() | (0)))));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__45955 = thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(thi.ng.color.core.hex6,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(self__.col & (16777215))], 0));
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__45955) : thi.ng.color.core.css.call(null,G__45955));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * ((self__.col >> (8)) & (255)));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * ((self__.col >> (16)) & (255)));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * (self__.col & (255)));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (1);
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.color.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.color.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.color.core.INV8BIT * (self__.col & (255))),1.0));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int24.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int24.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
}));

(thi.ng.color.core.Int24.cljs$lang$type = true);

(thi.ng.color.core.Int24.cljs$lang$ctorStr = "thi.ng.color.core/Int24");

(thi.ng.color.core.Int24.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"thi.ng.color.core/Int24");
}));

/**
 * Positional factory function for thi.ng.color.core/Int24.
 */
thi.ng.color.core.__GT_Int24 = (function thi$ng$color$core$__GT_Int24(col){
return (new thi.ng.color.core.Int24(col));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.Int32 = (function (col){
this.col = col;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(thi.ng.color.core.Int32.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [thi.ng.color.core.ns_prefix,"Int32 [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.col),"]"].join('');
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int24((self__.col & (16777215))));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var a = (thi.ng.color.core.INV8BIT * ((self__.col >>> (24)) & (255)));
var a__$1 = (((255) * thi.ng.math.core.clamp((a + offset),0.0,1.0)) | (0));
return (new thi.ng.color.core.Int32(((self__.col & (16777215)) | (a__$1 << (24)))));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.Int32((self__.col ^ (16777215))));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var r = ((self__.col >> (16)) & (255));
var g = ((self__.col >> (8)) & (255));
var b = (self__.col & (255));
var a = (self__.col >>> (24));
return (new thi.ng.color.core.Int32(((((((function (){var a__45296__auto__ = r;
return (((((thi.ng.color.core.red(dest) * (255)) + 0.5) - a__45296__auto__) * t) + a__45296__auto__);
})() | (0)) << (16)) | (((function (){var a__45296__auto__ = g;
return (((((thi.ng.color.core.green(dest) * (255)) + 0.5) - a__45296__auto__) * t) + a__45296__auto__);
})() | (0)) << (8))) | ((function (){var a__45296__auto__ = b;
return (((((thi.ng.color.core.blue(dest) * (255)) + 0.5) - a__45296__auto__) * t) + a__45296__auto__);
})() | (0))) | (((function (){var a__45296__auto__ = a;
return (((((thi.ng.color.core.alpha(dest) * (255)) + 0.5) - a__45296__auto__) * t) + a__45296__auto__);
})() | (0)) << (24)))));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(((4278190080) === (self__.col & (4278190080)))){
var G__46018 = thi.ng.strf.core.format.cljs$core$IFn$_invoke$arity$variadic(thi.ng.color.core.hex6,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(self__.col & (16777215))], 0));
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__46018) : thi.ng.color.core.css.call(null,G__46018));
} else {
return thi.ng.color.core.as_css(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * ((self__.col >> (8)) & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * ((self__.col >> (16)) & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * (self__.col & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (thi.ng.color.core.INV8BIT * ((self__.col >>> (24)) & (255)));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((thi.ng.color.core.INV8BIT * ((self__.col >> (16)) & (255))),(thi.ng.color.core.INV8BIT * ((self__.col >> (8)) & (255))),(thi.ng.color.core.INV8BIT * (self__.col & (255))),(thi.ng.color.core.INV8BIT * ((self__.col >>> (24)) & (255)))));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.Int32.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.Int32.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"col","col",-318831557,null)], null);
}));

(thi.ng.color.core.Int32.cljs$lang$type = true);

(thi.ng.color.core.Int32.cljs$lang$ctorStr = "thi.ng.color.core/Int32");

(thi.ng.color.core.Int32.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"thi.ng.color.core/Int32");
}));

/**
 * Positional factory function for thi.ng.color.core/Int32.
 */
thi.ng.color.core.__GT_Int32 = (function thi$ng$color$core$__GT_Int32(col){
return (new thi.ng.color.core.Int32(col));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.HSVA = (function (h,s,v,a){
this.h = h;
this.s = s;
this.v = v;
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(thi.ng.color.core.HSVA.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [thi.ng.color.core.ns_prefix,"HSVA [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.h)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.s)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.v)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.a),"]"].join('');
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem(theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSVA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.v,self__.a));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,thi.ng.math.core.clamp((offset + self__.s),0.0,1.0),self__.v,self__.a));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,thi.ng.math.core.clamp((offset + self__.v),0.0,1.0),self__.a));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(self__.h,self__.s,self__.v,thi.ng.math.core.clamp((offset + self__.a),0.0,1.0)));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSVA(cljs.core.mod((0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.v),self__.a));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var vec__46064 = cljs.core.deref(thi.ng.color.core.as_hsva(dest));
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46064,(0),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46064,(1),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46064,(2),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46064,(3),null);
var hd = thi.ng.math.core.abs_diff(self__.h,h2);
return (new thi.ng.color.core.HSVA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem((function (){var a__45296__auto__ = (self__.h + (1));
return (((h2 - a__45296__auto__) * t) + a__45296__auto__);
})(),1.0):cljs.core.rem((function (){var a__45296__auto__ = self__.h;
return ((((h2 + (1)) - a__45296__auto__) * t) + a__45296__auto__);
})(),1.0)):(function (){var a__45296__auto__ = self__.h;
return (((h2 - a__45296__auto__) * t) + a__45296__auto__);
})()),(function (){var a__45296__auto__ = self__.s;
return (((s2 - a__45296__auto__) * t) + a__45296__auto__);
})(),(function (){var a__45296__auto__ = self__.v;
return (((v2 - a__45296__auto__) * t) + a__45296__auto__);
})(),(function (){var a__45296__auto__ = self__.a;
return (((a2 - a__45296__auto__) * t) + a__45296__auto__);
})()));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.as_hsla(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null)));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.v;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.v,self__.v,self__.v,self__.a));
} else {
var h__$1 = cljs.core.rem((self__.h * 6.0),6.0);
var i = (h__$1 | (0));
var f = (h__$1 - i);
var p = (self__.v * (1.0 - self__.s));
var q = (self__.v * (1.0 - (self__.s * f)));
var t = (self__.v * (1.0 - ((1.0 - f) * self__.s)));
var G__46090 = i;
switch (G__46090) {
case (0):
return (new thi.ng.color.core.RGBA(self__.v,t,p,self__.a));

break;
case (1):
return (new thi.ng.color.core.RGBA(q,self__.v,p,self__.a));

break;
case (2):
return (new thi.ng.color.core.RGBA(p,self__.v,t,self__.a));

break;
case (3):
return (new thi.ng.color.core.RGBA(p,q,self__.v,self__.a));

break;
case (4):
return (new thi.ng.color.core.RGBA(t,p,self__.v,self__.a));

break;
default:
return (new thi.ng.color.core.RGBA(self__.v,p,q,self__.a));

}
}
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSVA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.v,self__.a], null);
}));

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSVA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l = (((2) - self__.s) * (self__.v * 0.5));
var s_SINGLEQUOTE_ = ((self__.s * self__.v) / ((1) - (function (){var G__46094 = (((2) * l) - (1));
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__46094) : thi.ng.math.core.abs.call(null,G__46094));
})()));
return (thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 ? thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4(self__.h,s_SINGLEQUOTE_,l,self__.a) : thi.ng.color.core.hsla.call(null,self__.h,s_SINGLEQUOTE_,l,self__.a));
}));

(thi.ng.color.core.HSVA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.HSVA.cljs$lang$type = true);

(thi.ng.color.core.HSVA.cljs$lang$ctorStr = "thi.ng.color.core/HSVA");

(thi.ng.color.core.HSVA.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"thi.ng.color.core/HSVA");
}));

/**
 * Positional factory function for thi.ng.color.core/HSVA.
 */
thi.ng.color.core.__GT_HSVA = (function thi$ng$color$core$__GT_HSVA(h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.HSLA = (function (h,s,l,a){
this.h = h;
this.s = s;
this.l = l;
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(thi.ng.color.core.HSLA.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [thi.ng.color.core.ns_prefix,"HSLA [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.h)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.s)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.l)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.a),"]"].join('');
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var h__$1 = (self__.h + (cljs.core.rem(theta,thi.ng.math.core.TWO_PI) / thi.ng.math.core.TWO_PI));
return (new thi.ng.color.core.HSLA((((h__$1 < (0)))?(h__$1 + (1)):(((h__$1 >= 1.0))?(h__$1 - (1)):h__$1)),self__.s,self__.l,self__.a));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,thi.ng.math.core.clamp((offset + self__.s),0.0,1.0),self__.l,self__.a));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(self__.h,self__.s,self__.l,thi.ng.math.core.clamp((offset + self__.a),0.0,1.0)));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.HSLA(cljs.core.mod((0.5 + self__.h),1.0),(1.0 - self__.s),(1.0 - self__.l),self__.a));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var vec__46117 = cljs.core.deref(thi.ng.color.core.as_hsla(dest));
var h2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46117,(0),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46117,(1),null);
var l2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46117,(2),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46117,(3),null);
var hd = thi.ng.math.core.abs_diff(self__.h,h2);
return (new thi.ng.color.core.HSLA((((hd > 0.5))?(((h2 > self__.h))?cljs.core.rem((function (){var a__45296__auto__ = (self__.h + (1));
return (((h2 - a__45296__auto__) * t) + a__45296__auto__);
})(),1.0):cljs.core.rem((function (){var a__45296__auto__ = self__.h;
return ((((h2 + (1)) - a__45296__auto__) * t) + a__45296__auto__);
})(),1.0)):(function (){var a__45296__auto__ = self__.h;
return (((h2 - a__45296__auto__) * t) + a__45296__auto__);
})()),(function (){var a__45296__auto__ = self__.s;
return (((s2 - a__45296__auto__) * t) + a__45296__auto__);
})(),(function (){var a__45296__auto__ = self__.l;
return (((l2 - a__45296__auto__) * t) + a__45296__auto__);
})(),(function (){var a__45296__auto__ = self__.a;
return (((a2 - a__45296__auto__) * t) + a__45296__auto__);
})()));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var h__$1 = Math.round((self__.h * 360.0));
var s__$1 = Math.round((self__.s * 100.0));
var l__$1 = Math.round((self__.l * 100.0));
var G__46126 = (((self__.a < (1)))?["hsla(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h__$1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l__$1),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.a),")"].join(''):["hsl(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h__$1),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s__$1),"%,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l__$1),"%)"].join(''));
return (thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.css.cljs$core$IFn$_invoke$arity$1(G__46126) : thi.ng.color.core.css.call(null,G__46126));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.h;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.s;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.l;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,self__.s))){
return (new thi.ng.color.core.RGBA(self__.l,self__.l,self__.l,self__.a));
} else {
var f2 = (((self__.l < 0.5))?(self__.l * (self__.s + (1))):((self__.l + self__.s) - (self__.l * self__.s)));
var f1 = ((2.0 * self__.l) - f2);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp((function (){var G__46147 = f1;
var G__46148 = f2;
var G__46149 = (self__.h + thi.ng.color.core.THIRD);
return (thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3 ? thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3(G__46147,G__46148,G__46149) : thi.ng.color.core.hsl_hue.call(null,G__46147,G__46148,G__46149));
})(),0.0,1.0),thi.ng.math.core.clamp((thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3 ? thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3(f1,f2,self__.h) : thi.ng.color.core.hsl_hue.call(null,f1,f2,self__.h)),0.0,1.0),thi.ng.math.core.clamp((function (){var G__46150 = f1;
var G__46151 = f2;
var G__46152 = (self__.h - thi.ng.color.core.THIRD);
return (thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3 ? thi.ng.color.core.hsl_hue.cljs$core$IFn$_invoke$arity$3(G__46150,G__46151,G__46152) : thi.ng.color.core.hsl_hue.call(null,G__46150,G__46151,G__46152));
})(),0.0,1.0),self__.a));
}
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var l2 = ((2) * self__.l);
var v = ((l2 + (self__.s * ((1) - (function (){var G__46155 = (l2 - (1));
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__46155) : thi.ng.math.core.abs.call(null,G__46155));
})()))) / (2));
var s_SINGLEQUOTE_ = (((2) * (v - self__.l)) / v);
return (new thi.ng.color.core.HSVA(self__.h,s_SINGLEQUOTE_,v,self__.a));
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.HSLA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.h,self__.s,self__.l,self__.a], null);
}));

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.HSLA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.HSLA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"h","h",-1544777029,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.HSLA.cljs$lang$type = true);

(thi.ng.color.core.HSLA.cljs$lang$ctorStr = "thi.ng.color.core/HSLA");

(thi.ng.color.core.HSLA.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"thi.ng.color.core/HSLA");
}));

/**
 * Positional factory function for thi.ng.color.core/HSLA.
 */
thi.ng.color.core.__GT_HSLA = (function thi$ng$color$core$__GT_HSLA(h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.CMYKA = (function (c,m,y,k,a){
this.c = c;
this.m = m;
this.y = y;
this.k = k;
this.a = a;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(thi.ng.color.core.CMYKA.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [thi.ng.color.core.ns_prefix,"CMYKA [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.c)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.m)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.y)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.a),"]"].join('');
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA(self__.c,self__.m,self__.y,self__.k,thi.ng.math.core.clamp((offset + self__.a),0.0,1.0)));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA((1.0 - self__.c),(1.0 - self__.m),(1.0 - self__.y),(1.0 - self__.k),self__.a));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.CMYKA((function (){var a__45296__auto__ = self__.c;
return (((thi.ng.color.core.cyan(dest) - a__45296__auto__) * t) + a__45296__auto__);
})(),(function (){var a__45296__auto__ = self__.m;
return (((thi.ng.color.core.magenta(dest) - a__45296__auto__) * t) + a__45296__auto__);
})(),(function (){var a__45296__auto__ = self__.y;
return (((thi.ng.color.core.yellow(dest) - a__45296__auto__) * t) + a__45296__auto__);
})(),(function (){var a__45296__auto__ = self__.k;
return (((thi.ng.color.core.black(dest) - a__45296__auto__) * t) + a__45296__auto__);
})(),(function (){var a__45296__auto__ = self__.a;
return (((thi.ng.color.core.alpha(dest) - a__45296__auto__) * t) + a__45296__auto__);
})()));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.k;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.y;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.c;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.a;
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new thi.ng.color.core.RGBA((1.0 - (function (){var x__4217__auto__ = 1.0;
var y__4218__auto__ = (self__.c + self__.k);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()),(1.0 - (function (){var x__4217__auto__ = 1.0;
var y__4218__auto__ = (self__.m + self__.k);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()),(1.0 - (function (){var x__4217__auto__ = 1.0;
var y__4218__auto__ = (self__.y + self__.k);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()),self__.a));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.CMYKA.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.c,self__.m,self__.y,self__.k,self__.a], null);
}));

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CMYKA.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CMYKA.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"c","c",-122660552,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"double","double",-1769548886,null)], null))], null);
}));

(thi.ng.color.core.CMYKA.cljs$lang$type = true);

(thi.ng.color.core.CMYKA.cljs$lang$ctorStr = "thi.ng.color.core/CMYKA");

(thi.ng.color.core.CMYKA.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"thi.ng.color.core/CMYKA");
}));

/**
 * Positional factory function for thi.ng.color.core/CMYKA.
 */
thi.ng.color.core.__GT_CMYKA = (function thi$ng$color$core$__GT_CMYKA(c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a));
});


/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.CSS = (function (col){
this.col = col;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(thi.ng.color.core.CSS.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [thi.ng.color.core.ns_prefix,"CSS [\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.col),"\"]"].join('');
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.Int24)){
return c;
} else {
return thi.ng.color.core.as_int24(c);
}
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.Int32)){
return c;
} else {
return thi.ng.color.core.as_int32(c);
}
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.rotate_hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),theta));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$adjust_alpha$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.adjust_alpha(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),offset));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.invert(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null)));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css(thi.ng.color.core.blend(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null),dest,t));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ___$1;
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation((thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col)));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness((thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col)));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha((thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col)));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.RGBA)){
return c;
} else {
return thi.ng.color.core.as_rgba(c);
}
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka(___$1.thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null));
}));

(thi.ng.color.core.CSS.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.CSS.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var c = (thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1 ? thi.ng.color.core.parse_css.cljs$core$IFn$_invoke$arity$1(self__.col) : thi.ng.color.core.parse_css.call(null,self__.col));
if((c instanceof thi.ng.color.core.HSLA)){
return c;
} else {
return thi.ng.color.core.as_hsla(c);
}
}));

(thi.ng.color.core.CSS.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"String","String",-2070057435,null)], null))], null);
}));

(thi.ng.color.core.CSS.cljs$lang$type = true);

(thi.ng.color.core.CSS.cljs$lang$ctorStr = "thi.ng.color.core/CSS");

(thi.ng.color.core.CSS.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"thi.ng.color.core/CSS");
}));

/**
 * Positional factory function for thi.ng.color.core/CSS.
 */
thi.ng.color.core.__GT_CSS = (function thi$ng$color$core$__GT_CSS(col){
return (new thi.ng.color.core.CSS(col));
});

thi.ng.color.core.proxied_color_type = (function thi$ng$color$core$proxied_color_type(to_rgba,from_rgba){
return (function thi$ng$color$core$proxied_color_type_$_ctor(col){
if((typeof thi !== 'undefined') && (typeof thi.ng !== 'undefined') && (typeof thi.ng.color !== 'undefined') && (typeof thi.ng.color.core !== 'undefined') && (typeof thi.ng.color.core.t_thi$ng$color$core46275 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {thi.ng.color.core.IHSLConvert}
 * @implements {thi.ng.color.core.IIntConvert}
 * @implements {cljs.core.IMeta}
 * @implements {thi.ng.color.core.IRGBConvert}
 * @implements {thi.ng.color.core.IColorOps}
 * @implements {thi.ng.color.core.ICSSConvert}
 * @implements {cljs.core.IDeref}
 * @implements {thi.ng.color.core.ICMYKConvert}
 * @implements {thi.ng.color.core.IColorComponents}
 * @implements {cljs.core.IWithMeta}
 * @implements {thi.ng.color.core.IHSVConvert}
*/
thi.ng.color.core.t_thi$ng$color$core46275 = (function (to_rgba,from_rgba,ctor,col,meta46276){
this.to_rgba = to_rgba;
this.from_rgba = from_rgba;
this.ctor = ctor;
this.col = col;
this.meta46276 = meta46276;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(thi.ng.color.core.t_thi$ng$color$core46275.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.col], 0));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IIntConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IIntConvert$as_int24$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int24((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IIntConvert$as_int32$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_int32((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorOps$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorOps$rotate_hue$arity$2 = (function (_,theta){
var self__ = this;
var ___$1 = this;
var G__46288 = (function (){var G__46291 = thi.ng.color.core.rotate_hue((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),theta);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__46291) : self__.from_rgba.call(null,G__46291));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__46288) : self__.ctor.call(null,G__46288));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorOps$adjust_saturation$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var G__46293 = (function (){var G__46294 = thi.ng.color.core.adjust_saturation((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),offset);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__46294) : self__.from_rgba.call(null,G__46294));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__46293) : self__.ctor.call(null,G__46293));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorOps$adjust_brightness$arity$2 = (function (_,offset){
var self__ = this;
var ___$1 = this;
var G__46296 = (function (){var G__46298 = thi.ng.color.core.adjust_brightness((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)),offset);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__46298) : self__.from_rgba.call(null,G__46298));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__46296) : self__.ctor.call(null,G__46296));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorOps$invert$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__46299 = thi.ng.color.core.invert((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(___$1) : self__.to_rgba.call(null,___$1)));
var G__46300 = (self__.from_rgba.cljs$core$IFn$_invoke$arity$0 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$0() : self__.from_rgba.call(null));
return (self__.ctor.cljs$core$IFn$_invoke$arity$2 ? self__.ctor.cljs$core$IFn$_invoke$arity$2(G__46299,G__46300) : self__.ctor.call(null,G__46299,G__46300));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorOps$blend$arity$3 = (function (_,dest,t){
var self__ = this;
var ___$1 = this;
var G__46306 = (function (){var G__46307 = thi.ng.color.core.blend((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(___$1) : self__.to_rgba.call(null,___$1)),dest,t);
return (self__.from_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.from_rgba.cljs$core$IFn$_invoke$arity$1(G__46307) : self__.from_rgba.call(null,G__46307));
})();
return (self__.ctor.cljs$core$IFn$_invoke$arity$1 ? self__.ctor.cljs$core$IFn$_invoke$arity$1(G__46306) : self__.ctor.call(null,G__46306));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$ICSSConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$ICSSConvert$as_css$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_css((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorComponents$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorComponents$magenta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.magenta((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorComponents$black$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.black((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorComponents$hue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.hue(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorComponents$yellow$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.yellow((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorComponents$saturation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.saturation(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorComponents$green$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.green((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorComponents$cyan$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.cyan((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorComponents$brightness$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.brightness(___$1.thi$ng$color$core$IHSVConvert$as_hsva$arity$1(null));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorComponents$luminance$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.luminance(___$1.thi$ng$color$core$IHSLConvert$as_hsla$arity$1(null));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorComponents$red$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.red((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorComponents$blue$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.blue((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IColorComponents$alpha$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.alpha((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46277){
var self__ = this;
var _46277__$1 = this;
return self__.meta46276;
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IRGBConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IRGBConvert$as_rgba$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IHSVConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IHSVConvert$as_hsva$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsva((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46277,meta46276__$1){
var self__ = this;
var _46277__$1 = this;
return (new thi.ng.color.core.t_thi$ng$color$core46275(self__.to_rgba,self__.from_rgba,self__.ctor,self__.col,meta46276__$1));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$ICMYKConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$ICMYKConvert$as_cmyka$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_cmyka((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.col;
}));

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IHSLConvert$ = cljs.core.PROTOCOL_SENTINEL);

(thi.ng.color.core.t_thi$ng$color$core46275.prototype.thi$ng$color$core$IHSLConvert$as_hsla$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return thi.ng.color.core.as_hsla((self__.to_rgba.cljs$core$IFn$_invoke$arity$1 ? self__.to_rgba.cljs$core$IFn$_invoke$arity$1(self__.col) : self__.to_rgba.call(null,self__.col)));
}));

(thi.ng.color.core.t_thi$ng$color$core46275.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to-rgba","to-rgba",-145176828,null),new cljs.core.Symbol(null,"from-rgba","from-rgba",2048003927,null),new cljs.core.Symbol(null,"ctor","ctor",-903570967,null),new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.Symbol(null,"meta46276","meta46276",478007396,null)], null);
}));

(thi.ng.color.core.t_thi$ng$color$core46275.cljs$lang$type = true);

(thi.ng.color.core.t_thi$ng$color$core46275.cljs$lang$ctorStr = "thi.ng.color.core/t_thi$ng$color$core46275");

(thi.ng.color.core.t_thi$ng$color$core46275.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"thi.ng.color.core/t_thi$ng$color$core46275");
}));

/**
 * Positional factory function for thi.ng.color.core/t_thi$ng$color$core46275.
 */
thi.ng.color.core.__GT_t_thi$ng$color$core46275 = (function thi$ng$color$core$proxied_color_type_$_ctor_$___GT_t_thi$ng$color$core46275(to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta46276){
return (new thi.ng.color.core.t_thi$ng$color$core46275(to_rgba__$1,from_rgba__$1,ctor__$1,col__$1,meta46276));
});

}

return (new thi.ng.color.core.t_thi$ng$color$core46275(to_rgba,from_rgba,thi$ng$color$core$proxied_color_type_$_ctor,col,cljs.core.PersistentArrayMap.EMPTY));
});
});
thi.ng.color.core.rgba = (function thi$ng$color$core$rgba(var_args){
var G__46335 = arguments.length;
switch (G__46335) {
case 1:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__46338){
var vec__46340 = p__46338;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46340,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46340,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46340,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46340,(3),null);
return (new thi.ng.color.core.RGBA(r,g,b,(function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return 1.0;
}
})()));
}));

(thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return (new thi.ng.color.core.RGBA(r,g,b,1.0));
}));

(thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return (new thi.ng.color.core.RGBA(r,g,b,a));
}));

(thi.ng.color.core.rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.int24 = (function thi$ng$color$core$int24(col){
return (new thi.ng.color.core.Int24(col));
});
thi.ng.color.core.int32 = (function thi$ng$color$core$int32(var_args){
var G__46353 = arguments.length;
switch (G__46353) {
case 1:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1 = (function (col){
return (new thi.ng.color.core.Int32(col));
}));

(thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$2 = (function (col,alpha){
var a = (((255) * thi.ng.math.core.clamp(alpha,0.0,1.0)) | (0));
return (new thi.ng.color.core.Int32(((col & (16777215)) | (a << (24)))));
}));

(thi.ng.color.core.int32.cljs$lang$maxFixedArity = 2);

thi.ng.color.core.hsva = (function thi$ng$color$core$hsva(var_args){
var G__46360 = arguments.length;
switch (G__46360) {
case 1:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$1 = (function (p__46363){
var vec__46364 = p__46363;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46364,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46364,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46364,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46364,(3),null);
return (new thi.ng.color.core.HSVA(h,s,v,(function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return 1.0;
}
})()));
}));

(thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$3 = (function (h,s,v){
return (new thi.ng.color.core.HSVA(h,s,v,1.0));
}));

(thi.ng.color.core.hsva.cljs$core$IFn$_invoke$arity$4 = (function (h,s,v,a){
return (new thi.ng.color.core.HSVA(h,s,v,a));
}));

(thi.ng.color.core.hsva.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.hsla = (function thi$ng$color$core$hsla(var_args){
var G__46369 = arguments.length;
switch (G__46369) {
case 1:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__46371){
var vec__46373 = p__46371;
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46373,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46373,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46373,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46373,(3),null);
return (new thi.ng.color.core.HSLA(h,s,l,(function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return 1.0;
}
})()));
}));

(thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return (new thi.ng.color.core.HSLA(h,s,l,1.0));
}));

(thi.ng.color.core.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return (new thi.ng.color.core.HSLA(h,s,l,a));
}));

(thi.ng.color.core.hsla.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.cmyka = (function thi$ng$color$core$cmyka(var_args){
var G__46379 = arguments.length;
switch (G__46379) {
case 1:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$1 = (function (p__46385){
var vec__46386 = p__46385;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46386,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46386,(1),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46386,(2),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46386,(3),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46386,(4),null);
return (new thi.ng.color.core.CMYKA(c,m,y,k,(function (){var or__4126__auto__ = a;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return 1.0;
}
})()));
}));

(thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$4 = (function (c,m,y,k){
return (new thi.ng.color.core.CMYKA(c,m,y,k,1.0));
}));

(thi.ng.color.core.cmyka.cljs$core$IFn$_invoke$arity$5 = (function (c,m,y,k,a){
return (new thi.ng.color.core.CMYKA(c,m,y,k,a));
}));

(thi.ng.color.core.cmyka.cljs$lang$maxFixedArity = 5);

thi.ng.color.core.css = (function thi$ng$color$core$css(col){
return (new thi.ng.color.core.CSS(col));
});
/**
 * Returns a random RGBA color with 100% alpha
 */
thi.ng.color.core.random_rgb = (function thi$ng$color$core$random_rgb(){
return thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4(thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),thi.ng.math.core.random.cljs$core$IFn$_invoke$arity$0(),1.0);
});
thi.ng.color.core.RED = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(0),(0),(1));
thi.ng.color.core.GREEN = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(1),(0),(1));
thi.ng.color.core.BLUE = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(0),(1),(1));
thi.ng.color.core.CYAN = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(1),(1),(1));
thi.ng.color.core.MAGENTA = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(0),(1),(1));
thi.ng.color.core.YELLOW = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(1),(0),(1));
thi.ng.color.core.BLACK = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((0),(0),(0),(1));
thi.ng.color.core.WHITE = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4((1),(1),(1),(1));
thi.ng.color.core.GRAY = thi.ng.color.core.rgba.cljs$core$IFn$_invoke$arity$4(0.5,0.5,0.5,(1));
thi.ng.color.core.hsl_hue = (function thi$ng$color$core$hsl_hue(f1,f2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h >= 1.0))?(h - (1)):h));
if((h__$1 < thi.ng.color.core.SIXTH)){
return thi.ng.math.core.mix(f1,f2,(6.0 * h__$1));
} else {
if((h__$1 < 0.5)){
return f2;
} else {
if((h__$1 < thi.ng.color.core.TWO_THIRD)){
return thi.ng.math.core.mix(f1,f2,((thi.ng.color.core.TWO_THIRD - h__$1) * 6.0));
} else {
return f1;

}
}
}
});
thi.ng.color.core.hue__GT_rgb = (function thi$ng$color$core$hue__GT_rgb(h){
var h__$1 = cljs.core.mod((6.0 * h),6.0);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp(((function (){var G__46410 = (h__$1 - 3.0);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__46410) : thi.ng.math.core.abs.call(null,G__46410));
})() - (1)),0.0,1.0),thi.ng.math.core.clamp((2.0 - (function (){var G__46411 = (h__$1 - 2.0);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__46411) : thi.ng.math.core.abs.call(null,G__46411));
})()),0.0,1.0),thi.ng.math.core.clamp((2.0 - (function (){var G__46412 = (h__$1 - 4.0);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__46412) : thi.ng.math.core.abs.call(null,G__46412));
})()),0.0,1.0)], null);
});
thi.ng.color.core.rgba__GT_hcva = (function thi$ng$color$core$rgba__GT_hcva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
var vec__46414 = (((g < b))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,g,-1.0,thi.ng.color.core.TWO_THIRD], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [g,b,0.0,(- thi.ng.color.core.THIRD)], null));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46414,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46414,(1),null);
var pz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46414,(2),null);
var pw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46414,(3),null);
var vec__46417 = (((r < px))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,py,pw,r], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,py,pz,px], null));
var qx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46417,(0),null);
var qy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46417,(1),null);
var qz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46417,(2),null);
var qw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46417,(3),null);
var c = (qx - (function (){var x__4217__auto__ = qw;
var y__4218__auto__ = qy;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
var h = (function (){var G__46421 = (((qw - qy) / ((6.0 * c) + 1.0E-10)) + qz);
return (thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1 ? thi.ng.math.core.abs.cljs$core$IFn$_invoke$arity$1(G__46421) : thi.ng.math.core.abs.call(null,G__46421));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp(h,0.0,1.0),thi.ng.math.core.clamp(c,0.0,1.0),thi.ng.math.core.clamp(qx,0.0,1.0),a], null);
});
thi.ng.color.core.rgba__GT_hcya = (function thi$ng$color$core$rgba__GT_hcya(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var vec__46423 = thi.ng.color.core.rgba__GT_hcva(rgba);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46423,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46423,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46423,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46423,(3),null);
var y = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
if(cljs.core.truth_(thi.ng.math.core.delta_EQ_(0.0,c))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,c,y,a], null);
} else {
var vec__46426 = thi.ng.color.core.hue__GT_rgb(h);
var r_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46426,(0),null);
var g_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46426,(1),null);
var b_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46426,(2),null);
var z = (((0.299 * r_SINGLEQUOTE_) + (0.587 * g_SINGLEQUOTE_)) + (0.114 * b_SINGLEQUOTE_));
if(((y - z) > 1.0E-5)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp((c * ((1.0 - z) / (1.0 - y))),0.0,1.0),y,a], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,thi.ng.math.core.clamp((c * (z / y)),0.0,1.0),y,a], null);
}
}
});
thi.ng.color.core.hcya__GT_rgba = (function thi$ng$color$core$hcya__GT_rgba(var_args){
var G__46445 = arguments.length;
switch (G__46445) {
case 1:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (hcya){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.hcya__GT_rgba,hcya);
}));

(thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (h,c,y){
return thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4(h,c,y,1.0);
}));

(thi.ng.color.core.hcya__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (h,c,y,a){
var vec__46448 = thi.ng.color.core.hue__GT_rgb(h);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46448,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46448,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46448,(2),null);
var z = (((0.299 * r) + (0.587 * g)) + (0.114 * b));
var c_SINGLEQUOTE_ = (((y < z))?(c * (y / z)):(((z < 1.0))?(c * ((1.0 - y) / (1.0 - z))):c));
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp((((r - z) * c_SINGLEQUOTE_) + y),0.0,1.0),thi.ng.math.core.clamp((((g - z) * c_SINGLEQUOTE_) + y),0.0,1.0),thi.ng.math.core.clamp((((b - z) * c_SINGLEQUOTE_) + y),0.0,1.0),a));
}));

(thi.ng.color.core.hcya__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.ycbcra__GT_rgba = (function thi$ng$color$core$ycbcra__GT_rgba(var_args){
var G__46467 = arguments.length;
switch (G__46467) {
case 1:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (ycbcra){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.ycbcra__GT_rgba,ycbcra);
}));

(thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,cb,cr){
return thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4(y,cb,cr,1.0);
}));

(thi.ng.color.core.ycbcra__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,cb,cr,a){
var cb_SINGLEQUOTE_ = (cb - 0.5);
var cr_SINGLEQUOTE_ = (cr - 0.5);
return (new thi.ng.color.core.RGBA(thi.ng.math.core.clamp(((cr_SINGLEQUOTE_ * 1.402) + y),0.0,1.0),thi.ng.math.core.clamp((y - ((cb_SINGLEQUOTE_ * 0.34414) + (cr_SINGLEQUOTE_ * 0.71414))),0.0,1.0),thi.ng.math.core.clamp(((cb_SINGLEQUOTE_ * 1.772) + y),0.0,1.0),a));
}));

(thi.ng.color.core.ycbcra__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.rgba__GT_ycbcra = (function thi$ng$color$core$rgba__GT_ycbcra(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp((((0.299 * r) + (0.587 * g)) + (0.114 * b)),0.0,1.0),thi.ng.math.core.clamp((((0.5 - (0.16874 * r)) - (0.33126 * g)) + (0.5 * b)),0.0,1.0),thi.ng.math.core.clamp((((0.5 + (0.5 * r)) - (0.418688 * g)) - (0.081312 * b)),0.0,1.0)], null);
});
thi.ng.color.core.rgba__GT_yuva = (function thi$ng$color$core$rgba__GT_yuva(rgba){
var r = rgba.r;
var g = rgba.g;
var b = rgba.b;
var a = rgba.a;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((0.299 * r) + (0.587 * g)) + (0.114 * b)),(((-0.1473 * r) + (-0.28886 * g)) + (0.436 * b)),(((0.615 * r) + (-0.51499 * g)) + (-0.10001 * b)),a], null);
});
thi.ng.color.core.yuva__GT_rgba = (function thi$ng$color$core$yuva__GT_rgba(var_args){
var G__46513 = arguments.length;
switch (G__46513) {
case 1:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$1 = (function (yuva){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.yuva__GT_rgba,yuva);
}));

(thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$3 = (function (y,u,v){
return thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4(y,u,v,1.0);
}));

(thi.ng.color.core.yuva__GT_rgba.cljs$core$IFn$_invoke$arity$4 = (function (y,u,v,a){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.math.core.clamp(((1.13983 * v) + y),0.0,1.0),thi.ng.math.core.clamp((y - ((0.39465 * u) + (0.5806 * v))),0.0,1.0),thi.ng.math.core.clamp(((2.03211 * u) + y),0.0,1.0),a], null);
}));

(thi.ng.color.core.yuva__GT_rgba.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.cie1931_gamma_correct = (function thi$ng$color$core$cie1931_gamma_correct(x){
return thi.ng.math.core.clamp((((x < 0.0031308))?(12.92 * x):((1.055 * Math.pow(x,((1) / 2.4))) - 0.055)),0.0,1.0);
});
thi.ng.color.core.cie1931__GT_rgb = (function thi$ng$color$core$cie1931__GT_rgb(var_args){
var G__46528 = arguments.length;
switch (G__46528) {
case 1:
return thi.ng.color.core.cie1931__GT_rgb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return thi.ng.color.core.cie1931__GT_rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return thi.ng.color.core.cie1931__GT_rgb.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.cie1931__GT_rgb.cljs$core$IFn$_invoke$arity$1 = (function (xyz){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(thi.ng.color.core.cie1931__GT_rgb,xyz);
}));

(thi.ng.color.core.cie1931__GT_rgb.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return thi.ng.color.core.cie1931__GT_rgb.cljs$core$IFn$_invoke$arity$4(x,y,z,1.0);
}));

(thi.ng.color.core.cie1931__GT_rgb.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,a){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [thi.ng.color.core.cie1931_gamma_correct((((3.2406 * x) + (-1.5372 * y)) + (-0.4986 * z))),thi.ng.color.core.cie1931_gamma_correct((((-0.9689 * x) + (1.8758 * y)) + (0.0415 * z))),thi.ng.color.core.cie1931_gamma_correct((((0.0557 * x) + (-0.204 * y)) + (1.057 * z))),a], null);
}));

(thi.ng.color.core.cie1931__GT_rgb.cljs$lang$maxFixedArity = 4);

thi.ng.color.core.hex__GT_int = (function thi$ng$color$core$hex__GT_int(hex){
var hex__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(hex)))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(hex,(1)):hex);
var len = cljs.core.count(hex__$1);
if(((3) === len)){
var vec__46542 = hex__$1;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46542,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46542,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46542,(2),null);
return thi.ng.color.core.int24(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),(16),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)));
} else {
if((len < (7))){
return thi.ng.color.core.int24(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(hex__$1,(16),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)));
} else {
return thi.ng.color.core.int32.cljs$core$IFn$_invoke$arity$1(thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(hex__$1,(16),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)));
}
}
});
thi.ng.color.core.parse_channel_val = (function thi$ng$color$core$parse_channel_val(c){
if((c.indexOf("%") > (0))){
return (0.01 * thi.ng.strf.core.parse_float(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(c,(0),(cljs.core.count(c) - (1)))));
} else {
return (thi.ng.color.core.INV8BIT * thi.ng.strf.core.parse_int.cljs$core$IFn$_invoke$arity$variadic(c,(10),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(0)], 0)));
}
});
thi.ng.color.core.parse_css = (function thi$ng$color$core$parse_css(col){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.first(col))){
return thi.ng.color.core.hex__GT_int(col);
} else {
var vec__46558 = cljs.core.re_seq(/(rgb|hsl)a?\((\d+%?),(\d+%?),(\d+%?),?([0-9\.]+)?\)/,col);
var vec__46561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46558,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(0),null);
var mode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(2),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(3),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(4),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46561,(5),null);
if(cljs.core.truth_(mode)){
if(cljs.core.truth_((function (){var fexpr__46564 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["rgba",null,"rgb",null], null), null);
return (fexpr__46564.cljs$core$IFn$_invoke$arity$1 ? fexpr__46564.cljs$core$IFn$_invoke$arity$1(mode) : fexpr__46564.call(null,mode));
})())){
return (new thi.ng.color.core.RGBA(thi.ng.color.core.parse_channel_val(a),thi.ng.color.core.parse_channel_val(b),thi.ng.color.core.parse_channel_val(c),thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([1.0], 0))));
} else {
return (new thi.ng.color.core.HSLA((thi.ng.strf.core.parse_float(a) / 360.0),thi.ng.color.core.parse_channel_val(b),thi.ng.color.core.parse_channel_val(c),thi.ng.strf.core.parse_float.cljs$core$IFn$_invoke$arity$variadic(d,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([1.0], 0)))).thi$ng$color$core$IRGBConvert$as_rgba$arity$1(null);
}
} else {
return thi.ng.xerror.core.illegal_arg_BANG_.cljs$core$IFn$_invoke$arity$1(col);
}
}
});
thi.ng.color.core.hcya = thi.ng.color.core.proxied_color_type(thi.ng.color.core.hcya__GT_rgba,thi.ng.color.core.rgba__GT_hcya);
thi.ng.color.core.yuva = thi.ng.color.core.proxied_color_type(thi.ng.color.core.yuva__GT_rgba,thi.ng.color.core.rgba__GT_yuva);
thi.ng.color.core.ycbcra = thi.ng.color.core.proxied_color_type(thi.ng.color.core.ycbcra__GT_rgba,thi.ng.color.core.rgba__GT_ycbcra);
thi.ng.color.core.cie1931 = thi.ng.color.core.proxied_color_type(thi.ng.color.core.cie1931__GT_rgb,thi.ng.xerror.core.unsupported_BANG_);
thi.ng.color.core.hues = cljs.core.zipmap(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__46566_SHARP_){
return (p1__46566_SHARP_ / 360.0);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),(360),(30))));
thi.ng.color.core.primary_hues = cljs.core.select_keys(thi.ng.color.core.hues,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"magenta","magenta",1687937081)], null));
/**
 * Takes a color and map of hues (e.g. thi.ng.color.core.primary-hues),
 *   returns key of closest hue.
 */
thi.ng.color.core.closest_hue = (function thi$ng$color$core$closest_hue(var_args){
var G__46568 = arguments.length;
switch (G__46568) {
case 1:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$1 = (function (col){
return thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2(col,thi.ng.color.core.hues);
}));

(thi.ng.color.core.closest_hue.cljs$core$IFn$_invoke$arity$2 = (function (col,hues){
var h = thi.ng.color.core.hue(col);
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46569,p__46570){
var vec__46571 = p__46569;
var h_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46571,(0),null);
var d_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46571,(1),null);
var vec__46574 = p__46570;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46574,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46574,(1),null);
var d = (function (){var x__4217__auto__ = thi.ng.math.core.abs_diff(h,v);
var y__4218__auto__ = thi.ng.math.core.abs_diff((h - (1)),v);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
if((d < d_SINGLEQUOTE_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,d], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h_SINGLEQUOTE_,d_SINGLEQUOTE_], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,1000000.0], null),hues));
}));

(thi.ng.color.core.closest_hue.cljs$lang$maxFixedArity = 2);

/**
 * Returns gamma corrected version of color as RGBA
 */
thi.ng.color.core.gamma_correct = (function thi$ng$color$core$gamma_correct(col,gamma){
var col__$1 = thi.ng.color.core.as_rgba(col);
return (new thi.ng.color.core.RGBA(Math.pow(col__$1.r,gamma),Math.pow(col__$1.g,gamma),Math.pow(col__$1.b,gamma),col__$1.a));
});
/**
 * Returns new color of same type with its hue rotated by 180 degrees.
 */
thi.ng.color.core.complementary = (function thi$ng$color$core$complementary(col){
return thi.ng.color.core.rotate_hue(col,thi.ng.math.core.PI);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness.
 */
thi.ng.color.core.analog = (function thi$ng$color$core$analog(col,theta,sat,bright){
return thi.ng.color.core.adjust_brightness(thi.ng.color.core.adjust_saturation(thi.ng.color.core.rotate_hue(col,theta),sat),bright);
});
/**
 * Returns new color of same type with its hue rotated and adjusted
 *   saturation & brightness within given tolerances (+/-).
 */
thi.ng.color.core.random_analog = (function thi$ng$color$core$random_analog(col,theta,sat,bright){
return thi.ng.color.core.analog(col,(thi.ng.math.core.randnorm() * theta),(thi.ng.math.core.randnorm() * sat),(thi.ng.math.core.randnorm() * bright));
});
/**
 * Returns RGB distance of any two colors
 */
thi.ng.color.core.dist_rgb = (function thi$ng$color$core$dist_rgb(a,b){
var vec__46602 = cljs.core.deref(thi.ng.color.core.as_rgba(a));
var ra = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46602,(0),null);
var ga = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46602,(1),null);
var ba = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46602,(2),null);
var vec__46605 = cljs.core.deref(thi.ng.color.core.as_rgba(b));
var rb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46605,(0),null);
var gb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46605,(1),null);
var bb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46605,(2),null);
var dr = (ra - rb);
var dg = (ga - gb);
var db = (ba - bb);
return Math.sqrt((((dr * dr) + (dg * dg)) + (db * db)));
});
/**
 * Returns HSV distance of any two colors
 */
thi.ng.color.core.dist_hsv = (function thi$ng$color$core$dist_hsv(a,b){
var vec__46608 = cljs.core.deref(thi.ng.color.core.as_hsva(a));
var ha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46608,(0),null);
var sa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46608,(1),null);
var va = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46608,(2),null);
var vec__46611 = cljs.core.deref(thi.ng.color.core.as_hsva(b));
var hb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46611,(0),null);
var sb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46611,(1),null);
var vb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46611,(2),null);
var ha__$1 = (thi.ng.math.core.TWO_PI * ha);
var hb__$1 = (thi.ng.math.core.TWO_PI * hb);
var dh = ((sa * Math.cos(ha__$1)) - (sb * Math.cos(hb__$1)));
var ds = ((sa * Math.sin(ha__$1)) - (sb * Math.sin(hb__$1)));
var dv = (va - vb);
return Math.sqrt((((dh * dh) + (ds * ds)) + (dv * dv)));
});

//# sourceMappingURL=thi.ng.color.core.js.map
