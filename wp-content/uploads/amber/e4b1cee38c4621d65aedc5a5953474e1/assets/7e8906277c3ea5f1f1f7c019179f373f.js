/*
 Pagedown
 Original Markdown Copyright (c) 2004-2005 John Gruber
   <http://daringfireball.net/projects/markdown/>

 Original Showdown code copyright (c) 2007 John Fraser

 Modifications and bugfixes (c) 2009 Dana Robinson
 Modifications and bugfixes (c) 2009-2013 Stack Exchange Inc.

 License: MIT
*/
var Markdown;Markdown="object"===typeof exports&&"function"===typeof require?exports:{};
(function(){function q(c){return c}function t(c){return!1}function u(){}function r(){}u.prototype={chain:function(c,l){var m=this[c];if(!m)throw Error("unknown hook "+c);this[c]=m===q?l:function(c){var h=Array.prototype.slice.call(arguments,0);h[0]=m.apply(null,h);return l.apply(null,h)}},set:function(c,l){if(!this[c])throw Error("unknown hook "+c);this[c]=l},addNoop:function(c){this[c]=q},addFalse:function(c){this[c]=t}};Markdown.HookCollection=u;r.prototype={set:function(c,l){this["s_"+c]=l},get:function(c){return this["s_"+
c]}};Markdown.Converter=function(c){function l(a){return a=a.replace(/^[ ]{0,3}\[([^\[\]]+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(\n+)/gm,function(a,b,d,g,H,A,f){b=b.toLowerCase();v.set(b,J(d));if(H)return g+f;A&&x.set(b,A.replace(/"/g,"&quot;"));return""})}function m(a){a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,h);a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,
h);a=a.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,h);a=a.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,h);return a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,h)}function z(a){a=a.replace(/(^\n+|\n+$)/g,"");return"\n\n~K"+(B.push(a)-1)+"K\n\n"}function h(a,e){return z(e)}function C(a,e,b){a=k.preBlockGamut(a,K);a=R(a);a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,"<hr />\n");a=a.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,
"<hr />\n");a=a.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,"<hr />\n");a=n(a);a=t(a);a=S(a);a=k.postBlockGamut(a,K);a=m(a);return a=T(a,e,b)}function D(a){a=k.preSpanGamut(a);a=U(a);a=V(a);a=W(a);a=X(a);a=Y(a);a=Z(a);a=a.replace(/~P/g,"://");a=J(a);a=aa(a);a=a.replace(/  +\n/g," <br>\n");return a=k.postSpanGamut(a)}function V(a){return a=a.replace(/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi,function(a){var e=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return e=
y(e,"!"==a.charAt(1)?"\\`*_/":"\\`*_")})}function Y(a){if(-1===a.indexOf("["))return a;a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,p);a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,p);return a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,p)}function p(a,e,b,d,g,H,A,f){void 0==f&&(f="");a=b.replace(/:\/\//g,"~P");d=d.toLowerCase();if(""==g)if(""==d&&(d=a.toLowerCase().replace(/ ?\n/g," ")),void 0!=v.get(d))g=
v.get(d),void 0!=x.get(d)&&(f=x.get(d));else if(-1<e.search(/\(\s*\)$/m))g="";else return e;g=L(g);e='<a href="'+g+'"';""!=f&&(f=w(f),f=y(f,"*_"),e+=' title="'+f+'"');return e+(">"+a+"</a>")}function X(a){if(-1===a.indexOf("!["))return a;a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,M);return a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,M)}function w(a){return a.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}
function M(a,e,b,d,g,H,A,f){a=b;d=d.toLowerCase();f||(f="");if(""==g)if(""==d&&(d=a.toLowerCase().replace(/ ?\n/g," ")),void 0!=v.get(d))g=v.get(d),void 0!=x.get(d)&&(f=x.get(d));else return e;a=y(w(a),"*_[]()");g=y(g,"*_");e='<img src="'+g+'" alt="'+a+'"';f=w(f);f=y(f,"*_");return e+(' title="'+f+'"')+" />"}function R(a){a=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,b){return"<h1>"+D(b)+"</h1>\n\n"});a=a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,b){return"<h2>"+D(b)+"</h2>\n\n"});return a=
a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(a,b,d){a=b.length;return"<h"+a+">"+D(d)+"</h"+a+">\n\n"})}function n(a,e){a+="~0";var b=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;E?a=a.replace(b,function(a,g,b){a=-1<b.search(/[*+-]/g)?"ul":"ol";var d;"ol"===a&&(d=parseInt(b,10));g=N(g,a,e);g=g.replace(/\s+$/,"");b="<"+a;d&&1!==d&&(b+=' start="'+d+'"');return b+">"+g+"</"+a+">\n"}):(b=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,
a=a.replace(b,function(a,e,b,c){a=-1<c.search(/[*+-]/g)?"ul":"ol";var d;"ol"===a&&(d=parseInt(c,10));b=N(b,a);c="<"+a;d&&1!==d&&(c+=' start="'+d+'"');return e+c+">\n"+b+"</"+a+">\n"}));return a=a.replace(/~0/,"")}function N(a,e,b){E++;a=a.replace(/\n{2,}$/,"\n");e=ba[e];var d=!1;a=(a+"~0").replace(new RegExp("(^[ \\t]*)("+e+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+e+")[ \\t]+))","gm"),function(a,e,b,c){a=c;b=(e=/\n\n$/.test(a))||-1<a.search(/\n{2,}/)||d;a=C(O(a),!0,!b);d=e;return"<li>"+a+"</li>\n"});
a=a.replace(/~0/g,"");E--;return a}function t(a){a=(a+"~0").replace(/(?:\n\n|^\n?)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(a,b,d){a=P(O(b));a=Q(a);a=a.replace(/^\n+/g,"");a=a.replace(/\n+$/g,"");return"\n\n"+("<pre><code>"+a+"\n</code></pre>")+"\n\n"+d});return a=a.replace(/~0/,"")}function U(a){return a=a.replace(/(^|[^\\`])(`+)(?!`)([^\r]*?[^`])\2(?!`)/gm,function(a,b,d,g,c){a=g.replace(/^([ \t]*)/g,"");a=a.replace(/[ \t]*$/g,"");a=P(a);a=a.replace(/:\/\//g,"~P");return b+
"<code>"+a+"</code>"})}function P(a){a=a.replace(/&/g,"&amp;");a=a.replace(/</g,"&lt;");a=a.replace(/>/g,"&gt;");return a=y(a,"*_{}[]\\",!1)}function ca(a){if(-1===a.indexOf("*")&&-1===a.indexOf("_"))return a;a=F(a);a=a.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)\2(?=\S)([^\r]*?\S)\2\2(?!\2)(?=[\W_]|$)/g,"$1<strong>$3</strong>");a=a.replace(/(^|[\W_])(?:(?!\1)|(?=^))(\*|_)(?=\S)((?:(?!\2)[^\r])*?\S)\2(?!\2)(?=[\W_]|$)/g,"$1<em>$3</em>");return G(a)}function da(a){if(-1===a.indexOf("*")&&-1===a.indexOf("_"))return a;
a=F(a);a=a.replace(/(?=[^\r][*_]|[*_])(^|(?=\W__|(?!\*)[\W_]\*\*|\w\*\*\w)[^\r])(\*\*|__)(?!\2)(?=\S)((?:|[^\r]*?(?!\2)[^\r])(?=\S_|\w|\S\*\*(?:[\W_]|$)).)(?=__(?:\W|$)|\*\*(?:[^*]|$))\2/g,"$1<strong>$3</strong>");a=a.replace(/(?=[^\r][*_]|[*_])(^|(?=\W_|(?!\*)(?:[\W_]\*|\D\*(?=\w)\D))[^\r])(\*|_)(?!\2\2\2)(?=\S)((?:(?!\2)[^\r])*?(?=[^\s_]_|(?=\w)\D\*\D|[^\s*]\*(?:[\W_]|$)).)(?=_(?:\W|$)|\*(?:[^*]|$))\2/g,"$1<em>$3</em>");return G(a)}function S(a){return a=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,
function(a,b){a=b.replace(/^[ \t]*>[ \t]?/gm,"~0");a=a.replace(/~0/g,"");a=a.replace(/^[ \t]+$/gm,"");a=C(a);a=a.replace(/(^|\n)/g,"$1  ");a=a.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){a=b.replace(/^  /mg,"~0");return a=a.replace(/~0/g,"")});return z("<blockquote>\n"+a+"\n</blockquote>")})}function T(a,e,b){a=a.replace(/^\n+/g,"");a=a.replace(/\n+$/g,"");a=a.split(/\n{2,}/g);for(var d=[],g=/~K(\d+)K/,c=a.length,h=0;h<c;h++){var f=a[h];g.test(f)?d.push(f):/\S/.test(f)&&(f=D(f),f=f.replace(/^([ \t]*)/g,
b?"":"<p>"),b||(f+="</p>"),d.push(f))}if(!e)for(c=d.length,h=0;h<c;h++)for(var k=!0;k;)k=!1,d[h]=d[h].replace(/~K(\d+)K/g,function(a,b){k=!0;return B[b]});return d.join("\n\n")}function J(a){a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;");return a=a.replace(/<(?![a-z\/?!]|~D)/gi,"&lt;")}function W(a){a=a.replace(/\\(\\)/g,I);return a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,I)}function ea(a,e,b,d){if(e)return a;if(")"!==d.charAt(d.length-1))return"<"+b+d+">";a=d.match(/[()]/g);for(var g=e=0;g<
a.length;g++)"("===a[g]?0>=e?e=1:e++:e--;var c="";0>e&&(d=d.replace(new RegExp("\\){1,"+-e+"}$"),function(a){c=a;return""}));c&&(a=d.charAt(d.length-1),fa.test(a)||(c=a+c,d=d.substr(0,d.length-1)));return"<"+b+d+">"+c}function Z(a){a=a.replace(ha,ea);return a=a.replace(/<((https?|ftp):[^'">\s]+)>/gi,function(a,b){return'<a href="'+L(b)+'">'+k.plainLinkText(b)+"</a>"})}function ia(a){return a=a.replace(/~E(\d+)E/g,function(a,b){a=parseInt(b);return String.fromCharCode(a)})}function O(a){a=a.replace(/^(\t|[ ]{1,4})/gm,
"~0");return a=a.replace(/~0/g,"")}function Q(a){if(!/\t/.test(a))return a;var e=["    ","   ","  "," "],b=0,d;return a.replace(/[\n\t]/g,function(a,c){if("\n"===a)return b=c+1,a;d=(c-b)%4;b=c+1;return e[d]})}function L(a){a=w(a);return a=y(a,"*_:()[]")}function y(a,e,b){e="(["+e.replace(/([\[\]\\])/g,"\\$1")+"])";b&&(e="\\\\"+e);return a=a.replace(new RegExp(e,"g"),I)}function I(a,e){return"~E"+e.charCodeAt(0)+"E"}var k=this.hooks=new u;k.addNoop("plainLinkText");k.addNoop("preConversion");k.addNoop("postNormalization");
k.addNoop("preBlockGamut");k.addNoop("postBlockGamut");k.addNoop("preSpanGamut");k.addNoop("postSpanGamut");k.addNoop("postConversion");var v,x,B,E;c=c||{};var F=q,G=q;c.nonAsciiLetters&&function(){var a=/[Q\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376-\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0523\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0621-\u064a\u0660-\u0669\u066e-\u066f\u0671-\u06d3\u06d5\u06e5-\u06e6\u06ee-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07c0-\u07ea\u07f4-\u07f5\u07fa\u0904-\u0939\u093d\u0950\u0958-\u0961\u0966-\u096f\u0971-\u0972\u097b-\u097f\u0985-\u098c\u098f-\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc-\u09dd\u09df-\u09e1\u09e6-\u09f1\u0a05-\u0a0a\u0a0f-\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32-\u0a33\u0a35-\u0a36\u0a38-\u0a39\u0a59-\u0a5c\u0a5e\u0a66-\u0a6f\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2-\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0-\u0ae1\u0ae6-\u0aef\u0b05-\u0b0c\u0b0f-\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32-\u0b33\u0b35-\u0b39\u0b3d\u0b5c-\u0b5d\u0b5f-\u0b61\u0b66-\u0b6f\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99-\u0b9a\u0b9c\u0b9e-\u0b9f\u0ba3-\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0be6-\u0bef\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58-\u0c59\u0c60-\u0c61\u0c66-\u0c6f\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0-\u0ce1\u0ce6-\u0cef\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d28\u0d2a-\u0d39\u0d3d\u0d60-\u0d61\u0d66-\u0d6f\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32-\u0e33\u0e40-\u0e46\u0e50-\u0e59\u0e81-\u0e82\u0e84\u0e87-\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa-\u0eab\u0ead-\u0eb0\u0eb2-\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0ed0-\u0ed9\u0edc-\u0edd\u0f00\u0f20-\u0f29\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8b\u1000-\u102a\u103f-\u1049\u1050-\u1055\u105a-\u105d\u1061\u1065-\u1066\u106e-\u1070\u1075-\u1081\u108e\u1090-\u1099\u10a0-\u10c5\u10d0-\u10fa\u10fc\u1100-\u1159\u115f-\u11a2\u11a8-\u11f9\u1200-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u1676\u1681-\u169a\u16a0-\u16ea\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u17e0-\u17e9\u1810-\u1819\u1820-\u1877\u1880-\u18a8\u18aa\u1900-\u191c\u1946-\u196d\u1970-\u1974\u1980-\u19a9\u19c1-\u19c7\u19d0-\u19d9\u1a00-\u1a16\u1b05-\u1b33\u1b45-\u1b4b\u1b50-\u1b59\u1b83-\u1ba0\u1bae-\u1bb9\u1c00-\u1c23\u1c40-\u1c49\u1c4d-\u1c7d\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u203f-\u2040\u2054\u2071\u207f\u2090-\u2094\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2183-\u2184\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2c6f\u2c71-\u2c7d\u2c80-\u2ce4\u2d00-\u2d25\u2d30-\u2d65\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3006\u3031-\u3035\u303b-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31b7\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fc3\ua000-\ua48c\ua500-\ua60c\ua610-\ua62b\ua640-\ua65f\ua662-\ua66e\ua67f-\ua697\ua717-\ua71f\ua722-\ua788\ua78b-\ua78c\ua7fb-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8d0-\ua8d9\ua900-\ua925\ua930-\ua946\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa50-\uaa59\uac00-\ud7a3\uf900-\ufa2d\ufa30-\ufa6a\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe33-\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]/g;
F=function(e){return e.replace(a,function(a){a=a.charCodeAt(0);for(var d="",b;0<a;)b=a%51+65,81<=b&&b++,90<b&&(b+=6),d=String.fromCharCode(b)+d,a=a/51|0;return"Q"+d+"Q"})};G=function(a){return a.replace(/Q([A-PR-Za-z]{1,3})Q/g,function(a,d){a=0;for(var b,e=0;e<d.length;e++)b=d.charCodeAt(e),90<b&&(b-=6),81<b&&b--,b-=65,a=51*a+b;return String.fromCharCode(a)})}}();var aa=c.asteriskIntraWordEmphasis?da:ca;this.asciify=F;this.deasciify=G;this.makeHtml=function(a){if(v)throw Error("Recursive call to converter.makeHtml");
v=new r;x=new r;B=[];E=0;a=k.preConversion(a);a=a.replace(/~/g,"~T");a=a.replace(/\$/g,"~D");a=a.replace(/\r\n/g,"\n");a=a.replace(/\r/g,"\n");a=Q("\n\n"+a+"\n\n");a=a.replace(/^[ \t]+$/mg,"");a=k.postNormalization(a);a=m(a);a=l(a);a=C(a);a=ia(a);a=a.replace(/~D/g,"$$");a=a.replace(/~T/g,"~");a=k.postConversion(a);B=x=v=null;return a};var K=function(a){return C(a)},ba={ol:"\\d+[.]",ul:"[*+-]"},ha=/(="|<)?\b(https?|ftp)(:\/\/[-A-Z0-9+&@#/%?=~_|[\]()!:,.;]*[-A-Z0-9+&@#/%=~_|[\])])(?=$|\W)/gi,fa=/[-A-Z0-9+&@#/%=~_|[\])]/i}})();(function(){function q(c){return c.replace(/<[^>]*>?/gi,t)}function t(c){return c.match(l)||c.match(m)||c.match(z)?c:""}function u(c){if(""==c)return"";var h=/<\/?\w+[^>]*(\s|$|>)/g,l=c.toLowerCase().match(h),m=(l||[]).length;if(0==m)return c;for(var r,p,q,w=[],t=[],u=!1,n=0;n<m;n++)if(r=l[n].replace(/<\/?(\w+).*/,"$1"),!(w[n]||-1<"<p><img><br><li><hr>".search("<"+r+">"))){p=l[n];q=-1;if(!/^<\//.test(p))for(p=n+1;p<m;p++)if(!w[p]&&l[p]=="</"+r+">"){q=p;break}-1==q?u=t[n]=!0:w[q]=!0}if(!u)return c;
n=0;return c=c.replace(h,function(c){c=t[n]?"":c;n++;return c})}if("object"===typeof exports&&"function"===typeof require){var r=exports;var c=require("./Markdown.Converter").Converter}else r=window.Markdown,c=r.Converter;r.getSanitizingConverter=function(){var h=new c;h.hooks.chain("postConversion",q);h.hooks.chain("postConversion",u);return h};var l=/^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol(?: start="\d+")?|p|pre|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i,m=/^(<a\shref="((https?|ftp):\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)*[\]$]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i,
z=/^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)*[\]$]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i})();
