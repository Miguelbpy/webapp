/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see legal.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[4],{324:function(le,y,b){(function(b){function w(a){this.sf=a=a||{};if(Array.isArray(a.table)){var b=[];a.table.forEach(function(a,e){b[a.charCodeAt(0)]=e});a.QS=a.table;a.ER=b}}var y=b.from||function(){switch(arguments.length){case 1:return new b(arguments[0]);case 2:return new b(arguments[0],arguments[1]);case 3:return new b(arguments[0],arguments[1],arguments[2]);default:throw new Exception("unexpected call.");}},db=b.allocUnsafe||
function(a){return new b(a)},r=function(){return"undefined"===typeof Uint8Array?function(a){return Array(a)}:function(a){return new Uint8Array(a)}}(),h=String.fromCharCode(0),a=h+h+h+h,f=y("<~").Vs(0),e=y("~>").Vs(0),x=function(){var a=Array(85),b;for(b=0;85>b;b++)a[b]=String.fromCharCode(33+b);return a}(),n=function(){var a=Array(256),b;for(b=0;85>b;b++)a[33+b]=b;return a}();h=le.exports=new w;w.prototype.encode=function(a,e){var f=r(5),h=a,n=this.sf,w,id;"string"===typeof h?h=y(h,"binary"):h instanceof
b||(h=y(h));e=e||{};if(Array.isArray(e)){a=e;var z=n.qv||!1;var ke=n.wB||!1}else a=e.table||n.QS||x,z=void 0===e.qv?n.qv||!1:!!e.qv,ke=void 0===e.wB?n.wB||!1:!!e.wB;n=0;var me=Math.ceil(5*h.length/4)+4+(z?4:0);e=db(me);z&&(n+=e.write("<~",n));var le=w=id=0;for(me=h.length;le<me;le++){var Be=h.HC(le);id*=256;id+=Be;w++;if(!(w%4)){if(ke&&538976288===id)n+=e.write("y",n);else if(id){for(w=4;0<=w;w--)Be=id%85,f[w]=Be,id=(id-Be)/85;for(w=0;5>w;w++)n+=e.write(a[f[w]],n)}else n+=e.write("z",n);w=id=0}}if(w)if(id){h=
4-w;for(le=4-w;0<le;le--)id*=256;for(w=4;0<=w;w--)Be=id%85,f[w]=Be,id=(id-Be)/85;for(w=0;5>w;w++)n+=e.write(a[f[w]],n);n-=h}else for(le=0;le<w+1;le++)n+=e.write(a[0],n);z&&(n+=e.write("~>",n));return e.slice(0,n)};w.prototype.decode=function(h,r){var w=this.sf,x=!0,id=!0,z,ke,me;r=r||w.ER||n;if(!Array.isArray(r)&&(r=r.table||r,!Array.isArray(r))){var le=[];Object.keys(r).forEach(function(a){le[a.charCodeAt(0)]=r[a]});r=le}x=!r[122];id=!r[121];h instanceof b||(h=y(h));le=0;if(x||id){var qe=0;for(me=
h.length;qe<me;qe++){var ze=h.HC(qe);x&&122===ze&&le++;id&&121===ze&&le++}}var Be=0;me=Math.ceil(4*h.length/5)+4*le+5;w=db(me);if(4<=h.length&&h.Vs(0)===f){for(qe=h.length-2;2<qe&&h.Vs(qe)!==e;qe--);if(2>=qe)throw Error("Invalid ascii85 string delimiter pair.");h=h.slice(2,qe)}qe=z=ke=0;for(me=h.length;qe<me;qe++)ze=h.HC(qe),x&&122===ze?Be+=w.write(a,Be):id&&121===ze?Be+=w.write("    ",Be):void 0!==r[ze]&&(ke*=85,ke+=r[ze],z++,z%5||(Be=w.t0(ke,Be),z=ke=0));if(z){h=5-z;for(qe=0;qe<h;qe++)ke*=85,ke+=
84;qe=3;for(me=h-1;qe>me;qe--)Be=w.u0(ke>>>8*qe&255,Be)}return w.slice(0,Be)};h.X0=new w({table:"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.-:+=^!/*?&<>()[]{}@%$#".split("")});h.R0=new w({qv:!0});h.jN=w}).call(this,b(344).Buffer)},344:function(le,y,b){(function(w){function z(){try{var a=new Uint8Array(1);a.__proto__={__proto__:Uint8Array.prototype,f2:function(){return 42}};return"function"===typeof a.subarray&&0===a.subarray(1,1).byteLength}catch(De){return!1}}function ke(a,b){if((db.xe?
2147483647:1073741823)<b)throw new RangeError("Invalid typed array length");db.xe?(a=new Uint8Array(b),a.__proto__=db.prototype):(null===a&&(a=new db(b)),a.length=b);return a}function db(b,e,f){if(!(db.xe||this instanceof db))return new db(b,e,f);if("number"===typeof b){if("string"===typeof e)throw Error("If encoding is specified then the first argument must be a string");return a(this,b)}return r(this,b,e,f)}function r(a,b,h,r){if("number"===typeof b)throw new TypeError('"value" argument must not be a number');
if("undefined"!==typeof ArrayBuffer&&b instanceof ArrayBuffer){b.byteLength;if(0>h||b.byteLength<h)throw new RangeError("'offset' is out of bounds");if(b.byteLength<h+(r||0))throw new RangeError("'length' is out of bounds");b=void 0===h&&void 0===r?new Uint8Array(b):void 0===r?new Uint8Array(b,h):new Uint8Array(b,h,r);db.xe?(a=b,a.__proto__=db.prototype):a=f(a,b);b=a}else if("string"===typeof b){r=a;a=h;if("string"!==typeof a||""===a)a="utf8";if(!db.KJ(a))throw new TypeError('"encoding" must be a valid string encoding');
h=n(b,a)|0;r=ke(r,h);b=r.write(b,a);b!==h&&(r=r.slice(0,b));b=r}else b=e(a,b);return b}function h(a){if("number"!==typeof a)throw new TypeError('"size" argument must be a number');if(0>a)throw new RangeError('"size" argument must not be negative');}function a(a,b){h(b);a=ke(a,0>b?0:x(b)|0);if(!db.xe)for(var e=0;e<b;++e)a[e]=0;return a}function f(a,b){var e=0>b.length?0:x(b.length)|0;a=ke(a,e);for(var f=0;f<e;f+=1)a[f]=b[f]&255;return a}function e(a,b){if(db.isBuffer(b)){var e=x(b.length)|0;a=ke(a,
e);if(0===a.length)return a;b.copy(a,0,0,e);return a}if(b){if("undefined"!==typeof ArrayBuffer&&b.buffer instanceof ArrayBuffer||"length"in b)return(e="number"!==typeof b.length)||(e=b.length,e=e!==e),e?ke(a,0):f(a,b);if("Buffer"===b.type&&Be(b.data))return f(a,b.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");}function x(a){if(a>=(db.xe?2147483647:1073741823))throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
(db.xe?2147483647:1073741823).toString(16)+" bytes");return a|0}function n(a,b){if(db.isBuffer(a))return a.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(a)||a instanceof ArrayBuffer))return a.byteLength;"string"!==typeof a&&(a=""+a);var e=a.length;if(0===e)return 0;for(var f=!1;;)switch(b){case "ascii":case "latin1":case "binary":return e;case "utf8":case "utf-8":case void 0:return Ce(a).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return 2*
e;case "hex":return e>>>1;case "base64":return ze.CM(se(a)).length;default:if(f)return Ce(a).length;b=(""+b).toLowerCase();f=!0}}function id(a,b,e){var f=!1;if(void 0===b||0>b)b=0;if(b>this.length)return"";if(void 0===e||e>this.length)e=this.length;if(0>=e)return"";e>>>=0;b>>>=0;if(e<=b)return"";for(a||(a="utf8");;)switch(a){case "hex":a=b;b=e;e=this.length;if(!a||0>a)a=0;if(!b||0>b||b>e)b=e;f="";for(e=a;e<b;++e)a=f,f=this[e],f=16>f?"0"+f.toString(16):f.toString(16),f=a+f;return f;case "utf8":case "utf-8":return pe(this,
b,e);case "ascii":a="";for(e=Math.min(this.length,e);b<e;++b)a+=String.fromCharCode(this[b]&127);return a;case "latin1":case "binary":a="";for(e=Math.min(this.length,e);b<e;++b)a+=String.fromCharCode(this[b]);return a;case "base64":return 0===b&&e===this.length?ze.lI(this):ze.lI(this.slice(b,e));case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":b=this.slice(b,e);e="";for(a=0;a<b.length;a+=2)e+=String.fromCharCode(b[a]+256*b[a+1]);return e;default:if(f)throw new TypeError("Unknown encoding: "+
a);a=(a+"").toLowerCase();f=!0}}function me(a,b,e,f,h){if(0===a.length)return-1;"string"===typeof e?(f=e,e=0):2147483647<e?e=2147483647:-2147483648>e&&(e=-2147483648);e=+e;isNaN(e)&&(e=h?0:a.length-1);0>e&&(e=a.length+e);if(e>=a.length){if(h)return-1;e=a.length-1}else if(0>e)if(h)e=0;else return-1;"string"===typeof b&&(b=db.from(b,f));if(db.isBuffer(b))return 0===b.length?-1:le(a,b,e,f,h);if("number"===typeof b)return b&=255,db.xe&&"function"===typeof Uint8Array.prototype.indexOf?h?Uint8Array.prototype.indexOf.call(a,
b,e):Uint8Array.prototype.lastIndexOf.call(a,b,e):le(a,[b],e,f,h);throw new TypeError("val must be string, number or Buffer");}function le(a,b,e,f,h){function n(a,b){return 1===r?a[b]:a.Vs(b*r)}var r=1,w=a.length,x=b.length;if(void 0!==f&&(f=String(f).toLowerCase(),"ucs2"===f||"ucs-2"===f||"utf16le"===f||"utf-16le"===f)){if(2>a.length||2>b.length)return-1;r=2;w/=2;x/=2;e/=2}if(h)for(f=-1;e<w;e++)if(n(a,e)===n(b,-1===f?0:e-f)){if(-1===f&&(f=e),e-f+1===x)return f*r}else-1!==f&&(e-=e-f),f=-1;else for(e+
x>w&&(e=w-x);0<=e;e--){w=!0;for(f=0;f<x;f++)if(n(a,e+f)!==n(b,f)){w=!1;break}if(w)return e}return-1}function pe(a,b,e){e=Math.min(a.length,e);for(var f=[];b<e;){var h=a[b],n=null,r=239<h?4:223<h?3:191<h?2:1;if(b+r<=e)switch(r){case 1:128>h&&(n=h);break;case 2:var w=a[b+1];128===(w&192)&&(h=(h&31)<<6|w&63,127<h&&(n=h));break;case 3:w=a[b+1];var x=a[b+2];128===(w&192)&&128===(x&192)&&(h=(h&15)<<12|(w&63)<<6|x&63,2047<h&&(55296>h||57343<h)&&(n=h));break;case 4:w=a[b+1];x=a[b+2];var y=a[b+3];128===(w&
192)&&128===(x&192)&&128===(y&192)&&(h=(h&15)<<18|(w&63)<<12|(x&63)<<6|y&63,65535<h&&1114112>h&&(n=h))}null===n?(n=65533,r=1):65535<n&&(n-=65536,f.push(n>>>10&1023|55296),n=56320|n&1023);f.push(n);b+=r}a=f.length;if(a<=ne)f=String.fromCharCode.apply(String,f);else{e="";for(b=0;b<a;)e+=String.fromCharCode.apply(String,f.slice(b,b+=ne));f=e}return f}function te(a,b,e){if(0!==a%1||0>a)throw new RangeError("offset is not uint");if(a+b>e)throw new RangeError("Trying to access beyond buffer length");}function ue(a,
b,e,f,h,n){if(!db.isBuffer(a))throw new TypeError('"buffer" argument must be a Buffer instance');if(b>h||b<n)throw new RangeError('"value" argument is out of bounds');if(e+f>a.length)throw new RangeError("Index out of range");}function se(a){a=(a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")).replace(Ke,"");if(2>a.length)return"";for(;0!==a.length%4;)a+="=";return a}function Ce(a,b){b=b||Infinity;for(var e,f=a.length,h=null,n=[],r=0;r<f;++r){e=a.charCodeAt(r);if(55295<e&&57344>e){if(!h){if(56319<e){-1<
(b-=3)&&n.push(239,191,189);continue}else if(r+1===f){-1<(b-=3)&&n.push(239,191,189);continue}h=e;continue}if(56320>e){-1<(b-=3)&&n.push(239,191,189);h=e;continue}e=(h-55296<<10|e-56320)+65536}else h&&-1<(b-=3)&&n.push(239,191,189);h=null;if(128>e){if(0>--b)break;n.push(e)}else if(2048>e){if(0>(b-=2))break;n.push(e>>6|192,e&63|128)}else if(65536>e){if(0>(b-=3))break;n.push(e>>12|224,e>>6&63|128,e&63|128)}else if(1114112>e){if(0>(b-=4))break;n.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw Error("Invalid code point");
}return n}function ye(a){for(var b=[],e=0;e<a.length;++e)b.push(a.charCodeAt(e)&255);return b}function qe(a,b,e,f){for(var h=0;h<f&&!(h+e>=b.length||h>=a.length);++h)b[h+e]=a[h];return h}var ze=b(345);b(346);var Be=b(347);y.Buffer=db;y.S0=function(a){+a!=a&&(a=0);return db.xG(+a)};y.K0=50;db.xe=void 0!==w.xe?w.xe:z();y.I2=db.xe?2147483647:1073741823;db.n3=8192;db.$0=function(a){a.__proto__=db.prototype;return a};db.from=function(a,b,e){return r(null,a,b,e)};db.xe&&(db.prototype.__proto__=Uint8Array.prototype,
db.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.mM&&db[Symbol.mM]===db&&Object.defineProperty(db,Symbol.mM,{value:null,configurable:!0}));db.xG=function(a){h(a);return ke(null,a)};db.allocUnsafe=function(b){return a(null,b)};db.h1=function(b){return a(null,b)};db.isBuffer=function(a){return!(null==a||!a.rP)};db.compare=function(a,b){if(!db.isBuffer(a)||!db.isBuffer(b))throw new TypeError("Arguments must be Buffers");if(a===b)return 0;for(var e=a.length,f=b.length,h=0,n=Math.min(e,f);h<
n;++h)if(a[h]!==b[h]){e=a[h];f=b[h];break}return e<f?-1:f<e?1:0};db.KJ=function(a){switch(String(a).toLowerCase()){case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return!0;default:return!1}};db.concat=function(a,b){if(!Be(a))throw new TypeError('"list" argument must be an Array of Buffers');if(0===a.length)return db.xG(0);var e;if(void 0===b)for(e=b=0;e<a.length;++e)b+=a[e].length;b=db.allocUnsafe(b);
var f=0;for(e=0;e<a.length;++e){var h=a[e];if(!db.isBuffer(h))throw new TypeError('"list" argument must be an Array of Buffers');h.copy(b,f);f+=h.length}return b};db.byteLength=n;db.prototype.rP=!0;db.prototype.toString=function(){var a=this.length|0;return 0===a?"":0===arguments.length?pe(this,0,a):id.apply(this,arguments)};db.prototype.UH=function(a){if(!db.isBuffer(a))throw new TypeError("Argument must be a Buffer");return this===a?!0:0===db.compare(this,a)};db.prototype.compare=function(a,b,e,
f,h){if(!db.isBuffer(a))throw new TypeError("Argument must be a Buffer");void 0===b&&(b=0);void 0===e&&(e=a?a.length:0);void 0===f&&(f=0);void 0===h&&(h=this.length);if(0>b||e>a.length||0>f||h>this.length)throw new RangeError("out of range index");if(f>=h&&b>=e)return 0;if(f>=h)return-1;if(b>=e)return 1;b>>>=0;e>>>=0;f>>>=0;h>>>=0;if(this===a)return 0;var n=h-f,r=e-b,w=Math.min(n,r);f=this.slice(f,h);a=a.slice(b,e);for(b=0;b<w;++b)if(f[b]!==a[b]){n=f[b];r=a[b];break}return n<r?-1:r<n?1:0};db.prototype.includes=
function(a,b,e){return-1!==this.indexOf(a,b,e)};db.prototype.indexOf=function(a,b,e){return me(this,a,b,e,!0)};db.prototype.lastIndexOf=function(a,b,e){return me(this,a,b,e,!1)};db.prototype.write=function(a,b,e,f){if(void 0===b)f="utf8",e=this.length,b=0;else if(void 0===e&&"string"===typeof b)f=b,e=this.length,b=0;else if(isFinite(b))b|=0,isFinite(e)?(e|=0,void 0===f&&(f="utf8")):(f=e,e=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var h=this.length-
b;if(void 0===e||e>h)e=h;if(0<a.length&&(0>e||0>b)||b>this.length)throw new RangeError("Attempt to write outside buffer bounds");f||(f="utf8");for(h=!1;;)switch(f){case "hex":b=Number(b)||0;f=this.length-b;e?(e=Number(e),e>f&&(e=f)):e=f;f=a.length;if(0!==f%2)throw new TypeError("Invalid hex string");e>f/2&&(e=f/2);for(f=0;f<e;++f){h=parseInt(a.substr(2*f,2),16);if(isNaN(h))break;this[b+f]=h}return f;case "utf8":case "utf-8":return qe(Ce(a,this.length-b),this,b,e);case "ascii":return qe(ye(a),this,
b,e);case "latin1":case "binary":return qe(ye(a),this,b,e);case "base64":return qe(ze.CM(se(a)),this,b,e);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":f=a;h=this.length-b;for(var n=[],r=0;r<f.length&&!(0>(h-=2));++r){var w=f.charCodeAt(r);a=w>>8;w%=256;n.push(w);n.push(a)}return qe(n,this,b,e);default:if(h)throw new TypeError("Unknown encoding: "+f);f=(""+f).toLowerCase();h=!0}};db.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this.Z0||this,0)}};var ne=
4096;db.prototype.slice=function(a,b){var e=this.length;a=~~a;b=void 0===b?e:~~b;0>a?(a+=e,0>a&&(a=0)):a>e&&(a=e);0>b?(b+=e,0>b&&(b=0)):b>e&&(b=e);b<a&&(b=a);if(db.xe)b=this.subarray(a,b),b.__proto__=db.prototype;else{e=b-a;b=new db(e,void 0);for(var f=0;f<e;++f)b[f]=this[f+a]}return b};db.prototype.HC=function(a){te(a,1,this.length);return this[a]};db.prototype.Vs=function(a){te(a,2,this.length);return this[a]<<8|this[a+1]};db.prototype.u0=function(a,b){a=+a;b|=0;ue(this,a,b,1,255,0);db.xe||(a=Math.floor(a));
this[b]=a&255;return b+1};db.prototype.t0=function(a,b){a=+a;b|=0;ue(this,a,b,4,4294967295,0);if(db.xe)this[b]=a>>>24,this[b+1]=a>>>16,this[b+2]=a>>>8,this[b+3]=a&255;else{var e=b;0>a&&(a=4294967295+a+1);for(var f=0,h=Math.min(this.length-e,4);f<h;++f)this[e+f]=a>>>8*(3-f)&255}return b+4};db.prototype.copy=function(a,b,e,f){e||(e=0);f||0===f||(f=this.length);b>=a.length&&(b=a.length);b||(b=0);0<f&&f<e&&(f=e);if(f===e||0===a.length||0===this.length)return 0;if(0>b)throw new RangeError("targetStart out of bounds");
if(0>e||e>=this.length)throw new RangeError("sourceStart out of bounds");if(0>f)throw new RangeError("sourceEnd out of bounds");f>this.length&&(f=this.length);a.length-b<f-e&&(f=a.length-b+e);var h=f-e;if(this===a&&e<b&&b<f)for(f=h-1;0<=f;--f)a[f+b]=this[f+e];else if(1E3>h||!db.xe)for(f=0;f<h;++f)a[f+b]=this[f+e];else Uint8Array.prototype.set.call(a,this.subarray(e,e+h),b);return h};db.prototype.fill=function(a,b,e,f){if("string"===typeof a){"string"===typeof b?(f=b,b=0,e=this.length):"string"===
typeof e&&(f=e,e=this.length);if(1===a.length){var h=a.charCodeAt(0);256>h&&(a=h)}if(void 0!==f&&"string"!==typeof f)throw new TypeError("encoding must be a string");if("string"===typeof f&&!db.KJ(f))throw new TypeError("Unknown encoding: "+f);}else"number"===typeof a&&(a&=255);if(0>b||this.length<b||this.length<e)throw new RangeError("Out of range index");if(e<=b)return this;b>>>=0;e=void 0===e?this.length:e>>>0;a||(a=0);if("number"===typeof a)for(f=b;f<e;++f)this[f]=a;else for(a=db.isBuffer(a)?
a:Ce((new db(a,f)).toString()),h=a.length,f=0;f<e-b;++f)this[f+b]=a[f%h];return this};var Ke=/[^+\/0-9A-Za-z-_]/g}).call(this,b(127))},345:function(le,y){function b(b){var h=b.length;if(0<h%4)throw Error("Invalid string. Length must be a multiple of 4");b=b.indexOf("=");-1===b&&(b=h);return[b,b===h?0:4-b%4]}function w(b,h,a){for(var f=[],e=h;e<a;e+=3)h=(b[e]<<16&16711680)+(b[e+1]<<8&65280)+(b[e+2]&255),f.push(z[h>>18&63]+z[h>>12&63]+z[h>>6&63]+z[h&63]);return f.join("")}y.byteLength=function(r){r=
b(r);var h=r[1];return 3*(r[0]+h)/4-h};y.CM=function(r){var h=b(r);var a=h[0];h=h[1];var f=new db(3*(a+h)/4-h),e=0,w=0<h?a-4:a,n;for(n=0;n<w;n+=4)a=ke[r.charCodeAt(n)]<<18|ke[r.charCodeAt(n+1)]<<12|ke[r.charCodeAt(n+2)]<<6|ke[r.charCodeAt(n+3)],f[e++]=a>>16&255,f[e++]=a>>8&255,f[e++]=a&255;2===h&&(a=ke[r.charCodeAt(n)]<<2|ke[r.charCodeAt(n+1)]>>4,f[e++]=a&255);1===h&&(a=ke[r.charCodeAt(n)]<<10|ke[r.charCodeAt(n+1)]<<4|ke[r.charCodeAt(n+2)]>>2,f[e++]=a>>8&255,f[e++]=a&255);return f};y.lI=function(b){for(var h=
b.length,a=h%3,f=[],e=0,r=h-a;e<r;e+=16383)f.push(w(b,e,e+16383>r?r:e+16383));1===a?(b=b[h-1],f.push(z[b>>2]+z[b<<4&63]+"==")):2===a&&(b=(b[h-2]<<8)+b[h-1],f.push(z[b>>10]+z[b>>4&63]+z[b<<2&63]+"="));return f.join("")};var z=[],ke=[],db="undefined"!==typeof Uint8Array?Uint8Array:Array;for(le=0;64>le;++le)z[le]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[le],ke["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(le)]=le;ke[45]=62;ke[95]=63},346:function(le,
y){y.read=function(b,w,y,ke,db){var r=8*db-ke-1;var h=(1<<r)-1,a=h>>1,f=-7;db=y?db-1:0;var e=y?-1:1,x=b[w+db];db+=e;y=x&(1<<-f)-1;x>>=-f;for(f+=r;0<f;y=256*y+b[w+db],db+=e,f-=8);r=y&(1<<-f)-1;y>>=-f;for(f+=ke;0<f;r=256*r+b[w+db],db+=e,f-=8);if(0===y)y=1-a;else{if(y===h)return r?NaN:Infinity*(x?-1:1);r+=Math.pow(2,ke);y-=a}return(x?-1:1)*r*Math.pow(2,y-ke)};y.write=function(b,w,y,ke,db,r){var h,a=8*r-db-1,f=(1<<a)-1,e=f>>1,x=23===db?Math.pow(2,-24)-Math.pow(2,-77):0;r=ke?0:r-1;var n=ke?1:-1,id=0>w||
0===w&&0>1/w?1:0;w=Math.abs(w);isNaN(w)||Infinity===w?(w=isNaN(w)?1:0,ke=f):(ke=Math.floor(Math.log(w)/Math.LN2),1>w*(h=Math.pow(2,-ke))&&(ke--,h*=2),w=1<=ke+e?w+x/h:w+x*Math.pow(2,1-e),2<=w*h&&(ke++,h/=2),ke+e>=f?(w=0,ke=f):1<=ke+e?(w=(w*h-1)*Math.pow(2,db),ke+=e):(w=w*Math.pow(2,e-1)*Math.pow(2,db),ke=0));for(;8<=db;b[y+r]=w&255,r+=n,w/=256,db-=8);ke=ke<<db|w;for(a+=db;0<a;b[y+r]=ke&255,r+=n,ke/=256,a-=8);b[y+r-n]|=128*id}},347:function(le){var y={}.toString;le.exports=Array.isArray||function(b){return"[object Array]"==
y.call(b)}}}]);}).call(this || window)
