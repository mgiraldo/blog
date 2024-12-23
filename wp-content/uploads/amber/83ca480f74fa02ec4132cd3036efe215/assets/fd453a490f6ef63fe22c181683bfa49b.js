(function($){$(document).ready(function(){globalgamejam_themeStickyFooter();});Drupal.theme.prototype.globalgamejam_themeGameListingFilters=function(){var exposed_form;if($('.views-exposed-form-games-listing-page').length){exposed_form=$('.views-exposed-form-games-listing-page');}
else{exposed_form=$('.views-exposed-form-games-solr-page');}
if(exposed_form.length){exposed_form.addClass('not-collapsible-filter');$('<fieldset></fieldset>').addClass('collapsible form-wrapper collapsed collapsible-filter').appendTo('.view-filters').append('<legend><span class="fieldset-legend"><a class="fieldset-title" href="#"><span class="fieldset-legend-prefix element-invisible">Hide</span> Filter</a><span class="summary"></span></span></legend>').append($('<div class="fieldset-wrapper" style="overflow: hidden;"></div>').append(exposed_form.clone().removeClass('not-collapsible-filter')));}
else{console.log('Could not find exposed form');}};Drupal.behaviors.globalgamejam_themeLoginShowLink={attach:function(context,settings){$('.l-user-links h2.block__title',context).once('user-links-show',function(){var loginText=$(this).text()
var link=$('<a></a>').attr('href','/user').text(loginText).click(function(event){event.preventDefault();$('.l-user-links .block .block__content').slideToggle();});$(this).html(link);});if($('.l-user-links .error').length>0&&$('.l-user-links .block .block__content').not(':visible')){$('.l-user-links .block .block__content').slideDown();}}};Drupal.behaviors.globalgamejam_themeStickyFooterBreakpoint={attach:function(context,settings){$('body').bind('responsivelayout',function(evt,newBreakpoint){Drupal.behaviors.globalgamejam_themeStickyFooter.attach(context,settings);});}};Drupal.behaviors.globalgamejam_themeStickyFooter={attach:function(context,settings){globalgamejam_themeStickyFooter();var omegaSettings=settings.omega||{};var mediaQueries=omegaSettings.mediaQueries||{};var currentBreakpoint;$.each(mediaQueries,function(index,value){var mql=window.matchMedia(value);if(mql.matches==true){currentBreakpoint=index;}});switch(currentBreakpoint){case 'wide':case 'normal':case 'narrow':$(window).off('resize',globalgamejam_themeStickyFooter);break;case 'mobile':$(window).on('resize',globalgamejam_themeStickyFooter);break;}}};Drupal.behaviors.omegaMediaQueryClasses.handler=function(name,mql){$.event.trigger('responsivelayout',{current:name});if(mql.matches){$('body').removeClass(name+'-inactive').addClass(name+'-active');}
else{$('body').removeClass(name+'-active').addClass(name+'-inactive');}}
Drupal.behaviors.highlightFormFields={attach:function(context,settings){$('input').bind('blur',function(evt){if($(this).val().length>0){$(this).addClass('filled-field');}
else{$(this).removeClass('filled-field');}});$('input[type="checkbox"]').bind('change',function(evt){if($(this).is(':checked')){$('label[for="'+$(this).attr('id')+'"]').addClass('filled-field');}
else{$('label[for="'+$(this).attr('id')+'"]').removeClass('filled-field');}});}}
Drupal.behaviors.rearrangePasswordFields={attach:function(context,settings){$('.form-item-pass-pass2 > div.password-confirm').insertAfter('input.password-confirm').addClass('password-match');$('.form-item-pass-pass1 > div.password-strength').insertAfter('input.password-field');}}
Drupal.behaviors.globalgamejam_sponsorCarouselBreakpoint={attach:function(context,settings){$('body').bind('responsivelayout',function(evt,newBreakpoint){Drupal.behaviors.globalgamejam_sponsorCarousel.attach(context,settings);});}};Drupal.behaviors.globalgamejam_sponsorCarousel={attach:function(context,settings){var omegaSettings=settings.omega||{};var mediaQueries=omegaSettings.mediaQueries||{};var currentBreakpoint;$.each(mediaQueries,function(index,value){var mql=window.matchMedia(value);if(mql.matches==true){currentBreakpoint=index;}});var container=$('.block--views-sponsors-additional-block .view-display-id-additional_block .view-content > .item-list');var contents=container.html();var selector='ul > li.views-row',animation='slide',slideshowSpeed=5000,reverse=false,pauseOnHover=true,setFooter=function(){globalgamejam_themeStickyFooter();};switch(currentBreakpoint){case 'wide':$('.block--views-sponsors-additional-block .view-display-id-additional_block .view-content',context).children('.item-list').remove().end().prepend('<div class="item-list"></div>').children('.item-list').html(contents).flexslider({itemWidth:164,itemMargin:27,selector:selector,animation:animation,slideshowSpeed:slideshowSpeed,reverse:reverse,pauseOnHover:pauseOnHover,start:setFooter});break;case 'normal':$('.block--views-sponsors-additional-block .view-display-id-additional_block .view-content',context).children('.item-list').remove().end().prepend('<div class="item-list"></div>').children('.item-list').html(contents).flexslider({itemWidth:128,itemMargin:21,selector:selector,animation:animation,slideshowSpeed:slideshowSpeed,reverse:reverse,pauseOnHover:pauseOnHover,start:setFooter});break;case 'narrow':$('.block--views-sponsors-additional-block .view-display-id-additional_block .view-content',context).children('.item-list').remove().end().prepend('<div class="item-list"></div>').children('.item-list').html(contents).flexslider({itemWidth:152,itemMargin:25,selector:selector,animation:animation,slideshowSpeed:slideshowSpeed,reverse:reverse,pauseOnHover:pauseOnHover,start:setFooter});break;case 'mobile':$('.block--views-sponsors-additional-block .view-display-id-additional_block .view-content',context).children('.item-list').remove().end().prepend('<div class="item-list"></div>').children('.item-list').html(contents).flexslider({itemWidth:129,itemMargin:21,selector:selector,animation:animation,slideshowSpeed:slideshowSpeed,reverse:reverse,pauseOnHover:pauseOnHover,start:setFooter,before:setFooter});break;}}};var globalgamejam_themeStickyFooter=function(){$('.l-content').height('inherit');var winHeight=$(window).height();var footerHeight=$('.l-footer').height();var mainMarginTop=$('.l-main').offset().top;var paddingBottom=parseInt(footerHeight);$('.l-main').css('padding-bottom',paddingBottom);var winHeight=$(window).height();var footerHeight=$('.l-footer').height();var contentTop=$('.l-content').offset().top;var whiteContent=winHeight-footerHeight-contentTop-mainMarginTop;if($('.l-content').height()<whiteContent){$('.l-content').height(whiteContent);}};Drupal.behaviors.globalgamejam_themeGameListingFilters={attach:function(context,settings){if(($('.view-id-games.view-display-id-listing_page').length>0&&$('.view-id-games.view-display-id-listing_page fieldset').length<1)||($('.view-id-games_solr.view-display-id-page').length>0&&$('.view-id-games_solr.view-display-id-page fieldset').length<1)){Drupal.theme('globalgamejam_themeGameListingFilters');Drupal.attachBehaviors();}}};})(jQuery);;