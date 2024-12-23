window.Modernizr=function(e,t,n){function r(e){h.cssText=e}function i(e,t){return typeof e===t}function o(){s.input=function(n){for(var r=0,i=n.length;r<i;r++)b[n[r]]=n[r]in m;return b.list&&(b.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),b}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),s.inputtypes=function(e){for(var r,i,o,a=0,l=e.length;a<l;a++)m.setAttribute("type",i=e[a]),r="text"!==m.type,r&&(m.value=y,m.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&m.style.WebkitAppearance!==n?(d.appendChild(m),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(m,null).WebkitAppearance&&0!==m.offsetHeight,d.removeChild(m)):/^(search|tel)$/.test(i)||(/^(url|email)$/.test(i)?r=m.checkValidity&&!1===m.checkValidity():/^color$/.test(i)?(d.appendChild(m),d.offsetWidth,r=m.value!=y,d.removeChild(m)):r=m.value!=y)),g[e[a]]=!!r;return g}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var a,l,c="2.5.3",s={},u=!0,d=t.documentElement,p="modernizr",f=t.createElement(p),h=f.style,m=t.createElement("input"),y=":)",v=({}.toString,{}),g={},b={},E=[],C=E.slice,S=function(e,n,r,i){var o,a,l,c=t.createElement("div"),s=t.body,u=s||t.createElement("body");if(parseInt(r,10))for(;r--;)l=t.createElement("div"),l.id=i?i[r]:p+(r+1),c.appendChild(l);return o=["&#173;","<style>",e,"</style>"].join(""),c.id=p,(s?c:u).innerHTML+=o,u.appendChild(c),s||(u.style.background="",d.appendChild(u)),a=n(c,e),s?c.parentNode.removeChild(c):u.parentNode.removeChild(u),!!a},x={}.hasOwnProperty;l=i(x,"undefined")||i(x.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return x.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=C.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,a=t.apply(o,n.concat(C.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(C.call(arguments)))};return r});!function(e,n){var r=e.join(""),i=n.length;S(r,function(e,n){for(var r=t.styleSheets[t.styleSheets.length-1],o=r?r.cssRules&&r.cssRules[0]?r.cssRules[0].cssText:r.cssText||"":"",a=e.childNodes,l={};i--;)l[a[i].id]=a[i];s.fontface=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0])},i,n)}(['@font-face {font-family:"font";src:url("https://")}'],["fontface"]);v.fontface=function(){return s.fontface};for(var j in v)l(v,j)&&(a=j.toLowerCase(),s[a]=v[j](),E.push((s[a]?"":"no-")+a));return s.input||o(),s.addTest=function(e,t){if("object"==typeof e)for(var r in e)l(e,r)&&s.addTest(r,e[r]);else{if(e=e.toLowerCase(),s[e]!==n)return s;t="function"==typeof t?t():t,d.className+=" "+(t?"":"no-")+e,s[e]=t}return s},r(""),f=m=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=u.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t={},n=e.createElement,i=e.createDocumentFragment,o=i();e.createElement=function(e){var r=(t[e]||(t[e]=n(e))).cloneNode();return u.shivMethods&&r.canHaveChildren&&!s.test(e)?o.appendChild(r):r},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t[e]=n(e),o.createElement(e),'c("'+e+'")'})+");return n}")(u,o)}function o(e){var t;return e.documentShived?e:(u.shivCSS&&!a&&(t=!!n(e,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),l||(t=!i(e)),t&&(e.documentShived=t),e)}var a,l,c=e.html5||{},s=/^<|^(?:button|form|map|select|textarea)$/i;!function(){var e=t.createElement("a");e.innerHTML="<xyz></xyz>",a="hidden"in e,l=1==e.childNodes.length||function(){try{t.createElement("a")}catch(e){return!0}var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}();var u={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==c.shivCSS,shivMethods:!1!==c.shivMethods,type:"default",shivDocument:o};e.html5=u,o(t)}(this,t),s._version=c,s.testStyles=S,d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+E.join(" "):""),s}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==y.call(e)}function i(e){return"string"==typeof e}function o(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function l(){var e=v.shift();g=1,e?e.t?h(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),l()):g=0}function c(e,n,r,i,o,c,s){function u(t){if(!f&&a(d.readyState)&&(b.r=f=1,!g&&l(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&h(function(){C.removeChild(d)},50);for(var r in w[n])w[n].hasOwnProperty(r)&&w[n][r].onload()}}var s=s||p.errorTimeout,d={},f=0,y=0,b={t:r,s:n,e:o,a:c,x:s};1===w[n]&&(y=1,w[n]=[],d=t.createElement(e)),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,y)},v.splice(i,0,b),"img"!=e&&(y||2===w[n]?(C.insertBefore(d,E?null:m),h(u,s)):w[n].push(d))}function s(e,t,n,r,o){return g=0,t=t||"j",i(e)?c("c"==t?x:S,e,t,this.i++,n,r,o):(v.splice(this.i++,0,e),1==v.length&&l()),this}function u(){var e=p;return e.loader={load:s,i:0},e}var d,p,f=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],y={}.toString,v=[],g=0,b="MozAppearance"in f.style,E=b&&!!t.createRange().compareNode,C=E?f:m.parentNode,f=e.opera&&"[object Opera]"==y.call(e.opera),f=!!t.attachEvent&&!f,S=b?"object":f?"script":"img",x=f?"script":S,j=Array.isArray||function(e){return"[object Array]"==y.call(e)},T=[],w={},M={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};p=function(e){function t(e){var t,n,r,e=e.split("!"),i=T.length,o=e.pop(),a=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;n<a;n++)r=e[n].split("="),(t=M[r.shift()])&&(o=t(o,r));for(n=0;n<i;n++)o=T[n](o);return o}function a(e,i,o,a,c){var s=t(e),d=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(i&&(i=r(i)?i:i[e]||i[a]||i[e.split("/").pop().split("?")[0]]||l),s.instead?s.instead(e,i,o,a,c):(w[s.url]?s.noexec=!0:w[s.url]=1,o.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(i)||r(d))&&o.load(function(){u(),i&&i(s.origUrl,c,a),d&&d(s.origUrl,c,a),w[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(i(e))n||(d=function(){var e=[].slice.call(arguments);p.apply(this,e),f()}),a(e,d,t,0,s);else if(Object(e)===e)for(c in l=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--l&&(r(d)?d=function(){var e=[].slice.call(arguments);p.apply(this,e),f()}:d[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(p[c])),a(e[c],d,t,c,s))}else!n&&f()}var l,c,s=!!e.test,u=e.load||e.both,d=e.callback||o,p=d,f=e.complete||o;n(s?e.yep:e.nope,!!u),u&&n(u)}var s,d,f=this.yepnope.loader;if(i(e))a(e,0,f,0);else if(j(e))for(s=0;s<e.length;s++)d=e[s],i(d)?a(d,0,f,0):j(d)?p(d):Object(d)===d&&c(d,f);else Object(e)===e&&c(e,f)},p.addPrefix=function(e,t){M[e]=t},p.addFilter=function(e){T.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=l,e.yepnope.injectJs=function(e,n,r,i,c,s){var u,d,f=t.createElement("script"),i=i||p.errorTimeout;f.src=e;for(d in r)f.setAttribute(d,r[d]);n=s?l:n||o,f.onreadystatechange=f.onload=function(){!u&&a(f.readyState)&&(u=1,n(),f.onload=f.onreadystatechange=null)},h(function(){u||(u=1,n(1))},i),c?f.onload():m.parentNode.insertBefore(f,m)},e.yepnope.injectCss=function(e,n,r,i,a,c){var s,i=t.createElement("link"),n=c?l:n||o;i.href=e,i.rel="stylesheet",i.type="text/css";for(s in r)i.setAttribute(s,r[s]);a||(m.parentNode.insertBefore(i,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("webkit",function(){return RegExp(" AppleWebKit/").test(navigator.userAgent)}),Modernizr.addTest("chrome",function(){return RegExp(" Chrome/").test(navigator.userAgent)}),Modernizr.addTest("windows",function(){return RegExp("Win").test(navigator.platform)}),Modernizr.addTest("ie8",function(){return RegExp("MSIE 8").test(navigator.userAgent)});