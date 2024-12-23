//////////////Case Study Gallery






//////////////////// Work gallery

function pushIntoGal(img){
	
	images.push(img);

}
var newI = 0;
var oldI = 0;
var galInterval = 4000;


function initGallery(){
 //alert(divName);
	for(var i=0;i<images.length;i++){
		(function() {
			$("#dot_" + i).css("opacity", .2);
			var ii = i;
		
			$("#dot_" + i).click(function(){
				newI = ii;
				clearInterval(galInt);
				rotateGal();
				galInt = setInterval(rotateGal,galInterval);
				
			});
		})();
	}
	$("#dot_" + newI).css("opacity", 1);
	$(".news_thumb_n2").html(images[newI].name1);
	newI++;
	$("preLOADer img").attr("src", thumbString + images[newI].img + "");
	galInt = setInterval(rotateGal,galInterval);
}

function rotateGal(){
	
	for(var i=0;i<images.length;i++){
		$("#dot_" + i).css("opacity", .2);
	}

	$(divName).fadeOut(function(){
	
	$("#case_oneOf").html(" " + (newI + 1) + " / " + images.length);
	
	$("#dot_" + newI).css("opacity", 1);
	
	$(divName + " img").attr("src", thumbString + images[newI].img + "");
	
	$(".news_thumb_n2").html(images[newI].name1);
	
	newI++;
	
	if(newI == images.length){
		newI = 0;
	}
	$(divName).onImagesLoad({ 
	selectorCallback: fadeGalIn
});
	//$("#case_hero1").fadeIn();
	
	});
		
}
function fadeGalIn(){
	$(divName).fadeIn();
	$("preLOADer img").attr("src", thumbString + images[newI].img + "");
}


//////////////////////////////////////////
////HOME GAL
    

var images = [];

function pushIntoHomeGal(img){
	
	images.push(img);

}
var newSlide = 0;
var totalSlides = 0;
var f1;
var f2;
var f3;
var f4;
var f5;

function initHomeGallery(){
	totalSlides = images.length;
	for(var i=0;i<images.length;i++){
		(function() {
			if(i != 0){
				$("#dot_" + i).css("opacity", .2);
			}
			var ii = i;
		
			$("#dot_" + i).click(function(){
				newI = ii;
				clearTimeout(f1);
				clearTimeout(f2);
				clearTimeout(f3);
				clearTimeout(f4);
				clearTimeout(f5);
				$("#home_hero2").stop(true,false).fadeOut(400, function () {
					jumpSlide(newI);
				});
				$("#home_hero1_quote").stop(true,true).fadeOut(200, function () {
				});
				
				
				
			});
				
		})();
	}
	f4 = setTimeout(goFade1,1000);
}



function goFade1(){

	var qmar = 175 - $("#home_hero1_quote").height() / 2;
	$("#home_hero1_quote").css("margin-top", qmar + "px");
	
	$("#home_hero1_quote").fadeIn(2000, function () {
		clearTimeout(f1);
		clearTimeout(f2);
		clearTimeout(f3);
		clearTimeout(f4);
		clearTimeout(f5);
		f1 = setTimeout(function(){goFade2()},3000);
		f2 = setTimeout(function(){goFade3()},4500);
		f3 = setTimeout(function(){allFadeOut()},9500);
		f5 = setTimeout(function(){nextSlide()},10000);
  	 });  	
}

function goFade2(){
	$("#home_hero1_quote").fadeOut(2000, function () {});
}

function goFade3(){
	$("#home_hero2").fadeIn(2000, function () {
		$(this).click(function(){
			window.location = images[newSlide].url;
		});
	});
}

function allFadeOut(){
	$("#home_hero2").fadeOut(500, function () { });	
}

function nextSlide(){
	
	newSlide++;
	if(newSlide == totalSlides){
		newSlide = 0;
	}
	
	$("#home_hero2 img").attr("src", "/thumbs/1000x350/files/zc/" + images[newSlide].img + "");
	$("#home_hero1_quote").html("&#147;" + images[newSlide].desc + "&#148;");
	
	for(var i=0;i<images.length;i++){
		if(i != newSlide){
			$("#dot_" + i).css("opacity", .2);
		}else{
			$("#dot_" + i).css("opacity", 1.0);
		}
	}
	clearTimeout(f4);		
	f4 = setTimeout(goFade1,1000);
}
function jumpSlide(ii){
	
	newSlide = ii;
	
	$("#home_hero2 img").attr("src", "/thumbs/1000x350/files/zc/" + images[newSlide].img + "");
	$("#home_hero1_quote").html("&#147;" + images[newSlide].desc + "&#148;");
	
	for(var i=0;i<images.length;i++){
		if(i != newSlide){
			$("#dot_" + i).css("opacity", .2);
		}else{
			$("#dot_" + i).css("opacity", 1.0);
		}
	}
	clearTimeout(f4);		
	f4 = setTimeout(goFade1,1000);
}


////////////////////////
