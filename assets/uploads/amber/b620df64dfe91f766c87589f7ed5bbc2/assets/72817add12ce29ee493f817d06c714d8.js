(function(){/*

SPF
(c) 2012-2017 Google Inc.
https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
*/
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof l&&l];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var ca=ba(this);
function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}function ea(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
da("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}function c(e,f){this.a=e;aa(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.a};var d=0;return b});
da("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ca[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&aa(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(ea(this))}})}return a});function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}da("Array.prototype.keys",function(a){return a?a:function(){return ha(this,function(b){return b})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function n(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(){var e=d.slice();e.push.apply(e,arguments);return a.apply(b,e)}}function ia(a,b){if(a){var c=Array.prototype.slice.call(arguments,1);try{return a.apply(null,c)}catch(d){return d}}}function p(a,b){if(document.createEvent){var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!0,!0,b);return document.dispatchEvent(c)}return!0}
var q=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function ja(){};function r(a,b){if(a.forEach)a.forEach(b,void 0);else for(var c=0,d=a.length;c<d;c++)c in a&&b.call(void 0,a[c],c,a)}function ka(a,b){if(a.every)return a.every(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&!b.call(void 0,a[c],c,a))return!1;return!0}function la(a,b){if(a.some)return a.some(b,void 0);for(var c=0,d=a.length;c<d;c++)if(c in a&&b.call(void 0,a[c],c,a))return!0;return!1}
function ma(a,b){if(a.filter)return a.filter(b,void 0);var c=[];r(a,function(d,e,f){b.call(void 0,d,e,f)&&c.push(d)});return c}function na(a,b){if(a.map)return a.map(b,void 0);var c=[];c.length=a.length;r(a,function(d,e,f){c[e]=b.call(void 0,d,e,f)});return c}function v(a){return"[object Array]"==Object.prototype.toString.call(a)?a:[a]};function w(a,b){return x[a]=b}var x=window._spf_state||{};window._spf_state=x;function y(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}function oa(a){return"[object String]"==Object.prototype.toString.call(a)}var pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")};function z(a,b){a=a.split(b);var c=1==a.length;return[a[0],c?"":b,c?"":a.slice(1).join(b)]}function ra(){return"spfName".replace(/([A-Z])/g,"-$1").toLowerCase()};function sa(a){a.data&&oa(a.data)&&0==a.data.lastIndexOf("spf:",0)&&ta(a.data.substring(4))}function ta(a){var b=ua[a];b&&(delete ua[a],b())}function va(a){window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)}function wa(a){window.removeEventListener?window.removeEventListener("message",a,!1):window.detachEvent&&window.detachEvent("onmessage",a)}
var xa=function(){function a(){b=!1}if(!window.postMessage)return!1;var b=!0;va(a);window.postMessage("","*");wa(a);return b}(),ua={};"async-defers"in x||w("async-defers",ua);ua=x["async-defers"];xa&&("async-listener"in x&&wa(x["async-listener"]),va(sa),w("async-listener",sa));var ya={"animation-class":"spf-animate","animation-duration":425,"cache-lifetime":6E5,"cache-max":50,"cache-unified":!1,"link-class":"spf-link","nolink-class":"spf-nolink","navigate-limit":20,"navigate-lifetime":864E5,"reload-identifier":null,"request-timeout":0,"url-identifier":"?spf=__type__"},A={};"config"in x||w("config",A);A=x.config;function za(a){var b=D();a in b&&delete b[a]}function Aa(){var a=D();for(b in a)Ba(a[b])||delete a[b];a=D();var b=parseInt(A["cache-max"],10);b=isNaN(b)?Infinity:b;b=Object.keys(a).length-b;if(!(0>=b))for(var c=0;c<b;c++){var d=Infinity,e;for(e in a)if(a[e].count<d){var f=e;d=a[e].count}delete a[f]}}function Ba(a){if(!(a&&"data"in a))return!1;var b=a.life;b=isNaN(b)?Infinity:b;a=a.time;return q()-a<b}function Ca(a){var b=parseInt(x["cache-counter"],10)||0;b++;w("cache-counter",b);a.count=b}
function D(a){return!a&&"cache-storage"in x?x["cache-storage"]:w("cache-storage",a||{})};function Da(a){return a.classList?a.classList:a.className&&a.className.match(/\S+/g)||[]}function Ea(a,b){if(b){if(a.classList)return a.classList.contains(b);a=Da(a);return la(a,function(c){return c==b})}return!1}function E(a,b){b&&(a.classList?a.classList.add(b):Ea(a,b)||(a.className+=" "+b))}function F(a,b){if(b)if(a.classList)a.classList.remove(b);else{var c=Da(a);c=ma(c,function(d){return d!=b});a.className=c.join(" ")}};function Fa(a){var b=document.body;b.dataset?b.dataset.spfName=a:b.setAttribute("data-"+ra(),a)};function Ga(a,b){b=b||document;return b.querySelectorAll?b.querySelectorAll(a):[]}function Ha(a,b,c){for(;a;){if(b(a))return a;if(c&&a==c)break;a=a.parentNode}return null}function Ia(a,b,c){b=b||document;var d=b.createElement("iframe");d.id=a||"";d.src='javascript:""';d.style.display="none";c&&(d.onload=n(c,null,d));b.body.appendChild(d);return d};function Ja(a,b,c){var d=null,e=window.history.state;if(e){d={};for(var f in e)d[f]=e[f]}if(b)for(f in d=d||{},b)d[f]=b[f];Ka(!0,a,d,c)}function Ka(a,b,c,d){if(b||c){b=b||window.location.href;c=c||{};var e=q();w("history-timestamp",e);c["spf-timestamp"]=e;if(a)La(c,b);else if(a=Ma().contentWindow.history.pushState,"function"==typeof a)a.call(window.history,c,"",b);else throw Error("history.pushState is not a function.");w("history-url",b);d&&(d=x["history-callback"])&&d(b,c)}}
function Na(a){var b=window.location.href;if(x["history-ignore-pop"])w("history-ignore-pop",!1);else if(a.state){a=a.state;var c=a["spf-timestamp"];b==x["history-url"]?(w("history-timestamp",c),La(a,b)):(a["spf-back"]=c<parseInt(x["history-timestamp"],10),a["spf-current"]=x["history-url"],w("history-timestamp",c),w("history-url",b),(c=x["history-callback"])&&c(b,a))}}
function La(a,b){var c=Ma().contentWindow.history.replaceState;if("function"==typeof c)c.call(window.history,a,"",b);else throw Error("history.replaceState is not a function");}function Ma(){var a=document.getElementById("history-iframe");a||(a=Ia("history-iframe"));return a};function Oa(a,b){a&&b&&(a in G||(G[a]=[]),G[a].push(b))}function Qa(a,b){a in G&&b&&ka(G[a],function(c,d,e){return c==b?(e[d]=null,!1):!0})}function Ra(a){a in G&&r(G[a],function(b,c,d){d[c]=null;b&&b()})}var G={};"ps-s"in x||w("ps-s",G);G=x["ps-s"];function J(a,b,c){var d=K[a];return a&&b?(d||(d=K[a]={items:[],o:0,m:0,B:1}),d.items.push({D:b,delay:c||0})):d&&d.items.length||0}function L(a,b){var c=K[a];if(c){var d=!!c.o||!!c.m;0<c.B&&(b||!d)&&Sa(a,b)}}function Ta(a){(a=K[a])&&a.B--}function Ua(a,b){var c=K[a];c&&(c.B++,L(a,b))}function Va(a){var b=K[a];b&&(Wa(b),delete K[a])}
function Sa(a,b){var c=K[a];if(c&&(Wa(c),0<c.B&&c.items.length)){var d=c.items[0];d&&(a=n(function(e,f){f();e()},null,n(Sa,null,a,b)),b?(c.items.shift(),a(d.D)):Xa(c,d,a))}}function Xa(a,b,c){b.delay?(c=n(c,null,ja),a.m=setTimeout(c,b.delay),b.delay=0):(a.items.shift(),c=n(c,null,b.D),(b=(b=A["advanced-task-scheduler"])&&b.addTask)?a.o=b(c):a.m=setTimeout(c,0))}function Wa(a){if(a.o){var b=A["advanced-task-scheduler"];(b=b&&b.cancelTask)&&b(a.o);a.o=0}a.m&&(clearTimeout(a.m),a.m=0)}var K={};function Ya(a){var b=document.createElement("a");b.href=a;b.href=b.href;a={href:b.href,protocol:b.protocol,host:b.host,hostname:b.hostname,port:b.port,pathname:b.pathname,search:b.search,hash:b.hash,username:b.username,password:b.password};a.origin=a.protocol+"//"+a.host;a.pathname&&"/"==a.pathname[0]||(a.pathname="/"+a.pathname);return a}function N(a,b){a=Ya(a);return b?a.href:z(a.href,"#")[0]}
function Za(a,b){var c=z(a,"#");a=c[0];r(b,function(d){a=a.replace(new RegExp("([?&])"+d+"(?:=[^&]*)?(?:(?=[&])|$)","g"),function(e,f){return"?"==f?f:""})});y(a,"?")&&(a=a.slice(0,-1));return a+c[1]+c[2]}function $a(a){var b=A["advanced-persistent-parameters"]||"",c=z(a,"#");a=c[0];var d=-1!=a.indexOf("?")?"&":"?";return a+(b?d+b:"")+c[1]+c[2]};function ab(a,b,c,d){var e="js"==a;b=O(a,b);var f=c||"^"+b,g=P(a,f),h;c&&(h=Q[P(a,c)])&&b!=h&&(p(e?"spfjsbeforeunload":"spfcssbeforeunload",{name:c,url:h}),e=h,delete Q[P(a,c)],e&&delete S[P(a,e)],delete G[P(a,c)],Oa(g,n(bb,null,a,c,h)));if((e=S[P(a,b)])&&f!=e){delete Q[P(a,e)];delete S[P(a,b)];var k=P(a,e);k&&g&&k in G&&(G[g]=(G[g]||[]).concat(G[k]),delete G[k])}S[P(a,b)]=f;Q[P(a,f)]=b;Oa(g,d);d=n(cb,null,a);T[P(a,b,void 0)]?(e&&f!=e&&(a=db(a,b))&&a.setAttribute("name",c||""),d()):(a=eb(a,b,d,void 0,
void 0,h))&&c&&a.setAttribute("name",c)}function fb(a,b){var c=Q[P(a,b)];delete Q[P(a,b)];c&&delete S[P(a,c)];delete G[P(a,b)];bb(a,b,c)}function bb(a,b,c){c&&(p("js"==a?"spfjsunload":"spfcssunload",{name:b,url:c}),gb(a,c))}function cb(a){var b=P(a,""),c;for(c in G)0==c.indexOf(b)&&ka(c.substring(b.length).split("|"),n(hb,null,a))&&Ra(c)}
function eb(a,b,c,d,e,f){function g(){T[P(a,b,e)]&&(T[P(a,b,e)]=2);h&&m&&m.parentNode&&k==document&&m.parentNode.removeChild(m);c&&setTimeout(c,0);return null}var h="js"==a;b=O(a,b);T[P(a,b,e)]=1;var k=d||document,m=k.createElement(h?"script":"link");if(!b)return g();d=ib(b);m.className=P(a,d);"onload"in m?m.onerror=m.onload=g:m.onreadystatechange=function(){/^c|loade/.test(m.readyState)&&g()};d=k.getElementsByTagName("head")[0]||k.body;h?(m.async=!0,m.src=b,d.insertBefore(m,d.firstChild)):(m.rel=
"stylesheet",m.href=b,(f=f?db(a,f,d):null)?d.insertBefore(m,f):d.appendChild(m));return m}function gb(a,b){b=O(a,b);var c=db(a,b,void 0);c&&c.parentNode&&c.parentNode.removeChild(c);delete T[P(a,b)]}function db(a,b,c){b=ib(b);return Ga("."+P(a,b),c)[0]}
function jb(a){var b="js"==a,c=[];r(Ga(b?"script[src]":'link[rel~="stylesheet"]'),function(d){var e=b?d.src:d.href;e=O(a,e);if(!T[P(a,e,void 0)]){T[P(a,e,void 0)]=2;var f=ib(e);E(d,P(a,f));if(f=d.getAttribute("name"))S[P(a,e)]=f,Q[P(a,f)]=e;c.push(d)}})}
function kb(a,b,c){if(b&&(b=O(a,b),c||!T[P(a,b,void 0)]))if(c&&"img"==a)lb(b);else{var d=ib(b),e=P(a,d),f=P(a,"prefetch");d=document.getElementById(f);if(!d)d=Ia(f,null,function(g){g.title=f;L(f,!0)});else if(!c&&d.contentWindow.document.getElementById(e))return;a=n(mb,null,d,a,b,e,f);d.title?a():J(f,a)}}
function mb(a,b,c,d,e){var f="js"==b,g="css"==b;a=a.contentWindow.document;var h=a.getElementById(d);h&&h.parentNode.removeChild(h);f?(h=a.createElement("object"),nb?a.createElement("script").src=c:h.data=c,h.id=d,a.body.appendChild(h)):g?(h=eb(b,c,null,a,e),h.id=d):(h=a.createElement("img"),nb&&(c=c+"#"+q()),h.src=c,h.id=d,a.body.appendChild(h))}function lb(a){var b=new Image;nb&&(a=a+"#"+q());b.src=a}
function ob(a,b,c){var d="js"==a,e=Q[P(a,c)],f=b.replace(/\s/g,"");f=f||"";for(var g=0,h=0,k=f.length;h<k;++h)g=31*g+f.charCodeAt(h),g%=4294967296;f="hash-"+g;Q[P(a,c)]=f;!pb(a,f)&&(b=qb(a,b))&&(T[P(a,f,void 0)]=2,b&&!d&&(d=ib(f),b.className=P(a,d),b.setAttribute("name",c)),(e=e&&e[0])&&gb(a,e))}
function qb(a,b){b=pa(b);if(!b)return null;var c=document.getElementsByTagName("head")[0]||document.body;"js"==a?(a=document.createElement("script"),a.text=b,c.appendChild(a),c.removeChild(a)):(a=document.createElement("style"),c.appendChild(a),"styleSheet"in a?a.styleSheet.cssText=b:a.appendChild(document.createTextNode(b)));return a}
function O(a,b){var c="rsrc-p-"+a;if(b){var d=b.indexOf("//");if(0>d){if(0==b.lastIndexOf("hash-",0))return b;c=x[c]||"";if(oa(c))b=c+b;else for(var e in c)b=b.replace(e,c[e]);"img"!=a&&(b=0>b.indexOf("."+a)?b+"."+a:b);b=N(b)}else 0==d&&(b=N(b))}return b}function P(a,b,c){return a+"-"+b+(c?"-"+c:"")}function ib(a){return a?String(a).replace(/[^\w]/g,""):""}function pb(a,b){a=T[P(a,b,void 0)];return""==b||2==a}function hb(a,b){b=Q[P(a,b)];return void 0!=b&&pb(a,b)}var T={},S={},Q={},nb=-1!=navigator.userAgent.indexOf(" Trident/");
"rsrc-s"in x||w("rsrc-s",T);T=x["rsrc-s"];"rsrc-n"in x||w("rsrc-n",S);S=x["rsrc-n"];"rsrc-u"in x||w("rsrc-u",Q);Q=x["rsrc-u"];function rb(a){a=v(a);r(a,function(b){kb("img",b,!0)})};function sb(a,b,c){ab("js",a,b,c)}function tb(a){fb("js",a)}function ub(a,b){eb("js",a,b)}function vb(a){a=v(a);r(a,function(b){kb("js",b)})}function wb(a,b,c){a=v(a);a=ma(a,function(g){return!!g});var d=[];r(a,function(g){void 0==Q[P("js",g)]&&d.push(g)});var e=!d.length;if(b){var f=ka(a,n(hb,null,"js"));e&&f?b():(a=P("js",a.sort().join("|")),Oa(a,b))}c&&!e&&c(d)}function xb(a,b){a=v(a);r(a,function(c){if(c){var d=yb[c]||c;d=O("js",d);var e=Q[P("js",c)];e&&d!=e&&zb(c)}});wb(a,b,Ab)}
function Ab(a){r(a,function(b){function c(){sb(e,b)}var d=U[b],e=yb[b]||b;d?xb(d,c):c()})}function zb(a){a=v(a);r(a,function(b){var c=[],d;for(d in U){var e=U[d];e=v(e);r(e,function(f){f==b&&c.push(d)})}r(c,function(f){zb(f)});tb(b)})}function Bb(a,b){ob("js",a,b)}function Cb(a){qb("js",a)}var U={};"js-d"in x||w("js-d",U);U=x["js-d"];var yb={};"js-u"in x||w("js-u",yb);yb=x["js-u"];function Db(a,b,c){ab("css",a,b,c)}function Eb(a,b){eb("css",a,b)}function Fb(a){a=v(a);r(a,function(b){kb("css",b)})};function Gb(a,b,c){if(b){b=[];var d=0;c&&(a+="\r\n");var e=a.indexOf("[\r\n",d);for(-1<e&&(d=e+3);-1<(e=a.indexOf(",\r\n",d));){var f=pa(a.substring(d,e));d=e+3;f&&b.push(JSON.parse(f))}e=a.indexOf("]\r\n",d);-1<e&&(f=pa(a.substring(d,e)),d=e+3,f&&b.push(JSON.parse(f)));f="";a.length>d&&(f=a.substring(d),c&&y(f,"\r\n")&&(f=f.substring(0,f.length-2)));b=Hb(b);return{A:b,g:f}}a=JSON.parse(a);b=Hb(v(a));return{A:b,g:""}}
function V(a,b,c,d){var e=c&&0==c.type.lastIndexOf("navigate",0),f=c&&c.reverse,g=c&&!!c.position,h=c&&c.j,k=b.name||"",m="process "+N(a),B=!A["experimental-process-async"];var u=0;b.timing||(b.timing={});b.title&&(document.title=b.title);e&&b.url&&N(b.url)!=N(window.location.href)&&Ja(b.url+window.location.hash);b.head&&(u=n(function(t,C){t=W(t);Ib(t);Jb(t);Ta(m);Kb(t,function(){C.spfProcessHead=q();Ua(m,B)})},null,b.head,b.timing),u=J(m,u));b.attr&&(u=n(function(t,C){for(var H in t){var M=document.getElementById(H);
if(M){var R=void 0,Pb=t[H];for(R in Pb){var qa=Pb[R];"class"==R?M.className=qa:"style"==R?M.style.cssText=qa:(M.setAttribute(R,qa),"value"==R&&(M[R]=qa))}}}C.spfProcessAttr=q()},null,b.attr,b.timing),u=J(m,u));var I=b.body||{},Lc=u,Pa;for(Pa in I)u=n(function(t,C){if(t=document.getElementById(t)){!e||g||h||(w("nav-scroll-position",null),w("nav-scroll-url",null),window.scroll(0,0),h=!0,c&&(c.j=!0));var H=W(C);Jb(H);var M=function(){Ta(m);Kb(H,function(){Ua(m,B)})};C=A["animation-class"];Lb&&Ea(t,C)?
(t=new Mb(t,H.html,C,k,!!f),Ta(m),L(t.key,!0),J(t.key,n(Nb,null,t),0),J(t.key,n(Ob,null,t),17),J(t.key,n(Qb,null,t),t.duration),J(t.key,n(function(){M();Ua(m,B)},null),0),L(t.key)):(C=A["experimental-html-handler"])?(Ta(m),C(H.html,t,function(){M();Ua(m,B)})):(t.innerHTML=H.html,M())}},null,Pa,I[Pa],b.timing),u=J(m,u);I=u-Lc;b.foot?(u=n(function(t,C,H){H&&(C.spfProcessBody=q());t=W(t);Jb(t);Ta(m);Kb(t,function(){C.spfProcessFoot=q();Ua(m,B)})},null,b.foot,b.timing,I),u=J(m,u)):I&&(u=n(function(t){t.spfProcessBody=
q()},null,b.timing),u=J(m,u));d&&(u=J(m,n(d,null,a,b)));L(m,B)}function Rb(a,b,c,d){c="preprocess "+N(a);if(b.head){var e=n(function(h){h=W(h);Ib(h);Sb(h);Tb(h)},null,b.head);J(c,e)}var f=b.body||{},g;for(g in f)f[g]&&(e=n(function(h,k){h=W(k);Sb(h);Tb(h)},null,g,f[g]),J(c,e));b.foot&&(e=n(function(h){h=W(h);Sb(h);Tb(h)},null,b.foot),J(c,e));d&&J(c,n(d,null,a,b));L(c)}
function Nb(a){E(a.a,a.s);E(a.a,a.H);E(a.a,a.K);E(a.a,a.I);E(a.a,a.J);a.l=document.createElement("div");a.l.className=a.S;var b=a.a,c=a.l;if(c){for(var d;d=b.firstChild;)c.appendChild(d);b.appendChild(c)}a.f=document.createElement("div");a.f.className=a.R;a.f.innerHTML=a.P;a.reverse?(b=a.l,b.parentNode.insertBefore(a.f,b)):(b=a.l,b.parentNode.insertBefore(a.f,b.nextSibling))}function Ob(a){F(a.a,a.I);F(a.a,a.J);E(a.a,a.F);E(a.a,a.G)}
function Qb(a){a.a.removeChild(a.l);var b=a.f,c,d=b.parentNode;if(d&&11!=d.nodeType)if(b.removeNode)b.removeNode(!1);else{for(;c=b.firstChild;)d.insertBefore(c,b);d.removeChild(b)}F(a.a,a.F);F(a.a,a.G);F(a.a,a.H);F(a.a,a.K);F(a.a,a.s)}function Hb(a){r(v(a),function(b){if(b){b.head&&(b.head=W(b.head));if(b.body)for(var c in b.body)b.body[c]=W(b.body[c]);b.foot&&(b.foot=W(b.foot))}});return a}
function W(a){var b=new Ub;if(!a)return b;if(!oa(a))return a.scripts&&r(a.scripts,function(c){b.scripts.push({url:c.url||"",text:c.text||"",name:c.name||"",async:c.async||!1})}),a.styles&&r(a.styles,function(c){b.styles.push({url:c.url||"",text:c.text||"",name:c.name||""})}),a.links&&r(a.links,function(c){"spf-preconnect"==c.rel&&b.links.push({url:c.url||"",rel:c.rel||""})}),b.html=a.html||"",b;a=a.replace(Vb,function(c,d,e,f){if("script"==d){d=(d=e.match(Wb))?d[1]:"";var g=e.match(Xb);g=g?g[1]:"";
var h=Yb.test(e);e=Zb.exec(e);return(e=!e||-1!=e[1].indexOf("/javascript")||-1!=e[1].indexOf("/x-javascript")||-1!=e[1].indexOf("/ecmascript"))?(b.scripts.push({url:g,text:f,name:d,async:h}),""):c}return"style"==d&&(d=(d=e.match(Wb))?d[1]:"",e=Zb.exec(e),e=!e||-1!=e[1].indexOf("text/css"))?(b.styles.push({url:"",text:f,name:d}),""):c});a=a.replace($b,function(c,d){var e=d.match(ac);e=e?e[1]:"";return"stylesheet"==e?(e=(e=d.match(Wb))?e[1]:"",d=(d=d.match(bc))?d[1]:"",b.styles.push({url:d,text:"",
name:e}),""):"spf-preconnect"==e?(d=(d=d.match(bc))?d[1]:"",b.links.push({url:d,rel:e}),""):c});b.html=a;return b}function Kb(a,b){if(0>=a.scripts.length)b&&b();else{var c=-1,d=function(){c++;if(c<a.scripts.length){var e=a.scripts[c],f=function(){};e.url?f=e.name?n(sb,null,e.url,e.name):n(ub,null,e.url):e.text&&(f=e.name?n(Bb,null,e.text,e.name):n(Cb,null,e.text));e.url&&!e.async?f(d):(f(),d())}else b&&b()};d()}}
function Tb(a){0>=a.scripts.length||(a=na(a.scripts,function(b){return b.url}),vb(a))}function Jb(a){0>=a.styles.length||r(a.styles,function(b){b.url?b.name?Db(b.url,b.name):Eb(b.url):b.text&&(b.name?ob("css",b.text,b.name):qb("css",b.text))})}function Sb(a){0>=a.styles.length||(a=na(a.styles,function(b){return b.url}),Fb(a))}function Ib(a){0>=a.links.length||(a=na(a.links,function(b){return"spf-preconnect"==b.rel?b.url:""}),rb(a))}
function Mb(a,b,c,d,e){var f=parseInt(A["animation-duration"],10);this.a=a;this.P=b;this.duration=f;this.reverse=e;b=document.body;b=(b.dataset?b.dataset.spfName:b.getAttribute("data-"+ra()))||"";f=parseInt(x.uid,10)||0;f++;this.key=a["spf-key"]||(a["spf-key"]=""+w("uid",f));this.H=b&&c+"-from-"+b;this.K=d&&c+"-to-"+d;this.l=null;this.S=c+"-old";this.f=null;this.R=c+"-new";this.s=c+(e?"-reverse":"-forward");this.I=c+"-start";this.J=this.s+"-start";this.F=c+"-end";this.G=this.s+"-end"}
function Ub(){this.html="";this.scripts=[];this.styles=[];this.links=[]}
var Lb=function(){var a=document.createElement("div");return"transition"in a.style?!0:la(["webkit","Moz","Ms","O","Khtml"],function(b){return b+"Transition"in a.style})}(),$b=/\x3clink([\s\S]*?)\x3e/ig,Vb=/\x3c(script|style)([\s\S]*?)\x3e([\s\S]*?)\x3c\/\1\x3e/ig,Yb=/(?:\s|^)async(?:\s|=|$)/i,bc=/(?:\s|^)href\s*=\s*["']?([^\s"']+)/i,Wb=/(?:\s|^)name\s*=\s*["']?([^\s"']+)/i,ac=/(?:\s|^)rel\s*=\s*["']?([^\s"']+)/i,Xb=/(?:\s|^)src\s*=\s*["']?([^\s"']+)/i,Zb=/(?:\s|^)type\s*=\s*["']([^"']+)["']/i;/*

 SPF
 (c) 2012-2017 Google Inc.
 https://ajax.googleapis.com/ajax/libs/spf/2.4.0/LICENSE
*/
function cc(a,b,c,d){var e=d||{},f=!1,g=0,h,k=new XMLHttpRequest;k.open(a,b,!0);k.timing={};var m=k.abort;k.abort=function(){clearTimeout(h);k.onreadystatechange=null;m.call(k)};k.onreadystatechange=function(){var u=k.timing;if(2==k.readyState){u.responseStart=u.responseStart||q();if("json"==k.responseType)f=!1;else if(A["assume-all-json-requests-chunked"]||-1<(k.getResponseHeader("Transfer-Encoding")||"").toLowerCase().indexOf("chunked"))f=!0;else{u=k.getResponseHeader("X-Firefox-Spdy");var I=window.chrome&&
chrome.loadTimes&&chrome.loadTimes();I=I&&I.wasFetchedViaSpdy;f=!(!u&&!I)}e.M&&e.M(k)}else 3==k.readyState?f&&e.u&&(u=k.responseText.substring(g),g=k.responseText.length,e.u(k,u)):4==k.readyState&&(u.responseEnd=u.responseEnd||q(),window.performance&&window.performance.getEntriesByName&&(k.resourceTiming=window.performance.getEntriesByName(b).pop()),f&&e.u&&k.responseText.length>g&&(u=k.responseText.substring(g),g=k.responseText.length,e.u(k,u)),clearTimeout(h),e.L&&e.L(k))};"responseType"in k&&"json"==
e.responseType&&(k.responseType="json");e.withCredentials&&(k.withCredentials=e.withCredentials);d="FormData"in window&&c instanceof FormData;a="POST"==a&&!d;if(e.headers)for(var B in e.headers)k.setRequestHeader(B,e.headers[B]),"content-type"==B.toLowerCase()&&(a=!1);a&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");0<e.O&&(h=setTimeout(function(){k.abort();e.N&&e.N(k)},e.O));k.timing.fetchStart=q();k.send(c);return k};function dc(a,b){b=b||{};b.method=((b.method||"GET")+"").toUpperCase();b.type=b.type||"request";var c=a,d=A["url-identifier"]||"";if(d){d=d.replace("__type__",b.type||"");var e=z(c,"#"),f=z(e[0],"?");c=f[0];var g=f[1];f=f[2];var h=e[1];e=e[2];if(0==d.lastIndexOf("?",0))g&&(d=d.replace("?","&")),f+=d;else{if(0==d.lastIndexOf(".",0))if(y(c,"/"))d="index"+d;else{var k=c.lastIndexOf(".");-1<k&&(c=c.substring(0,k))}else y(c,"/")&&0==d.lastIndexOf("/",0)&&(d=d.substring(1));c+=d}c=c+g+f+h+e}d=N(c);c={};
c.spfUrl=d;c.startTime=q();c.fetchStart=c.startTime;g=ec(a,b.current,null,b.type,!1);g=fc(g,b.current);c.spfPrefetched=!!g&&"prefetch"==g.type;c.spfCached=!!g;if(g){a=n(gc,null,a,b,c,g.key,g.response);b=window._spf_state=window._spf_state||{};var m=parseInt(b.uid,10)||0;m++;b=b.uid=m;ua[b]=a;xa?window.postMessage("spf:"+b,"*"):window.setTimeout(n(ta,null,b),0);return null}g={};if(f=A["request-headers"])for(m in f)h=f[m],g[m]=null==h?"":String(h);if(b.headers)for(m in b.headers)h=b.headers[m],g[m]=
null==h?"":String(h);null!=b.c&&(g["X-SPF-Referer"]=b.c);null!=b.current&&(g["X-SPF-Previous"]=b.current);if(m=A["advanced-header-identifier"])g["X-SPF-Request"]=m.replace("__type__",b.type),g.Accept="application/json";m=new hc;f=n(ic,null,a,b,c,m);a={headers:g,O:A["request-timeout"],M:n(jc,null,a,m),u:n(kc,null,a,b,c,m),L:f,N:f};b.withCredentials&&(a.withCredentials=b.withCredentials);A["advanced-response-type-json"]&&(a.responseType="json");return"POST"==b.method?cc("POST",d,b.C,a):cc("GET",d,null,
a)}function gc(a,b,c,d,e){var f=!1;c.responseStart=c.responseEnd=q();b.type&&0==b.type.lastIndexOf("navigate",0)&&(c.navigationStart=c.startTime,A["cache-unified"]||(za(d),f=!0));b.i&&"multipart"==e.type&&r(e.parts,function(g){g.timing||(g.timing={});g.timing.spfCached=!!c.spfCached;g.timing.spfPrefetched=!!c.spfPrefetched;b.i(a,g)});lc(a,b,c,e,f)}function jc(a,b,c){a=c.getResponseHeader("X-SPF-Response-Type")||"";b.f=-1!=a.toLowerCase().indexOf("multipart")}
function kc(a,b,c,d,e,f,g){if(d.f){f=d.g+f;try{var h=Gb(f,!0,g)}catch(k){e.abort();b.h&&b.h(a,k,e);return}b.i&&r(h.A,function(k){k.timing||(k.timing={});k.timing.spfCached=!!c.spfCached;k.timing.spfPrefetched=!!c.spfPrefetched;b.i(a,k)});d.a=d.a.concat(h.A);d.g=h.g}}
function ic(a,b,c,d,e){if(e.timing)for(var f in e.timing)c[f]=e.timing[f];if(e.resourceTiming)if("load"==b.type)for(var g in e.resourceTiming)c[g]=e.resourceTiming[g];else if(window.performance&&window.performance.timing&&(f=window.performance.timing.navigationStart,f+e.resourceTiming.startTime>=c.startTime))for(var h in e.resourceTiming)g=e.resourceTiming[h],void 0!==g&&(y(h,"Start")||y(h,"End")||"startTime"==h)&&(c[h]=f+Math.round(g));"load"!=b.type&&(c.navigationStart=c.startTime);d.a.length&&
(d.g=pa(d.g),d.g&&kc(a,b,c,d,e,"",!0));if("json"==e.responseType){if(!e.response){b.h&&b.h(a,Error("JSON response parsing failed"),e);return}var k=Hb(v(e.response))}else try{k=Gb(e.responseText).A}catch(B){b.h&&b.h(a,B,e);return}if(b.i&&1<k.length)for(d=d.a.length;d<k.length;d++)e=k[d],e.timing||(e.timing={}),e.timing.spfCached=!!c.spfCached,e.timing.spfPrefetched=!!c.spfPrefetched,b.i(a,e);if(1<k.length){var m;r(k,function(B){B.cacheType&&(m=B.cacheType)});k={parts:k,type:"multipart"};m&&(k.cacheType=
m)}else k=1==k.length?k[0]:{};lc(a,b,c,k,!0)}function lc(a,b,c,d,e){if(e&&"POST"!=b.method&&(e=ec(a,b.current,d.cacheType,b.type,!0))){d.cacheKey=e;var f={response:d,type:b.type||""},g=parseInt(A["cache-lifetime"],10),h=parseInt(A["cache-max"],10);0>=g||0>=h||(h=D(),f={data:f,life:g,time:q(),count:0},Ca(f),h[e]=f,setTimeout(Aa,1E3))}d.timing=c;b.v&&b.v(a,d)}
function ec(a,b,c,d,e){a=N(a);var f;A["cache-unified"]?f=a:"navigate-back"==d||"navigate-forward"==d?f="history "+a:"navigate"==d?f=(e?"history ":"prefetch ")+a:"prefetch"==d&&(f=e?"prefetch "+a:"");b&&"url"==c?f+=" previous "+b:b&&"path"==c&&(f+=" previous "+Ya(b).pathname);return f||""}
function fc(a,b){var c=[];b&&(c.push(a+" previous "+b),c.push(a+" previous "+Ya(b).pathname));c.push(a);var d=null;la(c,function(e){a:{var f=D();if(e in f){f=f[e];if(Ba(f)){Ca(f);f=f.data;break a}za(e)}f=void 0}f&&(d={key:e,response:f.response,type:f.type});return!!f});return d}function hc(){this.f=!1;this.g="";this.a=[]};function mc(a){return Ha(a,function(b){return Ea(b,A["link-class"])})}function nc(a){return Ha(a,function(b){return Ea(b,A["nolink-class"])})}function oc(a,b){return Ha(a,function(c){return c.href&&"img"!=c.tagName.toLowerCase()},b)}function pc(a){if(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||0<a.button)return null;var b=mc(a.target);return!b||A["nolink-class"]&&nc(a.target)?null:(a=oc(a.target,b))?a.href:null}function qc(a){return Ya(a).origin!=Ya(window.location.href).origin?!1:!0}
function rc(){if(!x["nav-init"])return!1;var a=parseInt(x["nav-counter"],10)||0;a++;var b=parseInt(A["navigate-limit"],10);b=isNaN(b)?Infinity:b;if(a>b)return!1;a=parseInt(x["nav-init-time"],10);a--;a=q()-a;b=parseInt(A["navigate-lifetime"],10);b=isNaN(b)?Infinity:b;return a>b?!1:!0}function sc(a,b){b=b||window.location.href;return-1!=a.indexOf("#")&&(a=N(a),b=N(b),a==b)?!1:!0}
function tc(a){if(!a.defaultPrevented){var b=pc(a);b&&(b=$a(b),qc(b)&&rc()&&p("spfclick",{url:b,target:a.target})&&(uc(b,{},new vc),a.preventDefault()))}}function wc(a){var b=pc(a);b&&setTimeout(function(){xc(b)},0)}function yc(){var a=x["nav-scroll-position"]||null;var b=x["nav-scroll-url"]||"";a=a&&b==window.location.href?a:null;zc();a&&window.scroll.apply(null,a)}
function Ac(a,b){b=new vc({current:b&&b["spf-current"],history:!0,position:b&&b["spf-position"],c:b&&b["spf-referer"],reverse:!(!b||!b["spf-back"])});var c=A["reload-identifier"];c&&(a=Za(a,[c]));qc(a)?rc()?p("spfhistory",{url:a,referer:b.c,previous:b.current})&&(b.position&&(w("nav-scroll-position",[window.pageXOffset,window.pageYOffset]),w("nav-scroll-url",window.location.href)),uc(a,{},b)):X(a,"1"):X(a,"9")}
function uc(a,b,c){Bc();if(sc(a,c.current))if(Cc(a,c.c,c.current,b)){w("nav-counter",(parseInt(x["nav-counter"],10)||0)+1);Dc(a);var d=N(a),e="preprocess "+N(d);for(f in K)e!=f&&0==f.lastIndexOf("preprocess",0)&&Va(f);d=Ec()[d];w("nav-request",d);w("nav-promote",null);w("nav-promote-time",null);if(d&&4!=d.readyState)d="preprocess "+N(a),e="promote "+N(a),w("nav-promote",a),w("nav-promote-time",q()),Va(d),L(e,!0),c.history||Fc(a,c.c,n(Y,null,b));else{d=n(Y,null,b);e=n(Gc,null,b,c);var f=n(Hc,null,
b,c);A["advanced-navigate-persist-timing"]||Ic();c.type="navigate";c.history&&(c.type+=c.reverse?"-back":"-forward");b=dc(a,{method:b.method,headers:b.headers,i:e,h:d,v:f,C:b.postData,type:c.type,current:c.current,c:c.c});w("nav-request",b);c.history||Fc(a,c.c,d)}}else X(a,"2");else c.history||Fc(a,c.c,n(Y,null,b)),Jc(a,c)}
function Jc(a,b){if(b.position)zc(),window.scroll.apply(null,b.position),b.j=!0;else if(a=z(a,"#"),a[2]){if(a=document.getElementById(a[2]))zc(),a.scrollIntoView(),b.j=!0}else b.j||(zc(),window.scroll(0,0),b.j=!0)}function Fc(a,b,c){try{Ja(null,{"spf-position":[window.pageXOffset,window.pageYOffset]}),N(a,!0)!=window.location.href&&Ka(!1,a,{"spf-referer":b},void 0)}catch(d){Bc(),c(a,d)}}function Y(a,b,c,d){w("nav-request",null);Kc(b,c,a,void 0,d)&&X(b,"10",c)}
function Gc(a,b,c,d){if(Mc(c,d,a))if(d.reload)X(c,"5");else if(d.redirect)Nc(a,d.redirect);else try{V(c,d,b,function(){Oc(c,d,a)})}catch(e){Y(a,c,e)}else X(c,"3")}
function Hc(a,b,c,d){w("nav-request",null);if(x["nav-promote"]==b.b){var e=d.timing||{};e.navigationStart=x["nav-promote-time"];e.spfPrefetched=!0}var f="multipart"==d.type;if(!f){if(!Pc(c,d,a)){X(c,"4");return}if(d.reload){X(c,"5");return}if(d.redirect){Nc(a,d.redirect);return}}try{V(c,f?{}:d,b,function(){var g=d.name||"";f&&r(d.parts,function(h){g=h.name||g});Fa(g);Jc(c,b);Qc(c,d,a)})}catch(g){Y(a,c,g)}}function Nc(a,b){try{b+=window.location.hash,Ja(b,null,!0)}catch(c){Bc(),Y(a,b,c)}}
function Bc(){var a=x["nav-request"];a&&(a.abort(),w("nav-request",null))}function Z(a,b){if(a){var c=Array.prototype.slice.call(arguments);c[0]=a;c=ia.apply(null,c)}return!1!==c}
function X(a,b,c){c=c?c.message:"";Bc();Dc();var d=b;c&&(d+=" Message: "+c);p("spfreload",{url:a,reason:d});var e=window.location.href;A["experimental-remove-history"]&&e==a&&(w("history-ignore-pop",!0),window.history.back());setTimeout(function(){var f=A["reload-identifier"];if(f){var g={};g[f]=encodeURIComponent(b);f=a;var h=z(f,"#");f=h[0];var k=-1!=f.indexOf("?")?"&":"?",m;for(m in g)f+=k+m,g[m]&&(f+="="+g[m]),k="&";a=f+h[1]+h[2]}window.location.href=a;sc(a,e)||window.location.reload()},0)}
function Rc(a,b,c){c.b=c.b||a;if(Cc(a,void 0,void 0,b,!0)){var d=n(Sc,null,!1,b,c),e=n(Tc,null,!1,b,c),f=n(Uc,null,!1,b,c);c.type="load";dc(a,{method:b.method,headers:b.headers,i:e,h:d,v:f,C:b.postData,type:c.type,withCredentials:b.withCredentials})}}function xc(a,b){a=$a(a);Vc(a,b||{},new vc)}
function Vc(a,b,c){c.b=c.b||a;if(Cc(a,void 0,void 0,b,!0)){var d=n(Sc,null,!0,b,c),e=n(Tc,null,!0,b,c),f=n(Uc,null,!0,b,c);c.type="prefetch";b=dc(a,{method:b.method,headers:b.headers,i:e,h:d,v:f,C:b.postData,type:c.type,current:c.current});a=N(a);Ec()[a]=b}}function Sc(a,b,c,d,e){a&&Wc(d);a&&x["nav-promote"]==c.b?Y(b,d,e):Kc(d,e,b,!0)}
function Tc(a,b,c,d,e){if(Mc(d,e,b,!0)){if(e.reload){if(!a)return;if(x["nav-promote"]==c.b){X(d,"5");return}}if(e.redirect)Xc(a,b,c,e.redirect);else{if(a){var f=n(Gc,null,b,c,d,e),g="promote "+N(c.b);J(g,f);if(x["nav-promote"]==c.b){L(g,!0);return}}(a?Rb:V)(d,e,c,function(){Oc(d,e,b,!0)})}}}
function Uc(a,b,c,d,e){var f="multipart"==e.type;if(!f){if(!Pc(d,e,b,!0)){X(d,"4");return}if(e.reload){if(!a)return;if(x["nav-promote"]==c.b){X(d,"5");return}}if(e.redirect){Xc(a,b,c,e.redirect);return}}var g="promote "+N(c.b);if(a){Wc(d);if(x["nav-promote"]==c.b){J(g,n(Hc,null,b,c,d,e));L(g,!0);return}Va(g)}g=a?Rb:V;try{g(d,f?{}:e,c,function(){Qc(d,e,b,!0)})}catch(h){Sc(a,b,c,d,h)}}
function Xc(a,b,c,d){a=a?Vc:Rc;var e={};r("onError onRequest onPartProcess onPartDone onProcess onDone".split(" "),function(f){e[f]=b[f]});a(d,e,c)}function Kc(a,b,c,d,e){a={url:a,err:b,xhr:e};(c=Z((c||{}).onError,a))&&!d&&(c=p("spferror",a));return c}function Cc(a,b,c,d,e){a={url:a,referer:b,previous:c};(d=Z((d||{}).onRequest,a))&&!e&&(d=p("spfrequest",a));return d}function Mc(a,b,c,d){a={url:a,part:b};(c=Z((c||{}).onPartProcess,a))&&!d&&(c=p("spfpartprocess",a));return c}
function Oc(a,b,c,d){a={url:a,part:b};(c=Z((c||{}).onPartDone,a))&&!d&&p("spfpartdone",a)}function Pc(a,b,c,d){a={url:a,response:b};(c=Z((c||{}).onProcess,a))&&!d&&(c=p("spfprocess",a));return c}function Qc(a,b,c,d){a={url:a,response:b};(c=Z((c||{}).onDone,a))&&!d&&p("spfdone",a)}function Wc(a){a=N(a);var b=Ec(),c=b[a];c&&c.abort();delete b[a]}function Dc(a){var b=Ec();a=a&&N(a);for(var c in b)a!=c&&Wc(c)}
var Ic,Yc=window.performance&&(window.performance.clearResourceTimings||window.performance.webkitClearResourceTimings||window.performance.mozClearResourceTimings||window.performance.msClearResourceTimings||window.performance.oClearResourceTimings);Ic=Yc?n(Yc,window.performance):ja;function Ec(){return"nav-prefetches"in x?x["nav-prefetches"]:w("nav-prefetches",{})}function zc(){w("nav-scroll-position",null);w("nav-scroll-url",null)}
function vc(a){a=a||{};this.current=a.history&&a.current?a.current:window.location.href;this.history=!!a.history;this.b=a.b||"";this.position=a.position||null;this.c=void 0!=a.c?a.c:window.location.href;this.reverse=!!a.reverse;this.j=!!a.j;this.type=a.type||""};function Zc(){jb("js");jb("css");"complete"==document.readyState&&(document.removeEventListener?document.removeEventListener("DOMContentLoaded",Zc,!1):document.detachEvent&&document.detachEvent("onreadystatechange",Zc))}document.addEventListener?document.addEventListener("DOMContentLoaded",Zc,!1):document.attachEvent&&document.attachEvent("onreadystatechange",Zc);Zc();
var $c={init:function(a){var b=!("function"!=typeof window.history.pushState&&!Ma().contentWindow.history.pushState);a=a||{};for(var c in ya)A[c]=c in a?a[c]:ya[c];for(c in a)c in ya||(A[c]=a[c]);if(b){c=Kc;if(!x["history-init"]&&window.addEventListener){a=window.location.href;window.addEventListener("popstate",Na,!1);w("history-init",!0);w("history-callback",Ac);w("history-error-callback",c);w("history-listener",Na);w("history-url",a);w("history-timestamp",q());var d={"spf-referer":document.referrer};
try{Ja(a,d)}catch(e){c&&c(a,e)}}!x["nav-init"]&&document.addEventListener&&(w("nav-init",!0),w("nav-init-time",q()),w("nav-counter",0),document.addEventListener("click",tc,!1),w("nav-listener",tc),!A["experimental-prefetch-mousedown"]||"ontouchstart"in window||0<window.navigator.maxTouchPoints||0<window.navigator.msMaxTouchPoints||(document.addEventListener("mousedown",wc,!1),w("nav-mousedown-listener",wc)),document.addEventListener("scroll",yc,!1),w("nav-scroll-listener",yc))}return b},dispose:function(){"undefined"!=
typeof History&&History.prototype.pushState&&(Bc(),x["nav-init"]&&(document.removeEventListener&&(document.removeEventListener("click",x["nav-listener"],!1),document.removeEventListener("mousedown",x["nav-mousedown-listener"],!1),document.removeEventListener("scroll",x["nav-scroll-listener"],!1)),w("nav-listener",null),w("nav-mousedown-listener",null),w("nav-scroll-listener",null),w("nav-scroll-position",null),w("nav-scroll-url",null),w("nav-init",!1),w("nav-init-time",null),w("nav-counter",null)),
x["history-init"]&&(window.removeEventListener&&window.removeEventListener("popstate",x["history-listener"],!1),w("history-init",!1),w("history-callback",null),w("history-error-callback",null),w("history-listener",null),w("history-url",null),w("history-timestamp",0)));for(var a in A)delete A[a]},navigate:function(a,b){a&&(a=$a(a),qc(a)?rc()?uc(a,b||{},new vc):X(a,"1"):X(a,"9"))},load:function(a,b){a=$a(a);Rc(a,b||{},new vc)},prefetch:xc,process:function(a,b){function c(f,g,h,k){f==g&&b&&b(k)}var d=
window.location.href;if("multipart"==a.type){a=a.parts;var e=a.length-1;r(a,function(f,g){V(d,f,null,n(c,null,g,e))})}else V(d,a,null,n(c,null,0,0))}},ad={cache:{remove:za,clear:function(){D({})}},script:{load:sb,get:ub,ready:wb,done:function(a){Q[P("js",a)]="";cb("js")},require:xb,declare:function(a,b){if(a){for(var c in a)U[c]=a[c];if(b)for(c in b)yb[c]=b[c]}},path:function(a){w("rsrc-p-js",a)},unload:tb,ignore:function(a,b){a=v(a);a=P("js",a.sort().join("|"));Qa(a,b)},unrequire:zb,prefetch:vb},
style:{load:Db,get:Eb,unload:function(a){fb("css",a)},path:function(a){w("rsrc-p-css",a)},prefetch:Fb}},l=this;l.spf=l.spf||{};var bd=l.spf,cd;for(cd in $c)bd[cd]=$c[cd];for(var dd in ad)for(var ed in ad[dd])bd[dd]=bd[dd]||{},bd[dd][ed]=ad[dd][ed];p("spfready");}).call(this);