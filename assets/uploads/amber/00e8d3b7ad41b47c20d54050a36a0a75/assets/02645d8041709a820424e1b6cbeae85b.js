/* jshint browser:true jquery:true devel:true*/
/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT / GPLv2 License.
*/
(function(w){

  // This fix addresses an iOS bug, so return early if the UA claims it's something else.
  var ua = navigator.userAgent;
  if( !( /iPhone|iPad|iPod/.test( navigator.platform ) && /OS [1-5]_[0-9_]* like Mac OS X/i.test(ua) && ua.indexOf( "AppleWebKit" ) > -1 ) ){
    return;
  }

    var doc = w.document;

    if( !doc.querySelector ){ return; }

    var meta = doc.querySelector( "meta[name=viewport]" ),
        initialContent = meta && meta.getAttribute( "content" ),
        disabledZoom = initialContent + ",maximum-scale=1",
        enabledZoom = initialContent + ",maximum-scale=10",
        enabled = true,
    x, y, z, aig;

    if( !meta ){ return; }

    function restoreZoom(){
        meta.setAttribute( "content", enabledZoom );
        enabled = true;
    }

    function disableZoom(){
        meta.setAttribute( "content", disabledZoom );
        enabled = false;
    }

    function checkTilt( e ){
    aig = e.accelerationIncludingGravity;
    x = Math.abs( aig.x );
    y = Math.abs( aig.y );
    z = Math.abs( aig.z );

    // If portrait orientation and in one of the danger zones
        if( (!w.orientation || w.orientation === 180) && ( x > 7 || ( ( z > 6 && y < 8 || z < 8 && y > 6 ) && x > 5 ) ) ){
      if( enabled ){
        disableZoom();
      }
        }
    else if( !enabled ){
      restoreZoom();
        }
    }

  w.addEventListener( "orientationchange", restoreZoom, false );
  w.addEventListener( "devicemotion", checkTilt, false );

})( this );

/*! Picturefill - Responsive Images that work today. (and mimic the proposed Picture element with divs). Author: Scott Jehl, Filament Group, 2012 | License: MIT/GPLv2 */

(function( w ){

  // Enable strict mode
  "use strict";

  w.picturefill = function() {
    var ps = w.document.getElementsByTagName( "div" );

    // Loop the pictures
    for( var i = 0, il = ps.length; i < il; i++ ){
      if( ps[ i ].getAttribute( "data-picture" ) !== null ){

        var sources = ps[ i ].getElementsByTagName( "div" ),
          matches = [];

        // See if which sources match
        for( var j = 0, jl = sources.length; j < jl; j++ ){
          var media = sources[ j ].getAttribute( "data-media" );
          // if there's no media specified, OR w.matchMedia is supported
          if( !media || ( w.matchMedia && w.matchMedia( media ).matches ) ){
            matches.push( sources[ j ] );
          }
        }

      // Find any existing img element in the picture element
      var picImg = ps[ i ].getElementsByTagName( "img" )[ 0 ];

      if( matches.length ){
        if( !picImg ){
          picImg = w.document.createElement( "img" );
          picImg.alt = ps[ i ].getAttribute( "data-alt" );
          ps[ i ].appendChild( picImg );
        }

        picImg.src =  matches.pop().getAttribute( "data-src" );
      }
      else if( picImg ){
        ps[ i ].removeChild( picImg );
      }
    }
    }
  };

  // Run on resize and domready (w.load as a fallback)
  if( w.addEventListener ){
    w.addEventListener( "resize", w.picturefill, false );
    w.addEventListener( "DOMContentLoaded", function(){
      w.picturefill();
      // Run once only
      w.removeEventListener( "load", w.picturefill, false );
    }, false );
    w.addEventListener( "load", w.picturefill, false );
  }
  else if( w.attachEvent ){
    w.attachEvent( "onload", w.picturefill );
  }

}( this ));


/* jQuery.miniTabs */
(function($){
  $.fn.miniTabs = function(){

    return $(this).each(function(){

      var navLinks = $(this).children('ul').find('a'),
          tabs = $(this).children('div');

      function showTab(idx) {
        // Reset navigation and add active.
        navLinks.removeClass('ui-state-active')
                .eq(idx)
                .addClass('ui-state-active');

        // Reset tabs and show active.
        tabs.hide()
            .eq(idx)
            .show();
      }

      function init() {
        showTab(0);
      }

      navLinks.on('click', function(e){

        var index = navLinks.index($(this));

        e.preventDefault();

        if(tabs.eq(index).is(':visible')) {

          return;

        } else {

          // Activate tab, show current tab.
          showTab(index);
        }

      });

      init();
    });

  };

})(jQuery);

var owlAutoplay = true;

$(document).ready(function(){
  $('.tabs').miniTabs();
  $('.post').fitVids();

  owlFontSlider = $(".fonts-slideshow");

  // Only trigger slideshow if more than one image
  if ( owlFontSlider.find('img').size() > 1 ) {

    owlFontSlider.owlCarousel({
      items: 1,
      mouseDrag: false,
      animateOut: 'fadeOut',
      loop: true
    });

    // Autoplay hack
    owlInterval = setInterval(function() {
      if (owlAutoplay) {
        owlFontSlider.trigger('next.owl.carousel');
      } else {
        clearInterval(owlInterval);
      }
    }, owlFontSpeed);

    // Stop carousel on drag
    owlFontSlider.on('drag.owl.carousel', function(e) {
      owlAutoplay = false;
    });

    // stop carousel on dot click
    owlFontSlider.on('click', '.owl-dot', function(e) {
      owlAutoplay = false;
    });

  }
});