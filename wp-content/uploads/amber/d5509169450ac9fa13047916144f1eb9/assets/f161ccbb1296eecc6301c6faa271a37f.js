$(window).load(function() {



	$('.aShadow').prepend('<div class=\"work_thumb_shadow\" style=\"width:'+ $('.aShadow').children("img").attr('width') +'px; height:'+ $('.aShadow').children("img").attr('height') +'px;\"></div>');
	
	

$('.aShadow').hover(
  	function () {
  		//alert($(this).children("img").attr('width'));
  		//alert(this.parentNode.id);
  		$(this).children('.work_thumb_shadow').fadeIn(300);
  		  	
  	},
  	function () {
   		$(this).children('.work_thumb_shadow').fadeOut(300);
  	}
);


function goAhover(){

$('.aOver').hover(
  	function () {

  		 $(this).animate({ backgroundColor: "#F2EFEF" }, 200);
  		  	
  	},
  	function () {
   		 $(this).animate({ backgroundColor: "#FFFFFF" }, 200);
  	}
);

}
setTimeout(goAhover,500);




});