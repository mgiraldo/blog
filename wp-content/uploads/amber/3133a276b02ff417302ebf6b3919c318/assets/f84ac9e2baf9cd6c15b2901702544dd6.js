var cs_ucfr=0; 
var userConsentComscore;
if (window.ueCookiesPolicy && typeof window.ueCookiesPolicy.getUserConsentStatusForVendors === 'function' ) {
  userConsentComscore = ueCookiesPolicy.getUserConsentStatusForVendors('comscore');
  if(userConsentComscore.comscore === true){
    cs_ucfr=1;
  }
}

// Comscore implementation
var _comscore = _comscore || [];
if(cs_ucfr == 0){_comscore.push({ c1: "2", c2: "7184769"});}else{_comscore.push({ c1: "2", c2: "7184769",cs_ucfr: cs_ucfr });}
(function() {
	function udm_(e,t){var n="comScore=",r=document,i=r.cookie,s="",o="indexOf",u="substring",a="length",f=2048,l,c="&ns_",h="&",p,d,v,m,g=window,y=g.encodeURIComponent||escape;if(i[o](n)+1)for(v=0,d=i.split(";"),m=d[a];v<m;v++)p=d[v][o](n),p+1&&(s=h+unescape(d[v][u](p+n[a])));e+=c+"_t="+ +(new Date)+c+"c="+(r.characterSet||r.defaultCharset||"")+(g===g.top?"":c+"if=1")+"&cv=3.1&c8="+y(r.title)+s+"&c7="+y(r.URL)+"&c9="+y(r.referrer),e[a]>f&&e[o](h)>0&&(l=e[u](0,f-8).lastIndexOf(h),e=(e[u](0,l)+c+"cut="+y(e[u](l+1)))[u](0,f)),r.images?(p=new Image,g.ns_p||(ns_p=p),typeof t=="function"&&(p.onload=p.onerror=t),p.src=e):r.write("<","p","><",'img src="',e,'" height="1" width="1" alt="*"',"><","/p",">")}typeof _comscore=="undefined"&&(_comscore=[]),function(){var e="length",t=window,n=t.encodeURIComponent?encodeURIComponent:escape,r,i=function(t){if(t){var r,i=[],s,o=0,u,a,f="";for(var l in t){s=typeof t[l];if(s=="string"||s=="number")i[i[e]]=l+"="+n(t[l]),l=="c2"?f=t[l]:l=="c1"&&(o=1)}if(i[e]<=0||f=="")return;a=t.options||{},a.d=a.d||document;if(typeof a.url_append=="string"){u=a.url_append.replace(/&amp;/,"&").split("&");for(var l=0,c=u[e],h;l<c;l++)h=u[l].split("="),h[e]==2&&(i[i[e]]=h[0]+"="+n(h[1]))}r=[a.d.URL.charAt(4)=="s"?"//sb":"//b",".scorecardresearch.com/b?",o?"":"c1=2&",i.join("&").replace(/&$/,"")],udm_(r.join(""))}},s=function(t){t=t||_comscore;for(var n=0,r=t[e];n<r;n++)i(t[n]);t=_comscore=[]};s(),(r=t.COMSCORE)?(r.purge=s,r.beacon=i):COMSCORE={purge:s,beacon:i}}();
})();
