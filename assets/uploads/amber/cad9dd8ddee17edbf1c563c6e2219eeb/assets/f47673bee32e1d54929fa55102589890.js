if(bbc.fmtj.tracking===undefined){bbc.fmtj.utils.createObject("bbc.fmtj.tracking");bbc.fmtj.isReady=false;bbc.fmtj.ready=function(B){if(bbc.fmtj.isReady){B()}else{var A=window.onload;if(typeof window.onload!=="function"){window.onload=B}else{window.onload=function(){A();B()}}}};bbc.fmtj.ready(function(){bbc.fmtj.isReady=true});bbc.fmtj.tracking=function(){var E=[];var A=[];function C(I,F,H){var G=parseInt((Math.random()*10000)/100);if(G==100||G<10){G=99}return H+"?~RS~s~RS~News~RS~t~RS~"+F+"~RS~i~RS~0~RS~p~RS~0~RS~a~RS~0~RS~u~RS~0~RS~r~RS~0~RS~q~RS~"+I+"~RS~z~RS~"+G+"~RS~"}function B(F){var G=A[F];var H=G._stamp;window.clearTimeout(H);G=undefined;delete G}function D(K,G,J){var H=new Date().getTime();var I;A[H]=new Object({_imageElement:undefined,_stamp:0});if(document.getElementById){I=window.setTimeout(function(L){B(H)},30000)}A[H]._imageElement=new Image(1,1);A[H]._stamp=I;var F=C(K,G,J);bbc.fmtj.ready(function(){A[H]._imageElement.src=F})}return{createBug:function(I){var F=I.name;var G=I.dataParser;if(F===undefined){alert("No name specified for bug");return null}var H=(I.statsBase!==undefined)?I.statsBase:"http://stats.bbc.co.uk/o.gif";return{track:function(J){if(typeof G==="function"){J=G(J)}D(J,F,H)}}}}}()};