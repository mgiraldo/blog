(function($){Drupal.behaviors.fitvids={attach:function(context,settings){try
{if(typeof $.fn.fitVids!=='undefined'){if(typeof settings.fitvids!=='undefined'){var selectors=['body'];var simplifymarkup=true;var custom_domains=null;if(typeof settings.fitvids.selectors!=='undefined'){selectors=settings.fitvids.selectors;}
if(typeof settings.fitvids.simplifymarkup!=='undefined'){simplifymarkup=settings.fitvids.simplifymarkup;}
if(settings.fitvids.custom_domains.length>0){custom_domains=settings.fitvids.custom_domains;}
if(simplifymarkup){if($(".media-youtube-outer-wrapper").length){$(".media-youtube-outer-wrapper").removeAttr("style");$(".media-youtube-preview-wrapper").removeAttr("style");$(".media-youtube-outer-wrapper").removeClass("media-youtube-outer-wrapper");$(".media-youtube-preview-wrapper").removeClass("media-youtube-preview-wrapper");}
if($(".media-vimeo-outer-wrapper").length){$(".media-vimeo-outer-wrapper").removeAttr("style");$(".media-vimeo-preview-wrapper").removeAttr("style");$(".media-vimeo-outer-wrapper").removeClass("media-vimeo-outer-wrapper");$(".media-vimeo-preview-wrapper").removeClass("media-vimeo-preview-wrapper");}}
for(var x=0;x<selectors.length;x++){if($(selectors[x]).length>0){$(selectors[x]).fitVids({customSelector:custom_domains});}}}}}
catch(e){window.console&&console.warn('Fitvids stopped with the following exception');window.console&&console.error(e);}}};}(jQuery));;(function($){Drupal.behaviors.spamspan={attach:function(context,settings){$("span.spamspan",context).each(function(index){if($('span.t',this).length){$('span.t',this).replaceWith('.');}
var _mail=($("span.u",this).text()+
"@"+
$("span.d",this).text()).replace(/\s+/g,'');var _mailto="mailto:"+_mail;if($('span.h',this).length){var _headerText=$("span.h",this).text().replace(/^ ?\((.*)\) ?$/,"$1");var _headers=$.map(_headerText.split(/, /),function(n,i){return(n.replace(/: /,"="));});var _headerstring=_headers.join('&');_mailto+=_headerstring?("?"+_headerstring):'';}
var _anchorContent=$("span.a",this).html();if(_anchorContent){_anchorContent=_anchorContent.replace(/^ ?\((.*)\) ?$/,"$1");}
var _attributes=$("span.e",this).html();var _tag="<a></a>";if(_attributes){_tag="<a "+_attributes.replace("<!--","").replace("-->","")+"></a>";}
$(this).after($(_tag).attr("href",_mailto).html(_anchorContent?_anchorContent:_mail).addClass("spamspan")).remove();});}};})(jQuery);;