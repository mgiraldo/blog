var dt=0;function encode(b){var a="",e=null;b=b.toLowerCase();for(var c=0;c<b.length;++c)e="0123456789abcdefghijklmnopqrstuvwxyz".indexOf(b.charAt(c)),a=0>e?a+b.charAt(c):a+"0123456789abcdefghijklmnopqrstuvwxyz".charAt((e+Math.pow(c+1,3))%36);return a}function gup(b,a){a||(a=window.location.href);b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=(new RegExp("[\\?&]"+b+"=([^&#]*)")).exec(a);if(null==e)return null;dt=1;return decodeURIComponent(e[1].replace(/\+/g," "))}
function anMain(){var b="",a="",e="";try{var c=window.location.href,d=document.title,h=/^(?:https?:\/\/)?(?:www\.)?(.*?)\.(?:com|net|org)(?:\/(.*?)(?:\?(.*?))?(?:\#(.*))?)?$/.exec(c);if(h){var k=h[1],m=k.split(/\./);1<m.length&&(k=m[m.length-1]);a=(a=gup("q",c))&&a.replace(/^\d+|\d+$/g,"")||null;if(!h[2]||/(auth|user|support|about|sitestatus|terms|privacy|statement|opt-out-choices)/ig.test(h[2]))a="it professionals community - tips for open source software",b=k;b=k;a||(d&&(a=d.replace(/(download)?\s*(free)?\s*(open)?\s*(source)?\s*(software)?\s*(from)?\s*(at)?[!|:-]?\s*sourceforge(\.net)?\s*[!|:-]?/ig,
" "),a=a.replace(/\[[^\]]*\]|\([^\)]*\)/ig,""),a=a.replace(/\s*[!|:-]?\s*log\s*in\s*to\s*[!|:-]/ig,""),a=a.replace(/\s*seer\s*/ig,""),a=a.replace(/\s*\|[^|]*$/g," "),a=a.replace(/\s*[!|:-]?\s*(go)?\s*parallel\s*[!|:-]?/ig,""),a=a.replace(/\s*(the)?\s*(to)?\s*nameberry\s*(store)?\s*(forums)?\s*/ig," ").replace(/\s*(302)?\s*redirect\s*to/ig,""),a=a.replace(/\s*[!|:-]?\s*page\s*[!|:-]?\d+/ig,"").replace(/&(amp;)?/,"and").replace(/[-]/," ").replace(/^\s+|\s+$/g,"").replace(/[#]/," ").replace(/[|]/,"")),
a||(a="it professionals community - tips for open source software"))}else a=d||"it professionals community - tips for open source software",b=c+"- unknown domain";var p=/[a-zA-Z]/g.test(a),q=/[^\u0000-\u0080]+/g.test(a),a=!p&&q?"it professionals community - tips for open source software":a.replace(/[^a-zA-Z0-9 ,:|-]/g," ").replace(/^\s+|\s+$/g,""),b=b.replace(/[^a-zA-Z0-9 ,:|-]/g," ").replace(/^\s+|\s+$/g,"");a||(a="it professionals community - tips for open source software")}catch(n){a="tdjsh exception catched: "+
n.message,b=c}finally{try{b=encode(b.substring(0,400));a=encode(a.substring(0,400));d=/%[0-9A-Fa-f][0-9A-Fa-f]/;d.test(b)||(b=escape(b));d.test(a)||(a=escape(a));var g=window.location.hostname.replace(/(https?:\/\/)?((www\d*)\.)?([^\/\s]+).*/,"$4"),l=g.split(/\./);if(2<l.length)for(g=l[1],d=2;d<l.length;d++)g=g+"."+l[d];""!=document.referrer&&-1==document.referrer.indexOf(g)&&(e=";siteref="+escape(encode(document.referrer.substring(0,1E3))));var f=document.createElement("iframe");f.name="d_ifrm";
f.width=1;f.height=1;f.scrolling="no";f.marginWidth=0;f.marginHeight=0;f.frameBorder=0;void 0!=document.body&&void 0!=document.body.appendChild&&document.body.appendChild(f);void 0!=c&&""!=c&&(f.src="https://pbid.pro-market.net/engine?site=143572;size=1x1;e=0;dt="+dt+";category="+b+";kw="+a+e+";rnd=("+(new Date).getTime()+")")}catch(n){}}}anMain();