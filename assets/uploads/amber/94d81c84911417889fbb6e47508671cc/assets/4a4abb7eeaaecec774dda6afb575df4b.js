$(document).ready(function(){
  $('.detailslink a').click(function(e){
    if( !e.ctrlKey && !e.shiftKey ) {
      $(this).parent().parent().parent().find('.details').toggle();
      e.preventDefault();
      return false;
    }
    return true;
  });
});
