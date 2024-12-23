﻿	// swfobject.js

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

var pageHasFlash = false;

if ( swfobject.hasFlashPlayerVersion( "10.2" ) ) {
	pageHasFlash = true;
} else {
	pageHasFlash = false;
}
	// JSON.js
	
if(!this.JSON){JSON={};}(function(){function f(n){return n<10?'0'+n:n;}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z';};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}if(typeof rep==='function'){value=rep.call(holder,key,value);}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value});};}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}throw new SyntaxError('JSON.parse');};}}());

/*
if ( typeof(console) == "undefined") {
	var console = {};
	console.log = function(){
	}
}
*/


var month=new Array(12);month[0]="January";month[1]="February";month[2]="March";month[3]="April";month[4]="May";month[5]="June";month[6]="July";month[7]="August";month[8]="September";month[9]="October";month[10]="November";month[11]="December";


var video_center_video_id;

if (typeof dj == "undefined") { var dj = {}; }
if (typeof dj.widget == "undefined") { dj.widget = {}; }
if (typeof dj.widget.video == "undefined") { dj.widget.video = {}; }

if (typeof dj.context == "undefined") { dj.context = {}; }
if (typeof dj.context.video == "undefined") {
	dj.context.video = {
		soloVideos : [],
		moreVideos : [],
		carouselIndex : 0,
		carouselVideos : false,
		nowPlaying : false,
		loading : true,
		interval : false,
		autoPlayVideoID : false,
		clickEnabled : true,
		currentlyPlayingVideoId: false,
		players : []
		
	};
}
if (typeof dj.widget.video.video == "undefined") {
	dj.widget.video.video = {
		advertisementDivId : 'advertisement',
		flashPlayerPath : 'http://s.wsj.net/media/swf/',
		domain : 'allthingsd',
		
			//Current and next video id
			
        currentlyPlayingVideoId : '',
		currentlyPlayingVideoIds : [],
		currentlyPlayingCollection : '',
		currentlyPlayingSubCollection : '',
		nextVideoId : ''
		
	};
}
dj.widget.video.video.getName = function() {
	return "dj.widget.video.video";
}
dj.widget.video.video.continueLoadVideo = function(videoID) {
	return;
}
dj.widget.video.video.getJSON = function(objID) {
	var video = dj.context.video.soloVideos[objID];
	
	if ( video ) {
		var jsonString = video.getJSON(objID);

		return jsonString;
	}
	return '';
}

dj.widget.video.video.createAdvertisement = function(imgUrl, link) {
	try {
		swfobject.getObjectById(this.advertisementDivId).loadAd(imgUrl, link);
	}
	catch (e) {
		//console.log("Error while loading ad in createAdvertisement : " + e);
		//console.error("Error while loading ad in createAdvertisement : " + e);
	}
}

dj.widget.video.video.createAdvertisementFramework = function() {
	if (this.advertisementDivId) {
		if (swfobject.getFlashPlayerVersion().major >= 9) {
			var dim = {w: "300", h: "250"};
			
			swfobject.embedSWF(this.flashPlayerPath + "adPlayer.swf", this.advertisementDivId, dim.w, dim.h, "10.2", "", {
					'objName': this.getName(),
                    'movieWidth': dim.w,
                    'movieHeight': dim.h,
                    'host': location.host
                }, {
                    allowscriptaccess: "always",
                    wmode: "opaque"
                }, {});
		} else {
			//this.nonSupportingFlashPlayer(this.advertisementDivId);
		}
	}
}
dj.widget.video.video.playNextVideo = function()
{
	
	if ( jQuery('input#continuous_play').attr('checked') ) {
		
		var index = jQuery.inArray(dj.context.video.currentlyPlayingVideoId, dj.context.video.moreVideos);		
		var idToHide = 'li#' + dj.context.video.currentlyPlayingVideoId;
		
		if ( index != -1 && index < dj.context.video.moreVideos.length - 1 ) {
			
			var video_id = dj.context.video.moreVideos[index + 1];
			
				// Get the JSON for the selected video
	
			var url = '/?atd_json=api-video/get_video_info.asp&fields=all&site=atd&guid=' + video_id;
			
			jQuery.getJSON(url, function(data) {
				dj.context.video.soloVideos[video_id] = dj.context.video.newSoloVideo("video-center-player", video_id, data, "video");
		
					// Get the dimensions of the microplayer to display
				
				if ( jQuery('input#autoplay').attr('checked') ) {
					var autoplay = true;		
				} else {
					var autoplay = false;
				}
		
				if ( dj.context.video.isWidescreen(data) ) {
					dj.context.video.showPlayer("video-center-player", video_id, data, 640, 360, true);
					//dj.context.video.showPlayer("video-center-player", video_id, data, 640, 454, true);
					//dj.context.video.showPlayer("video-center-player", video_id, data, 512, 363, true);
				} else {
					dj.context.video.showPlayer("video-center-player", video_id, data, 640, 480, true);
					//dj.context.video.showPlayer("video-center-player", video_id, data, 640, 573, true);
					//dj.context.video.showPlayer("video-center-player", video_id, data, 512, 459, true);
				}
				
					// Display the video title and caption
				
				dj.context.video.videoCenter.updateCaption(data);
			});
		}
		
	}
}

if (typeof dj.context.video.videoCenter == "undefined") {
	dj.context.video.videoCenter = {
		currentPage : 0,
		currentVideo : false,
		nextVideo : false
	
	};
}

dj.context.video.init = function()
{
	dj.widget.video.video.createAdvertisementFramework();
	this.loadVideos();
	this.loadCarousel();
	this.loadDynamicCarousel();
	this.loadVideoCenter();
	this.iphoneVideoNotice();
	
}

dj.context.video.iphoneVideoNotice = function()
{
	if ( dj.context.video.iPhoneCheck() ) {
		var arr = jQuery('.iphone-video-notice');
		
		if ( jQuery(arr).length > 0 ) {
		
			jQuery(arr).each(function(i) {
				jQuery(this).css('display', 'block');
				jQuery(this).html("<em>This video isn't available in iPhone-friendly format. Apologies for the inconvenience.</em>");
			});
		}
	}
}

dj.context.video.loadVideos = function()
{
		// Loads videos in the center column of a page. Looks for <div> objects with
		// the class name of .video-wsj
	 
	var arr = jQuery('.video-wsj');

	if ( jQuery(arr).length > 0 ) {
		
		jQuery(arr).each(function(i) {
		
			var objID = this.id;
	
			if ( objID.indexOf('-') >= 0 ) {
				var guid = objID;
				var url = '/?atd_json=api-video/get_video_info.asp&fields=all&site=atd&guid=' + guid;
				//var width = 380;
				//var height = 216;
				var width = 640;
				var height = 360;
			} else {
				var brightcove_id = objID;
				var url = '/?atd_json=api-video/find_all_videos.asp&fields=all&site=atd&type=brightcoveID&query=' + brightcove_id;
				//var width = 320;
				//var height = 240;
				//var width = 380;
				//var height = 285;
				var width = 640;
				var height = 480;
			}
	
			if ( jQuery(this).parent().css('width') ) {
				width = jQuery(this).css('width');
				width = width.replace('px', '');
			}
			if ( jQuery(this).parent().css('height') ) {
				height = jQuery(this).css('height');
				height = height.replace('px', '');
			}
			
			jQuery.getJSON(url, function(data) {
	
				if ( data.items && data.items.length >= 1 ) {
					video_id = data.items[0].id;
					jsonData = data.items[0];
				} else {
					jsonData = data;
					video_id = jsonData.id;
				}
				
				dj.context.video.soloVideos[video_id] = dj.context.video.newSoloVideo(objID, video_id, jsonData, "video_emb");
				dj.context.video.showPlayer(objID, video_id, jsonData, width, height, false);
				
			});
		});
	}
}

dj.context.video.loadCarousel = function()
{
	var carousel = jQuery('#video-carousel');
	
	if ( jQuery(carousel).length > 0 ) {
			
		var query = jQuery(carousel).text();
		var url = '/?atd_json=' + query;
	
		if ( jQuery(carousel).attr('class') == 'random' ) {
			var random = true;
		} else {
			var random = false;
		}
		
		jQuery.getJSON(url, function(data) {
			dj.context.video.carouselVideos = data.items;
			dj.context.video.showCarousel(carousel, random);
		});
	}
}

dj.context.video.iPhoneCheck = function()
{
	return !pageHasFlash;
}

dj.context.video.iPadCheck = function()
{
	return ( (navigator.userAgent.match(/iPad/i)) );
}

dj.context.video.createMobileLink = function(json, width, height, autoplay)
{
	var mp4 = json.video320kMP4Url;
	var thumbnail = json.videoStillURL;
	
		// Video Still URLs are always 512x288. Adjust height accordingly to the width
	
	/*if ( (width/height) == (4/3) ) {
		var newHeight = Math.round(width / 512 * height);

		height = newHeight;
	} else {
	
	}
	*/
	
	if ( autoplay == true ) {
		var html = '<video src="'+mp4+'" width="'+width+'" height="'+height+'" poster="'+thumbnail+'" controls="controls" autoplay="autoplay"></video>';
	} else {
		var html = '<video src="'+mp4+'" width="'+width+'" height="'+height+'" poster="'+thumbnail+'" controls="controls"></video>';
	}

	return html;
}

dj.context.video.showPlayer = function(objID, video_id, json, width, height, autoplay)
{
	var autoStart = ( autoplay == true ) ? 'true' : 'false';
	
	if ( objID == 'video-center-player' ) {
		var player_swf = "http://s.wsj.net/media/swf/WSJMediaPlayer.swf";
		var playerName = 'flashPlayer';
	} else {
		var player_swf = "http://s.wsj.net/media/swf/WSJMediaPlayer.swf";
		var playerName = 'microflashPlayer';
	}
	
	if ( dj.context.video.iPhoneCheck() ) {
	
			// Handle viewing on iPhone. Get the MP4 URL and Thumbnail
			
		objID = "#"+objID;
		
		var html = dj.context.video.createMobileLink(json, width, height, false);
				
		jQuery(objID).html(html);
		
	} else {

			// Only do this if click enabled is true
		
		if ( !dj.context.video.clickEnabled ) {
			return false;
		}
		
			// Disable launching any other videos until this one has
			// loaded and started to play
		
		dj.context.video.clickEnabled = false;
		
		if ( !video_id ) {
			video = dj.context.video.soloVideos[objID];
			video_id = video.video_id;
		}
		
		var swf = swfobject.getObjectById(dj.context.video.autoPlayObjID);
				
			// Add objID to the list of currently active video players on the page
			// We'll call getSeek on them to see if we can refresh the site
		
		var pos = jQuery.inArray(objID, dj.context.video.players);
		
		if ( pos == -1 ) {
			var obj = new Array(objID, json.duration, 0);
			
			dj.context.video.players.push(obj);
			
		}

		/* 20100616 
			if ( false && objID == 'video-center-player' && swf ) {
		
				// Just loading a new video
			
			dj.context.video.currentlyPlayingVideoId = video_id;
			dj.context.video.autoPlayVideoID = video_id;
			dj.context.video.autoPlayObjID = objID;
			swf.playVideo(dj.context.video.soloVideos[dj.context.video.autoPlayVideoID].jsonString);
			dj.context.video.clickEnabled = true;
		
		} else {
		*/
		
			try {
				swfobject.embedSWF(
					player_swf
					, objID
					, width
					, height
					, "10.2"
					, ""
					, {
						//'objName': "dummy",
						'objName': "dj.widget.video.video",
						'videoGUID': video_id,
						'playerid': "4001",
						'allowPlayerPopup': "0",
						'plyMediaEnabled': "1",
						'configURL': "http://allthingsd.com/wp-content/themes/atd-2.0/misc/media/video-players/",
						'suppressAds': "0",
						'autoStart': ''+autoStart+'',
						'movieWidth' : ''+width+'',
						'movieHeight' : ''+height+'',
						'allowfullscreen' : "1",
						'containerModule' : "" + video_id					
					}
					, {
						allowscriptaccess: "always",
						wmode: "opaque",
						base: "http://s.wsj.net/media/swf/",
						//base: "",
						name: ''+playerName+'',
						swLiveConnect: "true",
						seamlesstabbing: "false",
						autoStart: ''+autoStart+'',
						allowfullscreen: "true",
						containerModule : "" + video_id
					}
					, {
						id: objID
					}
				);
			} catch ( err ) {
				//console.error("Error creating createFlashPlayer.." + err.message);
			}
			
			dj.context.video.currentlyPlayingVideoId = video_id;
			
			if ( objID == 'video-center-player' ) {
						// Set the document title to the title of the currrent video
				
				if ( json.titletag != '' ) {
					document.title = json.titletag + " | Video | AllThingsD";
				} else {
					document.title = json.name + " | Video | AllThingsD";
				}
			}
			
			if ( autoplay == true ) {
				
				dj.context.video.autoPlayVideoID = video_id;
				dj.context.video.autoPlayObjID = objID;
				
				dj.context.video.interval = setInterval(function() {
				
					var swf = swfobject.getObjectById(dj.context.video.autoPlayObjID);
					
					if ( swf ) {
						try {
							swf.playVideo(dj.context.video.soloVideos[dj.context.video.autoPlayVideoID].jsonString);
							dj.context.video.clickEnabled = true;
							clearInterval(dj.context.video.interval);
						} catch ( err ) {
	
						}
					}
				
				}, 500);
			} else {
			
				dj.context.video.clickEnabled = true;
				
				if ( objID != 'video-center-player' ) return;				
				
				dj.context.video.autoPlayVideoID = video_id;
				dj.context.video.autoPlayObjID = objID;
				
				dj.context.video.interval = setInterval(function() {
				
					var swf = swfobject.getObjectById(dj.context.video.autoPlayObjID);
					
					if ( swf ) {
						try {
							swf.gotoStill(dj.context.video.soloVideos[dj.context.video.autoPlayVideoID].jsonString);
							dj.context.video.clickEnabled = true;
							clearInterval(dj.context.video.interval);
						} catch ( err ) {
	
						}
					}
				
				}, 500);
				
			}
		// 20100616 }
	}
}

dj.context.video.newSoloVideo = function (id, video_id, jsonData, videoEmbedType)
{
	// id - objID 
	// video_id - video GUID
	// jsonData - JSON information for the video
	// videoEmbedType - post, video center or carousel (video_emb, video)

	var dimensions = dj.context.video.getVideoDimensions(jsonData);

	jsonData.emailPartnerID = 497329;
	jsonData.site = "video.allthingsd.com";
	jsonData.msrc = "";
	jsonData.pageName = ""+jsonData.name;
	jsonData.videoCenterURL = "http://video.allthingsd.com";
	//jsonData.localPath = "";
	
	if ( videoEmbedType == 'video_emb' ) {
		jsonData.embedPlayerURL = "http://s.wsj.net/media/swf/WSJMediaPlayer.swf";
		jsonData.adFrmt = "frmt=0;";
		jsonData.playerName = "video_articleembed"; // Carousel Video
		jsonData.prop19 = "video_emb";
	} else {
		jsonData.embedPlayerURL = "http://s.wsj.net/media/swf/WSJMediaPlayer.swf";
		jsonData.adFrmt = "frmt=2;";
		jsonData.playerName = "video_videocenter"; // Video Center
		jsonData.prop19 = "video";
	}
	
	jsonData.embedConfigURL = "http://allthingsd.com/wp-content/themes/atd-2.0/misc/media/video-players/";
	jsonData.embedPlayerID = "4001";
	jsonData.embedName = "microflashPlayer";
	jsonData.embedBaseURL = "http://s.wsj.net/media/swf/";
	jsonData.embedHeight = dimensions.height;
	jsonData.embedWidth = dimensions.width;
	jsonData.larsID = 94;
	jsonData.larsAdTrackingID = 1262;
	jsonData.prop5 = "";
	jsonData.prop6 = "";
	jsonData.prop10 = "";
	jsonData.prop11 = "";
	//jsonData.prop24 = "Edition_North_America_USA";
	jsonData.prop25 = null;
	//jsonData.prop27 = "";
	jsonData.prop63 = 'ATD';
	
	jsonData.server = "allthingsd.com";
	
	jsonData.prop2 = "WSJLive_" + jsonData['allthingsd-section'];
	
	if ( jsonData['doctype'] == 128 ) {
		if ( jsonData['allthingsd-subsection'] == null || jsonData['allthingsd-subsection'] == '' ) {
			jsonData.prop26 = "WSJLive_" + jsonData['allthingsd-section'];
		} else {
			jsonData.prop26 = "WSJLive_" + jsonData['allthingsd-subsection'];
		}
		jsonData.prop3 = "WSJLive_Video_" + jsonData['allthingsd-section'];
	} else {
		if ( jsonData['wsj-subsection'] == null || jsonData['wsj-subsection'] == '' ) {
			jsonData.prop26 = "WSJLive_" + jsonData['wsj-section'];
		} else {
			jsonData.prop26 = "WSJ_Live_" + jsonData['wsj-subsection'];
		}
		jsonData.prop3 = "WSJLive_Video_" + jsonData['wsj-section'];
	}	
	
		// Handle Lineup ID
	
	if ( jsonData['lineupID'] != null ) {
		jsonData.prop16 = jsonData.lineupID = jsonData['lnID'];
	} else {
		jsonData.prop16 = jsonData.lineupID = "WSJLive_Video_allthingsd";
	}
	
		// Handle column
	
	if ( jsonData['column'] != null ) {
		var columnName = jsonData['column'].replace(/['"]/g,'');;
		jsonData.prop22 = 'WSJLive_Video_' + columnName;
	}

	jsonData.suppressAds = "0";
	
		// Duration, full length video check
	
	if ( jsonData.duration > 1200 ) {
		jsonData.adFrmt += 'show=full_length;';
	}
	
	var soloVideo = {
	
		id : id,
		video_id : video_id,
		jsonData : jsonData,
		jsonString : JSON.stringify(jsonData),
		getJSON : function(video_id) {
			
			return this.jsonString;

		}
	};
	
	return soloVideo;
}

function splitTime(a) 
{ 
	var hours=Math.floor(a/3600); 
	var minutes=Math.floor(a/60)-(hours*60); 
	var seconds=a-(hours*3600)-(minutes*60); 
	
	if (hours==0) {hours='';}
	if (minutes==0) {minutes='';}
	if (minutes<10) {minutes='0'+minutes;}
	if (seconds==0) {seconds=0;}
	if (seconds<10) {seconds='0'+seconds;}

	if (hours==0)	
		return minutes+':'+seconds;
	else 
		return hours+':'+minutes+':'+seconds;
} 

dj.context.video.playCarouselItem = function(id, width, height, index)
{
		// Get reference to the active carousel
	
	var carousel_item = jQuery('#video-carousel-item');	
	var carousel_items = jQuery('#video-carousel-list li');
	
	if ( !dj.context.video.clickEnabled ) {
		return false;
	}
	
	jQuery(carousel_items).each(function(i) {
		
		if ( i == index ) {
		
			var item = dj.context.video.carouselVideos[i];
			var id = item.id;
			
			jQuery(this).addClass("selected");
			jQuery('#video-carousel p.caption').html(''+item.name);

		} else {
			jQuery(this).removeClass();
		}
		
	});
		
	var soloVideo = dj.context.video.soloVideos[id];
	var dimensions = dj.context.video.getVideoDimensions(soloVideo.jsonData);
	var carouselPlayer = swfobject.getObjectById('video-carousel-item');
	
	carouselPlayer.width = dimensions.width;
	carouselPlayer.height = dimensions.height;
	
	dj.context.video.showPlayer('video-carousel-item', id, soloVideo.jsonData, width, height, true);
		
	return false;
	
}

dj.context.video.isWidescreen = function(item)
{
	// Determines whether or not the video is in 4:3 or 16:9
	// aspect ratio. Each section is different, so we have a
	// big switch statement.
	//
	
	var comparisonDate;
	var itemDate = new Date(item.formattedCreationDate);
	
	switch (item['allthingsd-section']) {
		case "BoomTown":
			comparisionDate = new Date('4/28/2009 12:00:00 PM');
			break;
		case "Digital Daily":
			comparisionDate = new Date('3/26/2009 12:00:00 PM');
			break;
		case "MediaMemo":
			comparisionDate = new Date('3/15/2009 12:00:00 PM');
			break;
		case "Walt Mossberg":
		case "D Conference":
			switch ( item['allthingsd-subsection'] ) {
				case "Personal Technology":
					comparisionDate = new Date('9/10/2008 7:00:00 PM');
					break;
				case "Digital Solution":
				case "The Digital Solution":
				case "Mossberg Solution":
					comparisionDate = new Date('11/4/2008 12:00:00 PM');
					break;
				case "Mossblog":
					comparisionDate = new Date('5/7/2009 12:00:00 PM');
					break;
				case "D5":
				case "D6":
				case "D7":
				default:
					comparisionDate = new Date('5/14/2009 12:00:00 PM');
					break;				
			}
			break;
		default:
			comparisionDate = new Date('5/14/2009 12:00:00 PM');
			break;
	}
		
	if ( itemDate - comparisionDate > 0 ) {
		return true;
	} else {
		return false;
	}
}

dj.context.video.getVideoDimensions = function(carousel_item)
{
	if ( dj.context.video.isWidescreen(carousel_item) ) {
		return { width: 320, height: 181 };
	} else {
		//return { width: 320, height: 240 };
		return { width: 320, height: 181 };
	}
}

dj.context.video.displayCarouselList = function(index, limit)
{
	// Displays a list of videos in the video carousel
	// Clicking on a video will load and play it in the
	// video carousel player.
	//
	
	html = '<ul id="video-carousel-list">';
	
	var count = 0;
	
	if ( !index ) index = 0;
	
	dj.context.video.carouselIndex = index;
	
	for ( index; index < this.carouselVideos.length && count < limit; index++ ) {

		var item = this.carouselVideos[index];
		var thumbnail = item.thumbnailURL;
		var id = item.id;
		
		if ( false && index == 0 ) {
			html += '<li class="selected">';
		} else {
			html += '<li>';
		}
		
		var dimensions = dj.context.video.getVideoDimensions(item);
		var width = dimensions.width;
		var height = dimensions.height;
		var aspect = width / height;
		
		if ( dj.context.video.iPhoneCheck() ) {
			
			html += dj.context.video.createMobileLink(item, 150, 84, false);
			html += '<br /><a href="'+item.video320kMP4Url+'">'+item.name+'</a>';
			
		} else {
			//html += '<a href="'+item.linkURL+'" onclick="dj.context.video.playCarouselItem(\''+item.id+'\','+width+','+height+','+index+'); return false;" title="'+item.name+'"><img src="'+thumbnail+'" alt="" width="150" height="84" /></a><br /><a href="'+item.linkURL+'" onclick="wsjdn_carousel_play(\''+item.id+'\','+width+','+height+','+index+'); return false;" title="'+item.name+'">'+item.name+'</a>';
			html += '<a href="'+item.linkURL+'" title="'+item.name+'"><img src="'+thumbnail+'" alt="" width="150" height="84" /></a><a href="'+item.linkURL+'" title="'+item.name+'">'+item.name+'</a>';
		}
		html += '</li>';
		
			// Add the video to the list of videos attached to the video carousel
		
		dj.context.video.soloVideos[id] = dj.context.video.newSoloVideo('video-carousel-item', id, item, "video_emb");
		
		count++;
	}
	
	html += '</ul>';
	
	return html;
}

dj.context.video.showCarousel = function(carousel, random)
{	
		// Randomize the carousel items
		
	if ( random ) {
		var d = new Date();
		this.carouselVideos.sort(function() {return 0.5 - Math.random()});
	}
	
	
		// Get the video to display as the starting carousel item
		
	if ( this.carouselVideos && this.carouselVideos.length >= 1 ) {
		var carousel_item = this.carouselVideos[0];
	} else {
		var carousel_item = data;
	}
	
	dj.context.video.soloVideos['video-carousel-item'] = dj.context.video.newSoloVideo('video-carousel-item', carousel_item.id, carousel_item, "video_emb");	
	
	
		// Determine whether this is an old video imported from Brightcove
		// or a new video imported directly into WSJ. Choose 4:3 or 16:9 player
		// accordingly
	
	var dimensions = dj.context.video.getVideoDimensions(carousel_item);
	var width = dimensions.width;
	var height = dimensions.height;

	jQuery(carousel).css('width', '');
	jQuery(carousel).css('height', '');	
	
		// Set the aspect ratio of the carousel
		
	var aspect = width / height;
	
	if ( true || aspect > 1.4 ) {
		html = '<div id="video-carousel-container">';	
	} else {
		html = '<div id="video-carousel-container" class="standard">';
	}
	
	html += '<div id="video-carousel-item"></div>';
	html += '<p class="caption"><a href="/video/?video_id='+carousel_item.guid+'">'+carousel_item.name+' ('+splitTime(carousel_item.duration)+')</a></p>';

		// Display the 2x2 grid of extra videos

	//html += dj.context.video.displayCarouselList(0, 4);
	//html += '<div class="clearing"></div>';
	html += '</div>'; // video-carousel-container end
	
	jQuery(carousel).html(html);
		
		// Display the carousel player
		
	dj.context.video.showPlayer('video-carousel-item', carousel_item.id, carousel_item, width, height, false);
	
	jQuery(carousel).css('visibility', 'visible');
}


dj.context.video.showVideoCenterPage = function(pageNum)
{
	var pages = jQuery('div.video-page');
	var prevPageNum = dj.context.video.videoCenter.currentPage;
		
	dj.context.video.videoCenter.currentPage = pageNum;
	
	var prevPage = jQuery("#video-page-"+prevPageNum);
	var nextPage = jQuery("#video-page-"+pageNum);
	
		// Update the selection
	
	jQuery("li#pagenum-top-"+prevPageNum).removeClass();
	jQuery("li#pagenum-top-"+pageNum).addClass("selected");
	jQuery("li#pagenum-bottom-"+prevPageNum).removeClass();
	jQuery("li#pagenum-bottom-"+pageNum).addClass("selected");
	
		// Hide the old page and reveal the new page
		
	jQuery(prevPage).hide("fast");
	jQuery(nextPage).show("fast");

	return false;
}

dj.context.video.loadVideoCenter = function()
{
	var videoCenter = jQuery("#video-center");
	
	if ( jQuery(videoCenter).length == 0 ) return;

	if ( video_center_video_id ) {
		var video_id = video_center_video_id;
	} else {
		
		var video_links = [];
		var i = 0;
		jQuery.each(jQuery('.excerpt-image a.wsjdn-video'), function(i, v) {
			//if  ( video_links.length == 0 || video_links.indexOf(v.rel) == -1 ) {
				video_links.push(v.rel);
			//}
		});
		
		if ( video_links.length > 0 ) {
			var video_id = video_links[0];
			dj.context.video.moreVideos = video_links;
		}
	}
	
	jQuery('a.wsjdn-video').click(function() {
		var url = '/?atd_json=api-video/get_video_info.asp&fields=all&site=atd&guid=' + this.rel;

		jQuery.getJSON(url, function(data) {
			dj.context.video.soloVideos[video_id] = dj.context.video.newSoloVideo("video-center-player", video_id, data, "video");
		
			if ( dj.context.video.isWidescreen(data) ) {
				dj.context.video.showPlayer("video-center-player", video_id, data, 640, 360, true);
				//dj.context.video.showPlayer("video-center-player", video_id, data, 640, 434, true);
			} else {
				dj.context.video.showPlayer("video-center-player", video_id, data, 640, 360, true);
				//dj.context.video.showPlayer("video-center-player", video_id, data, 640, 434, true);
			}
	
				// Display the video title and caption
				
			dj.context.video.videoCenter.updateCaption(data);
			
			 jQuery('html,body').animate({scrollTop: jQuery("#video-center-player-container").offset().top},'slow');
			
		});
		return false;
	});

		// Handle the autoplay and play next video checkboxes
	
	jQuery('input#autoplay').click( function() {
		var val = ( this.checked ) ? 1 : 0;
		setCookie('atd_videocenter_autoplay', val);
		return true;
	});
	
	jQuery('input#continuous_play').click( function() {
		var val = ( this.checked ) ? 1 : 0;
		setCookie('atd_videocenter_continuous', val);
		return true;
	});
	
	if ( getCookie('atd_videocenter_autoplay') == 1 ) {
		jQuery('input#autoplay').attr('checked', true);
	} else {
		jQuery('input#autoplay').attr('checked', false);	
	}
	
	if ( getCookie('atd_videocenter_continuous') == 1 ) {
		jQuery('input#continuous_play').attr('checked', true);
	} else {
		jQuery('input#continuous_play').attr('checked', false);
	}
	
		// Get the JSON for the selected video

	var url = '/?atd_json=api-video/get_video_info.asp&fields=all&site=atd&guid=' + video_id;
	
	jQuery.getJSON(url, function(data) {
		dj.context.video.soloVideos[video_id] = dj.context.video.newSoloVideo("video-center-player", video_id, data, "video");

		dj.context.video.videoCenter.currentVideo = dj.context.video.soloVideos[video_id];
		
			// Get the dimensions of the microplayer to display
		
		if ( (video_center_video_id || jQuery('input#autoplay').attr('checked')) && (typeof(video_center_autoplay) == "undefined") ) {
			var autoplay = true;
		} else {
			var autoplay = false;
		}

		if ( dj.context.video.isWidescreen(data) ) {
			dj.context.video.showPlayer("video-center-player", video_id, data, 640, 360, autoplay);
		} else {
			dj.context.video.showPlayer("video-center-player", video_id, data, 640, 360, autoplay);
		}
		
			// Display the video title and caption
			
		dj.context.video.videoCenter.updateCaption(data);
	});
}

jQuery(document).ready(function() { dj.context.video.init(); });

	// Update the video center caption

dj.context.video.videoCenter.updateCaption = function(data) {
	if ( typeof(video_center_description) == "undefined" ) {
		var link = data.linkURL;
		var title = '<a href="' + link + '">' + data.name + '</a>';
		var description = data.description;

		var date = new Date(data.formattedCreationDate);
		var monthString = month[date.getMonth()]; // + 1;
		var day = date.getDate();
		var dateString = '<span class="byline">' + monthString + " " + day + ", " + date.getFullYear() + '</span>';

		jQuery('.conf-big-feature h2.title').html(title);
		jQuery('.conf-big-feature p').html(description + ' ' + dateString);

		if ( data.relatedLinkHref ) {
			jQuery('.conf-big-feature').append('<p style="text-align: right;"><a href="'+data.relatedLinkHref+'">Read More &raquo;</a></p>');
		}

			// Set the title tag
		
		if ( data.titletag != '' ) {
			document.title = data.titletag + " | Video | AllThingsD";
		} else {
			document.title = data.name + " | Video | AllThingsD";
		}
	}
}

dj.context.video.loadDynamicCarousel = function()
{
	var carousels = jQuery('.vc');
	var len = jQuery(carousels).length;
	var id, carousel, videos, video, video_link, video_player, guid, item, json, video_player_caption, video_player_item;
	var output = '';
	
	if ( len > 0 ) {
			
		for ( var i = 0; i < len; i ++ ) {
			carousel = carousels[i];
			id = carousel.id;

			videos = jQuery(carousel).children('div.vc-item-data');
			video_player = jQuery(carousel).children('div.vc-container')[0];
			video_player_item = ""+video_player.id+"-video";
			video_player_caption = ""+video_player.id+"-caption";

			if ( videos ) {

				for ( var j = 0; j < videos.length; j++ ) {
					video = videos[j];

					item = JSON.parse(jQuery(video).text());
					
						// Add video to the list of videos

					dj.context.video.soloVideos[item.id] = dj.context.video.newSoloVideo(video_player_item, item.id, item, "video_emb");
				
					var json = dj.context.video.soloVideos[item.id].jsonData;
					
						// Create the first video object
					
					if ( j == 0 ) {
						//dj.context.video.showDynamicCarouselItem(id, item.id, false);
					} 

					var k = 0;
					
						// Now display the thumbnails
					
					if ( k != 0 && k % 2 == 0 ) {
						output += '<div class="clearing"></div>' + "\n";
					}
					
					output += '<div class="vc-item">';

					output += '<a href="/video/?video_id='+item.id+'" title="'+item.name+'"><img src="'+item.thumbnailURL+'" alt="" width="150" height="84" /></a><br /><a href="/video/?video_id='+item.id+'" title="'+item.name+'">'+item.name+'</a>';
					output += '</div>' + "\n";					
				}
				
				if ( output != '' ) {
					var video_list = jQuery(carousel).children('div.vc-list');
					
					output += '<div class="clearing"></div>';
					jQuery(video_list).html(output);
					output = '';
				}
			}
		}
	}
}


dj.context.video.showDynamicCarouselItem = function(carousel_id, video_id, autoplay)
{
	var video = dj.context.video.soloVideos[video_id];
	
	if ( typeof(video) != "undefined" ) {

		var json = video.jsonData;
		
			// Get the IDs for the player and the caption

		var player_id = "" + carousel_id + "-video";
		var caption_id = "" + carousel_id + "-caption";

			// Get the dimensions of the video

		var dimensions = dj.context.video.getVideoDimensions(json);
		var width = dimensions.width;
		var height = dimensions.height;
		
			// Set the caption
		
		jQuery('#'+caption_id).html('<strong>Now Playing: </strong>'+json.name+' ('+splitTime(json.duration)+')</p>');
		
			// Display the proper video, either the Flash or MP4
		
		if ( dj.context.video.iPhoneCheck() ) {
			
			html = dj.context.video.createMobileLink(json, width, height, autoplay);
			jQuery('#'+player_id).html(html);
			
		} else {
			dj.context.video.showPlayer(player_id, json.id, json, width, height, autoplay)
		}
	}
}

jQuery(document).ready(function() {
	jQuery('.video-filters ul li a.video-cat-filter').click(function() {
		var url = "http://allthingsd.com/video/?catname=" + this.rel;
		window.location = url;
		return false;
	});
	jQuery('.video-filters ul li a.video-author-filter').click(function() {
		var url = "http://allthingsd.com/video/?by=" + this.rel;
		window.location = url;
		return false;
	});
});